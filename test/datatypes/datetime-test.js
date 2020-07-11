/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const { DateTime } = require('../../lib/datatypes/datetime');
const { Uncertainty } = require('../../lib/datatypes/uncertainty');

const tzDate = function(y, mo, d, h, mi, s, ms, offset) {
  if ((offset == null)) { offset = ((new Date()).getTimezoneOffset() / 60) * -1; }
  return new Date(Date.UTC(y, mo, d, h, mi, s, ms) - (offset * 60 * 60 * 1000));
};

describe('DateTime', function() {

  it('should properly set all properties when constructed', function() {
    const d = new DateTime(2000, 12, 1, 3, 25, 59, 246, 5.5);
    d.year.should.equal(2000);
    d.month.should.equal(12);
    d.day.should.equal(1);
    d.hour.should.equal(3);
    d.minute.should.equal(25);
    d.second.should.equal(59);
    d.millisecond.should.equal(246);
    return d.timezoneOffset.should.equal(5.5);
  });

  it('should leave unset properties as undefined', function() {
    const d = new DateTime(2000);
    d.year.should.equal(2000);
    d.timezoneOffset.should.equal(((new Date()).getTimezoneOffset() / 60) * -1);
    should.not.exist(d.month);
    should.not.exist(d.day);
    should.not.exist(d.hour);
    should.not.exist(d.minute);
    should.not.exist(d.second);
    return should.not.exist(d.millisecond);
  });

  it('should parse yyyy', function() {
    const d = DateTime.parse('2012');
    return d.should.eql(new DateTime(2012));
  });

  it('should parse yyyy-mm', function() {
    const d = DateTime.parse('2012-10');
    return d.should.eql(new DateTime(2012, 10));
  });

  it('should parse yyyy-mm-dd', function() {
    const d = DateTime.parse('2012-10-25');
    return d.should.eql(new DateTime(2012, 10, 25));
  });

  it('should parse yyyy-mm-ddThh with and without timezone offset', function() {
    let d = DateTime.parse('2012-10-25T12');
    d.should.eql(new DateTime(2012, 10, 25, 12));
    d = DateTime.parse('2012-10-25T12-05');
    d.should.eql(new DateTime(2012, 10, 25, 12, null, null, null, -5));
    d = DateTime.parse('2012-10-25T12-05:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, null, null, null, -5.5));
    d = DateTime.parse('2012-10-25T12Z');
    return d.should.eql(new DateTime(2012, 10, 25, 12, null, null, null, 0));
  });

  it('should parse yyyy-mm-ddThh:mm with and without timezone offset', function() {
    let d = DateTime.parse('2012-10-25T12:55');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55));
    d = DateTime.parse('2012-10-25T12:55+05');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, null, null, 5));
    d = DateTime.parse('2012-10-25T12:55+05:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, null, null, 5.5));
    d = DateTime.parse('2012-10-25T12:55Z');
    return d.should.eql(new DateTime(2012, 10, 25, 12, 55, null, null, 0));
  });

  it('should parse yyyy-mm-ddThh:mm:ss with and without timezone offset', function() {
    let d = DateTime.parse('2012-10-25T12:55:14');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14));
    d = DateTime.parse('2012-10-25T12:55:14+01');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, null, 1));
    d = DateTime.parse('2012-10-25T12:55:14+01:30');
    d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, null, 1.5));
    d = DateTime.parse('2012-10-25T12:55:14Z');
    return d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, null, 0));
  });

  it('should parse yyyy-mm-ddThh:mm:ss.s with and without timezone offset', function() {
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
    return d.should.eql(new DateTime(2012, 10, 25, 12, 55, 14, 953, 0));
  });

  it('should toString yyyy', function() {
    const d = new DateTime(2012);
    return d.toString().should.eql('2012');
  });

  it('should toString yyyy-mm', function() {
    const d = new DateTime(2012, 10);
    return d.toString().should.eql('2012-10');
  });

  it('should toString yyyy-mm-dd', function() {
    const d = new DateTime(2012, 10, 25);
    return d.toString().should.eql('2012-10-25');
  });

  it('should toString yyyy-mm-ddThh', function() {
    const d = new DateTime(2012, 10, 25, 12, null, null, null, -5);
    return d.toString().should.eql('2012-10-25T12-05:00');
  });

  it('should toString yyyy-mm-ddThh:mm', function() {
    const d = new DateTime(2012, 10, 25, 12, 55, null, null, -5);
    return d.toString().should.eql('2012-10-25T12:55-05:00');
  });

  it('should toString yyyy-mm-ddThh:mm:ss', function() {
    const d = new DateTime(2012, 10, 25, 12, 55, 14, null, -5);
    return d.toString().should.eql('2012-10-25T12:55:14-05:00');
  });

  it('should toString yyyy-mm-ddThh:mm:ss.sss', function() {
    let d = new DateTime(2012, 10, 25, 12, 55, 14, 9, -5);
    d.toString().should.eql('2012-10-25T12:55:14.009-05:00');

    d = new DateTime(2012, 10, 25, 12, 55, 14, 95, -5);
    d.toString().should.eql('2012-10-25T12:55:14.095-05:00');

    d = new DateTime(2012, 10, 25, 12, 55, 14, 953, -5);
    return d.toString().should.eql('2012-10-25T12:55:14.953-05:00');
  });

  it('should be null when parsing non-string', () => should(DateTime.parse(20121025)).be.null());

  it('should be null when parsing invalid string format', () => should(DateTime.parse('20121025')).be.null());

  it('should be null when parsing invalid date/time values', function() {
    should(DateTime.parse('0000-00-00')).be.null();
    return should(DateTime.parse('2000-11-31T23:59:59.999')).be.null();
  });

  it.skip('should be null when ms field contains non-numeric characters after thousandths place', () => should(DateTime.parse('2000-11-30T23:59:59.999abc')).be.null());

  it('should not parse null input', () => should.not.exist(DateTime.parse(null)));

  it('should construct from a javascript date', () => DateTime.fromJSDate(new Date(1999, 1, 16, 13, 56, 24, 123)).should.eql(DateTime.parse('1999-02-16T13:56:24.123')));

  it('should construct from a javascript date into a target timezone', function() {
    DateTime.fromJSDate(new Date(Date.UTC(1999, 1, 16, 13, 56, 24, 123)), -5).should.eql(DateTime.parse('1999-02-16T08:56:24.123-05:00'));
    return DateTime.fromJSDate(new Date(Date.UTC(1999, 1, 16, 13, 56, 24, 123)), +4.5).should.eql(DateTime.parse('1999-02-16T18:26:24.123+04:30'));
  });

  it('should copy a fully define DateTime', function() {
    const original = DateTime.parse('1999-02-16T13:56:24.123+04:30');
    const copy = original.copy();
    copy.should.eql(original);
    return copy.should.not.equal(original);
  });

  it('should copy an imprecise DateTime', function() {
    const original = DateTime.parse('1999-02');
    const copy = original.copy();
    copy.should.eql(original);
    return copy.should.not.equal(original);
  });

  it('should convert to other timezone offsets', function() {
    const original = DateTime.parse('1999-02-16T13:56:24.123+04:30');
    const converted = original.convertToTimezoneOffset(-5);
    converted.should.not.eql(original);
    return converted.should.eql(DateTime.parse('1999-02-16T04:26:24.123-05:00'));
  });

  it('should know if it is precise', function() {
    DateTime.parse('2000-01-01T00:00:00.0-05:00').isPrecise().should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').isPrecise().should.be.true();
    DateTime.parse('2000-01-01T00:00:00').isPrecise().should.be.false();
    DateTime.parse('2000-01-01T00:00').isPrecise().should.be.false();
    DateTime.parse('2000-01-01T00').isPrecise().should.be.false();
    DateTime.parse('2000-01-01').isPrecise().should.be.false();
    DateTime.parse('2000-01').isPrecise().should.be.false();
    return DateTime.parse('2000').isPrecise().should.be.false();
  });

  it('should know if it is imprecise', function() {
    DateTime.parse('2000-01-01T00:00:00.0-05:00').isImprecise().should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').isImprecise().should.be.false();
    DateTime.parse('2000-01-01T00:00:00').isImprecise().should.be.true();
    DateTime.parse('2000-01-01T00:00').isImprecise().should.be.true();
    DateTime.parse('2000-01-01T00').isImprecise().should.be.true();
    DateTime.parse('2000-01-01').isImprecise().should.be.true();
    DateTime.parse('2000-01').isImprecise().should.be.true();
    return DateTime.parse('2000').isImprecise().should.be.true();
  });

  it('should correctly convert to uncertainties with JavaScript dates', function() {
    const preciseUncertainty = DateTime.parse('2000-02-25T12:15:43.123').toUncertainty();
    preciseUncertainty.isPoint().should.be.true();
    preciseUncertainty.low.should.eql(tzDate(2000, 1, 25, 12, 15, 43, 123));
    preciseUncertainty.high.should.eql(tzDate(2000, 1, 25, 12, 15, 43, 123));

    const toSecond = DateTime.parse('2000-02-25T12:15:43').toUncertainty();
    toSecond.isPoint().should.be.false();
    toSecond.low.should.eql(tzDate(2000, 1, 25, 12, 15, 43, 0));
    toSecond.high.should.eql(tzDate(2000, 1, 25, 12, 15, 43, 999));

    const toMinute = DateTime.parse('2000-02-25T12:15').toUncertainty();
    toMinute.isPoint().should.be.false();
    toMinute.low.should.eql(tzDate(2000, 1, 25, 12, 15, 0, 0));
    toMinute.high.should.eql(tzDate(2000, 1, 25, 12, 15, 59, 999));

    const toHour = DateTime.parse('2000-02-25T12').toUncertainty();
    toHour.isPoint().should.be.false();
    toHour.low.should.eql(tzDate(2000, 1, 25, 12, 0, 0, 0));
    toHour.high.should.eql(tzDate(2000, 1, 25, 12, 59, 59, 999));

    const toDay = DateTime.parse('2000-02-25').toUncertainty();
    toDay.isPoint().should.be.false();
    toDay.low.should.eql(tzDate(2000, 1, 25, 0, 0, 0, 0));
    toDay.high.should.eql(tzDate(2000, 1, 25, 23, 59, 59, 999));

    const toMonthLeapYear = DateTime.parse('2000-02').toUncertainty();
    toMonthLeapYear.isPoint().should.be.false();
    toMonthLeapYear.low.should.eql(tzDate(2000, 1, 1, 0, 0, 0, 0));
    toMonthLeapYear.high.should.eql(tzDate(2000, 1, 29, 23, 59, 59, 999));

    const toMonthNonLeapYear = DateTime.parse('1999-02').toUncertainty();
    toMonthNonLeapYear.isPoint().should.be.false();
    toMonthNonLeapYear.low.should.eql(tzDate(1999, 1, 1, 0, 0, 0, 0));
    toMonthNonLeapYear.high.should.eql(tzDate(1999, 1, 28, 23, 59, 59, 999));

    const toYear = DateTime.parse('2000').toUncertainty();
    toYear.isPoint().should.be.false();
    toYear.low.should.eql(tzDate(2000, 0, 1, 0, 0, 0, 0));
    return toYear.high.should.eql(tzDate(2000, 11, 31, 23, 59, 59, 999));
  });

  it('should convert to javascript Date', () => DateTime.parse('2012-02-25T12:55:14.456').toJSDate().should.eql(tzDate(2012, 1, 25, 12, 55, 14, 456)));

  it('should convert to javascript Date w/ time zone offsets', function() {
    DateTime.parse('2012-10-25T12:55:14.456+04:30').toJSDate().should.eql(new Date('2012-10-25T12:55:14.456+04:30'));
    DateTime.parse('2012-10-25T12:55:14.456+00:00').toJSDate().should.eql(new Date('2012-10-25T12:55:14.456Z'));
    return DateTime.parse('2012-10-25T12:55:14.0-05').toJSDate().should.eql(new Date('25 Oct 2012 12:55:14 EST'));
  });

  return it('should floor unknown values when it converts to javascript Date', () => DateTime.parse('2012').toJSDate().should.eql(tzDate(2012, 0, 1, 0, 0, 0, 0)));
});

describe('DateTime.add', function() {

  it('should add units for simple cases', function() {
    const simple = DateTime.parse('2000-06-15T10:20:30.555');
    simple.add(1, DateTime.Unit.YEAR).should.eql(DateTime.parse('2001-06-15T10:20:30.555'));
    simple.add(1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-07-15T10:20:30.555'));
    simple.add(1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06-16T10:20:30.555'));
    simple.add(1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-15T11:20:30.555'));
    simple.add(1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T10:21:30.555'));
    simple.add(1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:20:31.555'));
    return simple.add(1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:30.556'));
  });

  it('should subtract units for simple cases', function() {
    const simple = DateTime.parse('2000-06-15T10:20:30.555');
    simple.add(-1, DateTime.Unit.YEAR).should.eql(DateTime.parse('1999-06-15T10:20:30.555'));
    simple.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-05-15T10:20:30.555'));
    simple.add(-1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06-14T10:20:30.555'));
    simple.add(-1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-15T09:20:30.555'));
    simple.add(-1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T10:19:30.555'));
    simple.add(-1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:20:29.555'));
    return simple.add(-1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:30.554'));
  });

  it('should rollover when you add past a boundary', function() {
    const almostMidnight = DateTime.parse('2000-12-31T23:59:59.999');
    almostMidnight.add(1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2001-01-31T23:59:59.999'));
    almostMidnight.add(1, DateTime.Unit.DAY).should.eql(DateTime.parse('2001-01-01T23:59:59.999'));
    almostMidnight.add(1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2001-01-01T00:59:59.999'));
    almostMidnight.add(1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2001-01-01T00:00:59.999'));
    almostMidnight.add(1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2001-01-01T00:00:00.999'));
    return almostMidnight.add(1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2001-01-01T00:00:00.0'));
  });

  it('should rollover when you add past a boundary w/ timezone offsets', function() {
    const almostMidnight = DateTime.parse('2000-12-31T23:59:59.999+00:00');
    almostMidnight.add(1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2001-01-31T23:59:59.999+00:00'));
    almostMidnight.add(1, DateTime.Unit.DAY).should.eql(DateTime.parse('2001-01-01T23:59:59.999+00:00'));
    almostMidnight.add(1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2001-01-01T00:59:59.999+00:00'));
    almostMidnight.add(1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2001-01-01T00:00:59.999+00:00'));
    almostMidnight.add(1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2001-01-01T00:00:00.999+00:00'));
    return almostMidnight.add(1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2001-01-01T00:00:00.0+00:00'));
  });

  it('should rollover when you subtract past a boundary', function() {
    const midnight = DateTime.parse('2001-01-01T00:00:00.0');
    midnight.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-12-01T00:00:00.0'));
    midnight.add(-1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-12-31T00:00:00.0'));
    midnight.add(-1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-12-31T23:00:00.0'));
    midnight.add(-1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-12-31T23:59:00.0'));
    midnight.add(-1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-12-31T23:59:59.0'));
    return midnight.add(-1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-12-31T23:59:59.999'));
  });

  it('should rollover when you subtract past a boundary w/ timezone offsets', function() {
    const midnight = DateTime.parse('2001-01-01T00:00:00.0+00:00');
    midnight.add(-1, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000-12-01T00:00:00.0+00:00'));
    midnight.add(-1, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-12-31T00:00:00.0+00:00'));
    midnight.add(-1, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-12-31T23:00:00.0+00:00'));
    midnight.add(-1, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-12-31T23:59:00.0+00:00'));
    midnight.add(-1, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-12-31T23:59:59.0+00:00'));
    return midnight.add(-1, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-12-31T23:59:59.999+00:00'));
  });

  it('should still work for imprecise numbers, when adding to a defined field', function() {
    DateTime.parse('2000-06-15T10:20:40').add(30, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:21:10'));
    DateTime.parse('2000-06-15T10:20').add(50, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T11:10'));
    DateTime.parse('2000-06-15T10').add(14, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-16T00'));
    DateTime.parse('2000-06-15').add(30, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-07-15'));
    DateTime.parse('2000-06').add(8, DateTime.Unit.MONTH).should.eql(DateTime.parse('2001-02'));
    return DateTime.parse('2000').add(5, DateTime.Unit.YEAR).should.eql(DateTime.parse('2005'));
  });

  it('should handle adding to undefined fields', function() {
    DateTime.parse('2000-06-15T10:20:15').add(100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:15'));
    DateTime.parse('2000-06-15T10:20:15').add(2*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:17'));
    DateTime.parse('2000-06-15T10:20').add(100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20').add(1*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:21'));
    DateTime.parse('2000-06-15T10:20').add(59, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20').add(100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:21'));
    DateTime.parse('2000-06-15T10').add(100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10').add(60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T11'));
    DateTime.parse('2000-06-15T10').add(100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10').add(60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T11'));
    DateTime.parse('2000-06-15T10').add(50, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10').add(100, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T11'));
    DateTime.parse('2000-06-15').add(10, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(2*24*60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-17'));
    DateTime.parse('2000-06-15').add(10, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(1*24*60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-16'));
    DateTime.parse('2000-06-15').add(10, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(1*24*60, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-16'));
    DateTime.parse('2000-06-15').add(10, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(30, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-16'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(32*24*60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-07'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(32*24*60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-07'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(32*24*60, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-07'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(100*24, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-09'));
    DateTime.parse('2000-06').add(10, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-09'));
    DateTime.parse('2000').add(100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(400*24*60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(400*24*60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(400*24*60, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(400*24, DateTime.Unit.HOUR).should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(400, DateTime.Unit.DAY).should.eql(DateTime.parse('2001'));
    DateTime.parse('2000').add(10, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000'));
    return DateTime.parse('2000').add(100, DateTime.Unit.MONTH).should.eql(DateTime.parse('2008'));
  });

  it('should handle subtracting from undefined fields', function() {
    DateTime.parse('2000-06-15T10:20:15').add(-100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:15'));
    DateTime.parse('2000-06-15T10:20:15').add(-2*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20:13'));
    DateTime.parse('2000-06-15T10:20').add(-100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20').add(-1*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10:19'));
    DateTime.parse('2000-06-15T10:20').add(-59, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:20'));
    DateTime.parse('2000-06-15T10:20').add(-100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10:19'));
    DateTime.parse('2000-06-15T10').add(-100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10').add(-60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15T09'));
    DateTime.parse('2000-06-15T10').add(-100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10').add(-60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15T09'));
    DateTime.parse('2000-06-15T10').add(-50, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T10'));
    DateTime.parse('2000-06-15T10').add(-100, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15T09'));
    DateTime.parse('2000-06-15').add(-10, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(-2*24*60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06-13'));
    DateTime.parse('2000-06-15').add(-10, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(-1*24*60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06-14'));
    DateTime.parse('2000-06-15').add(-10, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(-1*24*60, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06-14'));
    DateTime.parse('2000-06-15').add(-10, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-15'));
    DateTime.parse('2000-06-15').add(-30, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06-14'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(-32*24*60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000-05'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(-32*24*60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000-05'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(-32*24*60, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000-05'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(-100*24, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000-03'));
    DateTime.parse('2000-06').add(-10, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-06'));
    DateTime.parse('2000-06').add(-100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000-03'));
    DateTime.parse('2000').add(-100, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-400*24*60*60*1000, DateTime.Unit.MILLISECOND).should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.SECOND).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-400*24*60*60, DateTime.Unit.SECOND).should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.MINUTE).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-400*24*60, DateTime.Unit.MINUTE).should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.HOUR).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-400*24, DateTime.Unit.HOUR).should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-100, DateTime.Unit.DAY).should.eql(DateTime.parse('2000'));
    DateTime.parse('2000').add(-400, DateTime.Unit.DAY).should.eql(DateTime.parse('1999'));
    DateTime.parse('2000').add(-10, DateTime.Unit.MONTH).should.eql(DateTime.parse('2000'));
    return DateTime.parse('2000').add(-100, DateTime.Unit.MONTH).should.eql(DateTime.parse('1992'));
  });

  it('should not mutate the original object', function() {
    const date1 = DateTime.parse('2000-06-15T10:20:30.0');
    const date2 = date1.add(6, DateTime.Unit.MONTH);
    date1.should.eql(DateTime.parse('2000-06-15T10:20:30.0'));
    return date2.should.eql(DateTime.parse('2000-12-15T10:20:30.0'));
  });

  return it('should return a different object (copy)', function() {
    const date1 = DateTime.parse('2000-06-15T10:20:30.0');
    const date2 = date1.add(0, DateTime.Unit.SECOND);
    date1.should.eql(date2);
    return date1.should.not.equal(date2);
  });
});

describe('DateTime.differenceBetween', function() {
  it('should return null if passed a non-DateTime object', function() {
    const a = DateTime.parse('2018-01-23T01:41:00');
    const b = '2018-01-23T01:41:00';
    return should.not.exist(a.differenceBetween(b, DateTime.Unit.YEAR));
  });

  it('should calculate time between two full specified dates', function() {
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
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31535999999));
  });

  it('should count the boundaries', function() {
    const a = DateTime.parse('1999-12-31T23:59:59.999');
    const b = DateTime.parse('2000-01-01T00:00:00.00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(1));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(1));
  });

  it('should handle leap year', function() {
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
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31622400000));
  });

  it('should properly calculate duration and difference for Bonnie test cases that have come up', function() {
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
    return a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(3));
  });

  it('should handle difference in weeks using Sunday as a boundary', function() {

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
    return a.differenceBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(-1));
  });

  it('should handle different timezones', function() {

    const a = DateTime.parse('2001-01-01T00:00:00.0+00:00');
    const b = DateTime.parse('2000-12-31T19:00:00.0-05:00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(0));
  });

  return it('should handle crossing DST in the spring', function() {
    // NOTE: Since we "spring ahead" the 2nd Sunday of March at 2:00am,
    // the difference between 1:00am EST and 3:00am EDT is only 1 hour!
    const a = DateTime.parse('2017-03-12T01:00:00.0-05:00');
    const b = DateTime.parse('2017-03-12T03:00:00.0-04:00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(60*60));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(60*60*1000));
  });
});

it('should handle crossing DST in the fall', function() {
    // NOTE: Since we "fall back" the 1st Sunday of November at 2:00am,
    // the difference between 1:00am EDT and 3:00am EST is actually 3 hours!
    const a = DateTime.parse('2017-11-05T01:00:00.0-04:00');
    const b = DateTime.parse('2017-11-05T03:00:00.0-05:00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(3));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(3*60));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(3*60*60));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(3*60*60*1000));
 });

it('should handle crossing DST in the spring when UTC', function() {
    // NOTE: UTC does not have DST
    const a = DateTime.parse('2017-03-12T01:00:00.0+00:00');
    const b = DateTime.parse('2017-03-12T03:00:00.0+00:00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(2*60));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(2*60*60));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(2*60*60*1000));
 });

it('should handle crossing DST in the fall when UTC', function() {
    // NOTE: UTC does not have DST
    const a = DateTime.parse('2017-11-05T01:00:00.0+00:00');
    const b = DateTime.parse('2017-11-05T03:00:00.0+00:00');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(2*60));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(2*60*60));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(2*60*60*1000));
 });

it('should handle dates without minutes specified', function() {
    const a = DateTime.parse('2017-01-01T05');
    const b = DateTime.parse('2017-01-01T07');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
    // Because minute, second, and millisecond are null, the expects change
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60 + 1, (3*60) - 1));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty((60*60) + 1, (3*60*60) - 1));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty((60*60*1000) + 1, (3*60*60*1000) - 1));
 });

it('should handle dates without minutes specified with different time zones', function() {
    const a = new DateTime(2017, 1, 1, 7, null, null, null, 3);
    const b = new DateTime(2017, 1, 1, 7, null, null, null, 1);
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
    // Because minute, second, and millisecond are null, the expects change
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60 + 1, (3*60) - 1));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty((60*60) + 1, (3*60*60) - 1));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty((60*60*1000) + 1, (3*60*60*1000) - 1));
 });


describe('DateTime.durationBetween', function() {
  it('should calculate time between two full specified dates', function() {
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
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty((6*1000)+1));

    a = DateTime.parse('2009-06-15T12:37:59.0');
    b = DateTime.parse('2009-06-15T12:56:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(18));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty((18*60)+1));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(((18*60)+1)*1000));

    a = DateTime.parse('2009-06-15T12:59:00.0');
    b = DateTime.parse('2009-06-15T14:00:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(61));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(61*60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(61*60*1000));

    a = DateTime.parse('2009-06-15T23:00:00.0');
    b = DateTime.parse('2009-06-20T00:00:00.000');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(4));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty((4*24)+1));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(((4*24)+1)*60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(((4*24)+1)*60*60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(((4*24)+1)*60*60*1000));

    a = DateTime.parse('2009-06-30T00:00:00.0');
    b = DateTime.parse('2009-08-04T00:00:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(5));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(35));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(35*24));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(35*24*60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(35*24*60*60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(35*24*60*60*1000));

    a = DateTime.parse('2000-12-31T00:00:00.0');
    b = DateTime.parse('2009-02-01T00:00:00.0');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(8));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty((8*12)+1));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(Math.floor(((365*8)+2+32)/7)));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty((365*8)+2+32));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(((365*8)+2+32)*24));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(((365*8)+2+32)*24*60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(((365*8)+2+32)*24*60*60));
    a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(((365*8)+2+32)*24*60*60*1000));

    a = DateTime.parse('2001-01-01T00:00:00.0');
    b = DateTime.parse('2001-12-31T23:59:59.999');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(11));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(52)); // 52 weeks is actual 364 days
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(364));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(8759));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(525599));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(31535999));
    return a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31535999999));
  });



  it.skip("should handling durations with different timezones", function() {
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
    return a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(269));
  });

  return it('should handle crossing DST in the spring', function() {
    // NOTE: Since we "spring ahead" the 2nd Sunday of March at 2:00am,
    // the duration between 1:00am EST and 3:00am EDT is only 1 hour!
    const a = DateTime.parse('2017-03-12T01:00:00.0-05:00');
    const b = DateTime.parse('2017-03-12T03:00:00.0-04:00');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(1));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(60*60));
    return a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(60*60*1000));
  });
});

it('should handle crossing DST in the fall', function() {
    // NOTE: Since we "fall back" the 1st Sunday of November at 2:00am,
    // the duration between 1:00am EDT and 3:00am EST is actually 3 hours!
    const a = DateTime.parse('2017-11-05T01:00:00.0-04:00');
    const b = DateTime.parse('2017-11-05T03:00:00.0-05:00');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(3));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(3*60));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(3*60*60));
    return a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(3*60*60*1000));
 });

it("should handle durations ", function() {

    let a = new DateTime(2011, 1, 2, 11, 0, 0, 0, 0);
    let b = new DateTime(2011, 9, 29, 11, 1, 0, 0, 0);
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(270));

    a = new DateTime(2011, 1, 2, 11, 0, 0, 0, 0);
    b = new DateTime(2011, 9, 29, 10, 59, 0, 0, 0);
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(8));
    return a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(269));
  });


it('should handle leap year', function() {
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
    return a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(31622400000));
  });

it('should handle different timezones', function() {

    const a = DateTime.parse('2001-01-01T00:00:00.0+00:00');
    const b = DateTime.parse('2000-12-31T19:00:00.0-05:00');
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    return a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(0));
  });

it('should handle different timezones with no minutes specified', function() {

    const a = new DateTime(2001,1,1,0,null,null,null,0);
    const b = new DateTime(2000,12,31,19,null,null,null,-5);
    a.durationBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.durationBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(-1*(60-1), 60-1));
    a.durationBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-1*((60*60)-1), (60*60)-1));
    return a.durationBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-1*((60*60*1000)-1), (60*60*1000)-1));
  });

    // TODO: When a and b are different timezones, which do we use to count boundaries?
    // 1) a's timezone
    // 2) b's timezone
    // 3) default timezone (right now, the environment's timezone)
    // 4) UTC

it('should handle imprecision', function() {
    let a = DateTime.parse('2009-06-15T12:37:45.250');
    let b = DateTime.parse('2009-06-15T12:37:45');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-250,749));

    a = DateTime.parse('2009-06-15T12:37:45.250');
    b = DateTime.parse('2009-06-15T12:37');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(-45,14));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-45250,14749));

    a = DateTime.parse('2009-06-15T12:37:45.250');
    b = DateTime.parse('2009-06-15T14');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(2));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(83, 142));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(4935, 8534));
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(4934750,8534749));

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
    a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(269695334750, 301231334749));

    a = DateTime.parse('2009-06-15T12:37:45');
    b = DateTime.parse('2009-06-15T12:37:45');
    a.differenceBetween(b, DateTime.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.DAY).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.HOUR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.MINUTE).should.eql(new Uncertainty(0));
    a.differenceBetween(b, DateTime.Unit.SECOND).should.eql(new Uncertainty(0));
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-999,999));
  });

it('should return negative values for going backwards', function() {
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
    return a.differenceBetween(b, DateTime.Unit.MILLISECOND).should.eql(new Uncertainty(-1876, -877));
  });


describe('DateTime.sameAs', function() {
  it('should always accept cases where a is same as b', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the millisecond is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.SECOND).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.DAY).should.be.true();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45.124'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the second is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.DAY).should.be.true();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the minute is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.DAY).should.be.true();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36:45.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the hour is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.DAY).should.be.true();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13:35:45.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the day is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the week is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-21T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the month is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.false();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the year is different', function() {
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    should(() => DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.WEEK)).throw("Invalid precision: week");
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.false();
    return DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.false();
  });

  it('should handle different time zones', function() {
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30')).should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.MILLISECOND).should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.SECOND).should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-12-31T19:35:45.123+00:00').sameAs(DateTime.parse('2001-01-01T00:05:45.123+04:30'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing milliseconds', function() {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MILLISECOND));
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.SECOND).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.YEAR).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND));
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45')).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MILLISECOND));
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.SECOND).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:45'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:46').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35:45').sameAs(DateTime.parse('2000-05-15T12:35:46'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing seconds', function() {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.SECOND));
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.YEAR).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND));
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35')).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.SECOND));
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MINUTE).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:35'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:36').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36')).should.be.false();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12:35').sameAs(DateTime.parse('2000-05-15T12:36'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing minutes', function() {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MINUTE));
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.YEAR).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE));
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12')).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MINUTE));
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.HOUR).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T12'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T13').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13')).should.be.false();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15T12').sameAs(DateTime.parse('2000-05-15T13'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing hours', function() {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.HOUR));
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.YEAR).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR));
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15')).should.be.true();
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.HOUR));
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.DAY).should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-15'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-16').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16')).should.be.false();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-05-15').sameAs(DateTime.parse('2000-05-16'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing days', function() {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY));
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR).should.be.true();
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY));
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05')).should.be.true();
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.DAY));
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.MONTH).should.be.true();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-05'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000-06'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2000-06').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06')).should.be.false();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.MONTH).should.be.false();
    return DateTime.parse('2000-05').sameAs(DateTime.parse('2000-06'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should handle imprecision correctly with missing months', function() {
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000')));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY));
    should.not.exist(DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH));
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR).should.be.true();
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123')));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH));
    DateTime.parse('2000').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.true();
    DateTime.parse('2000').sameAs(DateTime.parse('2000')).should.be.true();
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MILLISECOND));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.SECOND));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MINUTE));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.HOUR));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.DAY));
    should.not.exist(DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.MONTH));
    DateTime.parse('2000').sameAs(DateTime.parse('2000'), DateTime.Unit.YEAR).should.be.true();

    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001')).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2000-05-15T12:35:45.123').sameAs(DateTime.parse('2001'), DateTime.Unit.YEAR).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123')).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.MONTH).should.be.false();
    DateTime.parse('2001').sameAs(DateTime.parse('2000-05-15T12:35:45.123'), DateTime.Unit.YEAR).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001')).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.SECOND).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.MINUTE).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.HOUR).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.DAY).should.be.false();
    DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.MONTH).should.be.false();
    return DateTime.parse('2000').sameAs(DateTime.parse('2001'), DateTime.Unit.YEAR).should.be.false();
  });

  return it('should return null when something other than a DateTime is passed in', () => should.not.exist(DateTime.parse('2000').sameAs({test: 'im not a DateTime'})));
});

describe('DateTime.before', function() {

  it('should accept cases where a is before b', function() {
    DateTime.parse('2000-12-31T23:59:59.998').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-31T23:59:58.999').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-31T23:58:59.999').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-31T22:59:59.999').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-30T23:59:59.999').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-11-30T23:59:59.999').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    return DateTime.parse('1999-12-31T23:59:59.999').before(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
  });

  it('should reject cases where a is after b', function() {
    DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00:00:01.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00:01:00.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T01:00:00.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-02T00:00:00.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    return DateTime.parse('2001-01-01T00:00:00.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where a is b', () => DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false());

  it('should work with different timezone offsets', function() {
    DateTime.parse('2000-01-01T12:00:00.0+01:00').before(DateTime.parse('2000-01-01T07:00:00.0-05:00')).should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00').before(DateTime.parse('2000-01-01T06:00:00.0-05:00')).should.be.false();
    return DateTime.parse('2000-01-01T07:00:00.0-05:00').before(DateTime.parse('2000-01-01T12:00:00.0+01:00')).should.be.false();
  });

  it('should use year precision when requested', function() {
    DateTime.parse('2000-01-01T00:00:00.0+00').before(DateTime.parse('2000-06-01T00:00:00.0+00')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0+00').before(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR).should.be.false();
    return DateTime.parse('1999-12-31T23:59:59.999+00').before(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should use month precision when requested', function() {
    DateTime.parse('2000-02-01T00:00:00.0+00').before(DateTime.parse('2000-02-15T00:00:00.0+00')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0+00').before(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH).should.be.false();
    return DateTime.parse('2000-01-31T23:59:59.999+00').before(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH).should.be.true();
  });

  it('should use day precision when requested', function() {
    DateTime.parse('2000-02-15T00:00:00.0+00').before(DateTime.parse('2000-02-15T12:00:00.0+00')).should.be.true();
    DateTime.parse('2000-02-15T00:00:00.0+00').before(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY).should.be.false();
    return DateTime.parse('2000-02-14T23:59:59.999+00').before(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY).should.be.true();
  });

  it('should use hour precision when requested', function() {
    DateTime.parse('2000-02-15T12:00:00.0+00').before(DateTime.parse('2000-02-15T12:30:00.0+00')).should.be.true();
    DateTime.parse('2000-02-15T12:00:00.0+00').before(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR).should.be.false();
    return DateTime.parse('2000-02-15T11:59:59.999+00').before(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR).should.be.true();
  });

  it('should use minute precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:00.0+00').before(DateTime.parse('2000-02-15T12:30:30.0+00')).should.be.true();
    DateTime.parse('2000-02-15T12:30:00.0+00').before(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE).should.be.false();
    return DateTime.parse('2000-02-15T12:29:59.999+00').before(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE).should.be.true();
  });

  it('should use second precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.0+00').before(DateTime.parse('2000-02-15T12:30:30.500+00')).should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00').before(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND).should.be.false();
    return DateTime.parse('2000-02-15T12:30:29.999+00').before(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND).should.be.true();
  });

  it('should use millisecond precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.0+00').before(DateTime.parse('2000-02-15T12:30:30.500+00')).should.be.true();
    return DateTime.parse('2000-02-15T12:30:30.0+00').before(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.MILLISECOND).should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values', function() {
    DateTime.parse('2000-01-01T00:00:00').before(DateTime.parse('2000-01-01T00:00:00')).should.be.false();
    DateTime.parse('2000-01-01T00:00').before(DateTime.parse('2000-01-01T00:00')).should.be.false();
    DateTime.parse('2000-01-01T00').before(DateTime.parse('2000-01-01T00')).should.be.false();
    DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01').before(DateTime.parse('2000-01')).should.be.false();
    return DateTime.parse('2000').before(DateTime.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').before(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').before(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000-01-01T00').before(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000-01').before(DateTime.parse('2000-01-01T00:00:00.999')));
    return should.not.exist(DateTime.parse('2000').before(DateTime.parse('2000-01-01T00:00:00.999')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01T00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000-01')));
    return should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').before(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00').before(DateTime.parse('2000-01-01T00:00:01.0')).should.be.true();
    DateTime.parse('2000-01-01T00:00').before(DateTime.parse('2000-01-01T00:01:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00').before(DateTime.parse('2000-01-01T01:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-02T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01').before(DateTime.parse('2000-02-01T00:00:00.0')).should.be.true();
    return DateTime.parse('2000').before(DateTime.parse('2001-01-01T00:00:00.0')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-01-01T00:00:01')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-01-01T00:01')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-01-01T01')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2000-02')).should.be.true();
    return DateTime.parse('2000-01-01T00:00:00.0').before(DateTime.parse('2001')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:00:01').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00:01').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T01').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-02').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-02').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    return DateTime.parse('2001').before(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:01:00.0').before(DateTime.parse('2000-01-01T00:00:00')).should.be.false();
    DateTime.parse('2000-01-01T00:01:00.0').before(DateTime.parse('2000-01-01T00:00')).should.be.false();
    DateTime.parse('2000-01-01T01:00:00.0').before(DateTime.parse('2000-01-01T00')).should.be.false();
    DateTime.parse('2000-01-02T00:00:00.0').before(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0').before(DateTime.parse('2000-01')).should.be.false();
    return DateTime.parse('2001-01-01T00:00:00.0').before(DateTime.parse('2000')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () => should.not.exist(DateTime.parse('2000-01-01').before(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)));

  it('should return null when something other than a DateTime is passed in', () => should.not.exist(DateTime.parse('2000').before({test: 'im not a DateTime'})));

  return it('should throw an error if an invalid precision is passed in', () => should.throws(() => DateTime.parse('2001-01-01T00:00:00').before(DateTime.parse('2000'), DateTime.Unit.WEEK)));
});

describe('DateTime.sameOrBefore', function() {

  it('should accept cases where a is before b', function() {
    DateTime.parse('2000-12-31T23:59:59.998').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-31T23:59:58.999').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-31T23:58:59.999').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-31T22:59:59.999').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-12-30T23:59:59.999').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    DateTime.parse('2000-11-30T23:59:59.999').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
    return DateTime.parse('1999-12-31T23:59:59.999').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
  });

  it('should reject cases where a is after b', function() {
    DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00:00:01.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00:01:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01T01:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01-02T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
    return DateTime.parse('2001-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false();
  });

  it('should accept cases where a is b', () => DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true());

  it('should work with different timezone offsets', function() {
    DateTime.parse('2000-01-01T12:00:00.0+01:00').sameOrBefore(DateTime.parse('2000-01-01T07:00:00.0-05:00')).should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00').sameOrBefore(DateTime.parse('2000-01-01T06:00:00.0-05:00')).should.be.true();
    return DateTime.parse('2000-01-01T07:00:00.0-05:00').sameOrBefore(DateTime.parse('2000-01-01T12:00:00.0+01:00')).should.be.false();
  });

  it('should use year precision when requested', function() {
    DateTime.parse('2000-06-01T00:00:00.0+00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0+00')).should.be.false();
    DateTime.parse('2000-06-01T00:00:00.0+00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.0+00'), DateTime.Unit.YEAR).should.be.true();
    return DateTime.parse('2000-06-01T00:00:00.0+00').sameOrBefore(DateTime.parse('1999-12-31T23:59:59.999+00'), DateTime.Unit.YEAR).should.be.false();
  });

  it('should use month precision when requested', function() {
    DateTime.parse('2000-02-15T00:00:00.0+00').sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0+00')).should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00').sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0+00'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-02-15T00:00:00.0+00').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999+00'), DateTime.Unit.MONTH).should.be.false();
  });

  it('should use day precision when requested', function() {
    DateTime.parse('2000-02-15T12:00:00.0+00').sameOrBefore(DateTime.parse('2000-02-15T00:00:00.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:00:00.0+00').sameOrBefore(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.DAY).should.be.true();
    return DateTime.parse('2000-02-15T12:00:00.0+00').sameOrBefore(DateTime.parse('2000-02-14T23:59:59.999+00'), DateTime.Unit.DAY).should.be.false();
  });

  it('should use hour precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:00.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:00:00.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:00.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.HOUR).should.be.true();
    return DateTime.parse('2000-02-15T12:30:00.0+00').sameOrBefore(DateTime.parse('2000-02-15T11:59:59.999+00'), DateTime.Unit.HOUR).should.be.false();
  });

  it('should use minute precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:00.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.MINUTE).should.be.true();
    return DateTime.parse('2000-02-15T12:30:30.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:29:59.999+00'), DateTime.Unit.MINUTE).should.be.false();
  });

  it('should use second precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.500+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.SECOND).should.be.true();
    return DateTime.parse('2000-02-15T12:30:30.500+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:29.999+00'), DateTime.Unit.SECOND).should.be.false();
  });

  it('should use millisecond precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.500+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.MILLISECOND).should.be.true();
    return DateTime.parse('2000-02-15T12:30:30.0+00').sameOrBefore(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND).should.be.true();
  });

  it('should return true in cases where a is b but their precision matches', function() {
    DateTime.parse('2000-01-01T00:00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00')).should.be.true();
    DateTime.parse('2000-01-01T00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00')).should.be.true();
    DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-01')).should.be.true();
    return DateTime.parse('2000').sameOrBefore(DateTime.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.998')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:59.998')));
    should.not.exist(DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T00:59:59.998')));
    should.not.exist(DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01T23:59:59.998')));
    should.not.exist(DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.998')));
    return should.not.exist(DateTime.parse('2000').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.998')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01T00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000-01')));
    return should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrBefore(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:01.0')).should.be.true();
    DateTime.parse('2000-01-01T00:00').sameOrBefore(DateTime.parse('2000-01-01T00:01:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T01:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-02T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-02-01T00:00:00.0')).should.be.true();
    return DateTime.parse('2000').sameOrBefore(DateTime.parse('2001-01-01T00:00:00.0')).should.be.true();
  });

  it('should return null for cases where a has less precision than b with all overlapping precision fields matching', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').sameOrBefore(DateTime.parse('2000-01-01T00:00:59.999')));
    should.not.exist(DateTime.parse('2000-01-01T00').sameOrBefore(DateTime.parse('2000-01-01T00:59:59.999')));
    should.not.exist(DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01T23:59:59.999')));
    should.not.exist(DateTime.parse('2000-01').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999')));
    return should.not.exist(DateTime.parse('2001').sameOrBefore(DateTime.parse('2001-12-31T23:59:59.999')));
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00.999').sameOrBefore(DateTime.parse('2000-01-01T00:00:01')).should.be.true();
    DateTime.parse('2000-01-01T00:00:59.999').sameOrBefore(DateTime.parse('2000-01-01T00:01')).should.be.true();
    DateTime.parse('2000-01-01T00:59:59.999').sameOrBefore(DateTime.parse('2000-01-01T01')).should.be.true();
    DateTime.parse('2000-01-01T23:59:59.999').sameOrBefore(DateTime.parse('2000-01-02')).should.be.true();
    DateTime.parse('2000-01-31T23:59:59.999').sameOrBefore(DateTime.parse('2000-02')).should.be.true();
    return DateTime.parse('2000-12-31T23:59:59.999').sameOrBefore(DateTime.parse('2001')).should.be.true();
  });

  it('should return null for cases where b has less precision than a with all overlapping precision fields matching', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01T00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000-01')));
    return should.not.exist(DateTime.parse('2000-01-01T00:00:00.0').sameOrBefore(DateTime.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:00:01').sameOrBefore(DateTime.parse('2000-01-01T00:00:00.999')).should.be.false();
    DateTime.parse('2000-01-01T00:01').sameOrBefore(DateTime.parse('2000-01-01T00:00:59.999')).should.be.false();
    DateTime.parse('2000-01-01T01').sameOrBefore(DateTime.parse('2000-01-01T00:59:59.999')).should.be.false();
    DateTime.parse('2000-01-02').sameOrBefore(DateTime.parse('2000-01-01T23:59:59.999')).should.be.false();
    DateTime.parse('2000-02').sameOrBefore(DateTime.parse('2000-01-31T23:59:59.999')).should.be.false();
    return DateTime.parse('2001').sameOrBefore(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:00:01').sameOrBefore(DateTime.parse('2000-01-01T00:00:00')).should.be.false();
    DateTime.parse('2000-01-01T00:01:00').sameOrBefore(DateTime.parse('2000-01-01T00:00')).should.be.false();
    DateTime.parse('2000-01-01T01:00:00').sameOrBefore(DateTime.parse('2000-01-01T00')).should.be.false();
    DateTime.parse('2000-01-02T00:00:00').sameOrBefore(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00').sameOrBefore(DateTime.parse('2000-01')).should.be.false();
    return DateTime.parse('2001-01-01T00:00:00').sameOrBefore(DateTime.parse('2000')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () => should.not.exist(DateTime.parse('2000-01-01').sameOrBefore(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)));

  it('should return null when something other than a DateTime is passed in', () => should.not.exist(DateTime.parse('2000').sameOrBefore({test: 'im not a DateTime'})));

  return it('should throw an error if an invalid precision is passed in', () => should.throws(() => DateTime.parse('2001-01-01T00:00:00').sameOrBefore(DateTime.parse('2000'), DateTime.Unit.WEEK)));
});

describe('DateTime.after', function() {

  it('should accept cases where a is after b', function() {
    DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00:00:01.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    return DateTime.parse('2001-01-01T00:00:00.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
  });

  it('should reject cases where a is before b', function() {
    DateTime.parse('2000-12-31T23:59:59.998').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-31T23:59:58.999').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-31T23:58:59.999').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-31T22:59:59.999').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-30T23:59:59.999').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-11-30T23:59:59.999').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    return DateTime.parse('1999-12-31T23:59:59.999').after(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
  });

  it('should reject cases where a is b', () => DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.false());

  it('should work with different timezone offsets', function() {
    DateTime.parse('2000-01-01T07:00:00.0-05:00').after(DateTime.parse('2000-01-01T12:00:00.0+01:00')).should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00').after(DateTime.parse('2000-01-01T06:00:00.0-05:00')).should.be.false();
    return DateTime.parse('2000-01-01T12:00:00.0+01:00').after(DateTime.parse('2000-01-01T07:00:00.0-05:00')).should.be.false();
  });

  it('should use year precision when requested', function() {
    DateTime.parse('2000-06-01T00:00:00.0+00').after(DateTime.parse('2000-01-01T00:00:00.0+00')).should.be.true();
    DateTime.parse('2000-06-01T00:00:00.0+00').after(DateTime.parse('2000-01-01T00:00:00.0+00'), DateTime.Unit.YEAR).should.be.false();
    return DateTime.parse('2000-06-01T00:00:00.0+00').after(DateTime.parse('1999-12-31T23:59:59.999+00'), DateTime.Unit.YEAR).should.be.true();
  });

  it('should use month precision when requested', function() {
    DateTime.parse('2000-02-15T00:00:00.0+00').after(DateTime.parse('2000-02-01T00:00:00.0+00')).should.be.true();
    DateTime.parse('2000-02-15T00:00:00.0+00').after(DateTime.parse('2000-02-01T00:00:00.0+00'), DateTime.Unit.MONTH).should.be.false();
    return DateTime.parse('2000-02-15T00:00:00.0+00').after(DateTime.parse('2000-01-31T23:59:59.999+00'), DateTime.Unit.MONTH).should.be.true();
  });

  it('should use day precision when requested', function() {
    DateTime.parse('2000-02-15T12:00:00.0+00').after(DateTime.parse('2000-02-15T00:00:00.0+00')).should.be.true();
    DateTime.parse('2000-02-15T12:00:00.0+00').after(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.DAY).should.be.false();
    return DateTime.parse('2000-02-15T12:00:00.0+00').after(DateTime.parse('2000-02-14T23:59:59.999+00'), DateTime.Unit.DAY).should.be.true();
  });

  it('should use hour precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:00.0+00').after(DateTime.parse('2000-02-15T12:00:00.0+00')).should.be.true();
    DateTime.parse('2000-02-15T12:30:00.0+00').after(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.HOUR).should.be.false();
    return DateTime.parse('2000-02-15T12:30:00.0+00').after(DateTime.parse('2000-02-15T11:59:59.999+00'), DateTime.Unit.HOUR).should.be.true();
  });

  it('should use minute precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.0+00').after(DateTime.parse('2000-02-15T12:30:00.0+00')).should.be.true();
    DateTime.parse('2000-02-15T12:30:30.0+00').after(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.MINUTE).should.be.false();
    return DateTime.parse('2000-02-15T12:30:30.0+00').after(DateTime.parse('2000-02-15T12:29:59.999+00'), DateTime.Unit.MINUTE).should.be.true();
  });

  it('should use second precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.500+00').after(DateTime.parse('2000-02-15T12:30:30.0+00')).should.be.true();
    DateTime.parse('2000-02-15T12:30:30.500+00').after(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.SECOND).should.be.false();
    return DateTime.parse('2000-02-15T12:30:30.500+00').after(DateTime.parse('2000-02-15T12:30:29.999+00'), DateTime.Unit.SECOND).should.be.true();
  });

  it('should use millisecond precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.500+00').after(DateTime.parse('2000-02-15T12:30:30.0+00')).should.be.true();
    return DateTime.parse('2000-02-15T12:30:30.500+00').after(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND).should.be.true();
  });

  it('should return false in cases where a is b, with unknown values but the precision level is matching', function() {
    DateTime.parse('2000-01-01T00:00:00').after(DateTime.parse('2000-01-01T00:00:00')).should.be.false();
    DateTime.parse('2000-01-01T00:00').after(DateTime.parse('2000-01-01T00:00')).should.be.false();
    DateTime.parse('2000-01-01T00').after(DateTime.parse('2000-01-01T00')).should.be.false();
    DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-01')).should.be.false();
    DateTime.parse('2000-01').after(DateTime.parse('2000-01')).should.be.false();
    return DateTime.parse('2000').after(DateTime.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').after(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').after(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000-01-01T00').after(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000-01').after(DateTime.parse('2000-01-01T00:00:00.0')));
    return should.not.exist(DateTime.parse('2000').after(DateTime.parse('2000-01-01T00:00:00.0')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01T00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000-01')));
    return should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').after(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:00:01').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00:01').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T01').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-02').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-02').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    return DateTime.parse('2001').after(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:00:01.0').after(DateTime.parse('2000-01-01T00:00:00')).should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0').after(DateTime.parse('2000-01-01T00:00')).should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0').after(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0').after(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').after(DateTime.parse('2000-01')).should.be.true();
    return DateTime.parse('2001-01-01T00:00:00.0').after(DateTime.parse('2000')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00').after(DateTime.parse('2000-01-01T00:00:01.0')).should.be.false();
    DateTime.parse('2000-01-01T00:00').after(DateTime.parse('2000-01-01T00:01:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00').after(DateTime.parse('2000-01-01T01:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-02T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01').after(DateTime.parse('2000-02-01T00:00:00.0')).should.be.false();
    return DateTime.parse('2000').after(DateTime.parse('2001-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-01-01T00:00:01')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-01-01T00:01')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-01-01T01')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2000-02')).should.be.false();
    return DateTime.parse('2000-01-01T00:00:00.0').after(DateTime.parse('2001')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () => should.not.exist(DateTime.parse('2000-01-01').after(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)));

  it('should return null when something other than a DateTime is passed in', () => should.not.exist(DateTime.parse('2000').after({test: 'im not a DateTime'})));

  return it('should throw an error if an invalid precision is passed in', () => should.throws(() => DateTime.parse('2001-01-01T00:00:00').after(DateTime.parse('2000'), DateTime.Unit.WEEK)));
});

describe('DateTime.sameOrAfter', function() {

  it('should accept cases where a is after b', function() {
    DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00:00:01.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
    return DateTime.parse('2001-01-01T00:00:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true();
  });

  it('should reject cases where a is before b', function() {
    DateTime.parse('2000-12-31T23:59:59.998').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-31T23:59:58.999').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-31T23:58:59.999').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-31T22:59:59.999').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-12-30T23:59:59.999').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    DateTime.parse('2000-11-30T23:59:59.999').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
    return DateTime.parse('1999-12-31T23:59:59.999').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.false();
  });

  it('should accept cases where a is b', () => DateTime.parse('2000-01-01T00:00:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')).should.be.true());

  it('should work with different timezone offsets', function() {
    DateTime.parse('2000-01-01T07:00:00.0-05:00').sameOrAfter(DateTime.parse('2000-01-01T12:00:00.0+01:00')).should.be.true();
    DateTime.parse('2000-01-01T12:00:00.0+01:00').sameOrAfter(DateTime.parse('2000-01-01T06:00:00.0-05:00')).should.be.true();
    return DateTime.parse('2000-01-01T12:00:00.0+01:00').sameOrAfter(DateTime.parse('2000-01-01T07:00:00.0-05:00')).should.be.false();
  });

  it('should use year precision when requested', function() {
    DateTime.parse('2000-01-01T00:00:00.0+00').sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00')).should.be.false();
    DateTime.parse('2000-01-01T00:00:00.0+00').sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR).should.be.true();
    return DateTime.parse('1999-12-31T23:59:59.999+00').sameOrAfter(DateTime.parse('2000-06-01T00:00:00.0+00'), DateTime.Unit.YEAR).should.be.false();
  });

  it('should use month precision when requested', function() {
    DateTime.parse('2000-02-01T00:00:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00')).should.be.false();
    DateTime.parse('2000-02-01T00:00:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH).should.be.true();
    return DateTime.parse('2000-01-31T23:59:59.999+00').sameOrAfter(DateTime.parse('2000-02-15T00:00:00.0+00'), DateTime.Unit.MONTH).should.be.false();
  });

  it('should use day precision when requested', function() {
    DateTime.parse('2000-02-15T00:00:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00')).should.be.false();
    DateTime.parse('2000-02-15T00:00:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY).should.be.true();
    return DateTime.parse('2000-02-14T23:59:59.999+00').sameOrAfter(DateTime.parse('2000-02-15T12:00:00.0+00'), DateTime.Unit.DAY).should.be.false();
  });

  it('should use hour precision when requested', function() {
    DateTime.parse('2000-02-15T12:00:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:00.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:00:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR).should.be.true();
    return DateTime.parse('2000-02-15T11:59:59.999+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:00.0+00'), DateTime.Unit.HOUR).should.be.false();
  });

  it('should use minute precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:00.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE).should.be.true();
    return DateTime.parse('2000-02-15T12:29:59.999+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MINUTE).should.be.false();
  });

  it('should use second precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND).should.be.true();
    return DateTime.parse('2000-02-15T12:30:29.999+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.SECOND).should.be.false();
  });

  it('should use millisecond precision when requested', function() {
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00')).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.500+00'), DateTime.Unit.MILLISECOND).should.be.false();
    DateTime.parse('2000-02-15T12:30:30.500+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND).should.be.true();
    return DateTime.parse('2000-02-15T12:30:30.0+00').sameOrAfter(DateTime.parse('2000-02-15T12:30:30.0+00'), DateTime.Unit.MILLISECOND).should.be.true();
  });

  it('should return true in cases where a is b and precision matches', function() {
    DateTime.parse('2000-01-01T00:00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00:00')).should.be.true();
    DateTime.parse('2000-01-01T00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00')).should.be.true();
    DateTime.parse('2000-01-01T00').sameOrAfter(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    return DateTime.parse('2000').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.999')));
    should.not.exist(DateTime.parse('2000-01-01T00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00:59.999')));
    should.not.exist(DateTime.parse('2000-01-01T00').sameOrAfter(DateTime.parse('2000-01-01T00:59:59.999')));
    should.not.exist(DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01T23:59:59.999')));
    should.not.exist(DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-01-31T23:59:59.999')));
    return should.not.exist(DateTime.parse('2000').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01T00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000-01')));
    return should.not.exist(DateTime.parse('2000-01-01T00:00:00.001').sameOrAfter(DateTime.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', function() {
    DateTime.parse('2000-01-01T00:00:01').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.999')).should.be.true();
    DateTime.parse('2000-01-01T00:01').sameOrAfter(DateTime.parse('2000-01-01T00:00:59.999')).should.be.true();
    DateTime.parse('2000-01-01T01').sameOrAfter(DateTime.parse('2000-01-01T00:59:59.999')).should.be.true();
    DateTime.parse('2000-01-02').sameOrAfter(DateTime.parse('2000-01-01T23:59:59.999')).should.be.true();
    DateTime.parse('2000-02').sameOrAfter(DateTime.parse('2000-01-31T23:59:59.999')).should.be.true();
    return DateTime.parse('2001').sameOrAfter(DateTime.parse('2000-12-31T23:59:59.999')).should.be.true();
  });

  it('should return null for cases where a has less precision than b with all overlapping precision fields matching', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:01').sameOrAfter(DateTime.parse('2000-01-01T00:00:01.0')));
    should.not.exist(DateTime.parse('2000-01-01T00:01').sameOrAfter(DateTime.parse('2000-01-01T00:01:00.0')));
    should.not.exist(DateTime.parse('2000-01-01T01').sameOrAfter(DateTime.parse('2000-01-01T01:00:00.0')));
    should.not.exist(DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')));
    should.not.exist(DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')));
    return should.not.exist(DateTime.parse('2000').sameOrAfter(DateTime.parse('2000-01-01T00:00:00.0')));
  });

  it('should accept cases where b has unknown values but a is still deterministicly after or same as b', function() {
    DateTime.parse('2000-01-01T00:00:01.0').sameOrAfter(DateTime.parse('2000-01-01T00:00:00')).should.be.true();
    DateTime.parse('2000-01-01T00:01:00.0').sameOrAfter(DateTime.parse('2000-01-01T00:00')).should.be.true();
    DateTime.parse('2000-01-01T01:00:00.0').sameOrAfter(DateTime.parse('2000-01-01T00')).should.be.true();
    DateTime.parse('2000-01-02T00:00:00.0').sameOrAfter(DateTime.parse('2000-01-01')).should.be.true();
    DateTime.parse('2000-02-01T00:00:00.0').sameOrAfter(DateTime.parse('2000-01')).should.be.true();
    return DateTime.parse('2001-01-01T00:00:00.0').sameOrAfter(DateTime.parse('2000')).should.be.true();
  });

  it('should return null for cases where b has less precision than a with all overlapping precision fields matching', function() {
    should.not.exist(DateTime.parse('2000-01-01T00:00:00.999').sameOrAfter(DateTime.parse('2000-01-01T00:00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:00:59.999').sameOrAfter(DateTime.parse('2000-01-01T00:00')));
    should.not.exist(DateTime.parse('2000-01-01T00:59:59.999').sameOrAfter(DateTime.parse('2000-01-01T00')));
    should.not.exist(DateTime.parse('2000-01-01T23:59:59.999').sameOrAfter(DateTime.parse('2000-01-01')));
    should.not.exist(DateTime.parse('2000-01-31T23:59:59.999').sameOrAfter(DateTime.parse('2000-01')));
    return should.not.exist(DateTime.parse('2000-12-31T23:59:59.999').sameOrAfter(DateTime.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00').sameOrAfter(DateTime.parse('2000-01-01T00:00:01.0')).should.be.false();
    DateTime.parse('2000-01-01T00:00').sameOrAfter(DateTime.parse('2000-01-01T00:01:00.0')).should.be.false();
    DateTime.parse('2000-01-01T00').sameOrAfter(DateTime.parse('2000-01-01T01:00:00.0')).should.be.false();
    DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-02T00:00:00.0')).should.be.false();
    DateTime.parse('2000-01').sameOrAfter(DateTime.parse('2000-02-01T00:00:00.0')).should.be.false();
    return DateTime.parse('2000').sameOrAfter(DateTime.parse('2001-01-01T00:00:00.0')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', function() {
    DateTime.parse('2000-01-01T00:00:00.999').sameOrAfter(DateTime.parse('2000-01-01T00:00:01')).should.be.false();
    DateTime.parse('2000-01-01T00:00:59.999').sameOrAfter(DateTime.parse('2000-01-01T00:01')).should.be.false();
    DateTime.parse('2000-01-01T00:59:59.999').sameOrAfter(DateTime.parse('2000-01-01T01')).should.be.false();
    DateTime.parse('2000-01-01T23:59:59.999').sameOrAfter(DateTime.parse('2000-01-02')).should.be.false();
    DateTime.parse('2000-01-31T23:59:59.999').sameOrAfter(DateTime.parse('2000-02')).should.be.false();
    return DateTime.parse('2000-12-31T23:59:59.999').sameOrAfter(DateTime.parse('2001')).should.be.false();
  });

  it('should return null if not enough precision exists for comparison', () => should.not.exist(DateTime.parse('2000-01-01').sameOrAfter(DateTime.parse('2000-01-01'), DateTime.Unit.MINUTE)));

  it('should return null when something other than a DateTime is passed in', () => should.not.exist(DateTime.parse('2000').sameOrAfter({test: 'im not a DateTime'})));

  return it('should throw an error if an invalid precision is passed in', () => should.throws(() => DateTime.parse('2001-01-01T00:00:00').sameOrAfter(DateTime.parse('2000'), DateTime.Unit.WEEK)));
});

describe('DateTime.getDate', function() {

  it('should properly extract the date from fully specified datetimes', function() {
    const d = DateTime.parse('2012-10-25T12:55:14.456+00').getDate();
    d.year.should.equal(2012);
    d.month.should.equal(10);
    d.day.should.equal(25);
    should.not.exist(d.hour);
    should.not.exist(d.minute);
    should.not.exist(d.second);
    should.not.exist(d.millisecond);
    return should.not.exist(d.timezoneOffset);
  });

  it('should properly extract the date from datetime without time', function() {
    const d = DateTime.parse('2012-10-25').getDate();
    d.year.should.equal(2012);
    d.month.should.equal(10);
    d.day.should.equal(25);
    should.not.exist(d.hour);
    should.not.exist(d.minute);
    should.not.exist(d.second);
    return should.not.exist(d.millisecond);
  });

  it('should properly extract the date from datetime without days', function() {
    const d = DateTime.parse('2012-10').getDate();
    d.year.should.equal(2012);
    d.month.should.equal(10);
    should.not.exist(d.day);
    should.not.exist(d.hour);
    should.not.exist(d.minute);
    should.not.exist(d.second);
    return should.not.exist(d.millisecond);
  });

  return it('should properly extract the date from datetime without months', function() {
    const d = DateTime.parse('2012').getDate();
    d.year.should.equal(2012);
    should.not.exist(d.month);
    should.not.exist(d.day);
    should.not.exist(d.hour);
    should.not.exist(d.minute);
    should.not.exist(d.second);
    return should.not.exist(d.millisecond);
  });
});

describe('DateTime.getTime', function() {

  it('should properly extract the time from fully specified datetimes', function() {
    const t = DateTime.parse('2012-10-25T12:55:14.456+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    t.minute.should.equal(55);
    t.second.should.equal(14);
    t.millisecond.should.equal(456);
    return should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without milliseconds', function() {
    const t = DateTime.parse('2012-10-25T12:55:14+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    t.minute.should.equal(55);
    t.second.should.equal(14);
    should.not.exist(t.millisecond);
    return should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without seconds', function() {
    const t = DateTime.parse('2012-10-25T12:55+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    t.minute.should.equal(55);
    should.not.exist(t.second);
    should.not.exist(t.millisecond);
    return should(t.timezoneOffset).be.null();
  });

  it('should properly extract the time from datetimes without minutes', function() {
    const t = DateTime.parse('2012-10-25T12+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    t.hour.should.equal(12);
    should.not.exist(t.minute);
    should.not.exist(t.second);
    should.not.exist(t.millisecond);
    return should(t.timezoneOffset).be.null();
  });

  return it('should properly extract the time from datetimes without hours', function() {
    const t = DateTime.parse('2012-10-25T+00').getTime();
    t.year.should.equal(0);
    t.month.should.equal(1);
    t.day.should.equal(1);
    should.not.exist(t.hour);
    should.not.exist(t.minute);
    should.not.exist(t.second);
    should.not.exist(t.millisecond);
    return should(t.timezoneOffset).be.null();
  });
});

describe('DateTime.reducedPrecision', function() {

  it('should properly reduce to year precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.YEAR);
    reduced.year.should.equal(2012);
    should.not.exist(reduced.month);
    should.not.exist(reduced.day);
    should.not.exist(reduced.hour);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    return should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to month precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.MONTH);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    should.not.exist(reduced.day);
    should.not.exist(reduced.hour);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    return should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to day precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.DAY);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    should.not.exist(reduced.hour);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    return should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to hour precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.HOUR);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    should.not.exist(reduced.minute);
    should.not.exist(reduced.second);
    return should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to minute precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.MINUTE);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    reduced.minute.should.equal(55);
    should.not.exist(reduced.second);
    return should.not.exist(reduced.millisecond);
  });

  it('should properly reduce to second precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.SECOND);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    reduced.minute.should.equal(55);
    reduced.second.should.equal(14);
    return should.not.exist(reduced.millisecond);
  });

  return it('should properly reduce to millisecond precision', function() {
    const reduced = DateTime.parse('2012-10-25T12:55:14.456').reducedPrecision(DateTime.Unit.MILLISECOND);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
    reduced.hour.should.equal(12);
    reduced.minute.should.equal(55);
    reduced.second.should.equal(14);
    return reduced.millisecond.should.equal(456);
  });
});
