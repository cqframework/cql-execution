###
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
###

### FromString
library TestSnippet version '1'
using QUICK
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
###

module.exports['FromString'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","stringStr",": " ]
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
                     "value" : [ "define ","stringNull",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
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
                     "value" : [ "define ","boolTrue",": " ]
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
                     "value" : [ "define ","boolFalse",": " ]
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
                     "value" : [ "define ","decimalValid",": " ]
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
                     "value" : [ "define ","decimalInvalid",": " ]
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
                     "value" : [ "define ","integerValid",": " ]
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
                     "value" : [ "define ","integerDropDecimal",": " ]
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
                     "value" : [ "define ","integerInvalid",": " ]
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
                     "value" : [ "define ","quantityStr",": " ]
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
                     "value" : [ "define ","posQuantityStr",": " ]
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
                     "value" : [ "define ","negQuantityStr",": " ]
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
                     "value" : [ "define ","quantityStrDecimal",": " ]
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
                     "value" : [ "define ","dateTimeStr",": " ]
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
                     "value" : [ "define ","dateStr",": " ]
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
         } ]
      }
   }
}

### FromInteger
library TestSnippet version '1'
using QUICK
context Patient
define string10: convert 10 to String
define decimal10: convert 10 to Decimal
define intNull: convert null to Decimal
define intInt: convert 10 to Integer
###

module.exports['FromInteger'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","string10",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
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
                     "value" : [ "define ","decimal10",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
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
                     "value" : [ "define ","intNull",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
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
                     "value" : [ "define ","intInt",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
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

### FromQuantity
library TestSnippet version '1'
using QUICK
context Patient
define quantityStr: convert 10 'A' to String
define negQuantityStr: convert -10 'A' to String
define posQuantityStr: convert +10 'A' to String
define quantityQuantity: convert 10 'A' to Quantity
###

module.exports['FromQuantity'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","quantityStr",": " ]
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
                     "value" : [ "define ","negQuantityStr",": " ]
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
                     "value" : [ "define ","posQuantityStr",": " ]
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
                     "value" : [ "define ","quantityQuantity",": " ]
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

### FromBoolean
library TestSnippet version '1'
using QUICK
context Patient
define booleanTrueStr: convert true to String
define booleanFalseStr: convert false to String
define booleanTrueBool: convert true to Boolean
define booleanFalseBool: convert false to Boolean
###

module.exports['FromBoolean'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","booleanTrueStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
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
                     "value" : [ "define ","booleanFalseStr",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
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
                     "value" : [ "define ","booleanTrueBool",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
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
                     "value" : [ "define ","booleanFalseBool",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
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

### FromDateTime
library TestSnippet version '1'
using QUICK
context Patient
define dateStr: convert @2015-01-02 to String
define dateDate: convert @2015-01-02 to DateTime
###

module.exports['FromDateTime'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "dateStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","dateStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "convert ","@2015-01-02"," to " ]
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
                     "value" : "2",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "9",
            "name" : "dateDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","dateDate",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "convert ","@2015-01-02"," to " ]
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
                  },
                  "day" : {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### FromDate
library TestSnippet version '1'
using QUICK
context Patient
define dateDateTime: convert ToDate('2015-01-01') to DateTime
define dateDate: convert ToDate('2015-01-01') to Date
define dateStr: convert ToDate('2015-01-01') to String
###

module.exports['FromDate'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "6",
            "name" : "dateDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","dateDateTime",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "ToDate","(" ]
                        }, {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "'2015-01-01'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
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
               "localId" : "5",
               "type" : "ToDateTime",
               "operand" : {
                  "localId" : "4",
                  "type" : "ToDate",
                  "operand" : {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2015-01-01",
                     "type" : "Literal"
                  }
               }
            }
         }, {
            "localId" : "10",
            "name" : "dateDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "define ","dateDate",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "ToDate","(" ]
                        }, {
                           "r" : "8",
                           "s" : [ {
                              "value" : [ "'2015-01-01'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " to " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "ToDate",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2015-01-01",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "dateStr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "define ","dateStr",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "convert " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "ToDate","(" ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "'2015-01-01'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
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
               "localId" : "14",
               "type" : "ToString",
               "operand" : {
                  "localId" : "13",
                  "type" : "ToDate",
                  "operand" : {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "2015-01-01",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      }
   }
}

### FromTime
library TestSnippet version '1'
using QUICK
context Patient
define timeStr: convert @T11:57 to String
define timeTime: convert @T11:57 to Time
###

module.exports['FromTime'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","timeStr",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
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
                     "value" : [ "define ","timeTime",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
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

### FromCode
library TestSnippet version '1'
using QUICK
// define hepB: Code '66071002' from "SNOMED-CT" display 'Type B viral hepatitis'
// define codeConcept: convert hepB to Concept
// define codeCode: convert hepB to Code
context Patient
define foo: 'bar'
###

module.exports['FromCode'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "3",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "define ","foo",": " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "bar",
               "type" : "Literal"
            }
         } ]
      }
   }
}

### ToDecimal
library TestSnippet version '1'
using QUICK
context Patient
define NoSign: ToDecimal('0.0')
define PositiveSign: ToDecimal('+1.1')
define NegativeSign: ToDecimal('-1.1')
define TooPrecise: ToDecimal('.444444444')
define TooLargeDec: ToDecimal('444444444444444444444444444444')
define TooSmallDec: ToDecimal('-444444444444444444444444444444')
define NullDecimal: ToDecimal((null as String))
define WrongFormat: ToDecimal('+.1')
###

module.exports['ToDecimal'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","NoSign",": " ]
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
                     "value" : [ "define ","PositiveSign",": " ]
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
                     "value" : [ "define ","NegativeSign",": " ]
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
                     "value" : [ "define ","TooPrecise",": " ]
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
                     "value" : [ "define ","TooLargeDec",": " ]
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
                     "value" : [ "define ","TooSmallDec",": " ]
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
                     "value" : [ "define ","NullDecimal",": " ]
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
                     "value" : [ "define ","WrongFormat",": " ]
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

### ToInteger
library TestSnippet version '1'
using QUICK
context Patient
define NoSign: ToInteger('12345')
define PositiveSign: ToInteger('+12345')
define NegativeSign: ToInteger('-12345')
define TooLargeInt: ToInteger('2147483648')
define TooSmallInt: ToInteger('-2147483649')
###

module.exports['ToInteger'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","NoSign",": " ]
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
                     "value" : [ "define ","PositiveSign",": " ]
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
                     "value" : [ "define ","NegativeSign",": " ]
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
                     "value" : [ "define ","TooLargeInt",": " ]
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
                     "value" : [ "define ","TooSmallInt",": " ]
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
         } ]
      }
   }
}

### ToQuantity
library TestSnippet version '1'
using QUICK
context Patient
define WrongFormatQuantity: ToQuantity('abc')
define TooLargeQuantity: ToQuantity('444444444444444444444444444444 \'\'')
define TooSmallQuantity: ToQuantity('-444444444444444444444444444444 \'\'')
define NullArg: ToQuantity((null as String))
###

module.exports['ToQuantity'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "4",
            "name" : "WrongFormatQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "define ","WrongFormatQuantity",": " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "2",
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
               "localId" : "3",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "abc",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "7",
            "name" : "TooLargeQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","TooLargeQuantity",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "5",
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
               "localId" : "6",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "10",
            "name" : "TooSmallQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "define ","TooSmallQuantity",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "8",
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
               "localId" : "9",
               "type" : "ToQuantity",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "-444444444444444444444444444444 ''",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "15",
            "name" : "NullArg",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "define ","NullArg",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "ToQuantity","(" ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "(" ]
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
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "ToQuantity",
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

### ToTime
library TestSnippet version '1'
using QUICK
context Patient
define NullArgTime: ToTime((null as String))
define IncorrectFormatTime: ToTime('10:00PM')
define InvalidTime: ToTime('25:99.000+00.00')
###

module.exports['ToTime'] = {
   "library" : {
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
            "localIdentifier" : "QUICK",
            "uri" : "http://hl7.org/fhir"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{http://hl7.org/fhir}Patient",
                  "templateId" : "patient-qicore-qicore-patient",
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
                     "value" : [ "define ","NullArgTime",": " ]
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
                     "value" : [ "define ","IncorrectFormatTime",": " ]
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
                     "value" : [ "define ","InvalidTime",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "ToTime","(" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'25:99.000+00.00'" ]
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
                  "value" : "25:99.000+00.00",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

