should = require 'should'
setup = require '../../setup'
data = require './data'
{Quantity, doMultiplication, doDivision, doAddition, doSubtraction, parseQuantity} = require '../../../lib/datatypes/quantity'
DT = require '../../../lib/datatypes/datatypes'


validateQuantity = (object,expectedValue,expectedUnit) ->
  object.isQuantity.should.be.true()
  q = new Quantity(expectedValue, expectedUnit)
  q.equals(object).should.be.true("Expected "+ object + " to equal " + q)

doQuantityMathTests = (tests, operator) ->
  func = switch operator
           when "*" then doMultiplication
           when "/" then doDivision
           when "+" then doAddition
           when "-" then doSubtraction

  for x in tests
    a = parseQuantity(x[0])
    b = parseQuantity(x[1])
    # try to parse the expected value but if it comes back null
    # which it will if there are no units create a new Quantity
    # with just the exepected as the value with null units
    e = parseQuantity(x[2]) || new Quantity(x[2])

    res = func(a,b)
    e.equals(res).should.be.true(a + " " + operator + " " + b + " should eq " + e + " but was " + res )


describe 'Add', ->
  @beforeEach ->
    setup @, data

  it 'should add two numbers', ->
    @onePlusTwo.exec(@ctx).should.equal 3

  it 'should add multiple numbers', ->
    @addMultiple.exec(@ctx).should.equal 55

  it 'should add variables', ->
    @addVariables.exec(@ctx).should.equal 21

  it 'should add Time/Quantity', ->
    @addTime.exec(@ctx).isTime().should.be.true()

describe 'Subtract', ->
  @beforeEach ->
    setup @, data

  it 'should subtract two numbers', ->
    @fiveMinusTwo.exec(@ctx).should.equal 3

  it 'should subtract multiple numbers', ->
    @subtractMultiple.exec(@ctx).should.equal 15

  it 'should subtract variables', ->
    @subtractVariables.exec(@ctx).should.equal 1

describe 'Multiply', ->
  @beforeEach ->
    setup @, data

  it 'should multiply two numbers', ->
    @fiveTimesTwo.exec(@ctx).should.equal 10

  it 'should multiply multiple numbers', ->
    @multiplyMultiple.exec(@ctx).should.equal 120

  it 'should multiply variables', ->
    @multiplyVariables.exec(@ctx).should.equal 110

describe 'Divide', ->
  @beforeEach ->
    setup @, data

  it 'should divide two numbers', ->
    @tenDividedByTwo.exec(@ctx).should.equal 5

  it 'should divide two numbers that don\'t evenly divide', ->
    @tenDividedByFour.exec(@ctx).should.equal 2.5

  it 'should divide multiple numbers', ->
    @divideMultiple.exec(@ctx).should.equal 5

  it 'should divide variables', ->
    @divideVariables.exec(@ctx).should.equal 25

describe 'Negate', ->
  @beforeEach ->
    setup @, data

  it 'should negate a number', ->
    @negativeOne.exec(@ctx).should.equal -1

describe 'MathPrecedence', ->
  @beforeEach ->
    setup @, data

  it 'should follow order of operations', ->
    @mixed.exec(@ctx).should.equal 46

  it 'should allow parentheses to override order of operations', ->
    @parenthetical.exec(@ctx).should.equal -10

describe  'Power', ->
  @beforeEach ->
    setup @, data

  it "should be able to calculate the power of a number" , ->
    @pow.exec(@ctx).should.equal 81

describe 'MinValue', ->
  @beforeEach ->
    setup @, data

  it 'of Integer should return minimum representable Integer value', ->
    minIntegerValue = -2147483648
    @minInteger.exec(@ctx).should.equal(minIntegerValue)

  it 'of Decimal should return minimum representable Decimal value', ->
    minDecimalValue = -99999999999999999999999999999.99999999
    @minDecimal.exec(@ctx).should.be.approximately(minDecimalValue, 0.000000001)

  it 'of DateTime should return minimum representable DateTime value', ->
    dateTimeResult = @minDateTime.exec(@ctx)
    dateTimeResult.year.should.equal(1)
    dateTimeResult.month.should.equal(1)
    dateTimeResult.day.should.equal(1)
    dateTimeResult.hour.should.equal(0)
    dateTimeResult.minute.should.equal(0)
    dateTimeResult.second.should.equal(0)
    dateTimeResult.millisecond.should.equal(0)

  it 'of Time should return minimum representable Time value', ->
    timeResult = @minTime.exec(@ctx)
    timeResult.hour.should.equal(0)
    timeResult.minute.should.equal(0)
    timeResult.second.should.equal(0)
    timeResult.millisecond.should.equal(0)

  it 'of types other than Integer/Decimal/DateTime/Time should throw an error', ->
    should(() => @minWrongType.exec(@ctx)).throw()

describe 'MaxValue', ->
  @beforeEach ->
    setup @, data

  it 'of Integer should return maximum representable Integer value', ->
    maxIntegerValue = 2147483647
    @maxInteger.exec(@ctx).should.equal(maxIntegerValue)

  it 'of Decimal should return maximum representable Decimal value', ->
    maxDecimalValue = 99999999999999999999999999999.99999999
    @maxDecimal.exec(@ctx).should.be.approximately(maxDecimalValue, 0.000000001)

  it 'of DateTime should return maximum representable DateTime value', ->
    dateTimeResult = @maxDateTime.exec(@ctx)
    dateTimeResult.year.should.equal(9999)
    dateTimeResult.month.should.equal(12)
    dateTimeResult.day.should.equal(31)
    dateTimeResult.hour.should.equal(23)
    dateTimeResult.minute.should.equal(59)
    dateTimeResult.second.should.equal(59)
    dateTimeResult.millisecond.should.equal(999)

  it 'of DateTime should work with different execution timezoneOffsets', ->
    @ctx.executionDateTime.timezoneOffset = -4.0
    dateTimeResult = @maxDateTime.exec(@ctx)
    dateTimeResult.year.should.equal(9999)
    dateTimeResult.month.should.equal(12)
    dateTimeResult.day.should.equal(31)
    dateTimeResult.hour.should.equal(23)
    dateTimeResult.minute.should.equal(59)
    dateTimeResult.second.should.equal(59)
    dateTimeResult.millisecond.should.equal(999)
    dateTimeResult.timezoneOffset.should.equal(-4.0)

  it 'of Time should return maximum representable Time value', ->
    timeResult = @maxTime.exec(@ctx)
    timeResult.hour.should.equal(23)
    timeResult.minute.should.equal(59)
    timeResult.second.should.equal(59)
    timeResult.millisecond.should.equal(999)

  it 'of types other than Integer/Decimal/DateTime/Time should throw an error', ->
    should(() => @maxWrongType.exec(@ctx)).throw()

describe 'TruncatedDivide', ->
  @beforeEach ->
    setup @, data

  it "should be able to return just the integer portion of a division", ->
    @trunc.exec(@ctx).should.equal 3
    @even.exec(@ctx).should.equal 3

describe  'Truncate', ->
  @beforeEach ->
    setup @, data

  it "should be able to return the integer portion of a number", ->
    @trunc.exec(@ctx).should.equal 10
    @even.exec(@ctx).should.equal 10

describe  'Floor', ->
  @beforeEach ->
    setup @, data

  it "should be able to round down to the closest integer", ->
    @flr.exec(@ctx).should.equal 10
    @even.exec(@ctx).should.equal 10

describe 'Ceiling', ->
  @beforeEach ->
    setup @, data

    it "should be able to round up to the closest integer", ->
      @ceil.exec(@ctx).should.equal 11
      @even.exec(@ctx).should.equal 10

describe 'Ln', ->
  @beforeEach ->
    setup @, data

  it "should be able to return the natural log of a number", ->
    @ln.exec(@ctx).should.equal Math.log(4)

describe 'Log', ->
  @beforeEach ->
    setup @, data

    it "should be able to return the log of a number based on an arbitary base value", ->
      @log.exec(@ctx).should.equal 0.25

describe 'Modulo', ->
  @beforeEach ->
    setup @, data

    it "should be able to return the remainder of a division", ->
      @mod.exec(@ctx).should.equal 1

describe 'Abs', ->
  @beforeEach ->
    setup @, data

  it "should be able to return the absolute value of a positive number", ->
    @pos.exec(@ctx).should.equal 10
  it "should be able to return the absolute value of a negative number", ->
    @neg.exec(@ctx).should.equal 10
  it "should be able to return the absolute value of 0", ->
    @zero.exec(@ctx).should.equal 0

describe 'Round', ->
  @beforeEach ->
    setup @, data

  it "should be able to round a number up or down to the closest integer value", ->
    @up.exec(@ctx).should.equal 5
    @down.exec(@ctx).should.equal 4
  it "should be able to round a number up or down to the closest decimal place ", ->
    @up_percent.exec(@ctx).should.equal 4.6
    @down_percent.exec(@ctx).should.equal 4.4

describe 'Successor', ->
  @beforeEach ->
    setup @, data

  it "should be able to get Integer Successor", ->
    @is.exec(@ctx).should.equal 3
  it "should be able to get Real Successor", ->
    @rs.exec(@ctx).should.equal ( 2.2  + Math.pow(10,-8) )

  it "should return null for Successor greater than Integer Max value" , ->
    should(@ofr.exec(@ctx)).be.null()

  it "should be able to get Date Successor for year", ->
    dp = @y_date.exec(@ctx)
    dp.year.should.equal 2016
    should.not.exist dp.month
    should.not.exist dp.day
    should.not.exist dp.hour
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Successor for year,month", ->
    dp = @ym_date.exec(@ctx)
    dp.year.should.equal 2015
    dp.month.should.equal 2
    should.not.exist dp.day
    should.not.exist dp.hour
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Successor for year,month,day", ->
    dp = @ymd_date.exec(@ctx)
    dp.year.should.equal 2015
    dp.month.should.equal 1
    dp.day.should.equal 2
    should.not.exist dp.hour
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Successor for year,month,day,hour", ->
    dp = @ymdh_date.exec(@ctx)
    dp.year.should.equal 2015
    dp.month.should.equal 1
    dp.day.should.equal 1
    dp.hour.should.equal 1
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Successor for year,month,day,hour,minute", ->
    dp = @ymdhm_date.exec(@ctx)
    dp.year.should.equal 2015
    dp.month.should.equal 1
    dp.day.should.equal 1
    dp.hour.should.equal 0
    dp.minute.should.equal 1
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Successor for year,month,day,hour,minute,seconds", ->
    dp = @ymdhms_date.exec(@ctx)
    dp.year.should.equal 2015
    dp.month.should.equal 1
    dp.day.should.equal 1
    dp.hour.should.equal 0
    dp.minute.should.equal 0
    dp.second.should.equal 1
    should.not.exist  dp.millisecond

  it "should be able to get Date Successor for year,month,day,hour,minute,seconds,milliseconds", ->
    dp = @ymdhmsm_date.exec(@ctx)
    dp.year.should.equal 2015
    dp.month.should.equal 1
    dp.day.should.equal 1
    dp.hour.should.equal 0
    dp.minute.should.equal 0
    dp.second.should.equal 0
    dp.millisecond.should.equal 1

  it "should return null when attempting to get the Successor of the maximum allowed date", ->
    should(@max_date.exec(@ctx)).be.null()

describe 'Predecessor', ->
  @beforeEach ->
    setup @, data

  it "should be able to get Integer Predecessor", ->
    @is.exec(@ctx).should.equal 1
  it "should be able to get Real Predecessor", ->
    @rs.exec(@ctx).should.equal ( 2.2  - Math.pow(10,-8))
  it "should return null for Predecessor greater than Integer Max value" , ->
    should(@ufr.exec(@ctx)).be.null()

  it "should be able to get Date Predecessor for year", ->
    dp = @y_date.exec(@ctx)
    dp.year.should.equal 2014
    should.not.exist dp.month
    should.not.exist dp.day
    should.not.exist dp.hour
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Predecessor for year,month", ->
    dp = @ym_date.exec(@ctx)
    dp.year.should.equal 2014
    dp.month.should.equal 12
    should.not.exist dp.day
    should.not.exist dp.hour
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Predecessor for year,month,day", ->
    dp = @ymd_date.exec(@ctx)
    dp.year.should.equal 2014
    dp.month.should.equal 12
    dp.day.should.equal 31
    should.not.exist dp.hour
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond
  it "should be able to get Date Predecessor for year,month,day,hour", ->
    dp = @ymdh_date.exec(@ctx)
    dp.year.should.equal 2014
    dp.month.should.equal 12
    dp.day.should.equal 31
    dp.hour.should.equal 23
    should.not.exist dp.minute
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Predecessor for year,month,day,hour,minute", ->
    dp = @ymdhm_date.exec(@ctx)
    dp.year.should.equal 2014
    dp.month.should.equal 12
    dp.day.should.equal 31
    dp.hour.should.equal 23
    dp.minute.should.equal 59
    should.not.exist dp.second
    should.not.exist  dp.millisecond

  it "should be able to get Date Predecessor for year,month,day,hour,minute,seconds", ->
    dp = @ymdhms_date.exec(@ctx)
    dp.year.should.equal 2014
    dp.month.should.equal 12
    dp.day.should.equal 31
    dp.hour.should.equal 23
    dp.minute.should.equal 59
    dp.second.should.equal 59
    should.not.exist  dp.millisecond

  it "should be able to get Date Predecessor for year,month,day,hour,minute,seconds,milliseconds", ->
    dp = @ymdhmsm_date.exec(@ctx)
    dp.year.should.equal 2014
    dp.month.should.equal 12
    dp.day.should.equal 31
    dp.hour.should.equal 23
    dp.minute.should.equal 59
    dp.millisecond.should.equal 999

  it "should return null when attempting to get the Predecessor of the minimum allowed date", ->
    should(@min_date.exec(@ctx)).be.null()

describe 'Quantity', ->
  @beforeEach ->
    setup @, data

  it "should be able to perform Quantity Addition", ->
    validateQuantity @add_q_q.exec(@ctx), 20 , 'days'
    adq = @add_d_q.exec(@ctx)
    adq.isDateTime.should.be.true()
    adq.year.should.equal 2000
    adq.month.should.equal 1
    adq.day.should.equal 11
    validateQuantity @add_q_q_diff.exec(@ctx), (10 + (10/(24*60))), 'days'



  it "should be able to perform Quantity Subtraction", ->
    validateQuantity @sub_q_q.exec(@ctx), 0, 'days'
    sdq = @sub_d_q.exec(@ctx)
    sdq.isDateTime.should.be.true()
    sdq.year.should.equal 1999
    sdq.month.should.equal 12
    sdq.day.should.equal 22
    validateQuantity @sub_q_q_diff.exec(@ctx), (10 - (10/(24*60))), 'days'

  it "should be able to perform Quantity Division", ->
    validateQuantity @div_q_d.exec(@ctx), 5, 'days'
    validateQuantity @div_q_q.exec(@ctx), 1 , '1'

  it "should be able to perform Quantity Multiplication", ->
    # decilmal to quantity multiplication results in decimal value only
    validateQuantity @mul_d_q.exec(@ctx), 20, 'days'
    validateQuantity @mul_q_d.exec(@ctx), 20, 'days'
    validateQuantity @mul_q_q.exec(@ctx), 20, "m2"
    validateQuantity @mul_q_q_diff.exec(@ctx), 20, "m/d"

  it "should be able to perform Quantity Absolution", ->
    q = @abs.exec(@ctx)
    q.value.should.equal 10
    q.unit.should.equal 'days'

  it "should be able to perform Quantity Negation", ->
    q = @neg.exec(@ctx)
    q.value.should.equal -10
    q.unit.should.equal 'days'

  it "should be able to perform ucum multiplication in cql", ->
    @multiplyUcum.exec(@ctx).should.be.true()

  it "should be able to perform ucum division in cql", ->
    @divideUcum.exec(@ctx).should.be.true()

  it "should be able to perform ucum addition in cql", ->
    @addUcum.exec(@ctx).should.be.true()

  it "should be able to perform ucum subtraction in cql", ->
    @subtractUcum.exec(@ctx).should.be.true()

  it "should be able to perform ucum multiplication", ->
    tests = [
      ["10 'm'", "20 'm'", "200 'm2'"],
      ["25 'km'", "5 'm'", "125000 'm2'"],
      ["10 'ml'", "20 'dl'", "0.02 'l2'"],
    ]
    doQuantityMathTests(tests, "*")

  it "should be able to perform ucum division", ->
    tests = [
      ["10 'cm2'", "5 'cm'", "2 'cm'"],
      ["10 'm2'", "5 'm'", "2 'm'"],
      ["25 'km'", "5 'm'", "5000 '1'"],
      ["25 'mg'", "5 'mg'", "5 '1'"],
      ["25 'mg'", "5 '1'", "5 'mg'"],
      ["100 'm'", "2 'h'", "0.01388889 'm/s'"],
      ["100 'mg'", "2 '[lb_av]'", "50 'mg/[lb_av]'"]
    ]
    # Note that these tests check for equality but not that the result
    # has any particular unit.  12 cm^2 / 4 cm = 0.03 m rather than 3 cm.
    doQuantityMathTests(tests, "/")
  it "should be able to perform ucum addition", ->
    tests = [
      ["10 'm'", "20 'm'", "30 'm'"],
      ["25 'km'", "5 'm'", "25005 'm'"],
      ["10 'ml'", "20 'dl'", "2.01 'l'"],
    ]
    doQuantityMathTests(tests, "+")

  it "should be able to perform ucum subtraction", ->
    tests = [
      ["10 'd'", "20 'd'", "-10 'd'"],
      ["25 'km'", "5 'm'", "24995 'm'"],
      ["10 'ml'", "20 'dl'", "-1.99 'l'"],
    ]
    doQuantityMathTests(tests, "-")

describe 'OutOfBounds', ->
  @beforeEach ->
    setup @, data

  describe 'Integer', ->
    it 'should return null for Add overflow', ->
      should(@integerAddOverflow.exec(@ctx)).be.null()

    it 'should return null for Add underflow', ->
      should(@integerAddUnderflow.exec(@ctx)).be.null()

    it 'should return null for Subtract overflow', ->
      should(@integerSubtractOverflow.exec(@ctx)).be.null()

    it 'should return null for Subtract underflow', ->
      should(@integerSubtractUnderflow.exec(@ctx)).be.null()

    it 'should return null for Multiply overflow', ->
      should(@integerMultiplyOverflow.exec(@ctx)).be.null()

    it 'should return null for Multiply underflow', ->
      should(@integerMultiplyUnderflow.exec(@ctx)).be.null()

    it 'should return null for Divide overflow', ->
      should(@integerDivideOverflow.exec(@ctx)).be.null()

    it 'should return null for Divide underflow', ->
      should(@integerDivideUnderflow.exec(@ctx)).be.null()

    it 'should return null for Divide By Zero', ->
      should(@integerDivideByZero.exec(@ctx)).be.null()

    it 'should return null for Power overflow', ->
      should(@integerPowerOverflow.exec(@ctx)).be.null()

    it 'should return null for Power underflow', ->
      should(@integerPowerUnderflow.exec(@ctx)).be.null()

    it 'should return null for successor overflow', ->
      should(@integerSuccessorOverflow.exec(@ctx)).be.null()

    it 'should return null for predecessor underflow', ->
      should(@integerPredecessorUnderflow.exec(@ctx)).be.null()

  describe 'Decimal', ->
    it 'should return null for Add overflow', ->
      should(@decimalAddOverflow.exec(@ctx)).be.null()

    it 'should return null for Add underflow', ->
      should(@decimalAddUnderflow.exec(@ctx)).be.null()

    it 'should return null for Subtract overflow', ->
      should(@decimalSubtractOverflow.exec(@ctx)).be.null()

    it 'should return null for Subtract underflow', ->
      should(@decimalSubtractUnderflow.exec(@ctx)).be.null()

    it 'should return null for Multiply overflow', ->
      should(@decimalMultiplyOverflow.exec(@ctx)).be.null()

    it 'should return null for Multiply underflow', ->
      should(@decimalMultiplyUnderflow.exec(@ctx)).be.null()

    it 'should return null for Divide overflow', ->
      should(@decimalDivideOverflow.exec(@ctx)).be.null()

    it 'should return null for Divide underflow', ->
      should(@decimalDivideUnderflow.exec(@ctx)).be.null()

    it 'should return null for Divide By Zero', ->
      should(@decimalDivideByZero.exec(@ctx)).be.null()

    it 'should return null for Power overflow', ->
      should(@decimalPowerOverflow.exec(@ctx)).be.null()

    it 'should return null for Power underflow', ->
      should(@decimalPowerUnderflow.exec(@ctx)).be.null()

    it 'should return null for successor overflow', ->
      should(@decimalSuccessorOverflow.exec(@ctx)).be.null()

    it 'should return null for predecessor underflow', ->
      should(@decimalPredecessorUnderflow.exec(@ctx)).be.null()

  describe 'Quantity', ->
    it 'should return null for Add overflow', ->
      should(@quantityAddOverflow.exec(@ctx)).be.null()

    it 'should return null for Add underflow', ->
      should(@quantityAddUnderflow.exec(@ctx)).be.null()

    it 'should return null for Subtract overflow', ->
      should(@quantitySubtractOverflow.exec(@ctx)).be.null()

    it 'should return null for Subtract underflow', ->
      should(@quantitySubtractUnderflow.exec(@ctx)).be.null()

    it 'should return null for Multiply overflow', ->
      should(@quantityMultiplyOverflow.exec(@ctx)).be.null()

    it 'should return null for Multiply underflow', ->
      should(@quantityMultiplyUnderflow.exec(@ctx)).be.null()

    it 'should return null for Divide overflow', ->
      should(@quantityDivideOverflow.exec(@ctx)).be.null()

    it 'should return null for Divide underflow', ->
      should(@quantityDivideUnderflow.exec(@ctx)).be.null()

    it 'should return null for Divide By Zero', ->
      should(@quantityDivideByZero.exec(@ctx)).be.null()

    it 'should return null for Power overflow', ->
      should(@quantityPowerOverflow.exec(@ctx)).be.null()

    it 'should return null for Power underflow', ->
      should(@quantityPowerUnderflow.exec(@ctx)).be.null()

    it 'should return null for successor overflow', ->
      should(@quantitySuccessorOverflow.exec(@ctx)).be.null()

    it 'should return null for predecessor underflow', ->
      should(@quantityPredecessorUnderflow.exec(@ctx)).be.null()

  describe 'DateTime', ->
    it 'should return null for Add overflow', ->
      should(@dateTimeAddOverflow.exec(@ctx)).be.null()

    it 'should return null for Add underflow', ->
      should(@dateTimeAddUnderflow.exec(@ctx)).be.null()

    it 'should return null for Subtract overflow', ->
      should(@dateTimeSubtractOverflow.exec(@ctx)).be.null()

    it 'should return null for Subtract underflow', ->
      should(@dateTimeSubtractUnderflow.exec(@ctx)).be.null()

    it 'should return null for successor overflow', ->
      should(@dateTimeSuccessorOverflow.exec(@ctx)).be.null()

    it 'should return null for predecessor underflow', ->
      should(@dateTimePredecessorUnderflow.exec(@ctx)).be.null()

  describe 'Date', ->
    it 'should return null for Add overflow', ->
      should(@dateAddOverflow.exec(@ctx)).be.null()

    it 'should return null for Add underflow', ->
      should(@dateAddUnderflow.exec(@ctx)).be.null()

    it 'should return null for Subtract overflow', ->
      should(@dateSubtractOverflow.exec(@ctx)).be.null()

    it 'should return null for Subtract underflow', ->
      should(@dateSubtractUnderflow.exec(@ctx)).be.null()

    it 'should return null for successor overflow', ->
      should(@dateSuccessorOverflow.exec(@ctx)).be.null()

    it 'should return null for predecessor underflow', ->
      should(@datePredecessorUnderflow.exec(@ctx)).be.null()

  describe 'Time', ->
    it 'should return null for Add overflow', ->
      should(@timeAddOverflow.exec(@ctx)).be.null()

    it 'should return null for Add underflow', ->
      should(@timeAddUnderflow.exec(@ctx)).be.null()

    it 'should return null for Subtract overflow', ->
      should(@timeSubtractOverflow.exec(@ctx)).be.null()

    it 'should return null for Subtract underflow', ->
      should(@timeSubtractUnderflow.exec(@ctx)).be.null()

    it 'should return null for successor overflow', ->
      should(@timeSuccessorOverflow.exec(@ctx)).be.null()

    it 'should return null for predecessor underflow', ->
      should(@timePredecessorUnderflow.exec(@ctx)).be.null()

  it 'Exp should return null for overflow', ->
    should(@expOverflow.exec(@ctx)).be.null()