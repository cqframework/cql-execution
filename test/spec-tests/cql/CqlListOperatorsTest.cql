library CqlListOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Sort": Tuple{
  "simpleSortAsc": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: ({4, 5, 1, 6, 2, 1}) sL sort asc,
    output: {1, 1, 2, 4, 5, 6}
    */  },
  "simpleSortDesc": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: ({4, 5, 1, 6, 2, 1}) sL sort desc,
    output: {6, 5, 4, 2, 1, 1}
    */  },
  "simpleSortStringAsc": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: ({'back', 'aardvark', 'alligator', 'zebra', 'iguana', 'Wolf', 'Armadillo'}) sls sort asc,
    output: {'Armadillo', 'Wolf', 'aardvark', 'alligator', 'back', 'iguana', 'zebra'}
    */  },
  "simpleSortStringDesc": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: ({'back', 'aardvark', 'alligator', 'zebra', 'iguana', 'Wolf', 'Armadillo'}) sls sort desc,
    output: {'zebra', 'iguana', 'back', 'alligator', 'aardvark', 'Wolf', 'Armadillo'}
    */  },
  "SortDatesAsc": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: ({ DateTime(2012, 10, 5, 10), DateTime(2012, 1, 1), DateTime(2012, 1, 1, 12), DateTime(2012, 10, 5) }) S sort asc,
    output: {DateTime(2012, 1, 1), DateTime(2012, 1, 1, 12), DateTime(2012, 10, 5), DateTime(2012, 10, 5, 10)}
    */  },
  "SortDatesDesc": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: ({ DateTime(2012, 10, 5, 10), DateTime(2012, 1, 1), DateTime(2012, 1, 1, 12), DateTime(2012, 10, 5) }) S sort desc,
    output: {DateTime(2012, 10, 5, 10), DateTime(2012, 10, 5), DateTime(2012, 1, 1, 12), DateTime(2012, 1, 1)}
    */  },
  "intList": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: { 3, 2, 1 },
    output: {3, 2, 1}
    */  },
  "decimalList": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: { 3.8, 2.4, 1.9 },
    output: {3.8, 2.4, 1.9}
    */  },
  "quantityList": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: { 19.99 '[lb_av]', 17.33 '[lb_av]', 10.66 '[lb_av]' },
    output: {19.99 '[lb_av]', 17.33 '[lb_av]', 10.66 '[lb_av]'}
    */  },
  "dateTimeList": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: { DateTime(2016), DateTime(2015), DateTime(2010) },
    output: {@2016T, @2015T, @2010T}
    */  },
  "timeList": Tuple{
    skipped: 'Sort not implemented'
    /*
    expression: { @T15:59:59.999, @T15:12:59.999, @T15:12:13.999 },
    output: {@T15:59:59.999, @T15:12:59.999, @T15:12:13.999}
    */  }
}

define "Contains": Tuple{
  "ContainsABNullHasNull": Tuple{
    expression: { 'a', 'b', null } contains null,
    output: null
  },
  "ContainsNullFirst": Tuple{
    expression: { null, 'b', 'c' } contains 'a',
    output: false
  },
  "ContainsABCHasA": Tuple{
    expression: { 'a', 'b', 'c' } contains 'a',
    output: true
  },
  "ContainsJan2012True": Tuple{
    expression: { DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 1, 1) } contains DateTime(2012, 1, 1),
    output: true
  },
  "ContainsJan2012False": Tuple{
    expression: { DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 10, 1) } contains DateTime(2012, 1, 1),
    output: false
  },
  "ContainsTimeTrue": Tuple{
    expression: { @T15:59:59.999, @T05:59:59.999, @T20:59:59.999 } contains @T05:59:59.999,
    output: true
  },
  "ContainsTimeFalse": Tuple{
    expression: { @T15:59:59.999, @T05:59:59.999, @T20:59:59.999 } contains @T08:59:59.999,
    output: false
  },
  "ContainsNullLeft": Tuple{
    expression: null contains 'a',
    output: false
  }
}

define "Descendents": Tuple{
  "DescendentsEmptyList": Tuple{
    skipped: 'Descendents not implemented'
    /*
    expression: (null).descendents(),
    output: null
    */  }
}

define "Distinct": Tuple{
  "DistinctEmptyList": Tuple{
    expression: distinct {},
    output: {}
  },
  "DistinctNullNullNull": Tuple{
    expression: distinct { null, null, null},
    output: { null }
  },
  "DistinctANullANull": Tuple{
    expression: distinct { 'a', null, 'a', null},
    output: {'a', null}
  },
  "Distinct112233": Tuple{
    expression: distinct { 1, 1, 2, 2, 3, 3},
    output: {1,2,3}
  },
  "Distinct123123": Tuple{
    expression: distinct { 1, 2, 3, 1, 2, 3},
    output: {1,2,3}
  },
  "DistinctAABBCC": Tuple{
    expression: distinct { 'a', 'a', 'b', 'b', 'c', 'c'},
    output: {'a','b','c'}
  },
  "DistinctABCABC": Tuple{
    expression: distinct { 'a', 'b', 'c', 'a', 'b', 'c'},
    output: {'a','b','c'}
  },
  "DistinctDateTime": Tuple{
    expression: distinct { DateTime(2012, 10, 5), DateTime(2012, 1, 1), DateTime(2012, 1, 1)},
    output: { DateTime(2012, 10, 5), DateTime(2012, 1, 1)}
  },
  "DistinctTime": Tuple{
    expression: distinct { @T15:59:59.999, @T20:59:59.999 },
    output: { @T15:59:59.999, @T20:59:59.999 }
  }
}

define "Equal": Tuple{
  "EqualNullNull": Tuple{
    expression: {null} = {null},
    output: null
  },
  "EqualEmptyListNull": Tuple{
    expression: {} as List<String> = null,
    output: null
  },
  "EqualNullEmptyList": Tuple{
    expression: null = {} as List<String>,
    output: null
  },
  "EqualEmptyListAndEmptyList": Tuple{
    expression: {} = {},
    output: true
  },
  "Equal12And123": Tuple{
    expression: { 1, 2 } = { 1, 2, 3 },
    output: false
  },
  "Equal123And12": Tuple{
    expression: { 1, 2, 3 } = { 1, 2 },
    output: false
  },
  "Equal123And123": Tuple{
    expression: { 1, 2, 3 } = { 1, 2, 3 },
    output: true
  },
  "EqualDateTimeTrue": Tuple{
    expression: {DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)} = {DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)},
    output: true
  },
  "EqualDateTimeFalse": Tuple{
    expression: {DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)} = {DateTime(2012, 1, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)},
    output: false
  },
  "EqualTimeTrue": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T20:59:59.999 } = { @T15:59:59.999, @T20:59:59.999, @T20:59:59.999 },
    output: true
  },
  "EqualTimeFalse": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T20:59:59.999 } = { @T10:59:59.999, @T20:59:59.999, @T20:59:59.999 },
    output: false
  }
}

define "Except": Tuple{
  "ExceptEmptyListAndEmptyList": Tuple{
    expression: {} except {},
    output: {}
  },
  "Except1234And23": Tuple{
    expression: { 1, 2, 3, 4 } except { 2, 3 },
    output: { 1, 4 }
  },
  "Except23And1234": Tuple{
    expression: { 2, 3 } except { 1, 2, 3, 4 },
    output: {}
  },
  "ExceptDateTimeList": Tuple{
    expression: { DateTime(2012, 5, 10), DateTime(2014, 12, 10), DateTime(2010, 1, 1)} except {DateTime(2014, 12, 10), DateTime(2010, 1, 1) },
    output: {@2012-05-10T}
  },
  "ExceptTimeList": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T12:59:59.999 } except { @T20:59:59.999, @T12:59:59.999 },
    output: {@T15:59:59.999}
  },
  "ExceptNullRight": Tuple{
    expression: { 1, 4 } except null,
    output: {1, 4}
  }
}

define "Exists": Tuple{
  "ExistsEmpty": Tuple{
    expression: Exists({}),
    output: false
  },
  "ExistsListNull": Tuple{
    expression: Exists({ null }),
    output: false
  },
  "Exists1": Tuple{
    expression: Exists({ 1 }),
    output: true
  },
  "Exists12": Tuple{
    expression: Exists({ 1, 2 }),
    output: true
  },
  "ExistsDateTime": Tuple{
    expression: Exists({ DateTime(2012, 5, 10), DateTime(2014, 12, 10) }),
    output: true
  },
  "ExistsTime": Tuple{
    expression: Exists({ @T15:59:59.999, @T20:59:59.999 }),
    output: true
  },
  "ExistsNull": Tuple{
    expression: Exists(null),
    output: false
  }
}

define "Flatten": Tuple{
  "FlattenEmpty": Tuple{
    expression: Flatten({{},{}}),
    output: {}
  },
  "FlattenListNullAndNull": Tuple{
    expression: Flatten({{null}, {null}}),
    output: {null, null}
  },
  "FlattenList12And34": Tuple{
    expression: Flatten({{1,2}, {3,4}}),
    output: {1,2,3,4}
  },
  "FlattenDateTime": Tuple{
    expression: Flatten({ {DateTime(2012, 5, 10)}, {DateTime(2014, 12, 10)} }),
    output: { DateTime(2012, 5, 10), DateTime(2014, 12, 10) }
  },
  "FlattenTime": Tuple{
    expression: Flatten({ {@T15:59:59.999}, {@T20:59:59.999} }),
    output: { @T15:59:59.999, @T20:59:59.999 }
  }
}

define "First": Tuple{
  "FirstEmpty": Tuple{
    expression: First({}),
    output: null
  },
  "FirstNull1": Tuple{
    expression: First({ null, 1 }),
    output: null
  },
  "First1Null": Tuple{
    expression: First({ 1, null }),
    output: 1
  },
  "First12": Tuple{
    expression: First({ 1, 2 }),
    output: 1
  },
  "FirstDateTime": Tuple{
    expression: First({ DateTime(2012, 5, 10), DateTime(2014, 12, 10) }),
    output: DateTime(2012, 5, 10)
  },
  "FirstTime": Tuple{
    expression: First({ @T15:59:59.999, @T20:59:59.999 }),
    output: @T15:59:59.999
  }
}

define "In": Tuple{
  "InNullEmpty": Tuple{
    expression: null in {},
    output: null
  },
  "InNullAnd1Null": Tuple{
    expression: null in { 1, null },
    output: null
  },
  "In1Null": Tuple{
    expression: 1 in null,
    output: false
  },
  "In1And12": Tuple{
    expression: 1 in { 1, 2 },
    output: true
  },
  "In3And12": Tuple{
    expression: 3 in { 1, 2 },
    output: false
  },
  "InDateTimeTrue": Tuple{
    expression: DateTime(2012, 5, 10) in { DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10) },
    output: true
  },
  "InDateTimeFalse": Tuple{
    expression: DateTime(2012, 6, 10) in { DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10) },
    output: false
  },
  "InTimeTrue": Tuple{
    expression: @T15:59:59.999 in { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 },
    output: true
  },
  "InTimeFalse": Tuple{
    expression: @T16:59:59.999 in { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 },
    output: false
  }
}

define "Includes": Tuple{
  "IncludesEmptyAndEmpty": Tuple{
    expression: {} includes {},
    output: true
  },
  "IncludesListNullAndListNull": Tuple{
    skipped: 'Answer is incorrect according to spec, but not sure if correct answer is null or false'
    /*
    expression: {null} includes {null},
    output: true
    */  },
  "Includes123AndEmpty": Tuple{
    expression: {1, 2, 3} includes {},
    output: true
  },
  "Includes123And2": Tuple{
    expression: {1, 2, 3} includes {2},
    output: true
  },
  "Includes123And4": Tuple{
    expression: {1, 2, 3} includes {4},
    output: false
  },
  "IncludesDateTimeTrue": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} includes {DateTime(2012, 5, 10)},
    output: true
  },
  "IncludesDateTimeFalse": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} includes {DateTime(2012, 5, 11)},
    output: false
  },
  "IncludesTimeTrue": Tuple{
    expression: { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 } includes @T15:59:59.999,
    output: true
  },
  "IncludesTimeFalse": Tuple{
    expression: { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 } includes @T16:59:59.999,
    output: false
  },
  "IncludesNullLeft": Tuple{
    expression: null includes {2},
    output: null
  },
  "IncludesNullRight": Tuple{
    expression: {'s', 'a', 'm'} includes null,
    output: null
  }
}

define "IncludedIn": Tuple{
  "IncludedInEmptyAndEmpty": Tuple{
    expression: {} included in {},
    output: true
  },
  "IncludedInListNullAndListNull": Tuple{
    skipped: 'Answer is incorrect according to spec, but not sure if correct answer is null or false'
    /*
    expression: { null } included in { null },
    output: true
    */  },
  "IncludedInEmptyAnd123": Tuple{
    expression: {} included in { 1, 2, 3 },
    output: true
  },
  "IncludedIn2And123": Tuple{
    expression: { 2 } included in { 1, 2, 3 },
    output: true
  },
  "IncludedIn4And123": Tuple{
    expression: { 4 } included in { 1, 2, 3 },
    output: false
  },
  "IncludedInDateTimeTrue": Tuple{
    expression: { DateTime(2012, 5, 10)} included in {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)},
    output: true
  },
  "IncludedInDateTimeFalse": Tuple{
    expression: {DateTime(2012, 5, 11)} included in {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)},
    output: false
  },
  "IncludedInTimeTrue": Tuple{
    expression: @T15:59:59.999 included in { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 },
    output: true
  },
  "IncludedInTimeFalse": Tuple{
    expression: @T16:59:59.999 included in { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 },
    output: false
  },
  "IncludedInNullLeft": Tuple{
    expression: null included in {2},
    output: null
  },
  "IncludedInNullRight": Tuple{
    expression: {'s', 'a', 'm'} included in null,
    output: null
  }
}

define "Indexer": Tuple{
  "IndexerNull1List": Tuple{
    expression: (null as List<System.Any>)[1],
    output: null
  },
  "Indexer0Of12": Tuple{
    expression: { 1, 2 }[0],
    output: 1
  },
  "Indexer1Of12": Tuple{
    expression: { 1, 2 }[1],
    output: 2
  },
  "Indexer2Of12": Tuple{
    expression: { 1, 2 }[2],
    output: null
  },
  "IndexerNeg1Of12": Tuple{
    expression: { 1, 2 }[-1],
    output: null
  },
  "IndexerDateTime": Tuple{
    expression: { DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10) }[1],
    output: DateTime(2012, 5, 10)
  },
  "IndexerTime": Tuple{
    expression: { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 }[1],
    output: @T15:59:59.999
  }
}

define "IndexOf": Tuple{
  "IndexOfEmptyNull": Tuple{
    expression: IndexOf({}, null),
    output: null
  },
  "IndexOfNullEmpty": Tuple{
    expression: IndexOf(null, {}),
    output: null
  },
  "IndexOfNullIn1Null": Tuple{
    expression: IndexOf({ 1, null }, null),
    output: null
  },
  "IndexOf1In12": Tuple{
    expression: IndexOf({ 1, 2 }, 1),
    output: 0
  },
  "IndexOf2In12": Tuple{
    expression: IndexOf({ 1, 2 }, 2),
    output: 1
  },
  "IndexOf3In12": Tuple{
    expression: IndexOf({ 1, 2 }, 3),
    output: -1
  },
  "IndexOfDateTime": Tuple{
    expression: IndexOf({ DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10) }, DateTime(2014, 12, 10)),
    output: 2
  },
  "IndexOfTime": Tuple{
    expression: IndexOf({ @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 }, @T15:59:59.999),
    output: 1
  }
}

define "Intersect": Tuple{
  "IntersectEmptyListAndEmptyList": Tuple{
    expression: {} intersect {},
    output: {}
  },
  "Intersect1234And23": Tuple{
    expression: { 1, 2, 3, 4 } intersect { 2, 3 },
    output: { 2, 3 }
  },
  "Intersect23And1234": Tuple{
    expression: {2, 3} intersect { 1, 2, 3, 4 },
    output: { 2, 3 }
  },
  "IntersectDateTime": Tuple{
    expression: { DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10) } intersect { DateTime(2012, 5, 10), DateTime(2014, 12, 10), DateTime(2000, 5, 5) },
    output: {@2012-05-10T, @2014-12-10T}
  },
  "IntersectTime": Tuple{
    expression: { @T02:29:15.156, @T15:59:59.999, @T20:59:59.999 } intersect { @T01:29:15.156, @T15:59:59.999, @T20:59:59.999 },
    output: {@T15:59:59.999, @T20:59:59.999}
  }
}

define "Last": Tuple{
  "LastEmpty": Tuple{
    expression: Last({}),
    output: null
  },
  "LastNull1": Tuple{
    expression: Last({null, 1}),
    output: 1
  },
  "Last1Null": Tuple{
    expression: Last({1, null}),
    output: null
  },
  "Last12": Tuple{
    expression: Last({1, 2}),
    output: 2
  },
  "LastDateTime": Tuple{
    expression: Last({DateTime(2012, 5, 10), DateTime(2014, 12, 10)}),
    output: DateTime(2014, 12, 10)
  },
  "LastTime": Tuple{
    expression: Last({ @T15:59:59.999, @T20:59:59.999 }),
    output: @T20:59:59.999
  }
}

define "Length": Tuple{
  "LengthEmptyList": Tuple{
    expression: Length({}),
    output: 0
  },
  "LengthNull1": Tuple{
    expression: Length({null, 1}),
    output: 2
  },
  "Length1Null": Tuple{
    expression: Length({1, null}),
    output: 2
  },
  "Length12": Tuple{
    expression: Length({1, 2}),
    output: 2
  },
  "LengthDateTime": Tuple{
    expression: Length({DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)}),
    output: 3
  },
  "LengthTime": Tuple{
    expression: Length({ @T15:59:59.999, @T20:59:59.999, @T15:59:59.999, @T20:59:59.999, @T15:59:59.999, @T20:59:59.999 }),
    output: 6
  },
  "LengthNullList": Tuple{
    expression: Length(null as List<Any>),
    output: 0
  }
}

define "Equivalent": Tuple{
  "EquivalentEmptyAndEmpty": Tuple{
    expression: {} ~ {},
    output: true
  },
  "EquivalentABCAndABC": Tuple{
    expression: { 'a', 'b', 'c' } ~ { 'a', 'b', 'c' },
    output: true
  },
  "EquivalentABCAndAB": Tuple{
    expression: { 'a', 'b', 'c' } ~ { 'a', 'b' },
    output: false
  },
  "EquivalentABCAnd123": Tuple{
    expression: { 'a', 'b', 'c' } ~ { 1, 2, 3 },
    output: false
  },
  "Equivalent123AndABC": Tuple{
    expression: { 1, 2, 3 } ~ { 'a', 'b', 'c' },
    output: false
  },
  "Equivalent123AndString123": Tuple{
    expression: { 1, 2, 3 } ~ { '1', '2', '3' },
    output: false
  },
  "EquivalentDateTimeTrue": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10), null} ~ {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10), null},
    output: true
  },
  "EquivalentDateTimeNull": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} ~ {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10), null},
    output: false
  },
  "EquivalentDateTimeFalse": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} ~ {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 1)},
    output: false
  },
  "EquivalentTimeTrue": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999 } ~ { @T15:59:59.999, @T20:59:59.999 },
    output: true
  },
  "EquivalentTimeNull": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999 } ~ { @T15:59:59.999, @T20:59:59.999, null },
    output: false
  },
  "EquivalentTimeFalse": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999 } ~ { @T15:59:59.999, @T20:59:59.995 },
    output: false
  }
}

define "NotEqual": Tuple{
  "NotEqualEmptyAndEmpty": Tuple{
    expression: {} != {},
    output: false
  },
  "NotEqualABCAndABC": Tuple{
    expression: { 'a', 'b', 'c' } != { 'a', 'b', 'c' },
    output: false
  },
  "NotEqualABCAndAB": Tuple{
    expression: { 'a', 'b', 'c' } != { 'a', 'b' },
    output: true
  },
  "NotEqualABCAnd123": Tuple{
    expression: { 'a', 'b', 'c' } != { 1, 2, 3 },
    output: true
  },
  "NotEqual123AndABC": Tuple{
    expression: { 1, 2, 3 } != { 'a', 'b', 'c' },
    output: true
  },
  "NotEqual123AndString123": Tuple{
    expression: { 1, 2, 3 } != { '1', '2', '3' },
    output: true
  },
  "NotEqualDateTimeTrue": Tuple{
    expression: {DateTime(2001, 9, 11, 0, 0, 0, 0), DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)} != {DateTime(2001, 9, 11, 0, 0, 0, 0), DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 1, 0, 0, 0, 0)},
    output: true
  },
  "NotEqualDateTimeFalse": Tuple{
    expression: {DateTime(2001, 9, 11, 0, 0, 0, 0), DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)} != {DateTime(2001, 9, 11, 0, 0, 0, 0), DateTime(2012, 5, 10, 0, 0, 0, 0), DateTime(2014, 12, 10, 0, 0, 0, 0)},
    output: false
  },
  "NotEqualTimeTrue": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999 } = { @T15:59:59.999, @T20:59:59.999 },
    output: true
  },
  "NotEqualTimeFalse": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999 } = { @T15:59:59.999, @T20:59:49.999 },
    output: false
  }
}

define "ProperContains": Tuple{
  "ProperContainsNullRightFalse": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: {'s', 'u', 'n'} properly includes null,
    output: false
    */  },
  "ProperContainsNullRightTrue": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: {'s', 'u', 'n', null} properly includes null,
    output: true
    */  },
  "ProperContainsTimeTrue": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: { @T15:59:59, @T20:59:59.999, @T20:59:49.999 } properly includes @T15:59:59,
    output: true
    */  },
  "ProperContainsTimeNull": Tuple{
    skipped: 'ProperContains not implemented'
    /*
    expression: { @T15:59:59.999, @T20:59:59.999, @T20:59:49.999 } properly includes @T15:59:59,
    output: null
    */  }
}

define "ProperIn": Tuple{
  "ProperInNullRightFalse": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: null properly included in {'s', 'u', 'n'},
    output: false
    */  },
  "ProperInNullRightTrue": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: null properly included in {'s', 'u', 'n', null},
    output: true
    */  },
  "ProperInTimeTrue": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T15:59:59 properly included in { @T15:59:59, @T20:59:59.999, @T20:59:49.999 },
    output: true
    */  },
  "ProperInTimeNull": Tuple{
    skipped: 'ProperIn not implemented'
    /*
    expression: @T15:59:59 properly included in { @T15:59:59.999, @T20:59:59.999, @T20:59:49.999 },
    output: null
    */  }
}

define "ProperlyIncludes": Tuple{
  "ProperIncludesEmptyAndEmpty": Tuple{
    expression: {} properly includes {},
    output: false
  },
  "ProperIncludesListNullAndListNull": Tuple{
    expression: {null} properly includes {null},
    output: false
  },
  "ProperIncludes123AndEmpty": Tuple{
    expression: {1, 2, 3} properly includes {},
    output: true
  },
  "ProperIncludes123And2": Tuple{
    expression: {1, 2, 3} properly includes {2},
    output: true
  },
  "ProperIncludes123And4": Tuple{
    expression: {1, 2, 3} properly includes {4},
    output: false
  },
  "ProperIncludesDateTimeTrue": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} properly includes {DateTime(2012, 5, 10), DateTime(2014, 12, 10)},
    output: true
  },
  "ProperIncludesDateTimeFalse": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} properly includes {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)},
    output: false
  },
  "ProperIncludesTimeTrue": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T20:59:49.999 } properly includes { @T15:59:59.999, @T20:59:59.999 },
    output: true
  },
  "ProperIncludesTimeFalse": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T20:59:49.999 } properly includes { @T15:59:59.999, @T20:59:59.999, @T14:59:22.999 },
    output: false
  },
  "ProperlyIncludesNullLeft": Tuple{
    expression: null properly includes {2},
    output: null
  }
}

define "ProperlyIncludedIn": Tuple{
  "ProperIncludedInEmptyAndEmpty": Tuple{
    expression: {} properly included in {},
    output: false
  },
  "ProperIncludedInListNullAndListNull": Tuple{
    expression: {null} properly included in {null},
    output: false
  },
  "ProperIncludedInEmptyAnd123": Tuple{
    expression: {} properly included in {1, 2, 3},
    output: true
  },
  "ProperIncludedIn2And123": Tuple{
    expression: {2} properly included in {1, 2, 3},
    output: true
  },
  "ProperIncludedIn4And123": Tuple{
    expression: {4} properly included in {1, 2, 3},
    output: false
  },
  "ProperIncludedInDateTimeTrue": Tuple{
    expression: {DateTime(2012, 5, 10), DateTime(2014, 12, 10)} properly included in {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)},
    output: true
  },
  "ProperIncludedInDateTimeFalse": Tuple{
    expression: {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)} properly included in {DateTime(2001, 9, 11), DateTime(2012, 5, 10), DateTime(2014, 12, 10)},
    output: false
  },
  "ProperIncludedInTimeTrue": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999 } properly included in { @T15:59:59.999, @T20:59:59.999, @T20:59:49.999 },
    output: true
  },
  "ProperIncludedInTimeFalse": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T14:59:22.999 } properly included in { @T15:59:59.999, @T20:59:59.999, @T20:59:49.999 },
    output: false
  },
  "ProperlyIncludedInNulRight": Tuple{
    expression: {'s', 'u', 'n'} properly included in null,
    output: null
  }
}

define "SingletonFrom": Tuple{
  "SingletonFromEmpty": Tuple{
    expression: singleton from {},
    output: null
  },
  "SingletonFromListNull": Tuple{
    expression: singleton from {null},
    output: null
  },
  "SingletonFrom1": Tuple{
    expression: singleton from { 1 },
    output: 1
  },
  "SingletonFrom12": Tuple{
    expression: singleton from { 1, 2 },
    invalid: true
  },
  "SingletonFromDateTime": Tuple{
    expression: singleton from { DateTime(2012, 5, 10) },
    output: DateTime(2012, 5, 10)
  },
  "SingletonFromTime": Tuple{
    expression: singleton from { @T15:59:59.999 },
    output: @T15:59:59.999
  }
}

define "Skip": Tuple{
  "SkipNull": Tuple{
    expression: Skip(null, 3),
    output: null
  },
  "SkipEven": Tuple{
    expression: Skip({1,2,3,4,5}, 2),
    output: {3, 4, 5}
  },
  "SkipOdd": Tuple{
    expression: Skip({1,2,3,4,5}, 3),
    output: {4, 5}
  },
  "SkipNone": Tuple{
    expression: Skip({1,2,3,4,5}, 0),
    output: {1,2,3,4,5}
  },
  "SkipAll": Tuple{
    expression: Skip({1,2,3,4,5}, 5),
    output: {}
  }
}

define "Tail": Tuple{
  "TailNull": Tuple{
    expression: Tail(null),
    output: null
  },
  "TailEven": Tuple{
    expression: Tail({1,2,3,4}),
    output: {2,3,4}
  },
  "TailOdd": Tuple{
    expression: Tail({1,2,3,4,5}),
    output: {2,3,4,5}
  },
  "TailEmpty": Tuple{
    expression: Tail({}),
    output: {}
  },
  "TailOneElement": Tuple{
    expression: Tail({1}),
    output: {}
  }
}

define "Take": Tuple{
  "TakeNull": Tuple{
    expression: Take(null, 3),
    output: null
  },
  "TakeNullEmpty": Tuple{
    expression: Take({1,2,3}, null as Integer),
    output: {}
  },
  "TakeEmpty": Tuple{
    expression: Take({1,2,3}, 0),
    output: {}
  },
  "TakeEven": Tuple{
    expression: Take({1,2,3,4}, 2),
    output: {1, 2}
  },
  "TakeOdd": Tuple{
    expression: Take({1,2,3,4}, 3),
    output: {1, 2, 3}
  },
  "TakeAll": Tuple{
    expression: Take({1,2,3,4}, 4),
    output: {1, 2, 3, 4}
  }
}

define "Union": Tuple{
  "UnionEmptyAndEmpty": Tuple{
    expression: {} union {},
    output: {}
  },
  "UnionListNullAndListNull": Tuple{
    expression: { null } union { null },
    output: {null}
  },
  "Union123AndEmpty": Tuple{
    expression: { 1, 2, 3 } union {},
    output: {1, 2, 3}
  },
  "Union123And2": Tuple{
    expression: { 1, 2, 3 } union { 2 },
    output: {1, 2, 3}
  },
  "Union123And4": Tuple{
    expression: { 1, 2, 3 } union { 4 },
    output: {1, 2, 3, 4}
  },
  "UnionDateTime": Tuple{
    expression: { DateTime(2001, 9, 11)} union {DateTime(2012, 5, 10), DateTime(2014, 12, 10) },
    output: {@2001-09-11T, @2012-05-10T, @2014-12-10T}
  },
  "UnionTime": Tuple{
    expression: { @T15:59:59.999, @T20:59:59.999, @T12:59:59.999 } union { @T10:59:59.999 },
    output: {@T15:59:59.999, @T20:59:59.999, @T12:59:59.999, @T10:59:59.999}
  }
}
