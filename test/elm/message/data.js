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
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "238"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function DoDivide(num Integer, den Integer):\n  " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Message", "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "num" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "217"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ " / " ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "den" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "218"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "216"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "den" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "224"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ " ", "=", " ", "0" ],
                            "r" : "225"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "223"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "'DivideByZero'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "226"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "'Error'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "227"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "'Cannot divide by zero'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "228"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "231"
                  },
                  "globalScope" : true
                } ],
                "r" : "231"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "Message",
          "localId" : "231",
          "signature" : [ ],
          "source" : {
            "type" : "Divide",
            "localId" : "216",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ToDecimal",
              "localId" : "220",
              "signature" : [ ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "217",
                "name" : "num"
              }
            }, {
              "type" : "ToDecimal",
              "localId" : "222",
              "signature" : [ ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "218",
                "name" : "den"
              }
            } ]
          },
          "condition" : {
            "type" : "Equal",
            "localId" : "223",
            "signature" : [ ],
            "operand" : [ {
              "type" : "OperandRef",
              "localId" : "224",
              "name" : "den"
            }, {
              "type" : "Literal",
              "localId" : "225",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0"
            } ]
          },
          "code" : {
            "type" : "Literal",
            "localId" : "226",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "DivideByZero"
          },
          "severity" : {
            "type" : "Literal",
            "localId" : "227",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Error"
          },
          "message" : {
            "type" : "Literal",
            "localId" : "228",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Cannot divide by zero"
          }
        },
        "name" : "DoDivide",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "name" : "num"
        }, {
          "localId" : "215",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "214",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "name" : "den"
        } ]
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "oneOverTwo", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "DoDivide", "(", "1", ", ", "2", ")" ],
                    "r" : "234"
                  },
                  "globalScope" : true
                } ],
                "r" : "236"
              },
              "globalScope" : true
            } ],
            "r" : "233"
          }
        } ],
        "localId" : "233",
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "236",
          "name" : "DoDivide",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "234",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }, {
            "type" : "Literal",
            "localId" : "235",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2"
          } ]
        },
        "name" : "oneOverTwo",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "oneOverZero", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "DoDivide", "(", "1", ", ", "0", ")" ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "241"
              },
              "globalScope" : true
            } ],
            "r" : "238"
          }
        } ],
        "localId" : "238",
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "241",
          "name" : "DoDivide",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "239",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }, {
            "type" : "Literal",
            "localId" : "240",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0"
          } ]
        },
        "name" : "oneOverZero",
        "context" : "Patient",
        "accessLevel" : "Public"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library Included" ]
          },
          "globalScope" : true
        } ],
        "r" : "211"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function DoDivide(num Integer, den Integer):\n  " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "Message", "(" ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "num" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "217"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ " / " ]
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "den" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "218"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "216"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ {
                              "name" : "{urn:hl7-org:cql-annotations:r1}s",
                              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                              "value" : {
                                "s" : [ "den" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "224"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ " ", "=", " ", "0" ],
                            "r" : "225"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "223"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "'DivideByZero'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "226"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "'Error'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "227"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "'Cannot divide by zero in included'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "228"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "231"
                  },
                  "globalScope" : true
                } ],
                "r" : "231"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "Message",
          "localId" : "231",
          "signature" : [ ],
          "source" : {
            "type" : "Divide",
            "localId" : "216",
            "signature" : [ ],
            "operand" : [ {
              "type" : "ToDecimal",
              "localId" : "220",
              "signature" : [ ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "217",
                "name" : "num"
              }
            }, {
              "type" : "ToDecimal",
              "localId" : "222",
              "signature" : [ ],
              "operand" : {
                "type" : "OperandRef",
                "localId" : "218",
                "name" : "den"
              }
            } ]
          },
          "condition" : {
            "type" : "Equal",
            "localId" : "223",
            "signature" : [ ],
            "operand" : [ {
              "type" : "OperandRef",
              "localId" : "224",
              "name" : "den"
            }, {
              "type" : "Literal",
              "localId" : "225",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0"
            } ]
          },
          "code" : {
            "type" : "Literal",
            "localId" : "226",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "DivideByZero"
          },
          "severity" : {
            "type" : "Literal",
            "localId" : "227",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Error"
          },
          "message" : {
            "type" : "Literal",
            "localId" : "228",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Cannot divide by zero in included"
          }
        },
        "name" : "DoDivide",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "name" : "num"
        }, {
          "localId" : "215",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "214",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "name" : "den"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library Retrieve" ]
          },
          "globalScope" : true
        } ],
        "r" : "219"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
      } ]
    },
    "includes" : {
      "def" : [ {
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "include " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Included" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " called ", "included" ]
              },
              "globalScope" : true
            } ],
            "r" : "207"
          }
        } ],
        "localId" : "207",
        "localIdentifier" : "included",
        "path" : "Included"
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
        "type" : "ExpressionDef",
        "localId" : "209",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "oneOverTwo", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "included" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "." ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DoDivide", "(", "1", ", ", "2", ")" ],
                        "r" : "215"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "217"
                  },
                  "globalScope" : true
                } ],
                "r" : "217"
              },
              "globalScope" : true
            } ],
            "r" : "213"
          }
        } ],
        "localId" : "213",
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "217",
          "name" : "DoDivide",
          "libraryName" : "included",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }, {
            "type" : "Literal",
            "localId" : "216",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2"
          } ]
        },
        "name" : "oneOverTwo",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "oneOverZero", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "included" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "220"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "." ]
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "DoDivide", "(", "1", ", ", "0", ")" ],
                        "r" : "221"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "223"
                  },
                  "globalScope" : true
                } ],
                "r" : "223"
              },
              "globalScope" : true
            } ],
            "r" : "219"
          }
        } ],
        "localId" : "219",
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "223",
          "name" : "DoDivide",
          "libraryName" : "included",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "221",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1"
          }, {
            "type" : "Literal",
            "localId" : "222",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0"
          } ]
        },
        "name" : "oneOverZero",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

