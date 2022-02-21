/* eslint-disable @typescript-eslint/ban-ts-comment */
import should from 'should';
import * as luxon from 'luxon';
import { DateTime } from '../../src/datatypes/datetime';
import { Uncertainty } from '../../src/datatypes/uncertainty';

const tzDate = function (
  y: number,
  mo: number,
  d: number,
  h: number,
  mi: number,
  s: number,
  ms: number,
  offset?: number
) {
  if (offset == null) {
    offset = (new Date().getTimezoneOffset() / 60) * -1;
  }
  return new Date(Date.UTC(y, mo, d, h, mi, s, ms) - offset * 60 * 60 * 1000);
};

const luxonTzDate = function (
  y: number,
  mo: number,
  d: number,
  h: number,
  mi: number,
  s: number,
  ms: number,
  offset?: number
) {
  if (offset == null) {
    offset = new Date().getTimezoneOffset() * -1;
  }
  return luxon.DateTime.fromObject({
    year: y,
    month: mo,
    day: d,
    hour: h,
    minute: mi,
    second: s,
    millisecond: ms,
    // @ts-ignore
    zone: luxon.FixedOffsetZone.instance(offset)
  });
};

describe('DateTime', () => {
  it('should properly set all properties when constructed', () => {
    const d = new DateTime(2000, 12, 1, 3, 25, 59, 246, 5.5);
    d.year.should.equal(2000);
    d.month.should.equal(12);
    d.day.should.equal(1);
    d.hour.should.equal(3);
    d.minute.should.equal(25);
    d.second.should.equal(59);
    d.millisecond.should.equal(246);
    d.timezoneOffset.should.equal(5.5);
  });

  it('should leave unset properties as undefined', () => {
    const d = new DateTime(2000);
    d.year.should.equal(2000);
    d.timezoneOffset.should.equal((new Date().getTimezoneOffset() / 60) * -1);
    should.not.exist(d.month);
    should.not.exist(d.day);
    should.not.exist(d.hour);
    should.not.exist(d.minute);
    should.not.exist(d.second);
    should.not.exist(d.millisecond);
  });

  it('should parse yyyy', () => {
    const d = DateTime.parse('2012');
    d.should.eql(new DateTime(2012));
  });

  it('should parse yyyy-mm', () => {
    const d = DateTime.parse('2012-10');
    d.should.eql(new DateTime(2012, 10));
  });

  it('should parse yyyy-mm-dd', () => {
    const d = DateTime.parse('2012-10-25');
    d.should.eql(new DateTime(2012, 10, 25));
  });

  it('should parse yyyy-mm-ddThh with and without timezone offset', () => {
    let d = DateTime.parse('2012-10-25T12');
    d.should.eql(new DateTime(2012, 10, 25, 12));
    d = DateTime.parse('2012-10-25T12-05');
    d.should.eql(new DateTime(2012, 10, 25, 12, null, null, null, -5));
    d = DateTime.parse('2012-10-25T12-05:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, null, null, null, -5.5));
    d = DateTime.parse('2012-10-25T12Z');
    d.should.eql(new DateTime(2012, 10, 25, 12, null, null, null, 0));
  });

  it('should parse yyyy-mm-ddThh:mm with and without timezone offset', () => {
    let d = DateTime.parse('2012-10-25T12:55');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55));
    d = DateTime.parse('2012-10-25T12:55+05');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, null, null, 5));
    d = DateTime.parse('2012-10-25T12:55+05:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, null, null, 5.5));
    d = DateTime.parse('2012-10-25T12:55Z');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, null, null, 0));
  });

  it('should parse yyyy-mm-ddThh:mm:ss with and without timezone offset', () => {
    let d = DateTime.parse('2012-10-25T12:55:14');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14));
    d = DateTime.parse('2012-10-25T12:55:14+01');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, null, 1));
    d = DateTime.parse('2012-10-25T12:55:14+01:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, null, 1.5));
    d = DateTime.parse('2012-10-25T12:55:14Z');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, null, 0));
  });

  it('should parse yyyy-mm-ddThh:mm:ss.s with and without timezone offset', () => {
    let d = DateTime.parse('2012-10-25T12:55:14.9');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 900));

    d = DateTime.parse('2012-10-25T12:55:14.95');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 950));

    d = DateTime.parse('2012-10-25T12:55:14.953');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 953));

    d = DateTime.parse('2012-10-25T12:55:14.9641368');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 964));

    d = DateTime.parse('2012-10-25T12:55:14.953-01');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 953, -1));

    d = DateTime.parse('2012-10-25T12:55:14.953-01:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 953, -1.5));

    d = DateTime.parse('2012-10-25T12:55:14.953Z');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 953, 0));
  });

  it('should toString yyyy', () => {
    const d = new DateTime(2012);
    d.toString().should.eql('2012');
  });

  it('should toString yyyy-mm', () => {
    const d = new DateTime(2012, 10);
    d.toString().should.eql('2012-10');
  });

  it('should toString yyyy-mm-dd', () => {
    const d = new DateTime(2012, 10, 25);
    d.toString().should.eql('2012-10-25');
  });

  it('should toString yyyy-mm-ddThh', () => {
    const d = new DateTime(2012, 10, 25, 12, null, null, null, -5);
    d.toString().should.eql('2012-10-25T12-05:00');
  });

  it('should toString yyyy-mm-ddThh:mm', () => {
    const d = new DateTime(2012, 10, 25, 12, 55, null, null, -5);
    d.toString().should.eql('2012-10-25T12:55-05:00');
  });

  it('should toString yyyy-mm-ddThh:mm:ss', () => {
    const d = new DateTime(2012, 10, 25, 12, 55, 14, null, -5);
    d.toString().should.eql('2012-10-25T12:55:14-05:00');
  });

  it('should toString yyyy-mm-ddThh:mm:ss.sss', () => {
    let d = new DateTime(2012, 10, 25, 12, 55, 14, 9, -5);
    d.toString().should.eql('2012-10-25T12:55:14.009-05:00');

    d = new DateTime(2012, 10, 25, 12, 55, 14, 95, -5);
    d.toString().should.eql('2012-10-25T12:55:14.095-05:00');

    d = new DateTime(2012, 10, 25, 12, 55, 14, 953, -5);
    d.toString().should.eql('2012-10-25T12:55:14.953-05:00');
  });

  it('should be null when parsing non-string', () => should(DateTime.parse(20121025)).be.null());

  it('should be null when parsing invalid string format', () =>
    should(DateTime.parse('20121025')).be.null());

  it('should be null when parsing invalid date/time values', () => {
    should(DateTime.parse('0000-00-00')).be.null();
    should(DateTime.parse('2000-11-31T23:59:59.999')).be.null();
  });

  it.skip('should be null when ms field contains non-numeric characters after thousandths place', () =>
    should(DateTime.parse('2000-11-30T23:59:59.999abc')).be.null());

  it('should not parse null input', () => should.not.exist(DateTime.parse(null)));

  it('should construct from a javascript date', () =>
    DateTime.fromJSDate(new Date(1999, 1, 16, 13, 56, 24, 123)).should.eql(
      DateTime.parse('1999-02-16T13:56:24.123')
    ));

  it('should construct from a javascript date into a target timezone', () => {
    DateTime.fromJSDate(new Date(Date.UTC(1999, 1, 16, 13, 56, 24, 123)), -5).should.eql(
      DateTime.parse('1999-02-16T08:56:24.123-05:00')
    );
    DateTime.fromJSDate(new Date(Date.UTC(1999, 1, 16, 13, 56, 24, 123)), +4.5).should.eql(
      DateTime.parse('1999-02-16T18:26:24.123+04:30')
    );
  });

  it('should construct from a Luxon DateTime', () =>
    DateTime.fromLuxonDateTime(
      luxon.DateTime.fromISO('1999-02-16T13:56:24.123+01:00', { setZone: true })
    ).should.eql(DateTime.parse('1999-02-16T13:56:24.123+01:00')));

  it('should copy a fully define DateTime', () => {
    const original = DateTime.parse('1999-02-16T13:56:24.123+04:30');
    const copy = original.copy();
    copy.should.eql(original);
    copy.should.not.equal(original);
  });

  it('should copy an imprecise DateTime', () => {
    const original = DateTime.parse('1999-02');
    const copy = original.copy();
    copy.should.eql(original);
    copy.should.not.equal(original);
  });

  it('should convert to other timezone offsets', () => {
    const original = DateTime.parse('1999-02-16T13:56:24.123+04:30');
    const converted = original.convertToTimezoneOffset(-5);
    converted.should.not.eql(original);
    converted.should.eql(DateTime.parse('1999-02-16T04:26:24.123-05:00'));
  });

  it('should know if it is precise', () => {
    DateTime.parse('2000-01-01T00:00:00.0-05:00').isPrecise().should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').isPrecise().should.be.true();
    DateTime.parse('2000-01-01T00:00:00').isPrecise().should.be.false();
    DateTime.parse('2000-01-01T00:00').isPrecise().should.be.false();
    DateTime.parse('2000-01-01T00').isPrecise().should.be.false();
    DateTime.parse('2000-01-01').isPrecise().should.be.false();
    DateTime.parse('2000-01').isPrecise().should.be.false();
    DateTime.parse('2000').isPrecise().should.be.false();
  });

  it('should know if it is imprecise', () => {
    DateTime.parse('2000-01-01T00:00:00.0-05:00').isImprecise().should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').isImprecise().should.be.false();
    DateTime.parse('2000-01-01T00:00:00').isImprecise().should.be.true();
    DateTime.parse('2000-01-01T00:00').isImprecise().should.be.true();
    DateTime.parse('2000-01-01T00').isImprecise().should.be.true();
    DateTime.parse('2000-01-01').isImprecise().should.be.true();
    DateTime.parse('2000-01').isImprecise().should.be.true();
    DateTime.parse('2000').isImprecise().should.be.true();
  });

  it('should correctly convert to uncertainties with JavaScript dates', () => {
    const preciseUncertainty = DateTime.parse('2000-02-25T12:15:43.123').toLuxonUncertainty();
    preciseUncertainty.isPoint().should.be.true();
    preciseUncertainty.low.should.eql(luxonTzDate(2000, 2, 25, 12, 15, 43, 123));
    preciseUncertainty.high.should.eql(luxonTzDate(2000, 2, 25, 12, 15, 43, 123));

    const toSecond = DateTime.parse('2000-02-25T12:15:43').toLuxonUncertainty();
    toSecond.isPoint().should.be.false();
    toSecond.low.should.eql(luxonTzDate(2000, 2, 25, 12, 15, 43, 0));
    toSecond.high.should.eql(luxonTzDate(2000, 2, 25, 12, 15, 43, 999));

    const toMinute = DateTime.parse('2000-02-25T12:15').toLuxonUncertainty();
    toMinute.isPoint().should.be.false();
    toMinute.low.should.eql(luxonTzDate(2000, 2, 25, 12, 15, 0, 0));
    toMinute.high.should.eql(luxonTzDate(2000, 2, 25, 12, 15, 59, 999));

    const toHour = DateTime.parse('2000-02-25T12').toLuxonUncertainty();
    toHour.isPoint().should.be.false();
    toHour.low.should.eql(luxonTzDate(2000, 2, 25, 12, 0, 0, 0));
    toHour.high.should.eql(luxonTzDate(2000, 2, 25, 12, 59, 59, 999));

    const toDay = DateTime.parse('2000-02-25').toLuxonUncertainty();
    toDay.isPoint().should.be.false();
    toDay.low.should.eql(luxonTzDate(2000, 2, 25, 0, 0, 0, 0));
    toDay.high.should.eql(luxonTzDate(2000, 2, 25, 23, 59, 59, 999));

    const toMonthLeapYear = DateTime.parse('2000-02').toLuxonUncertainty();
    toMonthLeapYear.isPoint().should.be.false();
    toMonthLeapYear.low.should.eql(luxonTzDate(2000, 2, 1, 0, 0, 0, 0));
    toMonthLeapYear.high.should.eql(luxonTzDate(2000, 2, 29, 23, 59, 59, 999));

    const toMonthNonLeapYear = DateTime.parse('1999-02').toLuxonUncertainty();
    toMonthNonLeapYear.isPoint().should.be.false();
    toMonthNonLeapYear.low.should.eql(luxonTzDate(1999, 2, 1, 0, 0, 0, 0));
    toMonthNonLeapYear.high.should.eql(luxonTzDate(1999, 2, 28, 23, 59, 59, 999));

    const toYear = DateTime.parse('2000').toLuxonUncertainty();
    toYear.isPoint().should.be.false();
    toYear.low.should.eql(luxonTzDate(2000, 1, 1, 0, 0, 0, 0));
    toYear.high.should.eql(luxonTzDate(2000, 12, 31, 23, 59, 59, 999));
  });

  it('should convert to javascript Date', () =>
    DateTime.parse('2012-02-25T12:55:14.456')
      .toJSDate()
      .should.eql(tzDate(2012, 1, 25, 12, 55, 14, 456)));

  it('should convert to javascript Date w/ time zone offsets', () => {
    DateTime.parse('2012-10-25T12:55:14.456+04:30')
      .toJSDate()
      .should.eql(new Date('2012-10-25T12:55:14.456+04:30'));
    DateTime.parse('2012-10-25T12:55:14.456+00:00')
      .toJSDate()
      .should.eql(new Date('2012-10-25T12:55:14.456Z'));
    DateTime.parse('2012-10-25T12:55:14.0-05')
      .toJSDate()
      .should.eql(new Date('25 Oct 2012 12:55:14 EST'));
  });

  it('should convert to javascript Date ignoring time zone offsets', () => {
    DateTime.parse('2012-10-25T12:55:14.456+04:30')
      .toJSDate(true)
      .should.eql(tzDate(2012, 9, 25, 12, 55, 14, 456));
    DateTime.parse('2012-10-25T12:55:14.456+00:00')
      .toJSDate(true)
      .should.eql(tzDate(2012, 9, 25, 12, 55, 14, 456));
    DateTime.parse('2012-10-25T12:55:14.0-05')
      .toJSDate(true)
      .should.eql(tzDate(2012, 9, 25, 12, 55, 14, 0));
  });

  it('should floor unknown values when it converts to javascript Date', () =>
    DateTime.parse('2012').toJSDate().should.eql(tzDate(2012, 0, 1, 0, 0, 0, 0)));

  it('should convert to Luxon DateTime', () =>
    DateTime.parse('2012-02-25T12:55:14.456')
      .toLuxonDateTime()
      .should.eql(luxonTzDate(2012, 2, 25, 12, 55, 14, 456)));

  it('should convert to Luxon DateTime w/ time zone offsets', () => {
    DateTime.parse('2012-10-25T12:55:14.456+04:30')
      .toLuxonDateTime()
      .should.eql(luxon.DateTime.fromISO('2012-10-25T12:55:14.456+04:30', { setZone: true }));
    DateTime.parse('2012-10-25T12:55:14.456+00:00')
      .toLuxonDateTime()
      .should.eql(luxon.DateTime.fromISO('2012-10-25T12:55:14.456+00:00', { setZone: true }));
    DateTime.parse('2012-10-25T12:55:14.0-05')
      .toLuxonDateTime()
      .should.eql(luxon.DateTime.fromISO('2012-10-25T12:55:14.000-05:00', { setZone: true }));
  });

  it('should floor unknown values when it converts to Luxon DateTime', () =>
    DateTime.parse('2012').toLuxonDateTime().should.eql(luxonTzDate(2012, 1, 1, 0, 0, 0, 0)));
});

describe('DateTime.add', () => {
  it('should add units for simple cases', () => {
    const simple = DateTime.parse('2000-06-15T10:20:30.555');
    simple.add(1, DateTime.Unit.YEAR).should.eql(DateTime.parse('2001-06-15T10:20:30.555'));
    simple.add(1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-07-15T10:20:30.555'));
    simple.add(1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06-16T10:20:30.555'));
    simple.add(1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-15T11:20:30.555'));
    simple.add(1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T10:21:30.555'));
    simple.add(1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:20:31.555'));
    simple.add(1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:30.556'));
  });

  it('should subtract units for simple cases', () => {
    const simple = DateTime.parse('2000-06-15T10:20:30.555');
    simple.add(-1, DateTime.Unit.YEAR).should.eql(DateTime.parse('1999-06-15T10:20:30.555'));
    simple.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-05-15T10:20:30.555'));
    simple.add(-1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06-14T10:20:30.555'));
    simple.add(-1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-15T09:20:30.555'));
    simple.add(-1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T10:19:30.555'));
    simple.add(-1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:20:29.555'));
    simple.add(-1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:30.554'));
  });

  it('should return the last day of the month for invalid dates', () => {
    const jan31 = DateTime.parse('2021-01-31T10:20:30.555');
    jan31.add(1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2021-02-28T10:20:30.555'));
    const dec31 = DateTime.parse('2020-12-31T10:20:30.555');
    dec31.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2020-11-30T10:20:30.555'));
  });

  it('should return the last day of the month for invalid dates (leap year)', () => {
    const feb29 = DateTime.parse('2004-02-29T10:20:30.555');
    feb29.add(1, DateTime.Unit.YEAR).should.eql(DateTime.parse('2005-02-28T10:20:30.555'));
    feb29.add(-1, DateTime.Unit.YEAR).should.eql(DateTime.parse('2003-02-28T10:20:30.555'));
  });

  it('should rollover when you add past a boundary', () => {
    const almostMidnight = DateTime.parse('2000-12-31T23:59:59.999');
    almostMidnight
      .add(1, DateTime.Unit.MONTH)
      .should.eql(DateTime.parse('2001-01-31T23:59:59.999'));
    almostMidnight.add(1, DateTime.Unit.DAY).should.eql(DateTime.parse('2001-01-01T23:59:59.999'));
    almostMidnight.add(1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2001-01-01T00:59:59.999'));
    almostMidnight
      .add(1, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2001-01-01T00:00:59.999'));
    almostMidnight
      .add(1, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2001-01-01T00:00:00.999'));
    almostMidnight
      .add(1, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2001-01-01T00:00:00.0'));
  });

  it('should rollover when you add past a boundary w/ timezone offsets', () => {
    const almostMidnight = DateTime.parse('2000-12-31T23:59:59.999+00:00');
    almostMidnight
      .add(1, DateTime.Unit.MONTH)
      .should.eql(DateTime.parse('2001-01-31T23:59:59.999+00:00'));
    almostMidnight
      .add(1, DateTime.Unit.DAY)
      .should.eql(DateTime.parse('2001-01-01T23:59:59.999+00:00'));
    almostMidnight
      .add(1, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2001-01-01T00:59:59.999+00:00'));
    almostMidnight
      .add(1, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2001-01-01T00:00:59.999+00:00'));
    almostMidnight
      .add(1, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2001-01-01T00:00:00.999+00:00'));
    almostMidnight
      .add(1, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2001-01-01T00:00:00.0+00:00'));
  });

  it('should rollover when you subtract past a boundary', () => {
    const midnight = DateTime.parse('2001-01-01T00:00:00.0');
    midnight.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-12-01T00:00:00.0'));
    midnight.add(-1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-12-31T00:00:00.0'));
    midnight.add(-1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-12-31T23:00:00.0'));
    midnight.add(-1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-12-31T23:59:00.0'));
    midnight.add(-1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-12-31T23:59:59.0'));
    midnight
      .add(-1, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-12-31T23:59:59.999'));
  });

  it('should rollover when you subtract past a boundary w/ timezone offsets', () => {
    const midnight = DateTime.parse('2001-01-01T00:00:00.0+00:00');
    midnight.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-12-01T00:00:00.0+00:00'));
    midnight.add(-1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-12-31T00:00:00.0+00:00'));
    midnight.add(-1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-12-31T23:00:00.0+00:00'));
    midnight
      .add(-1, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-12-31T23:59:00.0+00:00'));
    midnight
      .add(-1, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-12-31T23:59:59.0+00:00'));
    midnight
      .add(-1, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-12-31T23:59:59.999+00:00'));
  });

  it('should still work for imprecise numbers, when adding to a defined field', () => {
    DateTime.parse('2000-06-15T10:20:40')
      .add(30, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10:21:10'));
    DateTime.parse('2000-06-15T10:20')
      .add(50, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15T11:10'));
    DateTime.parse('2000-06-15T10')
      .add(14, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-06-16T00'));
    DateTime.parse('2000-06-15')
      .add(30, DateTime.Unit.DAY)
      .should.eql(DateTime.parse('2000-07-15'));
    DateTime.parse('2000-06').add(8, DateTime.Unit.MONTH).should.eql(DateTime.parse('2001-02'));
    DateTime.parse('2000').add(5, DateTime.Unit.YEAR).should.eql(DateTime.parse('2005'));
  });

  it('should handle adding to undefined fields', () => {
    DateTime.parse('2000-06-15T10:20:15')
      .add(100, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20:15'));
    DateTime.parse('2000-06-15T10:20:15')
      .add(2 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20:17'));
    DateTime.parse('2000-06-15T10:20')
      .add(100, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20')
      .add(1 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:21'));
    DateTime.parse('2000-06-15T10:20')
      .add(59, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20')
      .add(100, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10:21'));
    DateTime.parse('2000-06-15T10')
      .add(100, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10')
      .add(60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T11'));
    DateTime.parse('2000-06-15T10')
      .add(100, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10')
      .add(60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T11'));
    DateTime.parse('2000-06-15T10')
      .add(50, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10')
      .add(100, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15T11'));
    DateTime.parse('2000-06-15')
      .add(10, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(2 * 24 * 60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-17'));
    DateTime.parse('2000-06-15')
      .add(10, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(1 * 24 * 60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-16'));
    DateTime.parse('2000-06-15')
      .add(10, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(1 * 24 * 60, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-16'));
    DateTime.parse('2000-06-15')
      .add(10, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(30, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-06-16'));
    DateTime.parse('2000-06')
      .add(10, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(32 * 24 * 60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-07'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(32 * 24 * 60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-07'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(32 * 24 * 60, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-07'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(100 * 24, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-09'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-09'));
    DateTime.parse('2000').add(100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(400 * 24 * 60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(400 * 24 * 60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(400 * 24 * 60, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(400 * 24, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(400, DateTime.Unit.DAY).should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(10, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(100, DateTime.Unit.MONTH).should.eql(DateTime.parse('2008'));
  });

  it('should handle subtracting from undefined fields', () => {
    DateTime.parse('2000-06-15T10:20:15')
      .add(-100, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20:15'));
    DateTime.parse('2000-06-15T10:20:15')
      .add(-2 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20:13'));
    DateTime.parse('2000-06-15T10:20')
      .add(-100, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20')
      .add(-1 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10:19'));
    DateTime.parse('2000-06-15T10:20')
      .add(-59, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20')
      .add(-100, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10:19'));
    DateTime.parse('2000-06-15T10')
      .add(-100, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10')
      .add(-60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15T09'));
    DateTime.parse('2000-06-15T10')
      .add(-100, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10')
      .add(-60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15T09'));
    DateTime.parse('2000-06-15T10')
      .add(-50, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10')
      .add(-100, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15T09'));
    DateTime.parse('2000-06-15')
      .add(-10, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(-2 * 24 * 60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06-13'));
    DateTime.parse('2000-06-15')
      .add(-10, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(-1 * 24 * 60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-06-14'));
    DateTime.parse('2000-06-15')
      .add(-10, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(-1 * 24 * 60, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-06-14'));
    DateTime.parse('2000-06-15')
      .add(-10, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15')
      .add(-30, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-06-14'));
    DateTime.parse('2000-06')
      .add(-10, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(-32 * 24 * 60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('2000-05'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(-32 * 24 * 60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('2000-05'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(-32 * 24 * 60, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('2000-05'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06')
      .add(-100 * 24, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('2000-03'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(-100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-03'));
    DateTime.parse('2000').add(-100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(-400 * 24 * 60 * 60 * 1000, DateTime.Unit.MILLISECOND)
      .should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(-400 * 24 * 60 * 60, DateTime.Unit.SECOND)
      .should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(-400 * 24 * 60, DateTime.Unit.MINUTE)
      .should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000')
      .add(-400 * 24, DateTime.Unit.HOUR)
      .should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-400, DateTime.Unit.DAY).should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-10, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-100, DateTime.Unit.MONTH).should.eql(DateTime.parse('1992'));
  });

  it('should not mutate the original object', () => {
    const date1 = DateTime.parse('2000-06-15T10:20:30.0');
    const date2 = date1.add(6, DateTime.Unit.MONTH);
    date1.should.eql(DateTime.parse('2000-06-15T10:20:30.0'));
    date2.should.eql(DateTime.parse('2000-12-15T10:20:30.0'));
  });

  it('should return a different object (copy)', () => {
    const date1 = DateTime.parse('2000-06-15T10:20:30.0');
    const date2 = date1.add(0, DateTime.Unit.SECOND);
    date1.should.eql(date2);
    date1.should.not.equal(date2);
  });
});

describe('DateTime.differenceBetween', () => {
  it('should return null if passed a non-DateTime object', () => {
    const a = DateTime.parse('2018-01-23T01:41:00');
    const b = '2018-01-23T01:41:00';
    should.not.exist(a.differenceBetween(b, DateTime.Unit.YEAR));
  });

  it('should calculate time between two full specified dates', () => {
    let a = DateTime.parse('2009-06-15T12:37:45.0');
    let b = DateTime.parse('2009-06-15T12:37:45.0');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(0));

    a = DateTime.parse('2009-06-15T12:37:45.123');
    b = DateTime.parse('2009-06-15T12:37:45.456');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(333));

    a = DateTime.parse('2009-06-15T12:37:45.100');
    b = DateTime.parse('2009-06-15T12:37:52.499');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(7));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(7399));

    a = DateTime.parse('2009-06-15T12:37:45.750');
    b = DateTime.parse('2009-06-15T12:56:17.875');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(19));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(1112));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(1112125));

    a = DateTime.parse('2009-06-15T12:37:45.0');
    b = DateTime.parse('2009-06-15T14:56:50.500');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(139));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(8345));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(8345500));

    a = DateTime.parse('2009-06-15T12:37:45.0');
    b = DateTime.parse('2009-06-20T17:56:50.500');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(5));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(125));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(7519));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(451145));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(451145500));

    a = DateTime.parse('2009-06-15T12:37:45.0');
    b = DateTime.parse('2009-07-04T12:56:50.500');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(19));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(456));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(27379));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(1642745));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(1642745500));

    a = DateTime.parse('2000-06-15T12:37:45.0');
    b = DateTime.parse('2009-07-04T12:56:50.500');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(9));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(109));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(3306));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(79344));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(4760659));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(285639545));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(285639545500));

    a = DateTime.parse('2001-01-01T00:00:00.0');
    b = DateTime.parse('2001-12-31T23:59:59.999');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(11));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(364));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8759));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(525599));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31535999));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31535999999));
  });

  it('should count the boundaries', () => {
    const a = DateTime.parse('1999-12-31T23:59:59.999');
    const b = DateTime.parse('2000-01-01T00:00:00.00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(1));
  });

  it('should handle leap year', () => {
    let a = DateTime.parse('1999-02-01T00:00:00.00');
    let b = DateTime.parse('2000-02-01T00:00:00.00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(12));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(365));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8760));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(525600));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31536000));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31536000000));

    a = DateTime.parse('2000-02-01T00:00:00.0');
    b = DateTime.parse('2001-02-01T00:00:00.0');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(12));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(366));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8784));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(527040));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31622400));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31622400000));
  });

  it('should properly calculate duration and difference for Bonnie test cases that have come up', () => {
    let a = DateTime.parse('2012-02-08T00:00:00.0+00:00');
    let b = DateTime.parse('2012-06-08T23:59:00.0+00:00');
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(121));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(121));
    a = DateTime.parse('2012-03-15T00:00:00.0+00:00');
    b = DateTime.parse('2012-07-14T23:59:00.0+00:00');
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(121));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(121));

    // NOTE: This currently evaluates differently on Travis (UTC) than locally (EST/EDT).  This is because logic in the
    // difference calculation is trying to account for DST when the local time zone is not UTC.  The difference
    // calculation needs to be updated in light of the most recent spec changes (don't normalize for TZ when calculating
    // difference for days/months/years), but this isn't the time/place to do it.  For now, if we detect travis, then
    // we don't run this part of the test.
    if (process.env.TRAVIS !== 'true') {
      a = DateTime.parse('2012-09-13T14:50:00.0-04:00');
      b = DateTime.parse('2012-12-31T23:59:59.999-05:00');
      a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(3));
      a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(3));
    }

    a = DateTime.parse('2012-09-13T14:50:00.0+00:00');
    b = DateTime.parse('2012-12-31T23:59:59.999+00:00');
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(3));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(3));
  });

  it('should handle difference in weeks using Sunday as a boundary', () => {
    let a = DateTime.parse('2012-02-04T23:59:59.999'); // Saturday
    let b = DateTime.parse('2012-02-05T00:00:00.0'); // Sunday
    a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(1));

    a = DateTime.parse('2012-02-05T00:00:00.0'); // Sunday
    b = DateTime.parse('2012-02-11T23:59:59.999'); // Saturday
    a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));

    a = DateTime.parse('2012-02-05T00:00:00.0'); // Sunday
    b = DateTime.parse('2012-02-12T00:00:00.0'); // Sunday
    a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(1));

    a = DateTime.parse('2012-02-05T00:00:00.0'); // Sunday
    b = DateTime.parse('2012-02-04T23:59:59.999'); // Saturday
    a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(-1));

    a = DateTime.parse('2012-02-11T23:59:59.999'); // Saturday
    b = DateTime.parse('2012-02-05T00:00:00.0'); // Sunday
    a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));

    a = DateTime.parse('2012-02-12T00:00:00.0'); // Sunday
    b = DateTime.parse('2012-02-05T00:00:00.0'); // Sunday
    a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(-1));
  });

  it('should handle different timezones', () => {
    const a = DateTime.parse('2001-01-01T00:00:00.0+00:00');
    const b = DateTime.parse('2000-12-31T19:00:00.0-05:00');
    // YEAR, MONTH, DAY should ignore timezone
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(-1));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(-1));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(-1));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(0));
  });

  it('should handle crossing DST in the spring', () => {
    // NOTE: Since we "spring ahead" the 2nd Sunday of March at 2:00am,
    // the difference between 1:00am EST and 3:00am EDT is only 1 hour!
    const a = DateTime.parse('2017-03-12T01:00:00.0-05:00');
    const b = DateTime.parse('2017-03-12T03:00:00.0-04:00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(60 * 60));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(60 * 60 * 1000));
  });
});

it('should handle crossing DST in the fall', () => {
  // NOTE: Since we "fall back" the 1st Sunday of November at 2:00am,
  // the difference between 1:00am EDT and 3:00am EST is actually 3 hours!
  const a = DateTime.parse('2017-11-05T01:00:00.0-04:00');
  const b = DateTime.parse('2017-11-05T03:00:00.0-05:00');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(3));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(3 * 60));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(3 * 60 * 60));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(3 * 60 * 60 * 1000));
});

it('should handle crossing DST in the spring when UTC', () => {
  // NOTE: UTC does not have DST
  const a = DateTime.parse('2017-03-12T01:00:00.0+00:00');
  const b = DateTime.parse('2017-03-12T03:00:00.0+00:00');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(2 * 60));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(2 * 60 * 60));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(2 * 60 * 60 * 1000));
});

it('should handle crossing DST in the fall when UTC', () => {
  // NOTE: UTC does not have DST
  const a = DateTime.parse('2017-11-05T01:00:00.0+00:00');
  const b = DateTime.parse('2017-11-05T03:00:00.0+00:00');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(2 * 60));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(2 * 60 * 60));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(2 * 60 * 60 * 1000));
});

it('should handle dates without minutes specified', () => {
  const a = DateTime.parse('2017-01-01T05');
  const b = DateTime.parse('2017-01-01T07');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
  // Because minute, second, and millisecond are null, the expects change
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60 + 1, 3 * 60 - 1));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(
    new Uncertainty(60 * 60 + 1, 3 * 60 * 60 - 1)
  );
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(
    new Uncertainty(60 * 60 * 1000 + 1, 3 * 60 * 60 * 1000 - 1)
  );
});

it('should handle dates without minutes specified with different time zones', () => {
  const a = new DateTime(2017, 1, 1, 7, null, null, null, 3);
  const b = new DateTime(2017, 1, 1, 7, null, null, null, 1);
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
  // Because minute, second, and millisecond are null, the expects change
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60 + 1, 3 * 60 - 1));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(
    new Uncertainty(60 * 60 + 1, 3 * 60 * 60 - 1)
  );
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(
    new Uncertainty(60 * 60 * 1000 + 1, 3 * 60 * 60 * 1000 - 1)
  );
});

describe('DateTime.durationBetween', () => {
  it('should calculate time between two full specified dates', () => {
    let a = DateTime.parse('2009-06-15T12:37:45.0');
    let b = DateTime.parse('2009-06-15T12:37:45.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(0));

    a = DateTime.parse('2009-06-15T12:37:45.999');
    b = DateTime.parse('2009-06-15T12:37:47.000');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(1001));

    a = DateTime.parse('2009-06-15T12:37:45.999');
    b = DateTime.parse('2009-06-15T12:37:52.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(6));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(6 * 1000 + 1));

    a = DateTime.parse('2009-06-15T12:37:59.0');
    b = DateTime.parse('2009-06-15T12:56:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(18));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(18 * 60 + 1));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(
      new Uncertainty((18 * 60 + 1) * 1000)
    );

    a = DateTime.parse('2009-06-15T12:59:00.0');
    b = DateTime.parse('2009-06-15T14:00:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(61));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(61 * 60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(61 * 60 * 1000));

    a = DateTime.parse('2009-06-15T23:00:00.0');
    b = DateTime.parse('2009-06-20T00:00:00.000');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(4));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(4 * 24 + 1));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty((4 * 24 + 1) * 60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty((4 * 24 + 1) * 60 * 60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(
      new Uncertainty((4 * 24 + 1) * 60 * 60 * 1000)
    );

    a = DateTime.parse('2009-06-30T00:00:00.0');
    b = DateTime.parse('2009-08-04T00:00:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(5));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(35));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(35 * 24));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(35 * 24 * 60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(35 * 24 * 60 * 60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(
      new Uncertainty(35 * 24 * 60 * 60 * 1000)
    );

    a = DateTime.parse('2000-12-31T00:00:00.0');
    b = DateTime.parse('2009-02-01T00:00:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(8));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8 * 12 + 1));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(
      new Uncertainty(Math.floor((365 * 8 + 2 + 32) / 7))
    );
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(365 * 8 + 2 + 32));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty((365 * 8 + 2 + 32) * 24));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(
      new Uncertainty((365 * 8 + 2 + 32) * 24 * 60)
    );
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(
      new Uncertainty((365 * 8 + 2 + 32) * 24 * 60 * 60)
    );
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(
      new Uncertainty((365 * 8 + 2 + 32) * 24 * 60 * 60 * 1000)
    );

    a = DateTime.parse('2001-01-01T00:00:00.0');
    b = DateTime.parse('2001-12-31T23:59:59.999');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(11));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(52)); // 52 weeks is actual 364 days
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(364));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8759));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(525599));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31535999));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31535999999));
  });

  it.skip('should handling durations with different timezones', () => {
    // need to properly handle date duration calculations with dates that supply
    // a timezone.
    let a = DateTime.parse('2011-01-02T11:00:00.0-05:00');
    let b = DateTime.parse('2011-09-29T11:01:00.0-04:00');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(270));

    a = DateTime.parse('2011-01-02T11:00:00.0-05:00');
    b = DateTime.parse('2011-09-29T10:59:00.0-04:00');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(269));
  });

  it('should handle crossing DST in the spring', () => {
    // NOTE: Since we "spring ahead" the 2nd Sunday of March at 2:00am,
    // the duration between 1:00am EST and 3:00am EDT is only 1 hour!
    const a = DateTime.parse('2017-03-12T01:00:00.0-05:00');
    const b = DateTime.parse('2017-03-12T03:00:00.0-04:00');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(60 * 60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(60 * 60 * 1000));
  });
});

it('should handle crossing DST in the fall', () => {
  // NOTE: Since we "fall back" the 1st Sunday of November at 2:00am,
  // the duration between 1:00am EDT and 3:00am EST is actually 3 hours!
  const a = DateTime.parse('2017-11-05T01:00:00.0-04:00');
  const b = DateTime.parse('2017-11-05T03:00:00.0-05:00');
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(3));
  a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(3 * 60));
  a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(3 * 60 * 60));
  a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(3 * 60 * 60 * 1000));
});

it('should handle durations ', () => {
  let a = new DateTime(2011, 1, 2, 11, 0, 0, 0, 0);
  let b = new DateTime(2011, 9, 29, 11, 1, 0, 0, 0);
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(270));

  a = new DateTime(2011, 1, 2, 11, 0, 0, 0, 0);
  b = new DateTime(2011, 9, 29, 10, 59, 0, 0, 0);
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(269));
});

it('should handle leap year', () => {
  let a = DateTime.parse('1999-02-01T00:00:00.00');
  let b = DateTime.parse('2000-02-01T00:00:00.00');
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(1));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(12));
  a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(52));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(365));
  a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8760));
  a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(525600));
  a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31536000));
  a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31536000000));

  a = DateTime.parse('2000-02-01T00:00:00.0');
  b = DateTime.parse('2001-02-01T00:00:00.0');
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(1));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(12));
  a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(52));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(366));
  a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8784));
  a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(527040));
  a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31622400));
  a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31622400000));
});

it('should handle different timezones', () => {
  const a = DateTime.parse('2001-01-01T00:00:00.0+00:00');
  const b = DateTime.parse('2000-12-31T19:00:00.0-05:00');
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(0));
});

it('should handle different timezones with no minutes specified', () => {
  const a = new DateTime(2001, 1, 1, 0, null, null, null, 0);
  const b = new DateTime(2000, 12, 31, 19, null, null, null, -5);
  a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
  a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(-1 * (60 - 1), 60 - 1));
  a.durationBetween(b, DateTime.Unit.SECOND).should.eql(
    new Uncertainty(-1 * (60 * 60 - 1), 60 * 60 - 1)
  );
  a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(
    new Uncertainty(-1 * (60 * 60 * 1000 - 1), 60 * 60 * 1000 - 1)
  );
});

// TODO: When a and b are different timezones, which do we use to count boundaries?
// 1) a's timezone
// 2) b's timezone
// 3) default timezone (right now, the environment's timezone)
// 4) UTC

it('should handle imprecision', () => {
  let a = DateTime.parse('2009-06-15T12:37:45.250');
  let b = DateTime.parse('2009-06-15T12:37:45');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-250, 749));

  a = DateTime.parse('2009-06-15T12:37:45.250');
  b = DateTime.parse('2009-06-15T12:37');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-45, 14));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-45250, 14749));

  a = DateTime.parse('2009-06-15T12:37:45.250');
  b = DateTime.parse('2009-06-15T14');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(83, 142));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(4935, 8534));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(4934750, 8534749));

  // Because no timezone offset is passed in here, it uses the timezone offset of the local environment.
  // It cannot be assumed that this date should have been on daylight savings time just by the month/day.
  a = DateTime.parse('2000-06-15T12:37:45.250');
  b = DateTime.parse('2009');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(9));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(103, 114));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(3122, 3486));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(74916, 83675));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(4494923, 5020522));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(269695335, 301231334));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(
    new Uncertainty(269695334750, 301231334749)
  );

  a = DateTime.parse('2009-06-15T12:37:45');
  b = DateTime.parse('2009-06-15T12:37:45');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-999, 999));
});

it('should return negative values for going backwards', () => {
  let a = DateTime.parse('2009-07-04T12:56:50.150');
  let b = DateTime.parse('2000-06-15T12:37:45.350');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(-9));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(-109));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(-3306));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(-79344));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(-4760659));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-285639545));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-285639544800));

  a = DateTime.parse('2009-06-15T12:37:45');
  b = DateTime.parse('2009-06-15T12:37:44.123');
  a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
  a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-1));
  a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-1876, -877));
});

describe('DateTime.sameAs', () => {
  it('should always accept cases where a is same as b', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the millisecond is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.DAY)
      .should.be.true();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:35:45.124'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the second is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.DAY)
      .should.be.true();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:35:46.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the minute is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:36:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the hour is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T13:35:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the day is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-16T12:35:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the week is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-21T12:35:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the month is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-06-15T12:35:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should properly calculate cases where the year is different', () => {
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    should(() =>
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2001-05-15T12:35:45.123'),
        DateTime.Unit.WEEK
      )
    ).throw('Invalid precision: week');
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should handle different time zones', () => {
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'))
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.MILLISECOND)
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00')
      .sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should handle imprecision correctly with missing milliseconds', () => {
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:35:45'),
        DateTime.Unit.MILLISECOND
      )
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'))
      .should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45').sameAs(
        DateTime.parse('2000-05-15T12:35:45'),
        DateTime.Unit.MILLISECOND
      )
    );
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.YEAR)
      .should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:46')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45')
      .sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should handle imprecision correctly with missing seconds', () => {
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:35'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12:35'),
        DateTime.Unit.SECOND
      )
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.SECOND
      )
    );
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35')).should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15T12:35').sameAs(
        DateTime.parse('2000-05-15T12:35'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35').sameAs(
        DateTime.parse('2000-05-15T12:35'),
        DateTime.Unit.SECOND
      )
    );
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.YEAR)
      .should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:36')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36')).should.be.false();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35')
      .sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should handle imprecision correctly with missing minutes', () => {
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12'),
        DateTime.Unit.SECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15T12'),
        DateTime.Unit.MINUTE
      )
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.SECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MINUTE
      )
    );
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12')).should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(
        DateTime.parse('2000-05-15T12'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MINUTE)
    );
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.YEAR)
      .should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T13')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13')).should.be.false();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12')
      .sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should handle imprecision correctly with missing hours', () => {
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15'),
        DateTime.Unit.SECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15'),
        DateTime.Unit.MINUTE
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05-15'),
        DateTime.Unit.HOUR
      )
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.SECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MINUTE
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.HOUR
      )
    );
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15')).should.be.true();
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.HOUR)
    );
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.YEAR)
      .should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'))
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'))
      .should.be.false();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-16')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16')).should.be.false();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15')
      .sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should handle imprecision correctly with missing days', () => {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05')));
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05'),
        DateTime.Unit.SECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05'),
        DateTime.Unit.MINUTE
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000-05'),
        DateTime.Unit.HOUR
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY)
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(
      DateTime.parse('2000-05').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.SECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MINUTE
      )
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.HOUR
      )
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
    );
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05')).should.be.true();
    should.not.exist(
      DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY)
    );
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR)
      .should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-06')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06')).should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05')
      .sameAs(DateTime.parse('2000-06'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should handle imprecision correctly with missing months', () => {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000')));
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(
        DateTime.parse('2000'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY)
    );
    should.not.exist(
      DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH)
    );
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR)
      .should.be.true();
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(
      DateTime.parse('2000').sameAs(
        DateTime.parse('2000-05-15T12:35:45.123'),
        DateTime.Unit.MILLISECOND
      )
    );
    should.not.exist(
      DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
    );
    should.not.exist(
      DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
    );
    should.not.exist(
      DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
    );
    should.not.exist(
      DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
    );
    should.not.exist(
      DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
    );
    DateTime.parse('2000')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000').sameAs(DateTime.parse('2000')).should.be.true();
    should.not.exist(
      DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MILLISECOND)
    );
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH));
    DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2001')
      .sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001')).should.be.false();
    DateTime.parse('2000')
      .sameAs(DateTime.parse('2001'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.YEAR).should.be.false();
  });

  it('should return null when something other than a DateTime is passed in', () =>
    should.not.exist(DateTime.parse('2000').sameAs({ test: 'im not a DateTime' })));
});

describe('DateTime.before', () => {
  it('should accept cases where a is before b', () => {
    DateTime.parse('2000-12-31T23:59:59.998')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-31T23:59:58.999')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-31T23:58:59.999')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-31T22:59:59.999')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-30T23:59:59.999')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-11-30T23:59:59.999')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('1999-12-31T23:59:59.999')
      .before(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
  });

  it('should reject cases where a is after b', () => {
    DateTime.parse('2000-01-01T00:00:00.001')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:01.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:01:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T01:00:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-02T00:00:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2001-01-01T00:00:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
  });

  it('should reject cases where a is b', () =>
    DateTime.parse('2000-01-01T00:00:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false());

  it('should work with different timezone offsets', () => {
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .before(DateTime.parse('2000-01-01T07:00:00.0-05:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .before(DateTime.parse('2000-01-01T06:00:00.0-05:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T07:00:00.0-05:00')
      .before(DateTime.parse('2000-01-01T12:00:00.0+01:00'))
      .should.be.false();
  });

  it('should use year precision when requested', () => {
    DateTime.parse('2000-01-01T00:00:00.0+00')
      .before(DateTime.parse('2000-06-01T00:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0+00')
      .before(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('1999-12-31T23:59:59.999+00')
      .before(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-01T00:00:00.0+00')
      .before(DateTime.parse('2000-02-15T00:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0+00')
      .before(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-01-31T23:59:59.999+00')
      .before(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.true();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .before(DateTime.parse('2000-02-15T12:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .before(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-02-14T23:59:59.999+00')
      .before(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.true();
  });

  it('should use hour precision when requested', () => {
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .before(DateTime.parse('2000-02-15T12:30:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .before(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-02-15T11:59:59.999+00')
      .before(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR)
      .should.be.true();
  });

  it('should use minute precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .before(DateTime.parse('2000-02-15T12:30:30.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .before(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-02-15T12:29:59.999+00')
      .before(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE)
      .should.be.true();
  });

  it('should use second precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .before(DateTime.parse('2000-02-15T12:30:30.500+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .before(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:29.999+00')
      .before(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND)
      .should.be.true();
  });

  it('should use millisecond precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .before(DateTime.parse('2000-02-15T12:30:30.500+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .before(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.MILLISECOND)
      .should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .before(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00').before(DateTime.parse('2000-01-01T00:00')).should.be.false();
    DateTime.parse('2000-01-01T00').before(DateTime.parse('2000-01-01T00')).should.be.false();
    DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01').before(DateTime.parse('2000-01')).should.be.false();
    DateTime.parse('2000').before(DateTime.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00').before(DateTime.parse('2000-01-01T00:00:00.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00').before(DateTime.parse('2000-01-01T00:00:00.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00').before(DateTime.parse('2000-01-01T00:00:00.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-01T00:00:00.999'))
    );
    should.not.exist(DateTime.parse('2000-01').before(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000').before(DateTime.parse('2000-01-01T00:00:00.999')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00:00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01'))
    );
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .before(DateTime.parse('2000-01-01T00:00:01.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00')
      .before(DateTime.parse('2000-01-01T00:01:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00')
      .before(DateTime.parse('2000-01-01T01:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-02T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01').before(DateTime.parse('2000-02-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000').before(DateTime.parse('2001-01-01T00:00:00.0')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00.0')
      .before(DateTime.parse('2000-01-01T00:00:01'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0')
      .before(DateTime.parse('2000-01-01T00:01'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0')
      .before(DateTime.parse('2000-01-01T01'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2001')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:01')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T01')
      .before(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-02').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-02').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2001').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:01:00.0')
      .before(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:01:00.0')
      .before(DateTime.parse('2000-01-01T00:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T01:00:00.0')
      .before(DateTime.parse('2000-01-01T00'))
      .should.be.false();
    DateTime.parse('2000-01-02T00:00:00.0').before(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0').before(DateTime.parse('2000-01')).should.be.false();
    DateTime.parse('2001-01-01T00:00:00.0').before(DateTime.parse('2000')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () =>
    should.not.exist(
      DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)
    ));

  it('should return null when something other than a DateTime is passed in', () =>
    should.not.exist(DateTime.parse('2000').before({ test: 'im not a DateTime' })));

  it('should throw an error if an invalid precision is passed in', () =>
    should.throws(() =>
      DateTime.parse('2001-01-01T00:00:00').before(DateTime.parse('2000'), DateTime.Unit.WEEK)
    ));
});

describe('DateTime.sameOrBefore', () => {
  it('should accept cases where a is before b', () => {
    DateTime.parse('2000-12-31T23:59:59.998')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-31T23:59:58.999')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-31T23:58:59.999')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-31T22:59:59.999')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-12-30T23:59:59.999')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-11-30T23:59:59.999')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('1999-12-31T23:59:59.999')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.true();
  });

  it('should reject cases where a is after b', () => {
    DateTime.parse('2000-01-01T00:00:00.001')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:01.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:01:00.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T01:00:00.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-02T00:00:00.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2001-01-01T00:00:00.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false();
  });

  it('should accept cases where a is b', () =>
    DateTime.parse('2000-01-01T00:00:00.0')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true());

  it('should work with different timezone offsets', () => {
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .sameOrBefore(DateTime.parse('2000-01-01T07:00:00.0-05:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .sameOrBefore(DateTime.parse('2000-01-01T06:00:00.0-05:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T07:00:00.0-05:00')
      .sameOrBefore(DateTime.parse('2000-01-01T12:00:00.0+01:00'))
      .should.be.false();
  });

  it('should use year precision when requested', () => {
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .sameOrBefore(DateTime.parse('1999-12-31T23:59:59.999+00'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999+00'), DateTime.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T00:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-14T23:59:59.999+00'), DateTime.Unit.DAY)
      .should.be.false();
  });

  it('should use hour precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T11:59:59.999+00'), DateTime.Unit.HOUR)
      .should.be.false();
  });

  it('should use minute precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:29:59.999+00'), DateTime.Unit.MINUTE)
      .should.be.false();
  });

  it('should use second precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:29.999+00'), DateTime.Unit.SECOND)
      .should.be.false();
  });

  it('should use millisecond precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.MILLISECOND)
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND)
      .should.be.true();
  });

  it('should return true in cases where a is b but their precision matches', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-01')).should.be.true();
    DateTime.parse('2000').sameOrBefore(DateTime.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.998'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:59.998'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T00:59:59.998'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01T23:59:59.998'))
    );
    should.not.exist(
      DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.998'))
    );
    should.not.exist(
      DateTime.parse('2000').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.998'))
    );
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00:00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000'))
    );
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:01.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:01:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00')
      .sameOrBefore(DateTime.parse('2000-01-01T01:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01')
      .sameOrBefore(DateTime.parse('2000-01-02T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01')
      .sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000').sameOrBefore(DateTime.parse('2001-01-01T00:00:00.0')).should.be.true();
  });

  it('should return null for cases where a has less precision than b with all overlapping precision fields matching', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:59.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T00:59:59.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01T23:59:59.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999'))
    );
    should.not.exist(
      DateTime.parse('2001').sameOrBefore(DateTime.parse('2001-12-31T23:59:59.999'))
    );
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00.999')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:01'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:59.999')
      .sameOrBefore(DateTime.parse('2000-01-01T00:01'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:59:59.999')
      .sameOrBefore(DateTime.parse('2000-01-01T01'))
      .should.be.true();
    DateTime.parse('2000-01-01T23:59:59.999')
      .sameOrBefore(DateTime.parse('2000-01-02'))
      .should.be.true();
    DateTime.parse('2000-01-31T23:59:59.999')
      .sameOrBefore(DateTime.parse('2000-02'))
      .should.be.true();
    DateTime.parse('2000-12-31T23:59:59.999').sameOrBefore(DateTime.parse('2001')).should.be.true();
  });

  it('should return null for cases where b has less precision than a with all overlapping precision fields matching', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01'))
    );
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00.999'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:01')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:59.999'))
      .should.be.false();
    DateTime.parse('2000-01-01T01')
      .sameOrBefore(DateTime.parse('2000-01-01T00:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-01-02')
      .sameOrBefore(DateTime.parse('2000-01-01T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-02')
      .sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2001')
      .sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:01:00')
      .sameOrBefore(DateTime.parse('2000-01-01T00:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T01:00:00')
      .sameOrBefore(DateTime.parse('2000-01-01T00'))
      .should.be.false();
    DateTime.parse('2000-01-02T00:00:00')
      .sameOrBefore(DateTime.parse('2000-01-01'))
      .should.be.false();
    DateTime.parse('2000-02-01T00:00:00').sameOrBefore(DateTime.parse('2000-01')).should.be.false();
    DateTime.parse('2001-01-01T00:00:00').sameOrBefore(DateTime.parse('2000')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () =>
    should.not.exist(
      DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)
    ));

  it('should return null when something other than a DateTime is passed in', () =>
    should.not.exist(DateTime.parse('2000').sameOrBefore({ test: 'im not a DateTime' })));

  it('should throw an error if an invalid precision is passed in', () =>
    should.throws(() =>
      DateTime.parse('2001-01-01T00:00:00').sameOrBefore(DateTime.parse('2000'), DateTime.Unit.WEEK)
    ));
});

describe('DateTime.after', () => {
  it('should accept cases where a is after b', () => {
    DateTime.parse('2000-01-01T00:00:00.001')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:01.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2001-01-01T00:00:00.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
  });

  it('should reject cases where a is before b', () => {
    DateTime.parse('2000-12-31T23:59:59.998')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-31T23:59:58.999')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-31T23:58:59.999')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-31T22:59:59.999')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-30T23:59:59.999')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-11-30T23:59:59.999')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('1999-12-31T23:59:59.999')
      .after(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
  });

  it('should reject cases where a is b', () =>
    DateTime.parse('2000-01-01T00:00:00.0')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.false());

  it('should work with different timezone offsets', () => {
    DateTime.parse('2000-01-01T07:00:00.0-05:00')
      .after(DateTime.parse('2000-01-01T12:00:00.0+01:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .after(DateTime.parse('2000-01-01T06:00:00.0-05:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .after(DateTime.parse('2000-01-01T07:00:00.0-05:00'))
      .should.be.false();
  });

  it('should use year precision when requested', () => {
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .after(DateTime.parse('2000-01-01T00:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .after(DateTime.parse('2000-01-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.false();
    DateTime.parse('2000-06-01T00:00:00.0+00')
      .after(DateTime.parse('1999-12-31T23:59:59.999+00'), DateTime.Unit.YEAR)
      .should.be.true();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .after(DateTime.parse('2000-02-01T00:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .after(DateTime.parse('2000-02-01T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .after(DateTime.parse('2000-01-31T23:59:59.999+00'), DateTime.Unit.MONTH)
      .should.be.true();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .after(DateTime.parse('2000-02-15T00:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .after(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .after(DateTime.parse('2000-02-14T23:59:59.999+00'), DateTime.Unit.DAY)
      .should.be.true();
  });

  it('should use hour precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .after(DateTime.parse('2000-02-15T12:00:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .after(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.HOUR)
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .after(DateTime.parse('2000-02-15T11:59:59.999+00'), DateTime.Unit.HOUR)
      .should.be.true();
  });

  it('should use minute precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .after(DateTime.parse('2000-02-15T12:30:00.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .after(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.MINUTE)
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .after(DateTime.parse('2000-02-15T12:29:59.999+00'), DateTime.Unit.MINUTE)
      .should.be.true();
  });

  it('should use second precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .after(DateTime.parse('2000-02-15T12:30:30.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .after(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.SECOND)
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .after(DateTime.parse('2000-02-15T12:30:29.999+00'), DateTime.Unit.SECOND)
      .should.be.true();
  });

  it('should use millisecond precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .after(DateTime.parse('2000-02-15T12:30:30.0+00'))
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .after(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND)
      .should.be.true();
  });

  it('should return false in cases where a is b, with unknown values but the precision level is matching', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .after(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00').after(DateTime.parse('2000-01-01T00:00')).should.be.false();
    DateTime.parse('2000-01-01T00').after(DateTime.parse('2000-01-01T00')).should.be.false();
    DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01').after(DateTime.parse('2000-01')).should.be.false();
    DateTime.parse('2000').after(DateTime.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00').after(DateTime.parse('2000-01-01T00:00:00.0'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00').after(DateTime.parse('2000-01-01T00:00:00.0'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00').after(DateTime.parse('2000-01-01T00:00:00.0'))
    );
    should.not.exist(DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000-01').after(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000').after(DateTime.parse('2000-01-01T00:00:00.0')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00:00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00'))
    );
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:01')
      .after(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T01').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-02').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-02').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2001').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01.0')
      .after(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0')
      .after(DateTime.parse('2000-01-01T00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0').after(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0').after(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').after(DateTime.parse('2000-01')).should.be.true();
    DateTime.parse('2001-01-01T00:00:00.0').after(DateTime.parse('2000')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .after(DateTime.parse('2000-01-01T00:00:01.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00')
      .after(DateTime.parse('2000-01-01T00:01:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00')
      .after(DateTime.parse('2000-01-01T01:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-02T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01').after(DateTime.parse('2000-02-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000').after(DateTime.parse('2001-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00.0')
      .after(DateTime.parse('2000-01-01T00:00:01'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0')
      .after(DateTime.parse('2000-01-01T00:01'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0')
      .after(DateTime.parse('2000-01-01T01'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2001')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () =>
    should.not.exist(
      DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)
    ));

  it('should return null when something other than a DateTime is passed in', () =>
    should.not.exist(DateTime.parse('2000').after({ test: 'im not a DateTime' })));

  it('should throw an error if an invalid precision is passed in', () =>
    should.throws(() =>
      DateTime.parse('2001-01-01T00:00:00').after(DateTime.parse('2000'), DateTime.Unit.WEEK)
    ));
});

describe('DateTime.sameOrAfter', () => {
  it('should accept cases where a is after b', () => {
    DateTime.parse('2000-01-01T00:00:00.001')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00:01.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
    DateTime.parse('2001-01-01T00:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true();
  });

  it('should reject cases where a is before b', () => {
    DateTime.parse('2000-12-31T23:59:59.998')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-31T23:59:58.999')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-31T23:58:59.999')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-31T22:59:59.999')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-12-30T23:59:59.999')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('2000-11-30T23:59:59.999')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
    DateTime.parse('1999-12-31T23:59:59.999')
      .sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999'))
      .should.be.false();
  });

  it('should accept cases where a is b', () =>
    DateTime.parse('2000-01-01T00:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
      .should.be.true());

  it('should work with different timezone offsets', () => {
    DateTime.parse('2000-01-01T07:00:00.0-05:00')
      .sameOrAfter(DateTime.parse('2000-01-01T12:00:00.0+01:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .sameOrAfter(DateTime.parse('2000-01-01T06:00:00.0-05:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00')
      .sameOrAfter(DateTime.parse('2000-01-01T07:00:00.0-05:00'))
      .should.be.false();
  });

  it('should use year precision when requested', () => {
    DateTime.parse('2000-01-01T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.true();
    DateTime.parse('1999-12-31T23:59:59.999+00')
      .sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    DateTime.parse('2000-02-01T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.true();
    DateTime.parse('2000-01-31T23:59:59.999+00')
      .sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.true();
    DateTime.parse('2000-02-14T23:59:59.999+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY)
      .should.be.false();
  });

  it('should use hour precision when requested', () => {
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:00.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:00:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR)
      .should.be.true();
    DateTime.parse('2000-02-15T11:59:59.999+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR)
      .should.be.false();
  });

  it('should use minute precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:00.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE)
      .should.be.true();
    DateTime.parse('2000-02-15T12:29:59.999+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE)
      .should.be.false();
  });

  it('should use second precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND)
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:29.999+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND)
      .should.be.false();
  });

  it('should use millisecond precision when requested', () => {
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'))
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.MILLISECOND)
      .should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND)
      .should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00')
      .sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND)
      .should.be.true();
  });

  it('should return true in cases where a is b and precision matches', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:00')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00').sameOrAfter(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    DateTime.parse('2000').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00:59.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00').sameOrAfter(DateTime.parse('2000-01-01T00:59:59.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01T23:59:59.999'))
    );
    should.not.exist(
      DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-01-31T23:59:59.999'))
    );
    should.not.exist(DateTime.parse('2000').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00:00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01'))
    );
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', () => {
    DateTime.parse('2000-01-01T00:00:01')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00.999'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:01')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:59.999'))
      .should.be.true();
    DateTime.parse('2000-01-01T01')
      .sameOrAfter(DateTime.parse('2000-01-01T00:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-01-02')
      .sameOrAfter(DateTime.parse('2000-01-01T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2000-02')
      .sameOrAfter(DateTime.parse('2000-01-31T23:59:59.999'))
      .should.be.true();
    DateTime.parse('2001').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
  });

  it('should return null for cases where a has less precision than b with all overlapping precision fields matching', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:01').sameOrAfter(DateTime.parse('2000-01-01T00:00:01.0'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:01').sameOrAfter(DateTime.parse('2000-01-01T00:01:00.0'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T01').sameOrAfter(DateTime.parse('2000-01-01T01:00:00.0'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
    );
    should.not.exist(
      DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0'))
    );
    should.not.exist(DateTime.parse('2000').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')));
  });

  it('should accept cases where b has unknown values but a is still deterministicly after or same as b', () => {
    DateTime.parse('2000-01-01T00:00:01.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00'))
      .should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01T00'))
      .should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0')
      .sameOrAfter(DateTime.parse('2000-01-01'))
      .should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    DateTime.parse('2001-01-01T00:00:00.0').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should return null for cases where b has less precision than a with all overlapping precision fields matching', () => {
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:00.999').sameOrAfter(DateTime.parse('2000-01-01T00:00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:00:59.999').sameOrAfter(DateTime.parse('2000-01-01T00:00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T00:59:59.999').sameOrAfter(DateTime.parse('2000-01-01T00'))
    );
    should.not.exist(
      DateTime.parse('2000-01-01T23:59:59.999').sameOrAfter(DateTime.parse('2000-01-01'))
    );
    should.not.exist(
      DateTime.parse('2000-01-31T23:59:59.999').sameOrAfter(DateTime.parse('2000-01'))
    );
    should.not.exist(DateTime.parse('2000-12-31T23:59:59.999').sameOrAfter(DateTime.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:01.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00')
      .sameOrAfter(DateTime.parse('2000-01-01T00:01:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01T00')
      .sameOrAfter(DateTime.parse('2000-01-01T01:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01-01')
      .sameOrAfter(DateTime.parse('2000-01-02T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000-01')
      .sameOrAfter(DateTime.parse('2000-02-01T00:00:00.0'))
      .should.be.false();
    DateTime.parse('2000').sameOrAfter(DateTime.parse('2001-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', () => {
    DateTime.parse('2000-01-01T00:00:00.999')
      .sameOrAfter(DateTime.parse('2000-01-01T00:00:01'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:00:59.999')
      .sameOrAfter(DateTime.parse('2000-01-01T00:01'))
      .should.be.false();
    DateTime.parse('2000-01-01T00:59:59.999')
      .sameOrAfter(DateTime.parse('2000-01-01T01'))
      .should.be.false();
    DateTime.parse('2000-01-01T23:59:59.999')
      .sameOrAfter(DateTime.parse('2000-01-02'))
      .should.be.false();
    DateTime.parse('2000-01-31T23:59:59.999')
      .sameOrAfter(DateTime.parse('2000-02'))
      .should.be.false();
    DateTime.parse('2000-12-31T23:59:59.999').sameOrAfter(DateTime.parse('2001')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () =>
    should.not.exist(
      DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)
    ));

  it('should return null when something other than a DateTime is passed in', () =>
    should.not.exist(DateTime.parse('2000').sameOrAfter({ test: 'im not a DateTime' })));

  it('should throw an error if an invalid precision is passed in', () =>
    should.throws(() =>
      DateTime.parse('2001-01-01T00:00:00').sameOrAfter(DateTime.parse('2000'), DateTime.Unit.WEEK)
    ));
});

describe('DateTime.getDate', () => {
  it('should properly extract the date from fully specified datetimes', () => {
    const d = DateTime.parse('2012-10-25T12:55:14.456+00').getDate();
    d.year.should.equal(2012);
    d.month.should.equal(10);
    d.day.should.equal(25);
  });

  it('should properly extract the date from datetime without time', () => {
    const d = DateTime.parse('2012-10-25').getDate();
    d.year.should.equal(2012);
    d.month.should.equal(10);
    d.day.should.equal(25);
  });

  it('should properly extract the date from datetime without days', () => {
    const d = DateTime.parse('2012-10').getDate();
    d.year.should.equal(2012);
    d.month.should.equal(10);
    should.not.exist(d.day);
  });

  it('should properly extract the date from datetime without months', () => {
    const d = DateTime.parse('2012').getDate();
    d.year.should.equal(2012);
    should.not.exist(d.month);
    should.not.exist(d.day);
  });
});

describe('DateTime.getTime', () => {
  it('should properly extract the time from fully specified datetimes', () => {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    t.minute.should.equal(55);
    t.second.should.equal(14);
    t.millisecond.should.equal(456);
    should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without milliseconds', () => {
    const t = DateTime.parse('2012-10-25T12:55:14+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    t.minute.should.equal(55);
    t.second.should.equal(14);
    should.not.exist(t.millisecond);
    should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without seconds', () => {
    const t = DateTime.parse('2012-10-25T12:55+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    t.minute.should.equal(55);
    should.not.exist(t.second);
    should.not.exist(t.millisecond);
    should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without minutes', () => {
    const t = DateTime.parse('2012-10-25T12+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    should.not.exist(t.minute);
    should.not.exist(t.second);
    should.not.exist(t.millisecond);
    should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without hours', () => {
    const t = DateTime.parse('2012-10-25T+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    should.not.exist(t.hour);
    should.not.exist(t.minute);
    should.not.exist(t.second);
    should.not.exist(t.millisecond);
    should(t.timezoneOffset).be.null();
  });
});

describe('DateTime.reducedPrecision', () => {
  it('should properly reduce to year precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.YEAR);
    reduced.year.should.equal(2012);
    should.not.exist(reduced.month);
    should.not.exist(reduced.day);
    should.not.exist(reduced.hour);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to month precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.MONTH);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    should.not.exist(reduced.day);
    should.not.exist(reduced.hour);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to day precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.DAY);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    should.not.exist(reduced.hour);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to hour precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.HOUR);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to minute precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(
      DateTime.Unit.MINUTE
    );
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    reduced.minute.should.equal(55);
    should.not.exist(reduced.second);
    should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to second precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(
      DateTime.Unit.SECOND
    );
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    reduced.minute.should.equal(55);
    reduced.second.should.equal(14);
    should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to millisecond precision', () => {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(
      DateTime.Unit.MILLISECOND
    );
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    reduced.minute.should.equal(55);
    reduced.second.should.equal(14);
    reduced.millisecond.should.equal(456);
  });
});

describe('DateTime.getPrecisionValue', () => {
  it('should properly get precision value for years', () => {
    DateTime.parse('2012').getPrecisionValue().should.equal(4);
  });

  it('should properly get precision value for months', () => {
    DateTime.parse('2012-10').getPrecisionValue().should.equal(6);
  });

  it('should properly get precision value for days', () => {
    DateTime.parse('2012-10-25').getPrecisionValue().should.equal(8);
  });

  it('should properly get precision value for hours', () => {
    DateTime.parse('2012-10-25T12').getPrecisionValue().should.equal(10);
  });

  it('should properly get precision value for minutes', () => {
    DateTime.parse('2012-10-25T12:55').getPrecisionValue().should.equal(12);
  });

  it('should properly get precision value for seconds', () => {
    DateTime.parse('2012-10-25T12:55:14').getPrecisionValue().should.equal(14);
  });

  it('should properly get precision value for milliseconds', () => {
    DateTime.parse('2012-10-25T12:55:14.456').getPrecisionValue().should.equal(17);
  });

  it('should properly get time precision value for hours', () => {
    DateTime.parse('0000-01-01T12').getPrecisionValue().should.equal(2);
  });

  it('should properly get time precision value for minutes', () => {
    DateTime.parse('0000-01-01T12:55').getPrecisionValue().should.equal(4);
  });

  it('should properly get time precision value for seconds', () => {
    DateTime.parse('0000-01-01T12:55:14').getPrecisionValue().should.equal(6);
  });

  it('should properly get time precision value for milliseconds', () => {
    DateTime.parse('0000-01-01T12:55:14.456').getPrecisionValue().should.equal(9);
  });
});
