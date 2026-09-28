import { CQLNumber } from '../../src/datatypes/cql-number';
import should from 'should';
import { Quantity } from '../../src/datatypes/quantity';
import { DateTime } from '../../src/datatypes/datetime';
import { overflowsOrUnderflows } from '../../src/util/math';

describe('CQLNumber', () => {
  it('narrows by CQL kind rather than by whether the magnitude is integral', () => {
    const values = [CQLNumber.integer(2), CQLNumber.long(2n), CQLNumber.decimal('2.00')];
    for (const value of values) {
      for (const kind of ['Integer', 'Long', 'Decimal'] as const) {
        value.hasKind(kind).should.equal(value.numericKind === kind);
      }
      value.isIntegral().should.be.true();
      CQLNumber.from(value).should.equal(value);
      for (const result of [
        value.abs(),
        value.negate(),
        value.successor(),
        value.predecessor(),
        value.normalized()
      ]) {
        result.numericKind.should.equal(value.numericKind);
      }
    }
  });

  it('retains a concrete numeric kind while accepting friendly integral inputs', () => {
    CQLNumber.from(2).numericKind.should.equal('Integer');
    CQLNumber.from(2n).numericKind.should.equal('Long');
    CQLNumber.from(CQLNumber.decimal('2.0')).numericKind.should.equal('Decimal');
    should(() => CQLNumber.from(2.5)).throw(TypeError);
  });

  it('uses one Decimal-backed implementation for promotion and arithmetic', () => {
    const longSum = CQLNumber.from(2).add(3n);
    longSum.numericKind.should.equal('Long');
    longSum.should.be.instanceOf(CQLNumber);
    longSum.toString().should.equal('5');

    const decimalProduct = CQLNumber.from(2).multiplyBy(CQLNumber.decimal('1.5'));
    decimalProduct.numericKind.should.equal('Decimal');
    decimalProduct.should.be.instanceOf(CQLNumber);
    decimalProduct.toString().should.equal('3.0');
  });

  it('uses CQL promotion for comparisons while retaining its numeric kind', () => {
    const integer = CQLNumber.from(2);
    integer.numericKind.should.equal('Integer');
    integer.equals(2n).should.be.true();
    integer.lessThan(CQLNumber.decimal('2.5')).should.be.true();
  });

  it('promotes every operand combination without depending on operand order', () => {
    const factories = [CQLNumber.integer, CQLNumber.long, CQLNumber.decimal];
    const kinds = ['Integer', 'Long', 'Decimal'];
    for (let left = 0; left < factories.length; left++) {
      for (let right = 0; right < factories.length; right++) {
        const x = factories[left](7);
        const y = factories[right](2);
        const kind = kinds[Math.max(left, right)];
        for (const [operation, expected] of [
          ['add', 9],
          ['subtract', 5],
          ['multiplyBy', 14],
          ['modulo', 1],
          ['truncatedDivideBy', 3]
        ] as const) {
          const result = x[operation](y);
          result.numericKind.should.equal(kind);
          result.toNumber().should.equal(expected);
        }
        const quotient = x.divideBy(y);
        quotient.numericKind.should.equal(kind);
        quotient.toNumber().should.equal(kind === 'Decimal' ? 3.5 : 3);
      }
    }
  });

  it('keeps full Long multiplication intermediates exact before checking overflow', () => {
    const max = 9223372036854775807n;
    const result = CQLNumber.long(max).multiplyBy(max);
    result.toBigInt().should.equal(max * max);
    overflowsOrUnderflows(result).should.be.true();
    CQLNumber.long(-max)
      .divideBy(2n)
      .toBigInt()
      .should.equal(-max / 2n);
    CQLNumber.long(-max)
      .modulo(2n)
      .toBigInt()
      .should.equal(-max % 2n);
  });

  it('preserves kind, scale, and wire form after removing the backing wrapper', () => {
    const decimal = CQLNumber.decimal('2.00');
    CQLNumber.decimal(decimal).should.equal(decimal);
    decimal.isIntegral().should.be.true();
    decimal.isInteger.should.be.false();
    decimal.successor().toString().should.equal('2.01');
    CQLNumber.integer(2).successor().toString().should.equal('3');
    CQLNumber.integer(2).power(3).numericKind.should.equal('Decimal');
    JSON.stringify([
      CQLNumber.integer(2),
      CQLNumber.long('9007199254740993'),
      decimal
    ]).should.equal('[2,"9007199254740993",2]');
    should(() => CQLNumber.long(CQLNumber.decimal('1.5'))).throw(RangeError);
    should(() => CQLNumber.integer('9007199254740990.5')).throw(RangeError);
  });

  it('uses Decimal-kind CQLNumbers for quantities and timezone offsets', () => {
    const quantity = new Quantity(CQLNumber.long(2n), 'mg');
    quantity.value.should.be.instanceOf(CQLNumber);
    quantity.value.numericKind.should.equal('Decimal');
    const date = new DateTime(2020, 1, 1, 0, 0, 0, 0, 5.5);
    date.timezoneOffset!.should.be.instanceOf(CQLNumber);
    date.timezoneOffset!.numericKind.should.equal('Decimal');
    date.timezoneOffset!.toString().should.equal('5.5');
  });
});
