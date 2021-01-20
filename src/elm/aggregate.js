const { Expression } = require('./expression');
const { typeIsArray, allTrue, anyTrue, removeNulls, numerical_sort } = require('../util/util');
const { build } = require('./builder');
const { Exception } = require('../datatypes/exception');
const { greaterThan, lessThan } = require('../util/comparison');
const { Quantity } = require('../datatypes/quantity');

class AggregateExpression extends Expression {
  constructor(json) {
    super(json);
    this.source = build(json.source);
  }
}

class Count extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    if (!typeIsArray(items)) {
      return null;
    }
    return removeNulls(items).length;
  }
}

class Sum extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
      return items.reduce((x, y) => x + y);
    }
  }
}

class Min extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
    for (let element of listWithoutNulls) {
      if (lessThan(element, minimum)) {
        minimum = element;
      }
    }
    return minimum;
  }
}

class Max extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
    for (let element of listWithoutNulls) {
      if (greaterThan(element, maximum)) {
        maximum = element;
      }
    }
    return maximum;
  }
}

class Avg extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
      const sum = items.reduce((x, y) => x + y);
      return sum / items.length;
    }
  }
}

class Median extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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

class Mode extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
      let mode = this.mode(filtered);
      if (mode.length === 1) {
        return mode[0];
      } else {
        return mode;
      }
    }
  }

  mode(arr) {
    let max = 0;
    const counts = {};
    let results = [];
    for (let elem of arr) {
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

class StdDev extends AggregateExpression {
  // TODO: This should be a derived class of an abstract base class 'Statistic'
  // rather than the base class

  constructor(json) {
    super(json);
    this.type = 'standard_deviation';
  }

  exec(ctx) {
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

  standardDeviation(list) {
    const val = this.stats(list);
    if (val) {
      return val[this.type];
    }
  }

  stats(list) {
    const sum = list.reduce((x, y) => x + y);
    const mean = sum / list.length;
    let sumOfSquares = 0;

    for (let sq of list) {
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

class Product extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
      return items.reduce((x, y) => x * y);
    }
  }
}

class GeometricMean extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
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
      const product = items.reduce((x, y) => x * y);
      return Math.pow(product, 1.0 / items.length);
    }
  }
}

class PopulationStdDev extends StdDev {
  constructor(json) {
    super(json);
    this.type = 'population_deviation';
  }
}

class Variance extends StdDev {
  constructor(json) {
    super(json);
    this.type = 'standard_variance';
  }
}

class PopulationVariance extends StdDev {
  constructor(json) {
    super(json);
    this.type = 'population_variance';
  }
}

class AllTrue extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    return allTrue(items);
  }
}

class AnyTrue extends AggregateExpression {
  constructor(json) {
    super(json);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    return anyTrue(items);
  }
}

function processQuantities(values) {
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

function getValuesFromQuantities(quantities) {
  return quantities.map(quantity => quantity.value);
}

function hasOnlyQuantities(arr) {
  return arr.every(x => x.isQuantity);
}

function hasSomeQuantities(arr) {
  return arr.some(x => x.isQuantity);
}

function convertAllUnits(arr) {
  // convert all quantities in array to match the unit of the first item
  return arr.map(q => q.convertUnit(arr[0].unit));
}

function medianOfNumbers(numbers) {
  const items = numerical_sort(numbers, 'asc');
  if (items.length % 2 === 1) {
    // Odd number of items
    return items[(items.length - 1) / 2];
  } else {
    // Even number of items
    return (items[items.length / 2 - 1] + items[items.length / 2]) / 2;
  }
}

module.exports = {
  Count,
  Sum,
  Min,
  Max,
  Avg,
  Median,
  Mode,
  StdDev,
  Product,
  GeometricMean,
  PopulationStdDev,
  Variance,
  PopulationVariance,
  AllTrue,
  AnyTrue
};
