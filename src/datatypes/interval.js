/* eslint-disable
    no-unused-vars,
*/
// TODO: This file was created by bulk-decaffeinate.
// Fix any style issues and re-enable lint.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let Interval;
const { DateTime } = require('./datetime');
const { Uncertainty } = require('./uncertainty');
const { Quantity, doSubtraction } = require('../datatypes/quantity');
const { ThreeValuedLogic } = require('./logic');
const { successor, predecessor, maxValueForInstance, minValueForInstance } = require('../util/math');
const cmp = require('../util/comparison');

module.exports.Interval = (Interval = (function() {
  let areDateTimes = undefined;
  let areNumeric = undefined;
  let lowestNumericUncertainty = undefined;
  let highestNumericUncertainty = undefined;
  Interval = class Interval {
    static initClass() {
  
      // Define a simple getter to allow type-checking of this class without instanceof
      // and in a way that survives minification (as opposed to checking constructor.name)
      Object.defineProperties(this.prototype, {
        isInterval: {
          get() { return true; }
        }
      }
      );
  
      areDateTimes = (x, y) => [x, y].every(z => z != null ? z.isDateTime : undefined);
  
      areNumeric = (x, y) => [x, y].every(z => (typeof z === 'number') || ((z != null ? z.isUncertainty : undefined) && (typeof z.low === 'number')));
  
      lowestNumericUncertainty = function(x, y) {
        if (!(x != null ? x.isUncertainty : undefined)) { x = new Uncertainty(x); }
        if (!(y != null ? y.isUncertainty : undefined)) { y = new Uncertainty(y); }
        const low = x.low < y.low ? x.low : y.low;
        const high = x.high < y.high ? x.high : y.high;
        if (low !== high) { return new Uncertainty(low, high); } else { return low; }
      };
  
      highestNumericUncertainty = function(x, y) {
        if (!(x != null ? x.isUncertainty : undefined)) { x = new Uncertainty(x); }
        if (!(y != null ? y.isUncertainty : undefined)) { y = new Uncertainty(y); }
        const low = x.low > y.low ? x.low : y.low;
        const high = x.high > y.high ? x.high : y.high;
        if (low !== high) { return new Uncertainty(low, high); } else { return low; }
      };
    }
    constructor(low, high, lowClosed = true, highClosed = true) {
      this.low = low;
      this.high = high;
      this.lowClosed = lowClosed;
      this.highClosed = highClosed;
    }

    copy() {
      let newLow = this.low;
      let newHigh = this.high;
      if ((this.low != null) && (typeof this.low.copy === 'function')) {
        newLow = this.low.copy();
      }
      if ((this.high != null) && (typeof this.high.copy === 'function')) {
        newHigh = this.high.copy();
      }

      return new Interval(newLow, newHigh, this.lowClosed, this.highClosed);
    }

    contains(item, precision) {
      // These first two checks ensure correct handling of edge case where an item equals the closed boundary
      if (this.lowClosed && (this.low != null) && cmp.equals(this.low, item)) {
        return true;
      }
      if (this.highClosed && (this.high != null) && cmp.equals(this.high, item)) {
        return true;
      }
      if (item != null ? item.isInterval : undefined) { throw new Error('Argument to contains must be a point'); }
      const lowFn = (() => { switch (false) {
      case !this.lowClosed || !(this.low == null): return () => true;
      case !this.lowClosed: return cmp.lessThanOrEquals;
      default: return cmp.lessThan;
      } })();
      const highFn = (() => { switch (false) {
      case !this.highClosed || !(this.high == null): return () => true;
      case !this.highClosed: return cmp.greaterThanOrEquals;
      default: return cmp.greaterThan;
      } })();
      return ThreeValuedLogic.and(
        lowFn(this.low, item, precision),
        highFn(this.high, item, precision)
      );
    }

    properlyIncludes(other, precision) {
      if (!(other != null ? other.isInterval : undefined)) { throw new Error('Argument to properlyIncludes must be an interval'); }
      return ThreeValuedLogic.and(
        this.includes(other, precision),
        ThreeValuedLogic.not(other.includes(this, precision))
      );
    }

    includes(other, precision) {
      if (!(other != null ? other.isInterval : undefined)) {
        return this.contains(other,precision);
      }
      const a = this.toClosed();
      const b = other.toClosed();
      return ThreeValuedLogic.and(
        cmp.lessThanOrEquals(a.low, b.low, precision),
        cmp.greaterThanOrEquals(a.high, b.high, precision)
      );
    }

    includedIn(other, precision) {
      // For the point overload, this operator is a synonym for the in operator
      if (!(other != null ? other.isInterval : undefined)) {
        return this.contains(other, precision);
      } else {
        return other.includes(this);
      }
    }

    overlaps(item, precision) {
      const closed = this.toClosed();
      const [low, high] = Array.from((() => {
        if (item != null ? item.isInterval : undefined) {
          const itemClosed = item.toClosed();
          return [itemClosed.low, itemClosed.high];
        } else {
          return [item, item];
        }
      })());
      return ThreeValuedLogic.and(
        cmp.lessThanOrEquals(closed.low, high, precision),
        cmp.greaterThanOrEquals(closed.high, low, precision)
      );
    }

    overlapsAfter(item, precision) {
      const closed = this.toClosed();
      const high = (item != null ? item.isInterval : undefined) ? item.toClosed().high : item;
      return ThreeValuedLogic.and(
        cmp.lessThanOrEquals(closed.low, high, precision),
        cmp.greaterThan(closed.high, high, precision)
      );
    }

    overlapsBefore(item, precision) {
      const closed = this.toClosed();
      const low = (item != null ? item.isInterval : undefined) ? item.toClosed().low : item;
      return ThreeValuedLogic.and(
        cmp.lessThan(closed.low, low, precision),
        cmp.greaterThanOrEquals(closed.high, low, precision)
      );
    }

    union(other) {
      if (!(other != null ? other.isInterval : undefined)) { throw new Error('Argument to union must be an interval'); }
      // Note that interval union is only defined if the arguments overlap or meet.
      if (this.overlaps(other) || this.meets(other)) {
        const [a, b] = Array.from([this.toClosed(), other.toClosed()]);
        const [l, lc] = Array.from((() => { switch (false) {
        case !cmp.lessThanOrEquals(a.low, b.low): return [this.low, this.lowClosed];
        case !cmp.greaterThanOrEquals(a.low, b.low): return [other.low, other.lowClosed];
        case !areNumeric(a.low, b.low): return [lowestNumericUncertainty(a.low, b.low), true];
          // TODO: Do we need to support quantities here?
        case !areDateTimes(a.low, b.low) || !a.low.isMorePrecise(b.low): return [other.low, other.lowClosed];
        default: return [this.low, this.lowClosed];
        } })());
        const [h, hc] = Array.from((() => { switch (false) {
        case !cmp.greaterThanOrEquals(a.high, b.high): return [this.high, this.highClosed];
        case !cmp.lessThanOrEquals(a.high, b.high): return [other.high, other.highClosed];
        case !areNumeric(a.high, b.high): return [highestNumericUncertainty(a.high, b.high), true];
          // TODO: Do we need to support quantities here?
        case !areDateTimes(a.high, b.high) || !a.high.isMorePrecise(b.high): return [other.high, other.highClosed];
        default: return [this.high, this.highClosed];
        } })());
        return new Interval(l, h, lc, hc);
      } else {
        return null;
      }
    }

    intersect(other) {
      if (!(other != null ? other.isInterval : undefined)) { throw new Error('Argument to union must be an interval'); }
      // Note that interval union is only defined if the arguments overlap.
      if (this.overlaps(other)) {
        const [a, b] = Array.from([this.toClosed(), other.toClosed()]);
        const [l, lc] = Array.from((() => { switch (false) {
        case !cmp.greaterThanOrEquals(a.low, b.low): return [this.low, this.lowClosed];
        case !cmp.lessThanOrEquals(a.low, b.low): return [other.low, other.lowClosed];
        case !areNumeric(a.low, b.low): return [highestNumericUncertainty(a.low, b.low), true];
          // TODO: Do we need to support quantities here?
        case !areDateTimes(a.low, b.low) || !b.low.isMorePrecise(a.low): return [other.low, other.lowClosed];
        default: return [this.low, this.lowClosed];
        } })());
        const [h, hc] = Array.from((() => { switch (false) {
        case !cmp.lessThanOrEquals(a.high, b.high): return [this.high, this.highClosed];
        case !cmp.greaterThanOrEquals(a.high, b.high): return [other.high, other.highClosed];
        case !areNumeric(a.high, b.high): return [lowestNumericUncertainty(a.high, b.high), true];
          // TODO: Do we need to support quantities here?
        case !areDateTimes(a.high, b.high) || !b.high.isMorePrecise(a.high): return [other.high, other.highClosed];
        default: return [this.high, this.highClosed];
        } })());
        return new Interval(l, h, lc, hc);
      } else {
        return null;
      }
    }

    except(other) {
      if (other === null) { return null; }
      if (!(other != null ? other.isInterval : undefined)) { throw new Error('Argument to except must be an interval'); }

      const ol = this.overlaps(other);
      if (ol === true) {
        const olb = this.overlapsBefore(other);
        const ola = this.overlapsAfter(other);
        if ((olb === true) && (ola === false)) { return new Interval(this.low, other.low, this.lowClosed, !other.lowClosed);
        } else if ((ola === true) && (olb === false)) { return new Interval(other.high, this.high, !other.highClosed, this.highClosed);
        } else { return null; }
      } else if (ol === false) {
        return this;
      } else { // ol is null
        return null;
      }
    }

    sameAs(other, precision) {
      // This large if and else if block handles the scenarios where there is an open ended null
      // If both lows or highs exists, it can be determined that intervals are not Same As
      if (((this.low != null) && (other.low != null) && (this.high == null) && (other.high != null) && !this.highClosed) ||
         ((this.low != null) && (other.low != null) && (this.high != null) && (other.high == null) && !other.highClosed) ||
         ((this.low != null) && (other.low != null) && (this.high == null) && (other.high == null) && !other.highClosed && !this.highClosed)) {
        if (typeof this.low === 'number') {
          if (!(this.start() === other.start())) { return false; }
        } else {
          if (!(this.start().sameAs(other.start(), precision))) { return false; }
        }
      } else if (((this.low != null) && (other.low == null) && (this.high != null) && (other.high != null)) ||
              ((this.low == null) && (other.low != null) && (this.high != null) && (other.high != null)) ||
              ((this.low == null) && (other.low == null) && (this.high != null) && (other.high != null))) {
        if (typeof this.high === 'number') {
          if (!(this.end() === other.end())) { return false; }
        } else {
          if (!(this.end().sameAs(other.end(), precision))) { return false; }
        }
      }

      // Checks to see if any of the Intervals have a open, null boundary
      if (((this.low == null) && !this.lowClosed) ||
         ((this.high == null) && !this.highClosed) ||
         ((other.low == null) && !other.lowClosed) ||
         ((other.high == null) && !other.highClosed)) {
        return null;
      }

      // For the special cases where @ is Interval[null,null]
      if (this.lowClosed && (this.low == null) && this.highClosed && (this.high == null)) {
        return other.lowClosed && (other.low == null) && other.highClosed && (other.high == null);
      }

      // For the special case where Interval[...] same as Interval[null,null] should return false
      // This accounts for the inverse of the if statement above: where the second Interval is [null,null] and not the first Interval
      // The reason why this isn't caught below is due to how start() and end() work
      // There is no way to tell the datatype for MIN and MAX if both boundaries are null
      if (other.lowClosed && (other.low == null) && other.highClosed && (other.high == null)) {
        return false;
      }

      if (typeof this.low === 'number') {
        return (this.start() === other.start()) && (this.end() === other.end());
      } else {
        return this.start().sameAs(other.start(), precision) && this.end().sameAs(other.end(), precision);
      }
    }

    sameOrBefore(other, precision) {
      if ((this.end() == null) || ((other != null ? other.start() : undefined) == null)) {
        return null;
      } else {
        return this.end().sameOrBefore(other.start(), precision);
      }
    }

    sameOrAfter(other, precision) {
      if ((this.start() == null) || ((other != null ? other.end() : undefined) == null)) {
        return null;
      } else {
        return this.start().sameOrAfter(other.end(), precision);
      }
    }

    equals(other) {
      if (other != null ? other.isInterval : undefined) {
        const [a, b] = Array.from([this.toClosed(), other.toClosed()]);
        return ThreeValuedLogic.and(
          cmp.equals(a.low, b.low),
          cmp.equals(a.high, b.high)
        );
      } else {
        return false;
      }
    }

    after(other, precision) {
      const closed = this.toClosed();
      // Meets spec, but not 100% correct (e.g., (null, 5] after [6, 10] --> null)
      // Simple way to fix it: and w/ not overlaps
      if (other.toClosed) {
        return cmp.greaterThan(closed.low, other.toClosed().high, precision);
      } else {
        return cmp.greaterThan(closed.low, other, precision);
      }
    }

    before(other, precision) {
      const closed = this.toClosed();
      // Meets spec, but not 100% correct (e.g., (null, 5] after [6, 10] --> null)
      // Simple way to fix it: and w/ not overlaps
      if (other.toClosed) {
        return cmp.lessThan(closed.high, other.toClosed().low, precision);
      } else {
        return cmp.lessThan(closed.high, other, precision);
      }
    }

    meets(other, precision) {
      return ThreeValuedLogic.or(
        this.meetsBefore(other, precision),
        this.meetsAfter(other, precision)
      );
    }

    meetsAfter(other, precision) {
      try {
        if ((precision != null) && (this.low != null ? this.low.isDateTime : undefined)) {
          return this.toClosed().low.sameAs(__guard__(other.toClosed().high, x => x.add(1, precision)), precision);
        } else {
          return cmp.equals(this.toClosed().low, successor(other.toClosed().high));
        }
      } catch (error) {
        return false;
      }
    }

    meetsBefore(other, precision) {
      try {
        if ((precision != null) && (this.high != null ? this.high.isDateTime : undefined)) {
          return this.toClosed().high.sameAs(__guard__(other.toClosed().low, x => x.add(-1, precision)), precision);
        } else {
          return cmp.equals(this.toClosed().high, predecessor(other.toClosed().low));
        }
      } catch (error) {
        return false;
      }
    }

    start() {
      if ((this.low == null)) {
        if (this.lowClosed) {
          return minValueForInstance(this.high);
        } else {
          return this.low;
        }
      }
      return this.toClosed().low;
    }

    end() {
      if ((this.high == null)) {
        if (this.highClosed) {
          return maxValueForInstance(this.low);
        } else {
          return this.high;
        }
      }
      return this.toClosed().high;
    }

    starts(other, precision) {
      let startEqual;
      if ((precision != null) && (this.low != null ? this.low.isDateTime : undefined)) {
        startEqual = this.low.sameAs(other.low, precision);
      } else {
        startEqual = cmp.equals(this.low, other.low);
      }
      const endLessThanOrEqual = cmp.lessThanOrEquals(this.high, other.high, precision);
      return startEqual && endLessThanOrEqual;
    }

    ends(other, precision) {
      let endEqual;
      const startGreaterThanOrEqual = cmp.greaterThanOrEquals(this.low, other.low, precision);
      if ((precision != null) && (this.low != null ? this.low.isDateTime : undefined)) {
        endEqual = this.high.sameAs(other.high, precision);
      } else {
        endEqual = cmp.equals(this.high, other.high);
      }
      return startGreaterThanOrEqual && endEqual;
    }

    width() {
      let diff;
      if (((this.low != null) && (this.low.isDateTime || this.low.isDate || this.low.isTime)) ||
         ((this.high != null) && (this.high.isDateTime || this.high.isDate || this.high.isTime))) {
        throw new Error('Width of Date, DateTime, and Time intervals is not supported');
      }

      const closed = this.toClosed();
      if ((closed.low != null ? closed.low.isUncertainty : undefined) || (closed.high != null ? closed.high.isUncertainty : undefined)) {
        return null;
      } else if (closed.low.isQuantity) {
        if (closed.low.unit !== closed.high.unit) {
          throw new Error('Cannot calculate width of Quantity Interval with different units');
        }
        const lowValue = closed.low.value;
        const highValue = closed.high.value;
        diff = Math.abs(highValue - lowValue);
        Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
        return new Quantity(diff, closed.low.unit);
      } else {
        // TODO: Fix precision to 8 decimals in other places that return numbers
        diff = Math.abs(closed.high - closed.low);
        return Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
      }
    }

    size() {
      let diff;
      const pointSize = this.getPointSize();
      if (((this.low != null) && (this.low.isDateTime || this.low.isDate || this.low.isTime)) ||
         ((this.high != null) && (this.high.isDateTime || this.high.isDate || this.high.isTime))) {
        throw new Error('Size of Date, DateTime, and Time intervals is not supported');
      }

      const closed = this.toClosed();
      if ((closed.low != null ? closed.low.isUncertainty : undefined) || (closed.high != null ? closed.high.isUncertainty : undefined)) {
        return null;
      } else if (closed.low.isQuantity) {
        if (closed.low.unit !== closed.high.unit) {
          throw new Error('Cannot calculate size of Quantity Interval with different units');
        }
        const lowValue = closed.low.value;
        const highValue = closed.high.value;
        diff = Math.abs(highValue - lowValue) + pointSize.value;
        Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
        return new Quantity(diff, closed.low.unit);
      } else {
        diff = Math.abs(closed.high - closed.low) + pointSize.value;
        return Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
      }
    }

    getPointSize() {
      let pointSize, precisionUnits;
      if (this.low != null) {
        if (this.low.isDateTime) {
          precisionUnits = this.low.getPrecision();
          pointSize = new Quantity(1, precisionUnits);
        } else if (this.low.isQuantity) {
          pointSize = doSubtraction(successor(this.low), this.low);
        } else {
          pointSize = successor(this.low) - this.low;
        }
      } else if (this.high != null) {
        if (this.high.isDateTime) {
          precisionUnits = this.high.getPrecision();
          pointSize = new Quantity(1, precisionUnits);
        } else if (this.high.isQuantity) {
          pointSize = doSubtraction(successor(this.high), this.high);
        } else {
          pointSize = successor(this.high) - this.high;
        }
      } else {
        throw new Error('Point type of intervals cannot be determined.');
      }

      if (typeof pointSize === 'number') {
        pointSize = new Quantity(pointSize, '1');
      }

      return pointSize;
    }

    toClosed() {
      let high, low;
      const point = this.low != null ? this.low : this.high;
      if ((typeof(point) === 'number') || (point != null ? point.isDateTime : undefined) || (point != null ? point.isQuantity : undefined) || (point != null ? point.isDate : undefined)) {
        low = (() => { switch (false) {
        case !this.lowClosed || !(this.low == null): return minValueForInstance(point);
        case !!this.lowClosed || (this.low == null): return successor(this.low);
        default: return this.low;
        } })();
        high = (() => { switch (false) {
        case !this.highClosed || !(this.high == null): return maxValueForInstance(point);
        case !!this.highClosed || (this.high == null): return predecessor(this.high);
        default: return this.high;
        } })();
        if ((low == null)) { low = new Uncertainty(minValueForInstance(point), high); }
        if ((high == null)) { high = new Uncertainty(low, maxValueForInstance(point)); }
        return new Interval(low, high, true, true);
      } else {
        return new Interval(this.low, this.high, true, true);
      }
    }

    toString() {
      const start = this.lowClosed ? '[' : '(';
      const end = this.highClosed ? ']' : ')';
      return start + this.low.toString() + ', ' + this.high.toString() + end;
    }
  };
  Interval.initClass();
  return Interval;
})());

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}