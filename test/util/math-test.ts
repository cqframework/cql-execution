import { CQLNumber } from '../../src/datatypes/cql-number';
import { Uncertainty } from '../../src/datatypes/uncertainty';
import { MAX_FLOAT_VALUE, MIN_FLOAT_VALUE } from '../../src/util/limits';

import { finalizeNumericResult, predecessor, successor } from '../../src/util/math';

describe('successor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1, 2));
    result.low.should.equalInteger(2);
    result.high.should.equalInteger(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(CQLNumber.decimal('1.0'), CQLNumber.decimal('2.0')));
    result.low.should.equalDecimal('1.1');
    result.high.should.equalDecimal('2.1');
  });

  it('should leave the uncertainty high unchanged when it overflows', () => {
    const result = successor(new Uncertainty(CQLNumber.decimal('1.0'), MAX_FLOAT_VALUE));
    result.should.equalCql(new Uncertainty(CQLNumber.decimal('1.1'), MAX_FLOAT_VALUE));
  });
});

describe('predecessor', () => {
  it('should preserve integers in an Uncertainty', () => {
    const result = successor(new Uncertainty(1, 2));
    result.low.should.equalInteger(2);
    result.high.should.equalInteger(3);
  });

  it('should preserve decimals in an Uncertainty', () => {
    const result = successor(new Uncertainty(CQLNumber.decimal('1.0'), CQLNumber.decimal('2.0')));
    result.low.should.equalDecimal('1.1');
    result.high.should.equalDecimal('2.1');
  });

  it('should leave the uncertainty low unchanged when it underflows', () => {
    const result = predecessor(new Uncertainty(MIN_FLOAT_VALUE, CQLNumber.decimal('2.0')));
    result.should.equalCql(new Uncertainty(MIN_FLOAT_VALUE, CQLNumber.decimal('1.9')));
  });
});

describe('finalizeNumericResult', () => {
  it('should normalize Decimal results to eight places using the implicit rounding mode', () => {
    const result = finalizeNumericResult(CQLNumber.decimal('1.234567895'));

    result.should.equalDecimal('1.23456790');
  });

  it('should return a new normalized Uncertainty without modifying the input', () => {
    const input = new Uncertainty(
      CQLNumber.decimal('1.234567895'),
      CQLNumber.decimal('2.345678995')
    );
    const result = finalizeNumericResult(input);

    result.should.not.equal(input);
    input.low.should.equalDecimal('1.234567895');
    input.high.should.equalDecimal('2.345678995');
    result.low.should.equalDecimal('1.23456790');
    result.high.should.equalDecimal('2.34567900');
  });
});
