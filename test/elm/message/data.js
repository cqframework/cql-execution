/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Message
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function DoDivide(num Integer, den Integer):
  Message(num / den, den = 0, 'DivideByZero', 'Error', 'Cannot divide by zero')
define oneOverTwo: DoDivide(1, 2)
define oneOverZero: DoDivide(1, 0)
*/

module.exports['Message'] = {
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
            "localId" : "14",
            "name" : "DoDivide",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define function ","DoDivide","(","num"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ", ","den"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ "):\n  " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Message","(" ]
                        }, {
                           "r" : "6",
                           "s" : [ {
                              "r" : "4",
                              "s" : [ {
                                 "value" : [ "num" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "5",
                              "s" : [ {
                                 "value" : [ "den" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "r" : "7",
                              "s" : [ {
                                 "value" : [ "den" ]
                              } ]
                           }, {
                              "r" : "8",
                              "value" : [ " ","="," ","0" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "'DivideByZero'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "'Error'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "'Cannot divide by zero'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "Message",
               "source" : {
                  "localId" : "6",
                  "type" : "Divide",
                  "operand" : [ {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "4",
                        "name" : "num",
                        "type" : "OperandRef"
                     }
                  }, {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "5",
                        "name" : "den",
                        "type" : "OperandRef"
                     }
                  } ]
               },
               "condition" : {
                  "localId" : "9",
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "7",
                     "name" : "den",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "code" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "DivideByZero",
                  "type" : "Literal"
               },
               "severity" : {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Error",
                  "type" : "Literal"
               },
               "message" : {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cannot divide by zero",
                  "type" : "Literal"
               }
            },
            "operand" : [ {
               "name" : "num",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "den",
               "operandTypeSpecifier" : {
                  "localId" : "3",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "18",
            "name" : "oneOverTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","oneOverTwo",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "r" : "15",
                        "value" : [ "DoDivide","(","1",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "name" : "DoDivide",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "16",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "22",
            "name" : "oneOverZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","oneOverZero",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "19",
                        "value" : [ "DoDivide","(","1",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "name" : "DoDivide",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "19",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "20",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

