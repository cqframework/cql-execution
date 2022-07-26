import should from 'should';
import { Quantity } from '../../../src/datatypes/quantity';
import { Ratio } from '../../../src/datatypes/ratio';

describe('Ratio', () => {
  it('should allow creation of Ratio with two valid quantities with units', () =>
    should.doesNotThrow(() => {
      const numerator = new Quantity(42.424242, 'mm');
      const denominator = new Quantity(33.3333, 'mm');
      new Ratio(numerator, denominator);
    }));

  it('should allow creation of Ratio with two valid quantities without units', () =>
    should.doesNotThrow(() => {
      const numerator = new Quantity(42.424242);
      const denominator = new Quantity(33.3333);
      new Ratio(numerator, denominator);
    }));

  it('should throw error when creating ratio of non quantity numerator', () =>
    should.throws(() => {
      const numerator = new Quantity('NOT_A_NUMBER', 'mm');
      const denominator = new Quantity(33.3333, 'mm');
      new Ratio(numerator, denominator);
    }));

  it('should throw error when creating ratio of non quantity denominator', () =>
    should.throws(() => {
      const numerator = new Quantity(42.424242, 'mm');
      const denominator = new Quantity('NOT_A_NUMBER', 'mm');
      new Ratio(numerator, denominator);
    }));

  it('should throw error when creating ratio with null denominator', () =>
    should.throws(() => {
      const numerator: any = null;
      const denominator = new Quantity(33.3333, 'mm');
      new Ratio(numerator, denominator);
    }));

  it('should throw error when creating ratio with null numerator', () =>
    should.throws(() => {
      const numerator = new Quantity(42.424242, 'mm');
      const denominator: any = null;
      new Ratio(numerator, denominator);
    }));

  it('should return a properly formatted string representing a ratio', () => {
    const numerator = new Quantity(42.424242, 'mm');
    const denominator = new Quantity(33.3333, 'mm');
    const ratio = new Ratio(numerator, denominator);
    ratio.toString().should.equal("42.424242 'mm' : 33.3333 'mm'");
  });

  it('should set numerator and denominator from Quantities', () => {
    const numerator = new Quantity(42.424242, 'mm');
    const denominator = new Quantity(33.3333, 'mm');
    const ratio = new Ratio(numerator, denominator);
    ratio.numerator.toString().should.equal("42.424242 'mm'");
    ratio.denominator.toString().should.equal("33.3333 'mm'");
  });

  it('should set numerator and denominator from Quantity hashes', () => {
    const numerator = new Quantity(42.424242, 'mm');
    const denominator = new Quantity(33.3333, 'mm');
    const ratio = new Ratio(numerator, denominator);
    ratio.numerator.toString().should.equal("42.424242 'mm'");
    ratio.denominator.toString().should.equal("33.3333 'mm'");
  });

  it('should return a properly formatted string representing a ratio from Quantity hashes', () => {
    const numerator = new Quantity(42.424242, 'mm');
    const denominator = new Quantity(33.3333, 'mm');
    const ratio = new Ratio(numerator, denominator);
    ratio.toString().should.equal("42.424242 'mm' : 33.3333 'mm'");
  });

  it('should return true for equal ratios', () => {
    const numerator = new Quantity(33.3333, 'mm');
    const denominator = new Quantity(33.3333, 'mm');
    const ratio1 = new Ratio(numerator, denominator);
    const ratio2 = new Ratio(numerator, denominator);
    ratio1.equals(ratio2).should.equal(true);
  });

  it('should return true for equal ratios with different numerators and denominators', () => {
    const numerator1 = new Quantity(33.3333, 'mm');
    const denominator1 = new Quantity(66.6666, 'mm');
    const numerator2 = new Quantity(10.1, 'mm');
    const denominator2 = new Quantity(20.2, 'mm');
    const ratio1 = new Ratio(numerator1, denominator1);
    const ratio2 = new Ratio(numerator2, denominator2);
    ratio1.equals(ratio2).should.equal(true);
  });

  it('should return true for equivalent ratios with different numerators and denominators', () => {
    const numerator1 = new Quantity(33.3333, 'mm');
    const denominator1 = new Quantity(66.6666, 'mm');
    const numerator2 = new Quantity(10.1, 'mm');
    const denominator2 = new Quantity(20.2, 'mm');
    const ratio1 = new Ratio(numerator1, denominator1);
    const ratio2 = new Ratio(numerator2, denominator2);
    ratio1.equivalent(ratio2).should.equal(true);
  });

  it('should return true for equal ratios with comparable units', () => {
    const numerator1 = new Quantity(1, 'mm');
    const denominator1 = new Quantity(1000, 'mm');
    const numerator2 = new Quantity(0.001, 'm');
    const denominator2 = new Quantity(1, 'm');
    const ratio1 = new Ratio(numerator1, denominator1);
    const ratio2 = new Ratio(numerator2, denominator2);
    ratio1.equals(ratio2).should.equal(true);
  });

  it('should return true for equivalent ratios with comparable units', () => {
    const numerator1 = new Quantity(1, 'mm');
    const denominator1 = new Quantity(1000, 'mm');
    const numerator2 = new Quantity(0.001, 'm');
    const denominator2 = new Quantity(1, 'm');
    const ratio1 = new Ratio(numerator1, denominator1);
    const ratio2 = new Ratio(numerator2, denominator2);
    ratio1.equals(ratio2).should.equal(true);
  });

  it('should return false for non equal ratios with incomparable units', () => {
    const numerator1 = new Quantity(1, 'mm');
    const denominator1 = new Quantity(1000, 'mm');
    const numerator2 = new Quantity(0.001, 'm');
    const denominator2 = new Quantity(1, 'cm');
    const ratio1 = new Ratio(numerator1, denominator1);
    const ratio2 = new Ratio(numerator2, denominator2);
    ratio1.equals(ratio2).should.equal(false);
  });

  it('should return false for non equivalent ratios with incomparable units', () => {
    const numerator1 = new Quantity(1, 'mm');
    const denominator1 = new Quantity(1000, 'mm');
    const numerator2 = new Quantity(0.001, 'm');
    const denominator2 = new Quantity(1, 'cm');
    const ratio1 = new Ratio(numerator1, denominator1);
    const ratio2 = new Ratio(numerator2, denominator2);
    ratio1.equivalent(ratio2).should.equal(false);
  });
});
