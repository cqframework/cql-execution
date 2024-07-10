/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Literal
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define BoolTrue: true
define BoolFalse: false
define IntOne: 1
define DecimalTenth: 0.1
define StringTrue: 'true'
define DateTimeX: @2012-02-15T12:10:59.456Z
define TimeX: @T12:10:59.456
*/

module.exports['Literal'] = {
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
            "r" : "238",
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
            "name" : "BoolTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","BoolTrue",": ","true" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "name" : "BoolFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","define ","BoolFalse",": ","false" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "IntOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","IntOne",": ","1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "221",
            "name" : "DecimalTenth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "r" : "222",
                     "value" : [ "","define ","DecimalTenth",": ","0.1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "value" : "0.1",
               "type" : "Literal"
            }
         }, {
            "localId" : "224",
            "name" : "StringTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","StringTrue",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "'true'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "227",
            "name" : "DateTimeX",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "r" : "228",
                     "value" : [ "","define ","DateTimeX",": ","@2012-02-15T12:10:59.456Z" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               },
               "hour" : {
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "59",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "456",
                  "type" : "Literal"
               },
               "timezoneOffset" : {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "238",
            "name" : "TimeX",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "r" : "239",
                     "value" : [ "","define ","TimeX",": ","@T12:10:59.456" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "Time",
               "signature" : [ ],
               "hour" : {
                  "localId" : "240",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "59",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "456",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* Escape
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SingleQuote: '\''
define DoubleQuote: '\"'
define Backtick: '\`'
define CarriageReturn: '\r'
define LineFeed: '\n'
define Tab: '\t'
define FormFeed: '\f'
define Backslash: '\\'
define Unicode: '\u0048'
*/

module.exports['Escape'] = {
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
            "r" : "236",
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
            "name" : "SingleQuote",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SingleQuote",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "'\\''" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "'",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "name" : "DoubleQuote",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "value" : [ "","define ","DoubleQuote",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "'\\\"'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\"",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "Backtick",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Backtick",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "'\\`'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "`",
               "type" : "Literal"
            }
         }, {
            "localId" : "221",
            "name" : "CarriageReturn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","CarriageReturn",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "'\\r'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\r",
               "type" : "Literal"
            }
         }, {
            "localId" : "224",
            "name" : "LineFeed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","LineFeed",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "'\\n'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\n",
               "type" : "Literal"
            }
         }, {
            "localId" : "227",
            "name" : "Tab",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Tab",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "'\\t'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\t",
               "type" : "Literal"
            }
         }, {
            "localId" : "230",
            "name" : "FormFeed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","FormFeed",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "'\\f'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\f",
               "type" : "Literal"
            }
         }, {
            "localId" : "233",
            "name" : "Backslash",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","Backslash",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "'\\\\'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\\",
               "type" : "Literal"
            }
         }, {
            "localId" : "236",
            "name" : "Unicode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","Unicode",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "'\\u0048'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "H",
               "type" : "Literal"
            }
         } ]
      }
   }
}

