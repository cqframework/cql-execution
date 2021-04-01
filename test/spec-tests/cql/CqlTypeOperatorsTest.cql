library CqlTypeOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "As": Tuple{
  "AsQuantity": Tuple{
    expression: 45.5 'g' as Quantity,
    output: 45.5 'g'
  },
  "CastAsQuantity": Tuple{
    expression: cast 45.5 'g' as Quantity,
    output: 45.5 'g'
  },
  "AsDateTime": Tuple{
    expression: DateTime(2014, 01, 01) as DateTime,
    output: @2014-01-01T
  }
}

define "Convert": Tuple{
  "IntegerToDecimal": Tuple{
    expression: convert 5 to Decimal,
    output: 5.0
  },
  "IntegerToString": Tuple{
    expression: convert 5 to String,
    output: '5'
  },
  "StringToIntegerError": Tuple{
    expression: convert 'foo' to Integer,
    invalid: true
  },
  "StringToDateTime": Tuple{
    skipped: 'Answer does not include timezone offset, but default offset depends on test environment'
    /*
    expression: convert '2014-01-01' to DateTime,
    output: @2014-01-01T
    */  },
  "StringToTime": Tuple{
    expression: convert 'T14:30:00.0' to Time,
    output: @T14:30:00.000
  },
  "StringToDateTimeMalformed": Tuple{
    expression: convert '2014/01/01' to DateTime,
    invalid: true
  }
}

define "Is": Tuple{
  "IntegerIsInteger": Tuple{
    expression: 5 is Integer,
    output: true
  },
  "StringIsInteger": Tuple{
    expression: '5' is Integer,
    output: false
  }
}

define "ToBoolean": Tuple{
  "StringNoToBoolean": Tuple{
    expression: ToBoolean('NO'),
    output: false
  }
}

define "ToConcept": Tuple{
  "CodeToConcept1": Tuple{
    expression: ToConcept(Code { code: '8480-6' }),
    output: Concept {
					codes: Code { code: '8480-6' }
				}
  }
}

define "ToDateTime": Tuple{
  "ToDateTime1": Tuple{
    skipped: 'Answer does not include timezone offset, but default offset depends on test environment'
    /*
    expression: ToDateTime('2014-01-01'),
    output: @2014-01-01T
    */  },
  "ToDateTime2": Tuple{
    skipped: 'Answer does not include timezone offset, but default offset depends on test environment'
    /*
    expression: ToDateTime('2014-01-01T12:05'),
    output: @2014-01-01T12:05
    */  },
  "ToDateTime3": Tuple{
    skipped: 'Answer does not include timezone offset, but default offset depends on test environment'
    /*
    expression: ToDateTime('2014-01-01T12:05:05.955'),
    output: @2014-01-01T12:05:05.955
    */  },
  "ToDateTime4": Tuple{
    skipped: '@2014-01-01T12:05:05.955+01:30 Parsed with offset 1 (should be 1.5)'
    /*
    expression: ToDateTime('2014-01-01T12:05:05.955+01:30'),
    output: @2014-01-01T12:05:05.955+01:30
    */  },
  "ToDateTime5": Tuple{
    skipped: '@2014-01-01T12:05:05.955-01:15 Parsed with offset -1 (should be -1.25)'
    /*
    expression: ToDateTime('2014-01-01T12:05:05.955-01:15'),
    output: @2014-01-01T12:05:05.955-01:15
    */  },
  "ToDateTime6": Tuple{
    expression: ToDateTime('2014-01-01T12:05:05.955Z'),
    output: @2014-01-01T12:05:05.955+00:00
  },
  "ToDateTimeMalformed": Tuple{
    expression: ToDateTime('2014/01/01T12:05:05.955Z'),
    invalid: true
  }
}

define "ToDecimal": Tuple{
  "String25D5ToDecimal": Tuple{
    expression: ToDecimal('+25.5'),
    output: 25.5
  }
}

define "ToInteger": Tuple{
  "StringNeg25ToInteger": Tuple{
    expression: ToInteger('-25'),
    output: -25
  }
}

define "ToQuantity": Tuple{
  "String5D5CMToQuantity": Tuple{
    expression: ToQuantity('5.5 \'cm\''),
    output: 5.5'cm'
  }
}

define "ToString": Tuple{
  "IntegerNeg5ToString": Tuple{
    expression: ToString(-5),
    output: '-5'
  },
  "Decimal18D55ToString": Tuple{
    expression: ToString(18.55),
    output: '18.55'
  },
  "Quantity5D5CMToString": Tuple{
    expression: ToString(5.5 'cm'),
    output: '5.5 \'cm\''
  },
  "BooleanTrueToString": Tuple{
    expression: ToString(true),
    output: 'true'
  }
}

define "ToTime": Tuple{
  "ToTime1": Tuple{
    expression: ToTime('T14:30:00.0'),
    output: @T14:30:00.000
  },
  "ToTime2": Tuple{
    expression: ToTime('T14:30:00.0+05:30'),
    output: @T14:30:00.000
  },
  "ToTime3": Tuple{
    expression: ToTime('T14:30:00.0-05:45'),
    output: @T14:30:00.000
  },
  "ToTime4": Tuple{
    expression: ToTime('T14:30:00.0Z'),
    output: @T14:30:00.000
  },
  "ToTimeMalformed": Tuple{
    expression: ToTime('T14-30-00.0'),
    invalid: true
  }
}
