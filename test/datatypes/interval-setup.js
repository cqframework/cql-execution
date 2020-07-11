// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const { Interval } = require('../../lib/datatypes/interval');
const { DateTime } = require('../../lib/datatypes/datetime');

class TestDateTime {
  static parse(string) {
    return TestDateTime.fromDateTime(DateTime.parse(string));
  }

  static fromDateTime(d) {
    return new TestDateTime(d.year, d.month, d.day, d.hour, d.minute, d.second, d.millisecond);
  }

  constructor(year, month = 0, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0) {
    this.full = new DateTime(year, month, day, hour, minute, second, millisecond);
    this.toYear = new DateTime(year);
    this.toMonth = new DateTime(year, month);
    this.toDay = new DateTime(year, month, day);
    this.toHour = new DateTime(year, month, day, hour);
    this.toMinute = new DateTime(year, month, day, hour, minute);
    this.toSecond = new DateTime(year, month, day, hour, minute, second);
    this.toMillisecond = new DateTime(year, month, day, hour, minute, second, millisecond);
  }
}


class TestInterval {
  constructor(low, high) {
    const [thLow, thHigh] = Array.from([TestDateTime.fromDateTime(low), TestDateTime.fromDateTime(high)]);
    this.closed = new Interval(low, high, true, true);
    this.open = new Interval(low, high, false, false);
    this.closedOpen = new Interval(low, high, true, false);
    this.openClosed = new Interval(low, high, false, true);
    this.toYear = new Interval(thLow.toYear, thHigh.toYear);
    this.toMonth = new Interval(thLow.toMonth, thHigh.toMonth);
    this.toDay = new Interval(thLow.toDay, thHigh.toDay);
    this.toHour = new Interval(thLow.toHour, thHigh.toHour);
    this.toMinute = new Interval(thLow.toMinute, thHigh.toMinute);
    this.toSecond = new Interval(thLow.toSecond, thHigh.toSecond);
    this.toMillisecond = new Interval(thLow.toMillisecond, thHigh.toMillisecond);
  }
}

module.exports = function(test) {
  test['all2012'] = new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'));
  test['janjune'] = new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-06-01T00:00:00.0'));
  test['septdec'] = new TestInterval(DateTime.parse('2012-09-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'));
  test['julysept'] = new TestInterval(DateTime.parse('2012-06-01T00:00:00.0'), DateTime.parse('2012-09-01T00:00:00.0'));
  test['julydec'] = new TestInterval(DateTime.parse('2012-07-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'));
  test['janjuly'] = new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-07-01T00:00:00.0'));
  test['bef2012'] = TestDateTime.parse('2011-06-01T00:00:00.0');
  test['beg2012'] = TestDateTime.parse('2012-01-01T00:00:00.0');
  test['mid2012'] = TestDateTime.parse('2012-06-01T00:00:00.0');
  test['end2012'] = TestDateTime.parse('2012-12-31T23:59:59.999');
  test['aft2012'] = TestDateTime.parse('2013-06-01T00:00:00.0');
  test['dIvl'] = {
    sameAs: {
      //    |----------X----------|
      //    |----------Y----------|
      x: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999')),
      y: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    },
    before: {
      //    |----------X----------|
      //                                   |----------Y----------|
      x: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-04-01T00:00:00.0')),
      y: new TestInterval(DateTime.parse('2012-07-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    },
    meets: {
      //    |----------X----------|
      //                           |-----------Y----------|
      x: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-06-30T23:59:59.999')),
      y: new TestInterval(DateTime.parse('2012-07-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    },
    overlaps: {
      //    |----------X----------|
      //                  |----------Y----------|
      x: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-09-01T00:00:00.0')),
      y: new TestInterval(DateTime.parse('2012-06-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    },
    begins: {
      //    |-----X-----|
      //    |----------Y----------|
      x: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-07-01T00:00:00.0')),
      y: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    },
    during: {
      //         |-----X-----|
      //    |----------Y----------|
      x: new TestInterval(DateTime.parse('2012-05-01T00:00:00.0'), DateTime.parse('2012-07-01T00:00:00.0')),
      y: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    },
    ends: {
      //              |-----X-----|
      //    |----------Y----------|
      x: new TestInterval(DateTime.parse('2012-07-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999')),
      y: new TestInterval(DateTime.parse('2012-01-01T00:00:00.0'), DateTime.parse('2012-12-31T23:59:59.999'))
    }
  };
  test['zeroToHundred'] = new TestInterval(0, 100);
  test['zeroToForty'] = new TestInterval(0, 40);
  test['fortyToSixty'] = new TestInterval(40, 60);
  test['sixtyToHundred'] = new TestInterval(60, 100);
  return test['iIvl'] = {
    sameAs: {
      //    |----------X----------|
      //    |----------Y----------|
      x: new TestInterval(0, 100),
      y: new TestInterval(0, 100)
    },
    before: {
      //    |----------X----------|
      //                                   |----------Y----------|
      x: new TestInterval(0, 40),
      y: new TestInterval(60, 100)
    },
    meets: {
      //    |----------X----------|
      //                           |-----------Y----------|
      x: new TestInterval(0, 50),
      y: new TestInterval(51, 100)
    },
    overlaps: {
      //    |----------X----------|
      //                  |----------Y----------|
      x: new TestInterval(0, 60),
      y: new TestInterval(40, 100)
    },
    begins: {
      //    |-----X-----|
      //    |----------Y----------|
      x: new TestInterval(0, 60),
      y: new TestInterval(0, 100)
    },
    during: {
      //         |-----X-----|
      //    |----------Y----------|
      x: new TestInterval(30, 70),
      y: new TestInterval(0, 100)
    },
    ends: {
      //              |-----X-----|
      //    |----------Y----------|
      x: new TestInterval(40, 100),
      y: new TestInterval(0, 100)
    }
  };
};
