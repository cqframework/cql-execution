import { Quantity } from './datatypes';

export class Ratio {
  constructor(public numerator: Quantity, public denominator: Quantity) {
    if (numerator == null) {
      throw new Error('Cannot create a ratio with an undefined numerator');
    }

    if (denominator == null) {
      throw new Error('Cannot create a ratio with an undefined denominator');
    }
  }

  get isRatio() {
    return true;
  }

  clone() {
    return new Ratio(this.numerator.clone(), this.denominator.clone());
  }

  toString() {
    return `${this.numerator.toString()} : ${this.denominator.toString()}`;
  }

  equals(other: Ratio) {
    if (other != null && other.isRatio) {
      const divided_this = this.numerator.dividedBy(this.denominator);
      const divided_other = other.numerator.dividedBy(other.denominator);
      return divided_this?.equals(divided_other);
    } else {
      return false;
    }
  }

  equivalent(other: Ratio) {
    const equal = this.equals(other);
    return equal != null ? equal : false;
  }
}
