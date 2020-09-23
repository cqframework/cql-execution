const { Uncertainty } = require('./uncertainty');
const { Quantity, doSubtraction } = require('../datatypes/quantity');
const { ThreeValuedLogic } = require('./logic');
const {
  successor,
  predecessor,
  maxValueForInstance,
  minValueForInstance
} = require('../util/math');
const cmp = require('../util/comparison');

class Interval {
  constructor(low, high, lowClosed, highClosed) {
    this.low = low;
    this.high = high;
    this.lowClosed = lowClosed != null ? lowClosed : true;
    this.highClosed = highClosed != null ? highClosed : true;
  }

  get isInterval() {
    return true;
  }

  copy() {
    let newLow = this.low;
    let newHigh = this.high;
    if (this.low != null && typeof this.low.copy === 'function') {
      newLow = this.low.copy();
    }
    if (this.high != null && typeof this.high.copy === 'function') {
      newHigh = this.high.copy();
    }

    return new Interval(newLow, newHigh, this.lowClosed, this.highClosed);
  }

  contains(item, precision) {
    // These first two checks ensure correct handling of edge case where an item equals the closed boundary
    if (this.lowClosed && this.low != null && cmp.equals(this.low, item)) {
      return true;
    }
    if (this.highClosed && this.high != null && cmp.equals(this.high, item)) {
      return true;
    }
    if (item != null && item.isInterval) {
      throw new Error('Argument to contains must be a point');
    }
    let lowFn;
    if (this.lowClosed && this.low == null) {
      lowFn = () => true;
    } else if (this.lowClosed) {
      lowFn = cmp.lessThanOrEquals;
    } else {
      lowFn = cmp.lessThan;
    }
    let highFn;
    if (this.highClosed && this.high == null) {
      highFn = () => true;
    } else if (this.highClosed) {
      highFn = cmp.greaterThanOrEquals;
    } else {
      highFn = cmp.greaterThan;
    }
    return ThreeValuedLogic.and(
      lowFn(this.low, item, precision),
      highFn(this.high, item, precision)
    );
  }

  properlyIncludes(other, precision) {
    if (other == null || !other.isInterval) {
      throw new Error('Argument to properlyIncludes must be an interval');
    }
    return ThreeValuedLogic.and(
      this.includes(other, precision),
      ThreeValuedLogic.not(other.includes(this, precision))
    );
  }

  includes(other, precision) {
    if (other == null || !other.isInterval) {
      return this.contains(other, precision);
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
    if (other == null || !other.isInterval) {
      return this.contains(other, precision);
    } else {
      return other.includes(this);
    }
  }

  overlaps(item, precision) {
    const closed = this.toClosed();
    const [low, high] = (() => {
      if (item != null && item.isInterval) {
        const itemClosed = item.toClosed();
        return [itemClosed.low, itemClosed.high];
      } else {
        return [item, item];
      }
    })();
    return ThreeValuedLogic.and(
      cmp.lessThanOrEquals(closed.low, high, precision),
      cmp.greaterThanOrEquals(closed.high, low, precision)
    );
  }

  overlapsAfter(item, precision) {
    const closed = this.toClosed();
    const high = item != null && item.isInterval ? item.toClosed().high : item;
    return ThreeValuedLogic.and(
      cmp.lessThanOrEquals(closed.low, high, precision),
      cmp.greaterThan(closed.high, high, precision)
    );
  }

  overlapsBefore(item, precision) {
    const closed = this.toClosed();
    const low = item != null && item.isInterval ? item.toClosed().low : item;
    return ThreeValuedLogic.and(
      cmp.lessThan(closed.low, low, precision),
      cmp.greaterThanOrEquals(closed.high, low, precision)
    );
  }

  union(other) {
    if (other == null || !other.isInterval) {
      throw new Error('Argument to union must be an interval');
    }
    // Note that interval union is only defined if the arguments overlap or meet.
    if (this.overlaps(other) || this.meets(other)) {
      const [a, b] = [this.toClosed(), other.toClosed()];
      let l, lc;
      if (cmp.lessThanOrEquals(a.low, b.low)) {
        [l, lc] = [this.low, this.lowClosed];
      } else if (cmp.greaterThanOrEquals(a.low, b.low)) {
        [l, lc] = [other.low, other.lowClosed];
      } else if (areNumeric(a.low, b.low)) {
        [l, lc] = [lowestNumericUncertainty(a.low, b.low), true];
        // TODO: Do we need to support quantities here?
      } else if (areDateTimes(a.low, b.low) && a.low.isMorePrecise(b.low)) {
        [l, lc] = [other.low, other.lowClosed];
      } else {
        [l, lc] = [this.low, this.lowClosed];
      }
      let h, hc;
      if (cmp.greaterThanOrEquals(a.high, b.high)) {
        [h, hc] = [this.high, this.highClosed];
      } else if (cmp.lessThanOrEquals(a.high, b.high)) {
        [h, hc] = [other.high, other.highClosed];
      } else if (areNumeric(a.high, b.high)) {
        [h, hc] = [highestNumericUncertainty(a.high, b.high), true];
        // TODO: Do we need to support quantities here?
      } else if (areDateTimes(a.high, b.high) && a.high.isMorePrecise(b.high)) {
        [h, hc] = [other.high, other.highClosed];
      } else {
        [h, hc] = [this.high, this.highClosed];
      }
      return new Interval(l, h, lc, hc);
    } else {
      return null;
    }
  }

  intersect(other) {
    if (other == null || !other.isInterval) {
      throw new Error('Argument to union must be an interval');
    }
    // Note that interval union is only defined if the arguments overlap.
    if (this.overlaps(other)) {
      const [a, b] = [this.toClosed(), other.toClosed()];
      let l, lc;
      if (cmp.greaterThanOrEquals(a.low, b.low)) {
        [l, lc] = [this.low, this.lowClosed];
      } else if (cmp.lessThanOrEquals(a.low, b.low)) {
        [l, lc] = [other.low, other.lowClosed];
      } else if (areNumeric(a.low, b.low)) {
        [l, lc] = [highestNumericUncertainty(a.low, b.low), true];
        // TODO: Do we need to support quantities here?
      } else if (areDateTimes(a.low, b.low) && b.low.isMorePrecise(a.low)) {
        [l, lc] = [other.low, other.lowClosed];
      } else {
        [l, lc] = [this.low, this.lowClosed];
      }
      let h, hc;
      if (cmp.lessThanOrEquals(a.high, b.high)) {
        [h, hc] = [this.high, this.highClosed];
      } else if (cmp.greaterThanOrEquals(a.high, b.high)) {
        [h, hc] = [other.high, other.highClosed];
      } else if (areNumeric(a.high, b.high)) {
        [h, hc] = [lowestNumericUncertainty(a.high, b.high), true];
        // TODO: Do we need to support quantities here?
      } else if (areDateTimes(a.high, b.high) && b.high.isMorePrecise(a.high)) {
        [h, hc] = [other.high, other.highClosed];
      } else {
        [h, hc] = [this.high, this.highClosed];
      }
      return new Interval(l, h, lc, hc);
    } else {
      return null;
    }
  }

  except(other) {
    if (other === null) {
      return null;
    }
    if (other == null || !other.isInterval) {
      throw new Error('Argument to except must be an interval');
    }

    const ol = this.overlaps(other);
    if (ol === true) {
      const olb = this.overlapsBefore(other);
      const ola = this.overlapsAfter(other);
      if (olb === true && ola === false) {
        return new Interval(this.low, other.low, this.lowClosed, !other.lowClosed);
      } else if (ola === true && olb === false) {
        return new Interval(other.high, this.high, !other.highClosed, this.highClosed);
      } else {
        return null;
      }
    } else if (ol === false) {
      return this;
    } else {
      // ol is null
      return null;
    }
  }

  sameAs(other, precision) {
    // This large if and else if block handles the scenarios where there is an open ended null
    // If both lows or highs exists, it can be determined that intervals are not Same As
    if (
      (this.low != null &&
        other.low != null &&
        this.high == null &&
        other.high != null &&
        !this.highClosed) ||
      (this.low != null &&
        other.low != null &&
        this.high != null &&
        other.high == null &&
        !other.highClosed) ||
      (this.low != null &&
        other.low != null &&
        this.high == null &&
        other.high == null &&
        !other.highClosed &&
        !this.highClosed)
    ) {
      if (typeof this.low === 'number') {
        if (!(this.start() === other.start())) {
          return false;
        }
      } else {
        if (!this.start().sameAs(other.start(), precision)) {
          return false;
        }
      }
    } else if (
      (this.low != null && other.low == null && this.high != null && other.high != null) ||
      (this.low == null && other.low != null && this.high != null && other.high != null) ||
      (this.low == null && other.low == null && this.high != null && other.high != null)
    ) {
      if (typeof this.high === 'number') {
        if (!(this.end() === other.end())) {
          return false;
        }
      } else {
        if (!this.end().sameAs(other.end(), precision)) {
          return false;
        }
      }
    }

    // Checks to see if any of the Intervals have a open, null boundary
    if (
      (this.low == null && !this.lowClosed) ||
      (this.high == null && !this.highClosed) ||
      (other.low == null && !other.lowClosed) ||
      (other.high == null && !other.highClosed)
    ) {
      return null;
    }

    // For the special cases where @ is Interval[null,null]
    if (this.lowClosed && this.low == null && this.highClosed && this.high == null) {
      return other.lowClosed && other.low == null && other.highClosed && other.high == null;
    }

    // For the special case where Interval[...] same as Interval[null,null] should return false.
    // This accounts for the inverse of the if statement above: where the second Interval is
    // [null,null] and not the first Interval.
    // The reason why this isn't caught below is due to how start() and end() work.
    // There is no way to tell the datatype for MIN and MAX if both boundaries are null.
    if (other.lowClosed && other.low == null && other.highClosed && other.high == null) {
      return false;
    }

    if (typeof this.low === 'number') {
      return this.start() === other.start() && this.end() === other.end();
    } else {
      return (
        this.start().sameAs(other.start(), precision) && this.end().sameAs(other.end(), precision)
      );
    }
  }

  sameOrBefore(other, precision) {
    if (this.end() == null || other == null || other.start() == null) {
      return null;
    } else {
      return this.end().sameOrBefore(other.start(), precision);
    }
  }

  sameOrAfter(other, precision) {
    if (this.start() == null || other == null || other.end() == null) {
      return null;
    } else {
      return this.start().sameOrAfter(other.end(), precision);
    }
  }

  equals(other) {
    if (other != null && other.isInterval) {
      const [a, b] = [this.toClosed(), other.toClosed()];
      return ThreeValuedLogic.and(cmp.equals(a.low, b.low), cmp.equals(a.high, b.high));
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
      if (precision != null && this.low != null && this.low.isDateTime) {
        return this.toClosed().low.sameAs(
          other.toClosed().high != null ? other.toClosed().high.add(1, precision) : null,
          precision
        );
      } else {
        return cmp.equals(this.toClosed().low, successor(other.toClosed().high));
      }
    } catch (error) {
      return false;
    }
  }

  meetsBefore(other, precision) {
    try {
      if (precision != null && this.high != null && this.high.isDateTime) {
        return this.toClosed().high.sameAs(
          other.toClosed().low != null ? other.toClosed().low.add(-1, precision) : null,
          precision
        );
      } else {
        return cmp.equals(this.toClosed().high, predecessor(other.toClosed().low));
      }
    } catch (error) {
      return false;
    }
  }

  start() {
    if (this.low == null) {
      if (this.lowClosed) {
        return minValueForInstance(this.high);
      } else {
        return this.low;
      }
    }
    return this.toClosed().low;
  }

  end() {
    if (this.high == null) {
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
    if (precision != null && this.low != null && this.low.isDateTime) {
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
    if (precision != null && (this.low != null ? this.low.isDateTime : undefined)) {
      endEqual = this.high.sameAs(other.high, precision);
    } else {
      endEqual = cmp.equals(this.high, other.high);
    }
    return startGreaterThanOrEqual && endEqual;
  }

  width() {
    if (
      (this.low != null && (this.low.isDateTime || this.low.isDate || this.low.isTime)) ||
      (this.high != null && (this.high.isDateTime || this.high.isDate || this.high.isTime))
    ) {
      throw new Error('Width of Date, DateTime, and Time intervals is not supported');
    }

    const closed = this.toClosed();
    if (
      (closed.low != null && closed.low.isUncertainty) ||
      (closed.high != null && closed.high.isUncertainty)
    ) {
      return null;
    } else if (closed.low.isQuantity) {
      if (closed.low.unit !== closed.high.unit) {
        throw new Error('Cannot calculate width of Quantity Interval with different units');
      }
      const lowValue = closed.low.value;
      const highValue = closed.high.value;
      let diff = Math.abs(highValue - lowValue);
      diff = Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
      return new Quantity(diff, closed.low.unit);
    } else {
      // TODO: Fix precision to 8 decimals in other places that return numbers
      const diff = Math.abs(closed.high - closed.low);
      return Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
    }
  }

  size() {
    const pointSize = this.getPointSize();
    if (
      (this.low != null && (this.low.isDateTime || this.low.isDate || this.low.isTime)) ||
      (this.high != null && (this.high.isDateTime || this.high.isDate || this.high.isTime))
    ) {
      throw new Error('Size of Date, DateTime, and Time intervals is not supported');
    }

    const closed = this.toClosed();
    if (
      (closed.low != null && closed.low.isUncertainty) ||
      (closed.high != null && closed.high.isUncertainty)
    ) {
      return null;
    } else if (closed.low.isQuantity) {
      if (closed.low.unit !== closed.high.unit) {
        throw new Error('Cannot calculate size of Quantity Interval with different units');
      }
      const lowValue = closed.low.value;
      const highValue = closed.high.value;
      const diff = Math.abs(highValue - lowValue) + pointSize.value;
      Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
      return new Quantity(diff, closed.low.unit);
    } else {
      const diff = Math.abs(closed.high - closed.low) + pointSize.value;
      return Math.round(diff * Math.pow(10, 8)) / Math.pow(10, 8);
    }
  }

  getPointSize() {
    let pointSize;
    if (this.low != null) {
      if (this.low.isDateTime) {
        pointSize = new Quantity(1, this.low.getPrecision());
      } else if (this.low.isQuantity) {
        pointSize = doSubtraction(successor(this.low), this.low);
      } else {
        pointSize = successor(this.low) - this.low;
      }
    } else if (this.high != null) {
      if (this.high.isDateTime) {
        pointSize = new Quantity(1, this.high.getPrecision());
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
    const point = this.low != null ? this.low : this.high;
    if (
      typeof point === 'number' ||
      (point != null && (point.isDateTime || point.isQuantity || point.isDate))
    ) {
      let low;
      if (this.lowClosed && this.low == null) {
        low = minValueForInstance(point);
      } else if (!this.lowClosed && this.low != null) {
        low = successor(this.low);
      } else {
        low = this.low;
      }
      let high;
      if (this.highClosed && this.high == null) {
        high = maxValueForInstance(point);
      } else if (!this.highClosed && this.high != null) {
        high = predecessor(this.high);
      } else {
        high = this.high;
      }
      if (low == null) {
        low = new Uncertainty(minValueForInstance(point), high);
      }
      if (high == null) {
        high = new Uncertainty(low, maxValueForInstance(point));
      }
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
}

function areDateTimes(x, y) {
  return [x, y].every(z => z != null && z.isDateTime);
}

function areNumeric(x, y) {
  return [x, y].every(z => {
    return typeof z === 'number' || (z != null && z.isUncertainty && typeof z.low === 'number');
  });
}

function lowestNumericUncertainty(x, y) {
  if (x == null || !x.isUncertainty) {
    x = new Uncertainty(x);
  }
  if (y == null || !y.isUncertainty) {
    y = new Uncertainty(y);
  }
  const low = x.low < y.low ? x.low : y.low;
  const high = x.high < y.high ? x.high : y.high;
  if (low !== high) {
    return new Uncertainty(low, high);
  } else {
    return low;
  }
}

function highestNumericUncertainty(x, y) {
  if (x == null || !x.isUncertainty) {
    x = new Uncertainty(x);
  }
  if (y == null || !y.isUncertainty) {
    y = new Uncertainty(y);
  }
  const low = x.low > y.low ? x.low : y.low;
  const high = x.high > y.high ? x.high : y.high;
  if (low !== high) {
    return new Uncertainty(low, high);
  } else {
    return low;
  }
}

module.exports = { Interval };
