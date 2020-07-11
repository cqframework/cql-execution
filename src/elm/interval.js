/* eslint-disable
    no-constant-condition,
    no-unused-vars,
    no-useless-escape,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Collapse, doIncludes, End, Ends, Expand, Interval, Meets, MeetsAfter, MeetsBefore, Overlaps, OverlapsAfter, OverlapsBefore, Size, Start, Starts, Width;
const { Expression, UnimplementedExpression } = require('./expression');
const { ThreeValuedLogic } = require('../datatypes/logic');
const { build } = require('./builder');
const { Quantity, doAddition, doSubtraction, compare_units, convert_value } = require('../datatypes/quantity');
const { successor, predecessor, MAX_DATETIME_VALUE, MIN_DATETIME_VALUE } = require('../util/math');
const dtivl = require('../datatypes/interval');
const cmp = require('../util/comparison');


module.exports.Interval = (Interval = (function() {
  Interval = class Interval extends Expression {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isInterval: {
          get() { return true; }
        }
      }
      );
    }
    constructor(json) {
      super(...arguments);
      this.lowClosed = json.lowClosed;
      this.highClosed = json.highClosed;
      this.low = build(json.low);
      this.high = build(json.high);
    }

    exec(ctx) {
      return new dtivl.Interval(this.low.execute(ctx), this.high.execute(ctx), this.lowClosed, this.highClosed);
    }
  };
  Interval.initClass();
  return Interval;
})());

// Equal is completely handled by overloaded#Equal

// NotEqual is completely handled by overloaded#Equal

// Delegated to by overloaded#Contains and overloaded#In
module.exports.doContains = (interval, item, precision) => interval.contains(item, precision);

// Delegated to by overloaded#Includes and overloaded#IncludedIn
module.exports.doIncludes = (doIncludes = (interval, subinterval, precision) => interval.includes(subinterval, precision));

// Delegated to by overloaded#ProperIncludes and overloaded@ProperIncludedIn
module.exports.doProperIncludes = (interval, subinterval, precision) => interval.properlyIncludes(subinterval, precision);

// Delegated to by overloaded#After
module.exports.doAfter = (a, b, precision) => a.after(b, precision);

// Delegated to by overloaded#Before
module.exports.doBefore = (a, b, precision) => a.before(b, precision);

module.exports.Meets = (Meets = class Meets extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.meets(b, this.precision); } else { return null; }
  }
});

module.exports.MeetsAfter = (MeetsAfter = class MeetsAfter extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.meetsAfter(b, this.precision); } else { return null; }
  }
});

module.exports.MeetsBefore = (MeetsBefore = class MeetsBefore extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.meetsBefore(b, this.precision); } else { return null; }
  }
});

module.exports.Overlaps = (Overlaps = class Overlaps extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.overlaps(b, this.precision); } else { return null; }
  }
});

module.exports.OverlapsAfter = (OverlapsAfter = class OverlapsAfter extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.overlapsAfter(b, this.precision); } else { return null; }
  }
});

module.exports.OverlapsBefore = (OverlapsBefore = class OverlapsBefore extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.overlapsBefore(b, this.precision); } else { return null; }
  }
});

// Delegated to by overloaded#Union
module.exports.doUnion = (a, b) => a.union(b);

// Delegated to by overloaded#Except
module.exports.doExcept = function(a, b) {
  if ((a != null) && (b != null)) { return a.except(b); } else { return null; }
};

// Delegated to by overloaded#Intersect
module.exports.doIntersect = function(a, b) {
  if ((a != null) && (b != null)) { return a.intersect(b); } else { return null; }
};

module.exports.Width = (Width = class Width extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    return __guard__(this.arg.execute(ctx), x => x.width());
  }
});

module.exports.Size = (Size = class Size extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const interval = this.arg.execute(ctx);
    if (interval == null) { return null; }
    return interval.size();
  }
});

module.exports.Start = (Start = class Start extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const interval = this.arg.execute(ctx);
    if ((interval == null)) { return null; }
    const start = interval.start();
    // fix the timezoneOffset of minimum Datetime to match context offset
    if ((start != null ? start.isDateTime : undefined) && start.equals(MIN_DATETIME_VALUE)) {
      start.timezoneOffset = ctx.getTimezoneOffset();
    }
    return start;
  }
});


module.exports.End = (End = class End  extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    const interval = this.arg.execute(ctx);
    if ((interval == null)) { return null; }
    const end = interval.end();
    // fix the timezoneOffset of maximum Datetime to match context offset
    if ((end != null ? end.isDateTime : undefined) && end.equals(MAX_DATETIME_VALUE)) {
      end.timezoneOffset = ctx.getTimezoneOffset();
    }
    return end;
  }
});

module.exports.Starts = (Starts = class Starts extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.starts(b, this.precision); } else { return null; }
  }
});

module.exports.Ends = (Ends = class Ends extends Expression {
  constructor(json) {
    super(...arguments);
    this.precision = json.precision != null ? json.precision.toLowerCase() : undefined;
  }

  exec(ctx) {
    const [a, b] = Array.from(this.execArgs(ctx));
    if ((a != null) && (b != null)) { return a.ends(b, this.precision); } else { return null; }
  }
});

const intervalListType = function(intervals) {
  // Returns one of null, 'time', 'date', 'datetime', 'quantity', 'integer', 'decimal' or 'mismatch'
  let type = null;

  for (let itvl of intervals) {
    if ((itvl == null)) {
      continue;
    }

    if ((itvl.low == null) && (itvl.high == null)) { //can't really determine type from this
      continue;
    }

    // if one end is null (but not both), the type can be determined from the other end
    const low = itvl.low != null ? itvl.low : itvl.high;
    const high = itvl.high != null ? itvl.high : itvl.low;

    if ((typeof low.isTime === 'function' ? low.isTime() : undefined) && (typeof high.isTime === 'function' ? high.isTime() : undefined)) {
      if ((type == null)) {
        type = 'time';
      } else if (type === 'time') {
        continue;
      } else {
        return 'mismatch';
      }

    // if an interval mixes date and datetime, type is datetime (for implicit conversion)
    } else if ((low.isDateTime || high.isDateTime) &&
    (low.isDateTime || low.isDate) && (high.isDateTime || high.isDate)) {
      if ((type == null) || (type === 'date')) {
        type = 'datetime';
      } else if (type === 'datetime') {
        continue;
      } else {
        return 'mismatch';
      }

    } else if (low.isDate && high.isDate) {
      if ((type == null)) {
        type = 'date';
      } else if ((type === 'date') || 'datetime') {
        continue;
      } else {
        return 'mismatch';
      }

    } else if (low.isQuantity && high.isQuantity) {
      if ((type == null)) {
        type = 'quantity';
      } else if (type === 'quantity') {
        continue;
      } else {
        return 'mismatch';
      }

    } else if (Number.isInteger(low) && Number.isInteger(high)) {
      if ((type == null)) {
        type = 'integer';
      } else if ((type === 'integer') || 'decimal') {
        continue;
      } else {
        return 'mismatch';
      }

    } else if ((typeof low === 'number') && (typeof high === 'number')) {
      if ((type == null) || (type === 'integer')) {
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
};


module.exports.Expand = (Expand = class Expand extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    // expand(argument List<Interval<T>>, per Quantity) List<Interval<T>>
    let defaultPer, expandFunction;
    let [intervals, per] = Array.from(this.execArgs(ctx));
    const type = intervalListType(intervals);
    if (type === 'mismatch') { throw new Error('List of intervals contains mismatched types.'); }
    if ((type == null)) { return null; }

    // this step collapses overlaps, and also returns a clone of intervals so we can feel free to mutate
    intervals = collapseIntervals(intervals, per);
    if (intervals.length === 0) { return []; }

    if (['time', 'date', 'datetime'].includes(type)) {
      expandFunction = this.expandDTishInterval;
      defaultPer = interval => new Quantity(1, interval.low.getPrecision());
    } else if (['quantity'].includes(type)) {
      expandFunction = this.expandQuantityInterval;
      defaultPer = interval => new Quantity(1, interval.low.unit);
    } else if (['integer', 'decimal'].includes(type)) {
      expandFunction = this.expandNumericInterval;
      defaultPer = interval => new Quantity(1, '1');
    } else {
      throw new Error('Interval list type not yet supported.');
    }

    const results = [];
    for (let interval of intervals) {
      if ((interval == null)) {
        continue;
      }
      // We do not support open ended intervals since result would likely be too long
      if ((interval.low == null) || (interval.high == null)) {
        return null;
      }

      if (type === 'datetime') { //support for implicitly converting dates to datetime
        interval.low = interval.low.getDateTime();
        interval.high = interval.high.getDateTime();
      }

      per = per != null ? per : defaultPer(interval);
      const items = expandFunction.call(this,interval,per);
      if (items === null) { return null; }
      results.push(...Array.from(items || []));
    }

    return results;
  }

  expandDTishInterval(interval, per) {
    if (['week', 'weeks'].includes(per.unit)) {
      per.value *= 7;
      per.unit = 'day';
    }

    // Precision Checks
    // return null if precision not applicable (e.g. gram, or minutes for dates)
    if (!interval.low.constructor.FIELDS.includes(per.unit)) { return null; }

    // open interval with null boundaries do not contribute to output
    // closed interval with null boundaries are not allowed for performance reasons
    if ((interval.low == null) || (interval.high == null)) { return null; }

    let low = interval.lowClosed ? interval.low : interval.low.successor();
    let high = interval.highClosed ? interval.high : interval.high.predecessor();
    if (low.after(high)) { return []; }
    if (interval.low.isLessPrecise(per.unit) || interval.high.isLessPrecise(per.unit)) { return []; }

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

  truncateToPrecision(value, unit) {
    // If interval boundaries are more precise than per quantity, truncate to
    // the precision specified by the per
    let shouldTruncate = false;
    for (let field of value.constructor.FIELDS) {
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

  expandQuantityInterval(interval, per) {
    // we want to convert everything to the more precise of the interval.low or per
    let result_units;
    if (compare_units(interval.low.unit, per.unit) > 0) { //interval.low.unit is 'bigger' aka les precise
      result_units = per.unit;
    } else {
      result_units = interval.low.unit;
    }
    const low_value = convert_value(interval.low.value, interval.low.unit, result_units);
    const high_value = convert_value(interval.high.value, interval.high.unit, result_units);
    const per_value = convert_value(per.value, per.unit, result_units);

    // return null if unit conversion failed, must have mismatched units
    if (!((low_value != null) && (high_value != null) && (per_value != null))) { return null; }

    const results = this.makeNumericIntervalList(low_value, high_value, interval.lowClosed, interval.highClosed, per_value);

    for (let itvl of results) {
      itvl.low = new Quantity(itvl.low, result_units);
      itvl.high = new Quantity(itvl.high, result_units);
    }
    return results;
  }

  expandNumericInterval(interval, per) {
    if ((per.unit !== '1') && (per.unit !== '')) { return null; }
    return this.makeNumericIntervalList(interval.low, interval.high, interval.lowClosed, interval.highClosed, per.value);
  }

  makeNumericIntervalList(low, high, lowClosed, highClosed, perValue) {
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

    if (low > high) { return []; }
    if ((low == null) || (high == null)) { return []; }

    const perUnitSize = perIsDecimal ? 0.00000001 : 1;

    if ((low === high) && Number.isInteger(low) && Number.isInteger(high) && !Number.isInteger(perValue)) {
      high = parseFloat((high + 1).toFixed(decimalPrecision));
    }

    let current_low = low;
    const results = [];

    if (perValue > ((high - low) + perUnitSize)) { return []; }
    let current_high = parseFloat(((current_low + perValue) - perUnitSize).toFixed(decimalPrecision));
    let intervalToAdd = new dtivl.Interval(current_low, current_high, true, true);
    while (intervalToAdd.high <= high) {
      results.push(intervalToAdd);
      current_low = parseFloat((current_low + perValue).toFixed(decimalPrecision));
      current_high = parseFloat(((current_low + perValue) - perUnitSize).toFixed(decimalPrecision));
      intervalToAdd = new dtivl.Interval(current_low, current_high, true, true);
    }

    return results;
  }
});

module.exports.Collapse = (Collapse = class Collapse extends Expression {
  constructor(json) {
    super(...arguments);
  }

  exec(ctx) {
    // collapse(argument List<Interval<T>>, per Quantity) List<Interval<T>>
    const [intervals, perWidth] = Array.from(this.execArgs(ctx));
    return collapseIntervals(intervals, perWidth);
  }
});

var collapseIntervals = function(intervals, perWidth) {
  // Clone intervals so this function remains idempotent
  const intervalsClone = [];
  for (let interval of intervals) {
    // The spec says to ignore null intervals
    if (interval != null) {
      intervalsClone.push(interval.copy());
    }
  }

  // If the list is null, return null
  if ((intervals == null)) {
    return null;
  } else if ((intervalsClone != null ? intervalsClone.length : undefined) <= 1) {
    return intervalsClone;
  } else {
    // If the per argument is null, the default unit interval for the point type
    // of the intervals involved will be used (i.e. the interval that has a
    // width equal to the result of the successor function for the point type).
    if ((perWidth == null)) {
      perWidth = intervalsClone[0].getPointSize();
    }

    // sort intervalsClone by start
    intervalsClone.sort(function(a,b){
      if (typeof (a.low != null ? a.low.before : undefined) === 'function') {
        if ((b.low != null) && a.low.before(b.low)) { return -1; }
        if ((b.low == null) || a.low.after(b.low)) { return 1; }
      } else if ((a.low != null) && (b.low != null)) {
        if (a.low < b.low) { return -1; }
        if (a.low > b.low) { return 1; }
      } else if ((a.low != null) && (b.low == null)) {
        return 1;
      } else if ((a.low == null) && (b.low != null)) {
        return -1;
      }
      // if both lows are undefined, sort by high
      if (typeof (a.high != null ? a.high.before : undefined) === 'function') {
        if ((b.high == null) || a.high.before(b.high)) { return -1; }
        if (a.high.after(b.high)) { return 1; }
      } else if ((a.high != null) && (b.high != null)) {
        if (a.high < b.high) { return -1; }
        if (a.high > b.high) { return 1; }
      } else if ((a.high != null) && (b.high == null)) {
        return -1;
      } else if ((a.high == null) && (b.high != null)) {
        return 1;
      }
      return 0;
    });

    // collapse intervals as necessary
    const collapsedIntervals = [];
    let a = intervalsClone.shift();
    let b = intervalsClone.shift();

    while (b) {
      if (typeof (b.low != null ? b.low.durationBetween : undefined) === 'function') {
        // handle DateTimes using durationBetween
        if (a.high != null ? a.high.sameOrAfter(b.low) : undefined) { // overlap
          if ((b.high == null) || b.high.after(a.high)) { a.high = b.high; }
        } else if ((a.high != null ? a.high.durationBetween(b.low, perWidth.unit).high : undefined) <= perWidth.value) {
          a.high = b.high;
        } else {
          collapsedIntervals.push(a);
          a = b;
        }
      } else if (typeof (b.low != null ? b.low.sameOrBefore : undefined) === 'function') {
        if ((a.high != null) && b.low.sameOrBefore(doAddition(a.high, perWidth))) {
          if ((b.high == null) || b.high.after(a.high)) { a.high = b.high; }
        } else {
          collapsedIntervals.push(a);
          a = b;
        }
      } else {
        if ((b.low - a.high) <= perWidth.value) {
          if ((b.high > a.high) || (b.high == null)) { a.high = b.high; }
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
};

var truncateDecimal = function(decimal, decimalPlaces) {
  // like parseFloat().toFixed() but floor rather than round
  // Needed for when per precision is less than the interval input precision
  const re = new RegExp('^-?\\d+(?:\.\\d{0,' + (decimalPlaces || -1) + '})?');
  return parseFloat(decimal.toString().match(re)[0]);
};

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}