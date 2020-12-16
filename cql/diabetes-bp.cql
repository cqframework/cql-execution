library BP_less_then_140_over_90 version '1'

using FHIR version '4.0.0'
include FHIRHelpers version '4.0.0'
include MATGlobalCommonFunctions_FHIR4 version '4.0.000' called Global


codesystem "SNOMED-CT": 'urn:oid:2.16.840.1.113883.6.96' version '20200301'
codesystem "LOINC": 'http://loinc.org'


valueset "Acute Inpatient": 'urn:oid:2.16.840.1.113762.1.4.1182.120'
valueset "Outpatient": 'urn:oid:2.16.840.1.113883.3.464.1003.101.12.1008'
valueset "ED": 'urn:oid:2.16.840.1.113883.3.464.1003.101.12.1085'
valueset "Observation": 'urn:oid:2.16.840.1.113762.1.4.1181.72'
valueset "Nonacute Inpatient Stay": 'urn:oid:2.16.840.1.113762.1.4.1182.289'
valueset "Telephone Visits": 'urn:oid:2.16.840.1.113883.3.1444.5.216'
valueset "Online Assessments": 'urn:oid:2.16.840.1.113883.3.7587.3.1013'
valueset "Nonacute Inpatient": 'urn:oid:2.16.840.1.113883.3.464.1003.101.12.1084'
// the hospice encounter doesn't have the OID we'll need IRL (will add later)
valueset "Hospice Encounter": 'urn:oid:2.16.840.1.113883.3.464.1004.1761'
valueset "Hospice Intervention": 'urn:oid:2.16.840.1.113762.1.4.1182.2'
valueset "Diabetes": 'urn:oid:2.16.840.1.113883.3.464.1003.103.12.1001'
valueset "Telehealth Modifier": 'urn:oid:2.16.840.1.113762.1.4.1138.731'
valueset "Telehealth POS": 'urn:oid:2.16.840.1.113883.3.464.1003.101.11.1155'
valueset "Frailty Device": 'urn:oid:2.16.840.1.113883.3.464.1003.118.12.1300'
// the frailty diagnosis doesn't have the OID we'll need IRL (will add later)
valueset "Frailty Diagnosis": 'urn:oid:2.16.840.1.113883.3.464.1004.1531'
valueset "Frailty Encounter": 'urn:oid:2.16.840.1.113883.3.464.1003.101.12.1088'
valueset "Frailty Symptom": 'urn:oid:2.16.840.1.113883.3.464.1003.113.12.1075'
valueset "Advanced Illness": 'urn:oid:2.16.840.1.113883.3.464.1003.110.12.1082'
valueset "Inpatient Stay": 'urn:oid:2.16.840.1.113762.1.4.1182.285'
// ADD valuesets in codes file for these!!!!
//valueset "Systolic Less Than 140": 'urn:oid:2.16.840.1.113762.1.4.1182.85'
//valueset "Systolic Greater Than Or Equal To 140": 'urn:oid:2.16.840.1.113762.1.4.1182.84'
//valueset "Diastolic Less Than 80": 'urn:oid:2.16.840.1.113762.1.4.1182.79'
//valueset "Diastolic Greater Than Or Equal To 90": 'urn:oid:2.16.840.1.113762.1.4.1182.78'
// valueset "Diastolic BP": 'urn:oid:2.16.840.1.113762.1.4.1116.409'
// valueset "Remote Blood Pressure Monitoring": 'urn:oid: '

code "Blood pressure": '85354-9' from "LOINC" display 'blood pressure'
code "Diastolic blood pressure": '8462-4' from "LOINC" display 'Diastolic blood pressure'
code "Systolic blood pressure": '8480-6' from "LOINC" display 'Systolic blood pressure'

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

define "HELLO Qualifying Diastolic Blood Pressure Reading":
	["Observation": "Blood pressure"] BloodPressure
	  where BloodPressure.status in {'final', 'amended'} // = 'final' 

define "InitialPopulation":
  AgeInYearsAt(start of MeasurementPeriod) >= 18 and AgeInYearsAt(start of MeasurementPeriod) < 75



define "telehealth modifier":
  exists ([Encounter: "Telehealth Modifier"] E
    where E.period starts during MeasurementPeriod)

define "telehealth POS":
  exists ([Encounter: "Telehealth POS"] E
    where E.period starts during MeasurementPeriod)

define "acute inpatient encounter":
  exists ([Encounter: "Acute Inpatient"] E
    with [Condition: "Diabetes"] D
    such that E.period starts during MeasurementPeriod)

define "acute inpatient encounter without telehealth":
  "acute inpatient encounter"
    and not "telehealth POS"
    and not "telehealth modifier"

define "acute inpatient discharge with diabetes":
  [Encounter: "Acute Inpatient"] Enc
    with [Condition: "Diabetes"] Dia
      such that Enc.status = 'finished'
      and Enc.period starts during MeasurementPeriod

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
    where D.period starts during MeasurementPeriod)
    or exists([Encounter: "Frailty Diagnosis"] Dia
      where Dia.period starts during MeasurementPeriod)
        or exists([Encounter: "Frailty Encounter"] E
          where E.period starts during MeasurementPeriod)
          or exists([Encounter: "Frailty Symptom"] S
            where S.period starts during MeasurementPeriod)
              //TODO: age > 66

define "Acute Inpatient with Advanced Illness":
  exists ([Condition: "Advanced Illness"]) and  exists ([Encounter : "Acute Inpatient"])

define "Acute inpatient discharge with Advanced Illness":
  exists ([Encounter: "Acute Inpatient"] E
    with [Condition: "Advanced Illness"] AI
      such that E.status ~ 'finished')

define "diabetes exclusions":
    "Frailty" and ("Acute inpatient discharge with Advanced Illness" or "Acute Inpatient with Advanced Illness")
    // TODO: atleast 2 outpatients w/ advanced Illness

define "DiabetesCondition":
  "acute inpatient encounter without telehealth"
    or "acute inpatient discharge on discharge claim"
    or "nonacute outpatient encounters with diabetes"
    or "diabetes diagnosis by medication"
/*
define "BP < 140/90 mm Hg":
  exists ([Observation: "Systolic Blood Pressure"] O
    where O.value < 140/90 mm Hg)
*/


// TODO: link these encounters and things to subject?
define "correct context for bp reading":
  exists([Encounter: "Outpatient"] O
    where O.period during MeasurementPeriod)
    or exists([Encounter: "Nonacute Inpatient Stay"] E
      where E.period during MeasurementPeriod)
      // or [Encounter: "Remote Blood Pressure Monitoring"] R
        // where R.period during MeasurementPeriod

define "Qualifying Diastolic Blood Pressure Reading":
	["Observation": "Blood pressure"] BloodPressure
	  where BloodPressure.status in {'final', 'amended'} // = 'final' 
      // not sure if .effective is correct?
      // and exists(BloodPressure.effective.start)
      // and BloodPressure.effective during MeasurementPeriod
      /*
      and exists (
        BloodPressure.component DiastolicBP
          where FHIRHelpers.ToConcept(DiastolicBP.code) ~ "Diastolic blood pressure"
            and DiastolicBP.value.unit = 'mm[Hg]'
            and DiastolicBP.value.value < 90
      )
      */

/*
define "Qualifying Systolic Blood Pressure Reading":
	["Observation": "Blood pressure"] BloodPressure
	  where BloodPressure.status in {'final', 'amended'}
      // not sure if .effective is correct?
      and BloodPressure.effective during MeasurementPeriod
      and exists (
        BloodPressure.component SystolicBP
          where FHIRHelpers.ToConcept(SystolicBP.code) ~ "Systolic blood pressure"
            and SystolicBP.value.unit = 'mm[Hg]'
            and SystolicBP.value.value < 140
      )
 */
 /*
define "BP < 140/90 mm Hg":
  exists("correct context for bp reading") 
  and exists("Qualifying Diastolic Blood Pressure Reading")
  and exists("Qualifying Systolic Blood Pressure Reading")

define "numerator":
  case ("BP < 140/90 mm Hg" and "DiabetesCondition" and "InitialPopulation")
    when true then 1
    else 0
  end

define "denominator":
  case ("InitialPopulation" and "DiabetesCondition")
    when true then 1
    else 0
  end

context Unfiltered

define "denominator_count":
  Sum(denominator)

define "numerator_count":
  Sum(numerator)

define "CDC_MeasureScore":
  Sum(numerator) / Sum(denominator)
  */