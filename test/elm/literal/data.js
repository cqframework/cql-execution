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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "247",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "BoolTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","BoolTrue",": ","true" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "BoolFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","BoolFalse",": ","false" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "r" : "223",
                     "value" : [ "","define ","IntOne",": ","1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalTenth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "r" : "227",
                     "value" : [ "","define ","DecimalTenth",": ","0.1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "value" : "0.1",
               "type" : "Literal"
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "StringTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","StringTrue",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "'true'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeX",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "r" : "236",
                     "value" : [ "","define ","DateTimeX",": ","@2012-02-15T12:10:59.456Z" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "238",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "239",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               },
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
               },
               "timezoneOffset" : {
                  "localId" : "244",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeX",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "r" : "248",
                     "value" : [ "","define ","TimeX",": ","@T12:10:59.456" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Time",
               "signature" : [ ],
               "hour" : {
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "250",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "251",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "59",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "localId" : "252",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "254",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "SingleQuote",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SingleQuote",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "'\\''" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "'",
               "type" : "Literal"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "DoubleQuote",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","DoubleQuote",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "'\\\"'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\"",
               "type" : "Literal"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Backtick",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Backtick",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "'\\`'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "`",
               "type" : "Literal"
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CarriageReturn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","CarriageReturn",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "'\\r'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\r",
               "type" : "Literal"
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "LineFeed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","LineFeed",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "'\\n'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\n",
               "type" : "Literal"
            }
         }, {
            "localId" : "239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Tab",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","Tab",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "'\\t'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\t",
               "type" : "Literal"
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FormFeed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","FormFeed",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "'\\f'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\f",
               "type" : "Literal"
            }
         }, {
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Backslash",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","Backslash",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "'\\\\'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\\",
               "type" : "Literal"
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Unicode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","Unicode",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "'\\u0048'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "H",
               "type" : "Literal"
            }
         } ]
      }
   }
}

