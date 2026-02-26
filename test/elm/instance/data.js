/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Instance
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "SNOMED": '2.16.840.1.113883.6.96'
codesystem "SIMPLE": '1.2.3.4.5'
code "Viral pharyngitis code": '1532007' from "SNOMED" display 'Viral pharyngitis (disorder)'
code "Active code": 'active' from "SNOMED" display 'Active'
context Patient

define QuantityA: Quantity {
  unit: 'a',
  value: 12
}

define CodeA: Code {
  system: 'http://loinc.org',
  code: '12345',
  version: '1',
  display: 'Test Code'
}

define ConceptA: Concept {
  codes: { CodeA },
  display: 'Test Concept'
}

define Pharyngitis : Condition {
  code: "Viral pharyngitis code",
  status: "Active code"
}

define val: QuantityA.value
*/

module.exports['Instance'] = {
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
    "codeSystems" : {
      "def" : [ {
        "localId" : "208",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "SNOMED",
        "id" : "2.16.840.1.113883.6.96",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SNOMED\"", ": ", "'2.16.840.1.113883.6.96'" ]
            } ]
          }
        } ]
      }, {
        "localId" : "210",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
        "name" : "SIMPLE",
        "id" : "1.2.3.4.5",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"SIMPLE\"", ": ", "'1.2.3.4.5'" ]
            } ]
          }
        } ]
      } ]
    },
    "codes" : {
      "def" : [ {
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Viral pharyngitis code",
        "id" : "1532007",
        "display" : "Viral pharyngitis (disorder)",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "code ", "\"Viral pharyngitis code\"", ": ", "'1532007'", " from " ]
            }, {
              "r" : "213",
              "s" : [ {
                "value" : [ "\"SNOMED\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Viral pharyngitis (disorder)'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "213",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMED",
          "annotation" : [ ]
        }
      }, {
        "localId" : "215",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Active code",
        "id" : "active",
        "display" : "Active",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "215",
            "s" : [ {
              "value" : [ "", "code ", "\"Active code\"", ": ", "'active'", " from " ]
            }, {
              "r" : "216",
              "s" : [ {
                "value" : [ "\"SNOMED\"" ]
              } ]
            }, {
              "value" : [ " display ", "'Active'" ]
            } ]
          }
        } ],
        "codeSystem" : {
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
          "name" : "SNOMED",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "221",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "219",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "220",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "218",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "QuantityA",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "QuantityA", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "Quantity", " {\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "unit", ": " ]
                }, {
                  "r" : "227",
                  "s" : [ {
                    "value" : [ "'a'" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n  " ]
              }, {
                "s" : [ {
                  "r" : "229",
                  "value" : [ "value", ": ", "12" ]
                } ]
              }, {
                "value" : [ "\n}" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Instance",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ],
          "element" : [ {
            "name" : "unit",
            "value" : {
              "type" : "Literal",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a",
              "annotation" : [ ]
            }
          }, {
            "name" : "value",
            "value" : {
              "type" : "ToDecimal",
              "localId" : "231",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "operand" : {
                "type" : "Literal",
                "localId" : "229",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12",
                "annotation" : [ ]
              }
            }
          } ]
        }
      }, {
        "localId" : "235",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "CodeA",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "235",
            "s" : [ {
              "value" : [ "", "define ", "CodeA", ": " ]
            }, {
              "r" : "236",
              "s" : [ {
                "value" : [ "Code", " {\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "system", ": " ]
                }, {
                  "r" : "238",
                  "s" : [ {
                    "value" : [ "'http://loinc.org'" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "code", ": " ]
                }, {
                  "r" : "240",
                  "s" : [ {
                    "value" : [ "'12345'" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "version", ": " ]
                }, {
                  "r" : "242",
                  "s" : [ {
                    "value" : [ "'1'" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "display", ": " ]
                }, {
                  "r" : "244",
                  "s" : [ {
                    "value" : [ "'Test Code'" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n}" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Instance",
          "localId" : "236",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "classType" : "{urn:hl7-org:elm-types:r1}Code",
          "annotation" : [ ],
          "element" : [ {
            "name" : "system",
            "value" : {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "http://loinc.org",
              "annotation" : [ ]
            }
          }, {
            "name" : "code",
            "value" : {
              "type" : "Literal",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "12345",
              "annotation" : [ ]
            }
          }, {
            "name" : "version",
            "value" : {
              "type" : "Literal",
              "localId" : "242",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "name" : "display",
            "value" : {
              "type" : "Literal",
              "localId" : "244",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Test Code",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "248",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "ConceptA",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "248",
            "s" : [ {
              "value" : [ "", "define ", "ConceptA", ": " ]
            }, {
              "r" : "249",
              "s" : [ {
                "value" : [ "Concept", " {\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "codes", ": " ]
                }, {
                  "r" : "251",
                  "s" : [ {
                    "value" : [ "{ " ]
                  }, {
                    "r" : "252",
                    "s" : [ {
                      "value" : [ "CodeA" ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "display", ": " ]
                }, {
                  "r" : "255",
                  "s" : [ {
                    "value" : [ "'Test Concept'" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n}" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Instance",
          "localId" : "249",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
          "classType" : "{urn:hl7-org:elm-types:r1}Concept",
          "annotation" : [ ],
          "element" : [ {
            "name" : "codes",
            "value" : {
              "type" : "List",
              "localId" : "251",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "253",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Code",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "ExpressionRef",
                "localId" : "252",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                "name" : "CodeA",
                "annotation" : [ ]
              } ]
            }
          }, {
            "name" : "display",
            "value" : {
              "type" : "Literal",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Test Concept",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "259",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
        "name" : "Pharyngitis",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "259",
            "s" : [ {
              "value" : [ "", "define ", "Pharyngitis", " : " ]
            }, {
              "r" : "260",
              "s" : [ {
                "value" : [ "Condition", " {\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "code", ": " ]
                }, {
                  "r" : "262",
                  "s" : [ {
                    "value" : [ "\"Viral pharyngitis code\"" ]
                  } ]
                } ]
              }, {
                "value" : [ ",\n  " ]
              }, {
                "s" : [ {
                  "value" : [ "status", ": " ]
                }, {
                  "r" : "263",
                  "s" : [ {
                    "value" : [ "\"Active code\"" ]
                  } ]
                } ]
              }, {
                "value" : [ "\n}" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Instance",
          "localId" : "260",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "classType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "annotation" : [ ],
          "element" : [ {
            "name" : "code",
            "value" : {
              "type" : "CodeRef",
              "localId" : "262",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Viral pharyngitis code",
              "annotation" : [ ]
            }
          }, {
            "name" : "status",
            "value" : {
              "type" : "CodeRef",
              "localId" : "263",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "Active code",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "266",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "val",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "val", ": " ]
            }, {
              "r" : "268",
              "s" : [ {
                "r" : "267",
                "s" : [ {
                  "value" : [ "QuantityA" ]
                } ]
              }, {
                "value" : [ "." ]
              }, {
                "r" : "268",
                "s" : [ {
                  "value" : [ "value" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Property",
          "localId" : "268",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "path" : "value",
          "annotation" : [ ],
          "source" : {
            "type" : "ExpressionRef",
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityA",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

