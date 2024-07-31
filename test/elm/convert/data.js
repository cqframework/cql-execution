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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "317",
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
            "name" : "stringStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","stringStr",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "'str'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "str",
               "type" : "Literal"
            }
         }, {
            "localId" : "216",
            "name" : "stringNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","stringNull",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "218",
                        "value" : [ "convert ","null"," to " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "asType" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "221",
            "name" : "boolTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","boolTrue",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "'true'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "227",
            "name" : "boolFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","boolFalse",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "'false'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "233",
            "name" : "decimalValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","decimalValid",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "'10.2'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "239",
            "name" : "decimalInvalid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","decimalInvalid",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "245",
            "name" : "integerValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","integerValid",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "'10'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "247",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "251",
            "name" : "integerDropDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","integerDropDecimal",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "'10.2'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "257",
            "name" : "integerInvalid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","integerInvalid",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "259",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "263",
            "name" : "quantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","quantityStr",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "'10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "265",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "269",
            "name" : "posQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","posQuantityStr",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'+10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "275",
            "name" : "negQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","negQuantityStr",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "'-10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "279",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "277",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "281",
            "name" : "quantityStrDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","quantityStrDecimal",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "'10.0 \\'mA\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "283",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.0 'mA'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "287",
            "name" : "dateTimeStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeStr",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "289",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "293",
            "name" : "dateStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","dateStr",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "type" : "ToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "295",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "299",
            "name" : "NullConvert",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","NullConvert",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "301",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "305",
            "name" : "ZDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","ZDateTime",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0Z'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "309",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "307",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0Z",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "311",
            "name" : "TimezoneDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "// January 1st, 2014, 2:30PM UTC\n","define ","TimezoneDateTime",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0-07:00'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "313",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0-07:00",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "317",
            "name" : "TimezoneTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "// January 1st, 2014, 2:30PM Mountain Standard (GMT-7:00)\n","define ","TimezoneTime",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "'14:30:00.0-07:00'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "321",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "319",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "229",
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
            "name" : "string10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","string10",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "decimal10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","decimal10",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "intNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","intNull",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "convert ","null"," to " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "229",
            "name" : "intInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","intInt",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "231",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "231",
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
            "name" : "quantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","quantityStr",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "10 ","'A'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "value" : 10,
                  "unit" : "A",
                  "type" : "Quantity"
               }
            }
         }, {
            "localId" : "218",
            "name" : "negQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","negQuantityStr",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "-" ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "10 ","'A'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "221",
                     "value" : 10,
                     "unit" : "A",
                     "type" : "Quantity"
                  }
               }
            }
         }, {
            "localId" : "225",
            "name" : "posQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","posQuantityStr",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "+" ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "10 ","'A'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "value" : 10,
                  "unit" : "A",
                  "type" : "Quantity"
               }
            }
         }, {
            "localId" : "231",
            "name" : "quantityQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","quantityQuantity",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "10 ","'A'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "228",
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
            "name" : "booleanTrueStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","booleanTrueStr",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "convert ","true"," to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "booleanFalseStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","booleanFalseStr",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "convert ","false"," to " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "booleanTrueBool",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","booleanTrueBool",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "convert ","true"," to " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "228",
            "name" : "booleanFalseBool",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","booleanFalseBool",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "230",
                        "value" : [ "convert ","false"," to " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "240",
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
            "name" : "dateTimeToStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToStr",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "321",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "-6.0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "226",
            "name" : "dateTimeToDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToDate",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "228",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "ToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
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
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "321",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "-6.0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "240",
            "name" : "dateTimeToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToDateTime",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "242",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "244",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "hour" : {
                  "localId" : "246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "247",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "248",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "321",
                  "type" : "Literal"
               },
               "timezoneOffset" : {
                  "localId" : "250",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
            "name" : "dateYMDToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","dateYMDToDateTime",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "218",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "222",
            "name" : "dateYMToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","dateYMToDateTime",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "convert ","@2015-01"," to " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "231",
            "name" : "dateYToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","dateYToDateTime",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "235",
                        "value" : [ "convert ","@2015"," to " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "ToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "239",
            "name" : "dateToDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","dateToDate",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "244",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "name" : "dateToStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","dateToStr",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "253",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "253",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "252",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
            "name" : "timeStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","timeStr",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "convert ","@T11:57"," to " ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "ToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "Time",
                  "signature" : [ ],
                  "hour" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "57",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "220",
            "name" : "timeTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","timeTime",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "222",
                        "value" : [ "convert ","@T11:57"," to " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Time",
               "signature" : [ ],
               "hour" : {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "11",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "224",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "name" : "SNOMED-CT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED-CT\"",": ","'2.16.840.1.113883.6.96'" ]
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
            "localId" : "213",
            "name" : "hepB",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","hepB",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "Code ","'66071002'"," from " ]
                     }, {
                        "r" : "215",
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
               "localId" : "214",
               "code" : "66071002",
               "display" : "Type B viral hepatitis",
               "type" : "Code",
               "system" : {
                  "localId" : "215",
                  "name" : "SNOMED-CT"
               }
            }
         }, {
            "localId" : "217",
            "name" : "codeConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","codeConcept",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "hepB" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "ToConcept",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "name" : "hepB",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "223",
            "name" : "codeCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","codeCode",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "hepB" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "name" : "hepB",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "227",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","foo",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "256",
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
            "name" : "NoSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NoSign",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0.0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "PositiveSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","PositiveSign",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+1.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "NegativeSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","NegativeSign",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-1.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "TooPrecise",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","TooPrecise",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "231",
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
               "localId" : "234",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "name" : "TooLargeDec",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeDec",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "237",
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
               "localId" : "240",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "TooSmallDec",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallDec",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "243",
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
               "localId" : "246",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "248",
            "name" : "NullDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","NullDecimal",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "r" : "250",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "251",
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
               "localId" : "254",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "250",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "256",
            "name" : "WrongFormat",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","WrongFormat",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "257",
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
               "localId" : "260",
               "type" : "ToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "257",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "248",
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
            "name" : "NoSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NoSign",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "PositiveSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","PositiveSign",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "NegativeSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","NegativeSign",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "TooLargeInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeInt",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "231",
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
               "localId" : "234",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2147483648",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "name" : "TooSmallInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallInt",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "237",
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
               "localId" : "240",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-2147483649",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "BooleanTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","BooleanTrue",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "ToInteger","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "248",
            "name" : "BooleanFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","BooleanFalse",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "249",
                        "value" : [ "ToInteger","(","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "type" : "ToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
            "name" : "DecimalOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","DecimalOverload",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "ToQuantity","(","0.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IntegerOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IntegerOverload",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "ToQuantity","(","13",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "234",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "UncertaintyOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyOverload",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "237",
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
               "localId" : "240",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "242",
            "name" : "StringOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","StringOverload",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "243",
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
               "localId" : "246",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-0.1 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "248",
            "name" : "RatioOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","RatioOverload",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "5 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ ":" ]
                        }, {
                           "r" : "250",
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
               "localId" : "254",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "251",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "249",
                     "value" : 5,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "250",
                     "value" : 10,
                     "unit" : "mL"
                  }
               }
            }
         }, {
            "localId" : "256",
            "name" : "WrongFormatQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","WrongFormatQuantity",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "257",
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
               "localId" : "260",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "257",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "262",
            "name" : "TooLargeQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeQuantity",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "263",
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
               "localId" : "266",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "268",
            "name" : "TooSmallQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallQuantity",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "269",
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
               "localId" : "272",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "269",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "274",
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","NullArg",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "275",
                           "s" : [ {
                              "r" : "276",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "277",
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
               "localId" : "280",
               "type" : "ToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "275",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "276",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "277",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "244",
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
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NullArg",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "215",
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
               "localId" : "218",
               "type" : "ToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "214",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "215",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "220",
            "name" : "IsValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","IsValid",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "ToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "name" : "IsValidWithCustomUCUM",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","IsValidWithCustomUCUM",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "227",
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
               "localId" : "230",
               "type" : "ToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 '{foo:bar }':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "name" : "InvalidSeparator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","InvalidSeparator",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "233",
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
               "localId" : "236",
               "type" : "ToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "238",
            "name" : "InvalidNumerator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","InvalidNumerator",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "239",
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
               "localId" : "242",
               "type" : "ToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "239",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'cc':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "name" : "InvalidDenominator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","InvalidDenominator",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "245",
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
               "localId" : "248",
               "type" : "ToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "245",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "268",
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
            "name" : "NullArgTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NullArgTime",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "213",
                           "s" : [ {
                              "r" : "214",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "215",
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
               "localId" : "218",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "214",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "215",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "220",
            "name" : "IncorrectFormatTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","IncorrectFormatTime",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10:00PM",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "226",
            "name" : "InvalidTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","InvalidTime",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "227",
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
               "localId" : "230",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "25:99.000",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "name" : "TimeH",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","TimeH",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "233",
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
               "localId" : "236",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "238",
            "name" : "TimeHM",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","TimeHM",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "239",
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
               "localId" : "242",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "239",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "name" : "TimeHMS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","TimeHMS",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "245",
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
               "localId" : "248",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "250",
            "name" : "TimeHMSMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","TimeHMSMs",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "251",
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
               "localId" : "254",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "251",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59.123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "256",
            "name" : "HourTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","HourTooHigh",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "257",
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
               "localId" : "260",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "257",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "24",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "262",
            "name" : "MinuteTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","MinuteTooHigh",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "263",
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
               "localId" : "266",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "23:60",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "268",
            "name" : "SecondTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","SecondTooHigh",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "269",
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
               "localId" : "272",
               "type" : "ToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "269",
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
            "name" : "UpperCaseTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "TRUE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "UpperCaseFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseFalse",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FALSE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "LowerCaseTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseTrue",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "LowerCaseFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseFalse",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "231",
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
               "localId" : "234",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "name" : "UpperCaseT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseT",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "237",
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
               "localId" : "240",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "UpperCaseF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseF",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "243",
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
               "localId" : "246",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "248",
            "name" : "LowerCaseT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseT",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "249",
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
               "localId" : "252",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "t",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "254",
            "name" : "LowerCaseF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseF",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "255",
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
               "localId" : "258",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "f",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "260",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "261",
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
               "localId" : "264",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "261",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "266",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "267",
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
               "localId" : "270",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "267",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "272",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "273",
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
               "localId" : "276",
               "type" : "ToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "273",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
            "name" : "IsValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsValid",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "ToConcept","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "215",
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
                              "r" : "216",
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
               "localId" : "219",
               "type" : "ToConcept",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "215",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://loinc.org",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "216",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "8480-6",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "221",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "// Concept { codes: { Code { system: 'http://loinc.org', code: '8480-6' } } }\n","define ","IsNull",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "ToConcept","(" ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "224",
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
               "localId" : "227",
               "type" : "ToConcept",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "223",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "224",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "241",
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
            "name" : "ToDateString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ToDateString",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "ToDateDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","ToDateDateTime",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "ToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "233",
            "name" : "ToDateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","ToDateNull",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "235",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "236",
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
               "localId" : "239",
               "type" : "ToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "235",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "241",
            "name" : "ToDateDateTimeString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","ToDateDateTimeString",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "242",
                        "value" : [ "ToDate","(","@2014-01-01T12:30:00",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "type" : "ToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "242",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "248",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "230",
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
            "name" : "IsTrueWithTrueValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithTrueValue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsTrueWithFalseValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithFalseValue",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ConvertsToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "ConvertsToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "r" : "232",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "233",
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
               "localId" : "236",
               "type" : "ConvertsToBoolean",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "232",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "233",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "224",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-01",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ConvertsToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "227",
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
               "localId" : "230",
               "type" : "ConvertsToDate",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "226",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "227",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0Z",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsTrueWithDateValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithDateValue",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "223",
                        "value" : [ "ConvertsToDateTime","(","@2015-01-01",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "ConvertsToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "223",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "228",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "229",
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
               "localId" : "232",
               "type" : "ConvertsToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "237",
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
               "localId" : "240",
               "type" : "ConvertsToDateTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "236",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "237",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "224",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ConvertsToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "227",
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
               "localId" : "230",
               "type" : "ConvertsToDecimal",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "226",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "227",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "101",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsTrueWithBooleanTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithBooleanTrue",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "ConvertsToInteger","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "ConvertsToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsTrueWithBooleanFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithBooleanFalse",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "225",
                        "value" : [ "ConvertsToInteger","(","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "ConvertsToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "231",
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
               "localId" : "234",
               "type" : "ConvertsToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "239",
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
               "localId" : "242",
               "type" : "ConvertsToInteger",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "238",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "239",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "242",
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
            "name" : "IsTrueWithDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithDecimal",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "ConvertsToQuantity","(","0.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "ConvertsToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsTrueWithInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithInteger",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "ConvertsToQuantity","(","101",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "ConvertsToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "101",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsTrueWithString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithString",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "ConvertsToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "231",
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
               "localId" : "234",
               "type" : "ConvertsToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "236",
            "name" : "IsFalseWithInvalidUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","IsFalseWithInvalidUcum",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "237",
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
               "localId" : "240",
               "type" : "ConvertsToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'cc'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "245",
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
               "localId" : "248",
               "type" : "ConvertsToQuantity",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "244",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "245",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "230",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ConvertsToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsFalseWithInvalidUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsFalseWithInvalidUcum",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "228",
               "type" : "ConvertsToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'cc'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "r" : "232",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "233",
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
               "localId" : "236",
               "type" : "ConvertsToRatio",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "232",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "233",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "ConvertsToString","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "ConvertsToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "ConvertsToString","(" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "221",
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
                              "r" : "222",
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
               "localId" : "225",
               "type" : "ConvertsToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "221",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://loinc.org",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "222",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "8480-6",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "227",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "ConvertsToString","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "230",
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
               "localId" : "233",
               "type" : "ConvertsToString",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "229",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "230",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "224",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "213",
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
               "localId" : "216",
               "type" : "ConvertsToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59.123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "218",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "219",
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
               "localId" : "222",
               "type" : "ConvertsToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "227",
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
               "localId" : "230",
               "type" : "ConvertsToTime",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "226",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "227",
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
            "name" : "ConvertQuantityGood",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityGood",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "217",
               "type" : "ConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "name" : "ConvertSyntax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","ConvertSyntax",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "220",
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
               "localId" : "222",
               "type" : "ConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "224",
            "name" : "ConvertQuantityToKg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityToKg",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "5000 ","'g'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "226",
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
               "localId" : "229",
               "type" : "ConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "value" : 5000,
                  "unit" : "g",
                  "type" : "Quantity"
               }, {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "kg",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "231",
            "name" : "ConvertQuantityToWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityToWeeks",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "28 ","'days'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "233",
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
               "localId" : "236",
               "type" : "ConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "232",
                  "value" : 28,
                  "unit" : "days",
                  "type" : "Quantity"
               }, {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "weeks",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "name" : "NullConvertQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","NullConvertQuantity",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "240",
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
               "localId" : "243",
               "type" : "ConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "240",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "235",
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
            "name" : "CanConvertQuantityTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityTrue",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "214",
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
               "localId" : "217",
               "type" : "CanConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "name" : "CanConvertQuantityFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityFalse",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "221",
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
               "localId" : "224",
               "type" : "CanConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "220",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fox",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "name" : "CanConvertQuantityNullFirstNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityNullFirstNull",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "CanConvertQuantity","(","null",", " ]
                     }, {
                        "r" : "228",
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
               "localId" : "232",
               "type" : "CanConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "233",
                  "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "227",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "235",
            "name" : "CanConvertQuantityNullSecondNUll",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityNullSecondNUll",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "CanConvertQuantity",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "242",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

