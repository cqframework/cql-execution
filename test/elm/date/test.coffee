should = require 'should'
setup = require '../../setup'
data = require './data'
DT = require '../../../lib/datatypes/datatypes'
{ PatientContext } =  require '../../../lib/cql'
{ Uncertainty } = require '../../../lib/datatypes/uncertainty'

describe 'Date', ->
  @beforeEach ->
    setup @, data

  it 'should execute year precision correctly', ->
    d = @year.exec(@ctx)
    d.isTime().should.be.false()
    d.isDateTime().should.be.false()
    d.isDate().should.be.true()
    d.year.should.equal 2012
    should.not.exist(d[field]) for field in [ 'month', 'day' ]

  it 'should execute month precision correctly', ->
    d = @month.exec(@ctx)
    d.isTime().should.be.false()
    d.isDateTime().should.be.false()
    d.isDate().should.be.true()
    d.year.should.equal 2012
    d.month.should.equal 2
    should.not.exist(d[field]) for field in [ 'day' ]

  it 'should execute day precision correctly', ->
    d = @day.exec(@ctx)
    d.isTime().should.be.false()
    d.isDateTime().should.be.false()
    d.isDate().should.be.true()
    d.year.should.equal 2012
    d.month.should.equal 2
    d.day.should.equal 15

describe 'DateFrom', ->
  @beforeEach ->
    setup @, data

  it 'should return the date from a fully defined DateTime', ->
    date = @date.exec(@ctx)
    date.year.should.equal 2000
    date.month.should.equal 3
    date.day.should.equal 15

  it 'should return the defined date components from an imprecise date', ->
    date = @impreciseDate.exec(@ctx)
    date.year.should.equal 2000
    should.not.exist date.month
    should.not.exist date.day

  it 'should return null for null date', ->
    should(@nullDate.exec(@ctx)).be.null()

describe 'SameAs', ->
  @beforeEach ->
    setup @, data

  it 'should properly determine when year is the same', ->
    @sameYear.exec(@ctx).should.be.true()
    @notSameYear.exec(@ctx).should.be.false()

  it 'should properly determine when month is the same', ->
    @sameMonth.exec(@ctx).should.be.true()
    @notSameMonth.exec(@ctx).should.be.false()
    @sameMonthWrongYear.exec(@ctx).should.be.false()

  it 'should properly determine same as using day', ->
    @same.exec(@ctx).should.be.true()
    @notSame.exec(@ctx).should.be.false()

  it 'should properly determine when day is the same', ->
    @sameDay.exec(@ctx).should.be.true()
    @notSameDay.exec(@ctx).should.be.false()
    @sameDayWrongMonth.exec(@ctx).should.be.false()

  it 'should return null when either argument is null', ->
    should(@nullLeft.exec(@ctx)).be.null()
    should(@nullRight.exec(@ctx)).be.null()
    should(@nullBoth.exec(@ctx)).be.null()

describe 'SameOrAfter', ->
  @beforeEach ->
    setup @, data

  it 'should properly determine when year is same or after', ->
    @sameYear.exec(@ctx).should.be.true()
    @yearAfter.exec(@ctx).should.be.true()
    @yearBefore.exec(@ctx).should.be.false()

  it 'should properly determine when month is same or after', ->
    @sameMonth.exec(@ctx).should.be.true()
    @monthAfter.exec(@ctx).should.be.true()
    @monthBefore.exec(@ctx).should.be.false()

  it 'should properly determine when day is same or after', ->
    @sameDay.exec(@ctx).should.be.true()
    @dayAfter.exec(@ctx).should.be.true()
    @dayBefore.exec(@ctx).should.be.false()

  it 'should properly determine same or after using day when no precision defined', ->
    @same.exec(@ctx).should.be.true()
    @after.exec(@ctx).should.be.true()
    @before.exec(@ctx).should.be.false()

  it 'should consider precision units above the specified unit', ->
    @sameDayMonthBefore.exec(@ctx).should.be.false()
    @dayAfterMonthBefore.exec(@ctx).should.be.false()
    @dayBeforeMonthAfter.exec(@ctx).should.be.true()

  it 'should handle imprecision', ->
    should(@impreciseDay.exec(@ctx)).be.null()
    @impreciseDayMonthAfter.exec(@ctx).should.be.true()
    @impreciseDayMonthBefore.exec(@ctx).should.be.false()

  it 'should return null when either argument is null', ->
    should(@nullLeft.exec(@ctx)).be.null()
    should(@nullRight.exec(@ctx)).be.null()
    should(@nullBoth.exec(@ctx)).be.null()

describe 'SameOrBefore', ->
  @beforeEach ->
    setup @, data

  it 'should properly determine when year is same or after', ->
    @sameYear.exec(@ctx).should.be.true()
    @yearAfter.exec(@ctx).should.be.false()
    @yearBefore.exec(@ctx).should.be.true()

  it 'should properly determine when month is same or after', ->
    @sameMonth.exec(@ctx).should.be.true()
    @monthAfter.exec(@ctx).should.be.false()
    @monthBefore.exec(@ctx).should.be.true()

  it 'should properly determine when day is same or after', ->
    @sameDay.exec(@ctx).should.be.true()
    @dayAfter.exec(@ctx).should.be.false()
    @dayBefore.exec(@ctx).should.be.true()

  it 'should properly determine same or after using day when no precision defined', ->
    @same.exec(@ctx).should.be.true()
    @after.exec(@ctx).should.be.false()
    @before.exec(@ctx).should.be.true()

  it 'should consider precision units above the specified unit', ->
    @sameDayMonthBefore.exec(@ctx).should.be.true()
    @dayAfterMonthBefore.exec(@ctx).should.be.true()
    @dayBeforeMonthAfter.exec(@ctx).should.be.false()

  it 'should handle imprecision', ->
    should(@impreciseDay.exec(@ctx)).be.null()
    @impreciseDayMonthAfter.exec(@ctx).should.be.false()
    @impreciseDayMonthBefore.exec(@ctx).should.be.true()

  it 'should return null when either argument is null', ->
    should(@nullLeft.exec(@ctx)).be.null()
    should(@nullRight.exec(@ctx)).be.null()
    should(@nullBoth.exec(@ctx)).be.null()

describe 'After', ->
  @beforeEach ->
    setup @, data

  it 'should properly determine when year is same or after', ->
    @sameYear.exec(@ctx).should.be.false()
    @yearAfter.exec(@ctx).should.be.true()
    @yearBefore.exec(@ctx).should.be.false()

  it 'should properly determine when month is same or after', ->
    @sameMonth.exec(@ctx).should.be.false()
    @monthAfter.exec(@ctx).should.be.true()
    @monthBefore.exec(@ctx).should.be.false()

  it 'should properly determine when day is same or after', ->
    @sameDay.exec(@ctx).should.be.false()
    @dayAfter.exec(@ctx).should.be.true()
    @dayBefore.exec(@ctx).should.be.false()

  it 'should properly determine same or after using day when no precision defined', ->
    @same.exec(@ctx).should.be.false()
    @after.exec(@ctx).should.be.true()
    @before.exec(@ctx).should.be.false()

  it 'should handle imprecision', ->
    should(@impreciseDay.exec(@ctx)).be.null()
    @impreciseDayMonthAfter.exec(@ctx).should.be.true()
    @impreciseDayMonthBefore.exec(@ctx).should.be.false()

  it 'should return null when either argument is null', ->
    should(@nullLeft.exec(@ctx)).be.null()
    should(@nullRight.exec(@ctx)).be.null()
    should(@nullBoth.exec(@ctx)).be.null()

describe 'Before', ->
  @beforeEach ->
    setup @, data

  it 'should properly determine when year is same or after', ->
    @sameYear.exec(@ctx).should.be.false()
    @yearAfter.exec(@ctx).should.be.false()
    @yearBefore.exec(@ctx).should.be.true()

  it 'should properly determine when month is same or after', ->
    @sameMonth.exec(@ctx).should.be.false()
    @monthAfter.exec(@ctx).should.be.false()
    @monthBefore.exec(@ctx).should.be.true()

  it 'should properly determine when day is same or after', ->
    @sameDay.exec(@ctx).should.be.false()
    @dayAfter.exec(@ctx).should.be.false()
    @dayBefore.exec(@ctx).should.be.true()

  it 'should properly determine same or after using day when no precision defined', ->
    @same.exec(@ctx).should.be.false()
    @after.exec(@ctx).should.be.false()
    @before.exec(@ctx).should.be.true()

  it 'should handle imprecision', ->
    should(@impreciseDay.exec(@ctx)).be.null()
    @impreciseDayMonthAfter.exec(@ctx).should.be.false()
    @impreciseDayMonthBefore.exec(@ctx).should.be.true()

  it 'should return null when either argument is null', ->
    should(@nullLeft.exec(@ctx)).be.null()
    should(@nullRight.exec(@ctx)).be.null()
    should(@nullBoth.exec(@ctx)).be.null()

describe 'DifferenceBetween', ->
  @beforeEach ->
    setup @, data

  it 'should properly execute years between', ->
    @yearsBetween.exec(@ctx).should.equal 1

  it 'should properly execute months between', ->
    @monthsBetween.exec(@ctx).should.equal 12

  it 'should properly execute weeks between', ->
    @weeksBetween.exec(@ctx).should.equal 52

  it 'should properly execute days between', ->
    @daysBetween.exec(@ctx).should.equal 365

  it 'should properly execute years between with an uncertainty', ->
    @yearsBetweenUncertainty.exec(@ctx).should.equal 0

  it 'should properly execute months between with an uncertainty', ->
    @monthsBetweenUncertainty.exec(@ctx).should.equal 0

  it 'should properly execute weeks between with an uncertainty', ->
    @weeksBetweenUncertainty.exec(@ctx).should.eql new Uncertainty(0, 4)

  it 'should properly execute days between with an uncertainty', ->
    @daysBetweenUncertainty.exec(@ctx).should.eql new Uncertainty(0, 30)

describe 'DifferenceBetween Comparisons', ->
  @beforeEach ->
    setup @, data

  it 'should calculate days between > x', ->
    @greaterThan25DaysAfter.exec(@ctx).should.be.true()
    should(@greaterThan40DaysAfter.exec(@ctx)).be.null()
    @greaterThan80DaysAfter.exec(@ctx).should.be.false()

  it 'should calculate days between >= x', ->
    @greaterOrEqualTo25DaysAfter.exec(@ctx).should.be.true()
    should(@greaterOrEqualTo40DaysAfter.exec(@ctx)).be.null()
    @greaterOrEqualTo80DaysAfter.exec(@ctx).should.be.false()

  it 'should calculate days between = x', ->
    @equalTo25DaysAfter.exec(@ctx).should.be.false()
    should(@equalTo40DaysAfter.exec(@ctx)).be.null()
    @equalTo80DaysAfter.exec(@ctx).should.be.false()

  it 'should calculate days between <= x', ->
    @lessOrEqualTo25DaysAfter.exec(@ctx).should.be.false()
    should(@lessOrEqualTo40DaysAfter.exec(@ctx)).be.null()
    @lessOrEqualTo80DaysAfter.exec(@ctx).should.be.true()

  it 'should calculate days between < x', ->
    @lessThan25DaysAfter.exec(@ctx).should.be.false()
    should(@lessThan40DaysAfter.exec(@ctx)).be.null()
    @lessThan80DaysAfter.exec(@ctx).should.be.true()

  it 'should calculate other way too', ->
    @twentyFiveDaysLessThanDaysBetween.exec(@ctx).should.be.true()
    should(@fortyDaysEqualToDaysBetween.exec(@ctx)).be.null()
    @twentyFiveDaysGreaterThanDaysBetween.exec(@ctx).should.be.false()

  it 'should properly determine that Sep to Dec is NOT <= 2 months', ->
    @bonnieTestCase.exec(@ctx).should.be.false()

describe 'DurationBetween', ->
  @beforeEach ->
    setup @, data

  it 'should properly execute years between', ->
    @yearsBetween.exec(@ctx).should.equal 1

  it 'should properly execute months between', ->
    @monthsBetween.exec(@ctx).should.equal 12

  it 'should properly execute days between', ->
    @daysBetween.exec(@ctx).should.equal 365 + 21

  it 'should properly execute weeks between', ->
    @weeksBetween.exec(@ctx).should.equal 55

  it 'should properly execute years between with an uncertainty', ->
    @yearsBetweenUncertainty.exec(@ctx).should.equal 0

  it 'should properly execute months between with an uncertainty', ->
    @monthsBetweenUncertainty.exec(@ctx).should.equal 0

  it 'should properly execute weeks between with an uncertainty', ->
    @weeksBetweenUncertainty.exec(@ctx).should.eql new Uncertainty(0, 4)

  it 'should properly execute days between with an uncertainty', ->
    @daysBetweenUncertainty.exec(@ctx).should.eql new Uncertainty(0, 30)

  it 'should properly execute seconds between when date 1 is after date 2 with an uncertainty', ->
    @millisecondsBetweenReversedUncertainty.exec(@ctx).should.eql new Uncertainty(-2678399999, 0)

describe 'DateMath', ->
  @beforeEach ->
    setup @, data

  it 'should properly add and subtract years', ->
    d = @plusThreeYears.exec(@ctx)
    dateCheck(d, 2016, 6, 15, 0, 0, 0, 0)
    d = @minusThreeYears.exec(@ctx)
    dateCheck(d, 2010, 6, 15, 0, 0, 0, 0)

  it 'should properly add and subtract months', ->
    d = @plusEightMonths.exec(@ctx)
    dateCheck(d, 2014, 2, 15, 0, 0, 0, 0)
    d = @minusEightMonths.exec(@ctx)
    dateCheck(d, 2012, 10, 15, 0, 0, 0, 0)

  it 'should properly add and subtract weeks', ->
    d = @plusThreeWeeks.exec(@ctx)
    dateCheck(d, 2013, 7, 6, 0, 0, 0, 0)
    d = @minusThreeWeeks.exec(@ctx)
    dateCheck(d, 2013, 5, 25, 0, 0, 0, 0)

  it 'should properly add and subtract days', ->
    d = @plusTwentyDays.exec(@ctx)
    dateCheck(d, 2013, 7, 5, 0, 0, 0, 0)
    d = @minusTwentyDays.exec(@ctx)
    dateCheck(d, 2013, 5, 26, 0, 0, 0, 0)

dateCheck = (date, year, month, day) ->
  date.year.should.equal year
  date.month.should.equal month
  date.day.should.equal day
