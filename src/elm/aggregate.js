/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let AllTrue, AnyTrue, Avg, Count, GeometricMean, Max, Median, Min, Mode, PopulationStdDev, PopulationVariance, Product, StdDev, Sum, Variance;
const { Expression } = require('./expression');
const { typeIsArray , allTrue, anyTrue, removeNulls, numerical_sort} = require('../util/util');
const { build } = require('./builder');
const { Exception } = require('../datatypes/exception');
const { greaterThan, lessThan } = require('../util/comparison');
const { Quantity, doAddition, doMultiplication } = require('../datatypes/quantity');

class AggregateExpression extends Expression {
  constructor(json) {
    super(...arguments);
    this.source = build(json.source);
  }
}

module.exports.Count = (Count = class Count extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }
    return removeNulls(items).length;
  }
});

module.exports.Sum = (Sum = class Sum extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (!(items.length > 0)) { return null; }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const sum = values.reduce((x, y) => x + y);
      return new Quantity(sum, items[0].unit);
    } else {
      return items.reduce((x, y) => x + y);
    }
  }
});

module.exports.Min = (Min = class Min extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const list = this.source.execute(ctx);
    if (list == null) { return null; }
    const listWithoutNulls = removeNulls(list);

    // Check for incompatible units and return null. We don't want to convert
    // the units for Min/Max, so we throw away the converted array if it succeeds
    try {
      processQuantities(list);
    } catch (e) {
      return null;
    }

    if (!(listWithoutNulls.length > 0)) { return null; }
    // We assume the list is an array of all the same type.
    let minimum = listWithoutNulls[0];
    for (let element of listWithoutNulls) {
      if (lessThan(element, minimum)) { minimum = element; }
    }
    return minimum;
  }
});

module.exports.Max = (Max = class Max extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    if (items == null) { return null; }
    const listWithoutNulls = removeNulls(items);

    // Check for incompatible units and return null. We don't want to convert
    // the units for Min/Max, so we throw away the converted array if it succeeds
    try {
      processQuantities(items);
    } catch (e) {
      return null;
    }

    if (!(listWithoutNulls.length > 0)) { return null; }
    // We assume the list is an array of all the same type.
    let maximum = listWithoutNulls[0];
    for (let element of listWithoutNulls) {
      if (greaterThan(element, maximum)) { maximum = element; }
    }
    return maximum;
  }
});

module.exports.Avg = (Avg = class Avg extends  AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let sum;
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (items.length === 0) { return null; }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      sum = values.reduce((x, y) => x + y);
      return new Quantity(sum / values.length, items[0].unit);
    } else {
      sum = items.reduce((x, y) => x + y);
      return sum / items.length;
    }
  }
});

module.exports.Median = (Median = class Median extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }
    if (!(items.length > 0)) { return null; }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (!hasOnlyQuantities(items)) { return medianOfNumbers(items); }

    const values = getValuesFromQuantities(items);
    const median = medianOfNumbers(values);
    return new Quantity(median, items[0].unit);
  }
});


module.exports.Mode = (Mode = class Mode extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let filtered, mode;
    const items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }
    if (!(items.length > 0)) { return null; }

    try {
      filtered = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (hasOnlyQuantities(filtered)) {
      const values = getValuesFromQuantities(filtered);
      mode = this.mode(values);
      if (mode.length === 1) {
        mode = mode[0];
      }
      return new Quantity(mode, items[0].unit);
    } else {
      mode = this.mode(filtered);
      if (mode.length === 1) { return mode[0]; } else { return mode; }
    }
  }

  mode(arr) {
    let max = 0;
    const counts = {};
    let results = [];
    for (let elem of arr) {
      const cnt = (counts[elem] = (counts[elem] != null ? counts[elem] : 0) + 1);
      if ((cnt === max) && !results.includes(elem)) {
        results.push(elem);
      } else if (cnt > max) {
        results = [elem];
        max = cnt;
      }
    }
    return results;
  }
});


module.exports.StdDev = (StdDev = class StdDev extends AggregateExpression {
  // TODO: This should be a derived class of an abstract base class 'Statistic'
  // rather than the base class

  constructor(json) {
    super(...arguments);
    this.type = 'standard_deviation';
  }

  exec(ctx) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }

    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }

    if (!(items.length > 0)) { return null; }

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
    if (val) { return val[this.type]; }
  }

  stats(list) {
    const sum = list.reduce((x, y) => x+y);
    const mean = sum / list.length;
    let sumOfSquares = 0;

    for (let sq of list) {
      sumOfSquares += Math.pow((sq - mean),2);
    }

    const std_var = (1/list.length) * sumOfSquares;
    const pop_var = (1/(list.length-1)) * sumOfSquares;
    const std_dev = Math.sqrt(std_var);
    const pop_dev = Math.sqrt(pop_var);
    return {standard_variance: std_var, population_variance: pop_var, standard_deviation: std_dev, population_deviation: pop_dev};
  }
});

module.exports.Product = (Product = class Product extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }
    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }
    if (!(items.length > 0)) { return null; }

    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      const product = values.reduce((x, y) => x * y);
      // Units are not multiplied for the geometric product
      return new Quantity(product, items[0].unit);
    } else {
      return items.reduce((x, y) => x * y);
    }
  }
});

module.exports.GeometricMean = (GeometricMean = class GeometricMean extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    let product;
    let items = this.source.execute(ctx);
    if (!typeIsArray(items)) { return null; }
    try {
      items = processQuantities(items);
    } catch (e) {
      return null;
    }
    if (!(items.length > 0)) { return null; }
    if (hasOnlyQuantities(items)) {
      const values = getValuesFromQuantities(items);
      product = values.reduce((x, y) => x * y);
      const geoMean = Math.pow(product, 1.0 / items.length);
      return new Quantity(geoMean, items[0].unit);
    } else {
      product = items.reduce((x, y) => x * y);
      return Math.pow(product, 1.0 / items.length);
    }
  }
});

module.exports.PopulationStdDev = (PopulationStdDev = class PopulationStdDev extends StdDev {
  constructor(json) {
    super(...arguments);
    this.type = 'population_deviation';
  }
});

module.exports.Variance = (Variance = class Variance extends  StdDev {
  constructor(json) {
    super(...arguments);
    this.type = 'standard_variance';
  }
});

module.exports.PopulationVariance = (PopulationVariance = class PopulationVariance extends  StdDev {
  constructor(json) {
    super(...arguments);
    this.type = 'population_variance';
  }
});

module.exports.AllTrue = (AllTrue = class AllTrue extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    return allTrue(items);
  }
});

module.exports.AnyTrue = (AnyTrue = class AnyTrue extends AggregateExpression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const items = this.source.execute(ctx);
    return anyTrue(items);
  }
});

var processQuantities = function(values) {
  values = removeNulls(values);
  if (hasOnlyQuantities(values)) {
    return values = convertAllUnits(values);
  } else if (hasSomeQuantities(values)) {
    throw new Exception('Cannot perform aggregate operations on mixed values of Quantities and non Quantities');
  } else {
    return values;
  }
};

var getValuesFromQuantities = quantities => quantities.map(quantity => quantity.value);

var hasOnlyQuantities = arr => arr.every(x => x.isQuantity);

var hasSomeQuantities = arr => arr.some(x => x.isQuantity);

var convertAllUnits = function(arr) {
  // convert all quantities in array to match the unit of the first item
  const converted = [];
  for (let quantity of arr) {
    converted.push(quantity.convertUnit(arr[0].unit));
  }

  return converted;
};

var medianOfNumbers = function(numbers) {
  numbers = numerical_sort(numbers, 'asc');
  if ((numbers.length % 2) === 1) {
    // Odd number of items
    return numbers[(numbers.length - 1) / 2];
  } else {
    // Even number of items
    return (numbers[(numbers.length / 2) - 1] + numbers[(numbers.length / 2)]) / 2;
  }
};
