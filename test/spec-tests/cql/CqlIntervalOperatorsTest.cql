library CqlIntervalOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "After": Tuple{
  "TestAfterNull": Tuple{
    skipped: 'Converts null to Interval[null,null] instead of Interval(null,null)'
    /*
    expression: (null as Integer) after Interval[1, 10],
    output: null
    */  },
  "IntegerIntervalAfterTrue": Tuple{
    expression: Interval[11, 20] after Interval[1, 10],
    output: true
  },
  "IntegerIntervalAfterFalse": Tuple{
    expression: Interval[1, 10] after Interval[11, 20],
    output: false
  },
  "IntegerIntervalPointAfterTrue": Tuple{
    expression: 12 after Interval[1, 10],
    output: true
  },
  "IntegerIntervalPointAfterFalse": Tuple{
    expression: 9 after Interval[1, 10],
    output: false
  },
  "IntegerIntervalAfterPointTrue": Tuple{
    expression: Interval[11, 20] after 5,
    output: true
  },
  "IntegerIntervalAfterPointFalse": Tuple{
    expression: Interval[11, 20] after 12,
    output: false
  },
  "DecimalIntervalAfterTrue": Tuple{
    expression: Interval[11.0, 20.0] after Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalAfterFalse": Tuple{
    expression: Interval[1.0, 10.0] after Interval[11.0, 20.0],
    output: false
  },
  "DecimalIntervalPointAfterTrue": Tuple{
    expression: 12.0 after Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalPointAfterFalse": Tuple{
    expression: 9.0 after Interval[1.0, 10.0],
    output: false
  },
  "DecimalIntervalAfterPointTrue": Tuple{
    expression: Interval[11.0, 20.0] after 5.0,
    output: true
  },
  "DecimalIntervalAfterPointFalse": Tuple{
    expression: Interval[11.0, 20.0] after 12.0,
    output: false
  },
  "QuantityIntervalAfterTrue": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] after Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalAfterFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] after Interval[11.0 'g', 20.0 'g'],
    output: false
  },
  "QuantityIntervalPointAfterTrue": Tuple{
    expression: 12.0'g' after Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalPointAfterFalse": Tuple{
    expression: 9.0'g' after Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "QuantityIntervalAfterPointTrue": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] after 5.0'g',
    output: true
  },
  "QuantityIntervalAfterPointFalse": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] after 12.0'g',
    output: false
  },
  "DateTimeAfterTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)] after DateTime(2011, 12, 31),
    output: true
  },
  "DateTimeAfterFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)] after DateTime(2012, 12, 31),
    output: false
  },
  "TimeAfterTrue": Tuple{
    expression: Interval[@T15:59:59.999, @T20:59:59.999] after @T12:59:59.999,
    output: true
  },
  "TimeAfterFalse": Tuple{
    expression: Interval[@T15:59:59.999, @T20:59:59.999] after @T17:59:59.999,
    output: false
  }
}

define "Before": Tuple{
  "TestBeforeNull": Tuple{
    skipped: 'Converts null to Interval[null,null] instead of Interval(null,null)'
    /*
    expression: (null as Integer) before Interval[1, 10],
    output: null
    */  },
  "IntegerIntervalBeforeFalse": Tuple{
    expression: Interval[11, 20] before Interval[1, 10],
    output: false
  },
  "IntegerIntervalBeforeTrue": Tuple{
    expression: Interval[1, 10] before Interval[11, 20],
    output: true
  },
  "IntegerIntervalPointBeforeTrue": Tuple{
    expression: 9 before Interval[11, 20],
    output: true
  },
  "IntegerIntervalPointBeforeFalse": Tuple{
    expression: 9 before Interval[1, 10],
    output: false
  },
  "IntegerIntervalBeforePointTrue": Tuple{
    expression: Interval[1, 10] before 11,
    output: true
  },
  "IntegerIntervalBeforePointFalse": Tuple{
    expression: Interval[1, 10] before 8,
    output: false
  },
  "DecimalIntervalBeforeFalse": Tuple{
    expression: Interval[11.0, 20.0] before Interval[1.0, 10.0],
    output: false
  },
  "DecimalIntervalBeforeTrue": Tuple{
    expression: Interval[1.0, 10.0] before Interval[11.0, 20.0],
    output: true
  },
  "DecimalIntervalPointBeforeTrue": Tuple{
    expression: 9.0 before Interval[11.0, 20.0],
    output: true
  },
  "DecimalIntervalPointBeforeFalse": Tuple{
    expression: 9.0 before Interval[1.0, 10.0],
    output: false
  },
  "DecimalIntervalBeforePointTrue": Tuple{
    expression: Interval[1.0, 10.0] before 11.0,
    output: true
  },
  "DecimalIntervalBeforePointFalse": Tuple{
    expression: Interval[1.0, 10.0] before 8.0,
    output: false
  },
  "QuantityIntervalBeforeTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] before Interval[11.0 'g', 20.0 'g'],
    output: true
  },
  "QuantityIntervalBeforeFalse": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] before Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "QuantityIntervalPointBeforeTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] before 12.0'g',
    output: true
  },
  "QuantityIntervalPointBeforeFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] before 9.0'g',
    output: false
  },
  "QuantityIntervalBeforePointTrue": Tuple{
    expression: 5.0'g' before Interval[11.0 'g', 20.0 'g'],
    output: true
  },
  "QuantityIntervalBeforePointFalse": Tuple{
    expression: 12.0'g' before Interval[11.0 'g', 20.0 'g'],
    output: false
  },
  "DateTimeBeforeTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)] before DateTime(2012, 2, 27),
    output: true
  },
  "DateTimeBeforeFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)] before DateTime(2011, 12, 31),
    output: false
  },
  "TimeBeforeTrue": Tuple{
    expression: Interval[@T15:59:59.999, @T20:59:59.999] before @T22:59:59.999,
    output: true
  },
  "TimeBeforeFalse": Tuple{
    expression: Interval[@T15:59:59.999, @T20:59:59.999] before @T10:59:59.999,
    output: false
  }
}

define "Collapse": Tuple{
  "TestCollapseNull": Tuple{
    skipped: 'Wrong answer (Interval(null, null) vs null)'
    /*
    expression: collapse {Interval(null, null)},
    output: null
    */  },
  "IntegerIntervalCollapse": Tuple{
    expression: collapse { Interval[1,5], Interval[3,7], Interval[12,19], Interval[7,10] },
    output: {Interval [ 1, 10 ], Interval [ 12, 19 ]}
  },
  "IntegerIntervalCollapse2": Tuple{
    expression: collapse { Interval[1,2], Interval[3,7], Interval[10,19], Interval[7,10] },
    output: {Interval [ 1, 19 ]}
  },
  "IntegerIntervalCollapse3": Tuple{
    expression: collapse { Interval[4,6], Interval[7,8] },
    output: {Interval [ 4, 8 ]}
  },
  "DecimalIntervalCollapse": Tuple{
    expression: collapse { Interval[1.0,5.0], Interval[3.0,7.0], Interval[12.0,19.0], Interval[7.0,10.0] },
    output: {Interval [ 1.0, 10.0 ], Interval [ 12.0, 19.0 ]}
  },
  "DecimalIntervalCollapse2": Tuple{
    expression: collapse { Interval[4.0,6.0], Interval[6.00000001,8.0] },
    output: {Interval [ 4.0, 8.0 ]}
  },
  "QuantityIntervalCollapse": Tuple{
    expression: collapse { Interval[1.0 'g',5.0 'g'], Interval[3.0 'g',7.0 'g'], Interval[12.0 'g',19.0 'g'], Interval[7.0 'g',10.0 'g'] },
    output: {Interval [ 1.0 'g', 10.0 'g' ], Interval [ 12.0 'g', 19.0 'g' ]}
  },
  "DateTimeCollapse": Tuple{
    expression: collapse { Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)], Interval[DateTime(2012, 1, 10), DateTime(2012, 1, 25)], Interval[DateTime(2012, 5, 10), DateTime(2012, 5, 25)], Interval[DateTime(2012, 5, 20), DateTime(2012, 5, 30)] },
    output: {Interval [ @2012-01-01T, @2012-01-25T ], Interval [ @2012-05-10T, @2012-05-30T ]}
  },
  "DateTimeCollapse2": Tuple{
    expression: collapse { Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)], Interval[DateTime(2012, 1, 16), DateTime(2012, 5, 25)] },
    output: {Interval [ @2012-01-01T, @2012-05-25T ]}
  },
  "TimeCollapse": Tuple{
    expression: collapse { Interval[@T01:59:59.999, @T10:59:59.999], Interval[@T08:59:59.999, @T15:59:59.999], Interval[@T17:59:59.999, @T20:59:59.999], Interval[@T18:59:59.999, @T22:59:59.999] },
    output: {Interval [ @T01:59:59.999, @T15:59:59.999 ], Interval [ @T17:59:59.999, @T22:59:59.999 ]}
  },
  "TimeCollapse2": Tuple{
    expression: collapse { Interval[@T01:59:59.999, @T10:59:59.999], Interval[@T11:00:00.000, @T15:59:59.999] },
    output: {Interval [ @T01:59:59.999, @T15:59:59.999 ]}
  }
}

define "Expand": Tuple{
  "ExpandPerDay": Tuple{
    expression: expand { Interval[@2018-01-01, @2018-01-04] } per day,
    output: { Interval[@2018-01-01, @2018-01-01], Interval[@2018-01-02, @2018-01-02], Interval[@2018-01-03, @2018-01-03], Interval[@2018-01-04, @2018-01-04] }
  },
  "ExpandPer2Days": Tuple{
    expression: expand { Interval[@2018-01-01, @2018-01-04] } per 2 days,
    output: { Interval[@2018-01-01, @2018-01-02], Interval[@2018-01-03, @2018-01-04] }
  },
  "ExpandPerHour": Tuple{
    expression: expand { Interval[@T10:00, @T12:30] } per hour,
    output: { Interval[@T10, @T10], Interval[@T11, @T11], Interval[@T12, @T12] }
  },
  "ExpandPer1": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Expand with signature (list<interval<System.Decimal>>,System.Integer).'
    /*
    expression: expand { Interval[10.0, 12.5] } per 1,
    output: { Interval[10, 10], Interval[11, 11], Interval[12, 12] }
    */  },
  "ExpandPerMinute": Tuple{
    expression: expand { Interval[@T10, @T10] } per minute,
    output: { }
  },
  "ExpandPer0D1": Tuple{
    skipped: 'Translation Error: Could not resolve call to operator Expand with signature (list<interval<System.Integer>>,System.Decimal).'
    /*
    expression: expand { Interval[10, 10] } per 0.1,
    output: { Interval[10.0, 10.0], Interval[10.1, 10.1], Interval[10.2, 10.2], Interval[10.3, 10.3], Interval[10.4, 10.4], Interval[10.5, 10.5], Interval[10.6, 10.6], Interval[10.7, 10.7], Interval[10.8, 10.8], Interval[10.9, 10.9] }
    */  },
  "ExpandInterval": Tuple{
    expression: expand Interval[1, 10],
    output: { Interval[1, 1], Interval[2, 2], Interval[3, 3], Interval[4, 4], Interval[5, 5], Interval[6, 6], Interval[7, 7], Interval[8, 8], Interval[9, 9], Interval[10, 10] }
  },
  "ExpandIntervalPer2": Tuple{
    expression: expand Interval[1, 10] per 2,
    output: { Interval[1, 2], Interval[3, 4], Interval[5, 6], Interval[7, 8], Interval[9, 10] }
  }
}

define "Contains": Tuple{
  "TestContainsNull": Tuple{
    expression: Interval[1, 10] contains null,
    output: null
  },
  "TestNullElement1": Tuple{
    expression: null contains 5,
    output: false
  },
  "TestNullElement2": Tuple{
    expression: Interval[null, 5] contains 10,
    output: false
  },
  "IntegerIntervalContainsTrue": Tuple{
    expression: Interval[1, 10] contains 5,
    output: true
  },
  "IntegerIntervalContainsFalse": Tuple{
    expression: Interval[1, 10] contains 25,
    output: false
  },
  "DecimalIntervalContainsTrue": Tuple{
    expression: Interval[1.0, 10.0] contains 8.0,
    output: true
  },
  "DecimalIntervalContainsFalse": Tuple{
    expression: Interval[1.0, 10.0] contains 255.0,
    output: false
  },
  "QuantityIntervalContainsTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] contains 2.0 'g',
    output: true
  },
  "QuantityIntervalContainsFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] contains 100.0 'g',
    output: false
  },
  "DateTimeContainsTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)] contains DateTime(2012, 1, 10),
    output: true
  },
  "DateTimeContainsFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)] contains DateTime(2012, 1, 16),
    output: false
  },
  "TimeContainsTrue": Tuple{
    expression: Interval[@T01:59:59.999, @T10:59:59.999] contains @T05:59:59.999,
    output: true
  },
  "TimeContainsFalse": Tuple{
    expression: Interval[@T01:59:59.999, @T10:59:59.999] contains @T15:59:59.999,
    output: false
  }
}

define "End": Tuple{
  "IntegerIntervalEnd": Tuple{
    expression: end of Interval[1, 10],
    output: 10
  },
  "DecimalIntervalEnd": Tuple{
    expression: end of Interval[1.0, 10.0],
    output: 10.0
  },
  "QuantityIntervalEnd": Tuple{
    expression: end of Interval[1.0 'g', 10.0 'g'],
    output: 10.0'g'
  },
  "DateTimeIntervalEnd": Tuple{
    expression: end of Interval[@2016-05-01T00:00:00.000, @2016-05-02T00:00:00.000],
    output: @2016-05-02T00:00:00.000
  },
  "TimeIntervalEnd": Tuple{
    expression: end of Interval[@T00:00:00.000, @T23:59:59.599],
    output: @T23:59:59.599
  }
}

define "Ends": Tuple{
  "TestEndsNull": Tuple{
    expression: Interval[1, 10] ends Interval(null, null),
    output: null
  },
  "IntegerIntervalEndsTrue": Tuple{
    expression: Interval[4, 10] ends Interval[1, 10],
    output: true
  },
  "IntegerIntervalEndsFalse": Tuple{
    expression: Interval[44, 50] ends Interval[1, 10],
    output: false
  },
  "DecimalIntervalEndsTrue": Tuple{
    expression: Interval[4.0, 10.0] ends Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalEndsFalse": Tuple{
    expression: Interval[11.0, 20.0] ends Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalEndsTrue": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'] ends Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalEndsFalse": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] ends Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeEndsTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)] ends Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 15)],
    output: true
  },
  "DateTimeEndsFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)] ends Interval[DateTime(2012, 1, 1), DateTime(2012, 1, 16)],
    output: false
  },
  "TimeEndsTrue": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] ends Interval[@T01:59:59.999, @T10:59:59.999],
    output: true
  },
  "TimeEndsFalse": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] ends Interval[@T01:59:59.999, @T11:59:59.999],
    output: false
  }
}

define "Equal": Tuple{
  "TestEqualNull": Tuple{
    expression: Interval[1, 10] = Interval(null, null),
    output: null
  },
  "IntegerIntervalEqualTrue": Tuple{
    expression: Interval[1, 10] = Interval[1, 10],
    output: true
  },
  "IntegerIntervalEqualFalse": Tuple{
    expression: Interval[1, 10] = Interval[11, 20],
    output: false
  },
  "DecimalIntervalEqualTrue": Tuple{
    expression: Interval[1.0, 10.0] = Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalEqualFalse": Tuple{
    expression: Interval[1.0, 10.0] = Interval[11.0, 20.0],
    output: false
  },
  "QuantityIntervalEqualTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] = Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalEqualFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] = Interval[11.0 'g', 20.0 'g'],
    output: false
  },
  "DateTimeEqualTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 5, 0, 0, 0, 0), DateTime(2012, 1, 15, 0, 0, 0, 0)] = Interval[DateTime(2012, 1, 5, 0, 0, 0, 0), DateTime(2012, 1, 15, 0, 0, 0, 0)],
    output: true
  },
  "DateTimeEqualFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 5, 0, 0, 0, 0), DateTime(2012, 1, 15, 0, 0, 0, 0)] = Interval[DateTime(2012, 1, 5, 0, 0, 0, 0), DateTime(2012, 1, 16, 0, 0, 0, 0)],
    output: false
  },
  "TimeEqualTrue": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] = Interval[@T05:59:59.999, @T10:59:59.999],
    output: true
  },
  "TimeEqualFalse": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] = Interval[@T05:59:59.999, @T10:58:59.999],
    output: false
  }
}

define "Except": Tuple{
  "NullInterval": Tuple{
    skipped: 'Wrong answer (Interval(null, null) vs null)'
    /*
    expression: Interval[null, null],
    output: null
    */  },
  "TestExceptNull": Tuple{
    expression: Interval[null, null] except Interval[null, null],
    output: null
  },
  "IntegerIntervalExcept1to3": Tuple{
    expression: Interval[1, 10] except Interval[4, 10],
    output: Interval [ 1, 3 ]
  },
  "IntegerIntervalExceptNull": Tuple{
    expression: Interval[1, 10] except Interval[3, 7],
    output: null
  },
  "DecimalIntervalExcept1to3": Tuple{
    skipped: '(Sort of) wrong answer (is open 4 end boundary 3 or 3.99999999?)'
    /*
    expression: Interval[1.0, 10.0] except Interval[4.0, 10.0],
    output: Interval [ 1.0, 3.99999999 ]
    */  },
  "DecimalIntervalExceptNull": Tuple{
    expression: Interval[1.0, 10.0] except Interval[3.0, 7.0],
    output: null
  },
  "QuantityIntervalExcept1to4": Tuple{
    skipped: '(Sort of) wrong answer (is open 5 end boundary 4 or 4.99999999?)'
    /*
    expression: Interval[1.0 'g', 10.0 'g'] except Interval[5.0 'g', 10.0 'g'],
    output: Interval [ 1.0 'g', 4.99999999 'g' ]
    */  },
  "Except12": Tuple{
    expression: Interval[1, 4] except Interval[3, 6],
    output: Interval [ 1, 2 ]
  },
  "ExceptDateTimeInterval": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)] except Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 15)],
    output: Interval [ @2012-01-05T, @2012-01-06T ]
  },
  "ExceptDateTime2": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 16)] except Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 12)],
    output: Interval [ @2012-01-13T, @2012-01-16T ]
  },
  "ExceptTimeInterval": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] except Interval[@T08:59:59.999, @T10:59:59.999],
    output: Interval [ @T05:59:59.999, @T08:59:59.998 ]
  },
  "ExceptTime2": Tuple{
    expression: Interval[@T08:59:59.999, @T11:59:59.999] except Interval[@T05:59:59.999, @T10:59:59.999],
    output: Interval [ @T11:00:00.000, @T11:59:59.999 ]
  }
}

define "In": Tuple{
  "TestInNullBoundaries": Tuple{
    expression: 5 in Interval[null, null],
    output: true
  },
  "IntegerIntervalInTrue": Tuple{
    expression: 5 in Interval[1, 10],
    output: true
  },
  "IntegerIntervalInFalse": Tuple{
    expression: 500 in Interval[1, 10],
    output: false
  },
  "DecimalIntervalInTrue": Tuple{
    expression: 9.0 in Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalInFalse": Tuple{
    expression: -2.0 in Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalInTrue": Tuple{
    expression: 1.0 'g' in Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalInFalse": Tuple{
    expression: 55.0 'g' in Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeInTrue": Tuple{
    expression: DateTime(2012, 1, 7) in Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)],
    output: true
  },
  "DateTimeInFalse": Tuple{
    expression: DateTime(2012, 1, 17) in Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)],
    output: false
  },
  "DateTimeInNullTrue": Tuple{
    expression: DateTime(2012, 1, 7) in Interval[DateTime(2012, 1, 5), null],
    output: true
  },
  "TimeInTrue": Tuple{
    expression: @T07:59:59.999 in Interval[@T05:59:59.999, @T10:59:59.999],
    output: true
  },
  "TimeInFalse": Tuple{
    expression: @T17:59:59.999 in Interval[@T05:59:59.999, @T10:59:59.999],
    output: false
  },
  "TimeInNull": Tuple{
    expression: null in Interval[@T05:59:59.999, @T10:59:59.999],
    output: null
  },
  "TestPeriod1": Tuple{
    expression: Interval[@2017-12-20T11:00:00, @2017-12-21T21:00:00],
    output: Interval [ @2017-12-20T11:00:00, @2017-12-21T21:00:00 ]
  },
  "TestPeriod2": Tuple{
    expression: Interval[@2017-12-20T10:30:00, @2017-12-20T12:00:00],
    output: Interval [ @2017-12-20T10:30:00, @2017-12-20T12:00:00 ]
  },
  "Issue32Interval": Tuple{
    expression: Interval[@2017-12-20T10:30:00, @2017-12-20T12:00:00]
				starts 1 day or less on or after day of start of
				Interval[@2017-12-20T11:00:00, @2017-12-21T21:00:00],
    output: true
  }
}

define "Includes": Tuple{
  "TestIncludesNull": Tuple{
    expression: Interval[1, 10] includes null,
    output: null
  },
  "IntegerIntervalIncludesTrue": Tuple{
    expression: Interval[1, 10] includes Interval[4, 10],
    output: true
  },
  "IntegerIntervalIncludesFalse": Tuple{
    expression: Interval[1, 10] includes Interval[44, 50],
    output: false
  },
  "DecimalIntervalIncludesTrue": Tuple{
    expression: Interval[1.0, 10.0] includes Interval[4.0, 10.0],
    output: true
  },
  "DecimalIntervalIncludesFalse": Tuple{
    expression: Interval[1.0, 10.0] includes Interval[11.0, 20.0],
    output: false
  },
  "QuantityIntervalIncludesTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] includes Interval[5.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalIncludesFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] includes Interval[11.0 'g', 20.0 'g'],
    output: false
  },
  "DateTimeIncludesTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)] includes Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)],
    output: true
  },
  "DateTimeIncludesFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)] includes Interval[DateTime(2012, 1, 4), DateTime(2012, 1, 14)],
    output: false
  },
  "TimeIncludesTrue": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] includes Interval[@T06:59:59.999, @T09:59:59.999],
    output: true
  },
  "TimeIncludesFalse": Tuple{
    expression: Interval[@T05:59:59.999, @T10:59:59.999] includes Interval[@T04:59:59.999, @T09:59:59.999],
    output: false
  }
}

define "Included In": Tuple{
  "TestIncludedInNull": Tuple{
    expression: null included in Interval[1, 10],
    output: null
  },
  "IntegerIntervalIncludedInTrue": Tuple{
    expression: Interval[4, 10] included in Interval[1, 10],
    output: true
  },
  "IntegerIntervalIncludedInFalse": Tuple{
    expression: Interval[44, 50] included in Interval[1, 10],
    output: false
  },
  "DecimalIntervalIncludedInTrue": Tuple{
    expression: Interval[4.0, 10.0] included in Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalIncludedInFalse": Tuple{
    expression: Interval[11.0, 20.0] included in Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalIncludedInTrue": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'] included in Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalIncludedInFalse": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] included in Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeIncludedInTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] included in Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)],
    output: true
  },
  "DateTimeIncludedInFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 4), DateTime(2012, 1, 14)] included in Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 15)],
    output: false
  },
  "TimeIncludedInTrue": Tuple{
    expression: Interval[@T06:59:59.999, @T09:59:59.999] included in Interval[@T05:59:59.999, @T10:59:59.999],
    output: true
  },
  "TimeIncludedInFalse": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] included in Interval[@T05:59:59.999, @T10:59:59.999],
    output: false
  },
  "DateTimeIncludedInNull": Tuple{
    expression: Interval [@2017-09-01T00:00:00, @2017-09-01T00:00:00] included in Interval [@2017-09-01T00:00:00.000, @2017-12-30T23:59:59.999],
    output: null
  },
  "DateTimeIncludedInPrecisionTrue": Tuple{
    expression: Interval [@2017-09-01T00:00:00, @2017-09-01T00:00:00] included in day of Interval [@2017-09-01T00:00:00.000, @2017-12-30T23:59:59.999],
    output: true
  },
  "DateTimeIncludedInPrecisionNull": Tuple{
    expression: Interval [@2017-09-01T00:00:00, @2017-09-01T00:00:00] included in millisecond of Interval [@2017-09-01T00:00:00.000, @2017-12-30T23:59:59.999],
    output: null
  }
}

define "Intersect": Tuple{
  "TestIntersectNull": Tuple{
    skipped: 'Answer seems incorrect, but correct answer is unrepresentable'
    /*
    expression: Interval[1, 10] intersect Interval[5, null),
    output: null
    */  },
  "IntegerIntervalIntersectTest4to10": Tuple{
    expression: Interval[1, 10] intersect Interval[4, 10],
    output: Interval [ 4, 10 ]
  },
  "IntegerIntervalIntersectTestNull": Tuple{
    expression: Interval[1, 10] intersect Interval[11, 20],
    output: null
  },
  "DecimalIntervalIntersectTest4to10": Tuple{
    expression: Interval[1.0, 10.0] intersect Interval[4.0, 10.0],
    output: Interval [ 4.0, 10.0 ]
  },
  "DecimalIntervalIntersectTestNull": Tuple{
    expression: Interval[1.0, 10.0] intersect Interval[11.0, 20.0],
    output: null
  },
  "QuantityIntervalIntersectTest5to10": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] intersect Interval[5.0 'g', 10.0 'g'],
    output: Interval [ 5.0 'g', 10.0 'g' ]
  },
  "QuantityIntervalIntersectTestNull": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] intersect Interval[11.0 'g', 20.0 'g'],
    output: null
  },
  "DateTimeIntersect": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] intersect Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 10)],
    output: Interval [ @2012-01-07T, @2012-01-10T ]
  },
  "TimeIntersect": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] intersect Interval[@T04:59:59.999, @T06:59:59.999],
    output: Interval [ @T04:59:59.999, @T06:59:59.999 ]
  }
}

define "Equivalent": Tuple{
  "IntegerIntervalEquivalentTrue": Tuple{
    expression: Interval[1, 10] ~ Interval[1, 10],
    output: true
  },
  "IntegerIntervalEquivalentFalse": Tuple{
    expression: Interval[44, 50] ~ Interval[1, 10],
    output: false
  },
  "DecimalIntervalEquivalentTrue": Tuple{
    expression: Interval[1.0, 10.0] ~ Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalEquivalentFalse": Tuple{
    expression: Interval[11.0, 20.0] ~ Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalEquivalentTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] ~ Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalEquivalentFalse": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'] ~ Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeEquivalentTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] ~ Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)],
    output: true
  },
  "DateTimeEquivalentFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] ~ Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 15)],
    output: false
  },
  "TimeEquivalentTrue": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] ~ Interval[@T04:59:59.999, @T09:59:59.999],
    output: true
  },
  "TimeEquivalentFalse": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] ~ Interval[@T04:58:59.999, @T09:59:59.999],
    output: false
  }
}

define "Meets": Tuple{
  "TestMeetsNull": Tuple{
    expression: Interval(null, 5] meets Interval(null, 15),
    output: null
  },
  "IntegerIntervalMeetsTrue": Tuple{
    expression: Interval[1, 10] meets Interval[11, 20],
    output: true
  },
  "IntegerIntervalMeetsFalse": Tuple{
    expression: Interval[1, 10] meets Interval[44, 50],
    output: false
  },
  "DecimalIntervalMeetsTrue": Tuple{
    expression: Interval[3.01, 5.00000001] meets Interval[5.00000002, 8.50],
    output: true
  },
  "DecimalIntervalMeetsFalse": Tuple{
    expression: Interval[3.01, 5.00000001] meets Interval[5.5, 8.50],
    output: false
  },
  "QuantityIntervalMeetsTrue": Tuple{
    expression: Interval[3.01 'g', 5.00000001 'g'] meets Interval[5.00000002 'g', 8.50 'g'],
    output: true
  },
  "QuantityIntervalMeetsFalse": Tuple{
    expression: Interval[3.01 'g', 5.00000001 'g'] meets Interval[5.5 'g', 8.50 'g'],
    output: false
  },
  "DateTimeMeetsTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] meets Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 25)],
    output: true
  },
  "DateTimeMeetsFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] meets Interval[DateTime(2012, 1, 20), DateTime(2012, 1, 25)],
    output: false
  },
  "TimeMeetsTrue": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] meets Interval[@T10:00:00.000, @T19:59:59.999],
    output: true
  },
  "TimeMeetsFalse": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] meets Interval[@T10:12:00.000, @T19:59:59.999],
    output: false
  }
}

define "MeetsBefore": Tuple{
  "TestMeetsBeforeNull": Tuple{
    expression: Interval(null, 5] meets before Interval(null, 25],
    output: null
  },
  "IntegerIntervalMeetsBeforeTrue": Tuple{
    expression: Interval[1, 10] meets before Interval[11, 20],
    output: true
  },
  "IntegerIntervalMeetsBeforeFalse": Tuple{
    expression: Interval[1, 10] meets before Interval[44, 50],
    output: false
  },
  "DecimalIntervalMeetsBeforeTrue": Tuple{
    expression: Interval[3.50000001, 5.00000011] meets before Interval[5.00000012, 8.50],
    output: true
  },
  "DecimalIntervalMeetsBeforeFalse": Tuple{
    expression: Interval[8.01, 15.00000001] meets before Interval[15.00000000, 18.50],
    output: false
  },
  "QuantityIntervalMeetsBeforeTrue": Tuple{
    expression: Interval[3.50000001 'g', 5.00000011 'g'] meets before Interval[5.00000012 'g', 8.50 'g'],
    output: true
  },
  "QuantityIntervalMeetsBeforeFalse": Tuple{
    expression: Interval[8.01 'g', 15.00000001 'g'] meets before Interval[15.00000000 'g', 18.50 'g'],
    output: false
  },
  "DateTimeMeetsBeforeTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] meets Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 25)],
    output: true
  },
  "DateTimeMeetsBeforeFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)] meets Interval[DateTime(2012, 1, 20), DateTime(2012, 1, 25)],
    output: false
  },
  "TimeMeetsBeforeTrue": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] meets Interval[@T10:00:00.000, @T19:59:59.999],
    output: true
  },
  "TimeMeetsBeforeFalse": Tuple{
    expression: Interval[@T04:59:59.999, @T09:59:59.999] meets Interval[@T10:12:00.000, @T19:59:59.999],
    output: false
  }
}

define "MeetsAfter": Tuple{
  "TestMeetsAfterNull": Tuple{
    skipped: 'Answer seems incorrect, but requires (too?) "smart" processing'
    /*
    expression: Interval(null, 5] meets after Interval[11, null),
    output: null
    */  },
  "IntegerIntervalMeetsAfterTrue": Tuple{
    expression: Interval[11, 20] meets after Interval[1, 10],
    output: true
  },
  "IntegerIntervalMeetsAfterFalse": Tuple{
    expression: Interval[44, 50] meets after Interval[1, 10],
    output: false
  },
  "DecimalIntervalMeetsAfterTrue": Tuple{
    expression: Interval[55.00000123, 128.032156] meets after Interval[12.00258, 55.00000122],
    output: true
  },
  "DecimalIntervalMeetsAfterFalse": Tuple{
    expression: Interval[55.00000124, 150.222222] meets after Interval[12.00258, 55.00000122],
    output: false
  },
  "QuantityIntervalMeetsAfterTrue": Tuple{
    expression: Interval[55.00000123 'g', 128.032156 'g'] meets after Interval[12.00258 'g', 55.00000122 'g'],
    output: true
  },
  "QuantityIntervalMeetsAfterFalse": Tuple{
    expression: Interval[55.00000124 'g', 150.222222 'g'] meets after Interval[12.00258 'g', 55.00000122 'g'],
    output: false
  },
  "DateTimeMeetsAfterTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 25)] meets Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)],
    output: true
  },
  "DateTimeMeetsAfterFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 20), DateTime(2012, 1, 25)] meets Interval[DateTime(2012, 1, 7), DateTime(2012, 1, 14)],
    output: false
  },
  "TimeMeetsAfterTrue": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] meets Interval[@T04:59:59.999, @T09:59:59.999],
    output: true
  },
  "TimeMeetsAfterFalse": Tuple{
    expression: Interval[@T10:12:00.000, @T19:59:59.999] meets Interval[@T04:59:59.999, @T09:59:59.999],
    output: false
  }
}

define "NotEqual": Tuple{
  "IntegerIntervalNotEqualTrue": Tuple{
    expression: Interval[1, 10] != Interval[11, 20],
    output: true
  },
  "IntegerIntervalNotEqualFalse": Tuple{
    expression: Interval[1, 10] != Interval[1, 10],
    output: false
  },
  "DecimalIntervalNotEqualTrue": Tuple{
    expression: Interval[1.0, 10.0] != Interval[11.0, 20.0],
    output: true
  },
  "DecimalIntervalNotEqualFalse": Tuple{
    expression: Interval[1.0, 10.0] != Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalNotEqualTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] != Interval[11.0 'g', 20.0 'g'],
    output: true
  },
  "QuantityIntervalNotEqualFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] != Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeNotEqualTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 15, 0, 0, 0, 0), DateTime(2012, 1, 25, 0, 0, 0, 0)] != Interval[DateTime(2012, 1, 15, 0, 0, 0, 0), DateTime(2012, 1, 25, 0, 0, 0, 22)],
    output: true
  },
  "DateTimeNotEqualFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 15, 0, 0, 0, 0), DateTime(2012, 1, 25, 0, 0, 0, 0)] != Interval[DateTime(2012, 1, 15, 0, 0, 0, 0), DateTime(2012, 1, 25, 0, 0, 0, 0)],
    output: false
  },
  "TimeNotEqualTrue": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] != Interval[@T10:10:00.000, @T19:59:59.999],
    output: true
  },
  "TimeNotEqualFalse": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] != Interval[@T10:00:00.000, @T19:59:59.999],
    output: false
  }
}

define "OnOrAfter": Tuple{
  "TestOnOrAfterNull": Tuple{
    expression: Interval[@2012-12-01, @2013-12-01] on or after (null as Interval<Date>),
    output: null
  },
  "TestOnOrAfterDateTrue": Tuple{
    expression: Interval[@2012-12-01, @2013-12-01] on or after month of @2012-11-15,
    output: true
  },
  "TestOnOrAfterDateFalse": Tuple{
    expression: @2012-11-15 on or after month of Interval[@2012-12-01, @2013-12-01],
    output: false
  },
  "TestOnOrAfterTimeTrue": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] on or after hour of Interval[@T08:00:00.000, @T09:59:59.999],
    output: true
  },
  "TestOnOrAfterTimeFalse": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] on or after hour of Interval[@T08:00:00.000, @T11:59:59.999],
    output: false
  },
  "TestOnOrAfterIntegerTrue": Tuple{
    expression: Interval[6, 10] on or after 6,
    output: true
  },
  "TestOnOrAfterDecimalFalse": Tuple{
    expression: 2.5 on or after Interval[1.666, 2.50000001],
    output: false
  },
  "TestOnOrAfterQuantityTrue": Tuple{
    expression: 2.5 'mg' on or after Interval[1.666 'mg', 2.50000000 'mg'],
    output: true
  }
}

define "OnOrBefore": Tuple{
  "TestOnOrBeforeNull": Tuple{
    expression: Interval[@2012-12-01, @2013-12-01] on or before (null as Interval<Date>),
    output: null
  },
  "TestOnOrBeforeDateTrue": Tuple{
    expression: Interval[@2012-10-01, @2012-11-01] on or before month of @2012-11-15,
    output: true
  },
  "TestOnOrBeforeDateFalse": Tuple{
    expression: @2012-11-15 on or before month of Interval[@2012-10-01, @2013-12-01],
    output: false
  },
  "TestOnOrBeforeTimeTrue": Tuple{
    expression: Interval[@T05:00:00.000, @T07:59:59.999] on or before hour of Interval[@T08:00:00.000, @T09:59:59.999],
    output: true
  },
  "TestOnOrBeforeTimeFalse": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] on or before hour of Interval[@T08:00:00.000, @T11:59:59.999],
    output: false
  },
  "TestOnOrBeforeIntegerTrue": Tuple{
    expression: Interval[4, 6] on or before 6,
    output: true
  },
  "TestOnOrBeforeDecimalFalse": Tuple{
    expression: 1.6667 on or before Interval[1.666, 2.50000001],
    output: false
  },
  "TestOnOrBeforeQuantityTrue": Tuple{
    expression: 1.666 'mg' on or before Interval[1.666 'mg', 2.50000000 'mg'],
    output: true
  }
}

define "Overlaps": Tuple{
  "TestOverlapsNull": Tuple{
    expression: Interval[null, null] overlaps Interval[1, 10],
    output: null
  },
  "IntegerIntervalOverlapsTrue": Tuple{
    expression: Interval[1, 10] overlaps Interval[4, 10],
    output: true
  },
  "IntegerIntervalOverlapsFalse": Tuple{
    expression: Interval[1, 10] overlaps Interval[11, 20],
    output: false
  },
  "DecimalIntervalOverlapsTrue": Tuple{
    expression: Interval[1.0, 10.0] overlaps Interval[4.0, 10.0],
    output: true
  },
  "DecimalIntervalOverlapsFalse": Tuple{
    expression: Interval[1.0, 10.0] overlaps Interval[11.0, 20.0],
    output: false
  },
  "QuantityIntervalOverlapsTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] overlaps Interval[5.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalOverlapsFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] overlaps Interval[11.0 'g', 20.0 'g'],
    output: false
  },
  "DateTimeOverlapsTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] overlaps Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)],
    output: true
  },
  "DateTimeOverlapsFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] overlaps Interval[DateTime(2012, 1, 26), DateTime(2012, 1, 28)],
    output: false
  },
  "TimeOverlapsTrue": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] overlaps Interval[@T12:00:00.000, @T21:59:59.999],
    output: true
  },
  "TimeOverlapsFalse": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] overlaps Interval[@T20:00:00.000, @T21:59:59.999],
    output: false
  }
}

define "OverlapsBefore": Tuple{
  "TestOverlapsBeforeNull": Tuple{
    expression: Interval[null, null] overlaps before Interval[1, 10],
    output: null
  },
  "IntegerIntervalOverlapsBeforeTrue": Tuple{
    expression: Interval[1, 10] overlaps before Interval[4, 10],
    output: true
  },
  "IntegerIntervalOverlapsBeforeFalse": Tuple{
    expression: Interval[4, 10] overlaps before Interval[1, 10],
    output: false
  },
  "DecimalIntervalOverlapsBeforeTrue": Tuple{
    expression: Interval[1.0, 10.0] overlaps before Interval[4.0, 10.0],
    output: true
  },
  "DecimalIntervalOverlapsBeforeFalse": Tuple{
    expression: Interval[4.0, 10.0] overlaps before Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalOverlapsBeforeTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] overlaps before Interval[5.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalOverlapsBeforeFalse": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'] overlaps before Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeOverlapsBeforeTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] overlaps Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)],
    output: true
  },
  "DateTimeOverlapsBeforeFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] overlaps Interval[DateTime(2012, 1, 26), DateTime(2012, 1, 28)],
    output: false
  },
  "TimeOverlapsBeforeTrue": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] overlaps Interval[@T12:00:00.000, @T21:59:59.999],
    output: true
  },
  "TimeOverlapsBeforeFalse": Tuple{
    expression: Interval[@T10:00:00.000, @T19:59:59.999] overlaps Interval[@T20:00:00.000, @T21:59:59.999],
    output: false
  }
}

define "OverlapsAfter": Tuple{
  "TestOverlapsAfterNull": Tuple{
    expression: Interval[null, null] overlaps after Interval[1, 10],
    output: null
  },
  "IntegerIntervalOverlapsAfterTrue": Tuple{
    expression: Interval[4, 15] overlaps after Interval[1, 10],
    output: true
  },
  "IntegerIntervalOverlapsAfterFalse": Tuple{
    expression: Interval[4, 10] overlaps after Interval[1, 10],
    output: false
  },
  "DecimalIntervalOverlapsAfterTrue": Tuple{
    expression: Interval[4.0, 15.0] overlaps after Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalOverlapsAfterFalse": Tuple{
    expression: Interval[4.0, 10.0] overlaps after Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalOverlapsAfterTrue": Tuple{
    expression: Interval[5.0 'g', 15.0 'g'] overlaps after Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalOverlapsAfterFalse": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'] overlaps after Interval[1.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeOverlapsAfterTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)] overlaps Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)],
    output: true
  },
  "DateTimeOverlapsAfterFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 26), DateTime(2012, 1, 28)] overlaps Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)],
    output: false
  },
  "TimeOverlapsAfterTrue": Tuple{
    expression: Interval[@T12:00:00.000, @T21:59:59.999] overlaps Interval[@T10:00:00.000, @T19:59:59.999],
    output: true
  },
  "TimeOverlapsAfterFalse": Tuple{
    expression: Interval[@T20:00:00.000, @T21:59:59.999] overlaps Interval[@T10:00:00.000, @T19:59:59.999],
    output: false
  }
}

define "PointFrom": Tuple{
  "TestPointFromNull": Tuple{
    skipped: 'PointFrom not implemented'
    /*
    expression: point from Interval[null, null],
    output: null
    */  },
  "TestPointFromInteger": Tuple{
    skipped: 'PointFrom not implemented'
    /*
    expression: point from Interval[1, 1],
    output: 1
    */  },
  "TestPointFromDecimal": Tuple{
    skipped: 'PointFrom not implemented'
    /*
    expression: point from Interval[1.0, 1.0],
    output: 1.0
    */  },
  "TestPointFromQuantity": Tuple{
    skipped: 'PointFrom not implemented'
    /*
    expression: point from Interval[1.0 'cm', 1.0 'cm'],
    output: 1.0'cm'
    */  }
}

define "ProperContains": Tuple{
  "TimeProperContainsTrue": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: Interval[@T12:00:00.000, @T21:59:59.999] properly includes @T12:00:00.001,
    output: true
    */  },
  "TimeProperContainsFalse": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: Interval[@T12:00:00.000, @T21:59:59.999] properly includes @T12:00:00.000,
    output: false
    */  },
  "TimeProperContainsNull": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: Interval[@T12:00:00.001, @T21:59:59.999] properly includes @T12:00:00,
    output: null
    */  },
  "TimeProperContainsPrecisionTrue": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: Interval[@T12:00:00.000, @T21:59:59.999] properly includes second of @T12:00:01,
    output: true
    */  },
  "TimeProperContainsPrecisionFalse": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: Interval[@T12:00:00.001, @T21:59:59.999] properly includes second of @T12:00:00,
    output: false
    */  },
  "TimeProperContainsPrecisionNull": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: Interval[@T12:00:00.001, @T21:59:59.999] properly includes millisecond of @T12:00:00,
    output: null
    */  }
}

define "ProperIn": Tuple{
  "TimeProperInTrue": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T12:00:00.001 properly included in Interval[@T12:00:00.000, @T21:59:59.999],
    output: true
    */  },
  "TimeProperInFalse": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T12:00:00.000 properly included in  Interval[@T12:00:00.000, @T21:59:59.999],
    output: false
    */  },
  "TimeProperInNull": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T12:00:00 properly included in Interval[@T12:00:00.001, @T21:59:59.999],
    output: null
    */  },
  "TimeProperInPrecisionTrue": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T12:00:01 properly included in second of Interval[@T12:00:00.000, @T21:59:59.999],
    output: true
    */  },
  "TimeProperInPrecisionFalse": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T12:00:00 properly included in second of Interval[@T12:00:00.001, @T21:59:59.999],
    output: false
    */  },
  "TimeProperInPrecisionNull": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T12:00:00 properly included in millisecond of Interval[@T12:00:00.001, @T21:59:59.999],
    output: null
    */  }
}

define "ProperlyIncludes": Tuple{
  "NullBoundariesProperlyIncludesIntegerInterval": Tuple{
    expression: Interval[null as Integer, null as Integer] properly includes Interval[1, 10],
    output: true
  },
  "IntegerIntervalProperlyIncludesTrue": Tuple{
    expression: Interval[1, 10] properly includes Interval[4, 10],
    output: true
  },
  "IntegerIntervalProperlyIncludesFalse": Tuple{
    expression: Interval[1, 10] properly includes Interval[4, 15],
    output: false
  },
  "DecimalIntervalProperlyIncludesTrue": Tuple{
    expression: Interval[1.0, 10.0] properly includes Interval[4.0, 10.0],
    output: true
  },
  "DecimalIntervalProperlyIncludesFalse": Tuple{
    expression: Interval[1.0, 10.0] properly includes Interval[4.0, 15.0],
    output: false
  },
  "QuantityIntervalProperlyIncludesTrue": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] properly includes Interval[5.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalProperlyIncludesFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] properly includes Interval[5.0 'g', 15.0 'g'],
    output: false
  },
  "DateTimeProperlyIncludesTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)] properly includes Interval[DateTime(2012, 1, 16), DateTime(2012, 1, 27)],
    output: true
  },
  "DateTimeProperlyIncludesFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)] properly includes Interval[DateTime(2012, 1, 16), DateTime(2012, 1, 29)],
    output: false
  },
  "TimeProperlyIncludesTrue": Tuple{
    expression: Interval[@T12:00:00.000, @T21:59:59.999] properly includes Interval[@T12:01:01.000, @T21:59:59.998],
    output: true
  },
  "TimeProperlyIncludesFalse": Tuple{
    expression: Interval[@T12:00:00.000, @T21:59:59.999] properly includes Interval[@T12:01:01.000, @T22:00:00.000],
    output: false
  }
}

define "ProperlyIncludedIn": Tuple{
  "IntegerIntervalProperlyIncludedInNullBoundaries": Tuple{
    expression: Interval[1, 10] properly included in Interval[null, null],
    output: true
  },
  "IntegerIntervalProperlyIncludedInTrue": Tuple{
    expression: Interval[4, 10] properly included in Interval[1, 10],
    output: true
  },
  "IntegerIntervalProperlyIncludedInFalse": Tuple{
    expression: Interval[4, 15] properly included in Interval[1, 10],
    output: false
  },
  "DecimalIntervalProperlyIncludedInTrue": Tuple{
    expression: Interval[4.0, 10.0] properly included in Interval[1.0, 10.0],
    output: true
  },
  "DecimalIntervalProperlyIncludedInFalse": Tuple{
    expression: Interval[4.0, 15.0] properly included in Interval[1.0, 10.0],
    output: false
  },
  "QuantityIntervalProperlyIncludedInTrue": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'] properly included in Interval[1.0 'g', 10.0 'g'],
    output: true
  },
  "QuantityIntervalProperlyIncludedInFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] properly included in Interval[5.0 'g', 15.0 'g'],
    output: false
  },
  "DateTimeProperlyIncludedInTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 16), DateTime(2012, 1, 27)] properly included in Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)],
    output: true
  },
  "DateTimeProperlyIncludedInFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 16), DateTime(2012, 1, 29)] properly included in Interval[DateTime(2012, 1, 15), DateTime(2012, 1, 28)],
    output: false
  },
  "TimeProperlyIncludedInTrue": Tuple{
    expression: Interval[@T12:01:01.000, @T21:59:59.998] properly included in Interval[@T12:00:00.000, @T21:59:59.999],
    output: true
  },
  "TimeProperlyIncludedInFalse": Tuple{
    expression: Interval[@T12:01:01.000, @T22:00:00.000] properly included in Interval[@T12:00:00.000, @T21:59:59.999],
    output: false
  }
}

define "Start": Tuple{
  "IntegerIntervalStart": Tuple{
    expression: start of Interval[1, 10],
    output: 1
  },
  "DecimalIntervalStart": Tuple{
    expression: start of Interval[1.0, 10.0],
    output: 1.0
  },
  "QuantityIntervalStart": Tuple{
    expression: start of Interval[1.0 'g', 10.0 'g'],
    output: 1.0'g'
  },
  "DateTimeIntervalStart": Tuple{
    expression: start of Interval[@2016-05-01T00:00:00.000, @2016-05-02T00:00:00.000],
    output: @2016-05-01T00:00:00.000
  },
  "TimeIntervalStart": Tuple{
    expression: start of Interval[@T00:00:00.000, @T23:59:59.599],
    output: @T00:00:00.000
  }
}

define "Starts": Tuple{
  "TestStartsNull": Tuple{
    expression: Interval[null, null] starts Interval[1, 10],
    output: null
  },
  "IntegerIntervalStartsTrue": Tuple{
    expression: Interval[4, 10] starts Interval[4, 15],
    output: true
  },
  "IntegerIntervalStartsFalse": Tuple{
    expression: Interval[1, 10] starts Interval[4, 10],
    output: false
  },
  "DecimalIntervalStartsTrue": Tuple{
    expression: Interval[4.0, 10.0] starts Interval[4.0, 15.0],
    output: true
  },
  "DecimalIntervalStartsFalse": Tuple{
    expression: Interval[1.0, 10.0] starts Interval[4.0, 10.0],
    output: false
  },
  "QuantityIntervalStartsTrue": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'] starts Interval[5.0 'g', 15.0 'g'],
    output: true
  },
  "QuantityIntervalStartsFalse": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] starts Interval[5.0 'g', 10.0 'g'],
    output: false
  },
  "DateTimeStartsTrue": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] starts Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 27)],
    output: true
  },
  "DateTimeStartsFalse": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] starts Interval[DateTime(2012, 1, 6), DateTime(2012, 1, 27)],
    output: false
  },
  "TimeStartsTrue": Tuple{
    expression: Interval[@T05:59:59.999, @T15:59:59.999] starts Interval[@T05:59:59.999, @T17:59:59.999],
    output: true
  },
  "TimeStartsFalse": Tuple{
    expression: Interval[@T05:59:59.999, @T15:59:59.999] starts Interval[@T04:59:59.999, @T17:59:59.999],
    output: false
  }
}

define "Union": Tuple{
  "TestUnionNull": Tuple{
    expression: Interval[null, null] union Interval[1, 10],
    output: null
  },
  "IntegerIntervalUnion1To15": Tuple{
    expression: Interval[1, 10] union Interval[4, 15],
    output: Interval [ 1, 15 ]
  },
  "IntegerIntervalUnionNull": Tuple{
    expression: Interval[1, 10] union Interval[44, 50],
    output: null
  },
  "DecimalIntervalUnion1To15": Tuple{
    expression: Interval[1.0, 10.0] union Interval[4.0, 15.0],
    output: Interval [ 1.0, 15.0 ]
  },
  "DecimalIntervalUnionNull": Tuple{
    expression: Interval[1.0, 10.0] union Interval[14.0, 15.0],
    output: null
  },
  "QuantityIntervalUnion1To15": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] union Interval[5.0 'g', 15.0 'g'],
    output: Interval [ 1.0 'g', 15.0 'g' ]
  },
  "QuantityIntervalUnionNull": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'] union Interval[14.0 'g', 15.0 'g'],
    output: null
  },
  "DateTimeUnion": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] union Interval[DateTime(2012, 1, 25), DateTime(2012, 1, 28)],
    output: Interval [ @2012-01-05T, @2012-01-28T ]
  },
  "DateTimeUnionNull": Tuple{
    expression: Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)] union Interval[DateTime(2012, 1, 27), DateTime(2012, 1, 28)],
    output: null
  },
  "TimeUnion": Tuple{
    expression: Interval[@T05:59:59.999, @T15:59:59.999] union Interval[@T10:59:59.999, @T20:59:59.999],
    output: Interval [ @T05:59:59.999, @T20:59:59.999 ]
  },
  "TimeUnionNull": Tuple{
    expression: Interval[@T05:59:59.999, @T15:59:59.999] union Interval[@T16:59:59.999, @T20:59:59.999],
    output: null
  }
}

define "Width": Tuple{
  "IntegerIntervalTestWidth9": Tuple{
    expression: width of Interval[1, 10],
    output: 9
  },
  "IntervalTestWidthNull": Tuple{
    expression: width of (null as Interval<Any>),
    output: null
  },
  "DecimalIntervalTestWidth11": Tuple{
    expression: width of Interval[4.0, 15.0],
    output: 11.0
  },
  "QuantityIntervalTestWidth5": Tuple{
    expression: width of Interval[5.0 'g', 10.0 'g'],
    output: 5.0'g'
  },
  "DateTimeWidth": Tuple{
    expression: width of Interval[DateTime(2012, 1, 5), DateTime(2012, 1, 25)],
    invalid: true
  },
  "TimeWidth": Tuple{
    expression: width of Interval[@T05:59:59.999, @T15:59:59.999],
    invalid: true
  }
}

define "Interval": Tuple{
  "IntegerIntervalTest": Tuple{
    expression: Interval[1, 10],
    output: Interval[1, 10]
  },
  "IntegerIntervalTest2": Tuple{
    expression: Interval[11, 20],
    output: Interval[11, 20]
  },
  "IntegerIntervalTest3": Tuple{
    expression: Interval[44, 50],
    output: Interval[44, 50]
  },
  "IntegerIntervalTest4": Tuple{
    expression: Interval[4, 10],
    output: Interval[4, 10]
  },
  "IntegerIntervalTest5": Tuple{
    expression: Interval[4, 15],
    output: Interval[4, 15]
  },
  "DecimalIntervalTest": Tuple{
    expression: Interval[1.0, 10.0],
    output: Interval[1.0, 10.0]
  },
  "DecimalIntervalTest2": Tuple{
    expression: Interval[11.0, 20.0],
    output: Interval[11.0, 20.0]
  },
  "DecimalIntervalTest3": Tuple{
    expression: Interval[4.0, 10.0],
    output: Interval[4.0, 10.0]
  },
  "DecimalIntervalTest4": Tuple{
    expression: Interval[4.0, 15.0],
    output: Interval[4.0, 15.0]
  },
  "DecimalIntervalTest5": Tuple{
    expression: Interval[14.0, 15.0],
    output: Interval[14.0, 15.0]
  },
  "QuantityIntervalTest": Tuple{
    expression: Interval[1.0 'g', 10.0 'g'],
    output: Interval[1.0 'g', 10.0 'g']
  },
  "QuantityIntervalTest2": Tuple{
    expression: Interval[11.0 'g', 20.0 'g'],
    output: Interval[11.0 'g', 20.0 'g']
  },
  "QuantityIntervalTest3": Tuple{
    expression: Interval[5.0 'g', 10.0 'g'],
    output: Interval[5.0 'g', 10.0 'g']
  },
  "QuantityIntervalTest4": Tuple{
    expression: Interval[5.0 'g', 15.0 'g'],
    output: Interval[5.0 'g', 15.0 'g']
  },
  "QuantityIntervalTest5": Tuple{
    expression: Interval[14.0 'g', 15.0 'g'],
    output: Interval[14.0 'g', 15.0 'g']
  },
  "DateTimeIntervalTest": Tuple{
    expression: Interval[@2016-05-01T00:00:00.000, @2016-05-02T00:00:00.000],
    output: Interval[@2016-05-01T00:00:00.000, @2016-05-02T00:00:00.000]
  },
  "TimeIntervalTest": Tuple{
    expression: Interval[@T00:00:00.000, @T23:59:59.599],
    output: Interval[@T00:00:00.000, @T23:59:59.599]
  },
  "CollapseIntervalTestInteger": Tuple{
    expression: {Interval[1, 10], Interval[11, 20], Interval[44, 50]},
    output: {Interval[1, 10], Interval[11, 20], Interval[44, 50]}
  },
  "InvalidIntegerInterval": Tuple{
    expression: Interval[5, 3],
    invalid: true
  },
  "InvalidIntegerIntervalA": Tuple{
    expression: Interval[5, 5),
    invalid: true
  }
}
