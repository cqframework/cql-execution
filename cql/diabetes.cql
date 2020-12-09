library AgeAtMP version '1'

using FHIR version '4.0.0'
codesystem "SNOMED-CT": 'urn:oid:2.16.840.1.113883.6.96' version '20200301'
code "Diabetes": '386965004' from "SNOMED-CT"
valueset "Tonsilitis": 'urn:oid:2.16.840.1.113883.3.464.1004.1465'

/*
https://browser.ihtsdotools.org/?perspective=full&conceptId1=73211009&edition=MAIN/SNOMEDCT-US/2020-09-01&release=&languages=en
 this maybe should be 73211009? {
          "code": "17741008",
          "system": "2.16.840.1.113883.6.96",
          "version": "2020-09"
        }
*/
context Patient

define function ToCode(coding FHIR.Coding):
    System.Code {
      code: coding.code.value,
      system: coding.system.value,
      version: coding.version.value,
      display: coding.display.value
    }

define "DiabetesCode":
  [Claim] C
    with C.diagnosis diagnosis such that exists (
        C.diagnosis D
          // Why Doesn't this work? This seems like the best option?
          // Ask James for list of snowmed codes
          //where ToCode(D.diagnosis.coding[0]) = "Diabetes"
          // This Below works!
          //where StringToString(D.diagnosis.text) = 'Diabetes'
          // THIS WORKS! but only grabs first element
          // where ToCode(D.diagnosis.coding[0]).code = '386965004'
          // Better iterative version
          with D.diagnosis.coding coding such that exists(
            D.diagnosis.coding C
              where ToCode(C).code = '386965004'
              // or where ToCode(C).display = 'Diabetes'
          )
    )
/*
define "DiagnosisReference":
  [Claim] C
    with [Condition] T
      such that exists (
        C.diagnosis D
          where D.diagnosis.reference = T.identifier[0].value
    )
*/