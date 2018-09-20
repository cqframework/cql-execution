should = require 'should'
setup = require '../../setup'
{ Quantity, doAddition, doSubtraction, doMultiplication, doDivision } = require '../../../lib/elm/quantity'

describe 'Quantity', ->
  it 'should allow creation of Quantity with valid ucum units', ->
    should.doesNotThrow ->
      new Quantity({unit: "mm", value: 42.424242})

  it 'should allow creation of Quantity with valid ucum units on multiple uses of same unit', ->
    should.doesNotThrow ->
      new Quantity({unit: "cm", value: 42.424242})
      new Quantity({unit: "cm", value: 43.434242})

  it 'should allow creation of Quantity with valid ucum converted time units', ->
    should.doesNotThrow ->
      new Quantity({unit: "years", value: 3})

  it 'should throw error when creating Quantity with invalid ucum units', ->
    should.throws ->
      new Quantity({unit: "quacks", value: 42.424242})

  it 'should throw error when creating Quantity with invalid ucum units on multiple uses of same unit', ->
    should.throws ->
      new Quantity({unit: "caches", value: 42.424242})
    should.throws ->
      new Quantity({unit: "caches", value: 44.4242242})

  it 'should allow creation of Quantity with no unit', ->
    should.doesNotThrow ->
      new Quantity({value: 9})

  it 'should allow creation of Quantity with empty string unit', ->
    should.doesNotThrow ->
      new Quantity({unit: "", value: 9})

  it 'should allow for the value of the quantity to be null', ->
    should.throws ->
      q = new Quantity({unit: "mg", value: null})
      should.equal(q.value, null)

  it 'should convert undefined values to null', ->
    should.throws ->
      q = new Quantity({unit: "mg", value: undefined})
      should.equal(q.value, null)

  it 'should throw an error if value is a string that is not a number', ->
    should.throws ->
      new Quantity({unit: "mg", value: "twenty"})

  it 'should throw an error if value is NaN', ->
    should.throws ->
      new Quantity({unit: "mg", value: NaN})

  it 'should handle cql temporal keywords with ucum units', ->
      a = new Quantity({unit: "d", value: 1})
      b = new Quantity({unit: "day", value: 1})
      a.equals(b).should.equal(true)

  it 'dividing identical units should result in default unit', ->
    numerator = new Quantity({unit: "mg", value: -5.5})
    denominator = new Quantity({unit: "mg", value: 2.0})
    result = numerator.dividedBy(denominator)
    result.unit.should.equal "1"
    result.value.should.equal -2.75

  it 'should allow for singular time units', ->
    year = new Quantity({unit: "year", value: 4})
    month = new Quantity({unit: "month", value: 4})
    day = new Quantity({unit: "day", value: 4})
    hour = new Quantity({unit: "hour", value: 4})
    minute = new Quantity({unit: "minute", value: 4})
    second = new Quantity({unit: "second", value: 4})
    millisecond = new Quantity({unit: "millisecond", value: 4})
    year.equals(new Quantity({unit: "years", value: 4})).should.be.true()
    month.equals(new Quantity({unit: "months", value: 4})).should.be.true()
    day.equals(new Quantity({unit: "days", value: 4})).should.be.true()
    hour.equals(new Quantity({unit: "hours", value: 4})).should.be.true()
    minute.equals(new Quantity({unit: "minutes", value: 4})).should.be.true()
    second.equals(new Quantity({unit: "seconds", value: 4})).should.be.true()
    millisecond.equals(new Quantity({unit: "milliseconds", value: 4})).should.be.true()
  it 'added to Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity({unit:"m", value: 2})
    quantity2 = new Quantity({unit: "m", value: 2})
    quantity2.unit = "fakeUnit"
    should(doAddition(quantity1, quantity2)).be.null()

  it 'subtracted from Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity({unit:"m", value: 2})
    quantity2 = new Quantity({unit: "m", value: 2})
    quantity2.unit = "fakeUnit"
    should(doSubtraction(quantity1, quantity2)).be.null()

  it 'multiplied by Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity({unit:"m", value: 2})
    quantity2 = new Quantity({unit: "m", value: 2})
    quantity2.unit = "fakeUnit"
    should(doMultiplication(quantity1, ".")).be.null()

  it 'divided by Quantity with invalid ucum units results in null', ->
    quantity1 = new Quantity({unit:"m", value: 2})
    quantity2 = new Quantity({unit: "m", value: 2})
    quantity2.unit = "fakeUnit"
    should(doDivision(quantity1, "/")).be.null()

