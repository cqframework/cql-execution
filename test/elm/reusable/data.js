/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* ExpressionDef
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Foo: 'Bar'
*/

module.exports['ExpressionDef'] = {
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
        "r" : "214",
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
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "value" : [ "'Bar'" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Bar",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* ExpressionRef
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Life: 42
define Foo: Life

define function ExpensiveFunction():
  First(expand Interval[1, 100000])

define ExpensiveStatement:
  ExpensiveFunction()

define ExpensiveStatementRef:
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement
*/

module.exports['ExpressionRef'] = {
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
        "r" : "247",
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
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Life",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Life", ": ", "42" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "42",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "value" : [ "Life" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ExpressionRef",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "Life",
          "annotation" : [ ]
        }
      }, {
        "type" : "FunctionDef",
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExpensiveFunction",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define function ExpensiveFunction():\n  " ]
            }, {
              "r" : "238",
              "s" : [ {
                "r" : "238",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "228",
                  "s" : [ {
                    "value" : [ "expand " ]
                  }, {
                    "r" : "224",
                    "s" : [ {
                      "r" : "222",
                      "value" : [ "Interval[", "1", ", ", "100000", "]" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "First",
          "localId" : "238",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "239",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Expand",
            "localId" : "228",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "232",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "233",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "signature" : [ {
              "type" : "IntervalTypeSpecifier",
              "localId" : "229",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "230",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "231",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "224",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "225",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "223",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "100000",
                "annotation" : [ ]
              }
            }, {
              "type" : "Null",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            } ]
          }
        },
        "operand" : [ ]
      }, {
        "localId" : "243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ExpensiveStatement",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "ExpensiveStatement", ":\n  " ]
            }, {
              "r" : "244",
              "s" : [ {
                "value" : [ "ExpensiveFunction", "()" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "244",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "ExpensiveFunction",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ ]
        }
      }, {
        "localId" : "247",
        "name" : "ExpensiveStatementRef",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "ExpensiveStatementRef", ":\n  " ]
            }, {
              "r" : "283",
              "s" : [ {
                "r" : "275",
                "s" : [ {
                  "r" : "260",
                  "s" : [ {
                    "r" : "250",
                    "s" : [ {
                      "r" : "248",
                      "s" : [ {
                        "value" : [ "ExpensiveStatement" ]
                      } ]
                    }, {
                      "value" : [ " union \n  " ]
                    }, {
                      "r" : "249",
                      "s" : [ {
                        "value" : [ "ExpensiveStatement" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " union \n  " ]
                  }, {
                    "r" : "259",
                    "s" : [ {
                      "value" : [ "ExpensiveStatement" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " union \n  " ]
                }, {
                  "r" : "268",
                  "s" : [ {
                    "value" : [ "ExpensiveStatement" ]
                  } ]
                } ]
              }, {
                "value" : [ " union \n  " ]
              }, {
                "r" : "282",
                "s" : [ {
                  "value" : [ "ExpensiveStatement" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "291",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "292",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Union",
          "localId" : "283",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "289",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "290",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "285",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "286",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "type" : "ListTypeSpecifier",
            "localId" : "287",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "288",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Union",
            "localId" : "275",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "280",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "281",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "276",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "277",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "type" : "ListTypeSpecifier",
              "localId" : "278",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "279",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ],
            "operand" : [ {
              "type" : "Union",
              "localId" : "250",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "257",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "253",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ListTypeSpecifier",
                "localId" : "255",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ],
              "operand" : [ {
                "type" : "ToList",
                "localId" : "251",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "ExpressionRef",
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "ExpensiveStatement",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ToList",
                "localId" : "252",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "ExpressionRef",
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "ExpensiveStatement",
                  "annotation" : [ ]
                }
              } ]
            }, {
              "type" : "Union",
              "localId" : "269",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "271",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ListTypeSpecifier",
                "localId" : "273",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ],
              "operand" : [ {
                "type" : "ToList",
                "localId" : "261",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "ExpressionRef",
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "ExpensiveStatement",
                  "annotation" : [ ]
                }
              }, {
                "type" : "ToList",
                "localId" : "270",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "ExpressionRef",
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "ExpensiveStatement",
                  "annotation" : [ ]
                }
              } ]
            } ]
          }, {
            "type" : "ToList",
            "localId" : "284",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "ExpressionRef",
              "localId" : "282",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "ExpensiveStatement",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

/* FunctionDefinitions
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function "foo bar"(a Integer, b Integer) :
  a + b

define testValue: "foo bar"(1,2)
*/

module.exports['FunctionDefinitions'] = {
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
        "r" : "227",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "foo bar",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function \"foo bar\"(a Integer, b Integer) :\n  " ]
            }, {
              "r" : "220",
              "s" : [ {
                "r" : "220",
                "s" : [ {
                  "r" : "221",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "222",
                  "s" : [ {
                    "value" : [ "b" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "b",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "a",
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
          "name" : "b",
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
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "testValue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "testValue", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "228",
                "value" : [ "\"foo bar\"", "(", "1", ",", "2", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "foo bar",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* FunctionOverloadsWithSingleArgument
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function process(a System.Integer) :
  a + 1

define function process(a System.String) :
  'Hello ' + a

define testValue1: process(1)
define testValue2: process('World')
*/

module.exports['FunctionOverloadsWithSingleArgument'] = {
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
        "r" : "242",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function process(a System.Integer) :\n  " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "r" : "218",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "r" : "219",
                  "value" : [ " + ", "1" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define function process(a System.String) :\n  " ]
            }, {
              "r" : "233",
              "s" : [ {
                "r" : "233",
                "s" : [ {
                  "r" : "228",
                  "s" : [ {
                    "value" : [ "'Hello '" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "230",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "233",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Hello ",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "a",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "224",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "236",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "testValue1",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define ", "testValue1", ": " ]
            }, {
              "r" : "238",
              "s" : [ {
                "r" : "237",
                "value" : [ "process", "(", "1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "238",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "testValue2", ": " ]
            }, {
              "r" : "245",
              "s" : [ {
                "value" : [ "process", "(" ]
              }, {
                "r" : "243",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "245",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* FunctionOverloadsWithMultipleArguments
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function process(inverse System.Boolean, a System.Integer) :
  if inverse then a - 1 else a + 1

define function process(inverse System.Boolean, a System.String) :
  if inverse then 'Goodbye ' + a else 'Hello ' + a

define testValue1: process(true, 1)
define testValue2: process(true, 'World')
*/

module.exports['FunctionOverloadsWithMultipleArguments'] = {
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
        "r" : "266",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function process(inverse System.Boolean, a System.Integer) :\n  " ]
            }, {
              "r" : "220",
              "s" : [ {
                "r" : "220",
                "s" : [ {
                  "value" : [ "if " ]
                }, {
                  "r" : "221",
                  "s" : [ {
                    "value" : [ "inverse" ]
                  } ]
                }, {
                  "value" : [ " then " ]
                }, {
                  "r" : "222",
                  "s" : [ {
                    "r" : "223",
                    "s" : [ {
                      "value" : [ "a" ]
                    } ]
                  }, {
                    "r" : "224",
                    "value" : [ " - ", "1" ]
                  } ]
                }, {
                  "value" : [ " else " ]
                }, {
                  "r" : "227",
                  "s" : [ {
                    "r" : "228",
                    "s" : [ {
                      "value" : [ "a" ]
                    } ]
                  }, {
                    "r" : "229",
                    "value" : [ " + ", "1" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "If",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "condition" : {
            "type" : "OperandRef",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "inverse",
            "annotation" : [ ]
          },
          "then" : {
            "type" : "Subtract",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "OperandRef",
              "localId" : "223",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "224",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            } ]
          },
          "else" : {
            "type" : "Add",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
              "type" : "OperandRef",
              "localId" : "228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "a",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            } ]
          }
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "inverse",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }
        }, {
          "localId" : "216",
          "name" : "a",
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
        "type" : "FunctionDef",
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define function process(inverse System.Boolean, a System.String) :\n  " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "if " ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "inverse" ]
                  } ]
                }, {
                  "value" : [ " then " ]
                }, {
                  "r" : "248",
                  "s" : [ {
                    "r" : "243",
                    "s" : [ {
                      "value" : [ "'Goodbye '" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "245",
                    "s" : [ {
                      "value" : [ "a" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " else " ]
                }, {
                  "r" : "255",
                  "s" : [ {
                    "r" : "250",
                    "s" : [ {
                      "value" : [ "'Hello '" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "252",
                    "s" : [ {
                      "value" : [ "a" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "If",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "condition" : {
            "type" : "OperandRef",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "inverse",
            "annotation" : [ ]
          },
          "then" : {
            "type" : "Concatenate",
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Goodbye ",
              "annotation" : [ ]
            }, {
              "type" : "OperandRef",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "a",
              "annotation" : [ ]
            } ]
          },
          "else" : {
            "type" : "Concatenate",
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Hello ",
              "annotation" : [ ]
            }, {
              "type" : "OperandRef",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "a",
              "annotation" : [ ]
            } ]
          }
        },
        "operand" : [ {
          "localId" : "234",
          "name" : "inverse",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }
        }, {
          "localId" : "236",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "258",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "testValue1",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "258",
            "s" : [ {
              "value" : [ "", "define ", "testValue1", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "r" : "259",
                "value" : [ "process", "(", "true", ", ", "1", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "testValue2", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "r" : "267",
                "value" : [ "process", "(", "true", ", " ]
              }, {
                "r" : "268",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "272",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* FunctionOverloadsWithDifferentNumberOfArguments
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function process(a System.String) :
  'Hello ' + a

define function process(a System.String, isSpanish System.Boolean) :
  if isSpanish then 'Hola ' + a + ' from Spain' else 'Hello ' + a + ' from England'

define testValue1: process('World')
define testValue2: process('World', true)
define testValue3: process('World', false)
*/

module.exports['FunctionOverloadsWithDifferentNumberOfArguments'] = {
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
        "r" : "278",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function process(a System.String) :\n  " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "223",
                "s" : [ {
                  "r" : "218",
                  "s" : [ {
                    "value" : [ "'Hello '" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "220",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Hello ",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "a",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define function process(a System.String, isSpanish System.Boolean) :\n  " ]
            }, {
              "r" : "232",
              "s" : [ {
                "r" : "232",
                "s" : [ {
                  "value" : [ "if " ]
                }, {
                  "r" : "233",
                  "s" : [ {
                    "value" : [ "isSpanish" ]
                  } ]
                }, {
                  "value" : [ " then " ]
                }, {
                  "r" : "246",
                  "s" : [ {
                    "r" : "241",
                    "s" : [ {
                      "r" : "236",
                      "s" : [ {
                        "value" : [ "'Hola '" ]
                      } ]
                    }, {
                      "value" : [ " + " ]
                    }, {
                      "r" : "238",
                      "s" : [ {
                        "value" : [ "a" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "242",
                    "s" : [ {
                      "value" : [ "' from Spain'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " else " ]
                }, {
                  "r" : "259",
                  "s" : [ {
                    "r" : "254",
                    "s" : [ {
                      "r" : "249",
                      "s" : [ {
                        "value" : [ "'Hello '" ]
                      } ]
                    }, {
                      "value" : [ " + " ]
                    }, {
                      "r" : "251",
                      "s" : [ {
                        "value" : [ "a" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "255",
                    "s" : [ {
                      "value" : [ "' from England'" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "If",
          "localId" : "232",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "condition" : {
            "type" : "OperandRef",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "isSpanish",
            "annotation" : [ ]
          },
          "then" : {
            "type" : "Concatenate",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : [ {
              "type" : "Concatenate",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : [ {
                "type" : "Literal",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hola ",
                "annotation" : [ ]
              }, {
                "type" : "OperandRef",
                "localId" : "238",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "a",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "242",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : " from Spain",
              "annotation" : [ ]
            } ]
          },
          "else" : {
            "type" : "Concatenate",
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : [ {
              "type" : "Concatenate",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : [ {
                "type" : "Literal",
                "localId" : "249",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "Hello ",
                "annotation" : [ ]
              }, {
                "type" : "OperandRef",
                "localId" : "251",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "a",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : " from England",
              "annotation" : [ ]
            } ]
          }
        },
        "operand" : [ {
          "localId" : "226",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }, {
          "localId" : "228",
          "name" : "isSpanish",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "262",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue1",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "262",
            "s" : [ {
              "value" : [ "", "define ", "testValue1", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "value" : [ "process", "(" ]
              }, {
                "r" : "263",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "269",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "269",
            "s" : [ {
              "value" : [ "", "define ", "testValue2", ": " ]
            }, {
              "r" : "273",
              "s" : [ {
                "value" : [ "process", "(" ]
              }, {
                "r" : "270",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              }, {
                "r" : "272",
                "value" : [ ", ", "true", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "273",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "278",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue3",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "testValue3", ": " ]
            }, {
              "r" : "282",
              "s" : [ {
                "value" : [ "process", "(" ]
              }, {
                "r" : "279",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              }, {
                "r" : "281",
                "value" : [ ", ", "false", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "282",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* FunctionOverloadsWithArgumentsFromCustomDataModel
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function process(e Simple.Encounter) :
  'Encounter ' + e.id

define function process(c Simple.Condition) :
  'Condition ' + c.id

define testValue1: process(First([Encounter]))
define testValue2: process(First([Condition]))
*/

module.exports['FunctionOverloadsWithArgumentsFromCustomDataModel'] = {
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
        "r" : "255",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function process(e Simple.Encounter) :\n  " ]
            }, {
              "r" : "224",
              "s" : [ {
                "r" : "224",
                "s" : [ {
                  "r" : "218",
                  "s" : [ {
                    "value" : [ "'Encounter '" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "221",
                  "s" : [ {
                    "r" : "220",
                    "s" : [ {
                      "value" : [ "e" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "221",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Encounter ",
            "annotation" : [ ]
          }, {
            "type" : "Property",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "id",
            "annotation" : [ ],
            "source" : {
              "type" : "OperandRef",
              "localId" : "220",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "name" : "e",
              "annotation" : [ ]
            }
          } ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "e",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "process",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "define function process(c Simple.Condition) :\n  " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "237",
                "s" : [ {
                  "r" : "231",
                  "s" : [ {
                    "value" : [ "'Condition '" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "234",
                  "s" : [ {
                    "r" : "233",
                    "s" : [ {
                      "value" : [ "c" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "234",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Condition ",
            "annotation" : [ ]
          }, {
            "type" : "Property",
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "id",
            "annotation" : [ ],
            "source" : {
              "type" : "OperandRef",
              "localId" : "233",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "name" : "c",
              "annotation" : [ ]
            }
          } ]
        },
        "operand" : [ {
          "localId" : "227",
          "name" : "c",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "240",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue1",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "240",
            "s" : [ {
              "value" : [ "", "define ", "testValue1", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "value" : [ "process", "(" ]
              }, {
                "r" : "248",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
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
          "type" : "FunctionRef",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "First",
            "localId" : "248",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "249",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "250",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "241",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "242",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "243",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "255",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "testValue2", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "value" : [ "process", "(" ]
              }, {
                "r" : "263",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "[", "Condition", "]" ]
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
          "type" : "FunctionRef",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "process",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "First",
            "localId" : "263",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "264",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "265",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "256",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "257",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "258",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

/* FluentFunctions
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define fluent function greet(name System.String) :
  'Hello ' + name + '!'

define fluent function add(a System.Integer, b System.Integer) :
  a + b

define testValue1: 'World'.greet()
define testValue2: 1.add(2)
*/

module.exports['FluentFunctions'] = {
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
        "r" : "252",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "greet",
        "context" : "Patient",
        "accessLevel" : "Public",
        "fluent" : true,
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define fluent function greet(name System.String) :\n  " ]
            }, {
              "r" : "229",
              "s" : [ {
                "r" : "229",
                "s" : [ {
                  "r" : "224",
                  "s" : [ {
                    "r" : "219",
                    "s" : [ {
                      "value" : [ "'Hello '" ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "221",
                    "s" : [ {
                      "value" : [ "name" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "225",
                  "s" : [ {
                    "value" : [ "'!'" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Concatenate",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Hello ",
              "annotation" : [ ]
            }, {
              "type" : "OperandRef",
              "localId" : "221",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "name",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "!",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "name",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "add",
        "context" : "Patient",
        "accessLevel" : "Public",
        "fluent" : true,
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define fluent function add(a System.Integer, b System.Integer) :\n  " ]
            }, {
              "r" : "238",
              "s" : [ {
                "r" : "238",
                "s" : [ {
                  "r" : "239",
                  "s" : [ {
                    "value" : [ "a" ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "240",
                  "s" : [ {
                    "value" : [ "b" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Add",
          "localId" : "238",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "a",
            "annotation" : [ ]
          }, {
            "type" : "OperandRef",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "b",
            "annotation" : [ ]
          } ]
        },
        "operand" : [ {
          "localId" : "232",
          "name" : "a",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }, {
          "localId" : "234",
          "name" : "b",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "245",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "testValue1",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "245",
            "s" : [ {
              "value" : [ "", "define ", "testValue1", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "r" : "246",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "248",
                "s" : [ {
                  "value" : [ "greet", "()" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "248",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "greet",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "249",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "252",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "testValue2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "252",
            "s" : [ {
              "value" : [ "", "define ", "testValue2", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "253",
                "value" : [ "1", "." ]
              }, {
                "r" : "255",
                "s" : [ {
                  "r" : "254",
                  "value" : [ "add", "(", "2", ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "add",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* FluentFunctionsOverloadCallingSelf
library FluentFunctionsOverloadCallingSelf
using Simple version '1.0.0'
context Patient

define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):
  target.id = option.option

define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):
  targetId = option.option

define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, target Tuple { id System.String }):
  exists (targetMatches O where O.targetMatches(target))

define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, targetId System.String):
  exists (targetMatches O where O.targetMatches(targetId))

define testOptionsList:
  {
    {
      option: 'test123'
    },
    {
      option: 'test341'
    }
  }

define matchTestFalse: First("testOptionsList").targetMatches('test789')
define matchTestTrue: First("testOptionsList").targetMatches('test123')

define matchTestsFalse: exists (({'test789', 'test719' }) T
  where First("testOptionsList").targetMatches(T))
define matchTestsTrue: exists (({'test341', 'test719' }) T
  where Last("testOptionsList").targetMatches(T))

define matchTestCallSelfFalse: "testOptionsList".targetMatches({id: 'test789'})
define matchTestCallSelfTrue: "testOptionsList".targetMatches({id: 'test123'})

define matchTestsCallSelfFalse: exists (({ {id: 'test789'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
define matchTestsCallSelfTrue: exists (({ {id: 'test341'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
*/

module.exports['FluentFunctionsOverloadCallingSelf'] = {
  "library" : {
    "localId" : "0",
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "CqlToElmError",
      "message" : "An operand identifier targetMatches is hiding another identifier of the same name.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "message" : "An operand identifier targetMatches is hiding another identifier of the same name.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "668",
        "s" : [ {
          "value" : [ "", "library FluentFunctionsOverloadCallingSelf" ]
        } ]
      }
    } ],
    "identifier" : {
      "id" : "FluentFunctionsOverloadCallingSelf"
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "targetMatches",
        "context" : "Patient",
        "accessLevel" : "Public",
        "fluent" : true,
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):\n  " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "230",
                "s" : [ {
                  "r" : "235",
                  "s" : [ {
                    "r" : "231",
                    "s" : [ {
                      "value" : [ "target" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "235",
                    "s" : [ {
                      "value" : [ "id" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " ", "=", " " ]
                }, {
                  "r" : "240",
                  "s" : [ {
                    "r" : "236",
                    "s" : [ {
                      "value" : [ "option" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "240",
                    "s" : [ {
                      "value" : [ "option" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Property",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "id",
            "annotation" : [ ],
            "source" : {
              "type" : "OperandRef",
              "localId" : "231",
              "name" : "target",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "232",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "233",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "234",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }, {
            "type" : "Property",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "option",
            "annotation" : [ ],
            "source" : {
              "type" : "OperandRef",
              "localId" : "236",
              "name" : "option",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "237",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "238",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "239",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          } ]
        },
        "operand" : [ {
          "localId" : "219",
          "name" : "option",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "213",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "216",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "217",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "214",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "215",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        }, {
          "localId" : "226",
          "name" : "target",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "220",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "223",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "224",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "221",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "targetMatches",
        "context" : "Patient",
        "accessLevel" : "Public",
        "fluent" : true,
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):\n  " ]
            }, {
              "r" : "256",
              "s" : [ {
                "r" : "256",
                "s" : [ {
                  "r" : "257",
                  "s" : [ {
                    "value" : [ "targetId" ]
                  } ]
                }, {
                  "value" : [ " ", "=", " " ]
                }, {
                  "r" : "262",
                  "s" : [ {
                    "r" : "258",
                    "s" : [ {
                      "value" : [ "option" ]
                    } ]
                  }, {
                    "value" : [ "." ]
                  }, {
                    "r" : "262",
                    "s" : [ {
                      "value" : [ "option" ]
                    } ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Equal",
          "localId" : "256",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "264",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "OperandRef",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "targetId",
            "annotation" : [ ]
          }, {
            "type" : "Property",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "path" : "option",
            "annotation" : [ ],
            "source" : {
              "type" : "OperandRef",
              "localId" : "258",
              "name" : "option",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "259",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "260",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "261",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          } ]
        },
        "operand" : [ {
          "localId" : "250",
          "name" : "option",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "244",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "247",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "248",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "245",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "246",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        }, {
          "localId" : "252",
          "name" : "targetId",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "targetMatches",
        "context" : "Patient",
        "accessLevel" : "Public",
        "fluent" : true,
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, target Tuple { id System.String }):\n  " ]
            }, {
              "r" : "288",
              "s" : [ {
                "r" : "288",
                "s" : [ {
                  "value" : [ "exists " ]
                }, {
                  "r" : "330",
                  "s" : [ {
                    "value" : [ "(" ]
                  }, {
                    "r" : "330",
                    "s" : [ {
                      "s" : [ {
                        "r" : "289",
                        "s" : [ {
                          "r" : "290",
                          "s" : [ {
                            "s" : [ {
                              "value" : [ "targetMatches" ]
                            } ]
                          } ]
                        }, {
                          "value" : [ " ", "O" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " " ]
                    }, {
                      "r" : "323",
                      "s" : [ {
                        "value" : [ "where " ]
                      }, {
                        "r" : "323",
                        "s" : [ {
                          "r" : "300",
                          "s" : [ {
                            "value" : [ "O" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "323",
                          "s" : [ {
                            "value" : [ "targetMatches", "(" ]
                          }, {
                            "r" : "304",
                            "s" : [ {
                              "value" : [ "target" ]
                            } ]
                          }, {
                            "value" : [ ")" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "288",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "339",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "340",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "341",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "342",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "330",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "335",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "336",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "337",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "338",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "source" : [ {
              "localId" : "289",
              "alias" : "O",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "295",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "296",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "297",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "298",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "expression" : {
                "type" : "OperandRef",
                "localId" : "290",
                "name" : "targetMatches",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "291",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "292",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "293",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                }
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "323",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "TupleTypeSpecifier",
                "localId" : "324",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "325",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "326",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "TupleTypeSpecifier",
                "localId" : "327",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "328",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "329",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              } ],
              "operand" : [ {
                "type" : "AliasRef",
                "localId" : "300",
                "name" : "O",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "301",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "302",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "303",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }, {
                "type" : "OperandRef",
                "localId" : "304",
                "name" : "target",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "305",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "306",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "307",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }
          }
        },
        "operand" : [ {
          "localId" : "277",
          "name" : "targetMatches",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "266",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "273",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "274",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "275",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "276",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "267",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "270",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "271",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "272",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "localId" : "268",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }, {
          "localId" : "284",
          "name" : "target",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "278",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "281",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "282",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "279",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "280",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        } ]
      }, {
        "type" : "FunctionDef",
        "localId" : "308",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "targetMatches",
        "context" : "Patient",
        "accessLevel" : "Public",
        "fluent" : true,
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "308",
            "s" : [ {
              "value" : [ "", "define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, targetId System.String):\n  " ]
            }, {
              "r" : "346",
              "s" : [ {
                "r" : "346",
                "s" : [ {
                  "value" : [ "exists " ]
                }, {
                  "r" : "368",
                  "s" : [ {
                    "value" : [ "(" ]
                  }, {
                    "r" : "368",
                    "s" : [ {
                      "s" : [ {
                        "r" : "347",
                        "s" : [ {
                          "r" : "348",
                          "s" : [ {
                            "s" : [ {
                              "value" : [ "targetMatches" ]
                            } ]
                          } ]
                        }, {
                          "value" : [ " ", "O" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " " ]
                    }, {
                      "r" : "363",
                      "s" : [ {
                        "value" : [ "where " ]
                      }, {
                        "r" : "363",
                        "s" : [ {
                          "r" : "358",
                          "s" : [ {
                            "value" : [ "O" ]
                          } ]
                        }, {
                          "value" : [ "." ]
                        }, {
                          "r" : "363",
                          "s" : [ {
                            "value" : [ "targetMatches", "(" ]
                          }, {
                            "r" : "362",
                            "s" : [ {
                              "value" : [ "targetId" ]
                            } ]
                          }, {
                            "value" : [ ")" ]
                          } ]
                        } ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "346",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "377",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "378",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "379",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "380",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "368",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "373",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "374",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "375",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "376",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "source" : [ {
              "localId" : "347",
              "alias" : "O",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "353",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "354",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "355",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "356",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "expression" : {
                "type" : "OperandRef",
                "localId" : "348",
                "name" : "targetMatches",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "349",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "350",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "351",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "352",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                }
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "363",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "TupleTypeSpecifier",
                "localId" : "364",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "365",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "366",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "367",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "AliasRef",
                "localId" : "358",
                "name" : "O",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "359",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "360",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "361",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }, {
                "type" : "OperandRef",
                "localId" : "362",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "targetId",
                "annotation" : [ ]
              } ]
            }
          }
        },
        "operand" : [ {
          "localId" : "320",
          "name" : "targetMatches",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "309",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "316",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "317",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "318",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "319",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "310",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "313",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "314",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "315",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "localId" : "311",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "312",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }
        }, {
          "localId" : "322",
          "name" : "targetId",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "321",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "383",
        "name" : "testOptionsList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "383",
            "s" : [ {
              "value" : [ "", "define ", "testOptionsList", ":\n  " ]
            }, {
              "r" : "384",
              "s" : [ {
                "value" : [ "{\n    " ]
              }, {
                "r" : "385",
                "s" : [ {
                  "value" : [ "{\n      " ]
                }, {
                  "s" : [ {
                    "value" : [ "option", ": " ]
                  }, {
                    "r" : "386",
                    "s" : [ {
                      "value" : [ "'test123'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "\n    }" ]
                } ]
              }, {
                "value" : [ ",\n    " ]
              }, {
                "r" : "391",
                "s" : [ {
                  "value" : [ "{\n      " ]
                }, {
                  "s" : [ {
                    "value" : [ "option", ": " ]
                  }, {
                    "r" : "392",
                    "s" : [ {
                      "value" : [ "'test341'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "\n    }" ]
                } ]
              }, {
                "value" : [ "\n  }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "401",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "402",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "403",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "404",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "384",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "397",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "398",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "399",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "400",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "element" : [ {
            "type" : "Tuple",
            "localId" : "385",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "388",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "389",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "option",
              "value" : {
                "type" : "Literal",
                "localId" : "386",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test123",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "391",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "394",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "395",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "option",
              "value" : {
                "type" : "Literal",
                "localId" : "392",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test341",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "407",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "407",
            "s" : [ {
              "value" : [ "", "define ", "matchTestFalse", ": " ]
            }, {
              "r" : "429",
              "s" : [ {
                "r" : "419",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "408",
                  "s" : [ {
                    "value" : [ "\"testOptionsList\"" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "429",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "427",
                  "s" : [ {
                    "value" : [ "'test789'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "429",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "430",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "431",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "432",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "433",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "First",
            "localId" : "419",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "424",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "425",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "426",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "420",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "421",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "422",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "423",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "408",
              "name" : "testOptionsList",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "409",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "410",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "411",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "412",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }
            }
          }, {
            "type" : "Literal",
            "localId" : "427",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "test789",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "436",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "436",
            "s" : [ {
              "value" : [ "", "define ", "matchTestTrue", ": " ]
            }, {
              "r" : "458",
              "s" : [ {
                "r" : "448",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "437",
                  "s" : [ {
                    "value" : [ "\"testOptionsList\"" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "458",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "456",
                  "s" : [ {
                    "value" : [ "'test123'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "458",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "459",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "460",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "461",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "462",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "First",
            "localId" : "448",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "453",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "454",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "455",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "449",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "450",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "451",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "452",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "437",
              "name" : "testOptionsList",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "438",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "439",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "440",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "441",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }
            }
          }, {
            "type" : "Literal",
            "localId" : "456",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "test123",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "465",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "465",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsFalse", ": " ]
            }, {
              "r" : "466",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "505",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "505",
                  "s" : [ {
                    "s" : [ {
                      "r" : "467",
                      "s" : [ {
                        "r" : "468",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "468",
                          "s" : [ {
                            "value" : [ "{" ]
                          }, {
                            "r" : "469",
                            "s" : [ {
                              "value" : [ "'test789'" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "471",
                            "s" : [ {
                              "value" : [ "'test719'" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "500",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "500",
                      "s" : [ {
                        "r" : "491",
                        "s" : [ {
                          "value" : [ "First", "(" ]
                        }, {
                          "r" : "480",
                          "s" : [ {
                            "value" : [ "\"testOptionsList\"" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "500",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "499",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "466",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "510",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "511",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "505",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "508",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "509",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "467",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "477",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "478",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "468",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "475",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "476",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "469",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test789",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "471",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test719",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "500",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "TupleTypeSpecifier",
                "localId" : "501",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "502",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "503",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "504",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "First",
                "localId" : "491",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "496",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "497",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "498",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "signature" : [ {
                  "type" : "ListTypeSpecifier",
                  "localId" : "492",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "493",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "494",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "495",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "480",
                  "name" : "testOptionsList",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "481",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "482",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "483",
                        "name" : "option",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "484",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      } ]
                    }
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "499",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "T",
                "annotation" : [ ]
              } ]
            }
          }
        }
      }, {
        "localId" : "514",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "514",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsTrue", ": " ]
            }, {
              "r" : "515",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "554",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "554",
                  "s" : [ {
                    "s" : [ {
                      "r" : "516",
                      "s" : [ {
                        "r" : "517",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "517",
                          "s" : [ {
                            "value" : [ "{" ]
                          }, {
                            "r" : "518",
                            "s" : [ {
                              "value" : [ "'test341'" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "520",
                            "s" : [ {
                              "value" : [ "'test719'" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "549",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "549",
                      "s" : [ {
                        "r" : "540",
                        "s" : [ {
                          "value" : [ "Last", "(" ]
                        }, {
                          "r" : "529",
                          "s" : [ {
                            "value" : [ "\"testOptionsList\"" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "549",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "548",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "515",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "559",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "560",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "554",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "557",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "558",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "516",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "526",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "527",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "517",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "524",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "525",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "518",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test341",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "520",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test719",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "549",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "TupleTypeSpecifier",
                "localId" : "550",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "551",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "552",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "553",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Last",
                "localId" : "540",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "545",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "546",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "547",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "signature" : [ {
                  "type" : "ListTypeSpecifier",
                  "localId" : "541",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "542",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "543",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "544",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "529",
                  "name" : "testOptionsList",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "530",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "531",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "532",
                        "name" : "option",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "533",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      } ]
                    }
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "548",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "T",
                "annotation" : [ ]
              } ]
            }
          }
        }
      }, {
        "localId" : "563",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestCallSelfFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "563",
            "s" : [ {
              "value" : [ "", "define ", "matchTestCallSelfFalse", ": " ]
            }, {
              "r" : "575",
              "s" : [ {
                "r" : "564",
                "s" : [ {
                  "value" : [ "\"testOptionsList\"" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "575",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "569",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "570",
                      "s" : [ {
                        "value" : [ "'test789'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "575",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "576",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "577",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "578",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "579",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "580",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "581",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "582",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "564",
            "name" : "testOptionsList",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "565",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "566",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "567",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "568",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }, {
            "type" : "Tuple",
            "localId" : "569",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "572",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "573",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "574",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "id",
              "value" : {
                "type" : "Literal",
                "localId" : "570",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test789",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "585",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestCallSelfTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "585",
            "s" : [ {
              "value" : [ "", "define ", "matchTestCallSelfTrue", ": " ]
            }, {
              "r" : "597",
              "s" : [ {
                "r" : "586",
                "s" : [ {
                  "value" : [ "\"testOptionsList\"" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "597",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "591",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "592",
                      "s" : [ {
                        "value" : [ "'test123'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "597",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "598",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "599",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "600",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "601",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "602",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "603",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "604",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "586",
            "name" : "testOptionsList",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "587",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "588",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "589",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "590",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }, {
            "type" : "Tuple",
            "localId" : "591",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "594",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "595",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "596",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "id",
              "value" : {
                "type" : "Literal",
                "localId" : "592",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test123",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "607",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsCallSelfFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "607",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsCallSelfFalse", ": " ]
            }, {
              "r" : "608",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "653",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "653",
                  "s" : [ {
                    "s" : [ {
                      "r" : "609",
                      "s" : [ {
                        "r" : "610",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "610",
                          "s" : [ {
                            "value" : [ "{ " ]
                          }, {
                            "r" : "611",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "612",
                                "s" : [ {
                                  "value" : [ "'test789'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "617",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "618",
                                "s" : [ {
                                  "value" : [ "'test719'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "645",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "645",
                      "s" : [ {
                        "r" : "636",
                        "s" : [ {
                          "value" : [ "\"testOptionsList\"" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "645",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "641",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "608",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "662",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "663",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "664",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "665",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "653",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "658",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "659",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "660",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "661",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "source" : [ {
              "localId" : "609",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "631",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "632",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "633",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "634",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "610",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "627",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "628",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "629",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "630",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                },
                "element" : [ {
                  "type" : "Tuple",
                  "localId" : "611",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "614",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "615",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "616",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "612",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test789",
                      "annotation" : [ ]
                    }
                  } ]
                }, {
                  "type" : "Tuple",
                  "localId" : "617",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "620",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "621",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "622",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "618",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test719",
                      "annotation" : [ ]
                    }
                  } ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "645",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "646",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "647",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "648",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "649",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }, {
                "type" : "TupleTypeSpecifier",
                "localId" : "650",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "651",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "652",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              } ],
              "operand" : [ {
                "type" : "ExpressionRef",
                "localId" : "636",
                "name" : "testOptionsList",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "637",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "638",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "639",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "640",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "641",
                "name" : "T",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "642",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "643",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "644",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "668",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsCallSelfTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "668",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsCallSelfTrue", ": " ]
            }, {
              "r" : "669",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "714",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "714",
                  "s" : [ {
                    "s" : [ {
                      "r" : "670",
                      "s" : [ {
                        "r" : "671",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "671",
                          "s" : [ {
                            "value" : [ "{ " ]
                          }, {
                            "r" : "672",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "673",
                                "s" : [ {
                                  "value" : [ "'test341'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "678",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "679",
                                "s" : [ {
                                  "value" : [ "'test719'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "706",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "706",
                      "s" : [ {
                        "r" : "697",
                        "s" : [ {
                          "value" : [ "\"testOptionsList\"" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "706",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "702",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "669",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "723",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "724",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "725",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "726",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "714",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "719",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "720",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "721",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "722",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "source" : [ {
              "localId" : "670",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "692",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "693",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "694",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "695",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "671",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "688",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "689",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "690",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "691",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                },
                "element" : [ {
                  "type" : "Tuple",
                  "localId" : "672",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "675",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "676",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "677",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "673",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test341",
                      "annotation" : [ ]
                    }
                  } ]
                }, {
                  "type" : "Tuple",
                  "localId" : "678",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "681",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "682",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "683",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "679",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test719",
                      "annotation" : [ ]
                    }
                  } ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "706",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "707",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "708",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "709",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "710",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }, {
                "type" : "TupleTypeSpecifier",
                "localId" : "711",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "712",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "713",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              } ],
              "operand" : [ {
                "type" : "ExpressionRef",
                "localId" : "697",
                "name" : "testOptionsList",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "698",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "699",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "700",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "701",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "702",
                "name" : "T",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "703",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "704",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "705",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }
          }
        }
      } ]
    }
  }
}

/* FluentFunctionsOverloadCallingSelfFromOtherLibrary
library TestSnippet version '1'
using Simple version '1.0.0'
include FluentFunctionsOverloadCallingSelf called FluentFunctionsOverloadCallingSelf
context Patient

define testOptionsList:
  {
    {
      option: 'test123'
    },
    {
      option: 'test341'
    }
  }

define matchTestFalse: First("testOptionsList").targetMatches('test789')
define matchTestTrue: First("testOptionsList").targetMatches('test123')

define matchTestsFalse: exists (({'test789', 'test719' }) T
  where First("testOptionsList").targetMatches(T))
define matchTestsTrue: exists (({'test341', 'test719' }) T
  where Last("testOptionsList").targetMatches(T))

define matchTestCallSelfFalse: "testOptionsList".targetMatches({id: 'test789'})
define matchTestCallSelfTrue: "testOptionsList".targetMatches({id: 'test123'})

define matchTestsCallSelfFalse: exists (({ {id: 'test789'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
define matchTestsCallSelfTrue: exists (({ {id: 'test341'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
*/

module.exports['FluentFunctionsOverloadCallingSelfFromOtherLibrary'] = {
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
        "r" : "501",
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
    "includes" : {
      "def" : [ {
        "localId" : "208",
        "localIdentifier" : "FluentFunctionsOverloadCallingSelf",
        "path" : "FluentFunctionsOverloadCallingSelf",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "include " ]
            }, {
              "s" : [ {
                "value" : [ "FluentFunctionsOverloadCallingSelf" ]
              } ]
            }, {
              "value" : [ " called ", "FluentFunctionsOverloadCallingSelf" ]
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
        "name" : "testOptionsList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "define ", "testOptionsList", ":\n  " ]
            }, {
              "r" : "217",
              "s" : [ {
                "value" : [ "{\n    " ]
              }, {
                "r" : "218",
                "s" : [ {
                  "value" : [ "{\n      " ]
                }, {
                  "s" : [ {
                    "value" : [ "option", ": " ]
                  }, {
                    "r" : "219",
                    "s" : [ {
                      "value" : [ "'test123'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "\n    }" ]
                } ]
              }, {
                "value" : [ ",\n    " ]
              }, {
                "r" : "224",
                "s" : [ {
                  "value" : [ "{\n      " ]
                }, {
                  "s" : [ {
                    "value" : [ "option", ": " ]
                  }, {
                    "r" : "225",
                    "s" : [ {
                      "value" : [ "'test341'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "\n    }" ]
                } ]
              }, {
                "value" : [ "\n  }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "234",
          "annotation" : [ ],
          "elementType" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "235",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "236",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "237",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "217",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "230",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "231",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "232",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          },
          "element" : [ {
            "type" : "Tuple",
            "localId" : "218",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "222",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "option",
              "value" : {
                "type" : "Literal",
                "localId" : "219",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test123",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "Tuple",
            "localId" : "224",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "227",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "228",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "option",
              "value" : {
                "type" : "Literal",
                "localId" : "225",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test341",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "240",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "240",
            "s" : [ {
              "value" : [ "", "define ", "matchTestFalse", ": " ]
            }, {
              "r" : "262",
              "s" : [ {
                "r" : "252",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "\"testOptionsList\"" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "262",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "260",
                  "s" : [ {
                    "value" : [ "'test789'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "262",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "libraryName" : "FluentFunctionsOverloadCallingSelf",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "263",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "264",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "265",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "First",
            "localId" : "252",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "257",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "258",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "253",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "254",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "255",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "256",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "241",
              "name" : "testOptionsList",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "242",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "243",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "244",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "245",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }
            }
          }, {
            "type" : "Literal",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "test789",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "269",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "269",
            "s" : [ {
              "value" : [ "", "define ", "matchTestTrue", ": " ]
            }, {
              "r" : "291",
              "s" : [ {
                "r" : "281",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "270",
                  "s" : [ {
                    "value" : [ "\"testOptionsList\"" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "291",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "289",
                  "s" : [ {
                    "value" : [ "'test123'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "291",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "libraryName" : "FluentFunctionsOverloadCallingSelf",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "TupleTypeSpecifier",
            "localId" : "292",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "293",
              "name" : "option",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "294",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "295",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "First",
            "localId" : "281",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "286",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "287",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "288",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "282",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "283",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "284",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "285",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "source" : {
              "type" : "ExpressionRef",
              "localId" : "270",
              "name" : "testOptionsList",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "271",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "272",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "273",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "274",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }
            }
          }, {
            "type" : "Literal",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "test123",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "298",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "298",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsFalse", ": " ]
            }, {
              "r" : "299",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "338",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "338",
                  "s" : [ {
                    "s" : [ {
                      "r" : "300",
                      "s" : [ {
                        "r" : "301",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "301",
                          "s" : [ {
                            "value" : [ "{" ]
                          }, {
                            "r" : "302",
                            "s" : [ {
                              "value" : [ "'test789'" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "304",
                            "s" : [ {
                              "value" : [ "'test719'" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "333",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "333",
                      "s" : [ {
                        "r" : "324",
                        "s" : [ {
                          "value" : [ "First", "(" ]
                        }, {
                          "r" : "313",
                          "s" : [ {
                            "value" : [ "\"testOptionsList\"" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "333",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "332",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "299",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "343",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "344",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "338",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "341",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "342",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "300",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "310",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "301",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "308",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "309",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test789",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test719",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "333",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "libraryName" : "FluentFunctionsOverloadCallingSelf",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "TupleTypeSpecifier",
                "localId" : "334",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "335",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "336",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "337",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "First",
                "localId" : "324",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "329",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "330",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "331",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "signature" : [ {
                  "type" : "ListTypeSpecifier",
                  "localId" : "325",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "326",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "327",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "328",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "313",
                  "name" : "testOptionsList",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "314",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "315",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "316",
                        "name" : "option",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "317",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      } ]
                    }
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "332",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "T",
                "annotation" : [ ]
              } ]
            }
          }
        }
      }, {
        "localId" : "347",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "347",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsTrue", ": " ]
            }, {
              "r" : "348",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "387",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "387",
                  "s" : [ {
                    "s" : [ {
                      "r" : "349",
                      "s" : [ {
                        "r" : "350",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "350",
                          "s" : [ {
                            "value" : [ "{" ]
                          }, {
                            "r" : "351",
                            "s" : [ {
                              "value" : [ "'test341'" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "353",
                            "s" : [ {
                              "value" : [ "'test719'" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "382",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "382",
                      "s" : [ {
                        "r" : "373",
                        "s" : [ {
                          "value" : [ "Last", "(" ]
                        }, {
                          "r" : "362",
                          "s" : [ {
                            "value" : [ "\"testOptionsList\"" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "382",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "381",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "348",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "392",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "393",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "387",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "390",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "391",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "source" : [ {
              "localId" : "349",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "359",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "350",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "357",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "358",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test341",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "353",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test719",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "libraryName" : "FluentFunctionsOverloadCallingSelf",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "TupleTypeSpecifier",
                "localId" : "383",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "384",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "385",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "386",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Last",
                "localId" : "373",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "378",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "379",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "380",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                },
                "signature" : [ {
                  "type" : "ListTypeSpecifier",
                  "localId" : "374",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "375",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "376",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "377",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                } ],
                "source" : {
                  "type" : "ExpressionRef",
                  "localId" : "362",
                  "name" : "testOptionsList",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "localId" : "363",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "TupleTypeSpecifier",
                      "localId" : "364",
                      "annotation" : [ ],
                      "element" : [ {
                        "localId" : "365",
                        "name" : "option",
                        "annotation" : [ ],
                        "elementType" : {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "366",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }
                      } ]
                    }
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "381",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "T",
                "annotation" : [ ]
              } ]
            }
          }
        }
      }, {
        "localId" : "396",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestCallSelfFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "396",
            "s" : [ {
              "value" : [ "", "define ", "matchTestCallSelfFalse", ": " ]
            }, {
              "r" : "408",
              "s" : [ {
                "r" : "397",
                "s" : [ {
                  "value" : [ "\"testOptionsList\"" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "408",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "402",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "403",
                      "s" : [ {
                        "value" : [ "'test789'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "408",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "libraryName" : "FluentFunctionsOverloadCallingSelf",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "409",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "410",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "411",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "413",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "414",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "415",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "397",
            "name" : "testOptionsList",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "398",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "399",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "400",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "401",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }, {
            "type" : "Tuple",
            "localId" : "402",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "405",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "406",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "407",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "id",
              "value" : {
                "type" : "Literal",
                "localId" : "403",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test789",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "418",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestCallSelfTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "418",
            "s" : [ {
              "value" : [ "", "define ", "matchTestCallSelfTrue", ": " ]
            }, {
              "r" : "430",
              "s" : [ {
                "r" : "419",
                "s" : [ {
                  "value" : [ "\"testOptionsList\"" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "430",
                "s" : [ {
                  "value" : [ "targetMatches", "(" ]
                }, {
                  "r" : "424",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "425",
                      "s" : [ {
                        "value" : [ "'test123'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "FunctionRef",
          "localId" : "430",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "targetMatches",
          "libraryName" : "FluentFunctionsOverloadCallingSelf",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "431",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "432",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "433",
                "name" : "option",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "434",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          }, {
            "type" : "TupleTypeSpecifier",
            "localId" : "435",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "436",
              "name" : "id",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "437",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          } ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "419",
            "name" : "testOptionsList",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "420",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "421",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "422",
                  "name" : "option",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "423",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            }
          }, {
            "type" : "Tuple",
            "localId" : "424",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "427",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "428",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "429",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "id",
              "value" : {
                "type" : "Literal",
                "localId" : "425",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "test123",
                "annotation" : [ ]
              }
            } ]
          } ]
        }
      }, {
        "localId" : "440",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsCallSelfFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "440",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsCallSelfFalse", ": " ]
            }, {
              "r" : "441",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "486",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "486",
                  "s" : [ {
                    "s" : [ {
                      "r" : "442",
                      "s" : [ {
                        "r" : "443",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "443",
                          "s" : [ {
                            "value" : [ "{ " ]
                          }, {
                            "r" : "444",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "445",
                                "s" : [ {
                                  "value" : [ "'test789'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "450",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "451",
                                "s" : [ {
                                  "value" : [ "'test719'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "478",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "478",
                      "s" : [ {
                        "r" : "469",
                        "s" : [ {
                          "value" : [ "\"testOptionsList\"" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "478",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "474",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "441",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "495",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "496",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "497",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "498",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "486",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "491",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "492",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "493",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "494",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "source" : [ {
              "localId" : "442",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "464",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "465",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "466",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "467",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "443",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "460",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "461",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "462",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "463",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                },
                "element" : [ {
                  "type" : "Tuple",
                  "localId" : "444",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "447",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "448",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "449",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "445",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test789",
                      "annotation" : [ ]
                    }
                  } ]
                }, {
                  "type" : "Tuple",
                  "localId" : "450",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "453",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "454",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "455",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "451",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test719",
                      "annotation" : [ ]
                    }
                  } ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "478",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "libraryName" : "FluentFunctionsOverloadCallingSelf",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "479",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "480",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "481",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "482",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }, {
                "type" : "TupleTypeSpecifier",
                "localId" : "483",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "484",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "485",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              } ],
              "operand" : [ {
                "type" : "ExpressionRef",
                "localId" : "469",
                "name" : "testOptionsList",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "470",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "471",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "472",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "473",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "474",
                "name" : "T",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "475",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "476",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "477",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }
          }
        }
      }, {
        "localId" : "501",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "matchTestsCallSelfTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "501",
            "s" : [ {
              "value" : [ "", "define ", "matchTestsCallSelfTrue", ": " ]
            }, {
              "r" : "502",
              "s" : [ {
                "value" : [ "exists " ]
              }, {
                "r" : "547",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "547",
                  "s" : [ {
                    "s" : [ {
                      "r" : "503",
                      "s" : [ {
                        "r" : "504",
                        "s" : [ {
                          "value" : [ "(" ]
                        }, {
                          "r" : "504",
                          "s" : [ {
                            "value" : [ "{ " ]
                          }, {
                            "r" : "505",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "506",
                                "s" : [ {
                                  "value" : [ "'test341'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ ", " ]
                          }, {
                            "r" : "511",
                            "s" : [ {
                              "value" : [ "{" ]
                            }, {
                              "s" : [ {
                                "value" : [ "id", ": " ]
                              }, {
                                "r" : "512",
                                "s" : [ {
                                  "value" : [ "'test719'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ "}" ]
                            } ]
                          }, {
                            "value" : [ " }" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      }, {
                        "value" : [ " ", "T" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "\n  " ]
                  }, {
                    "r" : "539",
                    "s" : [ {
                      "value" : [ "where " ]
                    }, {
                      "r" : "539",
                      "s" : [ {
                        "r" : "530",
                        "s" : [ {
                          "value" : [ "\"testOptionsList\"" ]
                        } ]
                      }, {
                        "value" : [ "." ]
                      }, {
                        "r" : "539",
                        "s" : [ {
                          "value" : [ "targetMatches", "(" ]
                        }, {
                          "r" : "535",
                          "s" : [ {
                            "value" : [ "T" ]
                          } ]
                        }, {
                          "value" : [ ")" ]
                        } ]
                      } ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Exists",
          "localId" : "502",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "556",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "557",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "558",
                "name" : "id",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "559",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            }
          } ],
          "operand" : {
            "type" : "Query",
            "localId" : "547",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "552",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "553",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "554",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "555",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              }
            },
            "source" : [ {
              "localId" : "503",
              "alias" : "T",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "525",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "526",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "527",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "528",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              },
              "expression" : {
                "type" : "List",
                "localId" : "504",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "521",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "522",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "523",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "524",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                },
                "element" : [ {
                  "type" : "Tuple",
                  "localId" : "505",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "508",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "509",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "510",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "506",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test341",
                      "annotation" : [ ]
                    }
                  } ]
                }, {
                  "type" : "Tuple",
                  "localId" : "511",
                  "annotation" : [ ],
                  "resultTypeSpecifier" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "514",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "515",
                      "name" : "id",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "516",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  },
                  "element" : [ {
                    "name" : "id",
                    "value" : {
                      "type" : "Literal",
                      "localId" : "512",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "test719",
                      "annotation" : [ ]
                    }
                  } ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "where" : {
              "type" : "FunctionRef",
              "localId" : "539",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "targetMatches",
              "libraryName" : "FluentFunctionsOverloadCallingSelf",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "540",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "541",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "542",
                    "name" : "option",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "543",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              }, {
                "type" : "TupleTypeSpecifier",
                "localId" : "544",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "545",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "546",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              } ],
              "operand" : [ {
                "type" : "ExpressionRef",
                "localId" : "530",
                "name" : "testOptionsList",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "531",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "localId" : "532",
                    "annotation" : [ ],
                    "element" : [ {
                      "localId" : "533",
                      "name" : "option",
                      "annotation" : [ ],
                      "elementType" : {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "534",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }
                    } ]
                  }
                }
              }, {
                "type" : "AliasRef",
                "localId" : "535",
                "name" : "T",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "TupleTypeSpecifier",
                  "localId" : "536",
                  "annotation" : [ ],
                  "element" : [ {
                    "localId" : "537",
                    "name" : "id",
                    "annotation" : [ ],
                    "elementType" : {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "538",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }
                  } ]
                }
              } ]
            }
          }
        }
      } ]
    }
  }
}

