/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const { Quantity, doAddition, doSubtraction, doMultiplication, doDivision } = require('../../../lib/datatypes/quantity');

describe('Quantity', function() {
  it('should allow creation of Quantity with valid ucum units', () => should.doesNotThrow(() => new Quantity(42.424242, "mm")));

  it('should allow creation of Quantity with valid ucum units on multiple uses of same unit', () => should.doesNotThrow(function() {
    new Quantity(42.424242, "cm");
    return new Quantity(43.434242, "cm");
  }));

  it('should allow creation of Quantity with valid ucum converted time units', () => should.doesNotThrow(() => new Quantity(3, "years")));

  it('should throw error when creating Quantity with invalid ucum units', () => should.throws(() => new Quantity(42.424242, "quacks")));

  it('should throw error when creating Quantity with invalid ucum units on multiple uses of same unit', function() {
    should.throws(() => new Quantity(42.424242, "caches"));
    return should.throws(() => new Quantity(44.4242242, "caches"));
  });

  it('should allow creation of Quantity with no unit', () => should.doesNotThrow(() => new Quantity(9)));

  it('should allow creation of Quantity with empty string unit', () => should.doesNotThrow(() => new Quantity(9, "")));

  it('should allow for the value of the quantity to be null', () => should.throws(function() {
    const q = new Quantity(null, "mg");
    return should.equal(q.value, null);
  }));

  it('should convert undefined values to null', () => should.throws(function() {
    const q = new Quantity(undefined, "mg");
    return should.equal(q.value, null);
  }));

  it('should throw an error if value is a string that is not a number', () => should.throws(() => new Quantity("twenty", "mg")));

  it('should throw an error if value is NaN', () => should.throws(() => new Quantity(NaN, "mg")));

  it('should handle cql temporal keywords with ucum units', function() {
      const a = new Quantity(1, "d");
      const b = new Quantity(1, "day");
      return a.equals(b).should.equal(true);
  });

  it('dividing identical units should result in default unit', function() {
    const numerator = new Quantity(-5.5, "mg");
    const denominator = new Quantity(2.0, "mg");
    const result = numerator.dividedBy(denominator);
    result.unit.should.equal("1");
    return result.value.should.equal(-2.75);
  });

  it('should allow for singular time units', function() {
    const year = new Quantity(4, "year");
    const month = new Quantity(4, "month");
    const day = new Quantity(4, "day");
    const hour = new Quantity(4, "hour");
    const minute = new Quantity(4, "minute");
    const second = new Quantity(4, "second");
    const millisecond = new Quantity(4, "millisecond");
    year.equals(new Quantity(4, "years")).should.be.true();
    month.equals(new Quantity(4, "months")).should.be.true();
    day.equals(new Quantity(4, "days")).should.be.true();
    hour.equals(new Quantity(4, "hours")).should.be.true();
    minute.equals(new Quantity(4, "minutes")).should.be.true();
    second.equals(new Quantity(4, "seconds")).should.be.true();
    return millisecond.equals(new Quantity(4, "milliseconds")).should.be.true();
  });

  it('added to Quantity with invalid ucum units results in null', function() {
    const quantity1 = new Quantity(2, "m");
    const quantity2 = new Quantity(2, "m");
    quantity2.unit = "fakeUnit";
    return should(doAddition(quantity1, quantity2)).be.null();
  });

  it('subtracted from Quantity with invalid ucum units results in null', function() {
    const quantity1 = new Quantity(2, "m");
    const quantity2 = new Quantity(2, "m");
    quantity2.unit = "fakeUnit";
    return should(doSubtraction(quantity1, quantity2)).be.null();
  });

  it('multiplied by Quantity with invalid ucum units results in null', function() {
    const quantity1 = new Quantity(2, "m");
    const quantity2 = new Quantity(2, "m");
    quantity2.unit = "fakeUnit";
    return should(doMultiplication(quantity1, ".")).be.null();
  });

  it('divided by Quantity with invalid ucum units results in null', function() {
    const quantity1 = new Quantity(2, "m");
    const quantity2 = new Quantity(2, "m");
    quantity2.unit = "fakeUnit";
    return should(doDivision(quantity1, "/")).be.null();
  });

  it('should convert units when possible to perform arithmetic', function() {
    const divide = new Quantity(8, "m").dividedBy(new Quantity(50, "cm"));
    divide.equals(new Quantity(16, "1")).should.be.true();
    const multiply = new Quantity(8, "cm").multiplyBy(new Quantity(2, "m"));
    multiply.equals(new Quantity(0.16, "m2")).should.be.true();
    const add = doAddition(new Quantity(8, "cm"), new Quantity(2, "m"));
    add.equals(new Quantity(2.08, "m")).should.be.true();
    const subtract = doSubtraction(new Quantity(150, "cm"), new Quantity(1, "m"));
    return subtract.equals(new Quantity(0.5, "m")).should.be.true();
  });

  it('should return null when units are mismatched and cannot be converted', function() {
    const add = doAddition(new Quantity(8, "cm"), new Quantity(2, "g"));
    should.not.exist(add);
    const subtract = doSubtraction(new Quantity(150, "cm"), new Quantity(1, "mg"));
    return should.not.exist(subtract);
  });

  return (() => {
    const result = [];
    const object = {Undefined: undefined, Null: null, EmptyString: ""};
    for (let unitName in object) {
      var unitValue = object[unitName];
      result.push(it('should treat '+unitName+' the same as a "1" in calculations', function() {
        const divideWithOneOnRight = new Quantity(8, "m").dividedBy(new Quantity(2, "1"));
        const divideWithNullOnRight = new Quantity(8, "m").dividedBy(new Quantity(2, unitValue));
        divideWithOneOnRight.should.deepEqual(divideWithNullOnRight);
        const multiplyWithOneOnRight = new Quantity(8, "m").multiplyBy(new Quantity(2, "1"));
        const multiplyWithNullOnRight = new Quantity(8, "m").multiplyBy(new Quantity(2, unitValue));
        multiplyWithOneOnRight.should.deepEqual(multiplyWithNullOnRight);
        const addWithOneOnRight = doAddition(new Quantity(8, "1"), new Quantity(2, "1"));
        const addWithNullOnRight = doAddition(new Quantity(8, "1"), new Quantity(2, unitValue));
        addWithOneOnRight.should.deepEqual(addWithNullOnRight);
        const subtractWithOneOnRight = doSubtraction(new Quantity(8, "1"), new Quantity(2, "1"));
        const subtractWithNullOnRight = doSubtraction(new Quantity(8, "1"), new Quantity(2, unitValue));
        subtractWithOneOnRight.should.deepEqual(subtractWithNullOnRight);

        const divideWithOneOnLeft = new Quantity(8, "1").dividedBy(new Quantity(2, "m"));
        const divideWithNullOnLeft = new Quantity(8, unitValue).dividedBy(new Quantity(2, "m"));
        divideWithOneOnLeft.should.deepEqual(divideWithNullOnLeft);
        const multiplyWithOneOnLeft = new Quantity(8, "1").multiplyBy(new Quantity(2, "m"));
        const multiplyWithNullOnLeft = new Quantity(8, unitValue).multiplyBy(new Quantity(2, "m"));
        multiplyWithOneOnLeft.should.deepEqual(multiplyWithNullOnLeft);
        const addWithOneOnLeft = doAddition(new Quantity(8, "1"), new Quantity(2, "1"));
        const addWithNullOnLeft = doAddition(new Quantity(8, unitValue), new Quantity(2, "1"));
        addWithOneOnLeft.should.deepEqual(addWithNullOnLeft);
        const subtractWithOneOnLeft = doSubtraction(new Quantity(8, "1"), new Quantity(2, "1"));
        const subtractWithNullOnLeft = doSubtraction(new Quantity(8, unitValue), new Quantity(2, "1"));
        return subtractWithOneOnLeft.should.deepEqual(subtractWithNullOnLeft);
      }));
    }
    return result;
  })();
});
