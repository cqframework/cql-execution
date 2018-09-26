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
define ZTime: convert 'T14:30:00.0Z' to Time // 2:30PM UTC
define TimezoneTime: convert 'T14:30:00.0-07:00' to Time // 2:30PM Mountain Standard (GMT-7:00)

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
define dateDateTime: convert @2015-01-01 to DateTime
define dateDate: convert @2015-01-01 to Date
define dateStr: convert @2015-01-01 to String

// @Test: FromTime
define timeStr: convert @T11:57 to String
define timeTime: convert @T11:57 to Time

// @Test: FromCode
// define hepB: Code '66071002' from "SNOMED-CT" display 'Type B viral hepatitis'
// define codeConcept: convert hepB to Concept
// define codeCode: convert hepB to Code
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

// @Test: ToQuantity
define WrongFormatQuantity: ToQuantity('abc')
define TooLargeQuantity: ToQuantity('444444444444444444444444444444 \'\'')
define TooSmallQuantity: ToQuantity('-444444444444444444444444444444 \'\'')
define NullArg: ToQuantity((null as String))

// @Test: ToTime
define NullArgTime: ToTime((null as String))
define IncorrectFormatTime: ToTime('10:00PM')
define InvalidTime: ToTime('25:99.000+00.00')
define TimeH: ToTime('T02')
define TimeHM: ToTime('T02:04')
define TimeHMS: ToTime('T02:04:59')
define TimeHMSMs: ToTime('T02:04:59.123')
define TimeHMSMsZ: ToTime('T02:04:59.123Z')
define TimeHMSMsTimezone: ToTime('T02:04:59.123+01')
define TimeHMSMsFullTimezone: ToTime('T02:04:59.123+01:00')
define HourTooHigh: ToTime('T24')
define MinuteTooHigh: ToTime('T23:60')
define SecondTooHigh: ToTime('T23:59:60')

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
