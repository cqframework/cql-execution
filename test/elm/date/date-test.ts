import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { Uncertainty } from '../../../src/datatypes/uncertainty';

describe('Date', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute year precision correctly', function () {
    const d = this.year.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    ['month', 'day'].map(field => should.not.exist(d[field]));
  });

  it('should execute month precision correctly', function () {
    const d = this.month.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    ['day'].map(field => should.not.exist(d[field]));
  });

  it('should execute day precision correctly', function () {
    const d = this.day.exec(this.ctx);
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

  it('should return the year from the date', function () {
    this.year.exec(this.ctx).should.equal(2000);
  });

  it('should return the month from the date', function () {
    this.month.exec(this.ctx).should.equal(3);
  });

  it('should return the day from the date', function () {
    this.day.exec(this.ctx).should.equal(15);
  });

  it('should return null for imprecise components', function () {
    const result = this.impreciseComponentTuple.exec(this.ctx);
    result.should.eql({
      Year: 2000,
      Month: 3,
      Day: null
    });
  });

  it('should return null for null date', function () {
    should(this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('SameAs', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is the same', function () {
    this.sameYear.exec(this.ctx).should.be.true();
    this.notSameYear.exec(this.ctx).should.be.false();
  });

  it('should properly determine when month is the same', function () {
    this.sameMonth.exec(this.ctx).should.be.true();
    this.notSameMonth.exec(this.ctx).should.be.false();
    this.sameMonthWrongYear.exec(this.ctx).should.be.false();
  });

  it('should properly determine same as using day', function () {
    this.same.exec(this.ctx).should.be.true();
    this.notSame.exec(this.ctx).should.be.false();
  });

  it('should properly determine when day is the same', function () {
    this.sameDay.exec(this.ctx).should.be.true();
    this.notSameDay.exec(this.ctx).should.be.false();
    this.sameDayWrongMonth.exec(this.ctx).should.be.false();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('SameOrAfter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', function () {
    this.sameYear.exec(this.ctx).should.be.true();
    this.yearAfter.exec(this.ctx).should.be.true();
    this.yearBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when month is same or after', function () {
    this.sameMonth.exec(this.ctx).should.be.true();
    this.monthAfter.exec(this.ctx).should.be.true();
    this.monthBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when day is same or after', function () {
    this.sameDay.exec(this.ctx).should.be.true();
    this.dayAfter.exec(this.ctx).should.be.true();
    this.dayBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine same or after using day when no precision defined', function () {
    this.same.exec(this.ctx).should.be.true();
    this.after.exec(this.ctx).should.be.true();
    this.before.exec(this.ctx).should.be.false();
  });

  it('should consider precision units above the specified unit', function () {
    this.sameDayMonthBefore.exec(this.ctx).should.be.false();
    this.dayAfterMonthBefore.exec(this.ctx).should.be.false();
    this.dayBeforeMonthAfter.exec(this.ctx).should.be.true();
  });

  it('should handle imprecision', function () {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.true();
    this.impreciseDayMonthBefore.exec(this.ctx).should.be.false();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('SameOrBefore', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', function () {
    this.sameYear.exec(this.ctx).should.be.true();
    this.yearAfter.exec(this.ctx).should.be.false();
    this.yearBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when month is same or after', function () {
    this.sameMonth.exec(this.ctx).should.be.true();
    this.monthAfter.exec(this.ctx).should.be.false();
    this.monthBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when day is same or after', function () {
    this.sameDay.exec(this.ctx).should.be.true();
    this.dayAfter.exec(this.ctx).should.be.false();
    this.dayBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine same or after using day when no precision defined', function () {
    this.same.exec(this.ctx).should.be.true();
    this.after.exec(this.ctx).should.be.false();
    this.before.exec(this.ctx).should.be.true();
  });

  it('should consider precision units above the specified unit', function () {
    this.sameDayMonthBefore.exec(this.ctx).should.be.true();
    this.dayAfterMonthBefore.exec(this.ctx).should.be.true();
    this.dayBeforeMonthAfter.exec(this.ctx).should.be.false();
  });

  it('should handle imprecision', function () {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.false();
    this.impreciseDayMonthBefore.exec(this.ctx).should.be.true();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('After', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', function () {
    this.sameYear.exec(this.ctx).should.be.false();
    this.yearAfter.exec(this.ctx).should.be.true();
    this.yearBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when month is same or after', function () {
    this.sameMonth.exec(this.ctx).should.be.false();
    this.monthAfter.exec(this.ctx).should.be.true();
    this.monthBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when day is same or after', function () {
    this.sameDay.exec(this.ctx).should.be.false();
    this.dayAfter.exec(this.ctx).should.be.true();
    this.dayBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine same or after using day when no precision defined', function () {
    this.same.exec(this.ctx).should.be.false();
    this.after.exec(this.ctx).should.be.true();
    this.before.exec(this.ctx).should.be.false();
  });

  it('should handle imprecision', function () {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.true();
    this.impreciseDayMonthBefore.exec(this.ctx).should.be.false();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('Before', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly determine when year is same or after', function () {
    this.sameYear.exec(this.ctx).should.be.false();
    this.yearAfter.exec(this.ctx).should.be.false();
    this.yearBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when month is same or after', function () {
    this.sameMonth.exec(this.ctx).should.be.false();
    this.monthAfter.exec(this.ctx).should.be.false();
    this.monthBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when day is same or after', function () {
    this.sameDay.exec(this.ctx).should.be.false();
    this.dayAfter.exec(this.ctx).should.be.false();
    this.dayBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine same or after using day when no precision defined', function () {
    this.same.exec(this.ctx).should.be.false();
    this.after.exec(this.ctx).should.be.false();
    this.before.exec(this.ctx).should.be.true();
  });

  it('should handle imprecision', function () {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.false();
    this.impreciseDayMonthBefore.exec(this.ctx).should.be.true();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('DifferenceBetween', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly execute years between', function () {
    this.yearsBetween.exec(this.ctx).should.equal(1);
  });

  it('should properly execute months between', function () {
    this.monthsBetween.exec(this.ctx).should.equal(12);
  });

  it('should properly execute weeks between', function () {
    this.weeksBetween.exec(this.ctx).should.equal(52);
  });

  it('should properly execute days between', function () {
    this.daysBetween.exec(this.ctx).should.equal(365);
  });

  it('should properly execute years between with an uncertainty', function () {
    this.yearsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute months between with an uncertainty', function () {
    this.monthsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute weeks between with an uncertainty', function () {
    this.weeksBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 4));
  });

  it('should properly execute days between with an uncertainty', function () {
    this.daysBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 30));
  });
});

describe('DifferenceBetween Comparisons', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate days between > x', function () {
    this.greaterThan25DaysAfter.exec(this.ctx).should.be.true();
    should(this.greaterThan40DaysAfter.exec(this.ctx)).be.null();
    this.greaterThan80DaysAfter.exec(this.ctx).should.be.false();
  });

  it('should calculate days between >= x', function () {
    this.greaterOrEqualTo25DaysAfter.exec(this.ctx).should.be.true();
    should(this.greaterOrEqualTo40DaysAfter.exec(this.ctx)).be.null();
    this.greaterOrEqualTo80DaysAfter.exec(this.ctx).should.be.false();
  });

  it('should calculate days between = x', function () {
    this.equalTo25DaysAfter.exec(this.ctx).should.be.false();
    should(this.equalTo40DaysAfter.exec(this.ctx)).be.null();
    this.equalTo80DaysAfter.exec(this.ctx).should.be.false();
  });

  it('should calculate days between <= x', function () {
    this.lessOrEqualTo25DaysAfter.exec(this.ctx).should.be.false();
    should(this.lessOrEqualTo40DaysAfter.exec(this.ctx)).be.null();
    this.lessOrEqualTo80DaysAfter.exec(this.ctx).should.be.true();
  });

  it('should calculate days between < x', function () {
    this.lessThan25DaysAfter.exec(this.ctx).should.be.false();
    should(this.lessThan40DaysAfter.exec(this.ctx)).be.null();
    this.lessThan80DaysAfter.exec(this.ctx).should.be.true();
  });

  it('should calculate other way too', function () {
    this.twentyFiveDaysLessThanDaysBetween.exec(this.ctx).should.be.true();
    should(this.fortyDaysEqualToDaysBetween.exec(this.ctx)).be.null();
    this.twentyFiveDaysGreaterThanDaysBetween.exec(this.ctx).should.be.false();
  });
});

describe('DurationBetween', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly execute years between', function () {
    this.yearsBetween.exec(this.ctx).should.equal(1);
  });

  it('should properly execute months between', function () {
    this.monthsBetween.exec(this.ctx).should.equal(12);
  });

  it('should properly execute days between', function () {
    this.daysBetween.exec(this.ctx).should.equal(365 + 22);
  });

  it('should properly execute weeks between', function () {
    this.weeksBetween.exec(this.ctx).should.equal(55);
  });

  it('should properly execute years between with an uncertainty', function () {
    this.yearsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute months between with an uncertainty', function () {
    this.monthsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute weeks between with an uncertainty', function () {
    this.weeksBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 4));
  });

  it('should properly execute days between with an uncertainty', function () {
    this.daysBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 30));
  });
});

describe('DateMath', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly add and subtract years', function () {
    let d = this.plusThreeYears.exec(this.ctx);
    dateCheck(d, 2016, 6, 15);
    d = this.minusThreeYears.exec(this.ctx);
    dateCheck(d, 2010, 6, 15);
  });

  it('should properly add and subtract months', function () {
    let d = this.plusEightMonths.exec(this.ctx);
    dateCheck(d, 2014, 2, 15);
    d = this.minusEightMonths.exec(this.ctx);
    dateCheck(d, 2012, 10, 15);
  });

  it('should properly add and subtract weeks', function () {
    let d = this.plusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 7, 6);
    d = this.minusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 5, 25);
  });

  it('should properly add and subtract days', function () {
    let d = this.plusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 7, 5);
    d = this.minusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 5, 26);
  });
});

function dateCheck(date: any, year: number, month: number, day: number) {
  date.year.should.equal(year);
  date.month.should.equal(month);
  date.day.should.equal(day);
}
