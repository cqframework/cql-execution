const { Uncertainty } = require('./uncertainty');
const {
  jsDate,
  normalizeMillisecondsField,
  normalizeMillisecondsFieldInString
} = require('../util/util');
const luxon = require('luxon');

// It's easiest and most performant to organize formats by length of the supported strings.
// This way we can test strings only against the formats that have a chance of working.
// NOTE: Formats use Luxon formats, documented here: https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
const LENGTH_TO_DATE_FORMAT_MAP = (() => {
  const ltdfMap = new Map();
  ltdfMap.set(4, 'yyyy');
  ltdfMap.set(7, 'yyyy-MM');
  ltdfMap.set(10, 'yyyy-MM-dd');
  return ltdfMap;
})();

const LENGTH_TO_DATETIME_FORMATS_MAP = (() => {
  const formats = {
    yyyy: '2012',
    'yyyy-MM': '2012-01',
    'yyyy-MM-dd': '2012-01-31',
    "yyyy-MM-dd'T''Z'": '2012-01-31TZ',
    "yyyy-MM-dd'T'ZZ": '2012-01-31T-04:00',
    "yyyy-MM-dd'T'HH": '2012-01-31T12',
    "yyyy-MM-dd'T'HH'Z'": '2012-01-31T12Z',
    "yyyy-MM-dd'T'HHZZ": '2012-01-31T12-04:00',
    "yyyy-MM-dd'T'HH:mm": '2012-01-31T12:30',
    "yyyy-MM-dd'T'HH:mm'Z'": '2012-01-31T12:30Z',
    "yyyy-MM-dd'T'HH:mmZZ": '2012-01-31T12:30-04:00',
    "yyyy-MM-dd'T'HH:mm:ss": '2012-01-31T12:30:59',
    "yyyy-MM-dd'T'HH:mm:ss'Z'": '2012-01-31T12:30:59Z',
    "yyyy-MM-dd'T'HH:mm:ssZZ": '2012-01-31T12:30:59-04:00',
    "yyyy-MM-dd'T'HH:mm:ss.SSS": '2012-01-31T12:30:59.000',
    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'": '2012-01-31T12:30:59.000Z',
    "yyyy-MM-dd'T'HH:mm:ss.SSSZZ": '2012-01-31T12:30:59.000-04:00'
  };
  const ltdtfMap = new Map();
  Object.keys(formats).forEach(k => {
    const example = formats[k];
    if (!ltdtfMap.has(example.length)) {
      ltdtfMap.set(example.length, [k]);
    } else {
      ltdtfMap.get(example.length).push(k);
    }
  });
  return ltdtfMap;
})();

function wholeLuxonDuration(duration, unit) {
  const value = duration.get(unit);
  return value >= 0 ? Math.floor(value) : Math.ceil(value);
}

function truncateLuxonDateTime(luxonDT, unit) {
  // Truncating by week (to the previous Sunday) requires different logic than the rest
  if (unit === DateTime.Unit.WEEK) {
    // Sunday is ISO weekday 7
    if (luxonDT.weekday !== 7) {
      luxonDT = luxonDT.set({ weekday: 7 }).minus({ weeks: 1 });
    }
    unit = DateTime.Unit.DAY;
  }
  return luxonDT.startOf(unit);
}

class DateTime {
  static parse(string) {
    if (string === null) {
      return null;
    }

    const matches = /(\d{4})(-(\d{2}))?(-(\d{2}))?(T((\d{2})(:(\d{2})(:(\d{2})(\.(\d+))?)?)?)?(Z|(([+-])(\d{2})(:?(\d{2}))?))?)?/.exec(
      string
    );

    if (matches == null) {
      return null;
    }
    const years = matches[1];
    const months = matches[3];
    const days = matches[5];
    const hours = matches[8];
    const minutes = matches[10];
    const seconds = matches[12];
    let milliseconds = matches[14];
    if (milliseconds != null) {
      milliseconds = normalizeMillisecondsField(milliseconds);
    }
    if (milliseconds != null) {
      string = normalizeMillisecondsFieldInString(string, matches[14]);
    }

    if (!isValidDateTimeStringFormat(string)) {
      return null;
    }

    // convert the args to integers
    const args = [years, months, days, hours, minutes, seconds, milliseconds].map(arg => {
      return arg != null ? parseInt(arg) : arg;
    });
    // convert timezone offset to decimal and add it to arguments
    if (matches[18] != null) {
      const num = parseInt(matches[18]) + (matches[20] != null ? parseInt(matches[20]) / 60 : 0);
      args.push(matches[17] === '+' ? num : num * -1);
    } else if (matches[15] === 'Z') {
      args.push(0);
    }
    return new DateTime(...args);
  }

  static fromJSDate(date, timezoneOffset) {
    //This is from a JS Date, not a CQL Date
    if (date instanceof DateTime) {
      return date;
    }
    if (timezoneOffset != null) {
      date = new jsDate(date.getTime() + timezoneOffset * 60 * 60 * 1000);
      return new DateTime(
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
        timezoneOffset
      );
    } else {
      return new DateTime(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
      );
    }
  }

  static fromLuxonDateTime(luxonDT) {
    if (luxonDT instanceof DateTime) {
      return luxonDT;
    }
    return new DateTime(
      luxonDT.year,
      luxonDT.month,
      luxonDT.day,
      luxonDT.hour,
      luxonDT.minute,
      luxonDT.second,
      luxonDT.millisecond,
      luxonDT.offset / 60
    );
  }

  constructor(
    year = null,
    month = null,
    day = null,
    hour = null,
    minute = null,
    second = null,
    millisecond = null,
    timezoneOffset
  ) {
    // from the spec: If no timezone is specified, the timezone of the evaluation request timestamp is used.
    // NOTE: timezoneOffset will be explicitly null for the Time overload, whereas
    // it will be undefined if simply unspecified
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.millisecond = millisecond;
    this.timezoneOffset = timezoneOffset;
    if (this.timezoneOffset === undefined) {
      this.timezoneOffset = (new jsDate().getTimezoneOffset() / 60) * -1;
    }
  }

  get isDateTime() {
    return true;
  }

  copy() {
    return new DateTime(
      this.year,
      this.month,
      this.day,
      this.hour,
      this.minute,
      this.second,
      this.millisecond,
      this.timezoneOffset
    );
  }

  successor() {
    if (this.millisecond != null) {
      return this.add(1, DateTime.Unit.MILLISECOND);
    } else if (this.second != null) {
      return this.add(1, DateTime.Unit.SECOND);
    } else if (this.minute != null) {
      return this.add(1, DateTime.Unit.MINUTE);
    } else if (this.hour != null) {
      return this.add(1, DateTime.Unit.HOUR);
    } else if (this.day != null) {
      return this.add(1, DateTime.Unit.DAY);
    } else if (this.month != null) {
      return this.add(1, DateTime.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(1, DateTime.Unit.YEAR);
    }
  }

  predecessor() {
    if (this.millisecond != null) {
      return this.add(-1, DateTime.Unit.MILLISECOND);
    } else if (this.second != null) {
      return this.add(-1, DateTime.Unit.SECOND);
    } else if (this.minute != null) {
      return this.add(-1, DateTime.Unit.MINUTE);
    } else if (this.hour != null) {
      return this.add(-1, DateTime.Unit.HOUR);
    } else if (this.day != null) {
      return this.add(-1, DateTime.Unit.DAY);
    } else if (this.month != null) {
      return this.add(-1, DateTime.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(-1, DateTime.Unit.YEAR);
    }
  }

  convertToTimezoneOffset(timezoneOffset = 0) {
    const shiftedLuxonDT = this.toLuxonDateTime().setZone(
      luxon.FixedOffsetZone.instance(timezoneOffset * 60)
    );
    const shiftedDT = DateTime.fromLuxonDateTime(shiftedLuxonDT);
    return shiftedDT.reducedPrecision(this.getPrecision());
  }

  differenceBetween(other, unitField) {
    other = this._implicitlyConvert(other);
    if (other == null || !other.isDateTime) {
      return null;
    }

    // According to CQL spec:
    // * "Difference calculations are performed by truncating the datetime values at the next precision,
    //   and then performing the corresponding duration calculation on the truncated values."
    // * "When difference is calculated for hours or finer units, timezone offsets should be normalized
    //   prior to truncation to correctly consider real (actual elapsed) time. When difference is calculated
    //   for days or coarser units, however, the time components (including timezone offset) should be truncated
    //   without normalization to correctly reflect the difference in calendar days, months, and years."
    const a = this.toLuxonUncertainty();
    const b = other.toLuxonUncertainty();

    // If unit is days or above, reset all the DateTimes to UTC since TZ offset should not be considered;
    // Otherwise, we don't actually have to "normalize" to a common TZ because Luxon takes TZ into account.
    if (
      [DateTime.Unit.YEAR, DateTime.Unit.MONTH, DateTime.Unit.WEEK, DateTime.Unit.DAY].includes(
        unitField
      )
    ) {
      a.low = a.low.toUTC(0, { keepLocalTime: true });
      a.high = a.high.toUTC(0, { keepLocalTime: true });
      b.low = b.low.toUTC(0, { keepLocalTime: true });
      b.high = b.high.toUTC(0, { keepLocalTime: true });
    }

    // Truncate all dates at precision below specified unit
    a.low = truncateLuxonDateTime(a.low, unitField);
    a.high = truncateLuxonDateTime(a.high, unitField);
    b.low = truncateLuxonDateTime(b.low, unitField);
    b.high = truncateLuxonDateTime(b.high, unitField);

    // Return the duration based on the normalize and truncated values
    return new Uncertainty(
      wholeLuxonDuration(b.low.diff(a.high, unitField), unitField),
      wholeLuxonDuration(b.high.diff(a.low, unitField), unitField)
    );
  }

  durationBetween(other, unitField) {
    other = this._implicitlyConvert(other);
    if (other == null || !other.isDateTime) {
      return null;
    }
    const a = this.toLuxonUncertainty();
    const b = other.toLuxonUncertainty();
    return new Uncertainty(
      wholeLuxonDuration(b.low.diff(a.high, unitField), unitField),
      wholeLuxonDuration(b.high.diff(a.low, unitField), unitField)
    );
  }

  isUTC() {
    // A timezoneOffset of 0 indicates UTC time.
    return !this.timezoneOffset;
  }

  getPrecision() {
    let result = null;
    if (this.year != null) {
      result = DateTime.Unit.YEAR;
    } else {
      return result;
    }
    if (this.month != null) {
      result = DateTime.Unit.MONTH;
    } else {
      return result;
    }
    if (this.day != null) {
      result = DateTime.Unit.DAY;
    } else {
      return result;
    }
    if (this.hour != null) {
      result = DateTime.Unit.HOUR;
    } else {
      return result;
    }
    if (this.minute != null) {
      result = DateTime.Unit.MINUTE;
    } else {
      return result;
    }
    if (this.second != null) {
      result = DateTime.Unit.SECOND;
    } else {
      return result;
    }
    if (this.millisecond != null) {
      result = DateTime.Unit.MILLISECOND;
    }
    return result;
  }

  getPrecisionValue() {
    return this.isTime()
      ? TIME_PRECISION_VALUE_MAP.get(this.getPrecision())
      : DATETIME_PRECISION_VALUE_MAP.get(this.getPrecision());
  }

  toLuxonDateTime() {
    const offsetMins =
      this.timezoneOffset != null
        ? this.timezoneOffset * 60
        : new jsDate().getTimezoneOffset() * -1;
    return luxon.DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      millisecond: this.millisecond,
      zone: luxon.FixedOffsetZone.instance(offsetMins)
    });
  }

  toLuxonUncertainty() {
    const low = this.toLuxonDateTime();
    const high = low.endOf(this.getPrecision());
    return new Uncertainty(low, high);
  }

  toJSDate(ignoreTimezone = false) {
    let luxonDT = this.toLuxonDateTime();
    // I don't know if anyone is using "ignoreTimezone" anymore (we aren't), but just in case
    if (ignoreTimezone) {
      const offset = new jsDate().getTimezoneOffset() * -1;
      luxonDT = luxonDT.setZone(luxon.FixedOffsetZone.instance(offset), { keepLocalTime: true });
    }
    return luxonDT.toJSDate();
  }

  toJSON() {
    return this.toString();
  }

  _pad(num) {
    return String('0' + num).slice(-2);
  }

  toString() {
    if (this.isTime()) {
      return this.toStringTime();
    } else {
      return this.toStringDateTime();
    }
  }

  toStringTime() {
    let str = '';
    if (this.hour != null) {
      str += this._pad(this.hour);
      if (this.minute != null) {
        str += ':' + this._pad(this.minute);
        if (this.second != null) {
          str += ':' + this._pad(this.second);
          if (this.millisecond != null) {
            str += '.' + String('00' + this.millisecond).slice(-3);
          }
        }
      }
    }

    return str;
  }

  toStringDateTime() {
    let str = '';
    if (this.year != null) {
      str += this.year;
      if (this.month != null) {
        str += '-' + this._pad(this.month);
        if (this.day != null) {
          str += '-' + this._pad(this.day);
          if (this.hour != null) {
            str += 'T' + this._pad(this.hour);
            if (this.minute != null) {
              str += ':' + this._pad(this.minute);
              if (this.second != null) {
                str += ':' + this._pad(this.second);
                if (this.millisecond != null) {
                  str += '.' + String('00' + this.millisecond).slice(-3);
                }
              }
            }
          }
        }
      }
    }

    if (str.indexOf('T') !== -1 && this.timezoneOffset != null) {
      str += this.timezoneOffset < 0 ? '-' : '+';
      const offsetHours = Math.floor(Math.abs(this.timezoneOffset));
      str += this._pad(offsetHours);
      const offsetMin = (Math.abs(this.timezoneOffset) - offsetHours) * 60;
      str += ':' + this._pad(offsetMin);
    }

    return str;
  }

  getDateTime() {
    return this;
  }

  getDate() {
    return new Date(this.year, this.month, this.day);
  }

  getTime() {
    // Times no longer have timezoneOffets, so we must explicitly set it to null
    return new DateTime(0, 1, 1, this.hour, this.minute, this.second, this.millisecond, null);
  }

  isTime() {
    return this.year === 0 && this.month === 1 && this.day === 1;
  }

  _implicitlyConvert(other) {
    if (other != null && other.isDate) {
      return other.getDateTime();
    }
    return other;
  }

  reducedPrecision(unitField = DateTime.Unit.MILLISECOND) {
    const reduced = this.copy();
    if (unitField !== DateTime.Unit.MILLISECOND) {
      const fieldIndex = DateTime.FIELDS.indexOf(unitField);
      const fieldsToRemove = DateTime.FIELDS.slice(fieldIndex + 1);
      for (let field of fieldsToRemove) {
        reduced[field] = null;
      }
    }
    return reduced;
  }
}

DateTime.Unit = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day',
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
  MILLISECOND: 'millisecond'
};
DateTime.FIELDS = [
  DateTime.Unit.YEAR,
  DateTime.Unit.MONTH,
  DateTime.Unit.DAY,
  DateTime.Unit.HOUR,
  DateTime.Unit.MINUTE,
  DateTime.Unit.SECOND,
  DateTime.Unit.MILLISECOND
];

class Date {
  static parse(string) {
    if (string === null) {
      return null;
    }

    const matches = /(\d{4})(-(\d{2}))?(-(\d{2}))?/.exec(string);

    if (matches == null) {
      return null;
    }
    const years = matches[1];
    const months = matches[3];
    const days = matches[5];

    if (!isValidDateStringFormat(string)) {
      return null;
    }

    // convert args to integers
    const args = [years, months, days].map(arg => (arg != null ? parseInt(arg) : arg));

    return new Date(...args);
  }

  constructor(year = null, month = null, day = null) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  get isDate() {
    return true;
  }

  copy() {
    return new Date(this.year, this.month, this.day);
  }

  successor() {
    if (this.day != null) {
      return this.add(1, Date.Unit.DAY);
    } else if (this.month != null) {
      return this.add(1, Date.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(1, Date.Unit.YEAR);
    }
  }

  predecessor() {
    if (this.day != null) {
      return this.add(-1, Date.Unit.DAY);
    } else if (this.month != null) {
      return this.add(-1, Date.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(-1, Date.Unit.YEAR);
    }
  }

  differenceBetween(other, unitField) {
    if (other != null && other.isDateTime) {
      return this.getDateTime().differenceBetween(other, unitField);
    }
    if (other == null || !other.isDate) {
      return null;
    }

    // According to CQL spec:
    // * "Difference calculations are performed by truncating the datetime values at the next precision,
    //   and then performing the corresponding duration calculation on the truncated values."
    const a = this.toLuxonUncertainty();
    const b = other.toLuxonUncertainty();

    // Truncate all dates at precision below specified unit
    a.low = truncateLuxonDateTime(a.low, unitField);
    a.high = truncateLuxonDateTime(a.high, unitField);
    b.low = truncateLuxonDateTime(b.low, unitField);
    b.high = truncateLuxonDateTime(b.high, unitField);

    // Return the duration based on the normalize and truncated values
    return new Uncertainty(
      wholeLuxonDuration(b.low.diff(a.high, unitField), unitField),
      wholeLuxonDuration(b.high.diff(a.low, unitField), unitField)
    );
  }

  durationBetween(other, unitField) {
    if (other != null && other.isDateTime) {
      return this.getDateTime().durationBetween(other, unitField);
    }
    if (other == null || !other.isDate) {
      return null;
    }

    const a = this.toLuxonUncertainty();
    const b = other.toLuxonUncertainty();
    return new Uncertainty(
      wholeLuxonDuration(b.low.diff(a.high, unitField), unitField),
      wholeLuxonDuration(b.high.diff(a.low, unitField), unitField)
    );
  }

  getPrecision() {
    let result = null;
    if (this.year != null) {
      result = Date.Unit.YEAR;
    } else {
      return result;
    }
    if (this.month != null) {
      result = Date.Unit.MONTH;
    } else {
      return result;
    }
    if (this.day != null) {
      result = Date.Unit.DAY;
    } else {
      return result;
    }
    return result;
  }

  getPrecisionValue() {
    return DATETIME_PRECISION_VALUE_MAP.get(this.getPrecision());
  }

  toLuxonDateTime() {
    return luxon.DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
      zone: luxon.FixedOffsetZone.utcInstance
    });
  }

  toLuxonUncertainty() {
    const low = this.toLuxonDateTime();
    const high = low.endOf(this.getPrecision()).startOf('day'); // Date type is always at T00:00:00.0
    return new Uncertainty(low, high);
  }

  toJSDate() {
    const [y, mo, d] = [
      this.year,
      this.month != null ? this.month - 1 : 0,
      this.day != null ? this.day : 1
    ];
    return new jsDate(y, mo, d);
  }

  static fromJSDate(date) {
    if (date instanceof Date) {
      return date;
    }
    return new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  static fromLuxonDateTime(luxonDT) {
    if (luxonDT instanceof Date) {
      return luxonDT;
    }
    return new Date(luxonDT.year, luxonDT.month, luxonDT.day);
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    let str = '';
    if (this.year != null) {
      str += this.year.toString();
      if (this.month != null) {
        str += '-' + this.month.toString().padStart(2, '0');
        if (this.day != null) {
          str += '-' + this.day.toString().padStart(2, '0');
        }
      }
    }
    return str;
  }

  getDateTime() {
    // from the spec: the result will be a DateTime with the time components set to zero,
    // except for the timezone offset, which will be set to the timezone offset of the evaluation
    // request timestamp. (this last part is acheived by just not passing in timezone offset)
    if (this.year != null && this.month != null && this.day != null) {
      return new DateTime(this.year, this.month, this.day, 0, 0, 0, 0);
      // from spec: no component may be specified at a precision below an unspecified precision.
      // For example, hour may be null, but if it is, minute, second, and millisecond must all be null as well.
    } else {
      return new DateTime(this.year, this.month, this.day);
    }
  }

  reducedPrecision(unitField = Date.Unit.DAY) {
    const reduced = this.copy();
    if (unitField !== Date.Unit.DAY) {
      const fieldIndex = Date.FIELDS.indexOf(unitField);
      const fieldsToRemove = Date.FIELDS.slice(fieldIndex + 1);
      for (let field of fieldsToRemove) {
        reduced[field] = null;
      }
    }
    return reduced;
  }
}

const MIN_DATETIME_VALUE = DateTime.parse('0001-01-01T00:00:00.000');
const MAX_DATETIME_VALUE = DateTime.parse('9999-12-31T23:59:59.999');
const MIN_DATE_VALUE = Date.parse('0001-01-01');
const MAX_DATE_VALUE = Date.parse('9999-12-31');
const MIN_TIME_VALUE = DateTime.parse('0000-01-01T00:00:00.000').getTime();
const MAX_TIME_VALUE = DateTime.parse('0000-01-01T23:59:59.999').getTime();

Date.Unit = { YEAR: 'year', MONTH: 'month', WEEK: 'week', DAY: 'day' };
Date.FIELDS = [Date.Unit.YEAR, Date.Unit.MONTH, Date.Unit.DAY];

const DATETIME_PRECISION_VALUE_MAP = (() => {
  const dtpvMap = new Map();
  dtpvMap.set(DateTime.Unit.YEAR, 4);
  dtpvMap.set(DateTime.Unit.MONTH, 6);
  dtpvMap.set(DateTime.Unit.DAY, 8);
  dtpvMap.set(DateTime.Unit.HOUR, 10);
  dtpvMap.set(DateTime.Unit.MINUTE, 12);
  dtpvMap.set(DateTime.Unit.SECOND, 14);
  dtpvMap.set(DateTime.Unit.MILLISECOND, 17);
  return dtpvMap;
})();

const TIME_PRECISION_VALUE_MAP = (() => {
  const tpvMap = new Map();
  tpvMap.set(DateTime.Unit.HOUR, 2);
  tpvMap.set(DateTime.Unit.MINUTE, 4);
  tpvMap.set(DateTime.Unit.SECOND, 6);
  tpvMap.set(DateTime.Unit.MILLISECOND, 9);
  return tpvMap;
})();

// Shared Funtions For Date and DateTime
DateTime.prototype.isPrecise = Date.prototype.isPrecise = function () {
  return this.constructor.FIELDS.every(field => this[field] != null);
};

DateTime.prototype.isImprecise = Date.prototype.isImprecise = function () {
  return !this.isPrecise();
};

// This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isMorePrecise = Date.prototype.isMorePrecise = function (other) {
  if (typeof other === 'string' && this.constructor.FIELDS.includes(other)) {
    if (this[other] == null) {
      return false;
    }
  } else {
    for (let field of this.constructor.FIELDS) {
      if (other[field] != null && this[field] == null) {
        return false;
      }
    }
  }

  return !this.isSamePrecision(other);
};

// This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isLessPrecise = Date.prototype.isLessPrecise = function (other) {
  return !this.isSamePrecision(other) && !this.isMorePrecise(other);
};

// This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isSamePrecision = Date.prototype.isSamePrecision = function (other) {
  if (typeof other === 'string' && this.constructor.FIELDS.includes(other)) {
    return other === this.getPrecision();
  }

  for (let field of this.constructor.FIELDS) {
    if (this[field] != null && other[field] == null) {
      return false;
    }
    if (this[field] == null && other[field] != null) {
      return false;
    }
  }
  return true;
};

DateTime.prototype.equals = Date.prototype.equals = function (other) {
  return compareWithDefaultResult(this, other, null);
};

DateTime.prototype.equivalent = Date.prototype.equivalent = function (other) {
  return compareWithDefaultResult(this, other, false);
};

DateTime.prototype.sameAs = Date.prototype.sameAs = function (other, precision) {
  if (!(other.isDate || other.isDateTime)) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().sameAs(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if (precision != null && this.constructor.FIELDS.indexOf(precision) < 0) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if (this[field] != null && other[field] != null) {
      // if they are different then return with false
      if (this[field] !== other[field]) {
        return false;
      }

      // if both dont have this precision, return true of precision is not defined
    } else if (this[field] == null && other[field] == null) {
      if (precision == null) {
        return true;
      } else {
        // we havent met precision yet
        return null;
      }

      // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if (precision != null && precision === field) {
      break;
    }
  }

  // if we made it here, then all fields matched.
  return true;
};

DateTime.prototype.sameOrBefore = Date.prototype.sameOrBefore = function (other, precision) {
  if (!(other.isDate || other.isDateTime)) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().sameOrBefore(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if (precision != null && this.constructor.FIELDS.indexOf(precision) < 0) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if (this[field] != null && other[field] != null) {
      // if this value is less than the other return with true. this is before other
      if (this[field] < other[field]) {
        return true;
        // if this value is greater than the other return with false. this is after
      } else if (this[field] > other[field]) {
        return false;
      }
      // execution continues if the values are the same

      // if both dont have this precision, return true if precision is not defined
    } else if (this[field] == null && other[field] == null) {
      if (precision == null) {
        return true;
      } else {
        // we havent met precision yet
        return null;
      }

      // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if (precision != null && precision === field) {
      break;
    }
  }

  // if we made it here, then all fields matched and they are same
  return true;
};

DateTime.prototype.sameOrAfter = Date.prototype.sameOrAfter = function (other, precision) {
  if (!(other.isDate || other.isDateTime)) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().sameOrAfter(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if (precision != null && this.constructor.FIELDS.indexOf(precision) < 0) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if (this[field] != null && other[field] != null) {
      // if this value is greater than the other return with true. this is after other
      if (this[field] > other[field]) {
        return true;
        // if this value is greater than the other return with false. this is before
      } else if (this[field] < other[field]) {
        return false;
      }
      // execution continues if the values are the same

      // if both dont have this precision, return true if precision is not defined
    } else if (this[field] == null && other[field] == null) {
      if (precision == null) {
        return true;
      } else {
        // we havent met precision yet
        return null;
      }

      // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if (precision != null && precision === field) {
      break;
    }
  }

  // if we made it here, then all fields matched and they are same
  return true;
};

DateTime.prototype.before = Date.prototype.before = function (other, precision) {
  if (!(other.isDate || other.isDateTime)) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().before(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if (precision != null && this.constructor.FIELDS.indexOf(precision) < 0) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if (this[field] != null && other[field] != null) {
      // if this value is less than the other return with true. this is before other
      if (this[field] < other[field]) {
        return true;
        // if this value is greater than the other return with false. this is after
      } else if (this[field] > other[field]) {
        return false;
      }
      // execution continues if the values are the same

      // if both dont have this precision, return false if precision is not defined
    } else if (this[field] == null && other[field] == null) {
      if (precision == null) {
        return false;
      } else {
        // we havent met precision yet
        return null;
      }

      // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if (precision != null && precision === field) {
      break;
    }
  }

  // if we made it here, then all fields matched and they are same
  return false;
};

DateTime.prototype.after = Date.prototype.after = function (other, precision) {
  if (!(other.isDate || other.isDateTime)) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().after(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if (precision != null && this.constructor.FIELDS.indexOf(precision) < 0) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if (this[field] != null && other[field] != null) {
      // if this value is greater than the other return with true. this is after other
      if (this[field] > other[field]) {
        return true;
        // if this value is greater than the other return with false. this is before
      } else if (this[field] < other[field]) {
        return false;
      }
      // execution continues if the values are the same

      // if both dont have this precision, return false if precision is not defined
    } else if (this[field] == null && other[field] == null) {
      if (precision == null) {
        return false;
      } else {
        // we havent met precision yet
        return null;
      }

      // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if (precision != null && precision === field) {
      break;
    }
  }

  // if we made it here, then all fields matched and they are same
  return false;
};

DateTime.prototype.add = Date.prototype.add = function (offset, field) {
  if (offset === 0 || this.year == null) {
    return this.copy();
  }

  // Use luxon to do the date math because it honors DST and it has the leap-year/end-of-month semantics we want.
  // NOTE: The luxonDateTime will contain default values where this[unit] is null, but we'll account for that.
  let luxonDateTime = this.toLuxonDateTime();

  // From the spec: "The operation is performed by converting the time-based quantity to the most precise value
  // specified in the date/time (truncating any resulting decimal portion) and then adding it to the date/time value."
  // However, since you can't really convert days to months,  if "this" is less precise than the field being added, we can
  // add to the earliest possible value of "this" or subtract from the latest possible value of "this" (depending on the
  // sign of the offset), and then null out the imprecise fields again after doing the calculation.  Due to the way
  // luxonDateTime is constructed above, it is already at the earliest value, so only adjust if the offset is negative.
  const offsetIsMorePrecise = this[field] == null; //whether the quantity we are adding is more precise than "this".
  if (offsetIsMorePrecise && offset < 0) {
    luxonDateTime = luxonDateTime.endOf(this.getPrecision());
  }

  // Now do the actual math and convert it back to a Date/DateTime w/ originally null fields nulled out again
  const luxonResult = luxonDateTime.plus({ [field]: offset });
  const result = this.constructor
    .fromLuxonDateTime(luxonResult)
    .reducedPrecision(this.getPrecision());
  // Luxon never has a null offset, but sometimes "this" does, so reset to null if applicable
  if (this.isDateTime && this.timezoneOffset == null) {
    result.timezoneOffset = null;
  }

  // Can't use overflowsOrUnderflows from math.js due to circular dependencies when we require it
  if (result.after(MAX_DATETIME_VALUE || result.before(MIN_DATETIME_VALUE))) {
    return null;
  } else {
    return result;
  }
};

DateTime.prototype.getFieldFloor = Date.prototype.getFieldFloor = function (field) {
  switch (field) {
    case 'month':
      return 1;
    case 'day':
      return 1;
    case 'hour':
      return 0;
    case 'minute':
      return 0;
    case 'second':
      return 0;
    case 'millisecond':
      return 0;
    default:
      throw new Error('Tried to floor a field that has no floor value: ' + field);
  }
};

DateTime.prototype.getFieldCieling = Date.prototype.getFieldCieling = function (field) {
  switch (field) {
    case 'month':
      return 12;
    case 'day':
      return daysInMonth(this.year, this.month);
    case 'hour':
      return 23;
    case 'minute':
      return 59;
    case 'second':
      return 59;
    case 'millisecond':
      return 999;
    default:
      throw new Error('Tried to clieling a field that has no cieling value: ' + field);
  }
};

function compareWithDefaultResult(a, b, defaultResult) {
  // return false there is a type mismatch
  if ((!a.isDate || !b.isDate) && (!a.isDateTime || !b.isDateTime)) {
    return false;
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (a.timezoneOffset !== b.timezoneOffset) {
    b = b.convertToTimezoneOffset(a.timezoneOffset);
  }

  for (let field of a.constructor.FIELDS) {
    // if both have this precision defined
    if (a[field] != null && b[field] != null) {
      // For the purposes of comparison, seconds and milliseconds are combined
      // as a single precision using a decimal, with decimal equality semantics
      if (field === 'second') {
        // NOTE: if millisecond is null it will calcualte like this anyway, but
        // if millisecond is undefined, using it will result in NaN calculations
        const aMillisecond = a['millisecond'] != null ? a['millisecond'] : 0;
        const aSecondAndMillisecond = a[field] + aMillisecond / 1000;
        const bMillisecond = b['millisecond'] != null ? b['millisecond'] : 0;
        const bSecondAndMillisecond = b[field] + bMillisecond / 1000;

        // second/millisecond is the most precise comparison, so we can directly return
        return aSecondAndMillisecond === bSecondAndMillisecond;
      }

      // if they are different then return with false
      if (a[field] !== b[field]) {
        return false;
      }

      // if both dont have this precision, return true
    } else if (a[field] == null && b[field] == null) {
      return true;

      // otherwise they have inconclusive precision, return defaultResult
    } else {
      return defaultResult;
    }
  }
  // if we made it here, then all fields matched.
  return true;
}

function daysInMonth(year, month) {
  if (year == null || month == null) {
    throw new Error('daysInMonth requires year and month as arguments');
  }
  // Month is 1-indexed here because of the 0 day
  return new jsDate(year, month, 0).getDate();
}

function isValidDateStringFormat(string) {
  if (typeof string !== 'string') {
    return false;
  }

  const format = LENGTH_TO_DATE_FORMAT_MAP.get(string.length);
  if (format == null) {
    return false;
  }

  return luxon.DateTime.fromFormat(string, format).isValid;
}

function isValidDateTimeStringFormat(string) {
  if (typeof string !== 'string') {
    return false;
  }

  // Luxon doesn't support +hh offset, so change it to +hh:00
  if (/T[\d:.]*[+-]\d{2}$/.test(string)) {
    string += ':00';
  }

  const formats = LENGTH_TO_DATETIME_FORMATS_MAP.get(string.length);
  if (formats == null) {
    return false;
  }

  return formats.some(fmt => luxon.DateTime.fromFormat(string, fmt).isValid);
}

module.exports = {
  DateTime,
  Date,
  MIN_DATETIME_VALUE,
  MAX_DATETIME_VALUE,
  MIN_DATE_VALUE,
  MAX_DATE_VALUE,
  MIN_TIME_VALUE,
  MAX_TIME_VALUE
};

// Require MIN/MAX here because math.js requires this file, and when we make this file require
// math.js before it exports DateTime and Date, it errors due to the circular dependency...
// const { MAX_DATETIME_VALUE, MIN_DATETIME_VALUE } = require('../util/math');
