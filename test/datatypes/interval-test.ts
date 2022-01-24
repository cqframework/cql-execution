const should = require('should');
const data = require('./interval-data');
const { Interval } = require('../../src/datatypes/interval');
const { DateTime } = require('../../src/datatypes/datetime');
const { Uncertainty } = require('../../src/datatypes/uncertainty');

const xy = obj => [obj.x, obj.y];

describe('Interval', () => {
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

  it('should default lowClosed/highClosed to true', () => {
    const i = new Interval(DateTime.parse('2012-01-01'), DateTime.parse('2013-01-01'));
    i.low.should.eql(DateTime.parse('2012-01-01'));
    i.high.should.eql(DateTime.parse('2013-01-01'));
    i.lowClosed.should.be.true();
    i.highClosed.should.be.true();
  });
});

describe('DateTimeInterval.contains', () => {
  let d;
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

describe('DateTimeInterval.includes', () => {
  let d;
  beforeEach(() => {
    d = data();
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

  it('should include a point date', () => {
    d.all2012.closed.includes(d.mid2012.full).should.be.true();
  });
});

describe('DateTimeInterval.includedIn', () => {
  let d;
  beforeEach(() => {
    d = data();
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

  it('should include a point date', () => {
    d.all2012.closed.includedIn(d.mid2012.full).should.be.true();
  });
});

describe('DateTimeInterval.overlaps(DateTimeInterval)', () => {
  let d;
  beforeEach(() => {
    d = data();
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

describe('DateTimeInterval.overlaps(DateTime)', () => {
  let d;
  beforeEach(() => {
    d = data();
  });

  it('should properly calculate dates before it', () => {
    d.all2012.closed.overlaps(d.bef2012.full).should.be.false();
  });

  it('should properly calculate the left boundary date', () => {
    d.all2012.closed.overlaps(d.beg2012.full).should.be.true();
    d.all2012.open.overlaps(d.beg2012.full).should.be.false();
  });

  it('should properly calculate dates in the middle of it', () => {
    d.all2012.closed.overlaps(d.mid2012.full).should.be.true();
  });

  it('should properly calculate the right boundary date', () => {
    d.all2012.closed.overlaps(d.end2012.full).should.be.true();
    d.all2012.open.overlaps(d.end2012.full).should.be.false();
  });

  it('should properly calculate dates after it', () => {
    d.all2012.closed.overlaps(d.aft2012.full).should.be.false();
  });

  it('should properly handle imprecision', () => {
    d.all2012.closed.overlaps(d.bef2012.toMonth).should.be.false();
    should.not.exist(d.all2012.closed.overlaps(d.beg2012.toMonth));
    d.all2012.closed.overlaps(d.mid2012.toMonth).should.be.true();
    should.not.exist(d.all2012.closed.overlaps(d.end2012.toMonth));
    d.all2012.closed.overlaps(d.aft2012.toMonth).should.be.false();

    d.all2012.toMonth.overlaps(d.bef2012.toMonth).should.be.false();
    d.all2012.toMonth.overlaps(d.beg2012.toMonth).should.be.true();
    d.all2012.toMonth.overlaps(d.mid2012.toMonth).should.be.true();
    d.all2012.toMonth.overlaps(d.end2012.toMonth).should.be.true();
    d.all2012.toMonth.overlaps(d.aft2012.toMonth).should.be.false();

    d.all2012.toMonth.overlaps(d.bef2012.full).should.be.false();
    should.not.exist(d.all2012.toMonth.overlaps(d.beg2012.full));
    d.all2012.toMonth.overlaps(d.mid2012.full).should.be.true();
    should.not.exist(d.all2012.toMonth.overlaps(d.end2012.full));
    d.all2012.toMonth.overlaps(d.aft2012.full).should.be.false();

    should.not.exist(d.all2012.closed.overlaps(d.mid2012.toYear));
  });
});

describe('DateTimeInterval.equals', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

describe('DateTimeInterval.union', () => {
  let d;
  beforeEach(() => {
    d = data();
  });

  it('should properly calculate sameAs unions', () => {
    const [x, y] = Array.from(xy(d.dIvl.sameAs));
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

  it('should throw when the argument is a point', () => {
    should(() => d.all2012.closed.union(d.mid2012.closed)).throw(Error);
  });
});

describe('DateTimeInterval.intersect', () => {
  let d;
  beforeEach(() => {
    d = data();
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

  it('should throw when the argument is a point', () => {
    should(() => d.all2012.intersect(DateTime.parse('2012-07-01T00:00:00.0'))).throw(Error);
  });
});

describe('DateTimeInterval.except', () => {
  let d;
  beforeEach(() => {
    d = data();
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
    x.closed.except(y.closed).should.eql(x.closed);
    x.closed.except(y.open).should.eql(x.closed);
    x.open.except(y.closed).should.eql(x.open);
    x.open.except(y.open).should.eql(x.open);
    y.closed.except(x.closed).should.eql(y.closed);
    y.closed.except(x.open).should.eql(y.closed);
    y.open.except(x.closed).should.eql(y.open);
    y.open.except(x.open).should.eql(y.open);
  });

  it('should properly calculate meets except', () => {
    const [x, y] = Array.from(xy(d.dIvl.meets));
    x.closed.except(y.closed).should.eql(x.closed);
    x.closed.except(y.open).should.eql(x.closed);
    x.open.except(y.closed).should.eql(x.open);
    x.open.except(y.open).should.eql(x.open);
    y.closed.except(x.closed).should.eql(y.closed);
    y.closed.except(x.open).should.eql(y.closed);
    y.open.except(x.closed).should.eql(y.open);
    y.open.except(x.open).should.eql(y.open);
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
    x.closed.except(y.open).should.eql(new Interval(x.closed.low, x.closed.low));
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
    x.closed.except(y.open).should.eql(new Interval(x.closed.high, x.closed.high));
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
    x.toDay.except(y.toDay).should.eql(x.toDay);
    // [b,c].except([a,b]) (where b is uncertain) should result in (b,c] but spec says we don't know if they overlap
    y.toDay.except(x.toDay).should.eql(y.toDay);

    [x, y] = Array.from(xy(d.dIvl.during));
    should.not.exist(x.toDay.except(y.toDay));
    should.not.exist(y.toDay.except(x.toDay));

    [x, y] = Array.from(xy(d.dIvl.ends));
    should.not.exist(x.toDay.except(y.toDay));
    should.not.exist(x.toDay.except(y.toDay));
    // x: ['2012-07-01', '2012-12-31']
    // y: ['2012-01-01', '2012-12-31']
    y.toDay.except(x.toDay).should.eql(new Interval(y.toDay.low, x.toDay.low, true, false));
    should.not.exist(y.toDay.except(x.toMinute));

    [x, y] = Array.from(xy(d.dIvl.begins));
    should.not.exist(x.toDay.except(y.toDay));
    should.not.exist(x.toDay.except(y.toDay));
    // x: ['2012-01-01', '2012-07-01']
    // y: ['2012-01-01', '2012-12-31']
    y.toDay.except(x.toDay).should.eql(new Interval(x.toDay.high, y.toDay.high, false, true));
    should.not.exist(y.toDay.except(x.toMinute));
  });

  it('should throw when the argument is a point', () => {
    should(() => d.all2012.closed.except(DateTime.parse('2012-07-01T00:00:00.0'))).throw(Error);
  });
});

describe('DateTimeInterval.after', () => {
  let d;
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
});

describe('DateTimeInterval.before', () => {
  let d;
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
});

// TODO Add tests that pass in precision parameters
describe('DateTimeInterval.meets', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

// TODO Add tests that pass in precision parameter
describe('DateTimeInterval.meetsAfter', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

// TODO Add tests that pass in precision parameter
describe('DateTimeInterval.meetsBefore', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

describe('IntegerInterval.contains', () => {
  let d;
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

describe('IntegerInterval.includes', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

describe('IntegerInterval.includedIn', () => {
  let d;
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

  it('should include a point integer', () => {
    d.zeroToHundred.closed.includedIn(50).should.be.true();
    d.zeroToHundred.closed.includedIn(500).should.be.false();
  });
});

describe('IntegerInterval.overlaps(IntegerInterval)', () => {
  let d;
  beforeEach(() => {
    d = data();
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

describe('IntegerInterval.overlaps(Integer)', () => {
  let d;
  beforeEach(() => {
    d = data();
  });

  it('should properly calculate integers less than it', () => {
    d.zeroToHundred.closed.overlaps(-5).should.be.false();
  });

  it('should properly calculate the left boundary integer', () => {
    d.zeroToHundred.closed.overlaps(0).should.be.true();
    d.zeroToHundred.open.overlaps(0).should.be.false();
  });

  it('should properly calculate integers in the middle of it', () => {
    d.zeroToHundred.closed.overlaps(50).should.be.true();
  });

  it('should properly calculate the right boundary integer', () => {
    d.zeroToHundred.closed.overlaps(100).should.be.true();
    d.zeroToHundred.open.overlaps(100).should.be.false();
  });

  it('should properly calculate integers greater than it', () => {
    d.zeroToHundred.closed.overlaps(105).should.be.false();
  });

  it('should properly handle imprecision', () => {
    d.zeroToHundred.closed.overlaps(new Uncertainty(-20, -10)).should.be.false();
    should.not.exist(d.zeroToHundred.closed.overlaps(new Uncertainty(-20, 20)));
    d.zeroToHundred.closed.overlaps(new Uncertainty(0, 100)).should.be.true();
    should.not.exist(d.zeroToHundred.closed.overlaps(new Uncertainty(80, 120)));
    d.zeroToHundred.closed.overlaps(new Uncertainty(120, 140)).should.be.false();
    should.not.exist(d.zeroToHundred.closed.overlaps(new Uncertainty(-20, 120)));

    const uIvl = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));

    uIvl.overlaps(0).should.be.false();
    should.not.exist(uIvl.overlaps(5));
    should.not.exist(uIvl.overlaps(6));
    uIvl.overlaps(10).should.be.true();
    uIvl.overlaps(12).should.be.true();
    uIvl.overlaps(15).should.be.true();
    should.not.exist(uIvl.overlaps(16));
    should.not.exist(uIvl.overlaps(20));
    uIvl.overlaps(25).should.be.false();

    uIvl.overlaps(new Uncertainty(0, 4)).should.be.false();
    should.not.exist(uIvl.overlaps(new Uncertainty(0, 5)));
    should.not.exist(uIvl.overlaps(new Uncertainty(5, 10)));
    uIvl.overlaps(new Uncertainty(10, 15)).should.be.true();
    should.not.exist(uIvl.overlaps(new Uncertainty(15, 20)));
    should.not.exist(uIvl.overlaps(new Uncertainty(20, 25)));
    uIvl.overlaps(new Uncertainty(25, 30)).should.be.false();
  });
});

describe('IntegerInterval.equals', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

describe('IntegerInterval.union', () => {
  let d;
  beforeEach(() => {
    d = data();
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
    i.should.eql(uIvl);

    i = uIvl.union(ivl);
    i.should.eql(uIvl);

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
});

describe('IntegerInterval.intersect', () => {
  let d;
  beforeEach(() => {
    d = data();
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
    x.intersect(y).should.eql(new Interval(b, c));
    y.intersect(x).should.eql(new Interval(b, c));

    x = new Interval(a, b);
    y = new Interval(b, d);
    // x.intersect(y) should result in [b,b] but spec says we don't know if they overlap
    should.not.exist(x.intersect(y));
    // y.intersect(x) should result in [b,b] but spec says we don't know if they overlap
    should.not.exist(y.intersect(x));

    x = new Interval(a, e);
    y = new Interval(b, d);
    x.intersect(y).should.eql(y);
    y.intersect(x).should.eql(y);

    x = new Interval(a, d);
    y = new Interval(b, e);
    x.intersect(y).should.eql(new Interval(b, d));
    y.intersect(x).should.eql(new Interval(b, d));

    x = new Interval(a, b);
    y = new Interval(d, e);
    should.not.exist(x.intersect(y));
    should.not.exist(y.intersect(x));

    x = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20));
    y = new Interval(8, 17);
    x.intersect(y).should.eql(new Interval(new Uncertainty(8, 10), new Uncertainty(15, 17)));
    y.intersect(x).should.eql(new Interval(new Uncertainty(8, 10), new Uncertainty(15, 17)));
  });

  it('should throw when the argument is a point', () => {
    should(() => d.zeroToHundred.intersect(50)).throw(Error);
  });
});

describe('IntegerInterval.except', () => {
  let d;
  beforeEach(() => {
    d = data();
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
    x.closed.except(y.closed).should.eql(x.closed);
    x.closed.except(y.open).should.eql(x.closed);
    x.open.except(y.closed).should.eql(x.open);
    x.open.except(y.open).should.eql(x.open);
    y.closed.except(x.closed).should.eql(y.closed);
    y.closed.except(x.open).should.eql(y.closed);
    y.open.except(x.closed).should.eql(y.open);
    y.open.except(x.open).should.eql(y.open);
  });

  it('should properly calculate meets except', () => {
    const [x, y] = Array.from(xy(d.iIvl.meets));
    x.closed.except(y.closed).should.eql(x.closed);
    x.closed.except(y.open).should.eql(x.closed);
    x.open.except(y.closed).should.eql(x.open);
    x.open.except(y.open).should.eql(x.open);
    y.closed.except(x.closed).should.eql(y.closed);
    y.closed.except(x.open).should.eql(y.closed);
    y.open.except(x.closed).should.eql(y.open);
    y.open.except(x.open).should.eql(y.open);
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
    x.closed.except(y.open).should.eql(new Interval(x.closed.low, x.closed.low));
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
    x.closed.except(y.open).should.eql(new Interval(x.closed.high, x.closed.high));
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
    x.except(y).should.eql(new Interval(c, e, false, true));
    y.except(x).should.eql(new Interval(a, b, true, false));

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
    x.except(y).should.eql(new Interval(a, b, true, false));
    y.except(x).should.eql(new Interval(d, e, false, true));

    x = new Interval(a, b);
    y = new Interval(d, e);
    x.except(y).should.eql(x);
    y.except(x).should.eql(y);
  });

  it('should throw when the argument is a point', () => {
    should(() => d.zeroToHundred.except(100)).throw(Error);
  });
});

describe('IntegerInterval.after', () => {
  let d;
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
});

describe('IntegerInterval.before', () => {
  let d;
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
});

describe('IntegerInterval.meets', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

describe('IntegerInterval.meetsAfter', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

describe('IntegerInterval.meetsBefore', () => {
  let d;
  beforeEach(() => {
    d = data();
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
});

// TODO: Tests for real numbers (i.e., floats)
