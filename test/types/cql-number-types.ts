import {
  CQLNumber,
  CQLInteger,
  CQLLong,
  CQLDecimal,
  AnyCQLNumber,
  NumericKind,
  Promote,
  Quantity,
  DateTime
} from '../../src/cql';
import {
  binaryNumericOperation,
  coerceNumeric,
  isCqlNumeric,
  promotedKind
} from '../../src/datatypes/numeric';

function expectType<T>(_value: T): void {}

// This function is intentionally never executed. npm run test:typecheck checks
// the accepted assignments and verifies every @ts-expect-error is rejected.
export function numericTypeContracts(unknownValue: unknown, broad: CQLNumber, union: AnyCQLNumber) {
  const i = CQLNumber.integer(2);
  const l = CQLNumber.long(2n);
  const d = CQLNumber.decimal('2.00');
  expectType<CQLInteger>(i);
  expectType<CQLLong>(l);
  expectType<CQLDecimal>(d);
  expectType<'Integer'>(i.numericKind);
  expectType<CQLInteger>(CQLNumber.from(2));
  expectType<CQLLong>(CQLNumber.from(2n));
  expectType<CQLDecimal>(CQLNumber.from(d));
  expectType<CQLNumber>(CQLNumber.from(broad));

  // Every pair has the same promotion rules, in either operand order.
  expectType<CQLInteger>(i.modulo(i));
  expectType<CQLLong>(i.modulo(l));
  expectType<CQLDecimal>(i.modulo(d));
  expectType<CQLLong>(l.modulo(i));
  expectType<CQLLong>(l.modulo(l));
  expectType<CQLDecimal>(l.modulo(d));
  expectType<CQLDecimal>(d.modulo(i));
  expectType<CQLDecimal>(d.modulo(l));
  expectType<CQLDecimal>(d.modulo(d));

  expectType<CQLInteger>(i.add(1));
  expectType<CQLLong>(i.subtract(1n));
  expectType<CQLLong>(l.multiplyBy(i));
  expectType<CQLDecimal>(i.divideBy(d));
  expectType<CQLLong>(l.truncatedDivideBy(2));
  expectType<CQLDecimal>(i.add('1.0'));
  expectType<CQLDecimal>(d.add(1n));
  expectType<CQLInteger>(i.abs().negate().successor().predecessor().normalized());
  expectType<CQLLong>(l.abs().negate().successor().predecessor().normalized());
  expectType<CQLDecimal>(d.abs().negate().successor().predecessor().normalized());
  expectType<CQLDecimal>(i.power(l));
  expectType<CQLDecimal>(l.sqrt());
  expectType<CQLDecimal>(i.nthRoot(3));
  expectType<CQLDecimal>(l.ln().exp().log(i));
  expectType<CQLDecimal>(i.round().withScale(2).withoutTrailingZeros());
  expectType<CQLDecimal>(d.withMinimumScale(3));
  expectType<CQLNumber<'Integer' | 'Decimal'>>(i.withMinimumScale(3));

  expectType<CQLLong>(coerceNumeric(i, 'Long'));
  expectType<CQLDecimal>(binaryNumericOperation(i, d, 'add'));
  expectType<'Long'>(promotedKind('Integer', 'Long'));
  expectType<CQLDecimal>(d.add(broad));
  expectType<CQLNumber<'Long' | 'Decimal'>>(l.add(broad));
  expectType<CQLNumber<NumericKind>>(i.add(broad));
  expectType<Promote<'Integer' | 'Decimal', 'Long'>>('Long');
  expectType<Promote<'Integer' | 'Decimal', 'Long'>>('Decimal');

  switch (union.numericKind) {
    case 'Integer':
      expectType<CQLInteger>(union);
      break;
    case 'Long':
      expectType<CQLLong>(union);
      break;
    case 'Decimal':
      expectType<CQLDecimal>(union);
      break;
    default:
      expectType<never>(union);
  }
  if (broad.hasKind('Integer')) {
    expectType<CQLInteger>(broad);
    expectType<CQLLong>(broad.add(l));
  }
  if (isCqlNumeric(unknownValue) && unknownValue.numericKind === 'Decimal') {
    expectType<CQLDecimal>(unknownValue);
  }
  expectType<CQLDecimal>(new Quantity(i).value);
  const date = new DateTime(2020);
  if (date.timezoneOffset != null) {
    expectType<CQLDecimal>(date.timezoneOffset);
  }

  // @ts-expect-error Decimal is not an Integer, even when its magnitude is integral.
  expectType<CQLInteger>(d);
  // @ts-expect-error The result is Long after mixed integral promotion.
  expectType<CQLInteger>(i.modulo(l));
  // @ts-expect-error The result is Decimal after Decimal promotion.
  expectType<CQLLong>(l.add(d));
  // @ts-expect-error A broad kind cannot be assumed to be Integer.
  expectType<CQLInteger>(broad);
  // @ts-expect-error Scale-setting can convert Integer to Decimal.
  expectType<CQLInteger>(i.withMinimumScale(2));
  // @ts-expect-error Kind is immutable.
  i.numericKind = 'Long';
  // @ts-expect-error Constructor inference deliberately rejects strings.
  CQLNumber.from('2');
  // @ts-expect-error Timezone offsets must retain Decimal kind.
  date.timezoneOffset = i;
}
