should = require 'should'
setup = require '../../setup'
data = require './data'
{ Interval } = require '../../../lib/datatypes/interval'
{ DateTime } = require '../../../lib/datatypes/datetime'

describe 'Interval', ->
  @beforeEach ->
    setup @, data

  it 'should properly represent an open interval', ->
    @open.lowClosed.should.be.false()
    @open.highClosed.should.be.false()
    @open.low.exec(@ctx).should.eql new DateTime(2012, 1, 1)
    @open.high.exec(@ctx).should.eql new DateTime(2013, 1, 1)

  it 'should properly represent a left-open interval', ->
    @leftOpen.lowClosed.should.be.false()
    @leftOpen.highClosed.should.be.true()
    @leftOpen.low.exec(@ctx).should.eql new DateTime(2012, 1, 1)
    @leftOpen.high.exec(@ctx).should.eql new DateTime(2013, 1, 1)

  it 'should properly represent a right-open interval', ->
    @rightOpen.lowClosed.should.be.true()
    @rightOpen.highClosed.should.be.false()
    @rightOpen.low.exec(@ctx).should.eql new DateTime(2012, 1, 1)
    @rightOpen.high.exec(@ctx).should.eql new DateTime(2013, 1, 1)

  it 'should properly represent a closed interval', ->
    @closed.lowClosed.should.be.true()
    @closed.highClosed.should.be.true()
    @closed.low.exec(@ctx).should.eql new DateTime(2012, 1, 1)
    @closed.high.exec(@ctx).should.eql new DateTime(2013, 1, 1)

  it 'should exec to native Interval datatype', ->
    ivl = @open.exec(@ctx)
    ivl.should.be.instanceOf Interval
    ivl.lowClosed.should.equal @open.lowClosed
    ivl.highClosed.should.equal @open.highClosed
    ivl.low.should.eql new DateTime(2012, 1, 1)
    ivl.high.should.eql new DateTime(2013, 1, 1)

describe 'Equal', ->
  @beforeEach ->
    setup @, data

  it 'should determine equal integer intervals', ->
    @equalClosed.exec(@ctx).should.be.true()
    @equalOpen.exec(@ctx).should.be.true()
    @equalOpenClosed.exec(@ctx).should.be.true()

  it 'should determine unequal integer intervals', ->
    @unequalClosed.exec(@ctx).should.be.false()
    @unequalOpen.exec(@ctx).should.be.false()
    @unequalClosedOpen.exec(@ctx).should.be.false()

  it 'should determine equal quantity intervals', ->
    @equalQuantityClosed.exec(@ctx).should.be.true()
    @equalQuantityOpen.exec(@ctx).should.be.true()
    @equalQuantityOpenClosed.exec(@ctx).should.be.true()

  it 'should determine unequal quantity intervals', ->
    @unequalQuantityClosed.exec(@ctx).should.be.false()
    @unequalQuantityOpen.exec(@ctx).should.be.false()
    @unequalQuantityClosedOpen.exec(@ctx).should.be.false()

  it 'should determine equal datetime intervals', ->
    @equalDates.exec(@ctx).should.be.true()
    @equalDatesOpenClosed.exec(@ctx).should.be.true()

  it 'should operate correctly with imprecision', ->
    @sameDays.exec(@ctx).should.be.true()
    @differentDays.exec(@ctx).should.be.false()
    should(@differingPrecision.exec(@ctx)).be.null()

describe 'NotEqual', ->
  @beforeEach ->
    setup @, data

  it 'should determine equal integer intervals', ->
    @equalClosed.exec(@ctx).should.be.false()
    @equalOpen.exec(@ctx).should.be.false()
    @equalOpenClosed.exec(@ctx).should.be.false()

  it 'should determine unequal integer intervals', ->
    @unequalClosed.exec(@ctx).should.be.true()
    @unequalOpen.exec(@ctx).should.be.true()
    @unequalClosedOpen.exec(@ctx).should.be.true()

  it 'should determine equal quantity intervals', ->
    @equalQuantityClosed.exec(@ctx).should.be.false()
    @equalQuantityOpen.exec(@ctx).should.be.false()
    @equalQuantityOpenClosed.exec(@ctx).should.be.false()

  it 'should determine unequal quantity intervals', ->
    @unequalQuantityClosed.exec(@ctx).should.be.true()
    @unequalQuantityOpen.exec(@ctx).should.be.true()
    @unequalQuantityClosedOpen.exec(@ctx).should.be.true()

  it 'should determine equal datetime intervals', ->
    @equalDates.exec(@ctx).should.be.false()
    @equalDatesOpenClosed.exec(@ctx).should.be.false()

  it 'should operate correctly with imprecision', ->
    @sameDays.exec(@ctx).should.be.false()
    @differentDays.exec(@ctx).should.be.true()
    should(@differingPrecision.exec(@ctx)).be.null()

describe 'Contains', ->
  @beforeEach ->
    setup @, data

  it 'should accept contained items', ->
    @containsInt.exec(@ctx).should.be.true()
    @containsReal.exec(@ctx).should.be.true()
    @containsQuantity.exec(@ctx).should.be.true()
    @containsQuantityInclusiveEdge.exec(@ctx).should.be.true()
    @containsDate.exec(@ctx).should.be.true()

  it 'should reject uncontained items', ->
    @notContainsInt.exec(@ctx).should.be.false()
    @notContainsReal.exec(@ctx).should.be.false()
    @notContainsQuantity.exec(@ctx).should.be.false()
    @notContainsQuantityExclusiveEdge.exec(@ctx).should.be.false()
    @notContainsDate.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegContainsInt.exec(@ctx).should.be.true()
    @negInfBegNotContainsInt.exec(@ctx).should.be.false()
    @unknownBegContainsInt.exec(@ctx).should.be.true()
    should(@unknownBegMayContainInt.exec(@ctx)).be.null()
    @unknownBegNotContainsInt.exec(@ctx).should.be.false()
    @posInfEndContainsInt.exec(@ctx).should.be.true()
    @posInfEndNotContainsInt.exec(@ctx).should.be.false()
    @unknownEndContainsInt.exec(@ctx).should.be.true()
    should(@unknownEndMayContainInt.exec(@ctx)).be.null()
    @unknownEndNotContainsInt.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegContainsDate.exec(@ctx).should.be.true()
    @negInfBegNotContainsDate.exec(@ctx).should.be.false()
    @unknownBegContainsDate.exec(@ctx).should.be.true()
    should(@unknownBegMayContainDate.exec(@ctx)).be.null()
    @unknownBegNotContainsDate.exec(@ctx).should.be.false()
    @posInfEndContainsDate.exec(@ctx).should.be.true()
    @posInfEndNotContainsDate.exec(@ctx).should.be.false()
    @unknownEndContainsDate.exec(@ctx).should.be.true()
    should(@unknownEndMayContainDate.exec(@ctx)).be.null()
    @unknownEndNotContainsDate.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @containsImpreciseDate.exec(@ctx).should.be.true()
    @notContainsImpreciseDate.exec(@ctx).should.be.false()
    should(@mayContainImpreciseDate.exec(@ctx)).be.null()
    @impreciseContainsDate.exec(@ctx).should.be.true()
    @impreciseNotContainsDate.exec(@ctx).should.be.false()
    should(@impreciseMayContainDate.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @containsDayOfDateLowEdge.exec(@ctx).should.be.true()
    @containsDayOfDateHighEdge.exec(@ctx).should.be.true()
    @notContainsDayOfDateLowEdge.exec(@ctx).should.be.false()
    @notContainsDayOfDateHighEdge.exec(@ctx).should.be.false()
    @containsDayOfDateImpreciseLowEdge.exec(@ctx).should.be.true()
    @containsDayOfDateImpreciseHighEdge.exec(@ctx).should.be.true()
    @containsDayOfDateVeryImpreciseMiddle.exec(@ctx).should.be.true()
    @notContainsDayOfDateVeryImpreciseLow.exec(@ctx).should.be.false()
    @notContainsDayOfDateVeryImpreciseHigh.exec(@ctx).should.be.false()
    should(@mayContainDayOfDateVeryImpreciseLow.exec(@ctx)).be.null()
    should(@mayContainDayOfDateVeryImpreciseHigh.exec(@ctx)).be.null()
    should(@mayContainDayOfDateVeryImpreciseSurrounding.exec(@ctx)).be.null()

describe 'In', ->
  @beforeEach ->
    setup @, data

  it 'should accept contained items', ->
    @containsInt.exec(@ctx).should.be.true()
    @containsReal.exec(@ctx).should.be.true()
    @containsQuantity.exec(@ctx).should.be.true()
    @containsQuantityInclusiveEdge.exec(@ctx).should.be.true()
    @containsDate.exec(@ctx).should.be.true()

  it 'should reject uncontained items', ->
    @notContainsInt.exec(@ctx).should.be.false()
    @notContainsReal.exec(@ctx).should.be.false()
    @notContainsQuantity.exec(@ctx).should.be.false()
    @notContainsQuantityExclusiveEdge.exec(@ctx).should.be.false()
    @notContainsDate.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegContainsInt.exec(@ctx).should.be.true()
    @negInfBegNotContainsInt.exec(@ctx).should.be.false()
    @unknownBegContainsInt.exec(@ctx).should.be.true()
    should(@unknownBegMayContainInt.exec(@ctx)).be.null()
    @unknownBegNotContainsInt.exec(@ctx).should.be.false()
    @posInfEndContainsInt.exec(@ctx).should.be.true()
    @posInfEndNotContainsInt.exec(@ctx).should.be.false()
    @unknownEndContainsInt.exec(@ctx).should.be.true()
    should(@unknownEndMayContainInt.exec(@ctx)).be.null()
    @unknownEndNotContainsInt.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegContainsDate.exec(@ctx).should.be.true()
    @negInfBegNotContainsDate.exec(@ctx).should.be.false()
    @unknownBegContainsDate.exec(@ctx).should.be.true()
    should(@unknownBegMayContainDate.exec(@ctx)).be.null()
    @unknownBegNotContainsDate.exec(@ctx).should.be.false()
    @posInfEndContainsDate.exec(@ctx).should.be.true()
    @posInfEndNotContainsDate.exec(@ctx).should.be.false()
    @unknownEndContainsDate.exec(@ctx).should.be.true()
    should(@unknownEndMayContainDate.exec(@ctx)).be.null()
    @unknownEndNotContainsDate.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @containsImpreciseDate.exec(@ctx).should.be.true()
    @notContainsImpreciseDate.exec(@ctx).should.be.false()
    should(@mayContainImpreciseDate.exec(@ctx)).be.null()
    @impreciseContainsDate.exec(@ctx).should.be.true()
    @impreciseNotContainsDate.exec(@ctx).should.be.false()
    should(@impreciseMayContainDate.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @containsDayOfDateLowEdge.exec(@ctx).should.be.true()
    @containsDayOfDateHighEdge.exec(@ctx).should.be.true()
    @notContainsDayOfDateLowEdge.exec(@ctx).should.be.false()
    @notContainsDayOfDateHighEdge.exec(@ctx).should.be.false()
    @containsDayOfDateImpreciseLowEdge.exec(@ctx).should.be.true()
    @containsDayOfDateImpreciseHighEdge.exec(@ctx).should.be.true()
    @containsDayOfDateVeryImpreciseMiddle.exec(@ctx).should.be.true()
    @notContainsDayOfDateVeryImpreciseLow.exec(@ctx).should.be.false()
    @notContainsDayOfDateVeryImpreciseHigh.exec(@ctx).should.be.false()
    should(@mayContainDayOfDateVeryImpreciseLow.exec(@ctx)).be.null()
    should(@mayContainDayOfDateVeryImpreciseHigh.exec(@ctx)).be.null()
    should(@mayContainDayOfDateVeryImpreciseSurrounding.exec(@ctx)).be.null()

describe 'Includes', ->
  @beforeEach ->
    setup @, data

  it 'should accept included items', ->
    @includesIntIvl.exec(@ctx).should.be.true()
    @includesRealIvl.exec(@ctx).should.be.true()
    @includesDateIvl.exec(@ctx).should.be.true()

  it 'should reject unincluded items', ->
    @notIncludesIntIvl.exec(@ctx).should.be.false()
    @notIncludesRealIvl.exec(@ctx).should.be.false()
    @notIncludesDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegIncludesIntIvl.exec(@ctx).should.be.true()
    @negInfBegNotIncludesIntIvl.exec(@ctx).should.be.false()
    @unknownBegIncludesIntIvl.exec(@ctx).should.be.true()
    should(@unknownBegMayIncludeIntIvl.exec(@ctx)).be.null()
    @unknownBegNotIncludesIntIvl.exec(@ctx).should.be.false()
    @posInfEndIncludesIntIvl.exec(@ctx).should.be.true()
    @posInfEndNotIncludesIntIvl.exec(@ctx).should.be.false()
    @unknownEndIncludesIntIvl.exec(@ctx).should.be.true()
    should(@unknownEndMayIncludeIntIvl.exec(@ctx)).be.null()
    @unknownEndNotIncludesIntIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegIncludesDateIvl.exec(@ctx).should.be.true()
    @negInfBegNotIncludesDateIvl.exec(@ctx).should.be.false()
    @unknownBegIncludesDateIvl.exec(@ctx).should.be.true()
    should(@unknownBegMayIncludeDateIvl.exec(@ctx)).be.null()
    @unknownBegNotIncludesDateIvl.exec(@ctx).should.be.false()
    @posInfEndIncludesDateIvl.exec(@ctx).should.be.true()
    @posInfEndNotIncludesDateIvl.exec(@ctx).should.be.false()
    @unknownEndIncludesDateIvl.exec(@ctx).should.be.true()
    should(@unknownEndMayIncludeDateIvl.exec(@ctx)).be.null()
    @unknownEndNotIncludesDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @includesImpreciseDateIvl.exec(@ctx).should.be.true()
    @notIncludesImpreciseDateIvl.exec(@ctx).should.be.false()
    should(@mayIncludeImpreciseDateIvl.exec(@ctx)).be.null()
    @impreciseIncludesDateIvl.exec(@ctx).should.be.true()
    @impreciseNotIncludesDateIvl.exec(@ctx).should.be.false()
    should(@impreciseMayIncludeDateIvl.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @includesDayOfIvlLowEdge.exec(@ctx).should.be.true()
    @includesDayOfIvlHighEdge.exec(@ctx).should.be.true()
    @notIncludesDayOfIvlLowEdge.exec(@ctx).should.be.false()
    @notIncludesDayOfIvlHighEdge.exec(@ctx).should.be.false()
    @includesDayOfIvlImpreciseLowEdge.exec(@ctx).should.be.true()
    @includesDayOfIvlImpreciseHighEdge.exec(@ctx).should.be.true()
    @includesDayOfIvlVeryImpreciseMiddle.exec(@ctx).should.be.true()
    @notIncludesDayOfIvlVeryImpreciseLow.exec(@ctx).should.be.false()
    @notIncludesDayOfIvlVeryImpreciseHigh.exec(@ctx).should.be.false()
    should(@mayIncludeDayOfIvlVeryImpreciseLow.exec(@ctx)).be.null()
    should(@mayIncludeDayOfIvlVeryImpreciseHigh.exec(@ctx)).be.null()
    should(@mayIncludeDayOfIvlVeryImpreciseSurrounding.exec(@ctx)).be.null()

  it 'should correctly handle point inclusion', ->
    @impreciseIncludesDate.exec(@ctx).should.be.true()
    @impreciseDoesntIncludeDate.exec(@ctx).should.be.false()
    @intervalIncludesQuantity.exec(@ctx).should.be.true()
    @intervalDoesntIncludeQuantity.exec(@ctx).should.be.false()

describe 'ProperlyIncludes', ->
  @beforeEach ->
    setup @, data

  it 'should accept properly included intervals', ->
    @properlyIncludesIntIvl.exec(@ctx).should.be.true()
    @properlyIncludesIntBeginsIvl.exec(@ctx).should.be.true()
    @properlyIncludesIntEndsIvl.exec(@ctx).should.be.true()
    @properlyIncludesRealIvl.exec(@ctx).should.be.true()
    @properlyIncludesDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals not properly included', ->
    @notProperlyIncludesIntIvl.exec(@ctx).should.be.false()
    @notProperlyIncludesRealIvl.exec(@ctx).should.be.false()
    @notProperlyIncludesDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @posInfEndProperlyIncludesIntIvl.exec(@ctx).should.be.true()
    @posInfEndNotProperlyIncludesIntIvl.exec(@ctx).should.be.false()
    should(@unknownEndMayProperlyIncludeIntIvl.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @properlyIncludesDayOfIvlLowEdge.exec(@ctx).should.be.true()
    @properlyIncludesDayOfIvlHighEdge.exec(@ctx).should.be.true()
    @properlyIncludesDayOfIvlNearEdges.exec(@ctx).should.be.true()
    @notProperlyIncludesDayOfIvlSameEdges.exec(@ctx).should.be.false()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseLow.exec(@ctx)).be.null()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseHigh.exec(@ctx)).be.null()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseLowAndHigh.exec(@ctx)).be.null()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseSurrounding.exec(@ctx)).be.null()

describe 'IncludedIn', ->
  @beforeEach ->
    setup @, data

  it 'should accept included items', ->
    @includesIntIvl.exec(@ctx).should.be.true()
    @includesRealIvl.exec(@ctx).should.be.true()
    @includesDateIvl.exec(@ctx).should.be.true()

  it 'should reject unincluded items', ->
    @notIncludesIntIvl.exec(@ctx).should.be.false()
    @notIncludesRealIvl.exec(@ctx).should.be.false()
    @notIncludesDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegIncludedInIntIvl.exec(@ctx).should.be.true()
    @negInfBegNotIncludedInIntIvl.exec(@ctx).should.be.false()
    @unknownBegIncludedInIntIvl.exec(@ctx).should.be.true()
    should(@unknownBegMayBeIncludedInIntIvl.exec(@ctx)).be.null()
    @unknownBegNotIncludedInIntIvl.exec(@ctx).should.be.false()
    @posInfEndIncludedInIntIvl.exec(@ctx).should.be.true()
    @posInfEndNotIncludedInIntIvl.exec(@ctx).should.be.false()
    @unknownEndIncludedInIntIvl.exec(@ctx).should.be.true()
    should(@unknownEndMayBeIncludedInIntIvl.exec(@ctx)).be.null()
    @unknownEndNotIncludedInIntIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegIncludedInDateIvl.exec(@ctx).should.be.true()
    @negInfBegNotIncludedInDateIvl.exec(@ctx).should.be.false()
    @unknownBegIncludedInDateIvl.exec(@ctx).should.be.true()
    should(@unknownBegMayBeIncludedInDateIvl.exec(@ctx)).be.null()
    @unknownBegNotIncludedInDateIvl.exec(@ctx).should.be.false()
    @posInfEndIncludedInDateIvl.exec(@ctx).should.be.true()
    @posInfEndNotIncludedInDateIvl.exec(@ctx).should.be.false()
    @unknownEndIncludedInDateIvl.exec(@ctx).should.be.true()
    should(@unknownEndMayBeIncludedInDateIvl.exec(@ctx)).be.null()
    @unknownEndNotIncludedInDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @includesImpreciseDateIvl.exec(@ctx).should.be.true()
    @notIncludesImpreciseDateIvl.exec(@ctx).should.be.false()
    should(@mayIncludeImpreciseDateIvl.exec(@ctx)).be.null()
    @impreciseIncludesDateIvl.exec(@ctx).should.be.true()
    @impreciseNotIncludesDateIvl.exec(@ctx).should.be.false()
    should(@impreciseMayIncludeDateIvl.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @includesDayOfIvlLowEdge.exec(@ctx).should.be.true()
    @includesDayOfIvlHighEdge.exec(@ctx).should.be.true()
    @notIncludesDayOfIvlLowEdge.exec(@ctx).should.be.false()
    @notIncludesDayOfIvlHighEdge.exec(@ctx).should.be.false()
    @includesDayOfIvlImpreciseLowEdge.exec(@ctx).should.be.true()
    @includesDayOfIvlImpreciseHighEdge.exec(@ctx).should.be.true()
    @includesDayOfIvlVeryImpreciseMiddle.exec(@ctx).should.be.true()
    @notIncludesDayOfIvlVeryImpreciseLow.exec(@ctx).should.be.false()
    @notIncludesDayOfIvlVeryImpreciseHigh.exec(@ctx).should.be.false()
    should(@mayIncludeDayOfIvlVeryImpreciseLow.exec(@ctx)).be.null()
    should(@mayIncludeDayOfIvlVeryImpreciseHigh.exec(@ctx)).be.null()
    should(@mayIncludeDayOfIvlVeryImpreciseSurrounding.exec(@ctx)).be.null()

  it 'should correctly handle point comparisons', ->
    @includesDayInInterval.exec(@ctx).should.be.true()
    @doesNotIncludeDayInInterval.exec(@ctx).should.be.false()
    @quantityIncludedInterval.exec(@ctx).should.be.true()
    @quantityNotIncludedInterval.exec(@ctx).should.be.false()


describe 'ProperlyIncludedIn', ->
  @beforeEach ->
    setup @, data

  it 'should accept properly included intervals', ->
    @properlyIncludesIntIvl.exec(@ctx).should.be.true()
    @properlyIncludesIntBeginsIvl.exec(@ctx).should.be.true()
    @properlyIncludesIntEndsIvl.exec(@ctx).should.be.true()
    @properlyIncludesRealIvl.exec(@ctx).should.be.true()
    @properlyIncludesDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals not properly included', ->
    @notProperlyIncludesIntIvl.exec(@ctx).should.be.false()
    @notProperlyIncludesRealIvl.exec(@ctx).should.be.false()
    @notProperlyIncludesDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @posInfEndProperlyIncludedInDateIvl.exec(@ctx).should.be.true()
    @posInfEndNotProperlyIncludedInDateIvl.exec(@ctx).should.be.false()
    should(@unknownEndMayBeProperlyIncludedInDateIvl.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @properlyIncludesDayOfIvlLowEdge.exec(@ctx).should.be.true()
    @properlyIncludesDayOfIvlHighEdge.exec(@ctx).should.be.true()
    @properlyIncludesDayOfIvlNearEdges.exec(@ctx).should.be.true()
    @notProperlyIncludesDayOfIvlSameEdges.exec(@ctx).should.be.false()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseLow.exec(@ctx)).be.null()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseHigh.exec(@ctx)).be.null()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseLowAndHigh.exec(@ctx)).be.null()
    should(@mayProperlyIncludeDayOfIvlVeryImpreciseSurrounding.exec(@ctx)).be.null()

describe 'After', ->
  @beforeEach ->
    setup @, data

  it 'should accept intervals before it', ->
    @afterIntIvl.exec(@ctx).should.be.true()
    @afterRealIvl.exec(@ctx).should.be.true()
    @afterDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals on or after it', ->
    @notAfterIntIvl.exec(@ctx).should.be.false()
    @notAfterRealIvl.exec(@ctx).should.be.false()
    @notAfterDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegNotAfterIntIvl.exec(@ctx).should.be.false()
    should(@unknownBegMayBeAfterIntIvl.exec(@ctx)).be.null()
    @unknownBegNotAfterIntIvl.exec(@ctx).should.be.false()
    @posInfEndAfterIntIvl.exec(@ctx).should.be.true()
    @posInfEndNotAfterIntIvl.exec(@ctx).should.be.false()
    @unknownEndAfterIntIvl.exec(@ctx).should.be.true()
    @unknownEndNotAfterIntIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegNotAfterDateIvl.exec(@ctx).should.be.false()
    should(@unknownBegMayBeAfterDateIvl.exec(@ctx)).be.null()
    @unknownBegNotAfterDateIvl.exec(@ctx).should.be.false()
    @posInfEndAfterDateIvl.exec(@ctx).should.be.true()
    @posInfEndNotAfterDateIvl.exec(@ctx).should.be.false()
    @unknownEndAfterDateIvl.exec(@ctx).should.be.true()
    @unknownEndNotAfterDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @afterImpreciseDateIvl.exec(@ctx).should.be.true()
    should(@notAfterImpreciseDateIvl.exec(@ctx)).be.null()
    should(@mayBeAfterImpreciseDateIvl.exec(@ctx)).be.null()
    @impreciseAfterDateIvl.exec(@ctx).should.be.true()
    # meets with uncertainty due to toClose
    should(@impreciseNotAfterDateIvl.exec(@ctx)).be.null()
    should(@impreciseMayBeAfterDateIvl.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @afterDayOfIvl.exec(@ctx).should.be.true()
    @beforeDayOfIvl.exec(@ctx).should.be.false()
    @startsSameDayOfIvlEnd.exec(@ctx).should.be.false()
    @endsSameDayOfIvlStart.exec(@ctx).should.be.false()
    should(@mayBeAfterDayOfImpreciseIvl.exec(@ctx)).be.null()
    @mayBeBeforeDayOfImpreciseIvl.exec(@ctx).should.be.false()

describe 'Before', ->
  @beforeEach ->
    setup @, data

  it 'should accept intervals before it', ->
    @beforeIntIvl.exec(@ctx).should.be.true()
    @beforeRealIvl.exec(@ctx).should.be.true()
    @beforeDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals on or after it', ->
    @notBeforeIntIvl.exec(@ctx).should.be.false()
    @notBeforeRealIvl.exec(@ctx).should.be.false()
    @notBeforeDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegBeforeIntIvl.exec(@ctx).should.be.true()
    @negInfBegNotBeforeIntIvl.exec(@ctx).should.be.false()
    @unknownBegBeforeIntIvl.exec(@ctx).should.be.true()
    @unknownBegNotBeforeIntIvl.exec(@ctx).should.be.false()
    @posInfEndNotBeforeIntIvl.exec(@ctx).should.be.false()
    should(@unknownEndMayBeBeforeIntIvl.exec(@ctx)).be.null()
    @unknownEndNotBeforeIntIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegBeforeDateIvl.exec(@ctx).should.be.true()
    @negInfBegNotBeforeDateIvl.exec(@ctx).should.be.false()
    @unknownBegBeforeDateIvl.exec(@ctx).should.be.true()
    @unknownBegNotBeforeDateIvl.exec(@ctx).should.be.false()
    @posInfEndNotBeforeDateIvl.exec(@ctx).should.be.false()
    should(@unknownEndMayBeBeforeDateIvl.exec(@ctx)).be.null()
    @unknownEndNotBeforeDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @beforeImpreciseDateIvl.exec(@ctx).should.be.true()
    # meets with uncertaintity due to toClose
    should(@notBeforeImpreciseDateIvl.exec(@ctx)).be.null()
    should(@mayBeBeforeImpreciseDateIvl.exec(@ctx)).be.null()
    @impreciseBeforeDateIvl.exec(@ctx).should.be.true()
    should(@impreciseNotBeforeDateIvl.exec(@ctx)).be.null()
    should(@impreciseMayBeBeforeDateIvl.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @afterDayOfIvl.exec(@ctx).should.be.false()
    @beforeDayOfIvl.exec(@ctx).should.be.true()
    @startsSameDayOfIvlEnd.exec(@ctx).should.be.false()
    @endsSameDayOfIvlStart.exec(@ctx).should.be.false()
    @mayBeAfterDayOfImpreciseIvl.exec(@ctx).should.be.false()
    should(@mayBeBeforeDayOfImpreciseIvl.exec(@ctx)).be.null()

describe 'Meets', ->
  @beforeEach ->
    setup @, data

  it 'should accept intervals meeting after it', ->
    @meetsBeforeIntIvl.exec(@ctx).should.be.true()
    @meetsBeforeRealIvl.exec(@ctx).should.be.true()
    @meetsBeforeDateIvl.exec(@ctx).should.be.true()

  it 'should accept intervals meeting before it', ->
    @meetsAfterIntIvl.exec(@ctx).should.be.true()
    @meetsAfterRealIvl.exec(@ctx).should.be.true()
    @meetsAfterDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals not meeting it', ->
    @notMeetsIntIvl.exec(@ctx).should.be.false()
    @notMeetsRealIvl.exec(@ctx).should.be.false()
    @notMeetsDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegMeetsBeforeIntIvl.exec(@ctx).should.be.true()
    @negInfBegNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlNotMeetsNegInfBeg.exec(@ctx).should.be.false()
    @unknownBegMeetsBeforeIntIvl.exec(@ctx).should.be.true()
    should(@unknownBegMayMeetAfterIntIvl.exec(@ctx)).be.null()
    @unknownBegNotMeetsIntIvl.exec(@ctx).should.be.false()
    should(@intIvlMayMeetBeforeUnknownBeg.exec(@ctx)).be.null()
    @posInfEndMeetsAfterIntIvl.exec(@ctx).should.be.true()
    @posInfEndNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlNotMeetsPosInfEnd.exec(@ctx).should.be.false()
    @unknownEndMeetsAfterIntIvl.exec(@ctx).should.be.true()
    should(@unknownEndMayMeetBeforeIntIvl.exec(@ctx)).be.null()
    @unknownEndNotMeetsIntIvl.exec(@ctx).should.be.false()
    should(@intIvlMayMeetAfterUnknownEnd.exec(@ctx)).be.null()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegMeetsBeforeDateIvl.exec(@ctx).should.be.true()
    @negInfBegNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlNotMeetsNegInfBeg.exec(@ctx).should.be.false()
    @unknownBegMeetsBeforeDateIvl.exec(@ctx).should.be.true()
    should(@unknownBegMayMeetAfterDateIvl.exec(@ctx)).be.null()
    @unknownBegNotMeetsDateIvl.exec(@ctx).should.be.false()
    should(@dateIvlMayMeetBeforeUnknownBeg.exec(@ctx)).be.null()
    @posInfEndMeetsAfterDateIvl.exec(@ctx).should.be.true()
    @posInfEndNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlNotMeetsPosInfEnd.exec(@ctx).should.be.false()
    @unknownEndMeetsAfterDateIvl.exec(@ctx).should.be.true()
    should(@unknownEndMayMeetBeforeDateIvl.exec(@ctx)).be.null()
    @unknownEndNotMeetsDateIvl.exec(@ctx).should.be.false()
    should(@dateIvlMayMeetAfterUnknownEnd.exec(@ctx)).be.null()

  it 'should correctly handle imprecision', ->
    should(@mayMeetAfterImpreciseDateIvl.exec(@ctx)).be.null()
    should(@mayMeetBeforeImpreciseDateIvl.exec(@ctx)).be.null()
    @notMeetsImpreciseDateIvl.exec(@ctx).should.be.false()
    should(@impreciseMayMeetAfterDateIvl.exec(@ctx)).be.null()
    should(@impreciseMayMeetBeforeDateIvl.exec(@ctx)).be.null()
    @impreciseNotMeetsDateIvl.exec(@ctx).should.be.false()

  it 'should correctly compare using the requested precision', ->
    @meetsAfterDayOfIvl.exec(@ctx).should.be.true()
    @meetsBeforeDayOfIvl.exec(@ctx).should.be.true()
    @notMeetsDayOfIvl.exec(@ctx).should.be.false()
    @notMeetsDayOfImpreciseIVL.exec(@ctx).should.be.false()
    should(@mayMeetAfterDayOfImpreciseIvl.exec(@ctx)).be.null()
    should(@mayMeetBeforeDayOfImpreciseIvl.exec(@ctx)).be.null()

describe 'MeetsAfter', ->
  @beforeEach ->
    setup @, data

  it 'should accept intervals meeting before it', ->
    @meetsAfterIntIvl.exec(@ctx).should.be.true()
    @meetsAfterRealIvl.exec(@ctx).should.be.true()
    @meetsAfterDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals meeting after it', ->
    @meetsBeforeIntIvl.exec(@ctx).should.be.false()
    @meetsBeforeRealIvl.exec(@ctx).should.be.false()
    @meetsBeforeDateIvl.exec(@ctx).should.be.false()

  it 'should reject intervals not meeting it', ->
    @notMeetsIntIvl.exec(@ctx).should.be.false()
    @notMeetsRealIvl.exec(@ctx).should.be.false()
    @notMeetsDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegMeetsBeforeIntIvl.exec(@ctx).should.be.false()
    @negInfBegNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlNotMeetsNegInfBeg.exec(@ctx).should.be.false()
    @unknownBegMeetsBeforeIntIvl.exec(@ctx).should.be.false()
    should(@unknownBegMayMeetAfterIntIvl.exec(@ctx)).be.null()
    @unknownBegNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlMayMeetBeforeUnknownBeg.exec(@ctx).should.be.false()
    @posInfEndMeetsAfterIntIvl.exec(@ctx).should.be.true()
    @posInfEndNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlNotMeetsPosInfEnd.exec(@ctx).should.be.false()
    @unknownEndMeetsAfterIntIvl.exec(@ctx).should.be.true()
    @unknownEndMayMeetBeforeIntIvl.exec(@ctx).should.be.false()
    @unknownEndNotMeetsIntIvl.exec(@ctx).should.be.false()
    should(@intIvlMayMeetAfterUnknownEnd.exec(@ctx)).be.null()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegMeetsBeforeDateIvl.exec(@ctx).should.be.false()
    @negInfBegNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlNotMeetsNegInfBeg.exec(@ctx).should.be.false()
    @unknownBegMeetsBeforeDateIvl.exec(@ctx).should.be.false()
    should(@unknownBegMayMeetAfterDateIvl.exec(@ctx)).be.null()
    @unknownBegNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlMayMeetBeforeUnknownBeg.exec(@ctx).should.be.false()
    @posInfEndMeetsAfterDateIvl.exec(@ctx).should.be.true()
    @posInfEndNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlNotMeetsPosInfEnd.exec(@ctx).should.be.false()
    @unknownEndMeetsAfterDateIvl.exec(@ctx).should.be.true()
    @unknownEndMayMeetBeforeDateIvl.exec(@ctx).should.be.false()
    @unknownEndNotMeetsDateIvl.exec(@ctx).should.be.false()
    should(@dateIvlMayMeetAfterUnknownEnd.exec(@ctx)).be.null()

  it 'should correctly handle imprecision', ->
    should(@mayMeetAfterImpreciseDateIvl.exec(@ctx)).be.null()
    @mayMeetBeforeImpreciseDateIvl.exec(@ctx).should.be.false()
    @notMeetsImpreciseDateIvl.exec(@ctx).should.be.false()
    should(@impreciseMayMeetAfterDateIvl.exec(@ctx)).be.null()
    @impreciseMayMeetBeforeDateIvl.exec(@ctx).should.be.false()
    @impreciseNotMeetsDateIvl.exec(@ctx).should.be.false()

  it 'should correctly compare using the requested precision', ->
    @meetsAfterDayOfIvl.exec(@ctx).should.be.true()
    @meetsBeforeDayOfIvl.exec(@ctx).should.be.false()
    @notMeetsDayOfIvl.exec(@ctx).should.be.false()
    @notMeetsDayOfImpreciseIVL.exec(@ctx).should.be.false()
    should(@mayMeetAfterDayOfImpreciseIvl.exec(@ctx)).be.null()
    @mayMeetBeforeDayOfImpreciseIvl.exec(@ctx).should.be.false()

describe 'MeetsBefore', ->
  @beforeEach ->
    setup @, data

  it 'should accept intervals meeting after it', ->
    @meetsBeforeIntIvl.exec(@ctx).should.be.true()
    @meetsBeforeRealIvl.exec(@ctx).should.be.true()
    @meetsBeforeDateIvl.exec(@ctx).should.be.true()

  it 'should reject intervals meeting before it', ->
    @meetsAfterIntIvl.exec(@ctx).should.be.false()
    @meetsAfterRealIvl.exec(@ctx).should.be.false()
    @meetsAfterDateIvl.exec(@ctx).should.be.false()

  it 'should reject intervals not meeting it', ->
    @notMeetsIntIvl.exec(@ctx).should.be.false()
    @notMeetsRealIvl.exec(@ctx).should.be.false()
    @notMeetsDateIvl.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (int)', ->
    @negInfBegMeetsBeforeIntIvl.exec(@ctx).should.be.true()
    @negInfBegNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlNotMeetsNegInfBeg.exec(@ctx).should.be.false()
    @unknownBegMeetsBeforeIntIvl.exec(@ctx).should.be.true()
    @unknownBegMayMeetAfterIntIvl.exec(@ctx).should.be.false()
    @unknownBegNotMeetsIntIvl.exec(@ctx).should.be.false()
    should(@intIvlMayMeetBeforeUnknownBeg.exec(@ctx)).be.null()
    @posInfEndMeetsAfterIntIvl.exec(@ctx).should.be.false()
    @posInfEndNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlNotMeetsPosInfEnd.exec(@ctx).should.be.false()
    @unknownEndMeetsAfterIntIvl.exec(@ctx).should.be.false()
    should(@unknownEndMayMeetBeforeIntIvl.exec(@ctx)).be.null()
    @unknownEndNotMeetsIntIvl.exec(@ctx).should.be.false()
    @intIvlMayMeetAfterUnknownEnd.exec(@ctx).should.be.false()

  it 'should correctly handle null endpoints (date)', ->
    @negInfBegMeetsBeforeDateIvl.exec(@ctx).should.be.true()
    @negInfBegNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlNotMeetsNegInfBeg.exec(@ctx).should.be.false()
    @unknownBegMeetsBeforeDateIvl.exec(@ctx).should.be.true()
    @unknownBegMayMeetAfterDateIvl.exec(@ctx).should.be.false()
    @unknownBegNotMeetsDateIvl.exec(@ctx).should.be.false()
    should(@dateIvlMayMeetBeforeUnknownBeg.exec(@ctx)).be.null()
    @posInfEndMeetsAfterDateIvl.exec(@ctx).should.be.false()
    @posInfEndNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlNotMeetsPosInfEnd.exec(@ctx).should.be.false()
    @unknownEndMeetsAfterDateIvl.exec(@ctx).should.be.false()
    should(@unknownEndMayMeetBeforeDateIvl.exec(@ctx)).be.null()
    @unknownEndNotMeetsDateIvl.exec(@ctx).should.be.false()
    @dateIvlMayMeetAfterUnknownEnd.exec(@ctx).should.be.false()

  it 'should correctly handle imprecision', ->
    @mayMeetAfterImpreciseDateIvl.exec(@ctx).should.be.false()
    should(@mayMeetBeforeImpreciseDateIvl.exec(@ctx)).be.null()
    @notMeetsImpreciseDateIvl.exec(@ctx).should.be.false()
    @impreciseMayMeetAfterDateIvl.exec(@ctx).should.be.false()
    should(@impreciseMayMeetBeforeDateIvl.exec(@ctx)).be.null()
    @impreciseNotMeetsDateIvl.exec(@ctx).should.be.false()

  it 'should correctly compare using the requested precision', ->
    @meetsAfterDayOfIvl.exec(@ctx).should.be.false()
    @meetsBeforeDayOfIvl.exec(@ctx).should.be.true()
    @notMeetsDayOfIvl.exec(@ctx).should.be.false()
    @notMeetsDayOfImpreciseIVL.exec(@ctx).should.be.false()
    @mayMeetAfterDayOfImpreciseIvl.exec(@ctx).should.be.false()
    should(@mayMeetBeforeDayOfImpreciseIvl.exec(@ctx)).be.null()

describe 'Overlaps', ->
  @beforeEach ->
    setup @, data

  it 'should accept overlaps (integer)', ->
    @overlapsBeforeIntIvl.exec(@ctx).should.be.true()
    @overlapsAfterIntIvl.exec(@ctx).should.be.true()
    @overlapsBoundaryIntIvl.exec(@ctx).should.be.true()

  it 'should accept overlaps (real)', ->
    @overlapsBeforeRealIvl.exec(@ctx).should.be.true()
    @overlapsAfterRealIvl.exec(@ctx).should.be.true()
    @overlapsBoundaryRealIvl.exec(@ctx).should.be.true()

  it 'should reject non-overlaps (integer)', ->
    @noOverlapsIntIvl.exec(@ctx).should.be.false()

  it 'should reject non-overlaps (real)', ->
    @noOverlapsRealIvl.exec(@ctx).should.be.false()

describe 'OverlapsDateTime', ->
  @beforeEach ->
    setup @, data

  it 'should accept overlaps', ->
    @overlapsBefore.exec(@ctx).should.be.true()
    @overlapsAfter.exec(@ctx).should.be.true()
    @overlapsContained.exec(@ctx).should.be.true()
    @overlapsContains.exec(@ctx).should.be.true()

  it 'should accept imprecise overlaps', ->
    @impreciseOverlap.exec(@ctx).should.be.true()

  it 'should reject non-overlaps', ->
    @noOverlap.exec(@ctx).should.be.false()

  it 'should reject imprecise non-overlaps', ->
    @noImpreciseOverlap.exec(@ctx).should.be.false()

  it 'should return null for imprecise overlaps with differing precision', ->
    should(@unknownOverlap.exec(@ctx)).be.null()

  it 'should return true for imprecise overlaps with matching precision', ->
    @matchingPrecisionOverlap.exec(@ctx).should.be.true()

  it 'should correctly compare using the requested precision', ->
    # NOTE: Some assertions commented out because cql-to-elm is WRONGLY translating 'overlaps' to 'OverlapsAfter'!
    #@overlapsBeforeDayOfIvlEdge.exec(@ctx).should.be.true()
    @overlapsAfterDayOfIvlEdge.exec(@ctx).should.be.true()
    @overlapsContainsDayOfIvl.exec(@ctx).should.be.true()
    #@overlapsContainedByDayOfIvl.exec(@ctx).should.be.true()
    @notOverlapsDayOfIvl.exec(@ctx).should.be.false()
    @overlapsAfterDayOfImpreciseInterval.exec(@ctx).should.be.true()
    #should(@mayOverlapBeforeDayOfImpreciseIvl.exec(@ctx)).be.null()
    should(@mayOverlapAfterDayOfImpreciseIvl.exec(@ctx)).be.null()

describe 'OverlapsAfter', ->
  @beforeEach ->
    setup @, data

  it 'should accept overlaps that are after (integer)', ->
    @overlapsAfterIntIvl.exec(@ctx).should.be.true()
    @overlapsBoundaryIntIvl.exec(@ctx).should.be.true()

  it 'should accept overlaps that are after (real)', ->
    @overlapsAfterRealIvl.exec(@ctx).should.be.true()
    @overlapsBoundaryRealIvl.exec(@ctx).should.be.true()

  it 'should reject overlaps that are before (integer)', ->
    @overlapsBeforeIntIvl.exec(@ctx).should.be.false()

  it 'should reject overlaps that are before (real)', ->
    @overlapsBeforeRealIvl.exec(@ctx).should.be.false()

  it 'should reject non-overlaps (integer)', ->
    @noOverlapsIntIvl.exec(@ctx).should.be.false()

  it 'should reject non-overlaps (real)', ->
    @noOverlapsRealIvl.exec(@ctx).should.be.false()

describe 'OverlapsAfterDateTime', ->
  @beforeEach ->
    setup @, data

  it 'should accept overlaps that are after', ->
    @overlapsAfter.exec(@ctx).should.be.true()
    @overlapsContains.exec(@ctx).should.be.true()

  it 'should accept imprecise overlaps that are after', ->
    @impreciseOverlapAfter.exec(@ctx).should.be.true()

  it 'should reject overlaps that are not before', ->
    @overlapsBefore.exec(@ctx).should.be.false()
    @overlapsContained.exec(@ctx).should.be.false()

  it 'should reject imprecise overlaps that are not before', ->
    @impreciseOverlapBefore.exec(@ctx).should.be.false()

  it 'should reject non-overlaps', ->
    @noOverlap.exec(@ctx).should.be.false()

  it 'should reject imprecise non-overlaps', ->
    @noImpreciseOverlap.exec(@ctx).should.be.false()

  it 'should return true for imprecise overlaps with matching precision', ->
    @matchingPrecisionOverlap.exec(@ctx).should.be.true()

  it 'should return null for imprecise overlaps that are unknown', ->
    should(@unknownOverlap.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @overlapsBeforeDayOfIvlEdge.exec(@ctx).should.be.false()
    @overlapsAfterDayOfIvlEdge.exec(@ctx).should.be.true()
    @overlapsContainsDayOfIvl.exec(@ctx).should.be.true()
    @overlapsContainedByDayOfIvl.exec(@ctx).should.be.false()
    @notOverlapsDayOfIvl.exec(@ctx).should.be.false()
    @overlapsAfterDayOfImpreciseInterval.exec(@ctx).should.be.true()
    @mayOverlapBeforeDayOfImpreciseIvl.exec(@ctx).should.be.false()
    should(@mayOverlapAfterDayOfImpreciseIvl.exec(@ctx)).be.null()

describe 'OverlapsBefore', ->
  @beforeEach ->
    setup @, data

  it 'should accept overlaps that are before (integer)', ->
    @overlapsBeforeIntIvl.exec(@ctx).should.be.true()
    @overlapsBoundaryIntIvl.exec(@ctx).should.be.true()

  it 'should accept overlaps that are before (real)', ->
    @overlapsBeforeRealIvl.exec(@ctx).should.be.true()
    @overlapsBoundaryRealIvl.exec(@ctx).should.be.true()

  it 'should reject overlaps that are after (integer)', ->
    @overlapsAfterIntIvl.exec(@ctx).should.be.false()

  it 'should reject overlaps that are after (real)', ->
    @overlapsAfterRealIvl.exec(@ctx).should.be.false()

  it 'should reject non-overlaps (integer)', ->
    @noOverlapsIntIvl.exec(@ctx).should.be.false()

  it 'should reject non-overlaps (real)', ->
    @noOverlapsRealIvl.exec(@ctx).should.be.false()

describe 'OverlapsBeforeDateTime', ->
  @beforeEach ->
    setup @, data

  it 'should accept overlaps that are before', ->
    @overlapsBefore.exec(@ctx).should.be.true()
    @overlapsContains.exec(@ctx).should.be.true()

  it 'should accept imprecise overlaps that are before', ->
    @impreciseOverlapBefore.exec(@ctx).should.be.true()

  it 'should reject overlaps that are not before', ->
    @overlapsAfter.exec(@ctx).should.be.false()
    @overlapsContained.exec(@ctx).should.be.false()

  it 'should reject imprecise overlaps that are not before', ->
    @impreciseOverlapAfter.exec(@ctx).should.be.false()

  it 'should reject non-overlaps', ->
    @noOverlap.exec(@ctx).should.be.false()

  it 'should reject imprecise non-overlaps', ->
    @noImpreciseOverlap.exec(@ctx).should.be.false()

  it 'should return true for imprecise overlaps with matching precision', ->
    @matchingPrecisionOverlap.exec(@ctx).should.be.true()

  it 'should return null for imprecise overlaps that are unknown', ->
    should(@unknownOverlap.exec(@ctx)).be.null()

  it 'should correctly compare using the requested precision', ->
    @overlapsBeforeDayOfIvlEdge.exec(@ctx).should.be.true()
    @overlapsAfterDayOfIvlEdge.exec(@ctx).should.be.false()
    @overlapsContainsDayOfIvl.exec(@ctx).should.be.true()
    @overlapsContainedByDayOfIvl.exec(@ctx).should.be.false()
    @notOverlapsDayOfIvl.exec(@ctx).should.be.false()
    @overlapsAfterDayOfImpreciseInterval.exec(@ctx).should.be.false()
    should(@mayOverlapBeforeDayOfImpreciseIvl.exec(@ctx)).be.null()
    @mayOverlapAfterDayOfImpreciseIvl.exec(@ctx).should.be.false()

describe 'Width', ->
  @beforeEach ->
    setup @, data

  it 'should calculate the width of integer intervals', ->
    @intWidth.exec(@ctx).should.equal 7
    @intOpenWidth.exec(@ctx).should.equal 5

  it 'should calculate the width of real intervals', ->
    @realWidth.exec(@ctx).should.equal 3.33
    @realOpenWidth.exec(@ctx).should.equal 3.32999998

  it 'should calculate the width of infinite intervals', ->
    @intWidthThreeToMax.exec(@ctx).should.equal Math.pow(2,31)-4
    @intWidthMinToThree.exec(@ctx).should.equal Math.pow(2,31)+3

  it 'should calculate the width of infinite intervals', ->
    should(@intWidthThreeToUnknown.exec(@ctx)).be.null()
    should(@intWidthUnknownToThree.exec(@ctx)).be.null()

describe 'Start', ->
  @beforeEach ->
    setup @, data

  it 'should execute as the start of the interval', ->
    @foo.exec(@ctx).should.eql new DateTime(2012, 1, 1)

describe 'End', ->
  @beforeEach ->
    setup @, data

  it 'should execute as the end of the interval', ->
    @foo.exec(@ctx).should.eql new DateTime(2013, 1, 1)

describe 'Starts', ->
  @beforeEach ->
    setup @, data

  it 'should calculate to null', ->
    should(@testStartsNull.exec(@ctx)).be.null()

  it 'should calculate integer intervals properly', ->
    @integerIntervalStartsTrue.exec(@ctx).should.be.true()
    @integerIntervalStartsFalse.exec(@ctx).should.be.false()
    @integerIntervalStartEndsFalse.exec(@ctx).should.be.false()

  it 'should calculate decimal intervals properly', ->
    @decimalIntervalStartsTrue.exec(@ctx).should.be.true()
    @decimalIntervalStartsFalse.exec(@ctx).should.be.false()
    @decimalIntervalStartsEndsFalse.exec(@ctx).should.be.false()

  it 'should calculate quantity intervals properly', ->
    @quantityIntervalStartsTrue.exec(@ctx).should.be.true()
    @quantityIntervalStartsFalse.exec(@ctx).should.be.false()
    @quantityIntervalStartsEndsFalse.exec(@ctx).should.be.false()

  it 'should calculate datetime intervals properly', ->
    @dateTimeIntervalStartsTrue.exec(@ctx).should.be.true()
    @dateTimeIntervalStartsFalse.exec(@ctx).should.be.false()
    @dateTimeIntervalStartsDayOfTrue.exec(@ctx).should.be.true()
    @dateTimeIntervalStartsEndsFalse.exec(@ctx).should.be.false()

describe 'Ends', ->
  @beforeEach ->
    setup @, data

  it 'should calculate to null', ->
    should(@testEndsNull.exec(@ctx)).be.null()

  it 'should calculate integer intervals properly', ->
    @integerIntervalEndsTrue.exec(@ctx).should.be.true()
    @integerIntervalEndsFalse.exec(@ctx).should.be.false()
    @integerIntervalEndsStartsFalse.exec(@ctx).should.be.false()

  it 'should calculate decimal intervals properly', ->
    @decimalIntervalEndsTrue.exec(@ctx).should.be.true()
    @decimalIntervalEndsFalse.exec(@ctx).should.be.false()
    @decimalIntervalEndsStartsFalse.exec(@ctx).should.be.false()

  it 'should calculate quantity intervals properly', ->
    @quantityIntervalEndsTrue.exec(@ctx).should.be.true()
    @quantityIntervalEndsFalse.exec(@ctx).should.be.false()
    @quantityIntervalEndsStartsFalse.exec(@ctx).should.be.false()

  it 'should calculate datetime intervals properly', ->
    @dateTimeIntervalEndsTrue.exec(@ctx).should.be.true()
    @dateTimeIntervalEndsFalse.exec(@ctx).should.be.false()
    @dateTimeIntervalEndsDayOfTrue.exec(@ctx).should.be.true()
    @dateTimeIntervalEndsStartsFalse.exec(@ctx).should.be.false()

describe 'IntegerIntervalUnion', ->
  @beforeEach ->
    setup @, data

  it 'should properly calculate open and closed unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intClosedUnionClosed.exec(@ctx)
    y.equals(x).should.be.true()

    y = @intClosedUnionOpen.exec(@ctx)
    y.contains(0).should.be.true()
    y.contains(10).should.be.false()

    y = @intOpenUnionOpen.exec(@ctx)
    y.contains(0).should.be.false()
    y.contains(10).should.be.false()

    y = @intOpenUnionClosed.exec(@ctx)
    y.contains(0).should.be.false()
    y.contains(10).should.be.true()

  it 'should properly calculate sameAs unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intSameAsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate before/after unions', ->
    should(@intBeforeUnion.exec(@ctx)).be.null()

  it 'should properly calculate meets unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intMeetsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate left/right overlapping unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intOverlapsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate begins/begun by unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intBeginsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate includes/included by unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intDuringUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate ends/ended by unions', ->
    x = @intFullInterval.exec(@ctx)
    y = @intEndsUnion.exec(@ctx)
    y.equals(x).should.be.true()

# TODO
# it 'should properly handle imprecision', ->

describe 'DateTimeIntervalUnion', ->
  @beforeEach ->
    setup @, data

  it 'should properly calculate open and closed unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeClosedUnionClosed.exec(@ctx)
    y.equals(x).should.be.true()

    a = new DateTime(2012, 1, 1, 0, 0, 0, 0)
    b = new DateTime(2013, 1, 1, 0, 0, 0, 0)

    y = @dateTimeClosedUnionOpen.exec(@ctx)
    y.contains(a).should.be.true()
    y.contains(b).should.be.false()

    y = @dateTimeOpenUnionOpen.exec(@ctx)
    y.contains(a).should.be.false()
    y.contains(b).should.be.false()

    y = @dateTimeOpenUnionClosed.exec(@ctx)
    y.contains(a).should.be.false()
    y.contains(b).should.be.true()

  it 'should properly calculate sameAs unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeSameAsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate before/after unions', ->
    should(@dateTimeBeforeUnion.exec(@ctx)).be.null()

  it 'should properly calculate meets unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeMeetsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate left/right overlapping unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeOverlapsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate begins/begun by unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeBeginsUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate includes/included by unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeDuringUnion.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate ends/ended by unions', ->
    x = @dateTimeFullInterval.exec(@ctx)
    y = @dateTimeEndsUnion.exec(@ctx)
    y.equals(x).should.be.true()

# TODO
# it 'should properly handle imprecision', ->

describe 'IntegerIntervalExcept', ->
  @beforeEach ->
    setup @, data

   it 'should properly calculate sameAs except', ->
    should(@intSameAsExcept.exec(@ctx)).be.null()

  it 'should properly calculate before/after except', ->
    @intBeforeExcept.exec(@ctx).should.eql new Interval(0,4)

  it 'should properly calculate meets except', ->
    x = @intHalfInterval.exec(@ctx)
    y = @intMeetsExcept.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate left/right overlapping except', ->
    x = @intHalfInterval.exec(@ctx)
    y = @intOverlapsExcept.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate begins/begun by except', ->
    should(@intBeginsExcept.exec(@ctx)).be.null()

  it 'should properly calculate includes/included by except', ->
    should(@intDuringExcept.exec(@ctx)).be.null()

  it 'should properly calculate ends/ended by except', ->
    should(@intEndsExcept.exec(@ctx)).be.null()

# TODO
# it 'should properly handle imprecision', ->

describe 'DateTimeIntervalExcept', ->
  @beforeEach ->
    setup @, data

  it 'should properly calculate sameAs except', ->
    should(@dateTimeSameAsExcept.exec(@ctx)).be.null()

  it 'should properly calculate before/after except', ->
    @dateTimeBeforeExcept.exec(@ctx).should.eql new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2012, 4, 1, 0, 0, 0, 0))

  it 'should properly calculate meets except', ->
    x = @dateTimeHalfInterval.exec(@ctx)
    y = @dateTimeMeetsExcept.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate left/right overlapping except', ->
    x = @dateTimeHalfInterval.exec(@ctx)
    y = @dateTimeOverlapsExcept.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate begins/begun by except', ->
    should(@dateTimeBeginsExcept.exec(@ctx)).be.null()

  it 'should properly calculate includes/included by except', ->
    should(@dateTimeDuringExcept.exec(@ctx)).be.null()

  it 'should properly calculate ends/ended by except', ->
    should(@dateTimeEndsExcept.exec(@ctx)).be.null()

# TODO
# it 'should properly handle imprecision', ->

describe 'IntegerIntervalIntersect', ->
  @beforeEach ->
    setup @, data

   it 'should properly calculate sameAs intersect', ->
    x = @intSameAsIntersect.exec(@ctx)
    y = @intFullInterval.exec(@ctx)
    x.equals(y).should.be.true()

  it 'should properly calculate before/after intersect', ->
    should(@intBeforeIntersect.exec(@ctx)).be.null()

  it 'should properly calculate meets intersect', ->
    x = @intMeetsInterval.exec(@ctx)
    y = @intMeetsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate left/right overlapping intersect', ->
    x = @intOverlapsInterval.exec(@ctx)
    y = @intOverlapsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate begins/begun by intersect', ->
    x = @intBeginsInterval.exec(@ctx)
    y = @intBeginsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate includes/included by intersect', ->
    x = @intDuringInterval.exec(@ctx)
    y = @intDuringIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate ends/ended by intersect', ->
    x = @intEndsInterval.exec(@ctx)
    y = @intEndsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

describe 'DateTimeIntervalIntersect', ->
  @beforeEach ->
    setup @, data

   it 'should properly calculate sameAs intersect', ->
    x = @dateTimeSameAsIntersect.exec(@ctx)
    y = @dateTimeFullInterval.exec(@ctx)
    x.equals(y).should.be.true()

  it 'should properly calculate before/after intersect', ->
    should(@dateTimeBeforeIntersect.exec(@ctx)).be.null()

  it 'should properly calculate meets intersect', ->
    x = @dateTimeMeetsInterval.exec(@ctx)
    y = @dateTimeMeetsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate left/right overlapping intersect', ->
    x = @dateTimeOverlapsInterval.exec(@ctx)
    y = @dateTimeOverlapsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate begins/begun by intersect', ->
    x = @dateTimeBeginsInterval.exec(@ctx)
    y = @dateTimeBeginsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate includes/included by intersect', ->
    x = @dateTimeDuringInterval.exec(@ctx)
    y = @dateTimeDuringIntersect.exec(@ctx)
    y.equals(x).should.be.true()

  it 'should properly calculate ends/ended by intersect', ->
    x = @dateTimeEndsInterval.exec(@ctx)
    y = @dateTimeEndsIntersect.exec(@ctx)
    y.equals(x).should.be.true()

# TODO: 2 tests I don't know how to write:
#   - If the argument is null, the result is null.
#   - If the list of intervals contains nulls, they will be excluded from the resulting list.
describe 'IntegerIntervalCollapse', ->
  @beforeEach ->
    setup @, data

  it 'empty interval collapses to empty', ->
    @intCollapseEmpty.exec(@ctx).should.eql @intEmptyIntervalList.exec(@ctx)

  it 'single interval list collapse to self', ->
    @intCollapseSingleInterval.exec(@ctx).should.eql @int1_10IntervalList.exec(@ctx)

  it 'disjoint intervals list collapses to ordered self', ->
    @intCollapseDisjoint.exec(@ctx).should.eql @intTwoItemDisjointList.exec(@ctx)
    @intCollapseDisjointReversed.exec(@ctx).should.eql @intTwoItemDisjointList.exec(@ctx)

  it 'adjacent intervals list combines', ->
    @intCollapseAdjacent.exec(@ctx).should.eql @int1_15IntervalList.exec(@ctx)

  it 'overlapping intervals list combine', ->
    @intCollapseOverlap.exec(@ctx).should.eql @int1_12IntervalList.exec(@ctx)
    @intCollapseOverlapContained.exec(@ctx).should.eql @int1_15IntervalList.exec(@ctx)
    @intCollapseOverlapContainedEdge.exec(@ctx).should.eql @int1_10IntervalList.exec(@ctx)
    @intCollapseOverlapContainedEdge2.exec(@ctx).should.eql @int1_15IntervalList.exec(@ctx)
    @intCollapseOverlapMultipleCombine.exec(@ctx).should.eql @int1_15IntervalList.exec(@ctx)

describe 'DateTimeIntervalCollapse', ->
  @beforeEach ->
    setup @, data

  it 'empty interval collapses to empty', ->
    @dateTimeCollapseEmpty.exec(@ctx).should.eql @dateTimeEmptyIntervalList.exec(@ctx)

  it 'single interval list collapse to self', ->
    @dateTimeCollapseSingleInterval.exec(@ctx).should.eql @dateTime1_10IntervalList.exec(@ctx)

  it 'disjoint intervals list collapses to ordered self', ->
    @dateTimeCollapseDisjoint.exec(@ctx).should.eql @dateTimeTwoItemDisjointList.exec(@ctx)

  it 'reversed disjoint intervals list collapses to ordered self', ->
    @dateTimeCollapseDisjointReversed.exec(@ctx).should.eql @dateTimeTwoItemDisjointList.exec(@ctx)

  it 'adjacent intervals list combines', ->
    @dateTimeCollapseAdjacent.exec(@ctx).should.eql @dateTime1_15IntervalList.exec(@ctx)

  it 'overlapping intervals list combine', ->
    @dateTimeCollapseOverlap.exec(@ctx).should.eql @dateTime1_12IntervalList.exec(@ctx)
    @dateTimeCollapseOverlapContained.exec(@ctx).should.eql @dateTime1_15IntervalList.exec(@ctx)
    @dateTimeCollapseOverlapContainedEdge.exec(@ctx).should.eql @dateTime1_10IntervalList.exec(@ctx)
    @dateTimeCollapseOverlapContainedEdge2.exec(@ctx).should.eql @dateTime1_15IntervalList.exec(@ctx)
    @dateTimeCollapseOverlapMultipleCombine.exec(@ctx).should.eql @dateTime1_15IntervalList.exec(@ctx)

  it 'throws collapsing imprecise interval', ->
    @dateTimeCollapseImpreciseBoundary.exec(@ctx).should.eql @dateTime1_10IntervalList.exec(@ctx)

  it 'should not modify collapse parameters', ->
    interval1CopyString = @dateTime1_6Interval.toString()
    interval2CopyString = @dateTime5_12Interval.toString()
    interval3CopyString = @dateTime10_15Interval.toString()
    @dateTimeCollapseOverlapMultipleCombine.exec(@ctx)
    @dateTime1_6Interval.toString().should.eql interval1CopyString
    @dateTime5_12Interval.toString().should.eql interval2CopyString
    @dateTime10_15Interval.toString().should.eql interval3CopyString

describe 'Collapse', ->
  @beforeEach ->
    setup @, data

  it 'numeric collapse uses "1" as default per unit', ->
    @intCollapseNoPer.exec(@ctx).should.eql @intCollapsePerUnit1.exec(@ctx)

  it 'combines intervals separated by less than per unit', ->
    @intCollapseSeparatedListPer3.exec(@ctx).should.eql @expectedIntervalList.exec(@ctx)

  it 'DateTime collapse uses 1 ms as default per unit', ->
    # TODO: spec says to determine this based on width of successor, but Bonnie
    # will only ever have fully-defined dates. Implement successor way if time.
    @dateTimeCollapseNoPer.exec(@ctx).should.eql @dateTimeCollapsePerMs.exec(@ctx)

  it 'DateTime with null end collapse with no overlap', ->
    @dateTimeNullEndCollapseNoOverlap.exec(@ctx).should.eql @dateTimeNullEndCollapseNoOverlapExpected.exec(@ctx)

  it 'DateTime with null start collapse with no overlap', ->
    @dateTimeNullStartCollapseNoOverlap.exec(@ctx).should.eql @dateTimeNullStartCollapseNoOverlapExpected.exec(@ctx)

  it 'combines DateTime intervals separated by less than per unit', ->
    @dateTimeCollapsePerDay.exec(@ctx).should.eql @dateTime1_15IntervalList.exec(@ctx)

  it 'Quantity uses default per unit', ->
    quantity_collapse = @quantityIntervalCollapseNoPer.exec(@ctx)
    quantity_collapse.should.eql @expectedQuantityList.exec(@ctx)
    quantity_collapse.should.eql @quantityIntervalCollapsePerUnit1.exec(@ctx)

  it 'Quantity with separated intervals', ->
    @collapseSeparatedQuantity.exec(@ctx).should.eql @quantitySeparatedBy3.exec(@ctx)

  it 'Quantity combines disjoint intervals that are within per width', ->
    @collapseSeparatedQuantityPer3.exec(@ctx).should.eql @expectedSeparatedQuantity.exec(@ctx)

  it 'Quantity with units uses point type as default per value', ->
    @collapseDisjointQuantityUnits.exec(@ctx).should.eql @expectedQuantityUnitsCollapse.exec(@ctx)

  it 'Quantity with units disjoint but within per', ->
    @collapseQuantityUnitsWithinPer.exec(@ctx).should.eql @expectedQuantityUnitsCollapse.exec(@ctx)

  it 'Quantity with units disjoint and not within per', ->
    @collapseQuantityUnitsNotWithinPer.exec(@ctx).should.eql @quantityMeterIntervalList.exec(@ctx)

  it 'Quantity with units with null low value', ->
    @collapseQuantityNullLowUnitsWithinPer.exec(@ctx).should.eql @collapseQuantityNullLowUnitsWithinPerExpected.exec(@ctx)

  it 'Quantity with units with null low and high values', ->
    @collapseQuantityIntervalListWithNulls.exec(@ctx).should.eql @collapseQuantityIntervalListWithNullsExpected.exec(@ctx)

  it 'Quantity with units with null high value', ->
    @collapseQuantityNullHighUnitsWithinPer.exec(@ctx).should.eql @collapseQuantityNullHighUnitsWithinPerExpected.exec(@ctx)

  it 'Quantity Intervals no overlap with null low', ->
    @collapseQuantityIntervalListWithNullLowNoOverlap.exec(@ctx).should.eql @collapseQuantityIntervalListWithNullLowNoOverlapExpected.exec(@ctx)

  it 'Quantity Intervals no overlap with null high', ->
    @collapseQuantityIntervalListWithNullHighNoOverlap.exec(@ctx).should.eql @collapseQuantityIntervalListWithNullHighNoOverlapExpected.exec(@ctx)

  it 'with Interval that has null low values', ->
    @collapseNullLowIntervalList.exec(@ctx).should.eql @expectedNullLowIntervalCollapse.exec(@ctx)

  it 'with Interval that has null high values', ->
    @collapseNullHighIntervalList.exec(@ctx).should.eql @expectedNullHighIntervalCollapse.exec(@ctx)

  it 'with Date Interval that has null start values', ->
    @dateTimeNullStartCollapse.exec(@ctx).should.eql @dateTimeNullStartCollapseExpected.exec(@ctx)

  it 'with Date Interval that has null high values', ->
    @dateTimeNullEndCollapse.exec(@ctx).should.eql @dateTimeNullEndCollapseExpected.exec(@ctx)

  it 'with Date Interval that has null high and low values', ->
    @dateTimeNullStartEndCollapse.exec(@ctx).should.eql @dateTimeNullStartEndCollapseExpected.exec(@ctx)

  it 'should ignore nulls in list of Intervals', ->
    @nullInCollapse.exec(@ctx).should.eql @expectedResultWithNull.exec(@ctx)

  it.skip 'should return null if list is null', ->
    # TODO: Translation Error
    should.not.exist @nullCollapse.exec(@ctx)

  it 'should use default per unit if per is expicitly null', ->
    @nullPerCollapse.exec(@ctx).should.eql @expectedResultNullPer.exec(@ctx)

prettyList = (array) ->
  if not array?
    return array
  '{ ' + array.join(', ') + ' }'

describe 'DateIntervalExpand', ->
  @beforeEach ->
    setup @, data

  it 'expands a closed interval per day', ->
    # define ClosedSinglePerDay: expand { Interval[@2018-01-01, @2018-01-03] } per day
    a = @closedSinglePerDay.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'

  it 'expands a closed interval per week', ->
    # define ClosedSinglePerWeek: expand { Interval[@2018-01-01, @2018-01-21] } per week
    a = @closedSinglePerWeek.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }'

  it 'expands a closed interval per month', ->
    # define ClosedSinglePerMonth: expand { Interval[@2018-01-01, @2018-03-31] } per month
    # define ClosedSinglePerMonthTrunc: expand { Interval[@2018-01-01, @2018-04-29] } per month
    a = @closedSinglePerMonth.exec(@ctx)
    b = @closedSinglePerMonthTrunc.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-31], [2018-02-01, 2018-02-28], [2018-03-01, 2018-03-31] }'
    prettyList(a).should.equal prettyList(b)

  it 'expands a closed interval per year', ->
    # define ClosedSinglePerYear: expand { Interval[@2016-01-01, @2018-12-32] } per year
    # define ClosedSinglePerYearTrunc: expand { Interval[@2016-01-01, @2019-12-30] } per year
    a = @closedSinglePerYear.exec(@ctx)
    b = @closedSinglePerYearTrunc.exec(@ctx)
    prettyList(a).should.equal '{ [2016-01-01, 2016-12-31], [2017-01-01, 2017-12-31], [2018-01-01, 2018-12-31] }'
    prettyList(a).should.equal prettyList(b)

  it 'ignores null item in list', ->
    # define NullInList: expand { Interval[@2018-01-01, @2018-01-03], null } per day
    a = @nullInList.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'

  it 'expands two overlapping intervals', ->
    # define Overlapping: expand { Interval[@2018-01-01, @2018-01-03], Interval[@2018-01-02, @2018-01-04] } per day
    a = @overlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03], [2018-01-04, 2018-01-04] }'
  
  it 'expands two non overlapping intervals', ->
    # define NonOverlapping: expand { Interval[@2018-01-01, @2018-01-03], Interval[@2018-01-08, @2018-01-08] } per day
    a = @nonOverlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03], [2018-01-08, 2018-01-08] }'

  it 'expands an interval with mid boundaries per day', ->
    # define MidBoundariesPerDay: expand { Interval[@2017-12-30, @2018-01-01] } per day
    a = @midBoundariesPerDay.exec(@ctx)
    prettyList(a).should.equal '{ [2017-12-30, 2017-12-30], [2017-12-31, 2017-12-31], [2018-01-01, 2018-01-01] }'

  it 'expands an interval with mid boundaries per month', ->
    # define MidBoundariesPerMonth: expand { Interval[@2017-11-14, @2018-01-18] } per month
    a = @midBoundariesPerMonth.exec(@ctx)
    prettyList(a).should.equal '{ [2017-11-14, 2017-12-13], [2017-12-14, 2018-01-13] }'

  it 'expands an interval with mid boundaries per year', ->
    # define MidBoundariesPerDayYear: expand { Interval[@2016-04-06, @2018-04-06] } per year
    a = @midBoundariesPerYear.exec(@ctx)
    prettyList(a).should.equal '{ [2016-04-06, 2017-04-05], [2017-04-06, 2018-04-05] }'

  it 'expands an interval with default per', ->
    # define NoPerDefaultDay: expand { Interval[@2018-01-01, @2018-01-03] }
    a = @noPerDefaultDay.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'

    # define NoPerDefaultMonth: expand { Interval[@2018-01, @2018-03] }
    a = @noPerDefaultMonth.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }'
    
    # define NoPerDefaultYear: expand { Interval[@2016, @2018] }
    a = @noPerDefaultYear.exec(@ctx)
    prettyList(a).should.equal '{ [2016, 2016], [2017, 2017], [2018, 2018] }'

    # define NoPerDefaultMonthWithMismatch: expand { Interval[@2016, @2018-03] }
    a = @noPerDefaultYear.exec(@ctx)
    prettyList(a).should.equal '{ [2016, 2016], [2017, 2017], [2018, 2018] }'


  it 'expands interval with open ends', ->
    # define OpenStart: expand { Interval(@2018-01-01, @2018-01-03] } per day
    a = @openStart.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'

    # define OpenEnd: expand { Interval[@2018-01-01, @2018-01-03) } per day
    a = @openEnd.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02] }'

    # define OpenBoth: expand { Interval(@2018-01-01, @2018-01-03) } per day
    a = @openBoth.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-02, 2018-01-02] }'

  it 'handles ends with mismatched precision', ->
    # define MismatchPrecision: expand { Interval[@2018-01-01, @2018-03] } per month
    e = "{ [2018-01-01, 2018-01-31], [2018-02-01, 2018-02-28] }"
    prettyList(@mismatchPrecision.exec(@ctx)).should.equal e

    # define MismatchPrecisionEmpty: expand { Interval[@2018-01, @2018-02-28] } per month
    e = "{ [2018-01, 2018-01], [2018-02, 2018-02] }"
    prettyList(@mismatchPrecisionEmpty.exec(@ctx)).should.equal e

    # @mismatchPrecisionEmpty.exec(@ctx).length.should.equal 0

  it 'returns an empty list if we get an empty list', ->
    # define EmptyList: List<Interval<Date>>{}
    a = @emptyList.exec(@ctx)
    a.length.should.equal 0

  it 'returns null with open ended intervals', ->
    # define NullOpen: expand { Interval[null, @2018-01-03] } per day
    a = @nullOpen.exec(@ctx)
    should.not.exist(a)

    # define NullClose: expand { Interval[@2018-01-01, null] } per day
    a = @nullClose.exec(@ctx)
    should.not.exist(a)

    # define NullBoth: expand { Interval[null, null] } per day
    a = @nullBoth.exec(@ctx)
    should.not.exist(a)

  it 'returns null when per is more precise than the interval ends', ->
    # define MonthDayPer: expand { Interval[@2018-01, @2018-03] } per day
    a = @monthDayPer.exec(@ctx)
    should.not.exist(a)

    # define YearMonthPer: expand { Interval[@2016, @2018] } per month
    a = @yearMonthPer.exec(@ctx)
    should.not.exist(a)

    # define YearDayPer: expand { Interval[@2016, @2018] } per day
    a = @yearDayPer.exec(@ctx)
    should.not.exist(a)

  it 'returns null when per not applicable', ->
    # define BadPerMinute: expand { Interval[@2018-01-01, @2018-01-04] } per minute
    a = @badPerMinute.exec(@ctx)
    should.not.exist(a)

    # define BadPerGram: expand { Interval[@2018-01-01, @2018-01-04] } per 1 'g'
    a = @badPerGram.exec(@ctx)
    should.not.exist(a)

describe 'DateTimeIntervalExpand', ->
  @beforeEach ->
    setup @, data

  it 'expands a millisecond precision datetime', ->
    # define MsPrecPerYear: expand { Interval[@2016-01-01T00:00:00.000+00:00, @2018-01-01T00:00:00.000+00:00] } per year
    e = '{ [2016-01-01T00:00:00.000+00:00, 2016-12-31T23:59:59.999+00:00], [2017-01-01T00:00:00.000+00:00, 2017-12-31T23:59:59.999+00:00] }'
    prettyList(@msPrecPerYear.exec(@ctx)).should.equal e

    # define MsPrecPerMonth: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-03-01T01:00:00.000+00:00] } per month
    e = "{ [2018-01-01T00:00:00.000+00:00, 2018-01-31T23:59:59.999+00:00], [2018-02-01T00:00:00.000+00:00, 2018-02-28T23:59:59.999+00:00] }"
    prettyList(@msPrecPerMonth.exec(@ctx)).should.equal e

    # define MsPrecPerWeek: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-21T01:00:00.000+00:00] } per week
    e = "{ [2018-01-01T00:00:00.000+00:00, 2018-01-07T23:59:59.999+00:00], [2018-01-08T00:00:00.000+00:00, 2018-01-14T23:59:59.999+00:00] }"
    prettyList(@msPrecPerWeek.exec(@ctx)).should.equal e
    
    # define MsPrecPerDay: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-03T01:00:00.000+00:00] } per day
    e = "{ [2018-01-01T00:00:00.000+00:00, 2018-01-01T23:59:59.999+00:00], [2018-01-02T00:00:00.000+00:00, 2018-01-02T23:59:59.999+00:00] }"
    prettyList(@msPrecPerDay.exec(@ctx)).should.equal e
    
    # define MsPrecPerHour: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T03:00:00.000+00:00] } per hour
    e = "{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:59:59.999+00:00], [2018-01-01T02:00:00.000+00:00, 2018-01-01T02:59:59.999+00:00] }"
    prettyList(@msPrecPerHour.exec(@ctx)).should.equal e
    
    # define MsPrecPerMinute: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:02:00.000+00:00] } per minute
    e = "{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:59.999+00:00], [2018-01-01T01:01:00.000+00:00, 2018-01-01T01:01:59.999+00:00] }"
    prettyList(@msPrecPerMinute.exec(@ctx)).should.equal e
    
    # define MsPrecPerSecond: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:02.000+00:00] } per second
    e = "{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.999+00:00], [2018-01-01T01:00:01.000+00:00, 2018-01-01T01:00:01.999+00:00] }"
    prettyList(@msPrecPerSecond.exec(@ctx)).should.equal e
    
    # define MsPrecPerMillisecond: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:00.001+00:00] } per millisecond
    e = "{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.000+00:00], [2018-01-01T01:00:00.001+00:00, 2018-01-01T01:00:00.001+00:00] }"
    prettyList(@msPrecPerMillisecond.exec(@ctx)).should.equal e

  it 'expands a second precision datetime', ->
    # define SecPrecPerYear: expand { Interval[@2016-01-01T01:00:00+00:00, @2018-01-01T01:00:00+00:00] } per year
    e = "{ [2016-01-01T00:00:00+00:00, 2016-12-31T23:59:59+00:00], [2017-01-01T00:00:00+00:00, 2017-12-31T23:59:59+00:00] }"
    prettyList(@secPrecPerYear.exec(@ctx)).should.equal e

    # define SecPrecPerMonth: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-03-01T01:00:00+00:00] } per month
    e = "{ [2018-01-01T00:00:00+00:00, 2018-01-31T23:59:59+00:00], [2018-02-01T00:00:00+00:00, 2018-02-28T23:59:59+00:00] }"
    prettyList(@secPrecPerMonth.exec(@ctx)).should.equal e

    # define SecPrecPerWeek: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-21T01:00:00+00:00] } per week
    e = "{ [2018-01-01T00:00:00+00:00, 2018-01-07T23:59:59+00:00], [2018-01-08T00:00:00+00:00, 2018-01-14T23:59:59+00:00] }"
    prettyList(@secPrecPerWeek.exec(@ctx)).should.equal e
    
    # define SecPrecPerDay: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-03T01:00:00+00:00] } per day
    e = "{ [2018-01-01T00:00:00+00:00, 2018-01-01T23:59:59+00:00], [2018-01-02T00:00:00+00:00, 2018-01-02T23:59:59+00:00] }"
    prettyList(@secPrecPerDay.exec(@ctx)).should.equal e
    
    # define SecPrecPerHour: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T03:00:00+00:00] } per hour
    e = "{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:59:59+00:00], [2018-01-01T02:00:00+00:00, 2018-01-01T02:59:59+00:00] }"
    prettyList(@secPrecPerHour.exec(@ctx)).should.equal e
    
    # define SecPrecPerMinute: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:02:00+00:00] } per minute
    e = "{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:59+00:00], [2018-01-01T01:01:00+00:00, 2018-01-01T01:01:59+00:00] }"
    prettyList(@secPrecPerMinute.exec(@ctx)).should.equal e
    
    # define SecPrecPerSecond: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:00:01+00:00] } per second
    e = "{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00] }"
    prettyList(@secPrecPerSecond.exec(@ctx)).should.equal e

    should.not.exist @secPrecPerMillisecond.exec(@ctx)
  
  it 'expands a minute precision datetime', ->
    # define MinPrecPerYear: expand { Interval[@2016-01-01T01:00+00:00, @2018-01-01T01:00+00:00] } per year
    e = "{ [2016-01-01T00:00+00:00, 2016-12-31T23:59+00:00], [2017-01-01T00:00+00:00, 2017-12-31T23:59+00:00] }"
    prettyList(@minPrecPerYear.exec(@ctx)).should.equal e

    # define MinPrecPerMonth: expand { Interval[@2018-01-01T01:00+00:00, @2018-03-01T01:00+00:00] } per month
    e = "{ [2018-01-01T00:00+00:00, 2018-01-31T23:59+00:00], [2018-02-01T00:00+00:00, 2018-02-28T23:59+00:00] }"
    prettyList(@minPrecPerMonth.exec(@ctx)).should.equal e

    # define MinPrecPerWeek: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-21T01:00+00:00] } per week
    e = "{ [2018-01-01T00:00+00:00, 2018-01-07T23:59+00:00], [2018-01-08T00:00+00:00, 2018-01-14T23:59+00:00] }"
    prettyList(@minPrecPerWeek.exec(@ctx)).should.equal e
    
    # define MinPrecPerDay: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-03T01:00+00:00] } per day
    e = "{ [2018-01-01T00:00+00:00, 2018-01-01T23:59+00:00], [2018-01-02T00:00+00:00, 2018-01-02T23:59+00:00] }"
    prettyList(@minPrecPerDay.exec(@ctx)).should.equal e
    
    # define MinPrecPerHour: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T03:00+00:00] } per hour
    e = "{ [2018-01-01T01:00+00:00, 2018-01-01T01:59+00:00], [2018-01-01T02:00+00:00, 2018-01-01T02:59+00:00] }"
    prettyList(@minPrecPerHour.exec(@ctx)).should.equal e
    
    # define MinPrecPerMinute: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T01:01+00:00] } per minute
    e = "{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00] }"
    prettyList(@minPrecPerMinute.exec(@ctx)).should.equal e
    
    should.not.exist @minPrecPerSecond.exec(@ctx)
    should.not.exist @minPrecPerMillisecond.exec(@ctx)
  
  it 'expands an hour precision datetime', ->
    # define HourPrecPerYear: expand { Interval[@2016-01-01T01+00:00, @2018-01-01T01+00:00] } per year
    e = "{ [2016-01-01T00+00:00, 2016-12-31T23+00:00], [2017-01-01T00+00:00, 2017-12-31T23+00:00] }"
    prettyList(@hourPrecPerYear.exec(@ctx)).should.equal e

    # define HourPrecPerMonth: expand { Interval[@2018-01-01T01+00:00, @2018-03-01T01+00:00] } per month
    e = "{ [2018-01-01T00+00:00, 2018-01-31T23+00:00], [2018-02-01T00+00:00, 2018-02-28T23+00:00] }"
    prettyList(@hourPrecPerMonth.exec(@ctx)).should.equal e

    # define HourPrecPerWeek: expand { Interval[@2018-01-01T01+00:00, @2018-01-21T01+00:00] } per week
    e = "{ [2018-01-01T00+00:00, 2018-01-07T23+00:00], [2018-01-08T00+00:00, 2018-01-14T23+00:00] }"
    prettyList(@hourPrecPerWeek.exec(@ctx)).should.equal e
    
    # define HourPrecPerDay: expand { Interval[@2018-01-01T01+00:00, @2018-01-03T01+00:00] } per day
    e = "{ [2018-01-01T00+00:00, 2018-01-01T23+00:00], [2018-01-02T00+00:00, 2018-01-02T23+00:00] }"
    prettyList(@hourPrecPerDay.exec(@ctx)).should.equal e
    
    # define HourPrecPerHour: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T02+00:00] } per hour
    e = "{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00] }"
    prettyList(@hourPrecPerHour.exec(@ctx)).should.equal e
    
    should.not.exist @hourPrecPerMinute.exec(@ctx)
    should.not.exist @hourPrecPerSecond.exec(@ctx)
    should.not.exist @hourPrecPerMillisecond.exec(@ctx)
  
  it 'expands a day precision datetime', ->
    # define DayPrecPerYear: expand { Interval[DateTime(2016,01,01), DateTime(2018,01,01)] } per year
    e = "{ [2016-01-01, 2016-12-31], [2017-01-01, 2017-12-31] }"
    prettyList(@dayPrecPerYear.exec(@ctx)).should.equal e

    # define DayPrecPerMonth: expand { Interval[DateTime(2018,01,01), DateTime(2018,03,01)] } per month
    e = "{ [2018-01-01, 2018-01-31], [2018-02-01, 2018-02-28] }"
    prettyList(@dayPrecPerMonth.exec(@ctx)).should.equal e

    # define DayPrecPerWeek: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,14)] } per week
    e = "{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14] }"
    prettyList(@dayPrecPerWeek.exec(@ctx)).should.equal e
    
    # define DayPrecPerDay: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,02)] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02] }'
    prettyList(@dayPrecPerDay.exec(@ctx)).should.equal e
    
    should.not.exist @dayPrecPerHour.exec(@ctx)
    should.not.exist @dayPrecPerMinute.exec(@ctx)
    should.not.exist @dayPrecPerSecond.exec(@ctx)
    should.not.exist @dayPrecPerMillisecond.exec(@ctx)
  
  it 'expands a month precision datetime', ->
    # define MonthPrecPerYear: expand { Interval[DateTime(2016,01), DateTime(2018,01)] } per year
    e = '{ [2016-01, 2016-12], [2017-01, 2017-12] }'
    prettyList(@monthPrecPerYear.exec(@ctx)).should.equal e

    # define MonthPrecPerMonth: expand { Interval[DateTime(2018,01), DateTime(2018,02)] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02] }'
    prettyList(@monthPrecPerMonth.exec(@ctx)).should.equal e

    should.not.exist @monthPrecPerWeek.exec(@ctx)
    should.not.exist @monthPrecPerDay.exec(@ctx)
    should.not.exist @monthPrecPerHour.exec(@ctx)
    should.not.exist @monthPrecPerMinute.exec(@ctx)
    should.not.exist @monthPrecPerSecond.exec(@ctx)
    should.not.exist @monthPrecPerMillisecond.exec(@ctx)
  
  it 'expands a year precision datetime', ->
    # define YearPrecPerYear: expand { Interval[DateTime(2016), DateTime(2018)] } per year
    e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }'
    prettyList(@yearPrecPerYear.exec(@ctx)).should.equal e

    should.not.exist @yearPrecPerMonth.exec(@ctx)
    should.not.exist @yearPrecPerWeek.exec(@ctx)
    should.not.exist @yearPrecPerDay.exec(@ctx)
    should.not.exist @yearPrecPerHour.exec(@ctx)
    should.not.exist @yearPrecPerMinute.exec(@ctx)
    should.not.exist @yearPrecPerSecond.exec(@ctx)
    should.not.exist @yearPrecPerMillisecond.exec(@ctx)

  it 'ignores null item in list', ->
    # define NullInList: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T01+00:00], null } per hour
    a = @nullInList.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00] }'

  it 'expands two overlapping intervals', ->
    # define Overlapping: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T03+00:00], Interval[@2018-01-01T02+00:00, @2018-01-01T04+00:00] } per hour
    a = @overlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00], [2018-01-01T04+00:00, 2018-01-01T04+00:00] }'

  it 'expands two non overlapping intervals', ->
    # define NonOverlapping: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T02+00:00], Interval[@2018-01-01T05+00:00, @2018-01-01T05+00:00] } per hour
    a = @nonOverlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T05+00:00, 2018-01-01T05+00:00] }'

  it 'expands an interval with default per', ->
    # # define NoPerDefaultMS: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:00.001+00:00] }
    a = @noPerDefaultMS.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.000+00:00], [2018-01-01T01:00:00.001+00:00, 2018-01-01T01:00:00.001+00:00] }'

    # # define NoPerDefaultSec: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:00:01+00:00] }
    a = @noPerDefaultSec.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00] }'

    # # define NoPerDefaultMin: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T01:01+00:00] }
    a = @noPerDefaultMin.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00] }'

    # define NoPerDefaultHour: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T01+00:00] }
    a = @noPerDefaultHour.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00] }'

    # define NoPerDefaultDay: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,01)] }
    a = @noPerDefaultDay.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01, 2018-01-01] }'

    # define NoPerDefaultMonth: expand { Interval[DateTime(2018,01), DateTime(2018,01)]  }
    a = @noPerDefaultMonth.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01, 2018-01] }'
    
    # define NoPerDefaultYear: expand { Interval[DateTime(2018), DateTime(2018)]  }
    a = @noPerDefaultYear.exec(@ctx)
    prettyList(a).should.equal '{ [2018, 2018] }'

  it 'expands interval with open ends', ->
    # define OpenStart: expand { Interval(@2018-01-01T01+00:00, @2018-01-03T01+00:00] } per day
    a = @openStart.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T02+00:00, 2018-01-02T01+00:00], [2018-01-02T02+00:00, 2018-01-03T01+00:00] }'

    # define OpenEnd: expand { Interval[@2018-01-01T01+00:00, @2018-01-03T01+00:00) } per day
    a = @openEnd.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T01+00:00, 2018-01-02T00+00:00], [2018-01-02T01+00:00, 2018-01-03T00+00:00] }'

    # define OpenBoth: expand { Interval(@2018-01-01T01+00:00, @2018-01-03T01+00:00) } per day
    a = @openBoth.exec(@ctx)
    prettyList(a).should.equal '{ [2018-01-01T02+00:00, 2018-01-02T01+00:00] }'

  it 'handles ends with mismatched precision', ->
    # define MismatchPrecision: expand { Interval[@2012-01-01T12:00+00:00, @2012-01-02T12:00:00+00:00] } per day
    e = "{ [2012-01-01T12:00+00:00, 2012-01-02T11:59+00:00] }"
    prettyList(@mismatchPrecision.exec(@ctx)).should.equal e

    # define MismatchPrecisionEmpty: expand { Interval[@2012-01-01T13:00:00+00:00, @2012-01-02T12:59+00:00] } per day
    @mismatchPrecisionEmpty.exec(@ctx).length.should.equal 0

  it 'returns an empty list if we get an empty list', ->
    # define EmptyList: List<Interval<Date>>{}
    a = @emptyList.exec(@ctx)
    a.length.should.equal 0

  it 'returns null with open ended intervals', ->
    # define NullOpen: expand { Interval[null, @2018-01-03T01+00:00] } per day
    a = @nullOpen.exec(@ctx)
    should.not.exist(a)

    # define NullClose: expand { Interval[@2018-01-01T01+00:00, null] } per day
    a = @nullClose.exec(@ctx)
    should.not.exist(a)

    # define NullBoth: expand { Interval[null, null] } per day
    a = @nullBoth.exec(@ctx)
    should.not.exist(a)

  it 'returns null when per not applicable', ->
    # define BadPerGram: expand { Interval[@2018-01-01T01+00:00, @2018-01-04T01+00:00] } per 1 'g'
    a = @badPerGram.exec(@ctx)
    should.not.exist(a)

describe 'TimeIntervalExpand', ->
  @beforeEach ->
    setup @, data

  xit 'expands a millisecond precision datetime', ->
    # define MsPrecPerHour: expand { Interval[@T01:00:00.000+00:00, @T03:00:00.000+00:00] } per hour
    e = "{ [T01:00:00.000+00:00, T01:59:59.999+00:00], [T02:00:00.000+00:00, T02:59:59.999+00:00] }"
    prettyList(@msPrecPerHour.exec(@ctx)).should.equal e
    
    # define MsPrecPerMinute: expand { Interval[@T01:00:00.000+00:00, @T01:02:00.000+00:00] } per minute
    e = "{ [T01:00:00.000+00:00, T01:00:59.999+00:00], [T01:01:00.000+00:00, T01:01:59.999+00:00] }"
    prettyList(@msPrecPerMinute.exec(@ctx)).should.equal e
    
    # define MsPrecPerSecond: expand { Interval[@T01:00:00.000+00:00, @T01:00:02.000+00:00] } per second
    e = '{ [T01:00:00.000+00:00, T01:00:00.999+00:00], [T01:00:01.000+00:00, T01:00:01.999+00:00] }'
    prettyList(@msPrecPerSecond.exec(@ctx)).should.equal e
    
    # define MsPrecPerMillisecond: expand { Interval[@T01:00:00.000+00:00, @T01:00:00.001+00:00] } per millisecond
    e = '{ [T01:00:00.000+00:00, T01:00:00.000+00:00], [T01:00:00.001+00:00, T01:00:00.001+00:00] }'
    prettyList(@msPrecPerMillisecond.exec(@ctx)).should.equal e

  xit 'expands a second precision datetime', ->
    # define SecPrecPerHour: expand { Interval[@T01:00:00+00:00, @T03:00:00+00:00] } per hour
    e = '{ [T01:00:00+00:00, T01:59:59+00:00], [T02:00:00+00:00, T02:59:59+00:00] }'
    prettyList(@secPrecPerHour.exec(@ctx)).should.equal e
    
    # define SecPrecPerMinute: expand { Interval[@T01:00:00+00:00, @T01:02:00+00:00] } per minute
    e = '{ [T01:00:00+00:00, T01:00:59+00:00], [T01:01:00+00:00, T01:01:59+00:00] }'
    prettyList(@secPrecPerMinute.exec(@ctx)).should.equal e
    
    # define SecPrecPerSecond: expand { Interval[@T01:00:00+00:00, @T01:00:01+00:00] } per second
    e = '{ [T01:00:00+00:00, T01:00:00+00:00], [T01:00:01+00:00, T01:00:01+00:00] }'
    prettyList(@secPrecPerSecond.exec(@ctx)).should.equal e

    should.not.exist @secPrecPerMillisecond.exec(@ctx)
  
  xit 'expands a minute precision datetime', ->
    # define MinPrecPerHour: expand { Interval[@T01:00+00:00, @T03:00+00:00] } per hour
    e = '{ [T01:00+00:00, T01:59+00:00], [T02:00+00:00, T02:59+00:00] }'
    prettyList(@minPrecPerHour.exec(@ctx)).should.equal e
    
    # define MinPrecPerMinute: expand { Interval[@T01:00+00:00, @T01:01+00:00] } per minute
    e = '{ [T01:00+00:00, T01:00+00:00], [T01:01+00:00, T01:01+00:00] }'
    prettyList(@minPrecPerMinute.exec(@ctx)).should.equal e
    
    should.not.exist @minPrecPerSecond.exec(@ctx)
    should.not.exist @minPrecPerMillisecond.exec(@ctx)
  
  xit 'expands an hour precision datetime', ->
    # define HourPrecPerHour: expand { Interval[@T01+00:00, @T02+00:00] } per hour
    e = '{ [T01+00:00, T01+00:00], [T02+00:00, T02+00:00] }'
    prettyList(@hourPrecPerHour.exec(@ctx)).should.equal e
    
    should.not.exist @hourPrecPerMinute.exec(@ctx)
    should.not.exist @hourPrecPerSecond.exec(@ctx)
    should.not.exist @hourPrecPerMillisecond.exec(@ctx)

describe 'QuantityIntervalExpand', ->
  @beforeEach ->
    setup @, data

  it 'expands single intervals', ->
    # define ClosedSingleGPerG: expand { Interval[2 'g', 4 'g'] } per 1 'g'
    a = @closedSingleGPerG.exec(@ctx)
    prettyList(a).should.equal "{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }"
    
    # define ClosedSingleGPerGDecimal: expand { Interval[2.1 'g', 4.1 'g'] } per 1 'g'
    a = @closedSingleGPerGDecimal.exec(@ctx)
    prettyList(a).should.equal '{ [2.1 'g', 3.09999999 'g'], [3.1 'g', 4.09999999 'g'] }'
    
    # define ClosedSingleGPerMG: expand { Interval[2 'g', 2.003 'g'] } per 1 'mg'
    a = @closedSingleGPerMG.exec(@ctx)
    prettyList(a).should.equal '{ [2000 'mg', 2000 'mg'], [2001 'mg', 2001 'mg'], [2002 'mg', 2002 'mg'], [2003 'mg', 2003 'mg'] }'
    
    # define ClosedSingleMGPerGTrunc: expand { Interval[2999 'mg', 4200 'mg'] } per 1 'g'
    a = @closedSingleMGPerGTrunc.exec(@ctx)
    prettyList(a).should.equal '{ [2999 'mg', 3998 'mg'] }'
    
    # define ClosedSingleMGPerMGTrunc: expand { Interval[2000 'mg', 4500 'mg'] } per 800 'mg'
    a = @closedSingleMGPerMGTrunc.exec(@ctx)
    prettyList(a).should.equal '{ [2000 'mg', 2799 'mg'], [2800 'mg', 3599 'mg'], [3600 'mg', 4399 'mg'] }'
  
    # define ClosedSingleMGPerMGDecimal: expand { Interval[2000.01 'mg', 4500 'mg'] } per 800 'mg'
    a = @closedSingleMGPerMGDecimal.exec(@ctx)
    prettyList(a).should.equal '{ [2000.01 'mg', 2800.00999999 'mg'], [2800.01 'mg', 3600.0099999900003 'mg'], [3600.01 'mg', 4400.00999999 'mg'] }'
  
  it 'expands lists of multiple intervals', ->
    # define NullInList: expand { Interval[2 'g', 4 'g'], null } per 1 'g'
    a = @nullInList.exec(@ctx)
    prettyList(a).should.equal '{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }'

    # define Overlapping: expand { Interval[2 'g', 4 'g'], Interval[3 'g', 5 'g'] } per 1 'g'
    a = @overlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'], [5 'g', 5 'g'] }'

    # define NonOverlapping: expand { Interval[2 'g', 4 'g'], Interval[6 'g', 6 'g'] } per 1 'g'
    a = @nonOverlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'], [6 'g', 6 'g'] }'

  it 'expands interval using the first items units if no per provided', ->
    # define NoPerDefaultM: expand { Interval[2 'm', 400 'cm'] }
    a = @noPerDefaultM.exec(@ctx)
    prettyList(a).should.equal '{ [2 'm', 2 'm'], [3 'm', 3 'm'], [4 'm', 4 'm'] }'

    # define NoPerDefaultG: expand { Interval[2 'g', 4 'g'] }
    a = @noPerDefaultG.exec(@ctx)
    prettyList(a).should.equal '{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }'

  it 'expands interval with open ends', ->
    # define OpenStart: expand { Interval(2 'g', 4 'g'] } per 1 'g'
    a = @openStart.exec(@ctx)
    prettyList(a).should.equal '{ [3 'g', 3 'g'], [4 'g', 4 'g'] }'

    # define OpenEnd: expand { Interval[2 'g', 4 'g') } per 1 'g'
    a = @openEnd.exec(@ctx)
    prettyList(a).should.equal '{ [2 'g', 2 'g'], [3 'g', 3 'g'] }'

    # define OpenBoth: expand { Interval(2 'g', 4 'g') } per 1 'g'
    a = @openBoth.exec(@ctx)
    prettyList(a).should.equal '{ [3 'g', 3 'g'] }'

    # define OpenBothDecimal: expand { Interval(2.1 'g', 4.1 'g') } per 1 'g'
    a = @openBothDecimal.exec(@ctx)
    prettyList(a).should.equal '{ [2.10000001 'g', 3.1 'g'] }'

    # define OpenBothDecimalTrunc: expand { Interval(2.1 'g', 4.101 'g') } per 1 'g'
    a = @openBothDecimalTrunc.exec(@ctx)
    prettyList(a).should.equal '{ [2.10000001 'g', 3.1 'g'], [3.10000001 'g', 4.1 'g'] }'

  it 'returns an empty list if we get an empty list or if there are no results', ->
    # define EmptyList: List<Interval<Date>>{}
    a = @emptyList.exec(@ctx)
    a.length.should.equal 0

    # define PerTooBig: expand { Interval[2 'g', 4 'g'], null } per 5 'g'
    a = @perTooBig.exec(@ctx)
    a.length.should.equal 0

  it 'returns null with open ended intervals', ->
    # define NullClose: expand { Interval[2 'g', null] } per 1 'g'
    a = @nullClose.exec(@ctx)
    should.not.exist(a)
    # define NullOpen: expand { Interval[null, 4 'g'] } per 1 'g'
    a = @nullOpen.exec(@ctx)
    should.not.exist(a)
    # define NullBoth: expand { Interval[null, null] } per 1 'g'
    a = @nullBoth.exec(@ctx)
    should.not.exist(a)

  it 'returns null when per not applicable or mismatch interval', ->
    # define BadPerMinute: expand { Interval(2 'g', 4 'g'] } per 1 minute
    a = @badPerMinute.exec(@ctx)
    should.not.exist(a)

    # define BadPerGram: expand { Interval(2 'km', 4 'km'] }  per 1 'g'
    a = @badPerGram.exec(@ctx)
    should.not.exist(a)

describe 'IntegerIntervalExpand', ->
  @beforeEach ->
    setup @, data

  it 'expands single intervals', ->
    # define ClosedSinglePer1: expand { Interval[2, 4] } per 1 '1'
    a = @closedSinglePer1.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2], [3, 3], [4, 4] }'
    
    # define ClosedSinglePer3: expand { Interval[2, 10] } per 3 '1'
    a = @closedSinglePer3.exec(@ctx)
    prettyList(a).should.equal '{ [2, 4], [5, 7], [8, 10] }'
    
    # define ClosedSinglePer3NoteTheWidth: expand { Interval[2, 4] } per 3 '1'
    a = @closedSinglePer3NoteTheWidth.exec(@ctx)
    prettyList(a).should.equal '{ [2, 4] }'
    
  it 'expands lists of multiple intervals', ->
    # define NullInList: expand { Interval[2, 4], null } per 1 '1'
    a = @nullInList.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2], [3, 3], [4, 4] }'

    # define Overlapping: expand { Interval[2, 4], Interval[3, 5] } per 1 '1'
    a = @overlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2], [3, 3], [4, 4], [5, 5] }'

    # define NonOverlapping: expand { Interval[2, 4], Interval[6, 6] } per 1 '1'
    a = @nonOverlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2], [3, 3], [4, 4], [6, 6] }'

  it 'expands interval using default per of 1', ->
    # define NoPer: expand { Interval[2, 4] }
    a = @noPer.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2], [3, 3], [4, 4] }'

  it 'expands interval with open ends', ->
    # define OpenStart: expand { Interval(2, 4] } per 1 '1'
    a = @openStart.exec(@ctx)
    prettyList(a).should.equal '{ [3, 3], [4, 4] }'

    # define OpenEnd: expand { Interval[2, 4) } per 1 '1'
    a = @openEnd.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2], [3, 3] }'

    # define OpenBoth: expand { Interval(2, 4) } per 1 '1'
    a = @openBoth.exec(@ctx)
    prettyList(a).should.equal '{ [3, 3] }'

  it 'returns an empty list if we get an empty list or if there are no results', ->
    # define EmptyList: List<Interval<Integer>>{}
    a = @emptyList.exec(@ctx)
    a.length.should.equal 0

    # define PerTooBig: expand { Interval[2, 4], null } per 5 '1'
    a = @perTooBig.exec(@ctx)
    a.length.should.equal 0

  it 'returns null with open ended intervals', ->
    # define NullClose: expand { Interval[2, null] } per 1 '1'
    a = @nullClose.exec(@ctx)
    should.not.exist(a)
    # define NullOpen: expand { Interval[null, 4] } per 1 '1'
    a = @nullOpen.exec(@ctx)
    should.not.exist(a)
    # define NullBoth: expand { Interval[null, null] } per 1 '1'
    a = @nullBoth.exec(@ctx)
    should.not.exist(a)

  it 'returns null when per not applicable or mismatch interval', ->
    # define BadPerMinute: expand { Interval(2, 4] } per 1 minute
    a = @badPerMinute.exec(@ctx)
    should.not.exist(a)

describe 'DecimalIntervalExpand', ->
  @beforeEach ->
    setup @, data

  it 'expands single intervals', ->
    # define ClosedSingle: expand { Interval[2, 5] } per 1.5 '1'
    a = @closedSingle.exec(@ctx)
    prettyList(a).should.equal '{ [2, 3.49999999], [3.5, 4.99999999] }'
    
    # define ClosedSingle1: expand { Interval[2.5, 10] } per 2 '1'
    a = @closedSingle1.exec(@ctx)
    prettyList(a).should.equal '{ [2.5, 4.49999999], [4.5, 6.49999999], [6.5, 8.49999999] }'
    
    # define ClosedSingle2: expand { Interval[2, 4.5] } per 0.5 '1'
    a = @closedSingle2.exec(@ctx)
    prettyList(a).should.equal '{ [2, 2.49999999], [2.5, 2.99999999], [3, 3.49999999], [3.5, 3.99999999], [4, 4.49999999] }'
    
  it 'expands lists of multiple intervals', ->
    # define NullInList: expand { Interval[2, 5], null } per 1.5 '1'
    a = @nullInList.exec(@ctx)
    prettyList(a).should.equal '{ [2, 3.49999999], [3.5, 4.99999999] }'

    # define Overlapping: expand { Interval[2, 5], Interval[4, 7] } per 1.5 '1'
    a = @overlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2, 3.49999999], [3.5, 4.99999999], [5, 6.49999999] }'

    # define NonOverlapping: expand { Interval[2, 4], Interval[6, 8] } per 1.5 '1'
    a = @nonOverlapping.exec(@ctx)
    prettyList(a).should.equal '{ [2, 3.49999999], [6, 7.49999999] }'

  it 'expands interval using default per of 1', ->
    # define NoPer: expand { Interval[2.5, 4.5] }
    a = @noPer.exec(@ctx)
    prettyList(a).should.equal '{ [2.5, 3.49999999], [3.5, 4.49999999] }'

  it 'expands interval with open ends', ->
    # define OpenStart: expand { Interval(2, 5] } per 1.5 '1'
    a = @openStart.exec(@ctx)
    prettyList(a).should.equal '{ [2.00000001, 3.5], [3.50000001, 5] }'

    # define OpenEnd: expand { Interval[2, 5) } per 1.5 '1'
    a = @openEnd.exec(@ctx)
    prettyList(a).should.equal '{ [2, 3.49999999], [3.5, 4.99999999] }'

    # define OpenBoth: expand { Interval(2, 5) } per 1.5 '1'
    a = @openBoth.exec(@ctx)
    prettyList(a).should.equal '{ [2.00000001, 3.5] }'

  it 'returns an empty list if we get an empty list or if there are no results', ->
    # define EmptyList: List<Interval<Decimal>>{}
    a = @emptyList.exec(@ctx)
    a.length.should.equal 0

    # define PerTooBig: expand { Interval[2, 4], null } per 5.5 '1'
    a = @perTooBig.exec(@ctx)
    a.length.should.equal 0

  it 'returns null with open ended intervals', ->
    # define NullClose: expand { Interval[2, null] } per 1.5 '1'
    a = @nullClose.exec(@ctx)
    should.not.exist(a)
    # define NullOpen: expand { Interval[null, 4] } per 1.5 '1'
    a = @nullOpen.exec(@ctx)
    should.not.exist(a)
    # define NullBoth: expand { Interval[null, null] } per 1.5 '1'
    a = @nullBoth.exec(@ctx)
    should.not.exist(a)

  it 'returns null when per not applicable or mismatch interval', ->
    # define BadPerMinute: expand { Interval(2.1, 4.1] } per 0.5 minute
    a = @badPerMinute.exec(@ctx)
    should.not.exist(a)
