import { Uncertainty } from '../../src/datatypes/uncertainty';
import { MAX_FLOAT_VALUE, MIN_FLOAT_VALUE } from '../../src/util/limits';
import { predecessor, successor } from '../../src/util/math';
import { ELM_DECIMAL_TYPE, ELM_INTEGER_TYPE } from '../../src/util/elmTypes';

describe('successor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1.0, 2.0), ELM_INTEGER_TYPE);
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(1.0, 2.0), ELM_DECIMAL_TYPE);
    result.low.should.equal(1.00000001);
    result.high.should.equal(2.00000001);
  });

  it('should leave the uncertainty high unchanged when it overflows', () => {
    const result = successor(new Uncertainty(1, MAX_FLOAT_VALUE), ELM_DECIMAL_TYPE);
    result.should.eql(new Uncertainty(1.00000001, MAX_FLOAT_VALUE));
  });
});

describe('predecessor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1.0, 2.0), ELM_INTEGER_TYPE);
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(1.0, 2.0), ELM_DECIMAL_TYPE);
    result.low.should.equal(1.00000001);
    result.high.should.equal(2.00000001);
  });

  it('should leave the uncertainty low unchanged when it underflows', () => {
    const result = predecessor(new Uncertainty(MIN_FLOAT_VALUE, 2), ELM_DECIMAL_TYPE);
    result.should.eql(new Uncertainty(MIN_FLOAT_VALUE, 1.99999999));
  });
});
