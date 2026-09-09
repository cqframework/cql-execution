import { Decimal } from '../../src/datatypes/decimal';

describe('Decimal', () => {
  describe('from', () => {
    it('should preserve Decimal instances', () => {
      const decimal = Decimal.from('2.0');
      Decimal.from(decimal).should.equal(decimal);
      Decimal.from(decimal).should.eql(decimal);
    });

    it('should parse scale from passed-in strings', () => {
      Decimal.from('2').scale.should.equal(0);
      Decimal.from('2.0').scale.should.equal(1);
      Decimal.from('2.00').scale.should.equal(2);
      Decimal.from('2.000').scale.should.equal(3);
    });

    it('should reject invalid values', () => {
      (() => Decimal.from('not a number')).should.throw();
      (() => Decimal.from('NaN')).should.throw();
      (() => Decimal.from('Infinity')).should.throw();
      (() => Decimal.from(Number.NaN)).should.throw();
      (() => Decimal.from(Number.POSITIVE_INFINITY)).should.throw();
    });
  });

  describe('isDecimal', () => {
    it('should identify Decimal values', () => {
      Decimal.from(2).isDecimal.should.be.true();
    });
  });

  describe('normalized', () => {
    it('should round to CQL-implicit eight decimal places', () => {
      Decimal.from('0.12345678901234').normalized().should.equalDecimal('0.12345679');
    });

    it('should preserve an already normalized value', () => {
      const value = Decimal.from('1.23456789');
      value.normalized().should.equal(value);
    });
  });

  describe('add', () => {
    it('should add values with scale matching the most precise operand', () => {
      const result = Decimal.from('1.2').add('0.03');
      result.should.equalDecimal('1.23');
      result.scale.should.equal(2);
    });
  });

  describe('subtract', () => {
    it('should subtract values with scale matching the most precise operand', () => {
      const result = Decimal.from('3.14').subtract('3.1');
      result.should.equalDecimal('0.04');
      result.scale.should.equal(2);
    });
  });

  describe('multiplyBy', () => {
    it('should cap the result scale at eight places', () => {
      const result = Decimal.from('1.2345').multiplyBy('2.0000');
      result.should.equalDecimal('2.46900000');
      result.scale.should.equal(8);
    });

    it('should round when the product exceeds the eight-place scale cap', () => {
      const result = Decimal.from('1.23456789').multiplyBy('1.00000001');
      result.should.equalDecimal('1.23456790');
      result.scale.should.equal(8);
    });
  });

  describe('divideBy', () => {
    it('should apply CQL rounding and preferred scale', () => {
      Decimal.from('1.00000').divideBy('2.0').should.equalDecimal('0.5000');
      Decimal.from(1).divideBy(3).should.equalDecimal('0.33333333');
      (() => Decimal.from(1).divideBy('1e-1000')).should.not.throw();
    });

    it('should round a terminating quotient that exceeds eight decimal places', () => {
      const result = Decimal.from(1).divideBy(512);
      result.should.equalDecimal('0.00195313');
      result.scale.should.equal(8);
    });

    it('should preserve the preferred scale of an exact quotient', () => {
      const result = Decimal.from('4.0').divideBy(2);
      result.should.equalDecimal('2.0');
      result.scale.should.equal(1);
    });

    it('should reject a zero divisor', () => {
      (() => Decimal.from(1).divideBy(0)).should.throw(RangeError);
    });
  });

  describe('modulo', () => {
    it('should calculate a remainder', () => {
      Decimal.from('5.5').modulo(2).should.equalDecimal('1.5');
    });

    it('should reject a zero divisor', () => {
      (() => Decimal.from(1).modulo(0)).should.throw(RangeError);
    });
  });

  describe('compareTo', () => {
    it('should order numeric values', () => {
      Decimal.from('1.20').compareTo('1.2').should.equal(0);
      Decimal.from('1.21').compareTo('1.2').should.equal(1);
      Decimal.from('1.19').compareTo('1.2').should.equal(-1);
    });
  });

  describe('greaterThan', () => {
    it('should compare values', () => {
      Decimal.from('1.21').greaterThan('1.2').should.be.true();
      Decimal.from('1.2').greaterThan('1.2').should.be.false();
    });
  });

  describe('greaterThanOrEquals', () => {
    it('should compare values', () => {
      Decimal.from('1.20').greaterThanOrEquals('1.2').should.be.true();
      Decimal.from('1.19').greaterThanOrEquals('1.2').should.be.false();
    });
  });

  describe('lessThan', () => {
    it('should compare values', () => {
      Decimal.from('1.19').lessThan('1.2').should.be.true();
      Decimal.from('1.2').lessThan('1.2').should.be.false();
    });
  });

  describe('lessThanOrEquals', () => {
    it('should compare values', () => {
      Decimal.from('1.20').lessThanOrEquals('1.2').should.be.true();
      Decimal.from('1.21').lessThanOrEquals('1.2').should.be.false();
    });
  });

  describe('equals', () => {
    it('should test numeric equality', () => {
      Decimal.from('1.20').equals('1.2').should.be.true();
      Decimal.from('1.21').equals('1.2').should.be.false();
    });
  });

  describe('equivalent', () => {
    it('should compare at the least precise operand precision, ignoring trailing zeros', () => {
      Decimal.from('1.2').equivalent('1.24').should.be.true();
      Decimal.from('1.20').equivalent('1.24').should.be.true();
      Decimal.from('1.20').equivalent('1.26').should.be.false();
    });
  });

  describe('successor', () => {
    it('should return the precision-aware successor', () => {
      Decimal.from('1.0').successor().should.equalDecimal('1.1');
      Decimal.from('1.00').successor().should.equalDecimal('1.01');
    });

    it('should preserve scale when crossing an integer boundary', () => {
      const result = Decimal.from('1.99').successor();
      result.should.equalDecimal('2.00');
      result.scale.should.equal(2);
    });
  });

  describe('predecessor', () => {
    it('should return the precision-aware predecessor', () => {
      Decimal.from('1.0').predecessor().should.equalDecimal('0.9');
      Decimal.from('1.00').predecessor().should.equalDecimal('0.99');
    });
  });

  describe('negate', () => {
    it('should preserve scale', () => {
      Decimal.from('1.20').negate().should.equalDecimal('-1.20');
    });
  });

  describe('abs', () => {
    it('should preserve scale', () => {
      Decimal.from('-1.20').abs().should.equalDecimal('1.20');
    });
  });

  describe('truncate', () => {
    it('should return the integer component', () => {
      Decimal.from('-1.9').truncate().should.equal(-1);
    });
  });

  describe('truncated', () => {
    it('should truncate to an optional decimal scale', () => {
      Decimal.from('-1.239').truncated(2).should.equalDecimal('-1.23');
      Decimal.from('1.9').truncated().should.equalDecimal('1.0');
    });

    it('should treat scale zero as integer truncation', () => {
      const result = Decimal.from('1.99').truncated(0);
      result.should.equalDecimal('1.0');
      result.scale.should.equal(0);
    });
  });

  describe('ceil', () => {
    it('should return the smallest integer not less than the value', () => {
      Decimal.from('1.1').ceil().should.equal(2);
      Decimal.from('-1.1').ceil().should.equal(-1);
    });
  });

  describe('floor', () => {
    it('should return the largest integer not greater than the value', () => {
      Decimal.from('1.1').floor().should.equal(1);
      Decimal.from('-1.1').floor().should.equal(-2);
    });
  });

  describe('isInteger', () => {
    it('should identify integer values', () => {
      Decimal.from('2.0').isInteger().should.be.true();
      Decimal.from('2.1').isInteger().should.be.false();
      Decimal.from('2.0000000000001').isInteger().should.be.false();
    });
  });

  describe('power', () => {
    it('should raise values to a power', () => {
      Decimal.from(2).power(3).should.equalDecimal('8.0');
    });
  });

  describe('sqrt', () => {
    it('should calculate square roots', () => {
      const result = Decimal.from('9.00').sqrt();
      result.should.equalDecimal('3.00');
      result.scale.should.equal(2);
    });
  });

  describe('ln', () => {
    it('should calculate natural logarithms', () => {
      Decimal.from(1).ln().should.equalDecimal('0.0');
    });
  });

  describe('exp', () => {
    it('should calculate exponential values', () => {
      Decimal.from(0).exp().should.equalDecimal('1.0');
    });
  });

  describe('log', () => {
    it('should calculate logarithms using the supplied base', () => {
      const result = Decimal.from('8.00').log(2);
      result.should.equalDecimal('3.00');
      result.scale.should.equal(2);
    });
  });

  describe('round', () => {
    it('should round half away from zero to a requested scale', () => {
      Decimal.from('1.235').round(2).should.equalDecimal('1.24');
      Decimal.from('-1.235').round(2).should.equalDecimal('-1.24');
    });
  });

  describe('withScale', () => {
    it('should use CQL half-up rounding', () => {
      Decimal.from('-0.5').withScale(0).should.equalDecimal('-1.0');
      Decimal.from('0.444444444').withScale(8).should.equalDecimal('0.44444444');
    });

    it('should reject invalid scales', () => {
      (() => Decimal.from(1).withScale(-1)).should.throw(RangeError);
      (() => Decimal.from(1).withScale(1.5)).should.throw(RangeError);
    });
  });

  describe('withMinimumScale', () => {
    it('should only retain or extend scale', () => {
      const value = Decimal.from('1.20');
      value.withMinimumScale(0).should.equal(value);
      value.withMinimumScale(0).scale.should.equal(2);
      value.withMinimumScale(1).should.equal(value);
      value.withMinimumScale(1).scale.should.equal(2);
      value.withMinimumScale(2).should.equal(value);
      value.withMinimumScale(2).scale.should.equal(2);
      value.withMinimumScale(3).should.equalDecimal('1.200');
      value.withMinimumScale(3).scale.should.equal(3);
      value.withMinimumScale(4).should.equalDecimal('1.2000');
      value.withMinimumScale(4).scale.should.equal(4);
    });
  });

  describe('withoutTrailingZeros', () => {
    it('should remove insignificant trailing zeros', () => {
      const value = Decimal.from('1.200').withoutTrailingZeros();
      value.should.equalDecimal('1.2');
      value.scale.should.equal(1);
    });
  });

  describe('toNumber', () => {
    it('should convert to a JavaScript number', () => {
      Decimal.from('1.25').toNumber().should.equal(1.25);
    });
  });

  describe('toString', () => {
    it('should serialize in fixed-point CQL Decimal notation', () => {
      Decimal.from(1).toString().should.equal('1.0');
      Decimal.from('-12.5').toString().should.equal('-12.5');
      Decimal.from('0.00000001').toString().should.equal('0.00000001');
    });
  });

  describe('toJSON', () => {
    it('should serialize as a FHIR decimal number', () => {
      JSON.stringify({ value: Decimal.from('1.25') }).should.equal('{"value":1.25}');
    });
  });
});
