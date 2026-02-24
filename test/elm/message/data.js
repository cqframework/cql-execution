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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "265",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DoDivide",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function DoDivide(num Integer, den Integer):\n  " ]
            }, {
              "r" : "249",
              "s" : [ {
                "r" : "249",
                "s" : [ {
                  "value" : [ "Message", "(" ]
                }, {
                  "r" : "220",
                  "s" : [ {
                    "r" : "221",
                    "s" : [ {
                      "value" : [ "num" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "222",
                    "s" : [ {
                      "value" : [ "den" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "231",
                  "s" : [ {
                    "r" : "232",
                    "s" : [ {
                      "value" : [ "den" ]
                    } ]
                  }, {
                    "r" : "233",
                    "value" : [ " ", "=", " ", "0" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "'DivideByZero'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "238",
                  "s" : [ {
                    "value" : [ "'Error'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "240",
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
          "type" : "Message",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "Divide",
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDecimal",
              "localId" : "224",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "225",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "221",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "num",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDecimal",
              "localId" : "227",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "228",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "den",
                "annotation" : [ ]
              }
            } ]
          },
          "condition" : {
            "type" : "Equal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "235",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "OperandRef",
              "localId" : "232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "den",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            } ]
          },
          "code" : {
            "type" : "Literal",
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "DivideByZero",
            "annotation" : [ ]
          },
          "severity" : {
            "type" : "Literal",
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Error",
            "annotation" : [ ]
          },
          "message" : {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Cannot divide by zero",
            "annotation" : [ ]
          }
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "num",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }, {
          "localId" : "216",
          "name" : "den",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "257",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "oneOverTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "257",
            "s" : [ {
              "value" : [ "", "define ", "oneOverTwo", ": " ]
            }, {
              "r" : "260",
              "s" : [ {
                "r" : "258",
                "value" : [ "DoDivide", "(", "1", ", ", "2", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "260",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "DoDivide",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "oneOverZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "oneOverZero", ": " ]
            }, {
              "r" : "268",
              "s" : [ {
                "r" : "266",
                "value" : [ "DoDivide", "(", "1", ", ", "0", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "268",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "DoDivide",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "269",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "270",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "212",
        "s" : [ {
          "value" : [ "", "library Included" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DoDivide",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function DoDivide(num Integer, den Integer):\n  " ]
            }, {
              "r" : "249",
              "s" : [ {
                "r" : "249",
                "s" : [ {
                  "value" : [ "Message", "(" ]
                }, {
                  "r" : "220",
                  "s" : [ {
                    "r" : "221",
                    "s" : [ {
                      "value" : [ "num" ]
                    } ]
                  }, {
                    "value" : [ " / " ]
                  }, {
                    "r" : "222",
                    "s" : [ {
                      "value" : [ "den" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "231",
                  "s" : [ {
                    "r" : "232",
                    "s" : [ {
                      "value" : [ "den" ]
                    } ]
                  }, {
                    "r" : "233",
                    "value" : [ " ", "=", " ", "0" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "'DivideByZero'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "238",
                  "s" : [ {
                    "value" : [ "'Error'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "240",
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
          "type" : "Message",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "Divide",
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ToDecimal",
              "localId" : "224",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "225",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "221",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "num",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToDecimal",
              "localId" : "227",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "228",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "den",
                "annotation" : [ ]
              }
            } ]
          },
          "condition" : {
            "type" : "Equal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "235",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "OperandRef",
              "localId" : "232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "den",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            } ]
          },
          "code" : {
            "type" : "Literal",
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "DivideByZero",
            "annotation" : [ ]
          },
          "severity" : {
            "type" : "Literal",
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Error",
            "annotation" : [ ]
          },
          "message" : {
            "type" : "Literal",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Cannot divide by zero in included",
            "annotation" : [ ]
          }
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "num",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }, {
          "localId" : "216",
          "name" : "den",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "225",
        "s" : [ {
          "value" : [ "", "library Retrieve" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
        "localId" : "208",
        "localIdentifier" : "included",
        "path" : "Included",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "Included" ]
              } ]
            }, {
              "value" : [ " called ", "included" ]
            } ]
          }
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "212",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "210",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "oneOverTwo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "define ", "oneOverTwo", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "included" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "220",
                "s" : [ {
                  "r" : "218",
                  "value" : [ "DoDivide", "(", "1", ", ", "2", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "DoDivide",
          "libraryName" : "included",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "222",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "oneOverZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "define ", "oneOverZero", ": " ]
            }, {
              "r" : "229",
              "s" : [ {
                "r" : "226",
                "s" : [ {
                  "value" : [ "included" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "229",
                "s" : [ {
                  "r" : "227",
                  "value" : [ "DoDivide", "(", "1", ", ", "0", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "DoDivide",
          "libraryName" : "included",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

