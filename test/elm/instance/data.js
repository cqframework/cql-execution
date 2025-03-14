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
        "r" : "247"
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
    "codeSystems" : {
      "def" : [ {
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "codesystem ", "\"SNOMED\"", ": ", "'2.16.840.1.113883.6.96'" ]
              },
              "globalScope" : true
            } ],
            "r" : "207"
          }
        } ],
        "localId" : "207",
        "name" : "SNOMED",
        "id" : "2.16.840.1.113883.6.96",
        "accessLevel" : "Public"
      }, {
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "codesystem ", "\"SIMPLE\"", ": ", "'1.2.3.4.5'" ]
              },
              "globalScope" : true
            } ],
            "r" : "208"
          }
        } ],
        "localId" : "208",
        "name" : "SIMPLE",
        "id" : "1.2.3.4.5",
        "accessLevel" : "Public"
      } ]
    },
    "codes" : {
      "def" : [ {
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "code ", "\"Viral pharyngitis code\"", ": ", "'1532007'", " from " ]
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
                    "s" : [ "\"SNOMED\"" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "210"
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " display ", "'Viral pharyngitis (disorder)'" ]
              },
              "globalScope" : true
            } ],
            "r" : "209"
          }
        } ],
        "localId" : "209",
        "codeSystem" : {
          "localId" : "210",
          "name" : "SNOMED"
        },
        "name" : "Viral pharyngitis code",
        "id" : "1532007",
        "display" : "Viral pharyngitis (disorder)",
        "accessLevel" : "Public"
      }, {
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "code ", "\"Active code\"", ": ", "'active'", " from " ]
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
                    "s" : [ "\"SNOMED\"" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "212"
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " display ", "'Active'" ]
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "codeSystem" : {
          "localId" : "212",
          "name" : "SNOMED"
        },
        "name" : "Active code",
        "id" : "active",
        "display" : "Active",
        "accessLevel" : "Public"
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "216",
        "name" : "Patient"
      } ]
    },
    "statements" : {
      "def" : [ {
        "type" : "ExpressionDef",
        "localId" : "214",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "215",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "213",
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
                "s" : [ "", "define ", "QuantityA", ": " ]
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
                    "s" : [ "Quantity", " {\n  " ]
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
                        "s" : [ "unit", ": " ]
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
                            "s" : [ "'a'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "221"
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
                    "s" : [ ",\n  " ]
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
                        "s" : [ "value", ": ", "12" ],
                        "r" : "222"
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
                    "s" : [ "\n}" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "219"
              },
              "globalScope" : true
            } ],
            "r" : "218"
          }
        } ],
        "localId" : "218",
        "expression" : {
          "type" : "Instance",
          "localId" : "219",
          "element" : [ {
            "value" : {
              "type" : "Literal",
              "localId" : "221",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "a"
            },
            "name" : "unit"
          }, {
            "value" : {
              "type" : "ToDecimal",
              "localId" : "224",
              "signature" : [ ],
              "operand" : {
                "type" : "Literal",
                "localId" : "222",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "12"
              }
            },
            "name" : "value"
          } ],
          "classType" : "{urn:hl7-org:elm-types:r1}Quantity"
        },
        "name" : "QuantityA",
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
                "s" : [ "", "define ", "CodeA", ": " ]
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
                    "s" : [ "Code", " {\n  " ]
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
                        "s" : [ "system", ": " ]
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
                            "s" : [ "'http://loinc.org'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "229"
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
                    "s" : [ ",\n  " ]
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
                        "s" : [ "code", ": " ]
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
                            "s" : [ "'12345'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
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
                    "s" : [ ",\n  " ]
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
                        "s" : [ "version", ": " ]
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
                            "s" : [ "'1'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "231"
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
                    "s" : [ ",\n  " ]
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
                        "s" : [ "display", ": " ]
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
                            "s" : [ "'Test Code'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "232"
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
                    "s" : [ "\n}" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "227"
              },
              "globalScope" : true
            } ],
            "r" : "226"
          }
        } ],
        "localId" : "226",
        "expression" : {
          "type" : "Instance",
          "localId" : "227",
          "element" : [ {
            "value" : {
              "type" : "Literal",
              "localId" : "229",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "http://loinc.org"
            },
            "name" : "system"
          }, {
            "value" : {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "12345"
            },
            "name" : "code"
          }, {
            "value" : {
              "type" : "Literal",
              "localId" : "231",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "1"
            },
            "name" : "version"
          }, {
            "value" : {
              "type" : "Literal",
              "localId" : "232",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Test Code"
            },
            "name" : "display"
          } ],
          "classType" : "{urn:hl7-org:elm-types:r1}Code"
        },
        "name" : "CodeA",
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
                "s" : [ "", "define ", "ConceptA", ": " ]
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
                    "s" : [ "Concept", " {\n  " ]
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
                        "s" : [ "codes", ": " ]
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
                            "s" : [ "{ " ]
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
                                "s" : [ "CodeA" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "238"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ " }" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "237"
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
                    "s" : [ ",\n  " ]
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
                        "s" : [ "display", ": " ]
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
                            "s" : [ "'Test Concept'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "239"
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
                    "s" : [ "\n}" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "235"
              },
              "globalScope" : true
            } ],
            "r" : "234"
          }
        } ],
        "localId" : "234",
        "expression" : {
          "type" : "Instance",
          "localId" : "235",
          "element" : [ {
            "value" : {
              "type" : "List",
              "localId" : "237",
              "element" : [ {
                "type" : "ExpressionRef",
                "localId" : "238",
                "name" : "CodeA"
              } ]
            },
            "name" : "codes"
          }, {
            "value" : {
              "type" : "Literal",
              "localId" : "239",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Test Concept"
            },
            "name" : "display"
          } ],
          "classType" : "{urn:hl7-org:elm-types:r1}Concept"
        },
        "name" : "ConceptA",
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
                "s" : [ "", "define ", "Pharyngitis", " : " ]
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
                    "s" : [ "Condition", " {\n  " ]
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
                        "s" : [ "code", ": " ]
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
                            "s" : [ "\"Viral pharyngitis code\"" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "244"
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
                    "s" : [ ",\n  " ]
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
                        "s" : [ "status", ": " ]
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
                            "s" : [ "\"Active code\"" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "245"
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
                    "s" : [ "\n}" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "242"
              },
              "globalScope" : true
            } ],
            "r" : "241"
          }
        } ],
        "localId" : "241",
        "expression" : {
          "type" : "Instance",
          "localId" : "242",
          "element" : [ {
            "value" : {
              "type" : "CodeRef",
              "localId" : "244",
              "name" : "Viral pharyngitis code"
            },
            "name" : "code"
          }, {
            "value" : {
              "type" : "CodeRef",
              "localId" : "245",
              "name" : "Active code"
            },
            "name" : "status"
          } ],
          "classType" : "{https://github.com/cqframework/cql-execution/simple}Condition"
        },
        "name" : "Pharyngitis",
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
                "s" : [ "", "define ", "val", ": " ]
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
                    "s" : [ {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "QuantityA" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "248"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "." ]
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
                        "s" : [ "value" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "249"
                  },
                  "globalScope" : true
                } ],
                "r" : "249"
              },
              "globalScope" : true
            } ],
            "r" : "247"
          }
        } ],
        "localId" : "247",
        "expression" : {
          "type" : "Property",
          "localId" : "249",
          "source" : {
            "type" : "ExpressionRef",
            "localId" : "248",
            "name" : "QuantityA"
          },
          "path" : "value"
        },
        "name" : "val",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

