// @Test: Is
valueset "Female": '2.16.840.1.113883.3.560.100.2'
define IsTrueInteger: 5 is Integer
define IsFalseInteger: '5' is Integer
define IsTrueDecimal: 5.0 is Decimal
define IsFalseDecimal: 5 is Decimal
define IsTrueString: '5' is String
define IsFalseString: 5 is String
define IsTrueDateTime: DateTime(2012) is DateTime
define IsFalseDateTime: Date(2012) is DateTime
define IsTrueDate: Date(2012) is Date
define IsFalseDate: DateTime(2012) is Date
define IsTrueTime: Time(12) is Time
define IsFalseTime: DateTime(2012) is Time
define IsTrueQuantity: 1 'mm' is Quantity
define IsFalseQuantity: 'one millimeter' is Quantity
define IsTrueBoolean: true is Boolean
define IsFalseBoolean: 'true' is Boolean
define IsTrueCode: Code{ system: 'fake', code: 'fake' } is Code
define IsFalseCode: 'Foo' is Code
define IsTrueConcept: Concept { codes: { Code{ system: 'fake', code: 'fake' } }, display: 'Test Concept' } is Concept
define IsFalseConcept: 'Foo' is Concept
define IsTrueRuntimeBoolean: ('5' = '5') is Boolean
define IsFalseRuntimeBoolean: (5 / 3) is Boolean
define IsTrueRuntimeDecimal: (1.0 / 3.0) is Decimal
define IsFalseRuntimeDecimal: ('foo' + 'bar') is Decimal
define IsTrueRuntimeInteger: (1 + 3) is Integer
define IsFalseRuntimeInteger: (1.0 / 3.0) is Integer
define IsTrueRuntimeString: 'foo' + 'bar' is String
define IsFalseRuntimeString: (1.0 / 3.0) is String
define CodeA: Code {
  system: 'http://loinc.org',
  code: '12345',
  version: '1',
  display: 'Test Code'
}
define IsTrueRuntimeCode: CodeA is Code
define IsFalseRuntimeCode: 'Foo' + 'Foo' is Code
define ConceptA: Concept {
  codes: { CodeA },
  display: 'Test Concept'
}

define IsTrueRuntimeConcept: ConceptA is Concept
define IsFalseRuntimeConcept: 'Foo' + 'Foo' is Concept
define IsTrueRuntimeValueSet: "Female" is ValueSet
define IsFalseRuntimeValueSet: 'Foo' + 'Foo' is ValueSet
define IsTrueRuntimeQuantity: 1 'mm' + 1 'mm' is Quantity
define IsFalseRuntimeQuantity: 'Foo' + 'Foo' is Quantity
define IsTrueRuntimeDateTime: DateTime(2012) + 1 'year' is DateTime
define IsFalseRuntimeDateTime: 'Foo' + 'Foo' is DateTime
define IsTrueRuntimeDate: Date(2012) + 1 'year' is Date
define IsFalseRuntimeDate: 'Foo' + 'Foo' is Date
define IsTrueRuntimeTime: Time(12) + 1 'hour' is Time
define IsFalseRuntimeTime: 'Foo' + 'Foo' is Time