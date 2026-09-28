import { CQLNumber } from '../../src/datatypes/cql-number';
import should from 'should';

import { binaryNumericOperation, promotedKind } from '../../src/datatypes/numeric';
import { Interval } from '../../src/datatypes/interval';
import { Uncertainty } from '../../src/datatypes/uncertainty';
import * as comparison from '../../src/util/comparison';
import * as math from '../../src/util/math';

describe('CQL numeric wrappers', () => {
  it('keeps Integer arithmetic, comparison, and JSON behavior in CQLNumber', () => {
    const value = CQLNumber.integer(12);
    value.add(3).toNumber().should.equal(15);
    value.divideBy(5).toNumber().should.equal(2);
    value.lessThan(CQLNumber.integer(13)).should.be.true();
    JSON.stringify({ value }).should.equal('{"value":12}');
  });

  it('keeps Long arithmetic exact and serializes it as a FHIR integer64 string', () => {
    const value = CQLNumber.long('9007199254740993');
    value.add(1n).toString().should.equal('9007199254740994');
    value.modulo(2n).toString().should.equal('1');
    JSON.stringify({ value }).should.equal('{"value":"9007199254740993"}');
  });

  it('promotes Integer and Long to Decimal without Number precision loss', () => {
    CQLNumber.decimal(CQLNumber.long('9007199254740993'))
      .toString()
      .should.equal('9007199254740993.0');
    CQLNumber.decimal(CQLNumber.integer(2))
      .add(CQLNumber.integer(3))
      .toString()
      .should.equal('5.0');
  });

  it('applies CQL bounds after a wrapper operation', () => {
    should(math.add(CQLNumber.integer(2147483647), CQLNumber.integer(1))).equal(null);
    should(math.add(CQLNumber.long('9223372036854775807'), CQLNumber.long(1))).equal(null);
  });

  it('promotes both operands before dispatching a binary operation', () => {
    promotedKind('Integer', 'Long').should.equal('Long');
    promotedKind('Long', 'Decimal').should.equal('Decimal');

    binaryNumericOperation(
      CQLNumber.integer(7),
      CQLNumber.long(3),
      'modulo'
    ).isLong.should.be.true();
    binaryNumericOperation(
      CQLNumber.integer(7),
      CQLNumber.decimal('2.0'),
      'modulo'
    ).isDecimal.should.be.true();
  });

  it('normalizes native integer primitives at public numeric boundaries', () => {
    const integers = new Interval(1, 3);
    integers.low.isInteger.should.be.true();
    integers.high.isInteger.should.be.true();
    integers.start().isInteger.should.be.true();

    const longs = new Interval(1n, 3n);
    longs.low.isLong.should.be.true();
    longs.high.isLong.should.be.true();
    longs.end().isLong.should.be.true();

    const uncertainty = new Uncertainty(1, 3);
    uncertainty.low.isInteger.should.be.true();
    uncertainty.high.isInteger.should.be.true();

    comparison.lessThan(1, 2).should.be.true();
    comparison.greaterThan(3n, 2n).should.be.true();
  });
});
