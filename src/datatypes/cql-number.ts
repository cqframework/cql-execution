import { Decimal as DecimalJS } from 'decimal.js';

// Use a clone rather than DecimalJS.set because decimal.js configuration is otherwise global.
// This keeps our settings from changing the behavior of other decimal.js instances in
// the same process.
// Precision is significant figures (not decimal places);
// CQL's maximum Decimal value has 28 significant figures, 30 is just a cleaner number.
const CQLDecimalJS = DecimalJS.clone({ precision: 30 });
// A product of two signed 64-bit integers can have 38 digits. Preserve the
// intermediate exactly so the evaluator can apply the CQL overflow rules.
const CQLIntegralJS = DecimalJS.clone({ precision: 40 });

export type NumericKind = 'Integer' | 'Long' | 'Decimal';

/** Distributes over unions so unknown operand kinds retain all possible results. */
export type Promote<A extends NumericKind, B extends NumericKind> = A extends 'Decimal'
  ? 'Decimal'
  : B extends 'Decimal'
    ? 'Decimal'
    : A extends 'Long'
      ? 'Long'
      : B extends 'Long'
        ? 'Long'
        : 'Integer';

export type CQLInteger = CQLNumber<'Integer'>;
export type CQLLong = CQLNumber<'Long'>;
export type CQLDecimal = CQLNumber<'Decimal'>;
/** Use this union when switching on numericKind to narrow the entire value. */
export type AnyCQLNumber = CQLInteger | CQLLong | CQLDecimal;

/** Native integer inputs retain their kind; textual operands imply Decimal. */
export type InputKind<T extends CQLNumberInput> =
  T extends CQLNumber<infer K>
    ? K
    : T extends bigint
      ? 'Long'
      : T extends number
        ? 'Integer'
        : 'Decimal';

export function promotedKind<A extends NumericKind, B extends NumericKind>(
  left: A,
  right: B
): Promote<A, B>;
export function promotedKind(left: NumericKind, right: NumericKind): NumericKind {
  if (left === 'Decimal' || right === 'Decimal') {
    return 'Decimal';
  }
  return left === 'Long' || right === 'Long' ? 'Long' : 'Integer';
}

export type CQLNumberInput = CQLNumber | string | number | bigint;

export type DecimalRoundingMode = DecimalJS.Rounding;

const CQL_IMPLICIT_SCALE = 8;
export const CQL_IMPLICIT_ROUNDING = CQLDecimalJS.ROUND_HALF_UP;
export const TRUNCATE_TO_PRECISION = CQLDecimalJS.ROUND_DOWN;

/**
 * Immutable CQL numeric value with direct decimal.js storage. Kind controls
 * promotion, integral division, and serialization; scale records Decimal
 * precision, including trailing zeros. Bounds are checked by the evaluator
 * so arithmetic can retain intermediate values until the operator boundary.
 */
export class CQLNumber<K extends NumericKind = NumericKind> {
  private readonly value: DecimalJS;
  public readonly scale: number;

  private constructor(
    value: string | number | bigint | DecimalJS,
    scale: number | undefined,
    readonly numericKind: K
  ) {
    this.value = new (numericKind === 'Decimal' ? CQLDecimalJS : CQLIntegralJS)(value);
    if (!this.value.isFinite()) {
      throw new Error('Cannot create a decimal with a non-finite value');
    }

    if (numericKind !== 'Decimal') {
      if (!this.value.isInteger()) {
        throw new RangeError('Integer and Long values must be integral');
      }
      if (this.value.isZero()) {
        this.value = new CQLIntegralJS(0);
      }
      scale = 0;
    } else if (scale == null) {
      scale = determineScale(value, this.value);
    } else if (!Number.isInteger(scale) || scale < 0) {
      throw new RangeError('Decimal scale must be a non-negative integer');
    } else if (scale < this.value.decimalPlaces()) {
      // scale and value both provided, but the value has more decimal places,
      // so apply the scale to the value to ensure internal consistency
      this.value = this.value.toDecimalPlaces(scale, CQL_IMPLICIT_ROUNDING);
    }
    this.scale = scale;
  }

  static decimal(value: CQLNumberInput): CQLDecimal {
    if (value instanceof CQLNumber) {
      return value.hasKind('Decimal') ? value : new CQLNumber(value.value, 0, 'Decimal');
    }

    return new CQLNumber(value as string | number | bigint, undefined, 'Decimal');
  }

  /** Infer only exact native integral types; decimal input is always explicit. */
  static from<T extends CQLNumber | number | bigint>(value: T): CQLNumber<InputKind<T>>;
  static from(value: CQLNumber | number | bigint): CQLNumber {
    if (value instanceof CQLNumber) {
      return value;
    }
    if (typeof value === 'bigint') {
      return CQLNumber.long(value);
    }
    if (typeof value === 'number' && Number.isSafeInteger(value)) {
      return CQLNumber.integer(value);
    }
    throw new TypeError('Use CQLNumber.decimal for non-integral or textual input');
  }

  static integer(value: CQLNumberInput): CQLInteger {
    const result = new CQLNumber(value instanceof CQLNumber ? value.value : value, 0, 'Integer');
    if (!Number.isSafeInteger(result.toNumber())) {
      throw new RangeError('Cannot create an Integer with a non-safe-integer value');
    }
    return result;
  }

  static long(value: CQLNumberInput): CQLLong {
    if (typeof value === 'number' && !Number.isSafeInteger(value)) {
      throw new RangeError('Cannot create a Long from a non-safe-integer number');
    }
    return new CQLNumber(value instanceof CQLNumber ? value.value : value, 0, 'Long');
  }

  get isCQLNumber(): true {
    return true;
  }
  get isInteger(): boolean {
    return this.numericKind === 'Integer';
  }
  get isLong(): boolean {
    return this.numericKind === 'Long';
  }

  get isDecimal() {
    return this.numericKind === 'Decimal';
  }

  /** Narrow even a broad CQLNumber<NumericKind>, without a type assertion. */
  hasKind<N extends NumericKind>(kind: N): this is CQLNumber<N> {
    return (this.numericKind as NumericKind) === kind;
  }

  normalized(): CQLNumber<K>;
  normalized(): CQLNumber {
    if (this.scale <= CQL_IMPLICIT_SCALE) {
      return this;
    }
    return this.withScale(CQL_IMPLICIT_SCALE);
  }

  // Helper function to reduce repeated boilerplate.
  // Apply the given function with the given operand, and wrap with the promoted kind.
  // A function to set an appropriate scale based on the scales of the inputs may also be provided.
  private applyWrapper<T extends CQLNumberInput>(
    operation: (value: DecimalJS) => DecimalJS,
    other: T,
    scaleLogic?: (scaleL: number, scaleR: number) => number
  ): CQLNumber<Promote<K, InputKind<T>>>;
  private applyWrapper(
    operation: (value: DecimalJS) => DecimalJS,
    other: CQLNumberInput,
    scaleLogic?: (scaleL: number, scaleR: number) => number
  ): CQLNumber {
    const decimalOther = this.operand(other);
    const kind = promotedKind(this.numericKind, decimalOther.numericKind);
    const leftValue = kind === 'Decimal' ? new CQLDecimalJS(this.value) : this.value;
    const unscaledResult = new CQLNumber(
      operation.call(leftValue, decimalOther.value),
      undefined,
      kind
    );

    // NOTE: As of 2.0.0, the CQL spec says that scale of a Decimal should be preserved,
    // but does not describe how to propagate scale through arithmetic operations.
    // Unless otherwise stated, all the scale logic in this class is a best-guess based on testing.
    if (scaleLogic && kind === 'Decimal') {
      const targetScale = scaleLogic.call(null, this.scale, decimalOther.scale);
      return unscaledResult.withScale(targetScale);
    }
    return unscaledResult;
  }

  private operand(other: CQLNumberInput): CQLNumber {
    if (other instanceof CQLNumber) {
      return other;
    }
    // Decimal APIs historically accept strings and JS numbers for constants,
    // quantities, timezone offsets, and unit conversion factors.
    return this.isDecimal || typeof other === 'string'
      ? CQLNumber.decimal(other)
      : CQLNumber.from(other);
  }

  add<T extends CQLNumberInput>(other: T): CQLNumber<Promote<K, InputKind<T>>> {
    // scale logic: max(scale(left), scale(right))
    return this.applyWrapper(this.value.add, other, Math.max);
  }

  subtract<T extends CQLNumberInput>(other: T): CQLNumber<Promote<K, InputKind<T>>> {
    // scale logic: max(scale(left), scale(right))
    return this.applyWrapper(this.value.minus, other, Math.max);
  }

  multiplyBy<T extends CQLNumberInput>(other: T): CQLNumber<Promote<K, InputKind<T>>> {
    const scaleLogic = (l: number, r: number) => Math.min(l + r, CQL_IMPLICIT_SCALE);
    return this.applyWrapper(this.value.times, other, scaleLogic);
  }

  divideBy<T extends CQLNumberInput>(other: T): CQLNumber<Promote<K, InputKind<T>>>;
  divideBy(other: CQLNumberInput): CQLNumber {
    const decimalOther = this.operand(other);
    if (decimalOther.equals(0)) {
      throw new RangeError('Cannot divide a decimal by zero');
    }
    if (promotedKind(this.numericKind, decimalOther.numericKind) !== 'Decimal') {
      return this.truncatedDivideBy(decimalOther);
    }
    // division scaling is more complex, depends on whether the actual result can be represented exactly
    // IMPORTANT: The details of how to propagate Decimal scale through math are not defined in the CQL spec.
    // The notes below are a best-guess on how to get desirable results based on some examples.
    const unscaledResult = this.applyWrapper(this.value.dividedBy, decimalOther);
    const unscaledDecimalPlaces = unscaledResult.value.decimalPlaces();
    if (unscaledDecimalPlaces > CQL_IMPLICIT_SCALE) {
      // it either doesn't terminate, or terminates with more than 8 digits, eg:
      // 1/3 = 0.33333333...
      // 1/512 = 0.001953125 (9 digits)
      return unscaledResult.withScale(CQL_IMPLICIT_SCALE);
    }

    // multiplication uses min(scale(l) + scale(r), cql_max_scale)
    // division is the inverse of multiplication, so we'll define a lower bound "preferred scale" as the inverse:
    // max(scale(l)-scale(r), 0)
    const preferredScale = Math.max(this.scale - decimalOther.scale, 0);

    // examples:
    // |               | Preferred |  Desired   |
    // | Expression    |  scale    |   result   |
    // | ------------- | --------: | ---------: |
    // | 4.0 / 2       |         1 |        2.0 |
    // | 9.9 / 3.0     |         0 |        3.3 |
    // | 1.0 / 2.0     |         0 |        0.5 |
    // | 1.0 / 4.0     |         0 |       0.25 |
    // | 1.0 / 8.0     |         0 |      0.125 |
    // | 1.0 / 3.0     |         0 | 0.33333333 |
    // | 2.0 / 3.0     |         0 | 0.66666667 |
    // | 1.00000 / 2.0 |         4 |     0.5000 |
    // | 1.0 / 1.00000 |         0 |          1 | (as Decimal, scale 0)
    // | 1.00000 / 1.0 |         4 |     1.0000 |

    return unscaledResult.withMinimumScale(preferredScale);
  }

  truncatedDivideBy<T extends CQLNumberInput>(other: T): CQLNumber<Promote<K, InputKind<T>>> {
    if (CQLNumber.decimal(other).equals(0)) {
      throw new RangeError('Cannot divide a decimal by zero');
    }
    return this.applyWrapper(this.value.dividedToIntegerBy, other);
  }

  modulo<T extends CQLNumberInput>(other: T): CQLNumber<Promote<K, InputKind<T>>> {
    if (CQLNumber.decimal(other).equals(0)) {
      throw new RangeError('Cannot calculate decimal modulo by zero');
    }
    return this.applyWrapper(this.value.mod, other);
  }

  compareTo(other: CQLNumberInput) {
    return this.value.comparedTo(CQLNumber.decimal(other).value);
  }

  greaterThan(other: CQLNumberInput) {
    return this.compareTo(other) > 0;
  }

  greaterThanOrEquals(other: CQLNumberInput) {
    return this.compareTo(other) >= 0;
  }

  lessThan(other: CQLNumberInput) {
    return this.compareTo(other) < 0;
  }

  lessThanOrEquals(other: CQLNumberInput) {
    return this.compareTo(other) <= 0;
  }

  equals(other: CQLNumberInput) {
    return this.compareTo(other) === 0;
  }

  equivalent(other: CQLNumberInput) {
    const operand = this.operand(other);
    if (!this.isDecimal || !operand.isDecimal) {
      return this.equals(operand);
    }
    // For decimals, equivalent means the values are the same
    // with the comparison done on values rounded to
    // the precision of the least precise operand;
    // trailing zeroes after the decimal are ignored in determining precision
    // for equivalent comparison.

    // Because it ignores trailing zeros, we use decimal.js .decimalPlaces() instead of this.scale
    const decimalOther = CQLNumber.decimal(other);
    const lessPreciseScale = Math.min(
      this.value.decimalPlaces(),
      decimalOther.value.decimalPlaces()
    );

    return this.withScale(lessPreciseScale).equals(decimalOther.withScale(lessPreciseScale));
  }

  successor(): CQLNumber<K>;
  successor(): CQLNumber {
    if (!this.isDecimal) {
      return this.add(1);
    }
    // "For Decimal, successor is equivalent to adding 1 * the precision of the argument."
    // note that this is not 1 * Precision(this), since Precision is a number 0-8
    const precision = CQLNumber.decimal(0.1).power(this.scale);
    return this.add(precision);
  }

  predecessor(): CQLNumber<K>;
  predecessor(): CQLNumber {
    if (!this.isDecimal) {
      return this.subtract(1);
    }
    // "For Decimal, predecessor is equivalent to subtracting 1 * the precision of the argument."
    // note that this is not literally 1 * Precision(this), since Precision is a number 0-8
    const precision = CQLNumber.decimal(0.1).power(this.scale);
    return this.subtract(precision);
  }

  negate(): CQLNumber<K> {
    return new CQLNumber(this.value.neg(), this.scale, this.numericKind);
  }

  abs(): CQLNumber<K> {
    return new CQLNumber(this.value.abs(), this.scale, this.numericKind);
  }

  truncate(): number {
    return this.value.truncated().toNumber();
  }

  truncateToBigInt(): bigint {
    return BigInt(this.value.truncated().toFixed(0));
  }

  toBigInt(): bigint {
    return this.truncateToBigInt();
  }

  ceil(): number {
    return this.value.ceil().toNumber();
  }

  floor(): number {
    return this.value.floor().toNumber();
  }

  isIntegral() {
    return this.value.isInteger();
  }

  power(exponent: CQLNumberInput): CQLDecimal {
    return CQLNumber.decimal(this).applyWrapper(this.value.toPower, CQLNumber.decimal(exponent));
  }

  nthRoot(root: CQLNumberInput): CQLDecimal {
    // The goal of this method is to preserve exact values in common cases,
    // by leveraging the decimal.js sqrt() and cubeRoot() methods for roots 2 and 3.
    // For other roots, fall back to the power method with the inverse of the provided value.
    // See docs on decimal.js pow, in particular the note about non-integer exponents:
    // https://mikemcl.github.io/decimal.js/#pow
    const rootAsDecimal = CQLNumber.decimal(root);
    if (rootAsDecimal.equals(0)) {
      throw new RangeError('Cannot take the zero-th root of a decimal');
    } else if (rootAsDecimal.equals(2)) {
      return this.sqrt();
    } else if (rootAsDecimal.equals(3)) {
      return new CQLNumber(this.value.cubeRoot(), undefined, 'Decimal').withMinimumScale(
        this.scale
      );
    } else {
      return this.power(CQLNumber.decimal(1).divideBy(root));
    }
  }

  sqrt(): CQLDecimal {
    return new CQLNumber(this.value.sqrt(), undefined, 'Decimal').withMinimumScale(this.scale);
  }

  ln(): CQLDecimal {
    return new CQLNumber(this.value.ln(), undefined, 'Decimal');
  }

  exp(): CQLDecimal {
    return new CQLNumber(this.value.exp(), undefined, 'Decimal');
  }

  log(base: CQLNumberInput): CQLDecimal {
    return CQLNumber.decimal(this)
      .applyWrapper(this.value.log, CQLNumber.decimal(base))
      .withMinimumScale(this.scale);
  }

  round(scale?: number | null): CQLDecimal {
    // "If precision is not specified or null, 0 is assumed."
    if (scale == null) {
      scale = 0;
    }

    // notes on rounding modes
    // ROUND_HALF_UP "Rounds towards nearest neighbour. If equidistant, rounds away from zero"
    // rounds 0.5 -> 1.0, -0.5 -> -1.0
    // ROUND_HALF_CEIL "Rounds towards nearest neighbour. If equidistant, rounds towards Infinity"
    // rounds 0.5 -> 1.0, -0.5 -> 0.0
    // https://mikemcl.github.io/decimal.js/#modes
    return this.withScale(scale, CQL_IMPLICIT_ROUNDING);
  }

  withScale(scale: number, roundingMode: DecimalRoundingMode = CQL_IMPLICIT_ROUNDING): CQLDecimal {
    if (!Number.isInteger(scale) || scale < 0) {
      throw new RangeError('Decimal scale must be a non-negative integer');
    }

    return new CQLNumber(this.value.toDecimalPlaces(scale, roundingMode), scale, 'Decimal');
  }

  // Some functions would prefer a given scale for the result but will allow a greater one
  // if needed to represent the value.
  // Eg, 1.0 / 1.0 and 1.0 / 3.0 both have exactly the same input scales, but expect different output scales.
  withMinimumScale(
    scale: number,
    roundingMode: DecimalRoundingMode = CQL_IMPLICIT_ROUNDING
  ): CQLNumber<K | 'Decimal'> {
    if (this.scale >= scale) {
      return this;
    }
    return this.withScale(scale, roundingMode);
  }

  withoutTrailingZeros(): CQLDecimal {
    return this.withScale(this.value.decimalPlaces());
  }

  toNumber() {
    return this.value.toNumber();
  }

  toString() {
    // decimal.js toString can return exponential notation,
    // toFixed always returns normal notation
    // CQL spec expects format (-)?#0.0#
    // https://cql.hl7.org/R2/09-b-cqlreference.html#tostring
    // meaning, optional minus sign, at least one digit, decimal point, at least one digit
    // (# means any number of digits, including none; 0 means a digit must appear)
    // a regex for this is -?\d+\.\d+
    // so CQLNumber.decimal(1).toString() --> "1.0"
    const places = this.isDecimal ? Math.max(1, this.scale) : 0;
    return this.value.toFixed(places);
  }

  toJSON() {
    // The FHIR spec serializes `decimal` as a number, so we follow that convention here,
    // but note the risk of loss of precision.
    // https://hl7.org/fhir/json.html#primitive
    return this.isLong ? this.toString() : this.toNumber();
  }
}

function determineScale(rawValue: string | number | bigint | DecimalJS, parsedValue?: DecimalJS) {
  // decimal.js doesn't retain trailing zeros,
  // so if provided a string we have to count the decimal places
  if (typeof rawValue === 'string') {
    const dpIndex = rawValue.indexOf('.');
    if (dpIndex >= 0) {
      return rawValue.length - dpIndex - 1;
      // note this may be larger than our max scale; handle that in calling functions if necessary
    } else {
      return 0; // No decimal point found
    }
  } else {
    // If not a string, fall back to parsing by decimal.js and use its decimalPlaces function
    if (!parsedValue) {
      parsedValue = new DecimalJS(rawValue);
    }
    return parsedValue.decimalPlaces();
  }
}

export const MAX_DECIMAL_STRING = '99999999999999999999.99999999';
export const MIN_DECIMAL_STRING = '-99999999999999999999.99999999';

export const MAX_DECIMAL_VALUE = CQLNumber.decimal(MAX_DECIMAL_STRING);
export const MIN_DECIMAL_VALUE = CQLNumber.decimal(MIN_DECIMAL_STRING);
