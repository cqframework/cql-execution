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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "336",
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
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SNOMED\"", ": ", "'2.16.840.1.113883.6.96'" ]
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
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "224",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "222",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "223",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "221",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "Conditions", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "value" : [ "[", "Condition", "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "231",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "228",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "229",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
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
        "localId" : "235",
        "name" : "Encounters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "235",
            "s" : [ {
              "value" : [ "", "define ", "Encounters", ": " ]
            }, {
              "r" : "236",
              "s" : [ {
                "value" : [ "[", "Encounter", "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "239",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "236",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "237",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
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
        "localId" : "243",
        "name" : "PharyngitisConditions",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "PharyngitisConditions", ": " ]
            }, {
              "r" : "247",
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
          "localId" : "252",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "247",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "250",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "251",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "246",
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
        "localId" : "256",
        "name" : "AmbulatoryEncounters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "AmbulatoryEncounters", ": " ]
            }, {
              "r" : "259",
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
          "localId" : "264",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "259",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "262",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "258",
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
        "localId" : "268",
        "name" : "EncountersByCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "EncountersByCode", ": " ]
            }, {
              "r" : "271",
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
          "localId" : "276",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "277",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "271",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "274",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "275",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "270",
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
        "localId" : "280",
        "name" : "WrongValueSet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "280",
            "s" : [ {
              "value" : [ "", "define ", "WrongValueSet", ": " ]
            }, {
              "r" : "283",
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
          "localId" : "288",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "283",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "286",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "282",
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
        "localId" : "292",
        "name" : "WrongCodeProperty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "292",
            "s" : [ {
              "value" : [ "", "define ", "WrongCodeProperty", ": " ]
            }, {
              "r" : "295",
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
          "localId" : "300",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "301",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "295",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "codeProperty" : "status",
          "codeComparator" : "in",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "298",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "299",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ValueSetRef",
            "localId" : "294",
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
        "localId" : "304",
        "name" : "ConditionsByCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "304",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByCode", ": " ]
            }, {
              "r" : "307",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
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
          "type" : "ListTypeSpecifier",
          "localId" : "314",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "307",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "313",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "ToList",
            "localId" : "311",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "CodeRef",
              "localId" : "306",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Viral pharyngitis code",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByConcept", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "value" : [ "[", "Condition", ": " ]
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
          "type" : "ListTypeSpecifier",
          "localId" : "332",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "333",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Retrieve",
          "localId" : "321",
          "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "codeProperty" : "code",
          "codeComparator" : "~",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "330",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "331",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "codes" : {
            "type" : "Property",
            "localId" : "329",
            "path" : "codes",
            "annotation" : [ ],
            "source" : {
              "type" : "ConceptRef",
              "localId" : "320",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "Viral pharyngitis",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "336",
            "s" : [ {
              "value" : [ "", "define ", "ConditionsByDate", ": " ]
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
                    "value" : [ " ", "during", " " ]
                  }, {
                    "r" : "368",
                    "s" : [ {
                      "r" : "352",
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
          "localId" : "386",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "387",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Query",
          "localId" : "383",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "384",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "385",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ]
            }
          },
          "source" : [ {
            "localId" : "337",
            "alias" : "C",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "343",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "344",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            },
            "expression" : {
              "type" : "Retrieve",
              "localId" : "338",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "dateProperty" : "period",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "341",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "342",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "dateRange" : {
                "type" : "Interval",
                "localId" : "368",
                "lowClosed" : true,
                "highClosed" : false,
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "IntervalTypeSpecifier",
                  "localId" : "369",
                  "annotation" : [ ],
                  "pointType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "370",
                    "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                    "annotation" : [ ]
                  }
                },
                "low" : {
                  "type" : "DateTime",
                  "localId" : "352",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "year" : {
                    "type" : "Literal",
                    "localId" : "353",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2013",
                    "annotation" : [ ]
                  },
                  "month" : {
                    "type" : "Literal",
                    "localId" : "354",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  },
                  "day" : {
                    "type" : "Literal",
                    "localId" : "355",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "1",
                    "annotation" : [ ]
                  },
                  "hour" : {
                    "type" : "Literal",
                    "localId" : "356",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "minute" : {
                    "type" : "Literal",
                    "localId" : "357",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "second" : {
                    "type" : "Literal",
                    "localId" : "358",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "millisecond" : {
                    "type" : "Literal",
                    "localId" : "359",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  }
                },
                "high" : {
                  "type" : "DateTime",
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "year" : {
                    "type" : "Literal",
                    "localId" : "361",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2013",
                    "annotation" : [ ]
                  },
                  "month" : {
                    "type" : "Literal",
                    "localId" : "362",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "3",
                    "annotation" : [ ]
                  },
                  "day" : {
                    "type" : "Literal",
                    "localId" : "363",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "31",
                    "annotation" : [ ]
                  },
                  "hour" : {
                    "type" : "Literal",
                    "localId" : "364",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "minute" : {
                    "type" : "Literal",
                    "localId" : "365",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "second" : {
                    "type" : "Literal",
                    "localId" : "366",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "0",
                    "annotation" : [ ]
                  },
                  "millisecond" : {
                    "type" : "Literal",
                    "localId" : "367",
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

