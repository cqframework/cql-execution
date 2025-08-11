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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "370",
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
            "name" : "stringStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","stringStr",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "'str'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "str",
               "type" : "Literal"
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "stringNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","stringNull",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "222",
                        "value" : [ "convert ","null"," to " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "asType" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "boolTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","boolTrue",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'true'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "boolFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","boolFalse",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "'false'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "decimalValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","decimalValid",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "'10.2'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "decimalInvalid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","decimalInvalid",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "integerValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","integerValid",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "'10'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "integerDropDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","integerDropDecimal",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "'10.2'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "277",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "integerInvalid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","integerInvalid",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "'abc'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "quantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","quantityStr",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "'10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "295",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "posQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","posQuantityStr",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "'+10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "303",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "304",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "300",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "negQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "307",
                  "s" : [ {
                     "value" : [ "","define ","negQuantityStr",": " ]
                  }, {
                     "r" : "312",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "'-10 \\'A\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "312",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "313",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-10 'A'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "quantityStrDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","quantityStrDecimal",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "'10.0 \\'mA\\''" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "321",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10.0 'mA'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "dateTimeStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeStr",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "330",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "331",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "327",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "dateStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","dateStr",": " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "'2015-01-02'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "339",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "ToDate",
               "signature" : [ {
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "NullConvert",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "343",
                  "s" : [ {
                     "value" : [ "","define ","NullConvert",": " ]
                  }, {
                     "r" : "348",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "345",
                        "s" : [ {
                           "value" : [ "'foo'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "344",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "348",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "349",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "345",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "352",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "ZDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","ZDateTime",": " ]
                  }, {
                     "r" : "357",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "354",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0Z'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "357",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "358",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "354",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0Z",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "361",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "TimezoneDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "361",
                  "s" : [ {
                     "value" : [ "// January 1st, 2014, 2:30PM UTC\n","define ","TimezoneDateTime",": " ]
                  }, {
                     "r" : "366",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "363",
                        "s" : [ {
                           "value" : [ "'2014-01-01T14:30:00.0-07:00'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "362",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "366",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "367",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0-07:00",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "370",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimezoneTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "370",
                  "s" : [ {
                     "value" : [ "// January 1st, 2014, 2:30PM Mountain Standard (GMT-7:00)\n","define ","TimezoneTime",": " ]
                  }, {
                     "r" : "375",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "372",
                        "s" : [ {
                           "value" : [ "'14:30:00.0-07:00'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "375",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "376",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "372",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "string10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","string10",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "decimal10",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","decimal10",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "intNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","intNull",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "convert ","null"," to " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "intInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","intInt",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "238",
                        "value" : [ "convert ","10"," to " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "quantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","quantityStr",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "10 ","'A'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 10,
                  "unit" : "A",
                  "type" : "Quantity"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "negQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","negQuantityStr",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "-" ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "10 ","'A'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "Negate",
                  "signature" : [ {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "A",
                     "type" : "Quantity"
                  }
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "posQuantityStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","posQuantityStr",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "+" ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "10 ","'A'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 10,
                  "unit" : "A",
                  "type" : "Quantity"
               }
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "quantityQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","quantityQuantity",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "10 ","'A'" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "booleanTrueStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","booleanTrueStr",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "convert ","true"," to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "booleanFalseStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","booleanFalseStr",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "convert ","false"," to " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "booleanTrueBool",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","booleanTrueBool",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "convert ","true"," to " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "booleanFalseBool",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","booleanFalseBool",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "237",
                        "value" : [ "convert ","false"," to " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "246",
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
            "name" : "dateTimeToStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToStr",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "321",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "-6.0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "dateTimeToDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToDate",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "232",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "ToDate",
               "signature" : [ {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "321",
                     "type" : "Literal"
                  },
                  "timezoneOffset" : {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "-6.0",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "dateTimeToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","dateTimeToDateTime",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "248",
                        "value" : [ "convert ","@2015-01-02T12:01:02.321-06:00"," to " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "250",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "251",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "hour" : {
                  "localId" : "252",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "253",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "254",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "millisecond" : {
                  "localId" : "255",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "321",
                  "type" : "Literal"
               },
               "timezoneOffset" : {
                  "localId" : "256",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "dateYMDToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","dateYMDToDateTime",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "220",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "dateYMToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","dateYMToDateTime",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "231",
                        "value" : [ "convert ","@2015-01"," to " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  }
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "dateYToDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","dateYToDateTime",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "241",
                        "value" : [ "convert ","@2015"," to " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "ToDateTime",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "dateToDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","dateToDate",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "253",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
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
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "dateToStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","dateToStr",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "262",
                        "value" : [ "convert ","@2015-01-01"," to " ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "261",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "timeStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","timeStr",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "convert ","@T11:57"," to " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "ToString",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "Time",
                  "signature" : [ ],
                  "hour" : {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "57",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "timeTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","timeTime",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "convert ","@T11:57"," to " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Time",
               "signature" : [ ],
               "hour" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "11",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "228",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMED-CT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED-CT\"",": ","'2.16.840.1.113883.6.96'" ]
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "hepB",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","hepB",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "Code ","'66071002'"," from " ]
                     }, {
                        "r" : "218",
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "code" : "66071002",
               "display" : "Type B viral hepatitis",
               "type" : "Code",
               "system" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                  "name" : "SNOMED-CT"
               }
            }
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "codeConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","codeConcept",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "hepB" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "ToConcept",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "name" : "hepB",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "codeCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","codeCode",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "hepB" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "hepB",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","foo",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "285",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "NoSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NoSign",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0.0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "PositiveSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","PositiveSign",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+1.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "NegativeSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","NegativeSign",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "235",
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-1.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "TooPrecise",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","TooPrecise",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "245",
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
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : ".444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "TooLargeDec",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeDec",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "255",
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
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "TooSmallDec",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallDec",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "265",
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
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "NullDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","NullDecimal",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
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
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "WrongFormat",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","WrongFormat",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "ToDecimal","(" ]
                     }, {
                        "r" : "286",
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
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "ToDecimal",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "273",
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
            "name" : "NoSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NoSign",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "PositiveSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","PositiveSign",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "+12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NegativeSign",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","NegativeSign",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "235",
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-12345",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TooLargeInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeInt",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "245",
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
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2147483648",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TooSmallInt",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallInt",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "ToInteger","(" ]
                     }, {
                        "r" : "255",
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
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-2147483649",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "BooleanTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","BooleanTrue",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "265",
                        "value" : [ "ToInteger","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "BooleanFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","BooleanFalse",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "274",
                        "value" : [ "ToInteger","(","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "ToInteger",
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "274",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "313",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "DecimalOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","DecimalOverload",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "ToQuantity","(","0.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IntegerOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","IntegerOverload",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "ToQuantity","(","13",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "13",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "UncertaintySixToEighteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintySixToEighteen",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "DateTime","(","2005",")" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "DateTime","(","2006",", ","7",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "239",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2005",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "248",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2006",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "UncertaintyOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","UncertaintyOverload",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "254",
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
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "UncertaintySixToEighteen",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "StringOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","StringOverload",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "263",
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
               "localId" : "268",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-0.1 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "RatioOverload",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","RatioOverload",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "5 ","'mg'" ]
                           } ]
                        }, {
                           "value" : [ ":" ]
                        }, {
                           "r" : "274",
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
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "280",
                  "name" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
                  "type" : "Ratio",
                  "numerator" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "mg"
                  },
                  "denominator" : {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "mL"
                  }
               }
            }
         }, {
            "localId" : "283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "WrongFormatQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","WrongFormatQuantity",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "284",
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
               "localId" : "289",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "TooLargeQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","TooLargeQuantity",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "294",
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
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "303",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "TooSmallQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","TooSmallQuantity",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "304",
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
               "localId" : "309",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "310",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","NullArg",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "r" : "315",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "316",
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
               "localId" : "320",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ToQuantity",
               "signature" : [ {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "314",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "316",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "265",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NullArg",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "r" : "216",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "217",
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
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
               "type" : "ToRatio",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "name" : "IsValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","IsValid",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "226",
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
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
               "type" : "ToRatio",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "name" : "IsValidWithCustomUCUM",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","IsValidWithCustomUCUM",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "236",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
               "type" : "ToRatio",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 '{foo:bar }':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "name" : "InvalidSeparator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","InvalidSeparator",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "246",
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
               "type" : "ToRatio",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "name" : "InvalidNumerator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","InvalidNumerator",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "256",
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
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
               "type" : "ToRatio",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'cc':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
            "name" : "InvalidDenominator",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","InvalidDenominator",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "ToRatio","(" ]
                     }, {
                        "r" : "266",
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
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Ratio",
               "type" : "ToRatio",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "305",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "NullArgTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NullArgTime",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "r" : "216",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "217",
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
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "IncorrectFormatTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","IncorrectFormatTime",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "226",
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
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "10:00PM",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "InvalidTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","InvalidTime",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "236",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "25:99.000",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeH",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","TimeH",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "246",
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeHM",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","TimeHM",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "256",
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
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeHMS",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","TimeHMS",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "266",
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
               "localId" : "271",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeHMSMs",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","TimeHMSMs",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "276",
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
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59.123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "HourTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","HourTooHigh",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "286",
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
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "24",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "MinuteTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","MinuteTooHigh",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "296",
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
               "localId" : "301",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "302",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "23:60",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "SecondTooHigh",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","SecondTooHigh",": " ]
                  }, {
                     "r" : "311",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "306",
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
               "localId" : "311",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "ToTime",
               "signature" : [ {
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "314",
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
            "name" : "UpperCaseTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "TRUE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UpperCaseFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseFalse",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "FALSE",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LowerCaseTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseTrue",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "235",
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LowerCaseFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseFalse",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "245",
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
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UpperCaseT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseT",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "255",
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
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "T",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "UpperCaseF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","UpperCaseF",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "265",
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
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "F",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LowerCaseT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseT",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "275",
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
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "275",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "t",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LowerCaseF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","LowerCaseF",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "285",
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
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "f",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "295",
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
               "localId" : "300",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "305",
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
               "localId" : "310",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "value" : [ "ToBoolean","(" ]
                     }, {
                        "r" : "315",
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
               "localId" : "320",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ToBoolean",
               "signature" : [ {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "315",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "IsValid",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsValid",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "ToConcept","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "217",
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
                              "r" : "219",
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
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "ToConcept",
               "signature" : [ {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://loinc.org",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "8480-6",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "// Concept { codes: { Code { system: 'http://loinc.org', code: '8480-6' } } }\n","define ","IsNull",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "ToConcept","(" ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "231",
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
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "ToConcept",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "267",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "ToDateString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ToDateString",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "ToDate",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-02",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "ToDateDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","ToDateDateTime",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "DateTime","(","2000",", ","3",", ","15",", ","13",", ","30",", ","25",", ","200",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "ToDate",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "242",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "244",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "246",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "248",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  },
                  "millisecond" : {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "200",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "ToDateNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","ToDateNull",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "ToDate","(" ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "259",
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
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "ToDate",
               "signature" : [ {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "ToDateDateTimeString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ToDateDateTimeString",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "268",
                        "value" : [ "ToDate","(","@2014-01-01T12:30:00",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "ToDate",
               "signature" : [ {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "hour" : {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "minute" : {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "30",
                     "type" : "Literal"
                  },
                  "second" : {
                     "localId" : "274",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "IsTrueWithTrueValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithTrueValue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToBoolean",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "y",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrueWithFalseValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithFalseValue",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToBoolean",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "235",
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToBoolean",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "ConvertsToBoolean","(" ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "r" : "246",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "247",
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToBoolean",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDate",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-01",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDate",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "ConvertsToDate","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "237",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDate",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDateTime",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2014-01-01T14:30:00.0Z",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrueWithDateValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithDateValue",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "229",
                        "value" : [ "ConvertsToDateTime","(","@2015-01-01",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDateTime",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2015",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "238",
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
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDateTime",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "value" : [ "ConvertsToDateTime","(" ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "250",
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
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDateTime",
               "signature" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDecimal",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDecimal",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "ConvertsToDecimal","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "237",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToDecimal",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "252",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToInteger",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "101",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrueWithBooleanTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithBooleanTrue",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "225",
                        "value" : [ "ConvertsToInteger","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToInteger",
               "signature" : [ {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrueWithBooleanFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithBooleanFalse",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "234",
                        "value" : [ "ConvertsToInteger","(","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToInteger",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "243",
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
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToInteger",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "ConvertsToInteger","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "255",
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
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToInteger",
               "signature" : [ {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "262",
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
            "name" : "IsTrueWithDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithDecimal",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "ConvertsToQuantity","(","0.1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToQuantity",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "0.1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrueWithInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithInteger",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "ConvertsToQuantity","(","101",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToQuantity",
               "signature" : [ {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "101",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsTrueWithString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","IsTrueWithString",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "233",
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
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToQuantity",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "243",
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
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToQuantity",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalseWithInvalidUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","IsFalseWithInvalidUcum",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "253",
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
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToQuantity",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'cc'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "value" : [ "ConvertsToQuantity","(" ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "265",
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
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToQuantity",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "264",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "265",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToRatio",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg':2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "225",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToRatio",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'mg'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalseWithInvalidUcum",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","IsFalseWithInvalidUcum",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "235",
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToRatio",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1.0 'mg';2.0 'cc'",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "ConvertsToRatio","(" ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "r" : "246",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "247",
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToRatio",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "237",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "ConvertsToString","(","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToString",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","IsFalse",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "ConvertsToString","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "Code"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "226",
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
                              "r" : "228",
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
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToString",
               "signature" : [ {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "http://loinc.org",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "228",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "8480-6",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","IsNull",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "value" : [ "ConvertsToString","(" ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "r" : "239",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "240",
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
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToString",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "name" : "IsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IsTrue",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "215",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToTime",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "02:04:59.123",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToTime",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "foo",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                     "r" : "241",
                     "s" : [ {
                        "value" : [ "ConvertsToTime","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "237",
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
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "ConvertsToTime",
               "signature" : [ {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "261",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "ConvertQuantityGood",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityGood",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "216",
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
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ConvertQuantity",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "ConvertSyntax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","ConvertSyntax",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "228",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ConvertQuantity",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "ConvertQuantityToKg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityToKg",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "5000 ","'g'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "237",
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
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ConvertQuantity",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5000,
                  "unit" : "g",
                  "type" : "Quantity"
               }, {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "kg",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "ConvertQuantityToWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","ConvertQuantityToWeeks",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "28 ","'days'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "250",
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
               "localId" : "256",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ConvertQuantity",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 28,
                  "unit" : "days",
                  "type" : "Quantity"
               }, {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "weeks",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NullConvertQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","NullConvertQuantity",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "value" : [ "ConvertQuantity","(" ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "263",
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
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "ConvertQuantity",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "255",
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
            "name" : "CanConvertQuantityTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityTrue",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "216",
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
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "CanConvertQuantity",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "CanConvertQuantityFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityFalse",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "229",
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
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "CanConvertQuantity",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "fox",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "CanConvertQuantityNullFirstNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityNullFirstNull",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "241",
                        "value" : [ "CanConvertQuantity","(","null",", " ]
                     }, {
                        "r" : "242",
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
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "CanConvertQuantity",
               "signature" : [ {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "g",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "CanConvertQuantityNullSecondNUll",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","CanConvertQuantityNullSecondNUll",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "CanConvertQuantity","(" ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "5 ","'mg'" ]
                        } ]
                     }, {
                        "r" : "257",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "CanConvertQuantity",
               "signature" : [ {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 5,
                  "unit" : "mg",
                  "type" : "Quantity"
               }, {
                  "localId" : "264",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

