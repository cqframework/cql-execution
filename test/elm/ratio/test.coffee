should = require 'should'
setup = require '../../setup'
{Quantity} = require '../../../lib/datatypes/quantity'
{Ratio} = require '../../../lib/datatypes/ratio'

describe 'Ratio', ->
  it 'should allow creation of Ratio with two valid quantities with units', ->
    should.doesNotThrow ->
      numerator = new Quantity(42.424242, "mm")
      denominator = new Quantity(33.3333, "mm")
      new Ratio(numerator, denominator)

  it 'should allow creation of Ratio with two valid quantities without units', ->
    should.doesNotThrow ->
      numerator = new Quantity(42.424242)
      denominator = new Quantity(33.3333)
      new Ratio(numerator, denominator)

  it 'should throw error when creating ratio of non quantity numerator', ->
    should.throws ->
      numerator =  new Quantity("NOT_A_NUMBER", "mm")
      denominator = new Quantity(33.3333, "mm")
      new Ratio(numerator, denominator)

  it 'should throw error when creating ratio of non quantity denominator', ->
    should.throws ->
      numerator = new Quantity(42.424242, "mm")
      denominator = new Quantity("NOT_A_NUMBER", "mm")
      new Ratio(numerator, denominator)

  it 'should throw error when creating ratio with null denominator', ->
    should.throws ->
      numerator = null
      denominator = new Quantity(33.3333, "mm")
      new Ratio(numerator, denominator)

  it 'should throw error when creating ratio with null numerator', ->
    should.throws ->
      numerator = new Quantity(42.424242, "mm")
      denominator = null
      new Ratio(numerator, denominator)

  it 'should return a properly formatted string representing a ratio', ->
    numerator = new Quantity(42.424242, "mm")
    denominator = new Quantity(33.3333, "mm")
    ratio = new Ratio(numerator, denominator)
    ratio.toString().should.equal "42.424242 'mm' : 33.3333 'mm'"

  it 'should set numerator and denominator from Quantities', ->
    numerator = new Quantity(42.424242, "mm")
    denominator = new Quantity(33.3333, "mm")
    ratio = new Ratio(numerator, denominator)
    ratio.numerator.toString().should.equal "42.424242 'mm'"
    ratio.denominator.toString().should.equal "33.3333 'mm'"

  it 'should set numerator and denominator from Quantity hashes', ->
    numerator = new Quantity(42.424242, "mm")
    denominator = new Quantity(33.3333, "mm")
    ratio = new Ratio(numerator, denominator)
    ratio.numerator.toString().should.equal "42.424242 'mm'"
    ratio.denominator.toString().should.equal "33.3333 'mm'"

  it 'should return a properly formatted string representing a ratio from Quantity hashes', ->
    numerator = new Quantity(42.424242, "mm")
    denominator = new Quantity(33.3333, "mm")
    ratio = new Ratio(numerator, denominator)
    ratio.toString().should.equal "42.424242 'mm' : 33.3333 'mm'"

  it 'should return true for equal ratios', ->
    numerator = new Quantity(33.3333, "mm")
    denominator = new Quantity(33.3333, "mm")
    ratio1 = new Ratio(numerator, denominator)
    ratio2 = new Ratio(numerator, denominator)
    ratio1.equals(ratio2).should.equal true

  it 'should return true for equal ratios with different numerators and denominators', ->
    numerator1 = new Quantity(33.3333, "mm")
    denominator1 = new Quantity(66.6666, "mm")
    numerator2 = new Quantity(10.1, "mm")
    denominator2 = new Quantity(20.2, "mm")
    ratio1 = new Ratio(numerator1, denominator1)
    ratio2 = new Ratio(numerator2, denominator2)
    ratio1.equals(ratio2).should.equal true

  it 'should return true for equivalent ratios with different numerators and denominators', ->
    numerator1 = new Quantity(33.3333, "mm")
    denominator1 = new Quantity(66.6666, "mm")
    numerator2 = new Quantity(10.1, "mm")
    denominator2 = new Quantity(20.2, "mm")
    ratio1 = new Ratio(numerator1, denominator1)
    ratio2 = new Ratio(numerator2, denominator2)
    ratio1.equivalent(ratio2).should.equal true

  it 'should return true for equal ratios with comparable units', ->
    numerator1 = new Quantity(1, "mm")
    denominator1 = new Quantity(1000, "mm")
    numerator2 = new Quantity(.001, "m")
    denominator2 = new Quantity(1, "m")
    ratio1 = new Ratio(numerator1, denominator1)
    ratio2 = new Ratio(numerator2, denominator2)
    ratio1.equals(ratio2).should.equal true

  it 'should return true for equivalent ratios with comparable units', ->
    numerator1 = new Quantity(1, "mm")
    denominator1 = new Quantity(1000, "mm")
    numerator2 = new Quantity(.001, "m")
    denominator2 = new Quantity(1, "m")
    ratio1 = new Ratio(numerator1, denominator1)
    ratio2 = new Ratio(numerator2, denominator2)
    ratio1.equals(ratio2).should.equal true

  it 'should return false for non equal ratios with incomparable units', ->
    numerator1 = new Quantity(1, "mm")
    denominator1 = new Quantity(1000, "mm")
    numerator2 = new Quantity(.001, "m")
    denominator2 = new Quantity(1, "cm")
    ratio1 = new Ratio(numerator1, denominator1)
    ratio2 = new Ratio(numerator2, denominator2)
    ratio1.equals(ratio2).should.equal false

  it 'should return false for non equivalent ratios with incomparable units', ->
    numerator1 = new Quantity(1, "mm")
    denominator1 = new Quantity(1000, "mm")
    numerator2 = new Quantity(.001, "m")
    denominator2 = new Quantity(1, "cm")
    ratio1 = new Ratio(numerator1, denominator1)
    ratio2 = new Ratio(numerator2, denominator2)
    ratio1.equivalent(ratio2).should.equal false
