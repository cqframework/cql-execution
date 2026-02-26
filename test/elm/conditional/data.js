/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* If
library TestSnippet version '1'
using Simple version '1.0.0'
parameter var Boolean
context Patient
define exp: if var then 'true return' else 'false return'
*/

module.exports['If'] = {
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
        "r" : "217",
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
    "parameters" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "var",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "var", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Boolean" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "214",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "212",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "213",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "211",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "217",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "exp",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "217",
            "s" : [ {
              "value" : [ "", "define ", "exp", ": " ]
            }, {
              "r" : "218",
              "s" : [ {
                "value" : [ "if " ]
              }, {
                "r" : "219",
                "s" : [ {
                  "value" : [ "var" ]
                } ]
              }, {
                "value" : [ " then " ]
              }, {
                "r" : "220",
                "s" : [ {
                  "value" : [ "'true return'" ]
                } ]
              }, {
                "value" : [ " else " ]
              }, {
                "r" : "222",
                "s" : [ {
                  "value" : [ "'false return'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "If",
          "localId" : "218",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "condition" : {
            "type" : "ParameterRef",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "var",
            "annotation" : [ ]
          },
          "then" : {
            "type" : "Literal",
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "true return",
            "annotation" : [ ]
          },
          "else" : {
            "type" : "Literal",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "false return",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* Case
library TestSnippet version '1'
using Simple version '1.0.0'
parameter var Integer
parameter X Integer
parameter Y Integer
context Patient

define selected:
  case var
   when 1 then 'one'
   when 2 then 'two'
   else
    '?'
  end

define standard:
  case
    when X > Y then 'X > Y'
    when X < Y then 'X < Y'
    else 'X == Y'
  end
*/

module.exports['Case'] = {
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
        "r" : "238",
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
    "parameters" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "var",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "var", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Integer" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "X",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "value" : [ "", "parameter ", "X", " " ]
            }, {
              "r" : "212",
              "s" : [ {
                "value" : [ "Integer" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Y",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "parameter ", "Y", " " ]
            }, {
              "r" : "215",
              "s" : [ {
                "value" : [ "Integer" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "220",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "218",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "219",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "217",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "223",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "selected",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "selected", ":\n  " ]
            }, {
              "r" : "224",
              "s" : [ {
                "value" : [ "case " ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "var" ]
                } ]
              }, {
                "value" : [ "\n   " ]
              }, {
                "r" : "226",
                "s" : [ {
                  "r" : "227",
                  "value" : [ "when ", "1", " then " ]
                }, {
                  "r" : "228",
                  "s" : [ {
                    "value" : [ "'one'" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n   " ]
              }, {
                "r" : "230",
                "s" : [ {
                  "r" : "231",
                  "value" : [ "when ", "2", " then " ]
                }, {
                  "r" : "232",
                  "s" : [ {
                    "value" : [ "'two'" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n   else\n    " ]
              }, {
                "r" : "234",
                "s" : [ {
                  "value" : [ "'?'" ]
                } ]
              }, {
                "value" : [ "\n  end" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Case",
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "comparand" : {
            "type" : "ParameterRef",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "var",
            "annotation" : [ ]
          },
          "caseItem" : [ {
            "localId" : "226",
            "annotation" : [ ],
            "when" : {
              "type" : "Literal",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "then" : {
              "type" : "Literal",
              "localId" : "228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "one",
              "annotation" : [ ]
            }
          }, {
            "localId" : "230",
            "annotation" : [ ],
            "when" : {
              "type" : "Literal",
              "localId" : "231",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            },
            "then" : {
              "type" : "Literal",
              "localId" : "232",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "two",
              "annotation" : [ ]
            }
          } ],
          "else" : {
            "type" : "Literal",
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "?",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "238",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "standard",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "238",
            "s" : [ {
              "value" : [ "", "define ", "standard", ":\n  " ]
            }, {
              "r" : "239",
              "s" : [ {
                "value" : [ "case\n    " ]
              }, {
                "r" : "240",
                "s" : [ {
                  "value" : [ "when " ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "r" : "242",
                    "s" : [ {
                      "value" : [ "X" ]
                    } ]
                  }, {
                    "value" : [ " ", ">", " " ]
                  }, {
                    "r" : "243",
                    "s" : [ {
                      "value" : [ "Y" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " then " ]
                }, {
                  "r" : "246",
                  "s" : [ {
                    "value" : [ "'X > Y'" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    " ]
              }, {
                "r" : "248",
                "s" : [ {
                  "value" : [ "when " ]
                }, {
                  "r" : "249",
                  "s" : [ {
                    "r" : "250",
                    "s" : [ {
                      "value" : [ "X" ]
                    } ]
                  }, {
                    "value" : [ " ", "<", " " ]
                  }, {
                    "r" : "251",
                    "s" : [ {
                      "value" : [ "Y" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " then " ]
                }, {
                  "r" : "254",
                  "s" : [ {
                    "value" : [ "'X < Y'" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n    else " ]
              }, {
                "r" : "256",
                "s" : [ {
                  "value" : [ "'X == Y'" ]
                } ]
              }, {
                "value" : [ "\n  end" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Case",
          "localId" : "239",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "caseItem" : [ {
            "localId" : "240",
            "annotation" : [ ],
            "when" : {
              "type" : "Greater",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "244",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "245",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "ParameterRef",
                "localId" : "242",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "X",
                "annotation" : [ ]
              }, {
                "type" : "ParameterRef",
                "localId" : "243",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "Y",
                "annotation" : [ ]
              } ]
            },
            "then" : {
              "type" : "Literal",
              "localId" : "246",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "X > Y",
              "annotation" : [ ]
            }
          }, {
            "localId" : "248",
            "annotation" : [ ],
            "when" : {
              "type" : "Less",
              "localId" : "249",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "252",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "253",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "ParameterRef",
                "localId" : "250",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "X",
                "annotation" : [ ]
              }, {
                "type" : "ParameterRef",
                "localId" : "251",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "Y",
                "annotation" : [ ]
              } ]
            },
            "then" : {
              "type" : "Literal",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "X < Y",
              "annotation" : [ ]
            }
          } ],
          "else" : {
            "type" : "Literal",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "X == Y",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

