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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "225",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"CS4VS\"",": ","'http://loinc.org'"," version ","'2'" ]
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
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Known\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Unknown One Arg\"",": ","'1.2.3.4.5.6.7.8.9'" ]
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
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Unknown Two Arg\"",": ","'1.2.3.4.5.6.7.8.9'"," version ","'1'" ]
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
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Unknown Three Arg\"",": ","'1.2.3.4.5.6.7.8.9'"," version ","'1'"," codesystems { " ]
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
               "name" : "CS4VS"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "222",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "220",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "221",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","ResolveValueSet",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "\"Unknown Three Arg\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
               "name" : "Unknown Three Arg",
               "preserve" : true,
               "type" : "ValueSetRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "216",
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
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1001",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Acute Pharyngitis\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1001'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "212",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "210",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "\"Acute Pharyngitis\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
               "name" : "Acute Pharyngitis",
               "preserve" : true,
               "type" : "ValueSetRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "410",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "214",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMED",
            "id" : "http://snomed.info/sct",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'http://snomed.info/sct'" ]
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
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Major Depressive Disorder Active\"",": ","'2.16.840.1.113883.3.526.3.1491'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Male\"",": ","'2.16.840.1.113883.3.560.100.1'" ]
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
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","valueset ","\"UnknownAny\"",": ","'1.2.3.4.5.6.7.8.9'" ]
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
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","code ","\"ChronicRecurrentDepression\"",": ","'2618002'"," from " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Chronic recurrent major depressive disorder (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
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
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","code ","\"ModerateMajorDepression\"",": ","'832007'"," from " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Moderate major depression (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
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
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","concept ","\"Depression Concept\"",": { " ]
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
                     "value" : [ " } display ","'Depression Concept'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "ChronicRecurrentDepression"
            }, {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "ModerateMajorDepression"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "228",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "226",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "227",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfConcepts",": " ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "238",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "239",
                     "name" : "{urn:hl7-org:elm-types:r1}Concept",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "232",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "234",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "235",
                        "name" : "{urn:hl7-org:elm-types:r1}Concept",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                     "name" : "Depression Concept",
                     "type" : "ConceptRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodes",": " ]
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
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "250",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "243",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "246",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "247",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "ChronicRecurrentDepression",
                     "type" : "CodeRef"
                  }, {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "ModerateMajorDepression",
                     "type" : "CodeRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
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
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfStrings",": " ]
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
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "264",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "255",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "260",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valueset" : {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
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
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","AnyInNullList",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "null"," as " ]
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
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "279",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "269",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "275",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "276",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "273",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "274",
                           "name" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "272",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
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
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","AnyInNullListNullVs",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "r" : "285",
                           "value" : [ "null"," as " ]
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
                           "value" : [ "null"," as " ]
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
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "296",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "codes" : {
                  "localId" : "284",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "290",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "291",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "286",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "288",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "289",
                           "name" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "287",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valuesetExpression" : {
                  "localId" : "292",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodesWithNull",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "303",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
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
                                 "value" : [ "null"," as " ]
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
               "localId" : "314",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "315",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "302",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "311",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "312",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "305",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "308",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "309",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "310",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "ChronicRecurrentDepression",
                     "type" : "CodeRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
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
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","AnyInUnknown",": " ]
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
               "localId" : "325",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "326",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Concept",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "320",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "322",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "323",
                        "name" : "{urn:hl7-org:elm-types:r1}Concept",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                     "name" : "Depression Concept",
                     "type" : "ConceptRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "324",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "UnknownAny",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "330",
            "name" : "ListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "// expression data\n","define ","ListOfCodes",": " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
               "localId" : "339",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "331",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "337",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "338",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "334",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "ChronicRecurrentDepression",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "localId" : "343",
            "name" : "WrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "343",
                  "s" : [ {
                     "value" : [ "","define ","WrongListOfCodes",": " ]
                  }, {
                     "r" : "344",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "345",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
                              "value" : [ "system",": " ]
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
               "localId" : "357",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "358",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "344",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "355",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "356",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "351",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "353",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "361",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodesExpressionRef",": " ]
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
               "localId" : "366",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "367",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "368",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "362",
                  "name" : "ListOfCodes",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "363",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "364",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "365",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
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
               "s" : {
                  "r" : "371",
                  "s" : [ {
                     "value" : [ "","define ","AnyInWrongListOfCodes",": " ]
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
               "localId" : "376",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "377",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "378",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "372",
                  "name" : "WrongListOfCodes",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "373",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "374",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "375",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "379",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListInVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "379",
                  "s" : [ {
                     "value" : [ "// function data\n","define function ListInVS(vs ValueSet): " ]
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
               "localId" : "392",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "393",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "394",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "395",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "codes" : {
                  "localId" : "384",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "389",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "390",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "385",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valuesetExpression" : {
                  "localId" : "391",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "381",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "380",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "398",
                  "s" : [ {
                     "value" : [ "","define ","ListInPassedVS",": " ]
                  }, {
                     "r" : "400",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
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
               "localId" : "400",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "401",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "399",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true,
                  "type" : "ValueSetRef"
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
               "s" : {
                  "r" : "404",
                  "s" : [ {
                     "value" : [ "","define ","ListInWrongVS",": " ]
                  }, {
                     "r" : "406",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
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
               "localId" : "406",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "405",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Male",
                  "preserve" : true,
                  "type" : "ValueSetRef"
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
               "s" : {
                  "r" : "410",
                  "s" : [ {
                     "value" : [ "","define ","ListInNullVS",": " ]
                  }, {
                     "r" : "414",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "411",
                        "s" : [ {
                           "r" : "412",
                           "value" : [ "null"," as " ]
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
               "localId" : "414",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "415",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "411",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "412",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "413",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "420",
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
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Female\"",": ","'2.16.840.1.113883.3.560.100.2'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Male\"",": ","'2.16.840.1.113883.3.560.100.1'" ]
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
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Versioned Female\"",": ","'2.16.840.1.113883.3.560.100.2'"," version ","'20121025'" ]
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","valueset ","\"SharedCodes\"",": ","'2.16.840.1.113883.3.000.000.0'" ]
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
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","valueset ","\"ImproperSharedCodes\"",": ","'2.16.840.1.113883.3.000.000.1'" ]
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
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","valueset ","\"UnknownIn\"",": ","'1.2.3.4.5.6.7.8.9'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "223",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "221",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "222",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","String",": " ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesFoo",": " ]
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
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "SharedCodes",
                  "preserve" : true
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesNoMatch",": " ]
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
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "baz",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "SharedCodes",
                  "preserve" : true
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
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","ImproperSharedCodesCodeValue",": " ]
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
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "codeValue",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "ImproperSharedCodes",
                  "preserve" : true
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
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","StringInVersionedValueSet",": " ]
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
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Versioned Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","ShortCode",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "269",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","MediumCode",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
                              "value" : [ "system",": " ]
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
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "279",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "281",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","LongCode",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
                              "value" : [ "system",": " ]
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
                              "value" : [ "version",": " ]
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
               "localId" : "298",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "291",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "293",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "295",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","WrongString",": " ]
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
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "310",
                  "s" : [ {
                     "value" : [ "","define ","WrongStringInVersionedValueSet",": " ]
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
               "localId" : "314",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "315",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "311",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Versioned Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","WrongShortCode",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "325",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "321",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","WrongMediumCode",": " ]
                  }, {
                     "r" : "336",
                     "s" : [ {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
                              "value" : [ "system",": " ]
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
               "localId" : "336",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "329",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "331",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "333",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "335",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "340",
                  "s" : [ {
                     "value" : [ "","define ","LongCodeDifferentVersion",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "341",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
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
                              "value" : [ "system",": " ]
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
                              "value" : [ "version",": " ]
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
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "351",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "341",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "343",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "345",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "354",
                  "s" : [ {
                     "value" : [ "","define ","NullCode",": " ]
                  }, {
                     "r" : "364",
                     "s" : [ {
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "r" : "357",
                              "value" : [ "code",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
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
                              "value" : [ "version",": " ]
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
               "localId" : "364",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "365",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "358",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "357",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "359",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "361",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "368",
                  "s" : [ {
                     "value" : [ "","define ","NullCastAsCode",": " ]
                  }, {
                     "r" : "373",
                     "s" : [ {
                        "r" : "369",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "null"," as " ]
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
               "localId" : "373",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "374",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "369",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "valueset" : {
                  "localId" : "372",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
               "s" : {
                  "r" : "377",
                  "s" : [ {
                     "value" : [ "","define ","NullCastAsCodeWithNullVS",": " ]
                  }, {
                     "r" : "384",
                     "s" : [ {
                        "r" : "378",
                        "s" : [ {
                           "r" : "379",
                           "value" : [ "null"," as " ]
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
                           "value" : [ "null"," as " ]
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
               "localId" : "384",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "385",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "386",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "380",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "valuesetExpression" : {
                  "localId" : "381",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "382",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "383",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "387",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FInVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "387",
                  "s" : [ {
                     "value" : [ "","define function FInVS(vs ValueSet): " ]
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
               "localId" : "395",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "397",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "392",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valuesetExpression" : {
                  "localId" : "394",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "389",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "388",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "400",
                  "s" : [ {
                     "value" : [ "","define ","FInPassedVS",": " ]
                  }, {
                     "r" : "402",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
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
               "localId" : "402",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "403",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "401",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
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
               "s" : {
                  "r" : "406",
                  "s" : [ {
                     "value" : [ "","define ","FInWrongVS",": " ]
                  }, {
                     "r" : "408",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
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
               "localId" : "408",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "409",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "407",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Male",
                  "preserve" : true,
                  "type" : "ValueSetRef"
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
               "s" : {
                  "r" : "412",
                  "s" : [ {
                     "value" : [ "","define ","FInNullVS",": " ]
                  }, {
                     "r" : "416",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "413",
                        "s" : [ {
                           "r" : "414",
                           "value" : [ "null"," as " ]
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
               "localId" : "416",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "413",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "414",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "415",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "420",
                  "s" : [ {
                     "value" : [ "","define ","InUnknown",": " ]
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
               "localId" : "424",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "425",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "421",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "423",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "UnknownIn",
                  "preserve" : true
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "359",
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
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Female\"",": ","'2.16.840.1.113883.3.560.100.2'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Known\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
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
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","valueset ","\"UnknownExpand\"",": ","'1.2.3.4.5.6.7.8.9'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "216",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
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
            "name" : "ExpandFemale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","ExpandFemale",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "ExpandValueSet","(" ]
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
               "localId" : "229",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "225",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "227",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "233",
            "name" : "ExpandKnown",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","ExpandKnown",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "value" : [ "ExpandValueSet","(" ]
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
               "localId" : "242",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "238",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "240",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Known",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "246",
            "name" : "ExpandNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","ExpandNull",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "247",
                        "value" : [ "ExpandValueSet","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "257",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "252",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "255",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "253",
                  "asType" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
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
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","InvokeExpandWithUnion",": " ]
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
               "localId" : "277",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "264",
               "type" : "Union",
               "resultTypeSpecifier" : {
                  "localId" : "275",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "271",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "272",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "273",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "274",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "266",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "Female",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               }, {
                  "localId" : "269",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "263",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "Known",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "localId" : "279",
            "name" : "ExpandVSHelper",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define function ExpandVSHelper(vs ValueSet): " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "ExpandValueSet","(" ]
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
               "localId" : "294",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "295",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "288",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "292",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "281",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "298",
            "name" : "ExpandPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","ExpandPassedVS",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "value" : [ "ExpandVSHelper","(" ]
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
               "localId" : "304",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "300",
               "name" : "ExpandVSHelper",
               "type" : "FunctionRef",
               "resultTypeSpecifier" : {
                  "localId" : "302",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "308",
            "name" : "ExpandNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define ","ExpandNullVS",": " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "value" : [ "ExpandVSHelper","(" ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "r" : "310",
                           "value" : [ "null"," as " ]
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
               "localId" : "316",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "312",
               "name" : "ExpandVSHelper",
               "type" : "FunctionRef",
               "resultTypeSpecifier" : {
                  "localId" : "314",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "313",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "310",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "318",
            "name" : "UnionVSs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define function UnionVSs(vs1 ValueSet, vs2 ValueSet): " ]
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
               "localId" : "343",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "344",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "328",
               "type" : "Union",
               "resultTypeSpecifier" : {
                  "localId" : "341",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "335",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "336",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "337",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "338",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "330",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "331",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "326",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "vs1",
                     "type" : "OperandRef"
                  }
               }, {
                  "localId" : "333",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "334",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "327",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "vs2",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "320",
               "name" : "vs1",
               "operandTypeSpecifier" : {
                  "localId" : "319",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "322",
               "name" : "vs2",
               "operandTypeSpecifier" : {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "347",
            "name" : "ExpandPassedWithUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","ExpandPassedWithUnion",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "value" : [ "UnionVSs","(" ]
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
               "localId" : "355",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "356",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "350",
               "name" : "UnionVSs",
               "type" : "FunctionRef",
               "resultTypeSpecifier" : {
                  "localId" : "353",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "354",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "351",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "352",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "348",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }, {
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Known",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "359",
            "name" : "ExpandUnknown",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "359",
                  "s" : [ {
                     "value" : [ "","define ","ExpandUnknown",": " ]
                  }, {
                     "r" : "364",
                     "s" : [ {
                        "value" : [ "ExpandValueSet","(" ]
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
               "localId" : "368",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "369",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "364",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "366",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "367",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "365",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "UnknownExpand",
                  "preserve" : true,
                  "type" : "ValueSetRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "216",
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
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Female\"",": ","'2.16.840.1.113883.3.560.100.2'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "212",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "210",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","IsFemale",": " ]
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "gender",
                  "type" : "Property",
                  "source" : {
                     "localId" : "217",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               },
               "valueset" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "219",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "216",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "215",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "219",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "216",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "215",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code",
               "type" : "CodeRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "221",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
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
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status\"",": { " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code"
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
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "221",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
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
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
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
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status\"",": { " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code"
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
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "Tobacco smoking status",
               "type" : "ConceptRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "216",
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
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"MyCS\"",": ","'http://loinc.org'"," version ","'1'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "212",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "210",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","ResolveMyCS",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "\"MyCS\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "MyCS",
               "type" : "CodeSystemRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "218",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "217",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "229",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "241",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "260",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "259",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "269",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "268",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "278",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "277",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "218",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "217",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "229",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "241",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "260",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "259",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "269",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "268",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "278",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "277",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "218",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "217",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "229",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "241",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "260",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "259",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "269",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "268",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "278",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "277",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "218",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "217",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "229",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "241",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "260",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "259",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "269",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "268",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "278",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "277",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "218",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "217",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "229",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "241",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "260",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "259",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "269",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "268",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "278",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "277",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "218",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "217",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "230",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "229",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "241",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "260",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "259",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "269",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "268",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "278",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "277",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "395",
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
      "contexts" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "209",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "210",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "208",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
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
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt2012",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "224",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "223",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt19810216",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "231",
                           "value" : [ "DateTime","(","1981",", ","2",", ","16",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "242",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1981",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt1975",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "DateTime","(","1975",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "258",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1975",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","AgeInYearsDateTimeArg",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "DateTime","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "284",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "283",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","CalculateAgeInYearsDateTimeArg",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "291",
                        "value" : [ "CalculateAgeInYearsAt","(","@1994-12-01T23:59:00.000+00:00",", " ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "r" : "300",
                           "value" : [ "DateTime","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "315",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "292",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1994",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "293",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "297",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "298",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "299",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "311",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "319",
                  "s" : [ {
                     "value" : [ "","define ","AgeInYearsDateArg",": " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "328",
                        "s" : [ {
                           "r" : "320",
                           "value" : [ "Date","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "339",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "341",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "338",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "335",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "334",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "localId" : "328",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "329",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "331",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "344",
                  "s" : [ {
                     "value" : [ "","define ","CalculateAgeInYearsDateArg",": " ]
                  }, {
                     "r" : "368",
                     "s" : [ {
                        "r" : "345",
                        "value" : [ "CalculateAgeInYearsAt","(","@1994-12-01T23:59:00.000+00:00",", " ]
                     }, {
                        "r" : "362",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Date","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "368",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "346",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1994",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "347",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "351",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "352",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "353",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "370",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "371",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "362",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "363",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "364",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "365",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "354",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "355",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "356",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "376",
                  "s" : [ {
                     "value" : [ "","define ","AgeAtJanuary1DateTimeArg",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "r" : "377",
                        "value" : [ "AgeInYearsAt","(","@2024-01-01T00:00:00.000+00:00",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "390",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "392",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "389",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "388",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "377",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "378",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2024",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "379",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "380",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "381",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "382",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "383",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "385",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
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
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","AgeAtJanuary1DateArg",": " ]
                  }, {
                     "r" : "415",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "404",
                        "s" : [ {
                           "r" : "396",
                           "value" : [ "Date","(","2024",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "415",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "416",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "413",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "414",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "411",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "410",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "localId" : "404",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "407",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2024",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "398",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

