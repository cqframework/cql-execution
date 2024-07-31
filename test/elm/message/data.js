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
            "localId" : "211",
            "name" : "DoDivide",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function DoDivide(num Integer, den Integer):\n  " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Message","(" ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "r" : "217",
                              "s" : [ {
                                 "value" : [ "num" ]
                              } ]
                           }, {
                              "value" : [ " / " ]
                           }, {
                              "r" : "218",
                              "s" : [ {
                                 "value" : [ "den" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "r" : "224",
                              "s" : [ {
                                 "value" : [ "den" ]
                              } ]
                           }, {
                              "r" : "225",
                              "value" : [ " ","="," ","0" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'DivideByZero'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "'Error'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "228",
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
               "localId" : "231",
               "type" : "Message",
               "signature" : [ ],
               "source" : {
                  "localId" : "216",
                  "type" : "Divide",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "220",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "217",
                        "name" : "num",
                        "type" : "OperandRef"
                     }
                  }, {
                     "localId" : "222",
                     "type" : "ToDecimal",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "218",
                        "name" : "den",
                        "type" : "OperandRef"
                     }
                  } ]
               },
               "condition" : {
                  "localId" : "223",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "224",
                     "name" : "den",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "code" : {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "DivideByZero",
                  "type" : "Literal"
               },
               "severity" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Error",
                  "type" : "Literal"
               },
               "message" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cannot divide by zero",
                  "type" : "Literal"
               }
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "num",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "den",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "233",
            "name" : "oneOverTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","oneOverTwo",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "r" : "234",
                        "value" : [ "DoDivide","(","1",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "name" : "DoDivide",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "238",
            "name" : "oneOverZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","oneOverZero",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "239",
                        "value" : [ "DoDivide","(","1",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "name" : "DoDivide",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "240",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

