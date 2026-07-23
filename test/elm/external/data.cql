// @Test: Retrieve
include Included version '1' called included

codesystem "SNOMED": '2.16.840.1.113883.6.96' version '2013-09'
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Annual Wellness Visit": '2.16.840.1.113883.3.526.3.1240'
code "Viral pharyngitis code": '1532007' from "SNOMED" display 'Viral pharyngitis (disorder)'
concept "Viral pharyngitis": { "Viral pharyngitis code" } display 'Viral pharyngitis (disorder)'

valueset "Body locations": '2.16.840.1.113762.1.4.1181.77' // Pain body location reference set
code "Nose code": '45206002' from "SNOMED" display 'Nasal structure (body structure)'

// NOTE: These are duplicated definitions of the above terminology,
// purely so that the cross-product of test cases in this file is obvious.
// These names do not follow CQL best practice; don't copy this example.
codesystem "TestCodeSystem": '2.16.840.1.113883.6.96' version '2013-09'
valueset "TestValueSet": '2.16.840.1.113883.3.464.1003.102.12.1011'
code "TestCode": '1532007' from "TestCodeSystem" display 'Viral pharyngitis (disorder)'
concept "TestConcept": { "TestCode" } display 'Viral pharyngitis (disorder)'
define TestCodeList: { TestCode }

define Conditions: [Condition]
define ConditionsByVS: [Condition: "TestValueSet"]
define ConditionsByCS: [Condition: "TestCodeSystem"]
define ConditionsByCode: [Condition: "TestCode"]
define ConditionsByConcept: [Condition: "TestConcept"]
define ConditionsByCodeList: [Condition: "TestCodeList"]

define ConditionsByCodeInCS:     [Condition: code in "TestCodeSystem"]
define ConditionsByCodeEqualsCS: [Condition: code = "TestCodeSystem"]
define ConditionsByCodeEquivCS:  [Condition: code ~ "TestCodeSystem"]

define ConditionsByCodeInVS:     [Condition: code in "TestValueSet"]
define ConditionsByCodeEqualsVS: [Condition: code = "TestValueSet"]
define ConditionsByCodeEquivVS:  [Condition: code ~ "TestValueSet"]

define ConditionsByCodeInCode:     [Condition: code in "TestCode"]
define ConditionsByCodeEqualsCode: [Condition: code = "TestCode"]
define ConditionsByCodeEquivCode:  [Condition: code ~ "TestCode"]

define ConditionsByCodeInConcept:     [Condition: code in "TestConcept"]
define ConditionsByCodeEqualsConcept: [Condition: code = "TestConcept"]
define ConditionsByCodeEquivConcept:  [Condition: code ~ "TestConcept"]

define ConditionsByCodeInCodeList:     [Condition: code in "TestCodeList"]
define ConditionsByCodeEqualsCodeList: [Condition: code = "TestCodeList"]
define ConditionsByCodeEquivCodeList:  [Condition: code ~ "TestCodeList"]


define ConditionsByBodySiteInVS:     [Condition: bodySite in "Body locations"]
define ConditionsByBodySiteEqualsVS: [Condition: bodySite = "Body locations"]
define ConditionsByBodySiteEquivVS:  [Condition: bodySite ~ "Body locations"]

define ConditionsByBodySiteInCode:     [Condition: bodySite in "Nose code"]
define ConditionsByBodySiteEqualsCode: [Condition: bodySite = "Nose code"]
define ConditionsByBodySiteEquivCode:  [Condition: bodySite ~ "Nose code"]


define Encounters: [Encounter]
define PharyngitisConditions: [Condition: included."Acute Pharyngitis"]
define AmbulatoryEncounters: [Encounter: "Ambulatory/ED Visit"]
define EncountersByCode: [Encounter: code in "Ambulatory/ED Visit"]
define WrongValueSet: [Condition: "Ambulatory/ED Visit"]
define WrongCodeProperty: [Encounter: status in "Ambulatory/ED Visit"]
define ConditionsByDate: [Condition] C where C.period during Interval[@2013-03-01T00:00:00.0, @2013-03-31T00:00:00.0)

// @Test: Included
library Included version '1'

codesystem "SNOMED": '2.16.840.1.113883.6.96'
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.102.12.1011'

