import should from 'should';
import {
  DateTime,
  Date,
  MAX_DATE_VALUE,
  MAX_DATETIME_VALUE,
  MAX_TIME_VALUE,
  MIN_DATE_VALUE,
  MIN_DATETIME_VALUE,
  MIN_TIME_VALUE
} from '../../src/datatypes/datetime';
import { Interval } from '../../src/datatypes/interval';
import { Quantity } from '../../src/datatypes/quantity';
import { Uncertainty } from '../../src/datatypes/uncertainty';
import {
  ELM_ANY_TYPE,
  ELM_DATE_TYPE,
  ELM_DATETIME_TYPE,
  ELM_DECIMAL_TYPE,
  ELM_INTEGER_TYPE,
  ELM_LONG_TYPE,
  ELM_QUANTITY_TYPE,
  ELM_TIME_TYPE
} from '../../src/util/elmTypes';
import {
  MAX_FLOAT_VALUE,
  MAX_INT_VALUE,
  MAX_LONG_VALUE,
  MIN_FLOAT_VALUE,
  MIN_INT_VALUE,
  MIN_LONG_VALUE
} from '../../src/util/limits';
import data from './interval-data';

const xy = (obj: any) => [obj.x, obj.y];
const boundlessInterval = (type?: string) => new Interval(null, null, true, true, type);
const unknownInterval = (type?: string) => new Interval(null, null, false, false, type);

describe('Interval', () => {
  describe('equalInterval assertion', () => {
    it('should compare intervals using interval equality', () => {
      new Interval(1, 5).should.equalInterval(new Interval(0, 6, false, false));
      new Interval(1, 5).should.not.equalInterval(new Interval(1, 4));
    });

    it('should require the object in context to be an interval', () => {
      should(() => should({}).equalInterval(new Interval(1, 5))).throw(/to equal interval/);
    });

    it('should treat indeterminate interval equality as equal', () => {
      // For test assertions we want to test that the intervals represent the same concept, so we
      // consider uncertainties over the same range as equal
      unknownInterval(ELM_INTEGER_TYPE).should.equalInterval(unknownInterval(ELM_INTEGER_TYPE));
    });
  });

  it('should properly set all properties when constructed as DateTime interval', () => {
    const i = new Interval(DateTime.parse('2012-01-01'), DateTime.parse('2013-01-01'), true, false);
    i.low.should.eql(DateTime.parse('2012-01-01'));
    i.high.should.eql(DateTime.parse('2013-01-01'));
    i.lowClosed.should.be.true();
    i.highClosed.should.be.false();
  });

  it('should properly set all properties when constructed as integer interval', () => {
    const i = new Interval(12, 36, true, false);
    i.low.should.equal(12);
    i.high.should.equal(36);
    i.lowClosed.should.be.true();
    i.highClosed.should.be.false();
  });

  it('should properly set all properties when constructed as long interval', () => {
    const i = new Interval(12n, 36n, true, false);
    i.low.should.equal(12n);
    i.high.should.equal(36n);
    i.lowClosed.should.be.true();
    i.highClosed.should.be.false();
  });

  it('should default lowClosed/highClosed to true', () => {
    const i = new Interval(DateTime.parse('2012-01-01'), DateTime.parse('2013-01-01'));
    i.low.should.eql(DateTime.parse('2012-01-01'));
    i.high.should.eql(DateTime.parse('2013-01-01'));
    i.lowClosed.should.be.true();
    i.highClosed.should.be.true();
  });

  it('should preserve null boundaries when closing an untyped interval', () => {
    const all = boundlessInterval().toClosed();
    should(all.low).be.null();
    should(all.high).be.null();
    all.lowClosed.should.be.true();
    all.highClosed.should.be.true();

    const mystery = unknownInterval().toClosed();
    should(mystery.low).be.null();
    should(mystery.high).be.null();
    mystery.lowClosed.should.be.false();
    mystery.highClosed.should.be.false();
  });

  describe('getPointSize', () => {
    it('should return the point size for DateTime intervals', () => {
      new Interval(
        DateTime.parse('2012-01-01T00:00:00.0'),
        DateTime.parse('2012-12-31T23:59:59.999')
      )
        .getPointSize()
        .should.eql(new Quantity(1, 'millisecond'));
    });

    it('should return the point size for Date intervals', () => {
      new Interval(Date.parse('2012-01-01'), Date.parse('2012-12-31'))
        .getPointSize()
        .should.eql(new Quantity(1, 'day'));
    });

    it('should return the point size for Time intervals', () => {
      new Interval(
        DateTime.parse('0001-01-01T00:00:00.0').getTime(),
        DateTime.parse('0001-01-01T23:59:59.999').getTime()
      )
        .getPointSize()
        .should.eql(new Quantity(1, 'millisecond'));
    });

    it('should return the point size for Integer intervals', () => {
      new Interval(0, 100).getPointSize().should.equal(1);
    });

    it('should return the point size for Long intervals', () => {
      new Interval(0n, 100n).getPointSize().should.equal(1n);
    });

    it('should return the point size for Decimal intervals', () => {
      new Interval(0.5, 9.5).getPointSize().should.equal(0.00000001);
    });

    it('should return the point size for Quantity intervals', () => {
      new Interval(new Quantity(0, 'mg'), new Quantity(100, 'mg'))
        .getPointSize()
        .should.eql(new Quantity(0.00000001, 'mg'));
    });

    it('should use low or high input to determine point size when point type is not specific', () => {
      let ivl = new Interval(new Quantity(0, 'mg'), null);
      ivl.pointType = ELM_ANY_TYPE;
      ivl.getPointSize().should.eql(new Quantity(0.00000001, 'mg'));
      ivl.pointType = null;
      ivl.getPointSize().should.eql(new Quantity(0.00000001, 'mg'));
      ivl = new Interval(null, new Quantity(100, 'mg'));
      ivl.pointType = ELM_ANY_TYPE;
      ivl.getPointSize().should.eql(new Quantity(0.00000001, 'mg'));
      ivl.pointType = null;
      ivl.getPointSize().should.eql(new Quantity(0.00000001, 'mg'));
    });

    it('should throw an error if the point type cannot be determined', () => {
      should(() => new Interval(null, null).getPointSize()).throw(Error);
    });
  });

  describe('start', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return low for intervals with closed low', () => {
      d.zeroToHundred.closed.start().should.equal(0);
      d.zeroPointFiveToNinePointFive.closed.start().should.equal(0.5);
      d.zeroToHundredLong.closed.start().should.equal(0n);
      d.zeroToHundredMg.closed.start().should.eql(new Quantity(0, 'mg'));
      d.all2012date.closed.start().should.eql(Date.parse('2012-01-01'));
      d.all2012.closed.start().should.eql(DateTime.parse('2012-01-01T00:00:00.0'));
      d.alldaytime.closed.start().should.eql(DateTime.parse('0001-01-01T00:00:00.0').getTime());
    });

    it('should return successor of low for intervals with open low', () => {
      d.zeroToHundred.openClosed.start().should.equal(1);
      d.zeroPointFiveToNinePointFive.openClosed.start().should.equal(0.50000001);
      d.zeroToHundredLong.openClosed.start().should.equal(1n);
      d.zeroToHundredMg.openClosed.start().should.eql(new Quantity(0.00000001, 'mg'));
      d.all2012date.openClosed.start().should.eql(Date.parse('2012-01-02'));
      d.all2012.openClosed.start().should.eql(DateTime.parse('2012-01-01T00:00:00.001'));
      d.alldaytime.openClosed
        .start()
        .should.eql(DateTime.parse('0001-01-01T00:00:00.001').getTime());
    });

    it('should return type minimum for closed null low endpoints', () => {
      d.zeroToHundred.withNullStart.closed.start().should.equal(MIN_INT_VALUE);
      d.zeroToHundredLong.withNullStart.closed.start().should.equal(MIN_LONG_VALUE);
      d.zeroPointFiveToNinePointFive.withNullStart.closed.start().should.equal(MIN_FLOAT_VALUE);
      d.zeroToHundredMg.withNullStart.closed
        .start()
        .should.eql(new Quantity(MIN_FLOAT_VALUE, 'mg'));
      d.all2012date.withNullStart.closed.start().should.eql(MIN_DATE_VALUE);
      d.all2012.withNullStart.closed.start().should.eql(MIN_DATETIME_VALUE);
      d.alldaytime.withNullStart.closed.start().should.eql(MIN_TIME_VALUE);
    });

    it('should return null for closed null low endpoints when no point type is available', () => {
      should(new Interval(null, null, true, true).start()).be.null();
      should(new Interval(null, null, true, true, 'Any').start()).be.null();
    });

    it('should return uncertainty for open null low endpoints', () => {
      d.zeroToHundred.withNullStart.openClosed
        .start()
        .should.eql(new Uncertainty(MIN_INT_VALUE, 100));
      d.zeroToHundredLong.withNullStart.openClosed
        .start()
        .should.eql(new Uncertainty(MIN_LONG_VALUE, 100n));
      d.zeroPointFiveToNinePointFive.withNullStart.openClosed
        .start()
        .should.eql(new Uncertainty(MIN_FLOAT_VALUE, 9.5));
      d.zeroToHundredMg.withNullStart.openClosed
        .start()
        .should.eql(new Uncertainty(new Quantity(MIN_FLOAT_VALUE, 'mg'), new Quantity(100, 'mg')));
      d.all2012date.withNullStart.openClosed
        .start()
        .should.eql(new Uncertainty(MIN_DATE_VALUE, Date.parse('2012-12-31')));
      d.all2012.withNullStart.openClosed
        .start()
        .should.eql(new Uncertainty(MIN_DATETIME_VALUE, DateTime.parse('2012-12-31T23:59:59.999')));
      d.alldaytime.withNullStart.openClosed
        .start()
        .should.eql(
          new Uncertainty(MIN_TIME_VALUE, DateTime.parse('0001-01-01T23:59:59.999').getTime())
        );
    });

    it('should use the closed end as the high value for open null low endpoint uncertainty', () => {
      d.zeroToHundred.withNullStart.open.start().should.eql(new Uncertainty(MIN_INT_VALUE, 99));
      d.zeroToHundredLong.withNullStart.open
        .start()
        .should.eql(new Uncertainty(MIN_LONG_VALUE, 99n));
      d.zeroPointFiveToNinePointFive.withNullStart.open
        .start()
        .should.eql(new Uncertainty(MIN_FLOAT_VALUE, 9.49999999));
      d.zeroToHundredMg.withNullStart.open
        .start()
        .should.eql(
          new Uncertainty(new Quantity(MIN_FLOAT_VALUE, 'mg'), new Quantity(99.99999999, 'mg'))
        );
      d.all2012date.withNullStart.open
        .start()
        .should.eql(new Uncertainty(MIN_DATE_VALUE, Date.parse('2012-12-30')));
      d.all2012.withNullStart.open
        .start()
        .should.eql(new Uncertainty(MIN_DATETIME_VALUE, DateTime.parse('2012-12-31T23:59:59.998')));
      d.alldaytime.withNullStart.open
        .start()
        .should.eql(
          new Uncertainty(MIN_TIME_VALUE, DateTime.parse('0001-01-01T23:59:59.998').getTime())
        );
    });

    it('should return null for open null low endpoints without a finite type minimum', () => {
      should(new Interval(null, null, false, false).start()).be.null();
      should(new Interval(null, null, false, false, 'Any').start()).be.null();
    });

    it('should use default point type when both endpoints are null', () => {
      new Interval(null, null, true, true, ELM_INTEGER_TYPE).start().should.equal(MIN_INT_VALUE);
      new Interval(null, null, true, true, ELM_LONG_TYPE).start().should.equal(MIN_LONG_VALUE);
      new Interval(null, null, true, true, ELM_DECIMAL_TYPE).start().should.equal(MIN_FLOAT_VALUE);
      new Interval(null, null, true, true, ELM_QUANTITY_TYPE)
        .start()
        .should.eql(new Quantity(MIN_FLOAT_VALUE, '1'));
      new Interval(null, null, true, true, ELM_DATETIME_TYPE)
        .start()
        .should.eql(MIN_DATETIME_VALUE);
      new Interval(null, null, true, true, ELM_DATE_TYPE).start().should.eql(MIN_DATE_VALUE);
      new Interval(null, null, true, true, ELM_TIME_TYPE).start().should.eql(MIN_TIME_VALUE);
    });

    it('should return full type uncertainty for open intervals with null endpoints and default point type', () => {
      new Interval(null, null, false, false, ELM_INTEGER_TYPE)
        .start()
        .should.eql(new Uncertainty(MIN_INT_VALUE, MAX_INT_VALUE));
      new Interval(null, null, false, false, ELM_LONG_TYPE)
        .start()
        .should.eql(new Uncertainty(MIN_LONG_VALUE, MAX_LONG_VALUE));
      new Interval(null, null, false, false, ELM_DECIMAL_TYPE)
        .start()
        .should.eql(new Uncertainty(MIN_FLOAT_VALUE, MAX_FLOAT_VALUE));
      new Interval(null, null, false, false, ELM_QUANTITY_TYPE)
        .start()
        .should.eql(
          new Uncertainty(new Quantity(MIN_FLOAT_VALUE, '1'), new Quantity(MAX_FLOAT_VALUE, '1'))
        );
      new Interval(null, null, false, false, ELM_DATETIME_TYPE)
        .start()
        .should.eql(new Uncertainty(MIN_DATETIME_VALUE, MAX_DATETIME_VALUE));
      new Interval(null, null, false, false, ELM_TIME_TYPE)
        .start()
        .should.eql(new Uncertainty(MIN_TIME_VALUE, MAX_TIME_VALUE));
    });
  });

  describe('end', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return high for intervals with closed high', () => {
      d.zeroToHundred.closed.end().should.equal(100);
      d.zeroPointFiveToNinePointFive.closed.end().should.equal(9.5);
      d.zeroToHundredLong.closed.end().should.equal(100n);
      d.zeroToHundredMg.closed.end().should.eql(new Quantity(100, 'mg'));
      d.all2012date.closed.end().should.eql(Date.parse('2012-12-31'));
      d.all2012.closed.end().should.eql(DateTime.parse('2012-12-31T23:59:59.999'));
      d.alldaytime.closed.end().should.eql(DateTime.parse('0001-01-01T23:59:59.999').getTime());
    });

    it('should return predecessor of high for intervals with open high', () => {
      d.zeroToHundred.closedOpen.end().should.equal(99);
      d.zeroPointFiveToNinePointFive.closedOpen.end().should.equal(9.49999999);
      d.zeroToHundredLong.closedOpen.end().should.equal(99n);
      d.zeroToHundredMg.closedOpen.end().should.eql(new Quantity(99.99999999, 'mg'));
      d.all2012date.closedOpen.end().should.eql(Date.parse('2012-12-30'));
      d.all2012.closedOpen.end().should.eql(DateTime.parse('2012-12-31T23:59:59.998'));
      d.alldaytime.closedOpen.end().should.eql(DateTime.parse('0001-01-01T23:59:59.998').getTime());
    });

    it('should return type maximum for closed null high endpoints', () => {
      d.zeroToHundred.withNullEnd.closed.end().should.equal(MAX_INT_VALUE);
      d.zeroToHundredLong.withNullEnd.closed.end().should.equal(MAX_LONG_VALUE);
      d.zeroPointFiveToNinePointFive.withNullEnd.closed.end().should.equal(MAX_FLOAT_VALUE);
      d.zeroToHundredMg.withNullEnd.closed.end().should.eql(new Quantity(MAX_FLOAT_VALUE, 'mg'));
      d.all2012date.withNullEnd.closed.end().should.eql(MAX_DATE_VALUE);
      d.all2012.withNullEnd.closed.end().should.eql(MAX_DATETIME_VALUE);
      d.alldaytime.withNullEnd.closed.end().should.eql(MAX_TIME_VALUE);
    });

    it('should return null for closed null high endpoints when no point type is available', () => {
      should(new Interval(null, null, true, true).end()).be.null();
      should(new Interval(null, null, true, true, 'Any').end()).be.null();
    });

    it('should return uncertainty for open null high endpoints with inferred finite point type', () => {
      d.zeroToHundred.withNullEnd.closedOpen.end().should.eql(new Uncertainty(0, MAX_INT_VALUE));
      d.zeroToHundredLong.withNullEnd.closedOpen
        .end()
        .should.eql(new Uncertainty(0n, MAX_LONG_VALUE));
      d.zeroPointFiveToNinePointFive.withNullEnd.closedOpen
        .end()
        .should.eql(new Uncertainty(0.5, MAX_FLOAT_VALUE));
      d.zeroToHundredMg.withNullEnd.closedOpen
        .end()
        .should.eql(new Uncertainty(new Quantity(0, 'mg'), new Quantity(MAX_FLOAT_VALUE, 'mg')));
      d.all2012date.withNullEnd.closedOpen
        .end()
        .should.eql(new Uncertainty(Date.parse('2012-01-01'), MAX_DATE_VALUE));
      d.all2012.withNullEnd.closedOpen
        .end()
        .should.eql(new Uncertainty(DateTime.parse('2012-01-01T00:00:00.0'), MAX_DATETIME_VALUE));
      d.alldaytime.withNullEnd.closedOpen
        .end()
        .should.eql(
          new Uncertainty(DateTime.parse('0001-01-01T00:00:00.0').getTime(), MAX_TIME_VALUE)
        );
    });

    it('should use the closed start as the low value for open null high endpoint uncertainty', () => {
      d.zeroToHundred.withNullEnd.open.end().should.eql(new Uncertainty(1, MAX_INT_VALUE));
      d.zeroToHundredLong.withNullEnd.open.end().should.eql(new Uncertainty(1n, MAX_LONG_VALUE));
      d.zeroPointFiveToNinePointFive.withNullEnd.open
        .end()
        .should.eql(new Uncertainty(0.50000001, MAX_FLOAT_VALUE));
      d.zeroToHundredMg.withNullEnd.open
        .end()
        .should.eql(
          new Uncertainty(new Quantity(0.00000001, 'mg'), new Quantity(MAX_FLOAT_VALUE, 'mg'))
        );
      d.all2012date.withNullEnd.open
        .end()
        .should.eql(new Uncertainty(Date.parse('2012-01-02'), MAX_DATE_VALUE));
      d.all2012.withNullEnd.open
        .end()
        .should.eql(new Uncertainty(DateTime.parse('2012-01-01T00:00:00.001'), MAX_DATETIME_VALUE));
      d.alldaytime.withNullEnd.open
        .end()
        .should.eql(
          new Uncertainty(DateTime.parse('0001-01-01T00:00:00.001').getTime(), MAX_TIME_VALUE)
        );
    });

    it('should return null for open null high endpoints without a finite type maximum', () => {
      should(new Interval(null, null, false, false).end()).be.null();
      should(new Interval(null, null, false, false, 'Any').end()).be.null();
    });

    it('should use default point type when both endpoints are null', () => {
      new Interval(null, null, true, true, ELM_INTEGER_TYPE).end().should.equal(MAX_INT_VALUE);
      new Interval(null, null, true, true, ELM_LONG_TYPE).end().should.equal(MAX_LONG_VALUE);
      new Interval(null, null, true, true, ELM_DECIMAL_TYPE).end().should.equal(MAX_FLOAT_VALUE);
      new Interval(null, null, true, true, ELM_QUANTITY_TYPE)
        .end()
        .should.eql(new Quantity(MAX_FLOAT_VALUE, '1'));
      new Interval(null, null, true, true, ELM_DATETIME_TYPE).end().should.eql(MAX_DATETIME_VALUE);
      new Interval(null, null, true, true, ELM_DATE_TYPE).end().should.eql(MAX_DATE_VALUE);
      new Interval(null, null, true, true, ELM_TIME_TYPE).end().should.eql(MAX_TIME_VALUE);
    });

    it('should return full type uncertainty for open intervals with null endpoints and default point type', () => {
      new Interval(null, null, false, false, ELM_INTEGER_TYPE)
        .end()
        .should.eql(new Uncertainty(MIN_INT_VALUE, MAX_INT_VALUE));
      new Interval(null, null, false, false, ELM_LONG_TYPE)
        .end()
        .should.eql(new Uncertainty(MIN_LONG_VALUE, MAX_LONG_VALUE));
      new Interval(null, null, false, false, ELM_DECIMAL_TYPE)
        .end()
        .should.eql(new Uncertainty(MIN_FLOAT_VALUE, MAX_FLOAT_VALUE));
      new Interval(null, null, false, false, ELM_QUANTITY_TYPE)
        .end()
        .should.eql(
          new Uncertainty(new Quantity(MIN_FLOAT_VALUE, '1'), new Quantity(MAX_FLOAT_VALUE, '1'))
        );
      new Interval(null, null, false, false, ELM_DATETIME_TYPE)
        .end()
        .should.eql(new Uncertainty(MIN_DATETIME_VALUE, MAX_DATETIME_VALUE));
      new Interval(null, null, false, false, ELM_TIME_TYPE)
        .end()
        .should.eql(new Uncertainty(MIN_TIME_VALUE, MAX_TIME_VALUE));
    });
  });
});

describe('DateInterval', () => {
  it('should use the specified precision for meets comparisons', () => {
    const january = new Interval(Date.parse('2020-01-01'), Date.parse('2020-01-15'));
    const february = new Interval(Date.parse('2020-02-15'), Date.parse('2020-02-28'));

    january.meets(february, Date.Unit.MONTH).should.be.true();
    january.meetsBefore(february, Date.Unit.MONTH).should.be.true();
    february.meetsAfter(january, Date.Unit.MONTH).should.be.true();
  });
});

describe('DateTimeInterval', () => {
  describe('contains', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate dates before it', () => {
      d.all2012.closed.contains(d.bef2012.full).should.be.false();
    });

    it('should properly calculate the left boundary date', () => {
      d.all2012.closed.contains(d.beg2012.full).should.be.true();
      d.all2012.open.contains(d.beg2012.full).should.be.false();
    });

    it('should properly calculate dates in the middle of it', () => {
      d.all2012.closed.contains(d.mid2012.full).should.be.true();
    });

    it('should properly calculate the right boundary date', () => {
      d.all2012.closed.contains(d.end2012.full).should.be.true();
      d.all2012.open.contains(d.end2012.full).should.be.false();
    });

    it('should properly calculate dates after it', () => {
      d.all2012.closed.contains(d.aft2012.full).should.be.false();
    });

    it('should properly handle null endpoints', () => {
      const date = DateTime.parse('2012-01-01T00:00:00.0');
      const early = DateTime.parse('0001-01-01T00:00:00.0');
      const late = DateTime.parse('2999-01-01T00:00:00.0');
      new Interval(null, date).contains(early).should.be.true();
      new Interval(null, date).contains(late).should.be.false();
      new Interval(null, date, false, true).contains(date).should.be.true();
      should(new Interval(null, date, false, true).contains(early)).be.null();
      new Interval(null, date, false, true).contains(late).should.be.false();
      new Interval(date, null).contains(late).should.be.true();
      new Interval(date, null).contains(early).should.be.false();
      new Interval(date, null, true, false).contains(date).should.be.true();
      should(new Interval(date, null, true, false).contains(late)).be.null();
      new Interval(date, null, true, false).contains(early).should.be.false();
      boundlessInterval(ELM_DATETIME_TYPE).contains(date).should.be.true();
      should(unknownInterval(ELM_DATETIME_TYPE).contains(date)).be.null();
    });

    it('should properly handle imprecision', () => {
      d.all2012.closed.contains(d.bef2012.toMonth).should.be.false();
      should.not.exist(d.all2012.closed.contains(d.beg2012.toMonth));
      d.all2012.closed.contains(d.mid2012.toMonth).should.be.true();
      should.not.exist(d.all2012.closed.contains(d.end2012.toMonth));
      d.all2012.closed.contains(d.aft2012.toMonth).should.be.false();

      d.all2012.toMonth.contains(d.bef2012.toMonth).should.be.false();
      d.all2012.toMonth.contains(d.beg2012.toMonth).should.be.true();
      d.all2012.toMonth.contains(d.mid2012.toMonth).should.be.true();
      d.all2012.toMonth.contains(d.end2012.toMonth).should.be.true();
      d.all2012.toMonth.contains(d.aft2012.toMonth).should.be.false();

      d.all2012.toMonth.contains(d.bef2012.full).should.be.false();
      should.not.exist(d.all2012.toMonth.contains(d.beg2012.full));
      d.all2012.toMonth.contains(d.mid2012.full).should.be.true();
      should.not.exist(d.all2012.toMonth.contains(d.end2012.full));
      d.all2012.toMonth.contains(d.aft2012.full).should.be.false();

      should.not.exist(d.all2012.closed.contains(d.mid2012.toYear));
    });

    it('should return null when checking if interval contains null point', () => {
      const date = DateTime.parse('2012-01-01T00:00:00.0');
      should(new Interval(date, null, true, false).contains(null)).be.null();
    });

    it('should throw when the argument is an interval', () => {
      should(() => d.all2012.closed.contains(d.all2012.open)).throw(Error);
    });
  });

  describe('properContains', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate dates before it', () => {
      d.all2012.closed.properContains(d.bef2012.full).should.be.false();
    });

    it('should properly calculate the left boundary date', () => {
      d.all2012.closed.properContains(d.beg2012.full).should.be.true();
      d.all2012.open.properContains(d.beg2012.full).should.be.false();

      const prev = d.beg2012.full.predecessor();
      d.all2012.closed.properContains(prev).should.be.false();
      d.all2012.open.properContains(prev).should.be.false();

      const next = d.beg2012.full.successor();
      d.all2012.closed.properContains(next).should.be.true();
      d.all2012.open.properContains(next).should.be.true();
    });

    it('should properly calculate dates in the middle of it', () => {
      d.all2012.closed.properContains(d.mid2012.full).should.be.true();
    });

    it('should properly calculate the right boundary date', () => {
      d.all2012.closed.properContains(d.end2012.full).should.be.true();
      d.all2012.open.properContains(d.end2012.full).should.be.false();

      const prev = d.end2012.full.predecessor();
      d.all2012.closed.properContains(prev).should.be.true();
      d.all2012.open.properContains(prev).should.be.true();

      const next = d.end2012.full.successor();
      d.all2012.closed.properContains(next).should.be.false();
      d.all2012.open.properContains(next).should.be.false();
    });

    it('should properly calculate dates after it', () => {
      d.all2012.closed.properContains(d.aft2012.full).should.be.false();
    });

    it('should properly handle null endpoints', () => {
      const date = DateTime.parse('2012-01-01T00:00:00.0');
      const minDate = MIN_DATETIME_VALUE;
      const early = DateTime.parse('2000-01-01T00:00:00.0');
      const late = DateTime.parse('2999-01-01T00:00:00.0');
      const maxDate = MAX_DATETIME_VALUE;
      new Interval(null, date).properContains(minDate).should.be.true();
      new Interval(null, date).properContains(early).should.be.true();
      new Interval(null, date).properContains(late).should.be.false();
      should(new Interval(null, date, false, true).properContains(date)).be.null();
      should(new Interval(null, date, false, true).properContains(early)).be.null();
      new Interval(null, date, false, true).properContains(late).should.be.false();
      new Interval(date, null).properContains(late).should.be.true();
      new Interval(date, null).properContains(early).should.be.false();
      new Interval(date, null).properContains(maxDate).should.be.true();
      should(new Interval(date, null, true, false).properContains(date)).be.null();
      should(new Interval(date, null, true, false).properContains(late)).be.null();
      new Interval(date, null, true, false).properContains(early).should.be.false();
      new Interval(null, null, true, true, ELM_DATETIME_TYPE).properContains(date).should.be.true();
      should(
        new Interval(null, null, false, false, ELM_DATETIME_TYPE).properContains(date)
      ).be.null();
    });

    it('should properly handle imprecision', () => {
      d.all2012.closed.properContains(d.bef2012.toMonth).should.be.false();
      should.not.exist(d.all2012.closed.properContains(d.beg2012.toMonth));
      d.all2012.closed.properContains(d.mid2012.toMonth).should.be.true();
      should.not.exist(d.all2012.closed.properContains(d.end2012.toMonth));
      d.all2012.closed.properContains(d.aft2012.toMonth).should.be.false();

      d.all2012.toMonth.properContains(d.bef2012.toMonth).should.be.false();
      d.all2012.toMonth.properContains(d.beg2012.toMonth).should.be.true();
      d.all2012.toMonth.properContains(d.mid2012.toMonth).should.be.true();
      d.all2012.toMonth.properContains(d.end2012.toMonth).should.be.true();
      d.all2012.toMonth.properContains(d.aft2012.toMonth).should.be.false();

      d.all2012.toMonth.properContains(d.bef2012.full).should.be.false();
      should.not.exist(d.all2012.toMonth.properContains(d.beg2012.full));
      d.all2012.toMonth.properContains(d.mid2012.full).should.be.true();
      should.not.exist(d.all2012.toMonth.properContains(d.end2012.full));
      d.all2012.toMonth.properContains(d.aft2012.full).should.be.false();

      should.not.exist(d.all2012.closed.properContains(d.mid2012.toYear));
    });

    it('should return null when checking if interval contains null point', () => {
      const date = DateTime.parse('2012-01-01T00:00:00.0');
      should(new Interval(date, null, true, false).properContains(null)).be.null();
    });

    it('should throw when the argument is an interval', () => {
      should(() => d.all2012.closed.properContains(d.all2012.open)).throw(Error);
    });
  });

  describe('includes', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.includes(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.includes(y.closed).should.be.true();
      x.closed.includes(y.open).should.be.true();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.true();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.true();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      should.not.exist(x.closed.includes(y.toMinute));
      should.not.exist(x.toHour.includes(y.toMinute));

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.includes(y.toMonth).should.be.false();
      should.not.exist(x.toYear.includes(y.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.includes(y.toMonth).should.be.false();
      should.not.exist(x.toYear.includes(y.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.includes(y.toMonth).should.be.false();
      should.not.exist(x.toYear.includes(y.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.includes(y.toMinute).should.be.false();
      should.not.exist(x.toYear.includes(y.closed));

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.includes(y.toMonth).should.be.false();
      y.toMonth.includes(x.toMonth).should.be.true();
      should.not.exist(x.toYear.includes(y.closed));

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.includes(y.toMinute).should.be.false();
      should.not.exist(x.toYear.includes(y.closed));
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).includes(d.mid2012.full).should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE).includes(d.all2012.closed).should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE)
        .includes(unknownInterval(ELM_DATETIME_TYPE))
        .should.be.true();
      d.all2012.closed.includes(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(unknownInterval(ELM_DATETIME_TYPE).includes(d.all2012.closed)).be.null();
      should(
        unknownInterval(ELM_DATETIME_TYPE).includes(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });

    it('should include a point date', () => {
      d.all2012.closed.includes(d.mid2012.full).should.be.true();
    });
  });

  describe('includedIn', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.includedIn(null)).be.null();
    });

    it('should throw error when argument is a point', () => {
      should(() => d.all2012.closed.includedIn(d.mid2012.full)).throw(Error);
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();

      y.closed.includedIn(x.closed).should.be.true();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.true();
      y.open.includedIn(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.true();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      should.not.exist(x.closed.includedIn(y.toMinute));
      should.not.exist(x.toHour.includedIn(y.toMinute));

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.includedIn(y.toMonth).should.be.false();
      should.not.exist(x.toYear.includedIn(y.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.includedIn(y.toMonth).should.be.false();
      should.not.exist(x.toYear.includedIn(y.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.includedIn(y.toMonth).should.be.false();
      should.not.exist(x.toYear.includedIn(y.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.includedIn(y.toMinute).should.be.true();
      should.not.exist(x.toYear.includedIn(y.closed));

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.includedIn(y.toMonth).should.be.true();
      y.toMonth.includedIn(x.toMonth).should.be.false();
      should.not.exist(x.toYear.includedIn(y.closed));

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.includedIn(y.toMinute).should.be.true();
      should.not.exist(x.toYear.includedIn(y.closed));
    });

    it('should properly handle boundless and unknown intervals', () => {
      d.all2012.closed.includedIn(boundlessInterval(ELM_DATETIME_TYPE)).should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE).includedIn(d.all2012.closed).should.be.false();
      boundlessInterval(ELM_DATETIME_TYPE)
        .includedIn(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.true();
      unknownInterval(ELM_DATETIME_TYPE)
        .includedIn(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.true();
    });
  });

  describe('properlyIncludes', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when null is passed in', () => {
      should(d.all2012.closed.properlyIncludes(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).properlyIncludes(d.all2012.closed).should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE)
        .properlyIncludes(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).properlyIncludes(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      should(unknownInterval(ELM_DATETIME_TYPE).properlyIncludes(d.all2012.closed)).be.null();
    });

    it('should throw when point is passed in', () => {
      should(() => d.all2012.closed.properlyIncludes(d.beg2012.full)).throw(Error);
    });
  });

  describe('starts', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.starts(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .starts(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE).starts(d.all2012.closed).should.be.false();
      d.all2012.closed.starts(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).starts(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_DATETIME_TYPE).starts(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });
  });

  describe('ends', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.ends(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .ends(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE).ends(d.all2012.closed).should.be.false();
      d.all2012.closed.ends(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).ends(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_DATETIME_TYPE).ends(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });
  });

  describe('overlaps(DateTimeInterval)', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.overlaps(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.overlaps(y.closed).should.be.false();
      x.closed.overlaps(y.open).should.be.false();
      x.open.overlaps(y.closed).should.be.false();
      x.open.overlaps(y.open).should.be.false();
      y.closed.overlaps(x.closed).should.be.false();
      y.closed.overlaps(x.open).should.be.false();
      y.open.overlaps(x.closed).should.be.false();
      y.open.overlaps(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.overlaps(y.closed).should.be.false();
      x.closed.overlaps(y.open).should.be.false();
      x.open.overlaps(y.closed).should.be.false();
      x.open.overlaps(y.open).should.be.false();
      y.closed.overlaps(x.closed).should.be.false();
      y.closed.overlaps(x.open).should.be.false();
      y.open.overlaps(x.closed).should.be.false();
      y.open.overlaps(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly handle null endpoints', () => {
      const date = DateTime.parse('2012-01-01T00:00:00.0');
      const early = DateTime.parse('0001-01-01T00:00:00.0');
      const late = DateTime.parse('2999-01-01T00:00:00.0');
      const earlyInterval = new Interval(early, DateTime.parse('2011-01-01T00:00:00.0'));
      const lateInterval = new Interval(DateTime.parse('2013-01-01T00:00:00.0'), late);
      const startsAtDate = new Interval(date, late);
      const endsAtDate = new Interval(early, date);

      should(new Interval(null, date).overlaps(earlyInterval)).be.true();
      should(new Interval(null, date).overlaps(lateInterval)).be.false();
      should(new Interval(null, date, false, true).overlaps(startsAtDate)).be.true();
      should(new Interval(null, date, false, true).overlaps(earlyInterval)).be.null();
      should(new Interval(null, date, false, true).overlaps(lateInterval)).be.false();

      should(new Interval(date, null).overlaps(lateInterval)).be.true();
      should(new Interval(date, null).overlaps(earlyInterval)).be.false();
      should(new Interval(date, null, true, false).overlaps(endsAtDate)).be.true();
      should(new Interval(date, null, true, false).overlaps(lateInterval)).be.null();
      should(new Interval(date, null, true, false).overlaps(earlyInterval)).be.false();

      should(boundlessInterval(ELM_DATETIME_TYPE).overlaps(d.all2012.closed)).be.true();
      should(unknownInterval(ELM_DATETIME_TYPE).overlaps(d.all2012.closed)).be.null();
      should(d.all2012.closed.overlaps(boundlessInterval(ELM_DATETIME_TYPE))).be.true();
      should(d.all2012.closed.overlaps(unknownInterval(ELM_DATETIME_TYPE))).be.null();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).overlaps(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.true();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).overlaps(unknownInterval(ELM_DATETIME_TYPE))
      ).be.true();
      should(
        unknownInterval(ELM_DATETIME_TYPE).overlaps(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.true();
      should(
        unknownInterval(ELM_DATETIME_TYPE).overlaps(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.overlaps(y.toMinute).should.be.true();
      x.toHour.overlaps(y.toMinute).should.be.true();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.overlaps(y.toMonth).should.be.false();
      should.not.exist(x.toYear.overlaps(y.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.overlaps(y.toMonth).should.be.false();
      should.not.exist(x.toYear.overlaps(y.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.overlaps(y.toMonth).should.be.true();
      should.not.exist(x.toYear.overlaps(y.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.overlaps(y.toMinute).should.be.true();
      should.not.exist(x.toYear.overlaps(y.closed));

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.overlaps(y.toMonth).should.be.true();
      y.toMonth.overlaps(x.toMonth).should.be.true();
      should.not.exist(x.toYear.overlaps(y.closed));

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.overlaps(y.toMinute).should.be.true();
      should.not.exist(x.toYear.overlaps(y.closed));
    });
  });

  describe('overlapsBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.overlapsBefore(null)).be.null();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).overlapsBefore(d.all2012.closed).should.be.true();
      d.all2012.closed.overlapsBefore(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).overlapsBefore(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      unknownInterval(ELM_DATETIME_TYPE)
        .overlapsBefore(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.false();
    });
  });

  describe('overlapsAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.overlapsAfter(null)).be.null();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).overlapsAfter(d.all2012.closed).should.be.true();
      d.all2012.closed.overlapsAfter(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).overlapsAfter(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      unknownInterval(ELM_DATETIME_TYPE)
        .overlapsAfter(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.false();
    });
  });

  describe('equals', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.equals(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.equals(y.closed).should.be.true();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.true();
      y.closed.equals(x.closed).should.be.true();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate open vs. closed intervals', () => {
      const lowEdge2012 = DateTime.parse('2012-01-01T00:00:00.0+00');
      const lowEdge2012Succ = DateTime.parse('2012-01-01T00:00:00.001+00');
      const highEdge2012 = DateTime.parse('2012-12-31T23:59:59.999+00');
      const highEdge2012Pred = DateTime.parse('2012-12-31T23:59:59.998+00');
      const cc = new Interval(lowEdge2012, highEdge2012, true, true);
      const oc = new Interval(lowEdge2012, highEdge2012, false, true);
      const co = new Interval(lowEdge2012, highEdge2012, true, false);
      const oo = new Interval(lowEdge2012, highEdge2012, false, false);
      const cci = new Interval(lowEdge2012Succ, highEdge2012Pred, true, true);
      const oci = new Interval(lowEdge2012Succ, highEdge2012Pred, false, true);
      const coi = new Interval(lowEdge2012Succ, highEdge2012Pred, true, false);
      const ooi = new Interval(lowEdge2012Succ, highEdge2012Pred, false, false);

      oo.equals(oo).should.be.true();
      oo.equals(cc).should.be.false();
      oo.equals(cci).should.be.true();
      oo.equals(oci).should.be.false();
      oo.equals(coi).should.be.false();
      oo.equals(ooi).should.be.false();
      cci.equals(cci).should.be.true();
      cci.equals(oo).should.be.true();
      cci.equals(co).should.be.false();
      cci.equals(oc).should.be.false();
      cci.equals(cc).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      should(x.closed.equals(y.toMinute)).be.null();
      should(x.toHour.equals(y.toMinute)).be.null();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.equals(y.toMonth).should.be.false();
      should(x.toYear.equals(y.closed)).be.null();

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.equals(y.toMonth).should.be.false();
      should(x.toYear.equals(y.closed)).be.null();

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.equals(y.toMonth).should.be.false();
      should(x.toYear.equals(y.closed)).be.null();

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.equals(y.toMinute).should.be.false();
      should(x.toYear.equals(y.closed)).be.null();

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.equals(y.toMonth).should.be.false();
      y.toMonth.equals(x.toMonth).should.be.false();
      should(x.toYear.equals(y.closed)).be.null();

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.equals(y.toMinute).should.be.false();
      should(x.toYear.equals(y.closed)).be.null();
    });

    it('should be false for equality with points', () => {
      const point = DateTime.parse('2012-01-01T00:00:00.0+00');
      const ivl = new Interval(point, point, true, true);

      ivl.equals(point).should.be.false();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .equals(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE).equals(d.all2012.closed).should.be.false();
      d.all2012.closed.equals(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).equals(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_DATETIME_TYPE).equals(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_DATETIME_TYPE).equals(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });
  });

  describe('sameAs', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.sameAs(null)).be.null();
    });

    it('should convert Date intervals to DateTime intervals before determining boundaries', () => {
      const dateLow = Date.parse('2012-01-01');
      const dateTimeLow = DateTime.parse('2012-01-01');
      const dateTimeMinutesLow = DateTime.parse('2012-01-01T18:30');
      const dateHigh = Date.parse('2012-12-31');
      const dateTimeHigh = DateTime.parse('2012-12-31');
      const dateTimeMinutesHigh = DateTime.parse('2012-12-31T22:00');
      const dateInterval = new Interval(dateLow, dateHigh, true, true, ELM_DATE_TYPE);
      const dateTimeInterval = new Interval(
        dateTimeLow,
        dateTimeHigh,
        true,
        true,
        ELM_DATETIME_TYPE
      );
      const dateTimeMinutesInterval = new Interval(
        dateTimeMinutesLow,
        dateTimeMinutesHigh,
        true,
        true,
        ELM_DATETIME_TYPE
      );
      const dateIntervalWithBoundlessHigh = new Interval(dateLow, null, true, true, ELM_DATE_TYPE);
      const dateTimeIntervalWithBoundlessHigh = new Interval(
        dateTimeLow,
        null,
        true,
        true,
        ELM_DATETIME_TYPE
      );
      const dateIntervalWithBoundlessLow = new Interval(null, dateHigh, true, true, ELM_DATE_TYPE);
      const dateTimeIntervalWithBoundlessLow = new Interval(
        null,
        dateTimeHigh,
        true,
        true,
        ELM_DATETIME_TYPE
      );

      dateInterval.sameAs(dateTimeInterval).should.be.true();
      dateTimeInterval.sameAs(dateInterval).should.be.true();
      should(dateInterval.sameAs(dateTimeMinutesInterval)).be.null();
      should(dateTimeMinutesInterval.sameAs(dateInterval)).be.null();
      dateInterval.sameAs(dateTimeIntervalWithBoundlessHigh).should.be.false();
      dateTimeInterval.sameAs(dateIntervalWithBoundlessHigh).should.be.false();
      dateIntervalWithBoundlessHigh.sameAs(dateTimeIntervalWithBoundlessHigh).should.be.true();
      dateTimeIntervalWithBoundlessHigh.sameAs(dateIntervalWithBoundlessHigh).should.be.true();
      dateIntervalWithBoundlessLow.sameAs(dateTimeIntervalWithBoundlessLow).should.be.true();
      dateTimeIntervalWithBoundlessLow.sameAs(dateIntervalWithBoundlessLow).should.be.true();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .sameAs(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.true();
      boundlessInterval(ELM_DATETIME_TYPE).sameAs(d.all2012.closed).should.be.false();
      d.all2012.closed.sameAs(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_DATETIME_TYPE).sameAs(unknownInterval(ELM_DATETIME_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_DATETIME_TYPE).sameAs(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });
  });

  describe('union', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.union(null)).be.null();
    });

    it('should properly calculate sameAs unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.union(y.closed).should.equalInterval(x.closed);
      x.closed.union(y.open).should.equalInterval(x.closed);
      x.open.union(y.closed).should.equalInterval(x.closed);
      x.open.union(y.open).should.equalInterval(x.open);
      y.closed.union(x.closed).should.equalInterval(y.closed);
      y.closed.union(x.open).should.equalInterval(y.closed);
      y.open.union(x.closed).should.equalInterval(y.closed);
      y.open.union(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate before/after unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      should(x.closed.union(y.closed)).be.null();
      should(x.closed.union(y.open)).be.null();
      should(x.open.union(y.closed)).be.null();
      should(x.open.union(y.open)).be.null();
      should(y.closed.union(x.closed)).be.null();
      should(y.closed.union(x.open)).be.null();
      should(y.open.union(x.closed)).be.null();
      should(y.open.union(x.open)).be.null();
    });

    it('should properly calculate meets unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      const z = d.all2012;
      x.closed.union(y.closed).equals(z.closed).should.be.true();
      should(x.closed.union(y.open)).be.null();
      should(x.open.union(y.closed)).be.null();
      should(x.open.union(y.open)).be.null();
      y.closed.union(x.closed).equals(z.closed).should.be.true();
      should(y.closed.union(x.open)).be.null();
      should(y.open.union(x.closed)).be.null();
      should(y.open.union(x.open)).be.null();
    });

    it('should properly calculate left/right overlapping unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      const z = d.all2012;
      x.closed.union(y.closed).equals(z.closed).should.be.true();
      x.closed.union(y.open).equals(z.closedOpen).should.be.true();
      x.open.union(y.closed).equals(z.openClosed).should.be.true();
      x.open.union(y.open).equals(z.open).should.be.true();
      y.closed.union(x.closed).equals(z.closed).should.be.true();
      y.closed.union(x.open).equals(z.openClosed).should.be.true();
      y.open.union(x.closed).equals(z.closedOpen).should.be.true();
      y.open.union(x.open).equals(z.open).should.be.true();
    });

    it('should properly calculate begins/begun by unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.closedOpen).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.closedOpen).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate includes/included by unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.open).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.open).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate ends/ended by unions', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.openClosed).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.openClosed).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));

      // first, check that the DateTime precision methods are correct.
      // TODO: move these into DateTime tests
      x.closed.low.isMorePrecise(x.toMinute.low).should.be.true();
      x.closed.low.isLessPrecise(x.toMinute.low).should.be.false();
      x.closed.low.isSamePrecision(x.toMinute.low).should.be.false();
      x.toMinute.low.isMorePrecise(x.closed.low).should.be.false();
      x.toMinute.low.isLessPrecise(x.closed.low).should.be.true();
      x.toMinute.low.isSamePrecision(x.closed.low).should.be.false();

      // The union of (A U B) should be the same as (B U A)
      // check sameAs
      let i = x.toMinute.union(y.closed);
      x.toMinute.low.sameAs(i.low, DateTime.Unit.MINUTE).should.be.true();
      x.toMinute.high.sameAs(i.high, DateTime.Unit.MINUTE).should.be.true();

      let j = y.closed.union(x.toMinute);
      y.closed.low.sameAs(j.low, DateTime.Unit.MINUTE).should.be.true();
      y.closed.high.sameAs(j.high, DateTime.Unit.MINUTE).should.be.true();

      i.low.sameAs(j.low, DateTime.Unit.MINUTE).should.be.true();
      i.high.sameAs(j.high, DateTime.Unit.MINUTE).should.be.true();

      // check resulting precision
      i.low.isMorePrecise(j.low).should.be.false();
      i.low.isLessPrecise(j.low).should.be.false();
      i.low.isSamePrecision(j.low).should.be.true();
      i.high.isMorePrecise(j.high).should.be.false();
      i.high.isLessPrecise(j.high).should.be.false();
      i.high.isSamePrecision(j.high).should.be.true();

      [x, y] = Array.from(xy(d.dIvl.before));
      i = x.toYear.union(y.toYear);
      should(i).not.be.null();
      i.low.equals(y.toYear.low);
      i.high.equals(y.toYear.high);
      j = y.toYear.union(x.toYear);
      should(j).not.be.null();
      j.equals(i).should.be.true();

      [x, y] = Array.from(xy(d.dIvl.meets));
      i = x.toMonth.union(y.toMonth);
      should(i).not.be.null();
      i.low.equals(x.toMonth.low);
      i.high.equals(y.toMonth.high);

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      i = x.toMonth.union(y.toMonth);
      j = y.toMonth.union(x.toMonth);

      x.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true();
      x.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true();

      [x, y] = Array.from(xy(d.dIvl.begins));
      i = x.toMonth.union(y.toMonth);
      j = y.toMonth.union(x.toMonth);

      x.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true();
      x.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true();

      [x, y] = Array.from(xy(d.dIvl.during));
      i = x.toMonth.union(y.toMonth);
      j = y.toMonth.union(x.toMonth);

      y.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true();

      [x, y] = Array.from(xy(d.dIvl.ends));
      i = x.toMonth.union(y.toMonth);
      j = y.toMonth.union(x.toMonth);

      y.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true();
      x.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true();
      y.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true();
      x.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .union(d.all2012.closed)
        .should.equalInterval(boundlessInterval(ELM_DATETIME_TYPE));
      d.all2012.closed
        .union(boundlessInterval(ELM_DATETIME_TYPE))
        .should.equalInterval(boundlessInterval(ELM_DATETIME_TYPE));
      boundlessInterval(ELM_DATETIME_TYPE)
        .union(unknownInterval(ELM_DATETIME_TYPE))
        .should.equalInterval(boundlessInterval(ELM_DATETIME_TYPE));
      unknownInterval(ELM_DATETIME_TYPE)
        .union(boundlessInterval(ELM_DATETIME_TYPE))
        .should.equalInterval(boundlessInterval(ELM_DATETIME_TYPE));
    });

    it('should throw when the argument is a point', () => {
      should(() => d.all2012.closed.union(d.mid2012)).throw(Error);
    });
  });

  describe('intersect', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.intersect(null)).be.null();
    });

    it('should throw when the argument is a point', () => {
      should(() => d.all2012.closed.intersect(d.mid2012)).throw(Error);
    });

    it('should properly calculate sameAs intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(y.open).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(y.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(y.open).should.be.true();
      y.open.intersect(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate before/after intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      should.not.exist(x.closed.intersect(y.closed));
      should.not.exist(x.closed.intersect(y.open));
      should.not.exist(x.open.intersect(y.closed));
      should.not.exist(x.open.intersect(y.open));
      should.not.exist(y.closed.intersect(x.closed));
      should.not.exist(y.closed.intersect(x.open));
      should.not.exist(y.open.intersect(x.closed));
      should.not.exist(y.open.intersect(x.open));
    });

    it('should properly calculate meets intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      should.not.exist(x.closed.intersect(y.closed));
      should.not.exist(x.closed.intersect(y.open));
      should.not.exist(x.open.intersect(y.closed));
      should.not.exist(x.open.intersect(y.open));
      should.not.exist(y.closed.intersect(x.closed));
      should.not.exist(y.closed.intersect(x.open));
      should.not.exist(y.open.intersect(x.closed));
      should.not.exist(y.open.intersect(x.open));
    });

    it('should properly calculate left/right overlapping intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      const a = d.julysept;
      x.closed.intersect(y.closed).equals(a.closed).should.be.true();
      x.closed.intersect(y.open).equals(a.openClosed).should.be.true();
      x.open.intersect(y.closed).equals(a.closedOpen).should.be.true();
      x.open.intersect(y.open).equals(a.open).should.be.true();
      y.closed.intersect(x.closed).equals(a.closed).should.be.true();
      y.closed.intersect(x.open).equals(a.closedOpen).should.be.true();
      y.open.intersect(x.closed).equals(a.openClosed).should.be.true();
      y.open.intersect(x.open).equals(a.open).should.be.true();
    });

    it('should properly calculate begins/begun by intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.openClosed).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.openClosed).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.closed).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.closed).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intersect', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.closedOpen).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.closedOpen).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toDay.intersect(y.toDay).low.should.eql(y.toDay.low);
      x.toDay.intersect(y.toDay).high.should.eql(x.toDay.high);
      y.toDay.intersect(x.toDay).low.should.eql(y.toDay.low);
      y.toDay.intersect(x.toDay).high.should.eql(x.toDay.high);

      [x, y] = Array.from(xy(d.dIvl.meets));
      should.not.exist(x.toDay.intersect(y.toDay));
      should.not.exist(y.toDay.intersect(x.toDay));

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toDay.intersect(y.toDay).low.should.eql(x.toDay.low);
      x.toDay.intersect(y.toDay).high.should.eql(x.toDay.high);
      y.toDay.intersect(x.toDay).low.should.eql(x.toDay.low);
      y.toDay.intersect(x.toDay).high.should.eql(x.toDay.high);

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toDay.intersect(y.toDay).low.should.eql(x.toDay.low);
      x.toDay.intersect(y.toDay).high.should.eql(x.toDay.high);
      y.toDay.intersect(x.toDay).low.should.eql(x.toDay.low);
      y.toDay.intersect(x.toDay).high.should.eql(x.toDay.high);

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toDay.intersect(y.toDay).low.should.eql(x.toDay.low);
      x.toDay.intersect(y.toDay).high.should.eql(x.toDay.high);
      y.toDay.intersect(x.toDay).low.should.eql(x.toDay.low);
      y.toDay.intersect(x.toDay).high.should.eql(x.toDay.high);
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .intersect(d.all2012.closed)
        .should.equalInterval(d.all2012.closed);
      d.all2012.closed
        .intersect(boundlessInterval(ELM_DATETIME_TYPE))
        .should.equalInterval(d.all2012.closed);
      boundlessInterval(ELM_DATETIME_TYPE)
        .intersect(unknownInterval(ELM_DATETIME_TYPE))
        .should.equalInterval(unknownInterval(ELM_DATETIME_TYPE));
      unknownInterval(ELM_DATETIME_TYPE)
        .intersect(boundlessInterval(ELM_DATETIME_TYPE))
        .should.equalInterval(unknownInterval(ELM_DATETIME_TYPE));
    });

    it('should throw when the argument is a point', () => {
      should(() => d.all2012.intersect(DateTime.parse('2012-07-01T00:00:00.0'))).throw(Error);
    });
  });

  describe('except', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.except(null)).be.null();
    });

    it('should properly calculate sameAs except', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      should.not.exist(x.closed.except(y.closed));
      should.not.exist(x.closed.except(y.open));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      should.not.exist(y.closed.except(x.closed));
      should.not.exist(y.closed.except(x.open));
      should.not.exist(y.open.except(x.closed));
      should.not.exist(y.open.except(x.open));
    });

    it('should properly calculate before/after except', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.except(y.closed).should.equalInterval(x.closed);
      x.closed.except(y.open).should.equalInterval(x.closed);
      x.open.except(y.closed).should.equalInterval(x.open);
      x.open.except(y.open).should.equalInterval(x.open);
      y.closed.except(x.closed).should.equalInterval(y.closed);
      y.closed.except(x.open).should.equalInterval(y.closed);
      y.open.except(x.closed).should.equalInterval(y.open);
      y.open.except(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate meets except', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.except(y.closed).should.equalInterval(x.closed);
      x.closed.except(y.open).should.equalInterval(x.closed);
      x.open.except(y.closed).should.equalInterval(x.open);
      x.open.except(y.open).should.equalInterval(x.open);
      y.closed.except(x.closed).should.equalInterval(y.closed);
      y.closed.except(x.open).should.equalInterval(y.closed);
      y.open.except(x.closed).should.equalInterval(y.open);
      y.open.except(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate left/right overlapping except', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      const a = d.janjune;
      const b = d.septdec;
      x.closed.except(y.closed).equals(a.closedOpen).should.be.true();
      x.closed.except(y.open).equals(a.closed).should.be.true();
      x.open.except(y.closed).equals(a.open).should.be.true();
      x.open.except(y.open).equals(a.openClosed).should.be.true();
      y.closed.except(x.closed).equals(b.openClosed).should.be.true();
      y.closed.except(x.open).equals(b.closed).should.be.true();
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.closedOpen).should.be.true();
    });

    it('should properly calculate begins/begun by except', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      const b = d.julydec;
      should.not.exist(x.closed.except(y.closed));
      x.closed.except(y.open).should.equalInterval(new Interval(x.closed.low, x.closed.low));
      should.not.exist(x.open.except(y.open));
      y.closed.except(x.closed).equals(b.openClosed).should.be.true();
      should.not.exist(y.closed.except(x.open));
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.closedOpen).should.be.true();
    });

    it('should properly calculate includes/included by except', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      should.not.exist(x.closed.except(y.closed));
      should.not.exist(x.closed.except(y.open));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      should.not.exist(y.closed.except(x.closed));
      should.not.exist(y.closed.except(x.open));
      should.not.exist(y.open.except(x.closed));
      should.not.exist(y.open.except(x.open));
    });

    it('should properly calculate ends/ended by except', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      const b = d.janjuly;
      should.not.exist(x.closed.except(y.closed));
      x.closed.except(y.open).should.equalInterval(new Interval(x.closed.high, x.closed.high));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      y.closed.except(x.closed).equals(b.closedOpen).should.be.true();
      should.not.exist(y.closed.except(x.open));
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.openClosed).should.be.true();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toDay.except(y.toDay).low.should.eql(x.toDay.low);
      x.toDay.except(y.toDay).high.should.eql(y.toDay.low);
      y.toDay.except(x.toDay).low.should.eql(x.toDay.high);
      y.toDay.except(x.toDay).high.should.eql(y.toDay.high);

      [x, y] = Array.from(xy(d.dIvl.meets));
      // [a,b].except([b,c]) (where b is uncertain) should result in [a,b) but spec says we don't know if they overlap
      x.toDay.except(y.toDay).should.equalInterval(x.toDay);
      // [b,c].except([a,b]) (where b is uncertain) should result in (b,c] but spec says we don't know if they overlap
      y.toDay.except(x.toDay).should.equalInterval(y.toDay);

      [x, y] = Array.from(xy(d.dIvl.during));
      should.not.exist(x.toDay.except(y.toDay));
      should.not.exist(y.toDay.except(x.toDay));

      [x, y] = Array.from(xy(d.dIvl.ends));
      should.not.exist(x.toDay.except(y.toDay));
      should.not.exist(x.toDay.except(y.toDay));
      // x: ['2012-07-01', '2012-12-31']
      // y: ['2012-01-01', '2012-12-31']
      y.toDay
        .except(x.toDay)
        .should.equalInterval(new Interval(y.toDay.low, x.toDay.low, true, false));
      y.toDay
        .except(x.toMinute)
        .should.equalInterval(new Interval(y.toDay.low, x.toMinute.low, true, false));

      [x, y] = Array.from(xy(d.dIvl.begins));
      should.not.exist(x.toDay.except(y.toDay));
      should.not.exist(x.toDay.except(y.toDay));
      // x: ['2012-01-01', '2012-07-01']
      // y: ['2012-01-01', '2012-12-31']
      y.toDay
        .except(x.toDay)
        .should.equalInterval(new Interval(x.toDay.high, y.toDay.high, false, true));
      y.toDay
        .except(x.toMinute)
        .should.equalInterval(new Interval(x.toMinute.high, y.toDay.high, false, true));
    });

    it('should throw when the argument is a point', () => {
      should(() => d.all2012.closed.except(DateTime.parse('2012-07-01T00:00:00.0'))).throw(Error);
    });
  });

  describe('after', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.true();
      y.closed.after(x.open).should.be.true();
      y.open.after(x.closed).should.be.true();
      y.open.after(x.open).should.be.true();
    });

    it('should compare an interval start to a point', () => {
      const interval = new Interval(5, 10);
      interval.after(4).should.be.true();
      interval.after(5).should.be.false();
      should(interval.after(null)).be.null();

      const dateInterval = new Interval(
        DateTime.parse('2012-03-01T00:00:00.000'),
        DateTime.parse('2012-09-01T00:00:00.000')
      );
      dateInterval
        .after(DateTime.parse('2012-02-29T23:59:59.999'), DateTime.Unit.DAY)
        .should.be.true();
      dateInterval
        .after(DateTime.parse('2012-03-01T23:59:59.999'), DateTime.Unit.DAY)
        .should.be.false();
      dateInterval
        .after(DateTime.parse('2012-02-29T23:59:59.999'), DateTime.Unit.MONTH)
        .should.be.true();
      dateInterval
        .after(DateTime.parse('2012-03-01T23:59:59.999'), DateTime.Unit.MONTH)
        .should.be.false();
      dateInterval
        .after(DateTime.parse('2012-02-29T23:59:59.999'), DateTime.Unit.YEAR)
        .should.be.false();
      dateInterval
        .after(DateTime.parse('2012-03-01T23:59:59.999'), DateTime.Unit.YEAR)
        .should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.true();
      y.closed.after(x.open).should.be.true();
      y.open.after(x.closed).should.be.true();
      y.open.after(x.open).should.be.true();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.after(y.toMinute).should.be.false();
      x.toHour.after(y.toMinute).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.after(y.toMonth).should.be.false();
      x.toMonth.after(y.toDay).should.be.false();
      should.not.exist(x.toYear.after(y.closed));
      should.not.exist(y.toYear.after(x.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.after(y.toMonth).should.be.false();
      y.toDay.after(x.toMonth).should.be.true();
      should.not.exist(x.toYear.after(y.closed));
      should.not.exist(y.toYear.after(x.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.after(y.toMonth).should.be.false();
      should.not.exist(x.toYear.after(y.closed));
      should.not.exist(y.toYear.after(x.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.after(y.toMinute).should.be.false();
      x.toMinute.after(y.toDay).should.be.false();
      should.not.exist(x.toYear.after(y.closed));
      should.not.exist(y.toYear.after(x.closed));

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.after(y.toMonth).should.be.false();
      y.toMonth.after(x.toMonth).should.be.false();
      x.toDay.after(y.toMonth).should.be.false();
      should.not.exist(x.toYear.after(y.closed));
      should.not.exist(y.toYear.after(x.closed));

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.after(y.toMinute).should.be.false();
      x.toMinute.after(y.toMonth).should.be.false();
      should.not.exist(x.toYear.after(y.closed));
      should.not.exist(x.toYear.after(x.closed));
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).after(d.all2012.closed).should.be.false();
      d.all2012.closed.after(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
    });
  });

  describe('sameOrAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should compare intervals to points as unit intervals', () => {
      d.all2012.closed.sameOrAfter(DateTime.parse('2011-12-31T23:59:59.999')).should.be.true();
      d.all2012.closed.sameOrAfter(DateTime.parse('2012-01-01T00:00:00.0')).should.be.true();
      d.all2012.closed.sameOrAfter(DateTime.parse('2012-01-01T00:00:00.001')).should.be.false();
      should(d.all2012.closed.sameOrAfter(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .sameOrAfter(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.false();
      boundlessInterval(ELM_DATETIME_TYPE).sameOrAfter(d.all2012.closed).should.be.false();
      d.all2012.closed.sameOrAfter(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        unknownInterval(ELM_DATETIME_TYPE).sameOrAfter(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });
  });

  describe('before', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.before(y.closed).should.be.true();
      x.closed.before(y.open).should.be.true();
      x.open.before(y.closed).should.be.true();
      x.open.before(y.open).should.be.true();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should compare an interval end to a point', () => {
      const interval = new Interval(5, 10);
      interval.before(11).should.be.true();
      interval.before(10).should.be.false();
      should(interval.before(null)).be.null();

      const dateInterval = new Interval(
        DateTime.parse('2012-03-01T00:00:00.000'),
        DateTime.parse('2012-09-01T00:00:00.000')
      );
      dateInterval
        .before(DateTime.parse('2012-09-02T00:00:00.000'), DateTime.Unit.DAY)
        .should.be.true();
      dateInterval
        .before(DateTime.parse('2012-09-01T23:59:59.999'), DateTime.Unit.DAY)
        .should.be.false();
      dateInterval
        .before(DateTime.parse('2012-09-02T00:00:00.000'), DateTime.Unit.MONTH)
        .should.be.false();
      dateInterval
        .before(DateTime.parse('2012-09-01T23:59:59.999'), DateTime.Unit.MONTH)
        .should.be.false();
      dateInterval
        .before(DateTime.parse('2012-09-02T00:00:00.000'), DateTime.Unit.YEAR)
        .should.be.false();
      dateInterval
        .before(DateTime.parse('2012-09-01T23:59:59.999'), DateTime.Unit.YEAR)
        .should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.before(y.closed).should.be.true();
      x.closed.before(y.open).should.be.true();
      x.open.before(y.closed).should.be.true();
      x.open.before(y.open).should.be.true();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.before(y.toMinute).should.be.false();
      x.toHour.before(y.toMinute).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.before(y.toMonth).should.be.true();
      x.toMonth.before(y.toDay).should.be.true();
      should.not.exist(y.toYear.before(x.closed));
      should.not.exist(x.toYear.before(y.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.before(y.toMonth).should.be.true();
      x.toDay.before(y.toMonth).should.be.true();
      should.not.exist(y.toYear.before(x.closed));
      should.not.exist(x.toYear.before(y.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.before(y.toMonth).should.be.false();
      x.toMonth.before(y.toMinute).should.be.false();
      should.not.exist(y.toYear.before(x.closed));
      should.not.exist(x.toYear.before(y.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.before(y.toMinute).should.be.false();
      should.not.exist(y.toYear.before(x.closed));
      should.not.exist(x.toYear.before(y.closed));

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.before(y.toMonth).should.be.false();
      y.toMonth.before(x.toMonth).should.be.false();
      y.toMonth.before(x.toDay).should.be.false();
      should.not.exist(y.toYear.before(x.closed));
      should.not.exist(x.toYear.before(y.closed));

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.before(y.toMinute).should.be.false();
      should.not.exist(y.toYear.before(x.closed));
      should.not.exist(x.toYear.before(y.closed));
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).before(d.all2012.closed).should.be.false();
      d.all2012.closed.before(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
    });
  });

  describe('sameOrBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should compare intervals to points as unit intervals', () => {
      d.all2012.closed.sameOrBefore(DateTime.parse('2013-01-01T00:00:00.0')).should.be.true();
      d.all2012.closed.sameOrBefore(DateTime.parse('2012-12-31T23:59:59.999')).should.be.true();
      d.all2012.closed.sameOrBefore(DateTime.parse('2012-12-31T00:00:00.0')).should.be.false();
      should(d.all2012.closed.sameOrBefore(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE)
        .sameOrBefore(boundlessInterval(ELM_DATETIME_TYPE))
        .should.be.false();
      boundlessInterval(ELM_DATETIME_TYPE).sameOrBefore(d.all2012.closed).should.be.false();
      d.all2012.closed.sameOrBefore(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
      should(
        unknownInterval(ELM_DATETIME_TYPE).sameOrBefore(boundlessInterval(ELM_DATETIME_TYPE))
      ).be.null();
    });
  });

  // TODO Add tests that pass in precision parameters
  describe('meets', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.meets(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.meets(y.closed).should.be.true();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.true();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.meets(y.toMinute).should.be.false();
      x.toHour.meets(y.toMinute).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.meets(y.toMonth).should.be.false();
      should.not.exist(x.toYear.meets(y.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.meets(y.toMonth).should.be.true();
      should.not.exist(x.toYear.meets(y.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.meets(y.toMonth).should.be.false();
      should.not.exist(x.toYear.meets(y.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.meets(y.toMinute).should.be.false();
      x.toYear.meets(y.closed).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.meets(y.toMonth).should.be.false();
      y.toMonth.meets(x.toMonth).should.be.false();
      x.toYear.meets(y.closed).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.meets(y.toMinute).should.be.false();
      x.toYear.meets(y.closed).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).meets(d.all2012.closed).should.be.false();
      d.all2012.closed.meets(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
    });
  });

  // TODO Add tests that pass in precision parameter
  describe('meetsAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.meetsAfter(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.true();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.meetsAfter(y.toMinute).should.be.false();
      x.toHour.meetsAfter(y.toMinute).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.meetsAfter(y.toMonth).should.be.false();
      x.toYear.meetsAfter(y.closed).should.be.false();
      should.not.exist(y.toYear.meetsAfter(x.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.meetsAfter(y.toMonth).should.be.false();
      y.toMonth.meetsAfter(x.toMonth).should.be.true();
      should.not.exist(y.toDay.meetsAfter(x.toMonth));
      x.toYear.meetsAfter(y.closed).should.be.false();
      should.not.exist(y.toYear.meetsAfter(x.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.meetsAfter(y.toMonth).should.be.false();
      x.toYear.meetsAfter(y.closed).should.be.false();
      should.not.exist(y.toYear.meetsAfter(x.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.meetsAfter(y.toMinute).should.be.false();
      x.toYear.meetsAfter(y.closed).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.meetsAfter(y.toMonth).should.be.false();
      y.toMonth.meetsAfter(x.toMonth).should.be.false();
      x.toYear.meetsAfter(y.closed).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.meetsAfter(y.toMinute).should.be.false();
      x.toYear.meetsAfter(y.closed).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).meetsAfter(d.all2012.closed).should.be.false();
      d.all2012.closed.meetsAfter(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
    });
  });

  // TODO Add tests that pass in precision parameter
  describe('meetsBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.all2012.closed.meetsBefore(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.before));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.meets));
      x.closed.meetsBefore(y.closed).should.be.true();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.begins));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.during));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.dIvl.ends));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      let [x, y] = Array.from(xy(d.dIvl.sameAs));
      x.closed.meetsBefore(y.toMinute).should.be.false();
      x.toHour.meetsBefore(y.toMinute).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.before));
      x.toMonth.meetsBefore(y.toMonth).should.be.false();
      should.not.exist(x.toYear.meetsBefore(y.closed));

      [x, y] = Array.from(xy(d.dIvl.meets));
      x.toMonth.meetsBefore(y.toMonth).should.be.true();
      should.not.exist(x.toMonth.meetsBefore(y.toDay));
      should.not.exist(x.toYear.meetsBefore(y.closed));

      [x, y] = Array.from(xy(d.dIvl.overlaps));
      x.toMonth.meetsBefore(y.toMonth).should.be.false();
      should.not.exist(x.toYear.meetsBefore(y.closed));

      [x, y] = Array.from(xy(d.dIvl.begins));
      x.toMinute.meetsBefore(y.toMinute).should.be.false();
      x.toYear.meetsBefore(y.closed).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.during));
      x.toMonth.meetsBefore(y.toMonth).should.be.false();
      y.toMonth.meetsBefore(x.toMonth).should.be.false();
      x.toYear.meetsBefore(y.closed).should.be.false();

      [x, y] = Array.from(xy(d.dIvl.ends));
      x.toMinute.meetsBefore(y.toMinute).should.be.false();
      x.toYear.meetsBefore(y.closed).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_DATETIME_TYPE).meetsBefore(d.all2012.closed).should.be.false();
      d.all2012.closed.meetsBefore(boundlessInterval(ELM_DATETIME_TYPE)).should.be.false();
    });
  });
});

describe('IntegerInterval', () => {
  describe('contains', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate integers less than it', () => {
      d.zeroToHundred.closed.contains(-5).should.be.false();
    });

    it('should properly calculate the left boundary integer', () => {
      d.zeroToHundred.closed.contains(0).should.be.true();
      d.zeroToHundred.open.contains(0).should.be.false();
    });

    it('should properly calculate integers in the middle of it', () => {
      d.zeroToHundred.closed.contains(50).should.be.true();
    });

    it('should properly calculate the right boundary integer', () => {
      d.zeroToHundred.closed.contains(100).should.be.true();
      d.zeroToHundred.open.contains(100).should.be.false();
    });

    it('should properly calculate integers greater than it', () => {
      d.zeroToHundred.closed.contains(105).should.be.false();
    });

    it('should properly handle null endpoints', () => {
      new Interval(null, 0).contains(-123456789).should.be.true();
      new Interval(null, 0).contains(1).should.be.false();
      new Interval(null, 0, false, true).contains(0).should.be.true();
      should(new Interval(null, 0, false, true).contains(-123456789)).be.null();
      new Interval(null, 0, false, true).contains(1).should.be.false();
      new Interval(0, null).contains(123456789).should.be.true();
      new Interval(0, null).contains(-1).should.be.false();
      new Interval(0, null, true, false).contains(0).should.be.true();
      should(new Interval(0, null, true, false).contains(123456789)).be.null();
      new Interval(0, null, true, false).contains(-1).should.be.false();
      boundlessInterval(ELM_INTEGER_TYPE).contains(5).should.be.true();
      should(unknownInterval(ELM_INTEGER_TYPE).contains(5)).be.null();
    });

    it('should properly handle imprecision', () => {
      d.zeroToHundred.closed.contains(new Uncertainty(-20, -10)).should.be.false();
      should.not.exist(d.zeroToHundred.closed.contains(new Uncertainty(-20, 20)));
      d.zeroToHundred.closed.contains(new Uncertainty(0, 100)).should.be.true();
      should.not.exist(d.zeroToHundred.closed.contains(new Uncertainty(80, 120)));
      d.zeroToHundred.closed.contains(new Uncertainty(120, 140)).should.be.false();
      should.not.exist(d.zeroToHundred.closed.contains(new Uncertainty(-20, 120)));

      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      uIvl.contains(0).should.be.false();
      should.not.exist(uIvl.contains(5));
      should.not.exist(uIvl.contains(6));
      uIvl.contains(10).should.be.true();
      uIvl.contains(12).should.be.true();
      uIvl.contains(15).should.be.true();
      should.not.exist(uIvl.contains(16));
      should.not.exist(uIvl.contains(20));
      uIvl.contains(25).should.be.false();

      uIvl.contains(new Uncertainty(0, 4)).should.be.false();
      should.not.exist(uIvl.contains(new Uncertainty(0, 5)));
      should.not.exist(uIvl.contains(new Uncertainty(5, 10)));
      uIvl.contains(new Uncertainty(10, 15)).should.be.true();
      should.not.exist(uIvl.contains(new Uncertainty(15, 20)));
      should.not.exist(uIvl.contains(new Uncertainty(20, 25)));
      uIvl.contains(new Uncertainty(25, 30)).should.be.false();
    });

    it('should throw when the argument is an interval', () => {
      should(() => d.zeroToHundred.closed.contains(new Interval(5, 10))).throw(Error);
    });
  });

  describe('properContains', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate integers less than it', () => {
      d.zeroToHundred.closed.properContains(-5).should.be.false();
    });

    it('should properly calculate the left boundary integer', () => {
      d.zeroToHundred.closed.properContains(0).should.be.true();
      d.zeroToHundred.open.properContains(0).should.be.false();
      d.zeroToHundred.closed.properContains(1).should.be.true();
      d.zeroToHundred.open.properContains(1).should.be.true();
      d.zeroToHundred.closed.properContains(2).should.be.true();
      d.zeroToHundred.open.properContains(2).should.be.true();
    });

    it('should properly calculate integers in the middle of it', () => {
      d.zeroToHundred.closed.properContains(50).should.be.true();
    });

    it('should properly calculate the right boundary integer', () => {
      d.zeroToHundred.closed.properContains(100).should.be.true();
      d.zeroToHundred.open.properContains(100).should.be.false();
      d.zeroToHundred.closed.properContains(99).should.be.true();
      d.zeroToHundred.open.properContains(99).should.be.true();
      d.zeroToHundred.closed.properContains(98).should.be.true();
      d.zeroToHundred.open.properContains(98).should.be.true();
    });

    it('should properly calculate integers greater than it', () => {
      d.zeroToHundred.closed.properContains(105).should.be.false();
    });

    it('should properly handle null endpoints', () => {
      new Interval(null, 0).properContains(-123456789).should.be.true();
      new Interval(null, 0).properContains(1).should.be.false();
      should(new Interval(null, 0, false, true).properContains(0)).be.null();
      should(new Interval(null, 0, false, true).properContains(-123456789)).be.null();
      new Interval(null, 0, false, true).properContains(1).should.be.false();
      new Interval(0, null).properContains(123456789).should.be.true();
      new Interval(0, null).properContains(-1).should.be.false();
      should(new Interval(0, null, true, false).properContains(0)).be.null();
      should(new Interval(0, null, true, false).properContains(123456789)).be.null();
      new Interval(0, null, true, false).properContains(-1).should.be.false();
      new Interval(null, null, true, true, ELM_INTEGER_TYPE).properContains(0).should.be.true();
      should(new Interval(null, null, false, false, ELM_INTEGER_TYPE).properContains(0)).be.null();
    });

    it('should properly handle imprecision', () => {
      d.zeroToHundred.closed.properContains(new Uncertainty(-20, -10)).should.be.false();
      should.not.exist(d.zeroToHundred.closed.properContains(new Uncertainty(-20, 20)));
      should.not.exist(d.zeroToHundred.closed.properContains(new Uncertainty(0, 101)));
      d.zeroToHundred.closed.properContains(new Uncertainty(0, 100)).should.be.true();
      should.not.exist(d.zeroToHundred.closed.properContains(new Uncertainty(80, 120)));
      d.zeroToHundred.closed.properContains(new Uncertainty(120, 140)).should.be.false();
      should.not.exist(d.zeroToHundred.closed.properContains(new Uncertainty(-20, 120)));

      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      uIvl.properContains(0).should.be.false();
      should.not.exist(uIvl.properContains(5));
      should.not.exist(uIvl.properContains(6));
      uIvl.properContains(10).should.be.true();
      uIvl.properContains(12).should.be.true();
      uIvl.properContains(15).should.be.true();
      should.not.exist(uIvl.properContains(16));
      should.not.exist(uIvl.properContains(20));
      uIvl.properContains(25).should.be.false();

      uIvl.properContains(new Uncertainty(0, 4)).should.be.false();
      should.not.exist(uIvl.properContains(new Uncertainty(0, 5)));
      should.not.exist(uIvl.properContains(new Uncertainty(5, 10)));
      uIvl.properContains(new Uncertainty(10, 15)).should.be.true();
      uIvl.properContains(new Uncertainty(11, 14)).should.be.true();
      should.not.exist(uIvl.properContains(new Uncertainty(15, 20)));
      should.not.exist(uIvl.properContains(new Uncertainty(20, 25)));
      uIvl.properContains(new Uncertainty(25, 30)).should.be.false();
    });

    it('should throw when the argument is an interval', () => {
      should(() => d.zeroToHundred.closed.properContains(new Interval(5, 10))).throw(Error);
    });
  });

  describe('includes', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.includes(null)).be.null();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.includedIn(null)).be.null();
    });

    it('should throw error when argument is a point', () => {
      should(() => d.zeroToHundred.closed.includedIn(50)).throw(Error);
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.includes(y.closed).should.be.true();
      x.closed.includes(y.open).should.be.true();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.true();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.true();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.includes(uIvl).should.be.true();
      uIvl.includes(ivl).should.be.false();

      ivl = new Interval(-100, 0);
      ivl.includes(uIvl).should.be.false();
      uIvl.includes(ivl).should.be.false();

      ivl = new Interval(10, 15);
      should.not.exist(ivl.includes(uIvl));
      uIvl.includes(ivl).should.be.true();

      ivl = new Interval(5, 20);
      ivl.includes(uIvl).should.be.true();
      should.not.exist(uIvl.includes(ivl));

      should.not.exist(uIvl.includes(uIvl));
    });

    it('should include a point Integer', () => {
      d.zeroToHundred.closed.includes(50).should.be.true();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).includes(50).should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE).includes(d.zeroToHundred.closed).should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE)
        .includes(unknownInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      d.zeroToHundred.closed.includes(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(unknownInterval(ELM_INTEGER_TYPE).includes(d.zeroToHundred.closed)).be.null();
      should(
        unknownInterval(ELM_INTEGER_TYPE).includes(boundlessInterval(ELM_INTEGER_TYPE))
      ).be.null();
    });
  });

  describe('includedIn', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();

      y.closed.includedIn(x.closed).should.be.true();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.true();
      y.open.includedIn(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.true();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.includedIn(uIvl).should.be.false();
      uIvl.includedIn(ivl).should.be.true();

      ivl = new Interval(-100, 0);
      ivl.includedIn(uIvl).should.be.false();
      uIvl.includedIn(ivl).should.be.false();

      ivl = new Interval(10, 15);
      ivl.includedIn(uIvl).should.be.true();
      should.not.exist(uIvl.includedIn(ivl));

      ivl = new Interval(5, 20);
      should.not.exist(ivl.includedIn(uIvl));
      uIvl.includedIn(ivl).should.be.true();

      should.not.exist(uIvl.includedIn(uIvl));
    });

    it('should properly handle boundless and unknown intervals', () => {
      d.zeroToHundred.closed.includedIn(boundlessInterval(ELM_INTEGER_TYPE)).should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE).includedIn(d.zeroToHundred.closed).should.be.false();
      boundlessInterval(ELM_INTEGER_TYPE)
        .includedIn(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      unknownInterval(ELM_INTEGER_TYPE)
        .includedIn(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
    });
  });

  describe('properlyIncludes', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when null is passed in', () => {
      should(d.zeroToHundred.closed.properlyIncludes(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).properlyIncludes(d.zeroToHundred.closed).should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE)
        .properlyIncludes(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.false();
      should(
        boundlessInterval(ELM_INTEGER_TYPE).properlyIncludes(unknownInterval(ELM_INTEGER_TYPE))
      ).be.null();
      should(unknownInterval(ELM_INTEGER_TYPE).properlyIncludes(d.zeroToHundred.closed)).be.null();
    });

    it('should throw when point is passed in', () => {
      should(() => d.zeroToHundred.closed.properlyIncludes(50)).throw(Error);
    });
  });

  describe('starts', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.starts(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .starts(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE).starts(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.starts(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_INTEGER_TYPE).starts(unknownInterval(ELM_INTEGER_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_INTEGER_TYPE).starts(boundlessInterval(ELM_INTEGER_TYPE))
      ).be.null();
    });
  });

  describe('ends', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.ends(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .ends(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE).ends(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.ends(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(boundlessInterval(ELM_INTEGER_TYPE).ends(unknownInterval(ELM_INTEGER_TYPE))).be.null();
      should(unknownInterval(ELM_INTEGER_TYPE).ends(boundlessInterval(ELM_INTEGER_TYPE))).be.null();
    });
  });

  describe('overlaps(IntegerInterval)', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.overlaps(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.overlaps(y.closed).should.be.false();
      x.closed.overlaps(y.open).should.be.false();
      x.open.overlaps(y.closed).should.be.false();
      x.open.overlaps(y.open).should.be.false();
      y.closed.overlaps(x.closed).should.be.false();
      y.closed.overlaps(x.open).should.be.false();
      y.open.overlaps(x.closed).should.be.false();
      y.open.overlaps(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.overlaps(y.closed).should.be.false();
      x.closed.overlaps(y.open).should.be.false();
      x.open.overlaps(y.closed).should.be.false();
      x.open.overlaps(y.open).should.be.false();
      y.closed.overlaps(x.closed).should.be.false();
      y.closed.overlaps(x.open).should.be.false();
      y.open.overlaps(x.closed).should.be.false();
      y.open.overlaps(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly handle null endpoints', () => {
      const earlyInterval = new Interval(-123456789, -1);
      const lateInterval = new Interval(1, 123456789);
      const startsAtZero = new Interval(0, 123456789);
      const endsAtZero = new Interval(-123456789, 0);

      should(new Interval(null, 0).overlaps(earlyInterval)).be.true();
      should(new Interval(null, 0).overlaps(lateInterval)).be.false();
      should(new Interval(null, 0, false, true).overlaps(startsAtZero)).be.true();
      should(new Interval(null, 0, false, true).overlaps(earlyInterval)).be.null();
      should(new Interval(null, 0, false, true).overlaps(lateInterval)).be.false();

      should(new Interval(0, null).overlaps(lateInterval)).be.true();
      should(new Interval(0, null).overlaps(earlyInterval)).be.false();
      should(new Interval(0, null, true, false).overlaps(endsAtZero)).be.true();
      should(new Interval(0, null, true, false).overlaps(lateInterval)).be.null();
      should(new Interval(0, null, true, false).overlaps(earlyInterval)).be.false();

      should(boundlessInterval(ELM_INTEGER_TYPE).overlaps(d.zeroToHundred.closed)).be.true();
      should(unknownInterval(ELM_INTEGER_TYPE).overlaps(d.zeroToHundred.closed)).be.null();
      should(d.zeroToHundred.closed.overlaps(boundlessInterval(ELM_INTEGER_TYPE))).be.true();
      should(d.zeroToHundred.closed.overlaps(unknownInterval(ELM_INTEGER_TYPE))).be.null();
      boundlessInterval(ELM_INTEGER_TYPE)
        .overlaps(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE)
        .overlaps(unknownInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      unknownInterval(ELM_INTEGER_TYPE)
        .overlaps(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.overlaps(uIvl).should.be.true();
      uIvl.overlaps(ivl).should.be.true();

      ivl = new Interval(-100, 0);
      ivl.overlaps(uIvl).should.be.false();
      uIvl.overlaps(ivl).should.be.false();

      ivl = new Interval(10, 15);
      ivl.overlaps(uIvl).should.be.true();
      uIvl.overlaps(ivl).should.be.true();

      ivl = new Interval(5, 20);
      ivl.overlaps(uIvl).should.be.true();
      uIvl.overlaps(ivl).should.be.true();

      uIvl.overlaps(uIvl).should.be.true();
    });
  });

  describe('overlapsBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.overlapsBefore(null)).be.null();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).overlapsBefore(d.zeroToHundred.closed).should.be.true();
      d.zeroToHundred.closed.overlapsBefore(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_INTEGER_TYPE).overlapsBefore(unknownInterval(ELM_INTEGER_TYPE))
      ).be.null();
      unknownInterval(ELM_INTEGER_TYPE)
        .overlapsBefore(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.false();
    });
  });

  describe('overlapsAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.overlapsAfter(null)).be.null();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).overlapsAfter(d.zeroToHundred.closed).should.be.true();
      d.zeroToHundred.closed.overlapsAfter(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_INTEGER_TYPE).overlapsAfter(unknownInterval(ELM_INTEGER_TYPE))
      ).be.null();
      unknownInterval(ELM_INTEGER_TYPE)
        .overlapsAfter(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.false();
    });
  });

  describe('equals', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.equals(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.equals(y.closed).should.be.true();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.true();
      y.closed.equals(x.closed).should.be.true();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate open vs. closed intervals', () => {
      const c2c5 = new Interval(2, 5, true, true);
      const o2c5 = new Interval(2, 5, false, true);
      const c2o5 = new Interval(2, 5, true, false);
      const o2o5 = new Interval(2, 5, false, false);
      const c1c6 = new Interval(1, 6, true, true);
      const o1c6 = new Interval(1, 6, false, true);
      const c1o6 = new Interval(1, 6, true, false);
      const o1o6 = new Interval(1, 6, false, false);

      c2c5.equals(o2o5).should.be.false();
      c2c5.equals(c1c6).should.be.false();
      c2c5.equals(o1c6).should.be.false();
      c2c5.equals(c1o6).should.be.false();
      c2c5.equals(o1o6).should.be.true();
      o1o6.equals(c1c6).should.be.false();
      o1o6.equals(c2c5).should.be.true();
      o1o6.equals(o2c5).should.be.false();
      o1o6.equals(c2o5).should.be.false();
      o1o6.equals(o2o5).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.equals(uIvl).should.be.false();
      uIvl.equals(ivl).should.be.false();

      ivl = new Interval(-100, 0);
      ivl.equals(uIvl).should.be.false();
      uIvl.equals(ivl).should.be.false();

      ivl = new Interval(10, 15);
      should(ivl.equals(uIvl)).be.null();
      should(uIvl.equals(ivl)).be.null();

      ivl = new Interval(5, 20);
      should(ivl.equals(uIvl)).be.null();
      should(uIvl.equals(ivl)).be.null();

      should(uIvl.equals(uIvl)).be.null();
    });

    it('should be false for equality with points', () => {
      const point = 3;
      const ivl = new Interval(point, point, true, true);

      ivl.equals(point).should.be.false();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .equals(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE).equals(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.equals(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_INTEGER_TYPE).equals(unknownInterval(ELM_INTEGER_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_INTEGER_TYPE).equals(boundlessInterval(ELM_INTEGER_TYPE))
      ).be.null();
      should(unknownInterval(ELM_INTEGER_TYPE).equals(unknownInterval(ELM_INTEGER_TYPE))).be.null();
    });
  });

  describe('sameAs', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.sameAs(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .sameAs(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.true();
      boundlessInterval(ELM_INTEGER_TYPE).sameAs(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.sameAs(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_INTEGER_TYPE).sameAs(unknownInterval(ELM_INTEGER_TYPE))
      ).be.null();
      should(
        unknownInterval(ELM_INTEGER_TYPE).sameAs(boundlessInterval(ELM_INTEGER_TYPE))
      ).be.null();
    });
  });

  describe('union', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.union(null)).be.null();
    });

    it('should properly calculate sameAs unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.union(y.closed).equals(x.closed).should.be.true();
      x.closed.union(y.open).equals(x.closed).should.be.true();
      x.open.union(y.closed).equals(x.closed).should.be.true();
      x.open.union(y.open).equals(x.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.closed).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate before/after unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      should(x.closed.union(y.closed)).be.null();
      should(x.closed.union(y.open)).be.null();
      should(x.open.union(y.closed)).be.null();
      should(x.open.union(y.open)).be.null();
      should(y.closed.union(x.closed)).be.null();
      should(y.closed.union(x.open)).be.null();
      should(y.open.union(x.closed)).be.null();
      should(y.open.union(x.open)).be.null();
    });

    it('should properly calculate meets unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      const z = d.zeroToHundred;
      x.closed.union(y.closed).equals(z.closed).should.be.true();
      should(x.closed.union(y.open)).be.null();
      should(x.open.union(y.closed)).be.null();
      should(x.open.union(y.open)).be.null();
      y.closed.union(x.closed).equals(z.closed).should.be.true();
      should(y.closed.union(x.open)).be.null();
      should(y.open.union(x.closed)).be.null();
      should(y.open.union(x.open)).be.null();
    });

    it('should properly calculate left/right overlapping unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      const z = d.zeroToHundred;
      x.closed.union(y.closed).equals(z.closed).should.be.true();
      x.closed.union(y.open).equals(z.closedOpen).should.be.true();
      x.open.union(y.closed).equals(z.openClosed).should.be.true();
      x.open.union(y.open).equals(z.open).should.be.true();
      y.closed.union(x.closed).equals(z.closed).should.be.true();
      y.closed.union(x.open).equals(z.openClosed).should.be.true();
      y.open.union(x.closed).equals(z.closedOpen).should.be.true();
      y.open.union(x.open).equals(z.open).should.be.true();
    });

    it('should properly calculate begins/begun by unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.closedOpen).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.closedOpen).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate includes/included by unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.open).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.open).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate ends/ended by unions', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.openClosed).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.openClosed).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.union(uIvl).equals(ivl).should.be.true();
      uIvl.union(ivl).equals(ivl).should.be.true();

      ivl = new Interval(-100, 0);
      should(ivl.union(uIvl)).be.null();
      should(uIvl.union(ivl)).be.null();

      ivl = new Interval(8, 17);
      let i = ivl.union(uIvl);
      i.low.low.should.equal(5);
      i.low.high.should.equal(8);
      i.high.low.should.equal(17);
      i.high.high.should.equal(20);

      i = uIvl.union(ivl);
      i.low.low.should.equal(5);
      i.low.high.should.equal(8);
      i.high.low.should.equal(17);
      i.high.high.should.equal(20);

      ivl = new Interval(10, 15);
      i = ivl.union(uIvl);
      i.should.equalInterval(uIvl);

      i = uIvl.union(ivl);
      i.should.equalInterval(uIvl);

      ivl = new Interval(15, 20);
      i = ivl.union(uIvl);
      i.low.should.eql(uIvl.low);
      i.high.should.eql(ivl.high);
      i = uIvl.union(ivl);
      i.low.should.eql(uIvl.low);
      i.high.should.eql(ivl.high);

      ivl = new Interval(20, 30);
      should.not.exist(ivl.union(uIvl));

      ivl = new Interval(5, 20);
      ivl.union(uIvl).equals(ivl).should.be.true();
      uIvl.union(ivl).equals(ivl).should.be.true();
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundred.union(300)).throw(Error);
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .union(d.zeroToHundred.closed)
        .should.equalInterval(boundlessInterval(ELM_INTEGER_TYPE));
      d.zeroToHundred.closed
        .union(boundlessInterval(ELM_INTEGER_TYPE))
        .should.equalInterval(boundlessInterval(ELM_INTEGER_TYPE));
      boundlessInterval(ELM_INTEGER_TYPE)
        .union(unknownInterval(ELM_INTEGER_TYPE))
        .should.equalInterval(boundlessInterval(ELM_INTEGER_TYPE));
      unknownInterval(ELM_INTEGER_TYPE)
        .union(boundlessInterval(ELM_INTEGER_TYPE))
        .should.equalInterval(boundlessInterval(ELM_INTEGER_TYPE));
    });
  });

  describe('intersect', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.intersect(null)).be.null();
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundred.intersect(300)).throw(Error);
    });

    it('should properly calculate sameAs intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(y.open).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(y.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(y.open).should.be.true();
      y.open.intersect(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate before/after intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      should.not.exist(x.closed.intersect(y.closed));
      should.not.exist(x.closed.intersect(y.open));
      should.not.exist(x.open.intersect(y.closed));
      should.not.exist(x.open.intersect(y.open));
      should.not.exist(y.closed.intersect(x.closed));
      should.not.exist(y.closed.intersect(x.open));
      should.not.exist(y.open.intersect(x.closed));
      should.not.exist(y.open.intersect(x.open));
    });

    it('should properly calculate meets intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      should.not.exist(x.closed.intersect(y.closed));
      should.not.exist(x.closed.intersect(y.open));
      should.not.exist(x.open.intersect(y.closed));
      should.not.exist(x.open.intersect(y.open));
      should.not.exist(y.closed.intersect(x.closed));
      should.not.exist(y.closed.intersect(x.open));
      should.not.exist(y.open.intersect(x.closed));
      should.not.exist(y.open.intersect(x.open));
    });

    it('should properly calculate left/right overlapping intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      const a = d.fortyToSixty;
      x.closed.intersect(y.closed).equals(a.closed).should.be.true();
      x.closed.intersect(y.open).equals(a.openClosed).should.be.true();
      x.open.intersect(y.closed).equals(a.closedOpen).should.be.true();
      x.open.intersect(y.open).equals(a.open).should.be.true();
      y.closed.intersect(x.closed).equals(a.closed).should.be.true();
      y.closed.intersect(x.open).equals(a.closedOpen).should.be.true();
      y.open.intersect(x.closed).equals(a.openClosed).should.be.true();
      y.open.intersect(x.open).equals(a.open).should.be.true();
    });

    it('should properly calculate begins/begun by intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.openClosed).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.openClosed).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.closed).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.closed).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intersect', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.closedOpen).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.closedOpen).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const a = 0;
      const b = new Uncertainty(10, 20);
      const c = 50;
      const d = new Uncertainty(80, 90);
      const e = 100;

      let x = new Interval(b, e);
      let y = new Interval(a, c);
      x.intersect(y).should.equalInterval(new Interval(b, c));
      y.intersect(x).should.equalInterval(new Interval(b, c));

      x = new Interval(a, b);
      y = new Interval(b, d);
      // x.intersect(y) should result in [b,b] but spec says we don't know if they overlap
      should.not.exist(x.intersect(y));
      // y.intersect(x) should result in [b,b] but spec says we don't know if they overlap
      should.not.exist(y.intersect(x));

      x = new Interval(a, e);
      y = new Interval(b, d);
      x.intersect(y).should.equalInterval(y);
      y.intersect(x).should.equalInterval(y);

      x = new Interval(a, d);
      y = new Interval(b, e);
      x.intersect(y).should.equalInterval(new Interval(b, d));
      y.intersect(x).should.equalInterval(new Interval(b, d));

      x = new Interval(a, b);
      y = new Interval(d, e);
      should.not.exist(x.intersect(y));
      should.not.exist(y.intersect(x));

      x = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));
      y = new Interval(8, 17);
      x.intersect(y).should.equalInterval(
        new Interval(new Uncertainty(8, 10), new Uncertainty(15, 17))
      );
      y.intersect(x).should.equalInterval(
        new Interval(new Uncertainty(8, 10), new Uncertainty(15, 17))
      );
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundred.intersect(50)).throw(Error);
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .intersect(d.zeroToHundred.closed)
        .should.equalInterval(d.zeroToHundred.closed);
      d.zeroToHundred.closed
        .intersect(boundlessInterval(ELM_INTEGER_TYPE))
        .should.equalInterval(d.zeroToHundred.closed);
      boundlessInterval(ELM_INTEGER_TYPE)
        .intersect(unknownInterval(ELM_INTEGER_TYPE))
        .should.equalInterval(unknownInterval(ELM_INTEGER_TYPE));
      unknownInterval(ELM_INTEGER_TYPE)
        .intersect(boundlessInterval(ELM_INTEGER_TYPE))
        .should.equalInterval(unknownInterval(ELM_INTEGER_TYPE));
    });
  });

  describe('except', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.except(null)).be.null();
    });

    it('should properly calculate sameAs except', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      should.not.exist(x.closed.except(y.closed));
      should.not.exist(x.closed.except(y.open));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      should.not.exist(y.closed.except(x.closed));
      should.not.exist(y.closed.except(x.open));
      should.not.exist(y.open.except(x.closed));
      should.not.exist(y.open.except(x.open));
    });

    it('should properly calculate before/after except', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.except(y.closed).should.equalInterval(x.closed);
      x.closed.except(y.open).should.equalInterval(x.closed);
      x.open.except(y.closed).should.equalInterval(x.open);
      x.open.except(y.open).should.equalInterval(x.open);
      y.closed.except(x.closed).should.equalInterval(y.closed);
      y.closed.except(x.open).should.equalInterval(y.closed);
      y.open.except(x.closed).should.equalInterval(y.open);
      y.open.except(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate meets except', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.except(y.closed).should.equalInterval(x.closed);
      x.closed.except(y.open).should.equalInterval(x.closed);
      x.open.except(y.closed).should.equalInterval(x.open);
      x.open.except(y.open).should.equalInterval(x.open);
      y.closed.except(x.closed).should.equalInterval(y.closed);
      y.closed.except(x.open).should.equalInterval(y.closed);
      y.open.except(x.closed).should.equalInterval(y.open);
      y.open.except(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate left/right overlapping except', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      const a = d.zeroToForty;
      const b = d.sixtyToHundred;
      x.closed.except(y.closed).equals(a.closedOpen).should.be.true();
      x.closed.except(y.open).equals(a.closed).should.be.true();
      x.open.except(y.closed).equals(a.open).should.be.true();
      x.open.except(y.open).equals(a.openClosed).should.be.true();
      y.closed.except(x.closed).equals(b.openClosed).should.be.true();
      y.closed.except(x.open).equals(b.closed).should.be.true();
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.closedOpen).should.be.true();
    });

    it('should properly calculate begins/begun by except', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      const b = d.sixtyToHundred;
      should.not.exist(x.closed.except(y.closed));
      x.closed.except(y.open).should.equalInterval(new Interval(x.closed.low, x.closed.low));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      y.closed.except(x.closed).equals(b.openClosed).should.be.true();
      should.not.exist(y.closed.except(x.open));
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.closedOpen).should.be.true();
    });

    it('should properly calculate includes/included by except', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      should.not.exist(x.closed.except(y.closed));
      should.not.exist(x.closed.except(y.open));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      should.not.exist(y.closed.except(x.closed));
      should.not.exist(y.closed.except(x.open));
      should.not.exist(y.open.except(x.closed));
      should.not.exist(y.open.except(x.open));
    });

    it('should properly calculate ends/ended by except', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      const b = d.zeroToForty;
      should.not.exist(x.closed.except(y.closed));
      x.closed.except(y.open).should.equalInterval(new Interval(x.closed.high, x.closed.high));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      y.closed.except(x.closed).equals(b.closedOpen).should.be.true();
      should.not.exist(y.closed.except(x.open));
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.openClosed).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const a = 0;
      const b = new Uncertainty(10, 20);
      const c = 50;
      const d = new Uncertainty(80, 90);
      const e = 100;

      let x = new Interval(b, e); //([10,20] , 100)
      let y = new Interval(a, c); //(   0    ,  50)
      x.except(y).should.equalInterval(new Interval(c, e, false, true));
      y.except(x).should.equalInterval(new Interval(a, b, true, false));

      x = new Interval(a, b);
      y = new Interval(b, d);
      // x.except(y) should result in [a,b) but spec says we don't know if they overlap
      should.not.exist(x.except(y));
      // y.except(x) should result in (b,d] but spec says we don't know if they overlap
      should.not.exist(y.except(x));

      x = new Interval(a, e);
      y = new Interval(b, d);
      should.not.exist(x.except(y));
      should.not.exist(y.except(x));

      x = new Interval(a, d);
      y = new Interval(b, e);
      x.except(y).should.equalInterval(new Interval(a, b, true, false));
      y.except(x).should.equalInterval(new Interval(d, e, false, true));

      x = new Interval(a, b);
      y = new Interval(d, e);
      x.except(y).should.equalInterval(x);
      y.except(x).should.equalInterval(y);
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundred.except(100)).throw(Error);
    });
  });

  describe('after', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.true();
      y.closed.after(x.open).should.be.true();
      y.open.after(x.closed).should.be.true();
      y.open.after(x.open).should.be.true();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.true();
      y.closed.after(x.open).should.be.true();
      y.open.after(x.closed).should.be.true();
      y.open.after(x.open).should.be.true();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(-100, 0);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.true();

      ivl = new Interval(10, 15);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(15, 20);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(20, 30);
      should.not.exist(ivl.after(uIvl));
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(5, 20);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      uIvl.after(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).after(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.after(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
    });
  });

  describe('sameOrAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should compare intervals to points as unit intervals', () => {
      d.zeroToHundred.closed.sameOrAfter(0).should.be.true();
      d.zeroToHundred.closed.sameOrAfter(-1).should.be.true();
      d.zeroToHundred.closed.sameOrAfter(1).should.be.false();
      should(d.zeroToHundred.closed.sameOrAfter(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .sameOrAfter(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.false();
      boundlessInterval(ELM_INTEGER_TYPE).sameOrAfter(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.sameOrAfter(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        unknownInterval(ELM_INTEGER_TYPE).sameOrAfter(boundlessInterval(ELM_INTEGER_TYPE))
      ).be.null();
    });
  });

  describe('before', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.before(y.closed).should.be.true();
      x.closed.before(y.open).should.be.true();
      x.open.before(y.closed).should.be.true();
      x.open.before(y.open).should.be.true();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.before(y.closed).should.be.true();
      x.closed.before(y.open).should.be.true();
      x.open.before(y.closed).should.be.true();
      x.open.before(y.open).should.be.true();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 100);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(-100, 0);
      ivl.before(uIvl).should.be.true();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(10, 15);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(15, 20);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(20, 30);
      should.not.exist(uIvl.before(ivl));
      ivl.before(uIvl).should.be.false();

      ivl = new Interval(5, 20);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      uIvl.before(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).before(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.before(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
    });
  });

  describe('sameOrBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should compare intervals to points as unit intervals', () => {
      d.zeroToHundred.closed.sameOrBefore(100).should.be.true();
      d.zeroToHundred.closed.sameOrBefore(99).should.be.false();
      d.zeroToHundred.closed.sameOrBefore(101).should.be.true();
      should(d.zeroToHundred.closed.sameOrBefore(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE)
        .sameOrBefore(boundlessInterval(ELM_INTEGER_TYPE))
        .should.be.false();
      boundlessInterval(ELM_INTEGER_TYPE).sameOrBefore(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.sameOrBefore(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
      should(
        unknownInterval(ELM_INTEGER_TYPE).sameOrBefore(boundlessInterval(ELM_INTEGER_TYPE))
      ).be.null();
    });
  });

  describe('meets', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.meets(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.meets(y.closed).should.be.true();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.true();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 3);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(0, 10);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(15, 40);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(22, 40);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(0, 4);
      should.not.exist(ivl.meets(uIvl));
      should.not.exist(uIvl.meets(ivl));

      ivl = new Interval(21, 40);
      should.not.exist(ivl.meets(uIvl));
      should.not.exist(uIvl.meets(ivl));

      uIvl.meets(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).meets(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.meets(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
    });
  });

  describe('meetsAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.meetsAfter(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.true();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 3);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(0, 10);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(15, 40);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(22, 40);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(0, 4);
      ivl.meetsAfter(uIvl).should.be.false();
      should.not.exist(uIvl.meetsAfter(ivl));

      ivl = new Interval(21, 40);
      should.not.exist(ivl.meetsAfter(uIvl));
      uIvl.meetsAfter(ivl).should.be.false();

      uIvl.meetsAfter(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).meetsAfter(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.meetsAfter(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
    });
  });

  describe('meetsBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundred.closed.meetsBefore(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.sameAs));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.before));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.meets));
      x.closed.meetsBefore(y.closed).should.be.true();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.overlaps));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.begins));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.during));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.iIvl.ends));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

      let ivl = new Interval(0, 3);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(0, 10);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(15, 40);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(22, 40);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(0, 4);
      should.not.exist(ivl.meetsBefore(uIvl));
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(21, 40);
      ivl.meetsBefore(uIvl).should.be.false();
      should.not.exist(uIvl.meetsBefore(ivl));

      uIvl.meetsBefore(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_INTEGER_TYPE).meetsBefore(d.zeroToHundred.closed).should.be.false();
      d.zeroToHundred.closed.meetsBefore(boundlessInterval(ELM_INTEGER_TYPE)).should.be.false();
    });
  });
});

describe('LongInterval', () => {
  describe('contains', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate longs less than it', () => {
      d.zeroToHundredLong.closed.contains(-5n).should.be.false();
    });

    it('should properly calculate the left boundary long', () => {
      d.zeroToHundredLong.closed.contains(0n).should.be.true();
      d.zeroToHundredLong.open.contains(0n).should.be.false();
    });

    it('should properly calculate longs in the middle of it', () => {
      d.zeroToHundredLong.closed.contains(50n).should.be.true();
    });

    it('should properly calculate the right boundary long', () => {
      d.zeroToHundredLong.closed.contains(100n).should.be.true();
      d.zeroToHundredLong.open.contains(100n).should.be.false();
    });

    it('should properly calculate longs greater than it', () => {
      d.zeroToHundredLong.closed.contains(105n).should.be.false();
    });

    it('should properly handle null endpoints', () => {
      new Interval(null, 0n).contains(-123456789n).should.be.true();
      new Interval(null, 0n).contains(1n).should.be.false();
      new Interval(null, 0n, false, true).contains(0n).should.be.true();
      should(new Interval(null, 0n, false, true).contains(-123456789n)).be.null();
      new Interval(null, 0n, false, true).contains(1n).should.be.false();
      new Interval(0n, null).contains(123456789n).should.be.true();
      new Interval(0n, null).contains(-1n).should.be.false();
      new Interval(0n, null, true, false).contains(0n).should.be.true();
      should(new Interval(0n, null, true, false).contains(123456789n)).be.null();
      new Interval(0n, null, true, false).contains(-1n).should.be.false();
      boundlessInterval(ELM_LONG_TYPE).contains(5n).should.be.true();
      should(unknownInterval(ELM_LONG_TYPE).contains(5n)).be.null();
    });

    it('should properly handle imprecision', () => {
      d.zeroToHundredLong.closed.contains(new Uncertainty(-20n, -10n)).should.be.false();
      should.not.exist(d.zeroToHundredLong.closed.contains(new Uncertainty(-20n, 20n)));
      d.zeroToHundredLong.closed.contains(new Uncertainty(0n, 100n)).should.be.true();
      should.not.exist(d.zeroToHundredLong.closed.contains(new Uncertainty(80n, 120n)));
      d.zeroToHundredLong.closed.contains(new Uncertainty(120n, 140n)).should.be.false();
      should.not.exist(d.zeroToHundredLong.closed.contains(new Uncertainty(-20n, 120n)));

      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      uIvl.contains(0n).should.be.false();
      should.not.exist(uIvl.contains(5n));
      should.not.exist(uIvl.contains(6n));
      uIvl.contains(10n).should.be.true();
      uIvl.contains(12n).should.be.true();
      uIvl.contains(15n).should.be.true();
      should.not.exist(uIvl.contains(16n));
      should.not.exist(uIvl.contains(20n));
      uIvl.contains(25n).should.be.false();

      uIvl.contains(new Uncertainty(0n, 4n)).should.be.false();
      should.not.exist(uIvl.contains(new Uncertainty(0n, 5n)));
      should.not.exist(uIvl.contains(new Uncertainty(5n, 10n)));
      uIvl.contains(new Uncertainty(10n, 15n)).should.be.true();
      should.not.exist(uIvl.contains(new Uncertainty(15n, 20n)));
      should.not.exist(uIvl.contains(new Uncertainty(20n, 25n)));
      uIvl.contains(new Uncertainty(25n, 30n)).should.be.false();
    });

    it('should throw when the argument is an interval', () => {
      should(() => d.zeroToHundredLong.closed.contains(new Interval(5n, 10n))).throw(Error);
    });
  });

  describe('properContains', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate longs less than it', () => {
      d.zeroToHundredLong.closed.properContains(-5n).should.be.false();
    });

    it('should properly calculate the left boundary long', () => {
      d.zeroToHundredLong.closed.properContains(0n).should.be.true();
      d.zeroToHundredLong.open.properContains(0n).should.be.false();
      d.zeroToHundredLong.closed.properContains(1n).should.be.true();
      d.zeroToHundredLong.open.properContains(1n).should.be.true();
      d.zeroToHundredLong.closed.properContains(2n).should.be.true();
      d.zeroToHundredLong.open.properContains(2n).should.be.true();
    });

    it('should properly calculate longs in the middle of it', () => {
      d.zeroToHundredLong.closed.properContains(50n).should.be.true();
    });

    it('should properly calculate the right boundary long', () => {
      d.zeroToHundredLong.closed.properContains(100n).should.be.true();
      d.zeroToHundredLong.open.properContains(100n).should.be.false();
      d.zeroToHundredLong.closed.properContains(99n).should.be.true();
      d.zeroToHundredLong.open.properContains(99n).should.be.true();
      d.zeroToHundredLong.closed.properContains(98n).should.be.true();
      d.zeroToHundredLong.open.properContains(98n).should.be.true();
    });

    it('should properly calculate longs greater than it', () => {
      d.zeroToHundredLong.closed.properContains(105n).should.be.false();
    });

    it('should properly handle null endpoints', () => {
      new Interval(null, 0n).properContains(-123456789n).should.be.true();
      new Interval(null, 0n).properContains(1n).should.be.false();
      should(new Interval(null, 0n, false, true).properContains(0n)).be.null();
      should(new Interval(null, 0n, false, true).properContains(-123456789n)).be.null();
      new Interval(null, 0n, false, true).properContains(1n).should.be.false();
      new Interval(0n, null).properContains(123456789n).should.be.true();
      new Interval(0n, null).properContains(-1n).should.be.false();
      should(new Interval(0n, null, true, false).properContains(0n)).be.null();
      should(new Interval(0n, null, true, false).properContains(123456789n)).be.null();
      new Interval(0n, null, true, false).properContains(-1n).should.be.false();
      new Interval(null, null, true, true, ELM_LONG_TYPE).properContains(0n).should.be.true();
      should(new Interval(null, null, false, false, ELM_LONG_TYPE).properContains(0n)).be.null();
    });

    it('should properly handle imprecision', () => {
      d.zeroToHundredLong.closed.properContains(new Uncertainty(-20n, -10n)).should.be.false();
      should.not.exist(d.zeroToHundredLong.closed.properContains(new Uncertainty(-20n, 20n)));
      should.not.exist(d.zeroToHundredLong.closed.properContains(new Uncertainty(0n, 101n)));
      d.zeroToHundredLong.closed.properContains(new Uncertainty(0n, 100n)).should.be.true();
      should.not.exist(d.zeroToHundredLong.closed.properContains(new Uncertainty(80n, 120n)));
      d.zeroToHundredLong.closed.properContains(new Uncertainty(120n, 140n)).should.be.false();
      should.not.exist(d.zeroToHundredLong.closed.properContains(new Uncertainty(-20n, 120n)));

      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      uIvl.properContains(0n).should.be.false();
      should.not.exist(uIvl.properContains(5n));
      should.not.exist(uIvl.properContains(6n));
      uIvl.properContains(10n).should.be.true();
      uIvl.properContains(12n).should.be.true();
      uIvl.properContains(15n).should.be.true();
      should.not.exist(uIvl.properContains(16n));
      should.not.exist(uIvl.properContains(20n));
      uIvl.properContains(25n).should.be.false();

      uIvl.properContains(new Uncertainty(0n, 4n)).should.be.false();
      should.not.exist(uIvl.properContains(new Uncertainty(0n, 5n)));
      should.not.exist(uIvl.properContains(new Uncertainty(5n, 10n)));
      uIvl.properContains(new Uncertainty(10n, 15n)).should.be.true();
      uIvl.properContains(new Uncertainty(11n, 14n)).should.be.true();
      should.not.exist(uIvl.properContains(new Uncertainty(15n, 20n)));
      should.not.exist(uIvl.properContains(new Uncertainty(20n, 25n)));
      uIvl.properContains(new Uncertainty(25n, 30n)).should.be.false();
    });

    it('should throw when the argument is an interval', () => {
      should(() => d.zeroToHundredLong.closed.properContains(new Interval(5n, 10n))).throw(Error);
    });
  });

  describe('includes', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.includes(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.includes(y.closed).should.be.true();
      x.closed.includes(y.open).should.be.true();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.true();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.false();
      y.closed.includes(x.open).should.be.false();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.true();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.includes(y.closed).should.be.false();
      x.closed.includes(y.open).should.be.false();
      x.open.includes(y.closed).should.be.false();
      x.open.includes(y.open).should.be.false();
      y.closed.includes(x.closed).should.be.true();
      y.closed.includes(x.open).should.be.true();
      y.open.includes(x.closed).should.be.false();
      y.open.includes(x.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.includes(uIvl).should.be.true();
      uIvl.includes(ivl).should.be.false();

      ivl = new Interval(-100n, 0n);
      ivl.includes(uIvl).should.be.false();
      uIvl.includes(ivl).should.be.false();

      ivl = new Interval(10n, 15n);
      should.not.exist(ivl.includes(uIvl));
      uIvl.includes(ivl).should.be.true();

      ivl = new Interval(5n, 20n);
      ivl.includes(uIvl).should.be.true();
      should.not.exist(uIvl.includes(ivl));

      should.not.exist(uIvl.includes(uIvl));
    });

    it('should include a point Long', () => {
      d.zeroToHundredLong.closed.includes(50n).should.be.true();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).includes(50n).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).includes(d.zeroToHundredLong.closed).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).includes(unknownInterval(ELM_LONG_TYPE)).should.be.true();
      d.zeroToHundredLong.closed.includes(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(unknownInterval(ELM_LONG_TYPE).includes(d.zeroToHundredLong.closed)).be.null();
      should(unknownInterval(ELM_LONG_TYPE).includes(boundlessInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('includedIn', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.includedIn(null)).be.null();
    });

    it('should throw error when argument is a point', () => {
      should(() => d.zeroToHundredLong.closed.includedIn(50n)).throw(Error);
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();

      y.closed.includedIn(x.closed).should.be.true();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.true();
      y.open.includedIn(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.includedIn(y.closed).should.be.false();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.false();
      x.open.includedIn(y.open).should.be.false();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.true();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.includedIn(y.closed).should.be.true();
      x.closed.includedIn(y.open).should.be.false();
      x.open.includedIn(y.closed).should.be.true();
      x.open.includedIn(y.open).should.be.true();
      y.closed.includedIn(x.closed).should.be.false();
      y.closed.includedIn(x.open).should.be.false();
      y.open.includedIn(x.closed).should.be.false();
      y.open.includedIn(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.includedIn(uIvl).should.be.false();
      uIvl.includedIn(ivl).should.be.true();

      ivl = new Interval(-100n, 0n);
      ivl.includedIn(uIvl).should.be.false();
      uIvl.includedIn(ivl).should.be.false();

      ivl = new Interval(10n, 15n);
      ivl.includedIn(uIvl).should.be.true();
      should.not.exist(uIvl.includedIn(ivl));

      ivl = new Interval(5n, 20n);
      should.not.exist(ivl.includedIn(uIvl));
      uIvl.includedIn(ivl).should.be.true();

      should.not.exist(uIvl.includedIn(uIvl));
    });

    it('should properly handle boundless and unknown intervals', () => {
      d.zeroToHundredLong.closed.includedIn(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).includedIn(d.zeroToHundredLong.closed).should.be.false();
      boundlessInterval(ELM_LONG_TYPE)
        .includedIn(boundlessInterval(ELM_LONG_TYPE))
        .should.be.true();
      unknownInterval(ELM_LONG_TYPE).includedIn(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
    });
  });

  describe('properlyIncludes', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when null is passed in', () => {
      should(d.zeroToHundredLong.closed.properlyIncludes(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .properlyIncludes(d.zeroToHundredLong.closed)
        .should.be.true();
      boundlessInterval(ELM_LONG_TYPE)
        .properlyIncludes(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
      should(
        boundlessInterval(ELM_LONG_TYPE).properlyIncludes(unknownInterval(ELM_LONG_TYPE))
      ).be.null();
      should(unknownInterval(ELM_LONG_TYPE).properlyIncludes(d.zeroToHundredLong.closed)).be.null();
    });

    it('should throw when point is passed in', () => {
      should(() => d.zeroToHundredLong.closed.properlyIncludes(50n)).throw(Error);
    });
  });

  describe('starts', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.starts(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).starts(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).starts(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.starts(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(boundlessInterval(ELM_LONG_TYPE).starts(unknownInterval(ELM_INTEGER_TYPE))).be.null();
      should(unknownInterval(ELM_LONG_TYPE).starts(boundlessInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('ends', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.ends(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).ends(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).ends(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.ends(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(boundlessInterval(ELM_LONG_TYPE).ends(unknownInterval(ELM_LONG_TYPE))).be.null();
      should(unknownInterval(ELM_LONG_TYPE).ends(boundlessInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('overlaps(LongInterval)', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.overlaps(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.overlaps(y.closed).should.be.false();
      x.closed.overlaps(y.open).should.be.false();
      x.open.overlaps(y.closed).should.be.false();
      x.open.overlaps(y.open).should.be.false();
      y.closed.overlaps(x.closed).should.be.false();
      y.closed.overlaps(x.open).should.be.false();
      y.open.overlaps(x.closed).should.be.false();
      y.open.overlaps(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.overlaps(y.closed).should.be.false();
      x.closed.overlaps(y.open).should.be.false();
      x.open.overlaps(y.closed).should.be.false();
      x.open.overlaps(y.open).should.be.false();
      y.closed.overlaps(x.closed).should.be.false();
      y.closed.overlaps(x.open).should.be.false();
      y.open.overlaps(x.closed).should.be.false();
      y.open.overlaps(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.overlaps(y.closed).should.be.true();
      x.closed.overlaps(y.open).should.be.true();
      x.open.overlaps(y.closed).should.be.true();
      x.open.overlaps(y.open).should.be.true();
      y.closed.overlaps(x.closed).should.be.true();
      y.closed.overlaps(x.open).should.be.true();
      y.open.overlaps(x.closed).should.be.true();
      y.open.overlaps(x.open).should.be.true();
    });

    it('should properly handle null endpoints', () => {
      const negativeInterval = new Interval(-123456789n, -1n);
      const positiveInterval = new Interval(1n, 123456789n);
      const startsAtZero = new Interval(0n, 123456789n);
      const endsAtZero = new Interval(-123456789n, 0n);

      should(new Interval(null, 0n).overlaps(negativeInterval)).be.true();
      should(new Interval(null, 0n).overlaps(positiveInterval)).be.false();
      should(new Interval(null, 0n, false, true).overlaps(startsAtZero)).be.true();
      should(new Interval(null, 0n, false, true).overlaps(negativeInterval)).be.null();
      should(new Interval(null, 0n, false, true).overlaps(positiveInterval)).be.false();

      should(new Interval(0n, null).overlaps(positiveInterval)).be.true();
      should(new Interval(0n, null).overlaps(negativeInterval)).be.false();
      should(new Interval(0n, null, true, false).overlaps(endsAtZero)).be.true();
      should(new Interval(0n, null, true, false).overlaps(positiveInterval)).be.null();
      should(new Interval(0n, null, true, false).overlaps(negativeInterval)).be.false();

      should(boundlessInterval(ELM_LONG_TYPE).overlaps(d.zeroToHundredLong.closed)).be.true();
      should(unknownInterval(ELM_LONG_TYPE).overlaps(d.zeroToHundredLong.closed)).be.null();
      should(d.zeroToHundredLong.closed.overlaps(boundlessInterval(ELM_LONG_TYPE))).be.true();
      should(d.zeroToHundredLong.closed.overlaps(unknownInterval(ELM_LONG_TYPE))).be.null();
      boundlessInterval(ELM_LONG_TYPE).overlaps(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).overlaps(unknownInterval(ELM_LONG_TYPE)).should.be.true();
      unknownInterval(ELM_LONG_TYPE).overlaps(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.overlaps(uIvl).should.be.true();
      uIvl.overlaps(ivl).should.be.true();

      ivl = new Interval(-100n, 0n);
      ivl.overlaps(uIvl).should.be.false();
      uIvl.overlaps(ivl).should.be.false();

      ivl = new Interval(10n, 15n);
      ivl.overlaps(uIvl).should.be.true();
      uIvl.overlaps(ivl).should.be.true();

      ivl = new Interval(5n, 20n);
      ivl.overlaps(uIvl).should.be.true();
      uIvl.overlaps(ivl).should.be.true();

      uIvl.overlaps(uIvl).should.be.true();
    });
  });

  describe('overlapsBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.overlapsBefore(null)).be.null();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).overlapsBefore(d.zeroToHundredLong.closed).should.be.true();
      d.zeroToHundredLong.closed.overlapsBefore(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_LONG_TYPE).overlapsBefore(unknownInterval(ELM_LONG_TYPE))
      ).be.null();
      unknownInterval(ELM_LONG_TYPE)
        .overlapsBefore(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
    });
  });

  describe('overlapsAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.overlapsAfter(null)).be.null();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).overlapsAfter(d.zeroToHundredLong.closed).should.be.true();
      d.zeroToHundredLong.closed.overlapsAfter(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(
        boundlessInterval(ELM_LONG_TYPE).overlapsAfter(unknownInterval(ELM_LONG_TYPE))
      ).be.null();
      unknownInterval(ELM_LONG_TYPE)
        .overlapsAfter(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
    });
  });

  describe('equals', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.equals(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.equals(y.closed).should.be.true();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.true();
      y.closed.equals(x.closed).should.be.true();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.true();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.equals(y.closed).should.be.false();
      x.closed.equals(y.open).should.be.false();
      x.open.equals(y.closed).should.be.false();
      x.open.equals(y.open).should.be.false();
      y.closed.equals(x.closed).should.be.false();
      y.closed.equals(x.open).should.be.false();
      y.open.equals(x.closed).should.be.false();
      y.open.equals(x.open).should.be.false();
    });

    it('should properly calculate open vs. closed intervals', () => {
      const c2c5 = new Interval(2n, 5n, true, true);
      const o2c5 = new Interval(2n, 5n, false, true);
      const c2o5 = new Interval(2n, 5n, true, false);
      const o2o5 = new Interval(2n, 5n, false, false);
      const c1c6 = new Interval(1n, 6n, true, true);
      const o1c6 = new Interval(1n, 6n, false, true);
      const c1o6 = new Interval(1n, 6n, true, false);
      const o1o6 = new Interval(1n, 6n, false, false);

      c2c5.equals(o2o5).should.be.false();
      c2c5.equals(c1c6).should.be.false();
      c2c5.equals(o1c6).should.be.false();
      c2c5.equals(c1o6).should.be.false();
      c2c5.equals(o1o6).should.be.true();
      o1o6.equals(c1c6).should.be.false();
      o1o6.equals(c2c5).should.be.true();
      o1o6.equals(o2c5).should.be.false();
      o1o6.equals(c2o5).should.be.false();
      o1o6.equals(o2o5).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.equals(uIvl).should.be.false();
      uIvl.equals(ivl).should.be.false();

      ivl = new Interval(-100n, 0n);
      ivl.equals(uIvl).should.be.false();
      uIvl.equals(ivl).should.be.false();

      ivl = new Interval(10n, 15n);
      should(ivl.equals(uIvl)).be.null();
      should(uIvl.equals(ivl)).be.null();

      ivl = new Interval(5n, 20n);
      should(ivl.equals(uIvl)).be.null();
      should(uIvl.equals(ivl)).be.null();

      should(uIvl.equals(uIvl)).be.null();
    });

    it('should be false for equality with points', () => {
      const point = 3n;
      const ivl = new Interval(point, point, true, true);

      ivl.equals(point).should.be.false();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).equals(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).equals(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.equals(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(boundlessInterval(ELM_LONG_TYPE).equals(unknownInterval(ELM_LONG_TYPE))).be.null();
      should(unknownInterval(ELM_LONG_TYPE).equals(boundlessInterval(ELM_LONG_TYPE))).be.null();
      should(unknownInterval(ELM_LONG_TYPE).equals(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('sameAs', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.sameAs(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).sameAs(boundlessInterval(ELM_LONG_TYPE)).should.be.true();
      boundlessInterval(ELM_LONG_TYPE).sameAs(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.sameAs(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(boundlessInterval(ELM_LONG_TYPE).sameAs(unknownInterval(ELM_LONG_TYPE))).be.null();
      should(unknownInterval(ELM_LONG_TYPE).sameAs(boundlessInterval(ELM_LONG_TYPE))).be.null();
      should(unknownInterval(ELM_LONG_TYPE).sameAs(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('union', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.union(null)).be.null();
    });

    it('should properly calculate sameAs unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.union(y.closed).equals(x.closed).should.be.true();
      x.closed.union(y.open).equals(x.closed).should.be.true();
      x.open.union(y.closed).equals(x.closed).should.be.true();
      x.open.union(y.open).equals(x.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.closed).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate before/after unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      should(x.closed.union(y.closed)).be.null();
      should(x.closed.union(y.open)).be.null();
      should(x.open.union(y.closed)).be.null();
      should(x.open.union(y.open)).be.null();
      should(y.closed.union(x.closed)).be.null();
      should(y.closed.union(x.open)).be.null();
      should(y.open.union(x.closed)).be.null();
      should(y.open.union(x.open)).be.null();
    });

    it('should properly calculate meets unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      const z = d.zeroToHundredLong;
      x.closed.union(y.closed).equals(z.closed).should.be.true();
      should(x.closed.union(y.open)).be.null();
      should(x.open.union(y.closed)).be.null();
      should(x.open.union(y.open)).be.null();
      y.closed.union(x.closed).equals(z.closed).should.be.true();
      should(y.closed.union(x.open)).be.null();
      should(y.open.union(x.closed)).be.null();
      should(y.open.union(x.open)).be.null();
    });

    it('should properly calculate left/right overlapping unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      const z = d.zeroToHundredLong;
      x.closed.union(y.closed).equals(z.closed).should.be.true();
      x.closed.union(y.open).equals(z.closedOpen).should.be.true();
      x.open.union(y.closed).equals(z.openClosed).should.be.true();
      x.open.union(y.open).equals(z.open).should.be.true();
      y.closed.union(x.closed).equals(z.closed).should.be.true();
      y.closed.union(x.open).equals(z.openClosed).should.be.true();
      y.open.union(x.closed).equals(z.closedOpen).should.be.true();
      y.open.union(x.open).equals(z.open).should.be.true();
    });

    it('should properly calculate begins/begun by unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.closedOpen).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.closedOpen).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate includes/included by unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.open).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.open).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate ends/ended by unions', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.union(y.closed).equals(y.closed).should.be.true();
      x.closed.union(y.open).equals(y.openClosed).should.be.true();
      x.open.union(y.closed).equals(y.closed).should.be.true();
      x.open.union(y.open).equals(y.open).should.be.true();
      y.closed.union(x.closed).equals(y.closed).should.be.true();
      y.closed.union(x.open).equals(y.closed).should.be.true();
      y.open.union(x.closed).equals(y.openClosed).should.be.true();
      y.open.union(x.open).equals(y.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.union(uIvl).equals(ivl).should.be.true();
      uIvl.union(ivl).equals(ivl).should.be.true();

      ivl = new Interval(-100n, 0n);
      should(ivl.union(uIvl)).be.null();
      should(uIvl.union(ivl)).be.null();

      ivl = new Interval(8n, 17n);
      let i = ivl.union(uIvl);
      i.low.low.should.equal(5n);
      i.low.high.should.equal(8n);
      i.high.low.should.equal(17n);
      i.high.high.should.equal(20n);

      i = uIvl.union(ivl);
      i.low.low.should.equal(5n);
      i.low.high.should.equal(8n);
      i.high.low.should.equal(17n);
      i.high.high.should.equal(20n);

      ivl = new Interval(10n, 15n);
      i = ivl.union(uIvl);
      i.should.equalInterval(uIvl);

      i = uIvl.union(ivl);
      i.should.equalInterval(uIvl);

      ivl = new Interval(15n, 20n);
      i = ivl.union(uIvl);
      i.low.should.eql(uIvl.low);
      i.high.should.eql(ivl.high);
      i = uIvl.union(ivl);
      i.low.should.eql(uIvl.low);
      i.high.should.eql(ivl.high);

      ivl = new Interval(20n, 30n);
      should.not.exist(ivl.union(uIvl));

      ivl = new Interval(5n, 20n);
      ivl.union(uIvl).equals(ivl).should.be.true();
      uIvl.union(ivl).equals(ivl).should.be.true();
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundredLong.union(300n)).throw(Error);
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .union(d.zeroToHundredLong.closed)
        .should.equalInterval(boundlessInterval(ELM_LONG_TYPE));
      d.zeroToHundredLong.closed
        .union(boundlessInterval(ELM_LONG_TYPE))
        .should.equalInterval(boundlessInterval(ELM_LONG_TYPE));
      boundlessInterval(ELM_LONG_TYPE)
        .union(unknownInterval(ELM_LONG_TYPE))
        .should.equalInterval(boundlessInterval(ELM_LONG_TYPE));
      unknownInterval(ELM_LONG_TYPE)
        .union(boundlessInterval(ELM_LONG_TYPE))
        .should.equalInterval(boundlessInterval(ELM_LONG_TYPE));
      should(unknownInterval(ELM_LONG_TYPE).union(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('intersect', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.intersect(null)).be.null();
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundredLong.intersect(300n)).throw(Error);
    });

    it('should properly calculate sameAs intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(y.open).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(y.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(y.open).should.be.true();
      y.open.intersect(x.open).equals(y.open).should.be.true();
    });

    it('should properly calculate before/after intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      should.not.exist(x.closed.intersect(y.closed));
      should.not.exist(x.closed.intersect(y.open));
      should.not.exist(x.open.intersect(y.closed));
      should.not.exist(x.open.intersect(y.open));
      should.not.exist(y.closed.intersect(x.closed));
      should.not.exist(y.closed.intersect(x.open));
      should.not.exist(y.open.intersect(x.closed));
      should.not.exist(y.open.intersect(x.open));
    });

    it('should properly calculate meets intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      should.not.exist(x.closed.intersect(y.closed));
      should.not.exist(x.closed.intersect(y.open));
      should.not.exist(x.open.intersect(y.closed));
      should.not.exist(x.open.intersect(y.open));
      should.not.exist(y.closed.intersect(x.closed));
      should.not.exist(y.closed.intersect(x.open));
      should.not.exist(y.open.intersect(x.closed));
      should.not.exist(y.open.intersect(x.open));
    });

    it('should properly calculate left/right overlapping intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      const a = d.fortyToSixtyLong;
      x.closed.intersect(y.closed).equals(a.closed).should.be.true();
      x.closed.intersect(y.open).equals(a.openClosed).should.be.true();
      x.open.intersect(y.closed).equals(a.closedOpen).should.be.true();
      x.open.intersect(y.open).equals(a.open).should.be.true();
      y.closed.intersect(x.closed).equals(a.closed).should.be.true();
      y.closed.intersect(x.open).equals(a.closedOpen).should.be.true();
      y.open.intersect(x.closed).equals(a.openClosed).should.be.true();
      y.open.intersect(x.open).equals(a.open).should.be.true();
    });

    it('should properly calculate begins/begun by intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.openClosed).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.openClosed).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly calculate includes/included by intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.closed).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.closed).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly calculate ends/ended by intersect', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.intersect(y.closed).equals(x.closed).should.be.true();
      x.closed.intersect(y.open).equals(x.closedOpen).should.be.true();
      x.open.intersect(y.closed).equals(x.open).should.be.true();
      x.open.intersect(y.open).equals(x.open).should.be.true();
      y.closed.intersect(x.closed).equals(x.closed).should.be.true();
      y.closed.intersect(x.open).equals(x.open).should.be.true();
      y.open.intersect(x.closed).equals(x.closedOpen).should.be.true();
      y.open.intersect(x.open).equals(x.open).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const a = 0n;
      const b = new Uncertainty(10n, 20n);
      const c = 50n;
      const d = new Uncertainty(80n, 90n);
      const e = 100n;

      let x = new Interval(b, e);
      let y = new Interval(a, c);
      x.intersect(y).should.equalInterval(new Interval(b, c));
      y.intersect(x).should.equalInterval(new Interval(b, c));

      x = new Interval(a, b);
      y = new Interval(b, d);
      // x.intersect(y) should result in [b,b] but spec says we don't know if they overlap
      should.not.exist(x.intersect(y));
      // y.intersect(x) should result in [b,b] but spec says we don't know if they overlap
      should.not.exist(y.intersect(x));

      x = new Interval(a, e);
      y = new Interval(b, d);
      x.intersect(y).should.equalInterval(y);
      y.intersect(x).should.equalInterval(y);

      x = new Interval(a, d);
      y = new Interval(b, e);
      x.intersect(y).should.equalInterval(new Interval(b, d));
      y.intersect(x).should.equalInterval(new Interval(b, d));

      x = new Interval(a, b);
      y = new Interval(d, e);
      should.not.exist(x.intersect(y));
      should.not.exist(y.intersect(x));

      x = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));
      y = new Interval(8n, 17n);
      x.intersect(y).should.equalInterval(
        new Interval(new Uncertainty(8n, 10n), new Uncertainty(15n, 17n))
      );
      y.intersect(x).should.equalInterval(
        new Interval(new Uncertainty(8n, 10n), new Uncertainty(15n, 17n))
      );
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundredLong.intersect(50n)).throw(Error);
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .intersect(d.zeroToHundredLong.closed)
        .should.equalInterval(d.zeroToHundredLong.closed);
      d.zeroToHundredLong.closed
        .intersect(boundlessInterval(ELM_LONG_TYPE))
        .should.equalInterval(d.zeroToHundredLong.closed);
      boundlessInterval(ELM_LONG_TYPE)
        .intersect(unknownInterval(ELM_LONG_TYPE))
        .should.equalInterval(unknownInterval(ELM_LONG_TYPE));
      unknownInterval(ELM_LONG_TYPE)
        .intersect(boundlessInterval(ELM_LONG_TYPE))
        .should.equalInterval(unknownInterval(ELM_LONG_TYPE));
      should(unknownInterval(ELM_LONG_TYPE).intersect(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('except', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.except(null)).be.null();
    });

    it('should properly calculate sameAs except', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      should.not.exist(x.closed.except(y.closed));
      should.not.exist(x.closed.except(y.open));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      should.not.exist(y.closed.except(x.closed));
      should.not.exist(y.closed.except(x.open));
      should.not.exist(y.open.except(x.closed));
      should.not.exist(y.open.except(x.open));
    });

    it('should properly calculate before/after except', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.except(y.closed).should.equalInterval(x.closed);
      x.closed.except(y.open).should.equalInterval(x.closed);
      x.open.except(y.closed).should.equalInterval(x.open);
      x.open.except(y.open).should.equalInterval(x.open);
      y.closed.except(x.closed).should.equalInterval(y.closed);
      y.closed.except(x.open).should.equalInterval(y.closed);
      y.open.except(x.closed).should.equalInterval(y.open);
      y.open.except(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate meets except', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.except(y.closed).should.equalInterval(x.closed);
      x.closed.except(y.open).should.equalInterval(x.closed);
      x.open.except(y.closed).should.equalInterval(x.open);
      x.open.except(y.open).should.equalInterval(x.open);
      y.closed.except(x.closed).should.equalInterval(y.closed);
      y.closed.except(x.open).should.equalInterval(y.closed);
      y.open.except(x.closed).should.equalInterval(y.open);
      y.open.except(x.open).should.equalInterval(y.open);
    });

    it('should properly calculate left/right overlapping except', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      const a = d.zeroToFortyLong;
      const b = d.sixtyToHundredLong;
      x.closed.except(y.closed).equals(a.closedOpen).should.be.true();
      x.closed.except(y.open).equals(a.closed).should.be.true();
      x.open.except(y.closed).equals(a.open).should.be.true();
      x.open.except(y.open).equals(a.openClosed).should.be.true();
      y.closed.except(x.closed).equals(b.openClosed).should.be.true();
      y.closed.except(x.open).equals(b.closed).should.be.true();
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.closedOpen).should.be.true();
    });

    it('should properly calculate begins/begun by except', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      const b = d.sixtyToHundredLong;
      should.not.exist(x.closed.except(y.closed));
      x.closed.except(y.open).should.equalInterval(new Interval(x.closed.low, x.closed.low));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      y.closed.except(x.closed).equals(b.openClosed).should.be.true();
      should.not.exist(y.closed.except(x.open));
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.closedOpen).should.be.true();
    });

    it('should properly calculate includes/included by except', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      should.not.exist(x.closed.except(y.closed));
      should.not.exist(x.closed.except(y.open));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      should.not.exist(y.closed.except(x.closed));
      should.not.exist(y.closed.except(x.open));
      should.not.exist(y.open.except(x.closed));
      should.not.exist(y.open.except(x.open));
    });

    it('should properly calculate ends/ended by except', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      const b = d.zeroToFortyLong;
      should.not.exist(x.closed.except(y.closed));
      x.closed.except(y.open).should.equalInterval(new Interval(x.closed.high, x.closed.high));
      should.not.exist(x.open.except(y.closed));
      should.not.exist(x.open.except(y.open));
      y.closed.except(x.closed).equals(b.closedOpen).should.be.true();
      should.not.exist(y.closed.except(x.open));
      y.open.except(x.closed).equals(b.open).should.be.true();
      y.open.except(x.open).equals(b.openClosed).should.be.true();
    });

    it('should properly handle imprecision', () => {
      const a = 0n;
      const b = new Uncertainty(10n, 20n);
      const c = 50n;
      const d = new Uncertainty(80n, 90n);
      const e = 100n;

      let x = new Interval(b, e); //([10n,20n] , 100n)
      let y = new Interval(a, c); //(   0n    ,  50n)
      x.except(y).should.equalInterval(new Interval(c, e, false, true));
      y.except(x).should.equalInterval(new Interval(a, b, true, false));

      x = new Interval(a, b);
      y = new Interval(b, d);
      // x.except(y) should result in [a,b) but spec says we don't know if they overlap
      should.not.exist(x.except(y));
      // y.except(x) should result in (b,d] but spec says we don't know if they overlap
      should.not.exist(y.except(x));

      x = new Interval(a, e);
      y = new Interval(b, d);
      should.not.exist(x.except(y));
      should.not.exist(y.except(x));

      x = new Interval(a, d);
      y = new Interval(b, e);
      x.except(y).should.equalInterval(new Interval(a, b, true, false));
      y.except(x).should.equalInterval(new Interval(d, e, false, true));

      x = new Interval(a, b);
      y = new Interval(d, e);
      x.except(y).should.equalInterval(x);
      y.except(x).should.equalInterval(y);
    });

    it('should throw when the argument is a point', () => {
      should(() => d.zeroToHundredLong.except(100n)).throw(Error);
    });
  });

  describe('after', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.true();
      y.closed.after(x.open).should.be.true();
      y.open.after(x.closed).should.be.true();
      y.open.after(x.open).should.be.true();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.true();
      y.closed.after(x.open).should.be.true();
      y.open.after(x.closed).should.be.true();
      y.open.after(x.open).should.be.true();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.after(y.closed).should.be.false();
      x.closed.after(y.open).should.be.false();
      x.open.after(y.closed).should.be.false();
      x.open.after(y.open).should.be.false();
      y.closed.after(x.closed).should.be.false();
      y.closed.after(x.open).should.be.false();
      y.open.after(x.closed).should.be.false();
      y.open.after(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(-100n, 0n);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.true();

      ivl = new Interval(10n, 15n);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(15n, 20n);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(20n, 30n);
      should.not.exist(ivl.after(uIvl));
      uIvl.after(ivl).should.be.false();

      ivl = new Interval(5n, 20n);
      ivl.after(uIvl).should.be.false();
      uIvl.after(ivl).should.be.false();

      uIvl.after(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).after(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      boundlessInterval(ELM_LONG_TYPE).after(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.after(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      unknownInterval(ELM_LONG_TYPE).after(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(unknownInterval(ELM_LONG_TYPE).after(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('sameOrAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should compare intervals to points as unit intervals', () => {
      d.zeroToHundredLong.closed.sameOrAfter(0n).should.be.true();
      d.zeroToHundredLong.closed.sameOrAfter(-1n).should.be.true();
      d.zeroToHundredLong.closed.sameOrAfter(1n).should.be.false();
      should(d.zeroToHundredLong.closed.sameOrAfter(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .sameOrAfter(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
      boundlessInterval(ELM_LONG_TYPE).sameOrAfter(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.sameOrAfter(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(
        unknownInterval(ELM_LONG_TYPE).sameOrAfter(boundlessInterval(ELM_LONG_TYPE))
      ).be.null();
      should(unknownInterval(ELM_LONG_TYPE).sameOrAfter(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('before', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.before(y.closed).should.be.true();
      x.closed.before(y.open).should.be.true();
      x.open.before(y.closed).should.be.true();
      x.open.before(y.open).should.be.true();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.before(y.closed).should.be.true();
      x.closed.before(y.open).should.be.true();
      x.open.before(y.closed).should.be.true();
      x.open.before(y.open).should.be.true();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.before(y.closed).should.be.false();
      x.closed.before(y.open).should.be.false();
      x.open.before(y.closed).should.be.false();
      x.open.before(y.open).should.be.false();
      y.closed.before(x.closed).should.be.false();
      y.closed.before(x.open).should.be.false();
      y.open.before(x.closed).should.be.false();
      y.open.before(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 100n);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(-100n, 0n);
      ivl.before(uIvl).should.be.true();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(10n, 15n);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(15n, 20n);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      ivl = new Interval(20n, 30n);
      should.not.exist(uIvl.before(ivl));
      ivl.before(uIvl).should.be.false();

      ivl = new Interval(5n, 20n);
      ivl.before(uIvl).should.be.false();
      uIvl.before(ivl).should.be.false();

      uIvl.before(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).before(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      boundlessInterval(ELM_LONG_TYPE).before(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.before(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      unknownInterval(ELM_LONG_TYPE).before(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(unknownInterval(ELM_LONG_TYPE).before(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('sameOrBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should compare intervals to points as unit intervals', () => {
      d.zeroToHundredLong.closed.sameOrBefore(100n).should.be.true();
      d.zeroToHundredLong.closed.sameOrBefore(99n).should.be.false();
      d.zeroToHundredLong.closed.sameOrBefore(101n).should.be.true();
      should(d.zeroToHundredLong.closed.sameOrBefore(null)).be.null();
    });

    it('should properly handle boundless and unknown intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .sameOrBefore(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
      boundlessInterval(ELM_LONG_TYPE).sameOrBefore(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.sameOrBefore(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(
        unknownInterval(ELM_LONG_TYPE).sameOrBefore(boundlessInterval(ELM_LONG_TYPE))
      ).be.null();
      should(unknownInterval(ELM_LONG_TYPE).sameOrBefore(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('meets', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.meets(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.meets(y.closed).should.be.true();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.true();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.meets(y.closed).should.be.false();
      x.closed.meets(y.open).should.be.false();
      x.open.meets(y.closed).should.be.false();
      x.open.meets(y.open).should.be.false();
      y.closed.meets(x.closed).should.be.false();
      y.closed.meets(x.open).should.be.false();
      y.open.meets(x.closed).should.be.false();
      y.open.meets(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 3n);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(0n, 10n);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(15n, 40n);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(22n, 40n);
      ivl.meets(uIvl).should.be.false();
      uIvl.meets(ivl).should.be.false();

      ivl = new Interval(0n, 4n);
      should.not.exist(ivl.meets(uIvl));
      should.not.exist(uIvl.meets(ivl));

      ivl = new Interval(21n, 40n);
      should.not.exist(ivl.meets(uIvl));
      should.not.exist(uIvl.meets(ivl));

      uIvl.meets(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE).meets(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      boundlessInterval(ELM_LONG_TYPE).meets(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.meets(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      unknownInterval(ELM_LONG_TYPE).meets(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(unknownInterval(ELM_LONG_TYPE).meets(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('meetsAfter', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.meetsAfter(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.true();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.meetsAfter(y.closed).should.be.false();
      x.closed.meetsAfter(y.open).should.be.false();
      x.open.meetsAfter(y.closed).should.be.false();
      x.open.meetsAfter(y.open).should.be.false();
      y.closed.meetsAfter(x.closed).should.be.false();
      y.closed.meetsAfter(x.open).should.be.false();
      y.open.meetsAfter(x.closed).should.be.false();
      y.open.meetsAfter(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 3n);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(0n, 10n);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(15n, 40n);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(22n, 40n);
      ivl.meetsAfter(uIvl).should.be.false();
      uIvl.meetsAfter(ivl).should.be.false();

      ivl = new Interval(0n, 4n);
      ivl.meetsAfter(uIvl).should.be.false();
      should.not.exist(uIvl.meetsAfter(ivl));

      ivl = new Interval(21n, 40n);
      should.not.exist(ivl.meetsAfter(uIvl));
      uIvl.meetsAfter(ivl).should.be.false();

      uIvl.meetsAfter(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .meetsAfter(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
      boundlessInterval(ELM_LONG_TYPE).meetsAfter(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.meetsAfter(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      unknownInterval(ELM_LONG_TYPE).meetsAfter(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      should(unknownInterval(ELM_LONG_TYPE).meetsAfter(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });

  describe('meetsBefore', () => {
    let d: any;
    beforeEach(() => {
      d = data();
    });

    it('should return null when argument is null', () => {
      should(d.zeroToHundredLong.closed.meetsBefore(null)).be.null();
    });

    it('should properly calculate sameAs intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.sameAs));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate before/after intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.before));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate meets intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.meets));
      x.closed.meetsBefore(y.closed).should.be.true();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate left/right overlapping intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.overlaps));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate begins/begun by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.begins));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate includes/included by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.during));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly calculate ends/ended by intervals', () => {
      const [x, y] = Array.from(xy(d.lIvl.ends));
      x.closed.meetsBefore(y.closed).should.be.false();
      x.closed.meetsBefore(y.open).should.be.false();
      x.open.meetsBefore(y.closed).should.be.false();
      x.open.meetsBefore(y.open).should.be.false();
      y.closed.meetsBefore(x.closed).should.be.false();
      y.closed.meetsBefore(x.open).should.be.false();
      y.open.meetsBefore(x.closed).should.be.false();
      y.open.meetsBefore(x.open).should.be.false();
    });

    it('should properly handle imprecision', () => {
      const uIvl = new Interval(new Uncertainty(5n, 10n), new Uncertainty(15n, 20n));

      let ivl = new Interval(0n, 3n);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(0n, 10n);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(15n, 40n);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(22n, 40n);
      ivl.meetsBefore(uIvl).should.be.false();
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(0n, 4n);
      should.not.exist(ivl.meetsBefore(uIvl));
      uIvl.meetsBefore(ivl).should.be.false();

      ivl = new Interval(21n, 40n);
      ivl.meetsBefore(uIvl).should.be.false();
      should.not.exist(uIvl.meetsBefore(ivl));

      uIvl.meetsBefore(uIvl).should.be.false();
    });

    it('should properly handle boundless intervals', () => {
      boundlessInterval(ELM_LONG_TYPE)
        .meetsBefore(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
      boundlessInterval(ELM_LONG_TYPE).meetsBefore(d.zeroToHundredLong.closed).should.be.false();
      d.zeroToHundredLong.closed.meetsBefore(boundlessInterval(ELM_LONG_TYPE)).should.be.false();
      unknownInterval(ELM_LONG_TYPE)
        .meetsBefore(boundlessInterval(ELM_LONG_TYPE))
        .should.be.false();
      should(unknownInterval(ELM_LONG_TYPE).meetsBefore(unknownInterval(ELM_LONG_TYPE))).be.null();
    });
  });
});

describe('DecimalInterval', () => {
  let d: any;
  beforeEach(() => {
    d = data();
  });

  it('should calculate width and size outside the Integer range', () => {
    const interval = new Interval(0.0, 3000000000.0, true, true, ELM_DECIMAL_TYPE);

    interval.width().should.equal(3000000000.0);
    interval.size().should.equal(3000000000.0);
  });

  it('should close open decimal uncertainty endpoints using decimal point size', () => {
    const closed = new Interval(
      new Uncertainty(1, 2),
      new Uncertainty(3, 4),
      false,
      false,
      ELM_DECIMAL_TYPE
    ).toClosed();

    closed.low.should.eql(new Uncertainty(1.00000001, 2.00000001));
    closed.high.should.eql(new Uncertainty(2.99999999, 3.99999999));
    closed.lowClosed.should.be.true();
    closed.highClosed.should.be.true();
  });

  it('should use decimal point size for meetsBefore decimal uncertainty bounds', () => {
    const earlier = new Interval(1, 1.99999999);
    const later = new Interval(new Uncertainty(2, 2), null, true, false, ELM_DECIMAL_TYPE);

    earlier.meetsBefore(later).should.be.true();
  });

  it('should use decimal point size for meetsAfter decimal uncertainty bounds', () => {
    const earlier = new Interval(null, new Uncertainty(1, 1), false, true, ELM_DECIMAL_TYPE);
    const later = new Interval(1.00000001, 2);

    later.meetsAfter(earlier).should.be.true();
  });

  it('should properly calculate meets intervals', () => {
    const [x, y] = Array.from(xy(d.dIvl.meets));
    x.closed.overlaps(y.closed).should.be.false();
    x.closed.overlaps(y.open).should.be.false();
    x.open.overlaps(y.closed).should.be.false();
    x.open.overlaps(y.open).should.be.false();
    y.closed.overlaps(x.closed).should.be.false();
    y.closed.overlaps(x.open).should.be.false();
    y.open.overlaps(x.closed).should.be.false();
    y.open.overlaps(x.open).should.be.false();
  });

  it('should properly calculate left/right overlapping intervals', () => {
    const [x, y] = Array.from(xy(d.dIvl.overlaps));
    x.closed.overlaps(y.closed).should.be.true();
    x.closed.overlaps(y.open).should.be.true();
    x.open.overlaps(y.closed).should.be.true();
    x.open.overlaps(y.open).should.be.true();
    y.closed.overlaps(x.closed).should.be.true();
    y.closed.overlaps(x.open).should.be.true();
    y.open.overlaps(x.closed).should.be.true();
    y.open.overlaps(x.open).should.be.true();
  });

  it('should properly calculate begins/begun by intervals', () => {
    const [x, y] = Array.from(xy(d.dIvl.begins));
    x.closed.overlaps(y.closed).should.be.true();
    x.closed.overlaps(y.open).should.be.true();
    x.open.overlaps(y.closed).should.be.true();
    x.open.overlaps(y.open).should.be.true();
    y.closed.overlaps(x.closed).should.be.true();
    y.closed.overlaps(x.open).should.be.true();
    y.open.overlaps(x.closed).should.be.true();
    y.open.overlaps(x.open).should.be.true();
  });

  it('should properly calculate includes/included by intervals', () => {
    const [x, y] = Array.from(xy(d.dIvl.during));
    x.closed.overlaps(y.closed).should.be.true();
    x.closed.overlaps(y.open).should.be.true();
    x.open.overlaps(y.closed).should.be.true();
    x.open.overlaps(y.open).should.be.true();
    y.closed.overlaps(x.closed).should.be.true();
    y.closed.overlaps(x.open).should.be.true();
    y.open.overlaps(x.closed).should.be.true();
    y.open.overlaps(x.open).should.be.true();
  });

  it('should properly calculate ends/ended by intervals', () => {
    const [x, y] = Array.from(xy(d.dIvl.ends));
    x.closed.overlaps(y.closed).should.be.true();
    x.closed.overlaps(y.open).should.be.true();
    x.open.overlaps(y.closed).should.be.true();
    x.open.overlaps(y.open).should.be.true();
    y.closed.overlaps(x.closed).should.be.true();
    y.closed.overlaps(x.open).should.be.true();
    y.open.overlaps(x.closed).should.be.true();
    y.open.overlaps(x.open).should.be.true();
  });

  it('should properly handle null endpoints', () => {
    const decimal = 1.5;
    const early = -1.5;
    const late = 3.5;
    const decimalInterval = new Interval(0.5, 1.5);
    const earlyInterval = new Interval(early, -0.5);
    const lateInterval = new Interval(3.5, late);
    const startsAtDecimal = new Interval(decimal, late);
    const endsAtDecimal = new Interval(early, decimal);

    should(new Interval(null, decimal).overlaps(earlyInterval)).be.true();
    should(new Interval(null, decimal).overlaps(lateInterval)).be.false();
    should(new Interval(null, decimal, false, true).overlaps(startsAtDecimal)).be.true();
    should(new Interval(null, decimal, false, true).overlaps(earlyInterval)).be.null();
    should(new Interval(null, decimal, false, true).overlaps(lateInterval)).be.false();

    should(new Interval(decimal, null).overlaps(lateInterval)).be.true();
    should(new Interval(decimal, null).overlaps(earlyInterval)).be.false();
    should(new Interval(decimal, null, true, false).overlaps(endsAtDecimal)).be.true();
    should(new Interval(decimal, null, true, false).overlaps(lateInterval)).be.null();
    should(new Interval(decimal, null, true, false).overlaps(earlyInterval)).be.false();

    should(boundlessInterval(ELM_DECIMAL_TYPE).overlaps(decimalInterval)).be.true();
    should(unknownInterval(ELM_DECIMAL_TYPE).overlaps(decimalInterval)).be.null();
    should(decimalInterval.overlaps(boundlessInterval(ELM_DECIMAL_TYPE))).be.true();
    should(decimalInterval.overlaps(unknownInterval(ELM_DECIMAL_TYPE))).be.null();
    should(
      boundlessInterval(ELM_DECIMAL_TYPE).overlaps(boundlessInterval(ELM_DECIMAL_TYPE))
    ).be.true();
    should(
      boundlessInterval(ELM_DECIMAL_TYPE).overlaps(unknownInterval(ELM_DECIMAL_TYPE))
    ).be.true();
    should(
      unknownInterval(ELM_DECIMAL_TYPE).overlaps(boundlessInterval(ELM_DECIMAL_TYPE))
    ).be.true();
    should(unknownInterval(ELM_DECIMAL_TYPE).overlaps(unknownInterval(ELM_DECIMAL_TYPE))).be.null();
  });

  it('should properly handle imprecision', () => {
    let [x, y] = Array.from(xy(d.dIvl.sameAs));
    x.closed.overlaps(y.toMinute).should.be.true();
    x.toHour.overlaps(y.toMinute).should.be.true();

    [x, y] = Array.from(xy(d.dIvl.before));
    x.toMonth.overlaps(y.toMonth).should.be.false();
    should.not.exist(x.toYear.overlaps(y.closed));

    [x, y] = Array.from(xy(d.dIvl.meets));
    x.toMonth.overlaps(y.toMonth).should.be.false();
    should.not.exist(x.toYear.overlaps(y.closed));

    [x, y] = Array.from(xy(d.dIvl.overlaps));
    x.toMonth.overlaps(y.toMonth).should.be.true();
    should.not.exist(x.toYear.overlaps(y.closed));

    [x, y] = Array.from(xy(d.dIvl.begins));
    x.toMinute.overlaps(y.toMinute).should.be.true();
    should.not.exist(x.toYear.overlaps(y.closed));

    [x, y] = Array.from(xy(d.dIvl.during));
    x.toMonth.overlaps(y.toMonth).should.be.true();
    y.toMonth.overlaps(x.toMonth).should.be.true();
    should.not.exist(x.toYear.overlaps(y.closed));

    [x, y] = Array.from(xy(d.dIvl.ends));
    x.toMinute.overlaps(y.toMinute).should.be.true();
    should.not.exist(x.toYear.overlaps(y.closed));
  });
});

// TODO: Tests for real numbers (i.e., floats)
