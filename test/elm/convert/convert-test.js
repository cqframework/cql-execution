/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const {isNull} = require('../../../lib/util/util');
const {DateTime} = require('../../../lib/datatypes/datetime');
const { Quantity } = require('../../../lib/datatypes/quantity');


describe('FromString', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert 'str' to 'str'", function() {
    return this.stringStr.exec(this.ctx).should.equal("str");
  });

  it("should convert null to null", function() {
    return isNull(this.stringNull.exec(this.ctx)).should.equal(true);
  });

  it("should convert 'true' to true", function() {
    return this.boolTrue.exec(this.ctx).should.equal(true);
  });

  it("should convert 'false' to false", function() {
    return this.boolFalse.exec(this.ctx).should.equal(false);
  });

  it("should convert '10.2' to Decimal", function() {
    return this.decimalValid.exec(this.ctx).should.equal(10.2);
  });

  it("should be null trying to convert 'abc' to Decimal", function() {
    return should(this.decimalInvalid.exec(this.ctx)).be.null();
  });

  it("should convert '10' to Integer", function() {
    return this.integerValid.exec(this.ctx).should.equal(10);
  });

  it("should convert '10.2' to Integer 10", function() {
    return this.integerDropDecimal.exec(this.ctx).should.equal(10);
  });

  it("should be null trying to convert 'abc' to Integer", function() {
    return should(this.integerInvalid.exec(this.ctx)).be.null();
  });

  it("should convert \"10 'A'\" to Quantity", function() {
    const quantity = this.quantityStr.exec(this.ctx);
    quantity.value.should.equal(10);
    return quantity.unit.should.equal("A");
  });

  it("should convert \"+10 'A'\" to Quantity", function() {
    const quantity = this.posQuantityStr.exec(this.ctx);
    quantity.value.should.equal(10);
    return quantity.unit.should.equal("A");
  });

  it("should convert \"-10 'A'\" to Quantity", function() {
    const quantity = this.negQuantityStr.exec(this.ctx);
    quantity.value.should.equal(-10);
    return quantity.unit.should.equal("A");
  });

  it("should convert \"10.0'mA'\" to Quantity", function() {
    const quantity = this.quantityStrDecimal.exec(this.ctx);
    quantity.value.should.equal(10.0);
    return quantity.unit.should.equal("mA");
  });

  it("should convert '2015-01-02' to DateTime", function() {
    const date = this.dateTimeStr.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    return date.isDateTime.should.equal.true;
  });

  it("should convert '2015-01-02' to Date", function() {
    const date = this.dateStr.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    return date.isDate.should.equal.true;
  });

  it('should be null if cannot convert', function() {
    return should(this.nullConvert.exec(this.ctx)).be.null();
  });

  it('should convert DateTime string with Z', function() {
    const expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, 0);
    return this.zDateTime.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  return it('should convert DateTime string with timezone offset', function() {
    const expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, -7);
    return this.timezoneDateTime.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });
});

describe('FromInteger', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert 10 to '10'", function() {
    return this.string10.exec(this.ctx).should.equal("10");
  });

  it("should convert 10 to 10.0", function() {
    return this.decimal10.exec(this.ctx).should.equal(10.0);
  });

  it("should convert null to null", function() {
    return isNull(this.intNull.exec(this.ctx)).should.equal(true);
  });

  return it("should convert 10 to 10", function() {
    return this.intInt.exec(this.ctx).should.equal(10);
  });
});

describe('FromQuantity', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert \"10 'A'\" to \"10 'A'\"", function() {
    return this.quantityStr.exec(this.ctx).should.equal("10 'A'");
  });

  it("should convert \"+10 'A'\" to \"10 'A'\"", function() {
    return this.posQuantityStr.exec(this.ctx).should.equal("10 'A'");
  });

  it("should convert \"-10 'A'\" to \"10 'A'\"", function() {
    return this.negQuantityStr.exec(this.ctx).should.equal("-10 'A'");
  });

  return it("should convert \"10 'A'\" to \"10 'A'\"", function() {
    const quantity = this.quantityQuantity.exec(this.ctx);
    quantity.value.should.equal(10);
    return quantity.unit.should.equal('A');
  });
});

describe('FromBoolean', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert true to 'true'", function() {
    return this.booleanTrueStr.exec(this.ctx).should.equal("true");
  });

  it("should convert false to 'false'", function() {
    return this.booleanFalseStr.exec(this.ctx).should.equal("false");
  });

  it("should convert true to true", function() {
    return this.booleanTrueBool.exec(this.ctx).should.equal(true);
  });

  return it("should convert false to false", function() {
    return this.booleanFalseBool.exec(this.ctx).should.equal(false);
  });
});

describe('FromDateTime', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert @2015-01-02T12:01:02.321-06:00 to '2015-01-02T12:01:02.321-06:00'", function() {
    return this.dateTimeToStr.exec(this.ctx).should.equal("2015-01-02T12:01:02.321-06:00");
  });

  it("should convert @2015-01-02T12:01:02.321-06:00 to Date", function() {
    const date = this.dateTimeToDate.exec(this.ctx);
    date.isDate.should.be.true();
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    return [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ].map((field) => should.not.exist(date[field]));
});

  return it("should convert @2015-01-02T12:01:02.321-06:00 to DateTime", function() {
    const dateTime = this.dateTimeToDateTime.exec(this.ctx);
    dateTime.isDateTime.should.be.true();
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    dateTime.day.should.equal(2);
    dateTime.hour.should.equal(12);
    dateTime.minute.should.equal(1);
    dateTime.second.should.equal(2);
    dateTime.millisecond.should.equal(321);
    return dateTime.timezoneOffset.should.equal(-6);
  });
});

describe('FromDate', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert @2015-01-01 to DateTime with 0 for time components", function() {
    const dateTime = this.dateYMDToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    dateTime.day.should.equal(1);
    dateTime.hour.should.equal(0);
    dateTime.minute.should.equal(0);
    dateTime.second.should.equal(0);
    dateTime.millisecond.should.equal(0);
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    return dateTime.isDateTime.should.equal.true;
  });

  it("should convert @2015-01 to DateTime with null for day and time components", function() {
    let field;
    let dateTime = this.dateYMToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    should.not.exist(dateTime.day);
    for (field of [ 'hour', 'minute', 'second', 'millisecond' ]) { should.not.exist(dateTime[field]); }
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;

    it("should convert @2015-01 to DateTime with null for day, month, and time components", function() {});
    dateTime = this.dateYToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    should.not.exist(dateTime.month);
    should.not.exist(dateTime.day);
    for (field of [ 'hour', 'minute', 'second', 'millisecond' ]) { should.not.exist(dateTime[field]); }
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    return dateTime.isDateTime.should.equal.true;
  });

  it("should convert @2015-01-01 to Date", function() {
    const date = this.dateToDate.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(1);
    for (let field of [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]) { should.not.exist(date[field]); }
    return date.isDate.should.equal.true;
  });

  return it("should convert @2015-01-01 to '2015-01-01'", function() {
    return this.dateToStr.exec(this.ctx).should.equal("2015-01-01");
  });
});

describe('FromTime', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip("should convert @T11:57 to '11:57'", function() {
    return this.timeStr.exec(this.ctx).should.equal("11:57");
  });

  return it.skip("should convert @T11:57 to @11:57", function() {
    const time = this.timeTime.exec(this.ctx);
    time.hour.should.equal(11);
    return time.minute.should.equal(57);
  });
});

describe('FromCode', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it.skip("should convert hepB to a concept", function() {
    let concept;
    return concept = this.codeConcept.exec(this.ctx);
  });

  return it.skip("should convert hepB to a code", function() {
    let code;
    return code = this.codeCode.exec(this.ctx);
  });
});

describe('ToDecimal', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert '0.0' to 0.0", function() {
    return this.noSign.exec(this.ctx).should.equal(0.0);
  });

  it("should convert '+1.1' to 1.1", function() {
    return this.positiveSign.exec(this.ctx).should.equal(1.1);
  });

  it("should convert '-1.1' to -1.1", function() {
    return this.negativeSign .exec(this.ctx).should.equal(-1.1);
  });

  it("should truncate decimal to 8 digits after decimal point", function() {
    return this.tooPrecise.exec(this.ctx).should.equal(0.44444444);
  });

  it("should be null for decimal that is above max decimal value", function() {
    return should(this.tooLargeDec.exec(this.ctx)).be.null();
  });

  it("should return null for decimal that is below min decimal value", function() {
    return should(this.tooSmallDec.exec(this.ctx)).be.null();
  });

  it("should convert null to null", function() {
    return should.not.exist(this.nullDecimal.exec(this.ctx));
  });

  return it.skip("should be null if wrong format (+.1)", function() {
    // TODO: parseFloat is more forgiving than the CQL spec, so this does get converted
    return should(this.wrongFormat.exec(this.ctx)).be.null();
  });
});

describe('ToInteger', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return positive integer without polarity sign", function() {
    return this.noSign.exec(this.ctx).should.equal(12345);
  });

  it("should return positive integer with polarity sign", function() {
    return this.positiveSign.exec(this.ctx).should.equal(12345);
  });

  it("should return negative integer", function() {
    return this.negativeSign.exec(this.ctx).should.equal(-12345);
  });

  it("should return null if integer larger than max", function() {
    return should(this.tooLargeInt.exec(this.ctx)).be.null();
  });

  return it("should return null if integer smaller than min", function() {
    return should(this.tooSmallInt.exec(this.ctx)).be.null();
  });
});

describe('ToQuantity', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should be null if string is not formatted properly", function() {
    return should(this.wrongFormatQuantity.exec(this.ctx)).be.null();
  });

  it("should be null if invalid positive Quantity", function() {
    return should(this.tooLargeQuantity.exec(this.ctx)).be.null();
  });

  it("should be null if invalid negative Quantity", function() {
    return should(this.tooSmallQuantity.exec(this.ctx)).be.null();
  });

  return it("should return null for null argument", function() {
    return should.not.exist(this.nullArg.exec(this.ctx));
  });
});

describe('ToRatio', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should be null if string is null", function() {
    return should(this.nullArg.exec(this.ctx)).be.null();
  });

  it("should be null if string separator is invalid", function() {
    return should(this.invalidSeparator.exec(this.ctx)).be.null();
  });

  it("should be null if numerator is invalid", function() {
    return should(this.invalidNumerator.exec(this.ctx)).be.null();
  });

  it("should be null if denominator is invalid", function() {
    return should(this.invalidDenominator.exec(this.ctx)).be.null();
  });

  it("should be valid given quantities with custom UCUM units", function() {
    const ratio = this.isValidWithCustomUCUM.exec(this.ctx);
    ratio.numerator.value.should.eql(1.0);
    ratio.numerator.unit.should.eql('{foo:bar }');
    ratio.denominator.value.should.eql(2.0);
    return ratio.denominator.unit.should.eql('mg');
  });

  return it("should create valid ratio", function() {
    const ratio = this.isValid.exec(this.ctx);
    ratio.numerator.value.should.eql(1.0);
    ratio.numerator.unit.should.eql('mg');
    ratio.denominator.value.should.eql(2.0);
    return ratio.denominator.unit.should.eql('mg');
  });
});

describe('ToTime', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return null if arg is null", function() {
    return should.not.exist(this.nullArgTime.exec(this.ctx));
  });

  it("should be null for incorrect format", function() {
    return should(this.incorrectFormatTime.exec(this.ctx)).be.null();
  });

  it("should be null for invalid time-of-day", function() {
    return should(this.invalidTime.exec(this.ctx)).be.null();
  });

  it("should work with for hh", function() {
    // NOTE: We need to pass in null timezoneOffset because DateTime assumes
    // execution context timezoneOffset while time does not have a
    // timezoneOffset
    const expectedDateTime = new DateTime(0,1,1,2,null,null,null,null);
    return this.timeH.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it("should work with for hh:mm", function() {
    const expectedDateTime = new DateTime(0,1,1,2,4,null,null,null);
    return this.timeHM.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it("should work with for hh:mm:ss", function() {
    const expectedDateTime = new DateTime(0,1,1,2,4,59,null,null);
    return this.timeHMS.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it("should work with for hh:mm:ss.fff", function() {
    const expectedDateTime = new DateTime(0,1,1,2,4,59,123, null);
    return this.timeHMSMs.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it("should be null for hour over 24", function() {
    return should(this.hourTooHigh.exec(this.ctx)).be.null();
  });

  it("should be null for minute over 59", function() {
    return should(this.minuteTooHigh.exec(this.ctx)).be.null();
  });

  return it("should be null for second over 59", function() {
    return should(this.secondTooHigh.exec(this.ctx)).be.null();
  });
});

describe('ToBoolean', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for TRUE", function() {
    return this.upperCaseTrue.exec(this.ctx).should.equal(true);
  });

  it("should return true for FALSE", function() {
    return this.upperCaseFalse.exec(this.ctx).should.equal(false);
  });

  it("should return true for true", function() {
    return this.lowerCaseT.exec(this.ctx).should.equal(true);
  });

  it("should return true for false", function() {
    return this.lowerCaseF.exec(this.ctx).should.equal(false);
  });

  it("should return true for T", function() {
    return this.upperCaseT.exec(this.ctx).should.equal(true);
  });

  return it("should return false for F", function() {
    return this.upperCaseF.exec(this.ctx).should.equal(false);
  });
});

describe('ToDate', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should convert String 2015-01-02 to Date", function() {
    const date = this.toDateString.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    for (let field of [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]) { should.not.exist(date[field]); }
    return date.isDate.should.equal.true;
  });

  it("should convert Datetime to Date", function() {
    const date = this.toDateDateTime.exec(this.ctx);
    date.year.should.equal(2000);
    date.month.should.equal(3);
    date.day.should.equal(15);
    for (let field of [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ]) { should.not.exist(date[field]); }
    return date.isDate.should.equal.true;
  });

  it("should return null for null input", function() {
    return should(this.toDateNull.exec(this.ctx)).be.null();
  });

  return it("should return 2014-01-01 and ignore time", function() {
    const date = this.toDateDateTimeString.exec(this.ctx);
    date.year.should.equal(2014);
    date.month.should.equal(1);
    date.day.should.equal(1);
    return [ 'hour', 'minute', 'second', 'millisecond', 'timezoneOffset' ].map((field) => should.not.exist(date[field]));
});
});

describe('ConvertsToBoolean', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for y", function() {
    return this.isTrueWithTrueValue.exec(this.ctx).should.equal(true);
  });

  it("should return true for 0", function() {
    return this.isTrueWithFalseValue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid argument", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDate', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid date", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid date", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDateTime', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid datetime", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it("should return true for valid date", function() {
    return this.isTrueWithDateValue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid datetime", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDecimal', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid decimal", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid decimal", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToInteger', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid integer", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid integer", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToQuantity', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid decimal", function() {
    return this.isTrueWithDecimal.exec(this.ctx).should.equal(true);
  });

  it("should return true for valid integer", function() {
    return this.isTrueWithInteger.exec(this.ctx).should.equal(true);
  });

  it("should return true for valid string", function() {
    return this.isTrueWithString.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid ucum unit", function() {
    return this.isFalseWithInvalidUcum.exec(this.ctx).should.equal(false);
  });

  it("should return false for invalid string", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToRatio', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid ratio string", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid ratio string", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  it("should return false for invalid ucum units", function() {
    return this.isFalseWithInvalidUcum.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToString', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid Boolean", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it.skip("should return false for invalid type", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToTime', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid string", function() {
    return this.isTrue.exec(this.ctx).should.equal(true);
  });

  it("should return false for invalid string", function() {
    return this.isFalse.exec(this.ctx).should.equal(false);
  });

  return it("should return null for null input", function() {
    return should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertQuantity', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return converted Quantity", function() {
    return this.convertQuantityGood.exec(this.ctx).should.eql(new Quantity(.005, 'g'));
  });

  it("should return converted Quantity using new syntx", function() {
    return this.convertSyntax.exec(this.ctx).should.eql(new Quantity(.005, 'g'));
  });

  it("should return converted Quantity with Kg", function() {
    return this.convertQuantityToKg.exec(this.ctx).should.eql(new Quantity(5, 'kg'));
  });

  it("should return converted Quantity with weeks", function() {
    return this.convertQuantityToWeeks.exec(this.ctx).should.eql(new Quantity(4, 'weeks'));
  });

  return it("should return null for an invalid UCUM conversion", function() {
    return should(this.nullConvertQuantity.exec(this.ctx)).be.null();
  });
});

describe('CanConvertQuantity', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it("should return true for valid conversion", function() {
    return this.canConvertQuantityTrue.exec(this.ctx).should.equal(true);
  });

  it("should return false for valid conversion", function() {
    return this.canConvertQuantityFalse.exec(this.ctx).should.equal(false);
  });

  it("should return null for first argument null", function() {
    return should(this.canConvertQuantityNullFirstNull.exec(this.ctx)).be.null();
  });

  return it("should return null for second argument being null", function() {
    return should(this.canConvertQuantityNullSecondNUll.exec(this.ctx)).be.null();
  });
});