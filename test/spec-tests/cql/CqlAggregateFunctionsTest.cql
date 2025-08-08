library CqlAggregateFunctionsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "AllTrue": Tuple{
  "AllTrueAllTrue": Tuple{
    expression: AllTrue({true,true}),
    output: true
  },
  "AllTrueTrueFirst": Tuple{
    expression: AllTrue({true,false}),
    output: false
  },
  "AllTrueFalseFirst": Tuple{
    expression: AllTrue({false,true}),
    output: false
  },
  "AllTrueAllTrueFalseTrue": Tuple{
    expression: AllTrue({true,false,true}),
    output: false
  },
  "AllTrueAllFalseTrueFalse": Tuple{
    expression: AllTrue({false,true,false}),
    output: false
  },
  "AllTrueNullFirst": Tuple{
    expression: AllTrue({null,true,true}),
    output: true
  },
  "AllTrueEmptyList": Tuple{
    expression: AllTrue({}),
    output: true
  },
  "AllTrueIsTrueWhenNull": Tuple{
    expression: AllTrue(null),
    output: true
  }
}

define "AnyTrue": Tuple{
  "AnyTrueAllTrue": Tuple{
    expression: AnyTrue({true,true}),
    output: true
  },
  "AnyTrueAllFalse": Tuple{
    expression: AnyTrue({false,false}),
    output: false
  },
  "AnyTrueAllTrueFalseTrue": Tuple{
    expression: AnyTrue({true,false,true}),
    output: true
  },
  "AnyTrueAllFalseTrueFalse": Tuple{
    expression: AnyTrue({false,true,false}),
    output: true
  },
  "AnyTrueTrueFirst": Tuple{
    expression: AnyTrue({true,false}),
    output: true
  },
  "AnyTrueFalseFirst": Tuple{
    expression: AnyTrue({false,true}),
    output: true
  },
  "AnyTrueNullFirstThenTrue": Tuple{
    expression: AnyTrue({null,true}),
    output: true
  },
  "AnyTrueNullFirstThenFalse": Tuple{
    expression: AnyTrue({null,false}),
    output: false
  },
  "AnyTrueEmptyList": Tuple{
    expression: AnyTrue({}),
    output: false
  },
  "AnyTrueIsFalseWhenNull": Tuple{
    expression: AnyTrue(null),
    output: false
  }
}

define "Avg": Tuple{
  "AvgTest1": Tuple{
    expression: Avg({ 1.0, 2.0, 3.0, 6.0 }),
    output: 3.0
  }
}

define "Product": Tuple{
  "ProductLong": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: Product({5L, 4L, 5L}),
    output: 100L
    */  }
}

define "Count": Tuple{
  "CountTest1": Tuple{
    expression: Count({ 15, 5, 99, null, 1 }),
    output: 4
  },
  "CountTestDateTime": Tuple{
    expression: Count({ DateTime(2014), DateTime(2001), DateTime(2010) }),
    output: 3
  },
  "CountTestTime": Tuple{
    expression: Count({ @T15:59:59.999, @T05:59:59.999, @T20:59:59.999 }),
    output: 3
  },
  "CountTestNull": Tuple{
    expression: Count({}),
    output: 0
  }
}

define "Max": Tuple{
  "MaxTestInteger": Tuple{
    expression: Max({ 5, 12, 1, 15, 0, 4, 90, 44 }),
    output: 90
  },
  "MaxTestLong": Tuple{
    expression: Max({ 5L, 12L, 1L, 15L, 0L, 4L, 90L, 44L }),
    output: 90L
  },
  "MaxTestString": Tuple{
    expression: Max({ 'hi', 'bye', 'zebra' }),
    output: 'zebra'
  },
  "MaxTestDateTime": Tuple{
    expression: Max({ DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 10, 6) }),
    output: @2012-10-06T
  },
  "MaxTestTime": Tuple{
    expression: Max({ @T15:59:59.999, @T05:59:59.999, @T20:59:59.999 }),
    output: @T20:59:59.999
  }
}

define "Median": Tuple{
  "MedianTestDecimal": Tuple{
    expression: Median({6.0, 5.0, 4.0, 3.0, 2.0, 1.0}),
    output: 3.5
  }
}

define "Min": Tuple{
  "MinTestInteger": Tuple{
    expression: Min({5, 12, 1, 15, 0, 4, 90, 44}),
    output: 0
  },
  "MinTestLong": Tuple{
    expression: Min({5L, 12L, 1L, 15L, 0L, 4L, 90L, 44L}),
    output: 0L
  },
  "MinTestString": Tuple{
    expression: Min({'hi', 'bye', 'zebra'}),
    output: 'bye'
  },
  "MinTestDateTime": Tuple{
    expression: Min({ DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 10, 6) }),
    output: @2012-09-05T
  },
  "MinTestTime": Tuple{
    expression: Min({ @T15:59:59.999, @T05:59:59.999, @T20:59:59.999 }),
    output: @T05:59:59.999
  }
}

define "Mode": Tuple{
  "ModeTestInteger": Tuple{
    expression: Mode({ 2, 1, 8, 2, 9, 1, 9, 9 }),
    output: 9
  },
  "ModeTestDateTime": Tuple{
    expression: Mode({ DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 10, 6), DateTime(2012, 9, 5) }),
    output: @2012-09-05T
  },
  "ModeTestDateTime2": Tuple{
    expression: Mode({ DateTime(2012, 10, 5), DateTime(2012, 10, 5), DateTime(2012, 10, 6), DateTime(2012, 9, 5) }),
    output: @2012-10-05T
  },
  "ModeTestTime": Tuple{
    expression: Mode({ @T15:59:59.999, @T05:59:59.999, @T20:59:59.999, @T05:59:59.999 }),
    output: @T05:59:59.999
  }
}

define "PopulationStdDev": Tuple{
  "PopStdDevTest1": Tuple{
    expression: PopulationStdDev({ 1.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 1.41421356
  },
  "PopulationStdDevIsNull": Tuple{
    expression: PopulationStdDev({ null as Quantity, null as Quantity, null as Quantity }),
    output: null
  }
}

define "PopulationVariance": Tuple{
  "PopVarianceTest1": Tuple{
    expression: PopulationVariance({ 1.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 2.0
  },
  "PopVarianceIsNull": Tuple{
    expression: PopulationVariance({ null as Quantity, null as Quantity, null as Quantity }),
    output: null
  }
}

define "StdDev": Tuple{
  "StdDevTest1": Tuple{
    expression: StdDev({ 1.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 1.58113883
  },
  "StdDevIsNull": Tuple{
    expression: StdDev({ null as Quantity, null as Quantity, null as Quantity }),
    output: null
  }
}

define "Sum": Tuple{
  "SumTest1": Tuple{
    expression: Sum({ 6.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 20.0
  },
  "SumTestLong": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: Sum({ 6L, 2L, 3L, 4L, 5L }),
    output: 20L
    */  },
  "SumTestQuantity": Tuple{
    expression: Sum({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'}),
    output: 15 'ml'
  },
  "SumTestNull": Tuple{
    expression: Sum({ null, 1, null }),
    output: 1
  }
}

define "Variance": Tuple{
  "VarianceTest1": Tuple{
    expression: Variance({ 1.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 2.5
  }
}
