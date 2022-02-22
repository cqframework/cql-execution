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

  it('should properly represent an open interval', async function () {
    this.open.lowClosed.should.be.false();
    this.open.highClosed.should.be.false();
    (await this.open.low.exec(this.ctx)).should.eql(new DateTime(2012, 1, 1));
    (await this.open.high.exec(this.ctx)).should.eql(new DateTime(2013, 1, 1));
  });

  it('should properly represent a left-open interval', async function () {
    this.leftOpen.lowClosed.should.be.false();
    this.leftOpen.highClosed.should.be.true();
    (await this.leftOpen.low.exec(this.ctx)).should.eql(new DateTime(2012, 1, 1));
    (await this.leftOpen.high.exec(this.ctx)).should.eql(new DateTime(2013, 1, 1));
  });

  it('should properly represent a right-open interval', async function () {
    this.rightOpen.lowClosed.should.be.true();
    this.rightOpen.highClosed.should.be.false();
    (await this.rightOpen.low.exec(this.ctx)).should.eql(new DateTime(2012, 1, 1));
    (await this.rightOpen.high.exec(this.ctx)).should.eql(new DateTime(2013, 1, 1));
  });

  it('should properly represent a closed interval', async function () {
    this.closed.lowClosed.should.be.true();
    this.closed.highClosed.should.be.true();
    (await this.closed.low.exec(this.ctx)).should.eql(new DateTime(2012, 1, 1));
    (await this.closed.high.exec(this.ctx)).should.eql(new DateTime(2013, 1, 1));
  });

  it('should exec to native Interval datatype', async function () {
    const ivl = await this.open.exec(this.ctx);
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

  it('should determine equal integer intervals', async function () {
    (await this.equalClosed.exec(this.ctx)).should.be.true();
    (await this.equalOpen.exec(this.ctx)).should.be.true();
    (await this.equalOpenClosed.exec(this.ctx)).should.be.true();
  });

  it('should determine unequal integer intervals', async function () {
    (await this.unequalClosed.exec(this.ctx)).should.be.false();
    (await this.unequalOpen.exec(this.ctx)).should.be.false();
    (await this.unequalClosedOpen.exec(this.ctx)).should.be.false();
  });

  it('should determine equal quantity intervals', async function () {
    (await this.equalQuantityClosed.exec(this.ctx)).should.be.true();
    (await this.equalQuantityOpen.exec(this.ctx)).should.be.true();
    (await this.equalQuantityOpenClosed.exec(this.ctx)).should.be.true();
  });

  it('should determine unequal quantity intervals', async function () {
    (await this.unequalQuantityClosed.exec(this.ctx)).should.be.false();
    (await this.unequalQuantityOpen.exec(this.ctx)).should.be.false();
    (await this.unequalQuantityClosedOpen.exec(this.ctx)).should.be.false();
  });

  it('should determine equal datetime intervals', async function () {
    (await this.equalDates.exec(this.ctx)).should.be.true();
    (await this.equalDatesOpenClosed.exec(this.ctx)).should.be.true();
  });

  it('should operate correctly with imprecision', async function () {
    (await this.sameDays.exec(this.ctx)).should.be.true();
    (await this.differentDays.exec(this.ctx)).should.be.false();
    should(await this.differingPrecision.exec(this.ctx)).be.null();
  });
});

describe('NotEqual', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should determine equal integer intervals', async function () {
    (await this.equalClosed.exec(this.ctx)).should.be.false();
    (await this.equalOpen.exec(this.ctx)).should.be.false();
    (await this.equalOpenClosed.exec(this.ctx)).should.be.false();
  });

  it('should determine unequal integer intervals', async function () {
    (await this.unequalClosed.exec(this.ctx)).should.be.true();
    (await this.unequalOpen.exec(this.ctx)).should.be.true();
    (await this.unequalClosedOpen.exec(this.ctx)).should.be.true();
  });

  it('should determine equal quantity intervals', async function () {
    (await this.equalQuantityClosed.exec(this.ctx)).should.be.false();
    (await this.equalQuantityOpen.exec(this.ctx)).should.be.false();
    (await this.equalQuantityOpenClosed.exec(this.ctx)).should.be.false();
  });

  it('should determine unequal quantity intervals', async function () {
    (await this.unequalQuantityClosed.exec(this.ctx)).should.be.true();
    (await this.unequalQuantityOpen.exec(this.ctx)).should.be.true();
    (await this.unequalQuantityClosedOpen.exec(this.ctx)).should.be.true();
  });

  it('should determine equal datetime intervals', async function () {
    (await this.equalDates.exec(this.ctx)).should.be.false();
    (await this.equalDatesOpenClosed.exec(this.ctx)).should.be.false();
  });

  it('should operate correctly with imprecision', async function () {
    (await this.sameDays.exec(this.ctx)).should.be.false();
    (await this.differentDays.exec(this.ctx)).should.be.true();
    should(await this.differingPrecision.exec(this.ctx)).be.null();
  });
});

describe('Contains', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept contained items', async function () {
    (await this.containsInt.exec(this.ctx)).should.be.true();
    (await this.containsReal.exec(this.ctx)).should.be.true();
    (await this.containsQuantity.exec(this.ctx)).should.be.true();
    (await this.containsQuantityInclusiveEdge.exec(this.ctx)).should.be.true();
    (await this.containsDate.exec(this.ctx)).should.be.true();
  });

  it('should reject uncontained items', async function () {
    (await this.notContainsInt.exec(this.ctx)).should.be.false();
    (await this.notContainsReal.exec(this.ctx)).should.be.false();
    (await this.notContainsQuantity.exec(this.ctx)).should.be.false();
    (await this.notContainsQuantityExclusiveEdge.exec(this.ctx)).should.be.false();
    (await this.notContainsDate.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegContainsInt.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotContainsInt.exec(this.ctx)).should.be.false();
    (await this.unknownOpenBegContainsInt.exec(this.ctx)).should.be.true();
    (await this.unknownClosedBegContainsInt.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayContainInt.exec(this.ctx)).be.null();
    (await this.unknownBegNotContainsInt.exec(this.ctx)).should.be.false();
    (await this.posInfEndContainsInt.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotContainsInt.exec(this.ctx)).should.be.false();
    (await this.unknownOpenEndContainsInt.exec(this.ctx)).should.be.true();
    (await this.unknownClosedEndContainsInt.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayContainInt.exec(this.ctx)).be.null();
    (await this.unknownEndNotContainsInt.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegContainsDate.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotContainsDate.exec(this.ctx)).should.be.false();
    should(await this.unknownOpenBegMayContainDate.exec(this.ctx)).be.null();
    (await this.unknownClosedBegContainsDate.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayContainDate.exec(this.ctx)).be.null();
    (await this.unknownBegNotContainsDate.exec(this.ctx)).should.be.false();
    (await this.posInfEndContainsDate.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotContainsDate.exec(this.ctx)).should.be.false();
    (await this.unknownOpenEndContainsDate.exec(this.ctx)).should.be.true();
    (await this.unknownClosedEndContainsDate.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayContainDate.exec(this.ctx)).be.null();
    (await this.unknownEndNotContainsDate.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.containsImpreciseDate.exec(this.ctx)).should.be.true();
    (await this.notContainsImpreciseDate.exec(this.ctx)).should.be.false();
    should(await this.mayContainImpreciseDate.exec(this.ctx)).be.null();
    (await this.impreciseContainsDate.exec(this.ctx)).should.be.true();
    (await this.impreciseNotContainsDate.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayContainDate.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.containsDayOfDateLowEdge.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateHighEdgeOpen.exec(this.ctx)).should.be.false();
    (await this.containsDayOfDateHighEdgeClosed.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateLowEdge.exec(this.ctx)).should.be.false();
    (await this.notContainsDayOfDateBeyondHighEdge.exec(this.ctx)).should.be.false();
    (await this.containsDayOfDateImpreciseLowEdge.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateImpreciseHighEdgeOpen.exec(this.ctx)).should.be.false();
    (await this.containsDayOfDateImpreciseHighEdgeClosed.exec(this.ctx)).should.be.true();
    (await this.containsDayOfDateVeryImpreciseMiddle.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateVeryImpreciseLow.exec(this.ctx)).should.be.false();
    (await this.notContainsDayOfDateVeryImpreciseHighEdgeOpen.exec(this.ctx)).should.be.false();
    should(await this.mayContainDayOfDateVeryImpreciseLow.exec(this.ctx)).be.null();
    should(await this.mayContainDayOfDateVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(await this.mayContainDayOfDateVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('In', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept contained items', async function () {
    (await this.containsInt.exec(this.ctx)).should.be.true();
    (await this.containsReal.exec(this.ctx)).should.be.true();
    (await this.containsQuantity.exec(this.ctx)).should.be.true();
    (await this.containsQuantityInclusiveEdge.exec(this.ctx)).should.be.true();
    (await this.containsDate.exec(this.ctx)).should.be.true();
  });

  it('should reject uncontained items', async function () {
    (await this.notContainsInt.exec(this.ctx)).should.be.false();
    (await this.notContainsReal.exec(this.ctx)).should.be.false();
    (await this.notContainsQuantity.exec(this.ctx)).should.be.false();
    (await this.notContainsQuantityExclusiveEdge.exec(this.ctx)).should.be.false();
    (await this.notContainsDate.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegContainsInt.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotContainsInt.exec(this.ctx)).should.be.false();
    (await this.unknownOpenBegContainsInt.exec(this.ctx)).should.be.true();
    (await this.unknownClosedBegContainsInt.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayContainInt.exec(this.ctx)).be.null();
    (await this.unknownBegNotContainsInt.exec(this.ctx)).should.be.false();
    (await this.posInfEndContainsInt.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotContainsInt.exec(this.ctx)).should.be.false();
    (await this.unknownOpenEndContainsInt.exec(this.ctx)).should.be.true();
    (await this.unknownClosedEndContainsInt.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayContainInt.exec(this.ctx)).be.null();
    (await this.unknownEndNotContainsInt.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegContainsDate.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotContainsDate.exec(this.ctx)).should.be.false();
    should(await this.unknownOpenBegMayContainDate.exec(this.ctx)).be.null();
    (await this.unknownClosedBegContainsDate.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayContainDate.exec(this.ctx)).be.null();
    (await this.unknownBegNotContainsDate.exec(this.ctx)).should.be.false();
    (await this.posInfEndContainsDate.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotContainsDate.exec(this.ctx)).should.be.false();
    (await this.unknownOpenEndContainsDate.exec(this.ctx)).should.be.true();
    (await this.unknownClosedEndContainsDate.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayContainDate.exec(this.ctx)).be.null();
    (await this.unknownEndNotContainsDate.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.containsImpreciseDate.exec(this.ctx)).should.be.true();
    (await this.notContainsImpreciseDate.exec(this.ctx)).should.be.false();
    should(await this.mayContainImpreciseDate.exec(this.ctx)).be.null();
    (await this.impreciseContainsDate.exec(this.ctx)).should.be.true();
    (await this.impreciseNotContainsDate.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayContainDate.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.containsDayOfDateLowEdge.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateHighEdgeOpen.exec(this.ctx)).should.be.false();
    (await this.containsDayOfDateHighEdgeClosed.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateLowEdge.exec(this.ctx)).should.be.false();
    (await this.notContainsDayOfDateBeyondHighEdge.exec(this.ctx)).should.be.false();
    (await this.containsDayOfDateImpreciseLowEdge.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateImpreciseHighEdgeOpen.exec(this.ctx)).should.be.false();
    (await this.containsDayOfDateImpreciseHighEdgeClosed.exec(this.ctx)).should.be.true();
    (await this.containsDayOfDateVeryImpreciseMiddle.exec(this.ctx)).should.be.true();
    (await this.notContainsDayOfDateVeryImpreciseLow.exec(this.ctx)).should.be.false();
    (await this.notContainsDayOfDateVeryImpreciseHighEdgeOpen.exec(this.ctx)).should.be.false();
    should(await this.mayContainDayOfDateVeryImpreciseLow.exec(this.ctx)).be.null();
    should(await this.mayContainDayOfDateVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(await this.mayContainDayOfDateVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('Includes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept included items', async function () {
    (await this.includesIntIvl.exec(this.ctx)).should.be.true();
    (await this.includesRealIvl.exec(this.ctx)).should.be.true();
    (await this.includesDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject unincluded items', async function () {
    (await this.notIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.notIncludesRealIvl.exec(this.ctx)).should.be.false();
    (await this.notIncludesDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegIncludesIntIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegIncludesIntIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayIncludeIntIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndIncludesIntIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndIncludesIntIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayIncludeIntIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotIncludesIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegIncludesDateIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotIncludesDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegIncludesDateIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayIncludeDateIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotIncludesDateIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndIncludesDateIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotIncludesDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndIncludesDateIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayIncludeDateIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotIncludesDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.includesImpreciseDateIvl.exec(this.ctx)).should.be.true();
    (await this.notIncludesImpreciseDateIvl.exec(this.ctx)).should.be.false();
    should(await this.mayIncludeImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseIncludesDateIvl.exec(this.ctx)).should.be.true();
    (await this.impreciseNotIncludesDateIvl.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayIncludeDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.includesDayOfIvlLowEdge.exec(this.ctx)).should.be.true();
    (await this.includesDayOfIvlHighEdge.exec(this.ctx)).should.be.true();
    (await this.notIncludesDayOfIvlLowEdge.exec(this.ctx)).should.be.false();
    (await this.notIncludesDayOfIvlHighEdge.exec(this.ctx)).should.be.false();
    (await this.includesDayOfIvlImpreciseLowEdge.exec(this.ctx)).should.be.true();
    (await this.includesDayOfIvlImpreciseHighEdge.exec(this.ctx)).should.be.true();
    (await this.includesDayOfIvlVeryImpreciseMiddle.exec(this.ctx)).should.be.true();
    (await this.notIncludesDayOfIvlVeryImpreciseLow.exec(this.ctx)).should.be.false();
    (await this.notIncludesDayOfIvlVeryImpreciseHigh.exec(this.ctx)).should.be.false();
    should(await this.mayIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(await this.mayIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(await this.mayIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });

  it('should correctly handle point inclusion', async function () {
    (await this.impreciseIncludesDate.exec(this.ctx)).should.be.true();
    (await this.impreciseDoesntIncludeDate.exec(this.ctx)).should.be.false();
    (await this.intervalIncludesQuantity.exec(this.ctx)).should.be.true();
    (await this.intervalDoesntIncludeQuantity.exec(this.ctx)).should.be.false();
  });
});

describe('ProperlyIncludes', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept properly included intervals', async function () {
    (await this.properlyIncludesIntIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesIntBeginsIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesIntEndsIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesRealIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals not properly included', async function () {
    (await this.notProperlyIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.notProperlyIncludesRealIvl.exec(this.ctx)).should.be.false();
    (await this.notProperlyIncludesDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.posInfEndProperlyIncludesIntIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotProperlyIncludesIntIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownEndMayProperlyIncludeIntIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.properlyIncludesDayOfIvlLowEdge.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesDayOfIvlHighEdge.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesDayOfIvlNearEdges.exec(this.ctx)).should.be.true();
    (await this.notProperlyIncludesDayOfIvlSameEdges.exec(this.ctx)).should.be.false();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseLowAndHigh.exec(this.ctx)).be.null();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('IncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept included items', async function () {
    (await this.includesIntIvl.exec(this.ctx)).should.be.true();
    (await this.includesRealIvl.exec(this.ctx)).should.be.true();
    (await this.includesDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject unincluded items', async function () {
    (await this.notIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.notIncludesRealIvl.exec(this.ctx)).should.be.false();
    (await this.notIncludesDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegIncludedInIntIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotIncludedInIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegIncludedInIntIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayBeIncludedInIntIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotIncludedInIntIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndIncludedInIntIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotIncludedInIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndIncludedInIntIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayBeIncludedInIntIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotIncludedInIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegIncludedInDateIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotIncludedInDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegIncludedInDateIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayBeIncludedInDateIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotIncludedInDateIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndIncludedInDateIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotIncludedInDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndIncludedInDateIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayBeIncludedInDateIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotIncludedInDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.includesImpreciseDateIvl.exec(this.ctx)).should.be.true();
    (await this.notIncludesImpreciseDateIvl.exec(this.ctx)).should.be.false();
    should(await this.mayIncludeImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseIncludesDateIvl.exec(this.ctx)).should.be.true();
    (await this.impreciseNotIncludesDateIvl.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayIncludeDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.includesDayOfIvlLowEdge.exec(this.ctx)).should.be.true();
    (await this.includesDayOfIvlHighEdge.exec(this.ctx)).should.be.true();
    (await this.notIncludesDayOfIvlLowEdge.exec(this.ctx)).should.be.false();
    (await this.notIncludesDayOfIvlHighEdge.exec(this.ctx)).should.be.false();
    (await this.includesDayOfIvlImpreciseLowEdge.exec(this.ctx)).should.be.true();
    (await this.includesDayOfIvlImpreciseHighEdge.exec(this.ctx)).should.be.true();
    (await this.includesDayOfIvlVeryImpreciseMiddle.exec(this.ctx)).should.be.true();
    (await this.notIncludesDayOfIvlVeryImpreciseLow.exec(this.ctx)).should.be.false();
    (await this.notIncludesDayOfIvlVeryImpreciseHigh.exec(this.ctx)).should.be.false();
    should(await this.mayIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(await this.mayIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(await this.mayIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });

  it('should correctly handle point comparisons', async function () {
    (await this.includesDayInInterval.exec(this.ctx)).should.be.true();
    (await this.doesNotIncludeDayInInterval.exec(this.ctx)).should.be.false();
    (await this.quantityIncludedInterval.exec(this.ctx)).should.be.true();
    (await this.quantityNotIncludedInterval.exec(this.ctx)).should.be.false();
  });
});

describe('ProperlyIncludedIn', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept properly included intervals', async function () {
    (await this.properlyIncludesIntIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesIntBeginsIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesIntEndsIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesRealIvl.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals not properly included', async function () {
    (await this.notProperlyIncludesIntIvl.exec(this.ctx)).should.be.false();
    (await this.notProperlyIncludesRealIvl.exec(this.ctx)).should.be.false();
    (await this.notProperlyIncludesDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.posInfEndProperlyIncludedInDateIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotProperlyIncludedInDateIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownEndMayBeProperlyIncludedInDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.properlyIncludesDayOfIvlLowEdge.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesDayOfIvlHighEdge.exec(this.ctx)).should.be.true();
    (await this.properlyIncludesDayOfIvlNearEdges.exec(this.ctx)).should.be.true();
    (await this.notProperlyIncludesDayOfIvlSameEdges.exec(this.ctx)).should.be.false();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseLow.exec(this.ctx)).be.null();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseHigh.exec(this.ctx)).be.null();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseLowAndHigh.exec(this.ctx)).be.null();
    should(await this.mayProperlyIncludeDayOfIvlVeryImpreciseSurrounding.exec(this.ctx)).be.null();
  });
});

describe('After', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals before it', async function () {
    (await this.afterIntIvl.exec(this.ctx)).should.be.true();
    (await this.afterRealIvl.exec(this.ctx)).should.be.true();
    (await this.afterDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals on or after it', async function () {
    (await this.notAfterIntIvl.exec(this.ctx)).should.be.false();
    (await this.notAfterRealIvl.exec(this.ctx)).should.be.false();
    (await this.notAfterDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegNotAfterIntIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownBegMayBeAfterIntIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotAfterIntIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotAfterIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.unknownEndNotAfterIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegNotAfterDateIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownBegMayBeAfterDateIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotAfterDateIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotAfterDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.unknownEndNotAfterDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.afterImpreciseDateIvl.exec(this.ctx)).should.be.true();
    should(await this.notAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    should(await this.mayBeAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseAfterDateIvl.exec(this.ctx)).should.be.true();
    // meets with uncertainty due to toClose
    should(await this.impreciseNotAfterDateIvl.exec(this.ctx)).be.null();
    should(await this.impreciseMayBeAfterDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.afterDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.beforeDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.startsSameDayOfIvlEnd.exec(this.ctx)).should.be.false();
    (await this.endsSameDayOfIvlStart.exec(this.ctx)).should.be.false();
    should(await this.mayBeAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    (await this.mayBeBeforeDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
  });
});

describe('Before', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals before it', async function () {
    (await this.beforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.beforeRealIvl.exec(this.ctx)).should.be.true();
    (await this.beforeDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals on or after it', async function () {
    (await this.notBeforeIntIvl.exec(this.ctx)).should.be.false();
    (await this.notBeforeRealIvl.exec(this.ctx)).should.be.false();
    (await this.notBeforeDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotBeforeIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.unknownBegNotBeforeIntIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndNotBeforeIntIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownEndMayBeBeforeIntIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotBeforeIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.unknownBegNotBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndNotBeforeDateIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownEndMayBeBeforeDateIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotBeforeDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.beforeImpreciseDateIvl.exec(this.ctx)).should.be.true();
    // meets with uncertaintity due to toClose
    should(await this.notBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    should(await this.mayBeBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseBeforeDateIvl.exec(this.ctx)).should.be.true();
    should(await this.impreciseNotBeforeDateIvl.exec(this.ctx)).be.null();
    should(await this.impreciseMayBeBeforeDateIvl.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.afterDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.beforeDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.startsSameDayOfIvlEnd.exec(this.ctx)).should.be.false();
    (await this.endsSameDayOfIvlStart.exec(this.ctx)).should.be.false();
    (await this.mayBeAfterDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
    should(await this.mayBeBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('BeforeOrOn', () => {
  // NOTE: BeforeOrOn is synonym for SameOrBefore.
  // NOTE: SameOrBefore for numeric intervals is tests in spec tests

  beforeEach(function () {
    setup(this, data);
  });

  it('should handle nominal datetime interval situations', async function () {
    (await this.meetsAfterDateIvl.exec(this.ctx)).should.be.false();
    (await this.meetsBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.afterDateIvl.exec(this.ctx)).should.be.false();
    (await this.beforeDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should correctly handle imprecision', async function () {
    (await this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).should.be.false();
    should(await this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.notMeetsImpreciseDateIvl.exec(this.ctx)).should.be.false();
    (await this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).should.be.false();
    (await this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.impreciseNotMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.meetsAfterDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.meetsBeforeDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.notMeetsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDayOfImpreciseIVL.exec(this.ctx)).should.be.false();
    (await this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
    should(await this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });

  it('should handle intervals with null end', async function () {
    (await this.beforeNullEndIvl.exec(this.ctx)).should.be.true();
    (await this.afterStartNullEndIvl.exec(this.ctx)).should.be.false();
    should(await this.nullEndStartBeforeIvl.exec(this.ctx)).be.null();
    should(await this.nullEndStartAfterIvl.exec(this.ctx)).be.null();
  });

  it('should handle intervals with null start', async function () {
    should(await this.endsBeforeNullStartIvlEnds.exec(this.ctx)).be.null();
    should(await this.afterEndOfNullStartIvl.exec(this.ctx)).be.null();
    (await this.nullStartStartBeforeIvl.exec(this.ctx)).should.be.true();
    (await this.nullStartStartAfterIvl.exec(this.ctx)).should.be.false();
  });

  it('should handle null on either side', async function () {
    should(await this.dateIvlBeforeNull.exec(this.ctx)).be.null();
    should(await this.nullBeforeDateIvl.exec(this.ctx)).be.null();
  });

  it('should handle Date and DateTime on either side', async function () {
    (await this.dateTimeBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.dateBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.dateIvlBeforeDateTime.exec(this.ctx)).should.be.true();
    (await this.dateIvlBeforeDate.exec(this.ctx)).should.be.true();
  });

  it('should handle Interval<Date> and Interval<DateTime> on either side', async function () {
    (await this.dateOnlyIvlBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.dateIvlAfterDateOnlyIvl.exec(this.ctx)).should.be.false();
  });

  it('should handle null Interval<Date> on boundary of Interval<DateTime>', async function () {
    should(await this.dateOnlyMeetsBeforeDateIvl.exec(this.ctx)).be.null();
  });
});

describe('AfterOrOn', () => {
  // NOTE: AfterOrOn is synonym for SameOrAfter.
  // NOTE: SameOrAfter for numeric intervals is tests in spec tests

  beforeEach(function () {
    setup(this, data);
  });

  it('should handle nominal datetime interval situations', async function () {
    (await this.meetsAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.afterDateIvl.exec(this.ctx)).should.be.true();
    (await this.beforeDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    should(await this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsImpreciseDateIvl.exec(this.ctx)).should.be.false();
    (await this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.impreciseNotMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.meetsAfterDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.notMeetsDayOfImpreciseIVL.exec(this.ctx)).should.be.true();
    should(await this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    (await this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
  });

  it('should handle intervals with null end', async function () {
    should(await this.beforeNullEndIvl.exec(this.ctx)).be.null();
    should(await this.afterStartNullEndIvl.exec(this.ctx)).be.null();
    (await this.nullEndStartBeforeIvl.exec(this.ctx)).should.be.false();
    (await this.nullEndStartAfterIvl.exec(this.ctx)).should.be.true();
  });

  it('should handle intervals with null start', async function () {
    (await this.endsBeforeNullStartIvlEnds.exec(this.ctx)).should.be.false();
    (await this.afterEndOfNullStartIvl.exec(this.ctx)).should.be.true();
    should(await this.nullStartStartBeforeIvl.exec(this.ctx)).be.null();
    should(await this.nullStartStartAfterIvl.exec(this.ctx)).be.null();
  });

  it('should handle null on either side', async function () {
    should(await this.dateIvlBeforeNull.exec(this.ctx)).be.null();
    should(await this.nullBeforeDateIvl.exec(this.ctx)).be.null();
  });

  it('should handle Date and DateTime on either side', async function () {
    (await this.dateTimeBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlBeforeDateTime.exec(this.ctx)).should.be.false();
    (await this.dateIvlBeforeDate.exec(this.ctx)).should.be.false();
  });

  it('should handle Interval<Date> and Interval<DateTime> on either side', async function () {
    (await this.dateOnlyIvlBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlAfterDateOnlyIvl.exec(this.ctx)).should.be.true();
  });

  it('should handle null Interval<Date> on boundary of Interval<DateTime>', async function () {
    should(await this.dateOnlyMeetsAfterDateIvl.exec(this.ctx)).be.null();
  });
});

describe('Meets', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals meeting after it', async function () {
    (await this.meetsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeRealIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should accept intervals meeting before it', async function () {
    (await this.meetsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.meetsAfterRealIvl.exec(this.ctx)).should.be.true();
    (await this.meetsAfterDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals not meeting it', async function () {
    (await this.notMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsRealIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegMeetsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlNotMeetsNegInfBeg.exec(this.ctx)).should.be.false();
    (await this.unknownBegMeetsBeforeIntIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayMeetAfterIntIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    should(await this.intIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    (await this.posInfEndMeetsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlNotMeetsPosInfEnd.exec(this.ctx)).should.be.false();
    (await this.unknownEndMeetsAfterIntIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayMeetBeforeIntIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    should(await this.intIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegMeetsBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlNotMeetsNegInfBeg.exec(this.ctx)).should.be.false();
    (await this.unknownBegMeetsBeforeDateIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownBegMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    should(await this.dateIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    (await this.posInfEndMeetsAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlNotMeetsPosInfEnd.exec(this.ctx)).should.be.false();
    (await this.unknownEndMeetsAfterDateIvl.exec(this.ctx)).should.be.true();
    should(await this.unknownEndMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    should(await this.dateIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle imprecision', async function () {
    should(await this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    should(await this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.notMeetsImpreciseDateIvl.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    should(await this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseNotMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.meetsAfterDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.notMeetsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDayOfImpreciseIVL.exec(this.ctx)).should.be.false();
    should(await this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    should(await this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('MeetsAfter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals meeting before it', async function () {
    (await this.meetsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.meetsAfterRealIvl.exec(this.ctx)).should.be.true();
    (await this.meetsAfterDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals meeting after it', async function () {
    (await this.meetsBeforeIntIvl.exec(this.ctx)).should.be.false();
    (await this.meetsBeforeRealIvl.exec(this.ctx)).should.be.false();
    (await this.meetsBeforeDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject intervals not meeting it', async function () {
    (await this.notMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsRealIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegMeetsBeforeIntIvl.exec(this.ctx)).should.be.false();
    (await this.negInfBegNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlNotMeetsNegInfBeg.exec(this.ctx)).should.be.false();
    (await this.unknownBegMeetsBeforeIntIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownBegMayMeetAfterIntIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).should.be.false();
    (await this.posInfEndMeetsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlNotMeetsPosInfEnd.exec(this.ctx)).should.be.false();
    (await this.unknownEndMeetsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.unknownEndMayMeetBeforeIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    should(await this.intIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegMeetsBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.negInfBegNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlNotMeetsNegInfBeg.exec(this.ctx)).should.be.false();
    (await this.unknownBegMeetsBeforeDateIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownBegMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    (await this.unknownBegNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).should.be.false();
    (await this.posInfEndMeetsAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.posInfEndNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlNotMeetsPosInfEnd.exec(this.ctx)).should.be.false();
    (await this.unknownEndMeetsAfterDateIvl.exec(this.ctx)).should.be.true();
    (await this.unknownEndMayMeetBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownEndNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    should(await this.dateIvlMayMeetAfterUnknownEnd.exec(this.ctx)).be.null();
  });

  it('should correctly handle imprecision', async function () {
    should(await this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsImpreciseDateIvl.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).should.be.false();
    (await this.impreciseNotMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.meetsAfterDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDayOfImpreciseIVL.exec(this.ctx)).should.be.false();
    should(await this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
    (await this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
  });
});

describe('MeetsBefore', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept intervals meeting after it', async function () {
    (await this.meetsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeRealIvl.exec(this.ctx)).should.be.true();
    (await this.meetsBeforeDateIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject intervals meeting before it', async function () {
    (await this.meetsAfterIntIvl.exec(this.ctx)).should.be.false();
    (await this.meetsAfterRealIvl.exec(this.ctx)).should.be.false();
    (await this.meetsAfterDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject intervals not meeting it', async function () {
    (await this.notMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsRealIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (int)', async function () {
    (await this.negInfBegMeetsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlNotMeetsNegInfBeg.exec(this.ctx)).should.be.false();
    (await this.unknownBegMeetsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.unknownBegMayMeetAfterIntIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    should(await this.intIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    (await this.posInfEndMeetsAfterIntIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlNotMeetsPosInfEnd.exec(this.ctx)).should.be.false();
    (await this.unknownEndMeetsAfterIntIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownEndMayMeetBeforeIntIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotMeetsIntIvl.exec(this.ctx)).should.be.false();
    (await this.intIvlMayMeetAfterUnknownEnd.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle null endpoints (date)', async function () {
    (await this.negInfBegMeetsBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.negInfBegNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlNotMeetsNegInfBeg.exec(this.ctx)).should.be.false();
    (await this.unknownBegMeetsBeforeDateIvl.exec(this.ctx)).should.be.true();
    (await this.unknownBegMayMeetAfterDateIvl.exec(this.ctx)).should.be.false();
    (await this.unknownBegNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    should(await this.dateIvlMayMeetBeforeUnknownBeg.exec(this.ctx)).be.null();
    (await this.posInfEndMeetsAfterDateIvl.exec(this.ctx)).should.be.false();
    (await this.posInfEndNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlNotMeetsPosInfEnd.exec(this.ctx)).should.be.false();
    (await this.unknownEndMeetsAfterDateIvl.exec(this.ctx)).should.be.false();
    should(await this.unknownEndMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    (await this.unknownEndNotMeetsDateIvl.exec(this.ctx)).should.be.false();
    (await this.dateIvlMayMeetAfterUnknownEnd.exec(this.ctx)).should.be.false();
  });

  it('should correctly handle imprecision', async function () {
    (await this.mayMeetAfterImpreciseDateIvl.exec(this.ctx)).should.be.false();
    should(await this.mayMeetBeforeImpreciseDateIvl.exec(this.ctx)).be.null();
    (await this.notMeetsImpreciseDateIvl.exec(this.ctx)).should.be.false();
    (await this.impreciseMayMeetAfterDateIvl.exec(this.ctx)).should.be.false();
    should(await this.impreciseMayMeetBeforeDateIvl.exec(this.ctx)).be.null();
    (await this.impreciseNotMeetsDateIvl.exec(this.ctx)).should.be.false();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.meetsAfterDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.meetsBeforeDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.notMeetsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notMeetsDayOfImpreciseIVL.exec(this.ctx)).should.be.false();
    (await this.mayMeetAfterDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
    should(await this.mayMeetBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('Overlaps', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps (integer)', async function () {
    (await this.overlapsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsBoundaryIntIvl.exec(this.ctx)).should.be.true();
  });

  it('should accept overlaps (real)', async function () {
    (await this.overlapsBeforeRealIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsAfterRealIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsBoundaryRealIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject non-overlaps (integer)', async function () {
    (await this.noOverlapsIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps (real)', async function () {
    (await this.noOverlapsRealIvl.exec(this.ctx)).should.be.false();
  });

  it('should return null for null value', async function () {
    should(await this.overlapsIsNull.exec(this.ctx)).be.null();
  });
});

describe('OverlapsDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps', async function () {
    (await this.overlapsBefore.exec(this.ctx)).should.be.true();
    (await this.overlapsAfter.exec(this.ctx)).should.be.true();
    (await this.overlapsContained.exec(this.ctx)).should.be.true();
    (await this.overlapsContains.exec(this.ctx)).should.be.true();
  });

  it('should accept imprecise overlaps', async function () {
    (await this.impreciseOverlap.exec(this.ctx)).should.be.true();
  });

  it('should reject non-overlaps', async function () {
    (await this.noOverlap.exec(this.ctx)).should.be.false();
  });

  it('should reject imprecise non-overlaps', async function () {
    (await this.noImpreciseOverlap.exec(this.ctx)).should.be.false();
  });

  it('should return null for imprecise overlaps with differing precision', async function () {
    should(await this.unknownOverlap.exec(this.ctx)).be.null();
  });

  it('should return true for imprecise overlaps with matching precision', async function () {
    (await this.matchingPrecisionOverlap.exec(this.ctx)).should.be.true();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.overlapsBeforeDayOfIvlEdge.exec(this.ctx)).should.be.true();
    (await this.overlapsAfterDayOfIvlEdge.exec(this.ctx)).should.be.true();
    (await this.overlapsContainsDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsContainedByDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.notOverlapsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.overlapsAfterDayOfImpreciseInterval.exec(this.ctx)).should.be.true();
    should(await this.mayOverlapBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
    should(await this.mayOverlapAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('OverlapsAfter', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are after (integer)', async function () {
    (await this.overlapsAfterIntIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsBoundaryIntIvl.exec(this.ctx)).should.be.true();
  });

  it('should accept overlaps that are after (real)', async function () {
    (await this.overlapsAfterRealIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsBoundaryRealIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject overlaps that are before (integer)', async function () {
    (await this.overlapsBeforeIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject overlaps that are before (real)', async function () {
    (await this.overlapsBeforeRealIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps (integer)', async function () {
    (await this.noOverlapsIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps (real)', async function () {
    (await this.noOverlapsRealIvl.exec(this.ctx)).should.be.false();
  });
});

describe('OverlapsAfterDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are after', async function () {
    (await this.overlapsAfter.exec(this.ctx)).should.be.true();
    (await this.overlapsContains.exec(this.ctx)).should.be.true();
  });

  it('should accept imprecise overlaps that are after', async function () {
    (await this.impreciseOverlapAfter.exec(this.ctx)).should.be.true();
  });

  it('should reject overlaps that are not before', async function () {
    (await this.overlapsBefore.exec(this.ctx)).should.be.false();
    (await this.overlapsContained.exec(this.ctx)).should.be.false();
  });

  it('should reject imprecise overlaps that are not before', async function () {
    (await this.impreciseOverlapBefore.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps', async function () {
    (await this.noOverlap.exec(this.ctx)).should.be.false();
  });

  it('should reject imprecise non-overlaps', async function () {
    (await this.noImpreciseOverlap.exec(this.ctx)).should.be.false();
  });

  it('should return true for imprecise overlaps with matching precision', async function () {
    (await this.matchingPrecisionOverlap.exec(this.ctx)).should.be.true();
  });

  it('should return null for imprecise overlaps that are unknown', async function () {
    should(await this.unknownOverlap.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.overlapsBeforeDayOfIvlEdge.exec(this.ctx)).should.be.false();
    (await this.overlapsAfterDayOfIvlEdge.exec(this.ctx)).should.be.true();
    (await this.overlapsContainsDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsContainedByDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notOverlapsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.overlapsAfterDayOfImpreciseInterval.exec(this.ctx)).should.be.true();
    (await this.mayOverlapBeforeDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
    should(await this.mayOverlapAfterDayOfImpreciseIvl.exec(this.ctx)).be.null();
  });
});

describe('OverlapsBefore', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are before (integer)', async function () {
    (await this.overlapsBeforeIntIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsBoundaryIntIvl.exec(this.ctx)).should.be.true();
  });

  it('should accept overlaps that are before (real)', async function () {
    (await this.overlapsBeforeRealIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsBoundaryRealIvl.exec(this.ctx)).should.be.true();
  });

  it('should reject overlaps that are after (integer)', async function () {
    (await this.overlapsAfterIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject overlaps that are after (real)', async function () {
    (await this.overlapsAfterRealIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps (integer)', async function () {
    (await this.noOverlapsIntIvl.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps (real)', async function () {
    (await this.noOverlapsRealIvl.exec(this.ctx)).should.be.false();
  });
});

describe('OverlapsBeforeDateTime', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should accept overlaps that are before', async function () {
    (await this.overlapsBefore.exec(this.ctx)).should.be.true();
    (await this.overlapsContains.exec(this.ctx)).should.be.true();
  });

  it('should accept imprecise overlaps that are before', async function () {
    (await this.impreciseOverlapBefore.exec(this.ctx)).should.be.true();
  });

  it('should reject overlaps that are not before', async function () {
    (await this.overlapsAfter.exec(this.ctx)).should.be.false();
    (await this.overlapsContained.exec(this.ctx)).should.be.false();
  });

  it('should reject imprecise overlaps that are not before', async function () {
    (await this.impreciseOverlapAfter.exec(this.ctx)).should.be.false();
  });

  it('should reject non-overlaps', async function () {
    (await this.noOverlap.exec(this.ctx)).should.be.false();
  });

  it('should reject imprecise non-overlaps', async function () {
    (await this.noImpreciseOverlap.exec(this.ctx)).should.be.false();
  });

  it('should return true for imprecise overlaps with matching precision', async function () {
    (await this.matchingPrecisionOverlap.exec(this.ctx)).should.be.true();
  });

  it('should return null for imprecise overlaps that are unknown', async function () {
    should(await this.unknownOverlap.exec(this.ctx)).be.null();
  });

  it('should correctly compare using the requested precision', async function () {
    (await this.overlapsBeforeDayOfIvlEdge.exec(this.ctx)).should.be.true();
    (await this.overlapsAfterDayOfIvlEdge.exec(this.ctx)).should.be.false();
    (await this.overlapsContainsDayOfIvl.exec(this.ctx)).should.be.true();
    (await this.overlapsContainedByDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.notOverlapsDayOfIvl.exec(this.ctx)).should.be.false();
    (await this.overlapsAfterDayOfImpreciseInterval.exec(this.ctx)).should.be.false();
    should(await this.mayOverlapBeforeDayOfImpreciseIvl.exec(this.ctx)).be.null();
    (await this.mayOverlapAfterDayOfImpreciseIvl.exec(this.ctx)).should.be.false();
  });
});

describe('Width', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate the width of integer intervals', async function () {
    // define IntWidth: width of Interval[-2, 5]
    (await this.intWidth.exec(this.ctx)).should.equal(7);
    // define IntOpenWidth: width of Interval(-2, 5)
    (await this.intOpenWidth.exec(this.ctx)).should.equal(5);
  });

  it('should calculate the width of real intervals', async function () {
    // define RealWidth: width of Interval[1.23, 4.56]
    (await this.realWidth.exec(this.ctx)).should.equal(3.33);
    // define RealOpenWidth: width of Interval(1.23, 4.56)
    (await this.realOpenWidth.exec(this.ctx)).should.equal(3.32999998);
  });

  it('should calculate the width of infinite intervals', async function () {
    // define IntWidthThreeToMax: width of Interval[3, null]
    (await this.intWidthThreeToMax.exec(this.ctx)).should.equal(Math.pow(2, 31) - 4);
    // define IntWidthMinToThree: width of Interval[null, 3]
    (await this.intWidthMinToThree.exec(this.ctx)).should.equal(Math.pow(2, 31) + 3);
  });

  it('should calculate the width of infinite intervals that result in null', async function () {
    // define IntWidthThreeToUnknown: width of Interval[3, null)
    should(await this.intWidthThreeToUnknown.exec(this.ctx)).be.null();
    // define IntWidthUnknownToThree: width of Interval(null, 3]
    should(await this.intWidthUnknownToThree.exec(this.ctx)).be.null();
  });

  it('should calculate the width of interval of quantities', async function () {
    // define WidthOfQuantityInterval: width of Interval[Quantity{value: 1, unit: 'mm'}, Quantity{value: 10, unit: 'mm'}]
    const width = await this.widthOfQuantityInterval.exec(this.ctx);
    width.value.should.equal(9);
    width.unit.should.equal('mm');
  });

  it('should throw for DateTime Intervals', function () {
    // define WidthOfDateTimeInterval: width of Interval[DateTime(2012,01,01), DateTime(2012,01,03)]
    return this.widthOfDateTimeInterval.exec(this.ctx).should.be.rejected();
  });

  it('should throw for Date Intervals', function () {
    // define WidthOfDateInterval: width of Interval[Date(2012,01,01), Date(2012,01,03)]
    return this.widthOfDateInterval.exec(this.ctx).should.be.rejected();
  });

  it('should throw for Time Intervals', function () {
    // define WidthOfTimeInterval: width of Interval[Time(12,00,00), Time(12,30,02)]
    return this.widthOfTimeInterval.exec(this.ctx).should.be.rejected();
  });
});

describe('Size', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate the size of integer intervals', async function () {
    // define IntSize: Size(Interval[-2, 5])
    (await this.intSize.exec(this.ctx)).should.equal(8);
    // define IntOpenSize: Size(Interval(-2, 5))
    (await this.intOpenSize.exec(this.ctx)).should.equal(6);
  });

  it('should calculate the size of real intervals', async function () {
    // define RealSize: Size(Interval[1.23, 4.56])
    (await this.realSize.exec(this.ctx)).should.equal(3.33 + MIN_FLOAT_PRECISION_VALUE);
    // define RealOpenSize: Size(Interval(1.23, 4.56))
    (await this.realOpenSize.exec(this.ctx)).should.equal(3.32999998 + MIN_FLOAT_PRECISION_VALUE);
  });

  it('should calculate the size of infinite intervals', async function () {
    // define IntSizeThreeToMax: Size(Interval[3, null])
    (await this.intSizeThreeToMax.exec(this.ctx)).should.equal(Math.pow(2, 31) - 4 + 1);
    // define IntSizeMinToThree: Size(Interval[null, 3])
    (await this.intSizeMinToThree.exec(this.ctx)).should.equal(Math.pow(2, 31) + 3 + 1);
  });

  it('should calculate the size of infinite intervals that result in null', async function () {
    // define IntSizeThreeToUnknown: Size(Interval[3, null))
    should(await this.intSizeThreeToUnknown.exec(this.ctx)).be.null();
    // define IntSizeUnknownToThree: Size(Interval(null, 3])
    should(await this.intSizeUnknownToThree.exec(this.ctx)).be.null();
  });

  it('should return null if integer is null', async function () {
    // define SizeIsNull: Size(null as Interval<Integer>)
    should(await this.sizeIsNull.exec(this.ctx)).be.null();
  });

  it('should return null if integer is null', async function () {
    // define SizeIsNull: Size(null as Interval<Integer>)
    should(await this.sizeIsNull.exec(this.ctx)).be.null();
  });

  it('should calculate size of interval of quantities', async function () {
    // define SizeOfQuantityInterval: Size(Interval[Quantity{value: 1, unit: 'mm'}, Quantity{value: 10, unit: 'mm'}])
    const size = await this.sizeOfQuantityInterval.exec(this.ctx);
    size.value.should.equal(10);
    size.unit.should.equal('mm');
  });

  it('should throw for Date Interval', async function () {
    // define SizeOfDateTimeInterval: Size(Interval[DateTime(2012,01,01), DateTime(2012,01,03)])
    return this.sizeOfDateTimeInterval.exec(this.ctx).should.be.rejected();
  });

  it('should throw for DateTime Interval', async function () {
    // define SizeOfDateInterval: Size(Interval[Date(2012,01,01), Date(2012,01,03)])
    return this.sizeOfDateInterval.exec(this.ctx).should.be.rejected();
  });

  it('should throw for Time Interval', async function () {
    // define SizeOfTimeInterval: Size(Interval[Time(12,00,00), Time(12,30,02)])
    return await this.sizeOfTimeInterval.exec(this.ctx).should.be.rejected();
  });
});

describe('Start', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the low of the interval', async function () {
    (await this.closedNotNull.exec(this.ctx)).should.eql(new DateTime(2012, 1, 1));
  });

  it('should return the minimum possible DateTime', async function () {
    (await this.closedNullDateTime.exec(this.ctx)).should.eql(MIN_DATETIME_VALUE);
  });

  it('should return the minimum possible DateTime in timzoneOffset of context', async function () {
    // set execution timestamp to be +5
    this.ctx.executionDateTime = new DateTime(2019, 10, 1, 12, 31, 31, 2, 5);
    (await this.closedNullDateTime.exec(this.ctx)).timezoneOffset.should.eql(5);
  });

  it('should return the minimum possible Integer', async function () {
    (await this.closedNullInteger.exec(this.ctx)).should.eql(MIN_INT_VALUE);
  });

  it('should return the minimum possible Decimal', async function () {
    (await this.closedNullDecimal.exec(this.ctx)).should.eql(MIN_FLOAT_VALUE);
  });

  it('should return null when the interval is null', async function () {
    should(await this.nullInterval.exec(this.ctx)).be.null();
  });

  it('should return successor of low when the interval is open', async function () {
    (await this.openNotNull.exec(this.ctx)).should.eql(new DateTime(2012, 1, 1).successor());
  });

  it('should return null for open interval with null high value', async function () {
    should(await this.openNull.exec(this.ctx)).be.null();
  });
});

describe('End', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should return the high of the interval', async function () {
    (await this.closedNotNull.exec(this.ctx)).should.eql(new DateTime(2013, 1, 1));
  });

  it('should return the maximum possible DateTime', async function () {
    (await this.closedNullDateTime.exec(this.ctx)).should.eql(MAX_DATETIME_VALUE);
  });

  it('should return the maximum possible DateTime in timzoneOffset of context', async function () {
    // set execution timestamp to be +5
    this.ctx.executionDateTime = new DateTime(2019, 10, 1, 12, 31, 31, 2, 5);
    (await this.closedNullDateTime.exec(this.ctx)).timezoneOffset.should.eql(5);
  });

  it('should return the maximum possible Integer', async function () {
    (await this.closedNullInteger.exec(this.ctx)).should.eql(MAX_INT_VALUE);
  });

  it('should return the maximum possible Decimal', async function () {
    (await this.closedNullDecimal.exec(this.ctx)).should.eql(MAX_FLOAT_VALUE);
  });

  it('should return null when the interval is null', async function () {
    should(await this.nullInterval.exec(this.ctx)).be.null();
  });

  it('should return predecessor of high when the interval is open', async function () {
    (await this.openNotNull.exec(this.ctx)).should.eql(new DateTime(2013, 1, 1).predecessor());
  });

  it('should return null for open interval with null low value', async function () {
    should(await this.openNull.exec(this.ctx)).be.null();
  });
});

describe('Starts', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate to null', async function () {
    should(await this.testStartsNull.exec(this.ctx)).be.null();
  });

  it('should calculate integer intervals properly', async function () {
    (await this.integerIntervalStartsTrue.exec(this.ctx)).should.be.true();
    (await this.integerIntervalStartsFalse.exec(this.ctx)).should.be.false();
    (await this.integerIntervalStartEndsFalse.exec(this.ctx)).should.be.false();
  });

  it('should calculate decimal intervals properly', async function () {
    (await this.decimalIntervalStartsTrue.exec(this.ctx)).should.be.true();
    (await this.decimalIntervalStartsFalse.exec(this.ctx)).should.be.false();
    (await this.decimalIntervalStartsEndsFalse.exec(this.ctx)).should.be.false();
  });

  it('should calculate quantity intervals properly', async function () {
    (await this.quantityIntervalStartsTrue.exec(this.ctx)).should.be.true();
    (await this.quantityIntervalStartsFalse.exec(this.ctx)).should.be.false();
    (await this.quantityIntervalStartsEndsFalse.exec(this.ctx)).should.be.false();
  });

  it('should calculate datetime intervals properly', async function () {
    (await this.dateTimeIntervalStartsTrue.exec(this.ctx)).should.be.true();
    (await this.dateTimeIntervalStartsFalse.exec(this.ctx)).should.be.false();
    (await this.dateTimeIntervalStartsDayOfTrue.exec(this.ctx)).should.be.true();
    (await this.dateTimeIntervalStartsEndsFalse.exec(this.ctx)).should.be.false();
  });
});

describe('Ends', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should calculate to null', async function () {
    should(await this.testEndsNull.exec(this.ctx)).be.null();
  });

  it('should calculate integer intervals properly', async function () {
    (await this.integerIntervalEndsTrue.exec(this.ctx)).should.be.true();
    (await this.integerIntervalEndsFalse.exec(this.ctx)).should.be.false();
    (await this.integerIntervalEndsStartsFalse.exec(this.ctx)).should.be.false();
  });

  it('should calculate decimal intervals properly', async function () {
    (await this.decimalIntervalEndsTrue.exec(this.ctx)).should.be.true();
    (await this.decimalIntervalEndsFalse.exec(this.ctx)).should.be.false();
    (await this.decimalIntervalEndsStartsFalse.exec(this.ctx)).should.be.false();
  });

  it('should calculate quantity intervals properly', async function () {
    (await this.quantityIntervalEndsTrue.exec(this.ctx)).should.be.true();
    (await this.quantityIntervalEndsFalse.exec(this.ctx)).should.be.false();
    (await this.quantityIntervalEndsStartsFalse.exec(this.ctx)).should.be.false();
  });

  it('should calculate datetime intervals properly', async function () {
    (await this.dateTimeIntervalEndsTrue.exec(this.ctx)).should.be.true();
    (await this.dateTimeIntervalEndsFalse.exec(this.ctx)).should.be.false();
    (await this.dateTimeIntervalEndsDayOfTrue.exec(this.ctx)).should.be.true();
    (await this.dateTimeIntervalEndsStartsFalse.exec(this.ctx)).should.be.false();
  });
});

describe('IntegerIntervalUnion', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate open and closed unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    let y = await this.intClosedUnionClosed.exec(this.ctx);
    y.equals(x).should.be.true();

    y = await this.intClosedUnionOpen.exec(this.ctx);
    y.contains(0).should.be.true();
    y.contains(10).should.be.false();

    y = await this.intOpenUnionOpen.exec(this.ctx);
    y.contains(0).should.be.false();
    y.contains(10).should.be.false();

    y = await this.intOpenUnionClosed.exec(this.ctx);
    y.contains(0).should.be.false();
    y.contains(10).should.be.true();
  });

  it('should properly calculate sameAs unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    const y = await this.intSameAsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate before/after unions', async function () {
    should(await this.intBeforeUnion.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    const y = await this.intMeetsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    const y = await this.intOverlapsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    const y = await this.intBeginsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    const y = await this.intDuringUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by unions', async function () {
    const x = await this.intFullInterval.exec(this.ctx);
    const y = await this.intEndsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly handle null unions', async function () {
    should(await this.nullUnion.exec(this.ctx)).be.null();
    should(await this.unionNull.exec(this.ctx)).be.null();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('DateTimeIntervalUnion', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate open and closed unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    let y = await this.dateTimeClosedUnionClosed.exec(this.ctx);
    y.equals(x).should.be.true();

    const a = new DateTime(2012, 1, 1, 0, 0, 0, 0);
    const b = new DateTime(2013, 1, 1, 0, 0, 0, 0);

    y = await this.dateTimeClosedUnionOpen.exec(this.ctx);
    y.contains(a).should.be.true();
    y.contains(b).should.be.false();

    y = await this.dateTimeOpenUnionOpen.exec(this.ctx);
    y.contains(a).should.be.false();
    y.contains(b).should.be.false();

    y = await this.dateTimeOpenUnionClosed.exec(this.ctx);
    y.contains(a).should.be.false();
    y.contains(b).should.be.true();
  });

  it('should properly calculate sameAs unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    const y = await this.dateTimeSameAsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate before/after unions', async function () {
    should(await this.dateTimeBeforeUnion.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    const y = await this.dateTimeMeetsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    const y = await this.dateTimeOverlapsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    const y = await this.dateTimeBeginsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    const y = await this.dateTimeDuringUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by unions', async function () {
    const x = await this.dateTimeFullInterval.exec(this.ctx);
    const y = await this.dateTimeEndsUnion.exec(this.ctx);
    y.equals(x).should.be.true();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('IntegerIntervalExcept', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs except', async function () {
    should(await this.intSameAsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate before/after except', async function () {
    (await this.intBeforeExcept.exec(this.ctx)).should.eql(new Interval(0, 4));
  });

  it('should properly calculate meets except', async function () {
    const x = await this.intHalfInterval.exec(this.ctx);
    const y = await this.intMeetsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping except', async function () {
    const x = await this.intHalfInterval.exec(this.ctx);
    const y = await this.intOverlapsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by except', async function () {
    should(await this.intBeginsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate includes/included by except', async function () {
    should(await this.intDuringExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate ends/ended by except', async function () {
    should(await this.intEndsExcept.exec(this.ctx)).be.null();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('DateTimeIntervalExcept', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs except', async function () {
    should(await this.dateTimeSameAsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate before/after except', async function () {
    (await this.dateTimeBeforeExcept.exec(this.ctx)).should.eql(
      new Interval(new DateTime(2012, 1, 1, 0, 0, 0, 0), new DateTime(2012, 4, 1, 0, 0, 0, 0))
    );
  });

  it('should properly calculate meets except', async function () {
    const x = await this.dateTimeHalfInterval.exec(this.ctx);
    const y = await this.dateTimeMeetsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping except', async function () {
    const x = await this.dateTimeHalfInterval.exec(this.ctx);
    const y = await this.dateTimeOverlapsExcept.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by except', async function () {
    should(await this.dateTimeBeginsExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate includes/included by except', async function () {
    should(await this.dateTimeDuringExcept.exec(this.ctx)).be.null();
  });

  it('should properly calculate ends/ended by except', async function () {
    should(await this.dateTimeEndsExcept.exec(this.ctx)).be.null();
  });
});

// TODO
// it 'should properly handle imprecision', ->

describe('IntegerIntervalIntersect', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs intersect', async function () {
    const x = await this.intSameAsIntersect.exec(this.ctx);
    const y = await this.intFullInterval.exec(this.ctx);
    x.equals(y).should.be.true();
  });

  it('should properly calculate before/after intersect', async function () {
    should(await this.intBeforeIntersect.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets intersect', async function () {
    const x = await this.intMeetsInterval.exec(this.ctx);
    const y = await this.intMeetsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping intersect', async function () {
    const x = await this.intOverlapsInterval.exec(this.ctx);
    const y = await this.intOverlapsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by intersect', async function () {
    const x = await this.intBeginsInterval.exec(this.ctx);
    const y = await this.intBeginsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by intersect', async function () {
    const x = await this.intDuringInterval.exec(this.ctx);
    const y = await this.intDuringIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by intersect', async function () {
    const x = await this.intEndsInterval.exec(this.ctx);
    const y = await this.intEndsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });
});

describe('DateTimeIntervalIntersect', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('should properly calculate sameAs intersect', async function () {
    const x = await this.dateTimeSameAsIntersect.exec(this.ctx);
    const y = await this.dateTimeFullInterval.exec(this.ctx);
    x.equals(y).should.be.true();
  });

  it('should properly calculate before/after intersect', async function () {
    should(await this.dateTimeBeforeIntersect.exec(this.ctx)).be.null();
  });

  it('should properly calculate meets intersect', async function () {
    const x = await this.dateTimeMeetsInterval.exec(this.ctx);
    const y = await this.dateTimeMeetsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate left/right overlapping intersect', async function () {
    const x = await this.dateTimeOverlapsInterval.exec(this.ctx);
    const y = await this.dateTimeOverlapsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate begins/begun by intersect', async function () {
    const x = await this.dateTimeBeginsInterval.exec(this.ctx);
    const y = await this.dateTimeBeginsIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate includes/included by intersect', async function () {
    const x = await this.dateTimeDuringInterval.exec(this.ctx);
    const y = await this.dateTimeDuringIntersect.exec(this.ctx);
    y.equals(x).should.be.true();
  });

  it('should properly calculate ends/ended by intersect', async function () {
    const x = await this.dateTimeEndsInterval.exec(this.ctx);
    const y = await this.dateTimeEndsIntersect.exec(this.ctx);
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

  it('empty interval collapses to empty', async function () {
    (await this.intCollapseEmpty.exec(this.ctx)).should.eql(
      await this.intEmptyIntervalList.exec(this.ctx)
    );
  });

  it('single interval list collapse to self', async function () {
    (await this.intCollapseSingleInterval.exec(this.ctx)).should.eql(
      await this.int1_10IntervalList.exec(this.ctx)
    );
  });

  it('disjoint intervals list collapses to ordered self', async function () {
    (await this.intCollapseDisjoint.exec(this.ctx)).should.eql(
      await this.intTwoItemDisjointList.exec(this.ctx)
    );
    (await this.intCollapseDisjointReversed.exec(this.ctx)).should.eql(
      await this.intTwoItemDisjointList.exec(this.ctx)
    );
  });

  it('adjacent intervals list combines', async function () {
    (await this.intCollapseAdjacent.exec(this.ctx)).should.eql(
      await this.int1_15IntervalList.exec(this.ctx)
    );
  });

  it('overlapping intervals list combine', async function () {
    (await this.intCollapseOverlap.exec(this.ctx)).should.eql(
      await this.int1_12IntervalList.exec(this.ctx)
    );
    (await this.intCollapseOverlapContained.exec(this.ctx)).should.eql(
      await this.int1_15IntervalList.exec(this.ctx)
    );
    (await this.intCollapseOverlapContainedEdge.exec(this.ctx)).should.eql(
      await this.int1_10IntervalList.exec(this.ctx)
    );
    (await this.intCollapseOverlapContainedEdge2.exec(this.ctx)).should.eql(
      await this.int1_15IntervalList.exec(this.ctx)
    );
    (await this.intCollapseOverlapMultipleCombine.exec(this.ctx)).should.eql(
      await this.int1_15IntervalList.exec(this.ctx)
    );
  });
});

describe('DateTimeIntervalCollapse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('empty interval collapses to empty', async function () {
    (await this.dateTimeCollapseEmpty.exec(this.ctx)).should.eql(
      await this.dateTimeEmptyIntervalList.exec(this.ctx)
    );
  });

  it('single interval list collapse to self', async function () {
    (await this.dateTimeCollapseSingleInterval.exec(this.ctx)).should.eql(
      await this.dateTime1_10IntervalList.exec(this.ctx)
    );
  });

  it('disjoint intervals list collapses to ordered self', async function () {
    (await this.dateTimeCollapseDisjoint.exec(this.ctx)).should.eql(
      await this.dateTimeTwoItemDisjointList.exec(this.ctx)
    );
  });

  it('reversed disjoint intervals list collapses to ordered self', async function () {
    (await this.dateTimeCollapseDisjointReversed.exec(this.ctx)).should.eql(
      await this.dateTimeTwoItemDisjointList.exec(this.ctx)
    );
  });

  it('adjacent intervals list combines', async function () {
    (await this.dateTimeCollapseAdjacent.exec(this.ctx)).should.eql(
      await this.dateTime1_15IntervalList.exec(this.ctx)
    );
  });

  it('overlapping intervals list combine', async function () {
    (await this.dateTimeCollapseOverlap.exec(this.ctx)).should.eql(
      await this.dateTime1_12IntervalList.exec(this.ctx)
    );
    (await this.dateTimeCollapseOverlapContained.exec(this.ctx)).should.eql(
      await this.dateTime1_15IntervalList.exec(this.ctx)
    );
    (await this.dateTimeCollapseOverlapContainedEdge.exec(this.ctx)).should.eql(
      await this.dateTime1_10IntervalList.exec(this.ctx)
    );
    (await this.dateTimeCollapseOverlapContainedEdge2.exec(this.ctx)).should.eql(
      await this.dateTime1_15IntervalList.exec(this.ctx)
    );
    (await this.dateTimeCollapseOverlapMultipleCombine.exec(this.ctx)).should.eql(
      await this.dateTime1_15IntervalList.exec(this.ctx)
    );
  });

  it('throws collapsing imprecise interval', async function () {
    (await this.dateTimeCollapseImpreciseBoundary.exec(this.ctx)).should.eql(
      await this.dateTime1_10IntervalList.exec(this.ctx)
    );
  });

  it('should not modify collapse parameters', async function () {
    const interval1CopyString = this.dateTime1_6Interval.toString();
    const interval2CopyString = this.dateTime5_12Interval.toString();
    const interval3CopyString = this.dateTime10_15Interval.toString();
    await this.dateTimeCollapseOverlapMultipleCombine.exec(this.ctx);
    this.dateTime1_6Interval.toString().should.eql(interval1CopyString);
    this.dateTime5_12Interval.toString().should.eql(interval2CopyString);
    this.dateTime10_15Interval.toString().should.eql(interval3CopyString);
  });
});

describe('Collapse', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('numeric collapse uses "1" as default per unit', async function () {
    (await this.intCollapseNoPer.exec(this.ctx)).should.eql(
      await this.intCollapsePerUnit1.exec(this.ctx)
    );
  });

  it('combines intervals separated by less than per unit', async function () {
    (await this.intCollapseSeparatedListPer3.exec(this.ctx)).should.eql(
      await this.expectedIntervalList.exec(this.ctx)
    );
  });

  it('DateTime collapse uses 1 ms as default per unit', async function () {
    // TODO: spec says to determine this based on width of successor, but Bonnie
    // will only ever have fully-defined dates. Implement successor way if time.
    (await this.dateTimeCollapseNoPer.exec(this.ctx)).should.eql(
      await this.dateTimeCollapsePerMs.exec(this.ctx)
    );
  });

  it('DateTime with null end collapse with no overlap', async function () {
    (await this.dateTimeNullEndCollapseNoOverlap.exec(this.ctx)).should.eql(
      await this.dateTimeNullEndCollapseNoOverlapExpected.exec(this.ctx)
    );
  });

  it('DateTime with null start collapse with no overlap', async function () {
    (await this.dateTimeNullStartCollapseNoOverlap.exec(this.ctx)).should.eql(
      await this.dateTimeNullStartCollapseNoOverlapExpected.exec(this.ctx)
    );
  });

  it('combines DateTime intervals separated by less than per unit', async function () {
    (await this.dateTimeCollapsePerDay.exec(this.ctx)).should.eql(
      await this.dateTime1_15IntervalList.exec(this.ctx)
    );
  });

  it('Date collapse overlapping intervals with no per', async function () {
    (await this.overlappingDateCollapseNoPer.exec(this.ctx)).should.eql([
      await this.date1_15Interval.exec(this.ctx)
    ]);
  });

  it('Date collapse adjacent intervals with no per', async function () {
    (await this.adjacentDateCollapseNoPer.exec(this.ctx)).should.eql([
      await this.date1_15Interval.exec(this.ctx)
    ]);
  });

  it('Date collapse disjoint intervals with no per', async function () {
    (await this.disjointDateCollapseNoPer.exec(this.ctx)).should.eql([
      await this.date1_2Interval.exec(this.ctx),
      await this.date4_15Interval.exec(this.ctx)
    ]);
  });

  it('Date collapse per day', async function () {
    (await this.dateCollapsePerDay.exec(this.ctx)).should.eql([
      await this.date1_2Interval.exec(this.ctx),
      await this.date4_15Interval.exec(this.ctx)
    ]);
  });

  it('Date collapse per month', async function () {
    (await this.dateCollapsePerMonth.exec(this.ctx)).should.eql([
      await this.date1_15Interval.exec(this.ctx)
    ]);
  });

  it('Time collapse overlapping intervals with no per', async function () {
    (await this.overlappingTimeCollapseNoPer.exec(this.ctx)).should.eql([
      await this.time1_15Interval.exec(this.ctx)
    ]);
  });

  it('Time collapse adjacent intervals with no per', async function () {
    (await this.adjacentTimeCollapseNoPer.exec(this.ctx)).should.eql([
      await this.time1_15Interval.exec(this.ctx)
    ]);
  });

  it('Time collapse disjoint intervals with no per', async function () {
    (await this.disjointTimeCollapseNoPer.exec(this.ctx)).should.eql([
      await this.time1_2Interval.exec(this.ctx),
      await this.time4_15Interval.exec(this.ctx)
    ]);
  });

  it('Time collapse per second', async function () {
    (await this.timeCollapsePerSecond.exec(this.ctx)).should.eql([
      await this.time1_2Interval.exec(this.ctx),
      await this.time4_15Interval.exec(this.ctx)
    ]);
  });

  it('Time collapse per minute', async function () {
    (await this.timeCollapsePerMinute.exec(this.ctx)).should.eql([
      await this.time1_15Interval.exec(this.ctx)
    ]);
  });

  it('Quantity uses default per unit', async function () {
    const quantity_collapse = await this.quantityIntervalCollapseNoPer.exec(this.ctx);
    quantity_collapse.should.eql(await this.expectedQuantityList.exec(this.ctx));
    quantity_collapse.should.eql(await this.quantityIntervalCollapsePerUnit1.exec(this.ctx));
  });

  it('Quantity with separated intervals', async function () {
    (await this.collapseSeparatedQuantity.exec(this.ctx)).should.eql(
      await this.quantitySeparatedBy3.exec(this.ctx)
    );
  });

  it('Quantity combines disjoint intervals that are within per width', async function () {
    (await this.collapseSeparatedQuantityPer3.exec(this.ctx)).should.eql(
      await this.expectedSeparatedQuantity.exec(this.ctx)
    );
  });

  it('Quantity with units uses point type as default per value', async function () {
    (await this.collapseDisjointQuantityUnits.exec(this.ctx)).should.eql(
      await this.expectedQuantityUnitsCollapse.exec(this.ctx)
    );
  });

  it('Quantity with units disjoint but within per', async function () {
    (await this.collapseQuantityUnitsWithinPer.exec(this.ctx)).should.eql(
      await this.expectedQuantityUnitsCollapse.exec(this.ctx)
    );
  });

  it('Quantity with units disjoint and not within per', async function () {
    (await this.collapseQuantityUnitsNotWithinPer.exec(this.ctx)).should.eql(
      await this.quantityMeterIntervalList.exec(this.ctx)
    );
  });

  it('Quantity with units with null low value', async function () {
    (await this.collapseQuantityNullLowUnitsWithinPer.exec(this.ctx)).should.eql(
      await this.collapseQuantityNullLowUnitsWithinPerExpected.exec(this.ctx)
    );
  });

  it('Quantity with units with null low and high values', async function () {
    (await this.collapseQuantityIntervalListWithNulls.exec(this.ctx)).should.eql(
      await this.collapseQuantityIntervalListWithNullsExpected.exec(this.ctx)
    );
  });

  it('Quantity with units with null high value', async function () {
    (await this.collapseQuantityNullHighUnitsWithinPer.exec(this.ctx)).should.eql(
      await this.collapseQuantityNullHighUnitsWithinPerExpected.exec(this.ctx)
    );
  });

  it('Quantity Intervals no overlap with null low', async function () {
    (await this.collapseQuantityIntervalListWithNullLowNoOverlap.exec(this.ctx)).should.eql(
      await this.collapseQuantityIntervalListWithNullLowNoOverlapExpected.exec(this.ctx)
    );
  });

  it('Quantity Intervals no overlap with null high', async function () {
    (await this.collapseQuantityIntervalListWithNullHighNoOverlap.exec(this.ctx)).should.eql(
      await this.collapseQuantityIntervalListWithNullHighNoOverlapExpected.exec(this.ctx)
    );
  });

  it('with Interval that has null low values', async function () {
    (await this.collapseNullLowIntervalList.exec(this.ctx)).should.eql(
      await this.expectedNullLowIntervalCollapse.exec(this.ctx)
    );
  });

  it('with Interval that has null high values', async function () {
    (await this.collapseNullHighIntervalList.exec(this.ctx)).should.eql(
      await this.expectedNullHighIntervalCollapse.exec(this.ctx)
    );
  });

  it('with Date Interval that has null start values', async function () {
    (await this.dateTimeNullStartCollapse.exec(this.ctx)).should.eql(
      await this.dateTimeNullStartCollapseExpected.exec(this.ctx)
    );
  });

  it('with Date Interval that has null high values', async function () {
    (await this.dateTimeNullEndCollapse.exec(this.ctx)).should.eql(
      await this.dateTimeNullEndCollapseExpected.exec(this.ctx)
    );
  });

  it('with Date Interval that has null high and low values', async function () {
    (await this.dateTimeNullStartEndCollapse.exec(this.ctx)).should.eql(
      await this.dateTimeNullStartEndCollapseExpected.exec(this.ctx)
    );
  });

  it('should ignore nulls in list of Intervals', async function () {
    (await this.nullInCollapse.exec(this.ctx)).should.eql(
      await this.expectedResultWithNull.exec(this.ctx)
    );
  });

  it.skip('should return null if list is null', async function () {
    // TODO: Translation Error
    should.not.exist(await this.nullCollapse.exec(this.ctx));
  });

  it('should use default per unit if per is expicitly null', async function () {
    (await this.nullPerCollapse.exec(this.ctx)).should.eql(
      await this.expectedResultNullPer.exec(this.ctx)
    );
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

  it('expands a closed interval per day', async function () {
    // define ClosedSinglePerDay: expand { Interval[@2018-01-01, @2018-01-03] } per day
    const a = await this.closedSinglePerDay.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );
  });

  it('expands a closed interval per week', async function () {
    // define ClosedSinglePerWeek: expand { Interval[@2018-01-01, @2018-01-21] } per week
    const a = await this.closedSinglePerWeek.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }'
    );
  });

  it('expands a closed interval per month', async function () {
    // define ClosedSinglePerMonth: expand { Interval[@2018-01-01, @2018-03-31] } per month
    // define ClosedSinglePerMonthTrunc: expand { Interval[@2018-01-01, @2018-04-29] } per month
    const a = await this.closedSinglePerMonth.exec(this.ctx);
    const b = await this.closedSinglePerMonthTrunc.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }');
    prettyList(b).should.equal(
      '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03], [2018-04, 2018-04] }'
    );
  });

  it('expands a closed interval per year', async function () {
    // define ClosedSinglePerYear: expand { Interval[@2016-01-01, @2018-12-32] } per year
    // define ClosedSinglePerYearTrunc: expand { Interval[@2016-01-01, @2019-12-30] } per year
    const a = await this.closedSinglePerYear.exec(this.ctx);
    const b = await this.closedSinglePerYearTrunc.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');
    prettyList(b).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018], [2019, 2019] }');
  });

  it('ignores null item in list', async function () {
    // define NullInList: expand { Interval[@2018-01-01, @2018-01-03], null } per day
    const a = await this.nullInList.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );
  });

  it('expands two overlapping intervals', async function () {
    // define Overlapping: expand { Interval[@2018-01-01, @2018-01-03], Interval[@2018-01-02, @2018-01-04] } per day
    const a = await this.overlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03], [2018-01-04, 2018-01-04] }'
    );
  });

  it('expands two non overlapping intervals', async function () {
    // define NonOverlapping: expand { Interval[@2018-01-01, @2018-01-03], Interval[@2018-01-08, @2018-01-08] } per day
    const a = await this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03], [2018-01-08, 2018-01-08] }'
    );
  });

  it('expands an interval with mid boundaries per day', async function () {
    // define MidBoundariesPerDay: expand { Interval[@2017-12-30, @2018-01-01] } per day
    const a = await this.midBoundariesPerDay.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2017-12-30, 2017-12-30], [2017-12-31, 2017-12-31], [2018-01-01, 2018-01-01] }'
    );
  });

  it('expands an interval with mid boundaries per month', async function () {
    // define MidBoundariesPerMonth: expand { Interval[@2017-11-14, @2018-01-18] } per month
    const a = await this.midBoundariesPerMonth.exec(this.ctx);
    prettyList(a).should.equal('{ [2017-11, 2017-11], [2017-12, 2017-12], [2018-01, 2018-01] }');
  });

  it('expands an interval with mid boundaries per year', async function () {
    // define MidBoundariesPerYear: expand { Interval[@2016-04-06, @2018-04-06] } per year
    const a = await this.midBoundariesPerYear.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');
  });

  it('expands an interval with default per', async function () {
    // define NoPerDefaultDay: expand { Interval[@2018-01-01, @2018-01-03] }
    let a = await this.noPerDefaultDay.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );

    // define NoPerDefaultMonth: expand { Interval[@2018-01, @2018-03] }
    a = await this.noPerDefaultMonth.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }');

    // define NoPerDefaultYear: expand { Interval[@2016, @2018] }
    a = await this.noPerDefaultYear.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');

    // define NoPerDefaultMonthWithMismatch: expand { Interval[@2016, @2018-03] }
    a = await this.noPerDefaultMonthWithMismatch.exec(this.ctx);
    prettyList(a).should.equal('{ [2016, 2016], [2017, 2017], [2018, 2018] }');
  });

  it('expands interval with open ends', async function () {
    // define OpenStart: expand { Interval(@2018-01-01, @2018-01-03] } per day
    let a = await this.openStart.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }');

    // define OpenEnd: expand { Interval[@2018-01-01, @2018-01-03) } per day
    a = await this.openEnd.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02] }');

    // define OpenBoth: expand { Interval(@2018-01-01, @2018-01-03) } per day
    a = await this.openBoth.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-02, 2018-01-02] }');
  });

  it('handles ends with mismatched precision', async function () {
    // define MismatchPrecision: expand { Interval[@2018-01-01, @2018-03] } per month
    let e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(await this.mismatchPrecision.exec(this.ctx)).should.equal(e);

    // define MismatchPrecisionResultLongerThanInput: expand { Interval[@2018-01, @2018-02-28] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02] }';
    prettyList(await this.mismatchPrecisionResultLongerThanInput.exec(this.ctx)).should.equal(e);
  });

  it('returns an empty list if we get an empty list', async function () {
    // define EmptyList: List<Interval<Date>>{}
    const a = await this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', async function () {
    // define NullOpen: expand { Interval[null, @2018-01-03] } per day
    let a = await this.nullOpen.exec(this.ctx);
    should.not.exist(a);

    // define NullClose: expand { Interval[@2018-01-01, null] } per day
    a = await this.nullClose.exec(this.ctx);
    should.not.exist(a);

    // define NullBoth: expand { Interval[null, null] } per day
    a = await this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns empty list when per is more precise than the interval ends', async function () {
    // define MonthDayPer: expand { Interval[@2018-01, @2018-03] } per day
    (await this.monthDayPer.exec(this.ctx)).should.be.empty();
  });

  it('returns null when per not applicable', async function () {
    // define BadPerMinute: expand { Interval[@2018-01-01, @2018-01-04] } per minute
    let a = await this.badPerMinute.exec(this.ctx);
    should.not.exist(a);

    // define BadPerGram: expand { Interval[@2018-01-01, @2018-01-04] } per 1 'g'
    a = await this.badPerGram.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('DateTimeIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands a millisecond precision datetime', async function () {
    // define MsPrecPerYear: expand { Interval[@2016-01-01T00:00:00.000+00:00, @2018-01-01T00:00:00.000+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.msPrecPerYear.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMonth: expand { Interval[@2018-01-01T00:00:00.000+00:00, @2018-03-01T00:00:00.000+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(await this.msPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define MsPrecPerWeek: expand { Interval[@2018-01-01T00:00:00.000+00:00, @2018-01-21T00:00:00.000+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(await this.msPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define MsPrecPerDay: expand { Interval[@2018-01-01T00:00:00.000+00:00, @2018-01-03T00:00:00.000+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(await this.msPrecPerDay.exec(this.ctx)).should.equal(e);

    // define MsPrecPerHour: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T03:00:00.000+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00] }';
    prettyList(await this.msPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMinute: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:02:00.000+00:00] } per minute
    e =
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00], [2018-01-01T01:02+00:00, 2018-01-01T01:02+00:00] }';
    prettyList(await this.msPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define MsPrecPerSecond: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:02.000+00:00] } per second
    e =
      '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00], [2018-01-01T01:00:02+00:00, 2018-01-01T01:00:02+00:00] }';
    prettyList(await this.msPrecPerSecond.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMillisecond: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:00.001+00:00] } per millisecond
    e =
      '{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.000+00:00], [2018-01-01T01:00:00.001+00:00, 2018-01-01T01:00:00.001+00:00] }';
    prettyList(await this.msPrecPerMillisecond.exec(this.ctx)).should.equal(e);
  });

  it('expands a second precision datetime', async function () {
    // define SecPrecPerYear: expand { Interval[@2016-01-01T00:00:00+00:00, @2018-01-01T00:00:00+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.secPrecPerYear.exec(this.ctx)).should.equal(e);

    // define SecPrecPerMonth: expand { Interval[@2018-01-01T00:00:00+00:00, @2018-03-01T00:00:00+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(await this.secPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define SecPrecPerWeek: expand { Interval[@2018-01-01T00:00:00+00:00, @2018-01-21T00:00:00+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(await this.secPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define SecPrecPerDay: expand { Interval[@2018-01-01T00:00:00+00:00, @2018-01-03T00:00:00+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(await this.secPrecPerDay.exec(this.ctx)).should.equal(e);

    // define SecPrecPerHour: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T03:00:00+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00] }';
    prettyList(await this.secPrecPerHour.exec(this.ctx)).should.equal(e);

    // define SecPrecPerMinute: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:02:00+00:00] } per minute
    e =
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00], [2018-01-01T01:02+00:00, 2018-01-01T01:02+00:00] }';
    prettyList(await this.secPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define SecPrecPerSecond: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:00:01+00:00] } per second
    e =
      '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00] }';
    prettyList(await this.secPrecPerSecond.exec(this.ctx)).should.equal(e);

    (await this.secPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands a minute precision datetime', async function () {
    // define MinPrecPerYear: expand { Interval[@2016-01-01T00:00+00:00, @2018-01-01T00:00+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.minPrecPerYear.exec(this.ctx)).should.equal(e);

    // define MinPrecPerMonth: expand { Interval[@2018-01-01T00:00+00:00, @2018-03-01T00:00+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(await this.minPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define MinPrecPerWeek: expand { Interval[@2018-01-01T00:00+00:00, @2018-01-21T00:00+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(await this.minPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define MinPrecPerDay: expand { Interval[@2018-01-01T00:00+00:00, @2018-01-03T00:00+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(await this.minPrecPerDay.exec(this.ctx)).should.equal(e);

    // define MinPrecPerHour: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T03:00+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00] }';
    prettyList(await this.minPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MinPrecPerMinute: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T01:01+00:00] } per minute
    e =
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00] }';
    prettyList(await this.minPrecPerMinute.exec(this.ctx)).should.equal(e);

    (await this.minPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.minPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands an hour precision datetime', async function () {
    // define HourPrecPerYear: expand { Interval[@2016-01-01T00+00:00, @2018-01-01T00+00:00] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.hourPrecPerYear.exec(this.ctx)).should.equal(e);

    // define HourPrecPerMonth: expand { Interval[@2018-01-01T00+00:00, @2018-03-01T00+00:00] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(await this.hourPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define HourPrecPerWeek: expand { Interval[@2018-01-01T00+00:00, @2018-01-21T00+00:00] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14], [2018-01-15, 2018-01-21] }';
    prettyList(await this.hourPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define HourPrecPerDay: expand { Interval[@2018-01-01T00+00:00, @2018-01-03T00+00:00] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }';
    prettyList(await this.hourPrecPerDay.exec(this.ctx)).should.equal(e);

    // define HourPrecPerHour: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T02+00:00] } per hour
    e =
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00] }';
    prettyList(await this.hourPrecPerHour.exec(this.ctx)).should.equal(e);

    (await this.hourPrecPerMinute.exec(this.ctx)).should.be.empty();
    (await this.hourPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.hourPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands a day precision datetime', async function () {
    // define DayPrecPerYear: expand { Interval[DateTime(2016,01,01), DateTime(2018,01,01)] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.dayPrecPerYear.exec(this.ctx)).should.equal(e);

    // define DayPrecPerMonth: expand { Interval[DateTime(2018,01,01), DateTime(2018,03,01)] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02], [2018-03, 2018-03] }';
    prettyList(await this.dayPrecPerMonth.exec(this.ctx)).should.equal(e);

    // define DayPrecPerWeek: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,14)] } per week
    e = '{ [2018-01-01, 2018-01-07], [2018-01-08, 2018-01-14] }';
    prettyList(await this.dayPrecPerWeek.exec(this.ctx)).should.equal(e);

    // define DayPrecPerDay: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,02)] } per day
    e = '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02] }';
    prettyList(await this.dayPrecPerDay.exec(this.ctx)).should.equal(e);

    (await this.dayPrecPerHour.exec(this.ctx)).should.be.empty();
    (await this.dayPrecPerMinute.exec(this.ctx)).should.be.empty();
    (await this.dayPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.dayPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands a month precision datetime', async function () {
    // define MonthPrecPerYear: expand { Interval[DateTime(2016,01), DateTime(2018,01)] } per year
    let e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.monthPrecPerYear.exec(this.ctx)).should.equal(e);

    // define MonthPrecPerMonth: expand { Interval[DateTime(2018,01), DateTime(2018,02)] } per month
    e = '{ [2018-01, 2018-01], [2018-02, 2018-02] }';
    prettyList(await this.monthPrecPerMonth.exec(this.ctx)).should.equal(e);

    (await this.monthPrecPerWeek.exec(this.ctx)).should.be.empty();
    (await this.monthPrecPerDay.exec(this.ctx)).should.be.empty();
    (await this.monthPrecPerHour.exec(this.ctx)).should.be.empty();
    (await this.monthPrecPerMinute.exec(this.ctx)).should.be.empty();
    (await this.monthPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.monthPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands a year precision datetime', async function () {
    // define YearPrecPerYear: expand { Interval[DateTime(2016), DateTime(2018)] } per year
    const e = '{ [2016, 2016], [2017, 2017], [2018, 2018] }';
    prettyList(await this.yearPrecPerYear.exec(this.ctx)).should.equal(e);

    (await this.yearPrecPerMonth.exec(this.ctx)).should.be.empty();
    (await this.yearPrecPerWeek.exec(this.ctx)).should.be.empty();
    (await this.yearPrecPerDay.exec(this.ctx)).should.be.empty();
    (await this.yearPrecPerHour.exec(this.ctx)).should.be.empty();
    (await this.yearPrecPerMinute.exec(this.ctx)).should.be.empty();
    (await this.yearPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.yearPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('ignores null item in list', async function () {
    // define NullInList: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T01+00:00], null } per hour
    const a = await this.nullInList.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01T01+00:00, 2018-01-01T01+00:00] }');
  });

  it('expands two overlapping intervals', async function () {
    // define Overlapping: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T03+00:00], Interval[@2018-01-01T02+00:00, @2018-01-01T04+00:00] } per hour
    const a = await this.overlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T03+00:00, 2018-01-01T03+00:00], [2018-01-01T04+00:00, 2018-01-01T04+00:00] }'
    );
  });

  it('expands two non overlapping intervals', async function () {
    // define NonOverlapping: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T02+00:00], Interval[@2018-01-01T05+00:00, @2018-01-01T05+00:00] } per hour
    const a = await this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01+00:00, 2018-01-01T01+00:00], [2018-01-01T02+00:00, 2018-01-01T02+00:00], [2018-01-01T05+00:00, 2018-01-01T05+00:00] }'
    );
  });

  it('expands an interval with default per', async function () {
    // # define NoPerDefaultMS: expand { Interval[@2018-01-01T01:00:00.000+00:00, @2018-01-01T01:00:00.001+00:00] }
    let a = await this.noPerDefaultMS.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01:00:00.000+00:00, 2018-01-01T01:00:00.000+00:00], [2018-01-01T01:00:00.001+00:00, 2018-01-01T01:00:00.001+00:00] }'
    );

    // # define NoPerDefaultSec: expand { Interval[@2018-01-01T01:00:00+00:00, @2018-01-01T01:00:01+00:00] }
    a = await this.noPerDefaultSec.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01:00:00+00:00, 2018-01-01T01:00:00+00:00], [2018-01-01T01:00:01+00:00, 2018-01-01T01:00:01+00:00] }'
    );

    // # define NoPerDefaultMin: expand { Interval[@2018-01-01T01:00+00:00, @2018-01-01T01:01+00:00] }
    a = await this.noPerDefaultMin.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01T01:00+00:00, 2018-01-01T01:00+00:00], [2018-01-01T01:01+00:00, 2018-01-01T01:01+00:00] }'
    );

    // define NoPerDefaultHour: expand { Interval[@2018-01-01T01+00:00, @2018-01-01T01+00:00] }
    a = await this.noPerDefaultHour.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01T01+00:00, 2018-01-01T01+00:00] }');

    // define NoPerDefaultDay: expand { Interval[DateTime(2018,01,01), DateTime(2018,01,01)] }
    a = await this.noPerDefaultDay.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01-01, 2018-01-01] }');

    // define NoPerDefaultMonth: expand { Interval[DateTime(2018,01), DateTime(2018,01)]  }
    a = await this.noPerDefaultMonth.exec(this.ctx);
    prettyList(a).should.equal('{ [2018-01, 2018-01] }');

    // define NoPerDefaultYear: expand { Interval[DateTime(2018), DateTime(2018)]  }
    a = await this.noPerDefaultYear.exec(this.ctx);
    prettyList(a).should.equal('{ [2018, 2018] }');
  });

  it('expands interval with open ends', async function () {
    // define OpenStart: expand { Interval(@2018-01-01T01+00:00, @2018-01-03T01+00:00] } per day
    let a = await this.openStart.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );

    // define OpenEnd: expand { Interval[@2018-01-01T01+00:00, @2018-01-03T01+00:00) } per day
    a = await this.openEnd.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );

    // define OpenBoth: expand { Interval(@2018-01-01T01+00:00, @2018-01-03T01+00:00) } per day
    a = await this.openBoth.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2018-01-01, 2018-01-01], [2018-01-02, 2018-01-02], [2018-01-03, 2018-01-03] }'
    );
  });

  it('handles ends with mismatched precision', async function () {
    // define MismatchPrecision: expand { Interval[@2012-01-01T12:00+00:00, @2012-01-02T12:00:00+00:00] } per day
    let e = '{ [2012-01-01, 2012-01-01], [2012-01-02, 2012-01-02] }';
    prettyList(await this.mismatchPrecision.exec(this.ctx)).should.equal(e);

    // define MismatchPrecisionResultLongerThanInput: expand { Interval[@2012-01-01T13:00:00+00:00, @2012-01-02T12:59+00:00] } per day
    e = '{ [2012-01-01, 2012-01-01], [2012-01-02, 2012-01-02] }';
    prettyList(await this.mismatchPrecisionResultLongerThanInput.exec(this.ctx)).should.equal(e);
  });

  it('returns an empty list if we get an empty list', async function () {
    // define EmptyList: List<Interval<Date>>{}
    const a = await this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', async function () {
    // define NullOpen: expand { Interval[null, @2018-01-03T01+00:00] } per day
    let a = await this.nullOpen.exec(this.ctx);
    should.not.exist(a);

    // define NullClose: expand { Interval[@2018-01-01T01+00:00, null] } per day
    a = await this.nullClose.exec(this.ctx);
    should.not.exist(a);

    // define NullBoth: expand { Interval[null, null] } per day
    a = await this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable', async function () {
    // define BadPerGram: expand { Interval[@2018-01-01T01+00:00, @2018-01-04T01+00:00] } per 1 'g'
    const a = await this.badPerGram.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('TimeIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands a millisecond precision time', async function () {
    // define MsPrecPerHour: expand { Interval[@T01:00:00.000, @T03:00:00.000] } per hour
    let e = '{ [01, 01], [02, 02], [03, 03] }';
    prettyList(await this.msPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMinute: expand { Interval[@T01:00:00.000, @T01:02:00.000] } per minute
    e = '{ [01:00, 01:00], [01:01, 01:01], [01:02, 01:02] }';
    prettyList(await this.msPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define MsPrecPerSecond: expand { Interval[@T01:00:00.000, @T01:00:02.000] } per second
    e = '{ [01:00:00, 01:00:00], [01:00:01, 01:00:01], [01:00:02, 01:00:02] }';
    prettyList(await this.msPrecPerSecond.exec(this.ctx)).should.equal(e);

    // define MsPrecPerMillisecond: expand { Interval[@T01:00:00.000, @T01:00:00.001] } per millisecond
    e = '{ [01:00:00.000, 01:00:00.000], [01:00:00.001, 01:00:00.001] }';
    prettyList(await this.msPrecPerMillisecond.exec(this.ctx)).should.equal(e);
  });

  it('expands a second precision datetime', async function () {
    // define SecPrecPerHour: expand { Interval[@T01:00:00, @T03:00:00] } per hour
    let e = '{ [01, 01], [02, 02], [03, 03] }';
    prettyList(await this.secPrecPerHour.exec(this.ctx)).should.equal(e);

    // define SecPrecPerMinute: expand { Interval[@T01:00:00, @T01:02:00] } per minute
    e = '{ [01:00, 01:00], [01:01, 01:01], [01:02, 01:02] }';
    prettyList(await this.secPrecPerMinute.exec(this.ctx)).should.equal(e);

    // define SecPrecPerSecond: expand { Interval[@T01:00:00, @T01:00:01] } per second
    e = '{ [01:00:00, 01:00:00], [01:00:01, 01:00:01] }';
    prettyList(await this.secPrecPerSecond.exec(this.ctx)).should.equal(e);

    (await this.secPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands a minute precision datetime', async function () {
    // define MinPrecPerHour: expand { Interval[@T01:00, @T03:00] } per hour
    let e = '{ [01, 01], [02, 02], [03, 03] }';
    prettyList(await this.minPrecPerHour.exec(this.ctx)).should.equal(e);

    // define MinPrecPerMinute: expand { Interval[@T01:00, @T01:01] } per minute
    e = '{ [01:00, 01:00], [01:01, 01:01] }';
    prettyList(await this.minPrecPerMinute.exec(this.ctx)).should.equal(e);

    (await this.minPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.minPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });

  it('expands an hour precision datetime', async function () {
    // define HourPrecPerHour: expand { Interval[@T01, @T02] } per hour
    const e = '{ [01, 01], [02, 02] }';
    prettyList(await this.hourPrecPerHour.exec(this.ctx)).should.equal(e);

    (await this.hourPrecPerMinute.exec(this.ctx)).should.be.empty();
    (await this.hourPrecPerSecond.exec(this.ctx)).should.be.empty();
    (await this.hourPrecPerMillisecond.exec(this.ctx)).should.be.empty();
  });
});

describe('QuantityIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands single intervals', async function () {
    // define ClosedSingleGPerG: expand { Interval[2 'g', 4 'g'] } per 1 'g'
    let a = await this.closedSingleGPerG.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define ClosedSingleGPerGDecimal: expand { Interval[2.1 'g', 4.1 'g'] } per 1 'g'
    a = await this.closedSingleGPerGDecimal.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define ClosedSingleGPerMG: expand { Interval[2 'g', 2.003 'g'] } per 1 'mg'
    a = await this.closedSingleGPerMG.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2000 'mg', 2000 'mg'], [2001 'mg', 2001 'mg'], [2002 'mg', 2002 'mg'], [2003 'mg', 2003 'mg'] }"
    );

    // define ClosedSingleMGPerGTrunc: expand { Interval[2999 'mg', 4200 'mg'] } per 1 'g'
    a = await this.closedSingleMGPerGTrunc.exec(this.ctx);
    prettyList(a).should.equal("{ [2999 'mg', 3998 'mg'] }");

    // define ClosedSingleMGPerMGTrunc: expand { Interval[2000 'mg', 4500 'mg'] } per 800 'mg'
    a = await this.closedSingleMGPerMGTrunc.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2000 'mg', 2799 'mg'], [2800 'mg', 3599 'mg'], [3600 'mg', 4399 'mg'] }"
    );

    // define ClosedSingleMGPerMGDecimal: expand { Interval[2000.01 'mg', 4500 'mg'] } per 800 'mg'
    a = await this.closedSingleMGPerMGDecimal.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2000 'mg', 2799 'mg'], [2800 'mg', 3599 'mg'], [3600 'mg', 4399 'mg'] }"
    );
  });

  it('expands lists of multiple intervals', async function () {
    // define NullInList: expand { Interval[2 'g', 4 'g'], null } per 1 'g'
    let a = await this.nullInList.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define Overlapping: expand { Interval[2 'g', 4 'g'], Interval[3 'g', 5 'g'] } per 1 'g'
    a = await this.overlapping.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'], [5 'g', 5 'g'] }"
    );

    // define NonOverlapping: expand { Interval[2 'g', 4 'g'], Interval[6 'g', 6 'g'] } per 1 'g'
    a = await this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal(
      "{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'], [6 'g', 6 'g'] }"
    );
  });

  it('expands interval using the first items units if no per provided', async function () {
    // define NoPerDefaultM: expand { Interval[2 'm', 400 'cm'] }
    let a = await this.noPerDefaultM.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'm', 2 'm'], [3 'm', 3 'm'], [4 'm', 4 'm'] }");

    // define NoPerDefaultG: expand { Interval[2 'g', 4 'g'] }
    a = await this.noPerDefaultG.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");
  });

  it('expands interval with open ends', async function () {
    // define OpenStart: expand { Interval(2 'g', 4 'g'] } per 1 'g'
    let a = await this.openStart.exec(this.ctx);
    prettyList(a).should.equal("{ [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define OpenEnd: expand { Interval[2 'g', 4 'g') } per 1 'g'
    a = await this.openEnd.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'] }");

    // define OpenBoth: expand { Interval(2 'g', 4 'g') } per 1 'g'
    a = await this.openBoth.exec(this.ctx);
    prettyList(a).should.equal("{ [3 'g', 3 'g'] }");

    // define OpenBothDecimal: expand { Interval(2.1 'g', 4.1 'g') } per 1 'g'
    a = await this.openBothDecimal.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");

    // define OpenBothDecimalTrunc: expand { Interval(2.1 'g', 4.101 'g') } per 1 'g'
    a = await this.openBothDecimalTrunc.exec(this.ctx);
    prettyList(a).should.equal("{ [2 'g', 2 'g'], [3 'g', 3 'g'], [4 'g', 4 'g'] }");
  });

  it('returns an empty list if we get an empty list or if there are no results', async function () {
    // define EmptyList: List<Interval<Date>>{}
    let a = await this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);

    // define PerTooBig: expand { Interval[2 'g', 4 'g'], null } per 5 'g'
    a = await this.perTooBig.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', async function () {
    // define NullClose: expand { Interval[2 'g', null] } per 1 'g'
    let a = await this.nullClose.exec(this.ctx);
    should.not.exist(a);
    // define NullOpen: expand { Interval[null, 4 'g'] } per 1 'g'
    a = await this.nullOpen.exec(this.ctx);
    should.not.exist(a);
    // define NullBoth: expand { Interval[null, null] } per 1 'g'
    a = await this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable or mismatch interval', async function () {
    // define BadPerMinute: expand { Interval(2 'g', 4 'g'] } per 1 minute
    let a = await this.badPerMinute.exec(this.ctx);
    should.not.exist(a);

    // define BadPerGram: expand { Interval(2 'km', 4 'km'] }  per 1 'g'
    a = await this.badPerGram.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('IntegerIntervalExpand', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('expands single intervals', async function () {
    // define ClosedSinglePer1: expand { Interval[2, 4] } per 1 '1'
    let a = await this.closedSinglePer1.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');

    // define ClosedSinglePer3: expand { Interval[2, 10] } per 3 '1'
    a = await this.closedSinglePer3.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 4], [5, 7], [8, 10] }');

    // define ClosedSinglePer3NoteTheWidth: expand { Interval[2, 4] } per 3 '1'
    a = await this.closedSinglePer3NoteTheWidth.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 4] }');
  });

  it('expands lists of multiple intervals', async function () {
    // define NullInList: expand { Interval[2, 4], null } per 1 '1'
    let a = await this.nullInList.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');

    // define Overlapping: expand { Interval[2, 4], Interval[3, 5] } per 1 '1'
    a = await this.overlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4], [5, 5] }');

    // define NonOverlapping: expand { Interval[2, 4], Interval[6, 6] } per 1 '1'
    a = await this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4], [6, 6] }');
  });

  it('expands interval using default per of 1', async function () {
    // define NoPer: expand { Interval[2, 4] }
    const a = await this.noPer.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');
  });

  it('expands interval with open ends', async function () {
    // define OpenStart: expand { Interval(2, 4] } per 1 '1'
    let a = await this.openStart.exec(this.ctx);
    prettyList(a).should.equal('{ [3, 3], [4, 4] }');

    // define OpenEnd: expand { Interval[2, 4) } per 1 '1'
    a = await this.openEnd.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3] }');

    // define OpenBoth: expand { Interval(2, 4) } per 1 '1'
    a = await this.openBoth.exec(this.ctx);
    prettyList(a).should.equal('{ [3, 3] }');
  });

  it('returns an empty list if we get an empty list or if there are no results', async function () {
    // define EmptyList: List<Interval<Integer>>{}
    let a = await this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);

    // define PerTooBig: expand { Interval[2, 4], null } per 5 '1'
    a = await this.perTooBig.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.length.should.equal(0);
  });

  it('returns null with open ended intervals', async function () {
    // define NullClose: expand { Interval[2, null] } per 1 '1'
    let a = await this.nullClose.exec(this.ctx);
    should.not.exist(a);
    // define NullOpen: expand { Interval[null, 4] } per 1 '1'
    a = await this.nullOpen.exec(this.ctx);
    should.not.exist(a);
    // define NullBoth: expand { Interval[null, null] } per 1 '1'
    a = await this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable or mismatch interval', async function () {
    // define BadPerMinute: expand { Interval(2, 4] } per 1 minute
    const a = await this.badPerMinute.exec(this.ctx);
    should.not.exist(a);
  });

  it('produces a more precise value for output intervals', async function () {
    // define PerDecimalMorePrecise: expand { Interval[10, 10] } per 0.1
    const a = await this.perDecimalMorePrecise.exec(this.ctx);
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

  it('expands single intervals', async function () {
    // define ClosedSingle: expand { Interval[2, 5] } per 1.5 '1'
    let a = await this.closedSingle.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [3.5, 4.99999999] }');

    // define ClosedSingle1: expand { Interval[2.5, 10] } per 2 '1'
    a = await this.closedSingle1.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3], [4, 5], [6, 7], [8, 9] }');

    // define ClosedSingle2: expand { Interval[2, 4.5] } per 0.5 '1'
    a = await this.closedSingle2.exec(this.ctx);
    prettyList(a).should.equal(
      '{ [2, 2.49999999], [2.5, 2.99999999], [3, 3.49999999], [3.5, 3.99999999], [4, 4.49999999] }'
    );
  });

  it('expands lists of multiple intervals', async function () {
    // define NullInList: expand { Interval[2, 5], null } per 1.5 '1'
    let a = await this.nullInList.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [3.5, 4.99999999] }');

    // define Overlapping: expand { Interval[2, 5], Interval[4, 7] } per 1.5 '1'
    a = await this.overlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [3.5, 4.99999999], [5, 6.49999999] }');

    // define NonOverlapping: expand { Interval[2, 4], Interval[6, 8] } per 1.5 '1'
    a = await this.nonOverlapping.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999], [6, 7.49999999] }');
  });

  it('expands interval using default per of 1', async function () {
    // define NoPer: expand { Interval[2.5, 4.5] }
    const a = await this.noPer.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 2], [3, 3], [4, 4] }');
  });

  it('expands interval with open ends', async function () {
    // define OpenStart: expand { Interval(2, 5] } per 1.5 '1'
    let a = await this.openStart.exec(this.ctx);
    prettyList(a).should.equal('{ [3, 4.49999999] }');

    // define OpenEnd: expand { Interval[2, 5) } per 1.5 '1'
    a = await this.openEnd.exec(this.ctx);
    prettyList(a).should.equal('{ [2, 3.49999999] }');

    // define OpenBoth: expand { Interval(2, 5) } per 1.5 '1'
    (await this.openBoth.exec(this.ctx)).should.be.empty();
  });

  it('returns an empty list if we get an empty list', async function () {
    // define EmptyList: List<Interval<Decimal>>{}
    const a = await this.emptyList.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.should.be.empty();
  });

  it('returns an empty list if we get an interval with a null boundary', async function () {
    // define PerTooBig: expand { Interval[2, 4], null } per 5.5 '1'
    const a = await this.perTooBig.exec(this.ctx);
    a.should.be.instanceof(Array);
    a.should.be.empty();
  });

  it('returns null with open ended intervals', async function () {
    // define NullClose: expand { Interval[2, null] } per 1.5 '1'
    let a = await this.nullClose.exec(this.ctx);
    should.not.exist(a);
    // define NullOpen: expand { Interval[null, 4] } per 1.5 '1'
    a = await this.nullOpen.exec(this.ctx);
    should.not.exist(a);
    // define NullBoth: expand { Interval[null, null] } per 1.5 '1'
    a = await this.nullBoth.exec(this.ctx);
    should.not.exist(a);
  });

  it('returns null when per not applicable or mismatch interval', async function () {
    // define BadPerMinute: expand { Interval(2.1, 4.1] } per 0.5 minute
    const a = await this.badPerMinute.exec(this.ctx);
    should.not.exist(a);
  });
});

describe('SameAs', () => {
  beforeEach(function () {
    setup(this, data);
  });

  it('returns true when both intervals values are null and closed', async function () {
    // define NullBoth: Interval[null,null] same as Interval[null,null]
    (await this.nullBoth.exec(this.ctx)).should.be.true();
  });

  it('returns false when one intervals low and high are null', async function () {
    // define NullOne: Interval[DateTime(2018,01,01), DateTime(2018,02,02)] same as Interval[null,null]
    (await this.nullOne.exec(this.ctx)).should.be.false();
  });

  it('returns true when both intervals are the same', async function () {
    // define Equal: Interval[DateTime(2018,01,01), DateTime(2018,01,01)] same as Interval[DateTime(2018,01,01), DateTime(2018,01,01)]
    (await this.equal.exec(this.ctx)).should.be.true();
  });

  it('returns false when both intervals are not the same', async function () {
    // define NotEqual: Interval[DateTime(2018,01,01), DateTime(2018,01,01)] same as Interval[DateTime(2018,02,01), DateTime(2018,05,01)]
    (await this.notEqual.exec(this.ctx)).should.be.false();
  });

  it('returns true when comparing date and datetime because precision is preserved when converting date to datetime', async function () {
    // define DateTimeAndDateComparisonEqual: Interval[DateTime(2018,01,01), DateTime(2018,01,01)] same as Interval[Date(2018,01,01), Date(2018,01,01)]
    const a = await this.dateTimeAndDateComparisonEqual.exec(this.ctx);
    a.should.be.true();
  });

  it('returns null when both intervals are null', async function () {
    // define NullIntervals: (null as Interval<DateTime>) same as (null as Interval<DateTime>)
    const a = await this.nullIntervals.exec(this.ctx);
    should(a).be.null();
  });

  it('returns true when comparing a closed interval and open interval after it is converted', async function () {
    // define OpenAndClosed: Interval[DateTime(2018,01,01,00,00,00,0), DateTime(2019,01,01,00,00,00,0)) same as Interval[DateTime(2018,01,01,00,00,00,0), DateTime(2018,12,31,23,59,59,999)]
    (await this.openAndClosed.exec(this.ctx)).should.be.true();
  });

  it('returns true when both intervals are open ended', async function () {
    // define OpenEnded: Interval[DateTime(2018,01,01), null] same day as Interval[DateTime(2018,01,01), null]
    (await this.openEnded.exec(this.ctx)).should.be.true();
  });

  it('returns false when the first interval is open ended and the second is not', async function () {
    // define OpenEndedNotSame: Interval[DateTime(2018,01,01), null] same day as Interval[DateTime(2018,01,01), DateTime(2019,01,01)]
    (await this.openEndedNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns false when the second interval is open and the first is not', async function () {
    // define OpenEndedNotSame2: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same day as Interval[DateTime(2018,01,01), null]
    (await this.openEndedNotSame2.exec(this.ctx)).should.be.false();
  });

  it('returns true when both intervals start at null and end at the same time', async function () {
    // define OpenBeginningSame: Interval[null,DateTime(2018,01,01)] same as Interval[null,DateTime(2018,01,01)]
    (await this.openBeginningSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when one interval starts at null and the other does not', async function () {
    // define OpenBeginningNotSame: Interval[DateTime(2017,01,01),DateTime(2018,01,01)] same as Interval[null,DateTime(2018,01,01)]
    (await this.openBeginningNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when comparing a closed interval of Dates to an open interval after it is converted', async function () {
    // define DateOpenAndClosed: Interval[Date(2018,01,01), Date(2018,02,02)] same as Interval[Date(2018,01,01), Date(2018,02,03))
    (await this.dateOpenAndClosed.exec(this.ctx)).should.be.true();
  });

  it('returns true when both Date intervals are open ended', async function () {
    // define DateOpenEnded: Interval[Date(2018,01,01), null] same as Interval[Date(2018,01,01), null)]
    (await this.dateOpenEnded.exec(this.ctx)).should.be.true();
  });

  it('returns true when comparing a closed interval of Times to an open interval after it is converted', async function () {
    // define TimeOpenAndClosed: Interval[Time(01,01), Time(02,02)] same as Interval[Time(01,01), Time(02,03))
    (await this.timeOpenAndClosed.exec(this.ctx)).should.be.true();
  });

  it('returns true when both Time intervals are open ended', async function () {
    // define TimeOpenEnded: Interval[Time(01,01), null] same as Interval[Time(01,01), null)]
    (await this.timeOpenEnded.exec(this.ctx)).should.be.true();
  });

  it('returns true when both Date intervals are the same', async function () {
    // define DateIntervalComparisonSame: Interval[Date(2018,01,01), Date(2018,02,02)] same as Interval[Date(2018,01,01), Date(2018,02,02)]
    (await this.dateIntervalComparisonSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when Date intervals are not the same', async function () {
    // define DateIntervalComparisonNotSame: Interval[Date(2018,01,01), Date(2018,02,02)] same as Interval[Date(2018,01,01), Date(2018,02,01)]
    (await this.dateIntervalComparisonNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when both Time intervals are the same', async function () {
    // define TimeIntervalComparisonSame: Interval[Time(01,01), Time(02,02)] same as Interval[Time(01,01), Time(02,02)]
    (await this.timeIntervalComparisonSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when Time intervals are not the same', async function () {
    // define TimeIntervalComparisonNotSame: Interval[Time(01,01), Time(02,02)] same as Interval[Time(01,01), Time(08,01)]
    (await this.timeIntervalComparisonNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the year precision', async function () {
    // define DateTimeYearPrecisionSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same year as Interval[DateTime(2018,02,01), DateTime(2019,05,01)]
    (await this.dateTimeYearPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested year precision', async function () {
    // define DateTimeYearPrecisionNotSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same year as Interval[DateTime(2018,02,01), DateTime(2020,05,01)]
    (await this.dateTimeYearPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the year precision', async function () {
    // define DateYearPrecisionSame: Interval[Date(2018,01,01), Date(2019,01,01)] same year as Interval[Date(2018,02,01), Date(2019,05,01)]
    (await this.dateYearPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested year precision', async function () {
    // define DateYearPrecisionNotSame: Interval[Date(2018,01,01), Date(2019,01,01)] same year as Interval[Date(2018,02,01), Date(2020,05,01)]
    (await this.dateYearPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the month precision', async function () {
    // define DateTimeMonthPrecisionSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same month as Interval[DateTime(2018,01,01), DateTime(2019,01,03)]
    (await this.dateTimeMonthPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested month precision', async function () {
    // define DateTimeMonthPrecisionNotSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same month as Interval[DateTime(2018,02,01), DateTime(2019,01,01)]
    (await this.dateTimeMonthPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the day precision', async function () {
    // define DateTimeDayPrecisionSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same day as Interval[DateTime(2018,01,01,05), DateTime(2019,01,01,09)]
    (await this.dateTimeDayPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested day precision', async function () {
    // define DateTimeDayPrecisionNotSame: Interval[DateTime(2018,01,01), DateTime(2019,01,01)] same day as Interval[DateTime(2018,01,01), DateTime(2019,01,02,06)]
    (await this.dateTimeDayPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the hour precision', async function () {
    // define DateTimeHourPrecisionSame: Interval[DateTime(2018,01,01,01), DateTime(2019,01,01,01)] same hour as Interval[DateTime(2018,01,01,01), DateTime(2019,01,01,01,05)]
    (await this.dateTimeHourPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested hour precision', async function () {
    // define DateTimeHourPrecisionNotSame: Interval[DateTime(2018,01,01,01), DateTime(2019,01,01,01)] same hour as Interval[DateTime(2018,01,01,06), DateTime(2019,01,01,01)]
    (await this.dateTimeHourPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the minute precision', async function () {
    // define DateTimeMinutePrecisionSame: Interval[DateTime(2018,01,01,01,01), DateTime(2019,01,01,01,01)] same minute as Interval[DateTime(2018,01,01,01,01,09), DateTime(2019,01,01,01,01,06)]
    (await this.dateTimeMinutePrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested minute precision', async function () {
    // define DateTimeMinutePrecisionNotSame: Interval[DateTime(2018,01,01,01,01), DateTime(2019,01,01,01,01)] same minute as Interval[DateTime(2018,01,01,06,03), DateTime(2019,01,01,01,06)]
    (await this.dateTimeMinutePrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the second precision', async function () {
    // define DateTimeSecondPrecisionSame: Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,01,01)] same second as Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,01,01,07)]
    (await this.dateTimeSecondPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested second precision', async function () {
    // define DateTimeSecondPrecisionNotSame: Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,01,01)] same second as Interval[DateTime(2018,01,01,01,01,01), DateTime(2019,01,01,01,07,55)]
    (await this.dateTimeSecondPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when DateTime intervals are same on the millisecond precision', async function () {
    // define DateTimeMillisecondPrecisionSame: Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,01)] same millisecond as Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,01)]
    (await this.dateTimeMillisecondPrecisionSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when DateTime intervals are not the same on the requested millisecond precision', async function () {
    // define DateTimeMillisecondPrecisionNotSame: Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,01)] same millisecond as Interval[DateTime(2018,01,01,01,01,01,01), DateTime(2019,01,01,01,01,01,09)]
    (await this.dateTimeMillisecondPrecisionNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when integer interval is the same', async function () {
    // define IntegerIntervalSame: Interval[2,5] same as Interval[2,5]
    (await this.integerIntervalSame.exec(this.ctx)).should.be.true();
  });

  it('returns false when integer interval is not the same', async function () {
    // define IntegerIntervalNotSame: Interval[2,5] same as Interval[2,4]
    (await this.integerIntervalNotSame.exec(this.ctx)).should.be.false();
  });

  it('returns true when integer interval is same after the open interval is closed', async function () {
    // define IntegerIntervalSameOpen: Interval[2,5] same as Interval[2,6)
    (await this.integerIntervalSameOpen.exec(this.ctx)).should.be.true();
  });

  it('returns false even with an open ended null because the lows are not null and not same', async function () {
    // define OpenNullHighLowDifferent: Interval(3,null) same as Interval(2,4)
    (await this.openNullHighLowDifferent.exec(this.ctx)).should.be.false();
  });

  it('returns false even with an open ended null because the highs are not null and not same', async function () {
    // define OpenNullLowHighDifferent: Interval(1,5) same as Interval(null,4)
    (await this.openNullLowHighDifferent.exec(this.ctx)).should.be.false();
  });

  it('returns null if lows are same and highs have an open null', async function () {
    // OpenNullHighLowSame: Interval(2,null) same as Interval(2,4)
    should(await this.openNullHighLowSame.exec(this.ctx)).be.null();
  });

  it('returns null if lows have an open null and highs are same', async function () {
    // OpenNullLowHighSame: Interval(1,4) same as Interval(null,4)
    should(await this.openNullLowHighSame.exec(this.ctx)).be.null();
  });

  it('returns null if both lows and highs have open null', async function () {
    // OpenNullLowOpenNullHigh: Interval(1,null) same as Interval(null,4)
    should(await this.openNullLowOpenNullHigh.exec(this.ctx)).be.null();
  });

  it('returns false if lows are different and highs have open null', async function () {
    // OpenNullHighsLowsDifferent: Interval(1,null) same as Interval(2,null)
    (await this.openNullHighsLowsDifferent.exec(this.ctx)).should.be.false();
  });

  it('returns null if lows are same and highs have open null', async function () {
    // OpenNullHighsLowsSame: Interval(1,null) same as Interval(1,null)
    should(await this.openNullHighsLowsSame.exec(this.ctx)).be.null();
  });

  it('returns null if lows have open null and highs are same', async function () {
    // OpenNullLowsHighsSame: Interval(null,3) same as Interval(null,3)
    should(await this.openNullLowsHighsSame.exec(this.ctx)).be.null();
  });
});
