library BloodPressureComponents

/*
Loosely based on EXM165
Illustrates accessing component values of blood pressure observations
*/

using FHIR version '4.0.0'

include FHIRHelpers version '4.0.0'
//include MATGlobalCommonFunctions_FHIR4 version '4.0.000' called Global

codesystem "LOINC": 'http://loinc.org'

code "Blood pressure": '85354-9' from "LOINC" display 'blood pressure'
code "Diastolic blood pressure": '8462-4' from "LOINC" display 'Diastolic blood pressure'
code "Systolic blood pressure": '8480-6' from "LOINC" display 'Systolic blood pressure'

parameter "Measurement Period" Interval<DateTime>

context Patient

/*
how would I find patients whose most recent BP observation
occurred in the last year and has a systolic component
that's greater than 140 or a diastolic component
that's greater than 80?
*/

/*
First, consider the bp profile defined in base FHIR (and reused in US-Core and QI-Core):
http://hl7.org/fhir/bp.html

This profile requires that blood pressure readings be represented as an Observation
with the following characteristics:

Observation
  code: 85354-9|LOINC
  component: [
    {
      code: 8480-6|LOINC,
      value: Quantity in mm[Hg]
    },
    {
      code: 8462-4|LOINC,
      value: Quantity in mm[Hg]
    }
  ]
*/

/*
Using this established structure, we can find the answer by first,
defining expressions that return the set of qualifying diastolic
and systolic readings:

NOTE: We do these separately since measure intent does not require that
the diastolic and systolic be on the measurement, only the same day
*/

// NOTE: Once we can specify that the FHIR BP Profile must be used, then status, code, and unit will not be required
define "Qualifying Diastolic Blood Pressure Reading":
	["Observation": "Blood pressure"] BloodPressure
	  where BloodPressure.status in {'final', 'amended'}
      and BloodPressure.effective during "Measurement Period"
      and exists (
        BloodPressure.component DiastolicBP
          where FHIRHelpers.ToConcept(DiastolicBP.code) ~ "Diastolic blood pressure"
            and DiastolicBP.value.unit = 'mm[Hg]'
      )

// NOTE: Once we can specify that the FHIR BP Profile must be used, then status, code, and unit will not be required
define "Qualifying Systolic Blood Pressure Reading":
	["Observation": "Blood pressure"] BloodPressure
	  where BloodPressure.status in {'final', 'amended'}
      and BloodPressure.effective during "Measurement Period"
      and exists (
        BloodPressure.component SystolicBP
          where FHIRHelpers.ToConcept(SystolicBP.code) ~ "Systolic blood pressure"
            and SystolicBP.value.unit = 'mm[Hg]'
      )

/*
We then use that set of readings to define the set of days with qualifying blood pressure readings:
*/

define "Blood Pressure Days":
	( ( "Qualifying Diastolic Blood Pressure Reading" DBPExam
				return date from DBPExam.effective
		)
			intersect ( "Qualifying Systolic Blood Pressure Reading" SBPExam
					return date from SBPExam.effective
			)
	) BPExamDay
    sort ascending

/*
The most recent day is then the Max day from that list of days:
*/
define "Most Recent Blood Pressure Day":
	Max("Blood Pressure Days")

/*
We then take the first reading for each of systolic and diastolic on that day:
*/

define "Lowest Diastolic Reading on Most Recent Blood Pressure Day":
	First(
    "Qualifying Diastolic Blood Pressure Reading" DBPReading
		  where DBPReading.effective same day as "Most Recent Blood Pressure Day"
      return singleton from (
        DBPReading.component C
          where FHIRHelpers.ToConcept(C.code) ~ "Diastolic blood pressure"
          return Tuple { value: C.value as Quantity }
      )
			sort by value.value ascending
	)

define "Lowest Systolic Reading on Most Recent Blood Pressure Day":
	First(
    "Qualifying Systolic Blood Pressure Reading" SBPReading
		  where SBPReading.effective same day as "Most Recent Blood Pressure Day"
      return singleton from (
        SBPReading.component C
          where FHIRHelpers.ToConcept(C.code) ~ "Systolic blood pressure"
          return Tuple { value: C.value as Quantity }
      )
      sort by value.value ascending
	)

/*
And finally, perform the comparison for the values we are interested in:
*/

define "Has Diastolic Blood Pressure Less Than 90":
	"Lowest Diastolic Reading on Most Recent Blood Pressure Day".value < 90

define "Has Systolic Blood Pressure Less Than 140":
	"Lowest Systolic Reading on Most Recent Blood Pressure Day".value < 140