/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Count
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Count({1,2,3,4,5})
define has_null: Count({1,null,null,null,2})
define empty: Count({})
define is_null: Count(null as List<Integer>)
*/

module.exports['Count'] = {
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
        "localId" : "214",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "not_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "not_null", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "value" : [ "Count", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Count",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "228",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "value" : [ "Count", "(" ]
              }, {
                "r" : "233",
                "s" : [ {
                  "r" : "234",
                  "value" : [ "{", "1", ",", "null", ",", "null", ",", "null", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Count",
          "localId" : "248",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "249",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "250",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "233",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "242",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "243",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "239",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "240",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "241",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "237",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "253",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "253",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "261",
              "s" : [ {
                "r" : "254",
                "value" : [ "Count", "(", "{}", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Count",
          "localId" : "261",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "262",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "254",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "255",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "256",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "is_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "is_null", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "Count", "(" ]
              }, {
                "r" : "267",
                "s" : [ {
                  "r" : "268",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "269",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "270",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Count",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "280",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "281",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "As",
            "localId" : "267",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "273",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "274",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "269",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "271",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "270",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }
          }
        }
      } ]
    }
  }
}

/* Sum
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Sum({1,2,3,4,5})
define has_null: Sum({1,null,null,null,2})
define not_null_q: Sum({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define has_null_q: Sum({1 'ml',null,null,null,2 'ml'})
define unmatched_units_q: Min({1 'ml',2 'm',3 'ml',4 'ml',5 'ml',0 'ml'})
define empty: Sum(List<Integer>{})
define q_diff_units: Sum({1 'ml',0.002 'l',0.03 'dl',4 'ml',0.005 'l'})
define NumbersAndQuantities: Sum({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Sum({1 'mg/d', 0.002 '/d'})
*/

module.exports['Sum'] = {
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
        "r" : "366",
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
        "name" : "not_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "not_null", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Sum",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "228",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "233",
                "s" : [ {
                  "r" : "234",
                  "value" : [ "{", "1", ",", "null", ",", "null", ",", "null", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Sum",
          "localId" : "248",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "249",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "250",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "233",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "242",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "243",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "239",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "240",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "241",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "237",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "253",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "not_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "253",
            "s" : [ {
              "value" : [ "", "define ", "not_null_q", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "254",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "255",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "257",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "258",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "259",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Sum",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "267",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "268",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "254",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "260",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "261",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "259",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "271",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "has_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "271",
            "s" : [ {
              "value" : [ "", "define ", "has_null_q", ": " ]
            }, {
              "r" : "287",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "272",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "273",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "274",
                  "value" : [ ",", "null", ",", "null", ",", "null", "," ]
                }, {
                  "r" : "277",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
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
          "type" : "Sum",
          "localId" : "287",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "288",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "289",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "272",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "281",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "282",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "278",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "274",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "279",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "275",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "280",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "276",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "277",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "292",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "unmatched_units_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "292",
            "s" : [ {
              "value" : [ "", "define ", "unmatched_units_q", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "293",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "294",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "295",
                  "s" : [ {
                    "value" : [ "2 ", "'m'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "296",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "297",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "298",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "299",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Min",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "307",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "308",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "293",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "300",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "301",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "m",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "296",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "297",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "298",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "311",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "311",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "312",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">{}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Sum",
          "localId" : "321",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "322",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "323",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "313",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "315",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "339",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "327",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "328",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "329",
                  "s" : [ {
                    "value" : [ "0.002 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "330",
                  "s" : [ {
                    "value" : [ "0.03 ", "'dl'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "331",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "332",
                  "s" : [ {
                    "value" : [ "0.005 ", "'l'" ]
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
          "type" : "Sum",
          "localId" : "339",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "340",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "341",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "327",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "333",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "334",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "328",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "329",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "330",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.03,
              "unit" : "dl",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "331",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "332",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.005,
              "unit" : "l",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "344",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "344",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "361",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "345",
                "s" : [ {
                  "r" : "346",
                  "value" : [ "{", "1", " ," ]
                }, {
                  "r" : "347",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "348",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "349",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "350",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "351",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Sum",
          "localId" : "361",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "362",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "363",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "345",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "355",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "356",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "353",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "354",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "346",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "347",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "348",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "349",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "366",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "366",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "376",
              "s" : [ {
                "value" : [ "Sum", "(" ]
              }, {
                "r" : "367",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "368",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "369",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Sum",
          "localId" : "376",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "377",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "378",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "367",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "370",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "371",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "368",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "369",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* Min
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Min({1,2,3,4,5,0})
define has_null: Min({1,null,-1,null,2})
define empty: Min(List<Integer>{})
define not_null_q: Min({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define has_null_q: Min({1 'ml',null,-1 'ml',null,2 'ml'})
define q_diff_units: Min({1 'ml',2 'dl',3 'l',4 'l',5 'l',0 'ml'})
define NumbersAndQuantities: Min({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IntegerMin: Min({ 2, 4, 8, 6 })
define DecimalMin: Min({ 5.0, 4.9, 5.1, -5.0 })
define DateMin: Min({ @2012-12-31, @2013-01-01, @2012-01-01 })
define DateTimeMin: Min({ DateTime(2012, 9, 9), DateTime(2012, 9, 5) })
define TimeMin: Min({ Time(12, 30, 4), Time(12, 30, 3), Time(12, 30, 5)})
define StringMin: Min({'def', 'abc', 'jkl', 'ghi'})
define MinIsNull: Min({ null as Quantity, null as Quantity, null as Quantity })
define MinIsAlsoNull: Min(null as List<Decimal>)
define IncompatibleUnitsNull: Min({1 'mg/d', 0.002 '/d'})
*/

module.exports['Min'] = {
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
        "r" : "563",
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
        "name" : "not_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "not_null", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", ",", "0", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "229",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "222",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "223",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "221",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "233",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "234",
                "s" : [ {
                  "r" : "235",
                  "value" : [ "{", "1", ",", "null", "," ]
                }, {
                  "r" : "237",
                  "s" : [ {
                    "r" : "238",
                    "value" : [ "-", "1" ]
                  } ]
                }, {
                  "r" : "240",
                  "value" : [ ",", "null", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "251",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "252",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "234",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "244",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "245",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "242",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Negate",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "239",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "238",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "243",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "240",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "255",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">{}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "266",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "257",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "259",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "260",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "not_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "not_null_q", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "272",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "273",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "274",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "275",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "276",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "277",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Min",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "285",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "286",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "271",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "278",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "279",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "274",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "275",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "277",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "289",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "has_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "289",
            "s" : [ {
              "value" : [ "", "define ", "has_null_q", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "290",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "291",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "292",
                  "value" : [ ",", "null", "," ]
                }, {
                  "r" : "293",
                  "s" : [ {
                    "value" : [ "-" ]
                  }, {
                    "r" : "294",
                    "s" : [ {
                      "value" : [ "1 ", "'ml'" ]
                    } ]
                  } ]
                }, {
                  "r" : "296",
                  "value" : [ ",", "null", "," ]
                }, {
                  "r" : "297",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
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
          "type" : "Min",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "307",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "308",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "290",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "300",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "301",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "298",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "292",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Negate",
              "localId" : "293",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "295",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Quantity",
                "localId" : "294",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "value" : 1,
                "unit" : "ml",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "299",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "296",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "297",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "311",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "311",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "325",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "312",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "313",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "314",
                  "s" : [ {
                    "value" : [ "2 ", "'dl'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "315",
                  "s" : [ {
                    "value" : [ "3 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "316",
                  "s" : [ {
                    "value" : [ "4 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "317",
                  "s" : [ {
                    "value" : [ "5 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "318",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Min",
          "localId" : "325",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "326",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "327",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "312",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "319",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "320",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "dl",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "316",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "330",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "330",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "347",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "331",
                "s" : [ {
                  "r" : "332",
                  "value" : [ "{", "1", " ," ]
                }, {
                  "r" : "333",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "334",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "335",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "336",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "337",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Min",
          "localId" : "347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "348",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "349",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "331",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "341",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "342",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "339",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "340",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "332",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "333",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "334",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "335",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "336",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "337",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "352",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerMin",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "352",
            "s" : [ {
              "value" : [ "", "define ", "IntegerMin", ": " ]
            }, {
              "r" : "364",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "353",
                "s" : [ {
                  "r" : "354",
                  "value" : [ "{ ", "2", ", ", "4", ", ", "8", ", ", "6", " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "364",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "365",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "366",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "353",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "358",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "359",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "355",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "356",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "8",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "357",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "6",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "369",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMin",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "369",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMin", ": " ]
            }, {
              "r" : "383",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "370",
                "s" : [ {
                  "r" : "371",
                  "value" : [ "{ ", "5.0", ", ", "4.9", ", ", "5.1", ", " ]
                }, {
                  "r" : "374",
                  "s" : [ {
                    "r" : "375",
                    "value" : [ "-", "5.0" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "383",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "384",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "385",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "370",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "377",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "378",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "371",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "372",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.9",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "373",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.1",
              "annotation" : [ ]
            }, {
              "type" : "Negate",
              "localId" : "374",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "376",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "375",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "5.0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "388",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateMin",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "388",
            "s" : [ {
              "value" : [ "", "define ", "DateMin", ": " ]
            }, {
              "r" : "411",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "389",
                "s" : [ {
                  "r" : "394",
                  "value" : [ "{ ", "@2012-12-31", ", ", "@2013-01-01", ", ", "@2012-01-01", " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "411",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "412",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "413",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "389",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "405",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "406",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Date",
              "localId" : "394",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ ],
              "year" : {
                "type" : "Literal",
                "localId" : "391",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "392",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "393",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "31",
                "annotation" : [ ]
              }
            }, {
              "type" : "Date",
              "localId" : "399",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ ],
              "year" : {
                "type" : "Literal",
                "localId" : "396",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2013",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "397",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "398",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Date",
              "localId" : "404",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ ],
              "year" : {
                "type" : "Literal",
                "localId" : "401",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "402",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "403",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "416",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeMin",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "416",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeMin", ": " ]
            }, {
              "r" : "448",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "417",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "426",
                  "s" : [ {
                    "r" : "418",
                    "value" : [ "DateTime", "(", "2012", ", ", "9", ", ", "9", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "438",
                  "s" : [ {
                    "r" : "430",
                    "value" : [ "DateTime", "(", "2012", ", ", "9", ", ", "5", ")" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "448",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "449",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "450",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "417",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "442",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "443",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "DateTime",
              "localId" : "426",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "427",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "428",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "429",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "418",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "419",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "420",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "438",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "439",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "440",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "441",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "430",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "431",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "432",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "453",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeMin",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "453",
            "s" : [ {
              "value" : [ "", "define ", "TimeMin", ": " ]
            }, {
              "r" : "497",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "454",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "463",
                  "s" : [ {
                    "r" : "455",
                    "value" : [ "Time", "(", "12", ", ", "30", ", ", "4", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "475",
                  "s" : [ {
                    "r" : "467",
                    "value" : [ "Time", "(", "12", ", ", "30", ", ", "3", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "487",
                  "s" : [ {
                    "r" : "479",
                    "value" : [ "Time", "(", "12", ", ", "30", ", ", "5", ")" ]
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
          "type" : "Min",
          "localId" : "497",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "498",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "499",
              "name" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "454",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "491",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "492",
                "name" : "{urn:hl7-org:elm-types:r1}Time",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Time",
              "localId" : "463",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "464",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "465",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "466",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "hour" : {
                "type" : "Literal",
                "localId" : "455",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "456",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "457",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }
            }, {
              "type" : "Time",
              "localId" : "475",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "476",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "477",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "478",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "hour" : {
                "type" : "Literal",
                "localId" : "467",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "468",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "469",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }
            }, {
              "type" : "Time",
              "localId" : "487",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "488",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "489",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "490",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "hour" : {
                "type" : "Literal",
                "localId" : "479",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "480",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "481",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "502",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "StringMin",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "502",
            "s" : [ {
              "value" : [ "", "define ", "StringMin", ": " ]
            }, {
              "r" : "518",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "503",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "504",
                  "s" : [ {
                    "value" : [ "'def'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "506",
                  "s" : [ {
                    "value" : [ "'abc'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "508",
                  "s" : [ {
                    "value" : [ "'jkl'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "510",
                  "s" : [ {
                    "value" : [ "'ghi'" ]
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
          "type" : "Min",
          "localId" : "518",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "519",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "520",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "503",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "512",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "513",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "504",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "def",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "506",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "abc",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "508",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "jkl",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "510",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "ghi",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "523",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MinIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "523",
            "s" : [ {
              "value" : [ "", "define ", "MinIsNull", ": " ]
            }, {
              "r" : "540",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "524",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "525",
                  "s" : [ {
                    "r" : "526",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "527",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "528",
                  "s" : [ {
                    "r" : "529",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "530",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "531",
                  "s" : [ {
                    "r" : "532",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "533",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "540",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "541",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "542",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "524",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "534",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "535",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "525",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "526",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "527",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "528",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "529",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "530",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "531",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "532",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "533",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "545",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "MinIsAlsoNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "545",
            "s" : [ {
              "value" : [ "", "define ", "MinIsAlsoNull", ": " ]
            }, {
              "r" : "558",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "546",
                "s" : [ {
                  "r" : "547",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "548",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "549",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Min",
          "localId" : "558",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "559",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "560",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "As",
            "localId" : "546",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "552",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "553",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "547",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "548",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "550",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "551",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "549",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "563",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "563",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "573",
              "s" : [ {
                "value" : [ "Min", "(" ]
              }, {
                "r" : "564",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "565",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "566",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Min",
          "localId" : "573",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "574",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "575",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "564",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "567",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "568",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "565",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "566",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* Max
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Max({10,1,2,3,4,5})
define has_null: Max({1,null,null,2})
define not_null_q: Max({10 'ml',1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define has_null_q: Max({1 'ml',null,null,2 'ml'})
define q_diff_units: Max({10 'ml',1 'ml',2 'ml',3 'ml',4 'ml',5 'l'})
define NumbersAndQuantities: Max({10 ,1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define IncompatibleUnitsNull: Max({1 'mg/d', 0.002 '/d'})

define empty: Max(List<Integer>{})

define IntegerMax: Max({ 2, 4, 8, 6 })
define DecimalMax: Max({ 5.0, 4.9, 5.1, -5.0 })
define DateMax: Max({ @2012-12-31, @2013-01-01, @2012-01-01 })
define DateTimeMax: Max({ DateTime(2012, 2, 3), DateTime(2012, 9, 5) })
define TimeMax: Max({ Time(12, 30, 1), Time(12, 30, 3), Time(12, 30, 2)})
define StringMax: Max({'def', 'abc', 'jkl', 'ghi'})
define MaxIsNull: Max({ null as Quantity, null as Quantity, null as Quantity })
define MaxIsAlsoNull: Max(null as List<Decimal>)
*/

module.exports['Max'] = {
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
        "r" : "554",
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
        "name" : "not_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "not_null", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "10", ",", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "229",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "222",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "223",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "221",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "233",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "234",
                "s" : [ {
                  "r" : "235",
                  "value" : [ "{", "1", ",", "null", ",", "null", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "248",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "234",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "241",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "242",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "239",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "240",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "237",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "252",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "not_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "252",
            "s" : [ {
              "value" : [ "", "define ", "not_null_q", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "253",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "254",
                  "s" : [ {
                    "value" : [ "10 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "255",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "257",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "258",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "259",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Max",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "267",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "268",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "253",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "260",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "261",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "259",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "271",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "has_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "271",
            "s" : [ {
              "value" : [ "", "define ", "has_null_q", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "272",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "273",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "274",
                  "value" : [ ",", "null", ",", "null", "," ]
                }, {
                  "r" : "276",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
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
          "type" : "Max",
          "localId" : "285",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "286",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "272",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "279",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "280",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "277",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "274",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "278",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "275",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "290",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "290",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "304",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "291",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "292",
                  "s" : [ {
                    "value" : [ "10 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "293",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "294",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "295",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "296",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "297",
                  "s" : [ {
                    "value" : [ "5 ", "'l'" ]
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
          "type" : "Max",
          "localId" : "304",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "305",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "306",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "291",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "298",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "299",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "292",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 10,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "293",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "296",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "297",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "l",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "309",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "309",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "326",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "310",
                "s" : [ {
                  "r" : "311",
                  "value" : [ "{", "10", " ," ]
                }, {
                  "r" : "312",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "313",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "314",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "315",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "316",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Max",
          "localId" : "326",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "327",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "328",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "310",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "320",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "321",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "318",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "319",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "311",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "10",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "312",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "316",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "331",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "331",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "341",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "332",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "333",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "334",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Max",
          "localId" : "341",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "342",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "343",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "332",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "335",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "336",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "333",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "334",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "346",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "346",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "356",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "348",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "347",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">{}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "356",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "357",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "358",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "348",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "350",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "351",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }
        }
      }, {
        "localId" : "361",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntegerMax",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "361",
            "s" : [ {
              "value" : [ "", "define ", "IntegerMax", ": " ]
            }, {
              "r" : "373",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "362",
                "s" : [ {
                  "r" : "363",
                  "value" : [ "{ ", "2", ", ", "4", ", ", "8", ", ", "6", " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "373",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "374",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "375",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "362",
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
              "type" : "Literal",
              "localId" : "363",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "364",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "365",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "8",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "366",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "6",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "378",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "DecimalMax",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "378",
            "s" : [ {
              "value" : [ "", "define ", "DecimalMax", ": " ]
            }, {
              "r" : "392",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "379",
                "s" : [ {
                  "r" : "380",
                  "value" : [ "{ ", "5.0", ", ", "4.9", ", ", "5.1", ", " ]
                }, {
                  "r" : "383",
                  "s" : [ {
                    "r" : "384",
                    "value" : [ "-", "5.0" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "392",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "393",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "394",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "379",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "386",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "387",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "380",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "381",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.9",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "382",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.1",
              "annotation" : [ ]
            }, {
              "type" : "Negate",
              "localId" : "383",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "385",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "384",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "5.0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "397",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "DateMax",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "397",
            "s" : [ {
              "value" : [ "", "define ", "DateMax", ": " ]
            }, {
              "r" : "420",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "398",
                "s" : [ {
                  "r" : "403",
                  "value" : [ "{ ", "@2012-12-31", ", ", "@2013-01-01", ", ", "@2012-01-01", " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "420",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "421",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "422",
              "name" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "398",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "414",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "415",
                "name" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Date",
              "localId" : "403",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ ],
              "year" : {
                "type" : "Literal",
                "localId" : "400",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "401",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "402",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "31",
                "annotation" : [ ]
              }
            }, {
              "type" : "Date",
              "localId" : "408",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ ],
              "year" : {
                "type" : "Literal",
                "localId" : "405",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2013",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "406",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "407",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Date",
              "localId" : "413",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
              "annotation" : [ ],
              "signature" : [ ],
              "year" : {
                "type" : "Literal",
                "localId" : "410",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "411",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "412",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "425",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "DateTimeMax",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "425",
            "s" : [ {
              "value" : [ "", "define ", "DateTimeMax", ": " ]
            }, {
              "r" : "457",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "426",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "435",
                  "s" : [ {
                    "r" : "427",
                    "value" : [ "DateTime", "(", "2012", ", ", "2", ", ", "3", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "447",
                  "s" : [ {
                    "r" : "439",
                    "value" : [ "DateTime", "(", "2012", ", ", "9", ", ", "5", ")" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "457",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "458",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "459",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "426",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "451",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "452",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "DateTime",
              "localId" : "435",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "436",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "437",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "438",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "427",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "428",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "429",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }
            }, {
              "type" : "DateTime",
              "localId" : "447",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "448",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "449",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "450",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "439",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2012",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "440",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "9",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "441",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "462",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "TimeMax",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "462",
            "s" : [ {
              "value" : [ "", "define ", "TimeMax", ": " ]
            }, {
              "r" : "506",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "463",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "472",
                  "s" : [ {
                    "r" : "464",
                    "value" : [ "Time", "(", "12", ", ", "30", ", ", "1", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "484",
                  "s" : [ {
                    "r" : "476",
                    "value" : [ "Time", "(", "12", ", ", "30", ", ", "3", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "496",
                  "s" : [ {
                    "r" : "488",
                    "value" : [ "Time", "(", "12", ", ", "30", ", ", "2", ")" ]
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
          "type" : "Max",
          "localId" : "506",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "507",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "508",
              "name" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "463",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "500",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "501",
                "name" : "{urn:hl7-org:elm-types:r1}Time",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Time",
              "localId" : "472",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "473",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "474",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "475",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "hour" : {
                "type" : "Literal",
                "localId" : "464",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "465",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "466",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Time",
              "localId" : "484",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "485",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "486",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "487",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "hour" : {
                "type" : "Literal",
                "localId" : "476",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "477",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "478",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }
            }, {
              "type" : "Time",
              "localId" : "496",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "497",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "498",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "499",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "hour" : {
                "type" : "Literal",
                "localId" : "488",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              },
              "minute" : {
                "type" : "Literal",
                "localId" : "489",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "30",
                "annotation" : [ ]
              },
              "second" : {
                "type" : "Literal",
                "localId" : "490",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "511",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "StringMax",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "511",
            "s" : [ {
              "value" : [ "", "define ", "StringMax", ": " ]
            }, {
              "r" : "527",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "512",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "513",
                  "s" : [ {
                    "value" : [ "'def'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "515",
                  "s" : [ {
                    "value" : [ "'abc'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "517",
                  "s" : [ {
                    "value" : [ "'jkl'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "519",
                  "s" : [ {
                    "value" : [ "'ghi'" ]
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
          "type" : "Max",
          "localId" : "527",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "528",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "529",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "512",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "521",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "522",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "513",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "def",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "515",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "abc",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "517",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "jkl",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "519",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "ghi",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "532",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "MaxIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "532",
            "s" : [ {
              "value" : [ "", "define ", "MaxIsNull", ": " ]
            }, {
              "r" : "549",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "533",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "534",
                  "s" : [ {
                    "r" : "535",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "536",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "537",
                  "s" : [ {
                    "r" : "538",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "539",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "540",
                  "s" : [ {
                    "r" : "541",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "542",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "549",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "550",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "551",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "533",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "543",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "544",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "534",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "535",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "536",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "537",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "538",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "539",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "540",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "541",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "542",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "554",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "MaxIsAlsoNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "554",
            "s" : [ {
              "value" : [ "", "define ", "MaxIsAlsoNull", ": " ]
            }, {
              "r" : "567",
              "s" : [ {
                "value" : [ "Max", "(" ]
              }, {
                "r" : "555",
                "s" : [ {
                  "r" : "556",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "557",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "558",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Max",
          "localId" : "567",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "568",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "569",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "As",
            "localId" : "555",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "561",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "562",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "556",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "557",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "559",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "560",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "558",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            }
          }
        }
      } ]
    }
  }
}

/* Avg
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Avg({1,2,3,4,5})
define has_null: Avg({1,null,null,2})
define not_null_q: Avg({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define has_null_q: Avg({1 'ml',null,null,2 'ml'})
define empty: Avg(List<Integer>{})
define q_diff_units: Avg({1 'ml',0.002 'l',0.03 'dl',4 'ml',5 'ml'})
define NumbersAndQuantities: Avg({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Avg({1 'mg/d', 0.002 '/d'})
*/

module.exports['Avg'] = {
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
        "r" : "385",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "not_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "not_null", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Avg",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "235",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "236",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "215",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "221",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "222",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "237",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "240",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "238",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "267",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "247",
                "s" : [ {
                  "r" : "248",
                  "value" : [ "{", "1", ",", "null", ",", "null", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Avg",
          "localId" : "267",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "275",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "276",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "268",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "269",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "247",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "254",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "255",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "As",
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Null",
                    "localId" : "249",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                }, {
                  "type" : "As",
                  "localId" : "253",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Null",
                    "localId" : "250",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                }, {
                  "type" : "Literal",
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "270",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "273",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "271",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "279",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "not_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "value" : [ "", "define ", "not_null_q", ": " ]
            }, {
              "r" : "292",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "280",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "281",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "282",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "284",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "285",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Avg",
          "localId" : "292",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "293",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "280",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "286",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "287",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "281",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "282",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "297",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "has_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "297",
            "s" : [ {
              "value" : [ "", "define ", "has_null_q", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "298",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "299",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "300",
                  "value" : [ ",", "null", ",", "null", "," ]
                }, {
                  "r" : "302",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
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
          "type" : "Avg",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "313",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "298",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "305",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "306",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "303",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "300",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "304",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "301",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "316",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "316",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "333",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "318",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "317",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">{}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Avg",
          "localId" : "333",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "341",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "334",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "335",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "318",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "320",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "321",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "336",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "339",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "337",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "345",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "345",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "358",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "346",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "347",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "348",
                  "s" : [ {
                    "value" : [ "0.002 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "349",
                  "s" : [ {
                    "value" : [ "0.03 ", "'dl'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "350",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "351",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Avg",
          "localId" : "358",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "359",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "360",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "346",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "352",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "353",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "347",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "348",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "349",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.03,
              "unit" : "dl",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "350",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "351",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "363",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "363",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "380",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "364",
                "s" : [ {
                  "r" : "365",
                  "value" : [ "{", "1", " ," ]
                }, {
                  "r" : "366",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "367",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "368",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "369",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "370",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Avg",
          "localId" : "380",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "381",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "382",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "364",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "374",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "375",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "372",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "373",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "365",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "366",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "367",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "368",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "369",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "370",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "385",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "385",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "395",
              "s" : [ {
                "value" : [ "Avg", "(" ]
              }, {
                "r" : "386",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "387",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "388",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Avg",
          "localId" : "395",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "396",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "397",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "386",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "389",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "390",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "387",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "388",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* Median
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define odd: Median({5,1,2,3,4})
define even: Median({5,1,2,3,4,6})
define odd_q: Median({5 'ml',1 'ml',2 'ml',3 'ml',4 'ml'})
define even_q: Median({5 'ml',1 'ml',2 'ml',3 'ml',4 'ml',6 'ml'})
define q_diff_units: Median({5 'ml',0.001 'l',0.02 'dl',3 'ml',4 'ml',6 'ml'})
define NumbersAndQuantities: Median({5 ,1 ,2 ,3 ,4 'ml',6 'ml'})

define empty: Median(List<Integer>{})
define has_null: Median({1,null,null,2})
define dup_vals_even: Median({3,1,2,2,2,3,4,5})
define dup_vals_odd:  Median({3,1,2,2,2,3,4,5,6})
define has_null_q: Median({1 'ml',null,null,2 'ml'})
define dup_vals_even_q: Median({3 'ml',1 'ml',2 'ml',2 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define dup_vals_odd_q:  Median({3 'ml',1 'ml',2 'ml',2 'ml',2 'ml',3 'ml',4 'ml',5 'ml',6 'ml'})
define IncompatibleUnitsNull: Median({1 'mg/d', 0.002 '/d'})
*/

module.exports['Median'] = {
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
        "r" : "561",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "odd",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "odd", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "5", ",", "1", ",", "2", ",", "3", ",", "4", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Median",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "235",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "236",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "215",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "221",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "222",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "237",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "240",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "238",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "even",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "even", ": " ]
            }, {
              "r" : "267",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "247",
                "s" : [ {
                  "r" : "248",
                  "value" : [ "{", "5", ",", "1", ",", "2", ",", "3", ",", "4", ",", "6", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Median",
          "localId" : "267",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "275",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "276",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "268",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "269",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "247",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "254",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "255",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "270",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "273",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "271",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "279",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "odd_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "279",
            "s" : [ {
              "value" : [ "", "define ", "odd_q", ": " ]
            }, {
              "r" : "292",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "280",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "281",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "282",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "284",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "285",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "292",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "293",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "280",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "286",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "287",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "281",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "282",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "297",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "even_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "297",
            "s" : [ {
              "value" : [ "", "define ", "even_q", ": " ]
            }, {
              "r" : "311",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "298",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "299",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "300",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "301",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "302",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "303",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "304",
                  "s" : [ {
                    "value" : [ "6 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "311",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "313",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "298",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "305",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "306",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "300",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "303",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "304",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 6,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "316",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "316",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "330",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "317",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "318",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "319",
                  "s" : [ {
                    "value" : [ "0.001 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "320",
                  "s" : [ {
                    "value" : [ "0.02 ", "'dl'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "321",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "322",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "323",
                  "s" : [ {
                    "value" : [ "6 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "330",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "331",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "332",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "317",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "324",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "325",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "319",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.001,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "320",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.02,
              "unit" : "dl",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "321",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "323",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 6,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "335",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "335",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "361",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "336",
                "s" : [ {
                  "r" : "337",
                  "value" : [ "{", "5", " ,", "1", " ,", "2", " ,", "3", " ," ]
                }, {
                  "r" : "341",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "342",
                  "s" : [ {
                    "value" : [ "6 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "361",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "362",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "363",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "336",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "355",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "356",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "344",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "345",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "337",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "347",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "348",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "338",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "350",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "351",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "339",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "353",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "354",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "340",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "341",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "342",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 6,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "366",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "366",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "383",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "368",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "367",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">{}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Median",
          "localId" : "383",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "391",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "392",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "384",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "385",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "368",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "370",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "371",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "386",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "389",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "387",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "395",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "395",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "416",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "396",
                "s" : [ {
                  "r" : "397",
                  "value" : [ "{", "1", ",", "null", ",", "null", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Median",
          "localId" : "416",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "424",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "425",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "417",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "418",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "396",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "403",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "404",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "397",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "As",
                  "localId" : "401",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Null",
                    "localId" : "398",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                }, {
                  "type" : "As",
                  "localId" : "402",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Null",
                    "localId" : "399",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                }, {
                  "type" : "Literal",
                  "localId" : "400",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "419",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "422",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "423",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "420",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "428",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "dup_vals_even",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "428",
            "s" : [ {
              "value" : [ "", "define ", "dup_vals_even", ": " ]
            }, {
              "r" : "451",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "429",
                "s" : [ {
                  "r" : "430",
                  "value" : [ "{", "3", ",", "1", ",", "2", ",", "2", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Median",
          "localId" : "451",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "459",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "460",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "452",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "453",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "429",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "438",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "439",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "430",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "431",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "432",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "434",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "435",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "437",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "454",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "457",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "458",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "455",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "463",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "dup_vals_odd",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "463",
            "s" : [ {
              "value" : [ "", "define ", "dup_vals_odd", ":  " ]
            }, {
              "r" : "487",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "464",
                "s" : [ {
                  "r" : "465",
                  "value" : [ "{", "3", ",", "1", ",", "2", ",", "2", ",", "2", ",", "3", ",", "4", ",", "5", ",", "6", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Median",
          "localId" : "487",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "495",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "496",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "488",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "489",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "464",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "474",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "475",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "465",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "466",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "467",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "468",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "469",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "470",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "471",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "472",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "473",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "490",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "493",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "494",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "491",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "499",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "has_null_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "499",
            "s" : [ {
              "value" : [ "", "define ", "has_null_q", ": " ]
            }, {
              "r" : "513",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "500",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "501",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "502",
                  "value" : [ ",", "null", ",", "null", "," ]
                }, {
                  "r" : "504",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "513",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "514",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "515",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "500",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "507",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "508",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "501",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "505",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "502",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "506",
              "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "503",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "504",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "518",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "dup_vals_even_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "518",
            "s" : [ {
              "value" : [ "", "define ", "dup_vals_even_q", ": " ]
            }, {
              "r" : "534",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "519",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "520",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "521",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "522",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "523",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "524",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "525",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "526",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "527",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "534",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "535",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "536",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "519",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "528",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "529",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "520",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "521",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "522",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "523",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "524",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "525",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "526",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "527",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "539",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "dup_vals_odd_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "539",
            "s" : [ {
              "value" : [ "", "define ", "dup_vals_odd_q", ":  " ]
            }, {
              "r" : "556",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "540",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "541",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "542",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "543",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "544",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "545",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "546",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "547",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "548",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "549",
                  "s" : [ {
                    "value" : [ "6 ", "'ml'" ]
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
          "type" : "Median",
          "localId" : "556",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "557",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "558",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "540",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "550",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "551",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "541",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "542",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "543",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "544",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "545",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "546",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "547",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "548",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "549",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 6,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "561",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "561",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "571",
              "s" : [ {
                "value" : [ "Median", "(" ]
              }, {
                "r" : "562",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "563",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "564",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Median",
          "localId" : "571",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "572",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "573",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "562",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "565",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "566",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "563",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "564",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* Mode
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Mode({1,2,2,2,3,4,5})
define has_null: Mode({1,null,null,2,2})
define empty: Mode({})

define bi_modal: Mode({1,2,2,2,3,3,3,4,5})
define NumbersAndQuantities: Mode({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Mode({1 'mg/d', 0.002 '/d'})
*/

module.exports['Mode'] = {
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
        "r" : "311",
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
        "name" : "not_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "not_null", ": " ]
            }, {
              "r" : "229",
              "s" : [ {
                "value" : [ "Mode", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "2", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Mode",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "230",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "231",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "223",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "224",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "221",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "has_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "has_null", ": " ]
            }, {
              "r" : "249",
              "s" : [ {
                "value" : [ "Mode", "(" ]
              }, {
                "r" : "235",
                "s" : [ {
                  "r" : "236",
                  "value" : [ "{", "1", ",", "null", ",", "null", ",", "2", ",", "2", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Mode",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "250",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "251",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "235",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "243",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "244",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "241",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "237",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "242",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "238",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "empty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "empty", ": " ]
            }, {
              "r" : "262",
              "s" : [ {
                "r" : "255",
                "value" : [ "Mode", "(", "{}", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Mode",
          "localId" : "262",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "263",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "264",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "255",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "256",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "257",
                "name" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            },
            "element" : [ ]
          }
        }
      }, {
        "localId" : "267",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "bi_modal",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "267",
            "s" : [ {
              "value" : [ "", "define ", "bi_modal", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "value" : [ "Mode", "(" ]
              }, {
                "r" : "268",
                "s" : [ {
                  "r" : "269",
                  "value" : [ "{", "1", ",", "2", ",", "2", ",", "2", ",", "3", ",", "3", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Mode",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
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
          } ],
          "source" : {
            "type" : "List",
            "localId" : "268",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "278",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "279",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "274",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "275",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "277",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "289",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "289",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "value" : [ "Mode", "(" ]
              }, {
                "r" : "290",
                "s" : [ {
                  "r" : "291",
                  "value" : [ "{", "1", " ," ]
                }, {
                  "r" : "292",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "293",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "294",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "295",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "296",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Mode",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "307",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "308",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "290",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "300",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "301",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "298",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "299",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "291",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "292",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "293",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "295",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "296",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "311",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "311",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "value" : [ "Mode", "(" ]
              }, {
                "r" : "312",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "313",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "314",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Mode",
          "localId" : "321",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "322",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "323",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "312",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "315",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* Variance
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define v: Variance({1,2,3,4,5})
define v_q: Variance({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define q_diff_units: Variance({1.0 'ml',0.002 'l',0.003 'l',0.04 'dl',5.0 'ml'})
define NumbersAndQuantities: Variance({1.0 ,2.0 ,3.0 ,4.0 'ml',5.0 'ml'})
define IncompatibleUnitsNull: Variance({1 'mg/d', 0.002 '/d'})
*/

module.exports['Variance'] = {
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
        "r" : "309",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "v",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "v", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "Variance", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Variance",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "235",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "236",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "215",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "221",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "222",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "237",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "240",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "238",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "v_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "v_q", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "value" : [ "Variance", "(" ]
              }, {
                "r" : "247",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "248",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "249",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "250",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "251",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "252",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "Variance",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "260",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "247",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "253",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "254",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "248",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "249",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "277",
              "s" : [ {
                "value" : [ "Variance", "(" ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "266",
                  "s" : [ {
                    "value" : [ "1.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "267",
                  "s" : [ {
                    "value" : [ "0.002 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "268",
                  "s" : [ {
                    "value" : [ "0.003 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "269",
                  "s" : [ {
                    "value" : [ "0.04 ", "'dl'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "270",
                  "s" : [ {
                    "value" : [ "5.0 ", "'ml'" ]
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
          "type" : "Variance",
          "localId" : "277",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "278",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "279",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "265",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.003,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.04,
              "unit" : "dl",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5.0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "282",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "282",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "304",
              "s" : [ {
                "value" : [ "Variance", "(" ]
              }, {
                "r" : "283",
                "s" : [ {
                  "r" : "284",
                  "value" : [ "{", "1.0", " ,", "2.0", " ,", "3.0", " ," ]
                }, {
                  "r" : "287",
                  "s" : [ {
                    "value" : [ "4.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "288",
                  "s" : [ {
                    "value" : [ "5.0 ", "'ml'" ]
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
          "type" : "Variance",
          "localId" : "304",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "305",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "306",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "283",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "298",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "299",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "290",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "291",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "284",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "293",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "294",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "285",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "296",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "297",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "286",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "3.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "287",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5.0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "309",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "309",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "319",
              "s" : [ {
                "value" : [ "Variance", "(" ]
              }, {
                "r" : "310",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "312",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Variance",
          "localId" : "319",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "320",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "321",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "310",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "313",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "314",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "312",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* PopulationVariance
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define v: PopulationVariance({1.0,2.0,3.0,4.0,5.0})
define v_q: PopulationVariance({1.0 'ml',2.0 'ml',3.0 'ml',4.0 'ml',5.0 'ml'})
define q_diff_units: PopulationVariance({1.0 'ml',0.002 'l',0.003 'l',0.04 'dl',5.0 'ml'})
define NumbersAndQuantities: PopulationVariance({1.0 ,2.0 ,3.0 ,4.0 'ml',5.0 'ml'})
define IncompatibleUnitsNull: PopulationVariance({1 'mg/d', 0.002 '/d'})
*/

module.exports['PopulationVariance'] = {
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
        "r" : "295",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "v",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "v", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "value" : [ "PopulationVariance", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1.0", ",", "2.0", ",", "3.0", ",", "4.0", ",", "5.0", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PopulationVariance",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "228",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "221",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "3.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.0",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "v_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "v_q", ": " ]
            }, {
              "r" : "245",
              "s" : [ {
                "value" : [ "PopulationVariance", "(" ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "234",
                  "s" : [ {
                    "value" : [ "1.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "235",
                  "s" : [ {
                    "value" : [ "2.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "3.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "237",
                  "s" : [ {
                    "value" : [ "4.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "238",
                  "s" : [ {
                    "value" : [ "5.0 ", "'ml'" ]
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
          "type" : "PopulationVariance",
          "localId" : "245",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "246",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "247",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "233",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "239",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "240",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5.0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "263",
              "s" : [ {
                "value" : [ "PopulationVariance", "(" ]
              }, {
                "r" : "251",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "252",
                  "s" : [ {
                    "value" : [ "1.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "253",
                  "s" : [ {
                    "value" : [ "0.002 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "254",
                  "s" : [ {
                    "value" : [ "0.003 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "255",
                  "s" : [ {
                    "value" : [ "0.04 ", "'dl'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "value" : [ "5.0 ", "'ml'" ]
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
          "type" : "PopulationVariance",
          "localId" : "263",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "264",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "265",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "251",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "257",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "258",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "253",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.003,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.04,
              "unit" : "dl",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5.0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "290",
              "s" : [ {
                "value" : [ "PopulationVariance", "(" ]
              }, {
                "r" : "269",
                "s" : [ {
                  "r" : "270",
                  "value" : [ "{", "1.0", " ,", "2.0", " ,", "3.0", " ," ]
                }, {
                  "r" : "273",
                  "s" : [ {
                    "value" : [ "4.0 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "274",
                  "s" : [ {
                    "value" : [ "5.0 ", "'ml'" ]
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
          "type" : "PopulationVariance",
          "localId" : "290",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "291",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "292",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "269",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "284",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "285",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "276",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "277",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "270",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "279",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "280",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "271",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "282",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "283",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "272",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "3.0",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4.0,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "274",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5.0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "295",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "295",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "305",
              "s" : [ {
                "value" : [ "PopulationVariance", "(" ]
              }, {
                "r" : "296",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "297",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "298",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "PopulationVariance",
          "localId" : "305",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "306",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "307",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "296",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "299",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "300",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "297",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "298",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* StdDev
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define std: StdDev({1,2,3,4,5})
define std_q: StdDev({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define q_diff_units: StdDev({1 'ml', 0.002 'l',3 'ml',4 'ml', 0.05 'dl'})
define sq_throw1: StdDev({1 'ml',2 'ml',3 'ml',4 'ml',5 'm'})
define NumbersAndQuantities: StdDev({1 ,2 ,3 ,4 'ml',5 })
define IncompatibleUnitsNull: StdDev({1 'mg/d', 0.002 '/d'})
*/

module.exports['StdDev'] = {
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
        "r" : "330",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "std",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "std", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "StdDev", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StdDev",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "235",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "236",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "215",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "221",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "222",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "237",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "240",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "238",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "std_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "std_q", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "value" : [ "StdDev", "(" ]
              }, {
                "r" : "247",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "248",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "249",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "250",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "251",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "252",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "StdDev",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "260",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "247",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "253",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "254",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "248",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "249",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "277",
              "s" : [ {
                "value" : [ "StdDev", "(" ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "266",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "267",
                  "s" : [ {
                    "value" : [ "0.002 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "268",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "269",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "270",
                  "s" : [ {
                    "value" : [ "0.05 ", "'dl'" ]
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
          "type" : "StdDev",
          "localId" : "277",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "278",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "279",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "265",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.05,
              "unit" : "dl",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "282",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "sq_throw1",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "282",
            "s" : [ {
              "value" : [ "", "define ", "sq_throw1", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "value" : [ "StdDev", "(" ]
              }, {
                "r" : "283",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "284",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "285",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "286",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "287",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "288",
                  "s" : [ {
                    "value" : [ "5 ", "'m'" ]
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
          "type" : "StdDev",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "296",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "297",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "283",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "289",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "290",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "286",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "287",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "m",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "300",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "300",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "325",
              "s" : [ {
                "value" : [ "StdDev", "(" ]
              }, {
                "r" : "301",
                "s" : [ {
                  "r" : "302",
                  "value" : [ "{", "1", " ,", "2", " ,", "3", " ," ]
                }, {
                  "r" : "305",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "306",
                  "value" : [ ",", "5", " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StdDev",
          "localId" : "325",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "326",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "327",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "301",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "319",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "320",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "308",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "309",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "302",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "311",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "312",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "303",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "314",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "315",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "304",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "305",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "ToQuantity",
              "localId" : "317",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "318",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "306",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "330",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "330",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "340",
              "s" : [ {
                "value" : [ "StdDev", "(" ]
              }, {
                "r" : "331",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "332",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "333",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "StdDev",
          "localId" : "340",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "341",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "331",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "334",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "335",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "332",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "333",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* PopulationStdDev
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define dev: PopulationStdDev({1,2,3,4,5})
define dev_q: PopulationStdDev({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define q_diff_units: PopulationStdDev({1 'ml', 0.002 'l',3 'ml',4 'ml', 0.05 'dl'})
define NumbersAndQuantities: PopulationStdDev({1 ,2 ,3 ,4 'ml',5 })
define IncompatibleUnitsNull: PopulationStdDev({1 'mg/d', 0.002 '/d'})
*/

module.exports['PopulationStdDev'] = {
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
        "r" : "312",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "dev",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "dev", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "value" : [ "PopulationStdDev", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1", ",", "2", ",", "3", ",", "4", ",", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PopulationStdDev",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "243",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "235",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "236",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "215",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "221",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "222",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "237",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "240",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "238",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "246",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "dev_q",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "246",
            "s" : [ {
              "value" : [ "", "define ", "dev_q", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "value" : [ "PopulationStdDev", "(" ]
              }, {
                "r" : "247",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "248",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "249",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "250",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "251",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "252",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
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
          "type" : "PopulationStdDev",
          "localId" : "259",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "260",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "247",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "253",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "254",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "248",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "249",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "252",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "q_diff_units",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "q_diff_units", ": " ]
            }, {
              "r" : "277",
              "s" : [ {
                "value" : [ "PopulationStdDev", "(" ]
              }, {
                "r" : "265",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "266",
                  "s" : [ {
                    "value" : [ "1 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "267",
                  "s" : [ {
                    "value" : [ "0.002 ", "'l'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "268",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "269",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "270",
                  "s" : [ {
                    "value" : [ "0.05 ", "'dl'" ]
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
          "type" : "PopulationStdDev",
          "localId" : "277",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "278",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "279",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "265",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "l",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "270",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.05,
              "unit" : "dl",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "282",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "282",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "307",
              "s" : [ {
                "value" : [ "PopulationStdDev", "(" ]
              }, {
                "r" : "283",
                "s" : [ {
                  "r" : "284",
                  "value" : [ "{", "1", " ,", "2", " ,", "3", " ," ]
                }, {
                  "r" : "287",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "r" : "288",
                  "value" : [ ",", "5", " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PopulationStdDev",
          "localId" : "307",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "308",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "283",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "301",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "302",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "290",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "291",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "284",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "293",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "294",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "285",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }
            }, {
              "type" : "ToQuantity",
              "localId" : "296",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "297",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "286",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "287",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "ToQuantity",
              "localId" : "299",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "300",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "288",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "312",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "312",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "322",
              "s" : [ {
                "value" : [ "PopulationStdDev", "(" ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "314",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "315",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "PopulationStdDev",
          "localId" : "322",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "323",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "324",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "313",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "316",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "317",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* Product
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define decimal_product: Product({1.0, 2.0, 3.0, 4.0})
define integer_product: Product({5, 4, 5})
define zero_product: Product({0, 5, 10})
define quantity_product: Product({1.0 'g', 2.0 'g', 3.0 'g', 4.0 'g'})
define quantity_zero_product: Product({1.0 'g', 2.0 'g', 0 'g'})
define product_with_null: Product({5, 4, null})
define product_of_nulls: Product({null as Integer, null, null})
define product_null: Product(null as List<Decimal>)
define product_quantity_null: Product({null as Quantity, null as Quantity, null as Quantity})
define NumbersAndQuantities: Product({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Product({1 'mg/d', 0.002 '/d'})
*/

module.exports['Product'] = {
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
        "r" : "395",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "decimal_product",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "decimal_product", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "1.0", ", ", "2.0", ", ", "3.0", ", ", "4.0", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Product",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "227",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "220",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "221",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "3.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.0",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "integer_product",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "integer_product", ": " ]
            }, {
              "r" : "242",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "232",
                "s" : [ {
                  "r" : "233",
                  "value" : [ "{", "5", ", ", "4", ", ", "5", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Product",
          "localId" : "242",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "243",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "236",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "237",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "zero_product",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "zero_product", ": " ]
            }, {
              "r" : "258",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "248",
                "s" : [ {
                  "r" : "249",
                  "value" : [ "{", "0", ", ", "5", ", ", "10", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Product",
          "localId" : "258",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "259",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "260",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "248",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "252",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "253",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "249",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "250",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "10",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "263",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "quantity_product",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "263",
            "s" : [ {
              "value" : [ "", "define ", "quantity_product", ": " ]
            }, {
              "r" : "275",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "264",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "265",
                  "s" : [ {
                    "value" : [ "1.0 ", "'g'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "266",
                  "s" : [ {
                    "value" : [ "2.0 ", "'g'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "267",
                  "s" : [ {
                    "value" : [ "3.0 ", "'g'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "268",
                  "s" : [ {
                    "value" : [ "4.0 ", "'g'" ]
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
          "type" : "Product",
          "localId" : "275",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "276",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "277",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "264",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "269",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "270",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "265",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1.0,
              "unit" : "g",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2.0,
              "unit" : "g",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3.0,
              "unit" : "g",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4.0,
              "unit" : "g",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "280",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "quantity_zero_product",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "280",
            "s" : [ {
              "value" : [ "", "define ", "quantity_zero_product", ": " ]
            }, {
              "r" : "291",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "281",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "282",
                  "s" : [ {
                    "value" : [ "1.0 ", "'g'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "value" : [ "2.0 ", "'g'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "284",
                  "s" : [ {
                    "value" : [ "0 ", "'g'" ]
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
          "type" : "Product",
          "localId" : "291",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "292",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "281",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "285",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "286",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "282",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1.0,
              "unit" : "g",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2.0,
              "unit" : "g",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "284",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "g",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "296",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "product_with_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "296",
            "s" : [ {
              "value" : [ "", "define ", "product_with_null", ": " ]
            }, {
              "r" : "308",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "297",
                "s" : [ {
                  "r" : "298",
                  "value" : [ "{", "5", ", ", "4", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Product",
          "localId" : "308",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "309",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "310",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "297",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "302",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "303",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "298",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "301",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "300",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "313",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "product_of_nulls",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "313",
            "s" : [ {
              "value" : [ "", "define ", "product_of_nulls", ": " ]
            }, {
              "r" : "328",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "314",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "315",
                  "s" : [ {
                    "r" : "316",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "317",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "r" : "318",
                  "value" : [ ", ", "null", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Product",
          "localId" : "328",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "329",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "330",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "314",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "322",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "323",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "315",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "316",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "317",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "320",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
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
              "localId" : "321",
              "asType" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "319",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "333",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "product_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "333",
            "s" : [ {
              "value" : [ "", "define ", "product_null", ": " ]
            }, {
              "r" : "346",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "334",
                "s" : [ {
                  "r" : "335",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "336",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "337",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Product",
          "localId" : "346",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "347",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "348",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "As",
            "localId" : "334",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "340",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "341",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "335",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "336",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "338",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "339",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "337",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            }
          }
        }
      }, {
        "localId" : "351",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "product_quantity_null",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "351",
            "s" : [ {
              "value" : [ "", "define ", "product_quantity_null", ": " ]
            }, {
              "r" : "368",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "352",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "353",
                  "s" : [ {
                    "r" : "354",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "355",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "356",
                  "s" : [ {
                    "r" : "357",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "358",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "359",
                  "s" : [ {
                    "r" : "360",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "361",
                    "s" : [ {
                      "value" : [ "Quantity" ]
                    } ]
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
          "type" : "Product",
          "localId" : "368",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "369",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "370",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "352",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "362",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "363",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "As",
              "localId" : "353",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "354",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "355",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "356",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "357",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "358",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "359",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "strict" : false,
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "360",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              },
              "asTypeSpecifier" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "361",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "373",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "NumbersAndQuantities",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "373",
            "s" : [ {
              "value" : [ "", "define ", "NumbersAndQuantities", ": " ]
            }, {
              "r" : "390",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "374",
                "s" : [ {
                  "r" : "375",
                  "value" : [ "{", "1", " ," ]
                }, {
                  "r" : "376",
                  "s" : [ {
                    "value" : [ "2 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "377",
                  "s" : [ {
                    "value" : [ "3 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "378",
                  "s" : [ {
                    "value" : [ "4 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "379",
                  "s" : [ {
                    "value" : [ "5 ", "'ml'" ]
                  } ]
                }, {
                  "value" : [ "," ]
                }, {
                  "r" : "380",
                  "s" : [ {
                    "value" : [ "0 ", "'ml'" ]
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
          "type" : "Product",
          "localId" : "390",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "391",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "392",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "374",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "384",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "385",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "ToQuantity",
              "localId" : "382",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "383",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "375",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "type" : "Quantity",
              "localId" : "376",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 2,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "377",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 3,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 4,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "379",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 5,
              "unit" : "ml",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "380",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0,
              "unit" : "ml",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "395",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "IncompatibleUnitsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "395",
            "s" : [ {
              "value" : [ "", "define ", "IncompatibleUnitsNull", ": " ]
            }, {
              "r" : "405",
              "s" : [ {
                "value" : [ "Product", "(" ]
              }, {
                "r" : "396",
                "s" : [ {
                  "value" : [ "{" ]
                }, {
                  "r" : "397",
                  "s" : [ {
                    "value" : [ "1 ", "'mg/d'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "398",
                  "s" : [ {
                    "value" : [ "0.002 ", "'/d'" ]
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
          "type" : "Product",
          "localId" : "405",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "406",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "407",
              "name" : "{urn:hl7-org:elm-types:r1}Quantity",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "396",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "399",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "400",
                "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Quantity",
              "localId" : "397",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 1,
              "unit" : "mg/d",
              "annotation" : [ ]
            }, {
              "type" : "Quantity",
              "localId" : "398",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
              "value" : 0.002,
              "unit" : "/d",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* GeometricMean
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define decimal_geometric_mean: GeometricMean({2.0, 8.0, null})
define zero_geometric_mean: GeometricMean({2.0, 8.0, 0})
define null_geometric_mean: GeometricMean({1, 2, null})
define all_nulls: GeometricMean({null, null, null})
define also_null_geometric_mean: GeometricMean(null as List<Decimal>)
*/

module.exports['GeometricMean'] = {
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
        "r" : "307",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "decimal_geometric_mean",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "decimal_geometric_mean", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "GeometricMean", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "2.0", ", ", "8.0", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GeometricMean",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "227",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "220",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "221",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "8.0",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "219",
              "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "218",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "zero_geometric_mean",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "zero_geometric_mean", ": " ]
            }, {
              "r" : "245",
              "s" : [ {
                "value" : [ "GeometricMean", "(" ]
              }, {
                "r" : "232",
                "s" : [ {
                  "r" : "233",
                  "value" : [ "{", "2.0", ", ", "8.0", ", ", "0", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GeometricMean",
          "localId" : "245",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "246",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "247",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "239",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "240",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.0",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "8.0",
              "annotation" : [ ]
            }, {
              "type" : "ToDecimal",
              "localId" : "237",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "238",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "0",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "null_geometric_mean",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "null_geometric_mean", ": " ]
            }, {
              "r" : "269",
              "s" : [ {
                "value" : [ "GeometricMean", "(" ]
              }, {
                "r" : "251",
                "s" : [ {
                  "r" : "252",
                  "value" : [ "{", "1", ", ", "2", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GeometricMean",
          "localId" : "269",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "277",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "278",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "270",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "271",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "251",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "256",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "257",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Literal",
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }, {
                  "type" : "As",
                  "localId" : "255",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : {
                    "type" : "Null",
                    "localId" : "254",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "272",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "ToDecimal",
                "localId" : "275",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                } ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "273",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "281",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "all_nulls",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "281",
            "s" : [ {
              "value" : [ "", "define ", "all_nulls", ": " ]
            }, {
              "r" : "297",
              "s" : [ {
                "value" : [ "GeometricMean", "(" ]
              }, {
                "r" : "282",
                "s" : [ {
                  "r" : "283",
                  "value" : [ "{", "null", ", ", "null", ", ", "null", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GeometricMean",
          "localId" : "297",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "303",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "304",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "298",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "299",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "282",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "286",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "287",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Null",
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }, {
                  "type" : "Null",
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }, {
                  "type" : "Null",
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "300",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "As",
                "localId" : "302",
                "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "301",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          }
        }
      }, {
        "localId" : "307",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "also_null_geometric_mean",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "307",
            "s" : [ {
              "value" : [ "", "define ", "also_null_geometric_mean", ": " ]
            }, {
              "r" : "320",
              "s" : [ {
                "value" : [ "GeometricMean", "(" ]
              }, {
                "r" : "308",
                "s" : [ {
                  "r" : "309",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "310",
                  "s" : [ {
                    "value" : [ "List<" ]
                  }, {
                    "r" : "311",
                    "s" : [ {
                      "value" : [ "Decimal" ]
                    } ]
                  }, {
                    "value" : [ ">" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "GeometricMean",
          "localId" : "320",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "321",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "322",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "As",
            "localId" : "308",
            "strict" : false,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "314",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "315",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "309",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "310",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "312",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "313",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "311",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            }
          }
        }
      } ]
    }
  }
}

/* AllTrue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define at: AllTrue({true,true,true,true})
define atwn: AllTrue({true,true,null,null,true,true})

define atf: AllTrue({true,true,true,false})
define atfwn: AllTrue({true,true,null,null,true,false})
*/

module.exports['AllTrue'] = {
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
        "r" : "269",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "at",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "at", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "AllTrue", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "true", ",", "true", ",", "true", ",", "true", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AllTrue",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "227",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "220",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "221",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "atwn",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "atwn", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "value" : [ "AllTrue", "(" ]
              }, {
                "r" : "232",
                "s" : [ {
                  "r" : "233",
                  "value" : [ "{", "true", ",", "true", ",", "null", ",", "null", ",", "true", ",", "true", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AllTrue",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "248",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "241",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "242",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "239",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "240",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "252",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "atf",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "252",
            "s" : [ {
              "value" : [ "", "define ", "atf", ": " ]
            }, {
              "r" : "264",
              "s" : [ {
                "value" : [ "AllTrue", "(" ]
              }, {
                "r" : "253",
                "s" : [ {
                  "r" : "254",
                  "value" : [ "{", "true", ",", "true", ",", "true", ",", "false", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AllTrue",
          "localId" : "264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "265",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "266",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "253",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "258",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "259",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "269",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "atfwn",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "269",
            "s" : [ {
              "value" : [ "", "define ", "atfwn", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "value" : [ "AllTrue", "(" ]
              }, {
                "r" : "270",
                "s" : [ {
                  "r" : "271",
                  "value" : [ "{", "true", ",", "true", ",", "null", ",", "null", ",", "true", ",", "false", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AllTrue",
          "localId" : "285",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "286",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "270",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "279",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "280",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "277",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "273",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "278",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "274",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "275",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* AnyTrue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define at: AnyTrue({true,false,false,true})
define atwn: AnyTrue({true,false,null,null,false,true})

define atf: AnyTrue({false,false,false,false})
define atfwn: AnyTrue({false,false,null,null,false,false})
*/

module.exports['AnyTrue'] = {
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
        "r" : "269",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "at",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "at", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "AnyTrue", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "{", "true", ",", "false", ",", "false", ",", "true", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyTrue",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "227",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "220",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "221",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "231",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "atwn",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "atwn", ": " ]
            }, {
              "r" : "247",
              "s" : [ {
                "value" : [ "AnyTrue", "(" ]
              }, {
                "r" : "232",
                "s" : [ {
                  "r" : "233",
                  "value" : [ "{", "true", ",", "false", ",", "null", ",", "null", ",", "false", ",", "true", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyTrue",
          "localId" : "247",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "248",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "249",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "241",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "242",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "239",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "240",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "true",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "252",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "atf",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "252",
            "s" : [ {
              "value" : [ "", "define ", "atf", ": " ]
            }, {
              "r" : "264",
              "s" : [ {
                "value" : [ "AnyTrue", "(" ]
              }, {
                "r" : "253",
                "s" : [ {
                  "r" : "254",
                  "value" : [ "{", "false", ",", "false", ",", "false", ",", "false", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyTrue",
          "localId" : "264",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "265",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "266",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "253",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "258",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "259",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "254",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "256",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "269",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "atfwn",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "269",
            "s" : [ {
              "value" : [ "", "define ", "atfwn", ": " ]
            }, {
              "r" : "285",
              "s" : [ {
                "value" : [ "AnyTrue", "(" ]
              }, {
                "r" : "270",
                "s" : [ {
                  "r" : "271",
                  "value" : [ "{", "false", ",", "false", ",", "null", ",", "null", ",", "false", ",", "false", "}" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "AnyTrue",
          "localId" : "285",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "286",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "270",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "279",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "280",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "271",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "277",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "273",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "As",
              "localId" : "278",
              "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "274",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "275",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
              "value" : "false",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

