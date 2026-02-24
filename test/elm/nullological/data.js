/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Nil
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Nil: null
*/

module.exports['Nil'] = {
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Nil",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Nil", ": ", "null" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Null",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ]
        }
      } ]
    }
  }
}

/* IsNull
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Nil: null
define One: 1
define NullIsNull: null is null
define NullVarIsNull: Nil is null
define StringIsNull: '' is null
define NonNullVarIsNull: One is null
*/

module.exports['IsNull'] = {
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
        "r" : "241",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Nil",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "r" : "215",
              "value" : [ "", "define ", "Nil", ": ", "null" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Null",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ]
        }
      }, {
        "localId" : "218",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "One",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "r" : "219",
              "value" : [ "", "define ", "One", ": ", "1" ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "1",
          "annotation" : [ ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "NullIsNull", ": " ]
            }, {
              "r" : "224",
              "s" : [ {
                "r" : "223",
                "value" : [ "null", " is null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsNull",
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Null",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullVarIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "NullVarIsNull", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "229",
                "s" : [ {
                  "value" : [ "Nil" ]
                } ]
              }, {
                "value" : [ " is null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsNull",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Nil",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StringIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "StringIsNull", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "235",
                "s" : [ {
                  "value" : [ "''" ]
                } ]
              }, {
                "value" : [ " is null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsNull",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "241",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NonNullVarIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "241",
            "s" : [ {
              "value" : [ "", "define ", "NonNullVarIsNull", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "r" : "242",
                "s" : [ {
                  "value" : [ "One" ]
                } ]
              }, {
                "value" : [ " is null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsNull",
          "localId" : "243",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "ExpressionRef",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "One",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* Coalesce
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NullNullHelloNullWorld: Coalesce(null, null, 'Hello', null, 'World')
define FooNullNullBar: Coalesce('Foo', null, null, 'Bar')
define AllNull: Coalesce(null, null, null)
define ListArgStartsWithNull: Coalesce(List{null, null, 'One', null, 'Two'})
define ListArgAllNull: Coalesce(List{null, null, null, null})
define ListWithNull: List{null, null, 'One', null, 'Two'}
define ListExpressionRef: Coalesce(ListWithNull)
define RetrieveAsList: Coalesce([Encounter])
define ListA: List{null, null, 3}
define UnionAsList: Coalesce(ListA union ListWithNull)
*/

module.exports['Coalesce'] = {
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
        "r" : "373",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "NullNullHelloNullWorld",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "NullNullHelloNullWorld", ": " ]
            }, {
              "r" : "229",
              "s" : [ {
                "r" : "215",
                "value" : [ "Coalesce", "(", "null", ", ", "null", ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'Hello'" ]
                } ]
              }, {
                "r" : "219",
                "value" : [ ", ", "null", ", " ]
              }, {
                "r" : "220",
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
          "type" : "Coalesce",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "233",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Null",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "Null",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Hello",
            "annotation" : [ ]
          }, {
            "type" : "Null",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "237",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "FooNullNullBar",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "237",
            "s" : [ {
              "value" : [ "", "define ", "FooNullNullBar", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "value" : [ "Coalesce", "(" ]
              }, {
                "r" : "238",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "r" : "240",
                "value" : [ ", ", "null", ", ", "null", ", " ]
              }, {
                "r" : "242",
                "s" : [ {
                  "value" : [ "'Bar'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Coalesce",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "253",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "254",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "261",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "AllNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "261",
            "s" : [ {
              "value" : [ "", "define ", "AllNull", ": " ]
            }, {
              "r" : "270",
              "s" : [ {
                "r" : "262",
                "value" : [ "Coalesce", "(", "null", ", ", "null", ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Coalesce",
          "localId" : "270",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "272",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "273",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Null",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "Null",
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }, {
            "type" : "Null",
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "276",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ListArgStartsWithNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "276",
            "s" : [ {
              "value" : [ "", "define ", "ListArgStartsWithNull", ": " ]
            }, {
              "r" : "294",
              "s" : [ {
                "value" : [ "Coalesce", "(" ]
              }, {
                "r" : "277",
                "s" : [ {
                  "r" : "278",
                  "value" : [ "List{", "null", ", ", "null", ", " ]
                }, {
                  "r" : "280",
                  "s" : [ {
                    "value" : [ "'One'" ]
                  } ]
                }, {
                  "r" : "282",
                  "value" : [ ", ", "null", ", " ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "value" : [ "'Two'" ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Coalesce",
          "localId" : "294",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "295",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "296",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "277",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "288",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "289",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "285",
              "asType" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "278",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "286",
              "asType" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "279",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "280",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "One",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "287",
              "asType" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "282",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Two",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "299",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "ListArgAllNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "299",
            "s" : [ {
              "value" : [ "", "define ", "ListArgAllNull", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "value" : [ "Coalesce", "(" ]
              }, {
                "r" : "300",
                "s" : [ {
                  "r" : "301",
                  "value" : [ "List{", "null", ", ", "null", ", ", "null", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Coalesce",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "313",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "List",
            "localId" : "300",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "305",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "306",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Null",
              "localId" : "301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "303",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }, {
              "type" : "Null",
              "localId" : "304",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "316",
        "name" : "ListWithNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "316",
            "s" : [ {
              "value" : [ "", "define ", "ListWithNull", ": " ]
            }, {
              "r" : "317",
              "s" : [ {
                "r" : "318",
                "value" : [ "List{", "null", ", ", "null", ", " ]
              }, {
                "r" : "320",
                "s" : [ {
                  "value" : [ "'One'" ]
                } ]
              }, {
                "r" : "322",
                "value" : [ ", ", "null", ", " ]
              }, {
                "r" : "323",
                "s" : [ {
                  "value" : [ "'Two'" ]
                } ]
              }, {
                "value" : [ "}" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "330",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "317",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "328",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "329",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "element" : [ {
            "type" : "As",
            "localId" : "325",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "326",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "319",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "One",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "327",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Two",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ListExpressionRef",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "ListExpressionRef", ": " ]
            }, {
              "r" : "342",
              "s" : [ {
                "value" : [ "Coalesce", "(" ]
              }, {
                "r" : "335",
                "s" : [ {
                  "value" : [ "ListWithNull" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Coalesce",
          "localId" : "342",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "335",
            "name" : "ListWithNull",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "336",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "337",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "347",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "RetrieveAsList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "347",
            "s" : [ {
              "value" : [ "", "define ", "RetrieveAsList", ": " ]
            }, {
              "r" : "355",
              "s" : [ {
                "value" : [ "Coalesce", "(" ]
              }, {
                "r" : "348",
                "s" : [ {
                  "value" : [ "[", "Encounter", "]" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Coalesce",
          "localId" : "355",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "356",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Retrieve",
            "localId" : "348",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "349",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "350",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            },
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          } ]
        }
      }, {
        "localId" : "360",
        "name" : "ListA",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "360",
            "s" : [ {
              "value" : [ "", "define ", "ListA", ": " ]
            }, {
              "r" : "361",
              "s" : [ {
                "r" : "362",
                "value" : [ "List{", "null", ", ", "null", ", ", "3", "}" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "369",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "370",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "List",
          "localId" : "361",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "367",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "368",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "element" : [ {
            "type" : "As",
            "localId" : "365",
            "asType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "362",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "366",
            "asType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "363",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "3",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "373",
        "name" : "UnionAsList",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "373",
            "s" : [ {
              "value" : [ "", "define ", "UnionAsList", ": " ]
            }, {
              "r" : "409",
              "s" : [ {
                "value" : [ "Coalesce", "(" ]
              }, {
                "r" : "390",
                "s" : [ {
                  "r" : "374",
                  "s" : [ {
                    "value" : [ "ListA" ]
                  } ]
                }, {
                  "value" : [ " union " ]
                }, {
                  "r" : "377",
                  "s" : [ {
                    "value" : [ "ListWithNull" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "417",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "418",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "419",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "Coalesce",
          "localId" : "409",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "414",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "415",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "416",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "410",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "411",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "412",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "413",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            }
          } ],
          "operand" : [ {
            "type" : "Union",
            "localId" : "390",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "399",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ChoiceTypeSpecifier",
                "localId" : "400",
                "annotation" : [ ],
                "choice" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "401",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "402",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ]
              }
            },
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "391",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ChoiceTypeSpecifier",
                "localId" : "392",
                "annotation" : [ ],
                "choice" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "393",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "394",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ]
              }
            }, {
              "type" : "ListTypeSpecifier",
              "localId" : "395",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ChoiceTypeSpecifier",
                "localId" : "396",
                "annotation" : [ ],
                "choice" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "397",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "398",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "operand" : [ {
              "type" : "As",
              "localId" : "380",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "374",
                "name" : "ListA",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "375",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "376",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "381",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "ChoiceTypeSpecifier",
                  "localId" : "382",
                  "annotation" : [ ],
                  "choice" : [ {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "383",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }, {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "384",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  } ]
                }
              }
            }, {
              "type" : "As",
              "localId" : "385",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "ExpressionRef",
                "localId" : "377",
                "name" : "ListWithNull",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "378",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "379",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }
              },
              "asTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "386",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "ChoiceTypeSpecifier",
                  "localId" : "387",
                  "annotation" : [ ],
                  "choice" : [ {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "388",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }, {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "389",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  } ]
                }
              }
            } ]
          } ]
        }
      } ]
    }
  }
}

