library CqlArithmeticFunctionsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Abs": Tuple{
  "AbsNull": Tuple{
    expression: Abs(null as Integer),
    output: null
  },
  "Abs0": Tuple{
    expression: Abs(0),
    output: 0
  },
  "AbsNeg1": Tuple{
    expression: Abs(-1),
    output: 1
  },
  "AbsNeg1Dec": Tuple{
    expression: Abs(-1.0),
    output: 1.0
  },
  "Abs0Dec": Tuple{
    expression: Abs(0.0),
    output: 0.0
  },
  "Abs1cm": Tuple{
    expression: Abs(-1.0'cm'),
    output: 1.0'cm'
  },
  "AbsLong": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: Abs(-1L),
    output: 1L
    */  }
}

define "Add": Tuple{
  "AddNull": Tuple{
    expression: 1 + null,
    output: null
  },
  "Add11": Tuple{
    expression: 1 + 1,
    output: 2
  },
  "Add1D1D": Tuple{
    expression: 1.0 + 1.0,
    output: 2.0
  },
  "Add1Q1Q": Tuple{
    expression: 1'g/cm3' + 1'g/cm3',
    output: 2.0'g/cm3'
  },
  "AddIAndD": Tuple{
    expression: 1 + 2.0,
    output: 3.0
  },
  "Add1L1L": Tuple{
    expression: 1L + 1L,
    output: 2L
  }
}

define "Ceiling": Tuple{
  "CeilingNull": Tuple{
    expression: Ceiling(null as Decimal),
    output: null
  },
  "Ceiling1D": Tuple{
    expression: Ceiling(1.0),
    output: 1
  },
  "Ceiling1D1": Tuple{
    expression: Ceiling(1.1),
    output: 2
  },
  "CeilingNegD1": Tuple{
    expression: Ceiling(-0.1),
    output: 0
  },
  "CeilingNeg1": Tuple{
    expression: Ceiling(-1.0),
    output: -1
  },
  "CeilingNeg1D1": Tuple{
    expression: Ceiling(-1.1),
    output: -1
  },
  "Ceiling1I": Tuple{
    expression: Ceiling(1),
    output: 1
  }
}

define "Divide": Tuple{
  "DivideNull": Tuple{
    expression: 1 / null,
    output: null
  },
  "Divide10": Tuple{
    expression: 1 / 0,
    output: null
  },
  "Divide01": Tuple{
    expression: 0 / 1,
    output: 0.0
  },
  "Divide11": Tuple{
    expression: 1 / 1,
    output: 1.0
  },
  "Divide1d1d": Tuple{
    expression: 1.0 / 1.0,
    output: 1.0
  },
  "Divide103": Tuple{
    expression: 10 / 3,
    output: 3.33333333
  },
  "Divide1Q1": Tuple{
    expression: 1'g/cm3' / 1.0,
    output: 1.0'g/cm3'
  },
  "Divide1Q1Q": Tuple{
    expression: 1'g/cm3' / 1'g/cm3',
    output: 1.0'1'
  },
  "Divide10I5D": Tuple{
    expression: 10 / 5.0,
    output: 2.0
  },
  "Divide10I5I": Tuple{
    expression: 10 / 5,
    output: 2.0
  },
  "Divide10Q5I": Tuple{
    expression: 10.0 'g' / 5,
    output: 2.0'g'
  }
}

define "Floor": Tuple{
  "FloorNull": Tuple{
    expression: Floor(null as Decimal),
    output: null
  },
  "Floor1": Tuple{
    expression: Floor(1),
    output: 1
  },
  "Floor1D": Tuple{
    expression: Floor(1.0),
    output: 1
  },
  "Floor1D1": Tuple{
    expression: Floor(1.1),
    output: 1
  },
  "FloorNegD1": Tuple{
    expression: Floor(-0.1),
    output: -1
  },
  "FloorNeg1": Tuple{
    expression: Floor(-1.0),
    output: -1
  },
  "FloorNeg1D1": Tuple{
    expression: Floor(-1.1),
    output: -2
  },
  "Floor2I": Tuple{
    expression: Floor(2),
    output: 2
  }
}

define "Exp": Tuple{
  "ExpNull": Tuple{
    expression: Exp(null as Decimal),
    output: null
  },
  "Exp0": Tuple{
    expression: Exp(0),
    output: 1.0
  },
  "ExpNeg0": Tuple{
    expression: Exp(-0),
    output: 1.0
  },
  "Exp1": Tuple{
    expression: Exp(1),
    output: 2.718281828459045090795598298427648842334747314453125
  },
  "ExpNeg1": Tuple{
    expression: Exp(-1),
    output: 0.367879441171442334024277442949824035167694091796875
  },
  "Exp1000": Tuple{
    expression: Exp(1000),
    invalid: true
  },
  "Exp1000D": Tuple{
    expression: Exp(1000.0),
    invalid: true
  }
}

define "HighBoundary": Tuple{
  "HighBoundaryDecimal": Tuple{
    skipped: 'HighBoundary not implemented'
    /*
    expression: HighBoundary(1.587, 8),
    output: 1.58799999
    */  },
  "HighBoundaryDateMonth": Tuple{
    skipped: 'HighBoundary not implemented'
    /*
    expression: HighBoundary(@2014, 6),
    output: @2014-12
    */  },
  "HighBoundaryDateTimeMillisecond": Tuple{
    skipped: 'HighBoundary not implemented'
    /*
    expression: HighBoundary(@2014-01-01T08, 17),
    output: @2014-01-01T08:59:59.999
    */  },
  "HighBoundaryTimeMillisecond": Tuple{
    skipped: 'HighBoundary not implemented'
    /*
    expression: HighBoundary(@T10:30, 9),
    output: @T10:30:59.999
    */  }
}

define "Log": Tuple{
  "LogNullNull": Tuple{
    expression: Log(null, null),
    output: null
  },
  "Log1BaseNull": Tuple{
    expression: Log(1, null),
    output: null
  },
  "Log1Base1": Tuple{
    expression: Log(1, 1),
    output: null
  },
  "Log1Base2": Tuple{
    expression: Log(1, 2),
    output: 0.0
  },
  "Log1Base100": Tuple{
    expression: Log(1, 100),
    output: 0.0
  },
  "Log16Base2": Tuple{
    expression: Log(16, 2),
    output: 4.0
  },
  "LogD125Base2": Tuple{
    expression: Log(0.125, 2),
    output: -3.0
  }
}

define "LowBoundary": Tuple{
  "LowBoundaryDecimal": Tuple{
    skipped: 'LowBoundary not implemented'
    /*
    expression: LowBoundary(1.587, 8),
    output: 1.58700000
    */  },
  "LowBoundaryDateMonth": Tuple{
    skipped: 'LowBoundary not implemented'
    /*
    expression: LowBoundary(@2014, 6),
    output: @2014-01
    */  },
  "LowBoundaryDateTimeMillisecond": Tuple{
    skipped: 'LowBoundary not implemented'
    /*
    expression: LowBoundary(@2014-01-01T08, 17),
    output: @2014-01-01T08:00:00.000
    */  },
  "LowBoundaryTimeMillisecond": Tuple{
    skipped: 'LowBoundary not implemented'
    /*
    expression: LowBoundary(@T10:30, 9),
    output: @T10:30:00.000
    */  }
}

define "Ln": Tuple{
  "LnNull": Tuple{
    expression: Ln(null),
    output: null
  },
  "Ln0": Tuple{
    expression: Ln(0),
    invalid: true
  },
  "LnNeg0": Tuple{
    expression: Ln(-0),
    invalid: true
  },
  "Ln1": Tuple{
    expression: Ln(1),
    output: 0.0
  },
  "LnNeg1": Tuple{
    expression: Ln(-1),
    output: null
  },
  "Ln1000": Tuple{
    expression: Ln(1000),
    output: 6.907755278982136815102421678602695465087890625
  },
  "Ln1000D": Tuple{
    expression: Ln(1000.0),
    output: 6.907755278982136815102421678602695465087890625
  }
}

define "MinValue": Tuple{
  "IntegerMinValue": Tuple{
    expression: minimum Integer,
    output: -2147483648
  },
  "LongMinValue": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: minimum Long,
    output: -9223372036854775808
    */  },
  "DecimalMinValue": Tuple{
    expression: minimum Decimal,
    output: -99999999999999999999.99999999
  },
  "DateTimeMinValue": Tuple{
    expression: minimum DateTime,
    output: @0001-01-01T00:00:00.000
  },
  "DateMinValue": Tuple{
    expression: minimum Date,
    output: @0001-01-01
  },
  "TimeMinValue": Tuple{
    expression: minimum Time,
    output: @T00:00:00.000
  }
}

define "MaxValue": Tuple{
  "IntegerMaxValue": Tuple{
    expression: maximum Integer,
    output: 2147483647
  },
  "LongMaxValue": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: maximum Long,
    output: 9223372036854775807
    */  },
  "DecimalMaxValue": Tuple{
    expression: maximum Decimal,
    output: 99999999999999999999.99999999
  },
  "DateTimeMaxValue": Tuple{
    expression: maximum DateTime,
    output: @9999-12-31T23:59:59.999
  },
  "DateMaxValue": Tuple{
    expression: maximum Date,
    output: @9999-12-31
  },
  "TimeMaxValue": Tuple{
    expression: maximum Time,
    output: @T23:59:59.999
  }
}

define "Modulo": Tuple{
  "ModuloNull": Tuple{
    expression: 1 mod null,
    output: null
  },
  "Modulo0By0": Tuple{
    expression: 0 mod 0,
    output: null
  },
  "Modulo4By2": Tuple{
    expression: 4 mod 2,
    output: 0
  },
  "Modulo4LBy2L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: 4L mod 2L,
    output: 0L
    */  },
  "Modulo4DBy2D": Tuple{
    expression: 4.0 mod 2.0,
    output: 0.0
  },
  "Modulo10By3": Tuple{
    expression: 10 mod 3,
    output: 1
  },
  "Modulo10DBy3D": Tuple{
    expression: 10.0 mod 3.0,
    output: 1.0
  },
  "Modulo10IBy3D": Tuple{
    expression: 10 mod 3.0,
    output: 1.0
  },
  "ModuloDResult": Tuple{
    expression: 3.5 mod 3,
    output: 0.5
  },
  "ModuloQuantity": Tuple{
    skipped: 'Modulo not implemented for Quantity'
    /*
    expression: 3.5 'cm' mod 3 'cm',
    output: 0.5 'cm'
    */  }
}

define "Multiply": Tuple{
  "MultiplyNull": Tuple{
    expression: 1 * null,
    output: null
  },
  "Multiply1By1": Tuple{
    expression: 1 * 1,
    output: 1
  },
  "Multiply1DBy2D": Tuple{
    expression: 1.0 * 2.0,
    output: 2.0
  },
  "Multiply1By1L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: 1 * 1L,
    output: 1L
    */  },
  "Multiply1IBy2D": Tuple{
    expression: 1 * 2.0,
    output: 2.0
  },
  "Multiply1CMBy2CM": Tuple{
    expression: 1.0 'cm' * 2.0 'cm',
    output: 2.0'cm2'
  }
}

define "Negate": Tuple{
  "NegateNull": Tuple{
    expression: -(null as Integer),
    output: null
  },
  "Negate0": Tuple{
    expression: -0,
    output: 0
  },
  "NegateNeg0": Tuple{
    expression: -(-0),
    output: 0
  },
  "Negate1": Tuple{
    expression: -1,
    output: -1
  },
  "NegateNeg1": Tuple{
    expression: -(-1),
    output: 1
  },
  "NegateNeg1L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: -(-1L),
    output: 1L
    */  },
  "Negate0D": Tuple{
    expression: -(0.0),
    output: 0.0
  },
  "NegateNeg0D": Tuple{
    expression: -(-0.0),
    output: 0.0
  },
  "Negate1D": Tuple{
    expression: -(1.0),
    output: -1.0
  },
  "NegateNeg1D": Tuple{
    expression: -(-1.0),
    output: 1.0
  },
  "Negate1CM": Tuple{
    expression: -(1'cm'),
    output: -1.0'cm'
  }
}

define "Precision": Tuple{
  "PrecisionDecimal": Tuple{
    skipped: 'Precision for Decimal not implemented'
    /*
    expression: Precision(1.58700),
    output: 5
    */  },
  "PrecisionYear": Tuple{
    expression: Precision(@2014),
    output: 4
  },
  "PrecisionDateTimeMilliseconds": Tuple{
    expression: Precision(@2014-01-05T10:30:00.000),
    output: 17
  },
  "PrecisionTimeMinutes": Tuple{
    expression: Precision(@T10:30),
    output: 4
  },
  "PrecisionTimeMilliseconds": Tuple{
    expression: Precision(@T10:30:00.000),
    output: 9
  }
}

define "Predecessor": Tuple{
  "PredecessorNull": Tuple{
    expression: predecessor of (null as Integer),
    output: null
  },
  "PredecessorOf0": Tuple{
    expression: predecessor of 0,
    output: -1
  },
  "PredecessorOf1": Tuple{
    expression: predecessor of 1,
    output: 0
  },
  "PredecessorOf1L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: predecessor of 1L,
    output: 0L
    */  },
  "PredecessorOf1D": Tuple{
    skipped: 'Wrong answer (doesn\'t recognize 1.0 as decimal)'
    /*
    expression: predecessor of 1.0,
    output: 0.99999999
    */  },
  "PredecessorOf101D": Tuple{
    expression: predecessor of 1.01,
    output: 1.00999999
  },
  "PredecessorOf1QCM": Tuple{
    skipped: 'Wrong answer (doesn\'t recognize 1.0 as decimal)'
    /*
    expression: predecessor of 1.0 'cm',
    output: 0.99999999'cm'
    */  },
  "PredecessorOfJan12000": Tuple{
    expression: predecessor of DateTime(2000,1,1),
    output: @1999-12-31T
  },
  "PredecessorOfNoon": Tuple{
    expression: predecessor of @T12:00:00.000,
    output: @T11:59:59.999
  },
  "PredecessorUnderflowDt": Tuple{
    expression: predecessor of DateTime(0001, 1, 1, 0, 0, 0, 0),
    invalid: true
  },
  "PredecessorUnderflowT": Tuple{
    expression: predecessor of @T00:00:00.000,
    invalid: true
  }
}

define "Power": Tuple{
  "PowerNullToNull": Tuple{
    expression: Power(null as Integer, null as Integer),
    output: null
  },
  "Power0To0": Tuple{
    expression: Power(0, 0),
    output: 1
  },
  "Power2To2": Tuple{
    expression: Power(2, 2),
    output: 4
  },
  "PowerNeg2To2": Tuple{
    expression: Power(-2, 2),
    output: 4
  },
  "Power2ToNeg2": Tuple{
    expression: Power(2, -2),
    output: 0.25
  },
  "Power2LTo2L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: Power(2L, 2L),
    output: 4L
    */  },
  "Power2DTo2D": Tuple{
    expression: Power(2.0, 2.0),
    output: 4.0
  },
  "PowerNeg2DTo2D": Tuple{
    expression: Power(-2.0, 2.0),
    output: 4.0
  },
  "Power2DToNeg2D": Tuple{
    expression: Power(2.0, -2.0),
    output: 0.25
  },
  "Power2DTo2": Tuple{
    expression: Power(2.0, 2),
    output: 4.0
  },
  "Power2To2D": Tuple{
    expression: Power(2, 2.0),
    output: 4.0
  },
  "Power2To4": Tuple{
    expression: 2^4,
    output: 16
  },
  "Power2DTo4D": Tuple{
    expression: 2.0^4.0,
    output: 16.0
  },
  "Power2DToNeg2DEquivalence": Tuple{
    expression: Power(2, -2) ~ 0.25,
    output: true
  }
}

define "Round": Tuple{
  "RoundNull": Tuple{
    expression: Round(null as Decimal),
    output: null
  },
  "Round1": Tuple{
    expression: Round(1),
    output: 1.0
  },
  "Round0D5": Tuple{
    expression: Round(0.5),
    output: 1.0
  },
  "Round0D4": Tuple{
    expression: Round(0.4),
    output: 0.0
  },
  "Round3D14159": Tuple{
    expression: Round(3.14159, 2),
    output: 3.14
  },
  "RoundNeg0D5": Tuple{
    expression: Round(-0.5),
    output: 0.0
  },
  "RoundNeg0D4": Tuple{
    expression: Round(-0.4),
    output: 0.0
  },
  "RoundNeg0D6": Tuple{
    expression: Round(-0.6),
    output: -1.0
  },
  "RoundNeg1D1": Tuple{
    expression: Round(-1.1),
    output: -1.0
  },
  "RoundNeg1D5": Tuple{
    expression: Round(-1.5),
    output: -1.0
  },
  "RoundNeg1D6": Tuple{
    expression: Round(-1.6),
    output: -2.0
  }
}

define "Subtract": Tuple{
  "SubtractNull": Tuple{
    expression: 1 - null,
    output: null
  },
  "Subtract1And1": Tuple{
    expression: 1 - 1,
    output: 0
  },
  "Subtract1LAnd1L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: 1L - 1L,
    output: 0L
    */  },
  "Subtract1DAnd2D": Tuple{
    expression: 1.0 - 2.0,
    output: -1.0
  },
  "Subtract1CMAnd2CM": Tuple{
    expression: 1.0 'cm' - 2.0 'cm',
    output: -1.0'cm'
  },
  "Subtract2And11D": Tuple{
    expression: 2 - 1.1,
    output: 0.9
  }
}

define "Successor": Tuple{
  "SuccessorNull": Tuple{
    expression: successor of (null as Integer),
    output: null
  },
  "SuccessorOf0": Tuple{
    expression: successor of 0,
    output: 1
  },
  "SuccessorOf1": Tuple{
    expression: successor of 1,
    output: 2
  },
  "SuccessorOf1L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: successor of 1L,
    output: 2L
    */  },
  "SuccessorOf1D": Tuple{
    skipped: 'Wrong answer (doesn\'t recognize 1.0 as decimal)'
    /*
    expression: successor of 1.0,
    output: 1.00000001
    */  },
  "SuccessorOf101D": Tuple{
    expression: successor of 1.01,
    output: 1.01000001
  },
  "SuccessorOfJan12000": Tuple{
    expression: successor of DateTime(2000,1,1),
    output: @2000-01-02T
  },
  "SuccessorOfNoon": Tuple{
    expression: successor of @T12:00:00.000,
    output: @T12:00:00.001
  },
  "SuccessorOverflowDt": Tuple{
    expression: successor of DateTime(9999, 12, 31, 23, 59, 59, 999),
    invalid: true
  },
  "SuccessorOverflowT": Tuple{
    expression: successor of @T23:59:59.999,
    invalid: true
  }
}

define "Truncate": Tuple{
  "TruncateNull": Tuple{
    expression: Truncate(null as Decimal),
    output: null
  },
  "Truncate0": Tuple{
    expression: Truncate(0),
    output: 0
  },
  "Truncate0D0": Tuple{
    expression: Truncate(0.0),
    output: 0
  },
  "Truncate0D1": Tuple{
    expression: Truncate(0.1),
    output: 0
  },
  "Truncate1": Tuple{
    expression: Truncate(1),
    output: 1
  },
  "Truncate1D0": Tuple{
    expression: Truncate(1.0),
    output: 1
  },
  "Truncate1D1": Tuple{
    expression: Truncate(1.1),
    output: 1
  },
  "Truncate1D9": Tuple{
    expression: Truncate(1.9),
    output: 1
  },
  "TruncateNeg1": Tuple{
    expression: Truncate(-1),
    output: -1
  },
  "TruncateNeg1D0": Tuple{
    expression: Truncate(-1.0),
    output: -1
  },
  "TruncateNeg1D1": Tuple{
    expression: Truncate(-1.1),
    output: -1
  },
  "TruncateNeg1D9": Tuple{
    expression: Truncate(-1.9),
    output: -1
  }
}

define "Truncated Divide": Tuple{
  "TruncatedDivideNull": Tuple{
    expression: (null as Integer) div (null as Integer),
    output: null
  },
  "TruncatedDivide2By1": Tuple{
    expression: 2 div 1,
    output: 2
  },
  "TruncatedDivide10By3": Tuple{
    expression: 10 div 3,
    output: 3
  },
  "TruncatedDivide10LBy3L": Tuple{
    skipped: 'Long not implemented'
    /*
    expression: 10L div 3L,
    output: 3L
    */  },
  "TruncatedDivide10d1By3D1": Tuple{
    expression: 10.1 div 3.1,
    output: 3.0
  },
  "TruncatedDivideNeg2ByNeg1": Tuple{
    expression: -2 div -1,
    output: 2
  },
  "TruncatedDivideNeg10ByNeg3": Tuple{
    expression: -10 div -3,
    output: 3
  },
  "TruncatedDivideNeg10d1ByNeg3D1": Tuple{
    expression: -10.1 div -3.1,
    output: 3.0
  },
  "TruncatedDivideNeg2By1": Tuple{
    expression: -2 div 1,
    output: -2
  },
  "TruncatedDivideNeg10By3": Tuple{
    expression: -10 div 3,
    output: -3
  },
  "TruncatedDivideNeg10d1By3D1": Tuple{
    expression: -10.1 div 3.1,
    output: -3.0
  },
  "TruncatedDivide2ByNeg1": Tuple{
    expression: 2 div -1,
    output: -2
  },
  "TruncatedDivide10ByNeg3": Tuple{
    expression: 10 div -3,
    output: -3
  },
  "TruncatedDivide10d1ByNeg3D1": Tuple{
    expression: 10.1 div -3.1,
    output: -3.0
  },
  "TruncatedDivide10By5D": Tuple{
    expression: 10 div 5.0,
    output: 2.0
  },
  "TruncatedDivide10d1ByNeg3D1Quantity": Tuple{
    skipped: 'Truncated divide not implemented for Quantity'
    /*
    expression: 10.1 'cm' div -3.1 'cm',
    output: -3.0 'cm'
    */  }
}
