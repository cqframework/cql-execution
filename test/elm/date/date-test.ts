import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { Uncertainty } from '../../../src/datatypes/uncertainty';

describe('Date', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute year precision correctly', async function () {
    const d = await this.year.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    ['month', 'day'].map(field => should.not.exist(d[field]));
  });

  it('should execute month precision correctly', async function () {
    const d = await this.month.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    ['day'].map(field => should.not.exist(d[field]));
  });

  it('should execute day precision correctly', async function () {
    const d = await this.day.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
  });
});

describe('DateComponentFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the year from the date', async function () {
    (await this.year.exec(this.ctx)).should.equal(2000);
  });

  it('should return the month from the date', async function () {
    (await this.month.exec(this.ctx)).should.equal(3);
  });

  it('should return the day from the date', async function () {
    (await this.day.exec(this.ctx)).should.equal(15);
  });

  it('should return null for imprecise components', async function () {
    const result = await this.impreciseComponentTuple.exec(this.ctx);
    result.should.eql({
      Year: 2000,
      Month: 3,
      Day: null
    });
  });

  it('should return null for null date', async function () {
    should(await this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('SameAs', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is the same', async function () {
    (await this.sameYear.exec(this.ctx)).should.be.true();
    (await this.notSameYear.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when month is the same', async function () {
    (await this.sameMonth.exec(this.ctx)).should.be.true();
    (await this.notSameMonth.exec(this.ctx)).should.be.false();
    (await this.sameMonthWrongYear.exec(this.ctx)).should.be.false();
  });

  it('should properly determine same as using day', async function () {
    (await this.same.exec(this.ctx)).should.be.true();
    (await this.notSame.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when day is the same', async function () {
    (await this.sameDay.exec(this.ctx)).should.be.true();
    (await this.notSameDay.exec(this.ctx)).should.be.false();
    (await this.sameDayWrongMonth.exec(this.ctx)).should.be.false();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('SameOrAfter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', async function () {
    (await this.sameYear.exec(this.ctx)).should.be.true();
    (await this.yearAfter.exec(this.ctx)).should.be.true();
    (await this.yearBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when month is same or after', async function () {
    (await this.sameMonth.exec(this.ctx)).should.be.true();
    (await this.monthAfter.exec(this.ctx)).should.be.true();
    (await this.monthBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when day is same or after', async function () {
    (await this.sameDay.exec(this.ctx)).should.be.true();
    (await this.dayAfter.exec(this.ctx)).should.be.true();
    (await this.dayBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine same or after using day when no precision defined', async function () {
    (await this.same.exec(this.ctx)).should.be.true();
    (await this.after.exec(this.ctx)).should.be.true();
    (await this.before.exec(this.ctx)).should.be.false();
  });

  it('should consider precision units above the specified unit', async function () {
    (await this.sameDayMonthBefore.exec(this.ctx)).should.be.false();
    (await this.dayAfterMonthBefore.exec(this.ctx)).should.be.false();
    (await this.dayBeforeMonthAfter.exec(this.ctx)).should.be.true();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseDay.exec(this.ctx)).be.null();
    (await this.impreciseDayMonthAfter.exec(this.ctx)).should.be.true();
    (await this.impreciseDayMonthBefore.exec(this.ctx)).should.be.false();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('SameOrBefore', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', async function () {
    (await this.sameYear.exec(this.ctx)).should.be.true();
    (await this.yearAfter.exec(this.ctx)).should.be.false();
    (await this.yearBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when month is same or after', async function () {
    (await this.sameMonth.exec(this.ctx)).should.be.true();
    (await this.monthAfter.exec(this.ctx)).should.be.false();
    (await this.monthBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when day is same or after', async function () {
    (await this.sameDay.exec(this.ctx)).should.be.true();
    (await this.dayAfter.exec(this.ctx)).should.be.false();
    (await this.dayBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine same or after using day when no precision defined', async function () {
    (await this.same.exec(this.ctx)).should.be.true();
    (await this.after.exec(this.ctx)).should.be.false();
    (await this.before.exec(this.ctx)).should.be.true();
  });

  it('should consider precision units above the specified unit', async function () {
    (await this.sameDayMonthBefore.exec(this.ctx)).should.be.true();
    (await this.dayAfterMonthBefore.exec(this.ctx)).should.be.true();
    (await this.dayBeforeMonthAfter.exec(this.ctx)).should.be.false();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseDay.exec(this.ctx)).be.null();
    (await this.impreciseDayMonthAfter.exec(this.ctx)).should.be.false();
    (await this.impreciseDayMonthBefore.exec(this.ctx)).should.be.true();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('After', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', async function () {
    (await this.sameYear.exec(this.ctx)).should.be.false();
    (await this.yearAfter.exec(this.ctx)).should.be.true();
    (await this.yearBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when month is same or after', async function () {
    (await this.sameMonth.exec(this.ctx)).should.be.false();
    (await this.monthAfter.exec(this.ctx)).should.be.true();
    (await this.monthBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when day is same or after', async function () {
    (await this.sameDay.exec(this.ctx)).should.be.false();
    (await this.dayAfter.exec(this.ctx)).should.be.true();
    (await this.dayBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine same or after using day when no precision defined', async function () {
    (await this.same.exec(this.ctx)).should.be.false();
    (await this.after.exec(this.ctx)).should.be.true();
    (await this.before.exec(this.ctx)).should.be.false();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseDay.exec(this.ctx)).be.null();
    (await this.impreciseDayMonthAfter.exec(this.ctx)).should.be.true();
    (await this.impreciseDayMonthBefore.exec(this.ctx)).should.be.false();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('Before', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', async function () {
    (await this.sameYear.exec(this.ctx)).should.be.false();
    (await this.yearAfter.exec(this.ctx)).should.be.false();
    (await this.yearBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when month is same or after', async function () {
    (await this.sameMonth.exec(this.ctx)).should.be.false();
    (await this.monthAfter.exec(this.ctx)).should.be.false();
    (await this.monthBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when day is same or after', async function () {
    (await this.sameDay.exec(this.ctx)).should.be.false();
    (await this.dayAfter.exec(this.ctx)).should.be.false();
    (await this.dayBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine same or after using day when no precision defined', async function () {
    (await this.same.exec(this.ctx)).should.be.false();
    (await this.after.exec(this.ctx)).should.be.false();
    (await this.before.exec(this.ctx)).should.be.true();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseDay.exec(this.ctx)).be.null();
    (await this.impreciseDayMonthAfter.exec(this.ctx)).should.be.false();
    (await this.impreciseDayMonthBefore.exec(this.ctx)).should.be.true();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('DifferenceBetween', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly execute years between', async function () {
    (await this.yearsBetween.exec(this.ctx)).should.equal(1);
  });

  it('should properly execute months between', async function () {
    (await this.monthsBetween.exec(this.ctx)).should.equal(12);
  });

  it('should properly execute weeks between', async function () {
    (await this.weeksBetween.exec(this.ctx)).should.equal(52);
  });

  it('should properly execute days between', async function () {
    (await this.daysBetween.exec(this.ctx)).should.equal(365);
  });

  it('should properly execute years between with an uncertainty', async function () {
    (await this.yearsBetweenUncertainty.exec(this.ctx)).should.equal(0);
  });

  it('should properly execute months between with an uncertainty', async function () {
    (await this.monthsBetweenUncertainty.exec(this.ctx)).should.equal(0);
  });

  it('should properly execute weeks between with an uncertainty', async function () {
    (await this.weeksBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 4));
  });

  it('should properly execute days between with an uncertainty', async function () {
    (await this.daysBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 30));
  });
});

describe('DifferenceBetween Comparisons', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate days between > x', async function () {
    (await this.greaterThan25DaysAfter.exec(this.ctx)).should.be.true();
    should(await this.greaterThan40DaysAfter.exec(this.ctx)).be.null();
    (await this.greaterThan80DaysAfter.exec(this.ctx)).should.be.false();
  });

  it('should calculate days between >= x', async function () {
    (await this.greaterOrEqualTo25DaysAfter.exec(this.ctx)).should.be.true();
    should(await this.greaterOrEqualTo40DaysAfter.exec(this.ctx)).be.null();
    (await this.greaterOrEqualTo80DaysAfter.exec(this.ctx)).should.be.false();
  });

  it('should calculate days between = x', async function () {
    (await this.equalTo25DaysAfter.exec(this.ctx)).should.be.false();
    should(await this.equalTo40DaysAfter.exec(this.ctx)).be.null();
    (await this.equalTo80DaysAfter.exec(this.ctx)).should.be.false();
  });

  it('should calculate days between <= x', async function () {
    (await this.lessOrEqualTo25DaysAfter.exec(this.ctx)).should.be.false();
    should(await this.lessOrEqualTo40DaysAfter.exec(this.ctx)).be.null();
    (await this.lessOrEqualTo80DaysAfter.exec(this.ctx)).should.be.true();
  });

  it('should calculate days between < x', async function () {
    (await this.lessThan25DaysAfter.exec(this.ctx)).should.be.false();
    should(await this.lessThan40DaysAfter.exec(this.ctx)).be.null();
    (await this.lessThan80DaysAfter.exec(this.ctx)).should.be.true();
  });

  it('should calculate other way too', async function () {
    (await this.twentyFiveDaysLessThanDaysBetween.exec(this.ctx)).should.be.true();
    should(await this.fortyDaysEqualToDaysBetween.exec(this.ctx)).be.null();
    (await this.twentyFiveDaysGreaterThanDaysBetween.exec(this.ctx)).should.be.false();
  });
});

describe('DurationBetween', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly execute years between', async function () {
    (await this.yearsBetween.exec(this.ctx)).should.equal(1);
  });

  it('should properly execute months between', async function () {
    (await this.monthsBetween.exec(this.ctx)).should.equal(12);
  });

  it('should properly execute days between', async function () {
    (await this.daysBetween.exec(this.ctx)).should.equal(365 + 22);
  });

  it('should properly execute weeks between', async function () {
    (await this.weeksBetween.exec(this.ctx)).should.equal(55);
  });

  it('should properly execute years between with an uncertainty', async function () {
    (await this.yearsBetweenUncertainty.exec(this.ctx)).should.equal(0);
  });

  it('should properly execute months between with an uncertainty', async function () {
    (await this.monthsBetweenUncertainty.exec(this.ctx)).should.equal(0);
  });

  it('should properly execute weeks between with an uncertainty', async function () {
    (await this.weeksBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 4));
  });

  it('should properly execute days between with an uncertainty', async function () {
    (await this.daysBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 30));
  });
});

describe('DateMath', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly add and subtract years', async function () {
    let d = await this.plusThreeYears.exec(this.ctx);
    dateCheck(d, 2016, 6, 15);
    d = await this.minusThreeYears.exec(this.ctx);
    dateCheck(d, 2010, 6, 15);
  });

  it('should properly add and subtract months', async function () {
    let d = await this.plusEightMonths.exec(this.ctx);
    dateCheck(d, 2014, 2, 15);
    d = await this.minusEightMonths.exec(this.ctx);
    dateCheck(d, 2012, 10, 15);
  });

  it('should properly add and subtract weeks', async function () {
    let d = await this.plusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 7, 6);
    d = await this.minusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 5, 25);
  });

  it('should properly add and subtract days', async function () {
    let d = await this.plusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 7, 5);
    d = await this.minusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 5, 26);
  });
});

function dateCheck(date: any, year: number, month: number, day: number) {
  date.year.should.equal(year);
  date.month.should.equal(month);
  date.day.should.equal(day);
}
