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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "212",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "241",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Life",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Life",": ","42" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "42",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "value" : [ "Life" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "Life",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExpensiveFunction",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define function ExpensiveFunction():\n  " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "expand " ]
                           }, {
                              "r" : "220",
                              "s" : [ {
                                 "r" : "218",
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
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "First",
               "signature" : [ {
                  "localId" : "235",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "224",
                  "type" : "Expand",
                  "resultTypeSpecifier" : {
                     "localId" : "228",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "229",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ {
                     "localId" : "225",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "226",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "220",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "221",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "222",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100000",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "Null"
                  } ]
               }
            },
            "operand" : [ ]
         }, {
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExpensiveStatement",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatement",":\n  " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "ExpensiveFunction","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "ExpensiveFunction",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ ]
            }
         }, {
            "localId" : "241",
            "name" : "ExpensiveStatementRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatementRef",":\n  " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "r" : "254",
                           "s" : [ {
                              "r" : "244",
                              "s" : [ {
                                 "r" : "242",
                                 "s" : [ {
                                    "value" : [ "ExpensiveStatement" ]
                                 } ]
                              }, {
                                 "value" : [ " union \n  " ]
                              }, {
                                 "r" : "243",
                                 "s" : [ {
                                    "value" : [ "ExpensiveStatement" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " union \n  " ]
                           }, {
                              "r" : "253",
                              "s" : [ {
                                 "value" : [ "ExpensiveStatement" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " union \n  " ]
                        }, {
                           "r" : "262",
                           "s" : [ {
                              "value" : [ "ExpensiveStatement" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " union \n  " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "ExpensiveStatement" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "285",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "277",
               "type" : "Union",
               "resultTypeSpecifier" : {
                  "localId" : "283",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ {
                  "localId" : "279",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "281",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "type" : "Union",
                  "resultTypeSpecifier" : {
                     "localId" : "274",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ {
                     "localId" : "270",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "271",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "272",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "273",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "244",
                     "type" : "Union",
                     "resultTypeSpecifier" : {
                        "localId" : "251",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "252",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "signature" : [ {
                        "localId" : "247",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "248",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "249",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "250",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "operand" : [ {
                        "localId" : "245",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "242",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "246",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "243",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "localId" : "263",
                     "type" : "Union",
                     "signature" : [ {
                        "localId" : "265",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "266",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "267",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "268",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "operand" : [ {
                        "localId" : "255",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "253",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "264",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "262",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "278",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "276",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "222",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "foo bar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function \"foo bar\"(a Integer, b Integer) :\n  " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "r" : "217",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "testValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","testValue",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "223",
                        "value" : [ "\"foo bar\"","(","1",",","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "foo bar",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "234",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function process(a System.Integer) :\n  " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "r" : "216",
                           "value" : [ " + ","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String) :\n  " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "'Hello '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "221",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "230",
                        "value" : [ "process","(","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "235",
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
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "235",
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
         "translatorVersion" : "3.22.0",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function process(inverse System.Boolean, a System.Integer) :\n  " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "217",
                           "s" : [ {
                              "value" : [ "inverse" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "r" : "219",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           }, {
                              "r" : "220",
                              "value" : [ " - ","1" ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "r" : "224",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           }, {
                              "r" : "225",
                              "value" : [ " + ","1" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "If",
               "condition" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Subtract",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Add",
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
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define function process(inverse System.Boolean, a System.String) :\n  " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "inverse" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "r" : "236",
                              "s" : [ {
                                 "value" : [ "'Goodbye '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "237",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "r" : "242",
                              "s" : [ {
                                 "value" : [ "'Hello '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "243",
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
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "If",
               "condition" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Goodbye ",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               },
               "else" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "230",
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "232",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "249",
                        "value" : [ "process","(","true",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
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
                     "r" : "258",
                     "s" : [ {
                        "r" : "256",
                        "value" : [ "process","(","true",", " ]
                     }, {
                        "r" : "257",
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
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "257",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "262",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String) :\n  " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "'Hello '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String, isSpanish System.Boolean) :\n  " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "isSpanish" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "r" : "233",
                              "s" : [ {
                                 "r" : "229",
                                 "s" : [ {
                                    "value" : [ "'Hola '" ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "230",
                                 "s" : [ {
                                    "value" : [ "a" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "' from Spain'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "r" : "244",
                              "s" : [ {
                                 "r" : "240",
                                 "s" : [ {
                                    "value" : [ "'Hello '" ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "241",
                                 "s" : [ {
                                    "value" : [ "a" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "245",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "If",
               "condition" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "isSpanish",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "229",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hola ",
                        "type" : "Literal"
                     }, {
                        "localId" : "230",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from Spain",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "240",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello ",
                        "type" : "Literal"
                     }, {
                        "localId" : "241",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from England",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "222",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "224",
               "name" : "isSpanish",
               "operandTypeSpecifier" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "251",
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
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
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
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "257",
                        "value" : [ ", ","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "testValue3",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","testValue3",": " ]
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
                        "r" : "264",
                        "value" : [ ", ","false",")" ]
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
               }, {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "264",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "246",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function process(e Simple.Encounter) :\n  " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "220",
                        "s" : [ {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "'Encounter '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "217",
                           "s" : [ {
                              "r" : "216",
                              "s" : [ {
                                 "value" : [ "e" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "217",
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
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Encounter ",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "216",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "name" : "e",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "e",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define function process(c Simple.Condition) :\n  " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "230",
                        "s" : [ {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "'Condition '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "r" : "226",
                              "s" : [ {
                                 "value" : [ "c" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "227",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Condition ",
                  "type" : "Literal"
               }, {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "226",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "name" : "c",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "223",
               "name" : "c",
               "operandTypeSpecifier" : {
                  "localId" : "222",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "233",
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
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "240",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "241",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "242",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "233",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "234",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "235",
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
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "247",
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
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "258",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "254",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "255",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "256",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "247",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "248",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "249",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "241",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "greet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define fluent function greet(name System.String) :\n  " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "r" : "220",
                           "s" : [ {
                              "r" : "216",
                              "s" : [ {
                                 "value" : [ "'Hello '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "217",
                              "s" : [ {
                                 "value" : [ "name" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "'!'" ]
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
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "name",
                     "type" : "OperandRef"
                  } ]
               }, {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "!",
                  "type" : "Literal"
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "name",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "add",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define fluent function add(a System.Integer, b System.Integer) :\n  " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "230",
                        "s" : [ {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "227",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "229",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "greet","()" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "greet",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "242",
                        "value" : [ "1","." ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "r" : "243",
                           "value" : [ "add","(","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "add",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "243",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "message" : "An operand identifier [targetMatches] is hiding another identifier of the same name.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "An operand identifier [targetMatches] is hiding another identifier of the same name.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "629",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):\n  " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "r" : "231",
                           "s" : [ {
                              "r" : "227",
                              "s" : [ {
                                 "value" : [ "target" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "231",
                              "s" : [ {
                                 "value" : [ "id" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " ","="," " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "r" : "232",
                              "s" : [ {
                                 "value" : [ "option" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "236",
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
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "227",
                     "name" : "target",
                     "type" : "OperandRef",
                     "resultTypeSpecifier" : {
                        "localId" : "228",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "229",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "230",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "option",
                  "type" : "Property",
                  "source" : {
                     "localId" : "232",
                     "name" : "option",
                     "type" : "OperandRef",
                     "resultTypeSpecifier" : {
                        "localId" : "233",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "234",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "235",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "218",
               "name" : "option",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "215",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "216",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "217",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "213",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "214",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }, {
               "localId" : "225",
               "name" : "target",
               "operandTypeSpecifier" : {
                  "localId" : "219",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "222",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "223",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "224",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "220",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            } ]
         }, {
            "localId" : "239",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):\n  " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "targetId" ]
                           } ]
                        }, {
                           "value" : [ " ","="," " ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "r" : "251",
                              "s" : [ {
                                 "value" : [ "option" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "255",
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
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "targetId",
                  "type" : "OperandRef"
               }, {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "option",
                  "type" : "Property",
                  "source" : {
                     "localId" : "251",
                     "name" : "option",
                     "type" : "OperandRef",
                     "resultTypeSpecifier" : {
                        "localId" : "252",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "253",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "254",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "246",
               "name" : "option",
               "operandTypeSpecifier" : {
                  "localId" : "240",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
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
                  },
                  "element" : [ {
                     "localId" : "241",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "242",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }, {
               "localId" : "248",
               "name" : "targetId",
               "operandTypeSpecifier" : {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, target Tuple { id System.String }):\n  " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "exists " ]
                        }, {
                           "r" : "319",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "319",
                              "s" : [ {
                                 "s" : [ {
                                    "r" : "279",
                                    "s" : [ {
                                       "r" : "280",
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
                                 "r" : "312",
                                 "s" : [ {
                                    "value" : [ "where " ]
                                 }, {
                                    "r" : "312",
                                    "s" : [ {
                                       "r" : "289",
                                       "s" : [ {
                                          "value" : [ "O" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "312",
                                       "s" : [ {
                                          "value" : [ "targetMatches","(" ]
                                       }, {
                                          "r" : "293",
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
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "328",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
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
                  }
               } ],
               "operand" : {
                  "localId" : "319",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "324",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "325",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "326",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "327",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "279",
                     "alias" : "O",
                     "resultTypeSpecifier" : {
                        "localId" : "285",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
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
                        }
                     },
                     "expression" : {
                        "localId" : "280",
                        "name" : "targetMatches",
                        "type" : "OperandRef",
                        "resultTypeSpecifier" : {
                           "localId" : "281",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "282",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "283",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "284",
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
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
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
                     }, {
                        "localId" : "316",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "317",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "318",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "289",
                        "name" : "O",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "290",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "291",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "292",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "293",
                        "name" : "target",
                        "type" : "OperandRef",
                        "resultTypeSpecifier" : {
                           "localId" : "294",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "295",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "296",
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
               "localId" : "270",
               "name" : "targetMatches",
               "operandTypeSpecifier" : {
                  "localId" : "259",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "266",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "267",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "268",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "269",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "elementType" : {
                     "localId" : "260",
                     "type" : "TupleTypeSpecifier",
                     "resultTypeSpecifier" : {
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
                     },
                     "element" : [ {
                        "localId" : "261",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "262",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }, {
               "localId" : "277",
               "name" : "target",
               "operandTypeSpecifier" : {
                  "localId" : "271",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "274",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "275",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "276",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "272",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "273",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            } ]
         }, {
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "targetMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define fluent function targetMatches(targetMatches List<Tuple { option System.String }>, targetId System.String):\n  " ]
                  }, {
                     "r" : "332",
                     "s" : [ {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "exists " ]
                        }, {
                           "r" : "353",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "353",
                              "s" : [ {
                                 "s" : [ {
                                    "r" : "333",
                                    "s" : [ {
                                       "r" : "334",
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
                                 "r" : "348",
                                 "s" : [ {
                                    "value" : [ "where " ]
                                 }, {
                                    "r" : "348",
                                    "s" : [ {
                                       "r" : "343",
                                       "s" : [ {
                                          "value" : [ "O" ]
                                       } ]
                                    }, {
                                       "value" : [ "." ]
                                    }, {
                                       "r" : "348",
                                       "s" : [ {
                                          "value" : [ "targetMatches","(" ]
                                       }, {
                                          "r" : "347",
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
               "localId" : "332",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "362",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "363",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "364",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "365",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "353",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "358",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
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
                  },
                  "source" : [ {
                     "localId" : "333",
                     "alias" : "O",
                     "resultTypeSpecifier" : {
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
                     },
                     "expression" : {
                        "localId" : "334",
                        "name" : "targetMatches",
                        "type" : "OperandRef",
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
                        }
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "where" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "349",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "350",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "351",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "352",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "343",
                        "name" : "O",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "344",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "345",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "346",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "targetId",
                        "type" : "OperandRef"
                     } ]
                  }
               }
            },
            "operand" : [ {
               "localId" : "309",
               "name" : "targetMatches",
               "operandTypeSpecifier" : {
                  "localId" : "298",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "305",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "306",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "307",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "308",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "elementType" : {
                     "localId" : "299",
                     "type" : "TupleTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "302",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "303",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "304",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "localId" : "300",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "301",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }, {
               "localId" : "311",
               "name" : "targetId",
               "operandTypeSpecifier" : {
                  "localId" : "310",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "367",
            "name" : "testOptionsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "367",
                  "s" : [ {
                     "value" : [ "","define ","testOptionsList",":\n  " ]
                  }, {
                     "r" : "368",
                     "s" : [ {
                        "value" : [ "{\n    " ]
                     }, {
                        "r" : "369",
                        "s" : [ {
                           "value" : [ "{\n      " ]
                        }, {
                           "s" : [ {
                              "value" : [ "option",": " ]
                           }, {
                              "r" : "370",
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
                        "r" : "374",
                        "s" : [ {
                           "value" : [ "{\n      " ]
                        }, {
                           "s" : [ {
                              "value" : [ "option",": " ]
                           }, {
                              "r" : "375",
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
               "localId" : "383",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "384",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "385",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "386",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "368",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "379",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "380",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "381",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "382",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "element" : [ {
                  "localId" : "369",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "371",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "372",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "373",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "370",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "374",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "376",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "377",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "378",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "375",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test341",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "388",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "388",
                  "s" : [ {
                     "value" : [ "","define ","matchTestFalse",": " ]
                  }, {
                     "r" : "409",
                     "s" : [ {
                        "r" : "400",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "389",
                           "s" : [ {
                              "value" : [ "\"testOptionsList\"" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "409",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "408",
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
               "localId" : "409",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
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
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "400",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "405",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "406",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "407",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
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
                  } ],
                  "source" : {
                     "localId" : "389",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "390",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "391",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "392",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "393",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "408",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test789",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","matchTestTrue",": " ]
                  }, {
                     "r" : "436",
                     "s" : [ {
                        "r" : "427",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "416",
                           "s" : [ {
                              "value" : [ "\"testOptionsList\"" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "435",
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
               "localId" : "436",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "437",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "438",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "439",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "440",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "427",
                  "type" : "First",
                  "resultTypeSpecifier" : {
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
                  },
                  "signature" : [ {
                     "localId" : "428",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "429",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "430",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "431",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "416",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "417",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "418",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "419",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "420",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "435",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test123",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "442",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "442",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsFalse",": " ]
                  }, {
                     "r" : "443",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "479",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "479",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "444",
                                 "s" : [ {
                                    "r" : "445",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "445",
                                       "s" : [ {
                                          "value" : [ "{" ]
                                       }, {
                                          "r" : "446",
                                          "s" : [ {
                                             "value" : [ "'test789'" ]
                                          } ]
                                       }, {
                                          "value" : [ ", " ]
                                       }, {
                                          "r" : "447",
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
                              "r" : "474",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "474",
                                 "s" : [ {
                                    "r" : "465",
                                    "s" : [ {
                                       "value" : [ "First","(" ]
                                    }, {
                                       "r" : "454",
                                       "s" : [ {
                                          "value" : [ "\"testOptionsList\"" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "474",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "473",
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
               "localId" : "443",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "484",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "479",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "482",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "483",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "444",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "452",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "453",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "445",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "450",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "451",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "446",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test789",
                           "type" : "Literal"
                        }, {
                           "localId" : "447",
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
                     "localId" : "474",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "475",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "476",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "477",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "478",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "465",
                        "type" : "First",
                        "resultTypeSpecifier" : {
                           "localId" : "470",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "471",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "472",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "466",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "467",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "468",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "469",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "454",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "455",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "456",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "457",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "458",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "473",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "487",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "487",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsTrue",": " ]
                  }, {
                     "r" : "488",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "524",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "524",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "489",
                                 "s" : [ {
                                    "r" : "490",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "490",
                                       "s" : [ {
                                          "value" : [ "{" ]
                                       }, {
                                          "r" : "491",
                                          "s" : [ {
                                             "value" : [ "'test341'" ]
                                          } ]
                                       }, {
                                          "value" : [ ", " ]
                                       }, {
                                          "r" : "492",
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
                              "r" : "519",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "519",
                                 "s" : [ {
                                    "r" : "510",
                                    "s" : [ {
                                       "value" : [ "Last","(" ]
                                    }, {
                                       "r" : "499",
                                       "s" : [ {
                                          "value" : [ "\"testOptionsList\"" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "519",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "518",
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
               "localId" : "488",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "529",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "530",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "524",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "527",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "528",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "489",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "497",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "498",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "490",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "495",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "496",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "491",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test341",
                           "type" : "Literal"
                        }, {
                           "localId" : "492",
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
                     "localId" : "519",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "520",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "521",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "522",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "523",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "510",
                        "type" : "Last",
                        "resultTypeSpecifier" : {
                           "localId" : "515",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "516",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "517",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "511",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "512",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "513",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "514",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "499",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "500",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
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
                              }
                           }
                        }
                     }, {
                        "localId" : "518",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "532",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestCallSelfFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "532",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfFalse",": " ]
                  }, {
                     "r" : "543",
                     "s" : [ {
                        "r" : "533",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "543",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "538",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "539",
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
               "localId" : "543",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "544",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
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
                  }
               }, {
                  "localId" : "548",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "549",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "550",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "533",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "534",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "535",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "536",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "537",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "538",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "540",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "541",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "542",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "539",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test789",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "552",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestCallSelfTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "552",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfTrue",": " ]
                  }, {
                     "r" : "563",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "563",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "558",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "559",
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
               "localId" : "563",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "564",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "565",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "566",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "567",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "568",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "569",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "570",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "553",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "554",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "555",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "556",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "557",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "558",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "560",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "561",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "562",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "559",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "572",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsCallSelfFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "572",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfFalse",": " ]
                  }, {
                     "r" : "573",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "615",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "615",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "574",
                                 "s" : [ {
                                    "r" : "575",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "575",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "576",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "577",
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
                                          "r" : "581",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "582",
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
                              "r" : "607",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "607",
                                 "s" : [ {
                                    "r" : "598",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "607",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "603",
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
               "localId" : "573",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "624",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "625",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "626",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "627",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "615",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "620",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "621",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "622",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "623",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "574",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "594",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "595",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "596",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "597",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "575",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "590",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "591",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "592",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "593",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "576",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "578",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "579",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "580",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "577",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test789",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "581",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "583",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "584",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "585",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "582",
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
                     "localId" : "607",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "608",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "609",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "610",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "611",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "612",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "613",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "614",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "598",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "599",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "600",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "601",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "602",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "603",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "604",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "605",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "606",
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
            "localId" : "629",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsCallSelfTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "629",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfTrue",": " ]
                  }, {
                     "r" : "630",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "672",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "672",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "631",
                                 "s" : [ {
                                    "r" : "632",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "632",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "633",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "634",
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
                                          "r" : "638",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "639",
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
                              "r" : "664",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "664",
                                 "s" : [ {
                                    "r" : "655",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "664",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "660",
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
               "localId" : "630",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "681",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "682",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "683",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "684",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "672",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "677",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "678",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "679",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "680",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "631",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "651",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "652",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "653",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "654",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "632",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "647",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "648",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "649",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "650",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "633",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "635",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "636",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "637",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "634",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test341",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "638",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "640",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "641",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "642",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "639",
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
                     "localId" : "664",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "665",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "666",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "667",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "668",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "669",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "670",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "671",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "655",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "656",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "657",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "658",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "659",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "660",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "661",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "662",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "663",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "475",
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
            "localId" : "207",
            "localIdentifier" : "FluentFunctionsOverloadCallingSelf",
            "path" : "FluentFunctionsOverloadCallingSelf",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
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
            "name" : "testOptionsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","testOptionsList",":\n  " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "{\n    " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "{\n      " ]
                        }, {
                           "s" : [ {
                              "value" : [ "option",": " ]
                           }, {
                              "r" : "216",
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
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "{\n      " ]
                        }, {
                           "s" : [ {
                              "value" : [ "option",": " ]
                           }, {
                              "r" : "221",
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
               "localId" : "229",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "230",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "231",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "214",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "225",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "226",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "227",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "228",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "element" : [ {
                  "localId" : "215",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "217",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "218",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "219",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "220",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "222",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "223",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "224",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "option",
                     "value" : {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test341",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","matchTestFalse",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "\"testOptionsList\"" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "254",
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
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "256",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "257",
                     "name" : "option",
                     "elementType" : {
                        "localId" : "258",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "246",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "251",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "252",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "253",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
                     "localId" : "247",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "248",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "249",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "250",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "235",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "236",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
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
                  }
               }, {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test789",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","matchTestTrue",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "262",
                           "s" : [ {
                              "value" : [ "\"testOptionsList\"" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "281",
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
               "localId" : "282",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
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
               }, {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "273",
                  "type" : "First",
                  "resultTypeSpecifier" : {
                     "localId" : "278",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "279",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "280",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "signature" : [ {
                     "localId" : "274",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "275",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "276",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "277",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ],
                  "source" : {
                     "localId" : "262",
                     "name" : "testOptionsList",
                     "type" : "ExpressionRef",
                     "resultTypeSpecifier" : {
                        "localId" : "263",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "264",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "265",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "266",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }
                  }
               }, {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "test123",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsFalse",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "325",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "290",
                                 "s" : [ {
                                    "r" : "291",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "291",
                                       "s" : [ {
                                          "value" : [ "{" ]
                                       }, {
                                          "r" : "292",
                                          "s" : [ {
                                             "value" : [ "'test789'" ]
                                          } ]
                                       }, {
                                          "value" : [ ", " ]
                                       }, {
                                          "r" : "293",
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
                              "r" : "320",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "320",
                                 "s" : [ {
                                    "r" : "311",
                                    "s" : [ {
                                       "value" : [ "First","(" ]
                                    }, {
                                       "r" : "300",
                                       "s" : [ {
                                          "value" : [ "\"testOptionsList\"" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "320",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "319",
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
               "localId" : "289",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "330",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "331",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "325",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "328",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "329",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "290",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "298",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "299",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "291",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "296",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "297",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "292",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test789",
                           "type" : "Literal"
                        }, {
                           "localId" : "293",
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
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "321",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "322",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "323",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "324",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "311",
                        "type" : "First",
                        "resultTypeSpecifier" : {
                           "localId" : "316",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "317",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "318",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "312",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
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
                           }
                        } ],
                        "source" : {
                           "localId" : "300",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "301",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "302",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "303",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "304",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "319",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsTrue",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "370",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "370",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "335",
                                 "s" : [ {
                                    "r" : "336",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "336",
                                       "s" : [ {
                                          "value" : [ "{" ]
                                       }, {
                                          "r" : "337",
                                          "s" : [ {
                                             "value" : [ "'test341'" ]
                                          } ]
                                       }, {
                                          "value" : [ ", " ]
                                       }, {
                                          "r" : "338",
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
                              "r" : "365",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "365",
                                 "s" : [ {
                                    "r" : "356",
                                    "s" : [ {
                                       "value" : [ "Last","(" ]
                                    }, {
                                       "r" : "345",
                                       "s" : [ {
                                          "value" : [ "\"testOptionsList\"" ]
                                       } ]
                                    }, {
                                       "value" : [ ")" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "365",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "364",
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
               "localId" : "334",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "375",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "376",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : {
                  "localId" : "370",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "373",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "374",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "source" : [ {
                     "localId" : "335",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "343",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "344",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "expression" : {
                        "localId" : "336",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "341",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "342",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "337",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "test341",
                           "type" : "Literal"
                        }, {
                           "localId" : "338",
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
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "366",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "367",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "368",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }, {
                        "localId" : "369",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "356",
                        "type" : "Last",
                        "resultTypeSpecifier" : {
                           "localId" : "361",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "362",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "363",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        },
                        "signature" : [ {
                           "localId" : "357",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "358",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "359",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "360",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        } ],
                        "source" : {
                           "localId" : "345",
                           "name" : "testOptionsList",
                           "type" : "ExpressionRef",
                           "resultTypeSpecifier" : {
                              "localId" : "346",
                              "type" : "ListTypeSpecifier",
                              "elementType" : {
                                 "localId" : "347",
                                 "type" : "TupleTypeSpecifier",
                                 "element" : [ {
                                    "localId" : "348",
                                    "name" : "option",
                                    "elementType" : {
                                       "localId" : "349",
                                       "name" : "{urn:hl7-org:elm-types:r1}String",
                                       "type" : "NamedTypeSpecifier"
                                    }
                                 } ]
                              }
                           }
                        }
                     }, {
                        "localId" : "364",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "T",
                        "type" : "AliasRef"
                     } ]
                  }
               }
            }
         }, {
            "localId" : "378",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestCallSelfFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "378",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfFalse",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "r" : "379",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "384",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "385",
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
               "localId" : "389",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "390",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "391",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "392",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "393",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "394",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "395",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "396",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "379",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "380",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "381",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "382",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "383",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "384",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "386",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "387",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "388",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "385",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test789",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "398",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestCallSelfTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "398",
                  "s" : [ {
                     "value" : [ "","define ","matchTestCallSelfTrue",": " ]
                  }, {
                     "r" : "409",
                     "s" : [ {
                        "r" : "399",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "409",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "404",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "405",
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
               "localId" : "409",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "410",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "411",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "412",
                        "name" : "option",
                        "elementType" : {
                           "localId" : "413",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }, {
                  "localId" : "414",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "415",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "416",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "399",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "400",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "401",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "402",
                           "name" : "option",
                           "elementType" : {
                              "localId" : "403",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  }
               }, {
                  "localId" : "404",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "406",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "407",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "408",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "405",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "418",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsCallSelfFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "418",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfFalse",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "461",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "461",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "420",
                                 "s" : [ {
                                    "r" : "421",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "421",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "422",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "423",
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
                                          "r" : "427",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "428",
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
                              "r" : "453",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "453",
                                 "s" : [ {
                                    "r" : "444",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "453",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "449",
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
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "470",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "471",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "472",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "473",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "461",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "466",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "467",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "468",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "469",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "420",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "440",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "441",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "442",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "443",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "421",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "436",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "437",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "438",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "439",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "422",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "424",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "425",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "426",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "423",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test789",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "427",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "429",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "430",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "431",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "428",
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
                     "localId" : "453",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "454",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "455",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "456",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "457",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "458",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "459",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "460",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "444",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "445",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "446",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "447",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "448",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "449",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "450",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "451",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "452",
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
            "localId" : "475",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsCallSelfTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "475",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsCallSelfTrue",": " ]
                  }, {
                     "r" : "476",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "518",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "518",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "477",
                                 "s" : [ {
                                    "r" : "478",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "478",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "479",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "480",
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
                                          "r" : "484",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "485",
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
                              "r" : "510",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "510",
                                 "s" : [ {
                                    "r" : "501",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "510",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "506",
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
               "localId" : "476",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "527",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "528",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "529",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "530",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "518",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "523",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "524",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "525",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "526",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "477",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "497",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "498",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "499",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "500",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "478",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "493",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "494",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "495",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "496",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "479",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "481",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "482",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "483",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "480",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test341",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "484",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "486",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "487",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "488",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "485",
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
                     "localId" : "510",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "511",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "512",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "513",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "514",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "515",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "516",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "517",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "501",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "502",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "503",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "504",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "505",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "506",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "507",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "508",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "509",
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

