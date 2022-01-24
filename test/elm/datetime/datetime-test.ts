import should from 'should';
import setup from '../../setup';
const data = require('./data');
import * as DT from '../../../src/datatypes/datatypes';
import { PatientContext } from '../../../src/cql';
import { Uncertainty } from '../../../src/datatypes/uncertainty';

describe('DateTime', () => {
  beforeEach(function () {
    setup(this, data);
    this.defaultOffset = (new Date().getTimezoneOffset() / 60) * -1;
  });

  it('should execute year precision correctly', function () {
    const d = this.year.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['month', 'day', 'hour', 'minute', 'second', 'millisecond'].forEach(field =>
      should.not.exist(d[field])
    );
  });

  it('should execute month precision correctly', function () {
    const d = this.month.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['day', 'hour', 'minute', 'second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute day precision correctly', function () {
    const d = this.day.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['hour', 'minute', 'second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute hour precision correctly', function () {
    const d = this.hour.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['minute', 'second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute minute precision correctly', function () {
    const d = this.minute.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute second precision correctly', function () {
    const d = this.second.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.timezoneOffset.should.equal(this.defaultOffset);
    should.not.exist(d.millisecond);
  });

  it('should execute millisecond precision correctly', function () {
    const d = this.millisecond.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    d.timezoneOffset.should.equal(this.defaultOffset);
  });

  it('should execute timezone offsets correctly', function () {
    const d = this.timezoneOffset.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    d.timezoneOffset.should.equal(-8);
  });
});

describe('Time', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should execute hour precision correctly', function () {
    const d = this.hour.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    ['minute', 'second', 'millisecond', 'timezoneOffset'].forEach(field =>
      should.not.exist(d[field])
    );
  });

  it('should execute minute precision correctly', function () {
    const d = this.minute.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    should(d.timezoneOffset).be.null();
    ['second', 'millisecond', 'timezoneOffset'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute second precision correctly', function () {
    const d = this.second.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    should(d.timezoneOffset).be.null();
    should.not.exist(d.millisecond);
  });

  it('should execute millisecond precision correctly', function () {
    const d = this.millisecond.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.second.should.equal(59);
    d.millisecond.should.equal(456);
    should(d.timezoneOffset).be.null();
  });
});

describe('Today', () => {
  beforeEach(function () {
    setup(this, data);
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters
    );
  });

  it('should return date of today', function () {
    const today = this.todayVar.exec(this.ctx);
    today.isDate.should.be.true();
    today.year.should.equal(this.ctx.getExecutionDateTime().year);
    today.month.should.equal(this.ctx.getExecutionDateTime().month);
    today.day.should.equal(this.ctx.getExecutionDateTime().day);
    ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset'].forEach(field =>
      should.not.exist(today[field])
    );
  });

  it('should throw an exception because no execution datetime has been set', function () {
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(new Date(), '0')
    );
    this.ctx.executionDateTime = this.ctx.executionDateTime = null;
    should(() => this.todayVar.exec(this.ctx)).throw('No Execution DateTime has been set');
  });
});

describe('Now', () => {
  beforeEach(function () {
    setup(this, data);
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters
    );
  });

  it('should return all date components representing now', function () {
    const now = this.nowVar.exec(this.ctx);
    now.isTime().should.be.false();
    now.year.should.equal(this.ctx.getExecutionDateTime().year);
    now.month.should.equal(this.ctx.getExecutionDateTime().month);
    now.day.should.equal(this.ctx.getExecutionDateTime().day);
    now.hour.should.equal(this.ctx.getExecutionDateTime().hour);
    now.minute.should.exist;
    now.second.should.exist;
    now.millisecond.should.exist;
    now.timezoneOffset.should.equal(this.ctx.getTimezoneOffset());
  });

  it('should return all date components representing now using a passed in timezone', function () {
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(new Date(), '0')
    );
    const now = this.nowVar.exec(this.ctx);
    now.isTime().should.be.false();
    now.year.should.equal(this.ctx.getExecutionDateTime().year);
    now.month.should.equal(this.ctx.getExecutionDateTime().month);
    now.day.should.equal(this.ctx.getExecutionDateTime().day);
    now.hour.should.equal(this.ctx.getExecutionDateTime().hour);
    now.minute.should.exist;
    now.second.should.exist;
    now.millisecond.should.exist;
    now.timezoneOffset.should.equal('0');
  });

  it('should return all date components representing now using a passed in timezone using a child context', function () {
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(new Date(), '0')
    );
    this.child_ctx = this.ctx.childContext();
    const now = this.nowVar.exec(this.child_ctx);
    now.isTime().should.be.false();
    now.year.should.equal(this.child_ctx.getExecutionDateTime().year);
    now.month.should.equal(this.child_ctx.getExecutionDateTime().month);
    now.day.should.equal(this.child_ctx.getExecutionDateTime().day);
    now.hour.should.equal(this.child_ctx.getExecutionDateTime().hour);
    now.minute.should.exist;
    now.second.should.exist;
    now.millisecond.should.exist;
    now.timezoneOffset.should.equal(this.child_ctx.getTimezoneOffset());
    now.timezoneOffset.should.equal('0');
  });
});

describe('TimeOfDay', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return all date components representing now', function () {
    const jsDate = new Date();
    const tod = this.timeOfDayVar.exec(this.ctx);
    tod.isTime().should.be.true();
    tod.year.should.equal(0);
    tod.month.should.equal(1);
    tod.day.should.equal(1);
    tod.hour.should.equal(jsDate.getHours());
    tod.minute.should.exist;
    tod.second.should.exist;
    tod.millisecond.should.exist;
    should(tod.timezoneOffset).be.null();
  });
});

describe('DateTimeComponentFrom', () => {
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

  it('should return the hour from the date', function () {
    this.hour.exec(this.ctx).should.equal(13);
  });

  it('should return the minute from the date', function () {
    this.minute.exec(this.ctx).should.equal(30);
  });

  it('should return the second from the date', function () {
    this.second.exec(this.ctx).should.equal(25);
  });

  it('should return the millisecond from the date', function () {
    this.millisecond.exec(this.ctx).should.equal(200);
  });

  it('should return null for imprecise components', function () {
    const result = this.impreciseComponentTuple.exec(this.ctx);
    result.should.eql({
      Year: 2000,
      Month: 3,
      Day: 15,
      Hour: null,
      Minute: null,
      Second: null,
      Millisecond: null
    });
  });

  it('should return null for null date', function () {
    should(this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('DateFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the date from a fully defined DateTime', function () {
    const date = this.date.exec(this.ctx);
    date.year.should.equal(2000);
    date.month.should.equal(3);
    date.day.should.equal(15);
    should.not.exist(date.timezoneOffset);
    should.not.exist(date.hour);
    should.not.exist(date.minute);
    should.not.exist(date.second);
    should.not.exist(date.millisecond);
  });

  it('should return the defined date components from an imprecise date', function () {
    const date = this.impreciseDate.exec(this.ctx);
    date.year.should.equal(2000);
    should.not.exist(date.month);
    should.not.exist(date.day);
    should.not.exist(date.hour);
    should.not.exist(date.minute);
    should.not.exist(date.second);
    should.not.exist(date.millisecond);
  });

  it('should return null for null date', function () {
    should(this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('TimeFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the time from a fully defined DateTime (and date should be lowest expressible date)', function () {
    const time = this.time.exec(this.ctx);
    time.year.should.equal(0);
    time.month.should.equal(1);
    time.day.should.equal(1);
    time.hour.should.equal(13);
    time.minute.should.equal(30);
    time.second.should.equal(25);
    time.millisecond.should.equal(200);
    should(time.timezoneOffset).be.null();
  });

  it('should return the null time components from a date with no time', function () {
    const noTime = this.noTime.exec(this.ctx);
    noTime.year.should.equal(0);
    noTime.month.should.equal(1);
    noTime.day.should.equal(1);
    should.not.exist(noTime.hour);
    should.not.exist(noTime.minute);
    should.not.exist(noTime.second);
    should.not.exist(noTime.millisecond);
    should(noTime.timezoneOffset).be.null();
  });

  it('should return null for null date', function () {
    should(this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('TimezoneOffsetFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the timezoneoffset from a fully defined DateTime', function () {
    this.centralEuropean.exec(this.ctx).should.equal(1);
    this.easternStandard.exec(this.ctx).should.equal(-5);
  });

  it('should return the default timezone when not specified', function () {
    this.defaultTimezone.exec(this.ctx).should.equal((new Date().getTimezoneOffset() / 60) * -1);
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

  it('should properly determine when day is the same', function () {
    this.sameDay.exec(this.ctx).should.be.true();
    this.notSameDay.exec(this.ctx).should.be.false();
    this.sameDayWrongMonth.exec(this.ctx).should.be.false();
  });

  it('should properly determine when hour is the same', function () {
    this.sameHour.exec(this.ctx).should.be.true();
    this.notSameHour.exec(this.ctx).should.be.false();
    this.sameHourWrongDay.exec(this.ctx).should.be.false();
  });

  it('should properly determine when minute is the same', function () {
    this.sameMinute.exec(this.ctx).should.be.true();
    this.notSameMinute.exec(this.ctx).should.be.false();
    this.sameMinuteWrongHour.exec(this.ctx).should.be.false();
  });

  it('should properly determine when second is the same', function () {
    this.sameSecond.exec(this.ctx).should.be.true();
    this.notSameSecond.exec(this.ctx).should.be.false();
    this.sameSecondWrongMinute.exec(this.ctx).should.be.false();
  });

  it('should properly determine when millisecond is the same', function () {
    this.sameMillisecond.exec(this.ctx).should.be.true();
    this.notSameMillisecond.exec(this.ctx).should.be.false();
    this.sameMillisecondWrongSecond.exec(this.ctx).should.be.false();
  });

  it('should properly determine same as using milliseconds', function () {
    this.same.exec(this.ctx).should.be.true();
    this.notSame.exec(this.ctx).should.be.false();
  });

  it('should normalize timezones when determining sameness', function () {
    this.sameNormalized.exec(this.ctx).should.be.true();
    this.sameHourWrongTimezone.exec(this.ctx).should.be.false();
  });

  it('should handle imprecision', function () {
    should(this.impreciseHour.exec(this.ctx)).be.null();
    this.impreciseHourWrongDay.exec(this.ctx).should.be.false();
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

  it('should properly determine when hour is same or after', function () {
    this.sameHour.exec(this.ctx).should.be.true();
    this.hourAfter.exec(this.ctx).should.be.true();
    this.hourBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when minute is same or after', function () {
    this.sameMinute.exec(this.ctx).should.be.true();
    this.minuteAfter.exec(this.ctx).should.be.true();
    this.minuteBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when second is same or after', function () {
    this.sameSecond.exec(this.ctx).should.be.true();
    this.secondAfter.exec(this.ctx).should.be.true();
    this.secondBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when millisecond is same or after', function () {
    this.sameMillisecond.exec(this.ctx).should.be.true();
    this.millisecondAfter.exec(this.ctx).should.be.true();
    this.millisecondBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine same or after using ms when no precision defined', function () {
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

  it('should normalize timezones', function () {
    this.sameHourNormalizeZones.exec(this.ctx).should.be.true();
    this.hourAfterNormalizeZones.exec(this.ctx).should.be.true();
    this.hourBeforeNormalizeZones.exec(this.ctx).should.be.false();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });

  it('should properly treat "on or after" the same as "same or after"', function () {
    this.sameOOA.exec(this.ctx).should.be.true();
    this.afterOOA.exec(this.ctx).should.be.true();
    this.beforeOOA.exec(this.ctx).should.be.false();
    should(this.nullLeftOOA.exec(this.ctx)).be.null();
    should(this.nullRightOOA.exec(this.ctx)).be.null();
    should(this.nullBothOOA.exec(this.ctx)).be.null();
  });

  it('should properly treat "after or on" the same as "same or after"', function () {
    this.sameAOO.exec(this.ctx).should.be.true();
    this.afterAOO.exec(this.ctx).should.be.true();
    this.beforeAOO.exec(this.ctx).should.be.false();
    should(this.nullLeftAOO.exec(this.ctx)).be.null();
    should(this.nullRightAOO.exec(this.ctx)).be.null();
    should(this.nullBothAOO.exec(this.ctx)).be.null();
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

  it('should properly determine when hour is same or after', function () {
    this.sameHour.exec(this.ctx).should.be.true();
    this.hourAfter.exec(this.ctx).should.be.false();
    this.hourBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when minute is same or after', function () {
    this.sameMinute.exec(this.ctx).should.be.true();
    this.minuteAfter.exec(this.ctx).should.be.false();
    this.minuteBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when second is same or after', function () {
    this.sameSecond.exec(this.ctx).should.be.true();
    this.secondAfter.exec(this.ctx).should.be.false();
    this.secondBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when millisecond is same or after', function () {
    this.sameMillisecond.exec(this.ctx).should.be.true();
    this.millisecondAfter.exec(this.ctx).should.be.false();
    this.millisecondBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine same or after using ms when no precision defined', function () {
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

  it('should normalize timezones', function () {
    this.sameHourNormalizeZones.exec(this.ctx).should.be.true();
    this.hourAfterNormalizeZones.exec(this.ctx).should.be.false();
    this.hourBeforeNormalizeZones.exec(this.ctx).should.be.true();
  });

  it('should return null when either argument is null', function () {
    should(this.nullLeft.exec(this.ctx)).be.null();
    should(this.nullRight.exec(this.ctx)).be.null();
    should(this.nullBoth.exec(this.ctx)).be.null();
  });

  it('should properly treat "on or before" the same as "same or before"', function () {
    this.sameOOB.exec(this.ctx).should.be.true();
    this.afterOOB.exec(this.ctx).should.be.false();
    this.beforeOOB.exec(this.ctx).should.be.true();
    should(this.nullLeftOOB.exec(this.ctx)).be.null();
    should(this.nullRightOOB.exec(this.ctx)).be.null();
    should(this.nullBothOOB.exec(this.ctx)).be.null();
  });

  it('should properly treat "before or on" the same as "same or before"', function () {
    this.sameBOO.exec(this.ctx).should.be.true();
    this.afterBOO.exec(this.ctx).should.be.false();
    this.beforeBOO.exec(this.ctx).should.be.true();
    should(this.nullLeftBOO.exec(this.ctx)).be.null();
    should(this.nullRightBOO.exec(this.ctx)).be.null();
    should(this.nullBothBOO.exec(this.ctx)).be.null();
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

  it('should properly determine when hour is same or after', function () {
    this.sameHour.exec(this.ctx).should.be.false();
    this.hourAfter.exec(this.ctx).should.be.true();
    this.hourBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when minute is same or after', function () {
    this.sameMinute.exec(this.ctx).should.be.false();
    this.minuteAfter.exec(this.ctx).should.be.true();
    this.minuteBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when second is same or after', function () {
    this.sameSecond.exec(this.ctx).should.be.false();
    this.secondAfter.exec(this.ctx).should.be.true();
    this.secondBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine when millisecond is same or after', function () {
    this.sameMillisecond.exec(this.ctx).should.be.false();
    this.millisecondAfter.exec(this.ctx).should.be.true();
    this.millisecondBefore.exec(this.ctx).should.be.false();
  });

  it('should properly determine same or after using ms when no precision defined', function () {
    this.same.exec(this.ctx).should.be.false();
    this.after.exec(this.ctx).should.be.true();
    this.before.exec(this.ctx).should.be.false();
  });

  it('should handle imprecision', function () {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.true();
    this.impreciseDayMonthBefore.exec(this.ctx).should.be.false();
  });

  it('should normalize timezones', function () {
    this.sameHourNormalizeZones.exec(this.ctx).should.be.false();
    this.hourAfterNormalizeZones.exec(this.ctx).should.be.true();
    this.hourBeforeNormalizeZones.exec(this.ctx).should.be.false();
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

  it('should properly determine when hour is same or after', function () {
    this.sameHour.exec(this.ctx).should.be.false();
    this.hourAfter.exec(this.ctx).should.be.false();
    this.hourBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when minute is same or after', function () {
    this.sameMinute.exec(this.ctx).should.be.false();
    this.minuteAfter.exec(this.ctx).should.be.false();
    this.minuteBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when second is same or after', function () {
    this.sameSecond.exec(this.ctx).should.be.false();
    this.secondAfter.exec(this.ctx).should.be.false();
    this.secondBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine when millisecond is same or after', function () {
    this.sameMillisecond.exec(this.ctx).should.be.false();
    this.millisecondAfter.exec(this.ctx).should.be.false();
    this.millisecondBefore.exec(this.ctx).should.be.true();
  });

  it('should properly determine same or after using ms when no precision defined', function () {
    this.same.exec(this.ctx).should.be.false();
    this.after.exec(this.ctx).should.be.false();
    this.before.exec(this.ctx).should.be.true();
  });

  it('should handle imprecision', function () {
    should(this.impreciseDay.exec(this.ctx)).be.null();
    this.impreciseDayMonthAfter.exec(this.ctx).should.be.false();
    this.impreciseDayMonthBefore.exec(this.ctx).should.be.true();
  });

  it('should normalize timezones', function () {
    this.sameHourNormalizeZones.exec(this.ctx).should.be.false();
    this.hourAfterNormalizeZones.exec(this.ctx).should.be.false();
    this.hourBeforeNormalizeZones.exec(this.ctx).should.be.true();
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

  it('should properly execute hours between', function () {
    this.hoursBetween.exec(this.ctx).should.equal(24 * 365);
  });

  it('should properly execute minutes between', function () {
    this.minutesBetween.exec(this.ctx).should.equal(60 * 24 * 365);
  });

  it('should properly execute seconds between', function () {
    this.secondsBetween.exec(this.ctx).should.equal(60 * 60 * 24 * 365);
  });

  it('should properly execute milliseconds between', function () {
    this.millisecondsBetween.exec(this.ctx).should.equal(1000 * 60 * 60 * 24 * 365);
  });

  it('should properly execute milliseconds between when date 1 is after date 2', function () {
    this.millisecondsBetweenReversed.exec(this.ctx).should.equal(-1 * 1000 * 60 * 60 * 24 * 365);
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

  it('should properly execute hours between with an uncertainty', function () {
    this.hoursBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 743));
  });

  it('should properly execute minutes between with an uncertainty', function () {
    this.minutesBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 44639));
  });

  it('should properly execute seconds between with an uncertainty', function () {
    this.secondsBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 2678399));
  });

  it('should properly execute milliseconds between with an uncertainty', function () {
    this.millisecondsBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 2678399999));
  });

  it('should properly execute seconds between when date 1 is after date 2 with an uncertainty', function () {
    this.millisecondsBetweenReversedUncertainty
      .exec(this.ctx)
      .should.eql(new Uncertainty(-2678399999, 0));
  });

  it('should properly execute hours between when springing ahead for DST', function () {
    this.hoursBetween1and3CrossingSpringDST.exec(this.ctx).should.equal(1);
  });

  it('should properly execute hours between when falling back for DST', function () {
    this.hoursBetween1and3CrossingFallDST.exec(this.ctx).should.equal(3);
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

  it('should properly determine that Sep to Dec is NOT <= 2 months', function () {
    this.bonnieTestCase.exec(this.ctx).should.be.false();
  });

  it('should properly determine that Sep to Dec is NOT <= 2 months with 0 timezone offset (Zulu)', function () {
    // THIS for some reason is BROKEN!
    this.bonnieTestCaseZulu.exec(this.ctx).should.be.false();
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
    this.daysBetween.exec(this.ctx).should.equal(365 + 21);
  });

  it('should properly execute weeks between', function () {
    this.weeksBetween.exec(this.ctx).should.equal(55);
  });

  it('should properly execute hours between', function () {
    this.hoursBetween.exec(this.ctx).should.equal(24 * (365 + 21) + 11);
  });

  it('should properly execute minutes between', function () {
    this.minutesBetween.exec(this.ctx).should.equal(60 * (24 * (365 + 21) + 11) + 29);
  });

  it('should properly execute seconds between', function () {
    this.secondsBetween.exec(this.ctx).should.equal(60 * (60 * (24 * (365 + 21) + 11) + 29) + 29);
  });

  it('should properly execute milliseconds between', function () {
    this.millisecondsBetween
      .exec(this.ctx)
      .should.equal(1000 * (60 * (60 * (24 * (365 + 21) + 11) + 29) + 29) + 500);
  });

  it('should properly execute milliseconds between when date 1 is after date 2', function () {
    this.millisecondsBetweenReversed
      .exec(this.ctx)
      .should.equal(-1 * 1000 * (60 * (60 * (24 * (365 + 21) + 11) + 29) + 29) - 500);
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

  it('should properly execute hours between with an uncertainty', function () {
    this.hoursBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 743));
  });

  it('should properly execute minutes between with an uncertainty', function () {
    this.minutesBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 44639));
  });

  it('should properly execute seconds between with an uncertainty', function () {
    this.secondsBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 2678399));
  });

  it('should properly execute milliseconds between with an uncertainty', function () {
    this.millisecondsBetweenUncertainty.exec(this.ctx).should.eql(new Uncertainty(0, 2678399999));
  });

  it('should properly execute seconds between when date 1 is after date 2 with an uncertainty', function () {
    this.millisecondsBetweenReversedUncertainty
      .exec(this.ctx)
      .should.eql(new Uncertainty(-2678399999, 0));
  });

  it('should properly execute hours between when falling back for DST', function () {
    this.hoursBetween1and3CrossingSpringDST.exec(this.ctx).should.equal(1);
  });

  it('should properly execute hours between when springing ahead for DST', function () {
    this.hoursBetween1and3CrossingFallDST.exec(this.ctx).should.equal(3);
  });
});

describe('DateMath', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly add and subtract years', function () {
    let d = this.plusThreeYears.exec(this.ctx);
    dateCheck(d, 2016, 6, 15, 0, 0, 0, 0);
    d = this.minusThreeYears.exec(this.ctx);
    dateCheck(d, 2010, 6, 15, 0, 0, 0, 0);
  });

  it('should properly add and subtract months', function () {
    let d = this.plusEightMonths.exec(this.ctx);
    dateCheck(d, 2014, 2, 15, 0, 0, 0, 0);
    d = this.minusEightMonths.exec(this.ctx);
    dateCheck(d, 2012, 10, 15, 0, 0, 0, 0);
  });

  it('should properly add and subtract weeks', function () {
    let d = this.plusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 7, 6, 0, 0, 0, 0);
    d = this.minusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 5, 25, 0, 0, 0, 0);
  });

  it('should properly add and subtract days', function () {
    let d = this.plusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 7, 5, 0, 0, 0, 0);
    d = this.minusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 5, 26, 0, 0, 0, 0);
  });

  it('should properly add and subtract hours', function () {
    let d = this.plusThreeHours.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 3, 0, 0, 0);
    d = this.minusThreeHours.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 21, 0, 0, 0);
  });

  it('should properly add and subtract minutes', function () {
    let d = this.plusThreeMinutes.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 0, 3, 0, 0);
    d = this.minusThreeMinutes.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 23, 57, 0, 0);
  });

  it('should properly add and subtract seconds', function () {
    let d = this.plusThreeSeconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 0, 0, 3, 0);
    d = this.minusThreeSeconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 23, 59, 57, 0);
  });

  it('should properly add and subtract milliseconds', function () {
    let d = this.plusThreeMilliseconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 0, 0, 0, 3);
    d = this.minusThreeMilliseconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 23, 59, 59, 997);
  });
});

function dateCheck(
  date: any,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number
) {
  date.year.should.equal(year);
  date.month.should.equal(month);
  date.day.should.equal(day);
  date.hour.should.equal(hour);
  date.minute.should.equal(minute);
  date.second.should.equal(second);
  date.millisecond.should.equal(millisecond);
}
