should = require 'should'
setup = require './interval-setup'
{ Interval } = require '../../lib/datatypes/interval'
{ DateTime } = require '../../lib/datatypes/datetime'
{ Uncertainty } = require '../../lib/datatypes/uncertainty'
cmp = require '../../lib/util/comparison'

xy = (obj) -> [obj.x, obj.y]

describe 'Interval', ->

  it 'should properly set all properties when constructed as DateTime interval', ->
    i = new Interval(DateTime.parse('2012-01-01'), DateTime.parse('2013-01-01'), true, false)
    i.low.should.eql DateTime.parse '2012-01-01'
    i.high.should.eql DateTime.parse '2013-01-01'
    i.lowClosed.should.be.true()
    i.highClosed.should.be.false()

  it 'should properly set all properties when constructed as integer interval', ->
    i = new Interval(12, 36, true, false)
    i.low.should.equal 12
    i.high.should.equal 36
    i.lowClosed.should.be.true()
    i.highClosed.should.be.false()

  it 'should default lowClosed/highClosed to true', ->
    i = new Interval(DateTime.parse('2012-01-01'), DateTime.parse('2013-01-01'))
    i.low.should.eql DateTime.parse '2012-01-01'
    i.high.should.eql DateTime.parse '2013-01-01'
    i.lowClosed.should.be.true()
    i.highClosed.should.be.true()

describe 'DateTimeInterval.contains', ->
  @beforeEach ->
    setup @

  it 'should properly calculate dates before it', ->
    @all2012.closed.contains(@bef2012.full).should.be.false()

  it 'should properly calculate the left boundary date', ->
    @all2012.closed.contains(@beg2012.full).should.be.true()
    @all2012.open.contains(@beg2012.full).should.be.false()

  it 'should properly calculate dates in the middle of it', ->
    @all2012.closed.contains(@mid2012.full).should.be.true()

  it 'should properly calculate the right boundary date', ->
    @all2012.closed.contains(@end2012.full).should.be.true()
    @all2012.open.contains(@end2012.full).should.be.false()

  it 'should properly calculate dates after it', ->
    @all2012.closed.contains(@aft2012.full).should.be.false()

  it 'should properly handle null endpoints', ->
    date = DateTime.parse('2012-01-01T00:00:00.0')
    early = DateTime.parse('0001-01-01T00:00:00.0')
    late = DateTime.parse('2999-01-01T00:00:00.0')
    new Interval(null, date).contains(early).should.be.true()
    new Interval(null, date).contains(late).should.be.false()
    new Interval(null,date,false,true).contains(date).should.be.true()
    should(new Interval(null,date,false,true).contains(early)).be.null()
    new Interval(null,date,false,true).contains(late).should.be.false()
    new Interval(date,null).contains(late).should.be.true()
    new Interval(date,null).contains(early).should.be.false()
    new Interval(date,null,true,false).contains(date).should.be.true()
    should(new Interval(date,null,true,false).contains(late)).be.null()
    new Interval(date,null,true,false).contains(early).should.be.false()

  it 'should properly handle imprecision', ->
    @all2012.closed.contains(@bef2012.toMonth).should.be.false()
    @all2012.closed.contains(@beg2012.toMonth).should.be.true()
    @all2012.closed.contains(@mid2012.toMonth).should.be.true()
    @all2012.closed.contains(@end2012.toMonth).should.be.true()
    @all2012.closed.contains(@aft2012.toMonth).should.be.false()

    @all2012.toMonth.contains(@bef2012.toMonth).should.be.false()
    should.not.exist @all2012.toMonth.contains(@beg2012.toMonth)
    @all2012.toMonth.contains(@mid2012.toMonth).should.be.true()
    should.not.exist @all2012.toMonth.contains(@end2012.toMonth)
    @all2012.toMonth.contains(@aft2012.toMonth).should.be.false()

    @all2012.toMonth.contains(@bef2012.full).should.be.false()
    should.not.exist @all2012.toMonth.contains(@beg2012.full)
    @all2012.toMonth.contains(@mid2012.full).should.be.true()
    should.not.exist @all2012.toMonth.contains(@end2012.full)
    @all2012.toMonth.contains(@aft2012.full).should.be.false()

    @all2012.closed.contains(@mid2012.toYear).should.be.true()

  it 'should return null when checking if interval contains null point', ->
    date = DateTime.parse('2012-01-01T00:00:00.0')
    should(new Interval(date,null,true,false).contains(null)).be.null()

  it 'should throw when the argument is an interval', ->
    should(() => @all2012.closed.contains @all2012.open).throw(Error)

describe 'DateTimeInterval.includes', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.includes(y.closed).should.be.true()
    x.closed.includes(y.open).should.be.true()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.true()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.false()
    y.closed.includes(x.open).should.be.false()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.false()
    y.closed.includes(x.open).should.be.false()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.false()
    y.closed.includes(x.open).should.be.false()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.true()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.true()
    y.open.includes(x.open).should.be.true()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.true()

  it 'should properly handle imprecision', ->

    [x, y] = xy @dIvl.sameAs
    x.closed.includes(y.toMinute).should.be.true()
    should.not.exist x.toHour.includes(y.toMinute)

    [x, y] = xy @dIvl.before
    x.toMonth.includes(y.toMonth).should.be.false()
    should.not.exist x.toYear.includes(y.closed)

    [x, y] = xy @dIvl.meets
    x.toMonth.includes(y.toMonth).should.be.false()
    should.not.exist x.toYear.includes(y.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.includes(y.toMonth).should.be.false()
    should.not.exist x.toYear.includes(y.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.includes(y.toMinute).should.be.false()
    should.not.exist x.toYear.includes(y.closed)

    [x, y] = xy @dIvl.during
    x.toMonth.includes(y.toMonth).should.be.false()
    y.toMonth.includes(x.toMonth).should.be.true()
    should.not.exist x.toYear.includes(y.closed)

    [x, y] = xy @dIvl.ends
    x.toMinute.includes(y.toMinute).should.be.false()
    should.not.exist x.toYear.includes(y.closed)

  it 'should throw when the argument is a point', ->
    should(() => @all2012.closed.includes @mid2012.closed).throw(Error)

describe 'DateTimeInterval.includedIn', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()

    y.closed.includedIn(x.closed).should.be.true()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.true()
    y.open.includedIn(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.includedIn(y.closed).should.be.false()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.false()
    x.open.includedIn(y.open).should.be.false()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.includedIn(y.closed).should.be.false()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.false()
    x.open.includedIn(y.open).should.be.false()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.includedIn(y.closed).should.be.false()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.false()
    x.open.includedIn(y.open).should.be.false()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.true()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    should.not.exist x.closed.includedIn(y.toMinute)
    should.not.exist x.toHour.includedIn(y.toMinute)

    [x, y] = xy @dIvl.before
    x.toMonth.includedIn(y.toMonth).should.be.false()
    should.not.exist x.toYear.includedIn(y.closed)

    [x, y] = xy @dIvl.meets
    x.toMonth.includedIn(y.toMonth).should.be.false()
    should.not.exist x.toYear.includedIn(y.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.includedIn(y.toMonth).should.be.false()
    should.not.exist x.toYear.includedIn(y.closed)

    [x, y] = xy @dIvl.begins
    should.not.exist x.toMinute.includedIn(y.toMinute)
    x.toYear.includedIn(y.closed).should.be.true()

    [x, y] = xy @dIvl.during
    x.toMonth.includedIn(y.toMonth).should.be.true()
    y.toMonth.includedIn(x.toMonth).should.be.false()
    x.toYear.includedIn(y.closed).should.be.true()

    [x, y] = xy @dIvl.ends
    should.not.exist x.toMinute.includedIn(y.toMinute)
    x.toYear.includedIn(y.closed).should.be.true()

  it 'should throw when the argument is a point', ->
    should(() => @all2012.closed.includedIn @mid2012.closed).throw(Error)

describe 'DateTimeInterval.overlaps(DateTimeInterval)', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.overlaps(y.closed).should.be.false()
    x.closed.overlaps(y.open).should.be.false()
    x.open.overlaps(y.closed).should.be.false()
    x.open.overlaps(y.open).should.be.false()
    y.closed.overlaps(x.closed).should.be.false()
    y.closed.overlaps(x.open).should.be.false()
    y.open.overlaps(x.closed).should.be.false()
    y.open.overlaps(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.overlaps(y.closed).should.be.false()
    x.closed.overlaps(y.open).should.be.false()
    x.open.overlaps(y.closed).should.be.false()
    x.open.overlaps(y.open).should.be.false()
    y.closed.overlaps(x.closed).should.be.false()
    y.closed.overlaps(x.open).should.be.false()
    y.open.overlaps(x.closed).should.be.false()
    y.open.overlaps(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.overlaps(y.toMinute).should.be.true()
    x.toHour.overlaps(y.toMinute).should.be.true()

    [x, y] = xy @dIvl.before
    x.toMonth.overlaps(y.toMonth).should.be.false()
    should.not.exist x.toYear.overlaps(y.closed)

    [x, y] = xy @dIvl.meets
    x.toMonth.overlaps(y.toMonth).should.be.false()
    should.not.exist x.toYear.overlaps(y.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.overlaps(y.toMonth).should.be.true()
    should.not.exist x.toYear.overlaps(y.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.overlaps(y.toMinute).should.be.true()
    x.toYear.overlaps(y.closed).should.be.true()

    [x, y] = xy @dIvl.during
    x.toMonth.overlaps(y.toMonth).should.be.true()
    y.toMonth.overlaps(x.toMonth).should.be.true()
    x.toYear.overlaps(y.closed).should.be.true()

    [x, y] = xy @dIvl.ends
    x.toMinute.overlaps(y.toMinute).should.be.true()
    x.toYear.overlaps(y.closed).should.be.true()

describe 'DateTimeInterval.overlaps(DateTime)', ->
  @beforeEach ->
    setup @

  it 'should properly calculate dates before it', ->
    @all2012.closed.overlaps(@bef2012.full).should.be.false()

  it 'should properly calculate the left boundary date', ->
    @all2012.closed.overlaps(@beg2012.full).should.be.true()
    @all2012.open.overlaps(@beg2012.full).should.be.false()

  it 'should properly calculate dates in the middle of it', ->
    @all2012.closed.overlaps(@mid2012.full).should.be.true()

  it 'should properly calculate the right boundary date', ->
    @all2012.closed.overlaps(@end2012.full).should.be.true()
    @all2012.open.overlaps(@end2012.full).should.be.false()

  it 'should properly calculate dates after it', ->
    @all2012.closed.overlaps(@aft2012.full).should.be.false()

  it 'should properly handle imprecision', ->
    @all2012.closed.overlaps(@bef2012.toMonth).should.be.false()
    @all2012.closed.overlaps(@beg2012.toMonth).should.be.true()
    @all2012.closed.overlaps(@mid2012.toMonth).should.be.true()
    @all2012.closed.overlaps(@end2012.toMonth).should.be.true()
    @all2012.closed.overlaps(@aft2012.toMonth).should.be.false()

    @all2012.toMonth.overlaps(@bef2012.toMonth).should.be.false()
    should.not.exist @all2012.toMonth.overlaps(@beg2012.toMonth)
    @all2012.toMonth.overlaps(@mid2012.toMonth).should.be.true()
    should.not.exist @all2012.toMonth.overlaps(@end2012.toMonth)
    @all2012.toMonth.overlaps(@aft2012.toMonth).should.be.false()

    @all2012.toMonth.overlaps(@bef2012.full).should.be.false()
    should.not.exist @all2012.toMonth.overlaps(@beg2012.full)
    @all2012.toMonth.overlaps(@mid2012.full).should.be.true()
    should.not.exist @all2012.toMonth.overlaps(@end2012.full)
    @all2012.toMonth.overlaps(@aft2012.full).should.be.false()

    @all2012.closed.overlaps(@mid2012.toYear).should.be.true()

describe 'DateTimeInterval.equals', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.equals(y.closed).should.be.true()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.true()
    y.closed.equals(x.closed).should.be.true()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate open vs. closed intervals', ->
    lowEdge2012 = DateTime.parse('2012-01-01T00:00:00.0+00')
    lowEdge2012Succ = DateTime.parse('2012-01-01T00:00:00.001+00')
    highEdge2012 = DateTime.parse('2012-12-31T23:59:59.999+00')
    highEdge2012Pred = DateTime.parse('2012-12-31T23:59:59.998+00')
    cc = new Interval(lowEdge2012, highEdge2012, true, true)
    oc = new Interval(lowEdge2012, highEdge2012, false, true)
    co = new Interval(lowEdge2012, highEdge2012, true, false)
    oo = new Interval(lowEdge2012, highEdge2012, false, false)
    cci = new Interval(lowEdge2012Succ, highEdge2012Pred, true, true)
    oci = new Interval(lowEdge2012Succ, highEdge2012Pred, false, true)
    coi = new Interval(lowEdge2012Succ, highEdge2012Pred, true, false)
    ooi = new Interval(lowEdge2012Succ, highEdge2012Pred, false, false)

    oo.equals(oo).should.be.true()
    oo.equals(cc).should.be.false()
    oo.equals(cci).should.be.true()
    oo.equals(oci).should.be.false()
    oo.equals(coi).should.be.false()
    oo.equals(ooi).should.be.false()
    cci.equals(cci).should.be.true()
    cci.equals(oo).should.be.true()
    cci.equals(co).should.be.false()
    cci.equals(oc).should.be.false()
    cci.equals(cc).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    should(x.closed.equals(y.toMinute)).be.null()
    should(x.toHour.equals(y.toMinute)).be.null()

    [x, y] = xy @dIvl.before
    x.toMonth.equals(y.toMonth).should.be.false()
    should(x.toYear.equals(y.closed)).be.null()

    [x, y] = xy @dIvl.meets
    x.toMonth.equals(y.toMonth).should.be.false()
    should(x.toYear.equals(y.closed)).be.null()

    [x, y] = xy @dIvl.overlaps
    x.toMonth.equals(y.toMonth).should.be.false()
    should(x.toYear.equals(y.closed)).be.null()

    [x, y] = xy @dIvl.begins
    x.toMinute.equals(y.toMinute).should.be.false()
    should(x.toYear.equals(y.closed)).be.null()

    [x, y] = xy @dIvl.during
    x.toMonth.equals(y.toMonth).should.be.false()
    y.toMonth.equals(x.toMonth).should.be.false()
    should(x.toYear.equals(y.closed)).be.null()

    [x, y] = xy @dIvl.ends
    x.toMinute.equals(y.toMinute).should.be.false()
    should(x.toYear.equals(y.closed)).be.null()

  it 'should be false for equality with points', ->
    point = DateTime.parse('2012-01-01T00:00:00.0+00')
    ivl = new Interval(point, point, true, true)

    ivl.equals(point).should.be.false()

describe 'DateTimeInterval.union', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs unions', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.union(y.closed).equals(x.closed).should.be.true()
    x.closed.union(y.open).equals(x.closed).should.be.true()
    x.open.union(y.closed).equals(x.closed).should.be.true()
    x.open.union(y.open).equals(x.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.closed).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly calculate before/after unions', ->
    [x, y] = xy @dIvl.before
    should(x.closed.union(y.closed)).be.null()
    should(x.closed.union(y.open)).be.null()
    should(x.open.union(y.closed)).be.null()
    should(x.open.union(y.open)).be.null()
    should(y.closed.union(x.closed)).be.null()
    should(y.closed.union(x.open)).be.null()
    should(y.open.union(x.closed)).be.null()
    should(y.open.union(x.open)).be.null()

  it 'should properly calculate meets unions', ->
    [x, y] = xy @dIvl.meets
    z = @all2012
    x.closed.union(y.closed).equals(z.closed).should.be.true()
    should(x.closed.union(y.open)).be.null()
    should(x.open.union(y.closed)).be.null()
    should(x.open.union(y.open)).be.null()
    y.closed.union(x.closed).equals(z.closed).should.be.true()
    should(y.closed.union(x.open)).be.null()
    should(y.open.union(x.closed)).be.null()
    should(y.open.union(x.open)).be.null()

  it 'should properly calculate left/right overlapping unions', ->
    [x, y] = xy @dIvl.overlaps
    z = @all2012
    x.closed.union(y.closed).equals(z.closed).should.be.true()
    x.closed.union(y.open).equals(z.closedOpen).should.be.true()
    x.open.union(y.closed).equals(z.openClosed).should.be.true()
    x.open.union(y.open).equals(z.open).should.be.true()
    y.closed.union(x.closed).equals(z.closed).should.be.true()
    y.closed.union(x.open).equals(z.openClosed).should.be.true()
    y.open.union(x.closed).equals(z.closedOpen).should.be.true()
    y.open.union(x.open).equals(z.open).should.be.true()

  it 'should properly calculate begins/begun by unions', ->
    [x, y] = xy @dIvl.begins
    x.closed.union(y.closed).equals(y.closed).should.be.true()
    x.closed.union(y.open).equals(y.closedOpen).should.be.true()
    x.open.union(y.closed).equals(y.closed).should.be.true()
    x.open.union(y.open).equals(y.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.closedOpen).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly calculate includes/included by unions', ->
    [x, y] = xy @dIvl.during
    x.closed.union(y.closed).equals(y.closed).should.be.true()
    x.closed.union(y.open).equals(y.open).should.be.true()
    x.open.union(y.closed).equals(y.closed).should.be.true()
    x.open.union(y.open).equals(y.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.open).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly calculate ends/ended by unions', ->
    [x, y] = xy @dIvl.ends
    x.closed.union(y.closed).equals(y.closed).should.be.true()
    x.closed.union(y.open).equals(y.openClosed).should.be.true()
    x.open.union(y.closed).equals(y.closed).should.be.true()
    x.open.union(y.open).equals(y.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.openClosed).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly handle imprecision', ->

    [x, y] = xy @dIvl.sameAs

    # first, check that the DateTime precision methods are correct.
    # TODO: move these into DateTime tests
    x.closed.low.isMorePrecise(x.toMinute.low).should.be.true()
    x.closed.low.isLessPrecise(x.toMinute.low).should.be.false()
    x.closed.low.isSamePrecision(x.toMinute.low).should.be.false()
    x.toMinute.low.isMorePrecise(x.closed.low).should.be.false()
    x.toMinute.low.isLessPrecise(x.closed.low).should.be.true()
    x.toMinute.low.isSamePrecision(x.closed.low).should.be.false()

    # The union of (A U B) should be the same as (B U A)
    # check sameAs
    i = x.toMinute.union(y.closed)
    x.toMinute.low.sameAs(i.low, DateTime.Unit.MINUTE).should.be.true()
    x.toMinute.high.sameAs(i.high, DateTime.Unit.MINUTE).should.be.true()

    j = y.closed.union(x.toMinute)
    y.closed.low.sameAs(j.low, DateTime.Unit.MINUTE).should.be.true()
    y.closed.high.sameAs(j.high, DateTime.Unit.MINUTE).should.be.true()

    i.low.sameAs(j.low, DateTime.Unit.MINUTE).should.be.true()
    i.high.sameAs(j.high, DateTime.Unit.MINUTE).should.be.true()

    # check resulting precision
    i.low.isMorePrecise(j.low).should.be.false()
    i.low.isLessPrecise(j.low).should.be.false()
    i.low.isSamePrecision(j.low).should.be.true()
    i.high.isMorePrecise(j.high).should.be.false()
    i.high.isLessPrecise(j.high).should.be.false()
    i.high.isSamePrecision(j.high).should.be.true()

    [x, y] = xy @dIvl.before
    # TODO: I don't know about these tests... doesn't make sense to me.
    should.not.exist x.toYear.union(y.toYear)
    should.not.exist y.toYear.union(x.toYear)

    [x, y] = xy @dIvl.meets
    should.not.exist x.toMonth.union(y.toMonth)

    [x, y] = xy @dIvl.overlaps
    i = x.toMonth.union(y.toMonth)
    j = y.toMonth.union(x.toMonth)

    x.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true()
    x.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true()

    [x, y] = xy @dIvl.begins
    i = x.toMonth.union(y.toMonth)
    j = y.toMonth.union(x.toMonth)

    x.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true()
    x.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true()

    [x, y] = xy @dIvl.during
    i = x.toMonth.union(y.toMonth)
    j = y.toMonth.union(x.toMonth)

    y.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true()

    [x, y] = xy @dIvl.ends
    i = x.toMonth.union(y.toMonth)
    j = y.toMonth.union(x.toMonth)

    y.toMonth.low.sameAs(i.low, DateTime.Unit.MONTH).should.be.true()
    x.toMonth.high.sameAs(i.high, DateTime.Unit.MONTH).should.be.true()
    y.toMonth.low.sameAs(j.low, DateTime.Unit.MONTH).should.be.true()
    x.toMonth.high.sameAs(j.high, DateTime.Unit.MONTH).should.be.true()

  it 'should throw when the argument is a point', ->
    should(() => @all2012.closed.union @mid2012.closed).throw(Error)

describe 'DateTimeInterval.intersect', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intersect', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(y.open).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(y.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(y.open).should.be.true()
    y.open.intersect(x.open).equals(y.open).should.be.true()

  it 'should properly calculate before/after intersect', ->
    [x, y] = xy @dIvl.before
    should.not.exist x.closed.intersect(y.closed)
    should.not.exist x.closed.intersect(y.open)
    should.not.exist x.open.intersect(y.closed)
    should.not.exist x.open.intersect(y.open)
    should.not.exist y.closed.intersect(x.closed)
    should.not.exist y.closed.intersect(x.open)
    should.not.exist y.open.intersect(x.closed)
    should.not.exist y.open.intersect(x.open)

  it 'should properly calculate meets intersect', ->
    [x, y] = xy @dIvl.meets
    should.not.exist x.closed.intersect(y.closed)
    should.not.exist x.closed.intersect(y.open)
    should.not.exist x.open.intersect(y.closed)
    should.not.exist x.open.intersect(y.open)
    should.not.exist y.closed.intersect(x.closed)
    should.not.exist y.closed.intersect(x.open)
    should.not.exist y.open.intersect(x.closed)
    should.not.exist y.open.intersect(x.open)

  it 'should properly calculate left/right overlapping intersect', ->
    [x, y] = xy @dIvl.overlaps
    a = @julysept
    x.closed.intersect(y.closed).equals(a.closed).should.be.true()
    x.closed.intersect(y.open).equals(a.openClosed).should.be.true()
    x.open.intersect(y.closed).equals(a.closedOpen).should.be.true()
    x.open.intersect(y.open).equals(a.open).should.be.true()
    y.closed.intersect(x.closed).equals(a.closed).should.be.true()
    y.closed.intersect(x.open).equals(a.closedOpen).should.be.true()
    y.open.intersect(x.closed).equals(a.openClosed).should.be.true()
    y.open.intersect(x.open).equals(a.open).should.be.true()

  it 'should properly calculate begins/begun by intersect', ->
    [x, y] = xy @dIvl.begins
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(x.openClosed).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(x.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(x.openClosed).should.be.true()
    y.open.intersect(x.open).equals(x.open).should.be.true()

  it 'should properly calculate includes/included by intersect', ->
    [x, y] = xy @dIvl.during
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(x.closed).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(x.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(x.closed).should.be.true()
    y.open.intersect(x.open).equals(x.open).should.be.true()

  it 'should properly calculate ends/ended by intersect', ->
    [x, y] = xy @dIvl.ends
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(x.closedOpen).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(x.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(x.closedOpen).should.be.true()
    y.open.intersect(x.open).equals(x.open).should.be.true()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.overlaps
    x.toDay.intersect(y.toDay).low.should.eql y.toDay.low
    x.toDay.intersect(y.toDay).high.should.eql x.toDay.high
    y.toDay.intersect(x.toDay).low.should.eql y.toDay.low
    y.toDay.intersect(x.toDay).high.should.eql x.toDay.high

    [x, y] = xy @dIvl.meets
    should.not.exist x.toDay.intersect(y.toDay)
    should.not.exist y.toDay.intersect(x.toDay)

    [x, y] = xy @dIvl.during
    x.toDay.intersect(y.toDay).low.should.eql x.toDay.low
    x.toDay.intersect(y.toDay).high.should.eql x.toDay.high
    y.toDay.intersect(x.toDay).low.should.eql x.toDay.low
    y.toDay.intersect(x.toDay).high.should.eql x.toDay.high

    [x, y] = xy @dIvl.ends
    x.toDay.intersect(y.toDay).low.should.eql x.toDay.low
    x.toDay.intersect(y.toDay).high.should.eql x.toDay.high
    y.toDay.intersect(x.toDay).low.should.eql x.toDay.low
    y.toDay.intersect(x.toDay).high.should.eql x.toDay.high

    [x, y] = xy @dIvl.begins
    x.toDay.intersect(y.toDay).low.should.eql x.toDay.low
    x.toDay.intersect(y.toDay).high.should.eql x.toDay.high
    y.toDay.intersect(x.toDay).low.should.eql x.toDay.low
    y.toDay.intersect(x.toDay).high.should.eql x.toDay.high

  it 'should throw when the argument is a point', ->
    should(() => @all2012.intersect DateTime.parse('2012-07-01T00:00:00.0')).throw(Error)

describe 'DateTimeInterval.except', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs except', ->
    [x, y] = xy @dIvl.sameAs
    should.not.exist x.closed.except(y.closed)
    should.not.exist x.closed.except(y.open)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    should.not.exist y.closed.except(x.closed)
    should.not.exist y.closed.except(x.open)
    should.not.exist y.open.except(x.closed)
    should.not.exist y.open.except(x.open)

  it 'should properly calculate before/after except', ->
    [x, y] = xy @dIvl.before
    x.closed.except(y.closed).should.eql x.closed
    x.closed.except(y.open).should.eql x.closed
    x.open.except(y.closed).should.eql x.open
    x.open.except(y.open).should.eql x.open
    y.closed.except(x.closed).should.eql y.closed
    y.closed.except(x.open).should.eql y.closed
    y.open.except(x.closed).should.eql y.open
    y.open.except(x.open).should.eql y.open

  it 'should properly calculate meets except', ->
    [x, y] = xy @dIvl.meets
    x.closed.except(y.closed).should.eql x.closed
    x.closed.except(y.open).should.eql x.closed
    x.open.except(y.closed).should.eql x.open
    x.open.except(y.open).should.eql x.open
    y.closed.except(x.closed).should.eql y.closed
    y.closed.except(x.open).should.eql y.closed
    y.open.except(x.closed).should.eql y.open
    y.open.except(x.open).should.eql y.open

  it 'should properly calculate left/right overlapping except', ->
    [x, y] = xy @dIvl.overlaps
    a = @janjune
    b = @septdec
    x.closed.except(y.closed).equals(a.closedOpen).should.be.true()
    x.closed.except(y.open).equals(a.closed).should.be.true()
    x.open.except(y.closed).equals(a.open).should.be.true()
    x.open.except(y.open).equals(a.openClosed).should.be.true()
    y.closed.except(x.closed).equals(b.openClosed).should.be.true()
    y.closed.except(x.open).equals(b.closed).should.be.true()
    y.open.except(x.closed).equals(b.open).should.be.true()
    y.open.except(x.open).equals(b.closedOpen).should.be.true()

  it 'should properly calculate begins/begun by except', ->
    [x, y] = xy @dIvl.begins
    b = @julydec
    should.not.exist x.closed.except(y.closed)
    x.closed.except(y.open).should.eql new Interval(x.closed.low, x.closed.low)
    should.not.exist x.open.except(y.open)
    y.closed.except(x.closed).equals(b.openClosed).should.be.true()
    should.not.exist y.closed.except(x.open)
    y.open.except(x.closed).equals(b.open).should.be.true()
    y.open.except(x.open).equals(b.closedOpen).should.be.true()

  it 'should properly calculate includes/included by except', ->
    [x, y] = xy @dIvl.during
    should.not.exist x.closed.except(y.closed)
    should.not.exist x.closed.except(y.open)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    should.not.exist y.closed.except(x.closed)
    should.not.exist y.closed.except(x.open)
    should.not.exist y.open.except(x.closed)
    should.not.exist y.open.except(x.open)

  it 'should properly calculate ends/ended by except', ->
    [x, y] = xy @dIvl.ends
    b = @janjuly
    should.not.exist x.closed.except(y.closed)
    x.closed.except(y.open).should.eql new Interval(x.closed.high, x.closed.high)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    y.closed.except(x.closed).equals(b.closedOpen).should.be.true()
    should.not.exist y.closed.except(x.open)
    y.open.except(x.closed).equals(b.open).should.be.true()
    y.open.except(x.open).equals(b.openClosed).should.be.true()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.overlaps
    x.toDay.except(y.toDay).low.should.eql x.toDay.low
    x.toDay.except(y.toDay).high.should.eql y.toDay.low
    y.toDay.except(x.toDay).low.should.eql x.toDay.high
    y.toDay.except(x.toDay).high.should.eql y.toDay.high

    [x, y] = xy @dIvl.meets
    # [a,b].except([b,c]) (where b is uncertain) should result in [a,b) but spec says we don't know if they overlap
    x.toDay.except(y.toDay).should.eql x.toDay
    # [b,c].except([a,b]) (where b is uncertain) should result in (b,c] but spec says we don't know if they overlap
    y.toDay.except(x.toDay).should.eql y.toDay

    [x, y] = xy @dIvl.during
    should.not.exist x.toDay.except(y.toDay)
    should.not.exist y.toDay.except(x.toDay)

    [x, y] = xy @dIvl.ends
    should.not.exist x.toDay.except(y.toDay)
    should.not.exist x.toDay.except(y.toDay)
    # x: ['2012-07-01', '2012-12-31']
    # y: ['2012-01-01', '2012-12-31']
    # This is a tricky one, but it really is null because of the imprecision on
    # the interval highs.  Interval y might properly include interval x.
    should.not.exist y.toDay.except(x.toDay)

    [x, y] = xy @dIvl.begins
    should.not.exist x.toDay.except(y.toDay)
    should.not.exist x.toDay.except(y.toDay)
    # x: ['2012-01-01', '2012-07-01']
    # y: ['2012-01-01', '2012-12-31']
    # This is a tricky one, but it really is null because of the imprecision on
    # the interval lows.  Interval y might properly include interval x.
    should.not.exist y.toDay.except(x.toDay)

  it 'should throw when the argument is a point', ->
    should(() => @all2012.closed.except DateTime.parse('2012-07-01T00:00:00.0')).throw(Error)

describe 'DateTimeInterval.after', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.true()
    y.closed.after(x.open).should.be.true()
    y.open.after(x.closed).should.be.true()
    y.open.after(x.open).should.be.true()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.true()
    y.closed.after(x.open).should.be.true()
    y.open.after(x.closed).should.be.true()
    y.open.after(x.open).should.be.true()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.after(y.toMinute).should.be.false()
    x.toHour.after(y.toMinute).should.be.false()

    [x, y] = xy @dIvl.before
    x.toMonth.after(y.toMonth).should.be.false()
    x.toYear.after(y.closed).should.be.false()
    should.not.exist y.toYear.after(x.closed)

    [x, y] = xy @dIvl.meets
    x.toMonth.after(y.toMonth).should.be.false()
    x.toYear.after(y.closed).should.be.false()
    should.not.exist y.toYear.after(x.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.after(y.toMonth).should.be.false()
    x.toYear.after(y.closed).should.be.false()
    should.not.exist y.toYear.after(x.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.after(y.toMinute).should.be.false()
    x.toYear.after(y.closed).should.be.false()
    should.not.exist y.toYear.after(x.closed)

    [x, y] = xy @dIvl.during
    x.toMonth.after(y.toMonth).should.be.false()
    y.toMonth.after(x.toMonth).should.be.false()
    x.toYear.after(y.closed).should.be.false()
    should.not.exist y.toYear.after(x.closed)

    [x, y] = xy @dIvl.ends
    x.toMinute.after(y.toMinute).should.be.false()
    x.toYear.after(y.closed).should.be.false()
    x.toYear.after(x.closed).should.be.false()

describe 'DateTimeInterval.before', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.before(y.closed).should.be.true()
    x.closed.before(y.open).should.be.true()
    x.open.before(y.closed).should.be.true()
    x.open.before(y.open).should.be.true()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.before(y.closed).should.be.true()
    x.closed.before(y.open).should.be.true()
    x.open.before(y.closed).should.be.true()
    x.open.before(y.open).should.be.true()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.before(y.toMinute).should.be.false()
    x.toHour.before(y.toMinute).should.be.false()

    [x, y] = xy @dIvl.before
    x.toMonth.before(y.toMonth).should.be.true()
    y.toYear.before(x.closed).should.be.false()
    should.not.exist x.toYear.before(y.closed)

    [x, y] = xy @dIvl.meets
    x.toMonth.before(y.toMonth).should.be.true()
    y.toYear.before(x.closed).should.be.false()
    should.not.exist x.toYear.before(y.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.before(y.toMonth).should.be.false()
    y.toYear.before(x.closed).should.be.false()
    should.not.exist x.toYear.before(y.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.before(y.toMinute).should.be.false()
    y.toYear.before(x.closed).should.be.false()
    x.toYear.before(y.closed).should.be.false()

    [x, y] = xy @dIvl.during
    x.toMonth.before(y.toMonth).should.be.false()
    y.toMonth.before(x.toMonth).should.be.false()
    should.not.exist y.toYear.before(x.closed)
    x.toYear.before(y.closed).should.be.false()

    [x, y] = xy @dIvl.ends
    x.toMinute.before(y.toMinute).should.be.false()
    should.not.exist y.toYear.before(x.closed)
    x.toYear.before(y.closed).should.be.false()

describe 'DateTimeInterval.meets', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.meets(y.closed).should.be.true()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.true()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.meets(y.toMinute).should.be.false()
    x.toHour.meets(y.toMinute).should.be.false()

    [x, y] = xy @dIvl.before
    x.toMonth.meets(y.toMonth).should.be.false()
    should.not.exist x.toYear.meets(y.closed)

    [x, y] = xy @dIvl.meets
    should.not.exist x.toMonth.meets(y.toMonth)
    should.not.exist x.toYear.meets(y.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.meets(y.toMonth).should.be.false()
    should.not.exist x.toYear.meets(y.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.meets(y.toMinute).should.be.false()
    x.toYear.meets(y.closed).should.be.false()

    [x, y] = xy @dIvl.during
    x.toMonth.meets(y.toMonth).should.be.false()
    y.toMonth.meets(x.toMonth).should.be.false()
    x.toYear.meets(y.closed).should.be.false()

    [x, y] = xy @dIvl.ends
    x.toMinute.meets(y.toMinute).should.be.false()
    x.toYear.meets(y.closed).should.be.false()

describe 'DateTimeInterval.meetsAfter', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.true()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.meetsAfter(y.toMinute).should.be.false()
    x.toHour.meetsAfter(y.toMinute).should.be.false()

    [x, y] = xy @dIvl.before
    x.toMonth.meetsAfter(y.toMonth).should.be.false()
    x.toYear.meetsAfter(y.closed).should.be.false()
    should.not.exist y.toYear.meetsAfter(x.closed)

    [x, y] = xy @dIvl.meets
    x.toMonth.meetsAfter(y.toMonth).should.be.false()
    should.not.exist y.toMonth.meetsAfter(x.toMonth)
    x.toYear.meetsAfter(y.closed).should.be.false()
    should.not.exist y.toYear.meetsAfter(x.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.meetsAfter(y.toMonth).should.be.false()
    x.toYear.meetsAfter(y.closed).should.be.false()
    should.not.exist y.toYear.meetsAfter(x.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.meetsAfter(y.toMinute).should.be.false()
    x.toYear.meetsAfter(y.closed).should.be.false()

    [x, y] = xy @dIvl.during
    x.toMonth.meetsAfter(y.toMonth).should.be.false()
    y.toMonth.meetsAfter(x.toMonth).should.be.false()
    x.toYear.meetsAfter(y.closed).should.be.false()

    [x, y] = xy @dIvl.ends
    x.toMinute.meetsAfter(y.toMinute).should.be.false()
    x.toYear.meetsAfter(y.closed).should.be.false()

describe 'DateTimeInterval.meetsBefore', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @dIvl.before
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @dIvl.meets
    x.closed.meetsBefore(y.closed).should.be.true()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @dIvl.overlaps
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @dIvl.begins
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @dIvl.during
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @dIvl.ends
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    [x, y] = xy @dIvl.sameAs
    x.closed.meetsBefore(y.toMinute).should.be.false()
    x.toHour.meetsBefore(y.toMinute).should.be.false()

    [x, y] = xy @dIvl.before
    x.toMonth.meetsBefore(y.toMonth).should.be.false()
    should.not.exist x.toYear.meetsBefore(y.closed)

    [x, y] = xy @dIvl.meets
    should.not.exist x.toMonth.meetsBefore(y.toMonth)
    should.not.exist x.toYear.meetsBefore(y.closed)

    [x, y] = xy @dIvl.overlaps
    x.toMonth.meetsBefore(y.toMonth).should.be.false()
    should.not.exist x.toYear.meetsBefore(y.closed)

    [x, y] = xy @dIvl.begins
    x.toMinute.meetsBefore(y.toMinute).should.be.false()
    x.toYear.meetsBefore(y.closed).should.be.false()

    [x, y] = xy @dIvl.during
    x.toMonth.meetsBefore(y.toMonth).should.be.false()
    y.toMonth.meetsBefore(x.toMonth).should.be.false()
    x.toYear.meetsBefore(y.closed).should.be.false()

    [x, y] = xy @dIvl.ends
    x.toMinute.meetsBefore(y.toMinute).should.be.false()
    x.toYear.meetsBefore(y.closed).should.be.false()

describe 'IntegerInterval.contains', ->
  @beforeEach ->
    setup @

  it 'should properly calculate integers less than it', ->
    @zeroToHundred.closed.contains(-5).should.be.false()

  it 'should properly calculate the left boundary integer', ->
    @zeroToHundred.closed.contains(0).should.be.true()
    @zeroToHundred.open.contains(0).should.be.false()

  it 'should properly calculate integers in the middle of it', ->
    @zeroToHundred.closed.contains(50).should.be.true()

  it 'should properly calculate the right boundary integer', ->
    @zeroToHundred.closed.contains(100).should.be.true()
    @zeroToHundred.open.contains(100).should.be.false()

  it 'should properly calculate integers greater than it', ->
    @zeroToHundred.closed.contains(105).should.be.false()

  it 'should properly handle null endpoints', ->
    new Interval(null, 0).contains(-123456789).should.be.true()
    new Interval(null, 0).contains(1).should.be.false()
    new Interval(null,0,false,true).contains(0).should.be.true()
    should(new Interval(null,0,false,true).contains(-123456789)).be.null()
    new Interval(null,0,false,true).contains(1).should.be.false()
    new Interval(0,null).contains(123456789).should.be.true()
    new Interval(0,null).contains(-1).should.be.false()
    new Interval(0,null,true,false).contains(0).should.be.true()
    should(new Interval(0,null,true,false).contains(123456789)).be.null()
    new Interval(0,null,true,false).contains(-1).should.be.false()

  it 'should properly handle imprecision', ->
    @zeroToHundred.closed.contains(new Uncertainty(-20,-10)).should.be.false()
    should.not.exist @zeroToHundred.closed.contains(new Uncertainty(-20,20))
    @zeroToHundred.closed.contains(new Uncertainty(0,100)).should.be.true()
    should.not.exist @zeroToHundred.closed.contains(new Uncertainty(80,120))
    @zeroToHundred.closed.contains(new Uncertainty(120,140)).should.be.false()
    should.not.exist @zeroToHundred.closed.contains(new Uncertainty(-20,120))

    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    uIvl.contains(0).should.be.false()
    should.not.exist uIvl.contains(5)
    should.not.exist uIvl.contains(6)
    uIvl.contains(10).should.be.true()
    uIvl.contains(12).should.be.true()
    uIvl.contains(15).should.be.true()
    should.not.exist uIvl.contains(16)
    should.not.exist uIvl.contains(20)
    uIvl.contains(25).should.be.false()

    uIvl.contains(new Uncertainty(0,4)).should.be.false()
    should.not.exist uIvl.contains(new Uncertainty(0,5))
    should.not.exist uIvl.contains(new Uncertainty(5,10))
    uIvl.contains(new Uncertainty(10,15)).should.be.true()
    should.not.exist uIvl.contains(new Uncertainty(15,20))
    should.not.exist uIvl.contains(new Uncertainty(20,25))
    uIvl.contains(new Uncertainty(25,30)).should.be.false()

  it 'should throw when the argument is an interval', ->
    should(() => @zeroToHundred.closed.contains new Interval(5, 10)).throw(Error)

describe 'IntegerInterval.includes', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.includes(y.closed).should.be.true()
    x.closed.includes(y.open).should.be.true()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.true()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.false()
    y.closed.includes(x.open).should.be.false()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.false()
    y.closed.includes(x.open).should.be.false()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.false()
    y.closed.includes(x.open).should.be.false()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.true()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.true()
    y.open.includes(x.open).should.be.true()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.includes(y.closed).should.be.false()
    x.closed.includes(y.open).should.be.false()
    x.open.includes(y.closed).should.be.false()
    x.open.includes(y.open).should.be.false()
    y.closed.includes(x.closed).should.be.true()
    y.closed.includes(x.open).should.be.true()
    y.open.includes(x.closed).should.be.false()
    y.open.includes(x.open).should.be.true()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.includes(uIvl).should.be.true()
    uIvl.includes(ivl).should.be.false()

    ivl = new Interval(-100, 0)
    ivl.includes(uIvl).should.be.false()
    uIvl.includes(ivl).should.be.false()

    ivl = new Interval(10, 15)
    should.not.exist ivl.includes(uIvl)
    uIvl.includes(ivl).should.be.true()

    ivl = new Interval(5, 20)
    ivl.includes(uIvl).should.be.true()
    should.not.exist uIvl.includes(ivl)

    should.not.exist uIvl.includes(uIvl)

  it 'should throw when the argument is a point', ->
    should(() => @zeroToHundred.closed.includes 50).throw(Error)

describe 'IntegerInterval.includedIn', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()

    y.closed.includedIn(x.closed).should.be.true()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.true()
    y.open.includedIn(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.includedIn(y.closed).should.be.false()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.false()
    x.open.includedIn(y.open).should.be.false()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.includedIn(y.closed).should.be.false()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.false()
    x.open.includedIn(y.open).should.be.false()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.includedIn(y.closed).should.be.false()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.false()
    x.open.includedIn(y.open).should.be.false()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.true()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.includedIn(y.closed).should.be.true()
    x.closed.includedIn(y.open).should.be.false()
    x.open.includedIn(y.closed).should.be.true()
    x.open.includedIn(y.open).should.be.true()
    y.closed.includedIn(x.closed).should.be.false()
    y.closed.includedIn(x.open).should.be.false()
    y.open.includedIn(x.closed).should.be.false()
    y.open.includedIn(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.includedIn(uIvl).should.be.false()
    uIvl.includedIn(ivl).should.be.true()

    ivl = new Interval(-100, 0)
    ivl.includedIn(uIvl).should.be.false()
    uIvl.includedIn(ivl).should.be.false()

    ivl = new Interval(10, 15)
    ivl.includedIn(uIvl).should.be.true()
    should.not.exist uIvl.includedIn(ivl)

    ivl = new Interval(5, 20)
    should.not.exist ivl.includedIn(uIvl)
    uIvl.includedIn(ivl).should.be.true()

    should.not.exist uIvl.includedIn(uIvl)

  it 'should throw when the argument is a point', ->
    should(() => @zeroToHundred.closed.includedIn 50).throw(Error)

describe 'IntegerInterval.overlaps(IntegerInterval)', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.overlaps(y.closed).should.be.false()
    x.closed.overlaps(y.open).should.be.false()
    x.open.overlaps(y.closed).should.be.false()
    x.open.overlaps(y.open).should.be.false()
    y.closed.overlaps(x.closed).should.be.false()
    y.closed.overlaps(x.open).should.be.false()
    y.open.overlaps(x.closed).should.be.false()
    y.open.overlaps(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.overlaps(y.closed).should.be.false()
    x.closed.overlaps(y.open).should.be.false()
    x.open.overlaps(y.closed).should.be.false()
    x.open.overlaps(y.open).should.be.false()
    y.closed.overlaps(x.closed).should.be.false()
    y.closed.overlaps(x.open).should.be.false()
    y.open.overlaps(x.closed).should.be.false()
    y.open.overlaps(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.overlaps(y.closed).should.be.true()
    x.closed.overlaps(y.open).should.be.true()
    x.open.overlaps(y.closed).should.be.true()
    x.open.overlaps(y.open).should.be.true()
    y.closed.overlaps(x.closed).should.be.true()
    y.closed.overlaps(x.open).should.be.true()
    y.open.overlaps(x.closed).should.be.true()
    y.open.overlaps(x.open).should.be.true()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.overlaps(uIvl).should.be.true()
    uIvl.overlaps(ivl).should.be.true()

    ivl = new Interval(-100, 0)
    ivl.overlaps(uIvl).should.be.false()
    uIvl.overlaps(ivl).should.be.false()

    ivl = new Interval(10, 15)
    ivl.overlaps(uIvl).should.be.true()
    uIvl.overlaps(ivl).should.be.true()

    ivl = new Interval(5, 20)
    ivl.overlaps(uIvl).should.be.true()
    uIvl.overlaps(ivl).should.be.true()

    uIvl.overlaps(uIvl).should.be.true()

describe 'IntegerInterval.overlaps(Integer)', ->
  @beforeEach ->
    setup @

  it 'should properly calculate integers less than it', ->
    @zeroToHundred.closed.overlaps(-5).should.be.false()

  it 'should properly calculate the left boundary integer', ->
    @zeroToHundred.closed.overlaps(0).should.be.true()
    @zeroToHundred.open.overlaps(0).should.be.false()

  it 'should properly calculate integers in the middle of it', ->
    @zeroToHundred.closed.overlaps(50).should.be.true()

  it 'should properly calculate the right boundary integer', ->
    @zeroToHundred.closed.overlaps(100).should.be.true()
    @zeroToHundred.open.overlaps(100).should.be.false()

  it 'should properly calculate integers greater than it', ->
    @zeroToHundred.closed.overlaps(105).should.be.false()

  it 'should properly handle imprecision', ->
    @zeroToHundred.closed.overlaps(new Uncertainty(-20,-10)).should.be.false()
    should.not.exist @zeroToHundred.closed.overlaps(new Uncertainty(-20,20))
    @zeroToHundred.closed.overlaps(new Uncertainty(0,100)).should.be.true()
    should.not.exist @zeroToHundred.closed.overlaps(new Uncertainty(80,120))
    @zeroToHundred.closed.overlaps(new Uncertainty(120,140)).should.be.false()
    should.not.exist @zeroToHundred.closed.overlaps(new Uncertainty(-20,120))

    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    uIvl.overlaps(0).should.be.false()
    should.not.exist uIvl.overlaps(5)
    should.not.exist uIvl.overlaps(6)
    uIvl.overlaps(10).should.be.true()
    uIvl.overlaps(12).should.be.true()
    uIvl.overlaps(15).should.be.true()
    should.not.exist uIvl.overlaps(16)
    should.not.exist uIvl.overlaps(20)
    uIvl.overlaps(25).should.be.false()

    uIvl.overlaps(new Uncertainty(0,4)).should.be.false()
    should.not.exist uIvl.overlaps(new Uncertainty(0,5))
    should.not.exist uIvl.overlaps(new Uncertainty(5,10))
    uIvl.overlaps(new Uncertainty(10,15)).should.be.true()
    should.not.exist uIvl.overlaps(new Uncertainty(15,20))
    should.not.exist uIvl.overlaps(new Uncertainty(20,25))
    uIvl.overlaps(new Uncertainty(25,30)).should.be.false()

describe 'IntegerInterval.equals', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.equals(y.closed).should.be.true()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.true()
    y.closed.equals(x.closed).should.be.true()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.true()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.equals(y.closed).should.be.false()
    x.closed.equals(y.open).should.be.false()
    x.open.equals(y.closed).should.be.false()
    x.open.equals(y.open).should.be.false()
    y.closed.equals(x.closed).should.be.false()
    y.closed.equals(x.open).should.be.false()
    y.open.equals(x.closed).should.be.false()
    y.open.equals(x.open).should.be.false()

  it 'should properly calculate open vs. closed intervals', ->
    c2c5 = new Interval(2, 5, true, true)
    o2c5 = new Interval(2, 5, false, true)
    c2o5 = new Interval(2, 5, true, false)
    o2o5 = new Interval(2, 5, false, false)
    c1c6 = new Interval(1, 6, true, true)
    o1c6 = new Interval(1, 6, false, true)
    c1o6 = new Interval(1, 6, true, false)
    o1o6 = new Interval(1, 6, false, false)

    c2c5.equals(o2o5).should.be.false()
    c2c5.equals(c1c6).should.be.false()
    c2c5.equals(o1c6).should.be.false()
    c2c5.equals(c1o6).should.be.false()
    c2c5.equals(o1o6).should.be.true()
    o1o6.equals(c1c6).should.be.false()
    o1o6.equals(c2c5).should.be.true()
    o1o6.equals(o2c5).should.be.false()
    o1o6.equals(c2o5).should.be.false()
    o1o6.equals(o2o5).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.equals(uIvl).should.be.false()
    uIvl.equals(ivl).should.be.false()

    ivl = new Interval(-100, 0)
    ivl.equals(uIvl).should.be.false()
    uIvl.equals(ivl).should.be.false()

    ivl = new Interval(10, 15)
    should(ivl.equals(uIvl)).be.null()
    should(uIvl.equals(ivl)).be.null()

    ivl = new Interval(5, 20)
    should(ivl.equals(uIvl)).be.null()
    should(uIvl.equals(ivl)).be.null()

    should(uIvl.equals(uIvl)).be.null()

  it 'should be false for equality with points', ->
    point = 3
    ivl = new Interval(point, point, true, true)

    ivl.equals(point).should.be.false()

describe 'IntegerInterval.union', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs unions', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.union(y.closed).equals(x.closed).should.be.true()
    x.closed.union(y.open).equals(x.closed).should.be.true()
    x.open.union(y.closed).equals(x.closed).should.be.true()
    x.open.union(y.open).equals(x.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.closed).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly calculate before/after unions', ->
    [x, y] = xy @iIvl.before
    should(x.closed.union(y.closed)).be.null()
    should(x.closed.union(y.open)).be.null()
    should(x.open.union(y.closed)).be.null()
    should(x.open.union(y.open)).be.null()
    should(y.closed.union(x.closed)).be.null()
    should(y.closed.union(x.open)).be.null()
    should(y.open.union(x.closed)).be.null()
    should(y.open.union(x.open)).be.null()

  it 'should properly calculate meets unions', ->
    [x, y] = xy @iIvl.meets
    z = @zeroToHundred
    x.closed.union(y.closed).equals(z.closed).should.be.true()
    should(x.closed.union(y.open)).be.null()
    should(x.open.union(y.closed)).be.null()
    should(x.open.union(y.open)).be.null()
    y.closed.union(x.closed).equals(z.closed).should.be.true()
    should(y.closed.union(x.open)).be.null()
    should(y.open.union(x.closed)).be.null()
    should(y.open.union(x.open)).be.null()

  it 'should properly calculate left/right overlapping unions', ->
    [x, y] = xy @iIvl.overlaps
    z = @zeroToHundred
    x.closed.union(y.closed).equals(z.closed).should.be.true()
    x.closed.union(y.open).equals(z.closedOpen).should.be.true()
    x.open.union(y.closed).equals(z.openClosed).should.be.true()
    x.open.union(y.open).equals(z.open).should.be.true()
    y.closed.union(x.closed).equals(z.closed).should.be.true()
    y.closed.union(x.open).equals(z.openClosed).should.be.true()
    y.open.union(x.closed).equals(z.closedOpen).should.be.true()
    y.open.union(x.open).equals(z.open).should.be.true()

  it 'should properly calculate begins/begun by unions', ->
    [x, y] = xy @iIvl.begins
    x.closed.union(y.closed).equals(y.closed).should.be.true()
    x.closed.union(y.open).equals(y.closedOpen).should.be.true()
    x.open.union(y.closed).equals(y.closed).should.be.true()
    x.open.union(y.open).equals(y.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.closedOpen).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly calculate includes/included by unions', ->
    [x, y] = xy @iIvl.during
    x.closed.union(y.closed).equals(y.closed).should.be.true()
    x.closed.union(y.open).equals(y.open).should.be.true()
    x.open.union(y.closed).equals(y.closed).should.be.true()
    x.open.union(y.open).equals(y.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.open).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly calculate ends/ended by unions', ->
    [x, y] = xy @iIvl.ends
    x.closed.union(y.closed).equals(y.closed).should.be.true()
    x.closed.union(y.open).equals(y.openClosed).should.be.true()
    x.open.union(y.closed).equals(y.closed).should.be.true()
    x.open.union(y.open).equals(y.open).should.be.true()
    y.closed.union(x.closed).equals(y.closed).should.be.true()
    y.closed.union(x.open).equals(y.closed).should.be.true()
    y.open.union(x.closed).equals(y.openClosed).should.be.true()
    y.open.union(x.open).equals(y.open).should.be.true()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.union(uIvl).equals(ivl).should.be.true()
    uIvl.union(ivl).equals(ivl).should.be.true()

    ivl = new Interval(-100, 0)
    should(ivl.union(uIvl)).be.null()
    should(uIvl.union(ivl)).be.null()

    ivl = new Interval(8, 17)
    i = ivl.union(uIvl)
    i.low.low.should.equal 5
    i.low.high.should.equal 8
    i.high.low.should.equal 17
    i.high.high.should.equal 20

    i = uIvl.union(ivl)
    i.low.low.should.equal 5
    i.low.high.should.equal 8
    i.high.low.should.equal 17
    i.high.high.should.equal 20

    ivl = new Interval(10, 15)
    i = ivl.union(uIvl)
    i.should.eql uIvl

    i = uIvl.union(ivl)
    i.should.eql uIvl

    ivl = new Interval(15, 20)
    i = ivl.union(uIvl)
    i.low.should.eql uIvl.low
    i.high.should.eql ivl.high
    i = uIvl.union(ivl)
    i.low.should.eql uIvl.low
    i.high.should.eql ivl.high

    ivl = new Interval(20, 30)
    should.not.exist ivl.union(uIvl)

    ivl = new Interval(5, 20)
    ivl.union(uIvl).equals(ivl).should.be.true()
    uIvl.union(ivl).equals(ivl).should.be.true()

  it 'should throw when the argument is a point', ->
    should(() => @zeroToHundred.union 300).throw(Error)

describe 'IntegerInterval.intersect', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intersect', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(y.open).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(y.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(y.open).should.be.true()
    y.open.intersect(x.open).equals(y.open).should.be.true()

  it 'should properly calculate before/after intersect', ->
    [x, y] = xy @iIvl.before
    should.not.exist x.closed.intersect(y.closed)
    should.not.exist x.closed.intersect(y.open)
    should.not.exist x.open.intersect(y.closed)
    should.not.exist x.open.intersect(y.open)
    should.not.exist y.closed.intersect(x.closed)
    should.not.exist y.closed.intersect(x.open)
    should.not.exist y.open.intersect(x.closed)
    should.not.exist y.open.intersect(x.open)

  it 'should properly calculate meets intersect', ->
    [x, y] = xy @iIvl.meets
    should.not.exist x.closed.intersect(y.closed)
    should.not.exist x.closed.intersect(y.open)
    should.not.exist x.open.intersect(y.closed)
    should.not.exist x.open.intersect(y.open)
    should.not.exist y.closed.intersect(x.closed)
    should.not.exist y.closed.intersect(x.open)
    should.not.exist y.open.intersect(x.closed)
    should.not.exist y.open.intersect(x.open)

  it 'should properly calculate left/right overlapping intersect', ->
    [x, y] = xy @iIvl.overlaps
    a = @fortyToSixty
    x.closed.intersect(y.closed).equals(a.closed).should.be.true()
    x.closed.intersect(y.open).equals(a.openClosed).should.be.true()
    x.open.intersect(y.closed).equals(a.closedOpen).should.be.true()
    x.open.intersect(y.open).equals(a.open).should.be.true()
    y.closed.intersect(x.closed).equals(a.closed).should.be.true()
    y.closed.intersect(x.open).equals(a.closedOpen).should.be.true()
    y.open.intersect(x.closed).equals(a.openClosed).should.be.true()
    y.open.intersect(x.open).equals(a.open).should.be.true()

  it 'should properly calculate begins/begun by intersect', ->
    [x, y] = xy @iIvl.begins
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(x.openClosed).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(x.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(x.openClosed).should.be.true()
    y.open.intersect(x.open).equals(x.open).should.be.true()

  it 'should properly calculate includes/included by intersect', ->
    [x, y] = xy @iIvl.during
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(x.closed).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(x.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(x.closed).should.be.true()
    y.open.intersect(x.open).equals(x.open).should.be.true()

  it 'should properly calculate ends/ended by intersect', ->
    [x, y] = xy @iIvl.ends
    x.closed.intersect(y.closed).equals(x.closed).should.be.true()
    x.closed.intersect(y.open).equals(x.closedOpen).should.be.true()
    x.open.intersect(y.closed).equals(x.open).should.be.true()
    x.open.intersect(y.open).equals(x.open).should.be.true()
    y.closed.intersect(x.closed).equals(x.closed).should.be.true()
    y.closed.intersect(x.open).equals(x.open).should.be.true()
    y.open.intersect(x.closed).equals(x.closedOpen).should.be.true()
    y.open.intersect(x.open).equals(x.open).should.be.true()

  it 'should properly handle imprecision', ->
    a = 0
    b = new Uncertainty(10,20)
    c = 50
    d = new Uncertainty(80,90)
    e = 100

    x = new Interval(  b,  e)
    y = new Interval(a  ,c  )
    x.intersect(y).should.eql new Interval(b, c)
    y.intersect(x).should.eql new Interval(b, c)

    x = new Interval(a,b   )
    y = new Interval(  b,d )
    # x.intersect(y) should result in [b,b] but spec says we don't know if they overlap
    should.not.exist x.intersect(y)
    # y.intersect(x) should result in [b,b] but spec says we don't know if they overlap
    should.not.exist y.intersect(x)

    x = new Interval(a  ,  e)
    y = new Interval(  b,d  )
    x.intersect(y).should.eql y
    y.intersect(x).should.eql y

    x = new Interval(a,  d )
    y = new Interval(  b, e)
    x.intersect(y).should.eql new Interval(b, d)
    y.intersect(x).should.eql new Interval(b, d)

    x = new Interval(a,b,   )
    y = new Interval(    d,e)
    should.not.exist x.intersect(y)
    should.not.exist y.intersect(x)

    x = new Interval(new Uncertainty(5, 10), new Uncertainty(15, 20))
    y = new Interval(8, 17)
    x.intersect(y).should.eql new Interval(new Uncertainty(8, 10), new Uncertainty(15, 17))
    y.intersect(x).should.eql new Interval(new Uncertainty(8, 10), new Uncertainty(15, 17))

  it 'should throw when the argument is a point', ->
    should(() => @zeroToHundred.intersect 50).throw(Error)

describe 'IntegerInterval.except', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs except', ->
    [x, y] = xy @iIvl.sameAs
    should.not.exist x.closed.except(y.closed)
    should.not.exist x.closed.except(y.open)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    should.not.exist y.closed.except(x.closed)
    should.not.exist y.closed.except(x.open)
    should.not.exist y.open.except(x.closed)
    should.not.exist y.open.except(x.open)

  it 'should properly calculate before/after except', ->
    [x, y] = xy @iIvl.before
    x.closed.except(y.closed).should.eql x.closed
    x.closed.except(y.open).should.eql x.closed
    x.open.except(y.closed).should.eql x.open
    x.open.except(y.open).should.eql x.open
    y.closed.except(x.closed).should.eql y.closed
    y.closed.except(x.open).should.eql y.closed
    y.open.except(x.closed).should.eql y.open
    y.open.except(x.open).should.eql y.open

  it 'should properly calculate meets except', ->
    [x, y] = xy @iIvl.meets
    x.closed.except(y.closed).should.eql x.closed
    x.closed.except(y.open).should.eql x.closed
    x.open.except(y.closed).should.eql x.open
    x.open.except(y.open).should.eql x.open
    y.closed.except(x.closed).should.eql y.closed
    y.closed.except(x.open).should.eql y.closed
    y.open.except(x.closed).should.eql y.open
    y.open.except(x.open).should.eql y.open

  it 'should properly calculate left/right overlapping except', ->
    [x, y] = xy @iIvl.overlaps
    a = @zeroToForty
    b = @sixtyToHundred
    x.closed.except(y.closed).equals(a.closedOpen).should.be.true()
    x.closed.except(y.open).equals(a.closed).should.be.true()
    x.open.except(y.closed).equals(a.open).should.be.true()
    x.open.except(y.open).equals(a.openClosed).should.be.true()
    y.closed.except(x.closed).equals(b.openClosed).should.be.true()
    y.closed.except(x.open).equals(b.closed).should.be.true()
    y.open.except(x.closed).equals(b.open).should.be.true()
    y.open.except(x.open).equals(b.closedOpen).should.be.true()

  it 'should properly calculate begins/begun by except', ->
    [x, y] = xy @iIvl.begins
    b = @sixtyToHundred
    should.not.exist x.closed.except(y.closed)
    x.closed.except(y.open).should.eql new Interval(x.closed.low, x.closed.low)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    y.closed.except(x.closed).equals(b.openClosed).should.be.true()
    should.not.exist y.closed.except(x.open)
    y.open.except(x.closed).equals(b.open).should.be.true()
    y.open.except(x.open).equals(b.closedOpen).should.be.true()

  it 'should properly calculate includes/included by except', ->
    [x, y] = xy @iIvl.during
    should.not.exist x.closed.except(y.closed)
    should.not.exist x.closed.except(y.open)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    should.not.exist y.closed.except(x.closed)
    should.not.exist y.closed.except(x.open)
    should.not.exist y.open.except(x.closed)
    should.not.exist y.open.except(x.open)

  it 'should properly calculate ends/ended by except', ->
    [x, y] = xy @iIvl.ends
    b = @zeroToForty
    should.not.exist x.closed.except(y.closed)
    x.closed.except(y.open).should.eql new Interval(x.closed.high, x.closed.high)
    should.not.exist x.open.except(y.closed)
    should.not.exist x.open.except(y.open)
    y.closed.except(x.closed).equals(b.closedOpen).should.be.true()
    should.not.exist y.closed.except(x.open)
    y.open.except(x.closed).equals(b.open).should.be.true()
    y.open.except(x.open).equals(b.openClosed).should.be.true()

  it 'should properly handle imprecision', ->
    a = 0
    b = new Uncertainty(10,20)
    c = 50
    d = new Uncertainty(80,90)
    e = 100

    x = new Interval(  b,  e) #([10,20] , 100)
    y = new Interval(a  ,c  ) #(   0    ,  50)
    x.except(y).should.eql new Interval(c, e, false, true)
    y.except(x).should.eql new Interval(a, b, true, false)

    x = new Interval(a,b   )
    y = new Interval(  b,d )
    # x.except(y) should result in [a,b) but spec says we don't know if they overlap
    should.not.exist x.except(y)
    # y.except(x) should result in (b,d] but spec says we don't know if they overlap
    should.not.exist y.except(x)

    x = new Interval(a  ,  e)
    y = new Interval(  b,d  )
    should.not.exist x.except(y)
    should.not.exist y.except(x)

    x = new Interval(a,  d )
    y = new Interval(  b, e)
    x.except(y).should.eql new Interval(a, b, true, false)
    y.except(x).should.eql new Interval(d, e, false, true)

    x = new Interval(a,b,   )
    y = new Interval(    d,e)
    x.except(y).should.eql x
    y.except(x).should.eql y

  it 'should throw when the argument is a point', ->
    should(() => @zeroToHundred.except 100).throw(Error)

describe 'IntegerInterval.after', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.true()
    y.closed.after(x.open).should.be.true()
    y.open.after(x.closed).should.be.true()
    y.open.after(x.open).should.be.true()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.true()
    y.closed.after(x.open).should.be.true()
    y.open.after(x.closed).should.be.true()
    y.open.after(x.open).should.be.true()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.after(y.closed).should.be.false()
    x.closed.after(y.open).should.be.false()
    x.open.after(y.closed).should.be.false()
    x.open.after(y.open).should.be.false()
    y.closed.after(x.closed).should.be.false()
    y.closed.after(x.open).should.be.false()
    y.open.after(x.closed).should.be.false()
    y.open.after(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.after(uIvl).should.be.false()
    uIvl.after(ivl).should.be.false()

    ivl = new Interval(-100, 0)
    ivl.after(uIvl).should.be.false()
    uIvl.after(ivl).should.be.true()

    ivl = new Interval(10, 15)
    ivl.after(uIvl).should.be.false()
    uIvl.after(ivl).should.be.false()

    ivl = new Interval(15, 20)
    ivl.after(uIvl).should.be.false()
    uIvl.after(ivl).should.be.false()

    ivl = new Interval(20, 30)
    should.not.exist ivl.after(uIvl)
    uIvl.after(ivl).should.be.false()

    ivl = new Interval(5, 20)
    ivl.after(uIvl).should.be.false()
    uIvl.after(ivl).should.be.false()

    uIvl.after(uIvl).should.be.false()

describe 'IntegerInterval.before', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.before(y.closed).should.be.true()
    x.closed.before(y.open).should.be.true()
    x.open.before(y.closed).should.be.true()
    x.open.before(y.open).should.be.true()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.before(y.closed).should.be.true()
    x.closed.before(y.open).should.be.true()
    x.open.before(y.closed).should.be.true()
    x.open.before(y.open).should.be.true()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.before(y.closed).should.be.false()
    x.closed.before(y.open).should.be.false()
    x.open.before(y.closed).should.be.false()
    x.open.before(y.open).should.be.false()
    y.closed.before(x.closed).should.be.false()
    y.closed.before(x.open).should.be.false()
    y.open.before(x.closed).should.be.false()
    y.open.before(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 100)
    ivl.before(uIvl).should.be.false()
    uIvl.before(ivl).should.be.false()

    ivl = new Interval(-100, 0)
    ivl.before(uIvl).should.be.true()
    uIvl.before(ivl).should.be.false()

    ivl = new Interval(10, 15)
    ivl.before(uIvl).should.be.false()
    uIvl.before(ivl).should.be.false()

    ivl = new Interval(15, 20)
    ivl.before(uIvl).should.be.false()
    uIvl.before(ivl).should.be.false()

    ivl = new Interval(20, 30)
    should.not.exist uIvl.before(ivl)
    ivl.before(uIvl).should.be.false()

    ivl = new Interval(5, 20)
    ivl.before(uIvl).should.be.false()
    uIvl.before(ivl).should.be.false()

    uIvl.before(uIvl).should.be.false()

describe 'IntegerInterval.meets', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.meets(y.closed).should.be.true()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.true()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.meets(y.closed).should.be.false()
    x.closed.meets(y.open).should.be.false()
    x.open.meets(y.closed).should.be.false()
    x.open.meets(y.open).should.be.false()
    y.closed.meets(x.closed).should.be.false()
    y.closed.meets(x.open).should.be.false()
    y.open.meets(x.closed).should.be.false()
    y.open.meets(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 3)
    ivl.meets(uIvl).should.be.false()
    uIvl.meets(ivl).should.be.false()

    ivl = new Interval(0, 10)
    ivl.meets(uIvl).should.be.false()
    uIvl.meets(ivl).should.be.false()

    ivl = new Interval(15, 40)
    ivl.meets(uIvl).should.be.false()
    uIvl.meets(ivl).should.be.false()

    ivl = new Interval(22, 40)
    ivl.meets(uIvl).should.be.false()
    uIvl.meets(ivl).should.be.false()

    ivl = new Interval(0, 4)
    should.not.exist ivl.meets(uIvl)
    should.not.exist uIvl.meets(ivl)

    ivl = new Interval(21, 40)
    should.not.exist ivl.meets(uIvl)
    should.not.exist uIvl.meets(ivl)

    uIvl.meets(uIvl).should.be.false()


describe 'IntegerInterval.meetsAfter', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.true()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.meetsAfter(y.closed).should.be.false()
    x.closed.meetsAfter(y.open).should.be.false()
    x.open.meetsAfter(y.closed).should.be.false()
    x.open.meetsAfter(y.open).should.be.false()
    y.closed.meetsAfter(x.closed).should.be.false()
    y.closed.meetsAfter(x.open).should.be.false()
    y.open.meetsAfter(x.closed).should.be.false()
    y.open.meetsAfter(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 3)
    ivl.meetsAfter(uIvl).should.be.false()
    uIvl.meetsAfter(ivl).should.be.false()

    ivl = new Interval(0, 10)
    ivl.meetsAfter(uIvl).should.be.false()
    uIvl.meetsAfter(ivl).should.be.false()

    ivl = new Interval(15, 40)
    ivl.meetsAfter(uIvl).should.be.false()
    uIvl.meetsAfter(ivl).should.be.false()

    ivl = new Interval(22, 40)
    ivl.meetsAfter(uIvl).should.be.false()
    uIvl.meetsAfter(ivl).should.be.false()

    ivl = new Interval(0, 4)
    ivl.meetsAfter(uIvl).should.be.false()
    should.not.exist uIvl.meetsAfter(ivl)

    ivl = new Interval(21, 40)
    should.not.exist ivl.meetsAfter(uIvl)
    uIvl.meetsAfter(ivl).should.be.false()

    uIvl.meetsAfter(uIvl).should.be.false()

describe 'IntegerInterval.meetsBefore', ->
  @beforeEach ->
    setup @

  it 'should properly calculate sameAs intervals', ->
    [x, y] = xy @iIvl.sameAs
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate before/after intervals', ->
    [x, y] = xy @iIvl.before
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate meets intervals', ->
    [x, y] = xy @iIvl.meets
    x.closed.meetsBefore(y.closed).should.be.true()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate left/right overlapping intervals', ->
    [x, y] = xy @iIvl.overlaps
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate begins/begun by intervals', ->
    [x, y] = xy @iIvl.begins
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate includes/included by intervals', ->
    [x, y] = xy @iIvl.during
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly calculate ends/ended by intervals', ->
    [x, y] = xy @iIvl.ends
    x.closed.meetsBefore(y.closed).should.be.false()
    x.closed.meetsBefore(y.open).should.be.false()
    x.open.meetsBefore(y.closed).should.be.false()
    x.open.meetsBefore(y.open).should.be.false()
    y.closed.meetsBefore(x.closed).should.be.false()
    y.closed.meetsBefore(x.open).should.be.false()
    y.open.meetsBefore(x.closed).should.be.false()
    y.open.meetsBefore(x.open).should.be.false()

  it 'should properly handle imprecision', ->
    uIvl = new Interval(new Uncertainty(5,10), new Uncertainty(15, 20))

    ivl = new Interval(0, 3)
    ivl.meetsBefore(uIvl).should.be.false()
    uIvl.meetsBefore(ivl).should.be.false()

    ivl = new Interval(0, 10)
    ivl.meetsBefore(uIvl).should.be.false()
    uIvl.meetsBefore(ivl).should.be.false()

    ivl = new Interval(15, 40)
    ivl.meetsBefore(uIvl).should.be.false()
    uIvl.meetsBefore(ivl).should.be.false()

    ivl = new Interval(22, 40)
    ivl.meetsBefore(uIvl).should.be.false()
    uIvl.meetsBefore(ivl).should.be.false()

    ivl = new Interval(0, 4)
    should.not.exist ivl.meetsBefore(uIvl)
    uIvl.meetsBefore(ivl).should.be.false()

    ivl = new Interval(21, 40)
    ivl.meetsBefore(uIvl).should.be.false()
    should.not.exist uIvl.meetsBefore(ivl)

    uIvl.meetsBefore(uIvl).should.be.false()

# TODO: Tests for real numbers (i.e., floats)
