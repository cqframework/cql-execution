/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Retrieve
library TestSnippet version '1'
using Simple version '1.0.0'
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
context Patient
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
*/

module.exports['Retrieve'] = {
  "library" : {
    "localId" : "0",
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 32,
      "startChar" : 34,
      "endLine" : 32,
      "endChar" : 69,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 33,
      "startChar" : 34,
      "endLine" : 33,
      "endChar" : 69,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 48,
      "startChar" : 59,
      "endLine" : 48,
      "endChar" : 72,
      "message" : "List-valued expression was demoted to a singleton.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 49,
      "startChar" : 59,
      "endLine" : 49,
      "endChar" : 72,
      "message" : "List-valued expression was demoted to a singleton.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 52,
      "startChar" : 38,
      "endLine" : 52,
      "endChar" : 78,
      "message" : "Could not resolve code path bodySite for the type of the retrieve Simple.Condition.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 52,
      "startChar" : 38,
      "endLine" : 52,
      "endChar" : 78,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 53,
      "startChar" : 38,
      "endLine" : 53,
      "endChar" : 77,
      "message" : "Could not resolve code path bodySite for the type of the retrieve Simple.Condition.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 53,
      "startChar" : 38,
      "endLine" : 53,
      "endChar" : 77,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 54,
      "startChar" : 38,
      "endLine" : 54,
      "endChar" : 77,
      "message" : "Could not resolve code path bodySite for the type of the retrieve Simple.Condition.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 54,
      "startChar" : 38,
      "endLine" : 54,
      "endChar" : 77,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 56,
      "startChar" : 40,
      "endLine" : 56,
      "endChar" : 75,
      "message" : "Could not resolve code path bodySite for the type of the retrieve Simple.Condition.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 56,
      "startChar" : 40,
      "endLine" : 56,
      "endChar" : 75,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 57,
      "startChar" : 40,
      "endLine" : 57,
      "endChar" : 74,
      "message" : "Could not resolve code path bodySite for the type of the retrieve Simple.Condition.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 57,
      "startChar" : 40,
      "endLine" : 57,
      "endChar" : 74,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 58,
      "startChar" : 40,
      "endLine" : 58,
      "endChar" : 74,
      "message" : "Could not resolve code path bodySite for the type of the retrieve Simple.Condition.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 58,
      "startChar" : 40,
      "endLine" : 58,
      "endChar" : 74,
      "message" : "Could not resolve membership operator for terminology target of the retrieve.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "692",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
        } ]
      }
    } ],
    "identifier" : {
      "id" : "TestSnippet",
      "version" : "1"
    },
    "schemaIdentifier" : {
      "id" : "urn:hl7-org:elm",
      "version" : "r1"
    },
    "usings" : {
      "def" : [ {
        "localId" : "1",
        "localIdentifier" : "System",
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
            }, {
              "s" : [ {
                "value" : [ "Simple" ]
              } ]
            }, {
              "value" : [ " version '1.0.0'" ]
            } ]
          }
        } ]
      } ]
    },
    "includes" : {
      "def" : [ {
        "localId" : "208",
        "localIdentifier" : "included",
        "path" : "Included",
        "version" : "1",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Included" ]
              } ]
            }, {
              "value" : [ " version ", "'1'", " called ", "included" ]
            } ]
          }
        } ]
      } ]
    },
    "codeSystems" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "SNOMED",
        "id" : "2.16.840.1.113883.6.96",
        "version" : "2013-09",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SNOMED\"", ": ", "'2.16.840.1.113883.6.96'", " version ", "'2013-09'" ]
            } ]
          }
        } ]
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "TestCodeSystem",
        "id" : "2.16.840.1.113883.6.96",
        "version" : "2013-09",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "// NOTE: These are duplicated definitions of the above terminology,\n// purely so that the cross-product of test cases in this file is obvious.\n// These names do not follow CQL best practice; don't copy this example.\n", "codesystem ", "\"TestCodeSystem\"", ": ", "'2.16.840.1.113883.6.96'", " version ", "'2013-09'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Ambulatory/ED Visit",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Ambulatory/ED Visit\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Annual Wellness Visit",
        "id" : "2.16.840.1.113883.3.526.3.1240",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Annual Wellness Visit\"", ": ", "'2.16.840.1.113883.3.526.3.1240'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "221",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Body locations",
        "id" : "2.16.840.1.113762.1.4.1181.77",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Body locations\"", ": ", "'2.16.840.1.113762.1.4.1181.77'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "TestValueSet",
        "id" : "2.16.840.1.113883.3.464.1003.102.12.1011",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "valueset ", "\"TestValueSet\"", ": ", "'2.16.840.1.113883.3.464.1003.102.12.1011'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Viral pharyngitis code",
        "id" : "1532007",
        "display" : "Viral pharyngitis (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "code ", "\"Viral pharyngitis code\"", ": ", "'1532007'", " from " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "\"SNOMED\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Viral pharyngitis (disorder)'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMED",
          "annotation" : [ ]
        }
      }, {
        "localId" : "223",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Nose code",
        "id" : "45206002",
        "display" : "Nasal structure (body structure)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "// Pain body location reference set\n", "code ", "\"Nose code\"", ": ", "'45206002'", " from " ]
            }, {
              "r" : "224",
              "s" : [ {
                "value" : [ "\"SNOMED\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Nasal structure (body structure)'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMED",
          "annotation" : [ ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "TestCode",
        "id" : "1532007",
        "display" : "Viral pharyngitis (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "code ", "\"TestCode\"", ": ", "'1532007'", " from " ]
            }, {
              "r" : "231",
              "s" : [ {
                "value" : [ "\"TestCodeSystem\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Viral pharyngitis (disorder)'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "TestCodeSystem",
          "annotation" : [ ]
        }
      } ]
    },
    "concepts" : {
      "def" : [ {
        "localId" : "219",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Viral pharyngitis",
        "display" : "Viral pharyngitis (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "concept ", "\"Viral pharyngitis\"", ": { " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "\"Viral pharyngitis code\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Viral pharyngitis (disorder)'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Viral pharyngitis code",
          "annotation" : [ ]
        } ]
      }, {
        "localId" : "233",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "TestConcept",
        "display" : "Viral pharyngitis (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "concept ", "\"TestConcept\"", ": { " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "\"TestCode\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Viral pharyngitis (disorder)'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "TestCode",
          "annotation" : [ ]
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "238",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "236",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "237",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "235",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "241",
        "name" : "TestCodeList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "241",
            "s" : [ {
              "value" : [ "", "define ", "TestCodeList", ": " ]
            }, {
              "r" : "242",
              "s" : [ {
                "value" : [ "{ " ]
              }, {
                "r" : "243",
                "s" : [ {
                  "value" : [ "TestCode" ]
                } ]
              }, {
                "value" : [ " }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "246",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "242",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "244",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "245",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "element" : [ {
            "type" : "CodeRef",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "TestCode",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "250",
        "name" : "Conditions",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "Conditions", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "value" : [ "[", "Condition", "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "254",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "251",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "252",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "253",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "258",
        "name" : "ConditionsByVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "258",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByVS", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestValueSet\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "266",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "261",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "264",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "265",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "TestValueSet",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "270",
        "name" : "ConditionsByCS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCS", ": " ]
            }, {
              "r" : "273",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeSystem\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "278",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "273",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "276",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "277",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "CodeSystemRef",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "TestCodeSystem",
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "282",
        "name" : "ConditionsByCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "282",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCode", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCode\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "292",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "293",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "285",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "290",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "291",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "289",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "TestCode",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "296",
        "name" : "ConditionsByConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "296",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByConcept", ": " ]
            }, {
              "r" : "299",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestConcept\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "310",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "311",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "299",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "308",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "Property",
            "localId" : "307",
            "path" : "codes",
            "annotation" : [ ],
            "source" : {
              "type" : "ConceptRef",
              "localId" : "298",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "TestConcept",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "314",
        "name" : "ConditionsByCodeList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "314",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeList", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeList\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "326",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "327",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "319",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "324",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "325",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ExpressionRef",
            "localId" : "316",
            "name" : "TestCodeList",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "317",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "318",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "330",
        "name" : "ConditionsByCodeInCS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "330",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeInCS", ":     " ]
            }, {
              "r" : "333",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeSystem\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "338",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "339",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "333",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "336",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "337",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "CodeSystemRef",
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "TestCodeSystem",
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "342",
        "name" : "ConditionsByCodeEqualsCS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "342",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEqualsCS", ": " ]
            }, {
              "r" : "345",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeSystem\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "349",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "350",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "345",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "347",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "348",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "CodeSystemRef",
            "localId" : "344",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "TestCodeSystem",
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "353",
        "name" : "ConditionsByCodeEquivCS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "353",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEquivCS", ":  " ]
            }, {
              "r" : "356",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeSystem\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "360",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "361",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "356",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "358",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "359",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "CodeSystemRef",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "TestCodeSystem",
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "364",
        "name" : "ConditionsByCodeInVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "364",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeInVS", ":     " ]
            }, {
              "r" : "367",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestValueSet\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "372",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "373",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "367",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "370",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "TestValueSet",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "376",
        "name" : "ConditionsByCodeEqualsVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "376",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEqualsVS", ": " ]
            }, {
              "r" : "379",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestValueSet\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "391",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "392",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "379",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "389",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "390",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ExpandValueSet",
            "localId" : "383",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "384",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ValueSetRef",
              "localId" : "378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "TestValueSet",
              "preserve" : true,
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "395",
        "name" : "ConditionsByCodeEquivVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "395",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEquivVS", ":  " ]
            }, {
              "r" : "398",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestValueSet\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "410",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "411",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "398",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "408",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "409",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ExpandValueSet",
            "localId" : "402",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "403",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ValueSetRef",
              "localId" : "397",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "TestValueSet",
              "preserve" : true,
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "414",
        "name" : "ConditionsByCodeInCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "414",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeInCode", ":     " ]
            }, {
              "r" : "417",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCode\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "425",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "426",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "417",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "423",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "424",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "419",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "416",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "TestCode",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "429",
        "name" : "ConditionsByCodeEqualsCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "429",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEqualsCode", ": " ]
            }, {
              "r" : "432",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCode\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "439",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "440",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "432",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "437",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "438",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "436",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "431",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "TestCode",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "443",
        "name" : "ConditionsByCodeEquivCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "443",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEquivCode", ":  " ]
            }, {
              "r" : "446",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCode\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "453",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "454",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "446",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "451",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "452",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "450",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "445",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "TestCode",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "457",
        "name" : "ConditionsByCodeInConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "457",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeInConcept", ":     " ]
            }, {
              "r" : "460",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestConcept\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "472",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "473",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "460",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "470",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "471",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "Property",
            "localId" : "469",
            "path" : "codes",
            "annotation" : [ ],
            "source" : {
              "type" : "ConceptRef",
              "localId" : "459",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "TestConcept",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "476",
        "name" : "ConditionsByCodeEqualsConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "476",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEqualsConcept", ": " ]
            }, {
              "r" : "479",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestConcept\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "490",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "491",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "479",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "488",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "489",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "Property",
            "localId" : "487",
            "path" : "codes",
            "annotation" : [ ],
            "source" : {
              "type" : "ConceptRef",
              "localId" : "478",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "TestConcept",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "494",
        "name" : "ConditionsByCodeEquivConcept",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "494",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEquivConcept", ":  " ]
            }, {
              "r" : "497",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestConcept\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "508",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "509",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "497",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "506",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "507",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "Property",
            "localId" : "505",
            "path" : "codes",
            "annotation" : [ ],
            "source" : {
              "type" : "ConceptRef",
              "localId" : "496",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "TestConcept",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "512",
        "name" : "ConditionsByCodeInCodeList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "512",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeInCodeList", ":     " ]
            }, {
              "r" : "517",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeList\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "524",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "525",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "517",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "522",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "523",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ExpressionRef",
            "localId" : "514",
            "name" : "TestCodeList",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "515",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "516",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "528",
        "name" : "ConditionsByCodeEqualsCodeList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "528",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEqualsCodeList", ": " ]
            }, {
              "r" : "533",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeList\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "543",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "544",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "533",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "541",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "542",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "540",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "SingletonFrom",
              "localId" : "535",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "536",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "537",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "annotation" : [ ]
                }
              } ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "530",
                "name" : "TestCodeList",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "531",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "532",
                    "name" : "{urn:hl7-org:elm-types:r1}Code",
                    "annotation" : [ ]
                  }
                }
              }
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "547",
        "name" : "ConditionsByCodeEquivCodeList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "547",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCodeEquivCodeList", ":  " ]
            }, {
              "r" : "552",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"TestCodeList\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "562",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "563",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "552",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "560",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "561",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "559",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "SingletonFrom",
              "localId" : "554",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "555",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "556",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "annotation" : [ ]
                }
              } ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "549",
                "name" : "TestCodeList",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "550",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "551",
                    "name" : "{urn:hl7-org:elm-types:r1}Code",
                    "annotation" : [ ]
                  }
                }
              }
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "566",
        "name" : "ConditionsByBodySiteInVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "566",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByBodySiteInVS", ":     " ]
            }, {
              "r" : "568",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "bodySite" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Body locations\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "571",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "572",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "568",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "bodySite",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "569",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "570",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "567",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Body locations",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "575",
        "name" : "ConditionsByBodySiteEqualsVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "575",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByBodySiteEqualsVS", ": " ]
            }, {
              "r" : "577",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "bodySite" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Body locations\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "580",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "581",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "577",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "bodySite",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "578",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "579",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "576",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Body locations",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "584",
        "name" : "ConditionsByBodySiteEquivVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "584",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByBodySiteEquivVS", ":  " ]
            }, {
              "r" : "586",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "bodySite" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Body locations\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "589",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "590",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "586",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "bodySite",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "587",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "588",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "585",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Body locations",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "593",
        "name" : "ConditionsByBodySiteInCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "593",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByBodySiteInCode", ":     " ]
            }, {
              "r" : "595",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "bodySite" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Nose code\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "599",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "600",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "595",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "bodySite",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "597",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "598",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "596",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "594",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Nose code",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "603",
        "name" : "ConditionsByBodySiteEqualsCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "603",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByBodySiteEqualsCode", ": " ]
            }, {
              "r" : "605",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "bodySite" ]
                } ]
              }, {
                "value" : [ " ", "=", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Nose code\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "609",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "610",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "605",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "bodySite",
          "codeComparator" : "=",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "607",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "608",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "606",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "604",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Nose code",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "613",
        "name" : "ConditionsByBodySiteEquivCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "613",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByBodySiteEquivCode", ":  " ]
            }, {
              "r" : "615",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "bodySite" ]
                } ]
              }, {
                "value" : [ " ", "~", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Nose code\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "619",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "620",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "615",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "bodySite",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "617",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "618",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "616",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "614",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Nose code",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "623",
        "name" : "Encounters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "623",
            "s" : [ {
              "value" : [ "", "define ", "Encounters", ": " ]
            }, {
              "r" : "624",
              "s" : [ {
                "value" : [ "[", "Encounter", "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "627",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "628",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "624",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "625",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "626",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "631",
        "name" : "PharyngitisConditions",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "631",
            "s" : [ {
              "value" : [ "", "define ", "PharyngitisConditions", ": " ]
            }, {
              "r" : "635",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "included", ".", "\"Acute Pharyngitis\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "640",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "641",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "635",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "638",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "639",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "634",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Acute Pharyngitis",
            "libraryName" : "included",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "644",
        "name" : "AmbulatoryEncounters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "644",
            "s" : [ {
              "value" : [ "", "define ", "AmbulatoryEncounters", ": " ]
            }, {
              "r" : "647",
              "s" : [ {
                "value" : [ "[", "Encounter", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Ambulatory/ED Visit\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "652",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "653",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "647",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "650",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "651",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "646",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Ambulatory/ED Visit",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "656",
        "name" : "EncountersByCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "656",
            "s" : [ {
              "value" : [ "", "define ", "EncountersByCode", ": " ]
            }, {
              "r" : "659",
              "s" : [ {
                "value" : [ "[", "Encounter", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "code" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Ambulatory/ED Visit\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "664",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "665",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "659",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "662",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "663",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "658",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Ambulatory/ED Visit",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "668",
        "name" : "WrongValueSet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "668",
            "s" : [ {
              "value" : [ "", "define ", "WrongValueSet", ": " ]
            }, {
              "r" : "671",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Ambulatory/ED Visit\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "676",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "677",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "671",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "674",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "675",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "670",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Ambulatory/ED Visit",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "680",
        "name" : "WrongCodeProperty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "680",
            "s" : [ {
              "value" : [ "", "define ", "WrongCodeProperty", ": " ]
            }, {
              "r" : "683",
              "s" : [ {
                "value" : [ "[", "Encounter", ": " ]
              }, {
                "s" : [ {
                  "value" : [ "status" ]
                } ]
              }, {
                "value" : [ " ", "in", " " ]
              }, {
                "s" : [ {
                  "value" : [ "\"Ambulatory/ED Visit\"" ]
                } ]
              }, {
                "value" : [ "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "688",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "689",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "683",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "codeProperty" : "status",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "686",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "687",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "682",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Ambulatory/ED Visit",
            "preserve" : true,
            "annotation" : [ ]
          },
          "include" : [ ],
          "codeFilter" : [ ],
          "dateFilter" : [ ],
          "otherFilter" : [ ]
        }
      }, {
        "localId" : "692",
        "name" : "ConditionsByDate",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "692",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByDate", ": " ]
            }, {
              "r" : "739",
              "s" : [ {
                "s" : [ {
                  "r" : "693",
                  "s" : [ {
                    "r" : "694",
                    "s" : [ {
                      "r" : "694",
                      "s" : [ {
                        "value" : [ "[", "Condition", "]" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " ", "C" ]
                  } ]
                } ]
              }, {
                "value" : [ " " ]
              }, {
                "r" : "727",
                "s" : [ {
                  "value" : [ "where " ]
                }, {
                  "r" : "727",
                  "s" : [ {
                    "r" : "703",
                    "s" : [ {
                      "r" : "702",
                      "s" : [ {
                        "value" : [ "C" ]
                      } ]
                    }, {
                      "value" : [ "." ]
                    }, {
                      "r" : "703",
                      "s" : [ {
                        "value" : [ "period" ]
                      } ]
                    } ]
                  }, {
                    "r" : "727",
                    "value" : [ " ", "during", " " ]
                  }, {
                    "r" : "724",
                    "s" : [ {
                      "r" : "708",
                      "value" : [ "Interval[", "@2013-03-01T00:00:00.0", ", ", "@2013-03-31T00:00:00.0", ")" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "742",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "743",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "739",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "740",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "741",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "693",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "699",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "700",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "694",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "697",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "698",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "dateRange" : {
                "type" : "Interval",
                "localId" : "724",
                "lowClosed" : true,
                "highClosed" : false,
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "725",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "726",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                },
                "low" : {
                  "type" : "DateTime",
                  "localId" : "708",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "year" : {
                    "type" : "Literal",
                    "localId" : "709",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2013",
                    "annotation" : [ ]
                  },
                  "month" : {
                    "type" : "Literal",
                    "localId" : "710",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  },
                  "day" : {
                    "type" : "Literal",
                    "localId" : "711",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  },
                  "hour" : {
                    "type" : "Literal",
                    "localId" : "712",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "minute" : {
                    "type" : "Literal",
                    "localId" : "713",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "second" : {
                    "type" : "Literal",
                    "localId" : "714",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "millisecond" : {
                    "type" : "Literal",
                    "localId" : "715",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  }
                },
                "high" : {
                  "type" : "DateTime",
                  "localId" : "716",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "year" : {
                    "type" : "Literal",
                    "localId" : "717",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2013",
                    "annotation" : [ ]
                  },
                  "month" : {
                    "type" : "Literal",
                    "localId" : "718",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  },
                  "day" : {
                    "type" : "Literal",
                    "localId" : "719",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "31",
                    "annotation" : [ ]
                  },
                  "hour" : {
                    "type" : "Literal",
                    "localId" : "720",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "minute" : {
                    "type" : "Literal",
                    "localId" : "721",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "second" : {
                    "type" : "Literal",
                    "localId" : "722",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "millisecond" : {
                    "type" : "Literal",
                    "localId" : "723",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  }
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ],
          "let" : [ ],
          "relationship" : [ ]
        }
      } ]
    }
  }
}

/* Included
library Included version '1'
using Simple version '1.0.0'

codesystem "SNOMED": '2.16.840.1.113883.6.96'
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.102.12.1011'
*/

module.exports['Included'] = {
  "library" : {
    "localId" : "0",
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "210",
        "s" : [ {
          "value" : [ "", "library Included version '1'" ]
        } ]
      }
    } ],
    "identifier" : {
      "id" : "Included",
      "version" : "1"
    },
    "schemaIdentifier" : {
      "id" : "urn:hl7-org:elm",
      "version" : "r1"
    },
    "usings" : {
      "def" : [ {
        "localId" : "1",
        "localIdentifier" : "System",
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
            }, {
              "s" : [ {
                "value" : [ "Simple" ]
              } ]
            }, {
              "value" : [ " version '1.0.0'" ]
            } ]
          }
        } ]
      } ]
    },
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "SNOMED",
        "id" : "2.16.840.1.113883.6.96",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SNOMED\"", ": ", "'2.16.840.1.113883.6.96'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Acute Pharyngitis",
        "id" : "2.16.840.1.113883.3.464.1003.102.12.1011",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Acute Pharyngitis\"", ": ", "'2.16.840.1.113883.3.464.1003.102.12.1011'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    }
  }
}

