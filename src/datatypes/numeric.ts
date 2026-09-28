import { CQLNumber, NumericKind, Promote, AnyCQLNumber } from './cql-number';

export { NumericKind, promotedKind } from './cql-number';
export type CqlNumericValue = AnyCQLNumber;

export function isCqlNumeric(value: any): value is AnyCQLNumber {
  return value?.isCQLNumber === true;
}

/** Normalize exact JS integral primitives at API boundaries. */
export function normalizeNumericInput(value: any): any {
  if (typeof value === 'bigint') {
    return CQLNumber.long(value);
  }
  if (typeof value === 'number' && Number.isSafeInteger(value)) {
    return CQLNumber.integer(value);
  }
  return value;
}

export function coerceNumeric<K extends NumericKind>(value: CQLNumber, kind: K): CQLNumber<K>;
export function coerceNumeric(value: CQLNumber, kind: NumericKind): CQLNumber {
  if (value.numericKind === kind) {
    return value;
  }
  switch (kind) {
    case 'Integer':
      return CQLNumber.integer(value);
    case 'Long':
      return CQLNumber.long(value);
    case 'Decimal':
      return CQLNumber.decimal(value);
  }
}

export function compareCqlNumeric(left: CQLNumber, right: CQLNumber): number {
  return left.compareTo(right);
}

/** CQLNumber owns promotion and arithmetic for every numeric kind. */
export function binaryNumericOperation<A extends NumericKind, B extends NumericKind>(
  left: CQLNumber<A>,
  right: CQLNumber<B>,
  operation: 'add' | 'subtract' | 'multiply' | 'divide' | 'truncatedDivide' | 'modulo'
): CQLNumber<Promote<A, B>>;
export function binaryNumericOperation(
  left: CQLNumber,
  right: CQLNumber,
  operation: 'add' | 'subtract' | 'multiply' | 'divide' | 'truncatedDivide' | 'modulo'
): CQLNumber {
  switch (operation) {
    case 'add':
      return left.add(right);
    case 'subtract':
      return left.subtract(right);
    case 'multiply':
      return left.multiplyBy(right);
    case 'divide':
      return left.divideBy(right);
    case 'truncatedDivide':
      return left.truncatedDivideBy(right);
    case 'modulo':
      return left.modulo(right);
  }
}
