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
library FluentFunctionsOverloadCallingSelf version '1'
using Simple version '1.0.0'
context Patient

define fluent function targetMatches(option Tuple { option System.String }, target Tuple { id System.String }):
  target.id = option.option

define fluent function targetMatches(option Tuple { option System.String }, targetId System.String):
  targetId = option.option

define fluent function targetMatches(options List<Tuple { option System.String }>, target Tuple { id System.String }):
  exists (options O where O.targetMatches(target))

define fluent function targetMatches(options List<Tuple { option System.String }>, targetId System.String):
  exists (options O where O.targetMatches(targetId))

define testOptionsList:
  {
    {
      option: 'test123'
    },
    {
      option: 'test341'
    }
  }

define matchTestFalse: "testOptionsList".targetMatches({id: 'test789'})
define matchTestTrue: "testOptionsList".targetMatches({id: 'test123'})
define matchTestsFalse: exists (({ {id: 'test789'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
define matchTestsTrue: exists (({ {id: 'test341'}, {id: 'test719'} }) T
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
         "type" : "Annotation",
         "s" : {
            "r" : "485",
            "s" : [ {
               "value" : [ "","library FluentFunctionsOverloadCallingSelf version '1'" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "FluentFunctionsOverloadCallingSelf",
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
                     "value" : [ "","define fluent function targetMatches(options List<Tuple { option System.String }>, target Tuple { id System.String }):\n  " ]
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
                                             "value" : [ "options" ]
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
                        "name" : "options",
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
               "name" : "options",
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
                     "value" : [ "","define fluent function targetMatches(options List<Tuple { option System.String }>, targetId System.String):\n  " ]
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
                                             "value" : [ "options" ]
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
                        "name" : "options",
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
               "name" : "options",
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
                     "r" : "399",
                     "s" : [ {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "399",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "395",
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
               "localId" : "399",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
               "signature" : [ {
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
               }, {
                  "localId" : "404",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "405",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "406",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
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
               }, {
                  "localId" : "394",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "396",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "397",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "398",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "395",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test789",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "408",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "408",
                  "s" : [ {
                     "value" : [ "","define ","matchTestTrue",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "409",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "419",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "414",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "415",
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
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "type" : "FunctionRef",
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
               }, {
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
               } ],
               "operand" : [ {
                  "localId" : "409",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
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
                  }
               }, {
                  "localId" : "414",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "416",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "417",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "418",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "415",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "428",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "428",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsFalse",": " ]
                  }, {
                     "r" : "429",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "471",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "471",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "430",
                                 "s" : [ {
                                    "r" : "431",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "431",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "432",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "433",
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
                                          "r" : "437",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "438",
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
                              "r" : "463",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "463",
                                 "s" : [ {
                                    "r" : "454",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "463",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "459",
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
               "localId" : "429",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "480",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
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
                  }
               } ],
               "operand" : {
                  "localId" : "471",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "476",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "477",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "478",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "479",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "430",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "450",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "451",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "452",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "453",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "431",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "446",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
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
                           }
                        },
                        "element" : [ {
                           "localId" : "432",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "434",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "435",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "436",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "433",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test789",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "437",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "439",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "440",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "441",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "438",
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
                     "localId" : "463",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "464",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "465",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "466",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "467",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "468",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "469",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "470",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
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
                     }, {
                        "localId" : "459",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "460",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "461",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "462",
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
            "localId" : "485",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "485",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsTrue",": " ]
                  }, {
                     "r" : "486",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "528",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "528",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "487",
                                 "s" : [ {
                                    "r" : "488",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "488",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "489",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "490",
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
                                          "r" : "494",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "495",
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
                              "r" : "520",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "520",
                                 "s" : [ {
                                    "r" : "511",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "520",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "516",
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
               "localId" : "486",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "537",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "538",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "539",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "540",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "528",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "533",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "534",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "535",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "536",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "487",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "507",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
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
                        }
                     },
                     "expression" : {
                        "localId" : "488",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "503",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "504",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "505",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "506",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "489",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "491",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "492",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "493",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "490",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test341",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "494",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
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
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "495",
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
                     "localId" : "520",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "521",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "522",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "523",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "524",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "525",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "526",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "527",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "511",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "512",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "513",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "514",
                                 "name" : "option",
                                 "elementType" : {
                                    "localId" : "515",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        }
                     }, {
                        "localId" : "516",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "517",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "518",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "519",
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
include FluentFunctionsOverloadCallingSelf version '1' called FluentFunctionsOverloadCallingSelf
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
define matchTestFalse: "testOptionsList".targetMatches({id: 'test789'})
define matchTestTrue: "testOptionsList".targetMatches({id: 'test123'})
define matchTestsFalse: exists (({ {id: 'test789'}, {id: 'test719'} }) T
  where "testOptionsList".targetMatches(T))
define matchTestsTrue: exists (({ {id: 'test341'}, {id: 'test719'} }) T
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
            "r" : "331",
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
            "version" : "1",
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
                     "value" : [ " version ","'1'"," called ","FluentFunctionsOverloadCallingSelf" ]
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
                     "r" : "245",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "241",
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
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "246",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
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
                  }
               }, {
                  "localId" : "250",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "251",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "252",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
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
               }, {
                  "localId" : "240",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "242",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "243",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "244",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "241",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test789",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","matchTestTrue",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "\"testOptionsList\"" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "targetMatches","(" ]
                        }, {
                           "r" : "260",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "261",
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
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "targetMatches",
               "libraryName" : "FluentFunctionsOverloadCallingSelf",
               "type" : "FunctionRef",
               "signature" : [ {
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
               }, {
                  "localId" : "270",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "271",
                     "name" : "id",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ],
               "operand" : [ {
                  "localId" : "255",
                  "name" : "testOptionsList",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "256",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
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
                     }
                  }
               }, {
                  "localId" : "260",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "262",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "263",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "264",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "id",
                     "value" : {
                        "localId" : "261",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "test123",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsFalse",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "276",
                                 "s" : [ {
                                    "r" : "277",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "277",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "278",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "279",
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
                                          "r" : "283",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "284",
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
                              "r" : "309",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "309",
                                 "s" : [ {
                                    "r" : "300",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "309",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "305",
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
               "localId" : "275",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "326",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
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
                  }
               } ],
               "operand" : {
                  "localId" : "317",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "322",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "323",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "324",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "325",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "276",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "296",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "297",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "298",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "299",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "277",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "292",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "293",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "294",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "295",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "278",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "280",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "281",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "282",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "279",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test789",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "283",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "285",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "286",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "287",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "284",
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
                     "localId" : "309",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "310",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "311",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "312",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "313",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "314",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "315",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "316",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
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
                     }, {
                        "localId" : "305",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "306",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "307",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "308",
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
            "localId" : "331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "matchTestsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "331",
                  "s" : [ {
                     "value" : [ "","define ","matchTestsTrue",": " ]
                  }, {
                     "r" : "332",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "374",
                           "s" : [ {
                              "s" : [ {
                                 "r" : "333",
                                 "s" : [ {
                                    "r" : "334",
                                    "s" : [ {
                                       "value" : [ "(" ]
                                    }, {
                                       "r" : "334",
                                       "s" : [ {
                                          "value" : [ "{ " ]
                                       }, {
                                          "r" : "335",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "336",
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
                                          "r" : "340",
                                          "s" : [ {
                                             "value" : [ "{" ]
                                          }, {
                                             "s" : [ {
                                                "value" : [ "id",": " ]
                                             }, {
                                                "r" : "341",
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
                              "r" : "366",
                              "s" : [ {
                                 "value" : [ "where " ]
                              }, {
                                 "r" : "366",
                                 "s" : [ {
                                    "r" : "357",
                                    "s" : [ {
                                       "value" : [ "\"testOptionsList\"" ]
                                    } ]
                                 }, {
                                    "value" : [ "." ]
                                 }, {
                                    "r" : "366",
                                    "s" : [ {
                                       "value" : [ "targetMatches","(" ]
                                    }, {
                                       "r" : "362",
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
               "localId" : "332",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Exists",
               "signature" : [ {
                  "localId" : "383",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "384",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "385",
                        "name" : "id",
                        "elementType" : {
                           "localId" : "386",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ],
               "operand" : {
                  "localId" : "374",
                  "type" : "Query",
                  "resultTypeSpecifier" : {
                     "localId" : "379",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "380",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "381",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "382",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "source" : [ {
                     "localId" : "333",
                     "alias" : "T",
                     "resultTypeSpecifier" : {
                        "localId" : "353",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "354",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "355",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "356",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     },
                     "expression" : {
                        "localId" : "334",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "349",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "350",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "351",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "352",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           }
                        },
                        "element" : [ {
                           "localId" : "335",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "337",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "338",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "339",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "336",
                                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                 "value" : "test341",
                                 "type" : "Literal"
                              }
                           } ]
                        }, {
                           "localId" : "340",
                           "type" : "Tuple",
                           "resultTypeSpecifier" : {
                              "localId" : "342",
                              "type" : "TupleTypeSpecifier",
                              "element" : [ {
                                 "localId" : "343",
                                 "name" : "id",
                                 "elementType" : {
                                    "localId" : "344",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "type" : "NamedTypeSpecifier"
                                 }
                              } ]
                           },
                           "element" : [ {
                              "name" : "id",
                              "value" : {
                                 "localId" : "341",
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
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "targetMatches",
                     "libraryName" : "FluentFunctionsOverloadCallingSelf",
                     "type" : "FunctionRef",
                     "signature" : [ {
                        "localId" : "367",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "368",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "369",
                              "name" : "option",
                              "elementType" : {
                                 "localId" : "370",
                                 "name" : "{urn:hl7-org:elm-types:r1}String",
                                 "type" : "NamedTypeSpecifier"
                              }
                           } ]
                        }
                     }, {
                        "localId" : "371",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "372",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "373",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     } ],
                     "operand" : [ {
                        "localId" : "357",
                        "name" : "testOptionsList",
                        "type" : "ExpressionRef",
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
                        }
                     }, {
                        "localId" : "362",
                        "name" : "T",
                        "type" : "AliasRef",
                        "resultTypeSpecifier" : {
                           "localId" : "363",
                           "type" : "TupleTypeSpecifier",
                           "element" : [ {
                              "localId" : "364",
                              "name" : "id",
                              "elementType" : {
                                 "localId" : "365",
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

