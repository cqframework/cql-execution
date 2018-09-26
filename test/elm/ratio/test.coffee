should = require 'should'
setup = require '../../setup'
{Quantity} = require '../../../lib/elm/quantity'
{Ratio} = require '../../../lib/elm/ratio'

describe 'Ratio', ->
  it 'should allow creation of Ratio with two valid quantities with units', ->
    should.doesNotThrow ->
      numerator = new Quantity({unit: "mm", value: 42.424242})
      denominator = new Quantity({unit: "mm", value: 33.3333})
      new Ratio({numerator: numerator, denominator: denominator})

  it 'should allow creation of Ratio with two valid quantities without units', ->
    should.doesNotThrow ->
      numerator = new Quantity({value: 42.424242})
      denominator = new Quantity({value: 33.3333})
      new Ratio({numerator: numerator, denominator: denominator})

  it 'should throw error when creating ratio of non quantity numerator', ->
    should.throws ->
      numerator =  {unit: "mm", value: "NOT_A_NUMBER"}
      denominator = new Quantity({unit: "mm", value: 33.3333})
      new Ratio({numerator: numerator, denominator: denominator})

  it 'should throw error when creating ratio of non quantity denominator', ->
    should.throws ->
      numerator = new Quantity({unit: "mm", value: 42.424242})
      denominator = {unit: "mm", value: "NOT_A_NUMBER"}
      new Ratio({numerator: numerator, denominator: denominator})

  it 'should throw error when creating ratio with null denominator', ->
    should.throws ->
      numerator = null
      denominator = new Quantity({unit: "mm", value: 33.3333})
      new Ratio({numerator: numerator, denominator: denominator})

  it 'should throw error when creating ratio with null numerator', ->
    should.throws ->
      numerator = new Quantity({unit: "mm", value: 42.424242})
      denominator = null
      new Ratio({numerator: numerator, denominator: denominator})

  it 'should return a properly formatted string representing a ratio', ->
      numerator = new Quantity({unit: "mm", value: 42.424242})
      denominator = new Quantity({unit: "mm", value: 33.3333})
      ratio = new Ratio({numerator: numerator, denominator: denominator})
      ratio.toString().should.equal "42.424242 'mm' : 33.3333 'mm'"

  it 'should set numerator and denominator from Quantities', ->
      numerator = new Quantity({unit: "mm", value: 42.424242})
      denominator = new Quantity({unit: "mm", value: 33.3333})
      ratio = new Ratio({numerator: numerator, denominator: denominator})
      ratio.numerator.toString().should.equal "42.424242 'mm'"
      ratio.denominator.toString().should.equal "33.3333 'mm'"

  it 'should set numerator and denominator from Quantity hashes', ->
      numerator = {unit: "mm", value: 42.424242}
      denominator = {unit: "mm", value: 33.3333}
      ratio = new Ratio({numerator: numerator, denominator: denominator})
      ratio.numerator.toString().should.equal "42.424242 'mm'"
      ratio.denominator.toString().should.equal "33.3333 'mm'"

  it 'should return a properly formatted string representing a ratio from Quantity hashes', ->
      numerator = {unit: "mm", value: 42.424242}
      denominator = {unit: "mm", value: 33.3333}
      ratio = new Ratio({numerator: numerator, denominator: denominator})
      ratio.toString().should.equal "42.424242 'mm' : 33.3333 'mm'"

 it 'should return true for equal ratios', ->
      numerator = new Quantity({unit: "mm", value: 33.3333})
      denominator = new Quantity({unit: "mm", value: 33.3333})
      ratio1 = new Ratio({numerator: numerator, denominator: denominator})
      ratio2 = new Ratio({numerator: numerator, denominator: denominator})
      ratio1.equals(ratio2).should.equal true

 it 'should return true for equal ratios with different numerators and denominators', ->
      numerator1 = new Quantity({unit: "mm", value: 33.3333})
      denominator1 = new Quantity({unit: "mm", value: 66.6666})
      numerator2 = new Quantity({unit: "mm", value: 10.1})
      denominator2 = new Quantity({unit: "mm", value: 20.2})
      ratio1 = new Ratio({numerator: numerator1, denominator: denominator1})
      ratio2 = new Ratio({numerator: numerator2, denominator: denominator2})
      ratio1.equals(ratio2).should.equal true

 it 'should return true for equivalent ratios with different numerators and denominators', ->
      numerator1 = new Quantity({unit: "mm", value: 33.3333})
      denominator1 = new Quantity({unit: "mm", value: 66.6666})
      numerator2 = new Quantity({unit: "mm", value: 10.1})
      denominator2 = new Quantity({unit: "mm", value: 20.2})
      ratio1 = new Ratio({numerator: numerator1, denominator: denominator1})
      ratio2 = new Ratio({numerator: numerator2, denominator: denominator2})
      ratio1.equivalent(ratio2).should.equal true

 it 'should return true for equal ratios with comparable units', ->
      numerator1 = new Quantity({unit: "mm", value: 1})
      denominator1 = new Quantity({unit: "mm", value: 1000})
      numerator2 = new Quantity({unit: "m", value: .001})
      denominator2 = new Quantity({unit: "m", value: 1})
      ratio1 = new Ratio({numerator: numerator1, denominator: denominator1})
      ratio2 = new Ratio({numerator: numerator2, denominator: denominator2})
      ratio1.equals(ratio2).should.equal true

 it 'should return true for equivalent ratios with comparable units', ->
      numerator1 = new Quantity({unit: "mm", value: 1})
      denominator1 = new Quantity({unit: "mm", value: 1000})
      numerator2 = new Quantity({unit: "m", value: .001})
      denominator2 = new Quantity({unit: "m", value: 1})
      ratio1 = new Ratio({numerator: numerator1, denominator: denominator1})
      ratio2 = new Ratio({numerator: numerator2, denominator: denominator2})
      ratio1.equals(ratio2).should.equal true

 it 'should return false for non equal ratios with incomparable units', ->
      numerator1 = new Quantity({unit: "mm", value: 1})
      denominator1 = new Quantity({unit: "mm", value: 1000})
      numerator2 = new Quantity({unit: "m", value: .001})
      denominator2 = new Quantity({unit: "cm", value: 1})
      ratio1 = new Ratio({numerator: numerator1, denominator: denominator1})
      ratio2 = new Ratio({numerator: numerator2, denominator: denominator2})
      ratio1.equals(ratio2).should.equal false

 it 'should return false for non equivalent ratios with incomparable units', ->
      numerator1 = new Quantity({unit: "mm", value: 1})
      denominator1 = new Quantity({unit: "mm", value: 1000})
      numerator2 = new Quantity({unit: "m", value: .001})
      denominator2 = new Quantity({unit: "cm", value: 1})
      ratio1 = new Ratio({numerator: numerator1, denominator: denominator1})
      ratio2 = new Ratio({numerator: numerator2, denominator: denominator2})
      ratio1.equivalent(ratio2).should.equal false