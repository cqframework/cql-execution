/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const should = require('should');
const setup = require('../../setup');
const data = require('./data');
const DT = require('../../../lib/datatypes/datatypes');
const { PatientContext } =  require('../../../lib/cql');
const { Uncertainty } = require('../../../lib/datatypes/uncertainty');

describe('Date', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should execute year precision correctly', function() {
    const d = this.year.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    return [ 'month', 'day' ].map((field) => should.not.exist(d[field]));
});

  it('should execute month precision correctly', function() {
    const d = this.month.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    return [ 'day' ].map((field) => should.not.exist(d[field]));
});

  return it('should execute day precision correctly', function() {
    const d = this.day.exec(this.ctx);
    d.isDate.should.be.true();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    return d.day.should.equal(15);
  });
});

describe('DateComponentFrom', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should return the year from the date', function() {
    return this.year.exec(this.ctx).should.equal(2000);
  });

  it('should return the month from the date', function() {
    return this.month.exec(this.ctx).should.equal(3);
  });

  it('should return the day from the date', function() {
    return this.day.exec(this.ctx).should.equal(15);
  });

  it('should return null for imprecise components', function() {
    const result = this.impreciseComponentTuple.exec(this.ctx);
    return result.should.eql({
      Year: 2000,
      Month: 3,
      Day: null
    });
});

  return it('should return null for null date', function() {
    return should(this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('SameAs', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly determine when year is the same', function() {
    this.sameYear.exec(this.ctx).should.be.true();
    return this.notSameYear.exec(this.ctx).should.be.false();
  });

  it('should properly determine when month is the same', function() {
    this.sameMonth.exec(this.ctx).should.be.true();
    this.notSameMonth.exec(this.ctx).should.be.false();
    return this.sameMonthWrongYear.exec(this.ctx).should.be.false();
  });

  it('should properly determine same as using day', function() {
    this.same.exec(this.ctx).should.be.true();
    return this.notSame.exec(this.ctx).should.be.false();
  });

  it('should properly determine when day is the same', function() {
    this.sameDay.exec(this.ctx).should.be.true();
    this.notSameDay.exec(this.ctx).should.be.false();
    return this.sameDayWrongMonth.exec(this.ctx).should.be.false();
  });

  return it('should return null when either argument is null', function() {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    return should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('SameOrAfter', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly determine when year is same or after', function() {
    this.sameYear.exec(this.ctx).should.be.true();
    this.yearAfter.exec(this.ctx).should.be.true();
    return this.yearBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when month is same or after', function() {
    this.sameMonth.exec(this.ctx).should.be.true();
    this.monthAfter.exec(this.ctx).should.be.true();
    return this.monthBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when day is same or after', function() {
    this.sameDay.exec(this.ctx).should.be.true();
    this.dayAfter.exec(this.ctx).should.be.true();
    return this.dayBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine same or after using day when no precision defined', function() {
    this.same.exec(this.ctx).should.be.true();
    this.after.exec(this.ctx).should.be.true();
    return this.before.exec(this.ctx).should.be.false();
  });

  it('should consider precision units above the specified unit', function() {
    this.sameDayMonthBefore.exec(this.ctx).should.be.false();
    this.dayAfterMonthBefore.exec(this.ctx).should.be.false();
    return this.dayBeforeMonthAfter.exec(this.ctx).should.be.true();
  });

  it('should handle imprecision', function() {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.true();
    return this.impreciseDayMonthBefore.exec(this.ctx).should.be.false();
  });

  return it('should return null when either argument is null', function() {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    return should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('SameOrBefore', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly determine when year is same or after', function() {
    this.sameYear.exec(this.ctx).should.be.true();
    this.yearAfter.exec(this.ctx).should.be.false();
    return this.yearBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when month is same or after', function() {
    this.sameMonth.exec(this.ctx).should.be.true();
    this.monthAfter.exec(this.ctx).should.be.false();
    return this.monthBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when day is same or after', function() {
    this.sameDay.exec(this.ctx).should.be.true();
    this.dayAfter.exec(this.ctx).should.be.false();
    return this.dayBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine same or after using day when no precision defined', function() {
    this.same.exec(this.ctx).should.be.true();
    this.after.exec(this.ctx).should.be.false();
    return this.before.exec(this.ctx).should.be.true();
  });

  it('should consider precision units above the specified unit', function() {
    this.sameDayMonthBefore.exec(this.ctx).should.be.true();
    this.dayAfterMonthBefore.exec(this.ctx).should.be.true();
    return this.dayBeforeMonthAfter.exec(this.ctx).should.be.false();
  });

  it('should handle imprecision', function() {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.false();
    return this.impreciseDayMonthBefore.exec(this.ctx).should.be.true();
  });

  return it('should return null when either argument is null', function() {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    return should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('After', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly determine when year is same or after', function() {
    this.sameYear.exec(this.ctx).should.be.false();
    this.yearAfter.exec(this.ctx).should.be.true();
    return this.yearBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when month is same or after', function() {
    this.sameMonth.exec(this.ctx).should.be.false();
    this.monthAfter.exec(this.ctx).should.be.true();
    return this.monthBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when day is same or after', function() {
    this.sameDay.exec(this.ctx).should.be.false();
    this.dayAfter.exec(this.ctx).should.be.true();
    return this.dayBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine same or after using day when no precision defined', function() {
    this.same.exec(this.ctx).should.be.false();
    this.after.exec(this.ctx).should.be.true();
    return this.before.exec(this.ctx).should.be.false();
  });

  it('should handle imprecision', function() {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.true();
    return this.impreciseDayMonthBefore.exec(this.ctx).should.be.false();
  });

  return it('should return null when either argument is null', function() {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    return should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('Before', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly determine when year is same or after', function() {
    this.sameYear.exec(this.ctx).should.be.false();
    this.yearAfter.exec(this.ctx).should.be.false();
    return this.yearBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when month is same or after', function() {
    this.sameMonth.exec(this.ctx).should.be.false();
    this.monthAfter.exec(this.ctx).should.be.false();
    return this.monthBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when day is same or after', function() {
    this.sameDay.exec(this.ctx).should.be.false();
    this.dayAfter.exec(this.ctx).should.be.false();
    return this.dayBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine same or after using day when no precision defined', function() {
    this.same.exec(this.ctx).should.be.false();
    this.after.exec(this.ctx).should.be.false();
    return this.before.exec(this.ctx).should.be.true();
  });

  it('should handle imprecision', function() {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.false();
    return this.impreciseDayMonthBefore.exec(this.ctx).should.be.true();
  });

  return it('should return null when either argument is null', function() {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    return should(this.nullBoth.exec(this.ctx)).be.null();
  });
});

describe('DifferenceBetween', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly execute years between', function() {
    return this.yearsBetween.exec(this.ctx).should.equal(1);
  });

  it('should properly execute months between', function() {
    return this.monthsBetween.exec(this.ctx).should.equal(12);
  });

  it('should properly execute weeks between', function() {
    return this.weeksBetween.exec(this.ctx).should.equal(52);
  });

  it('should properly execute days between', function() {
    return this.daysBetween.exec(this.ctx).should.equal(365);
  });

  it('should properly execute years between with an uncertainty', function() {
    return this.yearsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute months between with an uncertainty', function() {
    return this.monthsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute weeks between with an uncertainty', function() {
    return this.weeksBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 4));
  });

  return it('should properly execute days between with an uncertainty', function() {
    return this.daysBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 30));
  });
});

describe('DifferenceBetween Comparisons', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should calculate days between > x', function() {
    this.greaterThan25DaysAfter.exec(this.ctx).should.be.true();
    should(this.greaterThan40DaysAfter.exec(this.ctx)).be.null();
    return this.greaterThan80DaysAfter.exec(this.ctx).should.be.false();
  });

  it('should calculate days between >= x', function() {
    this.greaterOrEqualTo25DaysAfter.exec(this.ctx).should.be.true();
    should(this.greaterOrEqualTo40DaysAfter.exec(this.ctx)).be.null();
    return this.greaterOrEqualTo80DaysAfter.exec(this.ctx).should.be.false();
  });

  it('should calculate days between = x', function() {
    this.equalTo25DaysAfter.exec(this.ctx).should.be.false();
    should(this.equalTo40DaysAfter.exec(this.ctx)).be.null();
    return this.equalTo80DaysAfter.exec(this.ctx).should.be.false();
  });

  it('should calculate days between <= x', function() {
    this.lessOrEqualTo25DaysAfter.exec(this.ctx).should.be.false();
    should(this.lessOrEqualTo40DaysAfter.exec(this.ctx)).be.null();
    return this.lessOrEqualTo80DaysAfter.exec(this.ctx).should.be.true();
  });

  it('should calculate days between < x', function() {
    this.lessThan25DaysAfter.exec(this.ctx).should.be.false();
    should(this.lessThan40DaysAfter.exec(this.ctx)).be.null();
    return this.lessThan80DaysAfter.exec(this.ctx).should.be.true();
  });

  return it('should calculate other way too', function() {
    this.twentyFiveDaysLessThanDaysBetween.exec(this.ctx).should.be.true();
    should(this.fortyDaysEqualToDaysBetween.exec(this.ctx)).be.null();
    return this.twentyFiveDaysGreaterThanDaysBetween.exec(this.ctx).should.be.false();
  });
});

describe('DurationBetween', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly execute years between', function() {
    return this.yearsBetween.exec(this.ctx).should.equal(1);
  });

  it('should properly execute months between', function() {
    return this.monthsBetween.exec(this.ctx).should.equal(12);
  });

  it('should properly execute days between', function() {
    return this.daysBetween.exec(this.ctx).should.equal(365 + 22);
  });

  it('should properly execute weeks between', function() {
    return this.weeksBetween.exec(this.ctx).should.equal(55);
  });

  it('should properly execute years between with an uncertainty', function() {
    return this.yearsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute months between with an uncertainty', function() {
    return this.monthsBetweenUncertainty.exec(this.ctx).should.equal(0);
  });

  it('should properly execute weeks between with an uncertainty', function() {
    return this.weeksBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 4));
  });

  return it('should properly execute days between with an uncertainty', function() {
    return this.daysBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 30));
  });
});

describe('DateMath', function() {
  this.beforeEach(function() {
    return setup(this, data);
  });

  it('should properly add and subtract years', function() {
    let d = this.plusThreeYears.exec(this.ctx);
    dateCheck(d, 2016, 6, 15);
    d = this.minusThreeYears.exec(this.ctx);
    return dateCheck(d, 2010, 6, 15);
  });

  it('should properly add and subtract months', function() {
    let d = this.plusEightMonths.exec(this.ctx);
    dateCheck(d, 2014, 2, 15);
    d = this.minusEightMonths.exec(this.ctx);
    return dateCheck(d, 2012, 10, 15);
  });

  it('should properly add and subtract weeks', function() {
    let d = this.plusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 7, 6);
    d = this.minusThreeWeeks.exec(this.ctx);
    return dateCheck(d, 2013, 5, 25);
  });

  return it('should properly add and subtract days', function() {
    let d = this.plusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 7, 5);
    d = this.minusTwentyDays.exec(this.ctx);
    return dateCheck(d, 2013, 5, 26);
  });
});

var dateCheck = function(date, year, month, day) {
  date.year.should.equal(year);
  date.month.should.equal(month);
  return date.day.should.equal(day);
};
