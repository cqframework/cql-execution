// @Test: Add
define Ten: 10
define Eleven: 11
define OnePlusTwo: 1 + 2
define AddMultiple: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
define AddVariables: Ten + Eleven
define OnePlusTwoLong: 1L + 2L
define OnePlusTwoMixed: 1 + 2L
define OnePlusTwoReverseMixed: 1L + 2
define AddTime: Time(12) + 1 'hour'
define UncertaintyZeroToTwelve: months between DateTime(2005, 12) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define AddUncertainties: UncertaintyZeroToTwelve + UncertaintySixToEighteen
define AddUncertaintyAndNumber: UncertaintyZeroToTwelve + 5
define AddNumberAndUncertainty: 10 + UncertaintyZeroToTwelve

// @Test: Subtract
define Ten: 10
define Eleven: 11
define FiveMinusTwo: 5 - 2
define SubtractMultiple: 100 - 50 - 25 - 10
define SubtractVariables: Eleven - Ten
define FiveMinusTwoLong: 5L - 2L
define FiveMinusTwoMixed: 5 - 2L
define FiveMinusTwoReverseMixed: 5L - 2
define UncertaintyZeroToTwelve: months between DateTime(2005, 12) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define SubtractUncertainties: UncertaintySixToEighteen - UncertaintyZeroToTwelve
define SubtractNumberFromUncertainty: UncertaintySixToEighteen - 5
define SubtractUncertaintyFromNumber: 10 - UncertaintySixToEighteen

// @Test: Multiply
define Ten: 10
define Eleven: 11
define FiveTimesTwo: 5 * 2
define MultiplyMultiple: 1 * 2 * 3 * 4 * 5
define MultiplyVariables: Eleven * Ten
define FiveTimesTwoLong: 5L * 2L
define FiveTimesTwoMixed: 5 * 2L
define FiveTimesTwoReverseMixed: 5L * 2
define UncertaintyTwoToFourteen: months between DateTime(2005, 10) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define MultiplyUncertainties: UncertaintyTwoToFourteen * UncertaintySixToEighteen
define MultiplyUncertaintyAndNumber: UncertaintyTwoToFourteen * 5
define MultiplyNumberAndUncertainty: 10 * UncertaintyTwoToFourteen

// @Test: Divide
define Hundred: 100
define Four: 4
define TenDividedByTwo: 10 / 2
define TenDividedByFour: 10 / 4
define DivideMultiple: 1000 / 4 / 10 / 5
define DivideVariables: Hundred / Four
define TenDividedByTwoLong: 10L / 2L
define TenDividedByTwoMixed: 10 / 2L
define TenDividedByTwoReverseMixed: 10L / 2
define TenDividedByFourLong: 10L / 4L
define TenDividedByFourMixed: 10 / 4L
define TenDividedByFourReverseMixed: 10L / 4
define UncertaintyTwoToFourteen: months between DateTime(2005, 10) and DateTime(2006)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define DivideUncertainties: UncertaintySixToEighteen / UncertaintyTwoToFourteen
define DivideUncertaintyByNumber: UncertaintySixToEighteen / 2
define DivideNumberByUncertainty: 36 / UncertaintySixToEighteen

// @Test: Negate
define NegativeOne: -1
define NegativeOneLong: -1L

// @Test: MathPrecedence
define Mixed: 1 + 5 * 10 - 15 / 3
define Parenthetical: (1 + 5) * (10 - 15) / 3

// @Test: Power
define Pow: 3 ^ 4
define ThreeExpFourLong: 3L ^ 4L
define ThreeExpFourMixed: 3 ^ 4L
define ThreeExpFourReverseMixed: 3L ^ 4

// @Test: MinValue
define MinInteger: minimum Integer
define MinLong: minimum Long
define MinDecimal: minimum Decimal
define MinDateTime: minimum  DateTime
define MinTime: minimum Time
define MinWrongType: minimum Quantity

// @Test: MaxValue
define MaxInteger: maximum Integer
define MaxLong: maximum Long
define MaxDecimal: maximum Decimal
define MaxDateTime: maximum DateTime
define MaxTime: maximum Time
define MaxWrongType: maximum Quantity

// @Test: TruncatedDivide
define Trunc: 10 div 3
define Even: 9 div 3
define TenDivThreeLong: 10L div 3L
define TenDivThreeMixed: 10 div 3L
define TenDivThreeReverseMixed: 10L div 3

// @Test: Modulo
define Mod: 3 mod 2
define ThreeModTwoLong: 3L mod 2L
define ThreeModTwoMixed: 3 mod 2L
define ThreeModTwoReverseMixed: 3L mod 2


// @Test: Ceiling
define Ceil: Ceiling(10.1)
define Even: Ceiling(10)
define CeilTenLong: Ceiling(10L)

// @Test: Floor
define flr: Floor(10.1)
define Even: Floor(10)
define FloorTenLong: Floor(10L)

// @Test: Truncate
define Trunc: Truncate(10.1)
define Even: Truncate(10)
define TruncTenLong: Truncate(10L)

// @Test: Abs
define Pos: Abs(10)
define Neg: Abs(-10)
define Zero: Abs(0)
define AbsNegTenLong: Abs(-10L)

// @Test: Round
define Up: Round(4.56)
define Up_percent: Round(4.56,1)
define Down: Round(4.49)
define Down_percent: Round(4.43,1)

// @Test: Ln
define ln: Ln(4)
define LnFourLong: Ln(4L)

// @Test: Log
define log: Log(10,10000)
define logLong: Log(10L,10000L)

// @Test: Successor
define Is: successor of 2
define Ls: successor of 2L
define Rs: successor of 2.2
define ofr: successor of 2147483647
define y_date: successor of DateTime(2015)
define ym_date: successor of DateTime(2015,01)
define ymd_date: successor of DateTime(2015,01,01)
define ymdh_date: successor of DateTime(2015,01,01,0)
define ymdhm_date: successor of DateTime(2015,01,01,0,0)
define ymdhms_date: successor of DateTime(2015,01,01,0,0,0)
define ymdhmsm_date: successor of  DateTime(2015,01,01,0,0,0,0)
define max_date: successor of DateTime(9999,12,31,23,59,59,999)

// @Test: Predecessor
define Is: predecessor of 2
define Ls: predecessor of 2L
define Rs: predecessor of 2.2
define ufr: predecessor of -2147483648
define y_date: predecessor of DateTime(2015)
define ym_date: predecessor of DateTime(2015,01)
define ymd_date: predecessor of DateTime(2015,01,01)
define ymdh_date: predecessor of DateTime(2015,01,01,0)
define ymdhm_date: predecessor of DateTime(2015,01,01,0,0)
define ymdhms_date: predecessor of DateTime(2015,01,01,0,0,0)
define ymdhmsm_date: predecessor of DateTime(2015,01,01,0,0,0,0)
define min_date: predecessor of DateTime(0001,01,01,0,0,0,0)


// @Test: Quantity

define days_10: 10 days
define QL10Days: Quantity{value: 10, unit: 'days'}
define QL10Min : Quantity{value: 10, unit: 'min' }
define Jan1_2000: DateTime(2000, 1, 1)
define add_q_q : days_10 + QL10Days
define add_d_q : Jan1_2000 + days_10
define sub_q_q : days_10 - QL10Days
define sub_d_q : Jan1_2000 - days_10
define add_q_q_diff : QL10Days + QL10Min
define sub_q_q_diff : QL10Days - QL10Min
define div_q_d : days_10 / 2
define div_q_q : days_10 / QL10Days
define mul_q_d : days_10 * 2
define mul_d_q : 2 * QL10Days
define mul_q_q : 2 'm' * 10 'm'
define mul_q_q_diff : 2 'm' * 10 '/d'
define neg : - days_10
define abs : Abs(neg)
define MultiplyUcum: (5 'm' * 25 'km') = 125000 'm2'
define DivideUcum: (20 'm2' / 5 'm') = 4 'm'
define AddUcum: (5 'm' + 5 'km') = 5005 'm'
define SubtractUcum: (25 'km' - 5 'm') = 24995 'm'

// @Test: OutOfBounds
define IntegerAddOverflow: maximum Integer + 1
define IntegerAddUnderflow: minimum Integer + -1
define IntegerAddNearOverflow: maximum Integer + 0
define IntegerAddNearUnderflow: minimum Integer + 0
define IntegerSubtractOverflow: maximum Integer - -1
define IntegerSubtractUnderflow: minimum Integer - 1
define IntegerSubtractNearOverflow: maximum Integer - 0
define IntegerSubtractNearUnderflow: minimum Integer - 0
define IntegerMultiplyOverflow: maximum Integer * 2
define IntegerMultiplyUnderflow: minimum Integer * 2
define IntegerMultiplyNearOverflow: maximum Integer * 1
define IntegerMultiplyNearUnderflow: minimum Integer * 1
define IntegerDivideOverflow: maximum Integer / 0.5
define IntegerDivideUnderflow: minimum Integer / 0.5
define IntegerDivideNearOverflow: maximum Integer / 1
define IntegerDivideNearUnderflow: minimum Integer / 1
define IntegerDivideByZero: 1 / 0
define IntegerPowerOverflow: (maximum Integer)^3
define IntegerPowerUnderflow: (minimum Integer)^3
define IntegerPowerNearOverflow: (maximum Integer)^1
define IntegerPowerNearUnderflow: (minimum Integer)^1
define IntegerSuccessorOverflow: successor of maximum Integer
define IntegerPredecessorUnderflow: predecessor of minimum Integer
define IntegerSuccessorNearOverflow: successor of (maximum Integer - 1)
define IntegerPredecessorNearUnderflow: predecessor of (minimum Integer + 1)

define LongAddOverflow: maximum Long + 1L
define LongAddUnderflow: minimum Long + -1L
define LongAddNearOverflow: maximum Long + 0L
define LongAddNearUnderflow: minimum Long + 0L
define LongSubtractOverflow: maximum Long - -1L
define LongSubtractUnderflow: minimum Long - 1L
define LongSubtractNearOverflow: maximum Long - 0L
define LongSubtractNearUnderflow: minimum Long - 0L
define LongMultiplyOverflow: maximum Long * 2L
define LongMultiplyUnderflow: minimum Long * 2L
define LongMultiplyNearOverflow: maximum Long * 1L
define LongMultiplyNearUnderflow: minimum Long * 1L
define LongDivideOverflow: maximum Long / 0.5
define LongDivideUnderflow: minimum Long / 0.5
define LongDivideNearOverflow: ToLong(maximum Integer) / 1L
define LongDivideNearUnderflow: ToLong(minimum Integer) / 1L
define LongDivideByZero: 1L / 0L
define LongPowerOverflow: (maximum Long)^3L
define LongPowerUnderflow: (minimum Long)^3L
define LongPowerNearOverflow: (maximum Long)^1L
define LongPowerNearUnderflow: (minimum Long)^1L
define LongSuccessorOverflow: successor of maximum Long
define LongPredecessorUnderflow: predecessor of minimum Long
define LongSuccessorNearOverflow: successor of (maximum Long - 1L)
define LongPredecessorNearUnderflow: predecessor of (minimum Long + 1L)

define DecimalAddOverflow: maximum Decimal + 1.0
define DecimalAddUnderflow: minimum Decimal + -1.0
define DecimalAddNearOverflow: maximum Decimal + 0.0
define DecimalAddNearUnderflow: minimum Decimal + 0.0
define DecimalSubtractOverflow: maximum Decimal - -1.0
define DecimalSubtractUnderflow: minimum Decimal - 1.0
define DecimalSubtractNearOverflow: maximum Decimal - 0.0
define DecimalSubtractNearUnderflow: minimum Decimal - 0.0
define DecimalMultiplyOverflow: maximum Decimal * 2
define DecimalMultiplyUnderflow: minimum Decimal * 2
define DecimalMultiplyNearOverflow: maximum Decimal * 1
define DecimalMultiplyNearUnderflow: minimum Decimal * 1
define DecimalDivideOverflow: maximum Decimal / 0.5
define DecimalDivideUnderflow: minimum Decimal / 0.5
define DecimalDivideNearOverflow: maximum Decimal / 1.0
define DecimalDivideNearUnderflow: minimum Decimal / 1.0
define DecimalDivideByZero: 1.0 / 0
define DecimalPowerOverflow: (maximum Decimal)^2
define DecimalPowerUnderflow: (minimum Decimal)^3
define DecimalPowerNearOverflow: (maximum Decimal)^1
define DecimalPowerNearUnderflow: (minimum Decimal)^1
define DecimalSuccessorOverflow: successor of maximum Decimal
define DecimalPredecessorUnderflow: predecessor of minimum Decimal
define DecimalSuccessorNearOverflow: successor of (maximum Decimal - 0.00000001)
define DecimalPredecessorNearUnderflow: predecessor of (minimum Decimal + 0.00000001)

define MaxQuantity: Quantity { value: maximum Decimal, unit: 'mm' }
define MinQuantity: Quantity { value: minimum Decimal, unit: 'mm' }
define QuantityAddOverflow: MaxQuantity + 1.0 'mm'
define QuantityAddUnderflow: MinQuantity + (-1.0 'mm')
define QuantityAddNearOverflow: MaxQuantity + 0.0 'mm'
define QuantityAddNearUnderflow: MinQuantity + 0.0 'mm'
define QuantitySubtractOverflow: MaxQuantity - (-1 'mm')
define QuantitySubtractUnderflow: MinQuantity - 1 'mm'
define QuantitySubtractNearOverflow: MaxQuantity - 0.0 'mm'
define QuantitySubtractNearUnderflow: MinQuantity - 0.0 'mm'
define QuantityMultiplyOverflow: MaxQuantity * 2 'mm'
define QuantityMultiplyUnderflow: MinQuantity * 2 'mm'
define QuantityMultiplyNearOverflow: MaxQuantity * 1 'mm'
define QuantityMultiplyNearUnderflow: MinQuantity * 1 'mm'
define QuantityDivideOverflow: MaxQuantity / 0.5 'mm'
define QuantityDivideUnderflow: MinQuantity / 0.5 'mm'
define QuantityDivideNearOverflow: MaxQuantity / 1 'mm'
define QuantityDivideNearUnderflow: MinQuantity / 1 'mm'
define QuantityDivideByZero: 1.0 'mm' / 0 'mm'
define QuantitySuccessorOverflow: successor of MaxQuantity
define QuantityPredecessorUnderflow: predecessor of MinQuantity
define QuantitySuccessorNearOverflow: successor of Quantity { value: maximum Decimal - 0.00000001, unit: 'mm' }
define QuantityPredecessorNearUnderflow: predecessor of Quantity { value: minimum Decimal + 0.00000001, unit: 'mm' }

define DateTimeAddOverflow: maximum DateTime + 1 day
define DateTimeAddUnderflow: minimum DateTime + (-1 day)
define DateTimeAddNearOverflow: maximum DateTime + 0 days
define DateTimeAddNearUnderflow: minimum DateTime + 0 days
define DateTimeSubtractOverflow: maximum DateTime - (-1 day)
define DateTimeSubtractUnderflow: minimum DateTime - 1 day
define DateTimeSubtractNearOverflow: maximum DateTime - 0 days
define DateTimeSubtractNearUnderflow: minimum DateTime - 0 days
define DateTimeSuccessorOverflow: successor of maximum DateTime
define DateTimePredecessorUnderflow: predecessor of minimum DateTime
define DateTimeSuccessorNearOverflow: successor of (maximum DateTime - 1 millisecond)
define DateTimePredecessorNearUnderflow: predecessor of (minimum DateTime + 1 millisecond)

define DateAddOverflow: maximum Date + 1 day
define DateAddUnderflow: minimum Date + (-1 day)
define DateAddNearOverflow: maximum Date + 0 days
define DateAddNearUnderflow: minimum Date + 0 days
define DateSubtractOverflow: maximum Date - (-1 day)
define DateSubtractUnderflow: minimum Date - 1 day
define DateSubtractNearOverflow: maximum Date - 0 days
define DateSubtractNearUnderflow: minimum Date - 0 days
define DateSuccessorOverflow: successor of maximum Date
define DatePredecessorUnderflow: predecessor of minimum Date
define DateSuccessorNearOverflow: successor of (maximum Date - 1 day)
define DatePredecessorNearUnderflow: predecessor of (minimum Date + 1 day)

define TimeAddOverflow: maximum Time + 1 second
define TimeAddUnderflow: minimum Time + (-1 second)
define TimeAddNearOverflow: maximum Time + 0 seconds
define TimeAddNearUnderflow: minimum Time + 0 seconds
define TimeSubtractOverflow: maximum Time - (-1 second)
define TimeSubtractUnderflow: minimum Time - 1 second
define TimeSubtractNearOverflow: maximum Time - 0 seconds
define TimeSubtractNearUnderflow: minimum Time - 0 seconds
define TimeSuccessorOverflow: successor of maximum Time
define TimePredecessorUnderflow: predecessor of minimum Time
define TimeSuccessorNearOverflow: successor of (maximum Time - 1 millisecond)
define TimePredecessorNearUnderflow: predecessor of (minimum Time + 1 millisecond)

define ExpOverflow: Exp(maximum Decimal)