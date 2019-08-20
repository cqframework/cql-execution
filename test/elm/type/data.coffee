###
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
###

### Is
library TestSnippet version '1'
using QUICK
context Patient
define IsTrueInteger: 5 is Integer
define IsFalseInteger: '5' is Integer
define IsTrueDecimal: 5.0 is Decimal
define IsFalseDecimal: 5 is Decimal
define IsTrueString: '5' is String
define IsFalseString: 5 is String
define IsTrueDateTime: DateTime(2012) is DateTime
define IsFalseDateTime: Date(2012) is DateTime
define IsTrueDate: Date(2012) is Date
define IsFalseDate: DateTime(2012) is Date
define IsTrueTime: Time(12) is Time
define IsFalseTime: DateTime(2012) is Time
define IsTrueQuantity: 1 'mm' is Quantity
define IsFalseQuantity: 'one millimeter' is Quantity
define IsTrueBoolean: true is Boolean
define IsFalseBoolean: 'true' is Boolean
###

module.exports['Is'] = {
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
            "name" : "IsTrueInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","IsTrueInteger",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Is",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "3",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "9",
            "name" : "IsFalseInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","IsFalseInteger",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Is",
               "operand" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "7",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "13",
            "name" : "IsTrueDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","IsTrueDecimal",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5.0"," is " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Is",
               "operand" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.0",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "11",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "17",
            "name" : "IsFalseDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","IsFalseDecimal",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Is",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "15",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "21",
            "name" : "IsTrueString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","IsTrueString",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Is",
               "operand" : {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "19",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "25",
            "name" : "IsFalseString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "define ","IsFalseString",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Is",
               "operand" : {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "23",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "30",
            "name" : "IsTrueDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "define ","IsTrueDateTime",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "27",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "29",
               "type" : "Is",
               "operand" : {
                  "localId" : "27",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "28",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "35",
            "name" : "IsFalseDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "35",
                  "s" : [ {
                     "value" : [ "define ","IsFalseDateTime",": " ]
                  }, {
                     "r" : "34",
                     "s" : [ {
                        "r" : "32",
                        "s" : [ {
                           "r" : "31",
                           "value" : [ "Date","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "34",
               "type" : "Is",
               "operand" : {
                  "localId" : "32",
                  "type" : "Date",
                  "year" : {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "33",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "40",
            "name" : "IsTrueDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "40",
                  "s" : [ {
                     "value" : [ "define ","IsTrueDate",": " ]
                  }, {
                     "r" : "39",
                     "s" : [ {
                        "r" : "37",
                        "s" : [ {
                           "r" : "36",
                           "value" : [ "Date","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "39",
               "type" : "Is",
               "operand" : {
                  "localId" : "37",
                  "type" : "Date",
                  "year" : {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "38",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "45",
            "name" : "IsFalseDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "define ","IsFalseDate",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "r" : "41",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "Is",
               "operand" : {
                  "localId" : "42",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "43",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "50",
            "name" : "IsTrueTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "50",
                  "s" : [ {
                     "value" : [ "define ","IsTrueTime",": " ]
                  }, {
                     "r" : "49",
                     "s" : [ {
                        "r" : "47",
                        "s" : [ {
                           "r" : "46",
                           "value" : [ "Time","(","12",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "49",
               "type" : "Is",
               "operand" : {
                  "localId" : "47",
                  "type" : "Time",
                  "hour" : {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "48",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "55",
            "name" : "IsFalseTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "55",
                  "s" : [ {
                     "value" : [ "define ","IsFalseTime",": " ]
                  }, {
                     "r" : "54",
                     "s" : [ {
                        "r" : "52",
                        "s" : [ {
                           "r" : "51",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "54",
               "type" : "Is",
               "operand" : {
                  "localId" : "52",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "53",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "59",
            "name" : "IsTrueQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "59",
                  "s" : [ {
                     "value" : [ "define ","IsTrueQuantity",": " ]
                  }, {
                     "r" : "58",
                     "s" : [ {
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "1 ","'mm'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "57",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "58",
               "type" : "Is",
               "operand" : {
                  "localId" : "56",
                  "value" : 1,
                  "unit" : "mm",
                  "type" : "Quantity"
               },
               "isTypeSpecifier" : {
                  "localId" : "57",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "63",
            "name" : "IsFalseQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "63",
                  "s" : [ {
                     "value" : [ "define ","IsFalseQuantity",": " ]
                  }, {
                     "r" : "62",
                     "s" : [ {
                        "r" : "60",
                        "s" : [ {
                           "value" : [ "'one millimeter'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "62",
               "type" : "Is",
               "operand" : {
                  "localId" : "60",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "one millimeter",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "61",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "67",
            "name" : "IsTrueBoolean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "define ","IsTrueBoolean",": " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "r" : "64",
                        "value" : [ "true"," is " ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "66",
               "type" : "Is",
               "operand" : {
                  "localId" : "64",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "65",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "71",
            "name" : "IsFalseBoolean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "71",
                  "s" : [ {
                     "value" : [ "define ","IsFalseBoolean",": " ]
                  }, {
                     "r" : "70",
                     "s" : [ {
                        "r" : "68",
                        "s" : [ {
                           "value" : [ "'true'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "69",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "70",
               "type" : "Is",
               "operand" : {
                  "localId" : "68",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "69",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

