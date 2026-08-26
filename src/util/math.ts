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

import { Decimal, MAX_DECIMAL_VALUE, MIN_DECIMAL_VALUE } from '../datatypes/decimal';

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
import { MAX_INT_VALUE, MAX_LONG_VALUE, MIN_INT_VALUE, MIN_LONG_VALUE } from './limits';
import { convertToCQLDateUnit, normalizeUnitsWhenPossible } from './units';

export function overflowsOrUnderflows(value: any): boolean {
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
    if (!isValidInteger(value)) {
      return true;
    }
  } else if (value.isDecimal) {
    if (!isValidDecimal(value)) {
      return true;
    }
  } else if (value.isUncertainty) {
    return overflowsOrUnderflows(value.low) || overflowsOrUnderflows(value.high);
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
  if (!decimal.isDecimal) {
    return false;
  }
  if (decimal.greaterThan(MAX_DECIMAL_VALUE)) {
    return false;
  }
  if (decimal.lessThan(MIN_DECIMAL_VALUE)) {
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

  if (a.isDecimal || b.isDecimal || type === ELM_DECIMAL_TYPE) {
    const sum = Decimal.from(a).add(Decimal.from(b));
    return overflowsOrUnderflows(sum) ? null : sum;
  }
  if (typeof a === 'bigint' || typeof b === 'bigint' || type === ELM_LONG_TYPE) {
    const sum = BigInt(a) + BigInt(b);
    return overflowsOrUnderflows(sum) ? null : sum;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    const sum = a + b;
    return overflowsOrUnderflows(sum) ? null : sum;
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
    const sum = aValue.add(bValue);
    return overflowsOrUnderflows(sum) ? null : new Quantity(sum, aUnit);
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
  if (b?.isDecimal) {
    return add(a, (b as Decimal).negate(), type);
  }
  if (b?.isQuantity) {
    // Note - this path uses a fake Quantity object to defer validation of the unit
    return add(a, { isQuantity: true, value: b.value.negate(), unit: b.unit }, type);
  }

  throw new Error('Unsupported argument types.');
}

export function multiply(a: any, b: any, type?: string) {
  if (a.isDecimal || b.isDecimal || type === ELM_DECIMAL_TYPE) {
    const product = Decimal.from(a).multiplyBy(b);
    return overflowsOrUnderflows(product) ? null : product;
  }
  if (typeof a === 'bigint' || typeof b === 'bigint' || type === ELM_LONG_TYPE) {
    const product = BigInt(a) * BigInt(b);
    return overflowsOrUnderflows(product) ? null : product;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    const product = a * b;
    return overflowsOrUnderflows(product) ? null : product;
  }

  throw new Error('Unsupported argument types.');
}

export function divide(a: any, b: any, type?: string) {
  if (a.isDecimal || b.isDecimal || type === ELM_DECIMAL_TYPE) {
    b = Decimal.from(b);
    if (b.equals(0)) {
      return null;
    }
    const quotient = Decimal.from(a).divideBy(b);
    return overflowsOrUnderflows(quotient) ? null : quotient;
  }
  if (typeof a === 'bigint' || typeof b === 'bigint' || type === ELM_LONG_TYPE) {
    if (b === 0 || b === 0n) {
      return null;
    }
    // BigInt division is inherently truncated, eg 10n / 3n = 3n
    const quotient = BigInt(a) / BigInt(b);
    return overflowsOrUnderflows(quotient) ? null : quotient;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    if (b === 0) {
      return null;
    }
    // here we need to truncate manually to ensure the value is an integer
    const quotient = Math.trunc(a / b);
    return overflowsOrUnderflows(quotient) ? null : quotient;
  }

  throw new Error('Unsupported argument types.');
}

export function limitDecimalPrecision<
  T extends number | bigint | Quantity | Uncertainty | Decimal | undefined
>(val?: T): T | undefined {
  if (val == null) {
    return val;
  } else if (typeof val === 'number') {
    return (Math.round(val * Math.pow(10, 8)) / Math.pow(10, 8)) as T;
  } else if ((val as Quantity).isQuantity) {
    return new Quantity(
      limitDecimalPrecision((val as Quantity).value) as Decimal,
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

export function successor(val: any, precision?: string): any {
  if (typeof val === 'number') {
    if (val >= MAX_INT_VALUE) {
      throw new OverFlowException();
    } else {
      return val + 1;
    }
  } else if (typeof val === 'bigint') {
    if (val >= MAX_LONG_VALUE) {
      throw new OverFlowException();
    } else {
      return val + 1n;
    }
  } else if (val && val.isDecimal) {
    if (val.greaterThanOrEquals(MAX_DECIMAL_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.successor();
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
        return successor(val.high, precision);
      } catch {
        return val.high;
      }
    })();
    return new Uncertainty(successor(val.low, precision), high);
  } else if (val && val.isQuantity) {
    const succ = val.clone();
    succ.value = successor(val.value);
    return succ;
  } else if (val == null) {
    return null;
  }
}

export function predecessor(val: any, precision?: string): any {
  if (typeof val === 'number') {
    if (val <= MIN_INT_VALUE) {
      throw new OverFlowException();
    } else {
      return val - 1;
    }
  } else if (typeof val === 'bigint') {
    if (val <= MIN_LONG_VALUE) {
      throw new OverFlowException();
    } else {
      return val - 1n;
    }
  } else if (val && val.isDecimal) {
    if (val.lessThanOrEquals(MIN_DECIMAL_VALUE)) {
      throw new OverFlowException();
    } else {
      return val.predecessor();
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
        return predecessor(val.low, precision);
      } catch {
        return val.low;
      }
    })();
    return new Uncertainty(low, predecessor(val.high, precision));
  } else if (val && val.isQuantity) {
    const pred = val.clone();
    pred.value = predecessor(val.value);
    return pred;
  } else if (val == null) {
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
      return MAX_DECIMAL_VALUE;
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
      // See: https://jira.hl7.org/browse/FHIR-57935
      return new Quantity(MAX_DECIMAL_VALUE, quantityInstance?.unit || '1');
    }
  }
  return null;
}

export function minValueForType(type: string, quantityInstance?: Quantity) {
  switch (type) {
    case ELM_INTEGER_TYPE:
      return MIN_INT_VALUE;
    case ELM_LONG_TYPE:
      return MIN_LONG_VALUE;
    case ELM_DECIMAL_TYPE:
      return MIN_DECIMAL_VALUE;
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
      // See: https://jira.hl7.org/browse/FHIR-57935
      return new Quantity(MIN_DECIMAL_VALUE, quantityInstance?.unit || '1');
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

export function finalizeNumericResult(result: any) {
  if (result instanceof Decimal) {
    return result.normalized();
  } else if (result instanceof Quantity) {
    return new Quantity(result.value.normalized(), result.unit);
  } else if (result instanceof Uncertainty) {
    let low = result.low;
    if (low instanceof Quantity || low instanceof Decimal) {
      low = finalizeNumericResult(low);
    }
    let high = result.high;
    if (high instanceof Quantity || high instanceof Decimal) {
      high = finalizeNumericResult(high);
    }
    return new Uncertainty(low, high);
  }

  return result;
}
