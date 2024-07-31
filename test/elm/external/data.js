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

codesystem "SNOMED": '2.16.840.1.113883.6.96'
valueset "Ambulatory/ED Visit": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Annual Wellness Visit": '2.16.840.1.113883.3.526.3.1240'
code "Viral pharyngitis code": '1532007' from "SNOMED" display 'Viral pharyngitis (disorder)'
concept "Viral pharyngitis": { "Viral pharyngitis code" } display 'Viral pharyngitis (disorder)'
context Patient
define Conditions: [Condition]
define Encounters: [Encounter]
define PharyngitisConditions: [Condition: included."Acute Pharyngitis"]
define AmbulatoryEncounters: [Encounter: "Ambulatory/ED Visit"]
define EncountersByCode: [Encounter: code in "Ambulatory/ED Visit"]
define WrongValueSet: [Condition: "Ambulatory/ED Visit"]
define WrongCodeProperty: [Encounter: status in "Ambulatory/ED Visit"]
define ConditionsByCode: [Condition: "Viral pharyngitis code"]
define ConditionsByConcept: [Condition: "Viral pharyngitis"]
define ConditionsByDate: [Condition] C where C.period during Interval[@2013-03-01T00:00:00.0, @2013-03-31T00:00:00.0)
*/

module.exports['Retrieve'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "274",
            "s" : [ {
               "value" : [ "","library TestSnippet version '1'" ]
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
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "206",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "206",
                  "s" : [ {
                     "value" : [ "","using " ]
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
            "localId" : "207",
            "localIdentifier" : "included",
            "path" : "Included",
            "version" : "1",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Included" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1'"," called ","included" ]
                  } ]
               }
            } ]
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "name" : "SNOMED",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Ambulatory/ED Visit",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Ambulatory/ED Visit\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "210",
            "name" : "Annual Wellness Visit",
            "id" : "2.16.840.1.113883.3.526.3.1240",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Annual Wellness Visit\"",": ","'2.16.840.1.113883.3.526.3.1240'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Viral pharyngitis code",
            "id" : "1532007",
            "display" : "Viral pharyngitis (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","code ","\"Viral pharyngitis code\"",": ","'1532007'"," from " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "212",
               "name" : "SNOMED"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Viral pharyngitis",
            "display" : "Viral pharyngitis (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","concept ","\"Viral pharyngitis\"",": { " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "\"Viral pharyngitis code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "214",
               "name" : "Viral pharyngitis code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "218",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "216",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "217",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "215",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "220",
            "name" : "Conditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Conditions",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "[","Condition","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "Retrieve",
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "223",
            "name" : "Encounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Encounters",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "[","Encounter","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Retrieve",
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "226",
            "name" : "PharyngitisConditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","PharyngitisConditions",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "[","Condition",": " ]
                     }, {
                        "s" : [ {
                           "value" : [ "included",".","\"Acute Pharyngitis\"" ]
                        } ]
                     }, {
                        "value" : [ "]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "229",
                  "name" : "Acute Pharyngitis",
                  "libraryName" : "included",
                  "type" : "ValueSetRef"
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "233",
            "name" : "AmbulatoryEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncounters",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "[","Encounter",": " ]
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
            "expression" : {
               "localId" : "236",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "235",
                  "name" : "Ambulatory/ED Visit",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "239",
            "name" : "EncountersByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","EncountersByCode",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "[","Encounter",": " ]
                     }, {
                        "s" : [ {
                           "value" : [ "code" ]
                        } ]
                     }, {
                        "value" : [ " ","in"," " ]
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
            "expression" : {
               "localId" : "242",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "241",
                  "name" : "Ambulatory/ED Visit",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "245",
            "name" : "WrongValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","WrongValueSet",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "[","Condition",": " ]
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
            "expression" : {
               "localId" : "248",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "247",
                  "name" : "Ambulatory/ED Visit",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "251",
            "name" : "WrongCodeProperty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","WrongCodeProperty",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "value" : [ "[","Encounter",": " ]
                     }, {
                        "s" : [ {
                           "value" : [ "status" ]
                        } ]
                     }, {
                        "value" : [ " ","in"," " ]
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
            "expression" : {
               "localId" : "254",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "status",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "253",
                  "name" : "Ambulatory/ED Visit",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "257",
            "name" : "ConditionsByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByCode",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "[","Condition",": " ]
                     }, {
                        "s" : [ {
                           "value" : [ "\"Viral pharyngitis code\"" ]
                        } ]
                     }, {
                        "value" : [ "]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "262",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "259",
                     "name" : "Viral pharyngitis code",
                     "type" : "CodeRef"
                  }
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "264",
            "name" : "ConditionsByConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByConcept",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "[","Condition",": " ]
                     }, {
                        "s" : [ {
                           "value" : [ "\"Viral pharyngitis\"" ]
                        } ]
                     }, {
                        "value" : [ "]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "codes" : {
                  "localId" : "272",
                  "path" : "codes",
                  "type" : "Property",
                  "source" : {
                     "localId" : "266",
                     "name" : "Viral pharyngitis",
                     "type" : "ConceptRef"
                  }
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "274",
            "name" : "ConditionsByDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByDate",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "s" : [ {
                           "r" : "275",
                           "s" : [ {
                              "r" : "276",
                              "s" : [ {
                                 "r" : "276",
                                 "s" : [ {
                                    "value" : [ "[","Condition","]" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " ","C" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "r" : "278",
                              "s" : [ {
                                 "r" : "277",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "278",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "296",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "295",
                              "s" : [ {
                                 "r" : "279",
                                 "value" : [ "Interval[","@2013-03-01T00:00:00.0",", ","@2013-03-31T00:00:00.0",")" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "type" : "Query",
               "source" : [ {
                  "localId" : "275",
                  "alias" : "C",
                  "expression" : {
                     "localId" : "276",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "dateRange" : {
                        "localId" : "295",
                        "lowClosed" : true,
                        "highClosed" : false,
                        "type" : "Interval",
                        "low" : {
                           "localId" : "279",
                           "type" : "DateTime",
                           "signature" : [ ],
                           "year" : {
                              "localId" : "280",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2013",
                              "type" : "Literal"
                           },
                           "month" : {
                              "localId" : "281",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           },
                           "day" : {
                              "localId" : "282",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           },
                           "hour" : {
                              "localId" : "283",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "minute" : {
                              "localId" : "284",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "second" : {
                              "localId" : "285",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "millisecond" : {
                              "localId" : "286",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           }
                        },
                        "high" : {
                           "localId" : "287",
                           "type" : "DateTime",
                           "signature" : [ ],
                           "year" : {
                              "localId" : "288",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2013",
                              "type" : "Literal"
                           },
                           "month" : {
                              "localId" : "289",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           },
                           "day" : {
                              "localId" : "290",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "31",
                              "type" : "Literal"
                           },
                           "hour" : {
                              "localId" : "291",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "minute" : {
                              "localId" : "292",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "second" : {
                              "localId" : "293",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "millisecond" : {
                              "localId" : "294",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "208",
            "s" : [ {
               "value" : [ "","library Included version '1'" ]
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
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "206",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "206",
                  "s" : [ {
                     "value" : [ "","using " ]
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
            "localId" : "207",
            "name" : "SNOMED",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.102.12.1011",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Acute Pharyngitis\"",": ","'2.16.840.1.113883.3.464.1003.102.12.1011'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      }
   }
}

