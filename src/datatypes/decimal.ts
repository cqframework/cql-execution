

export type DecimalInput = Decimal | string | number | bigint;

export type DecimalRoundingMode = 'down' | 'half-up' | 'half-even' | 'half-ceil' | 'ceil' | 'floor';

const MIN_FLOAT_PRECISION_VALUE = Math.pow(10, -8);

export class Decimal {
  public readonly value: number;

  private constructor(value: DecimalInput) {
    const numericValue = toNumber(value);
    if (!Number.isFinite(numericValue)) {
      throw new Error('Cannot create a decimal with a non-finite value');
    }
    this.value = numericValue;
  }

  static from(value: DecimalInput) {
    return value instanceof Decimal ? value : new Decimal(value);
  }

  get isDecimal() {
    return true;
  }

  add(other: DecimalInput) {
    return new Decimal(this.value + toNumber(other));
  }

  subtract(other: DecimalInput) {
    return new Decimal(this.value - toNumber(other));
  }

  multiplyBy(other: DecimalInput) {
    return new Decimal(this.value * toNumber(other));
  }

  divideBy(other: DecimalInput) {
    const divisor = toNumber(other);
    if (divisor === 0) {
      throw new RangeError('Cannot divide a decimal by zero');
    }
    return new Decimal(this.value / divisor);
  }

  modulo(other: DecimalInput) {
    const divisor = toNumber(other);
    if (divisor === 0) {
      throw new RangeError('Cannot calculate decimal modulo by zero');
    }
    return new Decimal(this.value % divisor);
  }

  compareTo(other: DecimalInput) {
    const otherValue = toNumber(other);
    return this.value - otherValue;
  }

  greaterThan(other: DecimalInput) {
    return this.compareTo(other) > 0;
  }

  greaterThanOrEquals(other: DecimalInput) {
    return this.compareTo(other) >= 0;
  }
  
  lessThan(other: DecimalInput) {
    return this.compareTo(other) < 0;
  }

  lessThanOrEquals(other: DecimalInput) {
    return this.compareTo(other) <= 0;
  }

  equals(other: DecimalInput) {
    return this.compareTo(other) === 0;
  }

  successor() {
    return new Decimal(this.value + MIN_FLOAT_PRECISION_VALUE);
  }

  predecessor() {
    return new Decimal(this.value - MIN_FLOAT_PRECISION_VALUE);
  }

  negate() {
    return new Decimal(-this.value);
  }

  abs() {
    return new Decimal(Math.abs(this.value));
  }

  truncate() {
    return Math.trunc(this.value);
  }

  ceil() {
    return Math.ceil(this.value);
  }

  floor() {
    return Math.floor(this.value);
  }

  isInteger() {
    return Number.isInteger(this.value);
  }

  round(scale = 0) {
    return this.setScale(scale, 'half-ceil');
  }

  power(exponent: DecimalInput) {
    return new Decimal(Math.pow(this.value, toNumber(exponent)));
  }

  sqrt() {
    return new Decimal(Math.sqrt(this.value));
  }

  ln() {
    return new Decimal(Math.log(this.value));
  }

  exp() {
    return new Decimal(Math.exp(this.value));
  }

  log(base: DecimalInput) {
    return this.ln().divideBy(Decimal.from(base).ln());
  }

  /**
   * Return a value at the requested number of digits after the decimal point.
   * `down` truncates toward zero, matching the current ToDecimal behavior.
   */
  setScale(scale: number, roundingMode: DecimalRoundingMode = 'down') {
    if (!Number.isInteger(scale) || scale < 0) {
      throw new RangeError('Decimal scale must be a non-negative integer');
    }

    const factor = Math.pow(10, scale);
    return new Decimal(round(this.value * factor, roundingMode) / factor);
  }

  toInteger() {
    return this.truncate();
  }

  toNumber() {
    return this.value;
  }

  toLong() {
    // TODO: this is wrong
    return BigInt(this.toNumber());
  }

  toString() {
    return this.value.toString();
  }

  toJSON() {
    return this.toString();
  }
}

export const MAX_DECIMAL_STRING = "99999999999999999999.99999999";
export const MIN_DECIMAL_STRING = "-99999999999999999999.99999999";

export const MAX_DECIMAL_VALUE = Decimal.from(MAX_DECIMAL_STRING);
export const MIN_DECIMAL_VALUE = Decimal.from(MIN_DECIMAL_STRING);

function toNumber(value: DecimalInput) {
  if (value instanceof Decimal) {
    return value.value;
  }
  if (typeof value === 'string' && value.trim() === '') {
    // Number() and Number('') return 0 instead of NaN, so catch that case
    return NaN;
  }
  return Number(value);
}

function round(value: number, mode: DecimalRoundingMode) {
  switch (mode) {
    case 'down':
      return Math.trunc(value);
    case 'half-up':
      return value < 0 ? -Math.round(-value) : Math.round(value);
    case 'half-even':
      return roundHalfEven(value);
    case 'half-ceil':
      return Math.round(value);
    case 'ceil':
      return Math.ceil(value);
    case 'floor':
      return Math.floor(value);
  }
}

function roundHalfEven(value: number) {
  const lower = Math.floor(value);
  const fraction = value - lower;
  if (fraction < 0.5) {
    return lower;
  }
  if (fraction > 0.5) {
    return lower + 1;
  }
  return lower % 2 === 0 ? lower : lower + 1;
}
