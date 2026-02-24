/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* And
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TT: true and true
define TF: true and false
define TN: true and null
define FF: false and false
define FT: false and true
define FN: false and null
define NN: null and null
define NT: null and true
define NF: null and false
*/

module.exports['And'] = {
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
        "r" : "283",
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
        "name" : "TT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "TT", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "true", " and ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "218",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "219",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
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
          } ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "TF", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "true", " and ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "TN", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "true", " and ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "234",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "239",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "FF", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "241",
                "value" : [ "false", " and ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "FT", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "r" : "249",
                "value" : [ "false", " and ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "248",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "255",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "FN", ": " ]
            }, {
              "r" : "256",
              "s" : [ {
                "r" : "257",
                "value" : [ "false", " and ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "256",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "259",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "NN", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "r" : "266",
                "value" : [ "null", " and ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "270",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "268",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "269",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "NT", ": " ]
            }, {
              "r" : "275",
              "s" : [ {
                "r" : "276",
                "value" : [ "null", " and ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "275",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "278",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "283",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "283",
            "s" : [ {
              "value" : [ "", "define ", "NF", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "r" : "285",
                "value" : [ "null", " and ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "And",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "288",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "287",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "286",
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

/* Or
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TT: true or true
define TF: true or false
define TN: true or null
define FF: false or false
define FT: false or true
define FN: false or null
define NN: null or null
define NT: null or true
define NF: null or false
*/

module.exports['Or'] = {
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
        "r" : "283",
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
        "name" : "TT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "TT", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "true", " or ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "218",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "219",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
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
          } ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "TF", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "true", " or ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "TN", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "true", " or ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "234",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "239",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "FF", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "241",
                "value" : [ "false", " or ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "FT", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "r" : "249",
                "value" : [ "false", " or ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "248",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "255",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "FN", ": " ]
            }, {
              "r" : "256",
              "s" : [ {
                "r" : "257",
                "value" : [ "false", " or ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "256",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "259",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "NN", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "r" : "266",
                "value" : [ "null", " or ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "270",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "268",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "269",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "NT", ": " ]
            }, {
              "r" : "275",
              "s" : [ {
                "r" : "276",
                "value" : [ "null", " or ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "275",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "278",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "283",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "283",
            "s" : [ {
              "value" : [ "", "define ", "NF", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "r" : "285",
                "value" : [ "null", " or ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Or",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "288",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "287",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "286",
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

/* XOr
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TT: true xor true
define TF: true xor false
define TN: true xor null
define FF: false xor false
define FT: false xor true
define FN: false xor null
define NN: null xor null
define NT: null xor true
define NF: null xor false
*/

module.exports['XOr'] = {
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
        "r" : "283",
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
        "name" : "TT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "TT", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "true", " xor ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "218",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "219",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
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
          } ]
        }
      }, {
        "localId" : "222",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "TF", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "r" : "224",
                "value" : [ "true", " xor ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "TN", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "value" : [ "true", " xor ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "234",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "239",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "FF", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "241",
                "value" : [ "false", " xor ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "247",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "FT", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "r" : "249",
                "value" : [ "false", " xor ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "248",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "255",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "FN", ": " ]
            }, {
              "r" : "256",
              "s" : [ {
                "r" : "257",
                "value" : [ "false", " xor ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "256",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "259",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "264",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NN",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "264",
            "s" : [ {
              "value" : [ "", "define ", "NN", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "r" : "266",
                "value" : [ "null", " xor ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "270",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "268",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "266",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "269",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "267",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NT",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "NT", ": " ]
            }, {
              "r" : "275",
              "s" : [ {
                "r" : "276",
                "value" : [ "null", " xor ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "275",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "278",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "276",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "283",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NF",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "283",
            "s" : [ {
              "value" : [ "", "define ", "NF", ": " ]
            }, {
              "r" : "284",
              "s" : [ {
                "r" : "285",
                "value" : [ "null", " xor ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Xor",
          "localId" : "284",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "288",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "289",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "287",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "286",
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

/* Not
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NotTrue: not true
define NotFalse: not false
define NotNull: not null
*/

module.exports['Not'] = {
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
        "r" : "226",
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
        "name" : "NotTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "NotTrue", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "not ", "true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NotFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "NotFalse", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "222",
                "value" : [ "not ", "false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NotNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "NotNull", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "r" : "228",
                "value" : [ "not ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Not",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "229",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* IsTrue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TrueIsTrue: true is true
define FalseIsTrue: false is true
define NullIsTrue: null is true
*/

module.exports['IsTrue'] = {
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
        "r" : "226",
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
        "name" : "TrueIsTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "TrueIsTrue", ": " ]
            }, {
              "r" : "216",
              "s" : [ {
                "r" : "215",
                "value" : [ "true", " is true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsTrue",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FalseIsTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "FalseIsTrue", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "r" : "221",
                "value" : [ "false", " is true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsTrue",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullIsTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "NullIsTrue", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "227",
                "value" : [ "null", " is true" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsTrue",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "229",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* IsFalse
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TrueIsFalse: true is false
define FalseIsFalse: false is false
define NullIsFalse: null is false
*/

module.exports['IsFalse'] = {
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
        "r" : "226",
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
        "name" : "TrueIsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "TrueIsFalse", ": " ]
            }, {
              "r" : "216",
              "s" : [ {
                "r" : "215",
                "value" : [ "true", " is false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsFalse",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FalseIsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "FalseIsFalse", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "r" : "221",
                "value" : [ "false", " is false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsFalse",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullIsFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "NullIsFalse", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "227",
                "value" : [ "null", " is false" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "IsFalse",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "229",
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

