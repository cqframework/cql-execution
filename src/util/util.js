/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let getTimezoneSeparatorFromString, normalizeMillisecondsField, normalizeMillisecondsFieldInString, typeIsArray;
module.exports.removeNulls = things => things.filter(x => x != null);

module.exports.numerical_sort = (things, direction="asc") => things.sort(function(a,b){
  if (direction === "asc") {
    return a - b;
  } else {
    return b - a;
  }
});

module.exports.isNull = value => value===null;
  
module.exports.typeIsArray  = (typeIsArray  = Array.isArray || (value => ({}).toString.call( value ) === '[object Array]'));

module.exports.allTrue = function(things) {
  if (typeIsArray(things)) {
    return things.every(x => x);
  } else {
    return things;
  }
};

module.exports.anyTrue = function(things) {
  if (typeIsArray(things)) {
    return things.some(x => x);
  } else {
    return things;
  }
};

//The export below is to make it easier if js Date is overwritten with CQL Date
module.exports.jsDate = Date;
module.exports.normalizeMillisecondsFieldInString = (normalizeMillisecondsFieldInString = function(string, msString) {
  // TODO: verify we are only removing numeral digits
  let timezoneField;
  msString = normalizeMillisecondsField(msString);
  const [beforeMs, msAndAfter] = Array.from(string.split('.'));
  const timezoneSeparator = getTimezoneSeparatorFromString(msAndAfter);

  if (!!timezoneSeparator) { timezoneField = msAndAfter != null ? msAndAfter.split(timezoneSeparator)[1] : undefined; }
  if ((timezoneField == null)) { timezoneField = ''; }
  return string = beforeMs + '.' + msString + timezoneSeparator + timezoneField;
});

module.exports.normalizeMillisecondsField = (normalizeMillisecondsField = msString => // fix up milliseconds by padding zeros and/or truncating (5 --> 500, 50 --> 500, 54321 --> 543, etc.)
msString = (msString + "00").substring(0, 3));

module.exports.getTimezoneSeparatorFromString = (getTimezoneSeparatorFromString = function(string) {
  let timezoneSeparator;
  if (__guard__(string != null ? string.match(/-/) : undefined, x => x.length) === 1) {
    return timezoneSeparator = '-';
  } else if (__guard__(string != null ? string.match(/\+/) : undefined, x1 => x1.length) === 1) {
    return timezoneSeparator = '+';
  } else {
    return timezoneSeparator = '';
  }
});

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}