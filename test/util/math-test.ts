import { Uncertainty } from '../../src/datatypes/uncertainty';
import { MAX_FLOAT_VALUE, MIN_FLOAT_VALUE } from '../../src/util/limits';
import { Decimal } from '../../src/datatypes/decimal';
import { predecessor, successor } from '../../src/util/math';

describe('successor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1.0, 2.0));
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(Decimal.from(1.0), Decimal.from(2.0)));
    result.low.should.equalDecimal(Decimal.from(1.00000001));
    result.high.should.equalDecimal(Decimal.from(2.00000001));
  });

  it('should leave the uncertainty high unchanged when it overflows', () => {
    const result = successor(new Uncertainty(Decimal.from(1), MAX_FLOAT_VALUE));
    result.should.eql(new Uncertainty(Decimal.from(1.00000001), MAX_FLOAT_VALUE));
  });
});

describe('predecessor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1.0, 2.0));
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(Decimal.from(1.0), Decimal.from(2.0)));
    result.low.should.equalDecimal(Decimal.from(1.00000001));
    result.high.should.equalDecimal(Decimal.from(2.00000001));
  });

  it('should leave the uncertainty low unchanged when it underflows', () => {
    const result = predecessor(new Uncertainty(MIN_FLOAT_VALUE, Decimal.from(2)));
    result.should.eql(new Uncertainty(MIN_FLOAT_VALUE, Decimal.from(1.99999999)));
  });
});
