import { Decimal as DecimalJS } from 'decimal.js';
import { Decimal } from '../../src/datatypes/decimal';

describe('Decimal', () => {
  it('should retain Decimal runtime identity for a whole-number value', () => {
    const decimal = Decimal.from('2.0');

    decimal.isDecimal.should.equal(true);
    (typeof decimal).should.equal('object');
    decimal.toNumber().should.equal(2);
  });

  it('should expose arithmetic and comparison operations', () => {
    const value = Decimal.from('1.5').subtract('0.5');

    value.compareTo('1').should.equal(0);
    value.add(2).toString().should.equal('3.0');
    value.multiplyBy(2).toString().should.equal('2.0');
    value.divideBy(2).toString().should.equal('0.5');
    Decimal.from(3).modulo(2).toString().should.equal('1.0');
  });

  it('should provide an explicit scale and JSON representation', () => {
    Decimal.from('0.444444444').setScale(8).toString().should.equal('0.44444444');
    JSON.stringify({ value: Decimal.from('1.25') }).should.equal('{"value":"1.25"}');
  });

  it('should serialize using fixed-point CQL Decimal notation', () => {
    Decimal.from(1).toString().should.equal('1.0');
    Decimal.from('-12.5').toString().should.equal('-12.5');
    Decimal.from('0.00000001').toString().should.equal('0.00000001');
    JSON.stringify({ value: Decimal.from(1) }).should.equal('{"value":"1.0"}');
  });

  it('should provide CQL arithmetic helpers without exposing a number', () => {
    Decimal.from('-1.9').truncate().should.equal(-1);
    Decimal.from('1.1').ceil().should.equal(2);
    Decimal.from('1.9').floor().should.equal(1);
    Decimal.from('-0.5').setScale(0).should.equalDecimal(Decimal.from(0));
    Decimal.from('2').power(3).should.equalDecimal(Decimal.from(8));
    Decimal.from('9').sqrt().should.equalDecimal(Decimal.from(3));
    Decimal.from('8').log(2).should.equalDecimal(Decimal.from(3));
  });

  it('should reject non-finite and divide-by-zero values', () => {
    (() => Decimal.from('not a number')).should.throw();
    (() => Decimal.from(1).divideBy(0)).should.throw();
  });

  it('should not coerce a nonzero Decimal divisor through a JavaScript number', () => {
    (() => Decimal.from(1).divideBy('1e-1000')).should.not.throw();
  });

  it('should keep CQL Decimal precision independent from the base decimal.js constructor', () => {
    const basePrecision = DecimalJS.precision;
    try {
      DecimalJS.set({ precision: 5 });

      const oneThird = Decimal.from(1).divideBy(3);
      oneThird.toString().should.equal('0.333333333333333333333333333333'); // we specify precision of 30 = significant figures

      oneThird.normalized().toString().should.equal('0.33333333');
    } finally {
      DecimalJS.set({ precision: basePrecision });
    }
  });
});
