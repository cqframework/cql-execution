// @Test: Instance
using Simple version '1.0.0'
codesystem "SNOMED": '2.16.840.1.113883.6.96'
codesystem "SIMPLE": '1.2.3.4.5'
code "Viral pharyngitis code": '1532007' from "SNOMED" display 'Viral pharyngitis (disorder)'
code "Active code": 'active' from "SNOMED" display 'Active'

define QuantityA: Quantity {
  unit: 'a',
  value: 12
}

define CodeA: Code {
  system: 'http://loinc.org',
  code: '12345',
  version: '1',
  display: 'Test Code'
}

define ConceptA: Concept {
  codes: { CodeA },
  display: 'Test Concept'
}

define Pharyngitis : Condition {
  code: "Viral pharyngitis code",
  status: "Active code"
}

define val: QuantityA.value



