import { Decimal as DecimalJS } from 'decimal.js';

// Default precision is set to 30 significant figures. (Not decimal places)
// MAX_DECIMAL_VALUE = 99999999999999999999.99999999 is 28 significant figures,
// 30 is just a cleaner number.
DecimalJS.set({ precision: 30 });

export type DecimalInput = Decimal | string | number | bigint;

export type DecimalRoundingMode = DecimalJS.Rounding;

const MIN_PRECISION_VALUE = DecimalJS.pow(10, -8);

const CQL_IMPLICIT_SCALE = 8;
const CQL_IMPLICIT_ROUNDING = DecimalJS.ROUND_HALF_UP;

export class Decimal {
  private value: DecimalJS;

  private constructor(value: string | number | bigint | DecimalJS) {
    this.value = new DecimalJS(value);
    if (!this.value.isFinite()) {
      throw new Error('Cannot create a decimal with a non-finite value');
    }
  }

  static from(value: DecimalInput) {
    if (value instanceof Decimal) {
      return value;
    }

    return new Decimal(value);
  }

  get isDecimal() {
    return true;
  }

  normalized() {
    if (this.value.decimalPlaces() <= CQL_IMPLICIT_SCALE) {
      return this;
    }
    return this.setScale(CQL_IMPLICIT_SCALE, CQL_IMPLICIT_ROUNDING);
  }

  // Helper function to reduce repeated boilerplate.
  // Apply the given function with the given operand, and wrap the result in a Decimal.
  private applyWrapper(operation: (value: any) => DecimalJS, other: DecimalInput): Decimal {
    const operand = other instanceof Decimal ? other.value : other;

    return new Decimal(operation.call(this.value, operand));
  }

  add(other: DecimalInput): Decimal {
    return this.applyWrapper(this.value.add, other);
  }

  subtract(other: DecimalInput): Decimal {
    return this.applyWrapper(this.value.minus, other);
  }

  multiplyBy(other: DecimalInput): Decimal {
    return this.applyWrapper(this.value.times, other);
  }

  divideBy(other: DecimalInput): Decimal {
    if (toNumber(other) === 0) {
      throw new RangeError('Cannot divide a decimal by zero');
    }
    return this.applyWrapper(this.value.dividedBy, other);
  }

  modulo(other: DecimalInput) {
    const divisor = toNumber(other);
    if (divisor === 0) {
      throw new RangeError('Cannot calculate decimal modulo by zero');
    }
    return this.applyWrapper(this.value.mod, other);
  }

  compareTo(other: DecimalInput) {
    if (other instanceof Decimal) {
      return this.value.comparedTo(other.value);
    }
    return this.value.comparedTo(other);
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
    return new Decimal(this.value.add(MIN_PRECISION_VALUE));
  }

  predecessor() {
    return new Decimal(this.value.minus(MIN_PRECISION_VALUE));
  }

  negate() {
    return new Decimal(this.value.neg());
  }

  abs() {
    return new Decimal(this.value.abs());
  }

  truncate(): number {
    return this.value.truncated().toNumber();
  }

  truncated(): Decimal {
    return new Decimal(this.value.truncated());
  }

  ceil(): number {
    return this.value.ceil().toNumber();
  }

  floor(): number {
    return this.value.floor().toNumber();
  }

  isInteger() {
    return this.value.isInteger();
  }

  power(exponent: DecimalInput) {
    return this.applyWrapper(this.value.toPower, exponent);
  }

  sqrt() {
    return new Decimal(this.value.sqrt());
  }

  ln() {
    return new Decimal(this.value.ln());
  }

  exp() {
    return new Decimal(this.value.exp());
  }

  log(base: DecimalInput) {
    return this.applyWrapper(this.value.log, base);
  }

  round(scale: number) {
    // notes on rounding modes
    // ROUND_HALF_UP "Rounds towards nearest neighbour. If equidistant, rounds away from zero"
    // rounds 0.5 -> 1.0, -0.5 -> -1.0
    // ROUND_HALF_CEIL "Rounds towards nearest neighbour. If equidistant, rounds towards Infinity"
    // rounds 0.5 -> 1.0, -0.5 -> 0.0
    // https://mikemcl.github.io/decimal.js/#modes
    return this.setScale(scale, DecimalJS.ROUND_HALF_CEIL);
  }

  setScale(scale: number, roundingMode: DecimalRoundingMode = DecimalJS.ROUND_DOWN) {
    if (!Number.isInteger(scale) || scale < 0) {
      throw new RangeError('Decimal scale must be a non-negative integer');
    }

    return new Decimal(this.value.toDecimalPlaces(scale, roundingMode));
  }

  toInteger() {
    return this.truncate();
  }

  toNumber() {
    return this.value.toNumber();
  }

  toLong() {
    // note that this is permissive and converts non-integral values
    return BigInt(this.value.truncated().toString());
  }

  toString() {
    return this.value.toString();
  }

  toJSON() {
    return this.toString();
  }
}

export const MAX_DECIMAL_STRING = '99999999999999999999.99999999';
export const MIN_DECIMAL_STRING = '-99999999999999999999.99999999';

export const MAX_DECIMAL_VALUE = Decimal.from(MAX_DECIMAL_STRING);
export const MIN_DECIMAL_VALUE = Decimal.from(MIN_DECIMAL_STRING);

function toNumber(value: DecimalInput) {
  if (value instanceof Decimal) {
    return value.toNumber();
  }
  if (typeof value === 'string' && value.trim() === '') {
    // Number() and Number('') return 0 instead of NaN, so catch that case
    return NaN;
  }
  return Number(value);
}
