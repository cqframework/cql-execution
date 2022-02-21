export type Direction = 'asc' | 'ascending' | 'desc' | 'descending';

export function removeNulls(things: any[]) {
  return things.filter(x => x != null);
}

export function numerical_sort(things: any[], direction: Direction | null) {
  return things.sort((a, b) => {
    if (direction == null || direction === 'asc' || direction === 'ascending') {
      return a - b;
    } else {
      return b - a;
    }
  });
}

export function isNull(value: any) {
  return value === null;
}

export const typeIsArray =
  Array.isArray || (value => ({}.toString.call(value) === '[object Array]'));

export function allTrue(things: any) {
  if (typeIsArray(things)) {
    return (things as any[]).every(x => x);
  } else {
    return things;
  }
}

export function anyTrue(things: any) {
  if (typeIsArray(things)) {
    return (things as any[]).some(x => x);
  } else {
    return things;
  }
}

//The export below is to make it easier if js Date is overwritten with CQL Date
export const jsDate = Date;

export function normalizeMillisecondsFieldInString(string: string, msString: string) {
  // TODO: verify we are only removing numeral digits
  let timezoneField;
  msString = normalizeMillisecondsField(msString);
  const [beforeMs, msAndAfter] = string.split('.');
  const timezoneSeparator = getTimezoneSeparatorFromString(msAndAfter);

  if (timezoneSeparator) {
    timezoneField = msAndAfter != null ? msAndAfter.split(timezoneSeparator)[1] : undefined;
  }
  if (timezoneField == null) {
    timezoneField = '';
  }
  return (string = beforeMs + '.' + msString + timezoneSeparator + timezoneField);
}

export function normalizeMillisecondsField(msString: string) {
  // fix up milliseconds by padding zeros and/or truncating (5 --> 500, 50 --> 500, 54321 --> 543, etc.)
  return (msString = (msString + '00').substring(0, 3));
}

export function getTimezoneSeparatorFromString(string: string) {
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
