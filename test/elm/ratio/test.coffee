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

 it 'should return false for non equal ratios', ->
      numerator = new Quantity({unit: "mm", value: 42.424242})
      denominator = new Quantity({unit: "mm", value: 33.3333})
      ratio1 = new Ratio({numerator: numerator, denominator: denominator})
      ratio2 = new Ratio({numerator: numerator, denominator: denominator})
      ratio1.equals(ratio2).should.equal false

 it 'should return true for equal ratios', ->
      numerator = new Quantity({unit: "mm", value: 33.3333})
      denominator = new Quantity({unit: "mm", value: 33.3333})
      ratio1 = new Ratio({numerator: numerator, denominator: denominator})
      ratio2 = new Ratio({numerator: numerator, denominator: denominator})
      ratio1.equals(ratio2).should.equal true