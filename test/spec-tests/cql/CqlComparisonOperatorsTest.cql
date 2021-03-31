library CqlComparisonOperatorsTest version '1.4.0'
using QUICK version '3.3.0'
context Patient

define "Between": Tuple{
  "BetweenIntTrue": Tuple{
    expression: 4 between 2 and 6,
    output: true
  }
}

define "Equal": Tuple{
  "SimpleEqTrueTrue": Tuple{
    expression: true = true,
    output: true
  },
  "SimpleEqTrueFalse": Tuple{
    expression: true = false,
    output: false
  },
  "SimpleEqFalseFalse": Tuple{
    expression: false = false,
    output: true
  },
  "SimpleEqFalseTrue": Tuple{
    expression: false = true,
    output: false
  },
  "SimpleEqNullNull": Tuple{
    expression: null as String = null,
    output: null
  },
  "SimpleEqTrueNull": Tuple{
    expression: true = null,
    output: null
  },
  "SimpleEqNullTrue": Tuple{
    expression: null = true,
    output: null
  },
  "SimpleEqInt1Int1": Tuple{
    expression: 1 = 1,
    output: true
  },
  "SimpleEqInt1Int2": Tuple{
    expression: 1 = 2,
    output: false
  },
  "SimpleEqStringAStringA": Tuple{
    expression: 'a' = 'a',
    output: true
  },
  "SimpleEqStringAStringB": Tuple{
    expression: 'a' = 'b',
    output: false
  },
  "SimpleEqFloat1Float1": Tuple{
    expression: 1.0 = 1.0,
    output: true
  },
  "SimpleEqFloat1Float2": Tuple{
    expression: 1.0 = 2.0,
    output: false
  },
  "SimpleEqFloat1Int1": Tuple{
    expression: 1.0 = 1,
    output: true
  },
  "SimpleEqFloat1Int2": Tuple{
    expression: 1.0 = 2,
    output: false
  },
  "QuantityEqCM1CM1": Tuple{
    expression: 1'cm' = 1'cm',
    output: true
  },
  "QuantityEqCM1M01": Tuple{
    expression: 1'cm' = 0.01'm',
    output: true
  },
  "QuantityEqDiffPrecision": Tuple{
    expression: 2.0'cm' = 2.00'cm',
    output: true
  },
  "TupleEqJohnJohn": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } = Tuple { Id : 1, Name : 'John' },
    output: true
  },
  "TupleEqJohnJane": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } = Tuple { Id : 2, Name : 'Jane' },
    output: false
  },
  "TupleEqJohn1John2": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } = Tuple { Id : 2, Name : 'John' },
    output: false
  },
  "TupleEqDateTimeTrue": Tuple{
    expression: Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 0, 0, 0, 0) } = Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 0, 0, 0, 0) },
    output: true
  },
  "TupleEqDateTimeFalse": Tuple{
    expression: Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 0, 0, 0, 0) } = Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 5, 0, 0, 0) },
    output: false
  },
  "TupleEqTimeTrue": Tuple{
    expression: Tuple { timeId: 55, TheTime: @T05:15:15.541 } = Tuple { timeId: 55, TheTime: @T05:15:15.541 },
    output: true
  },
  "TupleEqTimeFalse": Tuple{
    expression: Tuple { timeId: 55, TheTime: @T05:15:15.541 } = Tuple { timeId: 55, TheTime: @T05:15:15.540 },
    output: false
  },
  "DateTimeEqTodayToday": Tuple{
    expression: Today() = Today(),
    output: true
  },
  "DateTimeEqTodayYesterday": Tuple{
    expression: Today() = Today() - 1 days,
    output: false
  },
  "DateTimeEqJanJan": Tuple{
    expression: DateTime(2014, 1, 5, 5, 0, 0, 0, 0) = DateTime(2014, 1, 5, 5, 0, 0, 0, 0),
    output: true
  },
  "DateTimeEqJanJuly": Tuple{
    expression: DateTime(2014, 1, 5, 5, 0, 0, 0, 0) = DateTime(2014, 7, 5, 5, 0, 0, 0, 0),
    output: false
  },
  "DateTimeEqNull": Tuple{
    skipped: 'Wrong answer (true vs null - due to not evaluating DateTime(null) as null)'
    /*
    expression: DateTime(null) = DateTime(null),
    output: null
    */  },
  "DateTimeUTC": Tuple{
    expression: @2014-01-25T14:30:14.559+01:00 = @2014-01-25T14:30:14.559+01:00,
    output: true
  },
  "TimeEq10A10A": Tuple{
    expression: @T10:00:00.000 = @T10:00:00.000,
    output: true
  },
  "TimeEq10A10P": Tuple{
    expression: @T10:00:00.000 = @T22:00:00.000,
    output: false
  }
}

define "Greater": Tuple{
  "GreaterZZ": Tuple{
    expression: 0 > 0,
    output: false
  },
  "GreaterZ1": Tuple{
    expression: 0 > 1,
    output: false
  },
  "GreaterZNeg1": Tuple{
    expression: 0 > -1,
    output: true
  },
  "GreaterDecZZ": Tuple{
    expression: 0.0 > 0.0,
    output: false
  },
  "GreaterDecZ1": Tuple{
    expression: 0.0 > 1.0,
    output: false
  },
  "GreaterDecZNeg1": Tuple{
    expression: 0.0 > -1.0,
    output: true
  },
  "GreaterCM0CM0": Tuple{
    expression: 0'cm' > 0'cm',
    output: false
  },
  "GreaterCM0CM1": Tuple{
    expression: 0'cm' > 1'cm',
    output: false
  },
  "GreaterCM0NegCM1": Tuple{
    expression: 0'cm' > -1'cm',
    output: true
  },
  "GreaterM1CM1": Tuple{
    expression: 1'm' > 1'cm',
    output: true
  },
  "GreaterM1CM10": Tuple{
    expression: 1'm' > 10'cm',
    output: true
  },
  "GreaterAA": Tuple{
    expression: 'a' > 'a',
    output: false
  },
  "GreaterAB": Tuple{
    expression: 'a' > 'b',
    output: false
  },
  "GreaterBA": Tuple{
    expression: 'b' > 'a',
    output: true
  },
  "GreaterAThanAA": Tuple{
    expression: 'a' > 'aa',
    output: false
  },
  "GreaterAAThanA": Tuple{
    expression: 'aa' > 'a',
    output: true
  },
  "GreaterJackJill": Tuple{
    expression: 'Jack' > 'Jill',
    output: false
  },
  "DateTimeGreaterTrue": Tuple{
    expression: DateTime(2012, 2, 12) > DateTime(2012, 2, 10),
    output: true
  },
  "DateTimeGreaterFalse": Tuple{
    expression: DateTime(2012, 2, 12) > DateTime(2012, 2, 13),
    output: false
  },
  "TimeGreaterTrue": Tuple{
    expression: @T10:00:00.001 > @T10:00:00.000,
    output: true
  },
  "TimeGreaterFalse": Tuple{
    expression: @T10:00:00.000 > @T10:00:00.001,
    output: false
  },
  "UncertaintyGreaterNull": Tuple{
    expression: DateTime(2014) > DateTime(2014, 2, 15),
    output: null
  },
  "UncertaintyGreaterTrue": Tuple{
    expression: DateTime(2015) > DateTime(2014, 2, 15),
    output: true
  },
  "UncertaintyGreaterFalse": Tuple{
    expression: DateTime(2013) > DateTime(2014, 2, 15),
    output: false
  }
}

define "Greater Or Equal": Tuple{
  "GreaterOrEqualZZ": Tuple{
    expression: 0 >= 0,
    output: true
  },
  "GreaterOrEqualZ1": Tuple{
    expression: 0 >= 1,
    output: false
  },
  "GreaterOrEqualZNeg1": Tuple{
    expression: 0 >= -1,
    output: true
  },
  "GreaterOrEqualDecZZ": Tuple{
    expression: 0.0 >= 0.0,
    output: true
  },
  "GreaterOrEqualDecZ1": Tuple{
    expression: 0.0 >= 1.0,
    output: false
  },
  "GreaterOrEqualDecZNeg1": Tuple{
    expression: 0.0 >= -1.0,
    output: true
  },
  "GreaterOrEqualCM0CM0": Tuple{
    expression: 0'cm' >= 0'cm',
    output: true
  },
  "GreaterOrEqualCM0CM1": Tuple{
    expression: 0'cm' >= 1'cm',
    output: false
  },
  "GreaterOrEqualCM0NegCM1": Tuple{
    expression: 0'cm' >= -1'cm',
    output: true
  },
  "GreaterOrEqualM1CM1": Tuple{
    expression: 1'm' >= 1'cm',
    output: true
  },
  "GreaterOrEqualM1CM10": Tuple{
    expression: 1'm' >= 10'cm',
    output: true
  },
  "GreaterOrEqualAA": Tuple{
    expression: 'a' >= 'a',
    output: true
  },
  "GreaterOrEqualAB": Tuple{
    expression: 'a' >= 'b',
    output: false
  },
  "GreaterOrEqualBA": Tuple{
    expression: 'b' >= 'a',
    output: true
  },
  "GreaterOrEqualAThanAA": Tuple{
    expression: 'a' >= 'aa',
    output: false
  },
  "GreaterOrEqualAAThanA": Tuple{
    expression: 'aa' >= 'a',
    output: true
  },
  "GreaterOrEqualJackJill": Tuple{
    expression: 'Jack' >= 'Jill',
    output: false
  },
  "DateTimeGreaterEqTrue": Tuple{
    expression: DateTime(2012, 2, 12, 0, 0, 0, 0) >= DateTime(2012, 2, 10, 0, 0, 0, 0),
    output: true
  },
  "DateTimeGreaterEqTrue2": Tuple{
    expression: DateTime(2012, 2, 12, 0, 0, 0, 0) >= DateTime(2012, 2, 12, 0, 0, 0, 0),
    output: true
  },
  "DateTimeGreaterEqFalse": Tuple{
    expression: DateTime(2012, 2, 12, 0, 0, 0, 0) >= DateTime(2012, 2, 13, 0, 0, 0, 0),
    output: false
  },
  "TimeGreaterEqTrue": Tuple{
    expression: @T10:00:00.001 >= @T10:00:00.000,
    output: true
  },
  "TimeGreaterEqTrue2": Tuple{
    expression: @T10:00:00.000 >= @T10:00:00.000,
    output: true
  },
  "TimeGreaterEqFalse": Tuple{
    expression: @T10:00:00.000 >= @T10:00:00.001,
    output: false
  },
  "UncertaintyGreaterEqualNull": Tuple{
    expression: DateTime(2014) >= DateTime(2014, 2, 15),
    output: null
  },
  "UncertaintyGreaterEqualTrue": Tuple{
    expression: DateTime(2015) >= DateTime(2014, 2, 15),
    output: true
  },
  "UncertaintyGreaterEqualFalse": Tuple{
    expression: DateTime(2013) >= DateTime(2014, 2, 15),
    output: false
  }
}

define "Less": Tuple{
  "LessZZ": Tuple{
    expression: 0 < 0,
    output: false
  },
  "LessZ1": Tuple{
    expression: 0 < 1,
    output: true
  },
  "LessZNeg1": Tuple{
    expression: 0 < -1,
    output: false
  },
  "LessDecZZ": Tuple{
    expression: 0.0 < 0.0,
    output: false
  },
  "LessDecZ1": Tuple{
    expression: 0.0 < 1.0,
    output: true
  },
  "LessDecZNeg1": Tuple{
    expression: 0.0 < -1.0,
    output: false
  },
  "LessCM0CM0": Tuple{
    expression: 0'cm' < 0'cm',
    output: false
  },
  "LessCM0CM1": Tuple{
    expression: 0'cm' < 1'cm',
    output: true
  },
  "LessCM0NegCM1": Tuple{
    expression: 0'cm' < -1'cm',
    output: false
  },
  "LessM1CM1": Tuple{
    expression: 1'm' < 1'cm',
    output: false
  },
  "LessM1CM10": Tuple{
    expression: 1'm' < 10'cm',
    output: false
  },
  "LessAA": Tuple{
    expression: 'a' < 'a',
    output: false
  },
  "LessAB": Tuple{
    expression: 'a' < 'b',
    output: true
  },
  "LessBA": Tuple{
    expression: 'b' < 'a',
    output: false
  },
  "LessAThanAA": Tuple{
    expression: 'a' < 'aa',
    output: true
  },
  "LessAAThanA": Tuple{
    expression: 'aa' < 'a',
    output: false
  },
  "LessJackJill": Tuple{
    expression: 'Jack' < 'Jill',
    output: true
  },
  "DateTimeLessTrue": Tuple{
    expression: DateTime(2012, 2, 9) < DateTime(2012, 2, 10),
    output: true
  },
  "DateTimeLessFalse": Tuple{
    expression: DateTime(2012, 2, 14) < DateTime(2012, 2, 13),
    output: false
  },
  "TimeLessTrue": Tuple{
    expression: @T10:00:00.001 < @T10:00:00.002,
    output: true
  },
  "TimeLessFalse": Tuple{
    expression: @T10:10:00.000 < @T10:00:00.001,
    output: false
  },
  "UncertaintyLessNull": Tuple{
    expression: DateTime(2014) < DateTime(2014, 2, 15),
    output: null
  },
  "UncertaintyLessTrue": Tuple{
    expression: DateTime(2013) < DateTime(2014, 2, 15),
    output: true
  },
  "UncertaintyLessFalse": Tuple{
    expression: DateTime(2015) < DateTime(2014, 2, 15),
    output: false
  }
}

define "Less Or Equal": Tuple{
  "LessOrEqualZZ": Tuple{
    expression: 0 <= 0,
    output: true
  },
  "LessOrEqualZ1": Tuple{
    expression: 0 <= 1,
    output: true
  },
  "LessOrEqualZNeg1": Tuple{
    expression: 0 <= -1,
    output: false
  },
  "LessOrEqualDecZZ": Tuple{
    expression: 0.0 <= 0.0,
    output: true
  },
  "LessOrEqualDecZ1": Tuple{
    expression: 0.0 <= 1.0,
    output: true
  },
  "LessOrEqualDecZNeg1": Tuple{
    expression: 0.0 <= -1.0,
    output: false
  },
  "LessOrEqualCM0CM0": Tuple{
    expression: 0'cm' <= 0'cm',
    output: true
  },
  "LessOrEqualCM0CM1": Tuple{
    expression: 0'cm' <= 1'cm',
    output: true
  },
  "LessOrEqualCM0NegCM1": Tuple{
    expression: 0'cm' <= -1'cm',
    output: false
  },
  "LessOrEqualM1CM1": Tuple{
    expression: 1'm' <= 1'cm',
    output: false
  },
  "LessOrEqualM1CM10": Tuple{
    expression: 1'm' <= 10'cm',
    output: false
  },
  "LessOrEqualAA": Tuple{
    expression: 'a' <= 'a',
    output: true
  },
  "LessOrEqualAB": Tuple{
    expression: 'a' <= 'b',
    output: true
  },
  "LessOrEqualBA": Tuple{
    expression: 'b' <= 'a',
    output: false
  },
  "LessOrEqualAThanAA": Tuple{
    expression: 'a' <= 'aa',
    output: true
  },
  "LessOrEqualAAThanA": Tuple{
    expression: 'aa' <= 'a',
    output: false
  },
  "LessOrEqualJackJill": Tuple{
    expression: 'Jack' <= 'Jill',
    output: true
  },
  "DateTimeLessEqTrue": Tuple{
    expression: DateTime(2012, 2, 9, 0, 0, 0, 0) <= DateTime(2012, 2, 10, 0, 0, 0, 0),
    output: true
  },
  "DateTimeLessEqTrue2": Tuple{
    expression: DateTime(2012, 2, 12, 0, 0, 0, 0) <= DateTime(2012, 2, 12, 0, 0, 0, 0),
    output: true
  },
  "DateTimeLessEqFalse": Tuple{
    expression: DateTime(2012, 2, 12, 1, 0, 0, 0) <= DateTime(2012, 2, 12, 0, 0, 0, 0),
    output: false
  },
  "TimeLessEqTrue": Tuple{
    expression: @T10:00:00.001 <= @T10:00:00.002,
    output: true
  },
  "TimeLessEqTrue2": Tuple{
    expression: @T10:00:00.000 <= @T10:00:00.000,
    output: true
  },
  "TimeLessEqFalse": Tuple{
    expression: @T10:00:00.002 <= @T10:00:00.001,
    output: false
  },
  "UncertaintyLessEqualNull": Tuple{
    expression: DateTime(2014) <= DateTime(2014, 2, 15),
    output: null
  },
  "UncertaintyLessEqualTrue": Tuple{
    expression: DateTime(2013) <= DateTime(2014, 2, 15),
    output: true
  },
  "UncertaintyLessEqualFalse": Tuple{
    expression: DateTime(2015) <= DateTime(2014, 2, 15),
    output: false
  }
}

define "Equivalent": Tuple{
  "EquivTrueTrue": Tuple{
    expression: true ~ true,
    output: true
  },
  "EquivTrueFalse": Tuple{
    expression: true ~ false,
    output: false
  },
  "EquivFalseFalse": Tuple{
    expression: false ~ false,
    output: true
  },
  "EquivFalseTrue": Tuple{
    expression: false ~ true,
    output: false
  },
  "EquivNullNull": Tuple{
    expression: null as String ~ null,
    output: true
  },
  "EquivTrueNull": Tuple{
    expression: true ~ null,
    output: false
  },
  "EquivNullTrue": Tuple{
    expression: null ~ true,
    output: false
  },
  "EquivInt1Int1": Tuple{
    expression: 1 ~ 1,
    output: true
  },
  "EquivInt1Int2": Tuple{
    expression: 1 ~ 2,
    output: false
  },
  "EquivStringAStringA": Tuple{
    expression: 'a' ~ 'a',
    output: true
  },
  "EquivStringAStringB": Tuple{
    expression: 'a' ~ 'b',
    output: false
  },
  "EquivFloat1Float1": Tuple{
    expression: 1.0 ~ 1.0,
    output: true
  },
  "EquivFloat1Float2": Tuple{
    expression: 1.0 ~ 2.0,
    output: false
  },
  "EquivFloat1Int1": Tuple{
    expression: 1.0 ~ 1,
    output: true
  },
  "EquivFloat1Int2": Tuple{
    expression: 1.0 ~ 2,
    output: false
  },
  "EquivEqCM1CM1": Tuple{
    expression: 1'cm' ~ 1'cm',
    output: true
  },
  "EquivEqCM1M01": Tuple{
    expression: 1'cm' ~ 0.01'm',
    output: true
  },
  "EquivTupleJohnJohn": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } ~ Tuple { Id : 1, Name : 'John' },
    output: true
  },
  "EquivTupleJohnJohnWithNulls": Tuple{
    expression: Tuple { Id : 1, Name : 'John', Position: null } ~ Tuple { Id : 1, Name : 'John', Position: null },
    output: true
  },
  "EquivTupleJohnJane": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } ~ Tuple { Id : 2, Name : 'Jane' },
    output: false
  },
  "EquivTupleJohn1John2": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } ~ Tuple { Id : 2, Name : 'John' },
    output: false
  },
  "EquivDateTimeTodayToday": Tuple{
    expression: Today() ~ Today(),
    output: true
  },
  "EquivDateTimeTodayYesterday": Tuple{
    expression: Today() ~ Today() - 1 days,
    output: false
  },
  "EquivTime10A10A": Tuple{
    expression: @T10:00:00.000 ~ @T10:00:00.000,
    output: true
  },
  "EquivTime10A10P": Tuple{
    expression: @T10:00:00.000 ~ @T22:00:00.000,
    output: false
  }
}

define "Not Equal": Tuple{
  "SimpleNotEqTrueTrue": Tuple{
    expression: true != true,
    output: false
  },
  "SimpleNotEqTrueFalse": Tuple{
    expression: true != false,
    output: true
  },
  "SimpleNotEqFalseFalse": Tuple{
    expression: false != false,
    output: false
  },
  "SimpleNotEqFalseTrue": Tuple{
    expression: false != true,
    output: true
  },
  "SimpleNotEqNullNull": Tuple{
    expression: null as String != null,
    output: null
  },
  "SimpleNotEqTrueNull": Tuple{
    expression: true != null,
    output: null
  },
  "SimpleNotEqNullTrue": Tuple{
    expression: null != true,
    output: null
  },
  "SimpleNotEqInt1Int1": Tuple{
    expression: 1 != 1,
    output: false
  },
  "SimpleNotEqInt1Int2": Tuple{
    expression: 1 != 2,
    output: true
  },
  "SimpleNotEqStringAStringA": Tuple{
    expression: 'a' != 'a',
    output: false
  },
  "SimpleNotEqStringAStringB": Tuple{
    expression: 'a' != 'b',
    output: true
  },
  "SimpleNotEqFloat1Float1": Tuple{
    expression: 1.0 != 1.0,
    output: false
  },
  "SimpleNotEqFloat1Float2": Tuple{
    expression: 1.0 != 2.0,
    output: true
  },
  "SimpleNotEqFloat1Int1": Tuple{
    expression: 1.0 != 1,
    output: false
  },
  "SimpleNotEqFloat1Int2": Tuple{
    expression: 1.0 != 2,
    output: true
  },
  "QuantityNotEqCM1CM1": Tuple{
    expression: 1'cm' != 1'cm',
    output: false
  },
  "QuantityNotEqCM1M01": Tuple{
    expression: 1'cm' != 0.01'm',
    output: false
  },
  "TupleNotEqJohnJohn": Tuple{
    expression: Tuple{ Id : 1, Name : 'John' } != Tuple{ Id : 1, Name : 'John' },
    output: false
  },
  "TupleNotEqJohnJane": Tuple{
    expression: Tuple{ Id : 1, Name : 'John' } != Tuple{ Id : 2, Name : 'Jane' },
    output: true
  },
  "TupleNotEqJohn1John2": Tuple{
    expression: Tuple{ Id : 1, Name : 'John' } != Tuple{ Id : 2, Name : 'John' },
    output: true
  },
  "DateTimeNotEqTodayToday": Tuple{
    expression: Today() != Today(),
    output: false
  },
  "DateTimeNotEqTodayYesterday": Tuple{
    expression: Today() != Today() - 1 days,
    output: true
  },
  "TimeNotEq10A10A": Tuple{
    expression: @T10:00:00.000 != @T10:00:00.000,
    output: false
  },
  "TimeNotEq10A10P": Tuple{
    expression: @T10:00:00.000 != @T22:00:00.000,
    output: true
  }
}
