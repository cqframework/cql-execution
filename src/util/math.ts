import { Exception } from '../datatypes/exception';
import { Quantity } from '../datatypes/quantity';
import {
  MIN_DATETIME_VALUE,
  MAX_DATETIME_VALUE,
  MIN_DATE_VALUE,
  MAX_DATE_VALUE,
  MIN_TIME_VALUE,
  MAX_TIME_VALUE
} from '../datatypes/datetime';
import { Uncertainty } from '../datatypes/uncertainty';
import {
  ELM_INTEGER_TYPE,
  ELM_DECIMAL_TYPE,
  ELM_LONG_TYPE,
  ELM_DATETIME_TYPE,
  ELM_DATE_TYPE,
  ELM_TIME_TYPE,
  ELM_QUANTITY_TYPE
} from './elmTypes';
import {
  MAX_FLOAT_VALUE,
  MAX_INT_VALUE,
  MAX_LONG_VALUE,
  MIN_FLOAT_PRECISION_VALUE,
  MIN_FLOAT_VALUE,
  MIN_INT_VALUE,
  MIN_LONG_VALUE
} from './limits';
import { convertToCQLDateUnit, normalizeUnitsWhenPossible } from './units';

export function overflowsOrUnderflows(value: any, type?: string): boolean {
  if (value == null) {
    return false;
  }
  if (value.isQuantity) {
    if (!isValidDecimal(value.value)) {
      return true;
    }
  } else if (value.isTime && value.isTime()) {
    if (value.after(MAX_TIME_VALUE)) {
      return true;
    }
    if (value.before(MIN_TIME_VALUE)) {
      return true;
    }
  } else if (value.isDateTime) {
    if (value.after(MAX_DATETIME_VALUE)) {
      return true;
    }
    if (value.before(MIN_DATETIME_VALUE)) {
      return true;
    }
  } else if (value.isDate) {
    if (value.after(MAX_DATE_VALUE)) {
      return true;
    }
    if (value.before(MIN_DATE_VALUE)) {
      return true;
    }
  } else if (typeof value === 'bigint') {
    if (!isValidLong(value)) {
      return true;
    }
  } else if (typeof value === 'number') {
    // Only consider it an integer if it looks like an integer (even if the type says it's an integer).
    // We need to do this because the CQL-to-ELM Translator's implementation of Power may incorrectly tag
    // a result as an Integer when it really is a decimal (e.g., when the exponent is a negative number).
    const isInteger = Number.isInteger(value) && (type === ELM_INTEGER_TYPE || type == null);
    if (isInteger) {
      if (!isValidInteger(value)) {
        return true;
      }
    } else if (!isValidDecimal(value)) {
      return true;
    }
  } else if (value.isUncertainty) {
    return overflowsOrUnderflows(value.low, type) || overflowsOrUnderflows(value.high, type);
  }
  return false;
}

export function isValidInteger(integer: any) {
  if (!Number.isInteger(integer)) {
    return false;
  }
  if (integer > MAX_INT_VALUE) {
    return false;
  }
  if (integer < MIN_INT_VALUE) {
    return false;
  }
  return true;
}

export function isValidLong(long: any) {
  if (typeof long !== 'bigint') {
    return false;
  }
  if (long > MAX_LONG_VALUE) {
    return false;
  }
  if (long < MIN_LONG_VALUE) {
    return false;
  }
  return true;
}

export function isValidDecimal(decimal: any) {
  if (isNaN(decimal)) {
    return false;
  }
  if (typeof decimal !== 'number') {
    return false;
  }
  if (decimal > MAX_FLOAT_VALUE) {
    return false;
  }
  if (decimal < MIN_FLOAT_VALUE) {
    return false;
  }
  return true;
}

export function add(a: any, b: any, type?: string): any {
  if (a == null || b == null) {
    return null;
  }
  if (a?.isUncertainty || b?.isUncertainty) {
    const aLow = a?.isUncertainty ? a.low : a;
    const aHigh = a?.isUncertainty ? a.high : a;
    const bLow = b?.isUncertainty ? b.low : b;
    const bHigh = b?.isUncertainty ? b.high : b;
    const low = add(aLow, bLow, type);
    const high = add(aHigh, bHigh, type);
    return low == null || high == null ? null : new Uncertainty(low, high);
  }

  if (typeof a === 'bigint') {
    const sum = a + (typeof b === 'bigint' ? b : BigInt(b));
    return overflowsOrUnderflows(sum, ELM_LONG_TYPE) ? null : sum;
  }
  if (typeof b === 'bigint') {
    const sum = BigInt(a) + b;
    return overflowsOrUnderflows(sum, ELM_LONG_TYPE) ? null : sum;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    const sum = a + b;
    const numberType =
      type ?? (Number.isInteger(a) && Number.isInteger(b) ? ELM_INTEGER_TYPE : ELM_DECIMAL_TYPE);
    return overflowsOrUnderflows(sum, numberType) ? null : sum;
  }
  if (a?.isQuantity && b?.isQuantity) {
    const [aValue, aUnit, bValue, bUnit] = normalizeUnitsWhenPossible(
      a.value,
      a.unit,
      b.value,
      b.unit
    );
    if (aUnit !== bUnit) {
      return null;
    }
    const sum = aValue + bValue;
    return overflowsOrUnderflows(sum, ELM_DECIMAL_TYPE) ? null : new Quantity(sum, aUnit);
  }
  if (b?.isQuantity && (a?.isDate || a?.isDateTime || (a?.isTime && a.isTime()))) {
    const unit = convertToCQLDateUnit(b.unit) || b.unit;
    const sum = a.copy().add(b.value, unit);
    return overflowsOrUnderflows(sum) ? null : sum;
  }

  throw new Error('Unsupported argument types.');
}

export function subtract(a: any, b: any, type?: string): any {
  if (a == null || b == null) {
    return null;
  }
  if (a?.isUncertainty || b?.isUncertainty) {
    const aLow = a?.isUncertainty ? a.low : a;
    const aHigh = a?.isUncertainty ? a.high : a;
    const bLow = b?.isUncertainty ? b.low : b;
    const bHigh = b?.isUncertainty ? b.high : b;
    const low = subtract(aLow, bHigh, type);
    const high = subtract(aHigh, bLow, type);
    return low == null || high == null ? null : new Uncertainty(low, high);
  }
  if (typeof b === 'number' || typeof b === 'bigint') {
    return add(a, -b, type);
  }
  if (b?.isQuantity) {
    return add(a, { isQuantity: true, value: -b.value, unit: b.unit }, type);
  }

  throw new Error('Unsupported argument types.');
}

export function limitDecimalPrecision<T extends number | bigint | Quantity | Uncertainty>(
  val?: T
): T | undefined {
  if (val == null) {
    return val;
  } else if (typeof val === 'number') {
    return (Math.round(val * Math.pow(10, 8)) / Math.pow(10, 8)) as T;
  } else if ((val as Quantity).isQuantity) {
    return new Quantity(
      limitDecimalPrecision((val as Quantity).value),
      (val as Quantity).unit
    ) as T;
  } else if ((val as Uncertainty).isUncertainty) {
    return new Uncertainty(
      limitDecimalPrecision((val as Uncertainty).low),
      limitDecimalPrecision((val as Uncertainty).high)
    ) as T;
  }
  return val;
}

export class OverFlowException extends Exception {}

export function successor(val: any, type?: string, precision?: string): any {
  if (typeof val === 'number') {
    const isInteger = type === ELM_INTEGER_TYPE || (type == null && Number.isInteger(val));
    if (isInteger) {
      if (val >= MAX_INT_VALUE) {
        throw new OverFlowException();
      } else {
        return val + 1;
      }
    } else {
      if (val >= MAX_FLOAT_VALUE) {
        throw new OverFlowException();
      } else {
        return val + MIN_FLOAT_PRECISION_VALUE;
      }
    }
  } else if (typeof val === 'bigint') {
    if (val >= MAX_LONG_VALUE) {
      throw new OverFlowException();
    } else {
      return val + 1n;
    }
  } else if (val && val.isTime && val.isTime()) {
    if (val.sameAs(MAX_TIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor(precision);
    }
  } else if (val && val.isDateTime) {
    if (val.sameAs(MAX_DATETIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor(precision);
    }
  } else if (val && val.isDate) {
    if (val.sameAs(MAX_DATE_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor(precision);
    }
  } else if (val && val.isUncertainty) {
    // For uncertainties, if the high is the max val, don't increment it
    const high = (() => {
      try {
        return successor(val.high, type, precision);
      } catch {
        return val.high;
      }
    })();
    return new Uncertainty(successor(val.low, type, precision), high);
  } else if (val && val.isQuantity) {
    const succ = val.clone();
    succ.value = successor(val.value, ELM_DECIMAL_TYPE);
    return succ;
  } else if (val == null) {
    return null;
  }
}

export function predecessor(val: any, type?: string, precision?: string): any {
  if (typeof val === 'number') {
    const isInteger = type === ELM_INTEGER_TYPE || (type == null && Number.isInteger(val));
    if (isInteger) {
      if (val <= MIN_INT_VALUE) {
        throw new OverFlowException();
      } else {
        return val - 1;
      }
    } else {
      if (val <= MIN_FLOAT_VALUE) {
        throw new OverFlowException();
      } else {
        return val - MIN_FLOAT_PRECISION_VALUE;
      }
    }
  } else if (typeof val === 'bigint') {
    if (val <= MIN_LONG_VALUE) {
      throw new OverFlowException();
    } else {
      return val - 1n;
    }
  } else if (val && val.isTime && val.isTime()) {
    if (val.sameAs(MIN_TIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor(precision);
    }
  } else if (val && val.isDateTime) {
    if (val.sameAs(MIN_DATETIME_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor(precision);
    }
  } else if (val && val.isDate) {
    if (val.sameAs(MIN_DATE_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor(precision);
    }
  } else if (val && val.isUncertainty) {
    // For uncertainties, if the low is the min val, don't decrement it
    const low = ((): any => {
      try {
        return predecessor(val.low, type, precision);
      } catch {
        return val.low;
      }
    })();
    return new Uncertainty(low, predecessor(val.high, type, precision));
  } else if (val && val.isQuantity) {
    const pred = val.clone();
    pred.value = predecessor(val.value, ELM_DECIMAL_TYPE);
    return pred;
  } else if (val == null) {
    return null;
  }
}

export function maxValueForInstance(val: any) {
  if (typeof val === 'number') {
    if (Number.isInteger(val)) {
      return MAX_INT_VALUE;
    } else {
      return MAX_FLOAT_VALUE;
    }
  } else if (typeof val === 'bigint') {
    return MAX_LONG_VALUE;
  } else if (val && val.isTime && val.isTime()) {
    return MAX_TIME_VALUE?.copy();
  } else if (val && val.isDateTime) {
    return MAX_DATETIME_VALUE?.copy();
  } else if (val && val.isDate) {
    return MAX_DATE_VALUE?.copy();
  } else if (val && val.isQuantity) {
    // Although the spec says max Quantity has unit '1', it doesn't make sense to change the unit,
    // especially if this is being used in the context of an interval or uncertainty since the
    // left and right sides need to be comparable in those cases.
    return new Quantity(MAX_FLOAT_VALUE, val.unit || '1');
  } else {
    return null;
  }
}

export function maxValueForType(type: string, quantityInstance?: Quantity) {
  switch (type) {
    case ELM_INTEGER_TYPE:
      return MAX_INT_VALUE;
    case ELM_LONG_TYPE:
      return MAX_LONG_VALUE;
    case ELM_DECIMAL_TYPE:
      return MAX_FLOAT_VALUE;
    case ELM_DATETIME_TYPE:
      return MAX_DATETIME_VALUE?.copy();
    case ELM_DATE_TYPE:
      return MAX_DATE_VALUE?.copy();
    case ELM_TIME_TYPE:
      return MAX_TIME_VALUE?.copy();
    case ELM_QUANTITY_TYPE: {
      // Although the spec says max Quantity has unit '1', it doesn't make sense to change the unit,
      // especially if this is being used in the context of an interval or uncertainty since the
      // left and right sides need to be comparable in those cases.
      return new Quantity(MAX_FLOAT_VALUE, quantityInstance?.unit || '1');
    }
  }
  return null;
}

export function minValueForInstance(val: any) {
  if (typeof val === 'number') {
    if (Number.isInteger(val)) {
      return MIN_INT_VALUE;
    } else {
      return MIN_FLOAT_VALUE;
    }
  } else if (typeof val === 'bigint') {
    return MIN_LONG_VALUE;
  } else if (val && val.isTime && val.isTime()) {
    return MIN_TIME_VALUE?.copy();
  } else if (val && val.isDateTime) {
    return MIN_DATETIME_VALUE?.copy();
  } else if (val && val.isDate) {
    return MIN_DATE_VALUE?.copy();
  } else if (val && val.isQuantity) {
    // Although the spec says max Quantity has unit '1', it doesn't make sense to change the unit,
    // especially if this is being used in the context of an interval or uncertainty since the
    // left and right sides need to be comparable in those cases.
    return new Quantity(MIN_FLOAT_VALUE, val.unit || '1');
  } else {
    return null;
  }
}

export function minValueForType(type: string, quantityInstance?: Quantity) {
  switch (type) {
    case ELM_INTEGER_TYPE:
      return MIN_INT_VALUE;
    case ELM_LONG_TYPE:
      return MIN_LONG_VALUE;
    case ELM_DECIMAL_TYPE:
      return MIN_FLOAT_VALUE;
    case ELM_DATETIME_TYPE:
      return MIN_DATETIME_VALUE?.copy();
    case ELM_DATE_TYPE:
      return MIN_DATE_VALUE?.copy();
    case ELM_TIME_TYPE:
      return MIN_TIME_VALUE?.copy();
    case ELM_QUANTITY_TYPE: {
      // Although the spec says max Quantity has unit '1', it doesn't make sense to change the unit,
      // especially if this is being used in the context of an interval or uncertainty since the
      // left and right sides need to be comparable in those cases.
      return new Quantity(MIN_FLOAT_VALUE, quantityInstance?.unit || '1');
    }
  }
  return null;
}

type MathFn = keyof typeof Math;

export function decimalAdjust(type: MathFn, value: any, exp: any) {
  //If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return (Math[type] as (x: number) => number)(value);
  }
  value = +value;
  exp = +exp;
  //If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  //Shift
  value = value.toString().split('e');
  let v = value[1] ? +value[1] - exp : -exp;
  value = (Math[type] as (x: number) => number)(+(value[0] + 'e' + v));
  //Shift back
  value = value.toString().split('e');
  v = value[1] ? +value[1] + exp : exp;
  return +(value[0] + 'e' + v);
}

export function decimalOrNull(value: any) {
  return isValidDecimal(value) ? value : null;
}

export function decimalLongOrNull(value: any) {
  return (typeof value === 'number' && isValidDecimal(value)) ||
    (typeof value === 'bigint' && isValidLong(value))
    ? value
    : null;
}
