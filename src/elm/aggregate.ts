import { Expression } from './expression';
import { typeIsArray, allTrue, anyTrue, removeNulls, numerical_sort } from '../util/util';
import { Quantity } from '../datatypes/datatypes';
import { Context } from '../runtime/context';
import { Exception } from '../datatypes/exception';
import { greaterThan, lessThan } from '../util/comparison';
import { build } from './builder';

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

  exec(ctx: Context) {
    const items = this.source.execute(ctx);
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

  exec(ctx: Context) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const sum = values.reduce((x, y) => x + y);
      return new Quantity(sum, items[0].unit);
    } else {
      return items.reduce((x: number, y: number) => x + y);
    }
  }
}

export class Min extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const list = this.source.execute(ctx);
    if (list == null) {
      return null;
    }
    const listWithoutNulls = removeNulls(list);

    // Check for incompatible units and return null. We don't want to convert
    // the units for Min/Max, so we throw away the converted array if it succeeds
    try {
      processQuantities(list);
    } catch (e) {
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

  exec(ctx: Context) {
    const items = this.source.execute(ctx);
    if (items == null) {
      return null;
    }
    const listWithoutNulls = removeNulls(items);

    // Check for incompatible units and return null. We don't want to convert
    // the units for Min/Max, so we throw away the converted array if it succeeds
    try {
      processQuantities(items);
    } catch (e) {
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

  exec(ctx: Context) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const sum = values.reduce((x, y) => x + y);
      return new Quantity(sum / values.length, items[0].unit);
    } else {
      const sum = items.reduce((x: number, y: number) => x + y);
      return sum / items.length;
    }
  }
}

export class Median extends AggregateExpression {
  constructor(json: number) {
    super(json);
  }

  exec(ctx: Context) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }
    if (items.length === 0) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (!hasOnlyQuantities(items)) {
      return medianOfNumbers(items);
    }

    const values = getValuesFromQuantities(items);
    const median = medianOfNumbers(values);
    return new Quantity(median, items[0].unit);
  }
}

export class Mode extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }
    if (items.length === 0) {
      return null;
    }

    let filtered;
    try {
      filtered = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (hasOnlyQuantities(filtered)) {
      const values = getValuesFromQuantities(filtered);
      let mode = this.mode(values);
      if (mode.length === 1) {
        mode = mode[0];
      }
      return new Quantity(mode, items[0].unit);
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
  | 'standard_deviation'
  | 'population_deviation'
  | 'standard_variance'
  | 'population_variance';

export class StdDev extends AggregateExpression {
  // TODO: This should be a derived class of an abstract base class 'Statistic'
  // rather than the base class
  type: StatisticType;

  constructor(json: any) {
    super(json);
    this.type = 'standard_deviation';
  }

  exec(ctx: Context) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const stdDev = this.standardDeviation(values);
      return new Quantity(stdDev, items[0].unit);
    } else {
      return this.standardDeviation(items);
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

  exec(ctx: Context) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }
    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const product = values.reduce((x, y) => x * y);
      // Units are not multiplied for the geometric product
      return new Quantity(product, items[0].unit);
    } else {
      return items.reduce((x: number, y: number) => x * y);
    }
  }
}

export class GeometricMean extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (items.length === 0) {
      return null;
    }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const product = values.reduce((x, y) => x * y);
      const geoMean = Math.pow(product, 1.0 / items.length);
      return new Quantity(geoMean, items[0].unit);
    } else {
      const product = items.reduce((x: number, y: number) => x * y);
      return Math.pow(product, 1.0 / items.length);
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

  exec(ctx: Context) {
    const items = this.source.execute(ctx);
    return allTrue(removeNulls(items));
  }
}

export class AnyTrue extends AggregateExpression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const items = this.source.execute(ctx);
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

function getValuesFromQuantities(quantities: Quantity[]): number[] {
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
