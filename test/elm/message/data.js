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
         "translatorVersion" : "3.22.0",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                     "r" : "242",
                     "s" : [ {
                        "r" : "242",
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
                           "r" : "227",
                           "s" : [ {
                              "r" : "228",
                              "s" : [ {
                                 "value" : [ "den" ]
                              } ]
                           }, {
                              "r" : "229",
                              "value" : [ " ","="," ","0" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "'DivideByZero'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "'Error'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "234",
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
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Message",
               "signature" : [ {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "220",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "num",
                        "type" : "OperandRef"
                     }
                  }, {
                     "localId" : "223",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "224",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "den",
                        "type" : "OperandRef"
                     }
                  } ]
               },
               "condition" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "den",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "code" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "DivideByZero",
                  "type" : "Literal"
               },
               "severity" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Error",
                  "type" : "Literal"
               },
               "message" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "den",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "oneOverTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","oneOverTwo",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "250",
                        "value" : [ "DoDivide","(","1",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "DoDivide",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "oneOverZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","oneOverZero",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "r" : "257",
                        "value" : [ "DoDivide","(","1",", ","0",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "DoDivide",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* Included
library Included
using Simple version '1.0.0'
context Patient

define function DoDivide(num Integer, den Integer):
  Message(num / den, den = 0, 'DivideByZero', 'Error', 'Cannot divide by zero in included')
*/

module.exports['Included'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "211",
            "s" : [ {
               "value" : [ "","library Included" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "Included"
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                     "r" : "242",
                     "s" : [ {
                        "r" : "242",
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
                           "r" : "227",
                           "s" : [ {
                              "r" : "228",
                              "s" : [ {
                                 "value" : [ "den" ]
                              } ]
                           }, {
                              "r" : "229",
                              "value" : [ " ","="," ","0" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "'DivideByZero'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "'Error'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "'Cannot divide by zero in included'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Message",
               "signature" : [ {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "source" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "Divide",
                  "signature" : [ {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "220",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "num",
                        "type" : "OperandRef"
                     }
                  }, {
                     "localId" : "223",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "224",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "den",
                        "type" : "OperandRef"
                     }
                  } ]
               },
               "condition" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Equal",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "den",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               },
               "code" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "DivideByZero",
                  "type" : "Literal"
               },
               "severity" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Error",
                  "type" : "Literal"
               },
               "message" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Cannot divide by zero in included",
                  "type" : "Literal"
               }
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "num",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "den",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         } ]
      }
   }
}

/* Retrieve
library Retrieve
using Simple version '1.0.0'
include Included called included
context Patient

define oneOverTwo: included.DoDivide(1, 2)
define oneOverZero: included.DoDivide(1, 0)
*/

module.exports['Retrieve'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "221",
            "s" : [ {
               "value" : [ "","library Retrieve" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "Retrieve"
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
      "includes" : {
         "def" : [ {
            "localId" : "207",
            "localIdentifier" : "included",
            "path" : "Included",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Included" ]
                     } ]
                  }, {
                     "value" : [ " called ","included" ]
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "oneOverTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","oneOverTwo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "included" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "DoDivide","(","1",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "DoDivide",
               "libraryName" : "included",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "oneOverZero",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","oneOverZero",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "included" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "DoDivide","(","1",", ","0",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "DoDivide",
               "libraryName" : "included",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

