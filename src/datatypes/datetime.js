/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const { Uncertainty } = require('./uncertainty');
let { jsDate,
  normalizeMillisecondsField,
  normalizeMillisecondsFieldInString,
  getTimezoneSeparatorFromString } = require('../util/util');
const moment = require('moment');

class DateTime {
  static initClass() {
    // Define a simple getter to allow type-checking of this class without instanceof
    // and in a way that survives minification (as opposed to checking constructor.name)
    Object.defineProperties(this.prototype, {
      isDateTime: {
        get() { return true; }
      }
    }
    );
  
    this.Unit = { YEAR: 'year', MONTH: 'month', WEEK: 'week', DAY: 'day', HOUR: 'hour', MINUTE: 'minute', SECOND: 'second', MILLISECOND: 'millisecond' };
    this.FIELDS = [this.Unit.YEAR, this.Unit.MONTH, this.Unit.DAY, this.Unit.HOUR, this.Unit.MINUTE, this.Unit.SECOND, this.Unit.MILLISECOND];
  }

  static parse(string) {
    if (string === null) { return null; }

    const matches = /(\d{4})(-(\d{2}))?(-(\d{2}))?(T((\d{2})(\:(\d{2})(\:(\d{2})(\.(\d+))?)?)?)?(Z|(([+-])(\d{2})(\:?(\d{2}))?))?)?/.exec(string);

    if (matches == null) { return null; }
    const years= matches[1];
    const months= matches[3];
    const days= matches[5];
    const hours= matches[8];
    const minutes= matches[10];
    const seconds= matches[12];
    let milliseconds= matches[14];
    if (milliseconds != null) { milliseconds= normalizeMillisecondsField(milliseconds); }
    if (milliseconds != null) { string = normalizeMillisecondsFieldInString(string, matches[14]); }

    if (!isValidDateTimeStringFormat(string)) { return null; }

    let args = [years, months, days, hours, minutes, seconds, milliseconds];
    // convert them all to integers
    args = ((() => {
      const result = [];
      for (let arg of args) {         if (arg != null) { result.push(parseInt(arg,10)); } else {
          result.push(undefined);
        }
      }
      return result;
    })());
    // convert timezone offset to decimal and add it to arguments
    if (matches[18] != null) {
      const num = parseInt(matches[18],10) + ((matches[20] != null) ? parseInt(matches[20],10) / 60 : 0);
      args.push(matches[17] === '+' ? num : num * -1);
    } else if (matches[15] === 'Z') {
      args.push(0);
    }
    return new DateTime(...Array.from(args || []));
  }

  static fromJSDate(date, timezoneOffset) { //This is from a JS Date, not a CQL Date
    if (date instanceof DateTime) { return date; }
    if (timezoneOffset != null) {
      date = new jsDate(date.getTime() + (timezoneOffset * 60 * 60 * 1000));
      return new DateTime(
        date.getUTCFullYear(),
        date.getUTCMonth() + 1,
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
        timezoneOffset);
    } else {
      return new DateTime(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds());
    }
  }

  constructor(year=null, month=null, day=null, hour=null, minute=null, second=null, millisecond=null, timezoneOffset) {
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
    if (typeof(this.timezoneOffset) === 'undefined') {
      this.timezoneOffset = ((new jsDate()).getTimezoneOffset() / 60) * -1;
    }
  }

  copy() {
    return new DateTime(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond, this.timezoneOffset);
  }

  successor() {
    if (this.millisecond != null) {
      return this.add(1,DateTime.Unit.MILLISECOND);
    } else if (this.second != null) {
      return this.add(1,DateTime.Unit.SECOND);
    } else if (this.minute != null) {
      return this.add(1,DateTime.Unit.MINUTE);
    } else if (this.hour != null) {
      return this.add(1,DateTime.Unit.HOUR);
    } else if (this.day != null) {
      return this.add(1,DateTime.Unit.DAY);
    } else if (this.month != null) {
      return this.add(1,DateTime.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(1,DateTime.Unit.YEAR);
    }
  }

  predecessor() {
    if (this.millisecond != null) {
      return this.add(-1,DateTime.Unit.MILLISECOND);
    } else if (this.second != null) {
      return this.add(-1,DateTime.Unit.SECOND);
    } else if (this.minute != null) {
      return this.add(-1,DateTime.Unit.MINUTE);
    } else if (this.hour != null) {
      return this.add(-1,DateTime.Unit.HOUR);
    } else if (this.day != null) {
      return this.add(-1,DateTime.Unit.DAY);
    } else if (this.month != null) {
      return this.add(-1,DateTime.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(-1,DateTime.Unit.YEAR);
    }
  }

  convertToTimezoneOffset(timezoneOffset = 0) {
    const d = DateTime.fromJSDate(this.toJSDate(), timezoneOffset);
    return d.reducedPrecision(this.getPrecision());
  }

  differenceBetween(other, unitField) {
    other = this._implicitlyConvert(other);
    if (!(other != null ? other.isDateTime : undefined)) { return null; }

    // According to CQL spec, to calculate difference, you can just floor lesser precisions and do a duration
    // Make copies since we'll be flooring values and mucking with timezones
    let a = this.copy();
    let b = other.copy();
    // Use moment.js for day or finer granularity due to the daylight savings time fall back/spring forward
    if ((unitField === DateTime.Unit.MONTH) || (unitField === DateTime.Unit.YEAR) || (unitField === DateTime.Unit.WEEK) || (unitField === DateTime.Unit.DAY)) {
      // The dates need to agree on where the boundaries are, so we must normalize to the same time zone
      if (a.timezoneOffset !== b.timezoneOffset) {
        b = b.convertToTimezoneOffset(a.timezoneOffset);
      }
      // JS always represents dates in the current locale, but in locales with DST, we want to account for the
      // potential difference in offset from one date to the other.  We try to simulate them being in the same
      // timezone, because we don't want midnight to roll back to 11:00pm since that will mess up day boundaries.
      if (!a.isUTC() || !b.isUTC()) {
        const aJS = a.toJSDate(true);
        const bJS = b.toJSDate(true);
        const tzDiff = aJS.getTimezoneOffset() - bJS.getTimezoneOffset();
        if (tzDiff !== 0) {
          // Since we'll be doing duration later, account for timezone offset by adding to the time (if possible)
          if ((b.year != null) && (b.month != null) && (b.day != null) && (b.hour != null) && (b.minute != null)) { b = b.add(tzDiff, DateTime.Unit.MINUTE);
          } else if ((b.year != null) && (b.month != null) && (b.day != null) && (b.hour != null)) { b = b.add(tzDiff/60, DateTime.Unit.HOUR);
          } else { b.timezoneOffset = b.timezoneOffset + (tzDiff/60); }
        }
      }
    }
    // Now floor lesser precisions before we go on to calculate duration
    if (unitField === DateTime.Unit.YEAR) {
      a = new DateTime(a.year, 1, 1, 12, 0, 0, 0, a.timezoneOffset);
      b = new DateTime(b.year, 1, 1, 12, 0, 0, 0, b.timezoneOffset);
    } else if (unitField === DateTime.Unit.MONTH) {
      a = new DateTime(a.year, a.month, 1, 12, 0, 0, 0, a.timezoneOffset);
      b = new DateTime(b.year, b.month, 1, 12, 0, 0, 0, b.timezoneOffset);
    } else if (unitField === DateTime.Unit.WEEK) {
      a = this._floorWeek(a);
      b = this._floorWeek(b);
    } else if (unitField === DateTime.Unit.DAY) {
      a = new DateTime(a.year, a.month, a.day, 12, 0, 0, 0, a.timezoneOffset);
      b = new DateTime(b.year, b.month, b.day, 12, 0, 0, 0, b.timezoneOffset);
    } else if (unitField === DateTime.Unit.HOUR) {
      a = new DateTime(a.year, a.month, a.day, a.hour, 30, 0, 0, a.timezoneOffset);
      b = new DateTime(b.year, b.month, b.day, b.hour, 30, 0, 0, b.timezoneOffset);
    } else if (unitField === DateTime.Unit.MINUTE) {
      a = new DateTime(a.year, a.month, a.day, a.hour, a.minute, 0, 0, a.timezoneOffset);
      b = new DateTime(b.year, b.month, b.day, b.hour, b.minute, 0, 0, b.timezoneOffset);
    } else if (unitField === DateTime.Unit.SECOND) {
      a = new DateTime(a.year, a.month, a.day, a.hour, a.minute, a.second, 0, a.timezoneOffset);
      b = new DateTime(b.year, b.month, b.day, b.hour, b.minute, b.second, 0, b.timezoneOffset);
    }

    // Because moment.js handles years and months differently, use the existing durationBetween for those
    // Finer granularity times can be handled by the DST-aware moment.js library.
    if ((unitField === DateTime.Unit.YEAR) || (unitField === DateTime.Unit.MONTH)) {
      return a.durationBetween(b, unitField);
    } else {
      const aUncertainty = a.toUncertainty();
      const bUncertainty = b.toUncertainty();
      const aLowMoment = moment(aUncertainty.low).utc();
      const aHighMoment = moment(aUncertainty.high).utc();
      const bLowMoment = moment(bUncertainty.low).utc();
      const bHighMoment = moment(bUncertainty.high).utc();
      // moment uses the plural form of the unitField
      return new Uncertainty(bLowMoment.diff(aHighMoment, unitField + 's'), bHighMoment.diff(aLowMoment, unitField + 's'));
    }
  }

  _floorWeek(d) {
    // To "floor" a week, we need to go back to the last Sunday (that's when getDay() == 0 in javascript)
    // But if we don't know the day, then just return it as-is
    if ((d.day == null)) { return d; }
    const floored = new jsDate(d.year, d.month-1, d.day);
    while (floored.getDay() > 0) { floored.setDate(floored.getDate() - 1); }
    return new DateTime(floored.getFullYear(), floored.getMonth()+1, floored.getDate(), 12, 0, 0, 0, d.timezoneOffset);
  }

  durationBetween(other, unitField) {
    other = this._implicitlyConvert(other);
    if (!(other != null ? other.isDateTime : undefined)) { return null; }
    const a = this.toUncertainty();
    const b = other.toUncertainty();
    return new Uncertainty(this._durationBetweenDates(a.high, b.low, unitField), this._durationBetweenDates(a.low, b.high, unitField));
  }

  // NOTE: a and b are real JS dates -- not DateTimes
  _durationBetweenDates(a, b, unitField) {
    // DurationBetween is different than DifferenceBetween in that DurationBetween counts whole elapsed time periods, but
    // DifferenceBetween counts boundaries.  For example:
    // difference in days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 1 (since it crosses day boundary)
    // days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 0 (since there are no full days between them)
    const msDiff = b.getTime() - a.getTime();

    if (msDiff === 0) { return 0; }
    // If it's a negative delta, we need to use ceiling instead of floor when truncating
    const truncFunc = msDiff > 0 ? Math.floor : Math.ceil;
    // For ms, s, min, hr, day, and week this is trivial
    if (unitField === DateTime.Unit.MILLISECOND) { return msDiff;
    } else if (unitField === DateTime.Unit.SECOND) { return truncFunc(msDiff / 1000);
    } else if (unitField === DateTime.Unit.MINUTE) { return truncFunc(msDiff / (60 * 1000));
    } else if (unitField === DateTime.Unit.HOUR) { return truncFunc(msDiff / (60 * 60 * 1000));
    } else if (unitField === DateTime.Unit.DAY) {
      return truncFunc(msDiff / (24 * 60 * 60 * 1000));
    } else if (unitField === DateTime.Unit.WEEK) {
      return truncFunc(msDiff / (7 * 24 * 60 * 60 * 1000));
    // Months and years are trickier since months are variable length
    } else if ((unitField === DateTime.Unit.MONTH) || (unitField === DateTime.Unit.YEAR)) {
      // First get the rough months, essentially counting month "boundaries"
      let months = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
      // Now we need to look at the smaller units to see how they compare.  Since we only care about comparing
      // days and below at this point, it's much easier to bring a up to b so it's in the same month, then
      // we can compare on just the remaining units.
      const aInMonth = new jsDate(a.getTime());
      // Remember the original timezone offset because if it changes when we bring it up a month, we need to fix it
      const aInMonthOriginalOffset = aInMonth.getTimezoneOffset();
      aInMonth.setMonth(a.getMonth() + months);
      if (aInMonthOriginalOffset !== aInMonth.getTimezoneOffset()) {
        aInMonth.setMinutes(aInMonth.getMinutes() + (aInMonthOriginalOffset - aInMonth.getTimezoneOffset()));
      }
      // When a is before b, then if a's smaller units are greater than b's, a whole month hasn't elapsed, so adjust
      if ((msDiff > 0) && (aInMonth > b)) { months = months - 1;
      // When b is before a, then if a's smaller units are less than b's, a whole month hasn't elaspsed backwards, so adjust
      } else if ((msDiff < 0) && (aInMonth < b)) { months = months + 1; }
      // If this is months, just return them, but if it's years, we need to convert
      if (unitField === DateTime.Unit.MONTH) {
        return months;
      } else {
        return truncFunc(months/12);
      }
    } else {
      return null;
    }
  }

  isUTC() {
    // A timezoneOffset of 0 indicates UTC time.
    return !this.timezoneOffset;
  }

  getPrecision() {
    let result = null;
    if (this.year != null) { result = DateTime.Unit.YEAR; } else { return result; }
    if (this.month != null) { result = DateTime.Unit.MONTH; } else { return result; }
    if (this.day != null) { result = DateTime.Unit.DAY; } else { return result; }
    if (this.hour != null) { result = DateTime.Unit.HOUR; } else { return result; }
    if (this.minute != null) { result = DateTime.Unit.MINUTE; } else { return result; }
    if (this.second != null) { result = DateTime.Unit.SECOND; } else { return result; }
    if (this.millisecond != null) { result = DateTime.Unit.MILLISECOND; }
    return result;
  }

  toUncertainty(ignoreTimezone = false) {
    const low = this.toJSDate(ignoreTimezone);
    const high = (new DateTime(
      this.year,
      this.month != null ? this.month : 12,
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
      this.day != null ? this.day : (new jsDate(this.year, this.month != null ? this.month : 12, 0)).getDate(),
      this.hour != null ? this.hour : 23,
      this.minute != null ? this.minute : 59,
      this.second != null ? this.second : 59,
      this.millisecond != null ? this.millisecond : 999,
      this.timezoneOffset)).toJSDate(ignoreTimezone);
    return new Uncertainty(low, high);
  }

  toJSDate(ignoreTimezone = false) {
    let date;
    const [y, mo, d, h, mi, s, ms] = Array.from([ this.year, ((this.month != null) ? this.month-1 : 0), this.day != null ? this.day : 1, this.hour != null ? this.hour : 0, this.minute != null ? this.minute : 0, this.second != null ? this.second : 0, this.millisecond != null ? this.millisecond : 0 ]);
    if ((this.timezoneOffset != null) && !ignoreTimezone) {
      date = new jsDate(jsDate.UTC(y, mo, d, h, mi, s, ms) - (this.timezoneOffset * 60 * 60 * 1000));
      // TODO: This fixes any case that would not cross the year boundary due to a timezone.
      // Mainly used to solve the issue with the MIN_DATETIME_VALUE being converted from
      // year 0001 to year 1900 because of strange JSDate behavior between year 0 and 100
      // Also else case below
      if (y < 100) { date.setUTCFullYear(y); }
      return date;
    } else {
      date = new jsDate(y, mo, d, h, mi, s, ms);
      if (y < 100) { date.setFullYear(y); }
      return date;
    }
  }

  toJSON() {
    return this.toString();
  }

  _pad(num) {
    return String("0" + num).slice(-2);
  }

  toString() {
    if (this.isTime()) { return this.toStringTime(); } else { return this.toStringDateTime(); }
  }

  toStringTime() {
    let str = '';
    if (this.hour != null) {
      str += + this._pad(this.hour);
      if (this.minute != null) {
        str += ':' + this._pad(this.minute);
        if (this.second != null) {
          str += ':' + this._pad(this.second);
          if (this.millisecond != null) {
            str += '.' + String("00" + this.millisecond).slice(-3);
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
                  str += '.' + String("00" + this.millisecond).slice(-3);
                }
              }
            }
          }
        }
      }
    }

    if ((str.indexOf('T') !== -1) && (this.timezoneOffset != null)) {
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
    return (this.year === 0) && (this.month === 1) && (this.day === 1);
  }

  _implicitlyConvert(other) {
    if (other != null ? other.isDate : undefined) { return other.getDateTime(); }
    return other;
  }

  reducedPrecision(unitField = DateTime.Unit.MILLISECOND) {
    const reduced = this.copy();
    if (unitField !== DateTime.Unit.MILLISECOND) {
      const fieldIndex = DateTime.FIELDS.indexOf(unitField);
      const fieldsToRemove = DateTime.FIELDS.slice(fieldIndex + 1);
      for (let field of fieldsToRemove) { reduced[field] = null; }
    }
    return reduced;
  }
}
DateTime.initClass();



class Date {
  static initClass() {
    // Define a simple getter to allow type-checking of this class without instanceof
    // and in a way that survives minification (as opposed to checking constructor.name)
    Object.defineProperties(this.prototype, {
      isDate: {
        get() { return true; }
      }
    }
    );
  
    this.Unit = { YEAR: 'year', MONTH: 'month', WEEK: 'week', DAY: 'day' };
    this.FIELDS = [this.Unit.YEAR, this.Unit.MONTH, this.Unit.DAY];
  }

  static parse(string) {
    if (string === null) { return null; }

    const matches = /(\d{4})(-(\d{2}))?(-(\d{2}))?/.exec(string);

    if (matches == null) { return null; }
    const years= matches[1];
    const months= matches[3];
    const days= matches[5];

    if (!isValidDateStringFormat(string)) { return null; }

    let args = [years, months, days];
    // convert them all to integers
    args = ((() => {
      const result = [];
      for (let arg of args) {         if (arg != null) { result.push(parseInt(arg,10)); } else {
          result.push(undefined);
        }
      }
      return result;
    })());
    return new Date(...Array.from(args || []));
  }

  constructor(year=null, month=null, day=null) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  copy() {
    return new Date(this.year, this.month, this.day);
  }

  successor() {
    if (this.day != null) {
      return this.add(1,Date.Unit.DAY);
    } else if (this.month != null) {
      return this.add(1,Date.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(1,Date.Unit.YEAR);
    }
  }

  predecessor() {
    if (this.day != null) {
      return this.add(-1,Date.Unit.DAY);
    } else if (this.month != null) {
      return this.add(-1,Date.Unit.MONTH);
    } else if (this.year != null) {
      return this.add(-1,Date.Unit.YEAR);
    }
  }

  differenceBetween(other, unitField) {
    if (other != null ? other.isDateTime : undefined) { return this.getDateTime().differenceBetween(other, unitField); }
    if (!(other != null ? other.isDate : undefined)) { return null; }

    let a = this;
    let b = other;
    // According to CQL spec, to calculate difference, you can just floor lesser precisions and do a duration
    if (unitField === Date.Unit.YEAR) {
      a = new Date(a.year, 1, 1);
      b = new Date(b.year, 1, 1);
    } else if (unitField === Date.Unit.MONTH) {
      a = new Date(a.year, a.month, 1);
      b = new Date(b.year, b.month, 1);
    } else if (unitField === Date.Unit.WEEK) {
      a = this._floorWeek(a);
      b = this._floorWeek(b);
    }

    return a.durationBetween(b, unitField);
  }

  _floorWeek(d) {
    // To "floor" a week, we need to go back to the last Sunday (that's when getDay() == 0 in javascript)
    // But if we don't know the day, then just return it as-is
    if ((d.day == null)) { return d; }
    const floored = new jsDate(d.year, d.month-1, d.day);
    while (floored.getDay() > 0) { floored.setDate(floored.getDate() - 1); }
    return new Date(floored.getFullYear(), floored.getMonth()+1, floored.getDate());
  }

  durationBetween(other, unitField) {
    if (other != null ? other.isDateTime : undefined) { return this.getDateTime().durationBetween(other, unitField); }
    if (!(other != null ? other.isDate : undefined)) { return null; }

    const a = this.toUncertainty();
    const b = other.toUncertainty();
    return new Uncertainty(this._durationBetweenDates(a.high, b.low, unitField), this._durationBetweenDates(a.low, b.high, unitField));
  }

  // NOTE: a and b are real JS dates -- not DateTimes. Also this expects time components to be zero!
  _durationBetweenDates(a, b, unitField) {
    //we need to fix offsets to match so we dont get any JS DST interference, to avoid crossing day boundaries put it in the middle of the day
    //DST stuff should only be +/- one hour so this should work
    a.setTime(a.getTime() + (12*60*60*1000));
    b.setTime(b.getTime() + (12*60*60*1000));
    const tzdiff = a.getTimezoneOffset() - b.getTimezoneOffset();
    b.setTime(b.getTime() + (tzdiff*60*1000));

    // DurationBetween is different than DifferenceBetween in that DurationBetween counts whole elapsed time periods, but
    // DifferenceBetween counts boundaries.  For example:
    // difference in days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 1 (since it crosses day boundary)
    // days between @2012-01-01T23:59:59.999 and @2012-01-02T00:00:00.0 calculates to 0 (since there are no full days between them)
    const msDiff = b.getTime() - a.getTime();

    if (msDiff === 0) { return 0; }
    // If it's a negative delta, we need to use ceiling instead of floor when truncating
    const truncFunc = msDiff > 0 ? Math.floor : Math.ceil;
    // For ms, s, min, hr, day, and week this is trivial
    if (unitField === Date.Unit.DAY) {
      return truncFunc(msDiff / (24 * 60 * 60 * 1000));
    } else if (unitField === Date.Unit.WEEK) {
      return truncFunc(msDiff / (7 * 24 * 60 * 60 * 1000));
    // Months and years are trickier since months are variable length
    } else if ((unitField === Date.Unit.MONTH) || (unitField === Date.Unit.YEAR)) {
      // First get the rough months, essentially counting month "boundaries"
      let months = ((b.getFullYear() - a.getFullYear()) * 12) + (b.getMonth() - a.getMonth());
      // Now we need to look at the smaller units to see how they compare.  Since we only care about comparing
      // days and below at this point, it's much easier to bring a up to b so it's in the same month, then
      // we can compare on just the remaining units.
      const aInMonth = new jsDate(a.getTime());
      // Remember the original timezone offset because if it changes when we bring it up a month, we need to fix it
      const aInMonthOriginalOffset = aInMonth.getTimezoneOffset();
      aInMonth.setMonth(a.getMonth() + months);
      if (aInMonthOriginalOffset !== aInMonth.getTimezoneOffset()) {
        aInMonth.setMinutes(aInMonth.getMinutes() + (aInMonthOriginalOffset - aInMonth.getTimezoneOffset()));
      }
      // When a is before b, then if a's smaller units are greater than b's, a whole month hasn't elapsed, so adjust
      if ((msDiff > 0) && (aInMonth > b)) { months = months - 1;
      // When b is before a, then if a's smaller units are less than b's, a whole month hasn't elaspsed backwards, so adjust
      } else if ((msDiff < 0) && (aInMonth < b)) { months = months + 1; }
      // If this is months, just return them, but if it's years, we need to convert
      if (unitField === Date.Unit.MONTH) {
        return months;
      } else {
        return truncFunc(months/12);
      }
    } else {
      return null;
    }
  }

  getPrecision() {
    let result = null;
    if (this.year != null) { result = Date.Unit.YEAR; } else { return result; }
    if (this.month != null) { result = Date.Unit.MONTH; } else { return result; }
    if (this.day != null) { result = Date.Unit.DAY; } else { return result; }
    return result;
  }

  toUncertainty() {
    const low = this.toJSDate();
    const high = new Date(
      this.year,
      this.month != null ? this.month : 12,
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
      this.day != null ? this.day : (new jsDate(this.year, this.month != null ? this.month : 12, 0)).getDate()
    ).toJSDate();

    return new Uncertainty(low, high);
  }

  toJSDate() {
    const [y, mo, d] = Array.from([ this.year, ((this.month != null) ? this.month-1 : 0), this.day != null ? this.day : 1 ]);
    return new jsDate(y, mo, d);
  }

  static fromJSDate(date) {
    if (date instanceof Date) { return date; }
    return new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate());
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    let str = '';
    if (this.year != null) {
      str += this.year.toString();
      if (this.month != null) {
        str += '-' + this.month.toString().padStart(2,"0");
        if (this.day != null) {
          str += '-' + this.day.toString().padStart(2,"0");
        }
      }
    }
    return str;
  }

  getDateTime() {
    // from the spec: the result will be a DateTime with the time components set to zero,
    // except for the timezone offset, which will be set to the timezone offset of the evaluation
    // request timestamp. (this last part is acheived by just not passing in timezone offset)
    if ((this.year != null) && (this.month != null) && (this.day != null)) {
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
      for (let field of fieldsToRemove) { reduced[field] = null; }
    }
    return reduced;
  }
}
Date.initClass();

// Shared Funtions For Date and DateTime
DateTime.prototype.isPrecise = (Date.prototype.isPrecise = function() {
    return this.constructor.FIELDS.every(field => (this[field] != null));
  });

DateTime.prototype.isImprecise = (Date.prototype.isImprecise = function() {
    return !this.isPrecise();
  });

// This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isMorePrecise = (Date.prototype.isMorePrecise = function(other) {
    if ((typeof other === 'string') && this.constructor.FIELDS.includes(other)) {
      if ((this[other] == null)) { return false; }

    } else {
      for (let field of this.constructor.FIELDS) {
        if ((other[field] != null) && (this[field] == null)) { return false; }
      }
    }

    return !this.isSamePrecision(other);
  });

// This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isLessPrecise = (Date.prototype.isLessPrecise = function(other) {
    return !this.isSamePrecision(other) && !this.isMorePrecise(other);
  });

// This function can take another Date-ish object, or a precision string (e.g. 'month')
DateTime.prototype.isSamePrecision = (Date.prototype.isSamePrecision = function(other) {
    if ((typeof other === 'string') && this.constructor.FIELDS.includes(other)) {
      return other === this.getPrecision();
    }

    for (let field of this.constructor.FIELDS) {
      if ((this[field] != null) && (other[field] == null)) { return false; }
      if ((this[field] == null) && (other[field] != null)) { return false; }
    }
    return true;
  });

DateTime.prototype.equals = (Date.prototype.equals = function(other) {
  return compareWithDefaultResult(this, other, null);
});

DateTime.prototype.equivalent = (Date.prototype.equivalent = function(other) {
  return compareWithDefaultResult(this, other, false);
});


DateTime.prototype.sameAs = (Date.prototype.sameAs = function(other, precision) {
  if (!((other.isDate) || (other.isDateTime))) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().sameAs(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if ((precision != null) && (this.constructor.FIELDS.indexOf(precision) < 0)) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if ((this[field] != null) && (other[field] != null)) {
      // if they are different then return with false
      if (this[field] !== other[field]) {
        return false;
      }

    // if both dont have this precision, return true of precision is not defined
    } else if ((this[field] == null) && (other[field] == null)) {
      if ((precision == null)) {
        return true;
      } else { // we havent met precision yet
        return null;
      }

    // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if ((precision != null) && (precision === field)) { break; }
  }

  // if we made it here, then all fields matched.
  return true;
});

DateTime.prototype.sameOrBefore = (Date.prototype.sameOrBefore = function(other, precision) {
  if (!((other.isDate) || (other.isDateTime))) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().sameOrBefore(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if ((precision != null) && (this.constructor.FIELDS.indexOf(precision) < 0)) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if ((this[field] != null) && (other[field] != null)) {
      // if this value is less than the other return with true. this is before other
      if (this[field] < other[field]) {
        return true;
      // if this value is greater than the other return with false. this is after
      } else if (this[field] > other[field]) {
        return false;
      }
      // execution continues if the values are the same

    // if both dont have this precision, return true if precision is not defined
    } else if ((this[field] == null) && (other[field] == null)) {
      if ((precision == null)) {
        return true;
      } else { // we havent met precision yet
        return null;
      }

    // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if ((precision != null) && (precision === field)) { break; }
  }

  // if we made it here, then all fields matched and they are same
  return true;
});

DateTime.prototype.sameOrAfter = (Date.prototype.sameOrAfter = function(other, precision) {
  if (!((other.isDate) || (other.isDateTime))) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().sameOrAfter(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if ((precision != null) && (this.constructor.FIELDS.indexOf(precision) < 0)) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if ((this[field] != null) && (other[field] != null)) {
      // if this value is greater than the other return with true. this is after other
      if (this[field] > other[field]) {
        return true;
      // if this value is greater than the other return with false. this is before
      } else if (this[field] < other[field]) {
        return false;
      }
      // execution continues if the values are the same

    // if both dont have this precision, return true if precision is not defined
    } else if ((this[field] == null) && (other[field] == null)) {
      if ((precision == null)) {
        return true;
      } else { // we havent met precision yet
        return null;
      }

    // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if ((precision != null) && (precision === field)) { break; }
  }

  // if we made it here, then all fields matched and they are same
  return true;
});

DateTime.prototype.before = (Date.prototype.before = function(other, precision) {
  if (!((other.isDate) || (other.isDateTime))) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().before(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if ((precision != null) && (this.constructor.FIELDS.indexOf(precision) < 0)) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if ((this[field] != null) && (other[field] != null)) {
      // if this value is less than the other return with true. this is before other
      if (this[field] < other[field]) {
        return true;
      // if this value is greater than the other return with false. this is after
      } else if (this[field] > other[field]) {
        return false;
      }
      // execution continues if the values are the same

    // if both dont have this precision, return false if precision is not defined
    } else if ((this[field] == null) && (other[field] == null)) {
      if ((precision == null)) {
        return false;
      } else { // we havent met precision yet
        return null;
      }

    // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if ((precision != null) && (precision === field)) { break; }
  }

  // if we made it here, then all fields matched and they are same
  return false;
});

DateTime.prototype.after = (Date.prototype.after = function(other, precision) {
  if (!((other.isDate) || (other.isDateTime))) {
    return null;
  } else if (this.isDate && other.isDateTime) {
    return this.getDateTime().after(other, precision);
  } else if (this.isDateTime && other.isDate) {
    other = other.getDateTime();
  }

  if ((precision != null) && (this.constructor.FIELDS.indexOf(precision) < 0)) {
    throw new Error(`Invalid precision: ${precision}`);
  }

  // make a copy of other in the correct timezone offset if they don't match.
  if (this.timezoneOffset !== other.timezoneOffset) {
    other = other.convertToTimezoneOffset(this.timezoneOffset);
  }

  for (let field of this.constructor.FIELDS) {
    // if both have this precision defined
    if ((this[field] != null) && (other[field] != null)) {
      // if this value is greater than the other return with true. this is after other
      if (this[field] > other[field]) {
        return true;
      // if this value is greater than the other return with false. this is before
      } else if (this[field] < other[field]) {
        return false;
      }
      // execution continues if the values are the same

    // if both dont have this precision, return false if precision is not defined
    } else if ((this[field] == null) && (other[field] == null)) {
      if ((precision == null)) {
        return false;
      } else { // we havent met precision yet
        return null;
      }

    // otherwise they have inconclusive precision, return null
    } else {
      return null;
    }

    // if precision is defined and we have reached expected precision, we can leave the loop
    if ((precision != null) && (precision === field)) { break; }
  }

  // if we made it here, then all fields matched and they are same
  return false;
});

DateTime.prototype.add = (Date.prototype.add = function(offset, field) {
  let f;
  const result = this.copy();
  if (offset === 0) { return result; }

  // If weeks, convert to days
  if (field === this.constructor.Unit.WEEK) {
    offset = offset * 7;
    field = this.constructor.Unit.DAY;
  }


  const offsetIsMorePrecise = (result[field] == null); //whether the quantity we are adding is more precise than @
  // From the spec: "The operation is performed by converting the time-based quantity to the most precise value
  // specified in the date/time (truncating any resulting decimal portion) and then adding it to the date/time value."
  // However, since you can't really convert e.g. days to months,  if @ is less precise than the field being added, we can
  // "floor" UP to the incoming field precision, then add the offset, then reduce back down to original precision.
  // For negative offsets, we use the cieling
  if (offsetIsMorePrecise) {
    if ((this.year == null)) { result.year = new jsDate().getFullYear(); } //in case there is no year, proceed as if in this year, year will be nullified later
    const fieldFloorOrCiel = offset >= 0 ? this.getFieldFloor : this.getFieldCieling;
    for (f of this.constructor.FIELDS) { // this relies on FIELDS being sorted least to most precise
      result[f] = result[f] != null ? result[f] : fieldFloorOrCiel.call(result,f);
      if (result[field] != null) { break; }
    }
  }

  // Increment the field, then round-trip to JS date and back for calendar math
  result[field] = result[field] + offset;
  const normalized = this.constructor.fromJSDate(result.toJSDate(), this.timezoneOffset);
  for (field of this.constructor.FIELDS) {
    if (result[field] != null) {
      result[field] = normalized[field];
    }
  }

  // remove any fields we added (go back to original precision)
  if (offsetIsMorePrecise) {
    for (f of this.constructor.FIELDS) {
      if ((this[f] == null)) { result[f] = null; }
    }
  }

  // Can't use overflowsOrUnderflows from math.coffee due to circular dependencies when we require it
  if (result.after(MAX_DATETIME_VALUE || result.before(MIN_DATETIME_VALUE))) { return null; } else { return result; }
});

DateTime.prototype.getFieldFloor = (Date.prototype.getFieldFloor = function(field) {
  if (field === 'month') {
    return 1;
  }
  if (field === 'day') {
    return 1;
  }
  if (field === 'hour') {
    return 0;
  }
  if (field === 'minute') {
    return 0;
  }
  if (field === 'second') {
    return 0;
  }
  if (field === 'millisecond') {
    return 0;
  }
  throw new Error('Tried to floor a field that has no floor value: ' + field);
});


DateTime.prototype.getFieldCieling = (Date.prototype.getFieldCieling = function(field) {
  if (field === 'month') {
    return 12;
  }
  if (field === 'day') {
    return daysInMonth(this.year, this.month);
  }
  if (field === 'hour') {
    return 23;
  }
  if (field === 'minute') {
    return 59;
  }
  if (field === 'second') {
    return 59;
  }
  if (field === 'millisecond') {
    return 999;
  }
  throw new Error('Tried to clieling a field that has no cieling value: ' + field);
});

var compareWithDefaultResult = function(a, b, defaultResult) {
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
    if ((a[field] != null) && (b[field] != null)) {
      // For the purposes of comparison, seconds and milliseconds are combined
      // as a single precision using a decimal, with decimal equality semantics
      if (field === 'second') {
        // NOTE: if millisecond is null it will calcualte like this anyway, but
        // if millisecond is undefined, using it will result in NaN calculations
        const aMillisecond = (a['millisecond'] != null) ? a['millisecond'] : 0;
        const aSecondAndMillisecond = a[field] + (aMillisecond / 1000);
        const bMillisecond = (b['millisecond'] != null) ? b['millisecond'] : 0;
        const bSecondAndMillisecond = b[field] + (bMillisecond / 1000);

        // second/millisecond is the most precise comparison, so we can directly return
        return aSecondAndMillisecond === bSecondAndMillisecond;
      }

      // if they are different then return with false
      if (a[field] !== b[field]) {
        return false;
      }

    // if both dont have this precision, return true
    } else if ((a[field] == null) && (b[field] == null)) {
      return true;

    // otherwise they have inconclusive precision, return defaultResult
    } else {
      return defaultResult;
    }
  }
  // if we made it here, then all fields matched.
  return true;
};

var daysInMonth = function(year, month) {
  if (!((year != null) && (month != null))) {
    throw new Error('daysInMonth requires year and month as arguments');
  }
  // Month is 1-indexed here because of the 0 day
  return new jsDate(year, month, 0).getDate();
};

normalizeMillisecondsField = msString => // fix up milliseconds by padding zeros and/or truncating (5 --> 500, 50 --> 500, 54321 --> 543, etc.)
msString = (msString + "00").substring(0, 3);

var isValidDateStringFormat = function(string) {
  if (typeof string !== 'string') { return false; }
  const cqlFormats = ['YYYY',
                'YYYY-MM',
                'YYYY-MM-DD'];

  const cqlFormatStringWithLength = {};
  for (let format of cqlFormats) { cqlFormatStringWithLength[format.length] = format; }

  if ((cqlFormatStringWithLength[string.length] == null)) { return false; }

  const strict = true;
  return moment(string, cqlFormatStringWithLength[string.length], strict).isValid();
};

var isValidDateTimeStringFormat = function(string) {
  if (typeof string !== 'string') { return false; }
  const cqlFormats = ['YYYY',
                'YYYY-MM',
                'YYYY-MM-DD',
                'YYYY-MM-DDTZ',
                'YYYY-MM-DDT+hh',
                'YYYY-MM-DDT+hh:mm',
                'YYYY-MM-DDT-hh',
                'YYYY-MM-DDT-hh:mm',
                'YYYY-MM-DDThh',
                'YYYY-MM-DDThhZ',
                'YYYY-MM-DDThh+hh',
                'YYYY-MM-DDThh+hh:mm',
                'YYYY-MM-DDThh-hh',
                'YYYY-MM-DDThh-hh:mm',
                'YYYY-MM-DDThh:mm',
                'YYYY-MM-DDThh:mmZ',
                'YYYY-MM-DDThh:mm+hh',
                'YYYY-MM-DDThh:mm+hh:mm',
                'YYYY-MM-DDThh:mm-hh',
                'YYYY-MM-DDThh:mm-hh:mm',
                'YYYY-MM-DDThh:mm:ss',
                'YYYY-MM-DDThh:mm:ssZ',
                'YYYY-MM-DDThh:mm:ss+hh',
                'YYYY-MM-DDThh:mm:ss+hh:mm',
                'YYYY-MM-DDThh:mm:ss-hh',
                'YYYY-MM-DDThh:mm:ss-hh:mm',
                'YYYY-MM-DDThh:mm:ss.fff',
                'YYYY-MM-DDThh:mm:ss.fffZ',
                'YYYY-MM-DDThh:mm:ss.fff+hh',
                'YYYY-MM-DDThh:mm:ss.fff+hh:mm',
                'YYYY-MM-DDThh:mm:ss.fff-hh',
                'YYYY-MM-DDThh:mm:ss.fff-hh:mm'];

  const cqlFormatStringWithLength = {};
  for (let format of cqlFormats) { cqlFormatStringWithLength[format.length] = format; }

  if ((cqlFormatStringWithLength[string.length] == null)) { return false; }

  // Moment.js has 2 options for parsing, strict or forgiving.
  // Strict parsing requires that the format and input match exactly, including delimeters.
  // Due to CQL using slightly different delimiters than moment, we need to use forgiving.
  const strict = false;
  return moment(string, cqlFormatStringToMomentFormatString(cqlFormatStringWithLength[string.length]), strict).isValid();
};

var cqlFormatStringToMomentFormatString = function(string) {
  // CQL: 'YYYY-MM-DDThh:mm:ss.fff-hh:mm', Moment: 'YYYY-MM-DD[T]hh:mm:ss.SSS[Z]'
  let timezoneSeparator;
  const [yearMonthDay, timeAndTimeZoneOffset] = Array.from(string.split('T'));

  if (timeAndTimeZoneOffset != null) {
    timezoneSeparator = getTimezoneSeparatorFromString(timeAndTimeZoneOffset);
  }

  let momentString = yearMonthDay;
  if (string.match(/T/) != null) { momentString += '[T]'; }
  if (!!timezoneSeparator) {
    momentString += timeAndTimeZoneOffset.substring(0, timeAndTimeZoneOffset.search(timezoneSeparator)) + '[Z]';
  } else {
    momentString += timeAndTimeZoneOffset;
  }

  return momentString = momentString.replace(/f/g, 'S');
};

// Redefine MIN/MAX here because math.coffee requires this file, and when we make this file require
// math.coffee, it errors due to the circular dependency...
var MIN_DATETIME_VALUE = DateTime.parse("0001-01-01T00:00:00.000");
var MAX_DATETIME_VALUE = DateTime.parse("9999-12-31T23:59:59.999");

module.exports.DateTime = DateTime;
module.exports.Date = Date;