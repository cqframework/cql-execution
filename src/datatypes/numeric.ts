import { Decimal } from './decimal';
import { Integer } from './integer';
import { Long } from './long';

export type NumericKind = 'Integer' | 'Long' | 'Decimal';

/** Common numeric behavior used after operands have been promoted. */
export interface CqlNumeric {
  readonly numericKind: NumericKind;
  compareTo(other: any): number;
}

export type CqlNumericValue = Integer | Long | Decimal;

/** CQL numeric promotion: Decimal > Long > Integer. */
export function promotedKind(left: NumericKind, right: NumericKind): NumericKind {
  if (left === 'Decimal' || right === 'Decimal') {
    return 'Decimal';
  }
  return left === 'Long' || right === 'Long' ? 'Long' : 'Integer';
}

export function isCqlNumeric(value: any): value is CqlNumericValue {
  return value?.isInteger === true || value?.isLong === true || value?.isDecimal === true;
}

/**
 * Normalizes JavaScript's exact integer primitives at API boundaries.
 *
 * A number is only a CQL Integer when it is a safe integral Number.  Decimal
 * values must still be expressed with Decimal so that their intended runtime
 * type is unambiguous.
 */
export function normalizeNumericInput(value: any): any {
  if (typeof value === 'bigint') {
    return Long.from(value);
  }
  if (typeof value === 'number' && Number.isSafeInteger(value)) {
    return Integer.from(value);
  }
  return value;
}

export function coerceNumeric(value: CqlNumericValue, kind: 'Integer'): Integer;
export function coerceNumeric(value: CqlNumericValue, kind: 'Long'): Long;
export function coerceNumeric(value: CqlNumericValue, kind: 'Decimal'): Decimal;
export function coerceNumeric(value: CqlNumericValue, kind: NumericKind): CqlNumericValue;
export function coerceNumeric(value: CqlNumericValue, kind: NumericKind): CqlNumericValue {
  switch (kind) {
    case 'Integer':
      return value instanceof Integer ? value : Integer.from(value.toNumber());
    case 'Long':
      return value instanceof Long
        ? value
        : Long.from(value instanceof Integer ? value : value.toString());
    case 'Decimal':
      return Decimal.from(value);
  }
}

/** Compares two numeric values after applying CQL numeric promotion. */
export function compareCqlNumeric(left: CqlNumericValue, right: CqlNumericValue): number {
  const kind = promotedKind(left.numericKind, right.numericKind);
  const promotedLeft = coerceNumeric(left, kind) as CqlNumeric;
  const promotedRight = coerceNumeric(right, kind) as CqlNumeric;
  return promotedLeft.compareTo(promotedRight);
}

/**
 * Applies an operation after coercing both operands to their promoted CQL type.
 * Wrapper methods therefore only need to preserve their own runtime type.
 */
export function binaryNumericOperation(
  left: CqlNumericValue,
  right: CqlNumericValue,
  operation: 'add' | 'subtract' | 'multiply' | 'divide' | 'truncatedDivide' | 'modulo'
): CqlNumericValue {
  const kind = promotedKind(left.numericKind, right.numericKind);

  switch (kind) {
    case 'Integer': {
      const x = coerceNumeric(left, kind);
      const y = coerceNumeric(right, kind);
      switch (operation) {
        case 'add':
          return x.add(y);
        case 'subtract':
          return x.subtract(y);
        case 'multiply':
          return x.multiplyBy(y);
        case 'divide':
        case 'truncatedDivide':
          return x.divideBy(y);
        case 'modulo':
          return x.modulo(y);
      }
    }
    case 'Long': {
      const x = coerceNumeric(left, kind);
      const y = coerceNumeric(right, kind);
      switch (operation) {
        case 'add':
          return x.add(y);
        case 'subtract':
          return x.subtract(y);
        case 'multiply':
          return x.multiplyBy(y);
        case 'divide':
        case 'truncatedDivide':
          return x.divideBy(y);
        case 'modulo':
          return x.modulo(y);
      }
    }
    case 'Decimal': {
      const x = coerceNumeric(left, kind);
      const y = coerceNumeric(right, kind);
      switch (operation) {
        case 'add':
          return x.add(y);
        case 'subtract':
          return x.subtract(y);
        case 'multiply':
          return x.multiplyBy(y);
        case 'divide':
          return x.divideBy(y);
        case 'truncatedDivide':
          return x.truncatedDivideBy(y);
        case 'modulo':
          return x.modulo(y);
      }
    }
  }
}
