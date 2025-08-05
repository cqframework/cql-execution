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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "336",
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
            "localId" : "208",
            "localIdentifier" : "included",
            "path" : "Included",
            "version" : "1",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
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
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMED",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'2.16.840.1.113883.6.96'" ]
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
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Ambulatory/ED Visit\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
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
               "s" : {
                  "r" : "214",
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
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Viral pharyngitis code",
            "id" : "1532007",
            "display" : "Viral pharyngitis (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","code ","\"Viral pharyngitis code\"",": ","'1532007'"," from " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
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
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","concept ","\"Viral pharyngitis\"",": { " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "\"Viral pharyngitis code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Viral pharyngitis code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "224",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "222",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "223",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "227",
            "name" : "Conditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Conditions",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "[","Condition","]" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "231",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "232",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "228",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "229",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "230",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "235",
            "name" : "Encounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Encounters",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "[","Encounter","]" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "239",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "240",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "236",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "238",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "243",
            "name" : "PharyngitisConditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","PharyngitisConditions",": " ]
                  }, {
                     "r" : "247",
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
            "resultTypeSpecifier" : {
               "localId" : "252",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "253",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "247",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "250",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "251",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Acute Pharyngitis",
                  "libraryName" : "included",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               },
               "include" : [ ],
               "codeFilter" : [ ],
               "dateFilter" : [ ],
               "otherFilter" : [ ]
            }
         }, {
            "localId" : "256",
            "name" : "AmbulatoryEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncounters",": " ]
                  }, {
                     "r" : "259",
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
            "resultTypeSpecifier" : {
               "localId" : "264",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "265",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "259",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "262",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "263",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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
            "localId" : "268",
            "name" : "EncountersByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","EncountersByCode",": " ]
                  }, {
                     "r" : "271",
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
            "resultTypeSpecifier" : {
               "localId" : "276",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "277",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "271",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "274",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "275",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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
            "localId" : "280",
            "name" : "WrongValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","WrongValueSet",": " ]
                  }, {
                     "r" : "283",
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
            "resultTypeSpecifier" : {
               "localId" : "288",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "289",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "283",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "286",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "287",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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
            "localId" : "292",
            "name" : "WrongCodeProperty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "292",
                  "s" : [ {
                     "value" : [ "","define ","WrongCodeProperty",": " ]
                  }, {
                     "r" : "295",
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
            "resultTypeSpecifier" : {
               "localId" : "300",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "301",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "295",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "status",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "298",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "299",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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
            "localId" : "304",
            "name" : "ConditionsByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByCode",": " ]
                  }, {
                     "r" : "307",
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
            "resultTypeSpecifier" : {
               "localId" : "314",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "315",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "307",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "312",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "313",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "311",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
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
            "localId" : "318",
            "name" : "ConditionsByConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByConcept",": " ]
                  }, {
                     "r" : "321",
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
            "resultTypeSpecifier" : {
               "localId" : "332",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "333",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "321",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "330",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "331",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "329",
                  "path" : "codes",
                  "type" : "Property",
                  "source" : {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
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
            "localId" : "336",
            "name" : "ConditionsByDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByDate",": " ]
                  }, {
                     "r" : "383",
                     "s" : [ {
                        "s" : [ {
                           "r" : "337",
                           "s" : [ {
                              "r" : "338",
                              "s" : [ {
                                 "r" : "338",
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
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "371",
                           "s" : [ {
                              "r" : "347",
                              "s" : [ {
                                 "r" : "346",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "347",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "371",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "368",
                              "s" : [ {
                                 "r" : "352",
                                 "value" : [ "Interval[","@2013-03-01T00:00:00.0",", ","@2013-03-31T00:00:00.0",")" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "386",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "387",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "383",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "384",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "385",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "337",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "343",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "344",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "338",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "341",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "342",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "368",
                        "lowClosed" : true,
                        "highClosed" : false,
                        "type" : "Interval",
                        "resultTypeSpecifier" : {
                           "localId" : "369",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "370",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "low" : {
                           "localId" : "352",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "DateTime",
                           "signature" : [ ],
                           "year" : {
                              "localId" : "353",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2013",
                              "type" : "Literal"
                           },
                           "month" : {
                              "localId" : "354",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           },
                           "day" : {
                              "localId" : "355",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           },
                           "hour" : {
                              "localId" : "356",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "minute" : {
                              "localId" : "357",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "second" : {
                              "localId" : "358",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "millisecond" : {
                              "localId" : "359",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           }
                        },
                        "high" : {
                           "localId" : "360",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "DateTime",
                           "signature" : [ ],
                           "year" : {
                              "localId" : "361",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2013",
                              "type" : "Literal"
                           },
                           "month" : {
                              "localId" : "362",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           },
                           "day" : {
                              "localId" : "363",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "31",
                              "type" : "Literal"
                           },
                           "hour" : {
                              "localId" : "364",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "minute" : {
                              "localId" : "365",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "second" : {
                              "localId" : "366",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "millisecond" : {
                              "localId" : "367",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "210",
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
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
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
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.102.12.1011",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
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

