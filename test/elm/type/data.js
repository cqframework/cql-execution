/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* IsSystemType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define FiveIsInteger: 5 is Integer
define FiveIsString: 5 is String
define StringFiveIsInteger: '5' is Integer
define StringFiveIsString: '5' is String
*/

module.exports['IsSystemType'] = {
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
        "r" : "227"
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
                "s" : [ "", "define ", "FiveIsInteger", ": " ]
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
                    "s" : [ "5", " is " ],
                    "r" : "214"
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "215"
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
          "type" : "Is",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5"
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "215",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          }
        },
        "name" : "FiveIsInteger",
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
                "s" : [ "", "define ", "FiveIsString", ": " ]
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
                    "s" : [ "5", " is " ],
                    "r" : "219"
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
                        "s" : [ "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "220"
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
          "type" : "Is",
          "localId" : "218",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "219",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5"
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          }
        },
        "name" : "FiveIsString",
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
                "s" : [ "", "define ", "StringFiveIsInteger", ": " ]
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
                        "s" : [ "'5'" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
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
          "type" : "Is",
          "localId" : "223",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "224",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "5"
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          }
        },
        "name" : "StringFiveIsInteger",
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
                "s" : [ "", "define ", "StringFiveIsString", ": " ]
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
                        "s" : [ "'5'" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "229"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "230"
                  },
                  "globalScope" : true
                } ],
                "r" : "228"
              },
              "globalScope" : true
            } ],
            "r" : "227"
          }
        } ],
        "localId" : "227",
        "expression" : {
          "type" : "Is",
          "localId" : "228",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "229",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "5"
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          }
        },
        "name" : "StringFiveIsString",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* IsListType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ListOfIntegersIsListOfIntegers: {1, 2, 3, 4, 5} is List<Integer>
define ListOfDecimalsIsListOfIntegers: {1.5, 2.5, 3.5, 4.5, 5.5} is List<Integer>
*/

module.exports['IsListType'] = {
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
        "r" : "223"
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
                "s" : [ "", "define ", "ListOfIntegersIsListOfIntegers", ": " ]
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
                        "s" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ],
                        "r" : "215"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "221"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "220"
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
          "type" : "Is",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "List",
            "localId" : "214",
            "element" : [ {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1"
            }, {
              "type" : "Literal",
              "localId" : "216",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2"
            }, {
              "type" : "Literal",
              "localId" : "217",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3"
            }, {
              "type" : "Literal",
              "localId" : "218",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4"
            }, {
              "type" : "Literal",
              "localId" : "219",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "220",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          }
        },
        "name" : "ListOfIntegersIsListOfIntegers",
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
                "s" : [ "", "define ", "ListOfDecimalsIsListOfIntegers", ": " ]
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
                        "s" : [ "{", "1.5", ", ", "2.5", ", ", "3.5", ", ", "4.5", ", ", "5.5", "}" ],
                        "r" : "226"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "232"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "231"
                  },
                  "globalScope" : true
                } ],
                "r" : "224"
              },
              "globalScope" : true
            } ],
            "r" : "223"
          }
        } ],
        "localId" : "223",
        "expression" : {
          "type" : "Is",
          "localId" : "224",
          "signature" : [ ],
          "operand" : {
            "type" : "List",
            "localId" : "225",
            "element" : [ {
              "type" : "Literal",
              "localId" : "226",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.5"
            }, {
              "type" : "Literal",
              "localId" : "227",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.5"
            }, {
              "type" : "Literal",
              "localId" : "228",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "3.5"
            }, {
              "type" : "Literal",
              "localId" : "229",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.5"
            }, {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5"
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "231",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          }
        },
        "name" : "ListOfDecimalsIsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* IsIntervalType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IntervalOfIntegersIsIntervalOfIntegers: Interval[1, 5] is Interval<Integer>
define IntervalOfDecimalsIsIntervalOfIntegers: Interval[1.5, 5.5] is Interval<Integer>
*/

module.exports['IsIntervalType'] = {
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
                "s" : [ "", "define ", "IntervalOfIntegersIsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Interval[", "1", ", ", "5", "]" ],
                        "r" : "214"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "216"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "218"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "217"
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
          "type" : "Is",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "Interval",
            "localId" : "216",
            "low" : {
              "type" : "Literal",
              "localId" : "214",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1"
            },
            "high" : {
              "type" : "Literal",
              "localId" : "215",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            },
            "lowClosed" : true,
            "highClosed" : true
          },
          "isTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "217",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "218",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          }
        },
        "name" : "IntervalOfIntegersIsIntervalOfIntegers",
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
                "s" : [ "", "define ", "IntervalOfDecimalsIsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Interval[", "1.5", ", ", "5.5", "]" ],
                        "r" : "222"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "226"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
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
          "type" : "Is",
          "localId" : "221",
          "signature" : [ ],
          "operand" : {
            "type" : "Interval",
            "localId" : "224",
            "low" : {
              "type" : "Literal",
              "localId" : "222",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.5"
            },
            "high" : {
              "type" : "Literal",
              "localId" : "223",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5"
            },
            "lowClosed" : true,
            "highClosed" : true
          },
          "isTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "225",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          }
        },
        "name" : "IntervalOfDecimalsIsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* IsTupleType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TupleOfIntegersIsTupleOfIntegers: Tuple{ a: 1, b: 2 } is Tuple{a Integer, b Integer}
define TupleOfDecimalsIsTupleOfIntegers: Tuple{ a: 1.5, b: 2.5 } is Tuple{a Integer, b Integer}
*/

module.exports['IsTupleType'] = {
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
        "r" : "223"
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
                "s" : [ "", "define ", "TupleOfIntegersIsTupleOfIntegers", ": " ]
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
                        "s" : [ "Tuple{ " ]
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
                            "s" : [ "a", ": ", "1" ],
                            "r" : "215"
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
                        "s" : [ ", " ]
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
                            "s" : [ "b", ": ", "2" ],
                            "r" : "216"
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
                        "s" : [ " }" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "a", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "219"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "218"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "b", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "221"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "220"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "217"
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
          "type" : "Is",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "Tuple",
            "localId" : "214",
            "element" : [ {
              "value" : {
                "type" : "Literal",
                "localId" : "215",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "name" : "a"
            }, {
              "value" : {
                "type" : "Literal",
                "localId" : "216",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2"
              },
              "name" : "b"
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "217",
            "element" : [ {
              "localId" : "218",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "219",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "a"
            }, {
              "localId" : "220",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "221",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "b"
            } ]
          }
        },
        "name" : "TupleOfIntegersIsTupleOfIntegers",
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
                "s" : [ "", "define ", "TupleOfDecimalsIsTupleOfIntegers", ": " ]
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
                        "s" : [ "Tuple{ " ]
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
                            "s" : [ "a", ": ", "1.5" ],
                            "r" : "226"
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
                        "s" : [ ", " ]
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
                            "s" : [ "b", ": ", "2.5" ],
                            "r" : "227"
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
                        "s" : [ " }" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "a", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "230"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "229"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "b", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "232"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "231"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "228"
                  },
                  "globalScope" : true
                } ],
                "r" : "224"
              },
              "globalScope" : true
            } ],
            "r" : "223"
          }
        } ],
        "localId" : "223",
        "expression" : {
          "type" : "Is",
          "localId" : "224",
          "signature" : [ ],
          "operand" : {
            "type" : "Tuple",
            "localId" : "225",
            "element" : [ {
              "value" : {
                "type" : "Literal",
                "localId" : "226",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.5"
              },
              "name" : "a"
            }, {
              "value" : {
                "type" : "Literal",
                "localId" : "227",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.5"
              },
              "name" : "b"
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "228",
            "element" : [ {
              "localId" : "229",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "230",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "a"
            }, {
              "localId" : "231",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "b"
            } ]
          }
        },
        "name" : "TupleOfDecimalsIsTupleOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* IsChoiceType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IntegerIsChoiceOfIntegersAndDecimals: 5 is Choice<Integer, Decimal>
define DecimalIsChoiceOfIntegersAndDecimals: 5.5 is Choice<Integer, Decimal>
define StringIsChoiceOfIntegersAndDecimals: 'Foo' is Choice<Integer, Decimal>
*/

module.exports['IsChoiceType'] = {
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
        "r" : "226"
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
                "s" : [ "", "define ", "IntegerIsChoiceOfIntegersAndDecimals", ": " ]
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
                    "s" : [ "5", " is " ],
                    "r" : "214"
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "215"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "Decimal" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "216"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "217"
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
          "type" : "Is",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5"
          },
          "isTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "217",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "215",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "216",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal"
            } ]
          }
        },
        "name" : "IntegerIsChoiceOfIntegersAndDecimals",
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
                "s" : [ "", "define ", "DecimalIsChoiceOfIntegersAndDecimals", ": " ]
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
                    "s" : [ "5.5", " is " ],
                    "r" : "221"
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "222"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "Decimal" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "223"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                } ],
                "r" : "220"
              },
              "globalScope" : true
            } ],
            "r" : "219"
          }
        } ],
        "localId" : "219",
        "expression" : {
          "type" : "Is",
          "localId" : "220",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "221",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "5.5"
          },
          "isTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "224",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "222",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "223",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal"
            } ]
          }
        },
        "name" : "DecimalIsChoiceOfIntegersAndDecimals",
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
                "s" : [ "", "define ", "StringIsChoiceOfIntegersAndDecimals", ": " ]
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
                        "s" : [ "'Foo'" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "228"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "229"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "Decimal" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "231"
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
          "type" : "Is",
          "localId" : "227",
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "228",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo"
          },
          "isTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "231",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal"
            } ]
          }
        },
        "name" : "StringIsChoiceOfIntegersAndDecimals",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* IsCustomDataModelType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define EncounterIsEncounter: First([Encounter]) is Simple.Encounter
define EncounterIsRecord: First([Encounter]) is Simple.Record
define EncounterIsAny: First([Encounter]) is System.Any
define EncounterIsCondition: First([Encounter]) is Simple.Condition
define EncounterIsString: First([Encounter]) is System.String
*/

module.exports['IsCustomDataModelType'] = {
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
        "r" : "244"
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
                "s" : [ "", "define ", "EncounterIsEncounter", ": " ]
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
                        "s" : [ "First", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "214"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "217"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "218"
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
          "type" : "Is",
          "localId" : "213",
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "217",
            "signature" : [ ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "214",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "218",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          }
        },
        "name" : "EncounterIsEncounter",
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
                "s" : [ "", "define ", "EncounterIsRecord", ": " ]
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
                        "s" : [ "First", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "222"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Simple", ".", "Record" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "226"
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
          "type" : "Is",
          "localId" : "221",
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "225",
            "signature" : [ ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "222",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Record"
          }
        },
        "name" : "EncounterIsRecord",
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
                "s" : [ "", "define ", "EncounterIsAny", ": " ]
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
                        "s" : [ "First", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "233"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "System", ".", "Any" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "234"
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
          "type" : "Is",
          "localId" : "229",
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "233",
            "signature" : [ ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "230",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          }
        },
        "name" : "EncounterIsAny",
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
                "s" : [ "", "define ", "EncounterIsCondition", ": " ]
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
                        "s" : [ "First", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
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
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "241"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "Simple", ".", "Condition" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "242"
                  },
                  "globalScope" : true
                } ],
                "r" : "237"
              },
              "globalScope" : true
            } ],
            "r" : "236"
          }
        } ],
        "localId" : "236",
        "expression" : {
          "type" : "Is",
          "localId" : "237",
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "241",
            "signature" : [ ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "238",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition"
          }
        },
        "name" : "EncounterIsCondition",
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
                "s" : [ "", "define ", "EncounterIsString", ": " ]
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
                        "s" : [ "First", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "246"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "249"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " is " ]
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
                        "s" : [ "System", ".", "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "250"
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
          "type" : "Is",
          "localId" : "245",
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "249",
            "signature" : [ ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "246",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          }
        },
        "name" : "EncounterIsString",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* AsSystemType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define FiveAsInteger: Echo(5) as Integer
define FiveAsString: Echo(5) as String
define StringFiveAsInteger: Echo('5') as Integer
define StringFiveAsString: Echo('5') as String
define ListAsInteger: Echo({5}) as Integer
define IntervalAsInteger: Echo(Interval[1, 5]) as Integer
define TupleAsInteger: Echo(Tuple{A: 5}) as Integer
define CastFiveAsInteger: cast Echo(5) as Integer
define CastFiveAsString: cast Echo(5) as String
define CastStringFiveAsInteger: cast Echo('5') as Integer
define CastStringFiveAsString: cast Echo('5') as String
define CastListAsInteger: cast Echo({5}) as Integer
define CastIntervalAsInteger: cast Echo(Interval[1, 5]) as Integer
define CastTupleAsInteger: cast Echo(Tuple{A: 5}) as Integer
*/

module.exports['AsSystemType'] = {
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
        "r" : "301"
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
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function Echo(Val Any): " ]
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
                        "s" : [ "Val" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "OperandRef",
          "localId" : "214",
          "name" : "Val"
        },
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "name" : "Val"
        } ]
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
                "s" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "FiveAsInteger", ": " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "218"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "219"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "220"
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
          "type" : "As",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "219",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "218",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : false
        },
        "name" : "FiveAsInteger",
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
                "s" : [ "", "define ", "FiveAsString", ": " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "224"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "226"
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
          "type" : "As",
          "localId" : "223",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "225",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "224",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          },
          "strict" : false
        },
        "name" : "FiveAsString",
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
                "s" : [ "", "define ", "StringFiveAsInteger", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "'5'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "231"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "232"
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
          "type" : "As",
          "localId" : "229",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "231",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "230",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : false
        },
        "name" : "StringFiveAsInteger",
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
                "s" : [ "", "define ", "StringFiveAsString", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "'5'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "236"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "237"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "238"
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
          "type" : "As",
          "localId" : "235",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "237",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "236",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          },
          "strict" : false
        },
        "name" : "StringFiveAsString",
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
                "s" : [ "", "define ", "ListAsInteger", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "5", "}" ],
                            "r" : "243"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "242"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "244"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "245"
                  },
                  "globalScope" : true
                } ],
                "r" : "241"
              },
              "globalScope" : true
            } ],
            "r" : "240"
          }
        } ],
        "localId" : "240",
        "expression" : {
          "type" : "As",
          "localId" : "241",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "244",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "242",
              "element" : [ {
                "type" : "Literal",
                "localId" : "243",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "245",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : false
        },
        "name" : "ListAsInteger",
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
                "s" : [ "", "define ", "IntervalAsInteger", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "249"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "251"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "252"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "253"
                  },
                  "globalScope" : true
                } ],
                "r" : "248"
              },
              "globalScope" : true
            } ],
            "r" : "247"
          }
        } ],
        "localId" : "247",
        "expression" : {
          "type" : "As",
          "localId" : "248",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "252",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "251",
              "low" : {
                "type" : "Literal",
                "localId" : "249",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "250",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : false
        },
        "name" : "IntervalAsInteger",
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
                "s" : [ "", "define ", "TupleAsInteger", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "5" ],
                                "r" : "258"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "257"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "259"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "260"
                  },
                  "globalScope" : true
                } ],
                "r" : "256"
              },
              "globalScope" : true
            } ],
            "r" : "255"
          }
        } ],
        "localId" : "255",
        "expression" : {
          "type" : "As",
          "localId" : "256",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "259",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "257",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "258",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5"
                },
                "name" : "A"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : false
        },
        "name" : "TupleAsInteger",
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
                "s" : [ "", "define ", "CastFiveAsInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "265"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "266"
                  },
                  "globalScope" : true
                } ],
                "r" : "263"
              },
              "globalScope" : true
            } ],
            "r" : "262"
          }
        } ],
        "localId" : "262",
        "expression" : {
          "type" : "As",
          "localId" : "263",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "265",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "264",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : true
        },
        "name" : "CastFiveAsInteger",
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
                "s" : [ "", "define ", "CastFiveAsString", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "270"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "271"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "272"
                  },
                  "globalScope" : true
                } ],
                "r" : "269"
              },
              "globalScope" : true
            } ],
            "r" : "268"
          }
        } ],
        "localId" : "268",
        "expression" : {
          "type" : "As",
          "localId" : "269",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "271",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "270",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "272",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          },
          "strict" : true
        },
        "name" : "CastFiveAsString",
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
                "s" : [ "", "define ", "CastStringFiveAsInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "'5'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "276"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "277"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "278"
                  },
                  "globalScope" : true
                } ],
                "r" : "275"
              },
              "globalScope" : true
            } ],
            "r" : "274"
          }
        } ],
        "localId" : "274",
        "expression" : {
          "type" : "As",
          "localId" : "275",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "277",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "276",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "278",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : true
        },
        "name" : "CastStringFiveAsInteger",
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
                "s" : [ "", "define ", "CastStringFiveAsString", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "'5'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "282"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "283"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "281"
              },
              "globalScope" : true
            } ],
            "r" : "280"
          }
        } ],
        "localId" : "280",
        "expression" : {
          "type" : "As",
          "localId" : "281",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "283",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "282",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          },
          "strict" : true
        },
        "name" : "CastStringFiveAsString",
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
                "s" : [ "", "define ", "CastListAsInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "5", "}" ],
                            "r" : "289"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "288"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "290"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "291"
                  },
                  "globalScope" : true
                } ],
                "r" : "287"
              },
              "globalScope" : true
            } ],
            "r" : "286"
          }
        } ],
        "localId" : "286",
        "expression" : {
          "type" : "As",
          "localId" : "287",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "290",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "288",
              "element" : [ {
                "type" : "Literal",
                "localId" : "289",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "291",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : true
        },
        "name" : "CastListAsInteger",
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
                "s" : [ "", "define ", "CastIntervalAsInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "295"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "297"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "298"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "294"
              },
              "globalScope" : true
            } ],
            "r" : "293"
          }
        } ],
        "localId" : "293",
        "expression" : {
          "type" : "As",
          "localId" : "294",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "298",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "297",
              "low" : {
                "type" : "Literal",
                "localId" : "295",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "296",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : true
        },
        "name" : "CastIntervalAsInteger",
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
                "s" : [ "", "define ", "CastTupleAsInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "5" ],
                                "r" : "304"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "303"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "305"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Integer" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "306"
                  },
                  "globalScope" : true
                } ],
                "r" : "302"
              },
              "globalScope" : true
            } ],
            "r" : "301"
          }
        } ],
        "localId" : "301",
        "expression" : {
          "type" : "As",
          "localId" : "302",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "305",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "303",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "304",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5"
                },
                "name" : "A"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{urn:hl7-org:elm-types:r1}Integer"
          },
          "strict" : true
        },
        "name" : "CastTupleAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* AsListType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define ListOfIntegersAsListOfIntegers: Echo({1, 2, 3, 4, 5}) as List<Integer>
define ListOfStringsAsListOfIntegers: Echo({'a', 'b', 'c', 'd'}) as List<Integer>
define IntegerAsListOfIntegers: Echo(5) as List<Integer>
define IntervalAsListOfIntegers: Echo(Interval[1, 5]) as List<Integer>
define TupleAsListOfIntegers: Echo(Tuple{A: 5}) as List<Integer>
define CastListOfIntegersAsListOfIntegers: cast Echo({1, 2, 3, 4, 5}) as List<Integer>
define CastListOfStringsAsListOfIntegers: cast Echo({'a', 'b', 'c', 'd'}) as List<Integer>
define CastIntegerAsListOfIntegers: cast Echo(5) as List<Integer>
define CastIntervalAsListOfIntegers: cast Echo(Interval[1, 5]) as List<Integer>
define CastTupleAsListOfIntegers: cast Echo(Tuple{A: 5}) as List<Integer>
*/

module.exports['AsListType'] = {
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
        "r" : "302"
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
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function Echo(Val Any): " ]
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
                        "s" : [ "Val" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "OperandRef",
          "localId" : "214",
          "name" : "Val"
        },
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "name" : "Val"
        } ]
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
                "s" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "ListOfIntegersAsListOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ],
                            "r" : "219"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "218"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "224"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "226"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "225"
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
          "type" : "As",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "224",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "218",
              "element" : [ {
                "type" : "Literal",
                "localId" : "219",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              }, {
                "type" : "Literal",
                "localId" : "220",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2"
              }, {
                "type" : "Literal",
                "localId" : "221",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3"
              }, {
                "type" : "Literal",
                "localId" : "222",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4"
              }, {
                "type" : "Literal",
                "localId" : "223",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "225",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "ListOfIntegersAsListOfIntegers",
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
                "s" : [ "", "define ", "ListOfStringsAsListOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{" ]
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
                            "r" : "231"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ", " ]
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
                                "s" : [ "'b'" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "232"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ", " ]
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
                                "s" : [ "'c'" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "233"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ", " ]
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
                                "s" : [ "'d'" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "234"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "235"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "237"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "236"
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
          "type" : "As",
          "localId" : "229",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "235",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "230",
              "element" : [ {
                "type" : "Literal",
                "localId" : "231",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a"
              }, {
                "type" : "Literal",
                "localId" : "232",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b"
              }, {
                "type" : "Literal",
                "localId" : "233",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c"
              }, {
                "type" : "Literal",
                "localId" : "234",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "236",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "237",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "ListOfStringsAsListOfIntegers",
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
                "s" : [ "", "define ", "IntegerAsListOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "241"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "242"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "244"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "243"
                  },
                  "globalScope" : true
                } ],
                "r" : "240"
              },
              "globalScope" : true
            } ],
            "r" : "239"
          }
        } ],
        "localId" : "239",
        "expression" : {
          "type" : "As",
          "localId" : "240",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "242",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "241",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "243",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "IntegerAsListOfIntegers",
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
                "s" : [ "", "define ", "IntervalAsListOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "248"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "250"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "251"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "253"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "252"
                  },
                  "globalScope" : true
                } ],
                "r" : "247"
              },
              "globalScope" : true
            } ],
            "r" : "246"
          }
        } ],
        "localId" : "246",
        "expression" : {
          "type" : "As",
          "localId" : "247",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "251",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "250",
              "low" : {
                "type" : "Literal",
                "localId" : "248",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "249",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "252",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "253",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "IntervalAsListOfIntegers",
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
                "s" : [ "", "define ", "TupleAsListOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "5" ],
                                "r" : "258"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "257"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "259"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "261"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "260"
                  },
                  "globalScope" : true
                } ],
                "r" : "256"
              },
              "globalScope" : true
            } ],
            "r" : "255"
          }
        } ],
        "localId" : "255",
        "expression" : {
          "type" : "As",
          "localId" : "256",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "259",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "257",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "258",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5"
                },
                "name" : "A"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "260",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "TupleAsListOfIntegers",
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
                "s" : [ "", "define ", "CastListOfIntegersAsListOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ],
                            "r" : "266"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "265"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "271"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "273"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "272"
                  },
                  "globalScope" : true
                } ],
                "r" : "264"
              },
              "globalScope" : true
            } ],
            "r" : "263"
          }
        } ],
        "localId" : "263",
        "expression" : {
          "type" : "As",
          "localId" : "264",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "271",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "265",
              "element" : [ {
                "type" : "Literal",
                "localId" : "266",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              }, {
                "type" : "Literal",
                "localId" : "267",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2"
              }, {
                "type" : "Literal",
                "localId" : "268",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3"
              }, {
                "type" : "Literal",
                "localId" : "269",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4"
              }, {
                "type" : "Literal",
                "localId" : "270",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "272",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "273",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastListOfIntegersAsListOfIntegers",
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
                "s" : [ "", "define ", "CastListOfStringsAsListOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{" ]
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
                            "r" : "278"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ", " ]
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
                                "s" : [ "'b'" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "279"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ", " ]
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
                                "s" : [ "'c'" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "280"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ", " ]
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
                                "s" : [ "'d'" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "281"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "277"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "282"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "284"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "283"
                  },
                  "globalScope" : true
                } ],
                "r" : "276"
              },
              "globalScope" : true
            } ],
            "r" : "275"
          }
        } ],
        "localId" : "275",
        "expression" : {
          "type" : "As",
          "localId" : "276",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "282",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "277",
              "element" : [ {
                "type" : "Literal",
                "localId" : "278",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a"
              }, {
                "type" : "Literal",
                "localId" : "279",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b"
              }, {
                "type" : "Literal",
                "localId" : "280",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c"
              }, {
                "type" : "Literal",
                "localId" : "281",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "283",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "284",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastListOfStringsAsListOfIntegers",
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
                "s" : [ "", "define ", "CastIntegerAsListOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "288"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "289"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "291"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "290"
                  },
                  "globalScope" : true
                } ],
                "r" : "287"
              },
              "globalScope" : true
            } ],
            "r" : "286"
          }
        } ],
        "localId" : "286",
        "expression" : {
          "type" : "As",
          "localId" : "287",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "289",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "290",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "291",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastIntegerAsListOfIntegers",
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
                "s" : [ "", "define ", "CastIntervalAsListOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "295"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "297"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "298"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "300"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "294"
              },
              "globalScope" : true
            } ],
            "r" : "293"
          }
        } ],
        "localId" : "293",
        "expression" : {
          "type" : "As",
          "localId" : "294",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "298",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "297",
              "low" : {
                "type" : "Literal",
                "localId" : "295",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "296",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "299",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "300",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastIntervalAsListOfIntegers",
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
                "s" : [ "", "define ", "CastTupleAsListOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "5" ],
                                "r" : "305"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "304"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "306"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "List<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "308"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "307"
                  },
                  "globalScope" : true
                } ],
                "r" : "303"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "As",
          "localId" : "303",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "306",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "304",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "305",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5"
                },
                "name" : "A"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "307",
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "308",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastTupleAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* AsIntervalType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define IntervalOfIntegersAsIntervalOfIntegers: Echo(Interval[1, 5]) as Interval<Integer>
define IntervalOfDatesAsIntervalOfIntegers: Echo(Interval[@2000-01-01, @2000-12-31]) as Interval<Integer>
define IntegerAsIntervalOfIntegers: Echo(5) as Interval<Integer>
define ListAsIntervalOfIntegers: Echo({1, 2, 3, 4, 5}) as Interval<Integer>
define TupleAsIntervalOfIntegers: Echo(Tuple{A: 5}) as Interval<Integer>
define CastIntervalOfIntegersAsIntervalOfIntegers: cast Echo(Interval[1, 5]) as Interval<Integer>
define CastIntervalOfDatesAsIntervalOfIntegers: cast Echo(Interval[@2000-01-01, @2000-12-31]) as Interval<Integer>
define CastIntegerAsIntervalOfIntegers: cast Echo(5) as Interval<Integer>
define CastListAsIntervalOfIntegers: cast Echo({1, 2, 3, 4, 5}) as Interval<Integer>
define CastTupleAsIntervalOfIntegers: cast Echo(Tuple{A: 5}) as Interval<Integer>
*/

module.exports['AsIntervalType'] = {
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
        "r" : "314"
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
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function Echo(Val Any): " ]
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
                        "s" : [ "Val" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "OperandRef",
          "localId" : "214",
          "name" : "Val"
        },
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "name" : "Val"
        } ]
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
                "s" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "IntervalOfIntegersAsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "218"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "220"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "221"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "223"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "222"
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
          "type" : "As",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "221",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "220",
              "low" : {
                "type" : "Literal",
                "localId" : "218",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "219",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "222",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "223",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "IntervalOfIntegersAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "IntervalOfDatesAsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "@2000-01-01", ", ", "@2000-12-31", "]" ],
                            "r" : "231"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "237"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
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
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "240"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "239"
                  },
                  "globalScope" : true
                } ],
                "r" : "226"
              },
              "globalScope" : true
            } ],
            "r" : "225"
          }
        } ],
        "localId" : "225",
        "expression" : {
          "type" : "As",
          "localId" : "226",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "238",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "237",
              "low" : {
                "type" : "Date",
                "localId" : "231",
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000"
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "230",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                }
              },
              "high" : {
                "type" : "Date",
                "localId" : "236",
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000"
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12"
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "235",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "31"
                }
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "239",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "IntervalOfDatesAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "IntegerAsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "244"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "245"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "247"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "246"
                  },
                  "globalScope" : true
                } ],
                "r" : "243"
              },
              "globalScope" : true
            } ],
            "r" : "242"
          }
        } ],
        "localId" : "242",
        "expression" : {
          "type" : "As",
          "localId" : "243",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "245",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "244",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "246",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "247",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "IntegerAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "ListAsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ],
                            "r" : "252"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "251"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "257"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "259"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "258"
                  },
                  "globalScope" : true
                } ],
                "r" : "250"
              },
              "globalScope" : true
            } ],
            "r" : "249"
          }
        } ],
        "localId" : "249",
        "expression" : {
          "type" : "As",
          "localId" : "250",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "257",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "251",
              "element" : [ {
                "type" : "Literal",
                "localId" : "252",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              }, {
                "type" : "Literal",
                "localId" : "253",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2"
              }, {
                "type" : "Literal",
                "localId" : "254",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3"
              }, {
                "type" : "Literal",
                "localId" : "255",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4"
              }, {
                "type" : "Literal",
                "localId" : "256",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "258",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "259",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "ListAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "TupleAsIntervalOfIntegers", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "5" ],
                                "r" : "264"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "263"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "265"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "267"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "266"
                  },
                  "globalScope" : true
                } ],
                "r" : "262"
              },
              "globalScope" : true
            } ],
            "r" : "261"
          }
        } ],
        "localId" : "261",
        "expression" : {
          "type" : "As",
          "localId" : "262",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "265",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "263",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "264",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5"
                },
                "name" : "A"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "266",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : false
        },
        "name" : "TupleAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "CastIntervalOfIntegersAsIntervalOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "271"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "273"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "274"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "276"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "275"
                  },
                  "globalScope" : true
                } ],
                "r" : "270"
              },
              "globalScope" : true
            } ],
            "r" : "269"
          }
        } ],
        "localId" : "269",
        "expression" : {
          "type" : "As",
          "localId" : "270",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "274",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "273",
              "low" : {
                "type" : "Literal",
                "localId" : "271",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "272",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "275",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "276",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastIntervalOfIntegersAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "CastIntervalOfDatesAsIntervalOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "@2000-01-01", ", ", "@2000-12-31", "]" ],
                            "r" : "284"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "290"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "291"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "293"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "292"
                  },
                  "globalScope" : true
                } ],
                "r" : "279"
              },
              "globalScope" : true
            } ],
            "r" : "278"
          }
        } ],
        "localId" : "278",
        "expression" : {
          "type" : "As",
          "localId" : "279",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "291",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "290",
              "low" : {
                "type" : "Date",
                "localId" : "284",
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "281",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000"
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "282",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "283",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                }
              },
              "high" : {
                "type" : "Date",
                "localId" : "289",
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "286",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000"
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "287",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12"
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "288",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "31"
                }
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "292",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastIntervalOfDatesAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "CastIntegerAsIntervalOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "297"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "298"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "300"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                } ],
                "r" : "296"
              },
              "globalScope" : true
            } ],
            "r" : "295"
          }
        } ],
        "localId" : "295",
        "expression" : {
          "type" : "As",
          "localId" : "296",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "298",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "297",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "299",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "300",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastIntegerAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "CastListAsIntervalOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ],
                            "r" : "305"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "304"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "310"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "312"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "311"
                  },
                  "globalScope" : true
                } ],
                "r" : "303"
              },
              "globalScope" : true
            } ],
            "r" : "302"
          }
        } ],
        "localId" : "302",
        "expression" : {
          "type" : "As",
          "localId" : "303",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "310",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "304",
              "element" : [ {
                "type" : "Literal",
                "localId" : "305",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              }, {
                "type" : "Literal",
                "localId" : "306",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2"
              }, {
                "type" : "Literal",
                "localId" : "307",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3"
              }, {
                "type" : "Literal",
                "localId" : "308",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4"
              }, {
                "type" : "Literal",
                "localId" : "309",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "311",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "312",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastListAsIntervalOfIntegers",
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
                "s" : [ "", "define ", "CastTupleAsIntervalOfIntegers", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "5" ],
                                "r" : "317"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "316"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "318"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Interval<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "320"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "319"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "314"
          }
        } ],
        "localId" : "314",
        "expression" : {
          "type" : "As",
          "localId" : "315",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "318",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "316",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "317",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5"
                },
                "name" : "A"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "319",
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "320",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }
          },
          "strict" : true
        },
        "name" : "CastTupleAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* AsTupleType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define TupleOfAIntegerBStringAsTupleOfAIntegerBString: Echo(Tuple{ A: 1, B: '2' }) as Tuple{A Integer, B String}
define TupleOfAStringBIntegerAsTupleOfAIntegerBString: Echo(Tuple{ A: '1', B: 2 }) as Tuple{A Integer, B String}
define IntegerAsTupleOfInteger: Echo(5) as Tuple{A Integer}
define ListAsTupleOfInteger: Echo({5}) as Tuple{A Integer}
define IntervalAsTupleOfInteger: Echo(Interval[1, 5]) as Tuple{A Integer}
define CastTupleOfAIntegerBStringAsTupleOfAIntegerBString: cast Echo(Tuple{ A: 1, B: '2' }) as Tuple{A Integer, B String}
define CastTupleOfAStringBIntegerAsTupleOfAIntegerBString: cast Echo(Tuple{ A: '1', B: 2 }) as Tuple{A Integer, B String}
define CastIntegerAsTupleOfInteger: cast Echo(5) as Tuple{A Integer}
define CastListAsTupleOfInteger: cast Echo({5}) as Tuple{A Integer}
define CastIntervalAsTupleOfInteger: cast Echo(Interval[1, 5]) as Tuple{A Integer}
*/

module.exports['AsTupleType'] = {
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
        "r" : "308"
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
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function Echo(Val Any): " ]
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
                        "s" : [ "Val" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "OperandRef",
          "localId" : "214",
          "name" : "Val"
        },
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "name" : "Val"
        } ]
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
                "s" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "TupleOfAIntegerBStringAsTupleOfAIntegerBString", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{ " ]
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
                                "s" : [ "A", ": ", "1" ],
                                "r" : "219"
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
                            "s" : [ ", " ]
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
                                "s" : [ "B", ": " ]
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
                                    "s" : [ "'2'" ]
                                  },
                                  "globalScope" : true
                                } ],
                                "r" : "220"
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
                            "s" : [ " }" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "218"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "221"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "224"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "223"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "B", " " ]
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
                                "s" : [ "String" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "226"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "225"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "222"
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
          "type" : "As",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "221",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "218",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                },
                "name" : "A"
              }, {
                "value" : {
                  "type" : "Literal",
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2"
                },
                "name" : "B"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "222",
            "element" : [ {
              "localId" : "223",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "224",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            }, {
              "localId" : "225",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "226",
                "name" : "{urn:hl7-org:elm-types:r1}String"
              },
              "name" : "B"
            } ]
          },
          "strict" : false
        },
        "name" : "TupleOfAIntegerBStringAsTupleOfAIntegerBString",
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
                "s" : [ "", "define ", "TupleOfAStringBIntegerAsTupleOfAIntegerBString", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{ " ]
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
                                "s" : [ "A", ": " ]
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
                            "s" : [ ", " ]
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
                                "s" : [ "B", ": ", "2" ],
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
                            "s" : [ " }" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "233"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "236"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "235"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "B", " " ]
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
                                "s" : [ "String" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "238"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "237"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "234"
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
          "type" : "As",
          "localId" : "229",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "233",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "230",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "231",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1"
                },
                "name" : "A"
              }, {
                "value" : {
                  "type" : "Literal",
                  "localId" : "232",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2"
                },
                "name" : "B"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "234",
            "element" : [ {
              "localId" : "235",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "236",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            }, {
              "localId" : "237",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "238",
                "name" : "{urn:hl7-org:elm-types:r1}String"
              },
              "name" : "B"
            } ]
          },
          "strict" : false
        },
        "name" : "TupleOfAStringBIntegerAsTupleOfAIntegerBString",
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
                "s" : [ "", "define ", "IntegerAsTupleOfInteger", ": " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "242"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "243"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "246"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "245"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "244"
                  },
                  "globalScope" : true
                } ],
                "r" : "241"
              },
              "globalScope" : true
            } ],
            "r" : "240"
          }
        } ],
        "localId" : "240",
        "expression" : {
          "type" : "As",
          "localId" : "241",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "243",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "242",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "244",
            "element" : [ {
              "localId" : "245",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "246",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            } ]
          },
          "strict" : false
        },
        "name" : "IntegerAsTupleOfInteger",
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
                "s" : [ "", "define ", "ListAsTupleOfInteger", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "5", "}" ],
                            "r" : "251"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "250"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "252"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "255"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "254"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "253"
                  },
                  "globalScope" : true
                } ],
                "r" : "249"
              },
              "globalScope" : true
            } ],
            "r" : "248"
          }
        } ],
        "localId" : "248",
        "expression" : {
          "type" : "As",
          "localId" : "249",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "252",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "250",
              "element" : [ {
                "type" : "Literal",
                "localId" : "251",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "253",
            "element" : [ {
              "localId" : "254",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "255",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            } ]
          },
          "strict" : false
        },
        "name" : "ListAsTupleOfInteger",
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
                "s" : [ "", "define ", "IntervalAsTupleOfInteger", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "259"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "261"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "262"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "265"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "264"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "263"
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
          "type" : "As",
          "localId" : "258",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "262",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "261",
              "low" : {
                "type" : "Literal",
                "localId" : "259",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "260",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "263",
            "element" : [ {
              "localId" : "264",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "265",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            } ]
          },
          "strict" : false
        },
        "name" : "IntervalAsTupleOfInteger",
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
                "s" : [ "", "define ", "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{ " ]
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
                                "s" : [ "A", ": ", "1" ],
                                "r" : "270"
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
                            "s" : [ ", " ]
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
                                "s" : [ "B", ": " ]
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
                                    "s" : [ "'2'" ]
                                  },
                                  "globalScope" : true
                                } ],
                                "r" : "271"
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
                            "s" : [ " }" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "269"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "272"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "275"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "274"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "B", " " ]
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
                                "s" : [ "String" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "277"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "276"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "273"
                  },
                  "globalScope" : true
                } ],
                "r" : "268"
              },
              "globalScope" : true
            } ],
            "r" : "267"
          }
        } ],
        "localId" : "267",
        "expression" : {
          "type" : "As",
          "localId" : "268",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "272",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "269",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "270",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                },
                "name" : "A"
              }, {
                "value" : {
                  "type" : "Literal",
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2"
                },
                "name" : "B"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "273",
            "element" : [ {
              "localId" : "274",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "275",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            }, {
              "localId" : "276",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "277",
                "name" : "{urn:hl7-org:elm-types:r1}String"
              },
              "name" : "B"
            } ]
          },
          "strict" : true
        },
        "name" : "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",
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
                "s" : [ "", "define ", "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{ " ]
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
                                "s" : [ "A", ": " ]
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
                                "r" : "282"
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
                            "s" : [ ", " ]
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
                                "s" : [ "B", ": ", "2" ],
                                "r" : "283"
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
                            "s" : [ " }" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "281"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "287"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "286"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "B", " " ]
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
                                "s" : [ "String" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "289"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "288"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "285"
                  },
                  "globalScope" : true
                } ],
                "r" : "280"
              },
              "globalScope" : true
            } ],
            "r" : "279"
          }
        } ],
        "localId" : "279",
        "expression" : {
          "type" : "As",
          "localId" : "280",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "284",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "281",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "282",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1"
                },
                "name" : "A"
              }, {
                "value" : {
                  "type" : "Literal",
                  "localId" : "283",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2"
                },
                "name" : "B"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "285",
            "element" : [ {
              "localId" : "286",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "287",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            }, {
              "localId" : "288",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "289",
                "name" : "{urn:hl7-org:elm-types:r1}String"
              },
              "name" : "B"
            } ]
          },
          "strict" : true
        },
        "name" : "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",
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
                "s" : [ "", "define ", "CastIntegerAsTupleOfInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "293"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "294"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "297"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "296"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "295"
                  },
                  "globalScope" : true
                } ],
                "r" : "292"
              },
              "globalScope" : true
            } ],
            "r" : "291"
          }
        } ],
        "localId" : "291",
        "expression" : {
          "type" : "As",
          "localId" : "292",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "294",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "293",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "295",
            "element" : [ {
              "localId" : "296",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "297",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            } ]
          },
          "strict" : true
        },
        "name" : "CastIntegerAsTupleOfInteger",
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
                "s" : [ "", "define ", "CastListAsTupleOfInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "5", "}" ],
                            "r" : "302"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "301"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "303"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "306"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "305"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "304"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "299"
          }
        } ],
        "localId" : "299",
        "expression" : {
          "type" : "As",
          "localId" : "300",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "303",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "301",
              "element" : [ {
                "type" : "Literal",
                "localId" : "302",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "304",
            "element" : [ {
              "localId" : "305",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "306",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            } ]
          },
          "strict" : true
        },
        "name" : "CastListAsTupleOfInteger",
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
                "s" : [ "", "define ", "CastIntervalAsTupleOfInteger", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "310"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "312"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "313"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Tuple{" ]
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
                            "s" : [ "A", " " ]
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
                                "s" : [ "Integer" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "316"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "315"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ "}" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                } ],
                "r" : "309"
              },
              "globalScope" : true
            } ],
            "r" : "308"
          }
        } ],
        "localId" : "308",
        "expression" : {
          "type" : "As",
          "localId" : "309",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "313",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "312",
              "low" : {
                "type" : "Literal",
                "localId" : "310",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "311",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "314",
            "element" : [ {
              "localId" : "315",
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}Integer"
              },
              "name" : "A"
            } ]
          },
          "strict" : true
        },
        "name" : "CastIntervalAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* AsChoiceType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define IntegerAsChoiceOfIntegersAndStrings: Echo(5) as Choice<Integer, String>
define StringAsChoiceOfIntegersAndStrings: Echo('Foo') as Choice<Integer, String>
define DecimalAsChoiceOfIntegersAndStrings: Echo(5.5) as Choice<Integer, String>
define ListAsChoiceOfIntegersAndStrings: Echo({5, 'a'}) as Choice<Integer, String>
define IntervalAsChoiceOfIntegersAndStrings: Echo(Interval[1, 5]) as Choice<Integer, String>
define TupleAsChoiceOfIntegersAndStrings: Echo(Tuple{A: 1, B: '2'}) as Choice<Integer, String>
define CastIntegerAsChoiceOfIntegersAndStrings: cast Echo(5) as Choice<Integer, String>
define CastStringAsChoiceOfIntegersAndStrings: cast Echo('Foo') as Choice<Integer, String>
define CastDecimalAsChoiceOfIntegersAndStrings: cast Echo(5.5) as Choice<Integer, String>
define CastListAsChoiceOfIntegersAndStrings: cast Echo({5, 'a'}) as Choice<Integer, String>
define CastIntervalAsChoiceOfIntegersAndStrings: cast Echo(Interval[1, 5]) as Choice<Integer, String>
define CastTupleAsChoiceOfIntegersAndStrings: cast Echo(Tuple{A: 1, B: '2'}) as Choice<Integer, String>
*/

module.exports['AsChoiceType'] = {
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
        "r" : "314"
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
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function Echo(Val Any): " ]
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
                        "s" : [ "Val" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "OperandRef",
          "localId" : "214",
          "name" : "Val"
        },
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "name" : "Val"
        } ]
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
                "s" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "IntegerAsChoiceOfIntegersAndStrings", ": " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "218"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "219"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "220"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "221"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "222"
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
          "type" : "As",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "219",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "218",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "222",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "220",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : false
        },
        "name" : "IntegerAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "StringAsChoiceOfIntegersAndStrings", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "'Foo'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "226"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "227"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "228"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "229"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "230"
                  },
                  "globalScope" : true
                } ],
                "r" : "225"
              },
              "globalScope" : true
            } ],
            "r" : "224"
          }
        } ],
        "localId" : "224",
        "expression" : {
          "type" : "As",
          "localId" : "225",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "227",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "226",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Foo"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "230",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : false
        },
        "name" : "StringAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "DecimalAsChoiceOfIntegersAndStrings", ": " ]
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
                        "s" : [ "Echo", "(", "5.5", ")" ],
                        "r" : "234"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "235"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "236"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "237"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "238"
                  },
                  "globalScope" : true
                } ],
                "r" : "233"
              },
              "globalScope" : true
            } ],
            "r" : "232"
          }
        } ],
        "localId" : "232",
        "expression" : {
          "type" : "As",
          "localId" : "233",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "235",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "234",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "238",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "236",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "237",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : false
        },
        "name" : "DecimalAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "ListAsChoiceOfIntegersAndStrings", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "5", ", " ],
                            "r" : "243"
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
                            "r" : "244"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "242"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "245"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "246"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "247"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "248"
                  },
                  "globalScope" : true
                } ],
                "r" : "241"
              },
              "globalScope" : true
            } ],
            "r" : "240"
          }
        } ],
        "localId" : "240",
        "expression" : {
          "type" : "As",
          "localId" : "241",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "245",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "242",
              "element" : [ {
                "type" : "Literal",
                "localId" : "243",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              }, {
                "type" : "Literal",
                "localId" : "244",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "248",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "247",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : false
        },
        "name" : "ListAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "IntervalAsChoiceOfIntegersAndStrings", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "252"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "254"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "255"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "256"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "257"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "258"
                  },
                  "globalScope" : true
                } ],
                "r" : "251"
              },
              "globalScope" : true
            } ],
            "r" : "250"
          }
        } ],
        "localId" : "250",
        "expression" : {
          "type" : "As",
          "localId" : "251",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "255",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "254",
              "low" : {
                "type" : "Literal",
                "localId" : "252",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "253",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "258",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "256",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "257",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : false
        },
        "name" : "IntervalAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "TupleAsChoiceOfIntegersAndStrings", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "1" ],
                                "r" : "263"
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
                            "s" : [ ", " ]
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
                                "s" : [ "B", ": " ]
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
                                    "s" : [ "'2'" ]
                                  },
                                  "globalScope" : true
                                } ],
                                "r" : "264"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "262"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "265"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "266"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "267"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "268"
                  },
                  "globalScope" : true
                } ],
                "r" : "261"
              },
              "globalScope" : true
            } ],
            "r" : "260"
          }
        } ],
        "localId" : "260",
        "expression" : {
          "type" : "As",
          "localId" : "261",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "265",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "262",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                },
                "name" : "A"
              }, {
                "value" : {
                  "type" : "Literal",
                  "localId" : "264",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2"
                },
                "name" : "B"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "268",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "266",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : false
        },
        "name" : "TupleAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "CastIntegerAsChoiceOfIntegersAndStrings", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5", ")" ],
                        "r" : "272"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "273"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "274"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "275"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "276"
                  },
                  "globalScope" : true
                } ],
                "r" : "271"
              },
              "globalScope" : true
            } ],
            "r" : "270"
          }
        } ],
        "localId" : "270",
        "expression" : {
          "type" : "As",
          "localId" : "271",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "273",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "272",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "276",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "274",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "275",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : true
        },
        "name" : "CastIntegerAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "CastStringAsChoiceOfIntegersAndStrings", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "'Foo'" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "280"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "281"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "282"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "283"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "284"
                  },
                  "globalScope" : true
                } ],
                "r" : "279"
              },
              "globalScope" : true
            } ],
            "r" : "278"
          }
        } ],
        "localId" : "278",
        "expression" : {
          "type" : "As",
          "localId" : "279",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "281",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "280",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Foo"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "284",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "282",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "283",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : true
        },
        "name" : "CastStringAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "CastDecimalAsChoiceOfIntegersAndStrings", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(", "5.5", ")" ],
                        "r" : "288"
                      },
                      "globalScope" : true
                    } ],
                    "r" : "289"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "290"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "291"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "292"
                  },
                  "globalScope" : true
                } ],
                "r" : "287"
              },
              "globalScope" : true
            } ],
            "r" : "286"
          }
        } ],
        "localId" : "286",
        "expression" : {
          "type" : "As",
          "localId" : "287",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "289",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "288",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "292",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "290",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "291",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : true
        },
        "name" : "CastDecimalAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "CastListAsChoiceOfIntegersAndStrings", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{", "5", ", " ],
                            "r" : "297"
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
                            "r" : "298"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "296"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "299"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "300"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "301"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "302"
                  },
                  "globalScope" : true
                } ],
                "r" : "295"
              },
              "globalScope" : true
            } ],
            "r" : "294"
          }
        } ],
        "localId" : "294",
        "expression" : {
          "type" : "As",
          "localId" : "295",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "299",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "List",
              "localId" : "296",
              "element" : [ {
                "type" : "Literal",
                "localId" : "297",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              }, {
                "type" : "Literal",
                "localId" : "298",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "302",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "300",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "301",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : true
        },
        "name" : "CastListAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "CastIntervalAsChoiceOfIntegersAndStrings", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "306"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "308"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "309"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "310"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "311"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "312"
                  },
                  "globalScope" : true
                } ],
                "r" : "305"
              },
              "globalScope" : true
            } ],
            "r" : "304"
          }
        } ],
        "localId" : "304",
        "expression" : {
          "type" : "As",
          "localId" : "305",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "309",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "308",
              "low" : {
                "type" : "Literal",
                "localId" : "306",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "307",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "312",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "310",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : true
        },
        "name" : "CastIntervalAsChoiceOfIntegersAndStrings",
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
                "s" : [ "", "define ", "CastTupleAsChoiceOfIntegersAndStrings", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Tuple{" ]
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
                                "s" : [ "A", ": ", "1" ],
                                "r" : "317"
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
                            "s" : [ ", " ]
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
                                "s" : [ "B", ": " ]
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
                                    "s" : [ "'2'" ]
                                  },
                                  "globalScope" : true
                                } ],
                                "r" : "318"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "316"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "319"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Choice<" ]
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
                            "s" : [ "Integer" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "320"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ", " ]
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
                            "s" : [ "String" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "321"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ">" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "322"
                  },
                  "globalScope" : true
                } ],
                "r" : "315"
              },
              "globalScope" : true
            } ],
            "r" : "314"
          }
        } ],
        "localId" : "314",
        "expression" : {
          "type" : "As",
          "localId" : "315",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "319",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "316",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "317",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1"
                },
                "name" : "A"
              }, {
                "value" : {
                  "type" : "Literal",
                  "localId" : "318",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2"
                },
                "name" : "B"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "322",
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "320",
              "name" : "{urn:hl7-org:elm-types:r1}Integer"
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "321",
              "name" : "{urn:hl7-org:elm-types:r1}String"
            } ]
          },
          "strict" : true
        },
        "name" : "CastTupleAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

/* AsCustomDataModelType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define EncounterAsEncounter: Echo(First([Encounter])) as Simple.Encounter
define EncounterAsRecord: Echo(First([Encounter])) as Simple.Record
define EncounterAsAny: Echo(First([Encounter])) as System.Any
define EncounterAsCondition: Echo(First([Encounter])) as Simple.Condition
define EncounterAsString: Echo(First([Encounter])) as System.String
define ListAsEncounter: Echo([Encounter]) as Simple.Encounter
define IntervalAsEncounter: Echo(Interval[1, 5]) as Simple.Encounter
define TupleAsEncounter: Echo({id: '1'}) as Simple.Encounter
define NamedTupleAsEncounter: Echo(Encounter {id: '1'}) as Simple.Encounter
define CastEncounterAsEncounter: cast Echo(First([Encounter])) as Simple.Encounter
define CastEncounterAsRecord: cast Echo(First([Encounter])) as Simple.Record
define CastEncounterAsAny: cast Echo(First([Encounter])) as System.Any
define CastEncounterAsCondition: cast Echo(First([Encounter])) as Simple.Condition
define CastEncounterAsString: cast Echo(First([Encounter])) as System.String
define CastListAsEncounter: cast Echo([Encounter]) as Simple.Encounter
define CastIntervalAsEncounter: cast Echo(Interval[1, 5]) as Simple.Encounter
define CastTupleAsEncounter: cast Echo({id: '1'}) as Simple.Encounter
define CastNamedTupleAsEncounter: Echo(Encounter {id: '1'}) as Simple.Encounter
*/

module.exports['AsCustomDataModelType'] = {
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
        "r" : "356"
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
        "type" : "FunctionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define function Echo(Val Any): " ]
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
                        "s" : [ "Val" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "214"
                  },
                  "globalScope" : true
                } ],
                "r" : "214"
              },
              "globalScope" : true
            } ],
            "r" : "211"
          }
        } ],
        "localId" : "211",
        "expression" : {
          "type" : "OperandRef",
          "localId" : "214",
          "name" : "Val"
        },
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "operand" : [ {
          "localId" : "213",
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "212",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "name" : "Val"
        } ]
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
                "s" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "EncounterAsEncounter", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "218"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "221"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "222"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "223"
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
          "type" : "As",
          "localId" : "217",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "222",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "221",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "218",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : false
        },
        "name" : "EncounterAsEncounter",
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
                "s" : [ "", "define ", "EncounterAsRecord", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "227"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "230"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "231"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Record" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "232"
                  },
                  "globalScope" : true
                } ],
                "r" : "226"
              },
              "globalScope" : true
            } ],
            "r" : "225"
          }
        } ],
        "localId" : "225",
        "expression" : {
          "type" : "As",
          "localId" : "226",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "231",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "230",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "227",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Record"
          },
          "strict" : false
        },
        "name" : "EncounterAsRecord",
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
                "s" : [ "", "define ", "EncounterAsAny", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "236"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "239"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "240"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "System", ".", "Any" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "241"
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
          "type" : "As",
          "localId" : "235",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "240",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "239",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "236",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "strict" : false
        },
        "name" : "EncounterAsAny",
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
                "s" : [ "", "define ", "EncounterAsCondition", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "245"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
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
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "249"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Condition" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "250"
                  },
                  "globalScope" : true
                } ],
                "r" : "244"
              },
              "globalScope" : true
            } ],
            "r" : "243"
          }
        } ],
        "localId" : "243",
        "expression" : {
          "type" : "As",
          "localId" : "244",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "249",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "248",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "245",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "250",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition"
          },
          "strict" : false
        },
        "name" : "EncounterAsCondition",
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
                "s" : [ "", "define ", "EncounterAsString", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "254"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "257"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "258"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "System", ".", "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "259"
                  },
                  "globalScope" : true
                } ],
                "r" : "253"
              },
              "globalScope" : true
            } ],
            "r" : "252"
          }
        } ],
        "localId" : "252",
        "expression" : {
          "type" : "As",
          "localId" : "253",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "258",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "257",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "254",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "259",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          },
          "strict" : false
        },
        "name" : "EncounterAsString",
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
                "s" : [ "", "define ", "ListAsEncounter", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "263"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "264"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "265"
                  },
                  "globalScope" : true
                } ],
                "r" : "262"
              },
              "globalScope" : true
            } ],
            "r" : "261"
          }
        } ],
        "localId" : "261",
        "expression" : {
          "type" : "As",
          "localId" : "262",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "264",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Retrieve",
              "localId" : "263",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : false
        },
        "name" : "ListAsEncounter",
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
                "s" : [ "", "define ", "IntervalAsEncounter", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "269"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "271"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "272"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "273"
                  },
                  "globalScope" : true
                } ],
                "r" : "268"
              },
              "globalScope" : true
            } ],
            "r" : "267"
          }
        } ],
        "localId" : "267",
        "expression" : {
          "type" : "As",
          "localId" : "268",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "272",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "271",
              "low" : {
                "type" : "Literal",
                "localId" : "269",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "270",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "273",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : false
        },
        "name" : "IntervalAsEncounter",
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
                "s" : [ "", "define ", "TupleAsEncounter", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{" ]
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
                                "s" : [ "id", ": " ]
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
                                "r" : "278"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "277"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "279"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "280"
                  },
                  "globalScope" : true
                } ],
                "r" : "276"
              },
              "globalScope" : true
            } ],
            "r" : "275"
          }
        } ],
        "localId" : "275",
        "expression" : {
          "type" : "As",
          "localId" : "276",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "279",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "277",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "278",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1"
                },
                "name" : "id"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : false
        },
        "name" : "TupleAsEncounter",
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
                "s" : [ "", "define ", "NamedTupleAsEncounter", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Encounter", " {" ]
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
                                "s" : [ "id", ": " ]
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
                                "r" : "286"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "284"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "287"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "288"
                  },
                  "globalScope" : true
                } ],
                "r" : "283"
              },
              "globalScope" : true
            } ],
            "r" : "282"
          }
        } ],
        "localId" : "282",
        "expression" : {
          "type" : "As",
          "localId" : "283",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "287",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Instance",
              "localId" : "284",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "286",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1"
                },
                "name" : "id"
              } ],
              "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "288",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : false
        },
        "name" : "NamedTupleAsEncounter",
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
                "s" : [ "", "define ", "CastEncounterAsEncounter", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "292"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "295"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "296"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "297"
                  },
                  "globalScope" : true
                } ],
                "r" : "291"
              },
              "globalScope" : true
            } ],
            "r" : "290"
          }
        } ],
        "localId" : "290",
        "expression" : {
          "type" : "As",
          "localId" : "291",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "296",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "295",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "292",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : true
        },
        "name" : "CastEncounterAsEncounter",
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
                "s" : [ "", "define ", "CastEncounterAsRecord", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "301"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "304"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "305"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Record" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "306"
                  },
                  "globalScope" : true
                } ],
                "r" : "300"
              },
              "globalScope" : true
            } ],
            "r" : "299"
          }
        } ],
        "localId" : "299",
        "expression" : {
          "type" : "As",
          "localId" : "300",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "305",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "304",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "301",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "306",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Record"
          },
          "strict" : true
        },
        "name" : "CastEncounterAsRecord",
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
                "s" : [ "", "define ", "CastEncounterAsAny", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "310"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "313"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "314"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "System", ".", "Any" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "315"
                  },
                  "globalScope" : true
                } ],
                "r" : "309"
              },
              "globalScope" : true
            } ],
            "r" : "308"
          }
        } ],
        "localId" : "308",
        "expression" : {
          "type" : "As",
          "localId" : "309",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "314",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "313",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "310",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "315",
            "name" : "{urn:hl7-org:elm-types:r1}Any"
          },
          "strict" : true
        },
        "name" : "CastEncounterAsAny",
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
                "s" : [ "", "define ", "CastEncounterAsCondition", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "319"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "322"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "323"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Condition" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "324"
                  },
                  "globalScope" : true
                } ],
                "r" : "318"
              },
              "globalScope" : true
            } ],
            "r" : "317"
          }
        } ],
        "localId" : "317",
        "expression" : {
          "type" : "As",
          "localId" : "318",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "323",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "322",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "319",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "324",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition"
          },
          "strict" : true
        },
        "name" : "CastEncounterAsCondition",
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
                "s" : [ "", "define ", "CastEncounterAsString", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "First", "(" ]
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
                                "s" : [ "[", "Encounter", "]" ]
                              },
                              "globalScope" : true
                            } ],
                            "r" : "328"
                          },
                          "globalScope" : true
                        }, {
                          "name" : "{urn:hl7-org:cql-annotations:r1}s",
                          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                          "value" : {
                            "s" : [ ")" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "331"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "332"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "System", ".", "String" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "333"
                  },
                  "globalScope" : true
                } ],
                "r" : "327"
              },
              "globalScope" : true
            } ],
            "r" : "326"
          }
        } ],
        "localId" : "326",
        "expression" : {
          "type" : "As",
          "localId" : "327",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "332",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "First",
              "localId" : "331",
              "signature" : [ ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "328",
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ],
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "333",
            "name" : "{urn:hl7-org:elm-types:r1}String"
          },
          "strict" : true
        },
        "name" : "CastEncounterAsString",
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
                "s" : [ "", "define ", "CastListAsEncounter", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "[", "Encounter", "]" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "337"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "338"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "339"
                  },
                  "globalScope" : true
                } ],
                "r" : "336"
              },
              "globalScope" : true
            } ],
            "r" : "335"
          }
        } ],
        "localId" : "335",
        "expression" : {
          "type" : "As",
          "localId" : "336",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "338",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Retrieve",
              "localId" : "337",
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ],
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "339",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : true
        },
        "name" : "CastListAsEncounter",
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
                "s" : [ "", "define ", "CastIntervalAsEncounter", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Interval[", "1", ", ", "5", "]" ],
                            "r" : "343"
                          },
                          "globalScope" : true
                        } ],
                        "r" : "345"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "346"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "347"
                  },
                  "globalScope" : true
                } ],
                "r" : "342"
              },
              "globalScope" : true
            } ],
            "r" : "341"
          }
        } ],
        "localId" : "341",
        "expression" : {
          "type" : "As",
          "localId" : "342",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "346",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "345",
              "low" : {
                "type" : "Literal",
                "localId" : "343",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1"
              },
              "high" : {
                "type" : "Literal",
                "localId" : "344",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5"
              },
              "lowClosed" : true,
              "highClosed" : true
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "347",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : true
        },
        "name" : "CastIntervalAsEncounter",
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
                "s" : [ "", "define ", "CastTupleAsEncounter", ": " ]
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
                    "s" : [ "cast " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "{" ]
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
                                "s" : [ "id", ": " ]
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
                                "r" : "352"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "351"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "353"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "354"
                  },
                  "globalScope" : true
                } ],
                "r" : "350"
              },
              "globalScope" : true
            } ],
            "r" : "349"
          }
        } ],
        "localId" : "349",
        "expression" : {
          "type" : "As",
          "localId" : "350",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "353",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "351",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "352",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1"
                },
                "name" : "id"
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "354",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : true
        },
        "name" : "CastTupleAsEncounter",
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
                "s" : [ "", "define ", "CastNamedTupleAsEncounter", ": " ]
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
                        "s" : [ "Echo", "(" ]
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
                            "s" : [ "Encounter", " {" ]
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
                                "s" : [ "id", ": " ]
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
                                "r" : "360"
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
                            "s" : [ "}" ]
                          },
                          "globalScope" : true
                        } ],
                        "r" : "358"
                      },
                      "globalScope" : true
                    }, {
                      "name" : "{urn:hl7-org:cql-annotations:r1}s",
                      "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                      "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                      "value" : {
                        "s" : [ ")" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "361"
                  },
                  "globalScope" : true
                }, {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ " as " ]
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
                        "s" : [ "Simple", ".", "Encounter" ]
                      },
                      "globalScope" : true
                    } ],
                    "r" : "362"
                  },
                  "globalScope" : true
                } ],
                "r" : "357"
              },
              "globalScope" : true
            } ],
            "r" : "356"
          }
        } ],
        "localId" : "356",
        "expression" : {
          "type" : "As",
          "localId" : "357",
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "361",
            "name" : "Echo",
            "signature" : [ ],
            "operand" : [ {
              "type" : "Instance",
              "localId" : "358",
              "element" : [ {
                "value" : {
                  "type" : "Literal",
                  "localId" : "360",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1"
                },
                "name" : "id"
              } ],
              "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "362",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter"
          },
          "strict" : false
        },
        "name" : "CastNamedTupleAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

