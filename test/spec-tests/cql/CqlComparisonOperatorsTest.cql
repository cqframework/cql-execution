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
  "SimpleEqLong1Long2": Tuple{
    expression: 1L = 2L,
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
  "SimpleEqFloat1Float1WithZ": Tuple{
    expression: 1.0 = 1.00,
    output: true
  },
  "SimpleEqFloat1Float1WithPrecisionAndZ": Tuple{
    expression: 1.50 = 1.55,
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
  "RatioEqual": Tuple{
    expression: 1'cm':2'cm' = 1'cm':2'cm',
    output: true
  },
  "RatioNotEqualDiffNumerator": Tuple{
    expression: 1'cm':2'cm' = 1.1'cm':2'cm',
    output: false
  },
  "RatioNotEqualDiffDenominator": Tuple{
    expression: 1'cm':2'cm' = 1'cm':2.1'cm',
    output: false
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
  "TupleEqJohn1John2WithNullName": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } = Tuple { Id : 2, Name : null },
    output: false
  },
  "TupleEqDifferentNamesWithOneNullId": Tuple{
    skipped: 'Wrong output: Tuple equality with a known-unequal element should return false'
    /*
    expression: Tuple { Id : null, Name : 'John' } = Tuple { Id : 1, Name : 'James' },
    output: null
    */  },
  "TupleEqJohn1John1WithBothNamesNull": Tuple{
    expression: Tuple { Id : 1, Name : null } = Tuple { Id : 1, Name : null },
    output: true
  },
  "TupleEqJohnJohnWithBothIdsNull": Tuple{
    expression: Tuple { Id : null, Name : 'John' } = Tuple { Id : null, Name : 'John' },
    output: true
  },
  "TupleEqJohn1John1WithNullName": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } = Tuple { Id : 1, Name : null },
    output: null
  },
  "TupleEqDateTimeTrue": Tuple{
    expression: Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 0, 0, 0, 0) } = Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 0, 0, 0, 0) },
    output: true
  },
  "TupleEqDateTimeFalse": Tuple{
    expression: Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 0, 0, 0, 0) } = Tuple { dateId: 1, Date: DateTime(2012, 10, 5, 5, 0, 0, 0) },
    output: false
  },
  "TupleEqDateTimeTrue2": Tuple{
    expression: Tuple { dateId: 12, Date: DateTime(2012, 1, 1) } = Tuple { dateId: 12, Date: DateTime(2012, 1, 1) },
    output: true
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
  "DateTimeEqMissingArg": Tuple{
    expression: DateTime(2015, 1, 5, 5, 0, 0) = DateTime(2015, 1, 5, 5, 0, 0),
    output: true
  },
  "DateTimeEqNull": Tuple{
    skipped: 'Wrong answer (true vs null - due to not evaluating DateTime(null) as null)'
    /*
    expression: DateTime(null) = DateTime(null),
    output: null
    */  },
  "DateTimeEqTrue": Tuple{
    expression: DateTime(2001, 1, 1, null) = DateTime(2001, 1, 1, null, null),
    output: true
  },
  "DateTimeUTC": Tuple{
    expression: @2014-01-25T14:30:14.559+01:00 = @2014-01-25T14:30:14.559+01:00,
    output: true
  },
  "DateTimeDayCompare": Tuple{
    expression: @2022-02-22T00:00:00.000-05:00 same day as @2022-02-22T04:59:00.000Z,
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
  "GreaterLong": Tuple{
    expression: 0L > 10L,
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
  "GreaterDec1Int2": Tuple{
    expression: 1.0 > 2,
    output: false
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
  "GreaterOrEqualZ1Long": Tuple{
    expression: 0L >= 10L,
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
  "GreaterOrEqualDec1Int2": Tuple{
    expression: 1.0 >= 2,
    output: false
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
  "LessLong": Tuple{
    expression: 0L < 10L,
    output: true
  },
  "LessLongNeg": Tuple{
    expression: -30L < -20L,
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
  "LessDec1Int2": Tuple{
    expression: 1.0 < 2,
    output: true
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
  "LessOrEqualZ1Long": Tuple{
    expression: 0L <= 10L,
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
  "LessOrEqualDec1Int2": Tuple{
    expression: 1.0 <= 2,
    output: true
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
  "EquivStringIgnoreCase": Tuple{
    expression: 'Abel' ~ 'abel',
    output: true
  },
  "EquivFloat1Float1": Tuple{
    expression: 1.0 ~ 1.0,
    output: true
  },
  "EquivFloat1Float2": Tuple{
    expression: 1.0 ~ 2.0,
    output: false
  },
  "EquivFloat1Float1WithZ": Tuple{
    expression: 1.0 ~ 1.00,
    output: true
  },
  "EquivFloat1Float1WithPrecision": Tuple{
    expression: 1.5 ~ 1.55,
    output: false
  },
  "EquivFloat1Float1WithPrecisionAndZ": Tuple{
    expression: 1.50 ~ 1.55,
    output: false
  },
  "EquivFloatTrailingZero": Tuple{
    expression: 1.001 ~ 1.000,
    output: true
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
  "RatioEquivalent": Tuple{
    expression: 1'cm':2'cm' ~ 1'cm':2'cm',
    output: true
  },
  "RatioNotEquivalentDiffNumerator": Tuple{
    expression: 1'cm':2'cm' ~ 3'cm':2'cm',
    output: false
  },
  "RatioNotEquivalentDiffDenominator": Tuple{
    expression: 1'cm':2'cm' ~ 1'cm':3'cm',
    output: false
  },
  "EquivTupleJohnJohn": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } ~ Tuple { Id : 1, Name : 'John' },
    output: true
  },
  "EquivTupleJohnJohnWithNulls": Tuple{
    expression: Tuple { Id : 1, Name : 'John', Position: null } ~ Tuple { Id : 1, Name : 'John', Position: null },
    output: true
  },
  "EquivTupleJohnJohnFalse": Tuple{
    expression: Tuple { Id : 1, Name : 'John', Position: 'Shift Manager' } ~ Tuple { Id : 1, Name : 'John' },
    invalid: true
  },
  "EquivTupleJohnJohnFalse2": Tuple{
    expression: Tuple { Id : 1, Name : 'John' } ~ Tuple { Id : 1, Name : 'John', Position: 'Shift Manager' },
    invalid: true
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
  "SimpleNotEqLong1Long2": Tuple{
    expression: 1L != 2L,
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
  "TupleNotEqJohn1John2WithNullName": Tuple{
    expression: Tuple{ Id : 1, Name : 'John' } != Tuple{ Id : 2, Name : null },
    output: true
  },
  "TupleNotEqDifferingNamesWithOneNullId": Tuple{
    skipped: 'Wrong output: Tuple inequality with a known-unequal element should return true'
    /*
    expression: Tuple{ Id : null, Name : 'John' } != Tuple{ Id : 1, Name : 'Joe' },
    output: null
    */  },
  "TupleNotEqJohn1John1WithBothNamesNull": Tuple{
    expression: Tuple{ Id : 1, Name : null } != Tuple{ Id : 1, Name : null },
    output: false
  },
  "TupleNotEqMatchingNamesWithNullIDs": Tuple{
    expression: Tuple{ Id : null, Name : 'John' } != Tuple{ Id : null, Name : 'John' },
    output: false
  },
  "TupleNotEqJohn1John1WithNullName": Tuple{
    expression: Tuple{ Id : 1, Name : 'John' } != Tuple{ Id : 1, Name : null },
    output: null
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

define "Unit Comparison": Tuple{
  "TestQuantityMillisecondEqualMs": Tuple{
    expression: 1 millisecond = 1 'ms',
    output: true
  },
  "TestQuantityMillisecondEqualMilliseconds": Tuple{
    expression: 1 millisecond = 1 milliseconds,
    output: true
  },
  "TestQuantityMillisecondsEqualMs": Tuple{
    expression: 1 milliseconds = 1 'ms',
    output: true
  },
  "TestQuantitySecondEqualS": Tuple{
    expression: 1 second = 1 's',
    output: true
  },
  "TestQuantitySecondEqualSeconds": Tuple{
    expression: 1 second = 1 seconds,
    output: true
  },
  "TestQuantitySecondsEqualS": Tuple{
    expression: 1 seconds = 1 's',
    output: true
  },
  "TestQuantityMinuteEqualMin": Tuple{
    expression: 1 minute = 1 'min',
    output: true
  },
  "TestQuantityMinuteEqualMinutes": Tuple{
    expression: 1 minute = 1 minutes,
    output: true
  },
  "TestQuantityMinutesEqualMin": Tuple{
    expression: 1 minutes = 1 'min',
    output: true
  },
  "TestQuantityHourEqualH": Tuple{
    expression: 1 hour = 1 'h',
    output: true
  },
  "TestQuantityHourEqualHours": Tuple{
    expression: 1 hour = 1 hours,
    output: true
  },
  "TestQuantityHoursEqualH": Tuple{
    expression: 1 hours = 1 'h',
    output: true
  },
  "TestQuantityDayEqualD": Tuple{
    expression: 1 day = 1 'd',
    output: true
  },
  "TestQuantityDayEqualDays": Tuple{
    expression: 1 day = 1 days,
    output: true
  },
  "TestQuantityDaysEqualD": Tuple{
    expression: 1 days = 1 'd',
    output: true
  },
  "TestQuantityWeekEqualWk": Tuple{
    expression: 1 week = 1 'wk',
    output: true
  },
  "TestQuantityWeekEqualWeeks": Tuple{
    expression: 1 week = 1 weeks,
    output: true
  },
  "TestQuantityWeeksEqualWk": Tuple{
    expression: 1 weeks = 1 'wk',
    output: true
  },
  "TestQuantityMonthEqualMo": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 month = 1 'mo',
    output: null
    */  },
  "TestQuantityMonthNotEqualMo": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 month != 1 'mo',
    output: null
    */  },
  "TestQuantityMonthEquivalentMo": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 month ~ 1 'mo',
    output: true
    */  },
  "TestQuantityMonthEqualMonths": Tuple{
    expression: 1 month = 1 months,
    output: true
  },
  "TestQuantityMonthsNotEqualMo": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 months != 1 'mo',
    output: null
    */  },
  "TestQuantityMonthsEquivalentMo": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 months ~ 1 'mo',
    output: true
    */  },
  "TestQuantityYearEqualA": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 year = 1 'a',
    output: null
    */  },
  "TestQuantityYearNotEqualA": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 year != 1 'a',
    output: null
    */  },
  "TestQuantityYearEquivalentA": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 year ~ 1 'a',
    output: true
    */  },
  "TestQuantityYearsEqualYear": Tuple{
    expression: 1 years = 1 year,
    output: true
  },
  "TestQuantityYearsNotEqualA": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 years != 1 'a',
    output: null
    */  },
  "TestQuantityYearsEquivalentA": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 years ~ 1 'a',
    output: true
    */  },
  "TestYearEquivalentMonths": Tuple{
    expression: 1 year ~ 12 months,
    output: true
  },
  "TestYearEquivalentDays": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 year ~ 365 days,
    output: true
    */  },
  "TestMonthEquivalentDays": Tuple{
    skipped: 'Wrong answer: Quantity =/~ should have special semantics for calendar-based units'
    /*
    expression: 1 month ~ 30 days,
    output: true
    */  },
  "TestWeekEqualDays": Tuple{
    expression: 1 week = 7 days,
    output: true
  },
  "TestDayEqualHours": Tuple{
    expression: 1 day = 24 hours,
    output: true
  },
  "TestHourEqualMinutes": Tuple{
    expression: 1 hour = 60 minutes,
    output: true
  },
  "TestMinuteEqualSeconds": Tuple{
    expression: 1 minute = 60 seconds,
    output: true
  },
  "TestSecondEqualMilliseconds": Tuple{
    expression: 1 second = 1000 milliseconds,
    output: true
  }
}
