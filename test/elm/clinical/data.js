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
context Patient
define Foo: 'Bar'
*/

module.exports['ValueSetDef'] = {
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
            "r" : "215",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Known",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1061",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Known\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1061'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Unknown One Arg",
            "id" : "1.2.3.4.5.6.7.8.9",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Unknown One Arg\"",": ","'1.2.3.4.5.6.7.8.9'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Unknown Two Arg",
            "id" : "1.2.3.4.5.6.7.8.9",
            "version" : "1",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Unknown Two Arg\"",": ","'1.2.3.4.5.6.7.8.9'"," version ","'1'" ]
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
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "213",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1001",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
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
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "\"Acute Pharyngitis\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "367",
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
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMED",
            "id" : "http://snomed.info/sct",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'http://snomed.info/sct'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Major Depressive Disorder Active",
            "id" : "2.16.840.1.113883.3.526.3.1491",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Major Depressive Disorder Active\"",": ","'2.16.840.1.113883.3.526.3.1491'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Male",
            "id" : "2.16.840.1.113883.3.560.100.1",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Male\"",": ","'2.16.840.1.113883.3.560.100.1'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "ChronicRecurrentDepression",
            "id" : "2618002",
            "display" : "Chronic recurrent major depressive disorder (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","code ","\"ChronicRecurrentDepression\"",": ","'2618002'"," from " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Chronic recurrent major depressive disorder (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "ModerateMajorDepression",
            "id" : "832007",
            "display" : "Moderate major depression (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","code ","\"ModerateMajorDepression\"",": ","'832007'"," from " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Moderate major depression (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "214",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Depression Concept",
            "display" : "Depression Concept",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","concept ","\"Depression Concept\"",": { " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "\"ChronicRecurrentDepression\"" ]
                     } ]
                  }, {
                     "value" : [ ", " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "\"ModerateMajorDepression\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Depression Concept'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "ChronicRecurrentDepression"
            }, {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "ModerateMajorDepression"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "220",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "218",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "219",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "217",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInListOfConcepts",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfConcepts",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "\"Depression Concept\"" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "229",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Concept",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "223",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "225",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "226",
                        "name" : "{urn:hl7-org:elm-types:r1}Concept",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                     "name" : "Depression Concept",
                     "type" : "ConceptRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodes",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "\"ChronicRecurrentDepression\"" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "\"ModerateMajorDepression\"" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "240",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "233",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "236",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "ChronicRecurrentDepression",
                     "type" : "CodeRef"
                  }, {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "ModerateMajorDepression",
                     "type" : "CodeRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInListOfStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfStrings",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "'2618002'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "'12345'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "251",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "244",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "247",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valueset" : {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInNullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","AnyInNullList",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "r" : "256",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "258",
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
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "265",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "255",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "261",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "262",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "257",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "259",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "260",
                           "name" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "258",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInNullListNullVs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","AnyInNullListNullVs",": " ]
                  }, {
                     "r" : "280",
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
                           "r" : "278",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "ValueSet" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "281",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
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
               "valuesetExpression" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "278",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "279",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInListOfCodesWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodesWithNull",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "289",
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
                           "r" : "290",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "290",
                              "s" : [ {
                                 "r" : "291",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "292",
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
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "\"ChronicRecurrentDepression\"" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "298",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "299",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "286",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "294",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "295",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "289",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "291",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "292",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "ChronicRecurrentDepression",
                     "type" : "CodeRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "301",
            "name" : "ListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "// expression data\n","define ","ListOfCodes",": " ]
                  }, {
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
                        "value" : [ " , " ]
                     }, {
                        "r" : "306",
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
               "localId" : "309",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "302",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "307",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "308",
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
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "ChronicRecurrentDepression",
                  "type" : "CodeRef"
               } ]
            }
         }, {
            "localId" : "312",
            "name" : "WrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","WrongListOfCodes",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "316",
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
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "319",
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
                              "r" : "320",
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
               "localId" : "323",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "324",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "313",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "321",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "314",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "316",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "319",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "320",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInListOfCodesExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "326",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodesExpressionRef",": " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "ListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "330",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "331",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "332",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "333",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "327",
                  "name" : "ListOfCodes",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "328",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "329",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "330",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "335",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "AnyInWrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "335",
                  "s" : [ {
                     "value" : [ "","define ","AnyInWrongListOfCodes",": " ]
                  }, {
                     "r" : "340",
                     "s" : [ {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "WrongListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "339",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "340",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "341",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "codes" : {
                  "localId" : "336",
                  "name" : "WrongListOfCodes",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "337",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "338",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "339",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListInVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "343",
                  "s" : [ {
                     "value" : [ "// function data\n","define function ListInVS(vs ValueSet): " ]
                  }, {
                     "r" : "352",
                     "s" : [ {
                        "r" : "352",
                        "s" : [ {
                           "r" : "346",
                           "s" : [ {
                              "value" : [ "{ " ]
                           }, {
                              "r" : "347",
                              "s" : [ {
                                 "value" : [ "'2618002'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "348",
                              "s" : [ {
                                 "value" : [ "'12345'" ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " in " ]
                        }, {
                           "r" : "351",
                           "s" : [ {
                              "value" : [ "vs" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "352",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyInValueSet",
               "signature" : [ {
                  "localId" : "353",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "354",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "codes" : {
                  "localId" : "346",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "349",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "350",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valuesetExpression" : {
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "345",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "344",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "357",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListInPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","ListInPassedVS",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "358",
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
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "358",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "362",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListInWrongVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","ListInWrongVS",": " ]
                  }, {
                     "r" : "364",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "363",
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
               "localId" : "364",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "365",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Male",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "367",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListInNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "367",
                  "s" : [ {
                     "value" : [ "","define ","ListInNullVS",": " ]
                  }, {
                     "r" : "371",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "368",
                        "s" : [ {
                           "r" : "369",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "370",
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
               "localId" : "371",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "368",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "369",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "370",
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
define function FInVS(vs ValueSet): 'F' in vs
define FInPassedVS: FInVS("Female")
define FInWrongVS: FInVS("Male")
define FInNullVS: FInVS(null as ValueSet)
*/

module.exports['InValueSet'] = {
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
            "r" : "342",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Female\"",": ","'2.16.840.1.113883.3.560.100.2'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Male",
            "id" : "2.16.840.1.113883.3.560.100.1",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Male\"",": ","'2.16.840.1.113883.3.560.100.1'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Versioned Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "version" : "20121025",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Versioned Female\"",": ","'2.16.840.1.113883.3.560.100.2'"," version ","'20121025'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "SharedCodes",
            "id" : "2.16.840.1.113883.3.000.000.0",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","valueset ","\"SharedCodes\"",": ","'2.16.840.1.113883.3.000.000.0'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "ImproperSharedCodes",
            "id" : "2.16.840.1.113883.3.000.000.1",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","valueset ","\"ImproperSharedCodes\"",": ","'2.16.840.1.113883.3.000.000.1'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "214",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "212",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "String",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","String",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "'F'" ]
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
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SharedCodesFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesFoo",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "\"SharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "SharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SharedCodesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesNoMatch",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "'baz'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "\"SharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "baz",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "SharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImproperSharedCodesCodeValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","ImproperSharedCodesCodeValue",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "'codeValue'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "\"ImproperSharedCodes\"" ]
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
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "codeValue",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "ImproperSharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","StringInVersionedValueSet",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Versioned Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","ShortCode",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "250",
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
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "250",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","MediumCode",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "258",
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
                              "r" : "259",
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
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "258",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "259",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LongCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","LongCode",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "267",
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
                              "r" : "268",
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
                              "r" : "269",
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
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "267",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "268",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "269",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WrongString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","WrongString",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WrongStringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","WrongStringInVersionedValueSet",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Versioned Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WrongShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","WrongShortCode",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "289",
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
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "289",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "WrongMediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","WrongMediumCode",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "297",
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
                              "r" : "298",
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
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "297",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "298",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LongCodeDifferentVersion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","LongCodeDifferentVersion",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "306",
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
                              "r" : "307",
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
                              "r" : "308",
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
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "306",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "307",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "308",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","NullCode",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "r" : "316",
                              "value" : [ "code",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "318",
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
                              "r" : "319",
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
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "321",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "314",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "317",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "316",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "318",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "319",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FInVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "323",
                  "s" : [ {
                     "value" : [ "","define function FInVS(vs ValueSet): " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "r" : "328",
                        "s" : [ {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "'F'" ]
                           } ]
                        }, {
                           "value" : [ " in " ]
                        }, {
                           "r" : "327",
                           "s" : [ {
                              "value" : [ "vs" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "328",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "330",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "326",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valuesetExpression" : {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "325",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "324",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "332",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FInPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "332",
                  "s" : [ {
                     "value" : [ "","define ","FInPassedVS",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "333",
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
               "localId" : "334",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "333",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FInWrongVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","FInWrongVS",": " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "338",
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
               "localId" : "339",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "338",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Male",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "342",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FInNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","FInNullVS",": " ]
                  }, {
                     "r" : "346",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "343",
                        "s" : [ {
                           "r" : "344",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "345",
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
               "localId" : "346",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "347",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "344",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "345",
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

/* ExpandValueset
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Female": '2.16.840.1.113883.3.560.100.2'
valueset "Known": '2.16.840.1.113883.3.464.1003.101.12.1061'
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
*/

module.exports['ExpandValueset'] = {
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
            "r" : "330",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Female\"",": ","'2.16.840.1.113883.3.560.100.2'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
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
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "210",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "211",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "209",
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
            "name" : "ExpandFemale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ExpandFemale",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "ExpandValueSet","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "223",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "219",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "221",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "226",
            "name" : "ExpandKnown",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","ExpandKnown",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "ExpandValueSet","(" ]
                     }, {
                        "r" : "227",
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
               "localId" : "235",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "231",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "233",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Known",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "238",
            "name" : "ExpandNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","ExpandNull",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "239",
                        "value" : [ "ExpandValueSet","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "249",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "244",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "247",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "248",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "asType" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "252",
            "name" : "InvokeExpandWithUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","InvokeExpandWithUnion",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     }, {
                        "value" : [ " union  " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "\"Known\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "268",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "255",
               "type" : "Union",
               "resultTypeSpecifier" : {
                  "localId" : "266",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "262",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "264",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "258",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "Female",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               }, {
                  "localId" : "260",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "Known",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "localId" : "270",
            "name" : "ExpandVSHelper",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define function ExpandVSHelper(vs ValueSet): " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "ExpandValueSet","(" ]
                        }, {
                           "r" : "273",
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
               "localId" : "283",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "277",
               "type" : "ExpandValueSet",
               "resultTypeSpecifier" : {
                  "localId" : "281",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "272",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "286",
            "name" : "ExpandPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","ExpandPassedVS",": " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "value" : [ "ExpandVSHelper","(" ]
                     }, {
                        "r" : "287",
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
               "localId" : "292",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "288",
               "name" : "ExpandVSHelper",
               "type" : "FunctionRef",
               "resultTypeSpecifier" : {
                  "localId" : "290",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "295",
            "name" : "ExpandNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","ExpandNullVS",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "value" : [ "ExpandVSHelper","(" ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "r" : "297",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "298",
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
               "localId" : "303",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "299",
               "name" : "ExpandVSHelper",
               "type" : "FunctionRef",
               "resultTypeSpecifier" : {
                  "localId" : "301",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "302",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "305",
            "name" : "UnionVSs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define function UnionVSs(vs1 ValueSet, vs2 ValueSet): " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "r" : "312",
                        "s" : [ {
                           "r" : "310",
                           "s" : [ {
                              "value" : [ "vs1" ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "vs2" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "327",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "328",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "312",
               "type" : "Union",
               "resultTypeSpecifier" : {
                  "localId" : "325",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "326",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "319",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "320",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "321",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "314",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "310",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "vs1",
                     "type" : "OperandRef"
                  }
               }, {
                  "localId" : "317",
                  "type" : "ExpandValueSet",
                  "signature" : [ {
                     "localId" : "318",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "vs2",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "307",
               "name" : "vs1",
               "operandTypeSpecifier" : {
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "309",
               "name" : "vs2",
               "operandTypeSpecifier" : {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "330",
            "name" : "ExpandPassedWithUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "","define ","ExpandPassedWithUnion",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "value" : [ "UnionVSs","(" ]
                     }, {
                        "r" : "331",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "332",
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
               "localId" : "338",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "339",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "333",
               "name" : "UnionVSs",
               "type" : "FunctionRef",
               "resultTypeSpecifier" : {
                  "localId" : "336",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "337",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "334",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "335",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "331",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }, {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "name" : "Known",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "213",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
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
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFemale",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","IsFemale",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "215",
                        "s" : [ {
                           "r" : "214",
                           "s" : [ {
                              "value" : [ "Patient" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "gender" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "InValueSet",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "code" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "gender",
                  "type" : "Property",
                  "source" : {
                     "localId" : "214",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               },
               "valueset" : {
                  "localId" : "216",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "215",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
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
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "215",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
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
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "217",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status\"",": { " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "214",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "212",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "217",
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
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "LOINC",
            "id" : "http://loinc.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"LOINC\"",": ","'http://loinc.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Tobacco smoking status code",
            "id" : "72166-2",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","code ","\"Tobacco smoking status code\"",": ","'72166-2'"," from " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "\"LOINC\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Tobacco smoking status",
            "display" : "Tobacco smoking status",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","concept ","\"Tobacco smoking status\"",": { " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status code\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Tobacco smoking status'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "Tobacco smoking status code"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "214",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "212",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "\"Tobacco smoking status\"" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "Tobacco smoking status",
               "type" : "ConceptRef"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "215",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "227",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "226",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "237",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "253",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "270",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "269",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "215",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "227",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "226",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "237",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "253",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "270",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "269",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "215",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "227",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "226",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "237",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "253",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "270",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "269",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "215",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "227",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "226",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "237",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "253",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "270",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "269",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "215",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "227",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "226",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "237",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "253",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "270",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "269",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Years",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Years",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "216",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "215",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "227",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "226",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "237",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "245",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "253",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "261",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "270",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "269",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "385",
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
            "localId" : "210",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "208",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "209",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "207",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeAt2012",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt2012",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "213",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "222",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "221",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeAt19810216",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt19810216",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "DateTime","(","1981",", ","2",", ","16",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "242",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "239",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1981",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeAt1975",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt1975",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "DateTime","(","1975",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "258",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "257",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1975",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeInYearsDateTimeArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","AgeInYearsDateTimeArg",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "DateTime","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "278",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "273",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "274",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "275",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "264",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "265",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "266",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CalculateAgeInYearsDateTimeArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","CalculateAgeInYearsDateTimeArg",": " ]
                  }, {
                     "r" : "308",
                     "s" : [ {
                        "r" : "285",
                        "value" : [ "CalculateAgeInYearsAt","(","@1994-12-01T23:59:00.000+00:00",", " ]
                     }, {
                        "r" : "302",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "DateTime","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "308",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "309",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "286",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1994",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "287",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "289",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "290",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "291",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "292",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "293",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "304",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "305",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeInYearsDateArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","AgeInYearsDateArg",": " ]
                  }, {
                     "r" : "332",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "321",
                        "s" : [ {
                           "r" : "313",
                           "value" : [ "Date","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "332",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "333",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "334",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "330",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "331",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "328",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "327",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "324",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CalculateAgeInYearsDateArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","CalculateAgeInYearsDateArg",": " ]
                  }, {
                     "r" : "360",
                     "s" : [ {
                        "r" : "337",
                        "value" : [ "CalculateAgeInYearsAt","(","@1994-12-01T23:59:00.000+00:00",", " ]
                     }, {
                        "r" : "354",
                        "s" : [ {
                           "r" : "346",
                           "value" : [ "Date","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "360",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "364",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "365",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "338",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1994",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "342",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "343",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "344",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "345",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "362",
                  "type" : "ToDateTime",
                  "signature" : [ {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "354",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ {
                        "localId" : "355",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "356",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "357",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "346",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "348",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "367",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeAtJanuary1DateTimeArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "367",
                  "s" : [ {
                     "value" : [ "","define ","AgeAtJanuary1DateTimeArg",": " ]
                  }, {
                     "r" : "381",
                     "s" : [ {
                        "r" : "368",
                        "value" : [ "AgeInYearsAt","(","@2024-01-01T00:00:00.000+00:00",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "381",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "382",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "383",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "380",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "379",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "368",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2024",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "372",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "373",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "374",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "375",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "376",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "385",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AgeAtJanuary1DateArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "385",
                  "s" : [ {
                     "value" : [ "","define ","AgeAtJanuary1DateArg",": " ]
                  }, {
                     "r" : "405",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "394",
                        "s" : [ {
                           "r" : "386",
                           "value" : [ "Date","(","2024",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "405",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ {
                  "localId" : "406",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "403",
                  "type" : "ToDate",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "401",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "400",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "localId" : "394",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "395",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "397",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "386",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2024",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "388",
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

