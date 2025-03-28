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

  it('should execute year precision correctly', async function () {
    const d = await this.year.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['month', 'day', 'hour', 'minute', 'second', 'millisecond'].forEach(field =>
      should.not.exist(d[field])
    );
  });

  it('should execute month precision correctly', async function () {
    const d = await this.month.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['day', 'hour', 'minute', 'second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute day precision correctly', async function () {
    const d = await this.day.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['hour', 'minute', 'second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute hour precision correctly', async function () {
    const d = await this.hour.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['minute', 'second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute minute precision correctly', async function () {
    const d = await this.minute.exec(this.ctx);
    d.isTime().should.be.false();
    d.year.should.equal(2012);
    d.month.should.equal(2);
    d.day.should.equal(15);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    d.timezoneOffset.should.equal(this.defaultOffset);
    ['second', 'millisecond'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute second precision correctly', async function () {
    const d = await this.second.exec(this.ctx);
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

  it('should execute millisecond precision correctly', async function () {
    const d = await this.millisecond.exec(this.ctx);
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

  it('should execute timezone offsets correctly', async function () {
    const d = await this.timezoneOffset.exec(this.ctx);
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

  it('should execute hour precision correctly', async function () {
    const d = await this.hour.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    ['minute', 'second', 'millisecond', 'timezoneOffset'].forEach(field =>
      should.not.exist(d[field])
    );
  });

  it('should execute minute precision correctly', async function () {
    const d = await this.minute.exec(this.ctx);
    d.isTime().should.be.true();
    d.year.should.equal(0);
    d.month.should.equal(1);
    d.day.should.equal(1);
    d.hour.should.equal(12);
    d.minute.should.equal(10);
    should(d.timezoneOffset).be.null();
    ['second', 'millisecond', 'timezoneOffset'].forEach(field => should.not.exist(d[field]));
  });

  it('should execute second precision correctly', async function () {
    const d = await this.second.exec(this.ctx);
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

  it('should execute millisecond precision correctly', async function () {
    const d = await this.millisecond.exec(this.ctx);
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

  it('should return date of today', async function () {
    const today = await this.todayVar.exec(this.ctx);
    today.isDate.should.be.true();
    today.year.should.equal(this.ctx.getExecutionDateTime().year);
    today.month.should.equal(this.ctx.getExecutionDateTime().month);
    today.day.should.equal(this.ctx.getExecutionDateTime().day);
    ['hour', 'minute', 'second', 'millisecond', 'timezoneOffset'].forEach(field =>
      should.not.exist(today[field])
    );
    return this.todayVar.exec(this.ctx).should.not.be.rejected();
  });

  it('should throw an exception because no execution datetime has been set', async function () {
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(new Date(), '0')
    );
    this.ctx.executionDateTime = null;
    return this.todayVar
      .exec(this.ctx)
      .should.be.rejectedWith('No Execution DateTime has been set');
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

  it('should return all date components representing now', async function () {
    const now = await this.nowVar.exec(this.ctx);
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

  it('should return all date components representing now using a passed in timezone', async function () {
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(new Date(), '0')
    );
    const now = await this.nowVar.exec(this.ctx);
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

  it('should return all date components representing now using a passed in timezone using a child context', async function () {
    this.ctx = new PatientContext(
      this.ctx.library,
      this.ctx.patient,
      this.ctx.codeService,
      this.ctx.parameters,
      DT.DateTime.fromJSDate(new Date(), '0')
    );
    this.child_ctx = this.ctx.childContext();
    const now = await this.nowVar.exec(this.child_ctx);
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

  it('should return all date components representing now', async function () {
    const jsDate = new Date();
    const tod = await this.timeOfDayVar.exec(this.ctx);
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

  it('should return the year from the date', async function () {
    (await this.year.exec(this.ctx)).should.equal(2000);
  });

  it('should return the month from the date', async function () {
    (await this.month.exec(this.ctx)).should.equal(3);
  });

  it('should return the day from the date', async function () {
    (await this.day.exec(this.ctx)).should.equal(15);
  });

  it('should return the hour from the date', async function () {
    (await this.hour.exec(this.ctx)).should.equal(13);
  });

  it('should return the minute from the date', async function () {
    (await this.minute.exec(this.ctx)).should.equal(30);
  });

  it('should return the second from the date', async function () {
    (await this.second.exec(this.ctx)).should.equal(25);
  });

  it('should return the millisecond from the date', async function () {
    (await this.millisecond.exec(this.ctx)).should.equal(200);
  });

  it('should return null for imprecise components', async function () {
    const result = await this.impreciseComponentTuple.exec(this.ctx);
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

  it('should return null for null date', async function () {
    should(await this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('DateFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the date from a fully defined DateTime', async function () {
    const date = await this.date.exec(this.ctx);
    date.year.should.equal(2000);
    date.month.should.equal(3);
    date.day.should.equal(15);
    should.not.exist(date.timezoneOffset);
    should.not.exist(date.hour);
    should.not.exist(date.minute);
    should.not.exist(date.second);
    should.not.exist(date.millisecond);
  });

  it('should return the defined date components from an imprecise date', async function () {
    const date = await this.impreciseDate.exec(this.ctx);
    date.year.should.equal(2000);
    should.not.exist(date.month);
    should.not.exist(date.day);
    should.not.exist(date.hour);
    should.not.exist(date.minute);
    should.not.exist(date.second);
    should.not.exist(date.millisecond);
  });

  it('should return null for null date', async function () {
    should(await this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('TimeFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the time from a fully defined DateTime (and date should be lowest expressible date)', async function () {
    const time = await this.time.exec(this.ctx);
    time.year.should.equal(0);
    time.month.should.equal(1);
    time.day.should.equal(1);
    time.hour.should.equal(13);
    time.minute.should.equal(30);
    time.second.should.equal(25);
    time.millisecond.should.equal(200);
    should(time.timezoneOffset).be.null();
  });

  it('should return the null time components from a date with no time', async function () {
    const noTime = await this.noTime.exec(this.ctx);
    noTime.year.should.equal(0);
    noTime.month.should.equal(1);
    noTime.day.should.equal(1);
    should.not.exist(noTime.hour);
    should.not.exist(noTime.minute);
    should.not.exist(noTime.second);
    should.not.exist(noTime.millisecond);
    should(noTime.timezoneOffset).be.null();
  });

  it('should return null for null date', async function () {
    should(await this.nullDate.exec(this.ctx)).be.null();
  });
});

describe('TimezoneOffsetFrom', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the timezoneoffset from a fully defined DateTime', async function () {
    (await this.centralEuropean.exec(this.ctx)).should.equal(1);
    (await this.easternStandard.exec(this.ctx)).should.equal(-5);
  });

  it('should return the default timezone when not specified', async function () {
    (await this.defaultTimezone.exec(this.ctx)).should.equal(
      (new Date().getTimezoneOffset() / 60) * -1
    );
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

  it('should properly determine when day is the same', async function () {
    (await this.sameDay.exec(this.ctx)).should.be.true();
    (await this.notSameDay.exec(this.ctx)).should.be.false();
    (await this.sameDayWrongMonth.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when hour is the same', async function () {
    (await this.sameHour.exec(this.ctx)).should.be.true();
    (await this.notSameHour.exec(this.ctx)).should.be.false();
    (await this.sameHourWrongDay.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when minute is the same', async function () {
    (await this.sameMinute.exec(this.ctx)).should.be.true();
    (await this.notSameMinute.exec(this.ctx)).should.be.false();
    (await this.sameMinuteWrongHour.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when second is the same', async function () {
    (await this.sameSecond.exec(this.ctx)).should.be.true();
    (await this.notSameSecond.exec(this.ctx)).should.be.false();
    (await this.sameSecondWrongMinute.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when millisecond is the same', async function () {
    (await this.sameMillisecond.exec(this.ctx)).should.be.true();
    (await this.notSameMillisecond.exec(this.ctx)).should.be.false();
    (await this.sameMillisecondWrongSecond.exec(this.ctx)).should.be.false();
  });

  it('should properly determine same as using milliseconds', async function () {
    (await this.same.exec(this.ctx)).should.be.true();
    (await this.notSame.exec(this.ctx)).should.be.false();
  });

  it('should normalize timezones when determining sameness', async function () {
    (await this.sameNormalized.exec(this.ctx)).should.be.true();
    (await this.sameHourWrongTimezone.exec(this.ctx)).should.be.false();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseHour.exec(this.ctx)).be.null();
    (await this.impreciseHourWrongDay.exec(this.ctx)).should.be.false();
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

  it('should properly determine when hour is same or after', async function () {
    (await this.sameHour.exec(this.ctx)).should.be.true();
    (await this.hourAfter.exec(this.ctx)).should.be.true();
    (await this.hourBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when minute is same or after', async function () {
    (await this.sameMinute.exec(this.ctx)).should.be.true();
    (await this.minuteAfter.exec(this.ctx)).should.be.true();
    (await this.minuteBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when second is same or after', async function () {
    (await this.sameSecond.exec(this.ctx)).should.be.true();
    (await this.secondAfter.exec(this.ctx)).should.be.true();
    (await this.secondBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when millisecond is same or after', async function () {
    (await this.sameMillisecond.exec(this.ctx)).should.be.true();
    (await this.millisecondAfter.exec(this.ctx)).should.be.true();
    (await this.millisecondBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine same or after using ms when no precision defined', async function () {
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

  it('should normalize timezones', async function () {
    (await this.sameHourNormalizeZones.exec(this.ctx)).should.be.true();
    (await this.hourAfterNormalizeZones.exec(this.ctx)).should.be.true();
    (await this.hourBeforeNormalizeZones.exec(this.ctx)).should.be.false();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });

  it('should properly treat "on or after" the same as "same or after"', async function () {
    (await this.sameOOA.exec(this.ctx)).should.be.true();
    (await this.afterOOA.exec(this.ctx)).should.be.true();
    (await this.beforeOOA.exec(this.ctx)).should.be.false();
    should(await this.nullLeftOOA.exec(this.ctx)).be.null();
    should(await this.nullRightOOA.exec(this.ctx)).be.null();
    should(await this.nullBothOOA.exec(this.ctx)).be.null();
  });

  it('should properly treat "after or on" the same as "same or after"', async function () {
    (await this.sameAOO.exec(this.ctx)).should.be.true();
    (await this.afterAOO.exec(this.ctx)).should.be.true();
    (await this.beforeAOO.exec(this.ctx)).should.be.false();
    should(await this.nullLeftAOO.exec(this.ctx)).be.null();
    should(await this.nullRightAOO.exec(this.ctx)).be.null();
    should(await this.nullBothAOO.exec(this.ctx)).be.null();
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

  it('should properly determine when hour is same or after', async function () {
    (await this.sameHour.exec(this.ctx)).should.be.true();
    (await this.hourAfter.exec(this.ctx)).should.be.false();
    (await this.hourBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when minute is same or after', async function () {
    (await this.sameMinute.exec(this.ctx)).should.be.true();
    (await this.minuteAfter.exec(this.ctx)).should.be.false();
    (await this.minuteBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when second is same or after', async function () {
    (await this.sameSecond.exec(this.ctx)).should.be.true();
    (await this.secondAfter.exec(this.ctx)).should.be.false();
    (await this.secondBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when millisecond is same or after', async function () {
    (await this.sameMillisecond.exec(this.ctx)).should.be.true();
    (await this.millisecondAfter.exec(this.ctx)).should.be.false();
    (await this.millisecondBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine same or after using ms when no precision defined', async function () {
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

  it('should normalize timezones', async function () {
    (await this.sameHourNormalizeZones.exec(this.ctx)).should.be.true();
    (await this.hourAfterNormalizeZones.exec(this.ctx)).should.be.false();
    (await this.hourBeforeNormalizeZones.exec(this.ctx)).should.be.true();
  });

  it('should return null when either argument is null', async function () {
    should(await this.nullLeft.exec(this.ctx)).be.null();
    should(await this.nullRight.exec(this.ctx)).be.null();
    should(await this.nullBoth.exec(this.ctx)).be.null();
  });

  it('should properly treat "on or before" the same as "same or before"', async function () {
    (await this.sameOOB.exec(this.ctx)).should.be.true();
    (await this.afterOOB.exec(this.ctx)).should.be.false();
    (await this.beforeOOB.exec(this.ctx)).should.be.true();
    should(await this.nullLeftOOB.exec(this.ctx)).be.null();
    should(await this.nullRightOOB.exec(this.ctx)).be.null();
    should(await this.nullBothOOB.exec(this.ctx)).be.null();
  });

  it('should properly treat "before or on" the same as "same or before"', async function () {
    (await this.sameBOO.exec(this.ctx)).should.be.true();
    (await this.afterBOO.exec(this.ctx)).should.be.false();
    (await this.beforeBOO.exec(this.ctx)).should.be.true();
    should(await this.nullLeftBOO.exec(this.ctx)).be.null();
    should(await this.nullRightBOO.exec(this.ctx)).be.null();
    should(await this.nullBothBOO.exec(this.ctx)).be.null();
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

  it('should properly determine when hour is same or after', async function () {
    (await this.sameHour.exec(this.ctx)).should.be.false();
    (await this.hourAfter.exec(this.ctx)).should.be.true();
    (await this.hourBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when minute is same or after', async function () {
    (await this.sameMinute.exec(this.ctx)).should.be.false();
    (await this.minuteAfter.exec(this.ctx)).should.be.true();
    (await this.minuteBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when second is same or after', async function () {
    (await this.sameSecond.exec(this.ctx)).should.be.false();
    (await this.secondAfter.exec(this.ctx)).should.be.true();
    (await this.secondBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine when millisecond is same or after', async function () {
    (await this.sameMillisecond.exec(this.ctx)).should.be.false();
    (await this.millisecondAfter.exec(this.ctx)).should.be.true();
    (await this.millisecondBefore.exec(this.ctx)).should.be.false();
  });

  it('should properly determine same or after using ms when no precision defined', async function () {
    (await this.same.exec(this.ctx)).should.be.false();
    (await this.after.exec(this.ctx)).should.be.true();
    (await this.before.exec(this.ctx)).should.be.false();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseDay.exec(this.ctx)).be.null();
    (await this.impreciseDayMonthAfter.exec(this.ctx)).should.be.true();
    (await this.impreciseDayMonthBefore.exec(this.ctx)).should.be.false();
  });

  it('should normalize timezones', async function () {
    (await this.sameHourNormalizeZones.exec(this.ctx)).should.be.false();
    (await this.hourAfterNormalizeZones.exec(this.ctx)).should.be.true();
    (await this.hourBeforeNormalizeZones.exec(this.ctx)).should.be.false();
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

  it('should properly determine when hour is same or after', async function () {
    (await this.sameHour.exec(this.ctx)).should.be.false();
    (await this.hourAfter.exec(this.ctx)).should.be.false();
    (await this.hourBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when minute is same or after', async function () {
    (await this.sameMinute.exec(this.ctx)).should.be.false();
    (await this.minuteAfter.exec(this.ctx)).should.be.false();
    (await this.minuteBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when second is same or after', async function () {
    (await this.sameSecond.exec(this.ctx)).should.be.false();
    (await this.secondAfter.exec(this.ctx)).should.be.false();
    (await this.secondBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine when millisecond is same or after', async function () {
    (await this.sameMillisecond.exec(this.ctx)).should.be.false();
    (await this.millisecondAfter.exec(this.ctx)).should.be.false();
    (await this.millisecondBefore.exec(this.ctx)).should.be.true();
  });

  it('should properly determine same or after using ms when no precision defined', async function () {
    (await this.same.exec(this.ctx)).should.be.false();
    (await this.after.exec(this.ctx)).should.be.false();
    (await this.before.exec(this.ctx)).should.be.true();
  });

  it('should handle imprecision', async function () {
    should(await this.impreciseDay.exec(this.ctx)).be.null();
    (await this.impreciseDayMonthAfter.exec(this.ctx)).should.be.false();
    (await this.impreciseDayMonthBefore.exec(this.ctx)).should.be.true();
  });

  it('should normalize timezones', async function () {
    (await this.sameHourNormalizeZones.exec(this.ctx)).should.be.false();
    (await this.hourAfterNormalizeZones.exec(this.ctx)).should.be.false();
    (await this.hourBeforeNormalizeZones.exec(this.ctx)).should.be.true();
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

  it('should properly execute hours between', async function () {
    (await this.hoursBetween.exec(this.ctx)).should.equal(24 * 365);
  });

  it('should properly execute minutes between', async function () {
    (await this.minutesBetween.exec(this.ctx)).should.equal(60 * 24 * 365);
  });

  it('should properly execute seconds between', async function () {
    (await this.secondsBetween.exec(this.ctx)).should.equal(60 * 60 * 24 * 365);
  });

  it('should properly execute milliseconds between', async function () {
    (await this.millisecondsBetween.exec(this.ctx)).should.equal(1000 * 60 * 60 * 24 * 365);
  });

  it('should properly execute milliseconds between when date 1 is after date 2', async function () {
    (await this.millisecondsBetweenReversed.exec(this.ctx)).should.equal(
      -1 * 1000 * 60 * 60 * 24 * 365
    );
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

  it('should properly execute hours between with an uncertainty', async function () {
    (await this.hoursBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 743));
  });

  it('should properly execute minutes between with an uncertainty', async function () {
    (await this.minutesBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 44639));
  });

  it('should properly execute seconds between with an uncertainty', async function () {
    (await this.secondsBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 2678399));
  });

  it('should properly execute milliseconds between with an uncertainty', async function () {
    (await this.millisecondsBetweenUncertainty.exec(this.ctx)).should.eql(
      new Uncertainty(0, 2678399999)
    );
  });

  it('should properly execute seconds between when date 1 is after date 2 with an uncertainty', async function () {
    (await this.millisecondsBetweenReversedUncertainty.exec(this.ctx)).should.eql(
      new Uncertainty(-2678399999, 0)
    );
  });

  it('should properly execute hours between when springing ahead for DST', async function () {
    (await this.hoursBetween1and3CrossingSpringDST.exec(this.ctx)).should.equal(1);
  });

  it('should properly execute hours between when falling back for DST', async function () {
    (await this.hoursBetween1and3CrossingFallDST.exec(this.ctx)).should.equal(3);
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

  it('should properly determine that Sep to Dec is NOT <= 2 months', async function () {
    (await this.bonnieTestCase.exec(this.ctx)).should.be.false();
  });

  it('should properly determine that Sep to Dec is NOT <= 2 months with 0 timezone offset (Zulu)', async function () {
    // THIS for some reason is BROKEN!
    (await this.bonnieTestCaseZulu.exec(this.ctx)).should.be.false();
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
    (await this.daysBetween.exec(this.ctx)).should.equal(365 + 21);
  });

  it('should properly execute weeks between', async function () {
    (await this.weeksBetween.exec(this.ctx)).should.equal(55);
  });

  it('should properly execute hours between', async function () {
    (await this.hoursBetween.exec(this.ctx)).should.equal(24 * (365 + 21) + 11);
  });

  it('should properly execute minutes between', async function () {
    (await this.minutesBetween.exec(this.ctx)).should.equal(60 * (24 * (365 + 21) + 11) + 29);
  });

  it('should properly execute seconds between', async function () {
    (await this.secondsBetween.exec(this.ctx)).should.equal(
      60 * (60 * (24 * (365 + 21) + 11) + 29) + 29
    );
  });

  it('should properly execute milliseconds between', async function () {
    (await this.millisecondsBetween.exec(this.ctx)).should.equal(
      1000 * (60 * (60 * (24 * (365 + 21) + 11) + 29) + 29) + 500
    );
  });

  it('should properly execute milliseconds between when date 1 is after date 2', async function () {
    (await this.millisecondsBetweenReversed.exec(this.ctx)).should.equal(
      -1 * 1000 * (60 * (60 * (24 * (365 + 21) + 11) + 29) + 29) - 500
    );
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

  it('should properly execute hours between with an uncertainty', async function () {
    (await this.hoursBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 743));
  });

  it('should properly execute minutes between with an uncertainty', async function () {
    (await this.minutesBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 44639));
  });

  it('should properly execute seconds between with an uncertainty', async function () {
    (await this.secondsBetweenUncertainty.exec(this.ctx)).should.eql(new Uncertainty(0, 2678399));
  });

  it('should properly execute milliseconds between with an uncertainty', async function () {
    (await this.millisecondsBetweenUncertainty.exec(this.ctx)).should.eql(
      new Uncertainty(0, 2678399999)
    );
  });

  it('should properly execute seconds between when date 1 is after date 2 with an uncertainty', async function () {
    (await this.millisecondsBetweenReversedUncertainty.exec(this.ctx)).should.eql(
      new Uncertainty(-2678399999, 0)
    );
  });

  it('should properly execute hours between when falling back for DST', async function () {
    (await this.hoursBetween1and3CrossingSpringDST.exec(this.ctx)).should.equal(1);
  });

  it('should properly execute hours between when springing ahead for DST', async function () {
    (await this.hoursBetween1and3CrossingFallDST.exec(this.ctx)).should.equal(3);
  });

  it('should not return an uncertainty when the DateTimes have 0 ms', async function () {
    (await this.durationInDaysWith0MS.exec(this.ctx)).should.equal(1);
  });

  it('should not return an uncertainty when the DateTimes do not specify ms', async function () {
    (await this.durationInDaysNoMS.exec(this.ctx)).should.equal(1);
  });

  it('should not return an uncertainty when the DateTimes have the same nonzero ms', async function () {
    (await this.durationInDaysSameMS.exec(this.ctx)).should.equal(1);
  });

  it('should not return an uncertainty when the DateTimes have different nonzero ms', async function () {
    (await this.durationInDaysDiffMS.exec(this.ctx)).should.equal(1);
  });
});

describe('DateMath', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly add and subtract years', async function () {
    let d = await this.plusThreeYears.exec(this.ctx);
    dateCheck(d, 2016, 6, 15, 0, 0, 0, 0);
    d = await this.minusThreeYears.exec(this.ctx);
    dateCheck(d, 2010, 6, 15, 0, 0, 0, 0);
  });

  it('should properly add and subtract months', async function () {
    let d = await this.plusEightMonths.exec(this.ctx);
    dateCheck(d, 2014, 2, 15, 0, 0, 0, 0);
    d = await this.minusEightMonths.exec(this.ctx);
    dateCheck(d, 2012, 10, 15, 0, 0, 0, 0);
  });

  it('should properly add and subtract weeks', async function () {
    let d = await this.plusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 7, 6, 0, 0, 0, 0);
    d = await this.minusThreeWeeks.exec(this.ctx);
    dateCheck(d, 2013, 5, 25, 0, 0, 0, 0);
  });

  it('should properly add and subtract days', async function () {
    let d = await this.plusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 7, 5, 0, 0, 0, 0);
    d = await this.minusTwentyDays.exec(this.ctx);
    dateCheck(d, 2013, 5, 26, 0, 0, 0, 0);
  });

  it('should properly add and subtract hours', async function () {
    let d = await this.plusThreeHours.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 3, 0, 0, 0);
    d = await this.minusThreeHours.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 21, 0, 0, 0);
  });

  it('should properly add and subtract minutes', async function () {
    let d = await this.plusThreeMinutes.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 0, 3, 0, 0);
    d = await this.minusThreeMinutes.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 23, 57, 0, 0);
  });

  it('should properly add and subtract seconds', async function () {
    let d = await this.plusThreeSeconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 0, 0, 3, 0);
    d = await this.minusThreeSeconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 14, 23, 59, 57, 0);
  });

  it('should properly add and subtract milliseconds', async function () {
    let d = await this.plusThreeMilliseconds.exec(this.ctx);
    dateCheck(d, 2013, 6, 15, 0, 0, 0, 3);
    d = await this.minusThreeMilliseconds.exec(this.ctx);
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
