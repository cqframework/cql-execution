import should from 'should';
import { Integer } from '../../src/datatypes/integer';
import { Long } from '../../src/datatypes/long';
import { Decimal } from '../../src/datatypes/decimal';
import { binaryNumericOperation, promotedKind } from '../../src/datatypes/numeric';
import { Interval } from '../../src/datatypes/interval';
import { Uncertainty } from '../../src/datatypes/uncertainty';
import * as comparison from '../../src/util/comparison';
import * as math from '../../src/util/math';

describe('CQL numeric wrappers', () => {
  it('keeps Integer arithmetic, comparison, and JSON behavior in the wrapper', () => {
    const value = Integer.from(12);
    value.add(3).toNumber().should.equal(15);
    value.divideBy(5).toNumber().should.equal(2);
    value.lessThan(Integer.from(13)).should.be.true();
    JSON.stringify({ value }).should.equal('{"value":12}');
  });

  it('keeps Long arithmetic exact and serializes it as a FHIR integer64 string', () => {
    const value = Long.from('9007199254740993');
    value.add(1n).toString().should.equal('9007199254740994');
    value.modulo(2n).toString().should.equal('1');
    JSON.stringify({ value }).should.equal('{"value":"9007199254740993"}');
  });

  it('promotes Integer and Long to Decimal without Number precision loss', () => {
    Decimal.from(Long.from('9007199254740993')).toString().should.equal('9007199254740993.0');
    Decimal.from(Integer.from(2)).add(Integer.from(3)).toString().should.equal('5.0');
  });

  it('applies CQL bounds after a wrapper operation', () => {
    should(math.add(Integer.from(2147483647), Integer.from(1))).equal(null);
    should(math.add(Long.from('9223372036854775807'), Long.from(1))).equal(null);
  });

  it('promotes both operands before dispatching a binary operation', () => {
    promotedKind('Integer', 'Long').should.equal('Long');
    promotedKind('Long', 'Decimal').should.equal('Decimal');

    binaryNumericOperation(Integer.from(7), Long.from(3), 'modulo').should.be.instanceOf(Long);
    binaryNumericOperation(Integer.from(7), Decimal.from('2.0'), 'modulo').should.be.instanceOf(
      Decimal
    );
  });

  it('normalizes native integer primitives at public numeric boundaries', () => {
    const integers = new Interval(1, 3);
    integers.low.should.be.instanceOf(Integer);
    integers.high.should.be.instanceOf(Integer);
    integers.start().should.be.instanceOf(Integer);

    const longs = new Interval(1n, 3n);
    longs.low.should.be.instanceOf(Long);
    longs.high.should.be.instanceOf(Long);
    longs.end().should.be.instanceOf(Long);

    const uncertainty = new Uncertainty(1, 3);
    uncertainty.low.should.be.instanceOf(Integer);
    uncertainty.high.should.be.instanceOf(Integer);

    comparison.lessThan(1, 2).should.be.true();
    comparison.greaterThan(3n, 2n).should.be.true();
  });
});
