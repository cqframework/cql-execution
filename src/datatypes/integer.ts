export type IntegerInput = Integer | number | string | bigint;

/**
 * Runtime representation of the CQL Integer type.
 *
 * This intentionally permits values outside CQL's 32-bit range so that an
 * operator can compute an intermediate value and apply CQL overflow rules at
 * its boundary.  It does reject values that are not exactly representable by
 * JavaScript's Number type.
 */
export class Integer {
  private constructor(private readonly value: number) {}

  static from(value: IntegerInput): Integer {
    if (value instanceof Integer) {
      return value;
    }
    const numberValue = Number(value);
    if (!Number.isSafeInteger(numberValue)) {
      throw new RangeError('Cannot create an integer with a non-safe-integer value');
    }
    return new Integer(numberValue);
  }

  get isInteger() {
    return true;
  }

  get numericKind(): 'Integer' {
    return 'Integer';
  }

  add(other: IntegerInput) {
    return Integer.from(this.value + Integer.from(other).value);
  }

  subtract(other: IntegerInput) {
    return Integer.from(this.value - Integer.from(other).value);
  }

  multiplyBy(other: IntegerInput) {
    return Integer.from(this.value * Integer.from(other).value);
  }

  divideBy(other: IntegerInput) {
    const divisor = Integer.from(other).value;
    if (divisor === 0) {
      throw new RangeError('Cannot divide an integer by zero');
    }
    return Integer.from(Math.trunc(this.value / divisor));
  }

  modulo(other: IntegerInput) {
    const divisor = Integer.from(other).value;
    if (divisor === 0) {
      throw new RangeError('Cannot calculate integer modulo by zero');
    }
    return Integer.from(this.value % divisor);
  }

  compareTo(other: IntegerInput) {
    return this.value - Integer.from(other).value;
  }

  greaterThan(other: IntegerInput) {
    return this.compareTo(other) > 0;
  }
  greaterThanOrEquals(other: IntegerInput) {
    return this.compareTo(other) >= 0;
  }
  lessThan(other: IntegerInput) {
    return this.compareTo(other) < 0;
  }
  lessThanOrEquals(other: IntegerInput) {
    return this.compareTo(other) <= 0;
  }
  equals(other: IntegerInput) {
    return this.compareTo(other) === 0;
  }
  equivalent(other: IntegerInput) {
    return this.equals(other);
  }

  successor() {
    return Integer.from(this.value + 1);
  }
  predecessor() {
    return Integer.from(this.value - 1);
  }
  negate() {
    return Integer.from(-this.value);
  }
  abs() {
    return Integer.from(Math.abs(this.value));
  }

  toNumber() {
    return this.value;
  }
  toBigInt() {
    return BigInt(this.value);
  }
  toString() {
    return this.value.toString();
  }
  toJSON() {
    return this.value;
  }
}
