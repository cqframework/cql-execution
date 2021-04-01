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
*/

module.exports['Retrieve'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "27",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "includes" : {
         "def" : [ {
            "localId" : "2",
            "localIdentifier" : "included",
            "path" : "Included",
            "version" : "1",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
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
            "localId" : "3",
            "name" : "SNOMED",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "4",
            "name" : "Ambulatory/ED Visit",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Ambulatory/ED Visit\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
                  } ]
               }
            } ]
         }, {
            "localId" : "5",
            "name" : "Annual Wellness Visit",
            "id" : "2.16.840.1.113883.3.526.3.1240",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Annual Wellness Visit\"",": ","'2.16.840.1.113883.3.526.3.1240'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "7",
            "name" : "Viral pharyngitis code",
            "id" : "1532007",
            "display" : "Viral pharyngitis (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","code ","\"Viral pharyngitis code\"",": ","'1532007'"," from " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "6",
               "name" : "SNOMED"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "9",
            "name" : "Viral pharyngitis",
            "display" : "Viral pharyngitis (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","concept ","\"Viral pharyngitis\"",": { " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "\"Viral pharyngitis code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "8",
               "name" : "Viral pharyngitis code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "11",
            "name" : "Conditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","Conditions",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "[","Condition","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "Retrieve"
            }
         }, {
            "localId" : "13",
            "name" : "Encounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","Encounters",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "[","Encounter","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Retrieve"
            }
         }, {
            "localId" : "15",
            "name" : "PharyngitisConditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","PharyngitisConditions",": " ]
                  }, {
                     "r" : "14",
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
               "localId" : "14",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Acute Pharyngitis",
                  "libraryName" : "included",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "17",
            "name" : "AmbulatoryEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncounters",": " ]
                  }, {
                     "r" : "16",
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
               "localId" : "16",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Ambulatory/ED Visit",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "19",
            "name" : "EncountersByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","EncountersByCode",": " ]
                  }, {
                     "r" : "18",
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
               "localId" : "18",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Ambulatory/ED Visit",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "21",
            "name" : "WrongValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","WrongValueSet",": " ]
                  }, {
                     "r" : "20",
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
               "localId" : "20",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Ambulatory/ED Visit",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "23",
            "name" : "WrongCodeProperty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","WrongCodeProperty",": " ]
                  }, {
                     "r" : "22",
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
               "localId" : "22",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "status",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "codes" : {
                  "name" : "Ambulatory/ED Visit",
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "25",
            "name" : "ConditionsByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByCode",": " ]
                  }, {
                     "r" : "24",
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
               "localId" : "24",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "codes" : {
                  "type" : "ToList",
                  "operand" : {
                     "name" : "Viral pharyngitis code",
                     "type" : "CodeRef"
                  }
               }
            }
         }, {
            "localId" : "27",
            "name" : "ConditionsByConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByConcept",": " ]
                  }, {
                     "r" : "26",
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
               "localId" : "26",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "codes" : {
                  "path" : "codes",
                  "type" : "Property",
                  "source" : {
                     "name" : "Viral pharyngitis",
                     "type" : "ConceptRef"
                  }
               }
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "3",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "SNOMED",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "3",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.102.12.1011",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Acute Pharyngitis\"",": ","'2.16.840.1.113883.3.464.1003.102.12.1011'" ]
                  } ]
               }
            } ]
         } ]
      }
   }
}

