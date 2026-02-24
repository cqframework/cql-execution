/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* ValueSetDef
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "Unknown One Arg": '1.2.3.4.5.6.7.8.9'
valueset "Unknown Two Arg": '1.2.3.4.5.6.7.8.9' version '1'
codesystem "CS4VS": 'http://loinc.org' version '2'
valueset "Unknown Three Arg": '1.2.3.4.5.6.7.8.9' version '1' codesystems { "CS4VS" }
context Patient
define ResolveValueSet: "Unknown Three Arg"
*/

module.exports['ValueSetDef'] = {
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
        "r" : "225",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "CS4VS",
        "id" : "http://loinc.org",
        "version" : "2",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"CS4VS\"", ": ", "'http://loinc.org'", " version ", "'2'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Known",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Known\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Unknown One Arg",
        "id" : "1.2.3.4.5.6.7.8.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Unknown One Arg\"", ": ", "'1.2.3.4.5.6.7.8.9'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Unknown Two Arg",
        "id" : "1.2.3.4.5.6.7.8.9",
        "version" : "1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Unknown Two Arg\"", ": ", "'1.2.3.4.5.6.7.8.9'", " version ", "'1'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Unknown Three Arg",
        "id" : "1.2.3.4.5.6.7.8.9",
        "version" : "1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Unknown Three Arg\"", ": ", "'1.2.3.4.5.6.7.8.9'", " version ", "'1'", " codesystems { " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "\"CS4VS\"" ]
              } ]
            }, {
              "value" : [ " }" ]
            } ]
          }
        } ],
        "codeSystem" : [ {
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "CS4VS",
          "annotation" : [ ]
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "222",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "220",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "221",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "219",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "ResolveValueSet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "define ", "ResolveValueSet", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "\"Unknown Three Arg\"" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ValueSetRef",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
          "name" : "Unknown Three Arg",
          "preserve" : true,
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* ValueSetRef
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.101.12.1001'
context Patient
define Foo: "Acute Pharyngitis"
*/

module.exports['ValueSetRef'] = {
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
        "r" : "216",
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
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Acute Pharyngitis",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1001",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Acute Pharyngitis\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1001'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "212",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "210",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "\"Acute Pharyngitis\"" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ValueSetRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
          "name" : "Acute Pharyngitis",
          "preserve" : true,
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* AnyInValueSet
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Major Depressive Disorder Active": '2.16.840.1.113883.3.526.3.1491'
valueset "Male": '2.16.840.1.113883.3.560.100.1'
valueset "UnknownAny": '1.2.3.4.5.6.7.8.9'
codesystem "SNOMED": 'http://snomed.info/sct'
code "ChronicRecurrentDepression": '2618002' from "SNOMED" display 'Chronic recurrent major depressive disorder (disorder)'
code "ModerateMajorDepression": '832007' from "SNOMED" display 'Moderate major depression (disorder)'
concept "Depression Concept": { "ChronicRecurrentDepression", "ModerateMajorDepression" } display 'Depression Concept'
context Patient
define AnyInListOfConcepts: { "Depression Concept" } in "Major Depressive Disorder Active"
define AnyInListOfCodes: { "ChronicRecurrentDepression", "ModerateMajorDepression" } in "Major Depressive Disorder Active"
define AnyInListOfStrings: { '2618002', '12345' } in "Major Depressive Disorder Active"
define AnyInNullList: null as List<Code> in "Major Depressive Disorder Active"
define AnyInNullListNullVs: null as List<Code> in null as ValueSet
define AnyInListOfCodesWithNull: { Code { code: 'M' }, (null as Code), "ChronicRecurrentDepression" } in "Major Depressive Disorder Active"
define AnyInUnknown: { "Depression Concept" } in "UnknownAny"
// expression data
define ListOfCodes: { Code { code: 'M' } , "ChronicRecurrentDepression" }
define WrongListOfCodes: { Code { code: 'M' }, Code { code: 'F', system: '3.16.840.1.113883.18.2' } }
define AnyInListOfCodesExpressionRef: ListOfCodes in "Major Depressive Disorder Active"
define AnyInWrongListOfCodes: WrongListOfCodes in "Major Depressive Disorder Active"
// function data
define function ListInVS(vs ValueSet): { '2618002', '12345' } in vs
define ListInPassedVS: ListInVS("Major Depressive Disorder Active")
define ListInWrongVS: ListInVS("Male")
define ListInNullVS: ListInVS(null as ValueSet)
*/

module.exports['AnyInValueSet'] = {
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
        "r" : "410",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "SNOMED",
        "id" : "http://snomed.info/sct",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SNOMED\"", ": ", "'http://snomed.info/sct'" ]
            } ]
          }
        } ]
      } ]
    },
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Major Depressive Disorder Active",
        "id" : "2.16.840.1.113883.3.526.3.1491",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Major Depressive Disorder Active\"", ": ", "'2.16.840.1.113883.3.526.3.1491'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Male",
        "id" : "2.16.840.1.113883.3.560.100.1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Male\"", ": ", "'2.16.840.1.113883.3.560.100.1'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "UnknownAny",
        "id" : "1.2.3.4.5.6.7.8.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "valueset ", "\"UnknownAny\"", ": ", "'1.2.3.4.5.6.7.8.9'" ]
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
        "name" : "ChronicRecurrentDepression",
        "id" : "2618002",
        "display" : "Chronic recurrent major depressive disorder (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "code ", "\"ChronicRecurrentDepression\"", ": ", "'2618002'", " from " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "\"SNOMED\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Chronic recurrent major depressive disorder (disorder)'" ]
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
        "localId" : "219",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "ModerateMajorDepression",
        "id" : "832007",
        "display" : "Moderate major depression (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "code ", "\"ModerateMajorDepression\"", ": ", "'832007'", " from " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "\"SNOMED\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Moderate major depression (disorder)'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMED",
          "annotation" : [ ]
        }
      } ]
    },
    "concepts" : {
      "def" : [ {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Depression Concept",
        "display" : "Depression Concept",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "concept ", "\"Depression Concept\"", ": { " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "\"ChronicRecurrentDepression\"" ]
              } ]
            }, {
              "value" : [ ", " ]
            }, {
              "r" : "224",
              "s" : [ {
                "value" : [ "\"ModerateMajorDepression\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Depression Concept'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "ChronicRecurrentDepression",
          "annotation" : [ ]
        }, {
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "ModerateMajorDepression",
          "annotation" : [ ]
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "228",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "226",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "227",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "225",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInListOfConcepts",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "AnyInListOfConcepts", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "232",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "233",
                  "s" : [ {
                    "value" : [ "\"Depression Concept\"" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "236",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "238",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "239",
              "name" : "{urn:hl7-org:elm-types:r1}Concept",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "List",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "234",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "235",
                "name" : "{urn:hl7-org:elm-types:r1}Concept",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ConceptRef",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "Depression Concept",
              "annotation" : [ ]
            } ]
          },
          "valueset" : {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInListOfCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "AnyInListOfCodes", ": " ]
            }, {
              "r" : "249",
              "s" : [ {
                "r" : "243",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "244",
                  "s" : [ {
                    "value" : [ "\"ChronicRecurrentDepression\"" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "245",
                  "s" : [ {
                    "value" : [ "\"ModerateMajorDepression\"" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "248",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "250",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "251",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "List",
            "localId" : "243",
            "annotation" : [ ],
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
            "element" : [ {
              "type" : "CodeRef",
              "localId" : "244",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "ChronicRecurrentDepression",
              "annotation" : [ ]
            }, {
              "type" : "CodeRef",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "ModerateMajorDepression",
              "annotation" : [ ]
            } ]
          },
          "valueset" : {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInListOfStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "AnyInListOfStrings", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "r" : "255",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "'2618002'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "258",
                  "s" : [ {
                    "value" : [ "'12345'" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "262",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "264",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "265",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "List",
            "localId" : "255",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "260",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "261",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "2618002",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "12345",
              "annotation" : [ ]
            } ]
          },
          "valueset" : {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInNullList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "AnyInNullList", ": " ]
            }, {
              "r" : "278",
              "s" : [ {
                "r" : "269",
                "s" : [ {
                  "r" : "270",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "271",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "272",
                    "s" : [ {
                      "value" : [ "Code" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "277",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "278",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "279",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "280",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "As",
            "localId" : "269",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "275",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "276",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "273",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }
          },
          "valueset" : {
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "283",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInNullListNullVs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "283",
            "s" : [ {
              "value" : [ "", "define ", "AnyInNullListNullVs", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "r" : "284",
                "s" : [ {
                  "r" : "285",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "286",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "287",
                    "s" : [ {
                      "value" : [ "Code" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "292",
                "s" : [ {
                  "r" : "293",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "294",
                  "s" : [ {
                    "value" : [ "ValueSet" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "296",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "297",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "codes" : {
            "type" : "As",
            "localId" : "284",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "290",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "291",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "286",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "288",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "287",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }
          },
          "valuesetExpression" : {
            "type" : "As",
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "293",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "301",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInListOfCodesWithNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "301",
            "s" : [ {
              "value" : [ "", "define ", "AnyInListOfCodesWithNull", ": " ]
            }, {
              "r" : "314",
              "s" : [ {
                "r" : "302",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "303",
                  "s" : [ {
                    "value" : [ "Code", " { " ]
                  }, {
                    "s" : [ {
                      "value" : [ "code", ": " ]
                    }, {
                      "r" : "305",
                      "s" : [ {
                        "value" : [ "'M'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "307",
                  "s" : [ {
                    "value" : [ "(" ]
                  }, {
                    "r" : "307",
                    "s" : [ {
                      "r" : "308",
                      "value" : [ "null", " as " ]
                    }, {
                      "r" : "309",
                      "s" : [ {
                        "value" : [ "Code" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "310",
                  "s" : [ {
                    "value" : [ "\"ChronicRecurrentDepression\"" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "314",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "315",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "List",
            "localId" : "302",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "311",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "312",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Instance",
              "localId" : "303",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "classType" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ],
              "element" : [ {
                "name" : "code",
                "value" : {
                  "type" : "Literal",
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "As",
              "localId" : "307",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "308",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "309",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }, {
              "type" : "CodeRef",
              "localId" : "310",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "ChronicRecurrentDepression",
              "annotation" : [ ]
            } ]
          },
          "valueset" : {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "319",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInUnknown",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "319",
            "s" : [ {
              "value" : [ "", "define ", "AnyInUnknown", ": " ]
            }, {
              "r" : "325",
              "s" : [ {
                "r" : "320",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "321",
                  "s" : [ {
                    "value" : [ "\"Depression Concept\"" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "324",
                "s" : [ {
                  "value" : [ "\"UnknownAny\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "325",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "326",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "327",
              "name" : "{urn:hl7-org:elm-types:r1}Concept",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "List",
            "localId" : "320",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "322",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "323",
                "name" : "{urn:hl7-org:elm-types:r1}Concept",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ConceptRef",
              "localId" : "321",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
              "name" : "Depression Concept",
              "annotation" : [ ]
            } ]
          },
          "valueset" : {
            "localId" : "324",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "UnknownAny",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "330",
        "name" : "ListOfCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "330",
            "s" : [ {
              "value" : [ "// expression data\n", "define ", "ListOfCodes", ": " ]
            }, {
              "r" : "331",
              "s" : [ {
                "value" : [ "{ " ]
              }, {
                "r" : "332",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "334",
                    "s" : [ {
                      "value" : [ "'M'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " , " ]
              }, {
                "r" : "336",
                "s" : [ {
                  "value" : [ "\"ChronicRecurrentDepression\"" ]
                } ]
              }, {
                "value" : [ " }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "339",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "340",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "331",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "337",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "338",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "element" : [ {
            "type" : "Instance",
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "334",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "M",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "CodeRef",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "ChronicRecurrentDepression",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "343",
        "name" : "WrongListOfCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "343",
            "s" : [ {
              "value" : [ "", "define ", "WrongListOfCodes", ": " ]
            }, {
              "r" : "344",
              "s" : [ {
                "value" : [ "{ " ]
              }, {
                "r" : "345",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "347",
                    "s" : [ {
                      "value" : [ "'M'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "349",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "351",
                    "s" : [ {
                      "value" : [ "'F'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "system", ": " ]
                  }, {
                    "r" : "353",
                    "s" : [ {
                      "value" : [ "'3.16.840.1.113883.18.2'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "357",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "358",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "344",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "355",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "356",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "element" : [ {
            "type" : "Instance",
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "347",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "M",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Instance",
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "351",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "F",
                "annotation" : [ ]
              }
            }, {
              "name" : "system",
              "value" : {
                "type" : "Literal",
                "localId" : "353",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "3.16.840.1.113883.18.2",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "361",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInListOfCodesExpressionRef",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "361",
            "s" : [ {
              "value" : [ "", "define ", "AnyInListOfCodesExpressionRef", ": " ]
            }, {
              "r" : "366",
              "s" : [ {
                "r" : "362",
                "s" : [ {
                  "value" : [ "ListOfCodes" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "365",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "366",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "367",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "368",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "ExpressionRef",
            "localId" : "362",
            "name" : "ListOfCodes",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "363",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "364",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }
          },
          "valueset" : {
            "localId" : "365",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "371",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "AnyInWrongListOfCodes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "371",
            "s" : [ {
              "value" : [ "", "define ", "AnyInWrongListOfCodes", ": " ]
            }, {
              "r" : "376",
              "s" : [ {
                "r" : "372",
                "s" : [ {
                  "value" : [ "WrongListOfCodes" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "375",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "376",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "377",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "378",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "codes" : {
            "type" : "ExpressionRef",
            "localId" : "372",
            "name" : "WrongListOfCodes",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "373",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "374",
                "name" : "{urn:hl7-org:elm-types:r1}Code",
                "annotation" : [ ]
              }
            }
          },
          "valueset" : {
            "localId" : "375",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "379",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListInVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "379",
            "s" : [ {
              "value" : [ "// function data\n", "define function ListInVS(vs ValueSet): " ]
            }, {
              "r" : "392",
              "s" : [ {
                "r" : "392",
                "s" : [ {
                  "r" : "384",
                  "s" : [ {
                    "value" : [ "{ " ]
                  }, {
                    "r" : "385",
                    "s" : [ {
                      "value" : [ "'2618002'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "387",
                    "s" : [ {
                      "value" : [ "'12345'" ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                }, {
                  "value" : [ " in " ]
                }, {
                  "r" : "391",
                  "s" : [ {
                    "value" : [ "vs" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyInValueSet",
          "localId" : "392",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "393",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "394",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "395",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "codes" : {
            "type" : "List",
            "localId" : "384",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "389",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "390",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "385",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "2618002",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "387",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "12345",
              "annotation" : [ ]
            } ]
          },
          "valuesetExpression" : {
            "type" : "OperandRef",
            "localId" : "391",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "vs",
            "annotation" : [ ]
          }
        },
        "operand" : [ {
          "localId" : "381",
          "name" : "vs",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "380",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "398",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListInPassedVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "398",
            "s" : [ {
              "value" : [ "", "define ", "ListInPassedVS", ": " ]
            }, {
              "r" : "400",
              "s" : [ {
                "value" : [ "ListInVS", "(" ]
              }, {
                "r" : "399",
                "s" : [ {
                  "value" : [ "\"Major Depressive Disorder Active\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "400",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "ListInVS",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "401",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "399",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "404",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListInWrongVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "404",
            "s" : [ {
              "value" : [ "", "define ", "ListInWrongVS", ": " ]
            }, {
              "r" : "406",
              "s" : [ {
                "value" : [ "ListInVS", "(" ]
              }, {
                "r" : "405",
                "s" : [ {
                  "value" : [ "\"Male\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "406",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "ListInVS",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "407",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "405",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Male",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "410",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListInNullVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "410",
            "s" : [ {
              "value" : [ "", "define ", "ListInNullVS", ": " ]
            }, {
              "r" : "414",
              "s" : [ {
                "value" : [ "ListInVS", "(" ]
              }, {
                "r" : "411",
                "s" : [ {
                  "r" : "412",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "413",
                  "s" : [ {
                    "value" : [ "ValueSet" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "414",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "ListInVS",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "415",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "411",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "412",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "413",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

/* InValueSet
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Male": '2.16.840.1.113883.3.560.100.1'
valueset "Versioned Female": '2.16.840.1.113883.3.560.100.2' version '20121025'
valueset "SharedCodes": '2.16.840.1.113883.3.000.000.0'
valueset "ImproperSharedCodes": '2.16.840.1.113883.3.000.000.1'
valueset "UnknownIn": '1.2.3.4.5.6.7.8.9'
context Patient
define String: 'F' in "Female"
define SharedCodesFoo: 'foo' in "SharedCodes"
define SharedCodesNoMatch: 'baz' in "SharedCodes"
define ImproperSharedCodesCodeValue: 'codeValue' in "ImproperSharedCodes"
define StringInVersionedValueSet: 'F' in "Versioned Female"
define ShortCode: Code { code: 'F' } in "Female"
define MediumCode: Code { code: 'F', system: '2.16.840.1.113883.18.2' } in "Female"
define LongCode: Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } in "Female"
define WrongString: 'M' in "Female"
define WrongStringInVersionedValueSet: 'M' in "Versioned Female"
define WrongShortCode: Code { code: 'M' } in "Female"
define WrongMediumCode: Code { code: 'F', system: '3.16.840.1.113883.18.2' } in "Female"
define LongCodeDifferentVersion: Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.6' } in "Female"
define NullCode: Code { code: null, system: '2.16.840.1.113883.18.2', version: 'HL7V2.6' } in "Female"
define NullCastAsCode: null as Code in "Female"
define NullCastAsCodeWithNullVS: null as Code in null as ValueSet
define function FInVS(vs ValueSet): 'F' in vs
define FInPassedVS: FInVS("Female")
define FInWrongVS: FInVS("Male")
define FInNullVS: FInVS(null as ValueSet)
define InUnknown: 'F' in "UnknownIn"
*/

module.exports['InValueSet'] = {
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
        "r" : "420",
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
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Female",
        "id" : "2.16.840.1.113883.3.560.100.2",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Female\"", ": ", "'2.16.840.1.113883.3.560.100.2'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Male",
        "id" : "2.16.840.1.113883.3.560.100.1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Male\"", ": ", "'2.16.840.1.113883.3.560.100.1'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Versioned Female",
        "id" : "2.16.840.1.113883.3.560.100.2",
        "version" : "20121025",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Versioned Female\"", ": ", "'2.16.840.1.113883.3.560.100.2'", " version ", "'20121025'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "SharedCodes",
        "id" : "2.16.840.1.113883.3.000.000.0",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "valueset ", "\"SharedCodes\"", ": ", "'2.16.840.1.113883.3.000.000.0'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "ImproperSharedCodes",
        "id" : "2.16.840.1.113883.3.000.000.1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "valueset ", "\"ImproperSharedCodes\"", ": ", "'2.16.840.1.113883.3.000.000.1'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "UnknownIn",
        "id" : "1.2.3.4.5.6.7.8.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "value" : [ "", "valueset ", "\"UnknownIn\"", ": ", "'1.2.3.4.5.6.7.8.9'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "223",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "221",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "222",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "220",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "String",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "String", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "227",
                "s" : [ {
                  "value" : [ "'F'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "F",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SharedCodesFoo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "SharedCodesFoo", ": " ]
            }, {
              "r" : "238",
              "s" : [ {
                "r" : "235",
                "s" : [ {
                  "value" : [ "'foo'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "237",
                "s" : [ {
                  "value" : [ "\"SharedCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "238",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "SharedCodes",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "SharedCodesNoMatch",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "SharedCodesNoMatch", ": " ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "243",
                "s" : [ {
                  "value" : [ "'baz'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "245",
                "s" : [ {
                  "value" : [ "\"SharedCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "baz",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "SharedCodes",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ImproperSharedCodesCodeValue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "ImproperSharedCodesCodeValue", ": " ]
            }, {
              "r" : "254",
              "s" : [ {
                "r" : "251",
                "s" : [ {
                  "value" : [ "'codeValue'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "253",
                "s" : [ {
                  "value" : [ "\"ImproperSharedCodes\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "254",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "codeValue",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "ImproperSharedCodes",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "258",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StringInVersionedValueSet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "258",
            "s" : [ {
              "value" : [ "", "define ", "StringInVersionedValueSet", ": " ]
            }, {
              "r" : "262",
              "s" : [ {
                "r" : "259",
                "s" : [ {
                  "value" : [ "'F'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "261",
                "s" : [ {
                  "value" : [ "\"Versioned Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "262",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "F",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Versioned Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ShortCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "ShortCode", ": " ]
            }, {
              "r" : "272",
              "s" : [ {
                "r" : "267",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "269",
                    "s" : [ {
                      "value" : [ "'F'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "272",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "273",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "269",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "F",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "276",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "MediumCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "276",
            "s" : [ {
              "value" : [ "", "define ", "MediumCode", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "r" : "277",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "279",
                    "s" : [ {
                      "value" : [ "'F'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "system", ": " ]
                  }, {
                    "r" : "281",
                    "s" : [ {
                      "value" : [ "'2.16.840.1.113883.18.2'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "283",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "285",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "279",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "F",
                "annotation" : [ ]
              }
            }, {
              "name" : "system",
              "value" : {
                "type" : "Literal",
                "localId" : "281",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "2.16.840.1.113883.18.2",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "288",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "LongCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "288",
            "s" : [ {
              "value" : [ "", "define ", "LongCode", ": " ]
            }, {
              "r" : "298",
              "s" : [ {
                "r" : "289",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "291",
                    "s" : [ {
                      "value" : [ "'F'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "system", ": " ]
                  }, {
                    "r" : "293",
                    "s" : [ {
                      "value" : [ "'2.16.840.1.113883.18.2'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "version", ": " ]
                  }, {
                    "r" : "295",
                    "s" : [ {
                      "value" : [ "'HL7V2.5'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "297",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "298",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "291",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "F",
                "annotation" : [ ]
              }
            }, {
              "name" : "system",
              "value" : {
                "type" : "Literal",
                "localId" : "293",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "2.16.840.1.113883.18.2",
                "annotation" : [ ]
              }
            }, {
              "name" : "version",
              "value" : {
                "type" : "Literal",
                "localId" : "295",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "HL7V2.5",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "302",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WrongString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "WrongString", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "r" : "303",
                "s" : [ {
                  "value" : [ "'M'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "307",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "M",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "310",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WrongStringInVersionedValueSet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "310",
            "s" : [ {
              "value" : [ "", "define ", "WrongStringInVersionedValueSet", ": " ]
            }, {
              "r" : "314",
              "s" : [ {
                "r" : "311",
                "s" : [ {
                  "value" : [ "'M'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "\"Versioned Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "314",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "M",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Versioned Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "318",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WrongShortCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define ", "WrongShortCode", ": " ]
            }, {
              "r" : "324",
              "s" : [ {
                "r" : "319",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "321",
                    "s" : [ {
                      "value" : [ "'M'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "323",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "324",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "325",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "321",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "M",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "328",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "WrongMediumCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "328",
            "s" : [ {
              "value" : [ "", "define ", "WrongMediumCode", ": " ]
            }, {
              "r" : "336",
              "s" : [ {
                "r" : "329",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "331",
                    "s" : [ {
                      "value" : [ "'F'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "system", ": " ]
                  }, {
                    "r" : "333",
                    "s" : [ {
                      "value" : [ "'3.16.840.1.113883.18.2'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "335",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "336",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "337",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "331",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "F",
                "annotation" : [ ]
              }
            }, {
              "name" : "system",
              "value" : {
                "type" : "Literal",
                "localId" : "333",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "3.16.840.1.113883.18.2",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "335",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "340",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "LongCodeDifferentVersion",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "340",
            "s" : [ {
              "value" : [ "", "define ", "LongCodeDifferentVersion", ": " ]
            }, {
              "r" : "350",
              "s" : [ {
                "r" : "341",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "value" : [ "code", ": " ]
                  }, {
                    "r" : "343",
                    "s" : [ {
                      "value" : [ "'F'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "system", ": " ]
                  }, {
                    "r" : "345",
                    "s" : [ {
                      "value" : [ "'2.16.840.1.113883.18.2'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "version", ": " ]
                  }, {
                    "r" : "347",
                    "s" : [ {
                      "value" : [ "'HL7V2.6'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "349",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "350",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "351",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "Literal",
                "localId" : "343",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "F",
                "annotation" : [ ]
              }
            }, {
              "name" : "system",
              "value" : {
                "type" : "Literal",
                "localId" : "345",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "2.16.840.1.113883.18.2",
                "annotation" : [ ]
              }
            }, {
              "name" : "version",
              "value" : {
                "type" : "Literal",
                "localId" : "347",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "HL7V2.6",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "354",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "354",
            "s" : [ {
              "value" : [ "", "define ", "NullCode", ": " ]
            }, {
              "r" : "364",
              "s" : [ {
                "r" : "355",
                "s" : [ {
                  "value" : [ "Code", " { " ]
                }, {
                  "s" : [ {
                    "r" : "357",
                    "value" : [ "code", ": ", "null" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "system", ": " ]
                  }, {
                    "r" : "359",
                    "s" : [ {
                      "value" : [ "'2.16.840.1.113883.18.2'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "value" : [ "version", ": " ]
                  }, {
                    "r" : "361",
                    "s" : [ {
                      "value" : [ "'HL7V2.6'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "363",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "364",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "365",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Instance",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "classType" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ],
            "element" : [ {
              "name" : "code",
              "value" : {
                "type" : "As",
                "localId" : "358",
                "asType" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "Null",
                  "localId" : "357",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              }
            }, {
              "name" : "system",
              "value" : {
                "type" : "Literal",
                "localId" : "359",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "2.16.840.1.113883.18.2",
                "annotation" : [ ]
              }
            }, {
              "name" : "version",
              "value" : {
                "type" : "Literal",
                "localId" : "361",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "HL7V2.6",
                "annotation" : [ ]
              }
            } ]
          },
          "valueset" : {
            "localId" : "363",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "368",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullCastAsCode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "368",
            "s" : [ {
              "value" : [ "", "define ", "NullCastAsCode", ": " ]
            }, {
              "r" : "373",
              "s" : [ {
                "r" : "369",
                "s" : [ {
                  "r" : "370",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "371",
                  "s" : [ {
                    "value" : [ "Code" ]
                  } ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "372",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "373",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "374",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "As",
            "localId" : "369",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "370",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "valueset" : {
            "localId" : "372",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "377",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullCastAsCodeWithNullVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "377",
            "s" : [ {
              "value" : [ "", "define ", "NullCastAsCodeWithNullVS", ": " ]
            }, {
              "r" : "384",
              "s" : [ {
                "r" : "378",
                "s" : [ {
                  "r" : "379",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "380",
                  "s" : [ {
                    "value" : [ "Code" ]
                  } ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "381",
                "s" : [ {
                  "r" : "382",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "383",
                  "s" : [ {
                    "value" : [ "ValueSet" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "384",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "385",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "386",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "As",
            "localId" : "378",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "380",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "valuesetExpression" : {
            "type" : "As",
            "localId" : "381",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "387",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FInVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "387",
            "s" : [ {
              "value" : [ "", "define function FInVS(vs ValueSet): " ]
            }, {
              "r" : "395",
              "s" : [ {
                "r" : "395",
                "s" : [ {
                  "r" : "392",
                  "s" : [ {
                    "value" : [ "'F'" ]
                  } ]
                }, {
                  "value" : [ " in " ]
                }, {
                  "r" : "394",
                  "s" : [ {
                    "value" : [ "vs" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "395",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "396",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "397",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "392",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "F",
            "annotation" : [ ]
          },
          "valuesetExpression" : {
            "type" : "OperandRef",
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "vs",
            "annotation" : [ ]
          }
        },
        "operand" : [ {
          "localId" : "389",
          "name" : "vs",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "388",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "400",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FInPassedVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "400",
            "s" : [ {
              "value" : [ "", "define ", "FInPassedVS", ": " ]
            }, {
              "r" : "402",
              "s" : [ {
                "value" : [ "FInVS", "(" ]
              }, {
                "r" : "401",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "402",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "FInVS",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "403",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "401",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "406",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FInWrongVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "406",
            "s" : [ {
              "value" : [ "", "define ", "FInWrongVS", ": " ]
            }, {
              "r" : "408",
              "s" : [ {
                "value" : [ "FInVS", "(" ]
              }, {
                "r" : "407",
                "s" : [ {
                  "value" : [ "\"Male\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "408",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "FInVS",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "409",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "407",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Male",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "412",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FInNullVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "412",
            "s" : [ {
              "value" : [ "", "define ", "FInNullVS", ": " ]
            }, {
              "r" : "416",
              "s" : [ {
                "value" : [ "FInVS", "(" ]
              }, {
                "r" : "413",
                "s" : [ {
                  "r" : "414",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "415",
                  "s" : [ {
                    "value" : [ "ValueSet" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "416",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "FInVS",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "417",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "413",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "414",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "415",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "420",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "InUnknown",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "420",
            "s" : [ {
              "value" : [ "", "define ", "InUnknown", ": " ]
            }, {
              "r" : "424",
              "s" : [ {
                "r" : "421",
                "s" : [ {
                  "value" : [ "'F'" ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "423",
                "s" : [ {
                  "value" : [ "\"UnknownIn\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "424",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "425",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Literal",
            "localId" : "421",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "F",
            "annotation" : [ ]
          },
          "valueset" : {
            "localId" : "423",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "UnknownIn",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* ExpandValueset
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'
valueset "UnknownExpand": '1.2.3.4.5.6.7.8.9'
context Patient

define ExpandFemale: ExpandValueSet("Female")
define ExpandKnown: ExpandValueSet("Known")
define ExpandNull: ExpandValueSet(null)
define InvokeExpandWithUnion: "Female" union  "Known"
define function ExpandVSHelper(vs ValueSet): ExpandValueSet(vs)
define ExpandPassedVS: ExpandVSHelper("Female")
define ExpandNullVS: ExpandVSHelper(null as ValueSet)
define function UnionVSs(vs1 ValueSet, vs2 ValueSet): vs1 union vs2
define ExpandPassedWithUnion: UnionVSs("Female", "Known")
define ExpandUnknown: ExpandValueSet("UnknownExpand")
*/

module.exports['ExpandValueset'] = {
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
        "r" : "359",
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
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Female",
        "id" : "2.16.840.1.113883.3.560.100.2",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Female\"", ": ", "'2.16.840.1.113883.3.560.100.2'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Known",
        "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Known\"", ": ", "'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      }, {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "UnknownExpand",
        "id" : "1.2.3.4.5.6.7.8.9",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "valueset ", "\"UnknownExpand\"", ": ", "'1.2.3.4.5.6.7.8.9'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "name" : "ExpandFemale",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "ExpandFemale", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "ExpandValueSet", "(" ]
              }, {
                "r" : "221",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "229",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ExpandValueSet",
          "localId" : "225",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "227",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ValueSetRef",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "233",
        "name" : "ExpandKnown",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "define ", "ExpandKnown", ": " ]
            }, {
              "r" : "238",
              "s" : [ {
                "value" : [ "ExpandValueSet", "(" ]
              }, {
                "r" : "234",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "242",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ExpandValueSet",
          "localId" : "238",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "240",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "241",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ValueSetRef",
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "246",
        "name" : "ExpandNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "ExpandNull", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "r" : "247",
                "value" : [ "ExpandValueSet", "(", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "257",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ExpandValueSet",
          "localId" : "252",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "255",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "256",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "253",
            "asType" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "247",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "261",
        "name" : "InvokeExpandWithUnion",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "261",
            "s" : [ {
              "value" : [ "", "define ", "InvokeExpandWithUnion", ": " ]
            }, {
              "r" : "264",
              "s" : [ {
                "r" : "262",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              }, {
                "value" : [ " union  " ]
              }, {
                "r" : "263",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "277",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "278",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Union",
          "localId" : "264",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "275",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "276",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "271",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "272",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "273",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "274",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "ExpandValueSet",
            "localId" : "266",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ValueSetRef",
              "localId" : "262",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "Female",
              "preserve" : true,
              "annotation" : [ ]
            }
          }, {
            "type" : "ExpandValueSet",
            "localId" : "269",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "270",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "ValueSetRef",
              "localId" : "263",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "Known",
              "preserve" : true,
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "279",
        "name" : "ExpandVSHelper",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "value" : [ "", "define function ExpandVSHelper(vs ValueSet): " ]
            }, {
              "r" : "288",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "ExpandValueSet", "(" ]
                }, {
                  "r" : "284",
                  "s" : [ {
                    "value" : [ "vs" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "294",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "295",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ExpandValueSet",
          "localId" : "288",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "292",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "OperandRef",
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "vs",
            "annotation" : [ ]
          }
        },
        "operand" : [ {
          "localId" : "281",
          "name" : "vs",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "298",
        "name" : "ExpandPassedVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "298",
            "s" : [ {
              "value" : [ "", "define ", "ExpandPassedVS", ": " ]
            }, {
              "r" : "300",
              "s" : [ {
                "value" : [ "ExpandVSHelper", "(" ]
              }, {
                "r" : "299",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "304",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "305",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "300",
          "name" : "ExpandVSHelper",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "302",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "303",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "301",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "308",
        "name" : "ExpandNullVS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "308",
            "s" : [ {
              "value" : [ "", "define ", "ExpandNullVS", ": " ]
            }, {
              "r" : "312",
              "s" : [ {
                "value" : [ "ExpandVSHelper", "(" ]
              }, {
                "r" : "309",
                "s" : [ {
                  "r" : "310",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "value" : [ "ValueSet" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "316",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "312",
          "name" : "ExpandVSHelper",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "314",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "313",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "310",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "318",
        "name" : "UnionVSs",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "318",
            "s" : [ {
              "value" : [ "", "define function UnionVSs(vs1 ValueSet, vs2 ValueSet): " ]
            }, {
              "r" : "328",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "r" : "326",
                  "s" : [ {
                    "value" : [ "vs1" ]
                  } ]
                }, {
                  "value" : [ " union " ]
                }, {
                  "r" : "327",
                  "s" : [ {
                    "value" : [ "vs2" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "343",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "344",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Union",
          "localId" : "328",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "341",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "335",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "336",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "337",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "338",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "ExpandValueSet",
            "localId" : "330",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "331",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "OperandRef",
              "localId" : "326",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "vs1",
              "annotation" : [ ]
            }
          }, {
            "type" : "ExpandValueSet",
            "localId" : "333",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "334",
              "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "OperandRef",
              "localId" : "327",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
              "name" : "vs2",
              "annotation" : [ ]
            }
          } ]
        },
        "operand" : [ {
          "localId" : "320",
          "name" : "vs1",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }
        }, {
          "localId" : "322",
          "name" : "vs2",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "347",
        "name" : "ExpandPassedWithUnion",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "347",
            "s" : [ {
              "value" : [ "", "define ", "ExpandPassedWithUnion", ": " ]
            }, {
              "r" : "350",
              "s" : [ {
                "value" : [ "UnionVSs", "(" ]
              }, {
                "r" : "348",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "349",
                "s" : [ {
                  "value" : [ "\"Known\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "355",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "356",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "350",
          "name" : "UnionVSs",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "353",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "354",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "351",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "352",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ValueSetRef",
            "localId" : "348",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }, {
            "type" : "ValueSetRef",
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "preserve" : true,
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "359",
        "name" : "ExpandUnknown",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "359",
            "s" : [ {
              "value" : [ "", "define ", "ExpandUnknown", ": " ]
            }, {
              "r" : "364",
              "s" : [ {
                "value" : [ "ExpandValueSet", "(" ]
              }, {
                "r" : "360",
                "s" : [ {
                  "value" : [ "\"UnknownExpand\"" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "368",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "369",
            "name" : "{urn:hl7-org:elm-types:r1}Code",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ExpandValueSet",
          "localId" : "364",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "366",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "367",
              "name" : "{urn:hl7-org:elm-types:r1}Code",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "365",
            "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ValueSetRef",
            "localId" : "360",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "UnknownExpand",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* Patient Property In ValueSet
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Female": '2.16.840.1.113883.3.560.100.2'
context Patient
define IsFemale: Patient.gender in "Female"
*/

module.exports['Patient Property In ValueSet'] = {
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
        "r" : "216",
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
    "valueSets" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
        "name" : "Female",
        "id" : "2.16.840.1.113883.3.560.100.2",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "valueset ", "\"Female\"", ": ", "'2.16.840.1.113883.3.560.100.2'" ]
            } ]
          }
        } ],
        "codeSystem" : [ ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "212",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "210",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IsFemale",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "define ", "IsFemale", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "r" : "218",
                "s" : [ {
                  "r" : "217",
                  "s" : [ {
                    "value" : [ "Patient" ]
                  } ]
                }, {
                  "value" : [ "." ]
                }, {
                  "r" : "218",
                  "s" : [ {
                    "value" : [ "gender" ]
                  } ]
                } ]
              }, {
                "value" : [ " in " ]
              }, {
                "r" : "219",
                "s" : [ {
                  "value" : [ "\"Female\"" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "InValueSet",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "code" : {
            "type" : "Property",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "gender",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "217",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Patient",
              "name" : "Patient",
              "annotation" : [ ]
            }
          },
          "valueset" : {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "preserve" : true,
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* CodeDef
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
context Patient
define Foo: 'Bar'
*/

module.exports['CodeDef'] = {
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
        "r" : "219",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "LOINC",
        "id" : "http://loinc.org",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"LOINC\"", ": ", "'http://loinc.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Tobacco smoking status code",
        "id" : "72166-2",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "code ", "\"Tobacco smoking status code\"", ": ", "'72166-2'", " from " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "216",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "214",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "215",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "213",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "219",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "'Bar'" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Bar",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* CodeRef
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
context Patient
define Foo: "Tobacco smoking status code"
*/

module.exports['CodeRef'] = {
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
        "r" : "219",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "LOINC",
        "id" : "http://loinc.org",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"LOINC\"", ": ", "'http://loinc.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Tobacco smoking status code",
        "id" : "72166-2",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "code ", "\"Tobacco smoking status code\"", ": ", "'72166-2'", " from " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "216",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "214",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "215",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "213",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "219",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "219",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "\"Tobacco smoking status code\"" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CodeRef",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Tobacco smoking status code",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* ConceptDef
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
context Patient
define Foo: 'Bar'
*/

module.exports['ConceptDef'] = {
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
        "r" : "221",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "LOINC",
        "id" : "http://loinc.org",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"LOINC\"", ": ", "'http://loinc.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Tobacco smoking status code",
        "id" : "72166-2",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "code ", "\"Tobacco smoking status code\"", ": ", "'72166-2'", " from " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
        }
      } ]
    },
    "concepts" : {
      "def" : [ {
        "localId" : "213",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Tobacco smoking status",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "213",
            "s" : [ {
              "value" : [ "", "concept ", "\"Tobacco smoking status\"", ": { " ]
            }, {
              "r" : "214",
              "s" : [ {
                "value" : [ "\"Tobacco smoking status code\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "214",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Tobacco smoking status code",
          "annotation" : [ ]
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "218",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "216",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "217",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "215",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "221",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "'Bar'" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Bar",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* ConceptRef
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "LOINC": 'http://loinc.org'
code "Tobacco smoking status code": '72166-2' from "LOINC" display 'Tobacco smoking status'
concept "Tobacco smoking status": { "Tobacco smoking status code" } display 'Tobacco smoking status'
context Patient
define Foo: "Tobacco smoking status"
*/

module.exports['ConceptRef'] = {
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
        "r" : "221",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "LOINC",
        "id" : "http://loinc.org",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"LOINC\"", ": ", "'http://loinc.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Tobacco smoking status code",
        "id" : "72166-2",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "code ", "\"Tobacco smoking status code\"", ": ", "'72166-2'", " from " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "\"LOINC\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "LOINC",
          "annotation" : [ ]
        }
      } ]
    },
    "concepts" : {
      "def" : [ {
        "localId" : "213",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Tobacco smoking status",
        "display" : "Tobacco smoking status",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "213",
            "s" : [ {
              "value" : [ "", "concept ", "\"Tobacco smoking status\"", ": { " ]
            }, {
              "r" : "214",
              "s" : [ {
                "value" : [ "\"Tobacco smoking status code\"" ]
              } ]
            }, {
              "value" : [ " } display ", "'Tobacco smoking status'" ]
            } ]
          }
        } ],
        "code" : [ {
          "localId" : "214",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "Tobacco smoking status code",
          "annotation" : [ ]
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "218",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "216",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "217",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "215",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "221",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "\"Tobacco smoking status\"" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ConceptRef",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
          "name" : "Tobacco smoking status",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* CodeSystemRef
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "MyCS": 'http://loinc.org' version '1'
context Patient
define ResolveMyCS: "MyCS"
*/

module.exports['CodeSystemRef'] = {
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
        "r" : "216",
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "MyCS",
        "id" : "http://loinc.org",
        "version" : "1",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"MyCS\"", ": ", "'http://loinc.org'", " version ", "'1'" ]
            } ]
          }
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "212",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "210",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "ResolveMyCS",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "define ", "ResolveMyCS", ": " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "\"MyCS\"" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CodeSystemRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "MyCS",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* CalculateAge: Fully Specified Birth Date
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
*/

module.exports['CalculateAge: Fully Specified Birth Date'] = {
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
        "r" : "274",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Years",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Years", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "AgeInYears", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "220",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "218",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "217",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Months",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Months", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "AgeInMonths", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "230",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "229",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Weeks",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "Weeks", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "value" : [ "AgeInWeeks", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Week",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "242",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Days", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "AgeInDays", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Day",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "251",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "250",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Hours",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "Hours", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "AgeInHours", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Hour",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "260",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Minutes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "Minutes", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "AgeInMinutes", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Minute",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "269",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "268",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Seconds",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "Seconds", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "AgeInSeconds", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Second",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "278",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "277",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* CalculateAge: Fully Specified Birth Date on Today
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
*/

module.exports['CalculateAge: Fully Specified Birth Date on Today'] = {
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
        "r" : "274",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Years",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Years", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "AgeInYears", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "220",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "218",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "217",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Months",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Months", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "AgeInMonths", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "230",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "229",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Weeks",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "Weeks", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "value" : [ "AgeInWeeks", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Week",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "242",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Days", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "AgeInDays", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Day",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "251",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "250",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Hours",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "Hours", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "AgeInHours", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Hour",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "260",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Minutes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "Minutes", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "AgeInMinutes", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Minute",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "269",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "268",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Seconds",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "Seconds", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "AgeInSeconds", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Second",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "278",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "277",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* CalculateAge: Date-Only Birth Date as DateTime
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
*/

module.exports['CalculateAge: Date-Only Birth Date as DateTime'] = {
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
        "r" : "274",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Years",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Years", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "AgeInYears", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "220",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "218",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "217",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Months",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Months", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "AgeInMonths", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "230",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "229",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Weeks",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "Weeks", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "value" : [ "AgeInWeeks", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Week",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "242",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Days", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "AgeInDays", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Day",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "251",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "250",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Hours",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "Hours", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "AgeInHours", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Hour",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "260",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Minutes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "Minutes", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "AgeInMinutes", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Minute",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "269",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "268",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Seconds",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "Seconds", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "AgeInSeconds", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Second",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "278",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "277",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* CalculateAge: Date-Only Birth Date as DateTime on Today
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
*/

module.exports['CalculateAge: Date-Only Birth Date as DateTime on Today'] = {
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
        "r" : "274",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Years",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Years", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "AgeInYears", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "220",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "218",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "217",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Months",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Months", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "AgeInMonths", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "230",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "229",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Weeks",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "Weeks", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "value" : [ "AgeInWeeks", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Week",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "242",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Days", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "AgeInDays", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Day",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "251",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "250",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Hours",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "Hours", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "AgeInHours", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Hour",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "260",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Minutes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "Minutes", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "AgeInMinutes", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Minute",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "269",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "268",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Seconds",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "Seconds", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "AgeInSeconds", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Second",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "278",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "277",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* CalculateAge: Date-Only Birth Date as Date
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
*/

module.exports['CalculateAge: Date-Only Birth Date as Date'] = {
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
        "r" : "274",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Years",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Years", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "AgeInYears", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "220",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "218",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "217",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Months",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Months", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "AgeInMonths", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "230",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "229",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Weeks",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "Weeks", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "value" : [ "AgeInWeeks", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Week",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "242",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Days", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "AgeInDays", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Day",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "251",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "250",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Hours",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "Hours", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "AgeInHours", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Hour",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "260",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Minutes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "Minutes", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "AgeInMinutes", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Minute",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "269",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "268",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Seconds",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "Seconds", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "AgeInSeconds", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Second",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "278",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "277",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* CalculateAge: Date-Only Birth Date as Date on Today
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Years: AgeInYears()
define Months: AgeInMonths()
define Weeks: AgeInWeeks()
define Days: AgeInDays()
define Hours: AgeInHours()
define Minutes: AgeInMinutes()
define Seconds: AgeInSeconds()
*/

module.exports['CalculateAge: Date-Only Birth Date as Date on Today'] = {
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
        "r" : "274",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Years",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Years", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "AgeInYears", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "220",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "218",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "217",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Months",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Months", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "AgeInMonths", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Month",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ToDate",
            "localId" : "232",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "230",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "229",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Weeks",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "Weeks", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "value" : [ "AgeInWeeks", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Week",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "242",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Days",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Days", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "AgeInDays", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Day",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "251",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "250",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Hours",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "Hours", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "value" : [ "AgeInHours", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Hour",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "260",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "259",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Minutes",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "Minutes", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "value" : [ "AgeInMinutes", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Minute",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "269",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "268",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Seconds",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "Seconds", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "AgeInSeconds", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAge",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Second",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Property",
            "localId" : "278",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "277",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* CalculateAgeAt
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define AgeAt2012: AgeInYearsAt(DateTime(2012))
define AgeAt19810216: AgeInYearsAt(DateTime(1981, 2, 16))
define AgeAt1975: AgeInYearsAt(DateTime(1975))
define AgeInYearsDateTimeArg: AgeInYearsAt(DateTime(2012, 12, 1))
define CalculateAgeInYearsDateTimeArg: CalculateAgeInYearsAt(@1994-12-01T23:59:00.000+00:00, DateTime(2012, 12, 1))
define AgeInYearsDateArg: AgeInYearsAt(Date(2012, 12, 1))
define CalculateAgeInYearsDateArg: CalculateAgeInYearsAt(@1994-12-01T23:59:00.000+00:00, Date(2012, 12, 1))
define AgeAtJanuary1DateTimeArg: AgeInYearsAt(@2024-01-01T00:00:00.000+00:00)
define AgeAtJanuary1DateArg: AgeInYearsAt(Date(2024, 1, 1))
*/

module.exports['CalculateAgeAt'] = {
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
        "r" : "395",
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeAt2012",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "AgeAt2012", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "219",
                "s" : [ {
                  "r" : "215",
                  "value" : [ "DateTime", "(", "2012", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "224",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "223",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "220",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "215",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2012",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeAt19810216",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "AgeAt19810216", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "239",
                "s" : [ {
                  "r" : "231",
                  "value" : [ "DateTime", "(", "1981", ", ", "2", ", ", "16", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "249",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "246",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "245",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "241",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "242",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "231",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1981",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "16",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "252",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeAt1975",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "252",
            "s" : [ {
              "value" : [ "", "define ", "AgeAt1975", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "257",
                "s" : [ {
                  "r" : "253",
                  "value" : [ "DateTime", "(", "1975", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "264",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "262",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "261",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "258",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "253",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1975",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeInYearsDateTimeArg",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "AgeInYearsDateTimeArg", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "277",
                "s" : [ {
                  "r" : "269",
                  "value" : [ "DateTime", "(", "2012", ", ", "12", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "285",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "286",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "287",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "284",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "283",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "278",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "279",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "280",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2012",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "290",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CalculateAgeInYearsDateTimeArg",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "290",
            "s" : [ {
              "value" : [ "", "define ", "CalculateAgeInYearsDateTimeArg", ": " ]
            }, {
              "r" : "314",
              "s" : [ {
                "r" : "291",
                "value" : [ "CalculateAgeInYearsAt", "(", "@1994-12-01T23:59:00.000+00:00", ", " ]
              }, {
                "r" : "308",
                "s" : [ {
                  "r" : "300",
                  "value" : [ "DateTime", "(", "2012", ", ", "12", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "314",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "316",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "292",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1994",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "293",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "294",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "295",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "296",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "59",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "297",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "298",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "299",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "308",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "310",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "300",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2012",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "319",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeInYearsDateArg",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "319",
            "s" : [ {
              "value" : [ "", "define ", "AgeInYearsDateArg", ": " ]
            }, {
              "r" : "339",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "328",
                "s" : [ {
                  "r" : "320",
                  "value" : [ "Date", "(", "2012", ", ", "12", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "339",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "340",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "341",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDate",
            "localId" : "337",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "338",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "335",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "334",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "Date",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "329",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "330",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "331",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "320",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2012",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "321",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "344",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CalculateAgeInYearsDateArg",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "344",
            "s" : [ {
              "value" : [ "", "define ", "CalculateAgeInYearsDateArg", ": " ]
            }, {
              "r" : "368",
              "s" : [ {
                "r" : "345",
                "value" : [ "CalculateAgeInYearsAt", "(", "@1994-12-01T23:59:00.000+00:00", ", " ]
              }, {
                "r" : "362",
                "s" : [ {
                  "r" : "354",
                  "value" : [ "Date", "(", "2012", ", ", "12", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "368",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "372",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "373",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "DateTime",
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "346",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1994",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "347",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "12",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "348",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "349",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "23",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "350",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "59",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "351",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "352",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "353",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.0",
              "annotation" : [ ]
            }
          }, {
            "type" : "ToDateTime",
            "localId" : "370",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Date",
              "localId" : "362",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "363",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "364",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "365",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "354",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "355",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "356",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "376",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeAtJanuary1DateTimeArg",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "376",
            "s" : [ {
              "value" : [ "", "define ", "AgeAtJanuary1DateTimeArg", ": " ]
            }, {
              "r" : "390",
              "s" : [ {
                "r" : "377",
                "value" : [ "AgeInYearsAt", "(", "@2024-01-01T00:00:00.000+00:00", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "390",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "391",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "392",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "389",
            "path" : "birthDate",
            "annotation" : [ ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "388",
              "name" : "Patient",
              "annotation" : [ ]
            }
          }, {
            "type" : "DateTime",
            "localId" : "377",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ],
            "signature" : [ ],
            "year" : {
              "type" : "Literal",
              "localId" : "378",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2024",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "379",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "380",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "hour" : {
              "type" : "Literal",
              "localId" : "381",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "minute" : {
              "type" : "Literal",
              "localId" : "382",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "second" : {
              "type" : "Literal",
              "localId" : "383",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "millisecond" : {
              "type" : "Literal",
              "localId" : "384",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            },
            "timezoneOffset" : {
              "type" : "Literal",
              "localId" : "385",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "0.0",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "395",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "AgeAtJanuary1DateArg",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "395",
            "s" : [ {
              "value" : [ "", "define ", "AgeAtJanuary1DateArg", ": " ]
            }, {
              "r" : "415",
              "s" : [ {
                "value" : [ "AgeInYearsAt", "(" ]
              }, {
                "r" : "404",
                "s" : [ {
                  "r" : "396",
                  "value" : [ "Date", "(", "2024", ", ", "1", ", ", "1", ")" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "CalculateAgeAt",
          "localId" : "415",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "precision" : "Year",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "416",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "417",
            "name" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "ToDate",
            "localId" : "413",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "414",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Property",
              "localId" : "411",
              "path" : "birthDate",
              "annotation" : [ ],
              "source" : {
                "type" : "ExpressionRef",
                "localId" : "410",
                "name" : "Patient",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "Date",
            "localId" : "404",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "405",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "406",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "407",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "year" : {
              "type" : "Literal",
              "localId" : "396",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2024",
              "annotation" : [ ]
            },
            "month" : {
              "type" : "Literal",
              "localId" : "397",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "day" : {
              "type" : "Literal",
              "localId" : "398",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

