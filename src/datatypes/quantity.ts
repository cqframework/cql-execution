import { ELM_DECIMAL_TYPE } from '../util/elmTypes';
import { decimalAdjust, add, subtract, isValidDecimal, overflowsOrUnderflows } from '../util/math';
import { Decimal } from './decimal';
import {
  checkUnit,
  convertUnit,
  normalizeUnitsWhenPossible,
  getProductOfUnits,
  getQuotientOfUnits
} from '../util/units';

export class Quantity {
  public readonly value: Decimal;

  constructor(
    value: Decimal | string | number | bigint,
    public unit?: any
  ) {
    if (value == null || typeof value === 'number' && isNaN(value)) {
      throw new Error('Cannot create a quantity with an undefined value');
    }
    this.value = Decimal.from(value);
    if (!isValidDecimal(this.value)) {
      throw new Error('Cannot create a quantity with an invalid decimal value');
    }

    // Attempt to parse the unit with UCUM. If it fails, throw a friendly error.
    if (this.unit != null) {
      const validation = checkUnit(this.unit);
      if (!validation.valid) {
        throw new Error(validation.message);
      }
    }
  }

  get isQuantity() {
    return true;
  }

  clone() {
    return new Quantity(this.value, this.unit);
  }

  toString() {
    return `${this.value} '${this.unit}'`;
  }

  sameOrBefore(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value.lessThanOrEquals(otherVal);
      }
    }
  }

  sameOrAfter(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value.greaterThanOrEquals(otherVal);
      }
    }
  }

  after(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value.greaterThan(otherVal);
      }
    }
  }

  before(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value.lessThan(otherVal);
      }
    }
  }

  equals(other: any) {
    if (other != null && other.isQuantity) {
      if ((!this.unit && other.unit) || (this.unit && !other.unit)) {
        return false;
      } else if (!this.unit && !other.unit) {
        return this.value === other.value;
      } else {
        const otherVal = convertUnit(other.value, other.unit, this.unit);
        if (otherVal == null) {
          return null;
        } else {
          return this.value.round(8).equals(Decimal.from(otherVal));
        }
      }
    }
  }

  convertUnit(toUnit: any) {
    const value = convertUnit(this.value, this.unit, toUnit);
    // Need to pass through constructor again to catch invalid units
    return new Quantity(value, toUnit);
  }

  dividedBy(other: any) {
    if (other == null || other === 0 || (other.value != null && Decimal.from(other.value).equals(0))) {
      return null;
    } else if (!other.isQuantity) {
      // convert it to a quantity w/ unit 1
      other = new Quantity(other, '1');
    }

    const [val1, unit1, val2, unit2] = normalizeUnitsWhenPossible(
      this.value.toNumber(),
      this.unit,
      Decimal.from(other.value).toNumber(),
      other.unit
    );
    const resultValue = Decimal.from(val1 / val2);
    const resultUnit = getQuotientOfUnits(unit1, unit2);

    // Check for invalid unit or value
    if (resultUnit == null || overflowsOrUnderflows(resultValue, ELM_DECIMAL_TYPE)) {
      return null;
    }
    return new Quantity(resultValue.round(8), resultUnit);
  }

  multiplyBy(other: any) {
    if (other == null) {
      return null;
    } else if (!other.isQuantity) {
      // convert it to a quantity w/ unit 1
      other = new Quantity(other, '1');
    }

    const [val1, unit1, val2, unit2] = normalizeUnitsWhenPossible(
      this.value.toNumber(),
      this.unit,
      Decimal.from(other.value).toNumber(),
      other.unit
    );
    const resultValue = Decimal.from(val1 * val2);
    const resultUnit = getProductOfUnits(unit1, unit2);

    // Check for invalid unit or value
    if (resultUnit == null || overflowsOrUnderflows(resultValue, ELM_DECIMAL_TYPE)) {
      return null;
    }
    return new Quantity(resultValue.round(8), resultUnit);
  }
}

export function parseQuantity(str: string) {
  const components = /([+|-]?\d+\.?\d*)\s*('(.+)')?/.exec(str);
  if (components != null && components[1] != null) {
    const value = Decimal.from(components[1]);
    if (!isValidDecimal(value)) {
      return null;
    }
    let unit;
    if (components[3] != null) {
      unit = components[3].trim();
    } else {
      unit = '';
    }
    return new Quantity(value, unit);
  } else {
    return null;
  }
}

export function doAddition(a: any, b: any) {
  return add(a, b);
}

export function doSubtraction(a: any, b: any) {
  return subtract(a, b);
}

export function doDivision(a: any, b: any) {
  if (a != null && a.isQuantity) {
    return a.dividedBy(b);
  }
}

export function doMultiplication(a: any, b: any) {
  if (a != null && a.isQuantity) {
    return a.multiplyBy(b);
  } else {
    return b.multiplyBy(a);
  }
}
