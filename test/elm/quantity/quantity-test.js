should = require 'should'
setup = require '../../setup'
{ Quantity, doAddition, doSubtraction, doMultiplication, doDivision } = require '../../../lib/datatypes/quantity'

describe 'Quantity', ->
  it 'should allow creation of Quantity with valid ucum units', ->
    should.doesNotThrow ->
      new Quantity(42.424242, "mm")

  it 'should allow creation of Quantity with valid ucum units on multiple uses of same unit', ->
    should.doesNotThrow ->
      new Quantity(42.424242, "cm")
      new Quantity(43.434242, "cm")

  it 'should allow creation of Quantity with valid ucum converted time units', ->
    should.doesNotThrow ->
      new Quantity(3, "years")

  it 'should throw error when creating Quantity with invalid ucum units', ->
    should.throws ->
      new Quantity(42.424242, "quacks")

  it 'should throw error when creating Quantity with invalid ucum units on multiple uses of same unit', ->
    should.throws ->
      new Quantity(42.424242, "caches")
    should.throws ->
      new Quantity(44.4242242, "caches")

  it 'should allow creation of Quantity with no unit', ->
    should.doesNotThrow ->
      new Quantity(9)

  it 'should allow creation of Quantity with empty string unit', ->
    should.doesNotThrow ->
      new Quantity(9, "")

  it 'should allow for the value of the quantity to be null', ->
    should.throws ->
      q = new Quantity(null, "mg")
      should.equal(q.value, null)

  it 'should convert undefined values to null', ->
    should.throws ->
      q = new Quantity(undefined, "mg")
      should.equal(q.value, null)

  it 'should throw an error if value is a string that is not a number', ->
    should.throws ->
      new Quantity("twenty", "mg")

  it 'should throw an error if value is NaN', ->
    should.throws ->
      new Quantity(NaN, "mg")

  it 'should handle cql temporal keywords with ucum units', ->
      a = new Quantity(1, "d")
      b = new Quantity(1, "day")
      a.equals(b).should.equal(true)

  it 'dividing identical units should result in default unit', ->
    numerator = new Quantity(-5.5, "mg")
    denominator = new Quantity(2.0, "mg")
    result = numerator.dividedBy(denominator)
    result.unit.should.equal "1"
    result.value.should.equal -2.75

  it 'should allow for singular time units', ->
    year = new Quantity(4, "year")
    month = new Quantity(4, "month")
    day = new Quantity(4, "day")
    hour = new Quantity(4, "hour")
    minute = new Quantity(4, "minute")
    second = new Quantity(4, "second")
    millisecond = new Quantity(4, "millisecond")
    year.equals(new Quantity(4, "years")).should.be.true()
    month.equals(new Quantity(4, "months")).should.be.true()
    day.equals(new Quantity(4, "days")).should.be.true()
    hour.equals(new Quantity(4, "hours")).should.be.true()
    minute.equals(new Quantity(4, "minutes")).should.be.true()
    second.equals(new Quantity(4, "seconds")).should.be.true()
    millisecond.equals(new Quantity(4, "milliseconds")).should.be.true()

  it 'added to Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity(2, "m")
    quantity2 = new Quantity(2, "m")
    quantity2.unit = "fakeUnit"
    should(doAddition(quantity1, quantity2)).be.null()

  it 'subtracted from Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity(2, "m")
    quantity2 = new Quantity(2, "m")
    quantity2.unit = "fakeUnit"
    should(doSubtraction(quantity1, quantity2)).be.null()

  it 'multiplied by Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity(2, "m")
    quantity2 = new Quantity(2, "m")
    quantity2.unit = "fakeUnit"
    should(doMultiplication(quantity1, ".")).be.null()

  it 'divided by Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity(2, "m")
    quantity2 = new Quantity(2, "m")
    quantity2.unit = "fakeUnit"
    should(doDivision(quantity1, "/")).be.null()

  it 'should convert units when possible to perform arithmetic', ->
    divide = new Quantity(8, "m").dividedBy(new Quantity(50, "cm"))
    divide.equals(new Quantity(16, "1")).should.be.true()
    multiply = new Quantity(8, "cm").multiplyBy(new Quantity(2, "m"))
    multiply.equals(new Quantity(0.16, "m2")).should.be.true()
    add = doAddition(new Quantity(8, "cm"), new Quantity(2, "m"))
    add.equals(new Quantity(2.08, "m")).should.be.true()
    subtract = doSubtraction(new Quantity(150, "cm"), new Quantity(1, "m"))
    subtract.equals(new Quantity(0.5, "m")).should.be.true()

  it 'should return null when units are mismatched and cannot be converted', ->
    add = doAddition(new Quantity(8, "cm"), new Quantity(2, "g"))
    should.not.exist(add)
    subtract = doSubtraction(new Quantity(150, "cm"), new Quantity(1, "mg"))
    should.not.exist(subtract)

  for unitName, unitValue of {Undefined: undefined, Null: null, EmptyString: ""}
    it 'should treat '+unitName+' the same as a "1" in calculations', ->
      divideWithOneOnRight = new Quantity(8, "m").dividedBy(new Quantity(2, "1"))
      divideWithNullOnRight = new Quantity(8, "m").dividedBy(new Quantity(2, unitValue))
      divideWithOneOnRight.should.deepEqual(divideWithNullOnRight)
      multiplyWithOneOnRight = new Quantity(8, "m").multiplyBy(new Quantity(2, "1"))
      multiplyWithNullOnRight = new Quantity(8, "m").multiplyBy(new Quantity(2, unitValue))
      multiplyWithOneOnRight.should.deepEqual(multiplyWithNullOnRight)
      addWithOneOnRight = doAddition(new Quantity(8, "1"), new Quantity(2, "1"))
      addWithNullOnRight = doAddition(new Quantity(8, "1"), new Quantity(2, unitValue))
      addWithOneOnRight.should.deepEqual(addWithNullOnRight)
      subtractWithOneOnRight = doSubtraction(new Quantity(8, "1"), new Quantity(2, "1"))
      subtractWithNullOnRight = doSubtraction(new Quantity(8, "1"), new Quantity(2, unitValue))
      subtractWithOneOnRight.should.deepEqual(subtractWithNullOnRight)

      divideWithOneOnLeft = new Quantity(8, "1").dividedBy(new Quantity(2, "m"))
      divideWithNullOnLeft = new Quantity(8, unitValue).dividedBy(new Quantity(2, "m"))
      divideWithOneOnLeft.should.deepEqual(divideWithNullOnLeft)
      multiplyWithOneOnLeft = new Quantity(8, "1").multiplyBy(new Quantity(2, "m"))
      multiplyWithNullOnLeft = new Quantity(8, unitValue).multiplyBy(new Quantity(2, "m"))
      multiplyWithOneOnLeft.should.deepEqual(multiplyWithNullOnLeft)
      addWithOneOnLeft = doAddition(new Quantity(8, "1"), new Quantity(2, "1"))
      addWithNullOnLeft = doAddition(new Quantity(8, unitValue), new Quantity(2, "1"))
      addWithOneOnLeft.should.deepEqual(addWithNullOnLeft)
      subtractWithOneOnLeft = doSubtraction(new Quantity(8, "1"), new Quantity(2, "1"))
      subtractWithNullOnLeft = doSubtraction(new Quantity(8, unitValue), new Quantity(2, "1"))
      subtractWithOneOnLeft.should.deepEqual(subtractWithNullOnLeft)
