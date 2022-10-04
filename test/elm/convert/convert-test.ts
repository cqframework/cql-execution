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

  it("should convert 'str' to 'str'", async function () {
    (await this.stringStr.exec(this.ctx)).should.equal('str');
  });

  it('should convert null to null', async function () {
    isNull(await this.stringNull.exec(this.ctx)).should.equal(true);
  });

  it("should convert 'true' to true", async function () {
    (await this.boolTrue.exec(this.ctx)).should.equal(true);
  });

  it("should convert 'false' to false", async function () {
    (await this.boolFalse.exec(this.ctx)).should.equal(false);
  });

  it("should convert '10.2' to Decimal", async function () {
    (await this.decimalValid.exec(this.ctx)).should.equal(10.2);
  });

  it("should be null trying to convert 'abc' to Decimal", async function () {
    should(await this.decimalInvalid.exec(this.ctx)).be.null();
  });

  it("should convert '10' to Integer", async function () {
    (await this.integerValid.exec(this.ctx)).should.equal(10);
  });

  it("should convert '10.2' to Integer 10", async function () {
    (await this.integerDropDecimal.exec(this.ctx)).should.equal(10);
  });

  it("should be null trying to convert 'abc' to Integer", async function () {
    should(await this.integerInvalid.exec(this.ctx)).be.null();
  });

  it('should convert "10 \'A\'" to Quantity', async function () {
    const quantity = await this.quantityStr.exec(this.ctx);
    quantity.value.should.equal(10);
    quantity.unit.should.equal('A');
  });

  it('should convert "+10 \'A\'" to Quantity', async function () {
    const quantity = await this.posQuantityStr.exec(this.ctx);
    quantity.value.should.equal(10);
    quantity.unit.should.equal('A');
  });

  it('should convert "-10 \'A\'" to Quantity', async function () {
    const quantity = await this.negQuantityStr.exec(this.ctx);
    quantity.value.should.equal(-10);
    quantity.unit.should.equal('A');
  });

  it('should convert "10.0\'mA\'" to Quantity', async function () {
    const quantity = await this.quantityStrDecimal.exec(this.ctx);
    quantity.value.should.equal(10.0);
    quantity.unit.should.equal('mA');
  });

  it("should convert '2015-01-02' to DateTime", async function () {
    const date = await this.dateTimeStr.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    date.isDateTime.should.equal.true;
  });

  it("should convert '2015-01-02' to Date", async function () {
    const date = await this.dateStr.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    date.isDate.should.equal.true;
  });

  it('should be null if cannot convert', async function () {
    should(await this.nullConvert.exec(this.ctx)).be.null();
  });

  it('should convert DateTime string with Z', async function () {
    const expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, 0);
    (await this.zDateTime.exec(this.ctx)).equals(expectedDateTime).should.be.true();
  });

  it('should convert DateTime string with timezone offset', async function () {
    const expectedDateTime = new DateTime(2014, 1, 1, 14, 30, 0, 0, -7);
    (await this.timezoneDateTime.exec(this.ctx)).equals(expectedDateTime).should.be.true();
  });
});

describe('FromInteger', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert 10 to '10'", async function () {
    (await this.string10.exec(this.ctx)).should.equal('10');
  });

  it('should convert 10 to 10.0', async function () {
    (await this.decimal10.exec(this.ctx)).should.equal(10.0);
  });

  it('should convert null to null', async function () {
    isNull(await this.intNull.exec(this.ctx)).should.equal(true);
  });

  it('should convert 10 to 10', async function () {
    (await this.intInt.exec(this.ctx)).should.equal(10);
  });
});

describe('FromQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert "10 \'A\'" to "10 \'A\'"', async function () {
    (await this.quantityStr.exec(this.ctx)).should.equal("10 'A'");
  });

  it('should convert "+10 \'A\'" to "10 \'A\'"', async function () {
    (await this.posQuantityStr.exec(this.ctx)).should.equal("10 'A'");
  });

  it('should convert "-10 \'A\'" to "10 \'A\'"', async function () {
    (await this.negQuantityStr.exec(this.ctx)).should.equal("-10 'A'");
  });

  it('should convert "10 \'A\'" to "10 \'A\'"', async function () {
    const quantity = await this.quantityQuantity.exec(this.ctx);
    quantity.value.should.equal(10);
    quantity.unit.should.equal('A');
  });
});

describe('FromBoolean', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert true to 'true'", async function () {
    (await this.booleanTrueStr.exec(this.ctx)).should.equal('true');
  });

  it("should convert false to 'false'", async function () {
    (await this.booleanFalseStr.exec(this.ctx)).should.equal('false');
  });

  it('should convert true to true', async function () {
    (await this.booleanTrueBool.exec(this.ctx)).should.equal(true);
  });

  it('should convert false to false', async function () {
    (await this.booleanFalseBool.exec(this.ctx)).should.equal(false);
  });
});

describe('FromDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert @2015-01-02T12:01:02.321-06:00 to '2015-01-02T12:01:02.321-06:00'", async function () {
    (await this.dateTimeToStr.exec(this.ctx)).should.equal('2015-01-02T12:01:02.321-06:00');
  });

  it('should convert @2015-01-02T12:01:02.321-06:00 to Date', async function () {
    const date = await this.dateTimeToDate.exec(this.ctx);
    date.isDate.should.be.true();
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset'].map(field =>
      should.not.exist(date[field])
    );
  });

  it('should convert @2015-01-02T12:01:02.321-06:00 to DateTime', async function () {
    const dateTime = await this.dateTimeToDateTime.exec(this.ctx);
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

  it('should convert @2015-01-01 to DateTime with 0 for time components', async function () {
    const dateTime = await this.dateYMDToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    dateTime.day.should.equal(1);
    should.not.exist(dateTime.hour);
    should.not.exist(dateTime.minute);
    should.not.exist(dateTime.second);
    should.not.exist(dateTime.millisecond);
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;
  });

  it('should convert @2015-01 to DateTime with null for day and time components', async function () {
    let field: string;
    const dateTime = await this.dateYMToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    dateTime.month.should.equal(1);
    should.not.exist(dateTime.day);
    for (field of ['hour', 'minute', 'second', 'millisecond']) {
      should.not.exist(dateTime[field]);
    }
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;
  });

  it('should convert @2015-01 to DateTime with null for day, month, and time components', async function () {
    let field: string;
    const dateTime = await this.dateYToDateTime.exec(this.ctx);
    dateTime.year.should.equal(2015);
    should.not.exist(dateTime.month);
    should.not.exist(dateTime.day);
    for (field of ['hour', 'minute', 'second', 'millisecond']) {
      should.not.exist(dateTime[field]);
    }
    dateTime.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
    dateTime.isDateTime.should.equal.true;
  });

  it('should convert @2015-01-01 to Date', async function () {
    const date = await this.dateToDate.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(1);
    for (const field of ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset']) {
      should.not.exist(date[field]);
    }
    date.isDate.should.equal.true;
  });

  it("should convert @2015-01-01 to '2015-01-01'", async function () {
    (await this.dateToStr.exec(this.ctx)).should.equal('2015-01-01');
  });
});

describe('FromTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it.skip("should convert @T11:57 to '11:57'", async function () {
    (await this.timeStr.exec(this.ctx)).should.equal('11:57');
  });

  it.skip('should convert @T11:57 to @11:57', async function () {
    const time = await this.timeTime.exec(this.ctx);
    time.hour.should.equal(11);
    time.minute.should.equal(57);
  });
});

describe('FromCode', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert hepB to a concept', async function () {
    const concept = await this.codeConcept.exec(this.ctx);
    concept.isConcept.should.be.true();
  });

  it('should convert hepB to a code', async function () {
    const code = await this.codeCode.exec(this.ctx);
    code.isCode.should.be.true();
  });
});

describe('ToDecimal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it("should convert '0.0' to 0.0", async function () {
    (await this.noSign.exec(this.ctx)).should.equal(0.0);
  });

  it("should convert '+1.1' to 1.1", async function () {
    (await this.positiveSign.exec(this.ctx)).should.equal(1.1);
  });

  it("should convert '-1.1' to -1.1", async function () {
    (await this.negativeSign.exec(this.ctx)).should.equal(-1.1);
  });

  it('should truncate decimal to 8 digits after decimal point', async function () {
    (await this.tooPrecise.exec(this.ctx)).should.equal(0.44444444);
  });

  it('should be null for decimal that is above max decimal value', async function () {
    should(await this.tooLargeDec.exec(this.ctx)).be.null();
  });

  it('should return null for decimal that is below min decimal value', async function () {
    should(await this.tooSmallDec.exec(this.ctx)).be.null();
  });

  it('should convert null to null', async function () {
    should.not.exist(await this.nullDecimal.exec(this.ctx));
  });

  it.skip('should be null if wrong format (+.1)', async function () {
    // TODO: parseFloat is more forgiving than the CQL spec, so this does get converted
    should(await this.wrongFormat.exec(this.ctx)).be.null();
  });
});

describe('ToInteger', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return positive integer without polarity sign', async function () {
    (await this.noSign.exec(this.ctx)).should.equal(12345);
  });

  it('should return positive integer with polarity sign', async function () {
    (await this.positiveSign.exec(this.ctx)).should.equal(12345);
  });

  it('should return negative integer', async function () {
    (await this.negativeSign.exec(this.ctx)).should.equal(-12345);
  });

  it('should return null if integer larger than max', async function () {
    should(await this.tooLargeInt.exec(this.ctx)).be.null();
  });

  it('should return null if integer smaller than min', async function () {
    should(await this.tooSmallInt.exec(this.ctx)).be.null();
  });

  it('should return 1 for boolean true', async function () {
    (await this.booleanTrue.exec(this.ctx)).should.equal(1);
  });

  it('should return 0 for boolean false', async function () {
    (await this.booleanFalse.exec(this.ctx)).should.equal(0);
  });
});

describe('ToQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert a decimal to a quantity with unit 1', async function () {
    (await this.decimalOverload.exec(this.ctx)).should.eql(new Quantity(0.1, '1'));
  });

  it('should convert an integer to a quantity with unit 1', async function () {
    (await this.integerOverload.exec(this.ctx)).should.eql(new Quantity(13, '1'));
  });

  it('should convert an integer uncertainty to a quantity uncertainty', async function () {
    (await this.uncertaintyOverload.exec(this.ctx)).should.eql(
      new Uncertainty(new Quantity(6, '1'), new Quantity(18, '1'))
    );
  });

  it('should convert a string to a quantity with the specified unit', async function () {
    (await this.stringOverload.exec(this.ctx)).should.eql(new Quantity(-0.1, 'mg'));
  });

  it('should convert a ratio to a quantity by dividing numerator by denominator', async function () {
    (await this.ratioOverload.exec(this.ctx)).should.eql(new Quantity(0.5, 'mg/mL'));
  });

  it('should be null if string is not formatted properly', async function () {
    should(await this.wrongFormatQuantity.exec(this.ctx)).be.null();
  });

  it('should be null if invalid positive Quantity', async function () {
    should(await this.tooLargeQuantity.exec(this.ctx)).be.null();
  });

  it('should be null if invalid negative Quantity', async function () {
    should(await this.tooSmallQuantity.exec(this.ctx)).be.null();
  });

  it('should return null for null argument', async function () {
    should.not.exist(await this.nullArg.exec(this.ctx));
  });
});

describe('ToRatio', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should be null if string is null', async function () {
    should(await this.nullArg.exec(this.ctx)).be.null();
  });

  it('should be null if string separator is invalid', async function () {
    should(await this.invalidSeparator.exec(this.ctx)).be.null();
  });

  it('should be null if numerator is invalid', async function () {
    should(await this.invalidNumerator.exec(this.ctx)).be.null();
  });

  it('should be null if denominator is invalid', async function () {
    should(await this.invalidDenominator.exec(this.ctx)).be.null();
  });

  it('should be valid given quantities with custom UCUM units', async function () {
    const ratio = await this.isValidWithCustomUCUM.exec(this.ctx);
    ratio.numerator.value.should.eql(1.0);
    ratio.numerator.unit.should.eql('{foo:bar }');
    ratio.denominator.value.should.eql(2.0);
    ratio.denominator.unit.should.eql('mg');
  });

  it('should create valid ratio', async function () {
    const ratio = await this.isValid.exec(this.ctx);
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

  it('should return null if arg is null', async function () {
    should.not.exist(await this.nullArgTime.exec(this.ctx));
  });

  it('should be null for incorrect format', async function () {
    should(await this.incorrectFormatTime.exec(this.ctx)).be.null();
  });

  it('should be null for invalid time-of-day', async function () {
    should(await this.invalidTime.exec(this.ctx)).be.null();
  });

  it('should work with hh', async function () {
    // NOTE: We need to pass in null timezoneOffset because DateTime assumes
    // execution context timezoneOffset while time does not have a
    // timezoneOffset
    const expectedDateTime = new DateTime(0, 1, 1, 2, null, null, null, null);
    (await this.timeH.exec(this.ctx)).equals(expectedDateTime).should.be.true();
  });

  it('should work with hh:mm', async function () {
    const expectedDateTime = new DateTime(0, 1, 1, 2, 4, null, null, null);
    (await this.timeHM.exec(this.ctx)).equals(expectedDateTime).should.be.true();
  });

  it('should work with hh:mm:ss', async function () {
    const expectedDateTime = new DateTime(0, 1, 1, 2, 4, 59, null, null);
    (await this.timeHMS.exec(this.ctx)).equals(expectedDateTime).should.be.true();
  });

  it('should work with hh:mm:ss.fff', async function () {
    const expectedDateTime = new DateTime(0, 1, 1, 2, 4, 59, 123, null);
    (await this.timeHMSMs.exec(this.ctx)).equals(expectedDateTime).should.be.true();
  });

  it('should be null for hour over 24', async function () {
    should(await this.hourTooHigh.exec(this.ctx)).be.null();
  });

  it('should be null for minute over 59', async function () {
    should(await this.minuteTooHigh.exec(this.ctx)).be.null();
  });

  it('should be null for second over 59', async function () {
    should(await this.secondTooHigh.exec(this.ctx)).be.null();
  });
});

describe('ToBoolean', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for TRUE', async function () {
    (await this.upperCaseTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return true for FALSE', async function () {
    (await this.upperCaseFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return true for true', async function () {
    (await this.lowerCaseT.exec(this.ctx)).should.equal(true);
  });

  it('should return true for false', async function () {
    (await this.lowerCaseF.exec(this.ctx)).should.equal(false);
  });

  it('should return true for T', async function () {
    (await this.upperCaseT.exec(this.ctx)).should.equal(true);
  });

  it('should return false for F', async function () {
    (await this.upperCaseF.exec(this.ctx)).should.equal(false);
  });
});

describe('ToDate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should convert String 2015-01-02 to Date', async function () {
    const date = await this.toDateString.exec(this.ctx);
    date.year.should.equal(2015);
    date.month.should.equal(1);
    date.day.should.equal(2);
    for (const field of ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset']) {
      should.not.exist(date[field]);
    }
    date.isDate.should.equal.true;
  });

  it('should convert Datetime to Date', async function () {
    const date = await this.toDateDateTime.exec(this.ctx);
    date.year.should.equal(2000);
    date.month.should.equal(3);
    date.day.should.equal(15);
    for (const field of ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset']) {
      should.not.exist(date[field]);
    }
    date.isDate.should.equal.true;
  });

  it('should return null for null input', async function () {
    should(await this.toDateNull.exec(this.ctx)).be.null();
  });

  it('should return 2014-01-01 and ignore time', async function () {
    const date = await this.toDateDateTimeString.exec(this.ctx);
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

  it('should return true for y', async function () {
    (await this.isTrueWithTrueValue.exec(this.ctx)).should.equal(true);
  });

  it('should return true for 0', async function () {
    (await this.isTrueWithFalseValue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid argument', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDate', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid date', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid date', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid datetime', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return true for valid date', async function () {
    (await this.isTrueWithDateValue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid datetime', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToDecimal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid decimal', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid decimal', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToInteger', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid integer', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return true for boolean true', async function () {
    (await this.isTrueWithBooleanTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return true for boolean false', async function () {
    (await this.isTrueWithBooleanFalse.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid integer', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid decimal', async function () {
    (await this.isTrueWithDecimal.exec(this.ctx)).should.equal(true);
  });

  it('should return true for valid integer', async function () {
    (await this.isTrueWithInteger.exec(this.ctx)).should.equal(true);
  });

  it('should return true for valid string', async function () {
    (await this.isTrueWithString.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid ucum unit', async function () {
    (await this.isFalseWithInvalidUcum.exec(this.ctx)).should.equal(false);
  });

  it('should return false for invalid string', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToRatio', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid ratio string', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid ratio string', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return false for invalid ucum units', async function () {
    (await this.isFalseWithInvalidUcum.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToString', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid Boolean', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it.skip('should return false for invalid type', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertsToTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid string', async function () {
    (await this.isTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for invalid string', async function () {
    (await this.isFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for null input', async function () {
    should(await this.isNull.exec(this.ctx)).be.null();
  });
});

describe('ConvertQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return converted Quantity', async function () {
    (await this.convertQuantityGood.exec(this.ctx)).should.eql(new Quantity(0.005, 'g'));
  });

  it('should return converted Quantity using new syntx', async function () {
    (await this.convertSyntax.exec(this.ctx)).should.eql(new Quantity(0.005, 'g'));
  });

  it('should return converted Quantity with Kg', async function () {
    (await this.convertQuantityToKg.exec(this.ctx)).should.eql(new Quantity(5, 'kg'));
  });

  it('should return converted Quantity with weeks', async function () {
    (await this.convertQuantityToWeeks.exec(this.ctx)).should.eql(new Quantity(4, 'weeks'));
  });

  it('should return null for an invalid UCUM conversion', async function () {
    should(await this.nullConvertQuantity.exec(this.ctx)).be.null();
  });
});

describe('CanConvertQuantity', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return true for valid conversion', async function () {
    (await this.canConvertQuantityTrue.exec(this.ctx)).should.equal(true);
  });

  it('should return false for valid conversion', async function () {
    (await this.canConvertQuantityFalse.exec(this.ctx)).should.equal(false);
  });

  it('should return null for first argument null', async function () {
    should(await this.canConvertQuantityNullFirstNull.exec(this.ctx)).be.null();
  });

  it('should return null for second argument being null', async function () {
    should(await this.canConvertQuantityNullSecondNUll.exec(this.ctx)).be.null();
  });
});
