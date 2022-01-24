import should from 'should';
import * as luxon from 'luxon';
import { jsDate } from '../../src/util/util';
import { Date, DateTime } from '../../src/datatypes/datetime';
import { Uncertainty } from '../../src/datatypes/uncertainty';

describe('Date', () => {
  it('should properly set all properties when constructed', () => {
    const d = new Date(2000, 12, 1);
    d.year.should.equal(2000);
    d.month.should.equal(12);
    d.day.should.equal(1);
  });

  it('should leave unset properties as undefined', () => {
    const d = new Date(2000);
    d.year.should.equal(2000);
    should.not.exist(d.month);
    should.not.exist(d.day);
  });

  it('should parse yyyy', () => {
    const d = Date.parse('2012');
    d.should.eql(new Date(2012));
  });

  it('should parse yyyy-mm', () => {
    const d = Date.parse('2012-10');
    d.should.eql(new Date(2012, 10));
  });

  it('should parse yyyy-mm-dd', () => {
    const d = Date.parse('2012-10-25');
    d.should.eql(new Date(2012, 10, 25));
  });

  it('should toString yyyy', () => {
    const d = new Date(2012);
    d.toString().should.eql('2012');
  });

  it('should toString yyyy-mm', () => {
    const d = new Date(2012, 10);
    d.toString().should.eql('2012-10');
  });

  it('should toString yyyy-mm-dd', () => {
    const d = new Date(2012, 10, 25);
    d.toString().should.eql('2012-10-25');
  });

  it('should return null when parsing non-string', () => should(Date.parse(20121025)).be.null());

  it('should return null when parsing invalid string format', () =>
    should(Date.parse('20121025')).be.null());

  it('should return null when parsing invalid date/time values', () => {
    should(Date.parse('0000-00-00')).be.null();
    should(Date.parse('2000-11-31')).be.null();
  });

  it('should not parse null input', () => should.not.exist(Date.parse(null)));

  it('should construct from a javascript date', () =>
    Date.fromJSDate(new jsDate(1999, 1, 16)).should.eql(Date.parse('1999-02-16')));

  it('should construct from a Luxon DateTime', () =>
    Date.fromLuxonDateTime(luxon.DateTime.local(1999, 2, 16)).should.eql(Date.parse('1999-02-16')));

  it('should copy a fully define Date', () => {
    const original = Date.parse('1999-02-16');
    const copy = original.copy();
    copy.should.eql(original);
    copy.should.not.equal(original);
  });

  it('should copy an imprecise Date', () => {
    const original = Date.parse('1999-02');
    const copy = original.copy();
    copy.should.eql(original);
    copy.should.not.equal(original);
  });

  it('should know if it is precise', () => {
    Date.parse('2000-01-01').isPrecise().should.be.true();
    Date.parse('2000-01').isPrecise().should.be.false();
    Date.parse('2000').isPrecise().should.be.false();
  });

  it('should know if it is imprecise', () => {
    Date.parse('2000-01-01').isImprecise().should.be.false();
    Date.parse('2000-01').isImprecise().should.be.true();
    Date.parse('2000').isImprecise().should.be.true();
  });

  it('should correctly convert to Luxon DateTime uncertainties', () => {
    const preciseUncertainty = Date.parse('2000-02-25').toLuxonUncertainty();
    preciseUncertainty.isPoint().should.be.true();
    preciseUncertainty.low.should.eql(luxon.DateTime.utc(2000, 2, 25));
    preciseUncertainty.high.should.eql(luxon.DateTime.utc(2000, 2, 25));

    const toMonthLeapYear = Date.parse('2000-02').toLuxonUncertainty();
    toMonthLeapYear.isPoint().should.be.false();
    toMonthLeapYear.low.should.eql(luxon.DateTime.utc(2000, 2, 1));
    toMonthLeapYear.high.should.eql(luxon.DateTime.utc(2000, 2, 29));

    const toMonthNonLeapYear = Date.parse('1999-02').toLuxonUncertainty();
    toMonthNonLeapYear.isPoint().should.be.false();
    toMonthNonLeapYear.low.should.eql(luxon.DateTime.utc(1999, 2, 1));
    toMonthNonLeapYear.high.should.eql(luxon.DateTime.utc(1999, 2, 28));

    const toYear = Date.parse('2000').toLuxonUncertainty();
    toYear.isPoint().should.be.false();
    toYear.low.should.eql(luxon.DateTime.utc(2000, 1, 1));
    toYear.high.should.eql(luxon.DateTime.utc(2000, 12, 31));
  });

  it('should convert to javascript Date', () =>
    Date.parse('2012-02-25').toJSDate().should.eql(new jsDate(2012, 1, 25)));

  it('should floor unknown values when it converts to javascript Date', () =>
    Date.parse('2012').toJSDate().should.eql(new jsDate(2012, 0, 1)));

  it('should convert to Luxon DateTime', () =>
    Date.parse('2012-02-25').toLuxonDateTime().should.eql(luxon.DateTime.utc(2012, 2, 25)));

  it('should floor unknown values when it converts to Luxon DateTime', () =>
    Date.parse('2012').toLuxonDateTime().should.eql(luxon.DateTime.utc(2012, 1, 1)));
});

describe('Date.add', () => {
  it('should add units for simple cases', () => {
    const simple = Date.parse('2000-06-15');
    simple.add(1, Date.Unit.YEAR).should.eql(Date.parse('2001-06-15'));
    simple.add(1, Date.Unit.MONTH).should.eql(Date.parse('2000-07-15'));
    simple.add(1, Date.Unit.DAY).should.eql(Date.parse('2000-06-16'));
  });

  it('should subtract units for simple cases', () => {
    const simple = Date.parse('2000-06-15');
    simple.add(-1, Date.Unit.YEAR).should.eql(Date.parse('1999-06-15'));
    simple.add(-1, Date.Unit.MONTH).should.eql(Date.parse('2000-05-15'));
    simple.add(-1, Date.Unit.DAY).should.eql(Date.parse('2000-06-14'));
  });

  it('should still work for imprecise numbers, when adding to a defined field', () => {
    Date.parse('2000-06').add(8, Date.Unit.MONTH).should.eql(Date.parse('2001-02'));
    Date.parse('2000').add(5, Date.Unit.YEAR).should.eql(Date.parse('2005'));
  });

  it('should handle adding to undefined fields', () => {
    Date.parse('2000-06').add(10, Date.Unit.DAY).should.eql(Date.parse('2000-06'));
    Date.parse('2000-06').add(100, Date.Unit.DAY).should.eql(Date.parse('2000-09'));
    Date.parse('2000').add(200, Date.Unit.DAY).should.eql(Date.parse('2000'));
    Date.parse('2000').add(800, Date.Unit.DAY).should.eql(Date.parse('2002'));
    Date.parse('2000').add(10, Date.Unit.MONTH).should.eql(Date.parse('2000'));
    Date.parse('2000').add(100, Date.Unit.MONTH).should.eql(Date.parse('2008'));
  });

  it('should handle subtracting from undefined fields', () => {
    Date.parse('2000-06').add(-10, Date.Unit.DAY).should.eql(Date.parse('2000-06'));
    Date.parse('2000-06').add(-100, Date.Unit.DAY).should.eql(Date.parse('2000-03'));
    Date.parse('2000').add(-200, Date.Unit.DAY).should.eql(Date.parse('2000'));
    Date.parse('2000').add(-800, Date.Unit.DAY).should.eql(Date.parse('1998'));
    Date.parse('2000').add(-10, Date.Unit.MONTH).should.eql(Date.parse('2000'));
    Date.parse('2000').add(-100, Date.Unit.MONTH).should.eql(Date.parse('1992'));
  });

  it('should not mutate the original object', () => {
    const date1 = Date.parse('2000-06-15');
    const date2 = date1.add(6, Date.Unit.MONTH);
    date1.should.eql(Date.parse('2000-06-15'));
    date2.should.eql(Date.parse('2000-12-15'));
  });

  it('should return a different object (copy)', () => {
    const date1 = Date.parse('2000-06-15');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const date2 = date1.add(0, Date.Unit.SECOND);
    date1.should.eql(date2);
    date1.should.not.equal(date2);
  });
});

describe('Date.differenceBetween', () => {
  it('should return null if passed a non-Date object', () => {
    const a = Date.parse('2018-01-23');
    const b = '2018-01-23';
    should.not.exist(a.differenceBetween(b, Date.Unit.YEAR));
  });

  it('should calculate time between two full specified dates', () => {
    let a = Date.parse('2009-06-15');
    let b = Date.parse('2009-06-15');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(0));

    a = Date.parse('2009-06-15');
    b = Date.parse('2009-06-20');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(0));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(5));

    a = Date.parse('2009-06-15');
    b = Date.parse('2009-07-04');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(1));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(19));

    a = Date.parse('2000-06-15');
    b = Date.parse('2009-07-04');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(9));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(109));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(3306));

    a = Date.parse('2001-01-01');
    b = Date.parse('2001-12-31');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(11));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(364));
  });

  it('should count the boundaries', () => {
    const a = Date.parse('1999-12-31');
    const b = Date.parse('2000-01-01');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(1));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(1));
  });

  it('should handle leap year', () => {
    let a = Date.parse('1999-02-01');
    let b = Date.parse('2000-02-01');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(12));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(365));

    a = Date.parse('2000-02-01');
    b = Date.parse('2001-02-01');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(1));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(12));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(366));
  });

  it('should handle difference in weeks using Sunday as a boundary', () => {
    let a = Date.parse('2012-02-04'); // Saturday
    let b = Date.parse('2012-02-05'); // Sunday
    a.differenceBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(1));

    a = Date.parse('2012-02-05'); // Sunday
    b = Date.parse('2012-02-11'); // Saturday
    a.differenceBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(0));

    a = Date.parse('2012-02-05'); // Sunday
    b = Date.parse('2012-02-12'); // Sunday
    a.differenceBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(1));

    a = Date.parse('2012-02-05'); // Sunday
    b = Date.parse('2012-02-04'); // Saturday
    a.differenceBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(-1));

    a = Date.parse('2012-02-11'); // Saturday
    b = Date.parse('2012-02-05'); // Sunday
    a.differenceBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(0));

    a = Date.parse('2012-02-12'); // Sunday
    b = Date.parse('2012-02-05'); // Sunday
    a.differenceBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(-1));
  });
});

describe('Date.durationBetween', () => {
  it('should calculate time between two full specified dates', () => {
    let a = Date.parse('2009-06-15');
    let b = Date.parse('2009-06-15');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(0));

    a = Date.parse('2009-06-15');
    b = Date.parse('2009-06-20');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(5));

    a = Date.parse('2009-06-30');
    b = Date.parse('2009-08-04');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(1));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(5));
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(35));

    a = Date.parse('2000-12-31');
    b = Date.parse('2009-02-01');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(8));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(8 * 12 + 1));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(
      new Uncertainty(Math.floor((365 * 8 + 2 + 32) / 7))
    );
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(365 * 8 + 2 + 32));

    a = Date.parse('2001-01-01');
    b = Date.parse('2001-12-31');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(11));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(52)); // 52 weeks is actual 364 days
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(364));
  });

  it('should handle durations ', () => {
    const a = new Date(2011, 1, 2);
    const b = new Date(2011, 9, 29);
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(0));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(8));
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(270));
  });

  it('should handle leap year', () => {
    let a = Date.parse('1999-02-01');
    let b = Date.parse('2000-02-01');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(1));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(12));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(52));
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(365));

    a = Date.parse('2000-02-01');
    b = Date.parse('2001-02-01');
    a.durationBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(1));
    a.durationBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(12));
    a.durationBetween(b, Date.Unit.WEEK).should.eql(new Uncertainty(52));
    a.durationBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(366));
  });

  it('should handle imprecision', () => {
    const a = Date.parse('2000-06-15');
    const b = Date.parse('2009');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(9));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(103, 114));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(3122, 3486));
  });

  it('should return negative values for going backwards', () => {
    const a = Date.parse('2009-07-04');
    const b = Date.parse('2000-06-15');
    a.differenceBetween(b, Date.Unit.YEAR).should.eql(new Uncertainty(-9));
    a.differenceBetween(b, Date.Unit.MONTH).should.eql(new Uncertainty(-109));
    a.differenceBetween(b, Date.Unit.DAY).should.eql(new Uncertainty(-3306));
  });
});

describe('Date.sameAs', () => {
  it('should always accept cases where a is same as b', () => {
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15')).should.be.true();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15'), Date.Unit.DAY).should.be.true();
    should(() => Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15'), Date.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15'), Date.Unit.MONTH).should.be.true();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15'), Date.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the day is different', () => {
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-16')).should.be.false();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-16'), Date.Unit.DAY).should.be.false();
    should(() =>
      Date.parse('2000-05-15').sameAs(Date.parse('2000-05-16'), Date.Unit.WEEK).should.be.true()
    ).throw('Invalid precision: week');
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-16'), Date.Unit.MONTH).should.be.true();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-16'), Date.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the week is different', () => {
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-21')).should.be.false();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-21'), Date.Unit.DAY).should.be.false();
    should(() =>
      Date.parse('2000-05-15').sameAs(Date.parse('2000-05-21'), Date.Unit.WEEK).should.be.false()
    ).throw('Invalid precision: week');
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-21'), Date.Unit.MONTH).should.be.true();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-05-21'), Date.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the month is different', () => {
    Date.parse('2000-05-15').sameAs(Date.parse('2000-06-15')).should.be.false();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-06-15'), Date.Unit.DAY).should.be.false();
    should(() =>
      Date.parse('2000-05-15').sameAs(Date.parse('2000-06-15'), Date.Unit.WEEK).should.be.false()
    ).throw('Invalid precision: week');
    Date.parse('2000-05-15').sameAs(Date.parse('2000-06-15'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-05-15').sameAs(Date.parse('2000-06-15'), Date.Unit.YEAR).should.be.true();
  });

  it('should properly calculate cases where the year is different', () => {
    Date.parse('2000-05-15').sameAs(Date.parse('2001-05-15')).should.be.false();
    Date.parse('2000-05-15').sameAs(Date.parse('2001-05-15'), Date.Unit.DAY).should.be.false();
    should(() =>
      Date.parse('2000-05-15').sameAs(Date.parse('2001-05-15'), Date.Unit.WEEK).should.be.false()
    ).throw('Invalid precision: week');
    Date.parse('2000-05-15').sameAs(Date.parse('2001-05-15'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-05-15').sameAs(Date.parse('2001-05-15'), Date.Unit.YEAR).should.be.false();
  });

  it('should handle imprecision correctly with missing days', () => {
    Date.parse('2000-05').sameAs(Date.parse('2000-05')).should.be.true();
    should.not.exist(Date.parse('2000-05').sameAs(Date.parse('2000-05'), Date.Unit.DAY));
    Date.parse('2000-05').sameAs(Date.parse('2000-05'), Date.Unit.MONTH).should.be.true();
    Date.parse('2000-05').sameAs(Date.parse('2000-05'), Date.Unit.YEAR).should.be.true();
    should.not.exist(Date.parse('2000-05').sameAs(Date.parse('2000-05-01'), Date.Unit.DAY));
    Date.parse('2000-05').sameAs(Date.parse('2000-05-01'), Date.Unit.MONTH).should.be.true();
    Date.parse('2000-05').sameAs(Date.parse('2000-05-01'), Date.Unit.YEAR).should.be.true();
    should.not.exist(Date.parse('2000-05-01').sameAs(Date.parse('2000-05'), Date.Unit.DAY));
    Date.parse('2000-05-01').sameAs(Date.parse('2000-05'), Date.Unit.MONTH).should.be.true();
    Date.parse('2000-05-01').sameAs(Date.parse('2000-05'), Date.Unit.YEAR).should.be.true();

    Date.parse('2000-05').sameAs(Date.parse('2000-06')).should.be.false();
    Date.parse('2000-05').sameAs(Date.parse('2000-06'), Date.Unit.DAY).should.be.false();
    Date.parse('2000-05').sameAs(Date.parse('2000-06'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-05').sameAs(Date.parse('2000-06'), Date.Unit.YEAR).should.be.true();
    Date.parse('2001-05').sameAs(Date.parse('2000-06'), Date.Unit.YEAR).should.be.false();
    Date.parse('2000-05').sameAs(Date.parse('2000-06-01'), Date.Unit.DAY).should.be.false();
    Date.parse('2000-05').sameAs(Date.parse('2000-06-01'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-05').sameAs(Date.parse('2001-06-01'), Date.Unit.YEAR).should.be.false();
    Date.parse('2000-05-01').sameAs(Date.parse('2000-06'), Date.Unit.DAY).should.be.false();
    Date.parse('2000-05-01').sameAs(Date.parse('2000-06'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-05-01').sameAs(Date.parse('2001-06'), Date.Unit.YEAR).should.be.false();
  });

  it('should handle imprecision correctly with missing months', () => {
    Date.parse('2000').sameAs(Date.parse('2000')).should.be.true();
    should.not.exist(Date.parse('2000').sameAs(Date.parse('2000'), Date.Unit.DAY));
    should.not.exist(Date.parse('2000').sameAs(Date.parse('2000'), Date.Unit.MONTH));
    Date.parse('2000').sameAs(Date.parse('2000'), Date.Unit.YEAR).should.be.true();
    should.not.exist(Date.parse('2000').sameAs(Date.parse('2000-05-01'), Date.Unit.DAY));
    should.not.exist(Date.parse('2000').sameAs(Date.parse('2000-05-01'), Date.Unit.MONTH));
    Date.parse('2000').sameAs(Date.parse('2000-05-01'), Date.Unit.YEAR).should.be.true();
    should.not.exist(Date.parse('2000-05-01').sameAs(Date.parse('2000'), Date.Unit.DAY));
    should.not.exist(Date.parse('2000-05-01').sameAs(Date.parse('2000'), Date.Unit.MONTH));
    Date.parse('2000-05-01').sameAs(Date.parse('2000-05'), Date.Unit.YEAR).should.be.true();

    Date.parse('2000').sameAs(Date.parse('2001')).should.be.false();
    Date.parse('2000').sameAs(Date.parse('2001'), Date.Unit.DAY).should.be.false();
    Date.parse('2000').sameAs(Date.parse('2001'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000').sameAs(Date.parse('2001'), Date.Unit.YEAR).should.be.false();

    Date.parse('2001').sameAs(Date.parse('2000-06-01'), Date.Unit.DAY).should.be.false();
    Date.parse('2001').sameAs(Date.parse('2000-06-01'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000').sameAs(Date.parse('2001-06-01'), Date.Unit.YEAR).should.be.false();
    Date.parse('2000-05-01').sameAs(Date.parse('2001'), Date.Unit.DAY).should.be.false();
    Date.parse('2000-05-01').sameAs(Date.parse('2001'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-05-01').sameAs(Date.parse('2001'), Date.Unit.YEAR).should.be.false();
  });

  it('should error on incorrect precisions', () => {
    should(() => Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15'), Date.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    should(() =>
      Date.parse('2000-05-15').sameAs(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
    ).throw('Invalid precision: minute');
  });
});

describe('Date.before', () => {
  it('should accept cases where a is before b', () => {
    Date.parse('2000-11-30').before(Date.parse('2000-12-31')).should.be.true();
    Date.parse('1999-12-31').before(Date.parse('2000-12-31')).should.be.true();
  });

  it('should reject cases where a is b', () =>
    Date.parse('2000-01-01').before(Date.parse('2000-01-01')).should.be.false());

  it('should use year precision when requested', () => {
    Date.parse('2000-01-01').before(Date.parse('2000-06-01')).should.be.true();
    Date.parse('2000-01-01').before(Date.parse('2000-06-01'), Date.Unit.YEAR).should.be.false();
    Date.parse('1999-12-31').before(Date.parse('2000-06-01'), Date.Unit.YEAR).should.be.true();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-01').before(Date.parse('2000-02-15')).should.be.true();
    Date.parse('2000-02-01').before(Date.parse('2000-02-15'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-01-31').before(Date.parse('2000-02-15'), Date.Unit.MONTH).should.be.true();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15').before(Date.parse('2000-02-15')).should.be.false();
    Date.parse('2000-02-15').before(Date.parse('2000-02-15'), Date.Unit.DAY).should.be.false();
    Date.parse('2000-02-14').before(Date.parse('2000-02-15'), Date.Unit.DAY).should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values and precision matches', () => {
    Date.parse('2000-01').before(Date.parse('2000-01')).should.be.false();
    Date.parse('2000').before(Date.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').before(Date.parse('2000-01-02')));
    should.not.exist(Date.parse('2000').before(Date.parse('2000-01-02')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-01').before(Date.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-01').before(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', () => {
    Date.parse('2000-01').before(Date.parse('2000-02-01')).should.be.true();
    Date.parse('2000').before(Date.parse('2001-01-01')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', () => {
    Date.parse('2000-01-01').before(Date.parse('2000-02')).should.be.true();
    Date.parse('2000-01-01').before(Date.parse('2001')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', () => {
    Date.parse('2000-02').before(Date.parse('2000-01-01')).should.be.false();
    Date.parse('2001').before(Date.parse('2000-01-01')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', () => {
    Date.parse('2000-02-01').before(Date.parse('2000-01')).should.be.false();
    Date.parse('2001-01-01').before(Date.parse('2000')).should.be.false();
  });

  it('should error on incorrect precisions', () => {
    should(() => Date.parse('2000-05-15').before(Date.parse('2000-05-15'), Date.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    should(() =>
      Date.parse('2000-05-15').before(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
    ).throw('Invalid precision: minute');
  });
});

describe('Date.sameOrBefore', () => {
  it('should accept cases where a is before b', () => {
    Date.parse('2000-12-30').sameOrBefore(Date.parse('2000-12-31')).should.be.true();
    Date.parse('2000-11-30').sameOrBefore(Date.parse('2000-12-31')).should.be.true();
    Date.parse('1999-12-31').sameOrBefore(Date.parse('2000-12-31')).should.be.true();
  });

  it('should accept cases where a is b', () =>
    Date.parse('2000-01-01').sameOrBefore(Date.parse('2000-01-01')).should.be.true());

  it('should use year precision when requested', () => {
    Date.parse('2000-06-01').sameOrBefore(Date.parse('2000-01-01')).should.be.false();
    Date.parse('2000-06-01')
      .sameOrBefore(Date.parse('2000-01-01'), Date.Unit.YEAR)
      .should.be.true();
    Date.parse('2000-06-01')
      .sameOrBefore(Date.parse('1999-12-31'), Date.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-15').sameOrBefore(Date.parse('2000-02-01')).should.be.false();
    Date.parse('2000-02-15')
      .sameOrBefore(Date.parse('2000-02-01'), Date.Unit.MONTH)
      .should.be.true();
    Date.parse('2000-02-15')
      .sameOrBefore(Date.parse('2000-01-31'), Date.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15').sameOrBefore(Date.parse('2000-02-15')).should.be.true();
    Date.parse('2000-02-15').sameOrBefore(Date.parse('2000-02-15'), Date.Unit.DAY).should.be.true();
    Date.parse('2000-02-15')
      .sameOrBefore(Date.parse('2000-02-14'), Date.Unit.DAY)
      .should.be.false();
  });

  it('should return true in cases where a is b but there are unknown values in a and b but matching precision', () => {
    Date.parse('2000-01').sameOrBefore(Date.parse('2000-01')).should.be.true();
    Date.parse('2000').sameOrBefore(Date.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').sameOrBefore(Date.parse('2000-01-30')));
    should.not.exist(Date.parse('2000').sameOrBefore(Date.parse('2000-12-30')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-02').sameOrBefore(Date.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-02').sameOrBefore(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly before b', () => {
    Date.parse('2000-01').sameOrBefore(Date.parse('2000-02-01')).should.be.true();
    Date.parse('2000').sameOrBefore(Date.parse('2001-01-01')).should.be.true();
  });

  it('should handle cases where a has unknown values but is may not be deterministicly before or same as b', () => {
    should.not.exist(Date.parse('2000-01').sameOrBefore(Date.parse('2000-01-31')));
    Date.parse('2000').sameOrBefore(Date.parse('2001-12-31')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly before b', () => {
    Date.parse('2000-01-31').sameOrBefore(Date.parse('2000-02')).should.be.true();
    Date.parse('2000-12-31').sameOrBefore(Date.parse('2001')).should.be.true();
  });

  it('should return null in cases where b has unknown values but a is not deterministicly before or same as b', () => {
    should.not.exist(Date.parse('2000-01-01').sameOrBefore(Date.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-01').sameOrBefore(Date.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly after b', () => {
    Date.parse('2000-02').sameOrBefore(Date.parse('2000-01-31')).should.be.false();
    Date.parse('2001').sameOrBefore(Date.parse('2000-12-31')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly after b', () => {
    Date.parse('2000-02-01').sameOrBefore(Date.parse('2000-01')).should.be.false();
    Date.parse('2001-01-01').sameOrBefore(Date.parse('2000')).should.be.false();
  });

  it('should error on incorrect precisions', () => {
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(Date.parse('2000-05-15'), Date.Unit.WEEK)
    ).throw('Invalid precision: week');
    should(() =>
      Date.parse('2000-05-15').sameOrBefore(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
    ).throw('Invalid precision: minute');
  });
});

describe('Date.after', () => {
  it('should accept cases where a is after b', () => {
    Date.parse('2000-01-02').after(Date.parse('2000-01-01')).should.be.true();
    Date.parse('2000-02-01').after(Date.parse('2000-01-01')).should.be.true();
    Date.parse('2001-01-01').after(Date.parse('2000-01-01')).should.be.true();
  });

  it('should reject cases where a is before b', () => {
    Date.parse('2000-12-30').after(Date.parse('2000-12-31')).should.be.false();
    Date.parse('2000-11-30').after(Date.parse('2000-12-31')).should.be.false();
    Date.parse('1999-12-31').after(Date.parse('2000-12-31')).should.be.false();
  });

  it('should reject cases where a is b', () =>
    Date.parse('2000-01-01').after(Date.parse('2000-01-01')).should.be.false());

  it('should use year precision when requested', () => {
    Date.parse('2000-06-01').after(Date.parse('2000-01-01')).should.be.true();
    Date.parse('2000-06-01').after(Date.parse('2000-01-01'), Date.Unit.YEAR).should.be.false();
    Date.parse('2000-06-01').after(Date.parse('1999-12-31'), Date.Unit.YEAR).should.be.true();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-15').after(Date.parse('2000-02-01')).should.be.true();
    Date.parse('2000-02-15').after(Date.parse('2000-02-01'), Date.Unit.MONTH).should.be.false();
    Date.parse('2000-02-15').after(Date.parse('2000-01-31'), Date.Unit.MONTH).should.be.true();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15').after(Date.parse('2000-02-15')).should.be.false();
    Date.parse('2000-02-15').after(Date.parse('2000-02-15'), Date.Unit.DAY).should.be.false();
    Date.parse('2000-02-15').after(Date.parse('2000-02-14'), Date.Unit.DAY).should.be.true();
  });

  it('should return false in cases where a is b but there are unknown values with matching precision', () => {
    Date.parse('2000-01').after(Date.parse('2000-01')).should.be.false();
    Date.parse('2000').after(Date.parse('2000')).should.be.false();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').after(Date.parse('2000-01-01')));
    should.not.exist(Date.parse('2000').after(Date.parse('2000-01-01')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-02').after(Date.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-02').after(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', () => {
    Date.parse('2000-02').after(Date.parse('2000-01-01')).should.be.true();
    Date.parse('2001').after(Date.parse('2000-01-01')).should.be.true();
  });

  it('should accept cases where b has unknown values but a is still deterministicly after b', () => {
    Date.parse('2000-02-01').after(Date.parse('2000-01')).should.be.true();
    Date.parse('2001-01-01').after(Date.parse('2000')).should.be.true();
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', () => {
    Date.parse('2000-01').after(Date.parse('2000-02-01')).should.be.false();
    Date.parse('2000').after(Date.parse('2001-01-01')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', () => {
    Date.parse('2000-01-01').after(Date.parse('2000-02')).should.be.false();
    Date.parse('2000-01-01').after(Date.parse('2001')).should.be.false();
  });

  it('should error on incorrect precisions', () => {
    should(() => Date.parse('2000-05-15').after(Date.parse('2000-05-15'), Date.Unit.WEEK)).throw(
      'Invalid precision: week'
    );
    should(() =>
      Date.parse('2000-05-15').after(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
    ).throw('Invalid precision: minute');
  });
});

describe('Date.sameOrAfter', () => {
  it('should accept cases where a is after b', () => {
    Date.parse('2000-01-02').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    Date.parse('2000-02-01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
    Date.parse('2001-01-01').sameOrAfter(Date.parse('2000-01-01')).should.be.true();
  });

  it('should reject cases where a is before b', () => {
    Date.parse('2000-12-30').sameOrAfter(Date.parse('2000-12-31')).should.be.false();
    Date.parse('2000-11-30').sameOrAfter(Date.parse('2000-12-31')).should.be.false();
    Date.parse('1999-12-31').sameOrAfter(Date.parse('2000-12-31')).should.be.false();
  });

  it('should accept cases where a is b', () =>
    Date.parse('2000-01-01').sameOrAfter(Date.parse('2000-01-01')).should.be.true());

  it('should use year precision when requested', () => {
    Date.parse('2000-01-01').sameOrAfter(Date.parse('2000-06-01')).should.be.false();
    Date.parse('2000-01-01').sameOrAfter(Date.parse('2000-06-01'), Date.Unit.YEAR).should.be.true();
    Date.parse('1999-12-31')
      .sameOrAfter(Date.parse('2000-06-01'), Date.Unit.YEAR)
      .should.be.false();
  });

  it('should use month precision when requested', () => {
    Date.parse('2000-02-01').sameOrAfter(Date.parse('2000-02-15')).should.be.false();
    Date.parse('2000-02-01')
      .sameOrAfter(Date.parse('2000-02-15'), Date.Unit.MONTH)
      .should.be.true();
    Date.parse('2000-01-31')
      .sameOrAfter(Date.parse('2000-02-15'), Date.Unit.MONTH)
      .should.be.false();
  });

  it('should use day precision when requested', () => {
    Date.parse('2000-02-15').sameOrAfter(Date.parse('2000-02-15')).should.be.true();
    Date.parse('2000-02-15').sameOrAfter(Date.parse('2000-02-15'), Date.Unit.DAY).should.be.true();
    Date.parse('2000-02-14').sameOrAfter(Date.parse('2000-02-15'), Date.Unit.DAY).should.be.false();
  });

  it('should return true in cases where a is b but there and b have unknown values but matching precision', () => {
    Date.parse('2000-01').sameOrAfter(Date.parse('2000-01')).should.be.true();
    Date.parse('2000').sameOrAfter(Date.parse('2000')).should.be.true();
  });

  it('should return null in cases where a has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01').sameOrAfter(Date.parse('2000-01-31')));
    should.not.exist(Date.parse('2000').sameOrAfter(Date.parse('2000-12-31')));
  });

  it('should return null in cases where b has unknown values that prevent deterministic result', () => {
    should.not.exist(Date.parse('2000-01-01').sameOrAfter(Date.parse('2000-01')));
    should.not.exist(Date.parse('2000-01-01').sameOrAfter(Date.parse('2000')));
  });

  it('should accept cases where a has unknown values but is still deterministicly after b', () => {
    Date.parse('2000-02').sameOrAfter(Date.parse('2000-01-31')).should.be.true();
    Date.parse('2001').sameOrAfter(Date.parse('2000-12-31')).should.be.true();
  });

  it('should accept cases where a has unknown values but is not deterministicly after or same as b', () => {
    should.not.exist(Date.parse('2000-01').sameOrAfter(Date.parse('2000-01-01')));
    should.not.exist(Date.parse('2000').sameOrAfter(Date.parse('2000-01-01')));
  });

  it('should accept cases where b has unknown values but a is still deterministicly after or same as b', () => {
    Date.parse('2000-02-01').sameOrAfter(Date.parse('2000-01')).should.be.true();
    Date.parse('2001-01-01').sameOrAfter(Date.parse('2000')).should.be.true();
  });

  it('should return null where b has unknown values but a is not deterministicly same as or after b', () => {
    should.not.exist(Date.parse('2000-01-31').sameOrAfter(Date.parse('2000-01')));
    should.not.exist(Date.parse('2000-12-31').sameOrAfter(Date.parse('2000')));
  });

  it('should reject cases where a has unknown values but is still deterministicly before b', () => {
    Date.parse('2000-01').sameOrAfter(Date.parse('2000-02-01')).should.be.false();
    Date.parse('2000').sameOrAfter(Date.parse('2001-01-01')).should.be.false();
  });

  it('should reject cases where b has unknown values but a is still deterministicly before b', () => {
    Date.parse('2000-01-31').sameOrAfter(Date.parse('2000-02')).should.be.false();
    Date.parse('2000-12-31').sameOrAfter(Date.parse('2001')).should.be.false();
  });

  it('should error on incorrect precisions', () => {
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(Date.parse('2000-05-15'), Date.Unit.WEEK)
    ).throw('Invalid precision: week');
    should(() =>
      Date.parse('2000-05-15').sameOrAfter(Date.parse('2000-05-15'), DateTime.Unit.MINUTE)
    ).throw('Invalid precision: minute');
  });
});

describe('Date.reducedPrecision', () => {
  it('should properly reduce to year precision', () => {
    const reduced = Date.parse('2012-10-25').reducedPrecision(Date.Unit.YEAR);
    reduced.year.should.equal(2012);
    should.not.exist(reduced.month);
    should.not.exist(reduced.day);
  });

  it('should properly reduce to month precision', () => {
    const reduced = Date.parse('2012-10-25').reducedPrecision(Date.Unit.MONTH);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    should.not.exist(reduced.day);
  });

  it('should properly reduce to day precision', () => {
    const reduced = Date.parse('2012-10-25').reducedPrecision(Date.Unit.DAY);
    reduced.year.should.equal(2012);
    reduced.month.should.equal(10);
    reduced.day.should.equal(25);
  });
});

describe('Date.getPrecisionValue', () => {
  it('should properly get precision value for years', () => {
    Date.parse('2012').getPrecisionValue().should.equal(4);
  });

  it('should properly get precision value for months', () => {
    Date.parse('2012-10').getPrecisionValue().should.equal(6);
  });

  it('should properly get precision value for days', () => {
    Date.parse('2012-10-25').getPrecisionValue().should.equal(8);
  });
});
