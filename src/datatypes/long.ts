import { Integer } from './integer';

export type LongInput = Long | Integer | bigint | number | string;

/** Runtime representation of the CQL Long type. */
export class Long {
  private constructor(private readonly value: bigint) {}

  static from(value: LongInput): Long {
    if (value instanceof Long) {
      return value;
    }
    if (value instanceof Integer) {
      return new Long(value.toBigInt());
    }
    if (typeof value === 'number' && !Number.isSafeInteger(value)) {
      throw new RangeError('Cannot create a long from a non-safe-integer number');
    }
    return new Long(BigInt(value));
  }

  get isLong() {
    return true;
  }

  get numericKind(): 'Long' {
    return 'Long';
  }

  add(other: LongInput) {
    return new Long(this.value + Long.from(other).value);
  }
  subtract(other: LongInput) {
    return new Long(this.value - Long.from(other).value);
  }
  multiplyBy(other: LongInput) {
    return new Long(this.value * Long.from(other).value);
  }

  divideBy(other: LongInput) {
    const divisor = Long.from(other).value;
    if (divisor === 0n) {
      throw new RangeError('Cannot divide a long by zero');
    }
    return new Long(this.value / divisor);
  }

  modulo(other: LongInput) {
    const divisor = Long.from(other).value;
    if (divisor === 0n) {
      throw new RangeError('Cannot calculate long modulo by zero');
    }
    return new Long(this.value % divisor);
  }

  compareTo(other: LongInput) {
    const otherValue = Long.from(other).value;
    return this.value === otherValue ? 0 : this.value > otherValue ? 1 : -1;
  }

  greaterThan(other: LongInput) {
    return this.compareTo(other) > 0;
  }
  greaterThanOrEquals(other: LongInput) {
    return this.compareTo(other) >= 0;
  }
  lessThan(other: LongInput) {
    return this.compareTo(other) < 0;
  }
  lessThanOrEquals(other: LongInput) {
    return this.compareTo(other) <= 0;
  }
  equals(other: LongInput) {
    return this.compareTo(other) === 0;
  }
  equivalent(other: LongInput) {
    return this.equals(other);
  }

  successor() {
    return new Long(this.value + 1n);
  }
  predecessor() {
    return new Long(this.value - 1n);
  }
  negate() {
    return new Long(-this.value);
  }
  abs() {
    return this.value < 0n ? new Long(-this.value) : this;
  }

  toBigInt() {
    return this.value;
  }
  toNumber() {
    return Number(this.value);
  }
  toString() {
    return this.value.toString();
  }
  // FHIR serializes integer64 as a string; retain the existing Long wire form.
  toJSON() {
    return this.toString();
  }
}
