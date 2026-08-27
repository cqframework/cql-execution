import { Uncertainty } from '../../src/datatypes/uncertainty';
import { MAX_FLOAT_VALUE, MIN_FLOAT_VALUE } from '../../src/util/limits';
import { Decimal } from '../../src/datatypes/decimal';
import { finalizeNumericResult, predecessor, successor } from '../../src/util/math';

describe('successor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1, 2));
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(Decimal.from(1.0), Decimal.from(2.0)));
    result.low.should.equalDecimal(Decimal.from('1.00000001'));
    result.high.should.equalDecimal(Decimal.from('2.00000001'));
  });

  it('should leave the uncertainty high unchanged when it overflows', () => {
    const result = successor(new Uncertainty(Decimal.from(1), MAX_FLOAT_VALUE));
    result.should.eql(new Uncertainty(Decimal.from('1.00000001'), MAX_FLOAT_VALUE));
  });
});

describe('predecessor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1, 2));
    result.low.should.equal(2);
    result.high.should.equal(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(Decimal.from(1.0), Decimal.from(2.0)));
    result.low.should.equalDecimal(Decimal.from('1.00000001'));
    result.high.should.equalDecimal(Decimal.from('2.00000001'));
  });

  it('should leave the uncertainty low unchanged when it underflows', () => {
    const result = predecessor(new Uncertainty(MIN_FLOAT_VALUE, Decimal.from(2)));
    result.should.eql(new Uncertainty(MIN_FLOAT_VALUE, Decimal.from('1.99999999')));
  });
});

describe('finalizeNumericResult', () => {
  it('should normalize Decimal results to eight places using the implicit rounding mode', () => {
    const result = finalizeNumericResult(Decimal.from('1.234567895'));

    result.should.equalDecimal(Decimal.from('1.23456790'));
  });

  it('should return a new normalized Uncertainty without modifying the input', () => {
    const input = new Uncertainty(Decimal.from('1.234567895'), Decimal.from('2.345678995'));
    const result = finalizeNumericResult(input);

    result.should.not.equal(input);
    input.low.should.equalDecimal(Decimal.from('1.234567895'));
    input.high.should.equalDecimal(Decimal.from('2.345678995'));
    result.low.should.equalDecimal(Decimal.from('1.23456790'));
    result.high.should.equalDecimal(Decimal.from('2.34567900'));
  });
});
