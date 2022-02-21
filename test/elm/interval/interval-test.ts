import should from 'should';
import setup from '../../setup';
const data = require('./data');
import { Interval } from '../../../src/datatypes/interval';
import { DateTime } from '../../../src/datatypes/datetime';
import {
  MIN_INT_VALUE,
  MAX_INT_VALUE,
  MIN_FLOAT_VALUE,
  MIN_FLOAT_PRECISION_VALUE,
  MAX_FLOAT_VALUE,
  MIN_DATETIME_VALUE,
  MAX_DATETIME_VALUE
} from '../../../src/util/math';

describe('Interval', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly represent an open interval', function () {
    this.open.lowClosed.should.be.false();
    this.open.highClosed.should.be.false();
    this.open.low.exec(this.ctx).should.eql(new DateTime(2012, 1, 1));
    this.open.high.exec(this.ctx).should.eql(new DateTime(2013, 1, 1));
  });

  it('should properly represent a left-open interval', function () {
    this.leftOpen.lowClosed.should.be.false();
    this.leftOpen.highClosed.should.be.true();
    this.leftOpen.low.exec(this.ctx).should.eql(new DateTime(2012, 1, 1));
    this.leftOpen.high.exec(this.ctx).should.eql(new DateTime(2013, 1, 1));
  });

  it('should properly represent a right-open interval', function () {
    this.rightOpen.lowClosed.should.be.true();
    this.rightOpen.highClosed.should.be.false();
    this.rightOpen.low.exec(this.ctx).should.eql(new DateTime(2012, 1, 1));
    this.rightOpen.high.exec(this.ctx).should.eql(new DateTime(2013, 1, 1));
  });

  it('should properly represent a closed interval', function () {
    this.closed.lowClosed.should.be.true();
    this.closed.highClosed.should.be.true();
    this.closed.low.exec(this.ctx).should.eql(new DateTime(2012, 1, 1));
    this.closed.high.exec(this.ctx).should.eql(new DateTime(2013, 1, 1));
  });

  it('should exec to native Interval datatype', function () {
    const ivl = this.open.exec(this.ctx);
    ivl.should.be.instanceOf(Interval);
    ivl.lowClosed.should.equal(this.open.lowClosed);
    ivl.highClosed.should.equal(this.open.highClosed);
    ivl.low.should.eql(new DateTime(2012, 1, 1));
    ivl.high.should.eql(new DateTime(2013, 1, 1));
  });
});

describe('Equal', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should determine equal integer intervals', function () {
    this.equalClosed.exec(this.ctx).should.be.true();
    this.equalOpen.exec(this.ctx).should.be.true();
    this.equalOpenClosed.exec(this.ctx).should.be.true();
  });

  it('should determine unequal integer intervals', function () {
    this.unequalClosed.exec(this.ctx).should.be.false();
    this.unequalOpen.exec(this.ctx).should.be.false();
    this.unequalClosedOpen.exec(this.ctx).should.be.false();
  });

  it('should determine equal quantity intervals', function () {
    this.equalQuantityClosed.exec(this.ctx).should.be.true();
    this.equalQuantityOpen.exec(this.ctx).should.be.true();
    this.equalQuantityOpenClosed.exec(this.ctx).should.be.true();
  });

  it('should determine unequal quantity intervals', function () {
    this.unequalQuantityClosed.exec(this.ctx).should.be.false();
    this.unequalQuantityOpen.exec(this.ctx).should.be.false();
    this.unequalQuantityClosedOpen.exec(this.ctx).should.be.false();
  });

  it('should determine equal datetime intervals', function () {
    this.equalDates.exec(this.ctx).should.be.true();
    this.equalDatesOpenClosed.exec(this.ctx).should.be.true();
  });

  it('should operate correctly with imprecision', function () {
    this.sameDays.exec(this.ctx).should.be.true();
    this.differentDays.exec(this.ctx).should.be.false();
    should(this.differingPrecision.exec(this.ctx)).be.null();
  });
});

describe('NotEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should determine equal integer intervals', function () {
    this.equalClosed.exec(this.ctx).should.be.false();
    this.equalOpen.exec(this.ctx).should.be.false();
    this.equalOpenClosed.exec(this.ctx).should.be.false();
  });

  it('should determine unequal integer intervals', function () {
    this.unequalClosed.exec(this.ctx).should.be.true();
    this.unequalOpen.exec(this.ctx).should.be.true();
    this.unequalClosedOpen.exec(this.ctx).should.be.true();
  });

  it('should determine equal quantity intervals', function () {
    this.equalQuantityClosed.exec(this.ctx).should.be.false();
    this.equalQuantityOpen.exec(this.ctx).should.be.false();
    this.equalQuantityOpenClosed.exec(this.ctx).should.be.false();
  });

  it('should determine unequal quantity intervals', function () {
    this.unequalQuantityClosed.exec(this.ctx).should.be.true();
    this.unequalQuantityOpen.exec(this.ctx).should.be.true();
    this.unequalQuantityClosedOpen.exec(this.ctx).should.be.true();
  });

  it('should determine equal datetime intervals', function () {
    this.equalDates.exec(this.ctx).should.be.false();
    this.equalDatesOpenClosed.exec(this.ctx).should.be.false();
  });

  it('should operate correctly with imprecision', function () {
    this.sameDays.exec(this.ctx).should.be.false();
    this.differentDays.exec(this.ctx).should.be.true();
    should(this.differingPrecision.exec(this.ctx)).be.null();
  });
});

describe('Contains', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept contained items', function () {
    this.containsInt.exec(this.ctx).should.be.true();
    this.containsReal.exec(this.ctx).should.be.true();
    this.containsQuantity.exec(this.ctx).should.be.true();
    this.containsQuantityInclusiveEdge.exec(this.ctx).should.be.true();
    this.containsDate.exec(this.ctx).should.be.true();
  });

  it('should reject uncontained items', function () {
    this.notContainsInt.exec(this.ctx).should.be.false();
    this.notContainsReal.exec(this.ctx).should.be.false();
    this.notContainsQuantity.exec(this.ctx).should.be.false();
    this.notContainsQuantityExclusiveEdge.exec(this.ctx).should.be.false();
    this.notContainsDate.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegContainsInt.exec(this.ctx).should.be.true();
    this.negInfBegNotContainsInt.exec(this.ctx).should.be.false();
    this.unknownOpenBegContainsInt.exec(this.ctx).should.be.true();
    this.unknownClosedBegContainsInt.exec(this.ctx).should.be.true();
    should(this.unknownBegMayContainInt.exec(this.ctx)).be.null();
    this.unknownBegNotContainsInt.exec(this.ctx).should.be.false();
    this.posInfEndContainsInt.exec(this.ctx).should.be.true();
    this.posInfEndNotContainsInt.exec(this.ctx).should.be.false();
    this.unknownOpenEndContainsInt.exec(this.ctx).should.be.true();
    this.unknownClosedEndContainsInt.exec(this.ctx).should.be.true();
    should(this.unknownEndMayContainInt.exec(this.ctx)).be.null();
    this.unknownEndNotContainsInt.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegContainsDate.exec(this.ctx).should.be.true();
    this.negInfBegNotContainsDate.exec(this.ctx).should.be.false();
    should(this.unknownOpenBegMayContainDate.exec(this.ctx)).be.null();
    this.unknownClosedBegContainsDate.exec(this.ctx).should.be.true();
    should(this.unknownBegMayContainDate.exec(this.ctx)).be.null();
    this.unknownBegNotContainsDate.exec(this.ctx).should.be.false();
    this.posInfEndContainsDate.exec(this.ctx).should.be.true();
    this.posInfEndNotContainsDate.exec(this.ctx).should.be.false();
    this.unknownOpenEndContainsDate.exec(this.ctx).should.be.true();
    this.unknownClosedEndContainsDate.exec(this.ctx).should.be.true();
    should(this.unknownEndMayContainDate.exec(this.ctx)).be.null();
    this.unknownEndNotContainsDate.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.containsImpreciseDate.exec(this.ctx).should.be.true();
    this.notContainsImpreciseDate.exec(this.ctx).should.be.false();
    should(this.mayContainImpreciseDate.exec(this.ctx)).be.null();
    this.impreciseContainsDate.exec(this.ctx).should.be.true();
    this.impreciseNotContainsDate.exec(this.ctx).should.be.false();
    should(this.impreciseMayContainDate.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.containsDayOfDateLowEdge.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateHighEdgeOpen.exec(this.ctx).should.be.false();
    this.containsDayOfDateHighEdgeClosed.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateLowEdge.exec(this.ctx).should.be.false();
    this.notContainsDayOfDateBeyondHighEdge.exec(this.ctx).should.be.false();
    this.containsDayOfDateImpreciseLowEdge.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateImpreciseHighEdgeOpen.exec(this.ctx).should.be.false();
    this.containsDayOfDateImpreciseHighEdgeClosed.exec(this.ctx).should.be.true();
    this.containsDayOfDateVeryImpreciseMiddle.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateVeryImpreciseLow.exec(this.ctx).should.be.false();
    this.notContainsDayOfDateVeryImpreciseHighEdgeOpen.exec(this.ctx).should.be.false();
    should(this.mayContainDayOfDateVeryImpreciseLow.exec(this.ctx)).be.null();
    should(this.mayContainDayOfDateVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(this.mayContainDayOfDateVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('In', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept contained items', function () {
    this.containsInt.exec(this.ctx).should.be.true();
    this.containsReal.exec(this.ctx).should.be.true();
    this.containsQuantity.exec(this.ctx).should.be.true();
    this.containsQuantityInclusiveEdge.exec(this.ctx).should.be.true();
    this.containsDate.exec(this.ctx).should.be.true();
  });

  it('should reject uncontained items', function () {
    this.notContainsInt.exec(this.ctx).should.be.false();
    this.notContainsReal.exec(this.ctx).should.be.false();
    this.notContainsQuantity.exec(this.ctx).should.be.false();
    this.notContainsQuantityExclusiveEdge.exec(this.ctx).should.be.false();
    this.notContainsDate.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegContainsInt.exec(this.ctx).should.be.true();
    this.negInfBegNotContainsInt.exec(this.ctx).should.be.false();
    this.unknownOpenBegContainsInt.exec(this.ctx).should.be.true();
    this.unknownClosedBegContainsInt.exec(this.ctx).should.be.true();
    should(this.unknownBegMayContainInt.exec(this.ctx)).be.null();
    this.unknownBegNotContainsInt.exec(this.ctx).should.be.false();
    this.posInfEndContainsInt.exec(this.ctx).should.be.true();
    this.posInfEndNotContainsInt.exec(this.ctx).should.be.false();
    this.unknownOpenEndContainsInt.exec(this.ctx).should.be.true();
    this.unknownClosedEndContainsInt.exec(this.ctx).should.be.true();
    should(this.unknownEndMayContainInt.exec(this.ctx)).be.null();
    this.unknownEndNotContainsInt.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegContainsDate.exec(this.ctx).should.be.true();
    this.negInfBegNotContainsDate.exec(this.ctx).should.be.false();
    should(this.unknownOpenBegMayContainDate.exec(this.ctx)).be.null();
    this.unknownClosedBegContainsDate.exec(this.ctx).should.be.true();
    should(this.unknownBegMayContainDate.exec(this.ctx)).be.null();
    this.unknownBegNotContainsDate.exec(this.ctx).should.be.false();
    this.posInfEndContainsDate.exec(this.ctx).should.be.true();
    this.posInfEndNotContainsDate.exec(this.ctx).should.be.false();
    this.unknownOpenEndContainsDate.exec(this.ctx).should.be.true();
    this.unknownClosedEndContainsDate.exec(this.ctx).should.be.true();
    should(this.unknownEndMayContainDate.exec(this.ctx)).be.null();
    this.unknownEndNotContainsDate.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.containsImpreciseDate.exec(this.ctx).should.be.true();
    this.notContainsImpreciseDate.exec(this.ctx).should.be.false();
    should(this.mayContainImpreciseDate.exec(this.ctx)).be.null();
    this.impreciseContainsDate.exec(this.ctx).should.be.true();
    this.impreciseNotContainsDate.exec(this.ctx).should.be.false();
    should(this.impreciseMayContainDate.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.containsDayOfDateLowEdge.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateHighEdgeOpen.exec(this.ctx).should.be.false();
    this.containsDayOfDateHighEdgeClosed.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateLowEdge.exec(this.ctx).should.be.false();
    this.notContainsDayOfDateBeyondHighEdge.exec(this.ctx).should.be.false();
    this.containsDayOfDateImpreciseLowEdge.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateImpreciseHighEdgeOpen.exec(this.ctx).should.be.false();
    this.containsDayOfDateImpreciseHighEdgeClosed.exec(this.ctx).should.be.true();
    this.containsDayOfDateVeryImpreciseMiddle.exec(this.ctx).should.be.true();
    this.notContainsDayOfDateVeryImpreciseLow.exec(this.ctx).should.be.false();
    this.notContainsDayOfDateVeryImpreciseHighEdgeOpen.exec(this.ctx).should.be.false();
    should(this.mayContainDayOfDateVeryImpreciseLow.exec(this.ctx)).be.null();
    should(this.mayContainDayOfDateVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(this.mayContainDayOfDateVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('Includes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept included items', function () {
    this.includesIntIvl.exec(this.ctx).should.be.true();
    this.includesRealIvl.exec(this.ctx).should.be.true();
    this.includesDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject unincluded items', function () {
    this.notIncludesIntIvl.exec(this.ctx).should.be.false();
    this.notIncludesRealIvl.exec(this.ctx).should.be.false();
    this.notIncludesDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegIncludesIntIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotIncludesIntIvl.exec(this.ctx).should.be.false();
    this.unknownBegIncludesIntIvl.exec(this.ctx).should.be.true();
    should(this.unknownBegMayIncludeIntIvl.exec(this.ctx)).be.null();
    this.unknownBegNotIncludesIntIvl.exec(this.ctx).should.be.false();
    this.posInfEndIncludesIntIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotIncludesIntIvl.exec(this.ctx).should.be.false();
    this.unknownEndIncludesIntIvl.exec(this.ctx).should.be.true();
    should(this.unknownEndMayIncludeIntIvl.exec(this.ctx)).be.null();
    this.unknownEndNotIncludesIntIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegIncludesDateIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotIncludesDateIvl.exec(this.ctx).should.be.false();
    this.unknownBegIncludesDateIvl.exec(this.ctx).should.be.true();
    should(this.unknownBegMayIncludeDateIvl.exec(this.ctx)).be.null();
    this.unknownBegNotIncludesDateIvl.exec(this.ctx).should.be.false();
    this.posInfEndIncludesDateIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotIncludesDateIvl.exec(this.ctx).should.be.false();
    this.unknownEndIncludesDateIvl.exec(this.ctx).should.be.true();
    should(this.unknownEndMayIncludeDateIvl.exec(this.ctx)).be.null();
    this.unknownEndNotIncludesDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.includesImpreciseDateIvl.exec(this.ctx).should.be.true();
    this.notIncludesImpreciseDateIvl.exec(this.ctx).should.be.false();
    should(this.mayIncludeImpreciseDateIvl.exec(this.ctx)).be.null();
    this.impreciseIncludesDateIvl.exec(this.ctx).should.be.true();
    this.impreciseNotIncludesDateIvl.exec(this.ctx).should.be.false();
    should(this.impreciseMayIncludeDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.includesDayOfIvlLowEdge.exec(this.ctx).should.be.true();
    this.includesDayOfIvlHighEdge.exec(this.ctx).should.be.true();
    this.notIncludesDayOfIvlLowEdge.exec(this.ctx).should.be.false();
    this.notIncludesDayOfIvlHighEdge.exec(this.ctx).should.be.false();
    this.includesDayOfIvlImpreciseLowEdge.exec(this.ctx).should.be.true();
    this.includesDayOfIvlImpreciseHighEdge.exec(this.ctx).should.be.true();
    this.includesDayOfIvlVeryImpreciseMiddle.exec(this.ctx).should.be.true();
    this.notIncludesDayOfIvlVeryImpreciseLow.exec(this.ctx).should.be.false();
    this.notIncludesDayOfIvlVeryImpreciseHigh.exec(this.ctx).should.be.false();
    should(this.mayIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(this.mayIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(this.mayIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });

  it('should correctly handle point inclusion', function () {
    this.impreciseIncludesDate.exec(this.ctx).should.be.true();
    this.impreciseDoesntIncludeDate.exec(this.ctx).should.be.false();
    this.intervalIncludesQuantity.exec(this.ctx).should.be.true();
    this.intervalDoesntIncludeQuantity.exec(this.ctx).should.be.false();
  });
});

describe('ProperlyIncludes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept properly included intervals', function () {
    this.properlyIncludesIntIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesIntBeginsIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesIntEndsIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesRealIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals not properly included', function () {
    this.notProperlyIncludesIntIvl.exec(this.ctx).should.be.false();
    this.notProperlyIncludesRealIvl.exec(this.ctx).should.be.false();
    this.notProperlyIncludesDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.posInfEndProperlyIncludesIntIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotProperlyIncludesIntIvl.exec(this.ctx).should.be.false();
    should(this.unknownEndMayProperlyIncludeIntIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.properlyIncludesDayOfIvlLowEdge.exec(this.ctx).should.be.true();
    this.properlyIncludesDayOfIvlHighEdge.exec(this.ctx).should.be.true();
    this.properlyIncludesDayOfIvlNearEdges.exec(this.ctx).should.be.true();
    this.notProperlyIncludesDayOfIvlSameEdges.exec(this.ctx).should.be.false();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseLowAndHigh.exec(this.ctx)).be.null();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('IncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept included items', function () {
    this.includesIntIvl.exec(this.ctx).should.be.true();
    this.includesRealIvl.exec(this.ctx).should.be.true();
    this.includesDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject unincluded items', function () {
    this.notIncludesIntIvl.exec(this.ctx).should.be.false();
    this.notIncludesRealIvl.exec(this.ctx).should.be.false();
    this.notIncludesDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegIncludedInIntIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotIncludedInIntIvl.exec(this.ctx).should.be.false();
    this.unknownBegIncludedInIntIvl.exec(this.ctx).should.be.true();
    should(this.unknownBegMayBeIncludedInIntIvl.exec(this.ctx)).be.null();
    this.unknownBegNotIncludedInIntIvl.exec(this.ctx).should.be.false();
    this.posInfEndIncludedInIntIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotIncludedInIntIvl.exec(this.ctx).should.be.false();
    this.unknownEndIncludedInIntIvl.exec(this.ctx).should.be.true();
    should(this.unknownEndMayBeIncludedInIntIvl.exec(this.ctx)).be.null();
    this.unknownEndNotIncludedInIntIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegIncludedInDateIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotIncludedInDateIvl.exec(this.ctx).should.be.false();
    this.unknownBegIncludedInDateIvl.exec(this.ctx).should.be.true();
    should(this.unknownBegMayBeIncludedInDateIvl.exec(this.ctx)).be.null();
    this.unknownBegNotIncludedInDateIvl.exec(this.ctx).should.be.false();
    this.posInfEndIncludedInDateIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotIncludedInDateIvl.exec(this.ctx).should.be.false();
    this.unknownEndIncludedInDateIvl.exec(this.ctx).should.be.true();
    should(this.unknownEndMayBeIncludedInDateIvl.exec(this.ctx)).be.null();
    this.unknownEndNotIncludedInDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.includesImpreciseDateIvl.exec(this.ctx).should.be.true();
    this.notIncludesImpreciseDateIvl.exec(this.ctx).should.be.false();
    should(this.mayIncludeImpreciseDateIvl.exec(this.ctx)).be.null();
    this.impreciseIncludesDateIvl.exec(this.ctx).should.be.true();
    this.impreciseNotIncludesDateIvl.exec(this.ctx).should.be.false();
    should(this.impreciseMayIncludeDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.includesDayOfIvlLowEdge.exec(this.ctx).should.be.true();
    this.includesDayOfIvlHighEdge.exec(this.ctx).should.be.true();
    this.notIncludesDayOfIvlLowEdge.exec(this.ctx).should.be.false();
    this.notIncludesDayOfIvlHighEdge.exec(this.ctx).should.be.false();
    this.includesDayOfIvlImpreciseLowEdge.exec(this.ctx).should.be.true();
    this.includesDayOfIvlImpreciseHighEdge.exec(this.ctx).should.be.true();
    this.includesDayOfIvlVeryImpreciseMiddle.exec(this.ctx).should.be.true();
    this.notIncludesDayOfIvlVeryImpreciseLow.exec(this.ctx).should.be.false();
    this.notIncludesDayOfIvlVeryImpreciseHigh.exec(this.ctx).should.be.false();
    should(this.mayIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(this.mayIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(this.mayIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });

  it('should correctly handle point comparisons', function () {
    this.includesDayInInterval.exec(this.ctx).should.be.true();
    this.doesNotIncludeDayInInterval.exec(this.ctx).should.be.false();
    this.quantityIncludedInterval.exec(this.ctx).should.be.true();
    this.quantityNotIncludedInterval.exec(this.ctx).should.be.false();
  });
});

describe('ProperlyIncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept properly included intervals', function () {
    this.properlyIncludesIntIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesIntBeginsIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesIntEndsIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesRealIvl.exec(this.ctx).should.be.true();
    this.properlyIncludesDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals not properly included', function () {
    this.notProperlyIncludesIntIvl.exec(this.ctx).should.be.false();
    this.notProperlyIncludesRealIvl.exec(this.ctx).should.be.false();
    this.notProperlyIncludesDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.posInfEndProperlyIncludedInDateIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotProperlyIncludedInDateIvl.exec(this.ctx).should.be.false();
    should(this.unknownEndMayBeProperlyIncludedInDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.properlyIncludesDayOfIvlLowEdge.exec(this.ctx).should.be.true();
    this.properlyIncludesDayOfIvlHighEdge.exec(this.ctx).should.be.true();
    this.properlyIncludesDayOfIvlNearEdges.exec(this.ctx).should.be.true();
    this.notProperlyIncludesDayOfIvlSameEdges.exec(this.ctx).should.be.false();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseLowAndHigh.exec(this.ctx)).be.null();
    should(this.mayProperlyIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('After', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals before it', function () {
    this.afterIntIvl.exec(this.ctx).should.be.true();
    this.afterRealIvl.exec(this.ctx).should.be.true();
    this.afterDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals on or after it', function () {
    this.notAfterIntIvl.exec(this.ctx).should.be.false();
    this.notAfterRealIvl.exec(this.ctx).should.be.false();
    this.notAfterDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegNotAfterIntIvl.exec(this.ctx).should.be.false();
    should(this.unknownBegMayBeAfterIntIvl.exec(this.ctx)).be.null();
    this.unknownBegNotAfterIntIvl.exec(this.ctx).should.be.false();
    this.posInfEndAfterIntIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotAfterIntIvl.exec(this.ctx).should.be.false();
    this.unknownEndAfterIntIvl.exec(this.ctx).should.be.true();
    this.unknownEndNotAfterIntIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegNotAfterDateIvl.exec(this.ctx).should.be.false();
    should(this.unknownBegMayBeAfterDateIvl.exec(this.ctx)).be.null();
    this.unknownBegNotAfterDateIvl.exec(this.ctx).should.be.false();
    this.posInfEndAfterDateIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotAfterDateIvl.exec(this.ctx).should.be.false();
    this.unknownEndAfterDateIvl.exec(this.ctx).should.be.true();
    this.unknownEndNotAfterDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.afterImpreciseDateIvl.exec(this.ctx).should.be.true();
    should(this.notAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    should(this.mayBeAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    this.impreciseAfterDateIvl.exec(this.ctx).should.be.true();
    // meets with uncertainty due to toClose
    should(this.impreciseNotAfterDateIvl.exec(this.ctx)).be.null();
    should(this.impreciseMayBeAfterDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.afterDayOfIvl.exec(this.ctx).should.be.true();
    this.beforeDayOfIvl.exec(this.ctx).should.be.false();
    this.startsSameDayOfIvlEnd.exec(this.ctx).should.be.false();
    this.endsSameDayOfIvlStart.exec(this.ctx).should.be.false();
    should(this.mayBeAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    this.mayBeBeforeDayOfImpreciseIvl.exec(this.ctx).should.be.false();
  });
});

describe('Before', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals before it', function () {
    this.beforeIntIvl.exec(this.ctx).should.be.true();
    this.beforeRealIvl.exec(this.ctx).should.be.true();
    this.beforeDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals on or after it', function () {
    this.notBeforeIntIvl.exec(this.ctx).should.be.false();
    this.notBeforeRealIvl.exec(this.ctx).should.be.false();
    this.notBeforeDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegBeforeIntIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotBeforeIntIvl.exec(this.ctx).should.be.false();
    this.unknownBegBeforeIntIvl.exec(this.ctx).should.be.true();
    this.unknownBegNotBeforeIntIvl.exec(this.ctx).should.be.false();
    this.posInfEndNotBeforeIntIvl.exec(this.ctx).should.be.false();
    should(this.unknownEndMayBeBeforeIntIvl.exec(this.ctx)).be.null();
    this.unknownEndNotBeforeIntIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegBeforeDateIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotBeforeDateIvl.exec(this.ctx).should.be.false();
    this.unknownBegBeforeDateIvl.exec(this.ctx).should.be.true();
    this.unknownBegNotBeforeDateIvl.exec(this.ctx).should.be.false();
    this.posInfEndNotBeforeDateIvl.exec(this.ctx).should.be.false();
    should(this.unknownEndMayBeBeforeDateIvl.exec(this.ctx)).be.null();
    this.unknownEndNotBeforeDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.beforeImpreciseDateIvl.exec(this.ctx).should.be.true();
    // meets with uncertaintity due to toClose
    should(this.notBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    should(this.mayBeBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    this.impreciseBeforeDateIvl.exec(this.ctx).should.be.true();
    should(this.impreciseNotBeforeDateIvl.exec(this.ctx)).be.null();
    should(this.impreciseMayBeBeforeDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.afterDayOfIvl.exec(this.ctx).should.be.false();
    this.beforeDayOfIvl.exec(this.ctx).should.be.true();
    this.startsSameDayOfIvlEnd.exec(this.ctx).should.be.false();
    this.endsSameDayOfIvlStart.exec(this.ctx).should.be.false();
    this.mayBeAfterDayOfImpreciseIvl.exec(this.ctx).should.be.false();
    should(this.mayBeBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('BeforeOrOn', () => {
  // NOTE: BeforeOrOn is synonym for SameOrBefore.
  // NOTE: SameOrBefore for numeric intervals is tests in spec tests

  beforeEach(function () {
    setup(this, data);
  });

  it('should handle nominal datetime interval situations', function () {
    this.meetsAfterDateIvl.exec(this.ctx).should.be.false();
    this.meetsBeforeDateIvl.exec(this.ctx).should.be.true();
    this.afterDateIvl.exec(this.ctx).should.be.false();
    this.beforeDateIvl.exec(this.ctx).should.be.true();
  });

  it('should correctly handle imprecision', function () {
    this.mayMeetAfterImpreciseDateIvl.exec(this.ctx).should.be.false();
    should(this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    this.notMeetsImpreciseDateIvl.exec(this.ctx).should.be.false();
    this.impreciseMayMeetAfterDateIvl.exec(this.ctx).should.be.false();
    this.impreciseMayMeetBeforeDateIvl.exec(this.ctx).should.be.true();
    this.impreciseNotMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly compare using the requested precision', function () {
    this.meetsAfterDayOfIvl.exec(this.ctx).should.be.false();
    this.meetsBeforeDayOfIvl.exec(this.ctx).should.be.true();
    this.notMeetsDayOfIvl.exec(this.ctx).should.be.false();
    this.notMeetsDayOfImpreciseIVL.exec(this.ctx).should.be.false();
    this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx).should.be.false();
    should(this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });

  it('should handle intervals with null end', function () {
    this.beforeNullEndIvl.exec(this.ctx).should.be.true();
    this.afterStartNullEndIvl.exec(this.ctx).should.be.false();
    should(this.nullEndStartBeforeIvl.exec(this.ctx)).be.null();
    should(this.nullEndStartAfterIvl.exec(this.ctx)).be.null();
  });

  it('should handle intervals with null start', function () {
    should(this.endsBeforeNullStartIvlEnds.exec(this.ctx)).be.null();
    should(this.afterEndOfNullStartIvl.exec(this.ctx)).be.null();
    this.nullStartStartBeforeIvl.exec(this.ctx).should.be.true();
    this.nullStartStartAfterIvl.exec(this.ctx).should.be.false();
  });

  it('should handle null on either side', function () {
    should(this.dateIvlBeforeNull.exec(this.ctx)).be.null();
    should(this.nullBeforeDateIvl.exec(this.ctx)).be.null();
  });

  it('should handle Date and DateTime on either side', function () {
    this.dateTimeBeforeDateIvl.exec(this.ctx).should.be.true();
    this.dateBeforeDateIvl.exec(this.ctx).should.be.true();
    this.dateIvlBeforeDateTime.exec(this.ctx).should.be.true();
    this.dateIvlBeforeDate.exec(this.ctx).should.be.true();
  });

  it('should handle Interval<Date> and Interval<DateTime> on either side', function () {
    this.dateOnlyIvlBeforeDateIvl.exec(this.ctx).should.be.true();
    this.dateIvlAfterDateOnlyIvl.exec(this.ctx).should.be.false();
    this.dateOnlyMeetsBeforeDateIvl.exec(this.ctx).should.be.true();
  });
});

describe('AfterOrOn', () => {
  // NOTE: AfterOrOn is synonym for SameOrAfter.
  // NOTE: SameOrAfter for numeric intervals is tests in spec tests

  beforeEach(function () {
    setup(this, data);
  });

  it('should handle nominal datetime interval situations', function () {
    this.meetsAfterDateIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeDateIvl.exec(this.ctx).should.be.false();
    this.afterDateIvl.exec(this.ctx).should.be.true();
    this.beforeDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    should(this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx).should.be.false();
    this.notMeetsImpreciseDateIvl.exec(this.ctx).should.be.false();
    this.impreciseMayMeetAfterDateIvl.exec(this.ctx).should.be.true();
    this.impreciseMayMeetBeforeDateIvl.exec(this.ctx).should.be.false();
    this.impreciseNotMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly compare using the requested precision', function () {
    this.meetsAfterDayOfIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeDayOfIvl.exec(this.ctx).should.be.false();
    this.notMeetsDayOfIvl.exec(this.ctx).should.be.true();
    this.notMeetsDayOfImpreciseIVL.exec(this.ctx).should.be.true();
    should(this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx).should.be.false();
  });

  it('should handle intervals with null end', function () {
    should(this.beforeNullEndIvl.exec(this.ctx)).be.null();
    should(this.afterStartNullEndIvl.exec(this.ctx)).be.null();
    this.nullEndStartBeforeIvl.exec(this.ctx).should.be.false();
    this.nullEndStartAfterIvl.exec(this.ctx).should.be.true();
  });

  it('should handle intervals with null start', function () {
    this.endsBeforeNullStartIvlEnds.exec(this.ctx).should.be.false();
    this.afterEndOfNullStartIvl.exec(this.ctx).should.be.true();
    should(this.nullStartStartBeforeIvl.exec(this.ctx)).be.null();
    should(this.nullStartStartAfterIvl.exec(this.ctx)).be.null();
  });

  it('should handle null on either side', function () {
    should(this.dateIvlBeforeNull.exec(this.ctx)).be.null();
    should(this.nullBeforeDateIvl.exec(this.ctx)).be.null();
  });

  it('should handle Date and DateTime on either side', function () {
    this.dateTimeBeforeDateIvl.exec(this.ctx).should.be.false();
    this.dateBeforeDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlBeforeDateTime.exec(this.ctx).should.be.false();
    this.dateIvlBeforeDate.exec(this.ctx).should.be.false();
  });

  it('should handle Interval<Date> and Interval<DateTime> on either side', function () {
    this.dateOnlyIvlBeforeDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlAfterDateOnlyIvl.exec(this.ctx).should.be.true();
    this.dateOnlyMeetsAfterDateIvl.exec(this.ctx).should.be.true();
  });
});

describe('Meets', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals meeting after it', function () {
    this.meetsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeRealIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeDateIvl.exec(this.ctx).should.be.true();
  });

  it('should accept intervals meeting before it', function () {
    this.meetsAfterIntIvl.exec(this.ctx).should.be.true();
    this.meetsAfterRealIvl.exec(this.ctx).should.be.true();
    this.meetsAfterDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals not meeting it', function () {
    this.notMeetsIntIvl.exec(this.ctx).should.be.false();
    this.notMeetsRealIvl.exec(this.ctx).should.be.false();
    this.notMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegMeetsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlNotMeetsNegInfBeg.exec(this.ctx).should.be.false();
    this.unknownBegMeetsBeforeIntIvl.exec(this.ctx).should.be.true();
    should(this.unknownBegMayMeetAfterIntIvl.exec(this.ctx)).be.null();
    this.unknownBegNotMeetsIntIvl.exec(this.ctx).should.be.false();
    should(this.intIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    this.posInfEndMeetsAfterIntIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlNotMeetsPosInfEnd.exec(this.ctx).should.be.false();
    this.unknownEndMeetsAfterIntIvl.exec(this.ctx).should.be.true();
    should(this.unknownEndMayMeetBeforeIntIvl.exec(this.ctx)).be.null();
    this.unknownEndNotMeetsIntIvl.exec(this.ctx).should.be.false();
    should(this.intIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegMeetsBeforeDateIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlNotMeetsNegInfBeg.exec(this.ctx).should.be.false();
    this.unknownBegMeetsBeforeDateIvl.exec(this.ctx).should.be.true();
    should(this.unknownBegMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    this.unknownBegNotMeetsDateIvl.exec(this.ctx).should.be.false();
    should(this.dateIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    this.posInfEndMeetsAfterDateIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlNotMeetsPosInfEnd.exec(this.ctx).should.be.false();
    this.unknownEndMeetsAfterDateIvl.exec(this.ctx).should.be.true();
    should(this.unknownEndMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    this.unknownEndNotMeetsDateIvl.exec(this.ctx).should.be.false();
    should(this.dateIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle imprecision', function () {
    should(this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    should(this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    this.notMeetsImpreciseDateIvl.exec(this.ctx).should.be.false();
    should(this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    should(this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    this.impreciseNotMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly compare using the requested precision', function () {
    this.meetsAfterDayOfIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeDayOfIvl.exec(this.ctx).should.be.true();
    this.notMeetsDayOfIvl.exec(this.ctx).should.be.false();
    this.notMeetsDayOfImpreciseIVL.exec(this.ctx).should.be.false();
    should(this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    should(this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('MeetsAfter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals meeting before it', function () {
    this.meetsAfterIntIvl.exec(this.ctx).should.be.true();
    this.meetsAfterRealIvl.exec(this.ctx).should.be.true();
    this.meetsAfterDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals meeting after it', function () {
    this.meetsBeforeIntIvl.exec(this.ctx).should.be.false();
    this.meetsBeforeRealIvl.exec(this.ctx).should.be.false();
    this.meetsBeforeDateIvl.exec(this.ctx).should.be.false();
  });

  it('should reject intervals not meeting it', function () {
    this.notMeetsIntIvl.exec(this.ctx).should.be.false();
    this.notMeetsRealIvl.exec(this.ctx).should.be.false();
    this.notMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegMeetsBeforeIntIvl.exec(this.ctx).should.be.false();
    this.negInfBegNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlNotMeetsNegInfBeg.exec(this.ctx).should.be.false();
    this.unknownBegMeetsBeforeIntIvl.exec(this.ctx).should.be.false();
    should(this.unknownBegMayMeetAfterIntIvl.exec(this.ctx)).be.null();
    this.unknownBegNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlMayMeetBeforeUnknownBeg.exec(this.ctx).should.be.false();
    this.posInfEndMeetsAfterIntIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlNotMeetsPosInfEnd.exec(this.ctx).should.be.false();
    this.unknownEndMeetsAfterIntIvl.exec(this.ctx).should.be.true();
    this.unknownEndMayMeetBeforeIntIvl.exec(this.ctx).should.be.false();
    this.unknownEndNotMeetsIntIvl.exec(this.ctx).should.be.false();
    should(this.intIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegMeetsBeforeDateIvl.exec(this.ctx).should.be.false();
    this.negInfBegNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlNotMeetsNegInfBeg.exec(this.ctx).should.be.false();
    this.unknownBegMeetsBeforeDateIvl.exec(this.ctx).should.be.false();
    should(this.unknownBegMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    this.unknownBegNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlMayMeetBeforeUnknownBeg.exec(this.ctx).should.be.false();
    this.posInfEndMeetsAfterDateIvl.exec(this.ctx).should.be.true();
    this.posInfEndNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlNotMeetsPosInfEnd.exec(this.ctx).should.be.false();
    this.unknownEndMeetsAfterDateIvl.exec(this.ctx).should.be.true();
    this.unknownEndMayMeetBeforeDateIvl.exec(this.ctx).should.be.false();
    this.unknownEndNotMeetsDateIvl.exec(this.ctx).should.be.false();
    should(this.dateIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle imprecision', function () {
    should(this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx).should.be.false();
    this.notMeetsImpreciseDateIvl.exec(this.ctx).should.be.false();
    should(this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    this.impreciseMayMeetBeforeDateIvl.exec(this.ctx).should.be.false();
    this.impreciseNotMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly compare using the requested precision', function () {
    this.meetsAfterDayOfIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeDayOfIvl.exec(this.ctx).should.be.false();
    this.notMeetsDayOfIvl.exec(this.ctx).should.be.false();
    this.notMeetsDayOfImpreciseIVL.exec(this.ctx).should.be.false();
    should(this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx).should.be.false();
  });
});

describe('MeetsBefore', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals meeting after it', function () {
    this.meetsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeRealIvl.exec(this.ctx).should.be.true();
    this.meetsBeforeDateIvl.exec(this.ctx).should.be.true();
  });

  it('should reject intervals meeting before it', function () {
    this.meetsAfterIntIvl.exec(this.ctx).should.be.false();
    this.meetsAfterRealIvl.exec(this.ctx).should.be.false();
    this.meetsAfterDateIvl.exec(this.ctx).should.be.false();
  });

  it('should reject intervals not meeting it', function () {
    this.notMeetsIntIvl.exec(this.ctx).should.be.false();
    this.notMeetsRealIvl.exec(this.ctx).should.be.false();
    this.notMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (int)', function () {
    this.negInfBegMeetsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlNotMeetsNegInfBeg.exec(this.ctx).should.be.false();
    this.unknownBegMeetsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.unknownBegMayMeetAfterIntIvl.exec(this.ctx).should.be.false();
    this.unknownBegNotMeetsIntIvl.exec(this.ctx).should.be.false();
    should(this.intIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    this.posInfEndMeetsAfterIntIvl.exec(this.ctx).should.be.false();
    this.posInfEndNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlNotMeetsPosInfEnd.exec(this.ctx).should.be.false();
    this.unknownEndMeetsAfterIntIvl.exec(this.ctx).should.be.false();
    should(this.unknownEndMayMeetBeforeIntIvl.exec(this.ctx)).be.null();
    this.unknownEndNotMeetsIntIvl.exec(this.ctx).should.be.false();
    this.intIvlMayMeetAfterUnknownEnd.exec(this.ctx).should.be.false();
  });

  it('should correctly handle null endpoints (date)', function () {
    this.negInfBegMeetsBeforeDateIvl.exec(this.ctx).should.be.true();
    this.negInfBegNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlNotMeetsNegInfBeg.exec(this.ctx).should.be.false();
    this.unknownBegMeetsBeforeDateIvl.exec(this.ctx).should.be.true();
    this.unknownBegMayMeetAfterDateIvl.exec(this.ctx).should.be.false();
    this.unknownBegNotMeetsDateIvl.exec(this.ctx).should.be.false();
    should(this.dateIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    this.posInfEndMeetsAfterDateIvl.exec(this.ctx).should.be.false();
    this.posInfEndNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlNotMeetsPosInfEnd.exec(this.ctx).should.be.false();
    this.unknownEndMeetsAfterDateIvl.exec(this.ctx).should.be.false();
    should(this.unknownEndMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    this.unknownEndNotMeetsDateIvl.exec(this.ctx).should.be.false();
    this.dateIvlMayMeetAfterUnknownEnd.exec(this.ctx).should.be.false();
  });

  it('should correctly handle imprecision', function () {
    this.mayMeetAfterImpreciseDateIvl.exec(this.ctx).should.be.false();
    should(this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    this.notMeetsImpreciseDateIvl.exec(this.ctx).should.be.false();
    this.impreciseMayMeetAfterDateIvl.exec(this.ctx).should.be.false();
    should(this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    this.impreciseNotMeetsDateIvl.exec(this.ctx).should.be.false();
  });

  it('should correctly compare using the requested precision', function () {
    this.meetsAfterDayOfIvl.exec(this.ctx).should.be.false();
    this.meetsBeforeDayOfIvl.exec(this.ctx).should.be.true();
    this.notMeetsDayOfIvl.exec(this.ctx).should.be.false();
    this.notMeetsDayOfImpreciseIVL.exec(this.ctx).should.be.false();
    this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx).should.be.false();
    should(this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('Overlaps', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps (integer)', function () {
    this.overlapsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.overlapsAfterIntIvl.exec(this.ctx).should.be.true();
    this.overlapsBoundaryIntIvl.exec(this.ctx).should.be.true();
  });

  it('should accept overlaps (real)', function () {
    this.overlapsBeforeRealIvl.exec(this.ctx).should.be.true();
    this.overlapsAfterRealIvl.exec(this.ctx).should.be.true();
    this.overlapsBoundaryRealIvl.exec(this.ctx).should.be.true();
  });

  it('should reject non-overlaps (integer)', function () {
    this.noOverlapsIntIvl.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps (real)', function () {
    this.noOverlapsRealIvl.exec(this.ctx).should.be.false();
  });

  it('should return null for null value', function () {
    should(this.overlapsIsNull.exec(this.ctx)).be.null();
  });
});

describe('OverlapsDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps', function () {
    this.overlapsBefore.exec(this.ctx).should.be.true();
    this.overlapsAfter.exec(this.ctx).should.be.true();
    this.overlapsContained.exec(this.ctx).should.be.true();
    this.overlapsContains.exec(this.ctx).should.be.true();
  });

  it('should accept imprecise overlaps', function () {
    this.impreciseOverlap.exec(this.ctx).should.be.true();
  });

  it('should reject non-overlaps', function () {
    this.noOverlap.exec(this.ctx).should.be.false();
  });

  it('should reject imprecise non-overlaps', function () {
    this.noImpreciseOverlap.exec(this.ctx).should.be.false();
  });

  it('should return null for imprecise overlaps with differing precision', function () {
    should(this.unknownOverlap.exec(this.ctx)).be.null();
  });

  it('should return true for imprecise overlaps with matching precision', function () {
    this.matchingPrecisionOverlap.exec(this.ctx).should.be.true();
  });

  it('should correctly compare using the requested precision', function () {
    this.overlapsBeforeDayOfIvlEdge.exec(this.ctx).should.be.true();
    this.overlapsAfterDayOfIvlEdge.exec(this.ctx).should.be.true();
    this.overlapsContainsDayOfIvl.exec(this.ctx).should.be.true();
    this.overlapsContainedByDayOfIvl.exec(this.ctx).should.be.true();
    this.notOverlapsDayOfIvl.exec(this.ctx).should.be.false();
    this.overlapsAfterDayOfImpreciseInterval.exec(this.ctx).should.be.true();
    should(this.mayOverlapBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
    should(this.mayOverlapAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('OverlapsAfter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are after (integer)', function () {
    this.overlapsAfterIntIvl.exec(this.ctx).should.be.true();
    this.overlapsBoundaryIntIvl.exec(this.ctx).should.be.true();
  });

  it('should accept overlaps that are after (real)', function () {
    this.overlapsAfterRealIvl.exec(this.ctx).should.be.true();
    this.overlapsBoundaryRealIvl.exec(this.ctx).should.be.true();
  });

  it('should reject overlaps that are before (integer)', function () {
    this.overlapsBeforeIntIvl.exec(this.ctx).should.be.false();
  });

  it('should reject overlaps that are before (real)', function () {
    this.overlapsBeforeRealIvl.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps (integer)', function () {
    this.noOverlapsIntIvl.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps (real)', function () {
    this.noOverlapsRealIvl.exec(this.ctx).should.be.false();
  });
});

describe('OverlapsAfterDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are after', function () {
    this.overlapsAfter.exec(this.ctx).should.be.true();
    this.overlapsContains.exec(this.ctx).should.be.true();
  });

  it('should accept imprecise overlaps that are after', function () {
    this.impreciseOverlapAfter.exec(this.ctx).should.be.true();
  });

  it('should reject overlaps that are not before', function () {
    this.overlapsBefore.exec(this.ctx).should.be.false();
    this.overlapsContained.exec(this.ctx).should.be.false();
  });

  it('should reject imprecise overlaps that are not before', function () {
    this.impreciseOverlapBefore.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps', function () {
    this.noOverlap.exec(this.ctx).should.be.false();
  });

  it('should reject imprecise non-overlaps', function () {
    this.noImpreciseOverlap.exec(this.ctx).should.be.false();
  });

  it('should return true for imprecise overlaps with matching precision', function () {
    this.matchingPrecisionOverlap.exec(this.ctx).should.be.true();
  });

  it('should return null for imprecise overlaps that are unknown', function () {
    should(this.unknownOverlap.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.overlapsBeforeDayOfIvlEdge.exec(this.ctx).should.be.false();
    this.overlapsAfterDayOfIvlEdge.exec(this.ctx).should.be.true();
    this.overlapsContainsDayOfIvl.exec(this.ctx).should.be.true();
    this.overlapsContainedByDayOfIvl.exec(this.ctx).should.be.false();
    this.notOverlapsDayOfIvl.exec(this.ctx).should.be.false();
    this.overlapsAfterDayOfImpreciseInterval.exec(this.ctx).should.be.true();
    this.mayOverlapBeforeDayOfImpreciseIvl.exec(this.ctx).should.be.false();
    should(this.mayOverlapAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('OverlapsBefore', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are before (integer)', function () {
    this.overlapsBeforeIntIvl.exec(this.ctx).should.be.true();
    this.overlapsBoundaryIntIvl.exec(this.ctx).should.be.true();
  });

  it('should accept overlaps that are before (real)', function () {
    this.overlapsBeforeRealIvl.exec(this.ctx).should.be.true();
    this.overlapsBoundaryRealIvl.exec(this.ctx).should.be.true();
  });

  it('should reject overlaps that are after (integer)', function () {
    this.overlapsAfterIntIvl.exec(this.ctx).should.be.false();
  });

  it('should reject overlaps that are after (real)', function () {
    this.overlapsAfterRealIvl.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps (integer)', function () {
    this.noOverlapsIntIvl.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps (real)', function () {
    this.noOverlapsRealIvl.exec(this.ctx).should.be.false();
  });
});

describe('OverlapsBeforeDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are before', function () {
    this.overlapsBefore.exec(this.ctx).should.be.true();
    this.overlapsContains.exec(this.ctx).should.be.true();
  });

  it('should accept imprecise overlaps that are before', function () {
    this.impreciseOverlapBefore.exec(this.ctx).should.be.true();
  });

  it('should reject overlaps that are not before', function () {
    this.overlapsAfter.exec(this.ctx).should.be.false();
    this.overlapsContained.exec(this.ctx).should.be.false();
  });

  it('should reject imprecise overlaps that are not before', function () {
    this.impreciseOverlapAfter.exec(this.ctx).should.be.false();
  });

  it('should reject non-overlaps', function () {
    this.noOverlap.exec(this.ctx).should.be.false();
  });

  it('should reject imprecise non-overlaps', function () {
    this.noImpreciseOverlap.exec(this.ctx).should.be.false();
  });

  it('should return true for imprecise overlaps with matching precision', function () {
    this.matchingPrecisionOverlap.exec(this.ctx).should.be.true();
  });

  it('should return null for imprecise overlaps that are unknown', function () {
    should(this.unknownOverlap.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', function () {
    this.overlapsBeforeDayOfIvlEdge.exec(this.ctx).should.be.true();
    this.overlapsAfterDayOfIvlEdge.exec(this.ctx).should.be.false();
    this.overlapsContainsDayOfIvl.exec(this.ctx).should.be.true();
    this.overlapsContainedByDayOfIvl.exec(this.ctx).should.be.false();
    this.notOverlapsDayOfIvl.exec(this.ctx).should.be.false();
    this.overlapsAfterDayOfImpreciseInterval.exec(this.ctx).should.be.false();
    should(this.mayOverlapBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
    this.mayOverlapAfterDayOfImpreciseIvl.exec(this.ctx).should.be.false();
  });
});

describe('Width', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate the width of integer intervals', function () {
    // define IntWidth: width of Interval[-2, 5]
    this.intWidth.exec(this.ctx).should.equal(7);
    // define IntOpenWidth: width of Interval(-2, 5)
    this.intOpenWidth.exec(this.ctx).should.equal(5);
  });

  it('should calculate the width of real intervals', function () {
    // define RealWidth: width of Interval[1.23, 4.56]
    this.realWidth.exec(this.ctx).should.equal(3.33);
    // define RealOpenWidth: width of Interval(1.23, 4.56)
    this.realOpenWidth.exec(this.ctx).should.equal(3.32999998);
  });

  it('should calculate the width of infinite intervals', function () {
    // define IntWidthThreeToMax: width of Interval[3, null]
    this.intWidthThreeToMax.exec(this.ctx).should.equal(Math.pow(2, 31) - 4);
    // define IntWidthMinToThree: width of Interval[null, 3]
    this.intWidthMinToThree.exec(this.ctx).should.equal(Math.pow(2, 31) + 3);
  });

  it('should calculate the width of infinite intervals that result in null', function () {
    // define IntWidthThreeToUnknown: width of Interval[3, null)
    should(this.intWidthThreeToUnknown.exec(this.ctx)).be.null();
    // define IntWidthUnknownToThree: width of Interval(null, 3]
    should(this.intWidthUnknownToThree.exec(this.ctx)).be.null();
  });

  it('should calculate the width of interval of quantities', function () {
    // define WidthOfQuantityInterval: width of Interval[Quantity{value: 1, unit: 'mm'}, Quantity{value: 10, unit: 'mm'}]
    const width = this.widthOfQuantityInterval.exec(this.ctx);
    width.value.should.equal(9);
    width.unit.should.equal('mm');
  });

  it('should throw for DateTime Intervals', function () {
    // define WidthOfDateTimeInterval: width of Interval[DateTime(2012,01,01), DateTime(2012,01,03)]
    should(() => this.widthOfDateTimeInterval.exec(this.ctx)).throw();
  });

  it('should throw for Date Intervals', function () {
    // define WidthOfDateInterval: width of Interval[Date(2012,01,01), Date(2012,01,03)]
    should(() => this.widthOfDateInterval.exec(this.ctx)).throw();
  });

  it('should throw for Time Intervals', function () {
    // define WidthOfTimeInterval: width of Interval[Time(12,00,00), Time(12,30,02)]
    should(() => this.widthOfTimeInterval.exec(this.ctx)).throw();
  });
});

describe('Size', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate the size of integer intervals', function () {
    // define IntSize: Size(Interval[-2, 5])
    this.intSize.exec(this.ctx).should.equal(8);
    // define IntOpenSize: Size(Interval(-2, 5))
    this.intOpenSize.exec(this.ctx).should.equal(6);
  });

  it('should calculate the size of real intervals', function () {
    // define RealSize: Size(Interval[1.23, 4.56])
    this.realSize.exec(this.ctx).should.equal(3.33 + MIN_FLOAT_PRECISION_VALUE);
    // define RealOpenSize: Size(Interval(1.23, 4.56))
    this.realOpenSize.exec(this.ctx).should.equal(3.32999998 + MIN_FLOAT_PRECISION_VALUE);
  });

  it('should calculate the size of infinite intervals', function () {
    // define IntSizeThreeToMax: Size(Interval[3, null])
    this.intSizeThreeToMax.exec(this.ctx).should.equal(Math.pow(2, 31) - 4 + 1);
    // define IntSizeMinToThree: Size(Interval[null, 3])
    this.intSizeMinToThree.exec(this.ctx).should.equal(Math.pow(2, 31) + 3 + 1);
  });

  it('should calculate the size of infinite intervals that result in null', function () {
    // define IntSizeThreeToUnknown: Size(Interval[3, null))
    should(this.intSizeThreeToUnknown.exec(this.ctx)).be.null();
    // define IntSizeUnknownToThree: Size(Interval(null, 3])
    should(this.intSizeUnknownToThree.exec(this.ctx)).be.null();
  });

  it('should return null if integer is null', function () {
    // define SizeIsNull: Size(null as Interval<Integer>)
    should(this.sizeIsNull.exec(this.ctx)).be.null();
  });

  it('should return null if integer is null', function () {
    // define SizeIsNull: Size(null as Interval<Integer>)
    should(this.sizeIsNull.exec(this.ctx)).be.null();
  });

  it('should calculate size of interval of quantities', function () {
    // define SizeOfQuantityInterval: Size(Interval[Quantity{value: 1, unit: 'mm'}, Quantity{value: 10, unit: 'mm'}])
    const size = this.sizeOfQuantityInterval.exec(this.ctx);
    size.value.should.equal(10);
    size.unit.should.equal('mm');
  });

  it('should throw for Date Interval', function () {
    // define SizeOfDateTimeInterval: Size(Interval[DateTime(2012,01,01), DateTime(2012,01,03)])
    should(() => this.sizeOfDateTimeInterval.exec(this.ctx)).throw();
  });

  it('should throw for DateTime Interval', function () {
    // define SizeOfDateInterval: Size(Interval[Date(2012,01,01), Date(2012,01,03)])
    should(() => this.sizeOfDateInterval.exec(this.ctx)).throw();
  });

  it('should throw for Time Interval', function () {
    // define SizeOfTimeInterval: Size(Interval[Time(12,00,00), Time(12,30,02)])
    should(() => this.sizeOfTimeInterval.exec(this.ctx)).throw();
  });
});

describe('Start', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the low of the interval', function () {
    this.closedNotNull.exec(this.ctx).should.eql(new DateTime(2012, 1, 1));
  });

  it('should return the minimum possible DateTime', function () {
    this.closedNullDateTime.exec(this.ctx).should.eql(MIN_DATETIME_VALUE);
  });

  it('should return the minimum possible DateTime in timzoneOffset of context', function () {
    // set execution timestamp to be +5
    this.ctx.executionDateTime = new DateTime(2019, 10, 1, 12, 31, 31, 2, 5);
    this.closedNullDateTime.exec(this.ctx).timezoneOffset.should.eql(5);
  });

  it('should return the minimum possible Integer', function () {
    this.closedNullInteger.exec(this.ctx).should.eql(MIN_INT_VALUE);
  });

  it('should return the minimum possible Decimal', function () {
    this.closedNullDecimal.exec(this.ctx).should.eql(MIN_FLOAT_VALUE);
  });

  it('should return null when the interval is null', function () {
    should(this.nullInterval.exec(this.ctx)).be.null();
  });

  it('should return successor of low when the interval is open', function () {
    this.openNotNull.exec(this.ctx).should.eql(new DateTime(2012, 1, 1).successor());
  });

  it('should return null for open interval with null high value', function () {
    should(this.openNull.exec(this.ctx)).be.null();
  });
});

describe('End', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the high of the interval', function () {
    this.closedNotNull.exec(this.ctx).should.eql(new DateTime(2013, 1, 1));
  });

  it('should return the maximum possible DateTime', function () {
    this.closedNullDateTime.exec(this.ctx).should.eql(MAX_DATETIME_VALUE);
  });

  it('should return the maximum possible DateTime in timzoneOffset of context', function () {
    // set execution timestamp to be +5
    this.ctx.executionDateTime = new DateTime(2019, 10, 1, 12, 31, 31, 2, 5);
    this.closedNullDateTime.exec(this.ctx).timezoneOffset.should.eql(5);
  });

  it('should return the maximum possible Integer', function () {
    this.closedNullInteger.exec(this.ctx).should.eql(MAX_INT_VALUE);
  });

  it('should return the maximum possible Decimal', function () {
    this.closedNullDecimal.exec(this.ctx).should.eql(MAX_FLOAT_VALUE);
  });

  it('should return null when the interval is null', function () {
    should(this.nullInterval.exec(this.ctx)).be.null();
  });

  it('should return predecessor of high when the interval is open', function () {
    this.openNotNull.exec(this.ctx).should.eql(new DateTime(2013, 1, 1).predecessor());
  });

  it('should return null for open interval with null low value', function () {
    should(this.openNull.exec(this.ctx)).be.null();
  });
});

describe('Starts', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate to null', function () {
    should(this.testStartsNull.exec(this.ctx)).be.null();
  });

  it('should calculate integer intervals properly', function () {
    this.integerIntervalStartsTrue.exec(this.ctx).should.be.true();
    this.integerIntervalStartsFalse.exec(this.ctx).should.be.false();
    this.integerIntervalStartEndsFalse.exec(this.ctx).should.be.false();
  });

  it('should calculate decimal intervals properly', function () {
    this.decimalIntervalStartsTrue.exec(this.ctx).should.be.true();
    this.decimalIntervalStartsFalse.exec(this.ctx).should.be.false();
    this.decimalIntervalStartsEndsFalse.exec(this.ctx).should.be.false();
  });

  it('should calculate quantity intervals properly', function () {
    this.quantityIntervalStartsTrue.exec(this.ctx).should.be.true();
    this.quantityIntervalStartsFalse.exec(this.ctx).should.be.false();
    this.quantityIntervalStartsEndsFalse.exec(this.ctx).should.be.false();
  });

  it('should calculate datetime intervals properly', function () {
    this.dateTimeIntervalStartsTrue.exec(this.ctx).should.be.true();
    this.dateTimeIntervalStartsFalse.exec(this.ctx).should.be.false();
    this.dateTimeIntervalStartsDayOfTrue.exec(this.ctx).should.be.true();
    this.dateTimeIntervalStartsEndsFalse.exec(this.ctx).should.be.false();
  });
});

describe('Ends', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate to null', function () {
    should(this.testEndsNull.exec(this.ctx)).be.null();
  });

  it('should calculate integer intervals properly', function () {
    this.integerIntervalEndsTrue.exec(this.ctx).should.be.true();
    this.integerIntervalEndsFalse.exec(this.ctx).should.be.false();
    this.integerIntervalEndsStartsFalse.exec(this.ctx).should.be.false();
  });

  it('should calculate decimal intervals properly', function () {
    this.decimalIntervalEndsTrue.exec(this.ctx).should.be.true();
    this.decimalIntervalEndsFalse.exec(this.ctx).should.be.false();
    this.decimalIntervalEndsStartsFalse.exec(this.ctx).should.be.false();
  });

  it('should calculate quantity intervals properly', function () {
    this.quantityIntervalEndsTrue.exec(this.ctx).should.be.true();
    this.quantityIntervalEndsFalse.exec(this.ctx).should.be.false();
    this.quantityIntervalEndsStartsFalse.exec(this.ctx).should.be.false();
  });

  it('should calculate datetime intervals properly', function () {
    this.dateTimeIntervalEndsTrue.exec(this.ctx).should.be.true();
    this.dateTimeIntervalEndsFalse.exec(this.ctx).should.be.false();
    this.dateTimeIntervalEndsDayOfTrue.exec(this.ctx).should.be.true();
    this.dateTimeIntervalEndsStartsFalse.exec(this.ctx).should.be.false();
  });
});

describe('IntegerIntervalUnion', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate open and closed unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    let y = this.intClosedUnionClosed.exec(this.ctx);
    y.equals(x).should.be.true();

    y = this.intClosedUnionOpen.exec(this.ctx);
    y.contains(0).should.be.true();
    y.contains(10).should.be.false();

    y = this.intOpenUnionOpen.exec(this.ctx);
    y.contains(0).should.be.false();
    y.contains(10).should.be.false();

    y = this.intOpenUnionClosed.exec(this.ctx);
    y.contains(0).should.be.false();
    y.contains(10).should.be.true();
  });

  it('should properly calculate sameAs unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    const y = this.intSameAsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate before/after unions', function () {
    should(this.intBeforeUnion.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    const y = this.intMeetsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    const y = this.intOverlapsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    const y = this.intBeginsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    const y = this.intDuringUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by unions', function () {
    const x = this.intFullInterval.exec(this.ctx);
    const y = this.intEndsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly handle null unions', function () {
    should(this.nullUnion.exec(this.ctx)).be.null();
    should(this.unionNull.exec(this.ctx)).be.null();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('DateTimeIntervalUnion', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate open and closed unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    let y = this.dateTimeClosedUnionClosed.exec(this.ctx);
    y.equals(x).should.be.true();

    const a = new DateTime(2012, 1, 1, 0, 0, 0, 0);
    const b = new DateTime(2013, 1, 1, 0, 0, 0, 0);

    y = this.dateTimeClosedUnionOpen.exec(this.ctx);
    y.contains(a).should.be.true();
    y.contains(b).should.be.false();

    y = this.dateTimeOpenUnionOpen.exec(this.ctx);
    y.contains(a).should.be.false();
    y.contains(b).should.be.false();

    y = this.dateTimeOpenUnionClosed.exec(this.ctx);
    y.contains(a).should.be.false();
    y.contains(b).should.be.true();
  });

  it('should properly calculate sameAs unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    const y = this.dateTimeSameAsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate before/after unions', function () {
    should(this.dateTimeBeforeUnion.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    const y = this.dateTimeMeetsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    const y = this.dateTimeOverlapsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    const y = this.dateTimeBeginsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    const y = this.dateTimeDuringUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by unions', function () {
    const x = this.dateTimeFullInterval.exec(this.ctx);
    const y = this.dateTimeEndsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('IntegerIntervalExcept', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs except', function () {
    should(this.intSameAsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate before/after except', function () {
    this.intBeforeExcept.exec(this.ctx).should.eql(new Interval(0, 4));
  });

  it('should properly calculate meets except', function () {
    const x = this.intHalfInterval.exec(this.ctx);
    const y = this.intMeetsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping except', function () {
    const x = this.intHalfInterval.exec(this.ctx);
    const y = this.intOverlapsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by except', function () {
    should(this.intBeginsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate includes/included by except', function () {
    should(this.intDuringExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate ends/ended by except', function () {
    should(this.intEndsExcept.exec(this.ctx)).be.null();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('DateTimeIntervalExcept', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs except', function () {
    should(this.dateTimeSameAsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate before/after except', function () {
    this.dateTimeBeforeExcept
      .exec(this.ctx)
      .should.eql(
        new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2012, 4, 1, 0, 0, 0, 0))
      );
  });

  it('should properly calculate meets except', function () {
    const x = this.dateTimeHalfInterval.exec(this.ctx);
    const y = this.dateTimeMeetsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping except', function () {
    const x = this.dateTimeHalfInterval.exec(this.ctx);
    const y = this.dateTimeOverlapsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by except', function () {
    should(this.dateTimeBeginsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate includes/included by except', function () {
    should(this.dateTimeDuringExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate ends/ended by except', function () {
    should(this.dateTimeEndsExcept.exec(this.ctx)).be.null();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('IntegerIntervalIntersect', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs intersect', function () {
    const x = this.intSameAsIntersect.exec(this.ctx);
    const y = this.intFullInterval.exec(this.ctx);
    x.equals(y).should.be.true();
  });

  it('should properly calculate before/after intersect', function () {
    should(this.intBeforeIntersect.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets intersect', function () {
    const x = this.intMeetsInterval.exec(this.ctx);
    const y = this.intMeetsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping intersect', function () {
    const x = this.intOverlapsInterval.exec(this.ctx);
    const y = this.intOverlapsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by intersect', function () {
    const x = this.intBeginsInterval.exec(this.ctx);
    const y = this.intBeginsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by intersect', function () {
    const x = this.intDuringInterval.exec(this.ctx);
    const y = this.intDuringIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by intersect', function () {
    const x = this.intEndsInterval.exec(this.ctx);
    const y = this.intEndsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });
});

describe('DateTimeIntervalIntersect', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs intersect', function () {
    const x = this.dateTimeSameAsIntersect.exec(this.ctx);
    const y = this.dateTimeFullInterval.exec(this.ctx);
    x.equals(y).should.be.true();
  });

  it('should properly calculate before/after intersect', function () {
    should(this.dateTimeBeforeIntersect.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets intersect', function () {
    const x = this.dateTimeMeetsInterval.exec(this.ctx);
    const y = this.dateTimeMeetsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping intersect', function () {
    const x = this.dateTimeOverlapsInterval.exec(this.ctx);
    const y = this.dateTimeOverlapsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by intersect', function () {
    const x = this.dateTimeBeginsInterval.exec(this.ctx);
    const y = this.dateTimeBeginsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by intersect', function () {
    const x = this.dateTimeDuringInterval.exec(this.ctx);
    const y = this.dateTimeDuringIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by intersect', function () {
    const x = this.dateTimeEndsInterval.exec(this.ctx);
    const y = this.dateTimeEndsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });
});

// TODO: 2 tests I don't know how to write:
//   - If the argument is null, the result is null.
//   - If the list of intervals contains nulls, they will be excluded from the resulting list.
describe('IntegerIntervalCollapse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('empty interval collapses to empty', function () {
    this.intCollapseEmpty.exec(this.ctx).should.eql(this.intEmptyIntervalList.exec(this.ctx));
  });

  it('single interval list collapse to self', function () {
    this.intCollapseSingleInterval
      .exec(this.ctx)
      .should.eql(this.int1_10IntervalList.exec(this.ctx));
  });

  it('disjoint intervals list collapses to ordered self', function () {
    this.intCollapseDisjoint.exec(this.ctx).should.eql(this.intTwoItemDisjointList.exec(this.ctx));
    this.intCollapseDisjointReversed
      .exec(this.ctx)
      .should.eql(this.intTwoItemDisjointList.exec(this.ctx));
  });

  it('adjacent intervals list combines', function () {
    this.intCollapseAdjacent.exec(this.ctx).should.eql(this.int1_15IntervalList.exec(this.ctx));
  });

  it('overlapping intervals list combine', function () {
    this.intCollapseOverlap.exec(this.ctx).should.eql(this.int1_12IntervalList.exec(this.ctx));
    this.intCollapseOverlapContained
      .exec(this.ctx)
      .should.eql(this.int1_15IntervalList.exec(this.ctx));
    this.intCollapseOverlapContainedEdge
      .exec(this.ctx)
      .should.eql(this.int1_10IntervalList.exec(this.ctx));
    this.intCollapseOverlapContainedEdge2
      .exec(this.ctx)
      .should.eql(this.int1_15IntervalList.exec(this.ctx));
    this.intCollapseOverlapMultipleCombine
      .exec(this.ctx)
      .should.eql(this.int1_15IntervalList.exec(this.ctx));
  });
});

describe('DateTimeIntervalCollapse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('empty interval collapses to empty', function () {
    this.dateTimeCollapseEmpty
      .exec(this.ctx)
      .should.eql(this.dateTimeEmptyIntervalList.exec(this.ctx));
  });

  it('single interval list collapse to self', function () {
    this.dateTimeCollapseSingleInterval
      .exec(this.ctx)
      .should.eql(this.dateTime1_10IntervalList.exec(this.ctx));
  });

  it('disjoint intervals list collapses to ordered self', function () {
    this.dateTimeCollapseDisjoint
      .exec(this.ctx)
      .should.eql(this.dateTimeTwoItemDisjointList.exec(this.ctx));
  });

  it('reversed disjoint intervals list collapses to ordered self', function () {
    this.dateTimeCollapseDisjointReversed
      .exec(this.ctx)
      .should.eql(this.dateTimeTwoItemDisjointList.exec(this.ctx));
  });

  it('adjacent intervals list combines', function () {
    this.dateTimeCollapseAdjacent
      .exec(this.ctx)
      .should.eql(this.dateTime1_15IntervalList.exec(this.ctx));
  });

  it('overlapping intervals list combine', function () {
    this.dateTimeCollapseOverlap
      .exec(this.ctx)
      .should.eql(this.dateTime1_12IntervalList.exec(this.ctx));
    this.dateTimeCollapseOverlapContained
      .exec(this.ctx)
      .should.eql(this.dateTime1_15IntervalList.exec(this.ctx));
    this.dateTimeCollapseOverlapContainedEdge
      .exec(this.ctx)
      .should.eql(this.dateTime1_10IntervalList.exec(this.ctx));
    this.dateTimeCollapseOverlapContainedEdge2
      .exec(this.ctx)
      .should.eql(this.dateTime1_15IntervalList.exec(this.ctx));
    this.dateTimeCollapseOverlapMultipleCombine
      .exec(this.ctx)
      .should.eql(this.dateTime1_15IntervalList.exec(this.ctx));
  });

  it('throws collapsing imprecise interval', function () {
    this.dateTimeCollapseImpreciseBoundary
      .exec(this.ctx)
      .should.eql(this.dateTime1_10IntervalList.exec(this.ctx));
  });

  it('should not modify collapse parameters', function () {
    const interval1CopyString = this.dateTime1_6Interval.toString();
    const interval2CopyString = this.dateTime5_12Interval.toString();
    const interval3CopyString = this.dateTime10_15Interval.toString();
    this.dateTimeCollapseOverlapMultipleCombine.exec(this.ctx);
    this.dateTime1_6Interval.toString().should.eql(interval1CopyString);
    this.dateTime5_12Interval.toString().should.eql(interval2CopyString);
    this.dateTime10_15Interval.toString().should.eql(interval3CopyString);
  });
});

describe('Collapse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('numeric collapse uses "1" as default per unit', function () {
    this.intCollapseNoPer.exec(this.ctx).should.eql(this.intCollapsePerUnit1.exec(this.ctx));
  });

  it('combines intervals separated by less than per unit', function () {
    this.intCollapseSeparatedListPer3
      .exec(this.ctx)
      .should.eql(this.expectedIntervalList.exec(this.ctx));
  });

  it('DateTime collapse uses 1 ms as default per unit', function () {
    // TODO: spec says to determine this based on width of successor, but Bonnie
    // will only ever have fully-defined dates. Implement successor way if time.
    this.dateTimeCollapseNoPer.exec(this.ctx).should.eql(this.dateTimeCollapsePerMs.exec(this.ctx));
  });

  it('DateTime with null end collapse with no overlap', function () {
    this.dateTimeNullEndCollapseNoOverlap
      .exec(this.ctx)
      .should.eql(this.dateTimeNullEndCollapseNoOverlapExpected.exec(this.ctx));
  });

  it('DateTime with null start collapse with no overlap', function () {
    this.dateTimeNullStartCollapseNoOverlap
      .exec(this.ctx)
      .should.eql(this.dateTimeNullStartCollapseNoOverlapExpected.exec(this.ctx));
  });

  it('combines DateTime intervals separated by less than per unit', function () {
    this.dateTimeCollapsePerDay
      .exec(this.ctx)
      .should.eql(this.dateTime1_15IntervalList.exec(this.ctx));
  });

  it('Date collapse overlapping intervals with no per', function () {
    this.overlappingDateCollapseNoPer
      .exec(this.ctx)
      .should.eql([this.date1_15Interval.exec(this.ctx)]);
  });

  it('Date collapse adjacent intervals with no per', function () {
    this.adjacentDateCollapseNoPer
      .exec(this.ctx)
      .should.eql([this.date1_15Interval.exec(this.ctx)]);
  });

  it('Date collapse disjoint intervals with no per', function () {
    this.disjointDateCollapseNoPer
      .exec(this.ctx)
      .should.eql([this.date1_2Interval.exec(this.ctx), this.date4_15Interval.exec(this.ctx)]);
  });

  it('Date collapse per day', function () {
    this.dateCollapsePerDay
      .exec(this.ctx)
      .should.eql([this.date1_2Interval.exec(this.ctx), this.date4_15Interval.exec(this.ctx)]);
  });

  it('Date collapse per month', function () {
    this.dateCollapsePerMonth.exec(this.ctx).should.eql([this.date1_15Interval.exec(this.ctx)]);
  });

  it('Time collapse overlapping intervals with no per', function () {
    this.overlappingTimeCollapseNoPer
      .exec(this.ctx)
      .should.eql([this.time1_15Interval.exec(this.ctx)]);
  });

  it('Time collapse adjacent intervals with no per', function () {
    this.adjacentTimeCollapseNoPer
      .exec(this.ctx)
      .should.eql([this.time1_15Interval.exec(this.ctx)]);
  });

  it('Time collapse disjoint intervals with no per', function () {
    this.disjointTimeCollapseNoPer
      .exec(this.ctx)
      .should.eql([this.time1_2Interval.exec(this.ctx), this.time4_15Interval.exec(this.ctx)]);
  });

  it('Time collapse per second', function () {
    this.timeCollapsePerSecond
      .exec(this.ctx)
      .should.eql([this.time1_2Interval.exec(this.ctx), this.time4_15Interval.exec(this.ctx)]);
  });

  it('Time collapse per minute', function () {
    this.timeCollapsePerMinute.exec(this.ctx).should.eql([this.time1_15Interval.exec(this.ctx)]);
  });

  it('Quantity uses default per unit', function () {
    const quantity_collapse = this.quantityIntervalCollapseNoPer.exec(this.ctx);
    quantity_collapse.should.eql(this.expectedQuantityList.exec(this.ctx));
    quantity_collapse.should.eql(this.quantityIntervalCollapsePerUnit1.exec(this.ctx));
  });

  it('Quantity with separated intervals', function () {
    this.collapseSeparatedQuantity
      .exec(this.ctx)
      .should.eql(this.quantitySeparatedBy3.exec(this.ctx));
  });

  it('Quantity combines disjoint intervals that are within per width', function () {
    this.collapseSeparatedQuantityPer3
      .exec(this.ctx)
      .should.eql(this.expectedSeparatedQuantity.exec(this.ctx));
  });

  it('Quantity with units uses point type as default per value', function () {
    this.collapseDisjointQuantityUnits
      .exec(this.ctx)
      .should.eql(this.expectedQuantityUnitsCollapse.exec(this.ctx));
  });

  it('Quantity with units disjoint but within per', function () {
    this.collapseQuantityUnitsWithinPer
      .exec(this.ctx)
      .should.eql(this.expectedQuantityUnitsCollapse.exec(this.ctx));
  });

  it('Quantity with units disjoint and not within per', function () {
    this.collapseQuantityUnitsNotWithinPer
      .exec(this.ctx)
      .should.eql(this.quantityMeterIntervalList.exec(this.ctx));
  });

  it('Quantity with units with null low value', function () {
    this.collapseQuantityNullLowUnitsWithinPer
      .exec(this.ctx)
      .should.eql(this.collapseQuantityNullLowUnitsWithinPerExpected.exec(this.ctx));
  });

  it('Quantity with units with null low and high values', function () {
    this.collapseQuantityIntervalListWithNulls
      .exec(this.ctx)
      .should.eql(this.collapseQuantityIntervalListWithNullsExpected.exec(this.ctx));
  });

  it('Quantity with units with null high value', function () {
    this.collapseQuantityNullHighUnitsWithinPer
      .exec(this.ctx)
      .should.eql(this.collapseQuantityNullHighUnitsWithinPerExpected.exec(this.ctx));
  });

  it('Quantity Intervals no overlap with null low', function () {
    this.collapseQuantityIntervalListWithNullLowNoOverlap
      .exec(this.ctx)
      .should.eql(this.collapseQuantityIntervalListWithNullLowNoOverlapExpected.exec(this.ctx));
  });

  it('Quantity Intervals no overlap with null high', function () {
    this.collapseQuantityIntervalListWithNullHighNoOverlap
      .exec(this.ctx)
      .should.eql(this.collapseQuantityIntervalListWithNullHighNoOverlapExpected.exec(this.ctx));
  });

  it('with Interval that has null low values', function () {
    this.collapseNullLowIntervalList
      .exec(this.ctx)
      .should.eql(this.expectedNullLowIntervalCollapse.exec(this.ctx));
  });

  it('with Interval that has null high values', function () {
    this.collapseNullHighIntervalList
      .exec(this.ctx)
      .should.eql(this.expectedNullHighIntervalCollapse.exec(this.ctx));
  });

  it('with Date Interval that has null start values', function () {
    this.dateTimeNullStartCollapse
      .exec(this.ctx)
      .should.eql(this.dateTimeNullStartCollapseExpected.exec(this.ctx));
  });

  it('with Date Interval that has null high values', function () {
    this.dateTimeNullEndCollapse
      .exec(this.ctx)
      .should.eql(this.dateTimeNullEndCollapseExpected.exec(this.ctx));
  });

  it('with Date Interval that has null high and low values', function () {
    this.dateTimeNullStartEndCollapse
      .exec(this.ctx)
      .should.eql(this.dateTimeNullStartEndCollapseExpected.exec(this.ctx));
  });

  it('should ignore nulls in list of Intervals', function () {
    this.nullInCollapse.exec(this.ctx).should.eql(this.expectedResultWithNull.exec(this.ctx));
  });

  it.skip('should return null if list is null', function () {
    // TODO: Translation Error
    should.not.exist(this.nullCollapse.exec(this.ctx));
  });

  it('should use default per unit if per is expicitly null', function () {
    this.nullPerCollapse.exec(this.ctx).should.eql(this.expectedResultNullPer.exec(this.ctx));
  });
});

const prettyList = function (array: any) {
  if (array == null) {
    return array;
  }
  return '{ ' + array.join(', ') + ' }';
};

describe('DateIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands a closed interval per day', function () {
    // define ClosedSinglePerDay: expand { Interval[@2018-01-01, @2018-01-03] } per day
    const a = this.closedSinglePerDay.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );
  });

  it('expands a closed interval per week', function () {
    // define ClosedSinglePerWeek: expand { Interval[@2018-01-01, @2018-01-21] } per week
    const a = this.closedSinglePerWeek.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }'
    );
  });

  it('expands a closed interval per month', function () {
    // define ClosedSinglePerMonth: expand { Interval[@2018-01-01, @2018-03-31] } per month
    // define ClosedSinglePerMonthTrunc: expand { Interval[@2018-01-01, @2018-04-29] } per month
    const a = this.closedSinglePerMonth.exec(this.ctx);
    const b = this.closedSinglePerMonthTrunc.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }');
    prettyList(b).should.equal(
      '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03], [2018-04, 2018-04] }'
    );
  });

  it('expands a closed interval per year', function () {
    // define ClosedSinglePerYear: expand { Interval[@2016-01-01, @2018-12-32] } per year
    // define ClosedSinglePerYearTrunc: expand { Interval[@2016-01-01, @2019-12-30] } per year
    const a = this.closedSinglePerYear.exec(this.ctx);
    const b = this.closedSinglePerYearTrunc.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');
    prettyList(b).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018], [2019, 2019] }');
  });

  it('ignores null item in list', function () {
    // define NullInList: expand { Interval[@2018-01-01, @2018-01-03], null } per day
    const a = this.nullInList.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );
  });

  it('expands two overlapping intervals', function () {
    // define Overlapping: expand { Interval[@2018-01-01, @2018-01-03], Interval[@2018-01-02, @2018-01-04] } per day
    const a = this.overlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03], [2018-01-04, 2018-01-04] }'
    );
  });

  it('expands two non overlapping intervals', function () {
    // define NonOverlapping: expand { Interval[@2018-01-01, @2018-01-03], Interval[@2018-01-08, @2018-01-08] } per day
    const a = this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03], [2018-01-08, 2018-01-08] }'
    );
  });

  it('expands an interval with mid boundaries per day', function () {
    // define MidBoundariesPerDay: expand { Interval[@2017-12-30, @2018-01-01] } per day
    const a = this.midBoundariesPerDay.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2017-12-30, 2017-12-30], [2017-12-31, 2017-12-31], [2018-01-01, 2018-01-01] }'
    );
  });

  it('expands an interval with mid boundaries per month', function () {
    // define MidBoundariesPerMonth: expand { Interval[@2017-11-14, @2018-01-18] } per month
    const a = this.midBoundariesPerMonth.exec(this.ctx);
    prettyList(a).should.equal('{ [2017-11, 2017-11], [2017-12, 2017-12], [2018-01, 2018-01] }');
  });

  it('expands an interval with mid boundaries per year', function () {
    // define MidBoundariesPerYear: expand { Interval[@2016-04-06, @2018-04-06] } per year
    const a = this.midBoundariesPerYear.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');
  });

  it('expands an interval with default per', function () {
    // define NoPerDefaultDay: expand { Interval[@2018-01-01, @2018-01-03] }
    let a = this.noPerDefaultDay.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );

    // define NoPerDefaultMonth: expand { Interval[@2018-01, @2018-03] }
    a = this.noPerDefaultMonth.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }');

    // define NoPerDefaultYear: expand { Interval[@2016, @2018] }
    a = this.noPerDefaultYear.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');

    // define NoPerDefaultMonthWithMismatch: expand { Interval[@2016, @2018-03] }
    a = this.noPerDefaultMonthWithMismatch.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');
  });

  it('expands interval with open ends', function () {
    // define OpenStart: expand { Interval(@2018-01-01, @2018-01-03] } per day
    let a = this.openStart.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }');

    // define OpenEnd: expand { Interval[@2018-01-01, @2018-01-03) } per day
    a = this.openEnd.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02] }');

    // define OpenBoth: expand { Interval(@2018-01-01, @2018-01-03) } per day
    a = this.openBoth.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-02, 2018-01-02] }');
  });

  it('handles ends with mismatched precision', function () {
    // define MismatchPrecision: expand { Interval[@2018-01-01, @2018-03] } per month
    let e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(this.mismatchPrecision.exec(this.ctx)).should.equal(e);

    // define MismatchPrecisionResultLongerThanInput: expand { Interval[@2018-01, @2018-02-28] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02] }';
    prettyList(this.mismatchPrecisionResultLongerThanInput.exec(this.ctx)).should.equal(e);
  });

  it('returns an empty list if we get an empty list', function () {
    // define EmptyList: List<Interval<Date>>{}
    const a = this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', function () {
    // define NullOpen: expand { Interval[null, @2018-01-03] } per day
    let a = this.nullOpen.exec(this.ctx);
    should.not.exist(a);

    // define NullClose: expand { Interval[@2018-01-01, null] } per day
    a = this.nullClose.exec(this.ctx);
    should.not.exist(a);

    // define NullBoth: expand { Interval[null, null] } per day
    a = this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns empty list when per is more precise than the interval ends', function () {
    // define MonthDayPer: expand { Interval[@2018-01, @2018-03] } per day
    this.monthDayPer.exec(this.ctx).should.be.empty();
  });

  it('returns null when per not applicable', function () {
    // define BadPerMinute: expand { Interval[@2018-01-01, @2018-01-04] } per minute
    let a = this.badPerMinute.exec(this.ctx);
    should.not.exist(a);

    // define BadPerGram: expand { Interval[@2018-01-01, @2018-01-04] } per 1 'g'
    a = this.badPerGram.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('DateTimeIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands a millisecond precision datetime', function () {
    // define MsPrecPerYear: expand { Interval[@2016-01-01T00:00:00.000+00:00, @2018-01-01T00:00:00.000+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.msPrecPerYear.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMonth: expand { Interval[@2018-01-01T00:00:00.000+00:00, @2018-03-01T00:00:00.000+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(this.msPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define MsPrecPerWeek: expand { Interval[@2018-01-01T00:00:00.000+00:00, @2018-01-21T00:00:00.000+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(this.msPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define MsPrecPerDay: expand { Interval[@2018-01-01T00:00:00.000+00:00, @2018-01-03T00:00:00.000+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(this.msPrecPerDay.exec(this.ctx)).should.equal(e);

    // define MsPrecPerHour: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T03:00:00.000+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00] }';
    prettyList(this.msPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMinute: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:02:00.000+00:00] } per minute
    e =
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00], [2018-01-01T01:02+00:00, 2018-01-01T01:02+00:00] }';
    prettyList(this.msPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define MsPrecPerSecond: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:02.000+00:00] } per second
    e =
      '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00], [2018-01-01T01:00:02+00:00, 2018-01-01T01:00:02+00:00] }';
    prettyList(this.msPrecPerSecond.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMillisecond: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:00.001+00:00] } per millisecond
    e =
      '{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.000+00:00], [2018-01-01T01:00:00.001+00:00, 2018-01-01T01:00:00.001+00:00] }';
    prettyList(this.msPrecPerMillisecond.exec(this.ctx)).should.equal(e);
  });

  it('expands a second precision datetime', function () {
    // define SecPrecPerYear: expand { Interval[@2016-01-01T00:00:00+00:00, @2018-01-01T00:00:00+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.secPrecPerYear.exec(this.ctx)).should.equal(e);

    // define SecPrecPerMonth: expand { Interval[@2018-01-01T00:00:00+00:00, @2018-03-01T00:00:00+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(this.secPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define SecPrecPerWeek: expand { Interval[@2018-01-01T00:00:00+00:00, @2018-01-21T00:00:00+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(this.secPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define SecPrecPerDay: expand { Interval[@2018-01-01T00:00:00+00:00, @2018-01-03T00:00:00+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(this.secPrecPerDay.exec(this.ctx)).should.equal(e);

    // define SecPrecPerHour: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T03:00:00+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00] }';
    prettyList(this.secPrecPerHour.exec(this.ctx)).should.equal(e);

    // define SecPrecPerMinute: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:02:00+00:00] } per minute
    e =
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00], [2018-01-01T01:02+00:00, 2018-01-01T01:02+00:00] }';
    prettyList(this.secPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define SecPrecPerSecond: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:00:01+00:00] } per second
    e =
      '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00] }';
    prettyList(this.secPrecPerSecond.exec(this.ctx)).should.equal(e);

    this.secPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands a minute precision datetime', function () {
    // define MinPrecPerYear: expand { Interval[@2016-01-01T00:00+00:00, @2018-01-01T00:00+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.minPrecPerYear.exec(this.ctx)).should.equal(e);

    // define MinPrecPerMonth: expand { Interval[@2018-01-01T00:00+00:00, @2018-03-01T00:00+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(this.minPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define MinPrecPerWeek: expand { Interval[@2018-01-01T00:00+00:00, @2018-01-21T00:00+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(this.minPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define MinPrecPerDay: expand { Interval[@2018-01-01T00:00+00:00, @2018-01-03T00:00+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(this.minPrecPerDay.exec(this.ctx)).should.equal(e);

    // define MinPrecPerHour: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T03:00+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00] }';
    prettyList(this.minPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MinPrecPerMinute: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T01:01+00:00] } per minute
    e =
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00] }';
    prettyList(this.minPrecPerMinute.exec(this.ctx)).should.equal(e);

    this.minPrecPerSecond.exec(this.ctx).should.be.empty();
    this.minPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands an hour precision datetime', function () {
    // define HourPrecPerYear: expand { Interval[@2016-01-01T00+00:00, @2018-01-01T00+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.hourPrecPerYear.exec(this.ctx)).should.equal(e);

    // define HourPrecPerMonth: expand { Interval[@2018-01-01T00+00:00, @2018-03-01T00+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(this.hourPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define HourPrecPerWeek: expand { Interval[@2018-01-01T00+00:00, @2018-01-21T00+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(this.hourPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define HourPrecPerDay: expand { Interval[@2018-01-01T00+00:00, @2018-01-03T00+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(this.hourPrecPerDay.exec(this.ctx)).should.equal(e);

    // define HourPrecPerHour: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T02+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00] }';
    prettyList(this.hourPrecPerHour.exec(this.ctx)).should.equal(e);

    this.hourPrecPerMinute.exec(this.ctx).should.be.empty();
    this.hourPrecPerSecond.exec(this.ctx).should.be.empty();
    this.hourPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands a day precision datetime', function () {
    // define DayPrecPerYear: expand { Interval[DateTime(2016,01,01), DateTime(2018,01,01)] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.dayPrecPerYear.exec(this.ctx)).should.equal(e);

    // define DayPrecPerMonth: expand { Interval[DateTime(2018,01,01), DateTime(2018,03,01)] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(this.dayPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define DayPrecPerWeek: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,14)] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14] }';
    prettyList(this.dayPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define DayPrecPerDay: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,02)] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02] }';
    prettyList(this.dayPrecPerDay.exec(this.ctx)).should.equal(e);

    this.dayPrecPerHour.exec(this.ctx).should.be.empty();
    this.dayPrecPerMinute.exec(this.ctx).should.be.empty();
    this.dayPrecPerSecond.exec(this.ctx).should.be.empty();
    this.dayPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands a month precision datetime', function () {
    // define MonthPrecPerYear: expand { Interval[DateTime(2016,01), DateTime(2018,01)] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.monthPrecPerYear.exec(this.ctx)).should.equal(e);

    // define MonthPrecPerMonth: expand { Interval[DateTime(2018,01), DateTime(2018,02)] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02] }';
    prettyList(this.monthPrecPerMonth.exec(this.ctx)).should.equal(e);

    this.monthPrecPerWeek.exec(this.ctx).should.be.empty();
    this.monthPrecPerDay.exec(this.ctx).should.be.empty();
    this.monthPrecPerHour.exec(this.ctx).should.be.empty();
    this.monthPrecPerMinute.exec(this.ctx).should.be.empty();
    this.monthPrecPerSecond.exec(this.ctx).should.be.empty();
    this.monthPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands a year precision datetime', function () {
    // define YearPrecPerYear: expand { Interval[DateTime(2016), DateTime(2018)] } per year
    const e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(this.yearPrecPerYear.exec(this.ctx)).should.equal(e);

    this.yearPrecPerMonth.exec(this.ctx).should.be.empty();
    this.yearPrecPerWeek.exec(this.ctx).should.be.empty();
    this.yearPrecPerDay.exec(this.ctx).should.be.empty();
    this.yearPrecPerHour.exec(this.ctx).should.be.empty();
    this.yearPrecPerMinute.exec(this.ctx).should.be.empty();
    this.yearPrecPerSecond.exec(this.ctx).should.be.empty();
    this.yearPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('ignores null item in list', function () {
    // define NullInList: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T01+00:00], null } per hour
    const a = this.nullInList.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01T01+00:00, 2018-01-01T01+00:00] }');
  });

  it('expands two overlapping intervals', function () {
    // define Overlapping: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T03+00:00], Interval[@2018-01-01T02+00:00, @2018-01-01T04+00:00] } per hour
    const a = this.overlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00], [2018-01-01T04+00:00, 2018-01-01T04+00:00] }'
    );
  });

  it('expands two non overlapping intervals', function () {
    // define NonOverlapping: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T02+00:00], Interval[@2018-01-01T05+00:00, @2018-01-01T05+00:00] } per hour
    const a = this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T05+00:00, 2018-01-01T05+00:00] }'
    );
  });

  it('expands an interval with default per', function () {
    // # define NoPerDefaultMS: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:00.001+00:00] }
    let a = this.noPerDefaultMS.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.000+00:00], [2018-01-01T01:00:00.001+00:00, 2018-01-01T01:00:00.001+00:00] }'
    );

    // # define NoPerDefaultSec: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:00:01+00:00] }
    a = this.noPerDefaultSec.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00] }'
    );

    // # define NoPerDefaultMin: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T01:01+00:00] }
    a = this.noPerDefaultMin.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00] }'
    );

    // define NoPerDefaultHour: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T01+00:00] }
    a = this.noPerDefaultHour.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01T01+00:00, 2018-01-01T01+00:00] }');

    // define NoPerDefaultDay: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,01)] }
    a = this.noPerDefaultDay.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01, 2018-01-01] }');

    // define NoPerDefaultMonth: expand { Interval[DateTime(2018,01), DateTime(2018,01)]  }
    a = this.noPerDefaultMonth.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01, 2018-01] }');

    // define NoPerDefaultYear: expand { Interval[DateTime(2018), DateTime(2018)]  }
    a = this.noPerDefaultYear.exec(this.ctx);
    prettyList(a).should.equal('{ [2018, 2018] }');
  });

  it('expands interval with open ends', function () {
    // define OpenStart: expand { Interval(@2018-01-01T01+00:00, @2018-01-03T01+00:00] } per day
    let a = this.openStart.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );

    // define OpenEnd: expand { Interval[@2018-01-01T01+00:00, @2018-01-03T01+00:00) } per day
    a = this.openEnd.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );

    // define OpenBoth: expand { Interval(@2018-01-01T01+00:00, @2018-01-03T01+00:00) } per day
    a = this.openBoth.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );
  });

  it('handles ends with mismatched precision', function () {
    // define MismatchPrecision: expand { Interval[@2012-01-01T12:00+00:00, @2012-01-02T12:00:00+00:00] } per day
    let e = '{ [2012-01-01, 2012-01-01], [2012-01-02, 2012-01-02] }';
    prettyList(this.mismatchPrecision.exec(this.ctx)).should.equal(e);

    // define MismatchPrecisionResultLongerThanInput: expand { Interval[@2012-01-01T13:00:00+00:00, @2012-01-02T12:59+00:00] } per day
    e = '{ [2012-01-01, 2012-01-01], [2012-01-02, 2012-01-02] }';
    prettyList(this.mismatchPrecisionResultLongerThanInput.exec(this.ctx)).should.equal(e);
  });

  it('returns an empty list if we get an empty list', function () {
    // define EmptyList: List<Interval<Date>>{}
    const a = this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', function () {
    // define NullOpen: expand { Interval[null, @2018-01-03T01+00:00] } per day
    let a = this.nullOpen.exec(this.ctx);
    should.not.exist(a);

    // define NullClose: expand { Interval[@2018-01-01T01+00:00, null] } per day
    a = this.nullClose.exec(this.ctx);
    should.not.exist(a);

    // define NullBoth: expand { Interval[null, null] } per day
    a = this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable', function () {
    // define BadPerGram: expand { Interval[@2018-01-01T01+00:00, @2018-01-04T01+00:00] } per 1 'g'
    const a = this.badPerGram.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('TimeIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands a millisecond precision time', function () {
    // define MsPrecPerHour: expand { Interval[@T01:00:00.000, @T03:00:00.000] } per hour
    let e = '{ [01, 01], [02, 02], [03, 03] }';
    prettyList(this.msPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMinute: expand { Interval[@T01:00:00.000, @T01:02:00.000] } per minute
    e = '{ [01:00, 01:00], [01:01, 01:01], [01:02, 01:02] }';
    prettyList(this.msPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define MsPrecPerSecond: expand { Interval[@T01:00:00.000, @T01:00:02.000] } per second
    e = '{ [01:00:00, 01:00:00], [01:00:01, 01:00:01], [01:00:02, 01:00:02] }';
    prettyList(this.msPrecPerSecond.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMillisecond: expand { Interval[@T01:00:00.000, @T01:00:00.001] } per millisecond
    e = '{ [01:00:00.000, 01:00:00.000], [01:00:00.001, 01:00:00.001] }';
    prettyList(this.msPrecPerMillisecond.exec(this.ctx)).should.equal(e);
  });

  it('expands a second precision datetime', function () {
    // define SecPrecPerHour: expand { Interval[@T01:00:00, @T03:00:00] } per hour
    let e = '{ [01, 01], [02, 02], [03, 03] }';
    prettyList(this.secPrecPerHour.exec(this.ctx)).should.equal(e);

    // define SecPrecPerMinute: expand { Interval[@T01:00:00, @T01:02:00] } per minute
    e = '{ [01:00, 01:00], [01:01, 01:01], [01:02, 01:02] }';
    prettyList(this.secPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define SecPrecPerSecond: expand { Interval[@T01:00:00, @T01:00:01] } per second
    e = '{ [01:00:00, 01:00:00], [01:00:01, 01:00:01] }';
    prettyList(this.secPrecPerSecond.exec(this.ctx)).should.equal(e);

    this.secPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands a minute precision datetime', function () {
    // define MinPrecPerHour: expand { Interval[@T01:00, @T03:00] } per hour
    let e = '{ [01, 01], [02, 02], [03, 03] }';
    prettyList(this.minPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MinPrecPerMinute: expand { Interval[@T01:00, @T01:01] } per minute
    e = '{ [01:00, 01:00], [01:01, 01:01] }';
    prettyList(this.minPrecPerMinute.exec(this.ctx)).should.equal(e);

    this.minPrecPerSecond.exec(this.ctx).should.be.empty();
    this.minPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });

  it('expands an hour precision datetime', function () {
    // define HourPrecPerHour: expand { Interval[@T01, @T02] } per hour
    const e = '{ [01, 01], [02, 02] }';
    prettyList(this.hourPrecPerHour.exec(this.ctx)).should.equal(e);

    this.hourPrecPerMinute.exec(this.ctx).should.be.empty();
    this.hourPrecPerSecond.exec(this.ctx).should.be.empty();
    this.hourPrecPerMillisecond.exec(this.ctx).should.be.empty();
  });
});

describe('QuantityIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands single intervals', function () {
    // define ClosedSingleGPerG: expand { Interval[2 'g', 4 'g'] } per 1 'g'
    let a = this.closedSingleGPerG.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define ClosedSingleGPerGDecimal: expand { Interval[2.1 'g', 4.1 'g'] } per 1 'g'
    a = this.closedSingleGPerGDecimal.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define ClosedSingleGPerMG: expand { Interval[2 'g', 2.003 'g'] } per 1 'mg'
    a = this.closedSingleGPerMG.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2000 'mg', 2000 'mg'], [2001 'mg', 2001 'mg'], [2002 'mg', 2002 'mg'], [2003 'mg', 2003 'mg'] }"
    );

    // define ClosedSingleMGPerGTrunc: expand { Interval[2999 'mg', 4200 'mg'] } per 1 'g'
    a = this.closedSingleMGPerGTrunc.exec(this.ctx);
    prettyList(a).should.equal("{ [2999 'mg', 3998 'mg'] }");

    // define ClosedSingleMGPerMGTrunc: expand { Interval[2000 'mg', 4500 'mg'] } per 800 'mg'
    a = this.closedSingleMGPerMGTrunc.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2000 'mg', 2799 'mg'], [2800 'mg', 3599 'mg'], [3600 'mg', 4399 'mg'] }"
    );

    // define ClosedSingleMGPerMGDecimal: expand { Interval[2000.01 'mg', 4500 'mg'] } per 800 'mg'
    a = this.closedSingleMGPerMGDecimal.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2000 'mg', 2799 'mg'], [2800 'mg', 3599 'mg'], [3600 'mg', 4399 'mg'] }"
    );
  });

  it('expands lists of multiple intervals', function () {
    // define NullInList: expand { Interval[2 'g', 4 'g'], null } per 1 'g'
    let a = this.nullInList.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define Overlapping: expand { Interval[2 'g', 4 'g'], Interval[3 'g', 5 'g'] } per 1 'g'
    a = this.overlapping.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'], [5 'g', 5 'g'] }"
    );

    // define NonOverlapping: expand { Interval[2 'g', 4 'g'], Interval[6 'g', 6 'g'] } per 1 'g'
    a = this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'], [6 'g', 6 'g'] }"
    );
  });

  it('expands interval using the first items units if no per provided', function () {
    // define NoPerDefaultM: expand { Interval[2 'm', 400 'cm'] }
    let a = this.noPerDefaultM.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'm', 2 'm'], [3 'm', 3 'm'], [4 'm', 4 'm'] }");

    // define NoPerDefaultG: expand { Interval[2 'g', 4 'g'] }
    a = this.noPerDefaultG.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");
  });

  it('expands interval with open ends', function () {
    // define OpenStart: expand { Interval(2 'g', 4 'g'] } per 1 'g'
    let a = this.openStart.exec(this.ctx);
    prettyList(a).should.equal("{ [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define OpenEnd: expand { Interval[2 'g', 4 'g') } per 1 'g'
    a = this.openEnd.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'] }");

    // define OpenBoth: expand { Interval(2 'g', 4 'g') } per 1 'g'
    a = this.openBoth.exec(this.ctx);
    prettyList(a).should.equal("{ [3 'g', 3 'g'] }");

    // define OpenBothDecimal: expand { Interval(2.1 'g', 4.1 'g') } per 1 'g'
    a = this.openBothDecimal.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define OpenBothDecimalTrunc: expand { Interval(2.1 'g', 4.101 'g') } per 1 'g'
    a = this.openBothDecimalTrunc.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");
  });

  it('returns an empty list if we get an empty list or if there are no results', function () {
    // define EmptyList: List<Interval<Date>>{}
    let a = this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);

    // define PerTooBig: expand { Interval[2 'g', 4 'g'], null } per 5 'g'
    a = this.perTooBig.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', function () {
    // define NullClose: expand { Interval[2 'g', null] } per 1 'g'
    let a = this.nullClose.exec(this.ctx);
    should.not.exist(a);
    // define NullOpen: expand { Interval[null, 4 'g'] } per 1 'g'
    a = this.nullOpen.exec(this.ctx);
    should.not.exist(a);
    // define NullBoth: expand { Interval[null, null] } per 1 'g'
    a = this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable or mismatch interval', function () {
    // define BadPerMinute: expand { Interval(2 'g', 4 'g'] } per 1 minute
    let a = this.badPerMinute.exec(this.ctx);
    should.not.exist(a);

    // define BadPerGram: expand { Interval(2 'km', 4 'km'] }  per 1 'g'
    a = this.badPerGram.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('IntegerIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands single intervals', function () {
    // define ClosedSinglePer1: expand { Interval[2, 4] } per 1 '1'
    let a = this.closedSinglePer1.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');

    // define ClosedSinglePer3: expand { Interval[2, 10] } per 3 '1'
    a = this.closedSinglePer3.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 4], [5, 7], [8, 10] }');

    // define ClosedSinglePer3NoteTheWidth: expand { Interval[2, 4] } per 3 '1'
    a = this.closedSinglePer3NoteTheWidth.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 4] }');
  });

  it('expands lists of multiple intervals', function () {
    // define NullInList: expand { Interval[2, 4], null } per 1 '1'
    let a = this.nullInList.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');

    // define Overlapping: expand { Interval[2, 4], Interval[3, 5] } per 1 '1'
    a = this.overlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4], [5, 5] }');

    // define NonOverlapping: expand { Interval[2, 4], Interval[6, 6] } per 1 '1'
    a = this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4], [6, 6] }');
  });

  it('expands interval using default per of 1', function () {
    // define NoPer: expand { Interval[2, 4] }
    const a = this.noPer.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');
  });

  it('expands interval with open ends', function () {
    // define OpenStart: expand { Interval(2, 4] } per 1 '1'
    let a = this.openStart.exec(this.ctx);
    prettyList(a).should.equal('{ [3, 3], [4, 4] }');

    // define OpenEnd: expand { Interval[2, 4) } per 1 '1'
    a = this.openEnd.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3] }');

    // define OpenBoth: expand { Interval(2, 4) } per 1 '1'
    a = this.openBoth.exec(this.ctx);
    prettyList(a).should.equal('{ [3, 3] }');
  });

  it('returns an empty list if we get an empty list or if there are no results', function () {
    // define EmptyList: List<Interval<Integer>>{}
    let a = this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);

    // define PerTooBig: expand { Interval[2, 4], null } per 5 '1'
    a = this.perTooBig.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', function () {
    // define NullClose: expand { Interval[2, null] } per 1 '1'
    let a = this.nullClose.exec(this.ctx);
    should.not.exist(a);
    // define NullOpen: expand { Interval[null, 4] } per 1 '1'
    a = this.nullOpen.exec(this.ctx);
    should.not.exist(a);
    // define NullBoth: expand { Interval[null, null] } per 1 '1'
    a = this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable or mismatch interval', function () {
    // define BadPerMinute: expand { Interval(2, 4] } per 1 minute
    const a = this.badPerMinute.exec(this.ctx);
    should.not.exist(a);
  });

  it('produces a more precise value for output intervals', function () {
    // define PerDecimalMorePrecise: expand { Interval[10, 10] } per 0.1
    const a = this.perDecimalMorePrecise.exec(this.ctx);
    // JavaScript truncates 10.0 to 10.
    prettyList(a).should.equal(
      '{ [10, 10.09999999], [10.1, 10.19999999], [10.2, 10.29999999], [10.3, 10.39999999], [10.4, 10.49999999], [10.5, 10.59999999], [10.6, 10.69999999], [10.7, 10.79999999], [10.8, 10.89999999], [10.9, 10.99999999] }'
    );
  });
});

describe('DecimalIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands single intervals', function () {
    // define ClosedSingle: expand { Interval[2, 5] } per 1.5 '1'
    let a = this.closedSingle.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [3.5, 4.99999999] }');

    // define ClosedSingle1: expand { Interval[2.5, 10] } per 2 '1'
    a = this.closedSingle1.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3], [4, 5], [6, 7], [8, 9] }');

    // define ClosedSingle2: expand { Interval[2, 4.5] } per 0.5 '1'
    a = this.closedSingle2.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2, 2.49999999], [2.5, 2.99999999], [3, 3.49999999], [3.5, 3.99999999], [4, 4.49999999] }'
    );
  });

  it('expands lists of multiple intervals', function () {
    // define NullInList: expand { Interval[2, 5], null } per 1.5 '1'
    let a = this.nullInList.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [3.5, 4.99999999] }');

    // define Overlapping: expand { Interval[2, 5], Interval[4, 7] } per 1.5 '1'
    a = this.overlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [3.5, 4.99999999], [5, 6.49999999] }');

    // define NonOverlapping: expand { Interval[2, 4], Interval[6, 8] } per 1.5 '1'
    a = this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [6, 7.49999999] }');
  });

  it('expands interval using default per of 1', function () {
    // define NoPer: expand { Interval[2.5, 4.5] }
    const a = this.noPer.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');
  });

  it('expands interval with open ends', function () {
    // define OpenStart: expand { Interval(2, 5] } per 1.5 '1'
    let a = this.openStart.exec(this.ctx);
    prettyList(a).should.equal('{ [3, 4.49999999] }');

    // define OpenEnd: expand { Interval[2, 5) } per 1.5 '1'
    a = this.openEnd.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999] }');

    // define OpenBoth: expand { Interval(2, 5) } per 1.5 '1'
    this.openBoth.exec(this.ctx).should.be.empty();
  });

  it('returns an empty list if we get an empty list', function () {
    // define EmptyList: List<Interval<Decimal>>{}
    const a = this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.should.be.empty();
  });

  it('returns an empty list if we get an interval with a null boundary', function () {
    // define PerTooBig: expand { Interval[2, 4], null } per 5.5 '1'
    const a = this.perTooBig.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.should.be.empty();
  });

  it('returns null with open ended intervals', function () {
    // define NullClose: expand { Interval[2, null] } per 1.5 '1'
    let a = this.nullClose.exec(this.ctx);
    should.not.exist(a);
    // define NullOpen: expand { Interval[null, 4] } per 1.5 '1'
    a = this.nullOpen.exec(this.ctx);
    should.not.exist(a);
    // define NullBoth: expand { Interval[null, null] } per 1.5 '1'
    a = this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable or mismatch interval', function () {
    // define BadPerMinute: expand { Interval(2.1, 4.1] } per 0.5 minute
    const a = this.badPerMinute.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('SameAs', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('returns true when both intervals values are null and closed', function () {
    // define NullBoth: Interval[null,null] same as Interval[null,null]
    this.nullBoth.exec(this.ctx).should.be.true();
  });

  it('returns false when one intervals low and high are null', function () {
    // define NullOne: Interval[DateTime(2018,01,01), DateTime(2018,02,02)] same as Interval[null,null]
    this.nullOne.exec(this.ctx).should.be.false();
  });

  it('returns true when both intervals are the same', function () {
    // define Equal: Interval[DateTime(2018,01,01), DateTime(2018,01,01)] same as Interval[DateTime(2018,01,01), DateTime(2018,01,01)]
    this.equal.exec(this.ctx).should.be.true();
  });

  it('returns false when both intervals are not the same', function () {
    // define NotEqual: Interval[DateTime(2018,01,01), DateTime(2018,01,01)] same as Interval[DateTime(2018,02,01), DateTime(2018,05,01)]
    this.notEqual.exec(this.ctx).should.be.false();
  });

  it('returns null when comparing date and datetime because precision is changed when converting date to datetime', function () {
    // define DateTimeAndDateComparisonEqual: Interval[DateTime(2018,01,01), DateTime(2018,01,01)] same as Interval[Date(2018,01,01), Date(2018,01,01)]
    const a = this.dateTimeAndDateComparisonEqual.exec(this.ctx);
    should(a).be.null();
  });

  it('returns null when both intervals are null', function () {
    // define NullIntervals: (null as Interval<DateTime>) same as (null as Interval<DateTime>)
    const a = this.nullIntervals.exec(this.ctx);
    should(a).be.null();
  });

  it('returns true when comparing a closed interval and open interval after it is converted', function () {
    // define OpenAndClosed: Interval[DateTime(2018,01,01,00,00,00,0), DateTime(2019,01,01,00,00,00,0)) same as Interval[DateTime(2018,01,01,00,00,00,0), DateTime(2018,12,31,23,59,59,999)]
    this.openAndClosed.exec(this.ctx).should.be.true();
  });

  it('returns true when both intervals are open ended', function () {
    // define OpenEnded: Interval[DateTime(2018,01,01), null] same day as Interval[DateTime(2018,01,01), null]
    this.openEnded.exec(this.ctx).should.be.true();
  });

  it('returns false when the first interval is open ended and the second is not', function () {
    // define OpenEndedNotSame: Interval[DateTime(2018,01,01), null] same day as Interval[DateTime(2018,01,01), DateTime(2019,01,01)]
    this.openEndedNotSame.exec(this.ctx).should.be.false();
  });

  it('returns false when the second interval is open and the first is not', function () {
    // define OpenEndedNotSame2: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same day as Interval[DateTime(2018,01,01), null]
    this.openEndedNotSame2.exec(this.ctx).should.be.false();
  });

  it('returns true when both intervals start at null and end at the same time', function () {
    // define OpenBeginningSame: Interval[null,DateTime(2018,01,01)] same as Interval[null,DateTime(2018,01,01)]
    this.openBeginningSame.exec(this.ctx).should.be.true();
  });

  it('returns false when one interval starts at null and the other does not', function () {
    // define OpenBeginningNotSame: Interval[DateTime(2017,01,01),DateTime(2018,01,01)] same as Interval[null,DateTime(2018,01,01)]
    this.openBeginningNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when comparing a closed interval of Dates to an open interval after it is converted', function () {
    // define DateOpenAndClosed: Interval[Date(2018,01,01), Date(2018,02,02)] same as Interval[Date(2018,01,01), Date(2018,02,03))
    this.dateOpenAndClosed.exec(this.ctx).should.be.true();
  });

  it('returns true when both Date intervals are open ended', function () {
    // define DateOpenEnded: Interval[Date(2018,01,01), null] same as Interval[Date(2018,01,01), null)]
    this.dateOpenEnded.exec(this.ctx).should.be.true();
  });

  it('returns true when comparing a closed interval of Times to an open interval after it is converted', function () {
    // define TimeOpenAndClosed: Interval[Time(01,01), Time(02,02)] same as Interval[Time(01,01), Time(02,03))
    this.timeOpenAndClosed.exec(this.ctx).should.be.true();
  });

  it('returns true when both Time intervals are open ended', function () {
    // define TimeOpenEnded: Interval[Time(01,01), null] same as Interval[Time(01,01), null)]
    this.timeOpenEnded.exec(this.ctx).should.be.true();
  });

  it('returns true when both Date intervals are the same', function () {
    // define DateIntervalComparisonSame: Interval[Date(2018,01,01), Date(2018,02,02)] same as Interval[Date(2018,01,01), Date(2018,02,02)]
    this.dateIntervalComparisonSame.exec(this.ctx).should.be.true();
  });

  it('returns false when Date intervals are not the same', function () {
    // define DateIntervalComparisonNotSame: Interval[Date(2018,01,01), Date(2018,02,02)] same as Interval[Date(2018,01,01), Date(2018,02,01)]
    this.dateIntervalComparisonNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when both Time intervals are the same', function () {
    // define TimeIntervalComparisonSame: Interval[Time(01,01), Time(02,02)] same as Interval[Time(01,01), Time(02,02)]
    this.timeIntervalComparisonSame.exec(this.ctx).should.be.true();
  });

  it('returns false when Time intervals are not the same', function () {
    // define TimeIntervalComparisonNotSame: Interval[Time(01,01), Time(02,02)] same as Interval[Time(01,01), Time(08,01)]
    this.timeIntervalComparisonNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the year precision', function () {
    // define DateTimeYearPrecisionSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same year as Interval[DateTime(2018,02,01), DateTime(2019,05,01)]
    this.dateTimeYearPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested year precision', function () {
    // define DateTimeYearPrecisionNotSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same year as Interval[DateTime(2018,02,01), DateTime(2020,05,01)]
    this.dateTimeYearPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the year precision', function () {
    // define DateYearPrecisionSame: Interval[Date(2018,01,01), Date(2019,01,01)] same year as Interval[Date(2018,02,01), Date(2019,05,01)]
    this.dateYearPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested year precision', function () {
    // define DateYearPrecisionNotSame: Interval[Date(2018,01,01), Date(2019,01,01)] same year as Interval[Date(2018,02,01), Date(2020,05,01)]
    this.dateYearPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the month precision', function () {
    // define DateTimeMonthPrecisionSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same month as Interval[DateTime(2018,01,01), DateTime(2019,01,03)]
    this.dateTimeMonthPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested month precision', function () {
    // define DateTimeMonthPrecisionNotSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same month as Interval[DateTime(2018,02,01), DateTime(2019,01,01)]
    this.dateTimeMonthPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the day precision', function () {
    // define DateTimeDayPrecisionSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same day as Interval[DateTime(2018,01,01,05), DateTime(2019,01,01,09)]
    this.dateTimeDayPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested day precision', function () {
    // define DateTimeDayPrecisionNotSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same day as Interval[DateTime(2018,01,01), DateTime(2019,01,02,06)]
    this.dateTimeDayPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the hour precision', function () {
    // define DateTimeHourPrecisionSame: Interval[DateTime(2018,01,01,01), DateTime(2019,01,01,01)] same hour as Interval[DateTime(2018,01,01,01), DateTime(2019,01,01,01,05)]
    this.dateTimeHourPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested hour precision', function () {
    // define DateTimeHourPrecisionNotSame: Interval[DateTime(2018,01,01,01), DateTime(2019,01,01,01)] same hour as Interval[DateTime(2018,01,01,06), DateTime(2019,01,01,01)]
    this.dateTimeHourPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the minute precision', function () {
    // define DateTimeMinutePrecisionSame: Interval[DateTime(2018,01,01,01,01), DateTime(2019,01,01,01,01)] same minute as Interval[DateTime(2018,01,01,01,01,09), DateTime(2019,01,01,01,01,06)]
    this.dateTimeMinutePrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested minute precision', function () {
    // define DateTimeMinutePrecisionNotSame: Interval[DateTime(2018,01,01,01,01), DateTime(2019,01,01,01,01)] same minute as Interval[DateTime(2018,01,01,06,03), DateTime(2019,01,01,01,06)]
    this.dateTimeMinutePrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the second precision', function () {
    // define DateTimeSecondPrecisionSame: Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,01,01)] same second as Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,01,01,07)]
    this.dateTimeSecondPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested second precision', function () {
    // define DateTimeSecondPrecisionNotSame: Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,01,01)] same second as Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,07,55)]
    this.dateTimeSecondPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when DateTime intervals are same on the millisecond precision', function () {
    // define DateTimeMillisecondPrecisionSame: Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,01)] same millisecond as Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,01)]
    this.dateTimeMillisecondPrecisionSame.exec(this.ctx).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested millisecond precision', function () {
    // define DateTimeMillisecondPrecisionNotSame: Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,01)] same millisecond as Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,09)]
    this.dateTimeMillisecondPrecisionNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when integer interval is the same', function () {
    // define IntegerIntervalSame: Interval[2,5] same as Interval[2,5]
    this.integerIntervalSame.exec(this.ctx).should.be.true();
  });

  it('returns false when integer interval is not the same', function () {
    // define IntegerIntervalNotSame: Interval[2,5] same as Interval[2,4]
    this.integerIntervalNotSame.exec(this.ctx).should.be.false();
  });

  it('returns true when integer interval is same after the open interval is closed', function () {
    // define IntegerIntervalSameOpen: Interval[2,5] same as Interval[2,6)
    this.integerIntervalSameOpen.exec(this.ctx).should.be.true();
  });

  it('returns false even with an open ended null because the lows are not null and not same', function () {
    // define OpenNullHighLowDifferent: Interval(3,null) same as Interval(2,4)
    this.openNullHighLowDifferent.exec(this.ctx).should.be.false();
  });

  it('returns false even with an open ended null because the highs are not null and not same', function () {
    // define OpenNullLowHighDifferent: Interval(1,5) same as Interval(null,4)
    this.openNullLowHighDifferent.exec(this.ctx).should.be.false();
  });

  it('returns null if lows are same and highs have an open null', function () {
    // OpenNullHighLowSame: Interval(2,null) same as Interval(2,4)
    should(this.openNullHighLowSame.exec(this.ctx)).be.null();
  });

  it('returns null if lows have an open null and highs are same', function () {
    // OpenNullLowHighSame: Interval(1,4) same as Interval(null,4)
    should(this.openNullLowHighSame.exec(this.ctx)).be.null();
  });

  it('returns null if both lows and highs have open null', function () {
    // OpenNullLowOpenNullHigh: Interval(1,null) same as Interval(null,4)
    should(this.openNullLowOpenNullHigh.exec(this.ctx)).be.null();
  });

  it('returns false if lows are different and highs have open null', function () {
    // OpenNullHighsLowsDifferent: Interval(1,null) same as Interval(2,null)
    this.openNullHighsLowsDifferent.exec(this.ctx).should.be.false();
  });

  it('returns null if lows are same and highs have open null', function () {
    // OpenNullHighsLowsSame: Interval(1,null) same as Interval(1,null)
    should(this.openNullHighsLowsSame.exec(this.ctx)).be.null();
  });

  it('returns null if lows have open null and highs are same', function () {
    // OpenNullLowsHighsSame: Interval(null,3) same as Interval(null,3)
    should(this.openNullLowsHighsSame.exec(this.ctx)).be.null();
  });
});
