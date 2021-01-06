const patients = [
  {
    resourceType: 'Bundle',
    id: 'tests-numer-EXM165-FHIR3-bundle',
    type: 'transaction',
    entry: [ 
      {
        resource:  {
          resourceType: 'Patient',
          id: 'numer-EXM165-FHIR3',
          meta:  {
            profile: ['http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient']
          },
          extension: [ {
            url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
            extension: [ {
              url: 'ombCategory',
              valueCoding:  {
                system: 'urn:oid:2.16.840.1.113883.6.238',
                code: '2054-5',
                display: 'Black or African American'
              }
            }]
          },  {
            url: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
            extension: [ {
              url: 'ombCategory',
              valueCoding:  {
                system: 'urn:oid:2.16.840.1.113883.6.238',
                code: '2186-5',
                display: 'Not Hispanic or Latino'
              }
            }]
          }],
          identifier: [ {
            use: 'usual',
            type:  {
              coding: [ {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'MR',
                display: 'Medical Record Number'
              }]
            },
            system: 'http://hospital.smarthealthit.org',
            value: '999999993'
          }],
          name: [ {
            family: 'Doe',
            given: ['Jill']
          }],
          gender: 'female',
          birthDate: '2018-01-01'
        },
        request: {
          method: 'PUT',
          url: 'Patient/numer-EXM165-FHIR3'
        }
      },
      // Encounter
      {
        resource: {
          resourceType: 'Encounter',
          id: 'home',
          contained: [
            {
              resourceType: 'location',
              id: 'home',
              description: "Client's home",
              mode: 'kind'
            }
          ],
          status: 'finished',
          class: {
            code: '185460008',
            system: 'http://snomed.info/sct',
            version: '2020-09'
          },
          type: [
            {
              coding: [
                {
                  code: '185460008',
                  system: 'http://snomed.info/sct',
                  version: '2020-09'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          participant: [
            {
              period: {
                start: '2018-01-17T16:00:00+10:00',
                end: '2018-01-17T16:30:00+10:00'
              },
              individual: {
                reference: 'Practitioner/example',
                display: 'Dr Adam Careful'
              }
            }
          ],
          period: {
            start: '2019-01-17T16:00:00+10:00',
            end: '2019-01-17T16:30:00+10:00'
          },
          location: [
            {
              location: {
                reference: '#home',
                display: "Client's home"
              },
              status: 'completed',
              period: {
                start: '2015-01-17T16:00:00+10:00',
                end: '2015-01-17T16:30:00+10:00'
              }
            }
          ]
        },
      },
      // DTaP Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'rotavirus-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '219084006',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Anaphylactic Reaction to VTaP Vaccine'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // DTaP (note that there are immunizations and vaccinations - not required, but I assume this is what real data would look like)
      {
        resource: {
          resourceType: 'Immunization',
          id: 'dtap-imm-1',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '106',
                system: 'CVX',
                version: '2020-12',
              
              }, 
            ],
            id: 'DTaP Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
      
      
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'dtap-proc-1',
          status: 'completed',
          code: {
            coding: [
              {
                code: '310306005',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'DTaP Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-01-10T09:30:10+01:00',
            end: '2019-01-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Immunization',
          id: 'dtap-imm-2',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235'
            }
          ],
          status: 'completed',
          vaccineCode: {
        
            //   coding: [
            //     {
            //       system: 'http://snomed.info/sct',
            //       code: '112689000',
            //       display: 'Acute Inpatient'
            //     }
            //   ],
            //   text: 'Acute Inpatient'
            // },
            coding: [
              {
                code: '107',
                system: 'CVX',
                version: '2020-12',
              
              },
            ],
            id: 'DTaP Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-02-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'dtap-proc-2',
          status: 'completed',
          code: {
            coding: [
              {
                code: '310307001',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'DTaP Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-02-10T09:30:10+01:00',
            end: '2019-02-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Immunization',
          id: 'dtap-imm-3',
        
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1237'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '107',
                system: 'CVX',
                version: '2020-12',
              
              }, 
            ],
            id: 'DTaP Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-03-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-03-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'dtap-proc-3',
          status: 'completed',
          code: {
            coding: [
              {
                code: '310307001',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'DTaP Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-03-10T09:30:10+01:00',
            end: '2019-03-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Immunization',
          id: 'dtap-imm-4',
        
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1238'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '110',
                system: 'CVX',
                version: '2020-12',
              
              }, 
            ],
            id: 'DTaP Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-04-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-03-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'dtap-proc-4',
          status: 'completed',
          code: {
            coding: [
              {
                code: '310308006',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'DTaP Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-04-10T09:30:10+01:00',
            end: '2019-04-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      // IPV (Polio)
      {
        resource: {
          resourceType: 'Immunization',
          id: 'ipv-imm-1',
        
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '10',
                system: 'CVX',
                version: '2020-12'
              }, 
            ],
            id: 'Inactivated Polio Vaccine (IPV)'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'ipv-proc-2',
          status: 'completed',
          code: {
            coding: [
              {
                code: '396456003',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Inactivated Polio Vaccine (IPV) Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-02-10T09:30:10+01:00',
            end: '2019-02-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'ipv-proc-3',
          status: 'completed',
          code: {
            coding: [
              {
                code: '396456003',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Inactivated Polio Vaccine (IPV) Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-03-10T09:30:10+01:00',
            end: '2019-03-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      // IPV Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'ipv-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '293117006',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Anaphylactic Reaction to Inactivated Polio Vaccine (IPV) Vaccine'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Hepatitis B Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'hep-b-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '1116000',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Hepatitis B'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Hepatitis B (Hep B) - other two hep b cases are ipv procedures
      {
        resource: {
          resourceType: 'Immunization',
          id: 'hep-b-imm-1',
        
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '08',
                system: 'CVX',
                version: '2020-12'
              }, 
            ],
            id: 'Hepatitis B Immunization'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-15',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      // Flu (Influenza)
      {
        resource: {
          resourceType: 'Immunization',
          id: 'flu-imm-1',
        
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '135',
                system: 'CVX',
                version: '2020-12'
              }, 
            ],
            id: 'Influenza Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'flu-proc-1',
          status: 'completed',
          code: {
            coding: [
              {
                code: '90655',
                system: 'CPT',
                version: '2021'
              },
            ],
            id: 'Influenza Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-01-10T09:30:10+01:00',
            end: '2019-01-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'flu-proc-2',
          status: 'completed',
          code: {
            coding: [
              {
                code: '86198006',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Influenza Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-02-10T09:30:10+01:00',
            end: '2019-02-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      // Hepatitis A Observation
      {
        resource:{
          resourceType: 'Observation',
          id: 'gf3a4f19-9f99-6ceb-7dde-4900ae818cbw',
          meta: {
            'profile': [
              'http://hl7.org/fhir/StructureDefinition/vitalsigns'
            ]
          },
          text: {
            status: 'generated',
          },
          identifier: [
            {
              system: 'urn:ietf:rfc:3981',
              value: 'urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878282'
            }
          ],
          basedOn: [
            {
              identifier: {
                system: 'https://acme.org/identifiers',
                value: '1234'
              }
            }
          ],
          status: 'final',
          category: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                  code: 'vital-signs',
                  display: 'Vital Signs'
                }
              ]
            }
          ],
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '32018-4',
                version: '2.68',
                display: 'Anti Hepatitis A IgG Antigen Test'
              }
            ],
            text: 'Blood pressure systolic & diastolic'
          },
          valueCodeableConcept: {
            coding: [
              {
                code: '441773004',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Positive Finding'
              }
            ]
          },
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          effectiveDateTime: '2019-10-28T19:57:22-04:00',
          performer: [
            {
              'reference': 'Practitioner/example'
            }
          ],
          interpretation: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
                  code: 'L',
                  display: 'low'
                }
              ],
              text: 'Below low normal'
            }
          ],
          bodySite: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '368209003',
                display: 'Right arm'
              }
            ]
          },
        },
      },
      // Hepatitis A (hep a)
      {
        resource: {
          resourceType: 'Condition',
          id: 'hep-a-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '105801000119103',
                version: '2020-09',
                display: 'Hepatisis A'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2018-04-02',
          abatementString: 'around April 9, 2018',
          recordedDate: '2018-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // VZV (Chicken Pox)
      {
        resource: {
          resourceType: 'Condition',
          id: 'vzv-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '10698009',
                version: '2020-09',
                display: 'VZV'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2018-05-02',
          abatementString: 'around May 9, 2018',
          recordedDate: '2018-05-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Pneumococcal Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'pc-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '293116002',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Anaphylactic Reaction to Pneumococcal Conjugate Vaccine'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Pneumococcal Conjugate
      {
        resource: {
          resourceType: 'Immunization',
          id: 'pc-imm-1',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1257'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '133',
                system: 'CVX',
                version: '2020-12',
              
              }, 
            ],
            id: 'Pneumococcal Conjugate Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
      
      
        }
      },
      {
        resource:{
          resourceType: 'Immunization',
          id: 'pc-imm-2',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1235'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '133',
                system: 'CVX',
                version: '2020-12',
              },
            ],
            id: 'Pneumococcal Conjugate Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-02-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'pc-proc-3',
          status: 'completed',
          code: {
            coding: [
              {
                code: '90670',
                system: 'CPT',
                version: '2021'
              },
            ],
            id: 'Pneumococcal Conjugate Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-03-10T09:30:10+01:00',
            end: '2019-03-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'pc-proc-4',
          status: 'completed',
          code: {
            coding: [
              {
                code: '434751000124102',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Pneumococcal Conjugate Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-04-10T09:30:10+01:00',
            end: '2019-04-10T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      // Rotavirus condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'rotavirus-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '428331000124103',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Anaphylactic Reaction to Rotavirus Vaccine'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Rotavirus 2 dose Vaccinations
      {
        resource: {
          resourceType: 'Immunization',
          id: 'rota-2-dose-imm-1',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '119',
                system: 'CVX',
                version: '2020-12'
              },
            ],
            id: 'Rotavirus 2 dose Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
      
      
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'rota-2-dose-proc-1',
          status: 'completed',
          code: {
            coding: [
              {
                code: '434741000124104',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Rotavirus 2 dose Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-01-12T09:30:10+01:00',
            end: '2019-01-12T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      // Rotavirus 3 dose Vaccinations 
      {
        resource: {
          resourceType: 'Immunization',
          id: 'rota-3-dose-imm-1',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '122',
                system: 'CVX',
                version: '2020-12'
              },
            ],
            id: 'Rotavirus 3 dose Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-19',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
      
      
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'rota-3-dose-proc-1',
          status: 'completed',
          code: {
            coding: [
              {
                code: '434731000124109',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Rotavirus 3 dose Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-01-16T09:30:10+01:00',
            end: '2019-01-16T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      {
        resource:{
          resourceType: 'Procedure',
          id: 'rota-3-dose-proc-2',
          status: 'completed',
          code: {
            coding: [
              {
                code: '434731000124109',
                system: 'http://snomed.info/sct',
                version: '2020-09'
              },
            ],
            id: 'Rotavirus 3 dose Vaccine Administered'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          performedPeriod: {
            start: '2019-01-17T09:30:10+01:00',
            end: '2019-01-17T10:30:10+01:00'
          },
          performer: [{
            function: {
              coding: [{
                system: 'urn:oid:2.16.840.1.113883.2.4.15.111',
                code: '01.000',
                display: 'Arts'
              }],
              text: 'Care role'
            },
            actor: {
              reference: 'Practitioner/f005',
              display: 'A. Langeveld'
            }
          }],
          reasonCode: [{
            text: 'ensure breathing during surgery'
          }],
          bodySite: [{
            coding: [{
              system: 'http://snomed.info/sct',
              code: '83030008',
              display: 'Retropharyngeal area'
            }]
          }],
          outcome: {
            text: 'removal of the retropharyngeal abscess'
          },
          report: [{
            reference: 'DiagnosticReport/f001',
          }],
          followUp: [{
            text: 'described in care plan'
          }]
        }
      },
      // HiB Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'hib-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '433621000124101',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Anaphylactic Reaction to Hemophilus Influenza B (HiB) Vaccine'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // MMR Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'mrr-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '042',
                system: 'ICD9CM',
                version: '2013',
                display: 'HIV'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Measles Observation
      {
        resource:{
          resourceType: 'Observation',
          id: 'gf3a4f19-9f99-6ceb-7dde-4900ae818cbw',
          meta: {
            'profile': [
              'http://hl7.org/fhir/StructureDefinition/vitalsigns'
            ]
          },
          text: {
            status: 'generated',
          },
          identifier: [
            {
              system: 'urn:ietf:rfc:3981',
              value: 'urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878282'
            }
          ],
          basedOn: [
            {
              identifier: {
                system: 'https://acme.org/identifiers',
                value: '1234'
              }
            }
          ],
          status: 'final',
          category: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                  code: 'vital-signs',
                  display: 'Vital Signs'
                }
              ]
            }
          ],
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '21500-4',
                version: '2.68',
                display: 'Measles Antibody Test (IgG Antibody Titer)'
              }
            ],
            text: 'Blood pressure systolic & diastolic'
          },
          valueQuantity: {
            value: 1.3,
            unit: 'mm[Hg]'
          },
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          effectiveDateTime: '2019-10-28T19:57:22-04:00',
          performer: [
            {
              'reference': 'Practitioner/example'
            }
          ],
          interpretation: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
                  code: 'L',
                  display: 'low'
                }
              ],
              text: 'Below low normal'
            }
          ],
          bodySite: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '368209003',
                display: 'Right arm'
              }
            ]
          },
        },
      },
      // Mumps Condition
      {
        resource: {
          resourceType: 'Condition',
          id: 'mumps-condition',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1251'
            }
          ],
          clinicalStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
                code: 'resolved'
              }
            ]
          },
          verificationStatus: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
                code: 'confirmed'
              }
            ]
          },
          category: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '55607006',
                  display: 'Problem'
                },
                {
                  system: 'http://terminology.hl7.org/CodeSystem/condition-category',
                  code: 'problem-list-item'
                }
              ]
            }
          ],
          severity: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '255604002',
                display: 'Mild'
              }
            ]
          },
          code: {
            coding: [
              {
                code: '105821000119107',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Mumps'
              }
            ]
          },
          bodySite: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '38266002',
                  display: 'Entire body as a whole'
                }
              ]
            }
          ],
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          encounter: {
            reference: 'Encounter/example'
          },
          onsetDateTime: '2019-04-02',
          abatementString: 'around April 9, 2019',
          recordedDate: '2019-04-04',
          recorder: {
            reference: 'Practitioner/f201'
          },
          asserter: {
            reference: 'Practitioner/f201'
          },
        }
      },
      // Rubella Observation
      {
        resource:{
          resourceType: 'Observation',
          id: 'i',
          meta: {
            'profile': [
              'http://hl7.org/fhir/StructureDefinition/vitalsigns'
            ]
          },
          text: {
            status: 'generated',
          },
          identifier: [
            {
              system: 'urn:ietf:rfc:3981',
              value: 'urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878282'
            }
          ],
          basedOn: [
            {
              identifier: {
                system: 'https://acme.org/identifiers',
                value: '1234'
              }
            }
          ],
          status: 'final',
          category: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/observation-category',
                  code: 'vital-signs',
                  display: 'Vital Signs'
                }
              ]
            }
          ],
          code: {
            coding: [
              {
                system: 'http://loinc.org',
                code: '25514-1',
                version: '2.68',
                display: 'Rubella Antibody Test (IgG Antibody presence)'
              }
            ],
          },
          valueCodeableConcept: {
            coding: [
              {
                code: '441773004',
                system: 'http://snomed.info/sct',
                version: '2020-09',
                display: 'Positive Finding'
              }
            ]
          },
          subject: {
            reference: 'Patient/numer-EXM165-FHIR3',
          },
          effectiveDateTime: '2019-10-28T19:57:22-04:00',
          performer: [
            {
              'reference': 'Practitioner/example'
            }
          ],
          interpretation: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
                  code: 'L',
                  display: 'low'
                }
              ],
              text: 'Below low normal'
            }
          ],
          bodySite: {
            coding: [
              {
                system: 'http://snomed.info/sct',
                code: '368209003',
                display: 'Right arm'
              }
            ]
          },
        },
      },
      // MMR Vaccinations
      {
        resource: {
          resourceType: 'Immunization',
          id: 'mmr-imm-1',
          identifier: [
            {
              system: 'urn:ietf:rfc:3986',
              value: 'urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234'
            }
          ],
          status: 'completed',
          vaccineCode: {
            coding: [
              {
                code: '03',
                system: 'CVX',
                version: '2020-12',
              },
            ],
            id: 'MMR Vaccine'
          },
          patient: {
            reference: 'Patient/numer-EXM165-FHIR3'
          },
          encounter: {
            reference: 'Encounter/example'
          },
          occurrenceDateTime: '2019-01-10',
          primarySource: true,
          location: {
            reference: 'Location/1'
          },
          manufacturer: {
            reference: 'Organization/hl7'
          },
          lotNumber: 'AAJN11K',
          expirationDate: '2025-02-15',
          site: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ActSite',
                code: 'LA',
                display: 'left arm'
              }
            ]
          },
          route: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration',
                code: 'IM',
                display: 'Injection, intramuscular'
              }
            ]
          },
          doseQuantity: {
            value: 5,
            system: 'http://unitsofmeasure.org',
            code: 'mg'
          },
          performer: [
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'OP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            },
            {
              function: {
                coding: [
                  {
                    system: 'http://terminology.hl7.org/CodeSystem/v2-0443',
                    code: 'AP'
                  }
                ]
              },
              actor: {
                reference: 'Practitioner/example'
              }
            }
          ],
          note: [
            {
              id: 'Notes on adminstration of vaccine'
            }
          ],
          reasonCode: [
            {
              coding: [
                {
                  system: 'http://snomed.info/sct',
                  code: '429060002'
                }
              ]
            }
          ],
          isSubpotent: true,
          education: [
            {
              documentType: '253088698300010311120702',
              publicationDate: '2012-07-02',
              presentationDate: '2013-01-10'
            }
          ],
          programEligibility: [
            {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/immunization-program-eligibility',
                  code: 'ineligible'
                }
              ]
            }
          ],
          fundingSource: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/immunization-funding-source',
                code: 'private'
              }
            ]
          }
        }
      },
    ]
  }
];

module.exports = patients;