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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "3",
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
            "localId" : "3",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
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
*/

module.exports['ExpressionRef'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "5",
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
            "localId" : "3",
            "name" : "Life",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "","define ","Life",": ","42" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "42",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "Life" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "name" : "Life",
               "type" : "ExpressionRef"
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "11",
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
            "localId" : "7",
            "name" : "foo bar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define function ","\"foo bar\"","(","a"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ", ","b"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "4",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "5",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "3",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "11",
            "name" : "testValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","testValue",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "8",
                        "value" : [ "\"foo bar\"","(","1",",","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "name" : "foo bar",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "9",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
            "localId" : "6",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","a"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "System",".","Integer" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "r" : "4",
                           "value" : [ " + ","1" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "3",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "4",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "11",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","a"," " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "System",".","String" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "10",
                        "s" : [ {
                           "r" : "8",
                           "s" : [ {
                              "value" : [ "'Hello '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "9",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "7",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "14",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "12",
                        "value" : [ "process","(","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "15",
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
               "localId" : "16",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "15",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "31",
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
            "localId" : "12",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","inverse"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "System",".","Boolean" ]
                     } ]
                  }, {
                     "value" : [ ", ","a"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "System",".","Integer" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "inverse" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "r" : "5",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           }, {
                              "r" : "6",
                              "value" : [ " - ","1" ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "r" : "8",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           }, {
                              "r" : "9",
                              "value" : [ " + ","1" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "If",
               "condition" : {
                  "localId" : "4",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "7",
                  "type" : "Subtract",
                  "operand" : [ {
                     "localId" : "5",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "10",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "8",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "3",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "23",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","inverse"," " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "System",".","Boolean" ]
                     } ]
                  }, {
                     "value" : [ ", ","a"," " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "System",".","String" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "value" : [ "inverse" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "r" : "16",
                              "s" : [ {
                                 "value" : [ "'Goodbye '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "r" : "19",
                              "s" : [ {
                                 "value" : [ "'Hello '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "20",
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
               "localId" : "22",
               "type" : "If",
               "condition" : {
                  "localId" : "15",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "18",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Goodbye ",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               },
               "else" : {
                  "localId" : "21",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "13",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "14",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "27",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "r" : "24",
                        "value" : [ "process","(","true",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "24",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "25",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "31",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "r" : "28",
                        "value" : [ "process","(","true",", " ]
                     }, {
                        "r" : "29",
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
               "localId" : "30",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "28",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "29",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "32",
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
            "localId" : "6",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","a"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "System",".","String" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "'Hello '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "4",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "21",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","a"," " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "System",".","String" ]
                     } ]
                  }, {
                     "value" : [ ", ","isSpanish"," " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "System",".","Boolean" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "isSpanish" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "r" : "12",
                              "s" : [ {
                                 "r" : "10",
                                 "s" : [ {
                                    "value" : [ "'Hola '" ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "11",
                                 "s" : [ {
                                    "value" : [ "a" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "13",
                              "s" : [ {
                                 "value" : [ "' from Spain'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "r" : "17",
                              "s" : [ {
                                 "r" : "15",
                                 "s" : [ {
                                    "value" : [ "'Hello '" ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "16",
                                 "s" : [ {
                                    "value" : [ "a" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "18",
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
               "localId" : "20",
               "type" : "If",
               "condition" : {
                  "localId" : "9",
                  "name" : "isSpanish",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "14",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "12",
                     "type" : "Concatenate",
                     "operand" : [ {
                        "localId" : "10",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hola ",
                        "type" : "Literal"
                     }, {
                        "localId" : "11",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from Spain",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "19",
                  "type" : "Concatenate",
                  "operand" : [ {
                     "localId" : "17",
                     "type" : "Concatenate",
                     "operand" : [ {
                        "localId" : "15",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello ",
                        "type" : "Literal"
                     }, {
                        "localId" : "16",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from England",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "7",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "isSpanish",
               "operandTypeSpecifier" : {
                  "localId" : "8",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "24",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "22",
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
               "localId" : "23",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "28",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "26",
                        "value" : [ ", ","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "25",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "26",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "32",
            "name" : "testValue3",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "","define ","testValue3",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "30",
                        "value" : [ ", ","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "29",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "30",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "21",
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
            "localId" : "7",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","e"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Simple",".","Encounter" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "'Encounter '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "r" : "4",
                              "s" : [ {
                                 "value" : [ "e" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "5",
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
               "localId" : "6",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Encounter ",
                  "type" : "Literal"
               }, {
                  "localId" : "5",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "4",
                     "name" : "e",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "name" : "e",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "13",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define function ","process","(","c"," " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Simple",".","Condition" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "12",
                        "s" : [ {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "'Condition '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "r" : "10",
                              "s" : [ {
                                 "value" : [ "c" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "11",
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
               "localId" : "12",
               "type" : "Concatenate",
               "operand" : [ {
                  "localId" : "9",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Condition ",
                  "type" : "Literal"
               }, {
                  "localId" : "11",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "10",
                     "name" : "c",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "name" : "c",
               "operandTypeSpecifier" : {
                  "localId" : "8",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "17",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "14",
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
               "localId" : "16",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "15",
                  "type" : "First",
                  "source" : {
                     "localId" : "14",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  }
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "18",
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
               "localId" : "20",
               "name" : "process",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "19",
                  "type" : "First",
                  "source" : {
                     "localId" : "18",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve"
                  }
               } ]
            }
         } ]
      }
   }
}

