###
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
###

### Is
library TestSnippet version '1'
using QUICK
valueset "Female": '2.16.840.1.113883.3.560.100.2'
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
define IsTrueCode: Code{ system: 'fake', code: 'fake' } is Code
define IsFalseCode: 'Foo' is Code
define IsTrueConcept: Concept { codes: { Code{ system: 'fake', code: 'fake' } }, display: 'Test Concept' } is Concept
define IsFalseConcept: 'Foo' is Concept
define IsTrueRuntimeBoolean: ('5' = '5') is Boolean
define IsFalseRuntimeBoolean: (5 / 3) is Boolean
define IsTrueRuntimeDecimal: (1.0 / 3.0) is Decimal
define IsFalseRuntimeDecimal: ('foo' + 'bar') is Decimal
define IsTrueRuntimeInteger: (1 + 3) is Integer
define IsFalseRuntimeInteger: (1.0 / 3.0) is Integer
define IsTrueRuntimeString: 'foo' + 'bar' is String
define IsFalseRuntimeString: (1.0 / 3.0) is String
define CodeA: Code {
  system: 'http://loinc.org',
  code: '12345',
  version: '1',
  display: 'Test Code'
}
define IsTrueRuntimeCode: CodeA is Code
define IsFalseRuntimeCode: 'Foo' + 'Foo' is Code
define ConceptA: Concept {
  codes: { CodeA },
  display: 'Test Concept'
}

define IsTrueRuntimeConcept: ConceptA is Concept
define IsFalseRuntimeConcept: 'Foo' + 'Foo' is Concept
define IsTrueRuntimeValueSet: "Female" is ValueSet
define IsFalseRuntimeValueSet: 'Foo' + 'Foo' is ValueSet
define IsTrueRuntimeQuantity: 1 'mm' + 1 'mm' is Quantity
define IsFalseRuntimeQuantity: 'Foo' + 'Foo' is Quantity
define IsTrueRuntimeDateTime: DateTime(2012) + 1 'year' is DateTime
define IsFalseRuntimeDateTime: 'Foo' + 'Foo' is DateTime
define IsTrueRuntimeDate: Date(2012) + 1 'year' is Date
define IsFalseRuntimeDate: 'Foo' + 'Foo' is Date
define IsTrueRuntimeTime: Time(12) + 1 'hour' is Time
define IsFalseRuntimeTime: 'Foo' + 'Foo' is Time
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
      "valueSets" : {
         "def" : [ {
            "localId" : "2",
            "name" : "Female",
            "id" : "2.16.840.1.113883.3.560.100.2",
            "accessLevel" : "Public"
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
            "name" : "IsTrueInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","IsTrueInteger",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "r" : "3",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "Is",
               "operand" : {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "4",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "10",
            "name" : "IsFalseInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "define ","IsFalseInteger",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "Is",
               "operand" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "8",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "14",
            "name" : "IsTrueDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "define ","IsTrueDecimal",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "11",
                        "value" : [ "5.0"," is " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "Is",
               "operand" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.0",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "12",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "18",
            "name" : "IsFalseDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "define ","IsFalseDecimal",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "r" : "15",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "type" : "Is",
               "operand" : {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "16",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "22",
            "name" : "IsTrueString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "define ","IsTrueString",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "type" : "Is",
               "operand" : {
                  "localId" : "19",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "20",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "26",
            "name" : "IsFalseString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "define ","IsFalseString",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "r" : "23",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Is",
               "operand" : {
                  "localId" : "23",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "24",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "31",
            "name" : "IsTrueDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "define ","IsTrueDateTime",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "r" : "28",
                        "s" : [ {
                           "r" : "27",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "Is",
               "operand" : {
                  "localId" : "28",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "29",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "36",
            "name" : "IsFalseDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "define ","IsFalseDateTime",": " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "r" : "32",
                           "value" : [ "Date","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "35",
               "type" : "Is",
               "operand" : {
                  "localId" : "33",
                  "type" : "Date",
                  "year" : {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "34",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "41",
            "name" : "IsTrueDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "define ","IsTrueDate",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "r" : "37",
                           "value" : [ "Date","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Is",
               "operand" : {
                  "localId" : "38",
                  "type" : "Date",
                  "year" : {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "39",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "46",
            "name" : "IsFalseDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "define ","IsFalseDate",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "r" : "43",
                        "s" : [ {
                           "r" : "42",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "44",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "45",
               "type" : "Is",
               "operand" : {
                  "localId" : "43",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "44",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "51",
            "name" : "IsTrueTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "define ","IsTrueTime",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "r" : "48",
                        "s" : [ {
                           "r" : "47",
                           "value" : [ "Time","(","12",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "50",
               "type" : "Is",
               "operand" : {
                  "localId" : "48",
                  "type" : "Time",
                  "hour" : {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "49",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "56",
            "name" : "IsFalseTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "56",
                  "s" : [ {
                     "value" : [ "define ","IsFalseTime",": " ]
                  }, {
                     "r" : "55",
                     "s" : [ {
                        "r" : "53",
                        "s" : [ {
                           "r" : "52",
                           "value" : [ "DateTime","(","2012",")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "54",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "55",
               "type" : "Is",
               "operand" : {
                  "localId" : "53",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "54",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "60",
            "name" : "IsTrueQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "define ","IsTrueQuantity",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "r" : "57",
                        "s" : [ {
                           "value" : [ "1 ","'mm'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "Is",
               "operand" : {
                  "localId" : "57",
                  "value" : 1,
                  "unit" : "mm",
                  "type" : "Quantity"
               },
               "isTypeSpecifier" : {
                  "localId" : "58",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "64",
            "name" : "IsFalseQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "define ","IsFalseQuantity",": " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "'one millimeter'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "type" : "Is",
               "operand" : {
                  "localId" : "61",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "one millimeter",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "62",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "68",
            "name" : "IsTrueBoolean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "68",
                  "s" : [ {
                     "value" : [ "define ","IsTrueBoolean",": " ]
                  }, {
                     "r" : "67",
                     "s" : [ {
                        "r" : "65",
                        "value" : [ "true"," is " ]
                     }, {
                        "r" : "66",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "67",
               "type" : "Is",
               "operand" : {
                  "localId" : "65",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "66",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "72",
            "name" : "IsFalseBoolean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "define ","IsFalseBoolean",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "r" : "69",
                        "s" : [ {
                           "value" : [ "'true'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "70",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "71",
               "type" : "Is",
               "operand" : {
                  "localId" : "69",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "70",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "78",
            "name" : "IsTrueCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "78",
                  "s" : [ {
                     "value" : [ "define ","IsTrueCode",": " ]
                  }, {
                     "r" : "77",
                     "s" : [ {
                        "r" : "75",
                        "s" : [ {
                           "value" : [ "Code","{ " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "73",
                              "s" : [ {
                                 "value" : [ "'fake'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "74",
                              "s" : [ {
                                 "value" : [ "'fake'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "76",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "77",
               "type" : "Is",
               "operand" : {
                  "localId" : "75",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "system",
                     "value" : {
                        "localId" : "73",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "fake",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "code",
                     "value" : {
                        "localId" : "74",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "fake",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "76",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "82",
            "name" : "IsFalseCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "82",
                  "s" : [ {
                     "value" : [ "define ","IsFalseCode",": " ]
                  }, {
                     "r" : "81",
                     "s" : [ {
                        "r" : "79",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "81",
               "type" : "Is",
               "operand" : {
                  "localId" : "79",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "80",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "91",
            "name" : "IsTrueConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "91",
                  "s" : [ {
                     "value" : [ "define ","IsTrueConcept",": " ]
                  }, {
                     "r" : "90",
                     "s" : [ {
                        "r" : "88",
                        "s" : [ {
                           "value" : [ "Concept"," { " ]
                        }, {
                           "s" : [ {
                              "value" : [ "codes",": " ]
                           }, {
                              "r" : "86",
                              "s" : [ {
                                 "value" : [ "{ " ]
                              }, {
                                 "r" : "85",
                                 "s" : [ {
                                    "value" : [ "Code","{ " ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "system",": " ]
                                    }, {
                                       "r" : "83",
                                       "s" : [ {
                                          "value" : [ "'fake'" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ ", " ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "code",": " ]
                                    }, {
                                       "r" : "84",
                                       "s" : [ {
                                          "value" : [ "'fake'" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ " }" ]
                                 } ]
                              }, {
                                 "value" : [ " }" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "display",": " ]
                           }, {
                              "r" : "87",
                              "s" : [ {
                                 "value" : [ "'Test Concept'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "89",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "90",
               "type" : "Is",
               "operand" : {
                  "localId" : "88",
                  "classType" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "codes",
                     "value" : {
                        "localId" : "86",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "85",
                           "classType" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "Instance",
                           "element" : [ {
                              "name" : "system",
                              "value" : {
                                 "localId" : "83",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "fake",
                                 "type" : "Literal"
                              }
                           }, {
                              "name" : "code",
                              "value" : {
                                 "localId" : "84",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "fake",
                                 "type" : "Literal"
                              }
                           } ]
                        } ]
                     }
                  }, {
                     "name" : "display",
                     "value" : {
                        "localId" : "87",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Test Concept",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "89",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "95",
            "name" : "IsFalseConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "95",
                  "s" : [ {
                     "value" : [ "define ","IsFalseConcept",": " ]
                  }, {
                     "r" : "94",
                     "s" : [ {
                        "r" : "92",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "93",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "94",
               "type" : "Is",
               "operand" : {
                  "localId" : "92",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "93",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "101",
            "name" : "IsTrueRuntimeBoolean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "101",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeBoolean",": " ]
                  }, {
                     "r" : "100",
                     "s" : [ {
                        "r" : "98",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "98",
                           "s" : [ {
                              "r" : "96",
                              "s" : [ {
                                 "value" : [ "'5'" ]
                              } ]
                           }, {
                              "value" : [ " ","="," " ]
                           }, {
                              "r" : "97",
                              "s" : [ {
                                 "value" : [ "'5'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "99",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "100",
               "type" : "Is",
               "operand" : {
                  "localId" : "98",
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "96",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "97",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "99",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "107",
            "name" : "IsFalseRuntimeBoolean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "107",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeBoolean",": " ]
                  }, {
                     "r" : "106",
                     "s" : [ {
                        "r" : "104",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "104",
                           "s" : [ {
                              "r" : "102",
                              "value" : [ "5"," / ","3" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "105",
                        "s" : [ {
                           "value" : [ "Boolean" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "106",
               "type" : "Is",
               "operand" : {
                  "localId" : "104",
                  "type" : "Divide",
                  "operand" : [ {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "102",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "103",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "105",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "113",
            "name" : "IsTrueRuntimeDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "113",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeDecimal",": " ]
                  }, {
                     "r" : "112",
                     "s" : [ {
                        "r" : "110",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "110",
                           "s" : [ {
                              "r" : "108",
                              "value" : [ "1.0"," / ","3.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "111",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "112",
               "type" : "Is",
               "operand" : {
                  "localId" : "110",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "108",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "109",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "111",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "119",
            "name" : "IsFalseRuntimeDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "119",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeDecimal",": " ]
                  }, {
                     "r" : "118",
                     "s" : [ {
                        "r" : "116",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "116",
                           "s" : [ {
                              "r" : "114",
                              "s" : [ {
                                 "value" : [ "'foo'" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "115",
                              "s" : [ {
                                 "value" : [ "'bar'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "117",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "118",
               "type" : "Is",
               "operand" : {
                  "localId" : "116",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "114",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "115",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "bar",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "117",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "125",
            "name" : "IsTrueRuntimeInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "125",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeInteger",": " ]
                  }, {
                     "r" : "124",
                     "s" : [ {
                        "r" : "122",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "122",
                           "s" : [ {
                              "r" : "120",
                              "value" : [ "1"," + ","3" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "123",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "124",
               "type" : "Is",
               "operand" : {
                  "localId" : "122",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "120",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "121",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "123",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "131",
            "name" : "IsFalseRuntimeInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "131",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeInteger",": " ]
                  }, {
                     "r" : "130",
                     "s" : [ {
                        "r" : "128",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "128",
                           "s" : [ {
                              "r" : "126",
                              "value" : [ "1.0"," / ","3.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "129",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "130",
               "type" : "Is",
               "operand" : {
                  "localId" : "128",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "126",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "127",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "129",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "137",
            "name" : "IsTrueRuntimeString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "137",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeString",": " ]
                  }, {
                     "r" : "136",
                     "s" : [ {
                        "r" : "134",
                        "s" : [ {
                           "r" : "132",
                           "s" : [ {
                              "value" : [ "'foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "133",
                           "s" : [ {
                              "value" : [ "'bar'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "135",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "136",
               "type" : "Is",
               "operand" : {
                  "localId" : "134",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "132",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "133",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "bar",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "135",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "143",
            "name" : "IsFalseRuntimeString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "143",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeString",": " ]
                  }, {
                     "r" : "142",
                     "s" : [ {
                        "r" : "140",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "140",
                           "s" : [ {
                              "r" : "138",
                              "value" : [ "1.0"," / ","3.0" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "141",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "142",
               "type" : "Is",
               "operand" : {
                  "localId" : "140",
                  "type" : "Divide",
                  "operand" : [ {
                     "localId" : "138",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "139",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "141",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "149",
            "name" : "CodeA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "149",
                  "s" : [ {
                     "value" : [ "define ","CodeA",": " ]
                  }, {
                     "r" : "148",
                     "s" : [ {
                        "value" : [ "Code"," {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "system",": " ]
                        }, {
                           "r" : "144",
                           "s" : [ {
                              "value" : [ "'http://loinc.org'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "code",": " ]
                        }, {
                           "r" : "145",
                           "s" : [ {
                              "value" : [ "'12345'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "version",": " ]
                        }, {
                           "r" : "146",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "display",": " ]
                        }, {
                           "r" : "147",
                           "s" : [ {
                              "value" : [ "'Test Code'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "148",
               "classType" : "{urn:hl7-org:elm-types:r1}Code",
               "type" : "Instance",
               "element" : [ {
                  "name" : "system",
                  "value" : {
                     "localId" : "144",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "http://loinc.org",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "code",
                  "value" : {
                     "localId" : "145",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "version",
                  "value" : {
                     "localId" : "146",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "display",
                  "value" : {
                     "localId" : "147",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Test Code",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "153",
            "name" : "IsTrueRuntimeCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "153",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeCode",": " ]
                  }, {
                     "r" : "152",
                     "s" : [ {
                        "r" : "150",
                        "s" : [ {
                           "value" : [ "CodeA" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "151",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "152",
               "type" : "Is",
               "operand" : {
                  "localId" : "150",
                  "name" : "CodeA",
                  "type" : "ExpressionRef"
               },
               "isTypeSpecifier" : {
                  "localId" : "151",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "159",
            "name" : "IsFalseRuntimeCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "159",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeCode",": " ]
                  }, {
                     "r" : "158",
                     "s" : [ {
                        "r" : "156",
                        "s" : [ {
                           "r" : "154",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "155",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "157",
                        "s" : [ {
                           "value" : [ "Code" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "158",
               "type" : "Is",
               "operand" : {
                  "localId" : "156",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "154",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "155",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "157",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "164",
            "name" : "ConceptA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "164",
                  "s" : [ {
                     "value" : [ "define ","ConceptA",": " ]
                  }, {
                     "r" : "163",
                     "s" : [ {
                        "value" : [ "Concept"," {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "codes",": " ]
                        }, {
                           "r" : "161",
                           "s" : [ {
                              "value" : [ "{ " ]
                           }, {
                              "r" : "160",
                              "s" : [ {
                                 "value" : [ "CodeA" ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "display",": " ]
                        }, {
                           "r" : "162",
                           "s" : [ {
                              "value" : [ "'Test Concept'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "163",
               "classType" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "Instance",
               "element" : [ {
                  "name" : "codes",
                  "value" : {
                     "localId" : "161",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "160",
                        "name" : "CodeA",
                        "type" : "ExpressionRef"
                     } ]
                  }
               }, {
                  "name" : "display",
                  "value" : {
                     "localId" : "162",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Test Concept",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "168",
            "name" : "IsTrueRuntimeConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "168",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeConcept",": " ]
                  }, {
                     "r" : "167",
                     "s" : [ {
                        "r" : "165",
                        "s" : [ {
                           "value" : [ "ConceptA" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "166",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "167",
               "type" : "Is",
               "operand" : {
                  "localId" : "165",
                  "name" : "ConceptA",
                  "type" : "ExpressionRef"
               },
               "isTypeSpecifier" : {
                  "localId" : "166",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "174",
            "name" : "IsFalseRuntimeConcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "174",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeConcept",": " ]
                  }, {
                     "r" : "173",
                     "s" : [ {
                        "r" : "171",
                        "s" : [ {
                           "r" : "169",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "170",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "172",
                        "s" : [ {
                           "value" : [ "Concept" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "173",
               "type" : "Is",
               "operand" : {
                  "localId" : "171",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "169",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "170",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "172",
                  "name" : "{urn:hl7-org:elm-types:r1}Concept",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "178",
            "name" : "IsTrueRuntimeValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "178",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeValueSet",": " ]
                  }, {
                     "r" : "177",
                     "s" : [ {
                        "r" : "175",
                        "s" : [ {
                           "value" : [ "\"Female\"" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "176",
                        "s" : [ {
                           "value" : [ "ValueSet" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "177",
               "type" : "Is",
               "operand" : {
                  "localId" : "175",
                  "name" : "Female",
                  "type" : "ValueSetRef"
               },
               "isTypeSpecifier" : {
                  "localId" : "176",
                  "name" : "{http://hl7.org/fhir}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "184",
            "name" : "IsFalseRuntimeValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "184",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeValueSet",": " ]
                  }, {
                     "r" : "183",
                     "s" : [ {
                        "r" : "181",
                        "s" : [ {
                           "r" : "179",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "180",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "182",
                        "s" : [ {
                           "value" : [ "ValueSet" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "183",
               "type" : "Is",
               "operand" : {
                  "localId" : "181",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "179",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "180",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "182",
                  "name" : "{http://hl7.org/fhir}ValueSet",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "190",
            "name" : "IsTrueRuntimeQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "190",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeQuantity",": " ]
                  }, {
                     "r" : "189",
                     "s" : [ {
                        "r" : "187",
                        "s" : [ {
                           "r" : "185",
                           "s" : [ {
                              "value" : [ "1 ","'mm'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "186",
                           "s" : [ {
                              "value" : [ "1 ","'mm'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "188",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "189",
               "type" : "Is",
               "operand" : {
                  "localId" : "187",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "185",
                     "value" : 1,
                     "unit" : "mm",
                     "type" : "Quantity"
                  }, {
                     "localId" : "186",
                     "value" : 1,
                     "unit" : "mm",
                     "type" : "Quantity"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "188",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "196",
            "name" : "IsFalseRuntimeQuantity",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "196",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeQuantity",": " ]
                  }, {
                     "r" : "195",
                     "s" : [ {
                        "r" : "193",
                        "s" : [ {
                           "r" : "191",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "192",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "194",
                        "s" : [ {
                           "value" : [ "Quantity" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "195",
               "type" : "Is",
               "operand" : {
                  "localId" : "193",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "191",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "192",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "194",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "203",
            "name" : "IsTrueRuntimeDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "203",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeDateTime",": " ]
                  }, {
                     "r" : "202",
                     "s" : [ {
                        "r" : "200",
                        "s" : [ {
                           "r" : "198",
                           "s" : [ {
                              "r" : "197",
                              "value" : [ "DateTime","(","2012",")" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "199",
                           "s" : [ {
                              "value" : [ "1 ","'year'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "201",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "202",
               "type" : "Is",
               "operand" : {
                  "localId" : "200",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "198",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "197",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "199",
                     "value" : 1,
                     "unit" : "year",
                     "type" : "Quantity"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "201",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "209",
            "name" : "IsFalseRuntimeDateTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeDateTime",": " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "r" : "206",
                        "s" : [ {
                           "r" : "204",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "205",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "207",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "208",
               "type" : "Is",
               "operand" : {
                  "localId" : "206",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "204",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "205",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "207",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "216",
            "name" : "IsTrueRuntimeDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeDate",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "211",
                           "s" : [ {
                              "r" : "210",
                              "value" : [ "Date","(","2012",")" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "212",
                           "s" : [ {
                              "value" : [ "1 ","'year'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "type" : "Is",
               "operand" : {
                  "localId" : "213",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "211",
                     "type" : "Date",
                     "year" : {
                        "localId" : "210",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "212",
                     "value" : 1,
                     "unit" : "year",
                     "type" : "Quantity"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "214",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "222",
            "name" : "IsFalseRuntimeDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeDate",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "r" : "217",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "Date" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Is",
               "operand" : {
                  "localId" : "219",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "229",
            "name" : "IsTrueRuntimeTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "define ","IsTrueRuntimeTime",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "r" : "224",
                           "s" : [ {
                              "r" : "223",
                              "value" : [ "Time","(","12",")" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "1 ","'hour'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Is",
               "operand" : {
                  "localId" : "226",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "224",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "223",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "225",
                     "value" : 1,
                     "unit" : "hour",
                     "type" : "Quantity"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "235",
            "name" : "IsFalseRuntimeTime",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "define ","IsFalseRuntimeTime",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "Time" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Is",
               "operand" : {
                  "localId" : "232",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Time",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

