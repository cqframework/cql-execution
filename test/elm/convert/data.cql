// @Test: FromString
define stringStr: convert 'str' to String
define stringNull: convert null to String
define boolTrue: convert 'true' to Boolean
define boolFalse: convert 'false' to Boolean
define decimalValid: convert '10.2' to Decimal
define decimalInvalid: convert 'abc' to Decimal
define integerValid: convert '10' to Integer
define integerDropDecimal: convert '10.2' to Integer
define integerInvalid: convert 'abc' to Integer
define quantityStr: convert '10 \'A\'' to Quantity
define posQuantityStr: convert '+10 \'A\'' to Quantity
define negQuantityStr: convert '-10 \'A\'' to Quantity
define quantityStrDecimal: convert '10.0 \'mA\'' to Quantity
define dateTimeStr: convert '2015-01-02' to DateTime
define dateStr: convert '2015-01-02' to Date
define NullConvert: convert 'foo' to DateTime
define ZDateTime: convert '2014-01-01T14:30:00.0Z' to DateTime // January 1st, 2014, 2:30PM UTC
define TimezoneDateTime: convert '2014-01-01T14:30:00.0-07:00' to DateTime // January 1st, 2014, 2:30PM Mountain Standard (GMT-7:00)
define TimezoneTime: convert '14:30:00.0-07:00' to Time // 2:30PM Mountain Standard (GMT-7:00)

// @Test: FromInteger
define string10: convert 10 to String
define decimal10: convert 10 to Decimal
define intNull: convert null to Decimal
define intInt: convert 10 to Integer

// @Test: FromQuantity
define quantityStr: convert 10 'A' to String
define negQuantityStr: convert -10 'A' to String
define posQuantityStr: convert +10 'A' to String
define quantityQuantity: convert 10 'A' to Quantity

// @Test: FromBoolean
define booleanTrueStr: convert true to String
define booleanFalseStr: convert false to String
define booleanTrueBool: convert true to Boolean
define booleanFalseBool: convert false to Boolean

// @Test: FromDateTime
define dateTimeToStr: convert @2015-01-02T12:01:02.321-06:00 to String
define dateTimeToDate: convert @2015-01-02T12:01:02.321-06:00 to Date
define dateTimeToDateTime: convert @2015-01-02T12:01:02.321-06:00 to DateTime


// @Test: FromDate
define dateYMDToDateTime: convert @2015-01-01 to DateTime
define dateYMToDateTime: convert @2015-01 to DateTime
define dateYToDateTime: convert @2015 to DateTime
define dateToDate: convert @2015-01-01 to Date
define dateToStr: convert @2015-01-01 to String

// @Test: FromTime
define timeStr: convert @T11:57 to String
define timeTime: convert @T11:57 to Time

// @Test: FromCode
codesystem "SNOMED-CT": '2.16.840.1.113883.6.96'
define hepB: Code '66071002' from "SNOMED-CT" display 'Type B viral hepatitis'
define codeConcept: convert hepB to Concept
define codeCode: convert hepB to Code
define foo: 'bar'

// @Test: ToDecimal
define NoSign: ToDecimal('0.0')
define PositiveSign: ToDecimal('+1.1')
define NegativeSign: ToDecimal('-1.1')
define TooPrecise: ToDecimal('.444444444')
define TooLargeDec: ToDecimal('444444444444444444444444444444')
define TooSmallDec: ToDecimal('-444444444444444444444444444444')
define NullDecimal: ToDecimal((null as String))
define WrongFormat: ToDecimal('+.1')

// @Test: ToInteger
define NoSign: ToInteger('12345')
define PositiveSign: ToInteger('+12345')
define NegativeSign: ToInteger('-12345')
define TooLargeInt: ToInteger('2147483648')
define TooSmallInt: ToInteger('-2147483649')
define BooleanTrue: ToInteger(true)
define BooleanFalse: ToInteger(false)

// @Test: ToQuantity
define DecimalOverload: ToQuantity(0.1)
define IntegerOverload: ToQuantity(13)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define UncertaintyOverload: ToQuantity(UncertaintySixToEighteen)
define StringOverload: ToQuantity('-0.1 \'mg\'')
define RatioOverload: ToQuantity(5 'mg':10 'mL')
define WrongFormatQuantity: ToQuantity('abc')
define TooLargeQuantity: ToQuantity('444444444444444444444444444444 \'\'')
define TooSmallQuantity: ToQuantity('-444444444444444444444444444444 \'\'')
define NullArg: ToQuantity((null as String))

// @Test: ToRatio
define NullArg: ToRatio((null as String))
define IsValid: ToRatio('1.0 \'mg\':2.0 \'mg\'')
define IsValidWithCustomUCUM: ToRatio('1.0 \'{foo:bar }\':2.0 \'mg\'')
define InvalidSeparator: ToRatio('1.0 \'mg\';2.0 \'mg\'')
define InvalidNumerator: ToRatio('1.0 \'cc\':2.0 \'mg\'')
define InvalidDenominator: ToRatio('1.0 \'mg\':2.0 \'cc\'')

// @Test: ToTime
define NullArgTime: ToTime((null as String))
define IncorrectFormatTime: ToTime('10:00PM')
define InvalidTime: ToTime('25:99.000')
define TimeH: ToTime('02')
define TimeHM: ToTime('02:04')
define TimeHMS: ToTime('02:04:59')
define TimeHMSMs: ToTime('02:04:59.123')
define HourTooHigh: ToTime('24')
define MinuteTooHigh: ToTime('23:60')
define SecondTooHigh: ToTime('23:59:60')

// @Test: ToBoolean
define UpperCaseTrue: ToBoolean('TRUE')
define UpperCaseFalse: ToBoolean('FALSE')
define LowerCaseTrue: ToBoolean('true')
define LowerCaseFalse: ToBoolean('false')
define UpperCaseT: ToBoolean('T')
define UpperCaseF: ToBoolean('F')
define LowerCaseT: ToBoolean('t')
define LowerCaseF: ToBoolean('f')
define IsTrue: ToBoolean('y')
define IsFalse: ToBoolean('0')
define IsNull: ToBoolean('falsetto')

// @Test: ToConcept
define IsValid: ToConcept(Code { system: 'http://loinc.org', code: '8480-6' }) // Concept { codes: { Code { system: 'http://loinc.org', code: '8480-6' } } }
define IsNull: ToConcept(null as Code)

// @Test: ToDate
define ToDateString: ToDate('2015-01-02')
define ToDateDateTime: ToDate(DateTime(2000, 3, 15, 13, 30, 25, 200))
define ToDateNull: ToDate(null as String)
define ToDateDateTimeString: ToDate(@2014-01-01T12:30:00)

// @Test: ConvertsToBoolean
define IsTrueWithTrueValue: ConvertsToBoolean('y')
define IsTrueWithFalseValue: ConvertsToBoolean('0')
define IsFalse: ConvertsToBoolean('foo')
define IsNull: ConvertsToBoolean(null as String)

// @Test: ConvertsToDate
define IsTrue: ConvertsToDate('2015-01-01')
define IsFalse: ConvertsToDate('foo')
define IsNull: ConvertsToDate(null as Date)

// @Test: ConvertsToDateTime
define IsTrue: ConvertsToDateTime('2014-01-01T14:30:00.0Z')
define IsTrueWithDateValue: ConvertsToDateTime(@2015-01-01)
define IsFalse: ConvertsToDateTime('foo')
define IsNull: ConvertsToDateTime(null as DateTime)

// @Test: ConvertsToDecimal
define IsTrue: ConvertsToDecimal('0.1')
define IsFalse: ConvertsToDecimal('foo')
define IsNull: ConvertsToDecimal(null as Decimal)

// @Test: ConvertsToInteger
define IsTrue: ConvertsToInteger('101')
define IsTrueWithBooleanTrue: ConvertsToInteger(true)
define IsTrueWithBooleanFalse: ConvertsToInteger(false)
define IsFalse: ConvertsToInteger('foo')
define IsNull: ConvertsToInteger(null as Integer)

// @Test: ConvertsToQuantity
define IsTrueWithDecimal: ConvertsToQuantity(0.1)
define IsTrueWithInteger: ConvertsToQuantity(101)
define IsTrueWithString: ConvertsToQuantity('1.0 \'mg\'')
define IsFalse: ConvertsToQuantity('foo')
define IsFalseWithInvalidUcum: ConvertsToQuantity('1.0 \'cc\'')
define IsNull: ConvertsToQuantity(null as String)

// @Test: ConvertsToRatio
define IsTrue: ConvertsToRatio('1.0 \'mg\':2.0 \'mg\'')
define IsFalse: ConvertsToRatio('1.0 \'mg\';2.0 \'mg\'')
define IsFalseWithInvalidUcum: ConvertsToRatio('1.0 \'mg\';2.0 \'cc\'')
define IsNull: ConvertsToRatio(null as String)

// @Test: ConvertsToString
define IsTrue: ConvertsToString(true)
define IsFalse: ConvertsToString(Code { system: 'http://loinc.org', code: '8480-6' })
define IsNull: ConvertsToString(null as String)

// @Test: ConvertsToTime
define IsTrue: ConvertsToTime('02:04:59.123')
define IsFalse: ConvertsToTime('foo')
define IsNull: ConvertsToTime(null as String)

// @Test: ConvertQuantity
define ConvertQuantityGood: ConvertQuantity(5 'mg', 'g')
define ConvertSyntax: convert 5 'mg' to 'g'
define ConvertQuantityToKg: ConvertQuantity(5000 'g', 'kg')
define ConvertQuantityToWeeks: ConvertQuantity(28 'days', 'weeks')
define NullConvertQuantity: ConvertQuantity(5 'mg', 'fox')

// @Test: CanConvertQuantity
define CanConvertQuantityTrue: CanConvertQuantity(5 'mg', 'g')
define CanConvertQuantityFalse: CanConvertQuantity(5 'mg', 'fox')
define CanConvertQuantityNullFirstNull: CanConvertQuantity(null, 'g')
define CanConvertQuantityNullSecondNUll: CanConvertQuantity(5 'mg', null)
