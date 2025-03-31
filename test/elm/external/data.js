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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "320",
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
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
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
            "resultTypeSpecifier" : {
               "localId" : "224",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "225",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "221",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "223",
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
            "localId" : "227",
            "name" : "Encounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Encounters",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "[","Encounter","]" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "231",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "232",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "228",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "229",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "230",
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
            "localId" : "234",
            "name" : "PharyngitisConditions",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","PharyngitisConditions",": " ]
                  }, {
                     "r" : "238",
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
               "localId" : "243",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "244",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "238",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "241",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "242",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "237",
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
            "localId" : "246",
            "name" : "AmbulatoryEncounters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","AmbulatoryEncounters",": " ]
                  }, {
                     "r" : "249",
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
               "localId" : "254",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "255",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "249",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "252",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "253",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "248",
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
            "localId" : "257",
            "name" : "EncountersByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","EncountersByCode",": " ]
                  }, {
                     "r" : "260",
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
               "localId" : "265",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "266",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "260",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "263",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "264",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "259",
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
            "name" : "WrongValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","WrongValueSet",": " ]
                  }, {
                     "r" : "271",
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
               "localId" : "276",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "277",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "271",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "274",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "275",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
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
            "localId" : "279",
            "name" : "WrongCodeProperty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","WrongCodeProperty",": " ]
                  }, {
                     "r" : "282",
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
               "localId" : "287",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "288",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "282",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "codeProperty" : "status",
               "codeComparator" : "in",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "285",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "286",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "281",
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
            "localId" : "290",
            "name" : "ConditionsByCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByCode",": " ]
                  }, {
                     "r" : "293",
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
               "localId" : "300",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "301",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "293",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "298",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "299",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "297",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "292",
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
            "localId" : "303",
            "name" : "ConditionsByConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByConcept",": " ]
                  }, {
                     "r" : "306",
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
               "localId" : "317",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "318",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "306",
               "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "codeProperty" : "code",
               "codeComparator" : "~",
               "type" : "Retrieve",
               "resultTypeSpecifier" : {
                  "localId" : "315",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "316",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "codes" : {
                  "localId" : "314",
                  "path" : "codes",
                  "type" : "Property",
                  "source" : {
                     "localId" : "305",
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
            "localId" : "320",
            "name" : "ConditionsByDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "320",
                  "s" : [ {
                     "value" : [ "","define ","ConditionsByDate",": " ]
                  }, {
                     "r" : "366",
                     "s" : [ {
                        "s" : [ {
                           "r" : "321",
                           "s" : [ {
                              "r" : "322",
                              "s" : [ {
                                 "r" : "322",
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
                        "r" : "354",
                        "s" : [ {
                           "value" : [ "where " ]
                        }, {
                           "r" : "354",
                           "s" : [ {
                              "r" : "330",
                              "s" : [ {
                                 "r" : "329",
                                 "s" : [ {
                                    "value" : [ "C" ]
                                 } ]
                              }, {
                                 "value" : [ "." ]
                              }, {
                                 "r" : "330",
                                 "s" : [ {
                                    "value" : [ "period" ]
                                 } ]
                              } ]
                           }, {
                              "r" : "354",
                              "value" : [ " ","during"," " ]
                           }, {
                              "r" : "351",
                              "s" : [ {
                                 "r" : "335",
                                 "value" : [ "Interval[","@2013-03-01T00:00:00.0",", ","@2013-03-31T00:00:00.0",")" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "369",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "370",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "366",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "367",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "368",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "source" : [ {
                  "localId" : "321",
                  "alias" : "C",
                  "resultTypeSpecifier" : {
                     "localId" : "327",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "328",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "322",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "dateProperty" : "period",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "325",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "326",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "dateRange" : {
                        "localId" : "351",
                        "lowClosed" : true,
                        "highClosed" : false,
                        "type" : "Interval",
                        "resultTypeSpecifier" : {
                           "localId" : "352",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "353",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "low" : {
                           "localId" : "335",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "DateTime",
                           "signature" : [ ],
                           "year" : {
                              "localId" : "336",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2013",
                              "type" : "Literal"
                           },
                           "month" : {
                              "localId" : "337",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           },
                           "day" : {
                              "localId" : "338",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           },
                           "hour" : {
                              "localId" : "339",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "minute" : {
                              "localId" : "340",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "second" : {
                              "localId" : "341",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "millisecond" : {
                              "localId" : "342",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           }
                        },
                        "high" : {
                           "localId" : "343",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                           "type" : "DateTime",
                           "signature" : [ ],
                           "year" : {
                              "localId" : "344",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2013",
                              "type" : "Literal"
                           },
                           "month" : {
                              "localId" : "345",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "3",
                              "type" : "Literal"
                           },
                           "day" : {
                              "localId" : "346",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "31",
                              "type" : "Literal"
                           },
                           "hour" : {
                              "localId" : "347",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "minute" : {
                              "localId" : "348",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "second" : {
                              "localId" : "349",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "0",
                              "type" : "Literal"
                           },
                           "millisecond" : {
                              "localId" : "350",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
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

