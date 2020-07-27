function removeNulls(things) {
  return things.filter(x => x != null);
}

function numerical_sort(things, direction = 'asc') {
  return things.sort((a, b) => {
    if (direction === 'asc') {
      return a - b;
    } else {
      return b - a;
    }
  });
}

function isNull(value) {
  return value === null;
}

const typeIsArray = Array.isArray || (value => ({}.toString.call(value) === '[object Array]'));

function allTrue(things) {
  if (typeIsArray(things)) {
    return things.every(x => x);
  } else {
    return things;
  }
}

function anyTrue(things) {
  if (typeIsArray(things)) {
    return things.some(x => x);
  } else {
    return things;
  }
}

//The export below is to make it easier if js Date is overwritten with CQL Date
const jsDate = Date;

function normalizeMillisecondsFieldInString(string, msString) {
  // TODO: verify we are only removing numeral digits
  let timezoneField;
  msString = normalizeMillisecondsField(msString);
  const [beforeMs, msAndAfter] = Array.from(string.split('.'));
  const timezoneSeparator = getTimezoneSeparatorFromString(msAndAfter);

  if (timezoneSeparator) {
    timezoneField = msAndAfter != null ? msAndAfter.split(timezoneSeparator)[1] : undefined;
  }
  if (timezoneField == null) {
    timezoneField = '';
  }
  return (string = beforeMs + '.' + msString + timezoneSeparator + timezoneField);
}

function normalizeMillisecondsField(msString) {
  // fix up milliseconds by padding zeros and/or truncating (5 --> 500, 50 --> 500, 54321 --> 543, etc.)
  return (msString = (msString + '00').substring(0, 3));
}

function getTimezoneSeparatorFromString(string) {
  if (string != null) {
    let matches = string.match(/-/);
    if (matches && matches.length === 1) {
      return '-';
    }
    matches = string.match(/\+/);
    if (matches && matches.length === 1) {
      return '+';
    }
  }
  return '';
}

module.exports = {
  removeNulls,
  numerical_sort,
  isNull,
  typeIsArray,
  allTrue,
  anyTrue,
  jsDate,
  normalizeMillisecondsFieldInString,
  normalizeMillisecondsField,
  getTimezoneSeparatorFromString
};
