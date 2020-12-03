// @Test: ValueSetDef
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Unknown One Arg": '1.2.3.4.5.6.7.8.9'
valueset "Unknown Two Arg": '1.2.3.4.5.6.7.8.9' version '1'
define Foo: 'Bar'

// @Test: ValueSetRef
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.101.12.1001'
define Foo: "Acute Pharyngitis"

// @Test: InValueSet
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Versioned Female": '2.16.840.1.113883.3.560.100.2' version '20121025'
valueset "SharedCodes": '2.16.840.1.113883.3.000.000.0'
valueset "ImproperSharedCodes": '2.16.840.1.113883.3.000.000.1'
define String: 'F' in "Female"
define SharedCodesFoo: 'foo' in "SharedCodes"
define SharedCodesNoMatch: 'baz' in "SharedCodes"
define ImproperSharedCodesCodeValue: 'codeValue' in "ImproperSharedCodes"
define StringInVersionedValueSet: 'F' in "Versioned Female"
define ShortCode: Code { code: 'F' } in "Female"
define MediumCode: Code { code: 'F', system: '2.16.840.1.113883.18.2' } in "Female"
define LongCode: Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } in "Female"
define WrongString: 'M' in "Female"
define WrongStringInVersionedValueSet: 'M' in "Versioned Female"
define WrongShortCode: Code { code: 'M' } in "Female"
define WrongMediumCode: Code { code: 'F', system: '3.16.840.1.113883.18.2' } in "Female"
define LongCodeDifferentVersion: Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.6' } in "Female"
define NullCode: Code { code: null, system: '2.16.840.1.113883.18.2', version: 'HL7V2.6' } in "Female"
define InListOfCodes: { Code { code: 'M' } , Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } } in "Female"
define ListOfCodes: { Code { code: 'M' } , Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } }
define WrongListOfCodes: { Code { code: 'M' }, Code { code: 'F', system: '3.16.840.1.113883.18.2' } }
define InListOfCodesExpressionRef: ListOfCodes in "Female"
define InWrongListOfCodes: WrongListOfCodes in "Female"
define ListOfCodesWithNull: { Code { code: 'M' }, (null as Code), Code { code: 'F', system: '2.16.840.1.113883.18.2' } } in "Female"
define ListOfCodesNull: (null as List<Code>) in "Female"


// @Test: Patient Property In ValueSet
valueset "Female": '2.16.840.1.113883.3.560.100.2'
define IsFemale: Patient.gender in "Female"

// @Test: CodeDef
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
define Foo: 'Bar'

// @Test: CodeRef
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
define Foo: "Tobacco smoking status code"

// @Test: ConceptDef
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
define Foo: 'Bar'

// @Test: ConceptRef
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
define Foo: "Tobacco smoking status"

// @Test: CalculateAge
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()

// @Test: CalculateAgeAt
define AgeAt2012: AgeInYearsAt(DateTime(2012))
define AgeAt19810216: AgeInYearsAt(DateTime(1981, 2, 16))
define AgeAt1975: AgeInYearsAt(DateTime(1975))
define AgeInYearsDateTimeArg: AgeInYearsAt(DateTime(2012, 12, 1))
define CalculateAgeInYearsDateTimeArg: CalculateAgeInYearsAt(@1994-12-01T23:59:00.000+00:00, DateTime(2012, 12, 1))
define AgeInYearsDateArg: AgeInYearsAt(Date(2012, 12, 1))
define CalculateAgeInYearsDateArg: CalculateAgeInYearsAt(@1994-12-01T23:59:00.000+00:00, Date(2012, 12, 1))