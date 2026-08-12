import { Expression } from './expression';
import { typeIsArray, allTrue, anyTrue, removeNulls, numerical_sort } from '../util/util';
import { Quantity } from '../datatypes/datatypes';
import { Decimal } from '../datatypes/decimal';
import { Context } from '../runtime/context';
import { Exception } from '../datatypes/exception';
import { greaterThan, lessThan } from '../util/comparison';
import { build } from './builder';
import { overflowsOrUnderflows } from '../util/math';
import { ELM_DECIMAL_TYPE } from '../util/elmTypes';

class AggregateExpression extends Expression {
  source: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
  }
}

function hasDecimals(values: any[]) {
  return values.some(value => value && value.isDecimal);
}

function isDecimal(value: any): value is Decimal {
  return value != null && value.isDecimal;
}

function numberValue(value: any) {
  return value && value.isDecimal ? value.toNumber() : value;
}

function sumDecimals(values: Decimal[]) {
  return values.reduce((sum, value) => sum.add(value)).setScale(8, 'half-up');
}

function productDecimals(values: Decimal[]) {
  return values.reduce((product, value) => product.multiplyBy(value)).setScale(8, 'half-up');
}

function decimalResult(value: number, values: any[], resultTypeName?: string) {
  return hasDecimals(values) || resultTypeName === ELM_DECIMAL_TYPE
    ? Decimal.from(value).setScale(8, 'half-up')
    : value;
}

export class Count extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const items = await this.source.execute(ctx);
    if (typeIsArray(items)) {
      return removeNulls(items).length;
    }
    return 0;
  }
}

export class Sum extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    let items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const sum = sumDecimals(getValuesFromQuantities(items));
      return overflowsOrUnderflows(sum, ELM_DECIMAL_TYPE) ? null : new Quantity(sum, items[0].unit);
    } else {
      const sum = hasDecimals(items)
        ? sumDecimals(items.map(Decimal.from))
        : items.reduce((x: any, y: any) => x + y);
      return overflowsOrUnderflows(sum, this.resultTypeName) ? null : sum;
    }
  }
}

export class Min extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const list = await this.source.execute(ctx);
    if (list == null) {
      return null;
    }
    const listWithoutNulls = removeNulls(list);

    // Check for incompatible units and return null. We don't want to convert
    // the units for Min/Max, so we throw away the converted array if it succeeds
    try {
      processQuantities(list);
    } catch {
      return null;
    }

    if (listWithoutNulls.length === 0) {
      return null;
    }
    // We assume the list is an array of all the same type.
    let minimum = listWithoutNulls[0];
    for (const element of listWithoutNulls) {
      if (lessThan(element, minimum)) {
        minimum = element;
      }
    }
    return minimum;
  }
}

export class Max extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const items = await this.source.execute(ctx);
    if (items == null) {
      return null;
    }
    const listWithoutNulls = removeNulls(items);

    // Check for incompatible units and return null. We don't want to convert
    // the units for Min/Max, so we throw away the converted array if it succeeds
    try {
      processQuantities(items);
    } catch {
      return null;
    }

    if (listWithoutNulls.length === 0) {
      return null;
    }
    // We assume the list is an array of all the same type.
    let maximum = listWithoutNulls[0];
    for (const element of listWithoutNulls) {
      if (greaterThan(element, maximum)) {
        maximum = element;
      }
    }
    return maximum;
  }
}

export class Avg extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    let items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const sum = sumDecimals(getValuesFromQuantities(items));
      return new Quantity(sum.divideBy(items.length).setScale(8, 'half-up'), items[0].unit);
    } else {
      if (hasDecimals(items)) {
        return sumDecimals(items.map(Decimal.from)).divideBy(items.length).setScale(8, 'half-up');
      }
      const sum = items.reduce((x: number, y: number) => x + y);
      return decimalResult(sum / items.length, items, this.resultTypeName);
    }
  }
}

export class Median extends AggregateExpression {
  constructor(json: number) {
    super(json);
  }

  async exec(ctx: Context) {
    let items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }
    if (items.length === 0) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch {
      return null;
    }

    if (!hasOnlyQuantities(items)) {
      return hasDecimals(items)
        ? medianOfDecimals(items.map(Decimal.from))
        : decimalResult(medianOfNumbers(items), items, this.resultTypeName);
    }

    const median = medianOfDecimals(getValuesFromQuantities(items));
    return new Quantity(median, items[0].unit);
  }
}

export class Mode extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }
    if (items.length === 0) {
      return null;
    }

    let filtered;
    try {
      filtered = processQuantities(items);
    } catch {
      return null;
    }

    if (hasOnlyQuantities(filtered)) {
      const values = getValuesFromQuantities(filtered);
      let mode = this.mode(values);
      if (mode.length === 1) {
        return new Quantity(mode[0], items[0].unit);
      } else {
        return mode.map(m => new Quantity(m, items[0].unit));
      }
    } else {
      const mode = this.mode(filtered);
      if (mode.length === 1) {
        return mode[0];
      } else {
        return mode;
      }
    }
  }

  mode(arr: any[]) {
    let max = 0;
    const counts: any = {};
    let results: any[] = [];
    for (const elem of arr) {
      const cnt = (counts[elem] = (counts[elem] != null ? counts[elem] : 0) + 1);
      if (cnt === max && !results.includes(elem)) {
        results.push(elem);
      } else if (cnt > max) {
        results = [elem];
        max = cnt;
      }
    }
    return results;
  }
}

type StatisticType =
  'standard_deviation' | 'population_deviation' | 'standard_variance' | 'population_variance';

export class StdDev extends AggregateExpression {
  // TODO: This should be a derived class of an abstract base class 'Statistic'
  // rather than the base class
  type: StatisticType;

  constructor(json: any) {
    super(json);
    this.type = 'standard_deviation';
  }

  async exec(ctx: Context) {
    let items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items).map(numberValue);
      const stdDev = this.standardDeviation(values);
      return new Quantity(stdDev, items[0].unit);
    } else {
      const standardDeviation = this.standardDeviation(items.map(numberValue));
      return standardDeviation == null
        ? null
        : decimalResult(standardDeviation, items, this.resultTypeName);
    }
  }

  standardDeviation(list: any[]) {
    const val = this.stats(list);
    if (val) {
      return val[this.type];
    }
  }

  stats(list: any[]) {
    const sum = list.reduce((x, y) => x + y);
    const mean = sum / list.length;
    let sumOfSquares = 0;

    for (const sq of list) {
      sumOfSquares += Math.pow(sq - mean, 2);
    }

    const std_var = (1 / (list.length - 1)) * sumOfSquares;
    const pop_var = (1 / list.length) * sumOfSquares;
    const std_dev = Math.sqrt(std_var);
    const pop_dev = Math.sqrt(pop_var);
    return {
      standard_variance: std_var,
      population_variance: pop_var,
      standard_deviation: std_dev,
      population_deviation: pop_dev
    };
  }
}

export class Product extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    let items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch {
      return null;
    }
    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const product = productDecimals(getValuesFromQuantities(items));
      // Units are not multiplied for the geometric product
      return overflowsOrUnderflows(product, ELM_DECIMAL_TYPE)
        ? null
        : new Quantity(product, items[0].unit);
    } else {
      const product = hasDecimals(items)
        ? productDecimals(items.map(Decimal.from))
        : items.reduce((x: number, y: number) => x * y);
      const result = isDecimal(product) ? product : decimalResult(product, items, this.resultTypeName);
      return overflowsOrUnderflows(result, this.resultTypeName) ? null : result;
    }
  }
}

export class GeometricMean extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    let items = await this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const product = productDecimals(getValuesFromQuantities(items));
      const geoMean = product.power(1.0 / items.length).setScale(8, 'half-up');
      return new Quantity(geoMean, items[0].unit);
    } else {
      if (hasDecimals(items)) {
        return productDecimals(items.map(Decimal.from))
          .power(1.0 / items.length)
          .setScale(8, 'half-up');
      }
      const product = items.reduce((x: number, y: number) => x * y);
      return decimalResult(Math.pow(product, 1.0 / items.length), items, this.resultTypeName);
    }
  }
}

export class PopulationStdDev extends StdDev {
  constructor(json: any) {
    super(json);
    this.type = 'population_deviation';
  }
}

export class Variance extends StdDev {
  constructor(json: any) {
    super(json);
    this.type = 'standard_variance';
  }
}

export class PopulationVariance extends StdDev {
  constructor(json: any) {
    super(json);
    this.type = 'population_variance';
  }
}

export class AllTrue extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const items = await this.source.execute(ctx);
    if (items == null) {
      return true;
    }
    return allTrue(removeNulls(items));
  }
}

export class AnyTrue extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  async exec(ctx: Context) {
    const items = await this.source.execute(ctx);
    if (items == null) {
      return false;
    }
    return anyTrue(items);
  }
}

function processQuantities(values: any[]) {
  const items = removeNulls(values);
  if (hasOnlyQuantities(items)) {
    return convertAllUnits(items);
  } else if (hasSomeQuantities(items)) {
    throw new Exception(
      'Cannot perform aggregate operations on mixed values of Quantities and non Quantities'
    );
  } else {
    return items;
  }
}

function getValuesFromQuantities(quantities: Quantity[]): Decimal[] {
  return quantities.map(quantity => quantity.value);
}

function hasOnlyQuantities(arr: any[]) {
  return arr.every(x => x.isQuantity);
}

function hasSomeQuantities(arr: any[]) {
  return arr.some(x => x.isQuantity);
}

function convertAllUnits(arr: any[]) {
  // convert all quantities in array to match the unit of the first item
  return arr.map(q => q.convertUnit(arr[0].unit));
}

function medianOfNumbers(numbers: number[]) {
  const items = numerical_sort(numbers, 'asc');
  if (items.length % 2 === 1) {
    // Odd number of items
    return items[(items.length - 1) / 2];
  } else {
    // Even number of items
    return (items[items.length / 2 - 1] + items[items.length / 2]) / 2;
  }
}

function medianOfDecimals(decimals: Decimal[]) {
  const items = [...decimals].sort((a, b) => a.compareTo(b));
  const middle = Math.floor(items.length / 2);
  return items.length % 2 === 1
    ? items[middle]
    : items[middle - 1].add(items[middle]).divideBy(2).setScale(8, 'half-up');
}
