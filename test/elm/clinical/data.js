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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
define function ListInVS(vs ValueSet): { '2618002', '12345' } in vs
define ListInPassedVS: ListInVS("Major Depressive Disorder Active")
define ListInWrongVS: ListInVS("Male")
define ListInNullVS: ListInVS(null as ValueSet)
*/

module.exports['AnyInValueSet'] = {
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
            "r" : "258",
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
               "name" : "SNOMED"
            }
         }, {
            "localId" : "212",
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
               "name" : "SNOMED"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "214",
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
               "name" : "ChronicRecurrentDepression"
            }, {
               "localId" : "216",
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
                     "r" : "226",
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
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "223",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "224",
                     "name" : "Depression Concept",
                     "type" : "ConceptRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "225",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "228",
            "name" : "AnyInListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodes",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "\"ChronicRecurrentDepression\"" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "\"ModerateMajorDepression\"" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "229",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "230",
                     "name" : "ChronicRecurrentDepression",
                     "type" : "CodeRef"
                  }, {
                     "localId" : "231",
                     "name" : "ModerateMajorDepression",
                     "type" : "CodeRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "232",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "235",
            "name" : "AnyInListOfStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfStrings",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "'2618002'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "value" : [ "'12345'" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "236",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valueset" : {
                  "localId" : "239",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "241",
            "name" : "ListInVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define function ListInVS(vs ValueSet): " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "248",
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
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "vs" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "244",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valuesetExpression" : {
                  "localId" : "247",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "243",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "250",
            "name" : "ListInPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","ListInPassedVS",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "251",
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
               "localId" : "252",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "251",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "254",
            "name" : "ListInWrongVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ListInWrongVS",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "255",
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
               "localId" : "256",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "255",
                  "name" : "Male",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "258",
            "name" : "ListInNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","ListInNullVS",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "value" : [ "ListInVS","(" ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "261",
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
               "localId" : "262",
               "name" : "ListInVS",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "259",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "260",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "261",
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
define InListOfCodes: { Code { code: 'M' } , Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } } in "Female"
define ListOfCodes: { Code { code: 'M' } , Code { code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5' } }
define WrongListOfCodes: { Code { code: 'M' }, Code { code: 'F', system: '3.16.840.1.113883.18.2' } }
define InListOfCodesExpressionRef: ListOfCodes in "Female"
define InWrongListOfCodes: WrongListOfCodes in "Female"
define ListOfCodesWithNull: { Code { code: 'M' }, (null as Code), Code { code: 'F', system: '2.16.840.1.113883.18.2' } } in "Female"
define ListOfCodesNull: (null as List<Code>) in "Female"
define function FInVS(vs ValueSet): 'F' in vs
define FInPassedVS: FInVS("Female")
define FInWrongVS: FInVS("Male")
define FInNullVS: FInVS(null as ValueSet)
*/

module.exports['InValueSet'] = {
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
            "r" : "391",
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
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "218",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "219",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "222",
            "name" : "SharedCodesFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesFoo",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "\"SharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "224",
                  "name" : "SharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "227",
            "name" : "SharedCodesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesNoMatch",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'baz'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "\"SharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "baz",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "229",
                  "name" : "SharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "232",
            "name" : "ImproperSharedCodesCodeValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","ImproperSharedCodesCodeValue",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "'codeValue'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "\"ImproperSharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "codeValue",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "234",
                  "name" : "ImproperSharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "237",
            "name" : "StringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","StringInVersionedValueSet",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "238",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "239",
                  "name" : "Versioned Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "242",
            "name" : "ShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","ShortCode",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "245",
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
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "243",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "245",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "246",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "249",
            "name" : "MediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","MediumCode",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "252",
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
                              "r" : "253",
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
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "250",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "252",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "253",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "254",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "257",
            "name" : "LongCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","LongCode",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "260",
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
                              "r" : "261",
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
                              "r" : "262",
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
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "258",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "260",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "261",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "262",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "263",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "266",
            "name" : "WrongString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","WrongString",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "267",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "268",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "271",
            "name" : "WrongStringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","WrongStringInVersionedValueSet",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "272",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "273",
                  "name" : "Versioned Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "276",
            "name" : "WrongShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","WrongShortCode",": " ]
                  }, {
                     "r" : "281",
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
                                 "value" : [ "'M'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "281",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "277",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "279",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "280",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "283",
            "name" : "WrongMediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","WrongMediumCode",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "286",
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
                              "r" : "287",
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
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "284",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "286",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "287",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "288",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "291",
            "name" : "LongCodeDifferentVersion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","LongCodeDifferentVersion",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "294",
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
                              "r" : "295",
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
                              "r" : "296",
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
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "292",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "294",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "295",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "297",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "300",
            "name" : "NullCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","NullCode",": " ]
                  }, {
                     "r" : "308",
                     "s" : [ {
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "r" : "303",
                              "value" : [ "code",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "305",
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
                              "r" : "306",
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
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "308",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "301",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "304",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "303",
                           "type" : "Null"
                        }
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "306",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "307",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "310",
            "name" : "InListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "310",
                  "s" : [ {
                     "value" : [ "","define ","InListOfCodes",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "314",
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
                           "r" : "315",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "317",
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
                                    "value" : [ "'HL7V2.5'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
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
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "311",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "312",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "314",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "315",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "317",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "318",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "319",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "valueset" : {
                  "localId" : "320",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "323",
            "name" : "ListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "323",
                  "s" : [ {
                     "value" : [ "","define ","ListOfCodes",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "327",
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
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "330",
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
                              "r" : "331",
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
                              "r" : "332",
                              "s" : [ {
                                 "value" : [ "'HL7V2.5'" ]
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
            "expression" : {
               "localId" : "324",
               "type" : "List",
               "element" : [ {
                  "localId" : "325",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "327",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "328",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "330",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "331",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "332",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "334",
            "name" : "WrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","WrongListOfCodes",": " ]
                  }, {
                     "r" : "335",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "338",
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
                        "r" : "339",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "341",
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
                              "r" : "342",
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
            "expression" : {
               "localId" : "335",
               "type" : "List",
               "element" : [ {
                  "localId" : "336",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "338",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "339",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "341",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "342",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "344",
            "name" : "InListOfCodesExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "344",
                  "s" : [ {
                     "value" : [ "","define ","InListOfCodesExpressionRef",": " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "r" : "345",
                        "s" : [ {
                           "value" : [ "ListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "347",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "345",
                  "name" : "ListOfCodes",
                  "type" : "ExpressionRef"
               },
               "valueset" : {
                  "localId" : "346",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "349",
            "name" : "InWrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","InWrongListOfCodes",": " ]
                  }, {
                     "r" : "352",
                     "s" : [ {
                        "r" : "350",
                        "s" : [ {
                           "value" : [ "WrongListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "351",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "352",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "350",
                  "name" : "WrongListOfCodes",
                  "type" : "ExpressionRef"
               },
               "valueset" : {
                  "localId" : "351",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "354",
            "name" : "ListOfCodesWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "354",
                  "s" : [ {
                     "value" : [ "","define ","ListOfCodesWithNull",": " ]
                  }, {
                     "r" : "367",
                     "s" : [ {
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "356",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "358",
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
                           "r" : "359",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "359",
                              "s" : [ {
                                 "r" : "360",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "361",
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
                           "r" : "362",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "364",
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
                                 "r" : "365",
                                 "s" : [ {
                                    "value" : [ "'2.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "366",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "367",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "355",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "356",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "358",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "359",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "360",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "361",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "362",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "364",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "365",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "valueset" : {
                  "localId" : "366",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "369",
            "name" : "ListOfCodesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "369",
                  "s" : [ {
                     "value" : [ "","define ","ListOfCodesNull",": " ]
                  }, {
                     "r" : "375",
                     "s" : [ {
                        "r" : "370",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "370",
                           "s" : [ {
                              "r" : "371",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "372",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "373",
                                 "s" : [ {
                                    "value" : [ "Code" ]
                                 } ]
                              }, {
                                 "value" : [ ">" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "375",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "370",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "371",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "372",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "373",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "374",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "376",
            "name" : "FInVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "376",
                  "s" : [ {
                     "value" : [ "","define function FInVS(vs ValueSet): " ]
                  }, {
                     "r" : "381",
                     "s" : [ {
                        "r" : "381",
                        "s" : [ {
                           "r" : "379",
                           "s" : [ {
                              "value" : [ "'F'" ]
                           } ]
                        }, {
                           "value" : [ " in " ]
                        }, {
                           "r" : "380",
                           "s" : [ {
                              "value" : [ "vs" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "381",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "379",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valuesetExpression" : {
                  "localId" : "380",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "378",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "377",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "383",
            "name" : "FInPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "383",
                  "s" : [ {
                     "value" : [ "","define ","FInPassedVS",": " ]
                  }, {
                     "r" : "385",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "384",
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
               "localId" : "385",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "384",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "387",
            "name" : "FInWrongVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "387",
                  "s" : [ {
                     "value" : [ "","define ","FInWrongVS",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "388",
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
               "localId" : "389",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "388",
                  "name" : "Male",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "391",
            "name" : "FInNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "391",
                  "s" : [ {
                     "value" : [ "","define ","FInNullVS",": " ]
                  }, {
                     "r" : "395",
                     "s" : [ {
                        "value" : [ "FInVS","(" ]
                     }, {
                        "r" : "392",
                        "s" : [ {
                           "r" : "393",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "394",
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
               "localId" : "395",
               "name" : "FInVS",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "392",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "393",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "394",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "272",
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
                     "r" : "218",
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
            "expression" : {
               "localId" : "218",
               "type" : "ExpandValueSet",
               "signature" : [ ],
               "operand" : {
                  "localId" : "215",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "220",
            "name" : "ExpandKnown",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","ExpandKnown",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "ExpandValueSet","(" ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "\"Known\"" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "ExpandValueSet",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "name" : "Known",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }
            }
         }, {
            "localId" : "226",
            "name" : "ExpandNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","ExpandNull",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "ExpandValueSet","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "ExpandValueSet",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "asType" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "234",
            "name" : "InvokeExpandWithUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","InvokeExpandWithUnion",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     }, {
                        "value" : [ " union  " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "\"Known\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "type" : "ExpandValueSet",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "235",
                     "name" : "Female",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               }, {
                  "localId" : "241",
                  "type" : "ExpandValueSet",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "236",
                     "name" : "Known",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "ExpandVSHelper",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define function ExpandVSHelper(vs ValueSet): " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "ExpandValueSet","(" ]
                        }, {
                           "r" : "245",
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
            "expression" : {
               "localId" : "248",
               "type" : "ExpandValueSet",
               "signature" : [ ],
               "operand" : {
                  "localId" : "245",
                  "name" : "vs",
                  "type" : "OperandRef"
               }
            },
            "operand" : [ {
               "localId" : "244",
               "name" : "vs",
               "operandTypeSpecifier" : {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "250",
            "name" : "ExpandPassedVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","ExpandPassedVS",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "ExpandVSHelper","(" ]
                     }, {
                        "r" : "251",
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
               "localId" : "252",
               "name" : "ExpandVSHelper",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "251",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               } ]
            }
         }, {
            "localId" : "254",
            "name" : "ExpandNullVS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ExpandNullVS",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "ExpandVSHelper","(" ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "r" : "256",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "257",
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
               "localId" : "258",
               "name" : "ExpandVSHelper",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "255",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "256",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "257",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "UnionVSs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define function UnionVSs(vs1 ValueSet, vs2 ValueSet): " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "vs1" ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "value" : [ "vs2" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "268",
                  "type" : "ExpandValueSet",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "264",
                     "name" : "vs1",
                     "type" : "OperandRef"
                  }
               }, {
                  "localId" : "270",
                  "type" : "ExpandValueSet",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "265",
                     "name" : "vs2",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "261",
               "name" : "vs1",
               "operandTypeSpecifier" : {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "263",
               "name" : "vs2",
               "operandTypeSpecifier" : {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "272",
            "name" : "ExpandPassedWithUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","ExpandPassedWithUnion",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "UnionVSs","(" ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "\"Known\"" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "275",
               "name" : "UnionVSs",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "273",
                  "name" : "Female",
                  "preserve" : true,
                  "type" : "ValueSetRef"
               }, {
                  "localId" : "274",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "215",
                  "path" : "gender",
                  "type" : "Property",
                  "source" : {
                     "localId" : "214",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               },
               "valueset" : {
                  "localId" : "216",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "210",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
               "name" : "LOINC"
            }
         } ]
      },
      "concepts" : {
         "def" : [ {
            "localId" : "210",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "258",
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
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ ],
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
            "localId" : "221",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "224",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "230",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "240",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "244",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "247",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ ],
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "258",
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
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ ],
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
            "localId" : "221",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "224",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "230",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "240",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "244",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "247",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ ],
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "258",
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
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ ],
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
            "localId" : "221",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "224",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "230",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "240",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "244",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "247",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ ],
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "258",
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
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ ],
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
            "localId" : "221",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "224",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "230",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "240",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "244",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "247",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ ],
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "258",
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
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ ],
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
            "localId" : "221",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "224",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "230",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "240",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "244",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "247",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ ],
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "258",
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
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "AgeInYears","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "precision" : "Year",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "ToDate",
                  "signature" : [ ],
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
            "localId" : "221",
            "name" : "Months",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Months",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AgeInMonths","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "precision" : "Month",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "224",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }
            }
         }, {
            "localId" : "230",
            "name" : "Weeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Weeks",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AgeInWeeks","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "precision" : "Week",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "Days",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","Days",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "AgeInDays","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "precision" : "Day",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "240",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "244",
            "name" : "Hours",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Hours",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "AgeInHours","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "precision" : "Hour",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "247",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "251",
            "name" : "Minutes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","Minutes",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "AgeInMinutes","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "precision" : "Minute",
               "type" : "CalculateAge",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "254",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "name" : "Seconds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","Seconds",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "AgeInSeconds","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "precision" : "Second",
               "type" : "CalculateAge",
               "signature" : [ ],
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "333",
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
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "216",
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
               "localId" : "221",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "219",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "216",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "213",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "AgeAt19810216",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt19810216",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "DateTime","(","1981",", ","2",", ","16",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "232",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "229",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1981",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "AgeAt1975",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","AgeAt1975",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "r" : "237",
                           "value" : [ "DateTime","(","1975",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "244",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "243",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "240",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1975",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "247",
            "name" : "AgeInYearsDateTimeArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","AgeInYearsDateTimeArg",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "r" : "248",
                           "value" : [ "DateTime","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "257",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "256",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "253",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "260",
            "name" : "CalculateAgeInYearsDateTimeArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","CalculateAgeInYearsDateTimeArg",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "261",
                        "value" : [ "CalculateAgeInYearsAt","(","@1994-12-01T23:59:00.000+00:00",", " ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "DateTime","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "261",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1994",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "267",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "268",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "275",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "280",
            "name" : "AgeInYearsDateArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","AgeInYearsDateArg",": " ]
                  }, {
                     "r" : "293",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "286",
                        "s" : [ {
                           "r" : "281",
                           "value" : [ "Date","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "293",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "292",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "290",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "289",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "localId" : "286",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "295",
            "name" : "CalculateAgeInYearsDateArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","CalculateAgeInYearsDateArg",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "r" : "296",
                        "value" : [ "CalculateAgeInYearsAt","(","@1994-12-01T23:59:00.000+00:00",", " ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "Date","(","2012",", ","12",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "296",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "297",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1994",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "298",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "299",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "300",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "301",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "59",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "302",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "303",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "315",
                  "type" : "ToDateTime",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "310",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "306",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "307",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "317",
            "name" : "AgeAtJanuary1DateTimeArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","AgeAtJanuary1DateTimeArg",": " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "r" : "318",
                        "value" : [ "AgeInYearsAt","(","@2024-01-01T00:00:00.000+00:00",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "331",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "330",
                  "path" : "birthDate",
                  "type" : "Property",
                  "source" : {
                     "localId" : "329",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }, {
                  "localId" : "318",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2024",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "321",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "322",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "323",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "0.0",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "333",
            "name" : "AgeAtJanuary1DateArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","AgeAtJanuary1DateArg",": " ]
                  }, {
                     "r" : "346",
                     "s" : [ {
                        "value" : [ "AgeInYearsAt","(" ]
                     }, {
                        "r" : "339",
                        "s" : [ {
                           "r" : "334",
                           "value" : [ "Date","(","2024",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "346",
               "precision" : "Year",
               "type" : "CalculateAgeAt",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "345",
                  "type" : "ToDate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "343",
                     "path" : "birthDate",
                     "type" : "Property",
                     "source" : {
                        "localId" : "342",
                        "name" : "Patient",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "localId" : "339",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "334",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2024",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "336",
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

