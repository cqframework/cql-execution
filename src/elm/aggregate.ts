import { Expression } from './expression';
import { typeIsArray, allTrue, anyTrue, removeNulls } from '../util/util';
import { doAddition, Quantity } from '../datatypes/datatypes';
import { Decimal } from '../datatypes/decimal';
import { Context } from '../runtime/context';
import { Exception } from '../datatypes/exception';
import { greaterThan, lessThan } from '../util/comparison';
import { build } from './builder';
import * as MathUtil from '../util/math';

function finalizeAggregateResult(result: any, firstItem: any) {
  if (result == null) {
    return null;
  }
  const finalized = MathUtil.finalizeNumericResult(result);
  const bounded = MathUtil.overflowsOrUnderflows(finalized) ? null : finalized;
  if (bounded && firstItem instanceof Quantity && !(bounded instanceof Quantity)) {
    return new Quantity(bounded, firstItem.unit);
  } else {
    return bounded;
  }
}

class AggregateExpression extends Expression {
  source: any;

  constructor(json: any) {
    super(json);
    this.source = build(json.source);
  }
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

    let sum;
    if (hasOnlyQuantities(items)) {
      // note doAddition is Quantity addition
      sum = items.reduce(doAddition);
    } else {
      if (hasDecimals(items)) {
        sum = sumOfDecimals(items.map(Decimal.from));
      } else {
        sum = items.reduce((x: any, y: any) => x + y);
      }
    }
    return finalizeAggregateResult(sum, items[0]);
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

    let decimals;
    if (hasOnlyQuantities(items)) {
      decimals = getValuesFromQuantities(items);
    } else {
      // return type is always Decimal, so just map everything to Decimals
      decimals = items.map(Decimal.from);
    }
    const sum = sumOfDecimals(decimals);
    const avg = finalizeAggregateResult(sum.divideBy(items.length), items[0]);

    return finalizeAggregateResult(avg, items[0]);
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

    let decimals;
    if (hasOnlyQuantities(items)) {
      decimals = getValuesFromQuantities(items);
    } else {
      // Note that the Median signature is Median(argument List<Decimal>) Decimal
      // because median on a list of even number of items takes the average of the 2 middle items
      // so we can treat all the input as decimals
      decimals = items.map(Decimal.from);
    }

    const sorted = [...decimals].sort((a, b) => a.compareTo(b));
    const middle = Math.floor(items.length / 2);
    const median =
      items.length % 2 === 1 ? sorted[middle] : sorted[middle - 1].add(sorted[middle]).divideBy(2);

    return finalizeAggregateResult(median, items[0]);
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
      const mode = this.mode(values);
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
    let values;
    if (hasOnlyQuantities(items)) {
      values = getValuesFromQuantities(items);
    } else {
      values = items.map(Decimal.from);
    }

    const stdDev = this.standardDeviation(values);
    return finalizeAggregateResult(stdDev, items[0]);
  }

  standardDeviation(list: Decimal[]) {
    const val = this.stats(list);
    if (val) {
      return val[this.type];
    }
  }

  stats(list: Decimal[]) {
    if (list.length === 1) {
      return {
        standard_variance: null,
        population_variance: Decimal.from(0),
        standard_deviation: null,
        population_deviation: Decimal.from(0)
      };
    }
    const sum = list.reduce((x, y) => x.add(y), Decimal.from(0));
    const mean = sum.divideBy(list.length);

    const sumOfSquares = list.reduce((total, value) => {
      const difference = value.subtract(mean);
      return total.add(difference.power(2));
    }, Decimal.from(0));

    const std_var = sumOfSquares.divideBy(list.length - 1);
    const pop_var = sumOfSquares.divideBy(list.length);
    const std_dev = std_var.sqrt();
    const pop_dev = pop_var.sqrt();
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

    let product;
    if (hasOnlyQuantities(items)) {
      product = productOfDecimals(getValuesFromQuantities(items));
    } else if (hasDecimals(items)) {
      product = productOfDecimals(items.map(Decimal.from));
    } else {
      product = items.reduce((x: number, y: number) => x * y);
    }

    return finalizeAggregateResult(product, items[0]);
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

    let decimals;
    if (hasOnlyQuantities(items)) {
      decimals = getValuesFromQuantities(items);
    } else {
      decimals = items.map(Decimal.from);
    }
    const product = productOfDecimals(decimals);
    const oneOverLength = Decimal.from(1).divideBy(items.length);
    const geoMean = product.power(oneOverLength);
    return finalizeAggregateResult(geoMean, items[0]);
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

function hasDecimals(values: any[]) {
  return values.some(value => value && value.isDecimal);
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

function sumOfDecimals(values: Decimal[]) {
  return values.reduce((sum, value) => sum.add(value));
}

function productOfDecimals(values: Decimal[]) {
  return values.reduce((product, value) => product.multiplyBy(value));
}
