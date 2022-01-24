import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { isNull } from '../../../src/util/util';
import { DateTime } from '../../../src/datatypes/datetime';
import { Quantity } from '../../../src/datatypes/quantity';
import { Uncertainty } from '../../../src/datatypes/uncertainty';

describe('FromString', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert 'str' to 'str'", function () {
    this.stringStr.exec(this.ctx).should.equal('str');
  });

  it('should convert null to null', function () {
    isNull(this.stringNull.exec(this.ctx)).should.equal(true);
  });

  it("should convert 'true' to true", function () {
    this.boolTrue.exec(this.ctx).should.equal(true);
  });

  it("should convert 'false' to false", function () {
    this.boolFalse.exec(this.ctx).should.equal(false);
  });

  it("should convert '10.2' to Decimal", function () {
    this.decimalValid.exec(this.ctx).should.equal(10.2);
  });

  it("should be null trying to convert 'abc' to Decimal", function () {
    should(this.decimalInvalid.exec(this.ctx)).be.null();
  });

  it("should convert '10' to Integer", function () {
    this.integerValid.exec(this.ctx).should.equal(10);
  });

  it("should convert '10.2' to Integer 10", function () {
    this.integerDropDecimal.exec(this.ctx).should.equal(10);
  });

  it("should be null trying to convert 'abc' to Integer", function () {
    should(this.integerInvalid.exec(this.ctx)).be.null();
  });

  it('should convert "10 \'A\'" to Quantity', function () {
    const quantity = this.quantityStr.exec(this.ctx);
    quantity.value.should.equal(10);
    quantity.unit.should.equal('A');
  });

  it('should convert "+10 \'A\'" to Quantity', function () {
    const quantity = this.posQuantityStr.exec(this.ctx);
    quantity.value.should.equal(10);
    quantity.unit.should.equal('A');
  });

  it('should convert "-10 \'A\'" to Quantity', function () {
    const quantity = this.negQuantityStr.exec(this.ctx);
    quantity.value.should.equal(-10);
    quantity.unit.should.equal('A');
  });

  it('should convert "10.0\'mA\'" to Quantity', function () {
    const quantity = this.quantityStrDecimal.exec(this.ctx);
    quantity.value.should.equal(10.0);
    quantity.unit.should.equal('mA');
  });

  it("should convert '2015-01-02' to DateTime", function () {
    const date = this.dateTimeStr.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    date.isDateTime.should.equal.true;
  });

  it("should convert '2015-01-02' to Date", function () {
    const date = this.dateStr.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    date.isDate.should.equal.true;
  });

  it('should be null if cannot convert', function () {
    should(this.nullConvert.exec(this.ctx)).be.null();
  });

  it('should convert DateTime string with Z', function () {
    const expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, 0);
    this.zDateTime.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it('should convert DateTime string with timezone offset', function () {
    const expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, -7);
    this.timezoneDateTime.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });
});

describe('FromInteger', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert 10 to '10'", function () {
    this.string10.exec(this.ctx).should.equal('10');
  });

  it('should convert 10 to 10.0', function () {
    this.decimal10.exec(this.ctx).should.equal(10.0);
  });

  it('should convert null to null', function () {
    isNull(this.intNull.exec(this.ctx)).should.equal(true);
  });

  it('should convert 10 to 10', function () {
    this.intInt.exec(this.ctx).should.equal(10);
  });
});

describe('FromQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert "10 \'A\'" to "10 \'A\'"', function () {
    this.quantityStr.exec(this.ctx).should.equal("10 'A'");
  });

  it('should convert "+10 \'A\'" to "10 \'A\'"', function () {
    this.posQuantityStr.exec(this.ctx).should.equal("10 'A'");
  });

  it('should convert "-10 \'A\'" to "10 \'A\'"', function () {
    this.negQuantityStr.exec(this.ctx).should.equal("-10 'A'");
  });

  it('should convert "10 \'A\'" to "10 \'A\'"', function () {
    const quantity = this.quantityQuantity.exec(this.ctx);
    quantity.value.should.equal(10);
    quantity.unit.should.equal('A');
  });
});

describe('FromBoolean', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert true to 'true'", function () {
    this.booleanTrueStr.exec(this.ctx).should.equal('true');
  });

  it("should convert false to 'false'", function () {
    this.booleanFalseStr.exec(this.ctx).should.equal('false');
  });

  it('should convert true to true', function () {
    this.booleanTrueBool.exec(this.ctx).should.equal(true);
  });

  it('should convert false to false', function () {
    this.booleanFalseBool.exec(this.ctx).should.equal(false);
  });
});

describe('FromDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert @2015-01-02T12:01:02.321-06:00 to '2015-01-02T12:01:02.321-06:00'", function () {
    this.dateTimeToStr.exec(this.ctx).should.equal('2015-01-02T12:01:02.321-06:00');
  });

  it('should convert @2015-01-02T12:01:02.321-06:00 to Date', function () {
    const date = this.dateTimeToDate.exec(this.ctx);
    date.isDate.should.be.true();
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset'].map(field =>
      should.not.exist(date[field])
    );
  });

  it('should convert @2015-01-02T12:01:02.321-06:00 to DateTime', function () {
    const dateTime = this.dateTimeToDateTime.exec(this.ctx);
    dateTime.isDateTime.should.be.true();
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    dateTime.day.should.equal(2);
    dateTime.hour.should.equal(12);
    dateTime.minute.should.equal(1);
    dateTime.second.should.equal(2);
    dateTime.millisecond.should.equal(321);
    dateTime.timezoneOffset.should.equal(-6);
  });
});

describe('FromDate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert @2015-01-01 to DateTime with 0 for time components', function () {
    const dateTime = this.dateYMDToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    dateTime.day.should.equal(1);
    dateTime.hour.should.equal(0);
    dateTime.minute.should.equal(0);
    dateTime.second.should.equal(0);
    dateTime.millisecond.should.equal(0);
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;
  });

  it('should convert @2015-01 to DateTime with null for day and time components', function () {
    let field: string;
    const dateTime = this.dateYMToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    should.not.exist(dateTime.day);
    for (field of ['hour', 'minute', 'second', 'millisecond']) {
      should.not.exist(dateTime[field]);
    }
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;
  });

  it('should convert @2015-01 to DateTime with null for day, month, and time components', function () {
    let field: string;
    const dateTime = this.dateYToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    should.not.exist(dateTime.month);
    should.not.exist(dateTime.day);
    for (field of ['hour', 'minute', 'second', 'millisecond']) {
      should.not.exist(dateTime[field]);
    }
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;
  });

  it('should convert @2015-01-01 to Date', function () {
    const date = this.dateToDate.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(1);
    for (const field of ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset']) {
      should.not.exist(date[field]);
    }
    date.isDate.should.equal.true;
  });

  it("should convert @2015-01-01 to '2015-01-01'", function () {
    this.dateToStr.exec(this.ctx).should.equal('2015-01-01');
  });
});

describe('FromTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip("should convert @T11:57 to '11:57'", function () {
    this.timeStr.exec(this.ctx).should.equal('11:57');
  });

  it.skip('should convert @T11:57 to @11:57', function () {
    const time = this.timeTime.exec(this.ctx);
    time.hour.should.equal(11);
    time.minute.should.equal(57);
  });
});

describe('FromCode', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert hepB to a concept', function () {
    const concept = this.codeConcept.exec(this.ctx);
    concept.isConcept.should.be.true();
  });

  it('should convert hepB to a code', function () {
    const code = this.codeCode.exec(this.ctx);
    code.isCode.should.be.true();
  });
});

describe('ToDecimal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert '0.0' to 0.0", function () {
    this.noSign.exec(this.ctx).should.equal(0.0);
  });

  it("should convert '+1.1' to 1.1", function () {
    this.positiveSign.exec(this.ctx).should.equal(1.1);
  });

  it("should convert '-1.1' to -1.1", function () {
    this.negativeSign.exec(this.ctx).should.equal(-1.1);
  });

  it('should truncate decimal to 8 digits after decimal point', function () {
    this.tooPrecise.exec(this.ctx).should.equal(0.44444444);
  });

  it('should be null for decimal that is above max decimal value', function () {
    should(this.tooLargeDec.exec(this.ctx)).be.null();
  });

  it('should return null for decimal that is below min decimal value', function () {
    should(this.tooSmallDec.exec(this.ctx)).be.null();
  });

  it('should convert null to null', function () {
    should.not.exist(this.nullDecimal.exec(this.ctx));
  });

  it.skip('should be null if wrong format (+.1)', function () {
    // TODO: parseFloat is more forgiving than the CQL spec, so this does get converted
    should(this.wrongFormat.exec(this.ctx)).be.null();
  });
});

describe('ToInteger', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return positive integer without polarity sign', function () {
    this.noSign.exec(this.ctx).should.equal(12345);
  });

  it('should return positive integer with polarity sign', function () {
    this.positiveSign.exec(this.ctx).should.equal(12345);
  });

  it('should return negative integer', function () {
    this.negativeSign.exec(this.ctx).should.equal(-12345);
  });

  it('should return null if integer larger than max', function () {
    should(this.tooLargeInt.exec(this.ctx)).be.null();
  });

  it('should return null if integer smaller than min', function () {
    should(this.tooSmallInt.exec(this.ctx)).be.null();
  });

  it('should return 1 for boolean true', function () {
    this.booleanTrue.exec(this.ctx).should.equal(1);
  });

  it('should return 0 for boolean false', function () {
    this.booleanFalse.exec(this.ctx).should.equal(0);
  });
});

describe('ToQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert a decimal to a quantity with unit 1', function () {
    this.decimalOverload.exec(this.ctx).should.eql(new Quantity(0.1, '1'));
  });

  it('should convert an integer to a quantity with unit 1', function () {
    this.integerOverload.exec(this.ctx).should.eql(new Quantity(13, '1'));
  });

  it('should convert an integer uncertainty to a quantity uncertainty', function () {
    this.uncertaintyOverload
      .exec(this.ctx)
      .should.eql(new Uncertainty(new Quantity(6, '1'), new Quantity(18, '1')));
  });

  it('should convert a string to a quantity with the specified unit', function () {
    this.stringOverload.exec(this.ctx).should.eql(new Quantity(-0.1, 'mg'));
  });

  it('should convert a ratio to a quantity by dividing numerator by denominator', function () {
    this.ratioOverload.exec(this.ctx).should.eql(new Quantity(0.5, 'mg/mL'));
  });

  it('should be null if string is not formatted properly', function () {
    should(this.wrongFormatQuantity.exec(this.ctx)).be.null();
  });

  it('should be null if invalid positive Quantity', function () {
    should(this.tooLargeQuantity.exec(this.ctx)).be.null();
  });

  it('should be null if invalid negative Quantity', function () {
    should(this.tooSmallQuantity.exec(this.ctx)).be.null();
  });

  it('should return null for null argument', function () {
    should.not.exist(this.nullArg.exec(this.ctx));
  });
});

describe('ToRatio', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be null if string is null', function () {
    should(this.nullArg.exec(this.ctx)).be.null();
  });

  it('should be null if string separator is invalid', function () {
    should(this.invalidSeparator.exec(this.ctx)).be.null();
  });

  it('should be null if numerator is invalid', function () {
    should(this.invalidNumerator.exec(this.ctx)).be.null();
  });

  it('should be null if denominator is invalid', function () {
    should(this.invalidDenominator.exec(this.ctx)).be.null();
  });

  it('should be valid given quantities with custom UCUM units', function () {
    const ratio = this.isValidWithCustomUCUM.exec(this.ctx);
    ratio.numerator.value.should.eql(1.0);
    ratio.numerator.unit.should.eql('{foo:bar }');
    ratio.denominator.value.should.eql(2.0);
    ratio.denominator.unit.should.eql('mg');
  });

  it('should create valid ratio', function () {
    const ratio = this.isValid.exec(this.ctx);
    ratio.numerator.value.should.eql(1.0);
    ratio.numerator.unit.should.eql('mg');
    ratio.denominator.value.should.eql(2.0);
    ratio.denominator.unit.should.eql('mg');
  });
});

describe('ToTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return null if arg is null', function () {
    should.not.exist(this.nullArgTime.exec(this.ctx));
  });

  it('should be null for incorrect format', function () {
    should(this.incorrectFormatTime.exec(this.ctx)).be.null();
  });

  it('should be null for invalid time-of-day', function () {
    should(this.invalidTime.exec(this.ctx)).be.null();
  });

  it('should work with hh', function () {
    // NOTE: We need to pass in null timezoneOffset because DateTime assumes
    // execution context timezoneOffset while time does not have a
    // timezoneOffset
    const expectedDateTime = new DateTime(0, 1, 1, 2, null, null, null, null);
    this.timeH.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it('should work with hh:mm', function () {
    const expectedDateTime = new DateTime(0, 1, 1, 2, 4, null, null, null);
    this.timeHM.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it('should work with hh:mm:ss', function () {
    const expectedDateTime = new DateTime(0, 1, 1, 2, 4, 59, null, null);
    this.timeHMS.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it('should work with hh:mm:ss.fff', function () {
    const expectedDateTime = new DateTime(0, 1, 1, 2, 4, 59, 123, null);
    this.timeHMSMs.exec(this.ctx).equals(expectedDateTime).should.be.true();
  });

  it('should be null for hour over 24', function () {
    should(this.hourTooHigh.exec(this.ctx)).be.null();
  });

  it('should be null for minute over 59', function () {
    should(this.minuteTooHigh.exec(this.ctx)).be.null();
  });

  it('should be null for second over 59', function () {
    should(this.secondTooHigh.exec(this.ctx)).be.null();
  });
});

describe('ToBoolean', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for TRUE', function () {
    this.upperCaseTrue.exec(this.ctx).should.equal(true);
  });

  it('should return true for FALSE', function () {
    this.upperCaseFalse.exec(this.ctx).should.equal(false);
  });

  it('should return true for true', function () {
    this.lowerCaseT.exec(this.ctx).should.equal(true);
  });

  it('should return true for false', function () {
    this.lowerCaseF.exec(this.ctx).should.equal(false);
  });

  it('should return true for T', function () {
    this.upperCaseT.exec(this.ctx).should.equal(true);
  });

  it('should return false for F', function () {
    this.upperCaseF.exec(this.ctx).should.equal(false);
  });
});

describe('ToDate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert String 2015-01-02 to Date', function () {
    const date = this.toDateString.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    for (const field of ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset']) {
      should.not.exist(date[field]);
    }
    date.isDate.should.equal.true;
  });

  it('should convert Datetime to Date', function () {
    const date = this.toDateDateTime.exec(this.ctx);
    date.year.should.equal(2000);
    date.month.should.equal(3);
    date.day.should.equal(15);
    for (const field of ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset']) {
      should.not.exist(date[field]);
    }
    date.isDate.should.equal.true;
  });

  it('should return null for null input', function () {
    should(this.toDateNull.exec(this.ctx)).be.null();
  });

  it('should return 2014-01-01 and ignore time', function () {
    const date = this.toDateDateTimeString.exec(this.ctx);
    date.year.should.equal(2014);
    date.month.should.equal(1);
    date.day.should.equal(1);
    ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset'].map(field =>
      should.not.exist(date[field])
    );
  });
});

describe('ConvertsToBoolean', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for y', function () {
    this.isTrueWithTrueValue.exec(this.ctx).should.equal(true);
  });

  it('should return true for 0', function () {
    this.isTrueWithFalseValue.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid argument', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid date', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid date', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid datetime', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it('should return true for valid date', function () {
    this.isTrueWithDateValue.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid datetime', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDecimal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid decimal', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid decimal', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToInteger', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid integer', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it('should return true for boolean true', function () {
    this.isTrueWithBooleanTrue.exec(this.ctx).should.equal(true);
  });

  it('should return true for boolean false', function () {
    this.isTrueWithBooleanFalse.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid integer', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid decimal', function () {
    this.isTrueWithDecimal.exec(this.ctx).should.equal(true);
  });

  it('should return true for valid integer', function () {
    this.isTrueWithInteger.exec(this.ctx).should.equal(true);
  });

  it('should return true for valid string', function () {
    this.isTrueWithString.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid ucum unit', function () {
    this.isFalseWithInvalidUcum.exec(this.ctx).should.equal(false);
  });

  it('should return false for invalid string', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToRatio', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid ratio string', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid ratio string', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return false for invalid ucum units', function () {
    this.isFalseWithInvalidUcum.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToString', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid Boolean', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it.skip('should return false for invalid type', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid string', function () {
    this.isTrue.exec(this.ctx).should.equal(true);
  });

  it('should return false for invalid string', function () {
    this.isFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for null input', function () {
    should(this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return converted Quantity', function () {
    this.convertQuantityGood.exec(this.ctx).should.eql(new Quantity(0.005, 'g'));
  });

  it('should return converted Quantity using new syntx', function () {
    this.convertSyntax.exec(this.ctx).should.eql(new Quantity(0.005, 'g'));
  });

  it('should return converted Quantity with Kg', function () {
    this.convertQuantityToKg.exec(this.ctx).should.eql(new Quantity(5, 'kg'));
  });

  it('should return converted Quantity with weeks', function () {
    this.convertQuantityToWeeks.exec(this.ctx).should.eql(new Quantity(4, 'weeks'));
  });

  it('should return null for an invalid UCUM conversion', function () {
    should(this.nullConvertQuantity.exec(this.ctx)).be.null();
  });
});

describe('CanConvertQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid conversion', function () {
    this.canConvertQuantityTrue.exec(this.ctx).should.equal(true);
  });

  it('should return false for valid conversion', function () {
    this.canConvertQuantityFalse.exec(this.ctx).should.equal(false);
  });

  it('should return null for first argument null', function () {
    should(this.canConvertQuantityNullFirstNull.exec(this.ctx)).be.null();
  });

  it('should return null for second argument being null', function () {
    should(this.canConvertQuantityNullSecondNUll.exec(this.ctx)).be.null();
  });
});
