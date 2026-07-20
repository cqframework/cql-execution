import { Uncertainty } from './uncertainty';
import { ThreeValuedLogic } from './logic';
import {
  successor,
  predecessor,
  maxValueForType,
  minValueForType,
  minValueForInstance,
  maxValueForInstance,
  limitDecimalPrecision,
  subtract,
  add
} from '../util/math';
import * as cmp from '../util/comparison';
import {
  ELM_INTEGER_TYPE,
  ELM_DECIMAL_TYPE,
  ELM_LONG_TYPE,
  ELM_TIME_TYPE,
  ELM_DATE_TYPE,
  ELM_DATETIME_TYPE,
  ELM_QUANTITY_TYPE,
  ELM_ANY_TYPE
} from '../util/elmTypes';
import { MIN_FLOAT_VALUE } from '../util/limits';
import { Quantity } from './quantity';

export class Interval {
  constructor(
    public low: any,
    public high: any,
    public lowClosed?: boolean | null,
    public highClosed?: boolean | null,
    public pointType: any = ELM_ANY_TYPE
  ) {
    this.lowClosed = lowClosed != null ? lowClosed : true;
    this.highClosed = highClosed != null ? highClosed : true;
    if (this.pointType == null || this.pointType === ELM_ANY_TYPE) {
      let point = low ?? high;
      if (point?.isUncertainty) {
        point = (point as Uncertainty).low ?? (point as Uncertainty).high;
      }
      if (point != null) {
        if (typeof point === 'number') {
          this.pointType = Number.isInteger(point) ? ELM_INTEGER_TYPE : ELM_DECIMAL_TYPE;
        } else if (typeof point === 'bigint') {
          this.pointType = ELM_LONG_TYPE;
        } else if (point.isTime && point.isTime()) {
          this.pointType = ELM_TIME_TYPE;
        } else if (point.isDate) {
          this.pointType = ELM_DATE_TYPE;
        } else if (point.isDateTime) {
          this.pointType = ELM_DATETIME_TYPE;
        } else if (point.isQuantity) {
          this.pointType = ELM_QUANTITY_TYPE;
        }
      }
      if (this.pointType == null) {
        this.pointType = ELM_ANY_TYPE;
      }
    }
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

    return new Interval(newLow, newHigh, this.lowClosed, this.highClosed, this.pointType);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#contains
  contains(item: any, precision?: any) {
    if (item != null && item.isInterval) {
      throw new Error('Argument to contains must be a point');
    }
    // "The contains operator for intervals returns true if the given point is equal to the starting
    // or ending point of the interval, or greater than the starting point and less than the ending
    // point... If precision is specified and the point type is a Date, DateTime, or Time type,
    // comparisons used in the operation are performed at the specified precision."
    return ThreeValuedLogic.and(
      cmp.greaterThanOrEquals(item, this.start(), precision),
      cmp.lessThanOrEquals(item, this.end(), precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#properly-includes
  properContains(item: any, precision?: any) {
    // From contains: "If the second argument is null, the result is null."
    if (item == null) {
      return null;
    } else if (item.isInterval) {
      throw new Error('Argument to contains must be a point');
    }
    // "For the interval-point overload, this operator returns true if the interval contains
    // (i.e. includes) the point, and the interval is not a unit interval containing only the
    // point."
    return ThreeValuedLogic.and(
      this.contains(item, precision),
      ThreeValuedLogic.not(cmp.equals(this.start(), this.end()))
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#properly-includes
  properlyIncludes(other: any, precision?: any) {
    // "For the interval-interval overload, if either argument is null, the result is null."
    if (other == null || !other.isInterval) {
      throw new Error('Argument to properlyIncludes must be an interval');
    }
    // "... the starting point of the first interval is less than or equal to the starting point of
    // the second interval, and the ending point of the first interval is greater than or equal to
    // the ending point of the second interval, and they are not the same interval... If precision
    // is specified and the point type is a Date, DateTime, or Time type, comparisons used in the
    // operation are performed at the specified precision."
    return ThreeValuedLogic.and(
      cmp.lessThanOrEquals(this.start(), other.start(), precision),
      cmp.greaterThanOrEquals(this.end(), other.end(), precision),
      ThreeValuedLogic.not(other.includes(this, precision))
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#includes
  includes(other: any, precision?: any) {
    // "For the interval-interval overload, if either argument is null, the result is null."
    if (other == null) {
      return null;
    }
    // "For the point-interval overload, this operator is a synonym for the contains operator."
    else if (!other.isInterval) {
      return this.contains(other, precision);
    }
    // "... the starting point of the first interval is less than or equal to the starting point of
    // the second interval, and the ending point of the first interval is greater than or equal to
    // the ending point of the second interval... If precision is specified and the point type is a
    // Date, DateTime, or Time type, comparisons used in the operation are performed at the
    // specified precision."
    return ThreeValuedLogic.and(
      cmp.lessThanOrEquals(this.start(), other.start(), precision),
      cmp.greaterThanOrEquals(this.end(), other.end(), precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#included-in
  includedIn(other: any, precision?: any) {
    // "For the interval-interval overload, if either argument is null, the result is null."
    if (other == null) {
      return null;
    } else if (other == null || !other.isInterval) {
      throw new Error('Argument to includedIn must be an interval');
    }
    // "... the starting point of the first interval is greater than or equal to the starting point
    // of the second interval, and the ending point of the first interval is less than or equal to
    // the ending point of the second interval... If precision is specified and the point type is a
    // Date, DateTime, or Time type, comparisons used in the operation are performed at the
    // specified precision."
    return ThreeValuedLogic.and(
      cmp.greaterThanOrEquals(this.start(), other.start(), precision),
      cmp.lessThanOrEquals(this.end(), other.end(), precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#overlaps
  overlaps(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }
    // "... the ending point of the first interval is greater than or equal to the starting point
    // of the second interval, and the starting point of the first interval is less than or equal
    // to the ending point of the second interval... If precision is specified and the point type
    // is a Date, DateTime, or Time type, comparisons used in the operation are performed at the
    // specified precision."
    return ThreeValuedLogic.and(
      cmp.greaterThanOrEquals(this.end(), other.start(), precision),
      cmp.lessThanOrEquals(this.start(), other.end(), precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#overlaps
  overlapsAfter(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }
    // "... the overlaps after operator returns true if the first interval overlaps the second
    // and ends after it."
    return ThreeValuedLogic.and(
      cmp.lessThanOrEquals(this.start(), other.end(), precision),
      cmp.greaterThan(this.end(), other.end(), precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#overlaps
  overlapsBefore(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }
    // "The operator overlaps before returns true if the first interval overlaps the second and
    // starts before it..."
    return ThreeValuedLogic.and(
      cmp.greaterThanOrEquals(this.end(), other.start(), precision),
      cmp.lessThan(this.start(), other.start(), precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#union
  union(other: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    } else if (!other.isInterval) {
      throw new Error('Argument to union must be an interval');
    }

    // "If the arguments do not overlap or meet, this operator returns null."
    if (!this.overlaps(other) && !this.meets(other)) {
      return null;
    }

    // "... the operator returns the interval that starts at the earliest starting point in either
    // argument, and ends at the latest ending point in either argument."
    let earliestStart;

    const thisIsEarlier = cmp.lessThan(this.start(), other.start());
    if (thisIsEarlier == null) {
      earliestStart = lowestUncertainty(this.start(), other.start());
    } else {
      earliestStart = thisIsEarlier ? this.start() : other.start();
    }
    let latestEnd;

    const thisIsLater = cmp.greaterThan(this.end(), other.end());
    if (thisIsLater == null) {
      latestEnd = highestUncertainty(this.end(), other.end());
    } else {
      latestEnd = thisIsLater ? this.end() : other.end();
    }

    return normalizeInterval(
      new Interval(earliestStart, latestEnd, true, true, this.pointType ?? other.pointType)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#intersect
  intersect(other: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    } else if (!other.isInterval) {
      throw new Error('Argument to intersect must be an interval');
    }

    // "If the arguments do not overlap, this operator returns null."
    if (!this.overlaps(other)) {
      return null;
    }

    // "... the operator returns the interval that defines the overlapping portion of both
    // arguments."
    // Note: This spec definition isn't very precise, so we'll approach it similar to union:
    // The interval that starts at the latest starting point in either argument, and ends at the
    // earliest ending point in either argument.
    let latestStart;
    const thisIsLater = cmp.greaterThan(this.start(), other.start());
    if (thisIsLater == null) {
      latestStart = highestUncertainty(this.start(), other.start());
    } else {
      latestStart = thisIsLater ? this.start() : other.start();
    }
    let earliestEnd;
    const thisIsEarlier = cmp.lessThan(this.end(), other.end());
    if (thisIsEarlier == null) {
      earliestEnd = lowestUncertainty(this.end(), other.end());
    } else {
      earliestEnd = thisIsEarlier ? this.end() : other.end();
    }

    return normalizeInterval(
      new Interval(latestStart, earliestEnd, true, true, this.pointType ?? other.pointType)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#except
  except(other: any) {
    // "If either argument is null, the result is null."
    if (other === null) {
      return null;
    } else if (!other.isInterval) {
      throw new Error('Argument to except must be an interval');
    }

    // "... this operator returns the portion of the first interval that does not overlap with the
    // second."
    // Unresolved zulip: https://chat.fhir.org/#narrow/channel/179220-cql/topic/Unions.20on.20Date.20Intervals.20w.2F.20Different.20Precision/near/609516976
    let precision;
    if (
      this.pointType === ELM_DATE_TYPE ||
      this.pointType === ELM_DATETIME_TYPE ||
      this.pointType === ELM_TIME_TYPE
    ) {
      const boundaries = [this.low, this.high, other.low, other.high];
      const leastPreciseBoundary = boundaries.reduce((least, boundary) =>
        boundary?.isLessPrecise(least) ? boundary : least
      );
      precision = leastPreciseBoundary?.getPrecision();
    }

    if (this.overlaps(other, precision) === false) {
      return this.copy();
    }

    const overlapsBefore = this.overlapsBefore(other, precision);
    const overlapsAfter = this.overlapsAfter(other, precision);
    if (overlapsBefore && !overlapsAfter) {
      return normalizeInterval(
        new Interval(this.start(), other.start(), true, false, this.pointType)
      );
    } else if (overlapsAfter && !overlapsBefore) {
      return normalizeInterval(new Interval(other.end(), this.end(), false, true, this.pointType));
    }

    return null;
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#same-as-2
  sameAs(other: any, precision?: any) {
    // "If either or both arguments are null, the result is null."
    if (other === null) {
      return null;
    }

    // "When this operator is called with a mixture of Date- and DateTime-based intervals, the
    // Date values will be implicitly converted to DateTime values as defined by the ToDateTime
    // operator."
    // NOTE: Usually the translator will handle this implicit conversion, but just in case...
    const [left, right] = performConversionIfNecessary(this, other);

    // "... the two intervals start and end at the same value, using the semantics described in the
    // Start and End operators to determine interval boundaries, and for Date, DateTime, or Time
    // value, performing the comparisons at the specified precision, as described in the Same As
    // operator for Date, DateTime, or Time values."
    if (
      left.pointType === ELM_DATE_TYPE ||
      left.pointType === ELM_DATETIME_TYPE ||
      left.pointType === ELM_TIME_TYPE
    ) {
      return ThreeValuedLogic.and(
        left.start().sameAs(right.start(), precision),
        left.end().sameAs(right.end(), precision)
      );
    } else {
      return ThreeValuedLogic.and(
        cmp.equals(left.start(), right.start()),
        cmp.equals(left.end(), right.end())
      );
    }
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#same-or-after-2
  sameOrBefore(other: any, precision?: any) {
    // "If either or both arguments are null, the result is null."
    if (other === null) {
      return null;
    }

    // "When this operator is called with a mixture of point values and intervals, the point
    // values are implicitly converted to an interval starting and ending on the given point
    // value."
    if (!other.isInterval) {
      other = new Interval(other, other, true, true, this.pointType);
    }

    // "When this operator is called with a mixture of Date- and DateTime-based intervals, the
    // Date values will be implicitly converted to DateTime values as defined by the ToDateTime
    // operator."
    // NOTE: Usually the translator will handle this implicit conversion, but just in case...
    const [left, right] = performConversionIfNecessary(this, other);

    // "... the first interval ends on or before the second one starts, using the semantics
    // described in the Start and End operators to determine interval boundaries, and for Date,
    // DateTime, or Time values, performing the comparisons at the specified precision, as
    // described in the Same or Before (Date, DateTime, or Time) operator for Date, DateTime, or
    // Time values."
    return cmp.lessThanOrEquals(left.end(), right.start(), precision);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#same-or-after-2
  sameOrAfter(other: any, precision?: any) {
    // "If either or both arguments are null, the result is null."
    if (other === null) {
      return null;
    }

    // "When this operator is called with a mixture of point values and intervals, the point
    // values are implicitly converted to an interval starting and ending on the given point
    // value."
    if (!other.isInterval) {
      other = new Interval(other, other, true, true, this.pointType);
    }

    // "When this operator is called with a mixture of Date- and DateTime-based intervals, the
    // Date values will be implicitly converted to DateTime values as defined by the ToDateTime
    // operator."
    // NOTE: Usually the translator will handle this implicit conversion, but just in case...
    const [left, right] = performConversionIfNecessary(this, other);

    // "... the first interval starts on or after the second one ends, using the semantics
    // described in the Start and End operators to determine interval boundaries, and for Date,
    // DateTime, or Time values, performing the comparisons at the specified precision, as
    // described in the Same or After (Date, DateTime, or Time) operator for Date, DateTime, or
    // Time values."
    return cmp.greaterThanOrEquals(left.start(), right.end(), precision);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#equal-1
  equals(other: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... the intervals are over the same point type..."
    if (this.pointType !== other.pointType) {
      return false;
    }

    // ... and they have the same value for the starting and ending points of the intervals as
    // determined by the Start and End operators."
    return ThreeValuedLogic.and(
      cmp.equals(this.start(), other.start()),
      cmp.equals(this.end(), other.end())
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#after-1
  after(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... For the interval-point overload, the operator returns true if the given interval
    // starts after the given point."
    if (!other.isInterval) {
      return cmp.greaterThan(this.start(), other, precision);
    }

    // "... the starting point of the first interval is greater than the ending point of the
    // second interval."
    return cmp.greaterThan(this.start(), other.end(), precision);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#before-1
  before(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "For the interval-point overload, the operator returns true if the given interval ends
    // before the given point."
    if (!other.isInterval) {
      return cmp.lessThan(this.end(), other, precision);
    }

    // "... the ending point of the first interval is less than the starting point of the
    // second interval."
    return cmp.lessThan(this.end(), other.start(), precision);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#meets
  meets(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... the ending point of the first interval is equal to the predecessor of the starting
    // point of the second, or... the starting point of the first interval is equal to the
    // successor of the ending point of the second... If precision is specified and the point type
    // is a Date, DateTime, or Time type, comparisons used in the operation are performed at the
    // specified precision."
    return ThreeValuedLogic.or(
      this.meetsBefore(other, precision),
      this.meetsAfter(other, precision)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#meets
  meetsAfter(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... the starting point of the first interval is equal to the successor of the ending point
    // of the second... If precision is specified and the point type is a Date, DateTime, or Time
    // type, comparisons used in the operation are performed at the specified precision."
    try {
      if (
        this.pointType === ELM_DATE_TYPE ||
        this.pointType === ELM_DATETIME_TYPE ||
        this.pointType === ELM_TIME_TYPE
      ) {
        return this.start()?.sameAs(successor(other.end(), other.pointType, precision), precision);
      }

      return cmp.equals(this.start(), successor(other.end(), other.pointType));
    } catch {
      return false;
    }
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#meets
  meetsBefore(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... the ending point of the first interval is equal to the predecessor of the starting
    // point of the second... If precision is specified and the point type is a Date, DateTime, or
    // Time type, comparisons used in the operation are performed at the specified precision."
    try {
      if (
        this.pointType === ELM_DATE_TYPE ||
        this.pointType === ELM_DATETIME_TYPE ||
        this.pointType === ELM_TIME_TYPE
      ) {
        return this.end()?.sameAs(
          predecessor(other.start(), other.pointType, precision),
          precision
        );
      }

      return cmp.equals(this.end(), predecessor(other.start(), other.pointType));
    } catch {
      return false;
    }
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#start
  start() {
    // "If the low boundary of the interval is closed and null, this operator returns the minimum
    // value for the point type of the interval."
    if (this.low == null) {
      const quantityInstance =
        this.high && this.pointType == ELM_QUANTITY_TYPE ? this.high : undefined;
      const minValue = minValueForType(this.pointType, quantityInstance);
      if (this.lowClosed || minValue == null) {
        return minValue;
      } else {
        // "If the low boundary of the interval is open and null, this operator returns an
        // uncertainty from the minimum value for the point type of the interval to the high
        // boundary of the interval (using End operator semantics to determine the high boundary)."
        const end = ((end: any) => (end.isUncertainty ? end.high : end))(
          this.high == null ? maxValueForType(this.pointType) : this.end()
        );
        return new Uncertainty(minValue, end);
      }
    }
    // "If the low boundary of the interval is closed and non-null, this operator returns the low
    // value of the interval... If the low boundary of the interval is open and non-null, this
    // operator returns the successor of the low value of the interval."
    return this.lowClosed ? this.low : successor(this.low, this.pointType);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#end
  end() {
    // "If the high boundary of the interval is closed and null, this operator returns the maximum
    // value for the point type of the interval."
    if (this.high == null) {
      const quantityInstance =
        this.low && this.pointType == ELM_QUANTITY_TYPE ? this.low : undefined;
      const maxValue = maxValueForType(this.pointType, quantityInstance);
      if (this.highClosed || maxValue == null) {
        return maxValue;
      } else {
        // "If the high boundary of the interval is open and null, this operator returns an
        // uncertainty from the low boundary of the interval (using Start operator semantics to
        // determine the low boundary) to the maximum value for the point type of the interval."
        const start = ((start: any) => (start.isUncertainty ? start.low : start))(
          this.low == null ? minValueForType(this.pointType) : this.start()
        );
        return new Uncertainty(start, maxValue);
      }
    }
    // "If the high boundary of the interval is closed and non-null, this operator returns the high
    // value of the interval... If the high boundary of the interval is open and non-null, this
    // operator returns the predecessor of the high value of the interval."
    return this.highClosed ? this.high : predecessor(this.high, this.pointType);
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#starts
  starts(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... the starting point of the first is equal to the starting point of the second interval
    // and the ending point of the first interval is less than or equal to the ending point of the
    // second interval."
    if (
      precision &&
      [ELM_DATETIME_TYPE, ELM_DATE_TYPE, ELM_TIME_TYPE].includes(this.pointType ?? other.pointType)
    ) {
      // "If precision is specified and the point type is a Date, DateTime, or Time type,
      // comparisons used in the operation are performed at the specified precision."
      return ThreeValuedLogic.and(
        this.start().sameAs(other.start(), precision),
        cmp.lessThanOrEquals(this.end(), other.end(), precision)
      );
    } else {
      return ThreeValuedLogic.and(
        cmp.equals(this.start(), other.start()),
        cmp.lessThanOrEquals(this.end(), other.end())
      );
    }
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#ends
  ends(other: any, precision?: any) {
    // "If either argument is null, the result is null."
    if (other == null) {
      return null;
    }

    // "... the starting point of the first interval is greater than or equal to the starting point
    // of the second, and the ending point of the first interval is equal to the ending point of
    // the second."
    if (
      precision &&
      [ELM_DATETIME_TYPE, ELM_DATE_TYPE, ELM_TIME_TYPE].includes(this.pointType ?? other.pointType)
    ) {
      // "If precision is specified and the point type is a Date, DateTime, or Time type,
      // comparisons used in the operation are performed at the specified precision."
      return ThreeValuedLogic.and(
        cmp.greaterThanOrEquals(this.start(), other.start(), precision),
        this.end().sameAs(other.end(), precision)
      );
    } else {
      return ThreeValuedLogic.and(
        cmp.greaterThanOrEquals(this.start(), other.start()),
        cmp.equals(this.end(), other.end())
      );
    }
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#width
  width() {
    // "Note that because CQL defines duration and difference operations for date and time valued
    // intervals, width is not defined for intervals of these types."
    if (
      this.pointType === ELM_DATE_TYPE ||
      this.pointType === ELM_DATETIME_TYPE ||
      this.pointType === ELM_TIME_TYPE
    ) {
      throw new Error('Width of Date, DateTime, and Time intervals is not supported');
    }

    // "The result of this operator is equivalent to invoking: (end of argument – start of argument)."
    const end = this.end();
    const start = this.start();
    return limitDecimalPrecision(subtract(end, start, this.pointType));
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#size
  size() {
    // "Note that because CQL defines duration and difference operations for date and time valued
    // intervals, size is not defined for intervals of these types."
    if (
      this.pointType === ELM_DATE_TYPE ||
      this.pointType === ELM_DATETIME_TYPE ||
      this.pointType === ELM_TIME_TYPE
    ) {
      throw new Error('Size of Date, DateTime, and Time intervals is not supported');
    }

    // "The result of this operator is equivalent to invoking:
    // (end of argument – start of argument) + point-size, where point-size is determined by
    // successor of minimum T - minimum T."
    return limitDecimalPrecision(
      add(subtract(this.end(), this.start(), this.pointType), this.getPointSize(), this.pointType)
    );
  }

  // https://build.fhir.org/ig/HL7/cql/09-b-cqlreference.html#size
  getPointSize() {
    // "... point-size is determined by successor of minimum T - minimum T"
    let minValue;
    if (this.pointType != null && this.pointType !== ELM_ANY_TYPE) {
      minValue = minValueForType(
        this.pointType,
        this.pointType === ELM_QUANTITY_TYPE ? (this.low ?? this.high) : undefined
      );
    } else {
      minValue = minValueForInstance(this.low ?? this.high);
    }

    // due to floating point issues in JS, we must use 0.0 for Decimal/Quantity instead of min
    if (minValue === MIN_FLOAT_VALUE) {
      minValue = 0.0;
    } else if ((minValue as any).isQuantity) {
      (minValue as Quantity).value = 0.0;
    }

    if (minValue != null) {
      if ((minValue as any).isDate || (minValue as any).isDatetime || (minValue as any).isTime) {
        // Legacy approach: we have been using minimum specified precision to get point size for
        // Date/DateTime/Time intervals. This makes sense to us (vs always using ms) but the spec
        // doesn't indicate this so we need to verify the expected implementation w/ the spec team.
        // E.g., point size of Interval[@2012-01, @2012-12] is 1 month, not 1 ms.
        return new Quantity(1, (this.low ?? this.high).getPrecision());
      }
      return subtract(successor(minValue, this.pointType), minValue, this.pointType);
    }

    throw new Error('Point type of interval cannot be determined.');
  }

  toClosed() {
    // Calculate the closed flags. Despite the name of this function, if a boundary is null open,
    // we cannot close the boundary because that changes its meaning from "unknown" to "max/min value"
    const lowClosed = this.lowClosed || this.low != null;
    const highClosed = this.highClosed || this.high != null;
    if (this.pointType != null && this.pointType !== ELM_ANY_TYPE) {
      let low;
      if (this.lowClosed && this.low == null) {
        low = minValueForType(this.pointType);
      } else if (!this.lowClosed && this.low != null) {
        low = successor(this.low, this.pointType);
      } else {
        low = this.low;
      }
      let high;
      if (this.highClosed && this.high == null) {
        high = maxValueForType(this.pointType);
      } else if (!this.highClosed && this.high != null) {
        high = predecessor(this.high, this.pointType);
      } else {
        high = this.high;
      }
      if (low == null) {
        low = new Uncertainty(minValueForType(this.pointType), high);
      }
      if (high == null) {
        high = new Uncertainty(low, maxValueForType(this.pointType));
      }
      return new Interval(low, high, lowClosed, highClosed);
    } else {
      return new Interval(this.low, this.high, lowClosed, highClosed);
    }
  }

  toString() {
    const start = this.lowClosed ? '[' : '(';
    const end = this.highClosed ? ']' : ')';
    return start + this.low.toString() + ', ' + this.high.toString() + end;
  }
}

// Return an interval that uses the standard null boundary conventions if appropriate:
// - low closed boundary with min value for the type is changed to null closed boundary
// - high closed boundary with max value for the type is changed to null closed boundary
// - low open boundary that is uncertainty from min value of type to max value or interval high
//   value is changed to null open boundary
// - high open boundary that is uncertainty from min value of type or interval low value to max
//   value of type is changed to null open boundary
//
// TODO: Is this necessary? Do we care how it is represented if the representations have the same
// meaning? This does affect test expectations and representation of returned results for callers.
function normalizeInterval(interval: Interval) {
  const ivl = interval.copy();
  if (ivl.low != null && ivl.lowClosed !== false) {
    if (ivl.low.isUncertainty) {
      const minValue = minValueForInstance(ivl.low.low);
      const maxValue = maxValueForInstance(ivl.low.low);
      if (
        cmp.equals(ivl.low.low, minValue) &&
        (cmp.equals(ivl.low.high, maxValue) || cmp.equals(ivl.low.high, ivl.high))
      ) {
        ivl.low = null;
        ivl.lowClosed = false;
      }
    } else if (cmp.equals(ivl.low, minValueForInstance(ivl.low))) {
      ivl.low = null;
    }
  }
  if (ivl.high != null && ivl.highClosed !== false) {
    if (ivl.high.isUncertainty) {
      const minValue = minValueForInstance(ivl.high.low);
      const maxValue = maxValueForInstance(ivl.high.low);
      if (
        cmp.equals(ivl.high.high, maxValue) &&
        (cmp.equals(ivl.high.low, minValue) || cmp.equals(ivl.high.low, ivl.low))
      ) {
        ivl.high = null;
        ivl.highClosed = false;
      }
    } else if (cmp.equals(ivl.high, maxValueForInstance(ivl.high))) {
      ivl.high = null;
    }
  }

  return ivl;
}

function performConversionIfNecessary(left: Interval, right: Interval) {
  if (left.pointType === ELM_DATE_TYPE && right.pointType === ELM_DATETIME_TYPE) {
    left = new Interval(
      left.low?.getDateTime(),
      left.high?.getDateTime(),
      left.lowClosed,
      left.highClosed,
      ELM_DATETIME_TYPE
    );
  } else if (left.pointType === ELM_DATETIME_TYPE && right.pointType === ELM_DATE_TYPE) {
    right = new Interval(
      right.low?.getDateTime(),
      right.high?.getDateTime(),
      right.lowClosed,
      right.highClosed,
      ELM_DATETIME_TYPE
    );
  }
  return [left, right];
}

function lowestUncertainty(x: any, y: any) {
  if (!x?.isUncertainty) {
    x = new Uncertainty(x);
  }
  if (!y?.isUncertainty) {
    y = new Uncertainty(y);
  }

  // Note: If the following comparisons result in null, we're dealing with date imprecision.
  // The spec doesn't currently say what to do; but it will be updated to indicate that the
  // coursest precision should be used (which is consistent with collapse)
  // https://chat.fhir.org/#narrow/channel/179220-cql/topic/Unions.20on.20Date.20Intervals.20w.2F.20Different.20Precision/near/609310186
  let low;
  const xLowIsLower = cmp.lessThan(x.low, y.low);
  if (xLowIsLower == null && x.low?.isLessPrecise) {
    low = x.low.isLessPrecise(y.low) ? x.low : y.low;
  } else {
    low = xLowIsLower ? x.low : y.low;
  }
  let high;
  const xHighIsLower = cmp.lessThan(x.high, y.high);
  if (xHighIsLower == null && x.high?.isLessPrecise) {
    high = x.high.isLessPrecise(y.high) ? x.high : y.high;
  } else {
    high = xHighIsLower ? x.high : y.high;
  }
  // use equivalent to consider nulls equal
  if (cmp.equivalent(low, high)) {
    return low;
  }
  return new Uncertainty(low, high);
}

function highestUncertainty(x: any, y: any) {
  if (!x?.isUncertainty) {
    x = new Uncertainty(x);
  }
  if (!y?.isUncertainty) {
    y = new Uncertainty(y);
  }

  // Note: If the following comparisons result in null, we're dealing with date imprecision.
  // The spec doesn't currently say what to do; but it will be updated to indicate that the
  // coursest precision should be used (which is consistent with collapse)
  // https://chat.fhir.org/#narrow/channel/179220-cql/topic/Unions.20on.20Date.20Intervals.20w.2F.20Different.20Precision/near/609310186
  let low;
  const xLowIsHigher = cmp.greaterThan(x.low, y.low);
  if (xLowIsHigher == null && x.low?.isLessPrecise) {
    low = x.low.isLessPrecise(y.low) ? x.low : y.low;
  } else {
    low = xLowIsHigher ? x.low : y.low;
  }
  let high;
  const xHighIsHigher = cmp.greaterThan(x.high, y.high);
  if (xHighIsHigher == null && x.high?.isLessPrecise) {
    high = x.high.isLessPrecise(y.high) ? x.high : y.high;
  } else {
    high = xHighIsHigher ? x.high : y.high;
  }

  // use equivalent to consider nulls equal
  if (cmp.equivalent(low, high)) {
    return low;
  }
  return new Uncertainty(low, high);
}
