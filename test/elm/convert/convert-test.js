should = require 'should'
setup = require '../../setup'
data = require './data'
{isNull} = require '../../../lib/util/util'
{DateTime} = require '../../../lib/datatypes/datetime'
{ Quantity } = require '../../../lib/datatypes/quantity'


describe 'FromString', ->
  @beforeEach ->
    setup @, data

  it "should convert 'str' to 'str'", ->
    @stringStr.exec(@ctx).should.equal "str"

  it "should convert null to null", ->
    isNull(@stringNull.exec(@ctx)).should.equal true

  it "should convert 'true' to true", ->
    @boolTrue.exec(@ctx).should.equal true

  it "should convert 'false' to false", ->
    @boolFalse.exec(@ctx).should.equal false

  it "should convert '10.2' to Decimal", ->
    @decimalValid.exec(@ctx).should.equal 10.2

  it "should be null trying to convert 'abc' to Decimal", ->
    should(@decimalInvalid.exec(@ctx)).be.null()

  it "should convert '10' to Integer", ->
    @integerValid.exec(@ctx).should.equal 10

  it "should convert '10.2' to Integer 10", ->
    @integerDropDecimal.exec(@ctx).should.equal 10

  it "should be null trying to convert 'abc' to Integer", ->
    should(@integerInvalid.exec(@ctx)).be.null()

  it "should convert \"10 'A'\" to Quantity", ->
    quantity = @quantityStr.exec(@ctx)
    quantity.value.should.equal 10
    quantity.unit.should.equal "A"

  it "should convert \"+10 'A'\" to Quantity", ->
    quantity = @posQuantityStr.exec(@ctx)
    quantity.value.should.equal 10
    quantity.unit.should.equal "A"

  it "should convert \"-10 'A'\" to Quantity", ->
    quantity = @negQuantityStr.exec(@ctx)
    quantity.value.should.equal -10
    quantity.unit.should.equal "A"

  it "should convert \"10.0'mA'\" to Quantity", ->
    quantity = @quantityStrDecimal.exec(@ctx)
    quantity.value.should.equal 10.0
    quantity.unit.should.equal "mA"

  it "should convert '2015-01-02' to DateTime", ->
    date = @dateTimeStr.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2
    date.isDateTime.should.equal.true

  it "should convert '2015-01-02' to Date", ->
    date = @dateStr.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2
    date.isDate.should.equal.true

  it 'should be null if cannot convert', ->
    should(@nullConvert.exec(@ctx)).be.null()

  it 'should convert DateTime string with Z', ->
    expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, 0)
    @zDateTime.exec(@ctx).equals(expectedDateTime).should.be.true()

  it 'should convert DateTime string with timezone offset', ->
    expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, -7)
    @timezoneDateTime.exec(@ctx).equals(expectedDateTime).should.be.true()

describe 'FromInteger', ->
  @beforeEach ->
    setup @, data

  it "should convert 10 to '10'", ->
    @string10.exec(@ctx).should.equal "10"

  it "should convert 10 to 10.0", ->
    @decimal10.exec(@ctx).should.equal 10.0

  it "should convert null to null", ->
    isNull(@intNull.exec(@ctx)).should.equal true

  it "should convert 10 to 10", ->
    @intInt.exec(@ctx).should.equal 10

describe 'FromQuantity', ->
  @beforeEach ->
    setup @, data

  it "should convert \"10 'A'\" to \"10 'A'\"", ->
    @quantityStr.exec(@ctx).should.equal "10 'A'"

  it "should convert \"+10 'A'\" to \"10 'A'\"", ->
    @posQuantityStr.exec(@ctx).should.equal "10 'A'"

  it "should convert \"-10 'A'\" to \"10 'A'\"", ->
    @negQuantityStr.exec(@ctx).should.equal "-10 'A'"

  it "should convert \"10 'A'\" to \"10 'A'\"", ->
    quantity = @quantityQuantity.exec(@ctx)
    quantity.value.should.equal 10
    quantity.unit.should.equal 'A'

describe 'FromBoolean', ->
  @beforeEach ->
    setup @, data

  it "should convert true to 'true'", ->
    @booleanTrueStr.exec(@ctx).should.equal "true"

  it "should convert false to 'false'", ->
    @booleanFalseStr.exec(@ctx).should.equal "false"

  it "should convert true to true", ->
    @booleanTrueBool.exec(@ctx).should.equal true

  it "should convert false to false", ->
    @booleanFalseBool.exec(@ctx).should.equal false

describe 'FromDateTime', ->
  @beforeEach ->
    setup @, data

  it "should convert @2015-01-02T12:01:02.321-06:00 to '2015-01-02T12:01:02.321-06:00'", ->
    @dateTimeToStr.exec(@ctx).should.equal "2015-01-02T12:01:02.321-06:00"

  it "should convert @2015-01-02T12:01:02.321-06:00 to Date", ->
    date = @dateTimeToDate.exec(@ctx)
    date.isDate.should.be.true()
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2
    should.not.exist(date[field]) for field in [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]

  it "should convert @2015-01-02T12:01:02.321-06:00 to DateTime", ->
    dateTime = @dateTimeToDateTime.exec(@ctx)
    dateTime.isDateTime.should.be.true()
    dateTime.year.should.equal 2015
    dateTime.month.should.equal 1
    dateTime.day.should.equal 2
    dateTime.hour.should.equal 12
    dateTime.minute.should.equal 1
    dateTime.second.should.equal 2
    dateTime.millisecond.should.equal 321
    dateTime.timezoneOffset.should.equal -6

describe 'FromDate', ->
  @beforeEach ->
    setup @, data

  it "should convert @2015-01-01 to DateTime with 0 for time components", ->
    dateTime = @dateYMDToDateTime.exec(@ctx)
    dateTime.year.should.equal 2015
    dateTime.month.should.equal 1
    dateTime.day.should.equal 1
    dateTime.hour.should.equal 0
    dateTime.minute.should.equal 0
    dateTime.second.should.equal 0
    dateTime.millisecond.should.equal 0
    dateTime.timezoneOffset.should.equal @ctx.getTimezoneOffset()
    dateTime.isDateTime.should.equal.true

  it "should convert @2015-01 to DateTime with null for day and time components", ->
    dateTime = @dateYMToDateTime.exec(@ctx)
    dateTime.year.should.equal 2015
    dateTime.month.should.equal 1
    should.not.exist dateTime.day
    should.not.exist(dateTime[field]) for field in [ 'hour', 'minute', 'second', 'millisecond' ]
    dateTime.timezoneOffset.should.equal @ctx.getTimezoneOffset()
    dateTime.isDateTime.should.equal.true

    it "should convert @2015-01 to DateTime with null for day, month, and time components", ->
    dateTime = @dateYToDateTime.exec(@ctx)
    dateTime.year.should.equal 2015
    should.not.exist dateTime.month
    should.not.exist dateTime.day
    should.not.exist(dateTime[field]) for field in [ 'hour', 'minute', 'second', 'millisecond' ]
    dateTime.timezoneOffset.should.equal @ctx.getTimezoneOffset()
    dateTime.isDateTime.should.equal.true

  it "should convert @2015-01-01 to Date", ->
    date = @dateToDate.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 1
    should.not.exist(date[field]) for field in [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]
    date.isDate.should.equal.true

  it "should convert @2015-01-01 to '2015-01-01'", ->
    @dateToStr.exec(@ctx).should.equal "2015-01-01"

describe 'FromTime', ->
  @beforeEach ->
    setup @, data

  it.skip "should convert @T11:57 to '11:57'", ->
    @timeStr.exec(@ctx).should.equal "11:57"

  it.skip "should convert @T11:57 to @11:57", ->
    time = @timeTime.exec(@ctx)
    time.hour.should.equal 11
    time.minute.should.equal 57

describe 'FromCode', ->
  @beforeEach ->
    setup @, data

  it.skip "should convert hepB to a concept", ->
    concept = @codeConcept.exec(@ctx)

  it.skip "should convert hepB to a code", ->
    code = @codeCode.exec(@ctx)

describe 'ToDecimal', ->
  @beforeEach ->
    setup @, data

  it "should convert '0.0' to 0.0", ->
    @noSign.exec(@ctx).should.equal(0.0)

  it "should convert '+1.1' to 1.1", ->
    @positiveSign.exec(@ctx).should.equal(1.1)

  it "should convert '-1.1' to -1.1", ->
    @negativeSign .exec(@ctx).should.equal(-1.1)

  it "should truncate decimal to 8 digits after decimal point", ->
    @tooPrecise.exec(@ctx).should.equal(0.44444444)

  it "should be null for decimal that is above max decimal value", ->
    should(@tooLargeDec.exec(@ctx)).be.null()

  it "should return null for decimal that is below min decimal value", ->
    should(@tooSmallDec.exec(@ctx)).be.null()

  it "should convert null to null", ->
    should.not.exist(@nullDecimal.exec(@ctx))

  it.skip "should be null if wrong format (+.1)", ->
    # TODO: parseFloat is more forgiving than the CQL spec, so this does get converted
    should(@wrongFormat.exec(@ctx)).be.null()

describe 'ToInteger', ->
  @beforeEach ->
    setup @, data

  it "should return positive integer without polarity sign", ->
    @noSign.exec(@ctx).should.equal(12345)

  it "should return positive integer with polarity sign", ->
    @positiveSign.exec(@ctx).should.equal(12345)

  it "should return negative integer", ->
    @negativeSign.exec(@ctx).should.equal(-12345)

  it "should return null if integer larger than max", ->
    should(@tooLargeInt.exec(@ctx)).be.null()

  it "should return null if integer smaller than min", ->
    should(@tooSmallInt.exec(@ctx)).be.null()

describe 'ToQuantity', ->
  @beforeEach ->
    setup @, data

  it "should be null if string is not formatted properly", ->
    should(@wrongFormatQuantity.exec(@ctx)).be.null()

  it "should be null if invalid positive Quantity", ->
    should(@tooLargeQuantity.exec(@ctx)).be.null()

  it "should be null if invalid negative Quantity", ->
    should(@tooSmallQuantity.exec(@ctx)).be.null()

  it "should return null for null argument", ->
    should.not.exist(@nullArg.exec(@ctx))

describe 'ToRatio', ->
  @beforeEach ->
    setup @, data

  it "should be null if string is null", ->
    should(@nullArg.exec(@ctx)).be.null()

  it "should be null if string separator is invalid", ->
    should(@invalidSeparator.exec(@ctx)).be.null()

  it "should be null if numerator is invalid", ->
    should(@invalidNumerator.exec(@ctx)).be.null()

  it "should be null if denominator is invalid", ->
    should(@invalidDenominator.exec(@ctx)).be.null()

  it "should be valid given quantities with custom UCUM units", ->
    ratio = @isValidWithCustomUCUM.exec(@ctx)
    ratio.numerator.value.should.eql 1.0
    ratio.numerator.unit.should.eql '{foo:bar }'
    ratio.denominator.value.should.eql 2.0
    ratio.denominator.unit.should.eql 'mg'

  it "should create valid ratio", ->
    ratio = @isValid.exec(@ctx)
    ratio.numerator.value.should.eql 1.0
    ratio.numerator.unit.should.eql 'mg'
    ratio.denominator.value.should.eql 2.0
    ratio.denominator.unit.should.eql 'mg'

describe 'ToTime', ->
  @beforeEach ->
    setup @, data

  it "should return null if arg is null", ->
    should.not.exist(@nullArgTime.exec(@ctx))

  it "should be null for incorrect format", ->
    should(@incorrectFormatTime.exec(@ctx)).be.null()

  it "should be null for invalid time-of-day", ->
    should(@invalidTime.exec(@ctx)).be.null()

  it "should work with for hh", ->
    # NOTE: We need to pass in null timezoneOffset because DateTime assumes
    # execution context timezoneOffset while time does not have a
    # timezoneOffset
    expectedDateTime = new DateTime(0,1,1,2,null,null,null,null)
    @timeH.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for hh:mm", ->
    expectedDateTime = new DateTime(0,1,1,2,4,null,null,null)
    @timeHM.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for hh:mm:ss", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59,null,null)
    @timeHMS.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for hh:mm:ss.fff", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59,123, null)
    @timeHMSMs.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should be null for hour over 24", ->
    should(@hourTooHigh.exec(@ctx)).be.null()

  it "should be null for minute over 59", ->
    should(@minuteTooHigh.exec(@ctx)).be.null()

  it "should be null for second over 59", ->
    should(@secondTooHigh.exec(@ctx)).be.null()

describe 'ToBoolean', ->
  @beforeEach ->
    setup @, data

  it "should return true for TRUE", ->
    @upperCaseTrue.exec(@ctx).should.equal true

  it "should return true for FALSE", ->
    @upperCaseFalse.exec(@ctx).should.equal false

  it "should return true for true", ->
    @lowerCaseT.exec(@ctx).should.equal true

  it "should return true for false", ->
    @lowerCaseF.exec(@ctx).should.equal false

  it "should return true for T", ->
    @upperCaseT.exec(@ctx).should.equal true

  it "should return false for F", ->
    @upperCaseF.exec(@ctx).should.equal false

describe 'ToDate', ->
  @beforeEach ->
    setup @, data

  it "should convert String 2015-01-02 to Date", ->
    date = @toDateString.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2
    should.not.exist(date[field]) for field in [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]
    date.isDate.should.equal.true

  it "should convert Datetime to Date", ->
    date = @toDateDateTime.exec(@ctx)
    date.year.should.equal 2000
    date.month.should.equal 3
    date.day.should.equal 15
    should.not.exist(date[field]) for field in [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]
    date.isDate.should.equal.true

  it "should return null for null input", ->
    should(@toDateNull.exec(@ctx)).be.null()

  it "should return 2014-01-01 and ignore time", ->
    date = @toDateDateTimeString.exec(@ctx)
    date.year.should.equal 2014
    date.month.should.equal 1
    date.day.should.equal 1
    should.not.exist(date[field]) for field in [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]

describe 'ConvertsToBoolean', ->
  @beforeEach ->
    setup @, data

  it "should return true for y", ->
    @isTrueWithTrueValue.exec(@ctx).should.equal true

  it "should return true for 0", ->
    @isTrueWithFalseValue.exec(@ctx).should.equal true

  it "should return false for invalid argument", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToDate', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid date", ->
    @isTrue.exec(@ctx).should.equal true

  it "should return false for invalid date", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToDateTime', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid datetime", ->
    @isTrue.exec(@ctx).should.equal true

  it "should return true for valid date", ->
    @isTrueWithDateValue.exec(@ctx).should.equal true

  it "should return false for invalid datetime", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToDecimal', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid decimal", ->
    @isTrue.exec(@ctx).should.equal true

  it "should return false for invalid decimal", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToInteger', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid integer", ->
    @isTrue.exec(@ctx).should.equal true

  it "should return false for invalid integer", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToQuantity', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid decimal", ->
    @isTrueWithDecimal.exec(@ctx).should.equal true

  it "should return true for valid integer", ->
    @isTrueWithInteger.exec(@ctx).should.equal true

  it "should return true for valid string", ->
    @isTrueWithString.exec(@ctx).should.equal true

  it "should return false for invalid ucum unit", ->
    @isFalseWithInvalidUcum.exec(@ctx).should.equal false

  it "should return false for invalid string", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToRatio', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid ratio string", ->
    @isTrue.exec(@ctx).should.equal true

  it "should return false for invalid ratio string", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return false for invalid ucum units", ->
    @isFalseWithInvalidUcum.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToString', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid Boolean", ->
    @isTrue.exec(@ctx).should.equal true

  it.skip "should return false for invalid type", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertsToTime', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid string", ->
    @isTrue.exec(@ctx).should.equal true

  it "should return false for invalid string", ->
    @isFalse.exec(@ctx).should.equal false

  it "should return null for null input", ->
    should(@isNull.exec(@ctx)).be.null()

describe 'ConvertQuantity', ->
  @beforeEach ->
    setup @, data

  it "should return converted Quantity", ->
    @convertQuantityGood.exec(@ctx).should.eql new Quantity(.005, 'g')

  it "should return converted Quantity using new syntx", ->
    @convertSyntax.exec(@ctx).should.eql new Quantity(.005, 'g')

  it "should return converted Quantity with Kg", ->
    @convertQuantityToKg.exec(@ctx).should.eql new Quantity(5, 'kg')

  it "should return converted Quantity with weeks", ->
    @convertQuantityToWeeks.exec(@ctx).should.eql new Quantity(4, 'weeks')

  it "should return null for an invalid UCUM conversion", ->
    should(@nullConvertQuantity.exec(@ctx)).be.null()

describe 'CanConvertQuantity', ->
  @beforeEach ->
    setup @, data

  it "should return true for valid conversion", ->
    @canConvertQuantityTrue.exec(@ctx).should.equal true

  it "should return false for valid conversion", ->
    @canConvertQuantityFalse.exec(@ctx).should.equal false

  it "should return null for first argument null", ->
    should(@canConvertQuantityNullFirstNull.exec(@ctx)).be.null()

  it "should return null for second argument being null", ->
    should(@canConvertQuantityNullSecondNUll.exec(@ctx)).be.null()