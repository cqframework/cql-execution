library CqlDateTimeOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Add": Tuple{
  "DateTimeAdd5Years": Tuple{
    expression: DateTime(2005, 10, 10) + 5 years,
    output: @2010-10-10T
  },
  "DateTimeAddInvalidYears": Tuple{
    expression: DateTime(2005, 10, 10) + 8000 years,
    invalid: true
  },
  "DateTimeAdd5Months": Tuple{
    expression: DateTime(2005, 5, 10) + 5 months,
    output: @2005-10-10T
  },
  "DateTimeAddMonthsOverflow": Tuple{
    expression: DateTime(2005, 5, 10) + 10 months,
    output: @2006-03-10T
  },
  "DateTimeAdd5Days": Tuple{
    expression: DateTime(2005, 5, 10) + 5 days,
    output: @2005-05-15T
  },
  "DateTimeAddDaysOverflow": Tuple{
    expression: DateTime(2016, 6, 10) + 21 days,
    output: @2016-07-01T
  },
  "DateTimeAdd5Hours": Tuple{
    expression: DateTime(2005, 5, 10, 5) + 5 hours,
    output: @2005-05-10T10
  },
  "DateTimeAddHoursOverflow": Tuple{
    expression: DateTime(2016, 6, 10, 5) + 19 hours,
    output: @2016-06-11T00
  },
  "DateTimeAdd5Minutes": Tuple{
    expression: DateTime(2005, 5, 10, 5, 5) + 5 minutes,
    output: @2005-05-10T05:10
  },
  "DateTimeAddMinutesOverflow": Tuple{
    expression: DateTime(2016, 6, 10, 5, 5) + 55 minutes,
    output: @2016-06-10T06:00
  },
  "DateTimeAdd5Seconds": Tuple{
    expression: DateTime(2005, 5, 10, 5, 5, 5) + 5 seconds,
    output: @2005-05-10T05:05:10
  },
  "DateTimeAddSecondsOverflow": Tuple{
    expression: DateTime(2016, 6, 10, 5, 5, 5) + 55 seconds,
    output: @2016-06-10T05:06:00
  },
  "DateTimeAdd5Milliseconds": Tuple{
    expression: DateTime(2005, 5, 10, 5, 5, 5, 5) + 5 milliseconds,
    output: @2005-05-10T05:05:05.010
  },
  "DateTimeAddMillisecondsOverflow": Tuple{
    expression: DateTime(2016, 6, 10, 5, 5, 5, 5) + 995 milliseconds,
    output: @2016-06-10T05:05:06.000
  },
  "DateTimeAddLeapYear": Tuple{
    expression: DateTime(2012, 2, 29) + 1 year,
    output: @2013-02-28T
  },
  "DateTimeAdd2YearsByMonths": Tuple{
    expression: DateTime(2014) + 24 months,
    output: @2016T
  },
  "DateTimeAdd2YearsByDays": Tuple{
    expression: DateTime(2014) + 730 days,
    output: @2016T
  },
  "DateTimeAdd2YearsByDaysRem5Days": Tuple{
    expression: DateTime(2014) + 735 days,
    output: @2016T
  },
  "TimeAdd5Hours": Tuple{
    expression: @T15:59:59.999 + 5 hours,
    output: @T20:59:59.999
  },
  "TimeAdd1Minute": Tuple{
    expression: @T15:59:59.999 + 1 minute,
    output: @T16:00:59.999
  },
  "TimeAdd1Second": Tuple{
    expression: @T15:59:59.999 + 1 seconds,
    output: @T16:00:00.999
  },
  "TimeAdd1Millisecond": Tuple{
    expression: @T15:59:59.999 + 1 milliseconds,
    output: @T16:00:00.000
  },
  "TimeAdd5Hours1Minute": Tuple{
    expression: @T15:59:59.999 + 5 hours + 1 minutes,
    output: @T21:00:59.999
  },
  "TimeAdd5hoursByMinute": Tuple{
    expression: @T15:59:59.999 + 300 minutes,
    output: @T20:59:59.999
  }
}

define "After": Tuple{
  "DateTimeAfterYearTrue": Tuple{
    expression: DateTime(2005, 10, 10) after year of DateTime(2004, 10, 10),
    output: true
  },
  "DateTimeAfterYearFalse": Tuple{
    expression: DateTime(2004, 11, 10) after year of DateTime(2004, 10, 10),
    output: false
  },
  "DateTimeAfterMonthTrue": Tuple{
    expression: DateTime(2004, 12, 10) after month of DateTime(2004, 11, 10),
    output: true
  },
  "DateTimeAfterMonthFalse": Tuple{
    expression: DateTime(2004, 9, 10) after month of DateTime(2004, 10, 10),
    output: false
  },
  "DateTimeAfterDayTrue": Tuple{
    expression: DateTime(2004, 12, 11) after day of DateTime(2004, 10, 10),
    output: true
  },
  "DateTimeAfterDayTrue2": Tuple{
    expression: DateTime(2004, 12, 09) after day of DateTime(2003, 10, 10),
    output: true
  },
  "DateTimeAfterDayFalse": Tuple{
    expression: DateTime(2004, 10, 9) after day of DateTime(2004, 10, 10),
    output: false
  },
  "DateTimeAfterHourTrue": Tuple{
    expression: DateTime(2004, 10, 10, 10) after hour of DateTime(2004, 10, 10, 5),
    output: true
  },
  "DateTimeAfterHourFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20) after hour of DateTime(2004, 10, 10, 21),
    output: false
  },
  "DateTimeAfterMinuteTrue": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30) after minute of DateTime(2004, 10, 10, 20, 29),
    output: true
  },
  "DateTimeAfterMinuteFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30) after minute of DateTime(2004, 10, 10, 20, 31),
    output: false
  },
  "DateTimeAfterSecondTrue": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 15) after second of DateTime(2004, 10, 10, 20, 30, 14),
    output: true
  },
  "DateTimeAfterSecondFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 15) after second of DateTime(2004, 10, 10, 20, 30, 16),
    output: false
  },
  "DateTimeAfterMillisecondTrue": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 15, 512) after millisecond of DateTime(2004, 10, 10, 20, 30, 15, 510),
    output: true
  },
  "DateTimeAfterMillisecondFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 15, 512) after millisecond of DateTime(2004, 10, 10, 20, 30, 15, 513),
    output: false
  },
  "DateTimeAfterUncertain": Tuple{
    expression: DateTime(2005, 10, 10) after day of DateTime(2005, 9),
    output: true
  },
  "AfterTimezoneTrue": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 after hour of @2012-03-10T08:20:00.999+06:00,
    output: true
  },
  "AfterTimezoneFalse": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 after hour of @2012-03-10T10:20:00.999+06:00,
    output: false
  },
  "TimeAfterHourTrue": Tuple{
    expression: @T15:59:59.999 after hour of @T14:59:59.999,
    output: true
  },
  "TimeAfterHourFalse": Tuple{
    expression: @T15:59:59.999 after hour of @T16:59:59.999,
    output: false
  },
  "TimeAfterMinuteTrue": Tuple{
    expression: @T15:59:59.999 after minute of @T15:58:59.999,
    output: true
  },
  "TimeAfterMinuteFalse": Tuple{
    expression: @T15:58:59.999 after minute of @T15:59:59.999,
    output: false
  },
  "TimeAfterSecondTrue": Tuple{
    expression: @T15:59:59.999 after second of @T15:59:58.999,
    output: true
  },
  "TimeAfterSecondFalse": Tuple{
    expression: @T15:59:58.999 after second of @T15:59:59.999,
    output: false
  },
  "TimeAfterMillisecondTrue": Tuple{
    expression: @T15:59:59.999 after millisecond of @T15:59:59.998,
    output: true
  },
  "TimeAfterMillisecondFalse": Tuple{
    expression: @T15:59:59.998 after millisecond of @T15:59:59.999,
    output: false
  },
  "TimeAfterTimeCstor": Tuple{
    expression: Time(12, 30) after hour of Time(11, 55),
    output: true
  }
}

define "Before": Tuple{
  "DateTimeBeforeYearTrue": Tuple{
    expression: DateTime(2003) before year of DateTime(2004, 10, 10),
    output: true
  },
  "DateTimeBeforeYearFalse": Tuple{
    expression: DateTime(2004, 11, 10) before year of DateTime(2003, 10, 10),
    output: false
  },
  "DateTimeBeforeMonthTrue": Tuple{
    expression: DateTime(2004, 10, 10) before month of DateTime(2004, 11, 10),
    output: true
  },
  "DateTimeBeforeMonthFalse": Tuple{
    expression: DateTime(2004, 11, 10) before month of DateTime(2004, 10, 10),
    output: false
  },
  "DateTimeBeforeDayTrue": Tuple{
    expression: DateTime(2004, 10, 1) before day of DateTime(2004, 10, 10),
    output: true
  },
  "DateTimeBeforeDayTrue2": Tuple{
    expression: DateTime(2003, 10, 11) before day of DateTime(2004, 10, 10),
    output: true
  },
  "DateTimeBeforeDayFalse": Tuple{
    expression: DateTime(2004, 10, 11) before day of DateTime(2004, 10, 10),
    output: false
  },
  "DateTimeBeforeHourTrue": Tuple{
    expression: DateTime(2004, 10, 10, 1) before hour of DateTime(2004, 10, 10, 5),
    output: true
  },
  "DateTimeBeforeHourFalse": Tuple{
    expression: DateTime(2004, 10, 10, 23) before hour of DateTime(2004, 10, 10, 21),
    output: false
  },
  "DateTimeBeforeMinuteTrue": Tuple{
    expression: DateTime(2004, 10, 10, 20, 28) before minute of DateTime(2004, 10, 10, 20, 29),
    output: true
  },
  "DateTimeBeforeMinuteFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20, 35) before minute of DateTime(2004, 10, 10, 20, 31),
    output: false
  },
  "DateTimeBeforeSecondTrue": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 12) before second of DateTime(2004, 10, 10, 20, 30, 14),
    output: true
  },
  "DateTimeBeforeSecondFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 55) before second of DateTime(2004, 10, 10, 20, 30, 16),
    output: false
  },
  "DateTimeBeforeMillisecondTrue": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 15, 508) before millisecond of DateTime(2004, 10, 10, 20, 30, 15, 510),
    output: true
  },
  "DateTimeBeforeMillisecondFalse": Tuple{
    expression: DateTime(2004, 10, 10, 20, 30, 15, 599) before millisecond of DateTime(2004, 10, 10, 20, 30, 15, 513),
    output: false
  },
  "BeforeTimezoneTrue": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 before hour of @2012-03-10T10:20:00.999+06:00,
    output: true
  },
  "BeforeTimezoneFalse": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 before hour of @2012-03-10T09:20:00.999+06:00,
    output: false
  },
  "TimeBeforeHourTrue": Tuple{
    expression: @T13:59:59.999 before hour of @T14:59:59.999,
    output: true
  },
  "TimeBeforeHourFalse": Tuple{
    expression: @T16:59:59.999 before hour of @T15:59:59.999,
    output: false
  },
  "TimeBeforeMinuteTrue": Tuple{
    expression: @T15:57:59.999 before minute of @T15:58:59.999,
    output: true
  },
  "TimeBeforeMinuteFalse": Tuple{
    expression: @T15:59:59.999 before minute of @T15:59:59.999,
    output: false
  },
  "TimeBeforeSecondTrue": Tuple{
    expression: @T15:59:57.999 before second of @T15:59:58.999,
    output: true
  },
  "TimeBeforeSecondFalse": Tuple{
    expression: @T15:59:56.999 before second of @T15:59:55.999,
    output: false
  },
  "TimeBeforeMillisecondTrue": Tuple{
    expression: @T15:59:59.997 before millisecond of @T15:59:59.998,
    output: true
  },
  "TimeBeforeMillisecondFalse": Tuple{
    expression: @T15:59:59.998 before millisecond of @T15:59:59.997,
    output: false
  }
}

define "DateTime": Tuple{
  "DateTimeYear": Tuple{
    expression: DateTime(2003),
    output: @2003T
  },
  "DateTimeMonth": Tuple{
    expression: DateTime(2003, 10),
    output: @2003-10T
  },
  "DateTimeDay": Tuple{
    expression: DateTime(2003, 10, 29),
    output: @2003-10-29T
  },
  "DateTimeHour": Tuple{
    expression: DateTime(2003, 10, 29, 20),
    output: @2003-10-29T20
  },
  "DateTimeMinute": Tuple{
    expression: DateTime(2003, 10, 29, 20, 50),
    output: @2003-10-29T20:50
  },
  "DateTimeSecond": Tuple{
    expression: DateTime(2003, 10, 29, 20, 50, 33),
    output: @2003-10-29T20:50:33
  },
  "DateTimeMillisecond": Tuple{
    expression: DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: @2003-10-29T20:50:33.955
  }
}

define "DateTimeComponentFrom": Tuple{
  "DateTimeComponentFromYear": Tuple{
    expression: year from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 2003
  },
  "DateTimeComponentFromMonth": Tuple{
    expression: month from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 10
  },
  "DateTimeComponentFromMonthMinBoundary": Tuple{
    expression: month from DateTime(2003, 01, 29, 20, 50, 33, 955),
    output: 1
  },
  "DateTimeComponentFromDay": Tuple{
    expression: day from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 29
  },
  "DateTimeComponentFromHour": Tuple{
    expression: hour from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 20
  },
  "DateTimeComponentFromMinute": Tuple{
    expression: minute from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 50
  },
  "DateTimeComponentFromSecond": Tuple{
    expression: second from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 33
  },
  "DateTimeComponentFromMillisecond": Tuple{
    expression: millisecond from DateTime(2003, 10, 29, 20, 50, 33, 955),
    output: 955
  },
  "DateTimeComponentFromTimezone": Tuple{
    skipped: 'Translation Error: Timezone keyword is only valid in 1.3 or lower'
    /*
    expression: timezone from DateTime(2003, 10, 29, 20, 50, 33, 955, 1),
    output: 1.00
    */  },
  "DateTimeComponentFromDate": Tuple{
    expression: date from DateTime(2003, 10, 29, 20, 50, 33, 955, 1),
    output: @2003-10-29
  },
  "TimeComponentFromHour": Tuple{
    expression: hour from @T23:20:15.555,
    output: 23
  },
  "TimeComponentFromMinute": Tuple{
    expression: minute from @T23:20:15.555,
    output: 20
  },
  "TimeComponentFromSecond": Tuple{
    expression: second from @T23:20:15.555,
    output: 15
  },
  "TimeComponentFromMilli": Tuple{
    expression: millisecond from @T23:20:15.555,
    output: 555
  }
}

define "Difference": Tuple{
  "DateTimeDifferenceYear": Tuple{
    expression: difference in years between DateTime(2000) and DateTime(2005, 12),
    output: 5
  },
  "DateTimeDifferenceMonth": Tuple{
    expression: difference in months between DateTime(2000, 2) and DateTime(2000, 10),
    output: 8
  },
  "DateTimeDifferenceDay": Tuple{
    expression: difference in days between DateTime(2000, 10, 15, 10, 30) and DateTime(2000, 10, 25, 10, 0),
    output: 10
  },
  "DateTimeDifferenceHour": Tuple{
    expression: difference in hours between DateTime(2000, 4, 1, 12) and DateTime(2000, 4, 1, 20),
    output: 8
  },
  "DateTimeDifferenceMinute": Tuple{
    expression: difference in minutes between DateTime(2005, 12, 10, 5, 16) and DateTime(2005, 12, 10, 5, 25),
    output: 9
  },
  "DateTimeDifferenceSecond": Tuple{
    expression: difference in seconds between DateTime(2000, 10, 10, 10, 5, 45) and DateTime(2000, 10, 10, 10, 5, 50),
    output: 5
  },
  "DateTimeDifferenceMillisecond": Tuple{
    expression: difference in milliseconds between DateTime(2000, 10, 10, 10, 5, 45, 500, -6.0) and DateTime(2000, 10, 10, 10, 5, 45, 900, -7.0),
    output: 3600400
  },
  "DateTimeDifferenceWeeks": Tuple{
    expression: difference in weeks between DateTime(2000, 10, 15) and DateTime(2000, 10, 28),
    output: 1
  },
  "DateTimeDifferenceWeeks2": Tuple{
    expression: difference in weeks between DateTime(2000, 10, 15) and DateTime(2000, 10, 29),
    output: 2
  },
  "DateTimeDifferenceWeeks3": Tuple{
    expression: difference in weeks between @2012-03-10T22:05:09 and @2012-03-24T07:19:33,
    output: 2
  },
  "DateTimeDifferenceNegative": Tuple{
    expression: difference in years between DateTime(2016) and DateTime(1998),
    output: -18
  },
  "DateTimeDifferenceUncertain": Tuple{
    expression: difference in months between DateTime(2005) and DateTime(2006, 7) > 5,
    output: true
  },
  "TimeDifferenceHour": Tuple{
    expression: difference in hours between @T20 and @T23:25:15.555,
    output: 3
  },
  "TimeDifferenceMinute": Tuple{
    expression: difference in minutes between @T20:20:15.555 and @T20:25:15.555,
    output: 5
  },
  "TimeDifferenceSecond": Tuple{
    expression: difference in seconds between @T20:20:15.555 and @T20:20:20.555,
    output: 5
  },
  "TimeDifferenceMillis": Tuple{
    expression: difference in milliseconds between @T20:20:15.555 and @T20:20:15.550,
    output: -5
  }
}

define "From Github issue #29": Tuple{
  "DateTimeA": Tuple{
    expression: @2017-03-12T01:00:00-07:00,
    output: @2017-03-12T01:00:00-07:00
  },
  "DateTimeAA": Tuple{
    expression: DateTime(2017, 3, 12, 1, 0, 0, 0, -7.0),
    output: @2017-03-12T01:00:00.000-07:00
  },
  "DateTimeB": Tuple{
    expression: @2017-03-12T03:00:00-06:00,
    output: @2017-03-12T03:00:00-06:00
  },
  "DateTimeBB": Tuple{
    expression: DateTime(2017, 3, 12, 3, 0, 0, 0, -6.0),
    output: @2017-03-12T03:00:00.000-06:00
  },
  "DateTimeC": Tuple{
    expression: @2017-11-05T01:30:00-06:00,
    output: @2017-11-05T01:30:00-06:00
  },
  "DateTimeCC": Tuple{
    expression: DateTime(2017, 11, 5, 1, 30, 0, 0, -6.0),
    output: @2017-11-05T01:30:00.000-06:00
  },
  "DateTimeD": Tuple{
    expression: @2017-11-05T01:15:00-07:00,
    output: @2017-11-05T01:15:00-07:00
  },
  "DateTimeDD": Tuple{
    expression: DateTime(2017, 11, 5, 1, 15, 0, 0, -7.0),
    output: @2017-11-05T01:15:00.000-07:00
  },
  "DateTimeE": Tuple{
    expression: @2017-03-12T00:00:00-07:00,
    output: @2017-03-12T00:00:00-07:00
  },
  "DateTimeEE": Tuple{
    expression: DateTime(2017, 3, 12, 0, 0, 0, 0, -7.0),
    output: @2017-03-12T00:00:00.000-07:00
  },
  "DateTimeF": Tuple{
    expression: @2017-03-13T00:00:00-06:00,
    output: @2017-03-13T00:00:00-06:00
  },
  "DateTimeFF": Tuple{
    expression: DateTime(2017, 3, 13, 0, 0, 0, 0, -6.0),
    output: @2017-03-13T00:00:00.000-06:00
  },
  "DifferenceInHoursA": Tuple{
    expression: difference in hours between @2017-03-12T01:00:00-07:00 and @2017-03-12T03:00:00-06:00,
    output: 1
  },
  "DifferenceInMinutesA": Tuple{
    expression: difference in minutes between @2017-11-05T01:30:00-06:00 and @2017-11-05T01:15:00-07:00,
    output: 45
  },
  "DifferenceInDaysA": Tuple{
    expression: difference in days between @2017-03-12T00:00:00-07:00 and @2017-03-13T00:00:00-06:00,
    output: 1
  },
  "DifferenceInHoursAA": Tuple{
    expression: difference in hours between DateTime(2017, 3, 12, 1, 0, 0, 0, -7.0) and DateTime(2017, 3, 12, 3, 0, 0, 0, -6.0),
    output: 1
  },
  "DifferenceInMinutesAA": Tuple{
    expression: difference in minutes between DateTime(2017, 11, 5, 1, 30, 0, 0, -6.0) and DateTime(2017, 11, 5, 1, 15, 0, 0, -7.0),
    output: 45
  },
  "DifferenceInDaysAA": Tuple{
    expression: difference in days between DateTime(2017, 3, 12, 0, 0, 0, 0, -7.0) and DateTime(2017, 3, 13, 0, 0, 0, 0, -6.0),
    output: 1
  }
}

define "Duration": Tuple{
  "DateTimeDurationBetweenYear": Tuple{
    expression: years between DateTime(2005) and DateTime(2010),
    output: Interval[ 4, 5 ]
  },
  "DateTimeDurationBetweenYearOffset": Tuple{
    expression: years between DateTime(2005, 5) and DateTime(2010, 4),
    output: 4
  },
  "DateTimeDurationBetweenMonth": Tuple{
    expression: months between @2014-01-31 and @2014-02-01,
    output: 0
  },
  "DateTimeDurationBetweenDaysDiffYears": Tuple{
    expression: days between DateTime(2010, 10, 12, 12, 5) and DateTime(2008, 8, 15, 8, 8),
    output: -788
  }
}

define "Uncertainty tests": Tuple{
  "DateTimeDurationBetweenUncertainInterval": Tuple{
    expression: days between DateTime(2014, 1, 15) and DateTime(2014, 2),
    output: Interval[ 16, 44 ]
  },
  "DateTimeDurationBetweenUncertainInterval2": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 5),
    output: Interval[ 4, 16 ]
  },
  "DateTimeDurationBetweenUncertainAdd": Tuple{
    expression: (days between DateTime(2014, 1, 15) and DateTime(2014, 2))
				+ (days between DateTime(2014, 1, 15) and DateTime(2014, 2)),
    output: Interval[ 32, 88 ]
  },
  "DateTimeDurationBetweenUncertainSubtract": Tuple{
    expression: (days between DateTime(2014, 1, 15) and DateTime(2014, 2))
				- (months between DateTime(2005) and DateTime(2006, 5)),
    output: Interval[ 0, 40 ]
  },
  "DateTimeDurationBetweenUncertainMultiply": Tuple{
    expression: (days between DateTime(2014, 1, 15) and DateTime(2014, 2))
				* (days between DateTime(2014, 1, 15) and DateTime(2014, 2)),
    output: Interval[ 256, 1936 ]
  },
  "DateTimeDurationBetweenUncertainDiv": Tuple{
    expression: (days between DateTime(2014, 1, 15) and DateTime(2014, 2))
				div (months between DateTime(2005) and DateTime(2006, 5)),
    invalid: true
  },
  "DateTimeDurationBetweenMonthUncertain": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 7) > 5,
    output: true
  },
  "DateTimeDurationBetweenMonthUncertain2": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 2) > 5,
    output: null
  },
  "DateTimeDurationBetweenMonthUncertain3": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 7) > 25,
    output: false
  },
  "DateTimeDurationBetweenMonthUncertain4": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 7) < 24,
    output: true
  },
  "DateTimeDurationBetweenMonthUncertain5": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 7) = 24,
    output: false
  },
  "DateTimeDurationBetweenMonthUncertain6": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 7) >= 5,
    output: true
  },
  "DateTimeDurationBetweenMonthUncertain7": Tuple{
    expression: months between DateTime(2005) and DateTime(2006, 7) <= 24,
    output: true
  },
  "DateTime1": Tuple{
    expression: @2012-03-10T10:20:00,
    output: @2012-03-10T10:20:00
  },
  "DateTime2": Tuple{
    expression: @2013-03-10T09:20:00,
    output: @2013-03-10T09:20:00
  },
  "DurationInYears": Tuple{
    expression: years between (date from @2012-03-10T10:20:00) and (date from @2013-03-10T09:20:00),
    output: 1
  },
  "DurationInWeeks": Tuple{
    expression: weeks between @2012-03-10T22:05:09 and @2012-03-20T07:19:33,
    output: 1
  },
  "DurationInWeeks2": Tuple{
    expression: weeks between @2012-03-10T22:05:09 and @2012-03-24T07:19:33,
    output: 1
  },
  "DurationInWeeks3": Tuple{
    expression: weeks between @2012-03-10T06:05:09 and @2012-03-24T07:19:33,
    output: 2
  },
  "TimeDurationBetweenHour": Tuple{
    expression: hours between @T20:26:15.555 and @T23:25:15.555,
    output: 2
  },
  "TimeDurationBetweenHourDiffPrecision": Tuple{
    skipped: 'Translation Error: Syntax error at Z'
    /*
    expression: hours between @T06Z and @T07:00:00Z,
    output: 1
    */  },
  "TimeDurationBetweenMinute": Tuple{
    expression: minutes between @T23:20:16.555 and @T23:25:15.555,
    output: 4
  },
  "TimeDurationBetweenSecond": Tuple{
    expression: seconds between @T23:25:10.556 and @T23:25:15.555,
    output: 4
  },
  "TimeDurationBetweenMillis": Tuple{
    expression: milliseconds between @T23:25:25.555 and @T23:25:25.560,
    output: 5
  },
  "DurationInHoursA": Tuple{
    skipped: 'Is @2017-03-12T01:00:00-07:00 uncertain?'
    /*
    expression: hours between @2017-03-12T01:00:00-07:00 and @2017-03-12T03:00:00-06:00,
    output: 1
    */  },
  "DurationInMinutesA": Tuple{
    skipped: 'Is @2017-03-12T01:00:00-07:00 uncertain?'
    /*
    expression: minutes between @2017-11-05T01:30:00-06:00 and @2017-11-05T01:15:00-07:00,
    output: 45
    */  },
  "DurationInDaysA": Tuple{
    expression: days between @2017-03-12T00:00:00-07:00 and @2017-03-13T00:00:00-06:00,
    output: 0
  },
  "DurationInHoursAA": Tuple{
    expression: hours between DateTime(2017, 3, 12, 1, 0, 0, 0, -7.0) and DateTime(2017, 3, 12, 3, 0, 0, 0, -6.0),
    output: 1
  },
  "DurationInMinutesAA": Tuple{
    expression: minutes between DateTime(2017, 11, 5, 1, 30, 0, 0, -6.0) and DateTime(2017, 11, 5, 1, 15, 0, 0, -7.0),
    output: 45
  },
  "DurationInDaysAA": Tuple{
    expression: days between DateTime(2017, 3, 12, 0, 0, 0, 0, -7.0) and DateTime(2017, 3, 13, 0, 0, 0, 0, -6.0),
    output: 0
  }
}

define "Now": Tuple{
  "DateTimeNow": Tuple{
    expression: Now() = Now(),
    output: true
  }
}

define "SameAs": Tuple{
  "DateTimeSameAsYearTrue": Tuple{
    expression: DateTime(2014) same year as DateTime(2014),
    output: true
  },
  "DateTimeSameAsYearFalse": Tuple{
    expression: DateTime(2013) same year as DateTime(2014),
    output: false
  },
  "DateTimeSameAsMonthTrue": Tuple{
    expression: DateTime(2014, 12) same month as DateTime(2014, 12),
    output: true
  },
  "DateTimeSameAsMonthFalse": Tuple{
    expression: DateTime(2014, 12) same month as DateTime(2014, 10),
    output: false
  },
  "DateTimeSameAsDayTrue": Tuple{
    expression: DateTime(2014, 12, 10) same day as DateTime(2014, 12, 10),
    output: true
  },
  "DateTimeSameAsDayFalse": Tuple{
    expression: DateTime(2014, 10, 10) same day as DateTime(2014, 10, 11),
    output: false
  },
  "DateTimeSameAsHourTrue": Tuple{
    expression: DateTime(2014, 12, 10, 20) same hour as DateTime(2014, 12, 10, 20),
    output: true
  },
  "DateTimeSameAsHourFalse": Tuple{
    expression: DateTime(2014, 10, 10, 20) same hour as DateTime(2014, 10, 10, 21),
    output: false
  },
  "DateTimeSameAsMinuteTrue": Tuple{
    expression: DateTime(2014, 12, 10, 20, 55) same minute as DateTime(2014, 12, 10, 20, 55),
    output: true
  },
  "DateTimeSameAsMinuteFalse": Tuple{
    expression: DateTime(2014, 10, 10, 20, 55) same minute as DateTime(2014, 10, 10, 21, 56),
    output: false
  },
  "DateTimeSameAsSecondTrue": Tuple{
    expression: DateTime(2014, 12, 10, 20, 55, 45) same second as DateTime(2014, 12, 10, 20, 55, 45),
    output: true
  },
  "DateTimeSameAsSecondFalse": Tuple{
    expression: DateTime(2014, 10, 10, 20, 55, 45) same second as DateTime(2014, 10, 10, 21, 55, 44),
    output: false
  },
  "DateTimeSameAsMillisecondTrue": Tuple{
    expression: DateTime(2014, 12, 10, 20, 55, 45, 500) same millisecond as DateTime(2014, 12, 10, 20, 55, 45, 500),
    output: true
  },
  "DateTimeSameAsMillisecondFalse": Tuple{
    expression: DateTime(2014, 10, 10, 20, 55, 45, 500) same millisecond as DateTime(2014, 10, 10, 21, 55, 45, 501),
    output: false
  },
  "DateTimeSameAsNull": Tuple{
    expression: DateTime(2014, 10) same day as DateTime(2014, 10, 12),
    output: null
  },
  "SameAsTimezoneTrue": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 same hour as @2012-03-10T09:20:00.999+06:00,
    output: true
  },
  "SameAsTimezoneFalse": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 same hour as @2012-03-10T10:20:00.999+06:00,
    output: false
  },
  "TimeSameAsHourTrue": Tuple{
    expression: @T23:25:25.555 same hour as @T23:55:25.900,
    output: true
  },
  "TimeSameAsHourFalse": Tuple{
    expression: @T22:25:25.555 same hour as @T23:25:25.555,
    output: false
  },
  "TimeSameAsMinuteTrue": Tuple{
    expression: @T23:55:22.555 same minute as @T23:55:25.900,
    output: true
  },
  "TimeSameAsMinuteFalse": Tuple{
    expression: @T23:26:25.555 same minute as @T23:25:25.555,
    output: false
  },
  "TimeSameAsSecondTrue": Tuple{
    expression: @T23:55:25.555 same second as @T23:55:25.900,
    output: true
  },
  "TimeSameAsSecondFalse": Tuple{
    expression: @T23:25:35.555 same second as @T23:25:25.555,
    output: false
  },
  "TimeSameAsMillisTrue": Tuple{
    expression: @T23:55:25.555 same millisecond as @T23:55:25.555,
    output: true
  },
  "TimeSameAsMillisFalse": Tuple{
    expression: @T23:25:25.555 same millisecond as @T23:25:25.554,
    output: false
  }
}

define "SameOrAfter": Tuple{
  "DateTimeSameOrAfterYearTrue1": Tuple{
    expression: DateTime(2014) same year or after DateTime(2014),
    output: true
  },
  "DateTimeSameOrAfterYearTrue2": Tuple{
    expression: DateTime(2016) same year or after DateTime(2014),
    output: true
  },
  "DateTimeSameOrAfterYearFalse": Tuple{
    expression: DateTime(2013) same year or after DateTime(2014),
    output: false
  },
  "DateTimeSameOrAfterMonthTrue1": Tuple{
    expression: DateTime(2014, 12) same month or after DateTime(2014, 12),
    output: true
  },
  "DateTimeSameOrAfterMonthTrue2": Tuple{
    expression: DateTime(2014, 10) same month or after DateTime(2014, 9),
    output: true
  },
  "DateTimeSameOrAfterMonthFalse": Tuple{
    expression: DateTime(2014, 10) same month or after DateTime(2014, 11),
    output: false
  },
  "DateTimeSameOrAfterDayTrue1": Tuple{
    expression: DateTime(2014, 12, 20) same day or after DateTime(2014, 12, 20),
    output: true
  },
  "DateTimeSameOrAfterDayTrue2": Tuple{
    expression: DateTime(2014, 10, 25) same day or after DateTime(2014, 10, 20),
    output: true
  },
  "DateTimeSameOrAfterDayFalse": Tuple{
    expression: DateTime(2014, 10, 20) same day or after DateTime(2014, 10, 25),
    output: false
  },
  "DateTimeSameOrAfterHourTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12) same hour or after DateTime(2014, 12, 20, 12),
    output: true
  },
  "DateTimeSameOrAfterHourTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 12) same hour or after DateTime(2014, 10, 25, 10),
    output: true
  },
  "DateTimeSameOrAfterHourFalse": Tuple{
    expression: DateTime(2014, 10, 25, 12) same hour or after DateTime(2014, 10, 25, 15),
    output: false
  },
  "DateTimeSameOrAfterMinuteTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12, 30) same minute or after DateTime(2014, 12, 20, 12, 30),
    output: true
  },
  "DateTimeSameOrAfterMinuteTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 10, 30) same minute or after DateTime(2014, 10, 25, 10, 25),
    output: true
  },
  "DateTimeSameOrAfterMinuteFalse": Tuple{
    expression: DateTime(2014, 10, 25, 15, 30) same minute or after DateTime(2014, 10, 25, 15, 45),
    output: false
  },
  "DateTimeSameOrAfterSecondTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12, 30, 15) same second or after DateTime(2014, 12, 20, 12, 30, 15),
    output: true
  },
  "DateTimeSameOrAfterSecondTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 10, 25, 25) same second or after DateTime(2014, 10, 25, 10, 25, 20),
    output: true
  },
  "DateTimeSameOrAfterSecondFalse": Tuple{
    expression: DateTime(2014, 10, 25, 15, 45, 20) same second or after DateTime(2014, 10, 25, 15, 45, 21),
    output: false
  },
  "DateTimeSameOrAfterMillisecondTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12, 30, 15, 250) same millisecond or after DateTime(2014, 12, 20, 12, 30, 15, 250),
    output: true
  },
  "DateTimeSameOrAfterMillisecondTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 10, 25, 20, 500) same millisecond or after DateTime(2014, 10, 25, 10, 25, 20, 499),
    output: true
  },
  "DateTimeSameOrAfterMillisecondFalse": Tuple{
    expression: DateTime(2014, 10, 25, 15, 45, 20, 500) same millisecond or after DateTime(2014, 10, 25, 15, 45, 20, 501),
    output: false
  },
  "DateTimeSameOrAfterNull1": Tuple{
    expression: DateTime(2014, 12, 20) same day or after DateTime(2014, 12),
    output: null
  },
  "SameOrAfterTimezoneTrue": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 same hour or after @2012-03-10T09:20:00.999+06:00,
    output: true
  },
  "SameOrAfterTimezoneFalse": Tuple{
    expression: @2012-03-10T10:20:00.999+07:00 same hour or after @2012-03-10T10:20:00.999+06:00,
    output: false
  },
  "TimeSameOrAfterHourTrue1": Tuple{
    expression: @T23:25:25.555 same hour or after @T23:55:25.900,
    output: true
  },
  "TimeSameOrAfterHourTrue2": Tuple{
    expression: @T23:25:25.555 same hour or after @T22:55:25.900,
    output: true
  },
  "TimeSameOrAfterHourFalse": Tuple{
    expression: @T22:25:25.555 same hour or after @T23:55:25.900,
    output: false
  },
  "TimeSameOrAfterMinuteTrue1": Tuple{
    expression: @T23:25:25.555 same minute or after @T23:25:25.900,
    output: true
  },
  "TimeSameOrAfterMinuteTrue2": Tuple{
    expression: @T23:25:25.555 same minute or after @T22:15:25.900,
    output: true
  },
  "TimeSameOrAfterMinuteFalse": Tuple{
    expression: @T23:25:25.555 same minute or after @T23:55:25.900,
    output: false
  },
  "TimeSameOrAfterSecondTrue1": Tuple{
    expression: @T23:25:25.555 same second or after @T23:25:25.900,
    output: true
  },
  "TimeSameOrAfterSecondTrue2": Tuple{
    expression: @T23:25:35.555 same second or after @T22:25:25.900,
    output: true
  },
  "TimeSameOrAfterSecondFalse": Tuple{
    expression: @T23:55:25.555 same second or after @T23:55:35.900,
    output: false
  },
  "TimeSameOrAfterMillisTrue1": Tuple{
    expression: @T23:25:25.555 same millisecond or after @T23:25:25.555,
    output: true
  },
  "TimeSameOrAfterMillisTrue2": Tuple{
    expression: @T23:25:25.555 same millisecond or after @T22:25:25.550,
    output: true
  },
  "TimeSameOrAfterMillisFalse": Tuple{
    expression: @T23:55:25.555 same millisecond or after @T23:55:25.900,
    output: false
  },
  "OnOrAfterTrue": Tuple{
    expression: @2017-12-20T11:00:00.000 on or after @2017-12-20T11:00:00.000,
    output: true
  },
  "Issue32DateTime": Tuple{
    expression: @2017-12-21T02:00:00.0 same or after @2017-12-20T11:00:00.0,
    output: true
  }
}

define "SameOrBefore": Tuple{
  "DateTimeSameOrBeforeYearTrue1": Tuple{
    expression: DateTime(2014) same year or before DateTime(2014),
    output: true
  },
  "DateTimeSameOrBeforeYearTrue2": Tuple{
    expression: DateTime(2013) same year or before DateTime(2014),
    output: true
  },
  "DateTimeSameOrBeforeYearFalse": Tuple{
    expression: DateTime(2015) same year or before DateTime(2014),
    output: false
  },
  "DateTimeSameOrBeforeMonthTrue1": Tuple{
    expression: DateTime(2014, 12) same month or before DateTime(2014, 12),
    output: true
  },
  "DateTimeSameOrBeforeMonthTrue2": Tuple{
    expression: DateTime(2014, 8) same month or before DateTime(2014, 9),
    output: true
  },
  "DateTimeSameOrBeforeMonthFalse": Tuple{
    expression: DateTime(2014, 12) same month or before DateTime(2014, 11),
    output: false
  },
  "DateTimeSameOrBeforeDayTrue1": Tuple{
    expression: DateTime(2014, 12, 20) same day or before DateTime(2014, 12, 20),
    output: true
  },
  "DateTimeSameOrBeforeDayTrue2": Tuple{
    expression: DateTime(2014, 10, 15) same day or before DateTime(2014, 10, 20),
    output: true
  },
  "DateTimeSameOrBeforeDayFalse": Tuple{
    expression: DateTime(2014, 10, 30) same day or before DateTime(2014, 10, 25),
    output: false
  },
  "DateTimeSameOrBeforeHourTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12) same hour or before DateTime(2014, 12, 20, 12),
    output: true
  },
  "DateTimeSameOrBeforeHourTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 5) same hour or before DateTime(2014, 10, 25, 10),
    output: true
  },
  "DateTimeSameOrBeforeHourFalse": Tuple{
    expression: DateTime(2014, 10, 25, 20) same hour or before DateTime(2014, 10, 25, 15),
    output: false
  },
  "DateTimeSameOrBeforeMinuteTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12, 30) same minute or before DateTime(2014, 12, 20, 12, 30),
    output: true
  },
  "DateTimeSameOrBeforeMinuteTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 10, 20) same minute or before DateTime(2014, 10, 25, 10, 25),
    output: true
  },
  "DateTimeSameOrBeforeMinuteFalse": Tuple{
    expression: DateTime(2014, 10, 25, 15, 55) same minute or before DateTime(2014, 10, 25, 15, 45),
    output: false
  },
  "DateTimeSameOrBeforeSecondTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12, 30, 15) same second or before DateTime(2014, 12, 20, 12, 30, 15),
    output: true
  },
  "DateTimeSameOrBeforeSecondTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 10, 25, 15) same second or before DateTime(2014, 10, 25, 10, 25, 20),
    output: true
  },
  "DateTimeSameOrBeforeSecondFalse": Tuple{
    expression: DateTime(2014, 10, 25, 15, 45, 25) same second or before DateTime(2014, 10, 25, 15, 45, 21),
    output: false
  },
  "DateTimeSameOrBeforeMillisecondTrue1": Tuple{
    expression: DateTime(2014, 12, 20, 12, 30, 15, 250) same millisecond or before DateTime(2014, 12, 20, 12, 30, 15, 250),
    output: true
  },
  "DateTimeSameOrBeforeMillisecondTrue2": Tuple{
    expression: DateTime(2014, 10, 25, 10, 25, 20, 450) same millisecond or before DateTime(2014, 10, 25, 10, 25, 20, 499),
    output: true
  },
  "DateTimeSameOrBeforeMillisecondFalse": Tuple{
    expression: DateTime(2014, 10, 25, 15, 45, 20, 505) same millisecond or before DateTime(2014, 10, 25, 15, 45, 20, 501),
    output: false
  },
  "DateTimeSameOrBeforeNull1": Tuple{
    expression: DateTime(2014, 12, 20) same minute or before DateTime(2014, 12, 20, 15),
    output: null
  },
  "SameOrBeforeTimezoneTrue": Tuple{
    expression: @2012-03-10T09:20:00.999+07:00 same hour or before @2012-03-10T10:20:00.999+06:00,
    output: true
  },
  "SameOrBeforeTimezoneFalse": Tuple{
    expression: @2012-03-10T10:20:00.999+06:00 same hour or before @2012-03-10T10:20:00.999+07:00,
    output: false
  },
  "TimeSameOrBeforeHourTrue1": Tuple{
    expression: @T23:25:25.555 same hour or before @T23:55:25.900,
    output: true
  },
  "TimeSameOrBeforeHourTrue2": Tuple{
    expression: @T21:25:25.555 same hour or before @T22:55:25.900,
    output: true
  },
  "TimeSameOrBeforeHourFalse": Tuple{
    expression: @T22:25:25.555 same hour or before @T21:55:25.900,
    output: false
  },
  "TimeSameOrBeforeMinuteTrue1": Tuple{
    expression: @T23:25:25.555 same minute or before @T23:25:25.900,
    output: true
  },
  "TimeSameOrBeforeMinuteFalse0": Tuple{
    expression: @T23:10:25.555 same minute or before @T22:15:25.900,
    output: false
  },
  "TimeSameOrBeforeMinuteFalse": Tuple{
    expression: @T23:56:25.555 same minute or before @T23:55:25.900,
    output: false
  },
  "TimeSameOrBeforeSecondTrue1": Tuple{
    expression: @T23:25:25.555 same second or before @T23:25:25.900,
    output: true
  },
  "TimeSameOrBeforeSecondFalse0": Tuple{
    expression: @T23:25:35.555 same second or before @T22:25:45.900,
    output: false
  },
  "TimeSameOrBeforeSecondFalse": Tuple{
    expression: @T23:55:45.555 same second or before @T23:55:35.900,
    output: false
  },
  "TimeSameOrBeforeMillisTrue1": Tuple{
    expression: @T23:25:25.555 same millisecond or before @T23:25:25.555,
    output: true
  },
  "TimeSameOrBeforeMillisFalse0": Tuple{
    expression: @T23:25:25.200 same millisecond or before @T22:25:25.550,
    output: false
  },
  "TimeSameOrBeforeMillisFalse": Tuple{
    expression: @T23:55:25.966 same millisecond or before @T23:55:25.900,
    output: false
  }
}

define "Subtract": Tuple{
  "DateTimeSubtract5Years": Tuple{
    expression: DateTime(2005, 10, 10) - 5 years,
    output: @2000-10-10T
  },
  "DateTimeSubtractInvalidYears": Tuple{
    expression: DateTime(2005, 10, 10) - 2005 years,
    invalid: true
  },
  "DateTimeSubtract5Months": Tuple{
    expression: DateTime(2005, 6, 10) - 5 months,
    output: @2005-01-10T
  },
  "DateTimeSubtractMonthsUnderflow": Tuple{
    expression: DateTime(2005, 5, 10) - 6 months,
    output: @2004-11-10T
  },
  "DateTimeSubtract5Days": Tuple{
    expression: DateTime(2005, 5, 10) - 5 days,
    output: @2005-05-05T
  },
  "DateTimeSubtractDaysUnderflow": Tuple{
    expression: DateTime(2016, 6, 10) - 11 days,
    output: @2016-05-30T
  },
  "DateTimeSubtract5Hours": Tuple{
    expression: DateTime(2005, 5, 10, 10) - 5 hours,
    output: @2005-05-10T05
  },
  "DateTimeSubtractHoursUnderflow": Tuple{
    expression: DateTime(2016, 6, 10, 5) - 6 hours,
    output: @2016-06-09T23
  },
  "DateTimeSubtract5Minutes": Tuple{
    expression: DateTime(2005, 5, 10, 5, 10) - 5 minutes,
    output: @2005-05-10T05:05
  },
  "DateTimeSubtractMinutesUnderflow": Tuple{
    expression: DateTime(2016, 6, 10, 5, 5) - 6 minutes,
    output: @2016-06-10T04:59
  },
  "DateTimeSubtract5Seconds": Tuple{
    expression: DateTime(2005, 5, 10, 5, 5, 10) - 5 seconds,
    output: @2005-05-10T05:05:05
  },
  "DateTimeSubtractSecondsUnderflow": Tuple{
    expression: DateTime(2016, 6, 10, 5, 5, 5) - 6 seconds,
    output: @2016-06-10T05:04:59
  },
  "DateTimeSubtract5Milliseconds": Tuple{
    expression: DateTime(2005, 5, 10, 5, 5, 5, 10) - 5 milliseconds,
    output: @2005-05-10T05:05:05.005
  },
  "DateTimeSubtractMillisecondsUnderflow": Tuple{
    expression: DateTime(2016, 6, 10, 5, 5, 5, 5) - 6 milliseconds,
    output: @2016-06-10T05:05:04.999
  },
  "DateTimeSubtract2YearsAsMonths": Tuple{
    expression: DateTime(2014) - 24 months,
    output: @2012T
  },
  "DateTimeSubtract2YearsAsMonthsRem1": Tuple{
    expression: DateTime(2014) - 25 months,
    output: @2012T
  },
  "TimeSubtract5Hours": Tuple{
    expression: @T15:59:59.999 - 5 hours,
    output: @T10:59:59.999
  },
  "TimeSubtract1Minute": Tuple{
    expression: @T15:59:59.999 - 1 minutes,
    output: @T15:58:59.999
  },
  "TimeSubtract1Second": Tuple{
    expression: @T15:59:59.999 - 1 seconds,
    output: @T15:59:58.999
  },
  "TimeSubtract1Millisecond": Tuple{
    expression: @T15:59:59.0 - 1 milliseconds,
    output: @T15:59:58.999
  },
  "TimeSubtract5Hours1Minute": Tuple{
    expression: @T15:59:59.999 - 5 hours - 1 minutes,
    output: @T10:58:59.999
  },
  "TimeSubtract5hoursByMinute": Tuple{
    expression: @T15:59:59.999 - 300 minutes,
    output: @T10:59:59.999
  }
}

define "Time": Tuple{
  "TimeTest2": Tuple{
    expression: @T23:59:59.999,
    output: @T23:59:59.999
  }
}

define "TimeOfDay": Tuple{
  "TimeOfDayTest": Tuple{
    expression: TimeOfDay(),
    output: TimeOfDay()
  }
}

define "Today": Tuple{
  "DateTimeSameOrBeforeTodayTrue1": Tuple{
    expression: Today() same day or before Today(),
    output: true
  },
  "DateTimeSameOrBeforeTodayTrue2": Tuple{
    expression: Today() same day or before Today() + 1 days,
    output: true
  },
  "DateTimeSameOrBeforeTodayFalse": Tuple{
    expression: Today() + 1 years same day or before Today(),
    output: false
  },
  "DateTimeAddTodayTrue": Tuple{
    expression: Today() + 1 days > Today(),
    output: true
  },
  "Issue34B": Tuple{
    expression: Today(),
    output: Today()
  }
}
