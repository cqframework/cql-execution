should = require 'should'
setup = require '../../setup'
data = require './data'
{isNull} = require '../../../lib/util/util'
{DateTime} = require '../../../lib/datatypes/datetime'

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

  it 'should convert Time string with Z', ->
    expectedTime = new DateTime(0, 1, 1, 14, 30, 0, 0, 0)
    @zTime.exec(@ctx).equals(expectedTime).should.be.true()

  it 'should convert Time string with timezone offset', ->
    expectedTime = new DateTime(0, 1, 1, 14, 30, 0, 0, -7)
    @timezoneTime.exec(@ctx).equals(expectedTime).should.be.true()

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
    date.isDate.should.be.true
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2
    should.not.exist(date[field]) for field in [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]

  it "should convert @2015-01-02T12:01:02.321-06:00 to DateTime", ->
    dateTime = @dateTimeToDateTime.exec(@ctx)
    dateTime.isDateTime.should.be.true
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

  it "should convert @2015-01-01 to DateTime", ->
    dateTime = @dateDateTime.exec(@ctx)
    dateTime.year.should.equal 2015
    dateTime.month.should.equal 1
    dateTime.day.should.equal 1
    dateTime.timezoneOffset.should.equal @ctx.getTimezoneOffset()
    dateTime.isDateTime.should.equal.true

  it "should convert @2015-01-01 to Date", ->
    date = @dateDate.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 1
    date.isDate.should.equal.true

  it "should convert @2015-01-01 to '2015-01-01'", ->
    @dateStr.exec(@ctx).should.equal "2015-01-01"

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
    should(@nullDecimal.exec(@ctx)).not.exist

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
    should(@nullArg.exec(@ctx)).not.exist

describe 'ToTime', ->
  @beforeEach ->
    setup @, data

  it "should return null if arg is null", ->
    should(@nullArgTime.exec(@ctx)).not.exist

  it "should be null for incorrect format", ->
    should(@incorrectFormatTime.exec(@ctx)).be.null()

  it "should be null for invalid time-of-day", ->
    should(@invalidTime.exec(@ctx)).be.null()

  it "should work with for Thh", ->
    expectedDateTime = new DateTime(0,1,1,2)
    @timeH.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for Thh:mm", ->
    expectedDateTime = new DateTime(0,1,1,2,4)
    @timeHM.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for Thh:mm:ss", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59)
    @timeHMS.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for Thh:mm:ss.fff", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59,123)
    @timeHMSMs.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for Thh:mm:ss.fffZ", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59,123,0)
    @timeHMSMsZ.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for Thh:mm:ss.fff+hh:mm", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59,123,1)
    @timeHMSMsTimezone.exec(@ctx).equals(expectedDateTime).should.be.true()

  it "should work with for Thh:mm:ss.fff+hh", ->
    expectedDateTime = new DateTime(0,1,1,2,4,59,123,1)
    @timeHMSMsFullTimezone.exec(@ctx).equals(expectedDateTime).should.be.true()

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
    should(@upperCaseTrue.exec(@ctx)).be.true

  it "should return true for FALSE", ->
    should(@upperCaseFalse.exec(@ctx)).be.false

  it "should return true for true", ->
    should(@lowerCaseT.exec(@ctx)).be.true

  it "should return true for false", ->
    should(@lowerCaseF.exec(@ctx)).be.false

  it "should return true for T", ->
    should(@upperCaseT.exec(@ctx)).be.true

  it "should return false for F", ->
    should(@upperCaseF.exec(@ctx)).be.false
