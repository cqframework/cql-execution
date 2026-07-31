import { ELM_DECIMAL_TYPE } from '../util/elmTypes';
import { decimalAdjust, add, subtract, isValidDecimal, overflowsOrUnderflows } from '../util/math';
import {
  checkUnit,
  convertUnit,
  normalizeUnitsWhenPossible,
  getProductOfUnits,
  getQuotientOfUnits
} from '../util/units';

export class Quantity {
  constructor(
    public value: any,
    public unit?: any
  ) {
    if (this.value == null || isNaN(this.value)) {
      throw new Error('Cannot create a quantity with an undefined value');
    } else if (!isValidDecimal(this.value)) {
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
        return this.value <= otherVal;
      }
    }
  }

  sameOrAfter(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value >= otherVal;
      }
    }
  }

  after(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value > otherVal;
      }
    }
  }

  before(other: any) {
    if (other != null && other.isQuantity) {
      const otherVal = convertUnit(other.value, other.unit, this.unit);
      if (otherVal == null) {
        return null;
      } else {
        return this.value < otherVal;
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
          return decimalAdjust('round', this.value, -8) === otherVal;
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
    if (other == null || other === 0 || other.value === 0) {
      return null;
    } else if (!other.isQuantity) {
      // convert it to a quantity w/ unit 1
      other = new Quantity(other, '1');
    }

    const [val1, unit1, val2, unit2] = normalizeUnitsWhenPossible(
      this.value,
      this.unit,
      other.value,
      other.unit
    );
    const resultValue = val1 / val2;
    const resultUnit = getQuotientOfUnits(unit1, unit2);

    // Check for invalid unit or value
    if (resultUnit == null || overflowsOrUnderflows(resultValue, ELM_DECIMAL_TYPE)) {
      return null;
    }
    return new Quantity(decimalAdjust('round', resultValue, -8), resultUnit);
  }

  multiplyBy(other: any) {
    if (other == null) {
      return null;
    } else if (!other.isQuantity) {
      // convert it to a quantity w/ unit 1
      other = new Quantity(other, '1');
    }

    const [val1, unit1, val2, unit2] = normalizeUnitsWhenPossible(
      this.value,
      this.unit,
      other.value,
      other.unit
    );
    const resultValue = val1 * val2;
    const resultUnit = getProductOfUnits(unit1, unit2);

    // Check for invalid unit or value
    if (resultUnit == null || overflowsOrUnderflows(resultValue, ELM_DECIMAL_TYPE)) {
      return null;
    }
    return new Quantity(decimalAdjust('round', resultValue, -8), resultUnit);
  }
}

export function parseQuantity(str: string) {
  const components = /([+|-]?\d+\.?\d*)\s*('(.+)')?/.exec(str);
  if (components != null && components[1] != null) {
    const value = parseFloat(components[1]);
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
