//measure = require './CDC_HbA1c'
// codes = require './cql-code-service'
//codeservice = require '../src/data/temp_code'
//patients = require '../src/data/patients'

const cql = require('../src/cql');
// const measure = require('./CDC_HbA1c.json');
const measure = require('./diabetes.json');
const codes = require('../src/cql-code-service');
const cqlfhir = require('cql-exec-fhir');
const patients = require('./patients');
const codeservice = require('./temp_code');

const lib = new cql.Library(measure);
const executor = new cql.Executor(lib);
const patientSource = cqlfhir.PatientSource.FHIRv400();
const cservice = new codes.CodeService(codeservice);
const bundles = [ {
  "resourceType": "Bundle",
  "id": "example1",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2014-08-18T01:43:30Z"
  },
  "base": "http://example.com/base",
  "entry": [
    {
      "fullUrl": "urn:uuid:40d2066e-9037-763e-2bb3-c7e4b20a79d9",
      "request": {
        "method": "POST",
        "url": "Patient"
      },
      "resource": {
        "resourceType": "Patient",
        "id": "example",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>"
        },
        "identifier": [
          {
            "use": "usual",
            "type": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                  "code": "MR"
                }
              ]
            },
            "system": "urn:oid:1.2.36.146.595.217.0.1",
            "value": "12345",
            "period": {
              "start": "2001-05-06"
            },
            "assigner": {
              "display": "Acme Healthcare"
            }
          }
        ],
        "active": true,
        "name": [
          {
            "use": "official",
            "family": "Chalmers",
            "given": [
              "Peter",
              "James"
            ]
          },
          {
            "use": "usual",
            "given": [
              "Jim"
            ]
          },
          {
            "use": "maiden",
            "family": "Windsor",
            "given": [
              "Peter",
              "James"
            ],
            "period": {
              "end": "2002"
            }
          }
        ],
        "telecom": [
          {
            "use": "home"
          },
          {
            "system": "phone",
            "value": "(03) 5555 6473",
            "use": "work",
            "rank": 1
          },
          {
            "system": "phone",
            "value": "(03) 3410 5613",
            "use": "mobile",
            "rank": 2
          },
          {
            "system": "phone",
            "value": "(03) 5555 8834",
            "use": "old",
            "period": {
              "end": "2014"
            }
          }
        ],
        "gender": "male",
        "birthDate": "1974-12-25",
        "_birthDate": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
              "valueDateTime": "1974-12-25T14:35:45-05:00"
            }
          ]
        },
        "deceasedBoolean": false,
        "address": [
          {
            "use": "home",
            "type": "both",
            "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
            "line": [
              "534 Erewhon St"
            ],
            "city": "PleasantVille",
            "district": "Rainbow",
            "state": "Vic",
            "postalCode": "3999",
            "period": {
              "start": "1974-12-25"
            }
          }
        ],
        "contact": [
          {
            "relationship": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
                    "code": "N"
                  }
                ]
              }
            ],
            "name": {
              "family": "du Marché",
              "_family": {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
                    "valueString": "VV"
                  }
                ]
              },
              "given": [
                "Bénédicte"
              ]
            },
            "telecom": [
              {
                "system": "phone",
                "value": "+33 (237) 998327"
              }
            ],
            "address": {
              "use": "home",
              "type": "both",
              "line": [
                "534 Erewhon St"
              ],
              "city": "PleasantVille",
              "district": "Rainbow",
              "state": "Vic",
              "postalCode": "3999",
              "period": {
                "start": "1974-12-25"
              }
            },
            "gender": "female",
            "period": {
              "start": "2012"
            }
          }
        ],
        "managingOrganization": {
          "reference": "Organization/1"
        }
      }
    },
    {
      "fullUrl": "urn:uuid:37d2066e-9037-763e-2bb3-c7e4b20a79d9",
      "resource": {
        "resourceType": "Condition",
        "meta": {
          "profile": ["FHIR.Condition"]
        },
        "id": "37d2066e-9037-763e-2bb3-c7e4b20a79d9",
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active"
            }
          ]
        },
        "verificationStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              "code": "confirmed"
            }
          ]
        },
        "code": {
          "coding": [
            {
              "system": "2.16.840.1.113883.6.96",
              "code": "17741008",
              "display": "Tonsilitis"
            }
          ],
          "text": "Tonsilitis"
        },
        "subject": {
          "reference": "40d2066e-9037-763e-2bb3-c7e4b20a79d9"
        }
      }
    },
    {
      "resource": {
        "resourceType": "Claim",
        "meta": {
          "profile": ["claim-qicore-qicore-claim"]
        },
        "id": "100150",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">A human-readable rendering of the Oral Health Claim</div>"
        },
        "identifier": [
          {
            "system": "http://happyvalley.com/claim",
            "value": "12345"
          }
        ],
        "status": "active",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/claim-type",
              "code": "oral"
            }
          ]
        },
        "use": "claim",
        "patient": {
          "reference": "40d2066e-9037-763e-2bb3-c7e4b20a79d9"
        },
        "created": "2014-08-16",
        "insurer": {
          "reference": "Organization/2"
        },
        "provider": {
          "reference": "Organization/1"
        },
        "priority": {
          "coding": [
            {
              "code": "normal"
            }
          ]
        },
        "payee": {
          "type": {
            "coding": [
              {
                "code": "provider"
              }
            ]
          }
        },
        "careTeam": [
          {
            "sequence": 1,
            "provider": {
              "reference": "Practitioner/example"
            }
          }
        ],
        // "diagnosis": [
        //   {
        //     "sequence": 1,
        //     "diagnosisReference": {
        //       "reference": "urn:uuid:37d2066e-9037-763e-2bb3-c7e4b20a79d9"
        //     }
        //   }
        // ],
        "diagnosis": [
          {
            "sequence": 1,
            "diagnosisCodeableConcept": {
              "coding": [{
                "code":"226967001",
                "system": "http://snomed.info/sct",
                "display": "Smoething else"
              }, {
                "code":"386965004",
                "system": "http://snomed.info/sct",
                "display": "Diabetes"
              }],
              "text": "Diabetes"
            }
          }
        ],
        "insurance": [
          {
            "sequence": 1,
            "focal": true,
            "identifier": {
              "system": "http://happyvalley.com/claim",
              "value": "12345"
            },
            "coverage": {
              "reference": "Coverage/9876B1"
            }
          }
        ],
        "item": [
          {
            "sequence": 1,
            "careTeamSequence": [1],
            "productOrService": {
              "coding": [
                {
                  "code": "1200"
                }
              ]
            },
            "servicedDate": "2014-08-16",
            "unitPrice": {
              "value": 135.57,
              "currency": "USD"
            },
            "net": {
              "value": 135.57,
              "currency": "USD"
            }
          }
        ]
      }
    }
  ]
} ];
patientSource.loadBundles(bundles);
//patientSource.loadBundles(patients);

const parameters = {
  MeasurementPeriod: new cql.Interval(cql.DateTime.parse('2018-12-31'), cql.DateTime.parse('2019-12-31'), true, false)
};
const result = executor.exec(patientSource);
// const result = executor.exec(patientSource, cservice, parameters);
console.log(JSON.stringify(result, undefined, 2));
//console.log(JSON.stringify(result.patientResults.example, undefined, 2));
//console.log(result) 

//cservice = new codes.CodeService codeservice

//lib = new cql.Library(measure)

// parameters = {
//   MeasurementPeriod: new cql.Interval(cql.DateTime.parse('2018-12-31'), cql.DateTime.parse('2019-12-31'), true, false)
// }

//executor = new cql.Executor(lib, cservice, parameters)

//psource = new cql.PatientSource patients

//result = executor.exec(psource)

//console.log("done")
//console.log(result)