library CqlTypesTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Any": Tuple{
  "AnyQuantity": Tuple{
    expression: 5.0 'g',
    output: 5.0'g'
  },
  "AnyDateTime": Tuple{
    expression: DateTime(2012, 4, 4),
    output: @2012-04-04T
  },
  "AnyTime": Tuple{
    expression: @T09:00:00.000,
    output: @T09:00:00.000
  },
  "AnyInterval": Tuple{
    expression: Interval[2, 7],
    output: Interval[2, 7]
  },
  "AnyList": Tuple{
    expression: {1, 2, 3},
    output: {1, 2, 3}
  },
  "AnyTuple": Tuple{
    expression: Tuple { id: 5, name: 'Chris'},
    output: Tuple { id: 5, name: 'Chris'}
  },
  "AnyString": Tuple{
    expression: Tuple { id: 5, name: 'Chris'}.name,
    output: 'Chris'
  }
}

define "DateTime": Tuple{
  "DateTimeNull": Tuple{
    skipped: 'Should DateTime(null) really evaluate to null?'
    /*
    expression: DateTime(null),
    output: null
    */  },
  "DateTimeUpperBoundExcept": Tuple{
    expression: DateTime(10000, 12, 31, 23, 59, 59, 999),
    invalid: true
  },
  "DateTimeLowerBoundExcept": Tuple{
    expression: DateTime(0000, 1, 1, 0, 0, 0, 0),
    invalid: true
  },
  "DateTimeProper": Tuple{
    expression: DateTime(2016, 7, 7, 6, 25, 33, 910),
    output: @2016-07-07T06:25:33.910
  },
  "DateTimeIncomplete": Tuple{
    expression: DateTime(2015, 2, 10),
    output: @2015-02-10T
  },
  "DateTimeUncertain": Tuple{
    expression: days between DateTime(2015, 2, 10) and DateTime(2015, 3),
    output: Interval [ 18, 49 ]
  },
  "DateTimeMin": Tuple{
    expression: DateTime(0001, 1, 1, 0, 0, 0, 0),
    output: @0001-01-01T00:00:00.000
  },
  "DateTimeMax": Tuple{
    expression: DateTime(9999, 12, 31, 23, 59, 59, 999),
    output: @9999-12-31T23:59:59.999
  }
}

define "Quantity": Tuple{
  "QuantityTest": Tuple{
    expression: 150.2 '[lb_av]',
    output: 150.2 '[lb_av]'
  },
  "QuantityTest2": Tuple{
    expression: 2.5589 '{eskimo kisses}',
    output: 2.5589 '{eskimo kisses}'
  },
  "QuantityFractionalTooBig": Tuple{
    expression: 5.999999999 'g',
    output: 5.999999999 'g'
  }
}

define "String": Tuple{
  "StringTestEscapeQuotes": Tuple{
    expression: '\'I start with a single quote and end with a double quote\"',
    output: '\u0027I start with a single quote and end with a double quote\u0022'
  },
  "StringUnicodeTest": Tuple{
    expression: '\u0048\u0069',
    output: 'Hi'
  }
}

define "Time": Tuple{
  "TimeUpperBoundHours": Tuple{
    skipped: 'Translation Error: Invalid time input (T24:59:59.999). Use ISO 8601 time representation (hh:mm:ss.fff).'
    /*
    expression: @T24:59:59.999,
    invalid: true
    */  },
  "TimeUpperBoundMinutes": Tuple{
    skipped: 'Translation Error: Invalid time input (T23:60:59.999). Use ISO 8601 time representation (hh:mm:ss.fff).'
    /*
    expression: @T23:60:59.999,
    invalid: true
    */  },
  "TimeUpperBoundSeconds": Tuple{
    skipped: 'Translation Error: Invalid time input (T23:59:60.999). Use ISO 8601 time representation (hh:mm:ss.fff).'
    /*
    expression: @T23:59:60.999,
    invalid: true
    */  },
  "TimeUpperBoundMillis": Tuple{
    expression: @T23:59:59.10000,
    invalid: true
  },
  "TimeProper": Tuple{
    expression: @T10:25:12.863,
    output: @T10:25:12.863
  },
  "TimeAllMax": Tuple{
    expression: @T23:59:59.999,
    output: @T23:59:59.999
  },
  "TimeAllMin": Tuple{
    expression: @T00:00:00.000,
    output: @T00:00:00.000
  }
}
