// @Test: Retrieve
include Included version '1' called included

codesystem "SNOMED": '2.16.840.1.113883.6.96' version '2013-09'
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Annual Wellness Visit": '2.16.840.1.113883.3.526.3.1240'
code "Viral pharyngitis code": '1532007' from "SNOMED" display 'Viral pharyngitis (disorder)'
concept "Viral pharyngitis": { "Viral pharyngitis code" } display 'Viral pharyngitis (disorder)'

valueset "Body locations": '2.16.840.1.113762.1.4.1181.77' // Pain body location reference set
code "Nose code": '45206002' from "SNOMED" display 'Nasal structure (body structure)'

// duplicated definitions purely for readability of the large cross-product of test cases
codesystem "myCodesystem": '2.16.840.1.113883.6.96' version '2013-09'
valueset "myValueSet": '2.16.840.1.113883.3.464.1003.102.12.1011'
code "myCode": '1532007' from "myCodesystem" display 'Viral pharyngitis (disorder)'
concept "myConcept": { "myCode" } display 'Viral pharyngitis (disorder)'
define myCodeList: { myCode }

define Conditions: [Condition]
define ConditionsByVS: [Condition: "myValueSet"]
define ConditionsByCS: [Condition: "myCodesystem"]
define ConditionsByCode: [Condition: "myCode"]
define ConditionsByConcept: [Condition: "myConcept"]
define ConditionsByCodeList: [Condition: "myCodeList"]

define ConditionsByCodeInCS:     [Condition: code in "myCodesystem"]
define ConditionsByCodeEqualsCS: [Condition: code = "myCodesystem"]
define ConditionsByCodeEquivCS:  [Condition: code ~ "myCodesystem"]

define ConditionsByCodeInVS:     [Condition: code in "myValueSet"]
define ConditionsByCodeEqualsVS: [Condition: code = "myValueSet"]
define ConditionsByCodeEquivVS:  [Condition: code ~ "myValueSet"]

define ConditionsByCodeInCode:     [Condition: code in "myCode"]
define ConditionsByCodeEqualsCode: [Condition: code = "myCode"]
define ConditionsByCodeEquivCode:  [Condition: code ~ "myCode"]

define ConditionsByCodeInConcept:     [Condition: code in "myConcept"]
define ConditionsByCodeEqualsConcept: [Condition: code = "myConcept"]
define ConditionsByCodeEquivConcept:  [Condition: code ~ "myConcept"]

define ConditionsByCodeInCodeList:     [Condition: code in "myCodeList"]
define ConditionsByCodeEqualsCodeList: [Condition: code = "myCodeList"]
define ConditionsByCodeEquivCodeList:  [Condition: code ~ "myCodeList"]


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

