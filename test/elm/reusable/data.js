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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "214",
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Life",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Life",": ","42" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "42",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Life" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "Life",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExpensiveFunction",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define function ExpensiveFunction():\n  " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "228",
                           "s" : [ {
                              "value" : [ "expand " ]
                           }, {
                              "r" : "224",
                              "s" : [ {
                                 "r" : "222",
                                 "value" : [ "Interval[","1",", ","100000","]" ]
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
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "First",
               "signature" : [ {
                  "localId" : "239",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "228",
                  "type" : "Expand",
                  "resultTypeSpecifier" : {
                     "localId" : "232",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "233",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ {
                     "localId" : "229",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "224",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "225",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "226",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "223",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100000",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "Null"
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
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatement",":\n  " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "value" : [ "ExpensiveFunction","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "ExpensiveFunction",
               "type" : "FunctionRef",
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
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatementRef",":\n  " ]
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
               "localId" : "291",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "283",
               "type" : "Union",
               "resultTypeSpecifier" : {
                  "localId" : "289",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "290",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "285",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "287",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "288",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "275",
                  "type" : "Union",
                  "resultTypeSpecifier" : {
                     "localId" : "280",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "281",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ {
                     "localId" : "276",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "277",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "278",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "279",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "250",
                     "type" : "Union",
                     "resultTypeSpecifier" : {
                        "localId" : "257",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "258",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ {
                        "localId" : "253",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "254",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "255",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "256",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "operand" : [ {
                        "localId" : "251",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "248",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "252",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "249",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "localId" : "269",
                     "type" : "Union",
                     "signature" : [ {
                        "localId" : "271",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "272",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "273",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "274",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "operand" : [ {
                        "localId" : "261",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "259",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "270",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "268",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "284",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "ExpensiveStatement",
                     "type" : "ExpressionRef"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "foo bar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function \"foo bar\"(a Integer, b Integer) :\n  " ]
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "216",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","testValue",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "228",
                        "value" : [ "\"foo bar\"","(","1",",","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "foo bar",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "242",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function process(a System.Integer) :\n  " ]
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
                           "value" : [ " + ","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String) :\n  " ]
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
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "224",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "237",
                        "value" : [ "process","(","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "process","(" ]
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
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function process(inverse System.Boolean, a System.Integer) :\n  " ]
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
                              "value" : [ " - ","1" ]
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
                              "value" : [ " + ","1" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "If",
               "condition" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Subtract",
                  "signature" : [ {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Add",
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
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "216",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define function process(inverse System.Boolean, a System.String) :\n  " ]
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
               "localId" : "240",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "If",
               "condition" : {
                  "localId" : "241",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Goodbye ",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               },
               "else" : {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "234",
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "236",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "259",
                        "value" : [ "process","(","true",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "267",
                        "value" : [ "process","(","true",", " ]
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
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "278",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String) :\n  " ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String, isSpanish System.Boolean) :\n  " ]
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
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "If",
               "condition" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "isSpanish",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hola ",
                        "type" : "Literal"
                     }, {
                        "localId" : "238",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from Spain",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "249",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello ",
                        "type" : "Literal"
                     }, {
                        "localId" : "251",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from England",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "226",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "228",
               "name" : "isSpanish",
               "operandTypeSpecifier" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "process","(" ]
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
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "272",
                        "value" : [ ", ","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","testValue3",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "281",
                        "value" : [ ", ","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "282",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function process(e Simple.Encounter) :\n  " ]
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
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Encounter ",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "220",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "e",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "e",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define function process(c Simple.Condition) :\n  " ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Condition ",
                  "type" : "Literal"
               }, {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "233",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "c",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "227",
               "name" : "c",
               "operandTypeSpecifier" : {
                  "localId" : "226",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
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
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "249",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "250",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "241",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "242",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "243",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "[","Condition","]" ]
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
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "267",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "264",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "256",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "257",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "258",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                           "type" : "NamedTypeSpecifier"
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "greet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define fluent function greet(name System.String) :\n  " ]
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
               "localId" : "229",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "name",
                     "type" : "OperandRef"
                  } ]
               }, {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "!",
                  "type" : "Literal"
               } ]
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "name",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "add",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define fluent function add(a System.Integer, b System.Integer) :\n  " ]
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
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "232",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "234",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
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
                           "value" : [ "greet","()" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "greet",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "253",
                        "value" : [ "1","." ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "add","(","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "add",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "message" : "An operand identifier targetMatches is hiding another identifier of the same name.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "An operand identifier targetMatches is hiding another identifier of the same name.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "668",
            "s" : [ {
               "value" : [ "","library FluentFunctionsOverloadCallingSelf" ]
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):\n  " ]
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
                           "value" : [ " ","="," " ]
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "231",
                     "name" : "target",
                     "type" : "OperandRef",
                     "resultTypeSpecifier" : {
                        "localId" : "232",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "233",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "234",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "option",
                  "type" : "Property",
                  "source" : {
                     "localId" : "236",
                     "name" : "option",
                     "type" : "OperandRef",
                     "resultTypeSpecifier" : {
                        "localId" : "237",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "238",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "239",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "219",
               "name" : "option",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "216",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "217",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "218",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "214",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }, {
               "localId" : "226",
               "name" : "target",
               "operandTypeSpecifier" : {
                  "localId" : "220",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "223",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "224",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "225",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "221",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            } ]
         }, {
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):\n  " ]
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
                           "value" : [ " ","="," " ]
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
               "localId" : "256",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "targetId",
                  "type" : "OperandRef"
               }, {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "option",
                  "type" : "Property",
                  "source" : {
                     "localId" : "258",
                     "name" : "option",
                     "type" : "OperandRef",
                     "resultTypeSpecifier" : {
                        "localId" : "259",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "260",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "261",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "250",
               "name" : "option",
               "operandTypeSpecifier" : {
                  "localId" : "244",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "247",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "248",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "249",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "245",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "246",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }, {
               "localId" : "252",
               "name" : "targetId",
               "operandTypeSpecifier" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, target Tuple { id System.String }):\n  " ]
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
                                       "value" : [ " ","O" ]
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
                                          "value" : [ "targetMatches","(" ]
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
               "localId" : "288",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "339",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "340",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "341",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "342",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "330",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "335",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "336",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "337",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "338",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "289",
                     "alias" : "O",
                     "resultTypeSpecifier" : {
                        "localId" : "295",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "296",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "297",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "298",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "290",
                        "name" : "targetMatches",
                        "type" : "OperandRef",
                        "resultTypeSpecifier" : {
                           "localId" : "291",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "292",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "293",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "294",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "323",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "324",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "325",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "326",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "327",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "328",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "329",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "300",
                        "name" : "O",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "301",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "302",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "303",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "304",
                        "name" : "target",
                        "type" : "OperandRef",
                        "resultTypeSpecifier" : {
                           "localId" : "305",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "306",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "307",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
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
               "operandTypeSpecifier" : {
                  "localId" : "266",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "273",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "274",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "275",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "276",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "elementType" : {
                     "localId" : "267",
                     "type" : "TupleTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "270",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "271",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "272",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "localId" : "268",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "269",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }, {
               "localId" : "284",
               "name" : "target",
               "operandTypeSpecifier" : {
                  "localId" : "278",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "281",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "282",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "283",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "279",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "280",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            } ]
         }, {
            "localId" : "308",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, targetId System.String):\n  " ]
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
                                       "value" : [ " ","O" ]
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
                                          "value" : [ "targetMatches","(" ]
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
               "localId" : "346",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "377",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "378",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "379",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "380",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "368",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "373",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "374",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "375",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "376",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "347",
                     "alias" : "O",
                     "resultTypeSpecifier" : {
                        "localId" : "353",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "354",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "355",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "356",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "348",
                        "name" : "targetMatches",
                        "type" : "OperandRef",
                        "resultTypeSpecifier" : {
                           "localId" : "349",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "350",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "351",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "352",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "364",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "365",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "366",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "367",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "358",
                        "name" : "O",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "359",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "360",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "361",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "362",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "targetId",
                        "type" : "OperandRef"
                     } ]
                  }
               }
            },
            "operand" : [ {
               "localId" : "320",
               "name" : "targetMatches",
               "operandTypeSpecifier" : {
                  "localId" : "309",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "316",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "317",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "318",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "319",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "elementType" : {
                     "localId" : "310",
                     "type" : "TupleTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "313",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "314",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "315",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "localId" : "311",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "312",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }, {
               "localId" : "322",
               "name" : "targetId",
               "operandTypeSpecifier" : {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "383",
            "name" : "testOptionsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "383",
                  "s" : [ {
                     "value" : [ "","define ","testOptionsList",":\n  " ]
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
                              "value" : [ "option",": " ]
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
                              "value" : [ "option",": " ]
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
               "localId" : "401",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "402",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "403",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "404",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "384",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "397",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "398",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "399",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "400",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "element" : [ {
                  "localId" : "385",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "388",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "389",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "390",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "386",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "391",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "394",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "395",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "396",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "392",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test341",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "407",
                  "s" : [ {
                     "value" : [ "","define ","matchTestFalse",": " ]
                  }, {
                     "r" : "429",
                     "s" : [ {
                        "r" : "419",
                        "s" : [ {
                           "value" : [ "First","(" ]
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
                           "value" : [ "targetMatches","(" ]
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
               "localId" : "429",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "430",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "431",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "432",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "433",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "419",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "424",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "425",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "426",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
                     "localId" : "420",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "421",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "422",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "423",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "408",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "409",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "410",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "411",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "412",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "427",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test789",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "436",
                  "s" : [ {
                     "value" : [ "","define ","matchTestTrue",": " ]
                  }, {
                     "r" : "458",
                     "s" : [ {
                        "r" : "448",
                        "s" : [ {
                           "value" : [ "First","(" ]
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
                           "value" : [ "targetMatches","(" ]
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
               "localId" : "458",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "459",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "460",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "461",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "462",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "448",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "453",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "454",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "455",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
                     "localId" : "449",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "450",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "451",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "452",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "437",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "438",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "439",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "440",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "441",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "456",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "465",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsFalse",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "First","(" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "466",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "510",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "511",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "505",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "508",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "509",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "467",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "477",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "478",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "468",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "475",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "476",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "469",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test789",
                           "type" : "Literal"
                        }, {
                           "localId" : "471",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test719",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "500",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "501",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "502",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "503",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "504",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "491",
                        "type" : "First",
                        "resultTypeSpecifier" : {
                           "localId" : "496",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "497",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "498",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "492",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "493",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "494",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "495",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "480",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "481",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "482",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "483",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "484",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "499",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
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
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsTrue",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "Last","(" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "515",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "559",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "560",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "554",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "557",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "558",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "516",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "526",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "527",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "517",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "524",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "525",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "518",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test341",
                           "type" : "Literal"
                        }, {
                           "localId" : "520",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test719",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "549",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "550",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "551",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "552",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "553",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "540",
                        "type" : "Last",
                        "resultTypeSpecifier" : {
                           "localId" : "545",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "546",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "547",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "541",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "542",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "543",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "544",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "529",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "530",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "531",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "532",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "533",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "548",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
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
               "s" : {
                  "r" : "563",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfFalse",": " ]
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
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "569",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
               "localId" : "575",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "576",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "577",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "578",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "579",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "580",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "581",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "582",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "564",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "565",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "566",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "567",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "568",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "569",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "572",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "573",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "574",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "570",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test789",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "585",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfTrue",": " ]
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
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "591",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
               "localId" : "597",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "598",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "599",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "600",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "601",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "602",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "603",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "604",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "586",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "587",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "588",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "589",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "590",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "591",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "594",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "595",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "596",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "592",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "607",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfFalse",": " ]
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
                                                "value" : [ "id",": " ]
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
                                                "value" : [ "id",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "608",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "662",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "663",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "664",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "665",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "653",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "658",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "659",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "660",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "661",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "609",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "631",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "632",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "633",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "634",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "610",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "627",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "628",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "629",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "630",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "611",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "614",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "615",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "616",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "612",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test789",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "617",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "620",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "621",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "622",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "618",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test719",
                                 "type" : "Literal"
                              }
                           } ]
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "645",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "646",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "647",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "648",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "649",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "650",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "651",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "652",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "636",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "637",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "638",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "639",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "640",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "641",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "642",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "643",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "644",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "668",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfTrue",": " ]
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
                                                "value" : [ "id",": " ]
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
                                                "value" : [ "id",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "669",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "723",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "724",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "725",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "726",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "714",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "719",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "720",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "721",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "722",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "670",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "692",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "693",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "694",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "695",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "671",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "688",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "689",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "690",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "691",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "672",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "675",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "676",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "677",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "673",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test341",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "678",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "681",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "682",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "683",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "679",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test719",
                                 "type" : "Literal"
                              }
                           } ]
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "706",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "707",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "708",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "709",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "710",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "711",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "712",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "713",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "697",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "698",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "699",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "700",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "701",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "702",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "703",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "704",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "705",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "501",
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
      "includes" : {
         "def" : [ {
            "localId" : "208",
            "localIdentifier" : "FluentFunctionsOverloadCallingSelf",
            "path" : "FluentFunctionsOverloadCallingSelf",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "FluentFunctionsOverloadCallingSelf" ]
                     } ]
                  }, {
                     "value" : [ " called ","FluentFunctionsOverloadCallingSelf" ]
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
            "name" : "testOptionsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","testOptionsList",":\n  " ]
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
                              "value" : [ "option",": " ]
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
                              "value" : [ "option",": " ]
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
               "localId" : "234",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "235",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "236",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "217",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "230",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "231",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "232",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "233",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "element" : [ {
                  "localId" : "218",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "222",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "223",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "224",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "227",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "228",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "229",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "225",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test341",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","matchTestFalse",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "First","(" ]
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
                           "value" : [ "targetMatches","(" ]
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
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "263",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "264",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "252",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "257",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "258",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "259",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
                     "localId" : "253",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "254",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "255",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "256",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "241",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "242",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "243",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "244",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "245",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test789",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","matchTestTrue",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "First","(" ]
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
                           "value" : [ "targetMatches","(" ]
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
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "292",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "293",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "295",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "281",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "286",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "287",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "288",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
                     "localId" : "282",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "283",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "284",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "285",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "270",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "271",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "272",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "273",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "274",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test123",
                  "type" : "Literal"
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
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsFalse",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "First","(" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "343",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "338",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "341",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "342",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "300",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "310",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "311",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "301",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "308",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "309",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "302",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test789",
                           "type" : "Literal"
                        }, {
                           "localId" : "304",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test719",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "334",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "335",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "336",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "337",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "324",
                        "type" : "First",
                        "resultTypeSpecifier" : {
                           "localId" : "329",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "330",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "331",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "325",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "326",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "327",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "328",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "313",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "314",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "315",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "316",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "317",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "332",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
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
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsTrue",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "Last","(" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "348",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "392",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "393",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "387",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "390",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "391",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "349",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "359",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "360",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "350",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "357",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "358",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "351",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test341",
                           "type" : "Literal"
                        }, {
                           "localId" : "353",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test719",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "382",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "383",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "384",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "385",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "386",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "373",
                        "type" : "Last",
                        "resultTypeSpecifier" : {
                           "localId" : "378",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "379",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "380",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "374",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "375",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "376",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "377",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "362",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "363",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "364",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "365",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "366",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "381",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
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
               "s" : {
                  "r" : "396",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfFalse",": " ]
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
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "402",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
               "localId" : "408",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "409",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "410",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "411",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "412",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "413",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "414",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "415",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "397",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "398",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "399",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "400",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "401",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "402",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "405",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "406",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "407",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "403",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test789",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "418",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfTrue",": " ]
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
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "424",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
               "localId" : "430",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "431",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "432",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "433",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "434",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "435",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "436",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "437",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "419",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "420",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "421",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "422",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "423",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "424",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "427",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "428",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "429",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "425",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
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
               "s" : {
                  "r" : "440",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfFalse",": " ]
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
                                                "value" : [ "id",": " ]
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
                                                "value" : [ "id",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "441",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "495",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "496",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "497",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "498",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "486",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "491",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "492",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "493",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "494",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "442",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "464",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "465",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "466",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "467",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "443",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "460",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "461",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "462",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "463",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "444",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "447",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "448",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "449",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "445",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test789",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "450",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "453",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "454",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "455",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "451",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test719",
                                 "type" : "Literal"
                              }
                           } ]
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "478",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "479",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "480",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "481",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "482",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "483",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "484",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "485",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "469",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "470",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "471",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "472",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "473",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "474",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "475",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "476",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "477",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "501",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfTrue",": " ]
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
                                                "value" : [ "id",": " ]
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
                                                "value" : [ "id",": " ]
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
                                    "value" : [ " ","T" ]
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
                                       "value" : [ "targetMatches","(" ]
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
               "localId" : "502",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "556",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "557",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "558",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "559",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "547",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "552",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "553",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "554",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "555",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "503",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "525",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "526",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "527",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "528",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "504",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "521",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "522",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "523",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "524",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "505",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "508",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "509",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "510",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "506",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test341",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "511",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "514",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "515",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "516",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "512",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test719",
                                 "type" : "Literal"
                              }
                           } ]
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "539",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "540",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "541",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "542",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "543",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "544",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "545",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "546",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "530",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "531",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "532",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "533",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "534",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "535",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "536",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "537",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "538",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
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

