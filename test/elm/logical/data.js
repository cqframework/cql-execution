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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "257"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " and ", "true" ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "213"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "And",
          "localId" : "213",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "TT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " and ", "false" ],
                    "r" : "219"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "217"
          }
        } ],
        "localId" : "217",
        "expression" : {
          "type" : "And",
          "localId" : "218",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "219",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "Literal",
            "localId" : "220",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "TF",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " and ", "null" ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "223"
              },
              "globalScope" : true
            } ],
            "r" : "222"
          }
        } ],
        "localId" : "222",
        "expression" : {
          "type" : "And",
          "localId" : "223",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "As",
            "localId" : "226",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "225"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "TN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " and ", "false" ],
                    "r" : "230"
                  },
                  "globalScope" : true
                } ],
                "r" : "229"
              },
              "globalScope" : true
            } ],
            "r" : "228"
          }
        } ],
        "localId" : "228",
        "expression" : {
          "type" : "And",
          "localId" : "229",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "230",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "Literal",
            "localId" : "231",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "FF",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " and ", "true" ],
                    "r" : "235"
                  },
                  "globalScope" : true
                } ],
                "r" : "234"
              },
              "globalScope" : true
            } ],
            "r" : "233"
          }
        } ],
        "localId" : "233",
        "expression" : {
          "type" : "And",
          "localId" : "234",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "235",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "Literal",
            "localId" : "236",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "FT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " and ", "null" ],
                    "r" : "240"
                  },
                  "globalScope" : true
                } ],
                "r" : "239"
              },
              "globalScope" : true
            } ],
            "r" : "238"
          }
        } ],
        "localId" : "238",
        "expression" : {
          "type" : "And",
          "localId" : "239",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "As",
            "localId" : "242",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "241"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "FN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " and ", "null" ],
                    "r" : "246"
                  },
                  "globalScope" : true
                } ],
                "r" : "245"
              },
              "globalScope" : true
            } ],
            "r" : "244"
          }
        } ],
        "localId" : "244",
        "expression" : {
          "type" : "And",
          "localId" : "245",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "248",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "246"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "As",
            "localId" : "249",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "247"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "NN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " and ", "true" ],
                    "r" : "253"
                  },
                  "globalScope" : true
                } ],
                "r" : "252"
              },
              "globalScope" : true
            } ],
            "r" : "251"
          }
        } ],
        "localId" : "251",
        "expression" : {
          "type" : "And",
          "localId" : "252",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "255",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "253"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "Literal",
            "localId" : "254",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "NT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " and ", "false" ],
                    "r" : "259"
                  },
                  "globalScope" : true
                } ],
                "r" : "258"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "And",
          "localId" : "258",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "261",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "259"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "Literal",
            "localId" : "260",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "NF",
        "context" : "Patient",
        "accessLevel" : "Public"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "257"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " or ", "true" ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "213"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Or",
          "localId" : "213",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "TT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " or ", "false" ],
                    "r" : "219"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "217"
          }
        } ],
        "localId" : "217",
        "expression" : {
          "type" : "Or",
          "localId" : "218",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "219",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "Literal",
            "localId" : "220",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "TF",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " or ", "null" ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "223"
              },
              "globalScope" : true
            } ],
            "r" : "222"
          }
        } ],
        "localId" : "222",
        "expression" : {
          "type" : "Or",
          "localId" : "223",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "As",
            "localId" : "226",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "225"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "TN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " or ", "false" ],
                    "r" : "230"
                  },
                  "globalScope" : true
                } ],
                "r" : "229"
              },
              "globalScope" : true
            } ],
            "r" : "228"
          }
        } ],
        "localId" : "228",
        "expression" : {
          "type" : "Or",
          "localId" : "229",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "230",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "Literal",
            "localId" : "231",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "FF",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " or ", "true" ],
                    "r" : "235"
                  },
                  "globalScope" : true
                } ],
                "r" : "234"
              },
              "globalScope" : true
            } ],
            "r" : "233"
          }
        } ],
        "localId" : "233",
        "expression" : {
          "type" : "Or",
          "localId" : "234",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "235",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "Literal",
            "localId" : "236",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "FT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " or ", "null" ],
                    "r" : "240"
                  },
                  "globalScope" : true
                } ],
                "r" : "239"
              },
              "globalScope" : true
            } ],
            "r" : "238"
          }
        } ],
        "localId" : "238",
        "expression" : {
          "type" : "Or",
          "localId" : "239",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "As",
            "localId" : "242",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "241"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "FN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " or ", "null" ],
                    "r" : "246"
                  },
                  "globalScope" : true
                } ],
                "r" : "245"
              },
              "globalScope" : true
            } ],
            "r" : "244"
          }
        } ],
        "localId" : "244",
        "expression" : {
          "type" : "Or",
          "localId" : "245",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "248",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "246"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "As",
            "localId" : "249",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "247"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "NN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " or ", "true" ],
                    "r" : "253"
                  },
                  "globalScope" : true
                } ],
                "r" : "252"
              },
              "globalScope" : true
            } ],
            "r" : "251"
          }
        } ],
        "localId" : "251",
        "expression" : {
          "type" : "Or",
          "localId" : "252",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "255",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "253"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "Literal",
            "localId" : "254",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "NT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " or ", "false" ],
                    "r" : "259"
                  },
                  "globalScope" : true
                } ],
                "r" : "258"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "Or",
          "localId" : "258",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "261",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "259"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "Literal",
            "localId" : "260",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "NF",
        "context" : "Patient",
        "accessLevel" : "Public"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "257"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " xor ", "true" ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "213"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Xor",
          "localId" : "213",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "TT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " xor ", "false" ],
                    "r" : "219"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "217"
          }
        } ],
        "localId" : "217",
        "expression" : {
          "type" : "Xor",
          "localId" : "218",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "219",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "Literal",
            "localId" : "220",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "TF",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " xor ", "null" ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "223"
              },
              "globalScope" : true
            } ],
            "r" : "222"
          }
        } ],
        "localId" : "222",
        "expression" : {
          "type" : "Xor",
          "localId" : "223",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "224",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }, {
            "type" : "As",
            "localId" : "226",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "225"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "TN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " xor ", "false" ],
                    "r" : "230"
                  },
                  "globalScope" : true
                } ],
                "r" : "229"
              },
              "globalScope" : true
            } ],
            "r" : "228"
          }
        } ],
        "localId" : "228",
        "expression" : {
          "type" : "Xor",
          "localId" : "229",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "230",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "Literal",
            "localId" : "231",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "FF",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " xor ", "true" ],
                    "r" : "235"
                  },
                  "globalScope" : true
                } ],
                "r" : "234"
              },
              "globalScope" : true
            } ],
            "r" : "233"
          }
        } ],
        "localId" : "233",
        "expression" : {
          "type" : "Xor",
          "localId" : "234",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "235",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "Literal",
            "localId" : "236",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "FT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " xor ", "null" ],
                    "r" : "240"
                  },
                  "globalScope" : true
                } ],
                "r" : "239"
              },
              "globalScope" : true
            } ],
            "r" : "238"
          }
        } ],
        "localId" : "238",
        "expression" : {
          "type" : "Xor",
          "localId" : "239",
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "240",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }, {
            "type" : "As",
            "localId" : "242",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "241"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "FN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NN", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " xor ", "null" ],
                    "r" : "246"
                  },
                  "globalScope" : true
                } ],
                "r" : "245"
              },
              "globalScope" : true
            } ],
            "r" : "244"
          }
        } ],
        "localId" : "244",
        "expression" : {
          "type" : "Xor",
          "localId" : "245",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "248",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "246"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "As",
            "localId" : "249",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "247"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          } ]
        },
        "name" : "NN",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NT", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " xor ", "true" ],
                    "r" : "253"
                  },
                  "globalScope" : true
                } ],
                "r" : "252"
              },
              "globalScope" : true
            } ],
            "r" : "251"
          }
        } ],
        "localId" : "251",
        "expression" : {
          "type" : "Xor",
          "localId" : "252",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "255",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "253"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "Literal",
            "localId" : "254",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          } ]
        },
        "name" : "NT",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NF", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " xor ", "false" ],
                    "r" : "259"
                  },
                  "globalScope" : true
                } ],
                "r" : "258"
              },
              "globalScope" : true
            } ],
            "r" : "257"
          }
        } ],
        "localId" : "257",
        "expression" : {
          "type" : "Xor",
          "localId" : "258",
          "signature" : [ ],
          "operand" : [ {
            "type" : "As",
            "localId" : "261",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "259"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }, {
            "type" : "Literal",
            "localId" : "260",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          } ]
        },
        "name" : "NF",
        "context" : "Patient",
        "accessLevel" : "Public"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "220"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NotTrue", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "not ", "true" ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "213"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Not",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }
        },
        "name" : "NotTrue",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NotFalse", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "not ", "false" ],
                    "r" : "218"
                  },
                  "globalScope" : true
                } ],
                "r" : "217"
              },
              "globalScope" : true
            } ],
            "r" : "216"
          }
        } ],
        "localId" : "216",
        "expression" : {
          "type" : "Not",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "218",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }
        },
        "name" : "NotFalse",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NotNull", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "not ", "null" ],
                    "r" : "222"
                  },
                  "globalScope" : true
                } ],
                "r" : "221"
              },
              "globalScope" : true
            } ],
            "r" : "220"
          }
        } ],
        "localId" : "220",
        "expression" : {
          "type" : "Not",
          "localId" : "221",
          "signature" : [ ],
          "operand" : {
            "type" : "As",
            "localId" : "223",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "222"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }
        },
        "name" : "NotNull",
        "context" : "Patient",
        "accessLevel" : "Public"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "220"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TrueIsTrue", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " is true" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "IsTrue",
          "localId" : "214",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }
        },
        "name" : "TrueIsTrue",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FalseIsTrue", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " is true" ],
                    "r" : "217"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "216"
          }
        } ],
        "localId" : "216",
        "expression" : {
          "type" : "IsTrue",
          "localId" : "218",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "217",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }
        },
        "name" : "FalseIsTrue",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NullIsTrue", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " is true" ],
                    "r" : "221"
                  },
                  "globalScope" : true
                } ],
                "r" : "222"
              },
              "globalScope" : true
            } ],
            "r" : "220"
          }
        } ],
        "localId" : "220",
        "expression" : {
          "type" : "IsTrue",
          "localId" : "222",
          "signature" : [ ],
          "operand" : {
            "type" : "As",
            "localId" : "223",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "221"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }
        },
        "name" : "NullIsTrue",
        "context" : "Patient",
        "accessLevel" : "Public"
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
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "220"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "TrueIsFalse", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "true", " is false" ],
                    "r" : "213"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "IsFalse",
          "localId" : "214",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "true"
          }
        },
        "name" : "TrueIsFalse",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "FalseIsFalse", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "false", " is false" ],
                    "r" : "217"
                  },
                  "globalScope" : true
                } ],
                "r" : "218"
              },
              "globalScope" : true
            } ],
            "r" : "216"
          }
        } ],
        "localId" : "216",
        "expression" : {
          "type" : "IsFalse",
          "localId" : "218",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "217",
            "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
            "value" : "false"
          }
        },
        "name" : "FalseIsFalse",
        "context" : "Patient",
        "accessLevel" : "Public"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "NullIsFalse", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "null", " is false" ],
                    "r" : "221"
                  },
                  "globalScope" : true
                } ],
                "r" : "222"
              },
              "globalScope" : true
            } ],
            "r" : "220"
          }
        } ],
        "localId" : "220",
        "expression" : {
          "type" : "IsFalse",
          "localId" : "222",
          "signature" : [ ],
          "operand" : {
            "type" : "As",
            "localId" : "223",
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "221"
            },
            "asType" : "{urn:hl7-org:elm-types:r1}Boolean"
          }
        },
        "name" : "NullIsFalse",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

