import { Decimal as DecimalJS } from 'decimal.js';

// Use a clone rather than DecimalJS.set because decimal.js configuration is otherwise global.
// This keeps our settings from changing the behavior of other decimal.js instances in
// the same process.
// Precision is significant figures (not decimal places);
// CQL's maximum Decimal value has 28 significant figures, 30 is just a cleaner number.
const CQLDecimalJS = DecimalJS.clone({ precision: 30 });

export type DecimalInput = Decimal | string | number | bigint;

export type DecimalRoundingMode = DecimalJS.Rounding;

const CQL_IMPLICIT_SCALE = 8;
const CQL_IMPLICIT_ROUNDING = CQLDecimalJS.ROUND_HALF_UP;
const TRUNCATE_TO_PRECISION = CQLDecimalJS.ROUND_DOWN;

export class Decimal {
  private readonly value: DecimalJS;
  public readonly scale: number;

  private constructor(value: string | number | bigint | DecimalJS, scale?: number) {
    this.value = new CQLDecimalJS(value);
    if (!this.value.isFinite()) {
      throw new Error('Cannot create a decimal with a non-finite value');
    }

    if (scale == null) {
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
    if (this.scale <= CQL_IMPLICIT_SCALE) {
      return this;
    }
    return this.withScale(CQL_IMPLICIT_SCALE);
  }

  // Helper function to reduce repeated boilerplate.
  // Apply the given function with the given operand, and wrap the result in a Decimal.
  // A function to set an appropriate scale based on the scales of the inputs may also be provided.
  private applyWrapper(
    operation: (value: DecimalJS) => DecimalJS,
    other: DecimalInput,
    scaleLogic?: (scaleL: number, scaleR: number) => number
  ): Decimal {
    const decimalOther = Decimal.from(other);

    const unscaledResult = new Decimal(operation.call(this.value, decimalOther.value));

    if (scaleLogic) {
      const targetScale = scaleLogic.call(null, this.scale, decimalOther.scale);
      return unscaledResult.withScale(targetScale);
    }
    return unscaledResult;
  }

  add(other: DecimalInput): Decimal {
    // scale logic: max(scale(left), scale(right))
    return this.applyWrapper(this.value.add, other, Math.max);
  }

  subtract(other: DecimalInput): Decimal {
    // scale logic: max(scale(left), scale(right))
    return this.applyWrapper(this.value.minus, other, Math.max);
  }

  multiplyBy(other: DecimalInput): Decimal {
    const scaleLogic = (l: number, r: number) => Math.min(l + r, CQL_IMPLICIT_SCALE);
    return this.applyWrapper(this.value.times, other, scaleLogic);
  }

  divideBy(other: DecimalInput): Decimal {
    const decimalOther = Decimal.from(other);
    if (decimalOther.equals(0)) {
      throw new RangeError('Cannot divide a decimal by zero');
    }
    // division scaling is more complex, depends on whether the actual result can be represented exactly
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
    // |               | Preferred |  Expected  |
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

  truncatedDivideBy(other: DecimalInput) {
    if (Decimal.from(other).equals(0)) {
      throw new RangeError('Cannot divide a decimal by zero');
    }
    return this.applyWrapper(this.value.dividedToIntegerBy, other);
  }

  modulo(other: DecimalInput) {
    if (Decimal.from(other).equals(0)) {
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

  equivalent(other: DecimalInput) {
    // For decimals, equivalent means the values are the same
    // with the comparison done on values rounded to
    // the precision of the least precise operand;
    // trailing zeroes after the decimal are ignored in determining precision
    // for equivalent comparison.

    // Because it ignores trailing zeros, we use decimal.js .decimalPlaces() instead of this.scale
    const decimalOther = Decimal.from(other);
    const lessPreciseScale = Math.min(
      this.value.decimalPlaces(),
      decimalOther.value.decimalPlaces()
    );

    return this.withScale(lessPreciseScale).equals(decimalOther.withScale(lessPreciseScale));
  }

  successor() {
    // "For Decimal, successor is equivalent to adding 1 * the precision of the argument."
    // note that this is not 1 * Precision(this), since Precision is a number 0-8
    const precision = Decimal.from(0.1).power(this.scale);
    return this.add(precision);
  }

  predecessor() {
    // "For Decimal, predecessor is equivalent to subtracting 1 * the precision of the argument."
    // note that this is not literally 1 * Precision(this), since Precision is a number 0-8
    const precision = Decimal.from(0.1).power(this.scale);
    return this.subtract(precision);
  }

  negate() {
    return new Decimal(this.value.neg(), this.scale);
  }

  abs() {
    return new Decimal(this.value.abs(), this.scale);
  }

  truncate(): number {
    return this.value.truncated().toNumber();
  }

  truncated(scale?: number): Decimal {
    // specifying a scale here allows for "truncating to a precision"
    // this is currently used in Interval.expand

    if (!scale) {
      // undefined or 0 both mean truncated to an integer
      return new Decimal(this.truncate(), 0);
    }

    return this.withScale(scale, TRUNCATE_TO_PRECISION);
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
    return new Decimal(this.value.sqrt()).withMinimumScale(this.scale);
  }

  ln() {
    return new Decimal(this.value.ln());
  }

  exp() {
    return new Decimal(this.value.exp());
  }

  log(base: DecimalInput) {
    return this.applyWrapper(this.value.log, base).withMinimumScale(this.scale);
  }

  round(scale: number) {
    // notes on rounding modes
    // ROUND_HALF_UP "Rounds towards nearest neighbour. If equidistant, rounds away from zero"
    // rounds 0.5 -> 1.0, -0.5 -> -1.0
    // ROUND_HALF_CEIL "Rounds towards nearest neighbour. If equidistant, rounds towards Infinity"
    // rounds 0.5 -> 1.0, -0.5 -> 0.0
    // https://mikemcl.github.io/decimal.js/#modes
    return this.withScale(scale, CQL_IMPLICIT_ROUNDING);
  }

  withScale(scale: number, roundingMode: DecimalRoundingMode = CQL_IMPLICIT_ROUNDING) {
    if (!Number.isInteger(scale) || scale < 0) {
      throw new RangeError('Decimal scale must be a non-negative integer');
    }

    return new Decimal(this.value.toDecimalPlaces(scale, roundingMode), scale);
  }

  // Some functions would prefer a given scale for the result but will allow a greater one
  // if needed to represent the value.
  // Eg, 1.0 / 1.0 and 1.0 / 3.0 both have exactly the same input scales, but expect different output scales.
  withMinimumScale(scale: number, roundingMode: DecimalRoundingMode = CQL_IMPLICIT_ROUNDING) {
    if (this.scale >= scale) {
      return this;
    }
    return this.withScale(scale, roundingMode);
  }

  withoutTrailingZeros() {
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
    // so Decimal.from(1).toString() --> "1.0"
    const places = Math.max(1, this.scale);
    return this.value.toFixed(places);
  }

  toJSON() {
    // The FHIR spec serializes `decimal` as a number, so we follow that convention here,
    // but note the risk of loss of precision.
    // https://hl7.org/fhir/json.html#primitive
    return this.toNumber();
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

export const MAX_DECIMAL_VALUE = Decimal.from(MAX_DECIMAL_STRING);
export const MIN_DECIMAL_VALUE = Decimal.from(MIN_DECIMAL_STRING);
