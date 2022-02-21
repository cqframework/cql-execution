import { Expression } from './expression';
import { Quantity, doAddition } from '../datatypes/quantity';
import { successor, predecessor, MAX_DATETIME_VALUE, MIN_DATETIME_VALUE } from '../util/math';
import { convertUnit, compareUnits, convertToCQLDateUnit } from '../util/units';
import * as dtivl from '../datatypes/interval';
import { Context } from '../runtime/context';
import { build } from './builder';

export class Interval extends Expression {
  lowClosed: boolean;
  lowClosedExpression: any;
  highClosed: boolean;
  highClosedExpression: any;
  low: any;
  high: any;

  constructor(json: any) {
    super(json);
    this.lowClosed = json.lowClosed;
    this.lowClosedExpression = build(json.lowClosedExpression);
    this.highClosed = json.highClosed;
    this.highClosedExpression = build(json.highClosedExpression);
    this.low = build(json.low);
    this.high = build(json.high);
  }

  // Define a simple getter to allow type-checking of this class without instanceof
  // and in a way that survives minification (as opposed to checking constructor.name)
  get isInterval() {
    return true;
  }

  exec(ctx: Context) {
    const lowValue = this.low.execute(ctx);
    const highValue = this.high.execute(ctx);
    const lowClosed =
      this.lowClosed != null
        ? this.lowClosed
        : this.lowClosedExpression && this.lowClosedExpression.execute(ctx);
    const highClosed =
      this.highClosed != null
        ? this.highClosed
        : this.highClosedExpression && this.highClosedExpression.execute(ctx);
    let defaultPointType;
    if (lowValue == null && highValue == null) {
      // try to get the default point type from a cast
      if (this.low.asTypeSpecifier && this.low.asTypeSpecifier.type === 'NamedTypeSpecifier') {
        defaultPointType = this.low.asTypeSpecifier.name;
      } else if (
        this.high.asTypeSpecifier &&
        this.high.asTypeSpecifier.type === 'NamedTypeSpecifier'
      ) {
        defaultPointType = this.high.asTypeSpecifier.name;
      }
    }
    return new dtivl.Interval(lowValue, highValue, lowClosed, highClosed, defaultPointType);
  }
}

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

// Delegated to by overloaded#Contains and overloaded#In
export function doContains(interval: any, item: any, precision?: any) {
  return interval.contains(item, precision);
}

// Delegated to by overloaded#Includes and overloaded#IncludedIn
export function doIncludes(interval: any, subinterval: any, precision?: any) {
  return interval.includes(subinterval, precision);
}

// Delegated to by overloaded#ProperIncludes and overloaded@ProperIncludedIn
export function doProperIncludes(interval: any, subinterval: any, precision?: any) {
  return interval.properlyIncludes(subinterval, precision);
}

// Delegated to by overloaded#After
export function doAfter(a: any, b: any, precision?: any) {
  return a.after(b, precision);
}

// Delegated to by overloaded#Before
export function doBefore(a: any, b: any, precision?: any) {
  return a.before(b, precision);
}

export class Meets extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.meets(b, this.precision);
    } else {
      return null;
    }
  }
}

export class MeetsAfter extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.meetsAfter(b, this.precision);
    } else {
      return null;
    }
  }
}

export class MeetsBefore extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.meetsBefore(b, this.precision);
    } else {
      return null;
    }
  }
}

export class Overlaps extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.overlaps(b, this.precision);
    } else {
      return null;
    }
  }
}

export class OverlapsAfter extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.overlapsAfter(b, this.precision);
    } else {
      return null;
    }
  }
}

export class OverlapsBefore extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.overlapsBefore(b, this.precision);
    } else {
      return null;
    }
  }
}

// Delegated to by overloaded#Union
export function doUnion(a: any, b: any) {
  return a.union(b);
}

// Delegated to by overloaded#Except
export function doExcept(a: any, b: any) {
  if (a != null && b != null) {
    return a.except(b);
  } else {
    return null;
  }
}

// Delegated to by overloaded#Intersect
export function doIntersect(a: any, b: any) {
  if (a != null && b != null) {
    return a.intersect(b);
  } else {
    return null;
  }
}

export class Width extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const interval = this.arg.execute(ctx);
    if (interval == null) {
      return null;
    }
    return interval.width();
  }
}

export class Size extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const interval = this.arg.execute(ctx);
    if (interval == null) {
      return null;
    }
    return interval.size();
  }
}

export class Start extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const interval = this.arg.execute(ctx);
    if (interval == null) {
      return null;
    }
    const start = interval.start();
    // fix the timezoneOffset of minimum Datetime to match context offset
    if (start && start.isDateTime && start.equals(MIN_DATETIME_VALUE)) {
      start.timezoneOffset = ctx.getTimezoneOffset();
    }
    return start;
  }
}

export class End extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    const interval = this.arg.execute(ctx);
    if (interval == null) {
      return null;
    }
    const end = interval.end();
    // fix the timezoneOffset of maximum Datetime to match context offset
    if (end && end.isDateTime && end.equals(MAX_DATETIME_VALUE)) {
      end.timezoneOffset = ctx.getTimezoneOffset();
    }
    return end;
  }
}

export class Starts extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.starts(b, this.precision);
    } else {
      return null;
    }
  }
}

export class Ends extends Expression {
  precision?: any;

  constructor(json: any) {
    super(json);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx: Context) {
    const [a, b] = this.execArgs(ctx);
    if (a != null && b != null) {
      return a.ends(b, this.precision);
    } else {
      return null;
    }
  }
}

function intervalListType(intervals: any) {
  // Returns one of null, 'time', 'date', 'datetime', 'quantity', 'integer', 'decimal' or 'mismatch'
  let type = null;

  for (const itvl of intervals) {
    if (itvl == null) {
      continue;
    }

    if (itvl.low == null && itvl.high == null) {
      //can't really determine type from this
      continue;
    }

    // if one end is null (but not both), the type can be determined from the other end
    const low = itvl.low != null ? itvl.low : itvl.high;
    const high = itvl.high != null ? itvl.high : itvl.low;

    if (low.isTime && low.isTime() && high.isTime && high.isTime()) {
      if (type == null) {
        type = 'time';
      } else if (type === 'time') {
        continue;
      } else {
        return 'mismatch';
      }

      // if an interval mixes date and datetime, type is datetime (for implicit conversion)
    } else if (
      (low.isDateTime || high.isDateTime) &&
      (low.isDateTime || low.isDate) &&
      (high.isDateTime || high.isDate)
    ) {
      if (type == null || type === 'date') {
        type = 'datetime';
      } else if (type === 'datetime') {
        continue;
      } else {
        return 'mismatch';
      }
    } else if (low.isDate && high.isDate) {
      if (type == null) {
        type = 'date';
      } else if (type === 'date' || type === 'datetime') {
        continue;
      } else {
        return 'mismatch';
      }
    } else if (low.isQuantity && high.isQuantity) {
      if (type == null) {
        type = 'quantity';
      } else if (type === 'quantity') {
        continue;
      } else {
        return 'mismatch';
      }
    } else if (Number.isInteger(low) && Number.isInteger(high)) {
      if (type == null) {
        type = 'integer';
      } else if (type === 'integer' || type === 'decimal') {
        continue;
      } else {
        return 'mismatch';
      }
    } else if (typeof low === 'number' && typeof high === 'number') {
      if (type == null || type === 'integer') {
        type = 'decimal';
      } else if (type === 'decimal') {
        continue;
      } else {
        return 'mismatch';
      }
      //if we are here ends are mismatched
    } else {
      return 'mismatch';
    }
  }

  return type;
}

export class Expand extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    // expand(argument List<Interval<T>>, per Quantity) List<Interval<T>>
    let defaultPer, expandFunction;
    let [intervals, per] = this.execArgs(ctx);
    // CQL 1.5 introduced an overload to allow singular intervals; make it a list so we can use the same logic for either overload
    if (!Array.isArray(intervals)) {
      intervals = [intervals];
    }
    const type = intervalListType(intervals);
    if (type === 'mismatch') {
      throw new Error('List of intervals contains mismatched types.');
    }
    if (type == null) {
      return null;
    }

    // this step collapses overlaps, and also returns a clone of intervals so we can feel free to mutate
    intervals = collapseIntervals(intervals, per);
    if (intervals.length === 0) {
      return [];
    }

    if (['time', 'date', 'datetime'].includes(type)) {
      expandFunction = this.expandDTishInterval;
      defaultPer = (interval: any) => new Quantity(1, interval.low.getPrecision());
    } else if (['quantity'].includes(type)) {
      expandFunction = this.expandQuantityInterval;
      defaultPer = (interval: any) => new Quantity(1, interval.low.unit);
    } else if (['integer', 'decimal'].includes(type)) {
      expandFunction = this.expandNumericInterval;
      defaultPer = (_interval: any) => new Quantity(1, '1');
    } else {
      throw new Error('Interval list type not yet supported.');
    }

    const results = [];
    for (const interval of intervals) {
      if (interval == null) {
        continue;
      }
      // We do not support open ended intervals since result would likely be too long
      if (interval.low == null || interval.high == null) {
        return null;
      }

      if (type === 'datetime') {
        //support for implicitly converting dates to datetime
        interval.low = interval.low.getDateTime();
        interval.high = interval.high.getDateTime();
      }

      per = per != null ? per : defaultPer(interval);
      const items = expandFunction.call(this, interval, per);
      if (items === null) {
        return null;
      }
      results.push(...(items || []));
    }

    return results;
  }

  expandDTishInterval(interval: any, per: any) {
    per.unit = convertToCQLDateUnit(per.unit);

    if (per.unit === 'week') {
      per.value *= 7;
      per.unit = 'day';
    }

    // Precision Checks
    // return null if precision not applicable (e.g. gram, or minutes for dates)
    if (!interval.low.constructor.FIELDS.includes(per.unit)) {
      return null;
    }

    // open interval with null boundaries do not contribute to output
    // closed interval with null boundaries are not allowed for performance reasons
    if (interval.low == null || interval.high == null) {
      return null;
    }

    let low = interval.lowClosed ? interval.low : interval.low.successor();
    let high = interval.highClosed ? interval.high : interval.high.predecessor();
    if (low.after(high)) {
      return [];
    }
    if (interval.low.isLessPrecise(per.unit) || interval.high.isLessPrecise(per.unit)) {
      return [];
    }

    let current_low = low;
    const results = [];

    low = this.truncateToPrecision(low, per.unit);
    high = this.truncateToPrecision(high, per.unit);

    let current_high = current_low.add(per.value, per.unit).predecessor();
    let intervalToAdd = new dtivl.Interval(current_low, current_high, true, true);
    while (intervalToAdd.high.sameOrBefore(high)) {
      results.push(intervalToAdd);
      current_low = current_low.add(per.value, per.unit);
      current_high = current_low.add(per.value, per.unit).predecessor();
      intervalToAdd = new dtivl.Interval(current_low, current_high, true, true);
    }

    return results;
  }

  truncateToPrecision(value: any, unit: any) {
    // If interval boundaries are more precise than per quantity, truncate to
    // the precision specified by the per
    let shouldTruncate = false;
    for (const field of value.constructor.FIELDS) {
      if (shouldTruncate) {
        value[field] = null;
      }
      if (field === unit) {
        // Start truncating after this unit
        shouldTruncate = true;
      }
    }
    return value;
  }

  expandQuantityInterval(interval: any, per: any) {
    // we want to convert everything to the more precise of the interval.low or per
    let result_units;
    const res = compareUnits(interval.low.unit, per.unit);
    if (res != null && res > 0) {
      //interval.low.unit is 'bigger' aka les precise
      result_units = per.unit;
    } else {
      result_units = interval.low.unit;
    }
    const low_value = convertUnit(interval.low.value, interval.low.unit, result_units);
    const high_value = convertUnit(interval.high.value, interval.high.unit, result_units);
    const per_value = convertUnit(per.value, per.unit, result_units);

    // return null if unit conversion failed, must have mismatched units
    if (!(low_value != null && high_value != null && per_value != null)) {
      return null;
    }

    const results = this.makeNumericIntervalList(
      low_value,
      high_value,
      interval.lowClosed,
      interval.highClosed,
      per_value
    );

    for (const itvl of results) {
      itvl.low = new Quantity(itvl.low, result_units);
      itvl.high = new Quantity(itvl.high, result_units);
    }
    return results;
  }

  expandNumericInterval(interval: any, per: any) {
    if (per.unit !== '1' && per.unit !== '') {
      return null;
    }
    return this.makeNumericIntervalList(
      interval.low,
      interval.high,
      interval.lowClosed,
      interval.highClosed,
      per.value
    );
  }

  makeNumericIntervalList(
    low: any,
    high: any,
    lowClosed: boolean,
    highClosed: boolean,
    perValue: any
  ) {
    // If the per value is a Decimal (has a .), 8 decimal places are appropriate
    // Integers should have 0 Decimal places
    const perIsDecimal = perValue.toString().includes('.');
    const decimalPrecision = perIsDecimal ? 8 : 0;

    low = lowClosed ? low : successor(low);
    high = highClosed ? high : predecessor(high);

    // If the interval boundaries are more precise than the per quantity, the
    // more precise values will be truncated to the precision specified by the
    // per quantity.
    low = truncateDecimal(low, decimalPrecision);
    high = truncateDecimal(high, decimalPrecision);

    if (low > high) {
      return [];
    }
    if (low == null || high == null) {
      return [];
    }

    const perUnitSize = perIsDecimal ? 0.00000001 : 1;

    if (
      low === high &&
      Number.isInteger(low) &&
      Number.isInteger(high) &&
      !Number.isInteger(perValue)
    ) {
      high = parseFloat((high + 1).toFixed(decimalPrecision));
    }

    let current_low = low;
    const results = [];

    if (perValue > high - low + perUnitSize) {
      return [];
    }
    let current_high = parseFloat((current_low + perValue - perUnitSize).toFixed(decimalPrecision));
    let intervalToAdd = new dtivl.Interval(current_low, current_high, true, true);
    while (intervalToAdd.high <= high) {
      results.push(intervalToAdd);
      current_low = parseFloat((current_low + perValue).toFixed(decimalPrecision));
      current_high = parseFloat((current_low + perValue - perUnitSize).toFixed(decimalPrecision));
      intervalToAdd = new dtivl.Interval(current_low, current_high, true, true);
    }

    return results;
  }
}

export class Collapse extends Expression {
  constructor(json: any) {
    super(json);
  }

  exec(ctx: Context) {
    // collapse(argument List<Interval<T>>, per Quantity) List<Interval<T>>
    const [intervals, perWidth] = this.execArgs(ctx);
    return collapseIntervals(intervals, perWidth);
  }
}

function collapseIntervals(intervals: any, perWidth: any) {
  // Clone intervals so this function remains idempotent
  const intervalsClone = [];
  for (const interval of intervals) {
    // The spec says to ignore null intervals
    if (interval != null) {
      intervalsClone.push(interval.copy());
    }
  }

  // If the list is null, return null
  if (intervals == null) {
    return null;
  } else if (intervalsClone.length <= 1) {
    return intervalsClone;
  } else {
    // If the per argument is null, the default unit interval for the point type
    // of the intervals involved will be used (i.e. the interval that has a
    // width equal to the result of the successor function for the point type).
    if (perWidth == null) {
      perWidth = intervalsClone[0].getPointSize();
    }

    // sort intervalsClone by start
    intervalsClone.sort(function (a, b) {
      if (a.low && typeof a.low.before === 'function') {
        if (b.low != null && a.low.before(b.low)) {
          return -1;
        }
        if (b.low == null || a.low.after(b.low)) {
          return 1;
        }
      } else if (a.low != null && b.low != null) {
        if (a.low < b.low) {
          return -1;
        }
        if (a.low > b.low) {
          return 1;
        }
      } else if (a.low != null && b.low == null) {
        return 1;
      } else if (a.low == null && b.low != null) {
        return -1;
      }
      // if both lows are undefined, sort by high
      if (a.high && typeof a.high.before === 'function') {
        if (b.high == null || a.high.before(b.high)) {
          return -1;
        }
        if (a.high.after(b.high)) {
          return 1;
        }
      } else if (a.high != null && b.high != null) {
        if (a.high < b.high) {
          return -1;
        }
        if (a.high > b.high) {
          return 1;
        }
      } else if (a.high != null && b.high == null) {
        return -1;
      } else if (a.high == null && b.high != null) {
        return 1;
      }
      return 0;
    });

    // collapse intervals as necessary
    const collapsedIntervals = [];
    let a = intervalsClone.shift();
    let b = intervalsClone.shift();

    while (b) {
      if (b.low && typeof b.low.durationBetween === 'function') {
        // handle DateTimes using durationBetween
        if (a.high != null ? a.high.sameOrAfter(b.low) : undefined) {
          // overlap
          if (b.high == null || b.high.after(a.high)) {
            a.high = b.high;
          }
        } else if (
          (a.high != null ? a.high.durationBetween(b.low, perWidth.unit).high : undefined) <=
          perWidth.value
        ) {
          a.high = b.high;
        } else {
          collapsedIntervals.push(a);
          a = b;
        }
      } else if (b.low && typeof b.low.sameOrBefore === 'function') {
        if (a.high != null && b.low.sameOrBefore(doAddition(a.high, perWidth))) {
          if (b.high == null || b.high.after(a.high)) {
            a.high = b.high;
          }
        } else {
          collapsedIntervals.push(a);
          a = b;
        }
      } else {
        if (b.low - a.high <= perWidth.value) {
          if (b.high > a.high || b.high == null) {
            a.high = b.high;
          }
        } else {
          collapsedIntervals.push(a);
          a = b;
        }
      }
      b = intervalsClone.shift();
    }
    collapsedIntervals.push(a);
    return collapsedIntervals;
  }
}

function truncateDecimal(decimal: any, decimalPlaces: number) {
  // like parseFloat().toFixed() but floor rather than round
  // Needed for when per precision is less than the interval input precision
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (decimalPlaces || -1) + '})?');
  return parseFloat(decimal.toString().match(re)[0]);
}
