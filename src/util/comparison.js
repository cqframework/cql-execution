/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let equals, equivalent;
const { DateTime } = require('../datatypes/datetime');
const { Uncertainty } = require('../datatypes/uncertainty');

const areNumbers = (a, b) => (typeof a === 'number') && (typeof b === 'number');

const areDateTimesOrQuantities = (a, b) => ((a != null ? a.isDateTime : undefined) && (b != null ? b.isDateTime : undefined)) ||
((a != null ? a.isDate : undefined) && (b != null ? b.isDate : undefined)) ||
((a != null ? a.isTime : undefined) && (b != null ? b.isTime : undefined)) ||
((a != null ? a.isQuantity : undefined) && (b != null ? b.isQuantity : undefined));

const isUncertainty = x => x instanceof Uncertainty;

module.exports.lessThan = function(a, b, precision) {
  switch (false) {
    case !areNumbers(a, b): return a < b;
    case !areDateTimesOrQuantities(a, b): return a.before(b, precision);
    case !isUncertainty(a): return a.lessThan(b);
    case !isUncertainty(b): return Uncertainty.from(a).lessThan(b);
    default: return null;
  }
};

module.exports.lessThanOrEquals = function(a, b, precision) {
  switch (false) {
    case !areNumbers(a, b): return a <= b;
    case !areDateTimesOrQuantities(a, b): return a.sameOrBefore(b, precision);
    case !isUncertainty(a): return a.lessThanOrEquals(b);
    case !isUncertainty(b): return Uncertainty.from(a).lessThanOrEquals(b);
    default: return null;
  }
};

module.exports.greaterThan = function(a, b, precision) {
  switch (false) {
    case !areNumbers(a, b): return a > b;
    case !areDateTimesOrQuantities(a, b): return a.after(b, precision);
    case !isUncertainty(a): return a.greaterThan(b);
    case !isUncertainty(b): return Uncertainty.from(a).greaterThan(b);
    default: return null;
  }
};

module.exports.greaterThanOrEquals = function(a, b, precision) {
  switch (false) {
    case !areNumbers(a, b): return a >= b;
    case !areDateTimesOrQuantities(a, b): return a.sameOrAfter(b, precision);
    case !isUncertainty(a): return a.greaterThanOrEquals(b);
    case !isUncertainty(b): return Uncertainty.from(a).greaterThanOrEquals(b);
    default: return null;
  }
};

module.exports.equivalent = (equivalent = function(a, b) {
  if ((a == null) && (b == null)) { return true; }
  if ((a == null) || (b == null)) { return false; }

  if (isCode(a)) { return codesAreEquivalent(a, b); }

  // Use overloaded 'equivalent' function if it is available
  if (typeof a.equivalent === 'function') { return a.equivalent(b); }

  const [aClass, bClass] = Array.from(getClassOfObjects(a, b));

  switch (aClass) {
    case '[object Array]':
      return compareEveryItemInArrays(a, b, equivalent);
      break;
    case '[object Object]':
      return compareObjects(a, b, equivalent);
      break;
    case '[object String]':
      // Make sure b is also a string
      if (bClass === '[object String]') {
        // String equivalence is case- and locale insensitive
        a = a.replace(/\s/g, ' ');
        b = b.replace(/\s/g, ' ');
        return (a.localeCompare(b, 'en', {sensitivity: 'base'})) === 0;
      }
      break;
  }

  return equals(a, b);
});

var isCode = object => object.hasMatch && (typeof object.hasMatch === 'function');

var codesAreEquivalent = (code1, code2) => code1.hasMatch(code2);

var getClassOfObjects = (object1, object2) => [object1, object2].map((obj) => ({}.toString.call(obj)));

var compareEveryItemInArrays = (array1, array2, comparisonFunction) => (array1.length === array2.length) && array1.every((item, i) => comparisonFunction(item, array2[i]));

var compareObjects = function(a, b, comparisonFunction) {
  if (!classesEqual(a, b)) { return false; }
  return deepCompareKeysAndValues(a, b, comparisonFunction);
};

var classesEqual = (object1, object2) => object2 instanceof object1.constructor && object1 instanceof object2.constructor;

var deepCompareKeysAndValues = function(a, b, comparisonFunction) {
  let finalComparisonResult;
  const aKeys = getKeysFromObject(a).sort();
  const bKeys = getKeysFromObject(b).sort();
  // Array.every() will only return true or false, so set a flag for if we should return null
  let shouldReturnNull = false;
  // Check if both arrays of keys are the same length and key names match
  if ((aKeys.length === bKeys.length) && aKeys.every((value, index) => value === bKeys[index])) {
    finalComparisonResult = aKeys.every(function(key) {
      // if both are null we should return true to satisfy ignoring empty values in tuples
      if ((a[key] == null) && (b[key] == null)) { return true; }
      const comparisonResult = comparisonFunction(a[key], b[key]);
      if (comparisonResult === null) { shouldReturnNull = true; }
      return comparisonResult;
    });
  } else {
    finalComparisonResult = false;
  }

  if (shouldReturnNull) { return null; }
  return finalComparisonResult;
};

var getKeysFromObject = function(object) {
  let key;
  const objectClass = {}.toString.call(object);
  return !isFunction(key) ? (() => {
    const result = [];
    for (key in object) {
      result.push(key);
    }
    return result;
  })() : undefined;
};

var isFunction = input => input instanceof Function || ({}.toString.call(input) === '[object Function]');

module.exports.equals = (equals = function(a, b) {
  // Handle null cases first: spec says if either is null, return null
  if ((a == null) || (b == null)) { return null; }

  // If one is a Quantity, use the Quantity equals function
  if (a != null ? a.isQuantity : undefined) { return a.equals(b); }

  // If one is a Ratio, use the ratio equals function
  if (a != null ? a.isRatio : undefined) { return a.equals(b); }

  // If one is an Uncertainty, convert the other to an Uncertainty
  if (a instanceof Uncertainty) { b = Uncertainty.from(b);
  } else if (b instanceof Uncertainty) { a = Uncertainty.from(a); }

  // Use overloaded 'equals' function if it is available
  if (typeof a.equals === 'function') { return a.equals(b); }

  // Return true of the objects are primitives and are strictly equal
  if (((typeof a === typeof b) && (typeof a === 'string')) || (typeof a === 'number') || (typeof a === 'boolean')) {
    return a === b;
  }

  // Return false if they are instances of different classes
  const [aClass, bClass] = Array.from(getClassOfObjects(a, b));
  if (aClass !== bClass) { return false; }

  switch (aClass) {
    case '[object Date]':
      // Compare the ms since epoch
      return a.getTime() === b.getTime();
      break;
    case '[object RegExp]':
      // Compare the components of the regular expression
      return ['source', 'global', 'ignoreCase', 'multiline'].every(p => a[p] === b[p]);
      break;
    case '[object Array]':
      if ((a.indexOf(null) >= 0) || (a.indexOf(undefined) >= 0) || (b.indexOf(null) >= 0) || (b.indexOf(undefined) >= 0)) { return null; }
      return compareEveryItemInArrays(a, b, equals);
      break;
    case '[object Object]':
      return compareObjects(a, b, equals);
      break;
    case '[object Function]':
      return a.toString() === b.toString();
      break;
  }

  // If we made it this far, we can't handle it
  return false;
});
