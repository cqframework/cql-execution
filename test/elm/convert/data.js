/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* FromString
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define stringStr: convert 'str' to String
define stringNull: convert null to String
define boolTrue: convert 'true' to Boolean
define boolFalse: convert 'false' to Boolean
define decimalValid: convert '10.2' to Decimal
define decimalInvalid: convert 'abc' to Decimal
define integerValid: convert '10' to Integer
define integerDropDecimal: convert '10.2' to Integer
define integerInvalid: convert 'abc' to Integer
define quantityStr: convert '10 \'A\'' to Quantity
define posQuantityStr: convert '+10 \'A\'' to Quantity
define negQuantityStr: convert '-10 \'A\'' to Quantity
define quantityStrDecimal: convert '10.0 \'mA\'' to Quantity
define dateTimeStr: convert '2015-01-02' to DateTime
define dateStr: convert '2015-01-02' to Date
define NullConvert: convert 'foo' to DateTime
define ZDateTime: convert '2014-01-01T14:30:00.0Z' to DateTime // January 1st, 2014, 2:30PM UTC
define TimezoneDateTime: convert '2014-01-01T14:30:00.0-07:00' to DateTime // January 1st, 2014, 2:30PM Mountain Standard (GMT-7:00)
define TimezoneTime: convert '14:30:00.0-07:00' to Time // 2:30PM Mountain Standard (GMT-7:00)
*/

module.exports['FromString'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "76",
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
            "localId" : "4",
            "name" : "stringStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","stringStr",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "'str'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "str",
               "type" : "Literal"
            }
         }, {
            "localId" : "8",
            "name" : "stringNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","stringNull",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "convert ","null"," to " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "asType" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "As",
               "operand" : {
                  "localId" : "6",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "12",
            "name" : "boolTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","boolTrue",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'true'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "16",
            "name" : "boolFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","boolFalse",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'false'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "20",
            "name" : "decimalValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","decimalValid",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'10.2'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "24",
            "name" : "decimalInvalid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","decimalInvalid",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "28",
            "name" : "integerValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","integerValid",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "'10'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "32",
            "name" : "integerDropDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "","define ","integerDropDecimal",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "'10.2'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "30",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "36",
            "name" : "integerInvalid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "","define ","integerInvalid",": " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "35",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "34",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "40",
            "name" : "quantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "40",
                  "s" : [ {
                     "value" : [ "","define ","quantityStr",": " ]
                  }, {
                     "r" : "39",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "'10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "39",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "38",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "44",
            "name" : "posQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "44",
                  "s" : [ {
                     "value" : [ "","define ","posQuantityStr",": " ]
                  }, {
                     "r" : "43",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "'+10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "43",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "42",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "48",
            "name" : "negQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "48",
                  "s" : [ {
                     "value" : [ "","define ","negQuantityStr",": " ]
                  }, {
                     "r" : "47",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "'-10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "47",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "46",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "52",
            "name" : "quantityStrDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","quantityStrDecimal",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "50",
                        "s" : [ {
                           "value" : [ "'10.0 \\'mA\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "51",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "50",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.0 'mA'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "56",
            "name" : "dateTimeStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "56",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeStr",": " ]
                  }, {
                     "r" : "55",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "54",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "55",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "54",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "60",
            "name" : "dateStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "","define ","dateStr",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "57",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "58",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "64",
            "name" : "NullConvert",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "","define ","NullConvert",": " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "62",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "68",
            "name" : "ZDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "68",
                  "s" : [ {
                     "value" : [ "","define ","ZDateTime",": " ]
                  }, {
                     "r" : "67",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "66",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0Z'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "67",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "66",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0Z",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "72",
            "name" : "TimezoneDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "// January 1st, 2014, 2:30PM UTC","define ","TimezoneDateTime",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "70",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0-07:00'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "69",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "71",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "70",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0-07:00",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "76",
            "name" : "TimezoneTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "76",
                  "s" : [ {
                     "value" : [ "// January 1st, 2014, 2:30PM Mountain Standard (GMT-7:00)","define ","TimezoneTime",": " ]
                  }, {
                     "r" : "75",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "'14:30:00.0-07:00'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "73",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "75",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "74",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "14:30:00.0-07:00",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* FromInteger
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define string10: convert 10 to String
define decimal10: convert 10 to Decimal
define intNull: convert null to Decimal
define intInt: convert 10 to Integer
*/

module.exports['FromInteger'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "16",
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
            "localId" : "5",
            "name" : "string10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","string10",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "3",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ToString",
               "operand" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "decimal10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","decimal10",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "7",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "intNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","intNull",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "convert ","null"," to " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "As",
               "operand" : {
                  "localId" : "11",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "16",
            "name" : "intInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","intInt",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "15",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "10",
               "type" : "Literal"
            }
         } ]
      }
   }
}

/* FromQuantity
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define quantityStr: convert 10 'A' to String
define negQuantityStr: convert -10 'A' to String
define posQuantityStr: convert +10 'A' to String
define quantityQuantity: convert 10 'A' to Quantity
*/

module.exports['FromQuantity'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
            "localId" : "5",
            "name" : "quantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","quantityStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "10 ","'A'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ToString",
               "operand" : {
                  "localId" : "3",
                  "value" : 10,
                  "unit" : "A",
                  "type" : "Quantity"
               }
            }
         }, {
            "localId" : "10",
            "name" : "negQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","negQuantityStr",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "-" ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "value" : [ "10 ","'A'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ToString",
               "operand" : {
                  "localId" : "8",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "7",
                     "value" : 10,
                     "unit" : "A",
                     "type" : "Quantity"
                  }
               }
            }
         }, {
            "localId" : "14",
            "name" : "posQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","posQuantityStr",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "+" ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "10 ","'A'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "ToString",
               "operand" : {
                  "localId" : "12",
                  "value" : 10,
                  "unit" : "A",
                  "type" : "Quantity"
               }
            }
         }, {
            "localId" : "17",
            "name" : "quantityQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","quantityQuantity",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "10 ","'A'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "value" : 10,
               "unit" : "A",
               "type" : "Quantity"
            }
         } ]
      }
   }
}

/* FromBoolean
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define booleanTrueStr: convert true to String
define booleanFalseStr: convert false to String
define booleanTrueBool: convert true to Boolean
define booleanFalseBool: convert false to Boolean
*/

module.exports['FromBoolean'] = {
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
            "localId" : "5",
            "name" : "booleanTrueStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","booleanTrueStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "3",
                        "value" : [ "convert ","true"," to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ToString",
               "operand" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "booleanFalseStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","booleanFalseStr",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "7",
                        "value" : [ "convert ","false"," to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToString",
               "operand" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "12",
            "name" : "booleanTrueBool",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","booleanTrueBool",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "convert ","true"," to " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "15",
            "name" : "booleanFalseBool",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","booleanFalseBool",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "14",
                        "value" : [ "convert ","false"," to " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "false",
               "type" : "Literal"
            }
         } ]
      }
   }
}

/* FromDateTime
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define dateTimeToStr: convert @2015-01-02T12:01:02.321-06:00 to String
define dateTimeToDate: convert @2015-01-02T12:01:02.321-06:00 to Date
define dateTimeToDateTime: convert @2015-01-02T12:01:02.321-06:00 to DateTime
*/

module.exports['FromDateTime'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "12",
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
            "localId" : "5",
            "name" : "dateTimeToStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "3",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ToString",
               "operand" : {
                  "localId" : "3",
                  "type" : "DateTime",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "second" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "321",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "-6.0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "9",
            "name" : "dateTimeToDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToDate",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "7",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "7",
                  "type" : "DateTime",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "second" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "321",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "-6.0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "12",
            "name" : "dateTimeToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToDateTime",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "DateTime",
               "year" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "hour" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "second" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "321",
                  "type" : "Literal"
               },
               "timezoneOffset" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "-6.0",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* FromDate
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define dateYMDToDateTime: convert @2015-01-01 to DateTime
define dateYMToDateTime: convert @2015-01 to DateTime
define dateYToDateTime: convert @2015 to DateTime
define dateToDate: convert @2015-01-01 to Date
define dateToStr: convert @2015-01-01 to String
*/

module.exports['FromDate'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "20",
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
            "localId" : "5",
            "name" : "dateYMDToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","dateYMDToDateTime",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "3",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "3",
                  "type" : "Date",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "9",
            "name" : "dateYMToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","dateYMToDateTime",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "7",
                        "value" : [ "convert ","@2015-01"," to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "7",
                  "type" : "Date",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "13",
            "name" : "dateYToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","dateYToDateTime",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "convert ","@2015"," to " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "11",
                  "type" : "Date",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "16",
            "name" : "dateToDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","dateToDate",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "15",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "Date",
               "year" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "20",
            "name" : "dateToStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","dateToStr",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "18",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "ToString",
               "operand" : {
                  "localId" : "18",
                  "type" : "Date",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* FromTime
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define timeStr: convert @T11:57 to String
define timeTime: convert @T11:57 to Time
*/

module.exports['FromTime'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "8",
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
            "localId" : "5",
            "name" : "timeStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","timeStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "3",
                        "value" : [ "convert ","@T11:57"," to " ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ToString",
               "operand" : {
                  "localId" : "3",
                  "type" : "Time",
                  "hour" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "57",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "8",
            "name" : "timeTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","timeTime",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "7",
                        "value" : [ "convert ","@T11:57"," to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Time",
               "hour" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "11",
                  "type" : "Literal"
               },
               "minute" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "57",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* FromCode
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "SNOMED-CT": '2.16.840.1.113883.6.96'
context Patient
define hepB: Code '66071002' from "SNOMED-CT" display 'Type B viral hepatitis'
define codeConcept: convert hepB to Concept
define codeCode: convert hepB to Code
define foo: 'bar'
*/

module.exports['FromCode'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "14",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "SNOMED-CT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED-CT\"",": ","'2.16.840.1.113883.6.96'" ]
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
            "localId" : "5",
            "name" : "hepB",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","hepB",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "Code ","'66071002'"," from " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "\"SNOMED-CT\"" ]
                        } ]
                     }, {
                        "value" : [ " display ","'Type B viral hepatitis'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "code" : "66071002",
               "display" : "Type B viral hepatitis",
               "type" : "Code",
               "system" : {
                  "localId" : "3",
                  "name" : "SNOMED-CT"
               }
            }
         }, {
            "localId" : "9",
            "name" : "codeConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","codeConcept",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "hepB" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToConcept",
               "operand" : {
                  "localId" : "7",
                  "name" : "hepB",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "12",
            "name" : "codeCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","codeCode",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "hepB" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "name" : "hepB",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "14",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","foo",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "bar",
               "type" : "Literal"
            }
         } ]
      }
   }
}

/* ToDecimal
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NoSign: ToDecimal('0.0')
define PositiveSign: ToDecimal('+1.1')
define NegativeSign: ToDecimal('-1.1')
define TooPrecise: ToDecimal('.444444444')
define TooLargeDec: ToDecimal('444444444444444444444444444444')
define TooSmallDec: ToDecimal('-444444444444444444444444444444')
define NullDecimal: ToDecimal((null as String))
define WrongFormat: ToDecimal('+.1')
*/

module.exports['ToDecimal'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "27",
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
            "localId" : "4",
            "name" : "NoSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","NoSign",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'0.0'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0.0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "PositiveSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","PositiveSign",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'+1.1'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+1.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "NegativeSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","NegativeSign",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'-1.1'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-1.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "TooPrecise",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","TooPrecise",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'.444444444'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "16",
            "name" : "TooLargeDec",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeDec",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'444444444444444444444444444444'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "19",
            "name" : "TooSmallDec",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallDec",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "'-444444444444444444444444444444'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "24",
            "name" : "NullDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","NullDecimal",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "r" : "20",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "21",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "22",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "20",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "21",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "27",
            "name" : "WrongFormat",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","WrongFormat",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "'+.1'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "type" : "ToDecimal",
               "operand" : {
                  "localId" : "25",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+.1",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* ToInteger
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NoSign: ToInteger('12345')
define PositiveSign: ToInteger('+12345')
define NegativeSign: ToInteger('-12345')
define TooLargeInt: ToInteger('2147483648')
define TooSmallInt: ToInteger('-2147483649')
define BooleanTrue: ToInteger(true)
define BooleanFalse: ToInteger(false)
*/

module.exports['ToInteger'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "22",
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
            "localId" : "4",
            "name" : "NoSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","NoSign",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'12345'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "PositiveSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","PositiveSign",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'+12345'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "NegativeSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","NegativeSign",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'-12345'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "TooLargeInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeInt",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'2147483648'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2147483648",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "16",
            "name" : "TooSmallInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallInt",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'-2147483649'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-2147483649",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "19",
            "name" : "BooleanTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","BooleanTrue",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "17",
                        "value" : [ "ToInteger","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "22",
            "name" : "BooleanFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","BooleanFalse",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "20",
                        "value" : [ "ToInteger","(","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "type" : "ToInteger",
               "operand" : {
                  "localId" : "20",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* ToQuantity
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define DecimalOverload: ToQuantity(0.1)
define IntegerOverload: ToQuantity(13)
define UncertaintySixToEighteen: months between DateTime(2005) and DateTime(2006, 7)
define UncertaintyOverload: ToQuantity(UncertaintySixToEighteen)
define StringOverload: ToQuantity('-0.1 \'mg\'')
define RatioOverload: ToQuantity(5 'mg':10 'mL')
define WrongFormatQuantity: ToQuantity('abc')
define TooLargeQuantity: ToQuantity('444444444444444444444444444444 \'\'')
define TooSmallQuantity: ToQuantity('-444444444444444444444444444444 \'\'')
define NullArg: ToQuantity((null as String))
*/

module.exports['ToQuantity'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "39",
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
            "localId" : "4",
            "name" : "DecimalOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","DecimalOverload",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "ToQuantity","(","0.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IntegerOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IntegerOverload",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "ToQuantity","(","13",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "14",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "precision" : "Month",
               "type" : "DurationBetween",
               "operand" : [ {
                  "localId" : "9",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "12",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "UncertaintyOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyOverload",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "UncertaintySixToEighteen" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "15",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "20",
            "name" : "StringOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","StringOverload",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'-0.1 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-0.1 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "25",
            "name" : "RatioOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","RatioOverload",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "5 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ ":" ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "10 ","'mL'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "23",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "21",
                     "value" : 5,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "22",
                     "value" : 10,
                     "unit" : "mL"
                  }
               }
            }
         }, {
            "localId" : "28",
            "name" : "WrongFormatQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","WrongFormatQuantity",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "31",
            "name" : "TooLargeQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeQuantity",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "'444444444444444444444444444444 \\'\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "29",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "34",
            "name" : "TooSmallQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallQuantity",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "'-444444444444444444444444444444 \\'\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "32",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "39",
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","NullArg",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "r" : "35",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "36",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "37",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "35",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "36",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ToRatio
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NullArg: ToRatio((null as String))
define IsValid: ToRatio('1.0 \'mg\':2.0 \'mg\'')
define IsValidWithCustomUCUM: ToRatio('1.0 \'{foo:bar }\':2.0 \'mg\'')
define InvalidSeparator: ToRatio('1.0 \'mg\';2.0 \'mg\'')
define InvalidNumerator: ToRatio('1.0 \'cc\':2.0 \'mg\'')
define InvalidDenominator: ToRatio('1.0 \'mg\':2.0 \'cc\'')
*/

module.exports['ToRatio'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "21",
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
            "localId" : "6",
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define ","NullArg",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "r" : "2",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "3",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "ToRatio",
               "operand" : {
                  "localId" : "4",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "2",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "3",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "9",
            "name" : "IsValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","IsValid",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\':2.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToRatio",
               "operand" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "12",
            "name" : "IsValidWithCustomUCUM",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","IsValidWithCustomUCUM",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'1.0 \\'{foo:bar }\\':2.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ToRatio",
               "operand" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 '{foo:bar }':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "InvalidSeparator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","InvalidSeparator",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\';2.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "ToRatio",
               "operand" : {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "18",
            "name" : "InvalidNumerator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","InvalidNumerator",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "'1.0 \\'cc\\':2.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "type" : "ToRatio",
               "operand" : {
                  "localId" : "16",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'cc':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "21",
            "name" : "InvalidDenominator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","InvalidDenominator",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\':2.0 \\'cc\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "ToRatio",
               "operand" : {
                  "localId" : "19",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'cc'",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* ToTime
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NullArgTime: ToTime((null as String))
define IncorrectFormatTime: ToTime('10:00PM')
define InvalidTime: ToTime('25:99.000')
define TimeH: ToTime('02')
define TimeHM: ToTime('02:04')
define TimeHMS: ToTime('02:04:59')
define TimeHMSMs: ToTime('02:04:59.123')
define HourTooHigh: ToTime('24')
define MinuteTooHigh: ToTime('23:60')
define SecondTooHigh: ToTime('23:59:60')
*/

module.exports['ToTime'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "33",
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
            "localId" : "6",
            "name" : "NullArgTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define ","NullArgTime",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "r" : "2",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "3",
                              "s" : [ {
                                 "value" : [ "String" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "4",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "2",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "3",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "9",
            "name" : "IncorrectFormatTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","IncorrectFormatTime",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "'10:00PM'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10:00PM",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "12",
            "name" : "InvalidTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","InvalidTime",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'25:99.000'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "25:99.000",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "TimeH",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","TimeH",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "'02'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "18",
            "name" : "TimeHM",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","TimeHM",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "'02:04'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "16",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "21",
            "name" : "TimeHMS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","TimeHMS",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "'02:04:59'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "19",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "24",
            "name" : "TimeHMSMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","TimeHMSMs",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "'02:04:59.123'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59.123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "27",
            "name" : "HourTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","HourTooHigh",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "'24'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "25",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "24",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "30",
            "name" : "MinuteTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define ","MinuteTooHigh",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "'23:60'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "29",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "28",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "23:60",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "33",
            "name" : "SecondTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","SecondTooHigh",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "'23:59:60'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "ToTime",
               "operand" : {
                  "localId" : "31",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "23:59:60",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* ToBoolean
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define UpperCaseTrue: ToBoolean('TRUE')
define UpperCaseFalse: ToBoolean('FALSE')
define LowerCaseTrue: ToBoolean('true')
define LowerCaseFalse: ToBoolean('false')
define UpperCaseT: ToBoolean('T')
define UpperCaseF: ToBoolean('F')
define LowerCaseT: ToBoolean('t')
define LowerCaseF: ToBoolean('f')
define IsTrue: ToBoolean('y')
define IsFalse: ToBoolean('0')
define IsNull: ToBoolean('falsetto')
*/

module.exports['ToBoolean'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "34",
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
            "localId" : "4",
            "name" : "UpperCaseTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'TRUE'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "TRUE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "UpperCaseFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseFalse",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'FALSE'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FALSE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "LowerCaseTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseTrue",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'true'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "LowerCaseFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseFalse",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'false'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "16",
            "name" : "UpperCaseT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseT",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'T'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "19",
            "name" : "UpperCaseF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseF",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "'F'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "22",
            "name" : "LowerCaseT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseT",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "'t'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "20",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "t",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "25",
            "name" : "LowerCaseF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseF",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "'f'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "23",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "f",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "28",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "'y'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "31",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "'0'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "29",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "34",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "'falsetto'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "type" : "ToBoolean",
               "operand" : {
                  "localId" : "32",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "falsetto",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* ToConcept
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsValid: ToConcept(Code { system: 'http://loinc.org', code: '8480-6' }) // Concept { codes: { Code { system: 'http://loinc.org', code: '8480-6' } } }
define IsNull: ToConcept(null as Code)
*/

module.exports['ToConcept'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "11",
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
            "localId" : "6",
            "name" : "IsValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define ","IsValid",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "ToConcept","(" ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "2",
                              "s" : [ {
                                 "value" : [ "'http://loinc.org'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "3",
                              "s" : [ {
                                 "value" : [ "'8480-6'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "ToConcept",
               "operand" : {
                  "localId" : "4",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "2",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://loinc.org",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "3",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "8480-6",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "11",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "// Concept { codes: { Code { system: 'http://loinc.org', code: '8480-6' } } }","define ","IsNull",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "ToConcept","(" ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "7",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "8",
                           "s" : [ {
                              "value" : [ "Code" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "ToConcept",
               "operand" : {
                  "localId" : "9",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "7",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "8",
                     "name" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ToDate
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ToDateString: ToDate('2015-01-02')
define ToDateDateTime: ToDate(DateTime(2000, 3, 15, 13, 30, 25, 200))
define ToDateNull: ToDate(null as String)
define ToDateDateTimeString: ToDate(@2014-01-01T12:30:00)
*/

module.exports['ToDate'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "22",
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
            "localId" : "4",
            "name" : "ToDateString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","ToDateString",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "14",
            "name" : "ToDateDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","ToDateDateTime",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "5",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "12",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "19",
            "name" : "ToDateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","ToDateNull",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "15",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "16",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "17",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "16",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "22",
            "name" : "ToDateDateTimeString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","ToDateDateTimeString",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "20",
                        "value" : [ "ToDate","(","@2014-01-01T12:30:00",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "20",
                  "type" : "DateTime",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToBoolean
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrueWithTrueValue: ConvertsToBoolean('y')
define IsTrueWithFalseValue: ConvertsToBoolean('0')
define IsFalse: ConvertsToBoolean('foo')
define IsNull: ConvertsToBoolean(null as String)
*/

module.exports['ConvertsToBoolean'] = {
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
            "localId" : "4",
            "name" : "IsTrueWithTrueValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithTrueValue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'y'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToBoolean",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsTrueWithFalseValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithFalseValue",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'0'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToBoolean",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ConvertsToBoolean",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "ConvertsToBoolean",
               "operand" : {
                  "localId" : "13",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "11",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "12",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToDate
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToDate('2015-01-01')
define IsFalse: ConvertsToDate('foo')
define IsNull: ConvertsToDate(null as Date)
*/

module.exports['ConvertsToDate'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "12",
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'2015-01-01'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToDate",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-01",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToDate",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "12",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "Date" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ConvertsToDate",
               "operand" : {
                  "localId" : "10",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "8",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "9",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToDateTime
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToDateTime('2014-01-01T14:30:00.0Z')
define IsTrueWithDateValue: ConvertsToDateTime(@2015-01-01)
define IsFalse: ConvertsToDateTime('foo')
define IsNull: ConvertsToDateTime(null as DateTime)
*/

module.exports['ConvertsToDateTime'] = {
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0Z'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToDateTime",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0Z",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsTrueWithDateValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithDateValue",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "ConvertsToDateTime","(","@2015-01-01",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToDateTime",
               "operand" : {
                  "localId" : "5",
                  "type" : "Date",
                  "year" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "10",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ConvertsToDateTime",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "DateTime" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "ConvertsToDateTime",
               "operand" : {
                  "localId" : "13",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "11",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "12",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToDecimal
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToDecimal('0.1')
define IsFalse: ConvertsToDecimal('foo')
define IsNull: ConvertsToDecimal(null as Decimal)
*/

module.exports['ConvertsToDecimal'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "12",
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'0.1'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToDecimal",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToDecimal",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "12",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "Decimal" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ConvertsToDecimal",
               "operand" : {
                  "localId" : "10",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "8",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "9",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToInteger
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToInteger('101')
define IsTrueWithBooleanTrue: ConvertsToInteger(true)
define IsTrueWithBooleanFalse: ConvertsToInteger(false)
define IsFalse: ConvertsToInteger('foo')
define IsNull: ConvertsToInteger(null as Integer)
*/

module.exports['ConvertsToInteger'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "18",
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'101'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToInteger",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "101",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsTrueWithBooleanTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithBooleanTrue",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "ConvertsToInteger","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToInteger",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "IsTrueWithBooleanFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithBooleanFalse",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "r" : "8",
                        "value" : [ "ConvertsToInteger","(","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ConvertsToInteger",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ConvertsToInteger",
               "operand" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "18",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "r" : "14",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "type" : "ConvertsToInteger",
               "operand" : {
                  "localId" : "16",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "14",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "15",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToQuantity
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrueWithDecimal: ConvertsToQuantity(0.1)
define IsTrueWithInteger: ConvertsToQuantity(101)
define IsTrueWithString: ConvertsToQuantity('1.0 \'mg\'')
define IsFalse: ConvertsToQuantity('foo')
define IsFalseWithInvalidUcum: ConvertsToQuantity('1.0 \'cc\'')
define IsNull: ConvertsToQuantity(null as String)
*/

module.exports['ConvertsToQuantity'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "21",
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
            "localId" : "4",
            "name" : "IsTrueWithDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithDecimal",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "ConvertsToQuantity","(","0.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToQuantity",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsTrueWithInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithInteger",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "ConvertsToQuantity","(","101",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToQuantity",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "101",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "IsTrueWithString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithString",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ConvertsToQuantity",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "13",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ConvertsToQuantity",
               "operand" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "16",
            "name" : "IsFalseWithInvalidUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","IsFalseWithInvalidUcum",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'1.0 \\'cc\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "ConvertsToQuantity",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'cc'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "21",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "r" : "17",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "ConvertsToQuantity",
               "operand" : {
                  "localId" : "19",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "17",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "18",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToRatio
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToRatio('1.0 \'mg\':2.0 \'mg\'')
define IsFalse: ConvertsToRatio('1.0 \'mg\';2.0 \'mg\'')
define IsFalseWithInvalidUcum: ConvertsToRatio('1.0 \'mg\';2.0 \'cc\'')
define IsNull: ConvertsToRatio(null as String)
*/

module.exports['ConvertsToRatio'] = {
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\':2.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToRatio",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\';2.0 \\'mg\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToRatio",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "IsFalseWithInvalidUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","IsFalseWithInvalidUcum",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "'1.0 \\'mg\\';2.0 \\'cc\\''" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ConvertsToRatio",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'cc'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "ConvertsToRatio",
               "operand" : {
                  "localId" : "13",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "11",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "12",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToString
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToString(true)
define IsFalse: ConvertsToString(Code { system: 'http://loinc.org', code: '8480-6' })
define IsNull: ConvertsToString(null as String)
*/

module.exports['ConvertsToString'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "14",
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "ConvertsToString","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToString",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "9",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "ConvertsToString","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "5",
                              "s" : [ {
                                 "value" : [ "'http://loinc.org'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "6",
                              "s" : [ {
                                 "value" : [ "'8480-6'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "ConvertsToString",
               "operand" : {
                  "localId" : "7",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "5",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://loinc.org",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "6",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "8480-6",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "14",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "ConvertsToString","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "ConvertsToString",
               "operand" : {
                  "localId" : "12",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "11",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertsToTime
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsTrue: ConvertsToTime('02:04:59.123')
define IsFalse: ConvertsToTime('foo')
define IsNull: ConvertsToTime(null as String)
*/

module.exports['ConvertsToTime'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "12",
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
            "localId" : "4",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "'02:04:59.123'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "type" : "ConvertsToTime",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59.123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "ConvertsToTime",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "12",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ConvertsToTime",
               "operand" : {
                  "localId" : "10",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "8",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "9",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* ConvertQuantity
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ConvertQuantityGood: ConvertQuantity(5 'mg', 'g')
define ConvertSyntax: convert 5 'mg' to 'g'
define ConvertQuantityToKg: ConvertQuantity(5000 'g', 'kg')
define ConvertQuantityToWeeks: ConvertQuantity(28 'days', 'weeks')
define NullConvertQuantity: ConvertQuantity(5 'mg', 'fox')
*/

module.exports['ConvertQuantity'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "20",
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
            "localId" : "5",
            "name" : "ConvertQuantityGood",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityGood",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "'g'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "ConvertQuantity",
               "operand" : [ {
                  "localId" : "2",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "8",
            "name" : "ConvertSyntax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","ConvertSyntax",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ " to ","'g'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "ConvertQuantity",
               "operand" : [ {
                  "localId" : "6",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "12",
            "name" : "ConvertQuantityToKg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityToKg",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "5000 ","'g'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'kg'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "ConvertQuantity",
               "operand" : [ {
                  "localId" : "9",
                  "value" : 5000,
                  "unit" : "g",
                  "type" : "Quantity"
               }, {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "kg",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "16",
            "name" : "ConvertQuantityToWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityToWeeks",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "28 ","'days'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'weeks'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "ConvertQuantity",
               "operand" : [ {
                  "localId" : "13",
                  "value" : 28,
                  "unit" : "days",
                  "type" : "Quantity"
               }, {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "weeks",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "20",
            "name" : "NullConvertQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","NullConvertQuantity",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'fox'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "ConvertQuantity",
               "operand" : [ {
                  "localId" : "17",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fox",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* CanConvertQuantity
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define CanConvertQuantityTrue: CanConvertQuantity(5 'mg', 'g')
define CanConvertQuantityFalse: CanConvertQuantity(5 'mg', 'fox')
define CanConvertQuantityNullFirstNull: CanConvertQuantity(null, 'g')
define CanConvertQuantityNullSecondNUll: CanConvertQuantity(5 'mg', null)
*/

module.exports['CanConvertQuantity'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
            "localId" : "5",
            "name" : "CanConvertQuantityTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityTrue",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "'g'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "CanConvertQuantity",
               "operand" : [ {
                  "localId" : "2",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "CanConvertQuantityFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityFalse",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "'fox'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "CanConvertQuantity",
               "operand" : [ {
                  "localId" : "6",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fox",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "13",
            "name" : "CanConvertQuantityNullFirstNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityNullFirstNull",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "CanConvertQuantity","(","null",", " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'g'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "CanConvertQuantity",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "CanConvertQuantityNullSecondNUll",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityNullSecondNUll",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "CanConvertQuantity",
               "operand" : [ {
                  "localId" : "14",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

