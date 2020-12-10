library CDC_HbA1c_lessthan8 version '1'

using FHIR version '4.0.0'
include FHIRHelpers version '4.0.0' called FHIRHelpers


codesystem "SNOMED-CT": 'urn:oid:2.16.840.1.113883.6.96' version '20200301'

valueset "Acute Inpatient": 'urn:oid:2.16.840.1.113883.3.464.1004.1810'
valueset "Outpatient": 'urn:oid:2.16.840.1.113883.3.464.1004.1202'
valueset "ED": 'urn:oid:2.16.840.1.113883.3.464.1004.1086'
valueset "Observation": 'urn:oid:2.16.840.1.113883.3.464.1004.1191'
valueset "Nonacute Inpatient Stay": 'urn:oid:2.16.840.1.113883.3.464.1004.1398'
valueset "Telephone Visits": 'urn:oid:2.16.840.1.113883.3.464.1004.1246'
valueset "Online Assessments": 'urn:oid:2.16.840.1.113883.3.464.1004.1446'
valueset "Nonacute Inpatient": 'urn:oid:2.16.840.1.113883.3.464.1004.1189'
valueset "HbA1c Level Less Than 7.0": 'urn:oid:2.16.840.1.113883.3.464.1004.1115'
valueset "HbA1c Level Greater Than or Equal to 7.0 and Less Than 8.0": 'urn:oid:2.16.840.1.113883.3.464.1004.1976'
valueset "Hospice Encounter": 'urn:oid:2.16.840.1.113883.3.464.1004.1761'
valueset "Hospice Intervention": 'urn:oid:2.16.840.1.113883.3.464.1004.1762'
valueset "Diabetes": 'urn:oid:2.16.840.1.113883.3.464.1004.1077'
valueset "HbA1c Lab Test": 'urn:oid:2.16.840.1.113883.3.464.1004.1755'
valueset "Telehealth Modifier": 'urn:oid:2.16.840.1.113762.1.4.1138.731'
valueset "Telehealth POS": 'urn:oid:2.16.840.1.113883.3.464.1003.101.11.1155'
valueset "Frailty Device": 'urn:oid:2.16.840.1.113883.3.464.1004.1530'
valueset "Frailty Diagnosis": 'urn:oid:2.16.840.1.113883.3.464.1004.1531'
valueset "Frailty Encounter": 'urn:oid:2.16.840.1.113883.3.464.1004.1532'
valueset "Frailty Symptom": 'urn:oid:2.16.840.1.113883.3.464.1004.1533'
valueset "Advanced Illness": 'urn:oid:2.16.840.1.113883.3.464.1004.1465'
valueset "Inpatient Stay": 'urn:oid:2.16.840.1.113883.3.464.1004.1395'

code "Acarbose_code": '386965004' from "SNOMED-CT"
code "Miglitol": '109071007' from "SNOMED-CT"
code "insulin aspart": '325072002' from "SNOMED-CT"

concept "diabetes medication": {
  "Acarbose_code",
  "Miglitol",
  "insulin aspart"
} display 'diabetes medication'

parameter MeasurementPeriod default Interval[@2018-12-31T00:00:00.0, @2019-12-31T00:00:00.0)

context Patient

define "test med codes":
  [MedicationDispense] A
    where A.medication in "diabetes medication"

define "InitialPopulation":
  AgeInYearsAt(start of MeasurementPeriod) >= 18 and AgeInYearsAt(start of MeasurementPeriod) < 75

define "telehealth modifier":
  exists ([Encounter: "Telehealth Modifier"] E
    where E.period in MeasurementPeriod)

define "telehealth POS":
  exists ([Encounter: "Telehealth POS"] E
    where E.period in MeasurementPeriod)

define "acute inpatient encounter":
  exists ([Encounter: "Acute Inpatient"] E
    with [Condition: "Diabetes"] D
    such that E.period in MeasurementPeriod)

define "acute inpatient encounter without telehealth":
  "acute inpatient encounter"
    and not "telehealth POS"
    and not "telehealth modifier"

define "acute inpatient discharge with diabetes":
  [Encounter: "Acute Inpatient"] Enc
    with [Condition: "Diabetes"] Dia
      such that Enc.status = 'finished'
      and Enc.period in MeasurementPeriod

define "acute inpatient discharge on discharge claim":
  exists ("acute inpatient discharge with diabetes" Enc
    with [Claim: "Acute Inpatient"] AI
      such that Enc.subject = AI.patient)

define "nonacute diabetes discharges":
  [Encounter: "Nonacute Inpatient Stay"] E
    with [Condition: "Diabetes"] Dia
      such that E.status ~ 'finished'

define "nonacute diabetes discharges on claim":
  "nonacute diabetes discharges" E
    with [Claim: "Nonacute Inpatient Stay"] C
      such that E.subject = C.patient

/* define "outpatient encounter":
  exists([Encounter: "Outpatient"] E
    with [Condition: "Diabetes"] dia
      such that E.status = 'finished')

define "outpatient encounter - list":
  [Encounter: "Outpatient"] E
    with [Condition: "Diabetes"] dia
      such that E.status = 'finished'

define "observation encounter":
  exists([Encounter: "Observation"] E
    with [Condition: "Diabetes"] dia
      such that E.status = 'finished') */

define "diabetes test":
  exists ([Condition: "Diabetes"])

define "nonacute outpatient encounters with diabetes":
 // Atleeast 2 of the following encounters with diabetes  on different dates of service
 // TODO: reference discharge claim *** THIS NEEDS WORK ***
  Count({exists([Encounter: "Outpatient"] E with [Condition: "Diabetes"] dia such that E.status = 'finished'),
        exists([Encounter: "Observation"] F with [Condition: "Diabetes"] dia such that F.status = 'finished'),
        exists([Encounter: "Telephone Visits"] G with [Condition: "Diabetes"] dia such that G.status = 'finished'),
        exists([Encounter: "Online Assessments"] H with [Condition: "Diabetes"] dia such that H.status = 'finished'),
        exists([Encounter: "ED"] I with [Condition: "Diabetes"] dia such that I.status = 'finished')})>=2

  //TODO: only one outpatient telephone visit, telephone visit or online assessment, can't be two of these

// 2 encounters (1 non acute, non acute cannot be telehealth)
// how many qualifies non acute, if atleast 2 then ur done
// aree there non acutes that aren't telehealth

// atleast 2 outpatient, observation, telephone, online assessment, ED, nonacute inpatient encounter, non acute inpatient discharges
// diagnosis must be on discharge claim
// on different dates of service
// with diagnosis of diabetes
// only include non acute without telehealth
// only one can outpatient telehealth, telephone visit, online assessment

define "diabetes diagnosis by medication":
  //TODO: figure out how to do medication dynamically to avoid version control conflict
  exists([MedicationDispense] A
    where A.medication = "Acarbose_code"
    and A.status ~ 'completed')
    or exists([MedicationDispense] B
      where B.medication = "Miglitol"
      and B.status ~ 'completed')
      or exists([MedicationDispense] C
        where C.medication = "insulin aspart"
        and C.status ~ 'completed')

define "Frailty":
  exists([Encounter: "Frailty Device"] D
    where D.period in MeasurementPeriod)
    or exists([Encounter: "Frailty Diagnosis"] Dia
      where Dia.period in MeasurementPeriod)
      or exists([Encounter: "Frailty Encounter"] E
        where E.period in MeasurementPeriod)
        or exists([Encounter: "Frailty Symptom"] S
          where S.period in MeasurementPeriod)
            //TODO: age > 66

define "Acute Inpatient with Advanced Illness":
  [Encounter: "Acute Inpatient"] intersect [Condition: "Advanced Illness"]

define "Acute Inpatient with Advanced Illness bool":
  exists([Encounter: "Acute Inpatient"] intersect [Condition: "Advanced Illness"])

define "acute inpatient discharge with Advanced Illness":
  exists("Acute Inpatient with Advanced Illness" E
    where E.status ~ 'finished' )

define "diabetes exclusions":
    "Frailty" and ("acute inpatient discharge with Advanced Illness" or "Acute Inpatient with Advanced Illness bool")
    // TODO: atleast 2 outpatients w/ advanced Illness

define "DiabetesCondition":
  "acute inpatient encounter without telehealth"
    or "acute inpatient discharge on discharge claim"
    or "nonacute outpatient encounters with diabetes"
    or "diabetes diagnosis by medication"

define "InDenominator":
  "InitialPopulation" and "DiabetesCondition"
    and not "diabetes exclusions"
    /*
define "hba1c lab test":
  [Observation: "HbA1c Lab Test"] O */
  //TODO: need to find latest lab test result during the year

define "InNumerator":
  exists ([Observation: "HbA1c Lab Test"]
    intersect ([Observation: "HbA1c Level Less Than 7.0"]
      union [Observation: "HbA1c Level Greater Than or Equal to 7.0 and Less Than 8.0"]))

define "denom test":
  true

context Unfiltered

define "denominator":
  Count("InitialPopulation" IP where IP is true
  and "denom test" dt where dt is true)//and "DiabetesCondition" DC where DC is true and "diabetes exclusions" DE where DE is false)

define "numerator":
  Count("InNumerator" In where In is true
  and "DiabetesCondition" DC where DC is true
  and "InitialPopulation" IP where IP is true)

define "CDC_MeasureScore":
  (Count(Patient P where "InNumerator" and "DiabetesCondition" and "InitialPopulation") / Count(Patient P where "InitialPopulation" and "DiabetesCondition" and not "diabetes exclusions")) *100