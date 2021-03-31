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
  }
}

define "Avg": Tuple{
  "AvgTest1": Tuple{
    expression: Avg({ 1.0, 2.0, 3.0, 6.0 }),
    output: 3.0
  }
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
  "MaxTestString": Tuple{
    expression: Max({ 'hi', 'bye', 'zebra' }),
    output: 'zebra'
  },
  "MaxTestDateTime": Tuple{
    expression: Max({ DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 10, 6) }),
    output: DateTime(2012, 10, 6)
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
  "MinTestString": Tuple{
    expression: Min({'hi', 'bye', 'zebra'}),
    output: 'bye'
  },
  "MinTestDateTime": Tuple{
    expression: Min({ DateTime(2012, 10, 5), DateTime(2012, 9, 5), DateTime(2012, 10, 6) }),
    output: DateTime(2012, 9, 5)
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
    output: DateTime(2012, 9, 5)
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
  }
}

define "PopulationVariance": Tuple{
  "PopVarianceTest1": Tuple{
    expression: PopulationVariance({ 1.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 2.0
  }
}

define "StdDev": Tuple{
  "StdDevTest1": Tuple{
    expression: StdDev({ 1.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 1.58113883
  }
}

define "Sum": Tuple{
  "SumTest1": Tuple{
    expression: Sum({ 6.0, 2.0, 3.0, 4.0, 5.0 }),
    output: 20.0
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
