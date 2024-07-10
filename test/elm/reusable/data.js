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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "215",
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
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "42",
               "type" : "Literal"
            }
         }, {
            "localId" : "215",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "217",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "218",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "220",
            "name" : "testValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","testValue",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "\"foo bar\"","(","1",",","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "name" : "foo bar",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "message" : "The function TestSnippet.process has multiple overloads and due to the SignatureLevel setting (None), the overload signature is not being included in the output. This may result in ambiguous function resolution at runtime, consider setting the SignatureLevel to Overloads or All to ensure that the output includes sufficient information to support correct overload selection at runtime.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "The function TestSnippet.process has multiple overloads and due to the SignatureLevel setting (None), the overload signature is not being included in the output. This may result in ambiguous function resolution at runtime, consider setting the SignatureLevel to Overloads or All to ensure that the output includes sufficient information to support correct overload selection at runtime.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "229",
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
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "215",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "216",
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
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "217",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String) :\n  " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "'Hello '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "222",
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
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "219",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "218",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "225",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "226",
                        "value" : [ "process","(","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "229",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "230",
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
               "localId" : "231",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "230",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "message" : "The function TestSnippet.process has multiple overloads and due to the SignatureLevel setting (None), the overload signature is not being included in the output. This may result in ambiguous function resolution at runtime, consider setting the SignatureLevel to Overloads or All to ensure that the output includes sufficient information to support correct overload selection at runtime.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "The function TestSnippet.process has multiple overloads and due to the SignatureLevel setting (None), the overload signature is not being included in the output. This may result in ambiguous function resolution at runtime, consider setting the SignatureLevel to Overloads or All to ensure that the output includes sufficient information to support correct overload selection at runtime.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "245",
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
                           "r" : "221",
                           "s" : [ {
                              "r" : "222",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           }, {
                              "r" : "223",
                              "value" : [ " + ","1" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "type" : "If",
               "condition" : {
                  "localId" : "217",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "218",
                  "type" : "Subtract",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "219",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "221",
                  "type" : "Add",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "222",
                     "name" : "a",
                     "type" : "OperandRef"
                  }, {
                     "localId" : "223",
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
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "215",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "214",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "224",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define function process(inverse System.Boolean, a System.String) :\n  " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "inverse" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "r" : "232",
                              "s" : [ {
                                 "value" : [ "'Goodbye '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "233",
                              "s" : [ {
                                 "value" : [ "a" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "r" : "236",
                              "s" : [ {
                                 "value" : [ "'Hello '" ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "237",
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
               "localId" : "229",
               "type" : "If",
               "condition" : {
                  "localId" : "230",
                  "name" : "inverse",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "234",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Goodbye ",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               },
               "else" : {
                  "localId" : "238",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "name" : "a",
                     "type" : "OperandRef"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "226",
               "name" : "inverse",
               "operandTypeSpecifier" : {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "228",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "240",
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
                     "r" : "243",
                     "s" : [ {
                        "r" : "241",
                        "value" : [ "process","(","true",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "245",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "246",
                        "value" : [ "process","(","true",", " ]
                     }, {
                        "r" : "247",
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
               "localId" : "248",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "247",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "249",
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
                     "r" : "217",
                     "s" : [ {
                        "r" : "217",
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
               "localId" : "217",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello ",
                  "type" : "Literal"
               }, {
                  "localId" : "216",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "218",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define function process(a System.String, isSpanish System.Boolean) :\n  " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "if " ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "isSpanish" ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "r" : "229",
                              "s" : [ {
                                 "r" : "227",
                                 "s" : [ {
                                    "value" : [ "'Hola '" ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "228",
                                 "s" : [ {
                                    "value" : [ "a" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "230",
                              "s" : [ {
                                 "value" : [ "' from Spain'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " else " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "r" : "236",
                              "s" : [ {
                                 "r" : "234",
                                 "s" : [ {
                                    "value" : [ "'Hello '" ]
                                 } ]
                              }, {
                                 "value" : [ " + " ]
                              }, {
                                 "r" : "235",
                                 "s" : [ {
                                    "value" : [ "a" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " + " ]
                           }, {
                              "r" : "237",
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
               "localId" : "223",
               "type" : "If",
               "condition" : {
                  "localId" : "224",
                  "name" : "isSpanish",
                  "type" : "OperandRef"
               },
               "then" : {
                  "localId" : "231",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "229",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "227",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hola ",
                        "type" : "Literal"
                     }, {
                        "localId" : "228",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from Spain",
                     "type" : "Literal"
                  } ]
               },
               "else" : {
                  "localId" : "238",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "236",
                     "type" : "Concatenate",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "Hello ",
                        "type" : "Literal"
                     }, {
                        "localId" : "235",
                        "name" : "a",
                        "type" : "OperandRef"
                     } ]
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : " from England",
                     "type" : "Literal"
                  } ]
               }
            },
            "operand" : [ {
               "localId" : "220",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "219",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "222",
               "name" : "isSpanish",
               "operandTypeSpecifier" : {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "240",
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
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "241",
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
               "localId" : "242",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "246",
                        "value" : [ ", ","true",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "249",
            "name" : "testValue3",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","testValue3",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "r" : "251",
                        "value" : [ ", ","false",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "250",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               }, {
                  "localId" : "251",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "message" : "The function TestSnippet.process has multiple overloads and due to the SignatureLevel setting (None), the overload signature is not being included in the output. This may result in ambiguous function resolution at runtime, consider setting the SignatureLevel to Overloads or All to ensure that the output includes sufficient information to support correct overload selection at runtime.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "message" : "The function TestSnippet.process has multiple overloads and due to the SignatureLevel setting (None), the overload signature is not being included in the output. This may result in ambiguous function resolution at runtime, consider setting the SignatureLevel to Overloads or All to ensure that the output includes sufficient information to support correct overload selection at runtime.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "235",
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
                     "r" : "218",
                     "s" : [ {
                        "r" : "218",
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
               "localId" : "218",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Encounter ",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "216",
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
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "219",
            "name" : "process",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define function process(c Simple.Condition) :\n  " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "'Condition '" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "r" : "224",
                              "s" : [ {
                                 "value" : [ "c" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "225",
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
               "localId" : "226",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Condition ",
                  "type" : "Literal"
               }, {
                  "localId" : "225",
                  "path" : "id",
                  "type" : "Property",
                  "source" : {
                     "localId" : "224",
                     "name" : "c",
                     "type" : "OperandRef"
                  }
               } ]
            },
            "operand" : [ {
               "localId" : "221",
               "name" : "c",
               "operandTypeSpecifier" : {
                  "localId" : "220",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "228",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "229",
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
               "localId" : "233",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "232",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "229",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               } ]
            }
         }, {
            "localId" : "235",
            "name" : "testValue2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","testValue2",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "process","(" ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "236",
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
               "localId" : "240",
               "name" : "process",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "239",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "236",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                     "type" : "Retrieve",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
                     "r" : "220",
                     "s" : [ {
                        "r" : "220",
                        "s" : [ {
                           "r" : "218",
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
                           "r" : "219",
                           "s" : [ {
                              "value" : [ "'!'" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "type" : "Concatenate",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "218",
                  "type" : "Concatenate",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Hello ",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "name" : "name",
                     "type" : "OperandRef"
                  } ]
               }, {
                  "localId" : "219",
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
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "221",
            "name" : "add",
            "context" : "Patient",
            "accessLevel" : "Public",
            "fluent" : true,
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define fluent function add(a System.Integer, b System.Integer) :\n  " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "228",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "227",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "228",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "223",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "225",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "230",
            "name" : "testValue1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","testValue1",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "greet","()" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "name" : "greet",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "234",
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
                     "r" : "237",
                     "s" : [ {
                        "r" : "235",
                        "value" : [ "1","." ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "add","(","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "name" : "add",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "236",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

