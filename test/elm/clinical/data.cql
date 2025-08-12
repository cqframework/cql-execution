// @Test: ValueSetDef
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Unknown One Arg": '1.2.3.4.5.6.7.8.9'
valueset "Unknown Two Arg": '1.2.3.4.5.6.7.8.9' version '1'
codesystem "CS4VS": 'http://loinc.org' version '2'
valueset "Unknown Three Arg": '1.2.3.4.5.6.7.8.9' version '1' codesystems { "CS4VS" }
define Foo: 'Bar'

// @Test: ValueSetRef
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.101.12.1001'
define Foo: "Acute Pharyngitis"

// @Test: AnyInValueSet
valueset "Major Depressive Disorder Active": '2.16.840.1.113883.3.526.3.1491'
valueset "Male": '2.16.840.1.113883.3.560.100.1'
codesystem "SNOMED": 'http://snomed.info/sct'
code "ChronicRecurrentDepression": '2618002' from "SNOMED" display 'Chronic recurrent major depressive disorder (disorder)'
code "ModerateMajorDepression": '832007' from "SNOMED" display 'Moderate major depression (disorder)'
concept "Depression Concept": { "ChronicRecurrentDepression", "ModerateMajorDepression" } display 'Depression Concept'
define AnyInListOfConcepts: { "Depression Concept" } in "Major Depressive Disorder Active"
define AnyInListOfCodes: { "ChronicRecurrentDepression", "ModerateMajorDepression" } in "Major Depressive Disorder Active"
define AnyInListOfStrings: { '2618002', '12345' } in "Major Depressive Disorder Active"
define AnyInNullList: null as List<Code> in "Major Depressive Disorder Active"
define AnyInNullListNullVs: null as List<Code> in null as ValueSet
define AnyInListOfCodesWithNull: { Code { code: 'M' }, (null as Code), "ChronicRecurrentDepression" } in "Major Depressive Disorder Active"
// expression data
define ListOfCodes: { Code { code: 'M' } , "ChronicRecurrentDepression" }
define WrongListOfCodes: { Code { code: 'M' }, Code { code: 'F', system: '3.16.840.1.113883.18.2' } }
define AnyInListOfCodesExpressionRef: ListOfCodes in "Major Depressive Disorder Active"
define AnyInWrongListOfCodes: WrongListOfCodes in "Major Depressive Disorder Active"
// function data
define function ListInVS(vs ValueSet): { '2618002', '12345' } in vs
define ListInPassedVS: ListInVS("Major Depressive Disorder Active")
define ListInWrongVS: ListInVS("Male")
define ListInNullVS: ListInVS(null as ValueSet)

// @Test: InValueSet
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Male": '2.16.840.1.113883.3.560.100.1'
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
define NullCastAsCode: null as Code in "Female"
define NullCastAsCodeWithNullVS: null as Code in null as ValueSet
define function FInVS(vs ValueSet): 'F' in vs
define FInPassedVS: FInVS("Female")
define FInWrongVS: FInVS("Male")
define FInNullVS: FInVS(null as ValueSet)


// @Test: ExpandValueset
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'

define ExpandFemale: ExpandValueSet("Female")
define ExpandKnown: ExpandValueSet("Known")
define ExpandNull: ExpandValueSet(null)
define InvokeExpandWithUnion: "Female" union  "Known"
define function ExpandVSHelper(vs ValueSet): ExpandValueSet(vs)
define ExpandPassedVS: ExpandVSHelper("Female")
define ExpandNullVS: ExpandVSHelper(null as ValueSet)
define function UnionVSs(vs1 ValueSet, vs2 ValueSet): vs1 union vs2
define ExpandPassedWithUnion: UnionVSs("Female", "Known")


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

// @Test: CodeSystemRef
codesystem "MyCS": 'http://loinc.org' version '1'
define ResolveMyCS: "MyCS"

// @Test: CalculateAge: Fully Specified Birth Date
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()

// @Test: CalculateAge: Fully Specified Birth Date on Today
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()

// @Test: CalculateAge: Date-Only Birth Date as DateTime
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()

// @Test: CalculateAge: Date-Only Birth Date as DateTime on Today
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()

// @Test: CalculateAge: Date-Only Birth Date as Date
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()

// @Test: CalculateAge: Date-Only Birth Date as Date on Today
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
define AgeAtJanuary1DateTimeArg: AgeInYearsAt(@2024-01-01T00:00:00.000+00:00)
define AgeAtJanuary1DateArg: AgeInYearsAt(Date(2024, 1, 1))
