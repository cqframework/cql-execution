should = require 'should'
setup = require '../../setup'
data = require './data'
{isNull} = require '../../../lib/util/util'

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

  it "should throw error trying to convert 'abc' to Decimal", ->
    should(() => @decimalInvalid.exec(@ctx)).throw("Unable to parse Decimal")

  it "should convert '10' to Integer", ->
    @integerValid.exec(@ctx).should.equal 10

  it "should convert '10.2' to Integer 10", ->
    @integerDropDecimal.exec(@ctx).should.equal 10

  it "should throw error trying to convert 'abc' to Integer", ->
    should(() => @integerInvalid.exec(@ctx)).throw("Unable to parse Integer")

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
    date = @dateStr.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2

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

  it "should convert @2015-01-02 to '2015-01-02'", ->
    @dateStr.exec(@ctx).should.equal "2015-01-02"

  it "should convert @2015-01-02 to @2015-01-02", ->
    date = @dateDate.exec(@ctx)
    date.year.should.equal 2015
    date.month.should.equal 1
    date.day.should.equal 2

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

  it "should not return decimal that is above max decimal value", ->
    should(() => @tooLargeDec.exec(@ctx)).throw("Maximum Decimal value exceeded")

  it "should not return decimal that is below min decimal value", ->
    should(() => @tooSmallDec.exec(@ctx)).throw("Minimum Decimal value exceeded")

  it "should convert null to null", ->
    should(@nullDecimal.exec(@ctx)).not.exist

  it.skip "should throw runtime error if wrong format (+.1)", ->
    # TODO: parseFloat is more forgiving than the CQL spec, so this does get converted
    should(() => @wrongFormat.exec(@ctx)).throw("FOO")

describe 'ToInteger', ->
  @beforeEach ->
    setup @, data

  it "should return positive integer without polarity sign", ->
    @noSign.exec(@ctx).should.equal(12345)

  it "should return positive integer with polarity sign", ->
    @positiveSign.exec(@ctx).should.equal(12345)

  it "should return negative integer", ->
    @negativeSign.exec(@ctx).should.equal(-12345)

  it "should not return integer larger than max", ->
    should(() => @tooLargeInt.exec(@ctx)).throw("Maximum Integer value exceeded")

  it "should not return integer smaller than min", ->
    should(() => @tooSmallInt.exec(@ctx)).throw("Minimum Integer value exceeded")

describe 'ToQuantity', ->
  @beforeEach ->
    setup @, data

  it "should throw runtime error if string is not formatted properly", ->
    should(() => @wrongFormatQuantity.exec(@ctx)).throw("Unable to parse Quantity")

  it "should throw runtime error if invalid positive Quantity", ->
    should(() => @tooLargeQuantity.exec(@ctx)).throw("Maximum Decimal value exceeded")

  it "should throw runtime error if invalid negative Quantity", ->
    should(() => @tooSmallQuantity.exec(@ctx)).throw("Minimum Decimal value exceeded")

  it "should return null for null argument", ->
    should(@nullArg.exec(@ctx)).not.exist

describe 'ToTime', ->
  @beforeEach ->
    setup @, data

  it "should return null if arg is null", ->
    should(@nullArgTime.exec(@ctx)).not.exist

  it "should throw runtime error for incorrect format", ->
    should(() => @incorrectFormatTime.exec(@ctx)).throw("Invalid DateTime String: 10:00PM")

  it "should throw runtime error for invalid time-of-day", ->
    should(() => @invalidTime.exec(@ctx)).throw("Invalid DateTime String: 25:99.000+00.00")
