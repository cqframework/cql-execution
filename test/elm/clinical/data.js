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
codesystem "SNOMED": 'http://snomed.info/sct'
code "ChronicRecurrentDepression": '2618002' from "SNOMED" display 'Chronic recurrent major depressive disorder (disorder)'
code "ModerateMajorDepression": '832007' from "SNOMED" display 'Moderate major depression (disorder)'
concept "Depression Concept": { "ChronicRecurrentDepression", "ModerateMajorDepression" } display 'Depression Concept'
context Patient
define AnyInListOfConcepts: { "Depression Concept" } in "Major Depressive Disorder Active"
define AnyInListOfCodes: { "ChronicRecurrentDepression", "ModerateMajorDepression" } in "Major Depressive Disorder Active"
define AnyInListOfStrings: { '2618002', '12345' } in "Major Depressive Disorder Active"
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
            "r" : "234",
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
            "name" : "SNOMED",
            "id" : "http://snomed.info/sct",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
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
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "209",
            "name" : "ChronicRecurrentDepression",
            "id" : "2618002",
            "display" : "Chronic recurrent major depressive disorder (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","code ","\"ChronicRecurrentDepression\"",": ","'2618002'"," from " ]
                  }, {
                     "r" : "210",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Chronic recurrent major depressive disorder (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "210",
               "name" : "SNOMED"
            }
         }, {
            "localId" : "211",
            "name" : "ModerateMajorDepression",
            "id" : "832007",
            "display" : "Moderate major depression (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","code ","\"ModerateMajorDepression\"",": ","'832007'"," from " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Moderate major depression (disorder)'" ]
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
            "name" : "Depression Concept",
            "display" : "Depression Concept",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","concept ","\"Depression Concept\"",": { " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "\"ChronicRecurrentDepression\"" ]
                     } ]
                  }, {
                     "value" : [ ", " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "\"ModerateMajorDepression\"" ]
                     } ]
                  }, {
                     "value" : [ " } display ","'Depression Concept'" ]
                  } ]
               }
            } ],
            "code" : [ {
               "localId" : "214",
               "name" : "ChronicRecurrentDepression"
            }, {
               "localId" : "215",
               "name" : "ModerateMajorDepression"
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "219",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "218",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
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
            "name" : "AnyInListOfConcepts",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfConcepts",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "\"Depression Concept\"" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "222",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "223",
                     "name" : "Depression Concept",
                     "type" : "ConceptRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "224",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "227",
            "name" : "AnyInListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfCodes",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "\"ChronicRecurrentDepression\"" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "\"ModerateMajorDepression\"" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "\"Major Depressive Disorder Active\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "228",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "229",
                     "name" : "ChronicRecurrentDepression",
                     "type" : "CodeRef"
                  }, {
                     "localId" : "230",
                     "name" : "ModerateMajorDepression",
                     "type" : "CodeRef"
                  } ]
               },
               "valueset" : {
                  "localId" : "231",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "234",
            "name" : "AnyInListOfStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","AnyInListOfStrings",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "'2618002'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "'12345'" ]
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
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "235",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2618002",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  } ]
               },
               "valueset" : {
                  "localId" : "238",
                  "name" : "Major Depressive Disorder Active",
                  "preserve" : true
               }
            }
         } ]
      }
   }
}

/* InValueSet
library TestSnippet version '1'
using Simple version '1.0.0'
valueset "Female": '2.16.840.1.113883.3.560.100.2'
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
            "r" : "368",
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
            "name" : "Versioned Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "version" : "20121025",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Versioned Female\"",": ","'2.16.840.1.113883.3.560.100.2'"," version ","'20121025'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "209",
            "name" : "SharedCodes",
            "id" : "2.16.840.1.113883.3.000.000.0",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","valueset ","\"SharedCodes\"",": ","'2.16.840.1.113883.3.000.000.0'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "210",
            "name" : "ImproperSharedCodes",
            "id" : "2.16.840.1.113883.3.000.000.1",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
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
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
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
            "name" : "String",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","String",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "218",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "221",
            "name" : "SharedCodesFoo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesFoo",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "\"SharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "223",
                  "name" : "SharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "226",
            "name" : "SharedCodesNoMatch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","SharedCodesNoMatch",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'baz'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "\"SharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "baz",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "228",
                  "name" : "SharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "231",
            "name" : "ImproperSharedCodesCodeValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","ImproperSharedCodesCodeValue",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "'codeValue'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "\"ImproperSharedCodes\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "codeValue",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "233",
                  "name" : "ImproperSharedCodes",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "236",
            "name" : "StringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","StringInVersionedValueSet",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "238",
                  "name" : "Versioned Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "241",
            "name" : "ShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","ShortCode",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "244",
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
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "242",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "244",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "245",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "248",
            "name" : "MediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","MediumCode",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "251",
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
                              "r" : "252",
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
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "249",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "251",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "252",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "253",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "256",
            "name" : "LongCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","LongCode",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "259",
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
                              "r" : "260",
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
                              "r" : "261",
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
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "257",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "259",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "260",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "261",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "262",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "265",
            "name" : "WrongString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","WrongString",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "266",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "267",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "270",
            "name" : "WrongStringInVersionedValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","WrongStringInVersionedValueSet",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'M'" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "\"Versioned Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "M",
                  "type" : "Literal"
               },
               "valueset" : {
                  "localId" : "272",
                  "name" : "Versioned Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "275",
            "name" : "WrongShortCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","WrongShortCode",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "278",
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
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "276",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "278",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "279",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "282",
            "name" : "WrongMediumCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","WrongMediumCode",": " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "285",
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
                              "r" : "286",
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
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "288",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "283",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "285",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "286",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "287",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "290",
            "name" : "LongCodeDifferentVersion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","LongCodeDifferentVersion",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "293",
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
                              "r" : "294",
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
                                 "value" : [ "'HL7V2.6'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "291",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "293",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "294",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "295",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "296",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "299",
            "name" : "NullCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","NullCode",": " ]
                  }, {
                     "r" : "307",
                     "s" : [ {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "r" : "302",
                              "value" : [ "code",": ","null" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "304",
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
                              "r" : "305",
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
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "307",
               "type" : "InValueSet",
               "signature" : [ ],
               "code" : {
                  "localId" : "300",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "303",
                        "asType" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "302",
                           "type" : "Null"
                        }
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "304",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.6",
                        "type" : "Literal"
                     }
                  } ]
               },
               "valueset" : {
                  "localId" : "306",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "309",
            "name" : "InListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","InListOfCodes",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "313",
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
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "316",
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
                                 "r" : "317",
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
                                 "r" : "318",
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
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "320",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "310",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "311",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "313",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "314",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "316",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "317",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "318",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "valueset" : {
                  "localId" : "319",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "322",
            "name" : "ListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "322",
                  "s" : [ {
                     "value" : [ "","define ","ListOfCodes",": " ]
                  }, {
                     "r" : "323",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "324",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "326",
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
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "329",
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
                              "r" : "330",
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
                              "r" : "331",
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
               "localId" : "323",
               "type" : "List",
               "element" : [ {
                  "localId" : "324",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "326",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "327",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "329",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "330",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "331",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "333",
            "name" : "WrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","WrongListOfCodes",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "337",
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
                        "r" : "338",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "340",
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
                              "r" : "341",
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
               "localId" : "334",
               "type" : "List",
               "element" : [ {
                  "localId" : "335",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "337",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "M",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "338",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "340",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "341",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "343",
            "name" : "InListOfCodesExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "343",
                  "s" : [ {
                     "value" : [ "","define ","InListOfCodesExpressionRef",": " ]
                  }, {
                     "r" : "346",
                     "s" : [ {
                        "r" : "344",
                        "s" : [ {
                           "value" : [ "ListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "345",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "346",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "344",
                  "name" : "ListOfCodes",
                  "type" : "ExpressionRef"
               },
               "valueset" : {
                  "localId" : "345",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "348",
            "name" : "InWrongListOfCodes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "348",
                  "s" : [ {
                     "value" : [ "","define ","InWrongListOfCodes",": " ]
                  }, {
                     "r" : "351",
                     "s" : [ {
                        "r" : "349",
                        "s" : [ {
                           "value" : [ "WrongListOfCodes" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "350",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "351",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "349",
                  "name" : "WrongListOfCodes",
                  "type" : "ExpressionRef"
               },
               "valueset" : {
                  "localId" : "350",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "353",
            "name" : "ListOfCodesWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "353",
                  "s" : [ {
                     "value" : [ "","define ","ListOfCodesWithNull",": " ]
                  }, {
                     "r" : "366",
                     "s" : [ {
                        "r" : "354",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "355",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "357",
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
                           "r" : "358",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "358",
                              "s" : [ {
                                 "r" : "359",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "360",
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
                           "r" : "361",
                           "s" : [ {
                              "value" : [ "Code"," { " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "363",
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
                                 "r" : "364",
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
                        "r" : "365",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "366",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "354",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "355",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "357",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "358",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "359",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "360",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "361",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "363",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "364",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "valueset" : {
                  "localId" : "365",
                  "name" : "Female",
                  "preserve" : true
               }
            }
         }, {
            "localId" : "368",
            "name" : "ListOfCodesNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "368",
                  "s" : [ {
                     "value" : [ "","define ","ListOfCodesNull",": " ]
                  }, {
                     "r" : "374",
                     "s" : [ {
                        "r" : "369",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "369",
                           "s" : [ {
                              "r" : "370",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "371",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "372",
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
                        "r" : "373",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "374",
               "type" : "AnyInValueSet",
               "signature" : [ ],
               "codes" : {
                  "localId" : "369",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "370",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "371",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "372",
                        "name" : "{urn:hl7-org:elm-types:r1}Code",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "valueset" : {
                  "localId" : "373",
                  "name" : "Female",
                  "preserve" : true
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

