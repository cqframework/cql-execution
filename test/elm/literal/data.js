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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "15",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "BoolTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "","define ","BoolTrue",": ","true" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "BoolFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","define ","BoolFalse",": ","false" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
            }
         }, {
            "localId" : "7",
            "name" : "IntOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "r" : "6",
                     "value" : [ "","define ","IntOne",": ","1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "9",
            "name" : "DecimalTenth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "r" : "8",
                     "value" : [ "","define ","DecimalTenth",": ","0.1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "value" : "0.1",
               "type" : "Literal"
            }
         }, {
            "localId" : "11",
            "name" : "StringTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","StringTrue",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "'true'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "13",
            "name" : "DateTimeX",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "r" : "12",
                     "value" : [ "","define ","DateTimeX",": ","@2012-02-15T12:10:59.456Z" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "DateTime",
               "year" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "day" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               },
               "hour" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               },
               "second" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "59",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "456",
                  "type" : "Literal"
               },
               "timezoneOffset" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "TimeX",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "r" : "14",
                     "value" : [ "","define ","TimeX",": ","@T12:10:59.456" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Time",
               "hour" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               },
               "second" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "59",
                  "type" : "Literal"
               },
               "millisecond" : {
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "19",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "SingleQuote",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","define ","SingleQuote",": " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "'\\''" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "'",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "DoubleQuote",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","DoubleQuote",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "'\\\"'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\"",
               "type" : "Literal"
            }
         }, {
            "localId" : "7",
            "name" : "Backtick",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Backtick",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "'\\`'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "`",
               "type" : "Literal"
            }
         }, {
            "localId" : "9",
            "name" : "CarriageReturn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","CarriageReturn",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "'\\r'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\r",
               "type" : "Literal"
            }
         }, {
            "localId" : "11",
            "name" : "LineFeed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","LineFeed",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "'\\n'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\n",
               "type" : "Literal"
            }
         }, {
            "localId" : "13",
            "name" : "Tab",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","Tab",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "'\\t'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\t",
               "type" : "Literal"
            }
         }, {
            "localId" : "15",
            "name" : "FormFeed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","FormFeed",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "'\\f'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\f",
               "type" : "Literal"
            }
         }, {
            "localId" : "17",
            "name" : "Backslash",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","Backslash",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "'\\\\'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "\\",
               "type" : "Literal"
            }
         }, {
            "localId" : "19",
            "name" : "Unicode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","Unicode",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "'\\u0048'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "H",
               "type" : "Literal"
            }
         } ]
      }
   }
}

